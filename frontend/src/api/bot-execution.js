/**
 * Bot Auto-Execution Service
 * Handles automatic order placement for high-confidence bot decisions
 */

import { postOrder } from '@/api/index'

/**
 * Detect if a decision should auto-fire
 * @param {Object} decision - Bot decision object
 * @param {boolean} autonomousTrading - Whether autonomous trading is enabled
 * @returns {boolean} True if order should fire automatically
 */
export function shouldAutoFire(decision, autonomousTrading) {
  if (!autonomousTrading || !decision) return false
  
  const confidence = Number(decision.confidence || 0)
  const isValidAction = ['buy', 'add', 'sell', 'exit', 'trim'].includes(decision.action)
  
  return confidence >= 80 && isValidAction
}

/**
 * Fire an order automatically without showing modal
 * @param {Object} decision - Bot decision object with action, confidence, etc.
 * @param {Object} executionContext - Context with symbol, currentPrice, etc.
 * @returns {Promise<Object>} Order response
 */
export async function fireOrderAutomatically(decision, executionContext) {
  const { symbol, currentPrice, positionQty: heldQty } = executionContext
  const { action, executionPlan, confidence } = decision
  
  if (!symbol) throw new Error('Symbol is required')
  if (!executionPlan) throw new Error('Execution plan is required')
  if (['sell', 'exit', 'trim'].includes(action) && !(Number(heldQty) > 0)) {
    throw new Error(`${action.toUpperCase()} requires an existing position`)
  }
  
  const qty = calculateOrderQtyForBotAction(action, executionPlan, currentPrice, heldQty, executionContext)
  
  if (qty <= 0) throw new Error('Invalid quantity calculated from execution plan')
  
  // Build order intent
  const orderIntent = {
    symbol: String(symbol).toUpperCase(),
    qty: Math.floor(qty),
    side: ['buy', 'add'].includes(action) ? 'buy' : 'sell',
    type: 'market',
    stopLossPct: ['buy', 'add'].includes(action) ? executionPlan.stopLossPct : undefined
  }
  
  try {
    // Fire the order
    const response = await postOrder(orderIntent)
    
    // Log the auto-execution event
    logAutoExecution({
      symbol,
      action,
      confidence,
      qty: orderIntent.qty,
      orderId: response.id || response.orderId || 'unknown',
      timestamp: new Date().toISOString()
    })
    
    return response
  }
  catch (error) {
    console.error('[AUTO-FIRE] Failed to execute order:', error)
    throw error
  }
}

/**
 * Buy/add: notional from execution plan. Exit/trim: use live share count when provided.
 */
function calculateOrderQtyForBotAction(action, executionPlan, currentPrice, positionQty, executionContext = {}) {
  const held = Number(positionQty)
  if (action === 'sell' && Number.isFinite(held) && held > 0) {
    return Math.max(1, Math.floor(held))
  }
  if (action === 'exit' && Number.isFinite(held) && held > 0) {
    return Math.max(1, Math.floor(held))
  }
  if (action === 'trim' && Number.isFinite(held) && held > 0) {
    const frac = Number(executionPlan?.trimFraction)
    const f = Number.isFinite(frac) && frac > 0 && frac <= 1 ? frac : 0.4
    return Math.max(1, Math.floor(held * f))
  }
  return calculateQtyFromExecutionPlan(executionPlan, currentPrice, executionContext)
}

/**
 * Calculate quantity from execution plan (entries / fallback sells)
 * @param {Object} executionPlan - Plan with positionSizePct
 * @param {number} currentPrice - Current stock price
 * @returns {number} Quantity to order
 */
function calculateQtyFromExecutionPlan(executionPlan, currentPrice, executionContext = {}) {
  if (!executionPlan || !executionPlan.positionSizePct) {
    return 1 // Safe fallback
  }
  
  const price = Math.max(Number(currentPrice) || 0, 1)
  const accountSize = Number(executionContext.accountEquity ?? executionContext.portfolioValue ?? executionContext.cash)
  const safeAccountSize = Number.isFinite(accountSize) && accountSize > 0 ? accountSize : 100000
  const maxNotional = Number(executionContext.maxNotional ?? executionPlan.maxNotional ?? 250)
  const cappedNotional = Number.isFinite(maxNotional) && maxNotional > 0 ? maxNotional : 250
  const plannedPositionValue = (executionPlan.positionSizePct / 100) * safeAccountSize
  const positionValue = Math.min(plannedPositionValue, cappedNotional)
  
  return Math.max(1, Math.floor(positionValue / price))
}

/**
 * Log auto-execution to console and send to tracking service
 * @param {Object} event - Auto-execution event details
 */
function logAutoExecution(event) {
  const message = `[AUTO-FIRE] ${event.symbol} ${event.action.toUpperCase()} x${event.qty} @ ${event.confidence}% confidence → Order ${event.orderId}`
  console.log(message, event)
  
  // Event will be persisted via strategy-runs.jsonl logging on backend
}

/**
 * Emit event for UI components to react to auto-execution
 * @param {Object} event - Auto-execution event
 */
export function emitAutoExecutionEvent(event) {
  window.dispatchEvent(new CustomEvent('bot-auto-executed', { detail: event }))
}

/**
 * Show toast notification for auto-execution
 * @param {string} message - Toast message
 * @param {string} type - Toast type: 'success', 'error', 'warning'
 */
export function notifyAutoExecution(message, type = 'success') {
  window.dispatchEvent(new CustomEvent('toast-notification', { 
    detail: { message, type } 
  }))
}
