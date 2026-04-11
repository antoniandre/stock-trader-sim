export const SUPPORTED_ORDER_TYPES = ['market', 'limit']
export const SUPPORTED_ORDER_SIDES = ['buy', 'sell']

function toNumber(value) {
  if (value === undefined || value === null || value === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

export function normalizeOrderIntent(input = {}) {
  const symbol = String(input.symbol || '').trim().toUpperCase()
  const side = String(input.side || '').trim().toLowerCase()
  const type = String(input.type || 'market').trim().toLowerCase()
  const qty = toNumber(input.qty ?? input.quantity)
  const limitPrice = toNumber(input.limitPrice ?? input.limit_price)
  const stopPrice = toNumber(input.stopPrice ?? input.stop_price ?? input.stopLoss)
  const timeInForce = String(input.timeInForce || input.time_in_force || 'gtc').trim().toLowerCase()

  return {
    symbol,
    side,
    type,
    qty,
    limitPrice,
    stopPrice,
    timeInForce,
    raw: input
  }
}

export function validateOrderIntent(orderIntent, { allowTypes = SUPPORTED_ORDER_TYPES, referencePrice = null } = {}) {
  const errors = []

  if (!orderIntent.symbol) errors.push('Symbol is required')
  if (!SUPPORTED_ORDER_SIDES.includes(orderIntent.side)) errors.push('side must be buy or sell')
  if (!allowTypes.includes(orderIntent.type)) errors.push(`Only ${allowTypes.map((item) => `type=${item}`).join(' and ')} are supported`)
  if (!Number.isFinite(orderIntent.qty) || orderIntent.qty <= 0) errors.push('Quantity must be greater than 0')

  if (orderIntent.type === 'limit' && (!Number.isFinite(orderIntent.limitPrice) || orderIntent.limitPrice <= 0)) {
    errors.push('Limit price must be greater than 0 for limit orders')
  }

  const sp = orderIntent.stopPrice
  if (sp != null && sp !== '' && (!Number.isFinite(sp) || sp <= 0)) {
    errors.push('Stop price must be greater than 0 when provided')
  }

  // Bracket stop-loss: buy stops must be below entry; sell (e.g. short) stops above entry.
  if (Number.isFinite(sp) && sp > 0 && referencePrice != null && Number.isFinite(referencePrice) && referencePrice > 0) {
    const entry = orderIntent.type === 'limit' && Number.isFinite(orderIntent.limitPrice) && orderIntent.limitPrice > 0
      ? orderIntent.limitPrice
      : referencePrice
    if (orderIntent.side === 'buy' && sp >= entry) {
      errors.push('Stop loss must be below your entry price for buy orders')
    }
    if (orderIntent.side === 'sell' && sp <= entry) {
      errors.push('Stop loss must be above your entry price for sell orders')
    }
  }

  return {
    valid: errors.length === 0,
    errors
  }
}

export function estimateOrderNotional(orderIntent, fallbackPrice = null) {
  const referencePrice = orderIntent.type === 'limit' ? orderIntent.limitPrice : fallbackPrice
  if (!Number.isFinite(referencePrice) || referencePrice <= 0 || !Number.isFinite(orderIntent.qty)) return null
  return Number((referencePrice * orderIntent.qty).toFixed(2))
}
