/**
 * Live Paper Trading Script
 *
 * Places real market orders on the Alpaca PAPER account using the day-trading
 * bot strategy. Supports 1-min bars (default, ~10–20 trades/day across 5 symbols)
 * or 5-min bars for comparison.
 *
 * Usage:
 *   node scripts/live-paper-trade.mjs          # 1-min bars (default)
 *   node scripts/live-paper-trade.mjs 5Min     # 5-min bars
 *
 * Requires ALPACA_KEY + ALPACA_SECRET in api/.env pointing at PAPER account.
 * Target: 30 complete buy+sell round-trips.
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load env from api/.env
for (const line of readFileSync(join(__dirname, '../api/.env'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const { evaluateDayTradingDecision } = await import('../api/day-trading-bot.js')

// ── Configuration ─────────────────────────────────────────────────────────────

const TIMEFRAME      = process.argv[2] || '1Min'
const BAR_MINUTES    = TIMEFRAME === '5Min' ? 5 : 1
const POLL_MS        = (BAR_MINUTES * 60 + 15) * 1000   // slightly after bar close
const ORB_BARS       = Math.ceil(30 / BAR_MINUTES)       // 30-min opening range
const HTF_STEP       = Math.ceil(15 / BAR_MINUTES)       // bars per 15-min candle
// 10-symbol walk-forward validated universe (2026-04-27). Each has its own optimal backtest config
// but all run here in unified balanced mode. BA/MU/TGT are net-positive at 365d open+mid in combined run.
// CRM: 730d open+mid | BA: 730d open | ARM: 730d trend+open | MU: 365d open | TGT: 500d open
const SYMBOLS        = ['NVDA', 'ABNB', 'SBUX', 'NET', 'INTC', 'CRM', 'BA', 'ARM', 'MU', 'TGT']
const SPY            = 'SPY'
const TARGET_TRIPS   = 30
const RISK_PROFILE   = 'balanced'
const SIZE_PCT       = 0.10    // 10% of equity per position
// 1-min specific overrides — keep 5-min profile defaults untouched
const STRATEGY_PARAMS = BAR_MINUTES === 1
  ? { trailingStopPct: 0.4, enableMeanRevert: true, stopFloorPct: 0.5, rewardTargetPct: 1.2, stagnationMinutes: 15, enableBreakout: false, atrMultiplier: 2.5, breakevenTriggerR: 0.8 }
  : { trailingStopPct: 1.5, breakoutTrailingStopPct: 1.7, stagnationMinutes: 45, atrMultiplier: 2.5, breakoutThresholdAdj: -5, trendSizeMultiplier: 1.0 }
const FILL_TIMEOUT   = 20_000  // ms to wait for order fill
const ORDER_COOLDOWN = 5_000   // ms between placing orders (rate limit guard)
const ROLLING_WINDOW_TRADES = 5
const ROLLING_PAUSE_MS = (BAR_MINUTES === 1 ? 1 : 10) * 86_400_000

const KEY    = process.env.ALPACA_KEY
const SECRET = process.env.ALPACA_SECRET
const BROKER = process.env.ALPACA_BASE_URL    || 'https://paper-api.alpaca.markets'
const DATA   = process.env.ALPACA_API_BASE_URL || 'https://data.alpaca.markets'
const IS_LIVE_BROKER = !/paper-api/i.test(BROKER)
const ALLOW_DIRECT_LIVE_BOT = process.env.ALLOW_DIRECT_LIVE_BOT === 'true'
const BOT_MAX_NOTIONAL = Number(process.env.BOT_MAX_NOTIONAL || process.env.LIVE_TRADING_MAX_NOTIONAL || 1000)
const BOT_MAX_DAILY_LOSS_PCT = Number(process.env.BOT_MAX_DAILY_LOSS_PCT || 1)
const BOT_MAX_CONSECUTIVE_LOSSES = Number(process.env.BOT_MAX_CONSECUTIVE_LOSSES || 2)
const BOT_ALLOWED_SYMBOLS = String(process.env.BOT_ALLOWED_SYMBOLS || SYMBOLS.join(','))
  .split(',')
  .map(symbol => symbol.trim().toUpperCase())
  .filter(Boolean)

if (!KEY || !SECRET) {
  console.error('❌  ALPACA_KEY and ALPACA_SECRET required in api/.env')
  process.exit(1)
}

if (IS_LIVE_BROKER && !ALLOW_DIRECT_LIVE_BOT) {
  console.error('❌  Direct live bot disabled. Use paper mode, or set ALLOW_DIRECT_LIVE_BOT=true only after explicit human approval.')
  process.exit(1)
}

const authHeaders = { 'APCA-API-KEY-ID': KEY, 'APCA-API-SECRET-KEY': SECRET }

// ── Math helpers (mirrors of day-trading-bot internals) ───────────────────────

function avgArr(arr)   { return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 0 }
function round2(v)     { return Math.round((+v + Number.EPSILON) * 100) / 100 }
function fmt(n, d = 2) { return Number(n).toFixed(d) }
function fmtUsd(n)     { return (n >= 0 ? '+$' : '-$') + Math.abs(n).toFixed(2) }

function ema(prices, period) {
  if (!prices.length) return 0
  if (prices.length <= period) return avgArr(prices)
  const k = 2 / (period + 1)
  let e = avgArr(prices.slice(0, period))
  for (let i = period; i < prices.length; i++) e = prices[i] * k + e * (1 - k)
  return e
}

function atr14Pct(candles, idx) {
  let sum = 0, count = 0
  for (let i = Math.max(1, idx - 13); i <= idx; i++) {
    const c = candles[i], p = candles[i - 1]
    if (!c || !p) continue
    sum += Math.max(c.h - c.l, Math.abs(c.h - p.c), Math.abs(c.l - p.c))
    count++
  }
  const atr = count > 0 ? sum / count : 0
  return candles[idx]?.c > 0 ? (atr / candles[idx].c) * 100 : 0
}

function computeVWAP(sessionCandles) {
  let tpv = 0, vol = 0
  for (const c of sessionCandles) { tpv += ((c.h + c.l + c.c) / 3) * c.v; vol += c.v }
  return vol > 0 ? tpv / vol : 0
}

function computeORB(sessionCandles) {
  if (sessionCandles.length < ORB_BARS) return { orbHigh: 0, orbLow: 0 }
  const slice = sessionCandles.slice(0, ORB_BARS)
  return {
    orbHigh: round2(Math.max(...slice.map(c => c.h))),
    orbLow:  round2(Math.min(...slice.map(c => c.l)))
  }
}

function compute15mBullish(sessionCandles) {
  // Take every HTF_STEP-th close to get ~15-min equivalent bars
  const closes = []
  for (let k = sessionCandles.length - 1; k >= 0 && closes.length < 15; k -= HTF_STEP) {
    closes.unshift(sessionCandles[k].c)
  }
  if (closes.length < 10) return null
  return ema(closes, 5) > ema(closes, 10)
}

function isMarketVolatile(spyCandles) {
  const n = spyCandles.length
  if (n < 21) return false
  let atr5 = 0
  for (let k = n - 5; k < n; k++) {
    const c = spyCandles[k], p = spyCandles[k - 1]
    if (!p) continue
    atr5 += Math.max(c.h - c.l, Math.abs(c.h - p.c), Math.abs(c.l - p.c))
  }
  atr5 = (atr5 / 5) / spyCandles[n - 1].c * 100

  let atr20 = 0
  for (let k = n - 20; k < n; k++) {
    const c = spyCandles[k], p = spyCandles[k - 1]
    if (!p) continue
    atr20 += Math.max(c.h - c.l, Math.abs(c.h - p.c), Math.abs(c.l - p.c))
  }
  atr20 = (atr20 / 20) / spyCandles[n - 1].c * 100
  return atr20 > 0 && atr5 > atr20 * 1.3
}

// ── Alpaca REST helpers ───────────────────────────────────────────────────────

async function apiFetch(url, opts = {}) {
  const res = await fetch(url, { headers: authHeaders, ...opts })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`${res.status} ${url}: ${body.slice(0, 120)}`)
  }
  return res.json()
}

function sessionOpenTime() {
  const now = new Date()
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 13, 30, 0))
}

async function fetchBarsFromSessionOpen(symbol) {
  const sessionOpen = sessionOpenTime()
  const todayDate   = sessionOpen.toISOString().slice(0, 10)  // "YYYY-MM-DD"
  const params = new URLSearchParams({
    timeframe: TIMEFRAME,
    feed: 'iex',
    start: sessionOpen.toISOString(),
    limit: '500',
    adjustment: 'raw'
  })
  const data = await apiFetch(`${DATA}/v2/stocks/${symbol}/bars?${params}`)
  // Strictly filter to today's session — prevents yesterday's bars polluting VWAP / ORB
  return (data.bars || [])
    .filter(b => b.t.startsWith(todayDate))
    .map(b => ({ t: b.t, o: +b.o, h: +b.h, l: +b.l, c: +b.c, v: +b.v }))
}

async function getAccount() {
  return apiFetch(`${BROKER}/v2/account`)
}

async function getAlpacaPositions() {
  return apiFetch(`${BROKER}/v2/positions`)
}

async function placeMarketOrder(symbol, side, qty) {
  return apiFetch(`${BROKER}/v2/orders`, {
    method: 'POST',
    headers: { ...authHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ symbol, qty: String(qty), side, type: 'market', time_in_force: 'day' })
  })
}

function approveBotBuy({ symbol, qty, price, state, decision }) {
  const notional = qty * price
  const dailyLossPct = (state.dailyLossesUsd / accountEquity) * 100
  const stopLossPct = Number(decision.executionPlan?.stopLossPct)

  if (!BOT_ALLOWED_SYMBOLS.includes(symbol)) {
    return { approved: false, reason: `${symbol} is not in BOT_ALLOWED_SYMBOLS (${BOT_ALLOWED_SYMBOLS.join(', ')})` }
  }
  if (Number.isFinite(BOT_MAX_NOTIONAL) && BOT_MAX_NOTIONAL > 0 && notional > BOT_MAX_NOTIONAL) {
    return { approved: false, reason: `notional $${fmt(notional)} exceeds BOT_MAX_NOTIONAL=$${fmt(BOT_MAX_NOTIONAL)}` }
  }
  if (Number.isFinite(BOT_MAX_DAILY_LOSS_PCT) && dailyLossPct >= BOT_MAX_DAILY_LOSS_PCT) {
    return { approved: false, reason: `daily loss ${fmt(dailyLossPct)}% exceeds BOT_MAX_DAILY_LOSS_PCT=${BOT_MAX_DAILY_LOSS_PCT}%` }
  }
  if (state.consecutiveLosses >= BOT_MAX_CONSECUTIVE_LOSSES) {
    return { approved: false, reason: `${symbol} has ${state.consecutiveLosses} consecutive losses` }
  }
  if (!Number.isFinite(stopLossPct) || stopLossPct <= 0) {
    return { approved: false, reason: 'decision did not include a valid stopLossPct' }
  }
  return { approved: true, reason: 'approved' }
}

async function getOrderStatus(orderId) {
  return apiFetch(`${BROKER}/v2/orders/${orderId}`)
}

async function cancelAlpacaOrder(orderId) {
  try { await apiFetch(`${BROKER}/v2/orders/${orderId}`, { method: 'DELETE' }) } catch {}
}

async function waitForFill(orderId) {
  const deadline = Date.now() + FILL_TIMEOUT
  while (Date.now() < deadline) {
    await sleep(1500)
    const order = await getOrderStatus(orderId)
    if (order.status === 'filled') return order
    if (['cancelled', 'expired', 'rejected'].includes(order.status)) {
      throw new Error(`Order ${order.status}`)
    }
  }
  await cancelAlpacaOrder(orderId)
  throw new Error('Fill timeout — order cancelled')
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// ── ATR baseline: average of 14-period ATR% over the last 20 candles ─────────
// Used to detect ATR expansion (current ATR significantly above recent baseline).
function atrBaseline20Pct(candles) {
  const n = candles.length
  if (n < 25) return 0
  let sum = 0, count = 0
  for (let i = n - 20; i < n; i++) {
    const v = atr14Pct(candles, i)
    if (v > 0) { sum += v; count++ }
  }
  return count > 0 ? sum / count : 0
}

// Fetch real bid-ask spread from Alpaca IEX quote. Falls back to 0.06% if unavailable.
async function fetchLatestSpread(symbol) {
  try {
    const data = await apiFetch(`${DATA}/v2/stocks/${symbol}/quotes/latest?feed=iex`)
    const q = data.quote ?? data
    const ask = parseFloat(q.ap ?? q.ask_price ?? 0)
    const bid = parseFloat(q.bp ?? q.bid_price ?? 0)
    const mid = (ask + bid) / 2
    return mid > 0 ? ((ask - bid) / mid) * 100 : 0.06
  } catch {
    return 0.06
  }
}

// ── Order placement helpers ───────────────────────────────────────────────────

// Marketable limit buy: limit price slightly above current ask ensures fill with slippage cap.
async function placeLimitOrder(symbol, side, qty, limitPrice) {
  return apiFetch(`${BROKER}/v2/orders`, {
    method: 'POST',
    headers: { ...authHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      symbol,
      qty: String(qty),
      side,
      type: 'limit',
      limit_price: limitPrice.toFixed(2),
      time_in_force: 'day'
    })
  })
}

// Broker-level stop order: becomes a market sell when stop_price is touched.
// Safety net — keeps position protected if the bot process crashes or loses connectivity.
async function placeStopOrder(symbol, qty, stopPrice) {
  return apiFetch(`${BROKER}/v2/orders`, {
    method: 'POST',
    headers: { ...authHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      symbol,
      qty: String(qty),
      side: 'sell',
      type: 'stop',
      stop_price: stopPrice.toFixed(2),
      time_in_force: 'day'
    })
  })
}

// Count symbols currently holding a position (for correlation guard).
function countOpenPositions() {
  let n = 0
  for (const s of symState.values()) if (s.position) n++
  return n
}

// ── Bot state ─────────────────────────────────────────────────────────────────

// Per-symbol trading state
function makeSymbolState() {
  return {
    candles: [],          // all intraday candles from session open
    lastBarTime: null,    // ISO timestamp of last processed bar
    position: null,       // null | { qty, avgEntryPrice, positionOpenedAt, highWatermarkPrice, entrySetup, trimmedHalf }
    consecutiveLosses: 0,
    circuitBreakerUntil: null,
    dailyLossesUsd: 0,
    // Rolling performance gate: if last 5 trades net negative or 0 wins, pause 10 calendar days.
    rollingPnl: [],       // last 5 completed trade P&Ls
    pausedUntilMs: null   // epoch ms; null = not paused
  }
}

const symState = new Map(SYMBOLS.map(s => [s, makeSymbolState()]))
let spyCandles     = []
let accountEquity  = 100_000
let completedTrips = 0
const allTrades    = []
let lastOrderMs    = 0

// ── Dashboard ─────────────────────────────────────────────────────────────────

function printDashboard() {
  console.clear()
  const etTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false })
  console.log(`\n🤖  PAPER BOT  |  ${TIMEFRAME} bars  |  ${etTime} ET  |  ${BROKER.includes('paper') ? 'PAPER 💵' : '⚠️  LIVE'}`)
  console.log(`💰  Equity: $${fmt(accountEquity)}  |  Trips: ${completedTrips}/${TARGET_TRIPS}`)
  console.log('─'.repeat(78))

  for (const sym of SYMBOLS) {
    const s = symState.get(sym)
    const bar = s.candles.at(-1)
    if (!bar) { console.log(`  ${sym.padEnd(6)} (no data)`); continue }
    const price = bar.c
    const pos   = s.position
    if (pos) {
      const pnlUsd = (price - pos.avgEntryPrice) * pos.qty
      const pnlPct = ((price - pos.avgEntryPrice) / pos.avgEntryPrice) * 100
      const heldMin = Math.round((Date.now() - pos.positionOpenedAt) / 60_000)
      const cb = s.circuitBreakerUntil && Date.now() < s.circuitBreakerUntil
      console.log(
        `  ${sym.padEnd(6)} $${fmt(price)}  |  📈 LONG ${pos.qty}sh @ $${fmt(pos.avgEntryPrice)}` +
        `  ${fmtUsd(pnlUsd).padStart(9)} (${fmt(pnlPct)}%)  |  ${heldMin}m` +
        (cb ? '  ⚡CB' : '')
      )
    } else {
      const cb = s.circuitBreakerUntil && Date.now() < s.circuitBreakerUntil
      console.log(`  ${sym.padEnd(6)} $${fmt(price)}  |  — flat${cb ? '  ⚡ circuit breaker' : ''}`)
    }
  }

  console.log('─'.repeat(78))
  if (allTrades.length) {
    console.log('  Recent trades:')
    for (const t of allTrades.slice(-6)) {
      const win = t.pnlUsd > 0 ? '✅' : '❌'
      console.log(`  ${win}  ${t.symbol.padEnd(6)} ${(t.setup || '?').padEnd(12)}  buy $${fmt(t.entryPrice)} → sell $${fmt(t.exitPrice)}  ${fmtUsd(t.pnlUsd).padStart(9)}  ${t.heldMin}m  ${t.reason}`)
    }
  } else {
    console.log('  No completed trades yet — waiting for setups…')
  }
  console.log()
}

// ── Core: evaluate one symbol and trade if warranted ─────────────────────────

async function evaluateAndTrade(sym) {
  const s = symState.get(sym)
  const candles = s.candles
  if (candles.length < 30) return   // insufficient warmup

  const bar = candles.at(-1)
  const prices  = candles.map(c => c.c)
  const volumes = candles.map(c => c.v)
  const nowMs   = new Date(bar.t).getTime() + BAR_MINUTES * 60_000  // bar close time

  const vwap           = computeVWAP(candles)
  const prevVwap       = candles.length >= 2 ? computeVWAP(candles.slice(0, -1)) : vwap
  const vwapDevPct     = vwap > 0 ? ((bar.c - vwap) / vwap) * 100 : 0
  const prevVwapDevPct = prevVwap > 0 ? ((candles.at(-2)?.c ?? bar.c) - prevVwap) / prevVwap * 100 : 0
  const vwapReclaim    = prevVwapDevPct < -0.1 && vwapDevPct > 0.1
  const atrBaseline    = atrBaseline20Pct(candles)
  const spreadPct      = !pos ? await fetchLatestSpread(sym) : 0.06   // only fetch when flat (pre-entry)

  const { orbHigh, orbLow } = computeORB(candles)
  const tf15Bullish        = compute15mBullish(candles)
  const marketVolatileRegime = isMarketVolatile(spyCandles)
  const atrPct             = atr14Pct(candles, candles.length - 1)
  const circuitBreakerActive = !!(s.circuitBreakerUntil && Date.now() < s.circuitBreakerUntil)
  const rollingGateActive    = !!(s.pausedUntilMs && Date.now() < s.pausedUntilMs)
  const dailyLossesPct     = (s.dailyLossesUsd / accountEquity) * 100
  const pos = s.position

  if (rollingGateActive && !pos) {
    const resumeIn = Math.ceil((s.pausedUntilMs - Date.now()) / 86_400_000)
    console.log(`  ⏸  ${sym}: rolling performance gate active — resumes in ~${resumeIn}d`)
    return
  }

  const decision = evaluateDayTradingDecision({
    symbol:              sym,
    riskProfile:         RISK_PROFILE,
    strategyParams:      STRATEGY_PARAMS,
    prices,
    volumes,
    currentPrice:        bar.c,
    currentVolume:       bar.v,
    currentCandleOpen:   bar.o,
    vwap,
    vwapReclaim,
    atrPct,
    atrBaselinePct: atrBaseline,
    spreadPct,
    orbHigh,
    orbLow,
    tf15Bullish,
    marketVolatileRegime,
    circuitBreakerActive,
    dailyLossesPct,
    positionQty:         pos ? pos.qty : 0,
    avgEntryPrice:       pos ? pos.avgEntryPrice : bar.c,
    positionOpenedAt:    pos ? pos.positionOpenedAt : null,
    highWatermarkPrice:  pos ? pos.highWatermarkPrice : 0,
    entrySetup:          pos ? pos.entrySetup : null,
    accountEquity,
    nowMs,
    barDurationMs:       BAR_MINUTES * 60_000,
    disableDailyCatalyst: true
  })

  const { action, setup, scores, reasons } = decision

  // Update high-watermark on every bar while in position
  if (pos && bar.h > pos.highWatermarkPrice) {
    s.position.highWatermarkPrice = bar.h
  }

  // ── BUY ──────────────────────────────────────────────────────────────────
  if (action === 'buy' && !pos) {
    if (Date.now() - lastOrderMs < ORDER_COOLDOWN) return
    // Correlation guard: max 2 concurrent positions to limit correlated drawdowns.
    if (countOpenPositions() >= 2) {
      console.log(`  🔒  ${sym}: correlation guard — 2 positions already open`)
      return
    }
    const cappedAllocation = Math.min(accountEquity * SIZE_PCT, Number.isFinite(BOT_MAX_NOTIONAL) && BOT_MAX_NOTIONAL > 0 ? BOT_MAX_NOTIONAL : accountEquity * SIZE_PCT)
    const qty = Math.max(1, Math.floor(cappedAllocation / bar.c))
    const approval = approveBotBuy({ symbol: sym, qty, price: bar.c, state: s, decision })
    if (!approval.approved) {
      console.log(`  🛑  ${sym}: buy blocked by live governor — ${approval.reason}`)
      return
    }
    // Marketable limit: 0.1% above last close — ensures fill while capping slippage.
    const limitBuyPrice = parseFloat((bar.c * 1.001).toFixed(2))
    console.log(`\n🟢  BUY ${sym}  qty:${qty}  limit:$${fmt(limitBuyPrice)}  setup:${setup}  score:${scores.entry}  spread:${fmt(spreadPct, 3)}%`)
    try {
      const order  = await placeLimitOrder(sym, 'buy', qty, limitBuyPrice)
      const filled = await waitForFill(order.id)
      const fillPrice = parseFloat(filled.filled_avg_price) || bar.c
      const stopLossPct = Number(decision.executionPlan?.stopLossPct) || 1.2
      const brokerStopPrice = parseFloat((fillPrice * (1 - stopLossPct / 100)).toFixed(2))
      s.position = {
        qty,
        avgEntryPrice:     fillPrice,
        positionOpenedAt:  Date.now(),
        highWatermarkPrice: fillPrice,
        entrySetup:        setup,
        trimmedHalf:       false,
        stopOrderId:       null
      }
      // Broker-level stop: protects position if bot crashes or loses connectivity.
      try {
        const stopOrder = await placeStopOrder(sym, qty, brokerStopPrice)
        s.position.stopOrderId = stopOrder.id
        console.log(`  🛡️  Stop @ $${fmt(brokerStopPrice)} (order ${stopOrder.id})`)
      } catch (stopErr) {
        console.log(`  ⚠️  Broker stop failed: ${stopErr.message} — bot logic guards position`)
      }
      lastOrderMs = Date.now()
      console.log(`  ✅  Filled @ $${fmt(fillPrice)}`)
    } catch (err) {
      console.log(`  ❌  Buy failed: ${err.message}`)
    }
    return
  }

  // ── TRIM (partial exit) ───────────────────────────────────────────────────
  if (action === 'trim' && pos && !pos.trimmedHalf) {
    if (Date.now() - lastOrderMs < ORDER_COOLDOWN) return
    const trimQty = Math.floor(pos.qty * 0.5)
    if (trimQty < 1) return
    console.log(`\n🟡  TRIM ${sym}  qty:${trimQty}  ~$${fmt(bar.c)}  ${reasons[0] || ''}`)
    try {
      // Cancel existing broker stop before trimming — qty will change.
      if (pos.stopOrderId) {
        await cancelAlpacaOrder(pos.stopOrderId)
        s.position.stopOrderId = null
      }
      const order  = await placeMarketOrder(sym, 'sell', trimQty)
      const filled = await waitForFill(order.id)
      const fillPrice = parseFloat(filled.filled_avg_price) || bar.c
      const pnlUsd = (fillPrice - pos.avgEntryPrice) * trimQty
      s.position.qty -= trimQty
      s.position.trimmedHalf = true
      lastOrderMs = Date.now()
      // Re-place broker stop for remaining qty.
      const stopLossPct = Number(decision.executionPlan?.stopLossPct) || 1.2
      const brokerStopPrice = parseFloat((pos.avgEntryPrice * (1 - stopLossPct / 100)).toFixed(2))
      try {
        const stopOrder = await placeStopOrder(sym, s.position.qty, brokerStopPrice)
        s.position.stopOrderId = stopOrder.id
        console.log(`  🛡️  Stop re-placed @ $${fmt(brokerStopPrice)} for ${s.position.qty}sh`)
      } catch {}
      console.log(`  ✅  Trimmed @ $${fmt(fillPrice)}  ${fmtUsd(pnlUsd)}`)
    } catch (err) {
      console.log(`  ❌  Trim failed: ${err.message}`)
    }
    return
  }

  // ── EXIT (full close) ─────────────────────────────────────────────────────
  if (action === 'exit' && pos) {
    if (Date.now() - lastOrderMs < ORDER_COOLDOWN) return
    const sellQty = pos.qty
    console.log(`\n🔴  SELL ${sym}  qty:${sellQty}  ~$${fmt(bar.c)}  ${reasons[0] || ''}`)
    try {
      // Cancel broker stop first — we're closing intentionally, stop is no longer needed.
      if (pos.stopOrderId) {
        await cancelAlpacaOrder(pos.stopOrderId).catch(() => {})
        s.position.stopOrderId = null
      }
      const order  = await placeMarketOrder(sym, 'sell', sellQty)
      const filled = await waitForFill(order.id)
      const fillPrice = parseFloat(filled.filled_avg_price) || bar.c
      const pnlUsd = (fillPrice - pos.avgEntryPrice) * sellQty
      const pnlPct = ((fillPrice - pos.avgEntryPrice) / pos.avgEntryPrice) * 100

      // Update circuit breaker, daily loss, and rolling performance gate
      if (pnlUsd < 0) {
        s.dailyLossesUsd += Math.abs(pnlUsd)
        s.consecutiveLosses++
        if (s.consecutiveLosses >= 2) {
          s.circuitBreakerUntil = Date.now() + 30 * 60_000
          console.log(`  ⚡  Circuit breaker: ${sym} paused 30 min`)
        }
      } else {
        s.consecutiveLosses = 0
      }
      // Rolling gate: pause symbols after genuine recent underperformance.
      if (action !== 'trim') {
        s.rollingPnl.push(pnlUsd)
        if (s.rollingPnl.length > ROLLING_WINDOW_TRADES) s.rollingPnl.shift()
        if (s.rollingPnl.length === ROLLING_WINDOW_TRADES) {
          const net  = s.rollingPnl.reduce((a, b) => a + b, 0)
          const wins = s.rollingPnl.filter(p => p > 0).length
          const expectancy = net / s.rollingPnl.length
          const isLosingStreak = wins === 0 || (net < 0 && wins <= 1) || (expectancy < -25 && wins <= 2)
          if (isLosingStreak) {
            s.pausedUntilMs = Date.now() + ROLLING_PAUSE_MS
            console.log(`  ⏸  Rolling gate: ${sym} underperforming — paused ${Math.round(ROLLING_PAUSE_MS / 86_400_000)}d`)
          } else {
            s.pausedUntilMs = null
          }
        }
      }

      allTrades.push({
        symbol: sym, setup: pos.entrySetup,
        entryPrice: pos.avgEntryPrice, exitPrice: fillPrice,
        qty: sellQty, pnlUsd, pnlPct,
        reason: reasons[0] || action,
        heldMin: Math.round((Date.now() - pos.positionOpenedAt) / 60_000)
      })
      completedTrips++
      lastOrderMs = Date.now()
      s.position = null
      console.log(`  ✅  Closed @ $${fmt(fillPrice)}  ${fmtUsd(pnlUsd)} (${fmt(pnlPct)}%)  — trip ${completedTrips}/${TARGET_TRIPS}`)
    } catch (err) {
      console.log(`  ❌  Sell failed: ${err.message}`)
    }
  }
}

// ── Startup: reconcile any existing Alpaca positions ─────────────────────────

async function reconcilePositions() {
  const positions = await getAlpacaPositions()
  for (const p of positions) {
    const sym = p.symbol
    if (!symState.has(sym)) continue
    const s = symState.get(sym)
    const qty = parseInt(p.qty)
    const avgEntry = parseFloat(p.avg_entry_price)
    const currPrice = parseFloat(p.current_price || avgEntry)
    console.log(`⚠️  Adopting existing ${sym} position: ${qty}sh @ $${fmt(avgEntry)}`)
    s.position = {
      qty,
      avgEntryPrice: avgEntry,
      positionOpenedAt: Date.now() - 20 * 60_000,  // assume 20 min ago (conservative)
      highWatermarkPrice: Math.max(avgEntry, currPrice),
      entrySetup: null,
      trimmedHalf: false,
      stopOrderId: null
    }
    // Place broker stop for adopted position using default 1.2% stop.
    const brokerStopPrice = parseFloat((avgEntry * (1 - 1.2 / 100)).toFixed(2))
    try {
      const stopOrder = await placeStopOrder(sym, qty, brokerStopPrice)
      s.position.stopOrderId = stopOrder.id
      console.log(`  🛡️  Stop @ $${fmt(brokerStopPrice)} for adopted position`)
    } catch (err) {
      console.log(`  ⚠️  Stop failed for adopted position: ${err.message}`)
    }
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────

function printSummary() {
  const winners = allTrades.filter(t => t.pnlUsd > 0)
  const losers  = allTrades.filter(t => t.pnlUsd <= 0)
  const net     = allTrades.reduce((s, t) => s + t.pnlUsd, 0)
  const gross   = winners.reduce((s, t) => s + t.pnlUsd, 0)
  const loss    = Math.abs(losers.reduce((s, t) => s + t.pnlUsd, 0))
  const pf      = loss > 0 ? gross / loss : gross > 0 ? Infinity : 0
  const wr      = allTrades.length ? (winners.length / allTrades.length * 100) : 0

  console.log('\n' + '═'.repeat(78))
  console.log(`FINAL SUMMARY — ${TIMEFRAME} bars — ${allTrades.length} round-trips`)
  console.log(`WR: ${fmt(wr)}%  Net: ${fmtUsd(net)}  PF: ${fmt(pf)}  Gross+: $${fmt(gross)}  Gross-: $${fmt(loss)}`)
  console.log('─'.repeat(78))
  for (const t of allTrades) {
    const mark = t.pnlUsd > 0 ? '✅' : '❌'
    console.log(
      `${mark}  ${t.symbol.padEnd(6)}  ${(t.setup || '?').padEnd(12)}` +
      `  $${fmt(t.entryPrice)} → $${fmt(t.exitPrice)}` +
      `  ${fmtUsd(t.pnlUsd).padStart(9)}  ${fmt(t.pnlPct)}%  ${t.heldMin}m  ${t.reason}`
    )
  }
  console.log('═'.repeat(78))
}

// ── Main loop ─────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🚀  Live Paper Trading Bot`)
  console.log(`   Timeframe : ${TIMEFRAME} (poll every ${BAR_MINUTES * 60 + 15}s)`)
  console.log(`   Symbols   : ${SYMBOLS.join(', ')}`)
  console.log(`   Target    : ${TARGET_TRIPS} round-trips`)
  console.log(`   Broker    : ${BROKER}`)
  console.log(`   Governor  : max notional $${fmt(BOT_MAX_NOTIONAL)}, daily loss ${BOT_MAX_DAILY_LOSS_PCT}%, allowed ${BOT_ALLOWED_SYMBOLS.join(', ')}\n`)

  // Wait for regular session if we're running pre-market
  {
    const now = Date.now()
    const open = sessionOpenTime().getTime()
    if (now < open) {
      const waitMin = Math.ceil((open - now) / 60_000)
      console.log(`⏳  Market not open yet — waiting ${waitMin} min until 9:30 AM ET…`)
      while (Date.now() < open) await sleep(15_000)
      console.log('🔔  Market open! Starting bot…\n')
    }
  }

  // Initial data fetch
  console.log('⏳  Fetching intraday bars…')
  for (const sym of [...SYMBOLS, SPY]) {
    try {
      const bars = await fetchBarsFromSessionOpen(sym)
      if (sym === SPY) { spyCandles = bars }
      else             { symState.get(sym).candles = bars; symState.get(sym).lastBarTime = bars.at(-1)?.t ?? null }
      console.log(`   ${sym.padEnd(6)} ${bars.length} bars`)
    } catch (err) {
      console.error(`   ${sym} fetch failed: ${err.message}`)
    }
  }

  // Account equity
  try {
    const acct = await getAccount()
    accountEquity = parseFloat(acct.equity)
    console.log(`\n💰  Account equity: $${fmt(accountEquity)}`)
  } catch (err) {
    console.error(`Account fetch failed: ${err.message}`)
  }

  // Adopt any open positions from a previous run
  await reconcilePositions()

  printDashboard()

  // ── Poll loop ─────────────────────────────────────────────────────────────
  while (completedTrips < TARGET_TRIPS) {
    await sleep(POLL_MS)

    // Refresh bars for all symbols
    for (const sym of [...SYMBOLS, SPY]) {
      try {
        const bars = await fetchBarsFromSessionOpen(sym)
        if (sym === SPY) { spyCandles = bars }
        else             { symState.get(sym).candles = bars }
      } catch (err) {
        console.error(`Bar refresh failed for ${sym}: ${err.message}`)
      }
    }

    // Refresh equity every poll
    try {
      const acct = await getAccount()
      accountEquity = parseFloat(acct.equity)
    } catch {}

    // Evaluate each symbol — only on new bar
    for (const sym of SYMBOLS) {
      const s = symState.get(sym)
      const newBarTime = s.candles.at(-1)?.t
      if (newBarTime && newBarTime !== s.lastBarTime) {
        s.lastBarTime = newBarTime
        await evaluateAndTrade(sym)
      }
    }

    printDashboard()
  }

  printSummary()
}

main().catch(err => {
  console.error('\n💥  Fatal error:', err.message)
  process.exit(1)
})
