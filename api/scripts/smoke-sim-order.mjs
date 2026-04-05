import assert from 'node:assert/strict'

const API_BASE = process.env.SMOKE_API_BASE || 'http://127.0.0.1:3000/api'
const AUTH_TOKEN = process.env.SMOKE_API_BEARER_TOKEN || process.env.API_BEARER_TOKEN || 'stock-trader-sim-dev-token'
const SYMBOL = process.env.SMOKE_SYMBOL || 'AAPL'

async function getJson(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, options)
  const text = await response.text()
  let payload = null
  try {
    payload = text ? JSON.parse(text) : null
  }
  catch {
    payload = text
  }
  return { response, payload }
}

async function main() {
  const health = await getJson('/health')
  assert.equal(health.response.status, 200, 'health route should respond 200')
  assert.equal(health.payload.effectiveSimulation, true, 'smoke test requires simulation mode')

  const beforePortfolio = await getJson('/portfolio')
  assert.equal(beforePortfolio.response.status, 200, 'portfolio route should respond 200 before order')
  const beforeQty = Number((beforePortfolio.payload.stocks || []).find(s => s.symbol === SYMBOL)?.qty || 0)

  const order = await getJson('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`
    },
    body: JSON.stringify({ symbol: SYMBOL, qty: 1, side: 'buy', type: 'market' })
  })

  assert.equal(order.response.status, 200, `order route should respond 200, got ${order.response.status}`)
  assert.equal(order.payload.order?.symbol, SYMBOL, 'order response should include expected symbol')
  assert.equal(String(order.payload.order?.side || '').toLowerCase(), 'buy', 'order side should be buy')

  const afterPortfolio = await getJson('/portfolio')
  assert.equal(afterPortfolio.response.status, 200, 'portfolio route should respond 200 after order')

  const stockEntry = (afterPortfolio.payload.stocks || []).find(s => s.symbol === SYMBOL)
  assert.ok(stockEntry, `portfolio should contain ${SYMBOL} after order`)
  assert.equal(Number(stockEntry.qty), beforeQty + 1, 'portfolio qty should increment by 1 after buy order')

  console.log(JSON.stringify({
    ok: true,
    symbol: SYMBOL,
    beforeQty,
    afterQty: Number(stockEntry.qty),
    orderId: order.payload.order?.id || null,
    simulation: health.payload.effectiveSimulation
  }, null, 2))
}

main().catch(error => {
  console.error('SMOKE_SIM_ORDER_FAILED')
  console.error(error)
  process.exit(1)
})
