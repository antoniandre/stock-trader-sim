/**
 * Bot Auto-Execution Service
 *
 * Handles automatic order execution when bot decisions meet confidence and safety thresholds.
 * Implements safety gates: confidence threshold, position size limits, failure escalation, cooldown.
 */

import { logger } from '../logger.js'

// Configuration
const BOT_EXECUTION_CONFIDENCE_THRESHOLD = 70 // Minimum confidence to consider execution
const CONFIDENCE_THRESHOLD_FAST_PATH = 80 // Skip confirmation modal if autonomous=ON and confidence >= this
const ORDER_COOLDOWN_MS = 5 * 60 * 1000 // 5 minutes between orders for same symbol
const MAX_POSITION_SIZE_PCT = 100 // Never exceed executionPlan.positionSizePct
const FAILURE_RETRY_DELAY_MS = 30 * 1000 // 30 seconds before auto-retry
const MAX_FAILURES_BEFORE_ESCALATION = 2 // Escalate after 2 failures

// Track order cooldowns and failures by symbol
const recentOrderTimestamps = new Map() // symbol -> timestamp
const failureCount = new Map() // symbol -> count
const escalatedSymbols = new Set() // symbols requiring manual intervention

/**
 * Evaluate if an order should be executed based on bot decision and safety gates.
 *
 * @param {Object} decision - Bot decision object
 * @param {string} decision.action - 'buy' or 'sell'
 * @param {number} decision.confidence - 0-100 confidence level
 * @param {Object} decision.executionPlan - {positionSizePct, stopLossPct, etc}
 * @param {Object} decision.metrics - market metrics
 * @param {Object} decision.scores - decision scores
 * @param {boolean} autonomousTrading - User's autonomous trading toggle state
 * @param {Object} accountInfo - {cash, portfolio_value, equity}
 * @param {Object} currentPosition - Current position (if any)
 *
 * @returns {Object} {
 *   shouldExecute: boolean,
 *   shouldShowModal: boolean,
 *   requirementsMet: {autonomousTrading, confidenceThreshold, positionSizeOk, cooldownOk, notEscalated},
 *   reason: string,
 *   qty?: number,
 *   estimatedNotional?: number
 * }
 */
export function evaluateAutoExecution(
  decision,
  autonomousTrading,
  accountInfo,
  currentPosition,
  symbol
) {
  const requirements = {
    autonomousTrading: autonomousTrading,
    confidenceThreshold: decision.confidence >= BOT_EXECUTION_CONFIDENCE_THRESHOLD,
    positionSizeOk: validatePositionSize(decision.executionPlan.positionSizePct),
    cooldownOk: checkCooldown(symbol),
    notEscalated: !escalatedSymbols.has(symbol)
  }

  // Check all safety gates
  const allRequirementsMet = Object.values(requirements).every(r => r === true)

  if (!allRequirementsMet) {
    const failedGates = Object.entries(requirements)
      .filter(([_, met]) => !met)
      .map(([gate]) => gate)
      .join(', ')

    return {
      shouldExecute: false,
      shouldShowModal: false,
      requirementsMet,
      reason: `Safety gates not met: ${failedGates}`
    }
  }

  // Calculate execution details
  const qty = calculateOrderQuantity(decision.executionPlan.positionSizePct, accountInfo, currentPosition)
  const estimatedNotional = qty * decision.metrics.price // Approximate

  // Decision logic for modal vs. auto-execution
  let shouldExecute = false
  let shouldShowModal = false
  let reason = ''

  if (!autonomousTrading) {
    // Autonomous OFF: always show modal, user must click Execute
    shouldShowModal = true
    reason = 'autonomous=OFF, awaiting user confirmation'
  } else if (decision.confidence >= CONFIDENCE_THRESHOLD_FAST_PATH) {
    // Autonomous ON + high confidence: skip modal, fire immediately
    shouldExecute = true
    shouldShowModal = false
    reason = `auto-fired: autonomous=ON, confidence=${decision.confidence}% >= ${CONFIDENCE_THRESHOLD_FAST_PATH}%`
  } else {
    // Autonomous ON + moderate confidence: show modal for confirmation
    shouldShowModal = true
    reason = `autonomous=ON, confidence=${decision.confidence}% < ${CONFIDENCE_THRESHOLD_FAST_PATH}%, awaiting confirmation`
  }

  return {
    shouldExecute,
    shouldShowModal,
    requirementsMet,
    reason,
    qty,
    estimatedNotional
  }
}

/**
 * Validate position size is within acceptable limits.
 *
 * @param {number} positionSizePct - Position size as percentage (0-100)
 * @returns {boolean}
 */
function validatePositionSize(positionSizePct) {
  if (!positionSizePct || positionSizePct <= 0 || positionSizePct > MAX_POSITION_SIZE_PCT) {
    return false
  }
  return true
}

/**
 * Check if symbol is in cooldown period.
 *
 * @param {string} symbol - Stock symbol
 * @returns {boolean} true if cooldown is OK (not in cooldown)
 */
function checkCooldown(symbol) {
  const lastOrder = recentOrderTimestamps.get(symbol)
  if (!lastOrder) return true

  const timeSinceLastOrder = Date.now() - lastOrder
  return timeSinceLastOrder >= ORDER_COOLDOWN_MS
}

/**
 * Record a new order execution timestamp for cooldown tracking.
 *
 * @param {string} symbol - Stock symbol
 */
export function recordOrderExecution(symbol) {
  recentOrderTimestamps.set(symbol, Date.now())
  // Reset failure count on successful execution
  failureCount.set(symbol, 0)
}

/**
 * Record an order execution failure and manage escalation.
 *
 * @param {string} symbol - Stock symbol
 * @returns {Object} {escalated: boolean, failureCount: number, maxReached: boolean}
 */
export function recordOrderFailure(symbol) {
  const count = (failureCount.get(symbol) || 0) + 1
  failureCount.set(symbol, count)

  const escalated = count >= MAX_FAILURES_BEFORE_ESCALATION
  if (escalated) {
    escalatedSymbols.add(symbol)
  }

  return {
    escalated,
    failureCount: count,
    maxReached: count >= MAX_FAILURES_BEFORE_ESCALATION
  }
}

/**
 * Clear escalation for a symbol (user manually resolved).
 *
 * @param {string} symbol - Stock symbol
 */
export function clearEscalation(symbol) {
  escalatedSymbols.delete(symbol)
  failureCount.set(symbol, 0)
}

/**
 * Calculate order quantity based on position size percentage.
 *
 * @param {number} positionSizePct - Desired position size (0-100)
 * @param {Object} accountInfo - {cash, portfolio_value}
 * @param {Object} currentPosition - Current position (if any)
 * @returns {number} Order quantity
 */
function calculateOrderQuantity(positionSizePct, accountInfo, currentPosition) {
  // Allocate percentage of available cash or equity
  const allocatedCapital = (accountInfo.portfolio_value || accountInfo.cash) * (positionSizePct / 100)

  // Simple approximation: assume current price ~$50 for sizing
  // In practice, this should use the actual market price from decision.metrics
  const approxPrice = currentPosition?.price || 50
  const qty = Math.floor(allocatedCapital / approxPrice)

  return Math.max(qty, 1) // At least 1 share
}

/**
 * Format audit log for bot auto-execution.
 *
 * @param {Object} options
 * @returns {Object} Audit log record
 */
export function createAuditLog({
  symbol,
  decision,
  execution,
  autonomous,
  requirementsMet,
  reason
}) {
  return {
    type: 'bot-auto-execution',
    recordedAt: new Date().toISOString(),
    symbol,
    autonomous,
    decision: {
      action: decision.action,
      confidence: decision.confidence,
      marketRegime: decision.marketRegime
    },
    order: {
      qty: execution.qty,
      side: execution.side,
      type: execution.type || 'market',
      estimatedNotional: execution.estimatedNotional
    },
    execution: {
      status: execution.status || 'submitted',
      orderId: execution.orderId,
      requirementsMet,
      reason
    }
  }
}

export {
  BOT_EXECUTION_CONFIDENCE_THRESHOLD,
  CONFIDENCE_THRESHOLD_FAST_PATH,
  ORDER_COOLDOWN_MS,
  FAILURE_RETRY_DELAY_MS
}
