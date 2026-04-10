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
  const isValidAction = decision.action === 'buy' || decision.action === 'sell'
  
  return confidence >= 80 && isValidAction
}

/**
 * Fire an order automatically without showing modal
 * @param {Object} decision - Bot decision object with action, confidence, etc.
 * @param {Object} executionContext - Context with symbol, currentPrice, etc.
 * @returns {Promise<Object>} Order response
 */
export async function fireOrderAutomatically(decision, executionContext) {
  const { symbol, currentPrice } = executionContext
  const { action, executionPlan, confidence } = decision
  
  if (!symbol) throw new Error('Symbol is required')
  if (!executionPlan) throw new Error('Execution plan is required')
  
  // Calculate quantity from execution plan
  const qty = calculateQtyFromExecutionPlan(executionPlan, currentPrice)
  
  if (qty <= 0) throw new Error('Invalid quantity calculated from execution plan')
  
  // Build order intent
  const orderIntent = {
    symbol: String(symbol).toUpperCase(),
    qty: Math.floor(qty),
    side: action === 'buy' ? 'buy' : 'sell',
    type: 'market'
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
 * Calculate quantity from execution plan
 * @param {Object} executionPlan - Plan with positionSizePct
 * @param {number} currentPrice - Current stock price
 * @returns {number} Quantity to order
 */
function calculateQtyFromExecutionPlan(executionPlan, currentPrice) {
  if (!executionPlan || !executionPlan.positionSizePct) {
    return 10 // Default fallback
  }
  
  // Simplified: assume 10k account, scale by position size %
  const accountSize = 10000
  const positionValue = (executionPlan.positionSizePct / 100) * accountSize
  
  return Math.max(1, Math.floor(positionValue / Math.max(currentPrice, 1)))
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
