/**
 * Test: Bot Position Awareness
 * 
 * Tests whether bot correctly adjusts recommendations when user already has a position.
 * PROBLEM: Bot recommends "BUY" even when positionQty > 0
 * EXPECTED: Bot should recommend "HOLD" or "ADD" (not "BUY") when already positioned
 */

import { evaluateDayTradingDecision } from './api/day-trading-bot.js'

// Mock market data (strong uptrend, should generate BUY signal)
const mockPrices = [
  150, 150.5, 151, 151.5, 152, 152.5, 153, 153.5, 154, 154.5,
  155, 155.5, 156, 156.5, 157, 157.5, 158, 158.5, 159, 159.5,
  160, 160.5, 161, 161.5, 162, 162.5, 163, 163.5, 164, 164.5
]

const mockVolumes = Array(30).fill(1000000)

// Test Case 1: No position (should BUY)
console.log('=== TEST 1: No Position (should BUY) ===')
const decision1 = evaluateDayTradingDecision({
  symbol: 'TEST',
  riskProfile: 'balanced',
  currentPrice: 164.5,
  prices: mockPrices,
  volumes: mockVolumes,
  currentVolume: 1000000,
  spreadPct: 0.08,
  positionQty: 0,
  avgEntryPrice: 0
})

console.log('Action:', decision1.action)
console.log('Confidence:', decision1.confidence)
console.log('Recommendation:', decision1.recommendation?.label)
console.log('Entry Score:', decision1.scores.entry)
console.log('Risk Score:', decision1.scores.risk)
console.log('Metrics:', {
  shortTrendPct: decision1.metrics.shortTrendPct,
  mediumTrendPct: decision1.metrics.mediumTrendPct,
  longTrendPct: decision1.metrics.longTrendPct
})
console.log('')

// Test Case 2: Already LONG 100 shares at avg entry $160 (should HOLD, not BUY)
console.log('=== TEST 2: Already LONG Position (positionQty=100, avgEntry=$160) ===')
const decision2 = evaluateDayTradingDecision({
  symbol: 'TEST',
  riskProfile: 'balanced',
  currentPrice: 164.5,
  prices: mockPrices,
  volumes: mockVolumes,
  currentVolume: 1000000,
  spreadPct: 0.08,
  positionQty: 100,        // ← CRITICAL: Already have 100 shares
  avgEntryPrice: 160       // ← Entry was at $160, now at $164.5 = +2.8% profit
})

console.log('Action:', decision2.action)
console.log('Confidence:', decision2.confidence)
console.log('Recommendation:', decision2.recommendation?.label)
console.log('Recommendation Side:', decision2.recommendation?.side)
console.log('Entry Score:', decision2.scores.entry)
console.log('Risk Score:', decision2.scores.risk)
console.log('Management Score:', decision2.scores.management)
console.log('Metrics:', {
  currentPrice: decision2.metrics.currentPrice,
  unrealizedPnLPct: decision2.metrics.unrealizedPnLPct,
  shortTrendPct: decision2.metrics.shortTrendPct,
  mediumTrendPct: decision2.metrics.mediumTrendPct
})
console.log('Reasons:', decision2.reasons)
console.log('')

// Test Case 3: Already LONG but trend broken (should EXIT)
console.log('=== TEST 3: Already LONG but Trend Breaks (should EXIT) ===')
const breakdownPrices = [
  160, 160.5, 161, 161.5, 162, 162.5, 163, 163.5, 164, 164.5,
  165, 165.5, 166, 166.5, 166.2, 165.8, 165.4, 164.9, 164.5, 164.0, // ← Sharp reversal
  163.5, 163, 162.5, 162, 161.5, 161, 160.5, 160, 159.5, 159
]

const decision3 = evaluateDayTradingDecision({
  symbol: 'TEST',
  riskProfile: 'balanced',
  currentPrice: 159,
  prices: breakdownPrices,
  volumes: mockVolumes,
  currentVolume: 1000000,
  spreadPct: 0.08,
  positionQty: 100,
  avgEntryPrice: 160
})

console.log('Action:', decision3.action)
console.log('Confidence:', decision3.confidence)
console.log('Recommendation:', decision3.recommendation?.label)
console.log('Metrics:', {
  currentPrice: decision3.metrics.currentPrice,
  unrealizedPnLPct: decision3.metrics.unrealizedPnLPct,
  shortTrendPct: decision3.metrics.shortTrendPct,
  mediumTrendPct: decision3.metrics.mediumTrendPct
})
console.log('Reasons:', decision3.reasons)
console.log('')

// VERDICT
console.log('=== VERDICT ===')
console.log('✓ Test 1 (no position):', decision1.action === 'buy' ? 'PASS (BUY as expected)' : `FAIL (got ${decision1.action}, expected BUY)`)
console.log('? Test 2 (has position):', decision2.action === 'hold' || decision2.action === 'add' 
  ? `PASS (${decision2.action} as expected)` 
  : `⚠️  FAIL (got ${decision2.action}, should NOT be BUY when already positioned)`)
console.log('? Test 3 (trend break):', decision3.action === 'exit' 
  ? 'PASS (EXIT as expected)' 
  : `FAIL (got ${decision3.action}, expected EXIT)`)

// Critical bug check
if (decision2.action === 'buy') {
  console.log('\n🔴 CRITICAL BUG FOUND:')
  console.log('Bot recommends BUY even though positionQty=100 (already long)')
  console.log('This violates the position awareness requirement!')
  console.log('Bot is treating this as a NO-POSITION scenario.')
}
