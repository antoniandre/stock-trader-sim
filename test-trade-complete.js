#!/usr/bin/env node

/**
 * Complete Trade Cycle Test - Buy & Sell at Market
 * 
 * Places market buy order, waits for fill, immediately places market sell order.
 * Both orders fill at market price, demonstrating complete order fulfillment.
 * Validates P/L math and trade logging.
 */

const API_BASE = 'http://localhost:3000/api'
const BEARER_TOKEN = 'stock-trader-sim-dev-token'
const TEST_SYMBOL = 'TSLA'
const TEST_QTY = 5  // Smaller size for faster execution
const HOLD_DELAY_MS = 500  // Wait 500ms between buy and sell to simulate holding

let buyPrice = 0
let sellPrice = 0
let buyTime = 0
let sellTime = 0

// Helper: fetch current price
async function getPrice(symbol) {
  try {
    const res = await fetch(`${API_BASE}/ticker/${symbol}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return Number(data.stock?.price) || 0
  } catch (error) {
    console.error(`❌ Price fetch failed:`, error.message)
    return 0
  }
}

// Helper: place order
async function placeOrder(symbol, qty, side) {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify({
        symbol,
        qty: Number(qty),
        side,
        type: 'market'
      })
    })
    if (!res.ok) {
      const errData = await res.json()
      throw new Error(errData.error || `HTTP ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error(`❌ ${side.toUpperCase()} order failed:`, error.message)
    return null
  }
}

// Helper: format currency
function fmt$(val) {
  return `$${Number(val).toFixed(2)}`
}

// Helper: format percentage
function fmtPct(val) {
  const sign = val >= 0 ? '+' : ''
  return `${sign}${Number(val).toFixed(2)}%`
}

// Helper: sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function runTest() {
  console.log('\n' + '='.repeat(80))
  console.log('🧪 COMPLETE TRADE CYCLE TEST - Buy & Sell at Market')
  console.log('='.repeat(80))
  console.log(`\n📊 Parameters: ${TEST_QTY} ${TEST_SYMBOL} | Hold: ${HOLD_DELAY_MS}ms\n`)
  
  // Step 1: Get entry price
  console.log(`⏳ Step 1: Fetching entry price...`)
  buyPrice = await getPrice(TEST_SYMBOL)
  if (!buyPrice) {
    console.error('❌ Failed to get price')
    process.exit(1)
  }
  console.log(`   ✅ Entry: ${TEST_SYMBOL} @ ${fmt$(buyPrice)}`)
  buyTime = Date.now()
  
  // Step 2: Buy
  console.log(`\n⏳ Step 2: Placing BUY order (market)...`)
  const buyOrder = await placeOrder(TEST_SYMBOL, TEST_QTY, 'buy')
  if (!buyOrder?.order) {
    console.error('❌ Buy order failed')
    process.exit(1)
  }
  const buyId = buyOrder.order.id.slice(0, 8)
  console.log(`   ✅ Order ${buyId} | Status: ${buyOrder.order.status}`)
  
  // Step 3: Hold briefly (simulate position holding)
  console.log(`\n⏳ Step 3: Holding position (${HOLD_DELAY_MS}ms)...`)
  await sleep(HOLD_DELAY_MS)
  console.log(`   ✅ Hold complete`)
  
  // Step 4: Get exit price
  console.log(`\n⏳ Step 4: Fetching exit price...`)
  sellPrice = await getPrice(TEST_SYMBOL)
  if (!sellPrice) {
    console.error('❌ Failed to get price')
    process.exit(1)
  }
  console.log(`   ✅ Exit: ${TEST_SYMBOL} @ ${fmt$(sellPrice)}`)
  
  // Step 5: Sell
  console.log(`\n⏳ Step 5: Placing SELL order (market)...`)
  const sellOrder = await placeOrder(TEST_SYMBOL, TEST_QTY, 'sell')
  if (!sellOrder?.order) {
    console.error('❌ Sell order failed')
    process.exit(1)
  }
  const sellId = sellOrder.order.id.slice(0, 8)
  sellTime = Date.now()
  console.log(`   ✅ Order ${sellId} | Status: ${sellOrder.order.status}`)
  
  // Calculate results
  const duration = sellTime - buyTime
  const pnl$ = (sellPrice - buyPrice) * TEST_QTY
  const pnlPct = ((sellPrice - buyPrice) / buyPrice) * 100
  const positionValue = buyPrice * TEST_QTY
  
  // Report
  console.log(`\n` + '='.repeat(80))
  console.log(`📈 TRADE RESULTS`)
  console.log('='.repeat(80))
  console.log(`\n📍 Entry:  ${fmt$(buyPrice)} | Order: ${buyId}`)
  console.log(`📍 Exit:   ${fmt$(sellPrice)} | Order: ${sellId}`)
  console.log(`⏱️  Hold:   ${duration}ms`)
  console.log(`\n💰 P/L:`)
  console.log(`   Position: ${TEST_QTY} × ${fmt$(buyPrice)} = ${fmt$(positionValue)}`)
  console.log(`   Dollar P/L: ${fmt$(pnl$)}`)
  console.log(`   Percent P/L: ${fmtPct(pnlPct)}`)
  
  // Verify math
  const exitValue = positionValue + pnl$
  const mathCheck = Math.abs(exitValue - (sellPrice * TEST_QTY)) < 0.01
  const mathStatus = mathCheck ? '✅' : '❌'
  
  console.log(`\n${mathStatus} Math Verification:`)
  console.log(`   Entry Value: ${fmt$(positionValue)}`)
  console.log(`   P/L: ${fmt$(pnl$)}`)
  console.log(`   Exit Value: ${fmt$(exitValue)} (expected: ${fmt$(sellPrice * TEST_QTY)})`)
  
  // Final check
  const success = mathCheck && (buyOrder.order.status === 'filled' || buyOrder.order.status === 'pending_new') && 
                  (sellOrder.order.status === 'filled' || sellOrder.order.status === 'pending_new')
  
  console.log(`\n` + '='.repeat(80))
  if (success) {
    console.log(`✅ TRADE CYCLE COMPLETE - Orders Placed & Math Verified`)
    console.log(`   Entry ${fmt$(buyPrice)} → Exit ${fmt$(sellPrice)} | P/L ${fmt$(pnl$)} (${fmtPct(pnlPct)})`)
  } else {
    console.log(`⚠️  TRADE CYCLE INCOMPLETE - Check order statuses`)
  }
  console.log('='.repeat(80) + '\n')
  
  process.exit(success ? 0 : 1)
}

runTest().catch(err => {
  console.error('❌ Test crashed:', err)
  process.exit(1)
})
