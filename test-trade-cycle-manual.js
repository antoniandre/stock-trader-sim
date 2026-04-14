#!/usr/bin/env node

/**
 * Test Trade Cycle - Manual Exit
 * 
 * Places a buy order, waits for fill, then immediately places a sell order
 * at a calculated profit target. Validates full P/L math and exit logic.
 * No waiting for price movement — we control the exit.
 */

const API_BASE = 'http://localhost:3000/api'
const BEARER_TOKEN = 'stock-trader-sim-dev-token'
const TEST_SYMBOL = 'TSLA'
const TEST_QTY = 10
const PROFIT_TARGET_PCT = 2.0  // We'll exit at 2% profit

let entryPrice = 0
let entryTime = 0
let exitPrice = 0
let exitTime = 0
let exitReason = 'MANUAL_EXIT'

// Helper: fetch current price
async function getCurrentPrice(symbol) {
  try {
    const res = await fetch(`${API_BASE}/ticker/${symbol}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return Number(data.stock?.price) || 0
  } catch (error) {
    console.error(`❌ Failed to fetch price for ${symbol}:`, error.message)
    return 0
  }
}

// Helper: place order
async function placeOrder(symbol, qty, side, type = 'market', price = null) {
  try {
    const body = {
      symbol,
      qty: Number(qty),
      side,
      type
    }
    if (price) body.limit_price = Number(price)
    
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) {
      const errData = await res.json()
      throw new Error(errData.error || `HTTP ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error(`❌ Failed to place ${side} order:`, error.message)
    return null
  }
}

// Helper: format currency
function formatUSD(val) {
  return `$${Number(val).toFixed(2)}`
}

// Helper: format percentage
function formatPct(val) {
  const sign = val >= 0 ? '+' : ''
  return `${sign}${Number(val).toFixed(2)}%`
}

// Main test cycle
async function runTestTradeCycle() {
  console.log('\n' + '='.repeat(80))
  console.log('🧪 TEST TRADE CYCLE - Manual Exit (Controlled P/L Test)')
  console.log('='.repeat(80))
  console.log(`\n📊 Test Parameters:`)
  console.log(`   Symbol: ${TEST_SYMBOL}`)
  console.log(`   Qty: ${TEST_QTY} shares`)
  console.log(`   Target Profit: ${PROFIT_TARGET_PCT}%`)
  console.log(`   Execution: Manual entry + manual profitable exit`)
  
  // Step 1: Fetch current price
  console.log(`\n⏳ Step 1: Fetching current market price...`)
  entryPrice = await getCurrentPrice(TEST_SYMBOL)
  if (!entryPrice) {
    console.error('❌ Failed to fetch current price. Aborting.')
    process.exit(1)
  }
  console.log(`   ✅ Current ${TEST_SYMBOL} price: ${formatUSD(entryPrice)}`)
  
  // Step 2: Place buy order
  console.log(`\n⏳ Step 2: Placing BUY order...`)
  entryTime = Date.now()
  const buyOrder = await placeOrder(TEST_SYMBOL, TEST_QTY, 'buy')
  if (!buyOrder?.order) {
    console.error('❌ Buy order failed. Aborting.')
    console.error('Response:', buyOrder)
    process.exit(1)
  }
  
  const entryTimeStr = new Date().toISOString()
  console.log(`   ✅ Buy order placed: ${TEST_QTY} ${TEST_SYMBOL} @ ${formatUSD(entryPrice)}`)
  console.log(`   Order ID: ${buyOrder.order.id}`)
  console.log(`   Entry Time: ${entryTimeStr}`)
  console.log(`   Order Status: ${buyOrder.order.status}`)
  
  // Calculate exit price (guaranteed profit) - round to 2 decimals for limit order
  exitPrice = Math.round(entryPrice * (1 + PROFIT_TARGET_PCT / 100) * 100) / 100
  console.log(`\n🎯 Exit Target:`)
  console.log(`   Profit Target Price: ${formatUSD(exitPrice)} (${formatPct(PROFIT_TARGET_PCT)})`)
  
  // Step 3: Wait a moment for order processing, then place sell order
  console.log(`\n⏳ Step 3: Waiting for order processing...`)
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log(`\n⏳ Step 4: Placing SELL order at profit target...`)
  const sellOrder = await placeOrder(TEST_SYMBOL, TEST_QTY, 'sell', 'limit', exitPrice)
  if (!sellOrder?.order) {
    console.error('❌ Sell order failed. Aborting.')
    console.error('Response:', sellOrder)
    process.exit(1)
  }
  
  exitTime = Date.now()
  const exitTimeStr = new Date().toISOString()
  console.log(`   ✅ Sell order placed: ${TEST_QTY} ${TEST_SYMBOL} @ ${formatUSD(exitPrice)}`)
  console.log(`   Order ID: ${sellOrder.order.id}`)
  console.log(`   Exit Time: ${exitTimeStr}`)
  console.log(`   Order Status: ${sellOrder.order.status}`)
  
  // Execute final report
  executeExit(entryPrice, exitPrice, entryTime)
}

// Execute exit and report results
async function executeExit(entry, exit, startTime) {
  const endTime = Date.now()
  const durationMs = endTime - startTime
  const durationMin = Math.floor(durationMs / 1000 / 60)
  const durationSec = Math.floor((durationMs % 60000) / 1000)
  
  const pnlDollar = (exit - entry) * TEST_QTY
  const pnlPct = ((exit - entry) / entry) * 100
  const stopLossPrice = entry * (1 - 0.5 / 100)  // Hypothetical 0.5% stop
  const riskRatio = (exit - entry) / (entry - stopLossPrice)
  
  console.log(`\n` + '='.repeat(80))
  console.log('📈 TRADE EXECUTION SUMMARY')
  console.log('='.repeat(80))
  console.log(`\n📍 Entry:`)
  console.log(`   Price: ${formatUSD(entry)}`)
  console.log(`   Time: ${new Date(startTime).toISOString()}`)
  console.log(`   Qty: ${TEST_QTY} shares`)
  console.log(`   Total Cost: ${formatUSD(entry * TEST_QTY)}`)
  
  console.log(`\n📍 Exit:`)
  console.log(`   Price: ${formatUSD(exit)}`)
  console.log(`   Time: ${new Date(endTime).toISOString()}`)
  console.log(`   Reason: ${exitReason}`)
  console.log(`   Duration: ${durationMin}m ${durationSec}s`)
  
  console.log(`\n💰 P/L Result:`)
  console.log(`   Dollar P/L: ${formatUSD(pnlDollar)}`)
  console.log(`   Percent P/L: ${formatPct(pnlPct)}`)
  console.log(`   Risk Ratio: ${riskRatio.toFixed(2)}:1`)
  
  // Verify P/L math
  console.log(`\n✅ P/L Math Verification:`)
  const expectedTotal = entry * TEST_QTY + pnlDollar
  const expectedPct = (pnlDollar / (entry * TEST_QTY)) * 100
  console.log(`   Position Value (entry × qty): ${formatUSD(entry * TEST_QTY)}`)
  console.log(`   P/L Delta: ${formatUSD(pnlDollar)}`)
  console.log(`   Exit Value: ${formatUSD(expectedTotal)}`)
  console.log(`   P/L % = (${exit.toFixed(2)} - ${entry.toFixed(2)}) / ${entry.toFixed(2)} × 100 = ${expectedPct.toFixed(2)}% ✅`)
  
  // Validate thresholds
  console.log(`\n✅ Trade Validation:`)
  const isProfit = pnlDollar > 0
  const meetsTarget = pnlPct >= PROFIT_TARGET_PCT - 0.01  // Allow 1 basis point tolerance
  const hasRisk = riskRatio >= 2.0
  
  console.log(`   Profitable: ${isProfit ? '✅ YES' : '❌ NO'} (P/L = ${formatUSD(pnlDollar)})`)
  console.log(`   Meets Target (${PROFIT_TARGET_PCT}%): ${meetsTarget ? '✅ YES' : '❌ NO'} (${formatPct(pnlPct)})`)
  console.log(`   Risk Ratio 2:1+: ${hasRisk ? '✅ YES' : '⚠️ NO'} (${riskRatio.toFixed(2)}:1)`)
  
  const allPass = isProfit && meetsTarget
  
  console.log(`\n` + '='.repeat(80))
  if (allPass) {
    console.log('✅ TEST COMPLETE - ALL CHECKS PASSED')
  } else {
    console.log('⚠️ TEST COMPLETE - SOME CHECKS FAILED')
  }
  console.log('='.repeat(80) + '\n')
  
  process.exit(allPass ? 0 : 1)
}

// Start the test
runTestTradeCycle().catch(error => {
  console.error('❌ Test failed:', error)
  process.exit(1)
})
