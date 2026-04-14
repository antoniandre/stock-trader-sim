/**
 * Risk Management Framework
 * 
 * Handles position sizing, P/L ratio logic, stop-loss/profit-target exits,
 * and daily risk limits for trading operations.
 */

import { state } from '../config.js'
import { logger } from '../logger.js'

// Risk Configuration - Core parameters for position sizing and exit logic
export const RISK_CONFIG = {
  riskPercentPerTrade: 0.02,        // 2% of account equity per trade
  profitTargetPercent: 0.03,        // 3% profit target (exit rule)
  stopLossPercent: 0.015,           // 1.5% stop loss (exit rule)
  maxLossPerTrade: 0.015,           // Max 1.5% account loss per trade (hard cap)
  dailyLossLimit: 0.05,             // Max 5% daily losses (halt entries)
  testOrderSize: 10,                // Hardcoded order size for testing
  maxHoldDurationMinutes: 60        // Max hold time before timeout exit
}

// Track active trades and daily losses
export const tradeState = {
  activeTrades: new Map(),          // symbol -> { entryPrice, qty, entryTime, ... }
  dailyLosses: 0,                   // Cumulative losses for current trading day
  lastResetDate: new Date().toDateString()
}

/**
 * Calculate position size based on risk parameters
 * Formula: positionSize = (accountEquity * riskPercent) / (entryPrice - stopLossPrice)
 * 
 * @param {number} entryPrice - Entry price for the position
 * @param {number} accountEquity - Current account equity
 * @returns {Object} { qty: number, maxLoss: number, valid: boolean, reason?: string }
 */
export function calculatePositionSize(entryPrice, accountEquity = 10000) {
  if (!Number.isFinite(entryPrice) || entryPrice <= 0) {
    return { qty: 0, maxLoss: 0, valid: false, reason: 'Invalid entry price' }
  }

  const stopLossPrice = entryPrice * (1 - RISK_CONFIG.stopLossPercent)
  const riskAmount = accountEquity * RISK_CONFIG.riskPercentPerTrade
  const priceRisk = entryPrice - stopLossPrice

  if (priceRisk <= 0) {
    return { qty: 0, maxLoss: 0, valid: false, reason: 'Stop loss >= entry price' }
  }

  const maxQty = Math.floor(riskAmount / priceRisk)
  const actualMaxLoss = maxQty * priceRisk

  return {
    qty: maxQty,
    maxLoss: actualMaxLoss,
    valid: true,
    stopLossPrice: Number(stopLossPrice.toFixed(4))
  }
}

/**
 * Validate order against risk limits before execution
 * 
 * @param {string} symbol - Stock symbol
 * @param {number} qty - Order quantity
 * @param {number} entryPrice - Entry price
 * @param {number} accountEquity - Current account equity
 * @returns {Object} { approved: boolean, reason?: string }
 */
export function validateRiskLimits(symbol, qty, entryPrice, accountEquity = 10000) {
  // Reset daily counter if new day
  const today = new Date().toDateString()
  if (today !== tradeState.lastResetDate) {
    tradeState.dailyLosses = 0
    tradeState.lastResetDate = today
  }

  // Check max loss per trade
  const stopLossPrice = entryPrice * (1 - RISK_CONFIG.stopLossPercent)
  const maxLossPerTrade = qty * (entryPrice - stopLossPrice)
  const maxLossPercent = maxLossPerTrade / accountEquity

  if (maxLossPercent > RISK_CONFIG.maxLossPerTrade) {
    return {
      approved: false,
      reason: `Max loss per trade exceeded: ${(maxLossPercent * 100).toFixed(2)}% > ${(RISK_CONFIG.maxLossPerTrade * 100).toFixed(2)}%`
    }
  }

  // Check daily loss limit
  if (tradeState.dailyLosses >= accountEquity * RISK_CONFIG.dailyLossLimit) {
    return {
      approved: false,
      reason: `Daily loss limit reached: $${tradeState.dailyLosses.toFixed(2)} >= $${(accountEquity * RISK_CONFIG.dailyLossLimit).toFixed(2)}`
    }
  }

  return { approved: true }
}

/**
 * Record a new active trade
 * 
 * @param {string} symbol - Stock symbol
 * @param {number} qty - Order quantity
 * @param {number} entryPrice - Entry price
 * @param {string} orderId - Order ID from broker
 * @returns {Object} Trade record
 */
export function recordActiveTrade(symbol, qty, entryPrice, orderId) {
  const trade = {
    symbol,
    qty,
    entryPrice,
    orderId,
    entryTime: new Date(),
    entryTimestamp: new Date().toISOString(),
    unrealizedPnl: 0,
    unrealizedPnlPercent: 0,
    status: 'active'
  }

  tradeState.activeTrades.set(orderId, trade)
  logger.info({ trade }, `Trade recorded: ${symbol} x${qty} @ $${entryPrice}`)
  return trade
}

/**
 * Calculate exit signal for a trade based on profit target, stop loss, or timeout
 * 
 * @param {Object} trade - Active trade record
 * @param {number} currentPrice - Current market price
 * @returns {Object|null} { reason: string, exitPrice: number } or null if no exit
 */
export function calculateExitSignal(trade, currentPrice) {
  if (!trade || trade.status !== 'active') return null

  const unrealizedPnlPercent = (currentPrice - trade.entryPrice) / trade.entryPrice

  // Check profit target
  if (unrealizedPnlPercent >= RISK_CONFIG.profitTargetPercent) {
    return {
      reason: 'profit-target',
      exitPrice: currentPrice,
      pnlPercent: unrealizedPnlPercent,
      message: `Profit target reached: +${(unrealizedPnlPercent * 100).toFixed(2)}%`
    }
  }

  // Check stop loss
  if (unrealizedPnlPercent <= -RISK_CONFIG.stopLossPercent) {
    return {
      reason: 'stop-loss',
      exitPrice: currentPrice,
      pnlPercent: unrealizedPnlPercent,
      message: `Stop loss hit: ${(unrealizedPnlPercent * 100).toFixed(2)}%`
    }
  }

  // Check timeout (60 minutes)
  const holdDuration = (new Date() - trade.entryTime) / 1000 / 60 // minutes
  if (holdDuration > RISK_CONFIG.maxHoldDurationMinutes) {
    return {
      reason: 'timeout',
      exitPrice: currentPrice,
      pnlPercent: unrealizedPnlPercent,
      message: `Position held for ${Math.round(holdDuration)} minutes, exiting on timeout`
    }
  }

  return null
}

/**
 * Complete a trade and log results
 * 
 * @param {string} orderId - Order ID
 * @param {number} exitPrice - Exit price
 * @param {string} exitReason - Reason for exit
 * @returns {Object} Completed trade record with P/L analysis
 */
export function completeTrade(orderId, exitPrice, exitReason) {
  const trade = tradeState.activeTrades.get(orderId)
  if (!trade) {
    logger.warn({ orderId }, 'Trade not found for completion')
    return null
  }

  const pnlDollars = trade.qty * (exitPrice - trade.entryPrice)
  const pnlPercent = (exitPrice - trade.entryPrice) / trade.entryPrice * 100
  const duration = (new Date() - trade.entryTime) / 1000 / 60 // minutes
  const riskRatio = Math.abs(pnlPercent / 1.5) // Vs 1.5% stop loss

  const result = {
    symbol: trade.symbol,
    qty: trade.qty,
    entryPrice: trade.entryPrice,
    exitPrice: exitPrice,
    pnlDollars: Number(pnlDollars.toFixed(2)),
    pnlPercent: Number(pnlPercent.toFixed(2)),
    duration: Number(duration.toFixed(1)),
    exitReason,
    riskRatio: Number(riskRatio.toFixed(2)),
    entryTime: trade.entryTimestamp,
    exitTime: new Date().toISOString(),
    orderId: trade.orderId,
    status: pnlDollars >= 0 ? 'win' : 'loss'
  }

  // Track daily losses
  if (result.pnlDollars < 0) {
    tradeState.dailyLosses += Math.abs(result.pnlDollars)
  }

  // Mark trade as completed
  trade.status = 'completed'
  tradeState.activeTrades.set(orderId, { ...trade, ...result })

  logger.info(result, `Trade completed: ${result.symbol}`)
  return result
}

/**
 * Get all completed trades (for results endpoint)
 * 
 * @returns {Array} Completed trade records
 */
export function getCompletedTrades() {
  return Array.from(tradeState.activeTrades.values())
    .filter(t => t.status === 'completed')
}

/**
 * Get active trades (for real-time monitoring)
 * 
 * @returns {Array} Active trade records
 */
export function getActiveTrades() {
  return Array.from(tradeState.activeTrades.values())
    .filter(t => t.status === 'active')
}

/**
 * Clear all trade state (for testing)
 */
export function clearTradeState() {
  tradeState.activeTrades.clear()
  tradeState.dailyLosses = 0
  tradeState.lastResetDate = new Date().toDateString()
}
