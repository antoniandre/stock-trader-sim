/**
 * Live Paper Trading Bot — Broad universe aligned to backtest report
 *
 * Source: docs/reports/BOT-TRADE-REPORT-2026-04-29-5min-broad-500trades-730d-observe-filter-confirmationrequired-neutral-extendedbreakout-setup-breakout.md
 *   - Universe v2 (2026-04-29): replaced ASML, BAC, GS, XOM, CAT (0 trades or 0% WR in 730d backtest)
 *     with MSTR, APP, HOOD, RBLX, SOFI (higher ADR, better intraday breakout characteristics)
 *   - Strategy params + filters: same as live-paper-trade-validated.mjs / run-100-trades 5Min observe branch
 *
 * Key differences from live-paper-trade-validated.mjs:
 *   - 40-symbol broad scan vs 9-symbol WF subset
 *   - Optional BOT_RUN_MS: stop after N ms (e.g. 40 min = 2400000) while still printing summary
 *
 * Usage:
 *   node scripts/live-paper-trade-broad-2026-04-29.mjs
 *   BOT_RUN_MS=2400000 BOT_MAX_NOTIONAL=1000 node scripts/live-paper-trade-broad-2026-04-29.mjs
 *
 * Requires ALPACA_KEY + ALPACA_SECRET in api/.env pointing at PAPER account.
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

for (const line of readFileSync(join(__dirname, '../api/.env'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const { evaluateDayTradingDecision } = await import('../../api/day-trading-bot.js')
const { recordSymbolProfileOutcome } = await import('../../api/services/symbol-profile-learning.js')

// ── Validated configuration ────────────────────────────────────────────────────

const TIMEFRAME   = '5Min'
const BAR_MINUTES = 5
const POLL_MS     = (BAR_MINUTES * 60 + 15) * 1000  // slightly after bar close
const ORB_BARS    = Math.ceil(30 / BAR_MINUTES)      // 30-min opening range
const HTF_STEP    = Math.ceil(15 / BAR_MINUTES)      // bars per 15-min candle

// ─────────────────────────────────────────────────────────────────────────────
// UNIVERSE POLICY — READ BEFORE EDITING THIS LIST
//
// ✅ You may ADD symbols to this list.
// ✅ You may REPLACE a symbol only if adding a strictly better substitute
//    AND the reason is documented inline.
// ❌ NEVER REMOVE a symbol just because it had a bad backtest period or
//    was inactive today. The bot's behavior-classifier profiles
//    (sustainedSell, liquiditySlippageRisk, thinChop, regimeInstability,
//    falseBreakoutProne, noisyHighBeta) are the intelligence that prevents
//    bad trades on weak symbols. Removing symbols is NOT the fix — improving
//    pattern recognition IS.
//
// Target: keep 50 symbols. Add to grow, do not shrink.
// ─────────────────────────────────────────────────────────────────────────────
//
// v1 (original 40): core mega-cap tech + SaaS + crypto + fintech + macro names.
// v2 (2026-04-29): added 10 high-momentum, high-ADR names to expand opportunity
//   set while keeping every original symbol:
//   SPOT  — Spotify, strong momentum, frequently cited as breakout candidate
//   MSTR  — MicroStrategy, high-ADR BTC proxy, strong directional breakout moves
//   APP   — AppLovin, sustained high-beta momentum, good ADR
//   HOOD  — Robinhood, retail/crypto-adjacent, high participation on breakout days
//   RBLX  — Roblox, tech/gaming mid-cap with breakout frequency
//   SOFI  — SoFi Technologies, fintech momentum, tight spreads
//   MARA  — Marathon Digital, BTC miner, very high ADR
//   CELH  — Celsius Holdings, high-growth consumer, breakout-prone
//   RDDT  — Reddit, high-beta post-IPO momentum
//   HIMS  — Hims & Hers, health-tech momentum, strong breakout days
const BROAD_50_SYMBOLS = [
  // ── Original 40 (never remove) ────────────────────────────────────────────
  'NVDA', 'GOOGL', 'AMZN', 'META', 'MSFT', 'AAPL', 'AMD', 'TSLA', 'AVGO', 'NFLX',
  'CRM', 'ORCL', 'ADBE', 'QCOM', 'INTC', 'MU', 'ARM', 'TSM', 'ASML', 'PLTR',
  'COIN', 'SMCI', 'SHOP', 'UBER', 'ABNB', 'PANW', 'CRWD', 'NOW', 'DDOG', 'SNOW',
  'NET', 'MDB', 'ISRG', 'PYPL', 'JPM', 'BAC', 'GS', 'XOM', 'CVX', 'CAT',
  // ── Added v2 2026-04-29 (high-ADR momentum expansion) ─────────────────────
  'SPOT', 'MSTR', 'APP', 'HOOD', 'RBLX', 'SOFI', 'MARA', 'CELH', 'RDDT', 'HIMS'
]
let SYMBOLS = String(process.env.BOT_SYMBOLS || BROAD_50_SYMBOLS.join(','))
  .split(',').map(s => s.trim().toUpperCase()).filter(Boolean)

// Validated strategy params — v2 (2026-04-28), tuned to 5Min bars over 365-day backtest.
const STRATEGY_PARAMS = {
  trailingStopPct:       1.0,   // was 1.5: tighter trailing stop locks profits sooner
  breakoutTrailingStopPct: 1.2, // was 1.7: tighter for breakout entries
  stagnationMinutes:     20,    // was 25→45: cut stuck losers 5 min faster (+$42 improvement)
  atrMultiplier:         2.5,
  breakoutThresholdAdj:  -5,    // structural gates (MACD, ATR, double-breakout) replaced simple threshold
  trendThresholdBoost:   20,    // trend entry bar raised to 75 — very selective
  trendSizeMultiplier:   0.8,   // 80% position for trend entries
  breakoutSizeMultiplier: 0.75, // 75% position for breakout entries — reduces per-trade risk
  earlyReversalMinutes:  10,    // was 12: tighter pre-stop cut (10min/0.25 best in walk-forward)
  earlyReversalFraction: 0.25,  // was 0.30: exit at −25% of stop
  // Classifier labels + honor weak/first-leg breakout blocks (matches run-100-trades observe backtests).
  behaviorClassifierMode: 'observe',
  observeBreakoutClassifierBlocks: true,
  // Time gate: only enter during open+mid windows (9:30–11:30 AM ET) — validated 2026-04-29.
  lastEntryUtcMin: 15 * 60 + 30   // 11:30 AM ET = 15:30 UTC
}

// Only allow these behavior profiles — block falseBreakoutProne, regimeInstability, noisyHighBeta.
const ALLOWED_PROFILES = new Set(['confirmationRequired', 'neutral', 'extendedBreakout'])

// Only trade breakout setup — trend and momentum-pilot have negative expectancy in backtest.
const ALLOWED_SETUPS = new Set(['breakout'])

// ── Time gate (validated 2026-04-29) ──────────────────────────────────────────
// Backtest: open+mid (9:30–11:30 ET) = 45.45% WR, PF 1.88, Sharpe 3.96 — ALL targets pass.
// PM slot (13:00–14:00 ET) showed 25–40% WR and negative expectancy; excluded.
// Entries are allowed from session open (13:30 UTC) until 15:30 UTC (11:30 AM ET).
// The decision engine SESSION_LAST_ENTRY_UTC_MIN already caps at 18:00 UTC;
// we tighten to 15:30 UTC (= 60+30+30 min from open = 11:30 AM ET).
const TRADE_WINDOW_LAST_ENTRY_UTC_MIN = 15 * 60 + 30  // 11:30 AM ET = end of mid window

const SPY             = 'SPY'
const TARGET_TRIPS    = Number(process.env.BOT_TARGET_TRIPS || 30)
const RUN_DEADLINE_MS = Number(process.env.BOT_RUN_MS || 0) // 0 = until TARGET_TRIPS only
const RISK_PROFILE    = 'balanced'
const SIZE_PCT        = 0.10    // 10% of equity per position
const ALLOW_LATE_ENTRIES = process.env.BOT_ALLOW_LATE_ENTRIES === 'true'
const FILL_TIMEOUT    = 20_000
const ORDER_COOLDOWN  = 5_000
const ROLLING_WINDOW_TRADES = 4  // pause after 4-trade losing streak
const ROLLING_PAUSE_MS = 20 * 86_400_000  // 20-day cooldown (was 10)

const KEY    = process.env.ALPACA_KEY
const SECRET = process.env.ALPACA_SECRET
const BROKER = process.env.ALPACA_BASE_URL     || 'https://paper-api.alpaca.markets'
const DATA   = process.env.ALPACA_API_BASE_URL || 'https://data.alpaca.markets'
const IS_LIVE_BROKER = !/paper-api/i.test(BROKER)
const ALLOW_DIRECT_LIVE_BOT = process.env.ALLOW_DIRECT_LIVE_BOT === 'true'
const BOT_MAX_NOTIONAL        = Number(process.env.BOT_MAX_NOTIONAL        || 1000)
const BOT_MAX_DAILY_LOSS_PCT  = Number(process.env.BOT_MAX_DAILY_LOSS_PCT  || 1)
const BOT_MAX_CONSECUTIVE_LOSSES = Number(process.env.BOT_MAX_CONSECUTIVE_LOSSES || 2)
let BOT_ALLOWED_SYMBOLS = String(process.env.BOT_ALLOWED_SYMBOLS || SYMBOLS.join(','))
  .split(',').map(s => s.trim().toUpperCase()).filter(Boolean)

if (!KEY || !SECRET) {
  console.error('❌  ALPACA_KEY and ALPACA_SECRET required in api/.env')
  process.exit(1)
}
if (IS_LIVE_BROKER && !ALLOW_DIRECT_LIVE_BOT) {
  console.error('❌  Live broker detected. Set ALLOW_DIRECT_LIVE_BOT=true for live trading (use paper only).')
  process.exit(1)
}

const authHeaders = { 'APCA-API-KEY-ID': KEY, 'APCA-API-SECRET-KEY': SECRET }

// ── Math helpers ──────────────────────────────────────────────────────────────

function avgArr(arr)   { return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 0 }
function round2(v)     { return Math.round((+v + Number.EPSILON) * 100) / 100 }
function fmt(n, d = 2) { return Number(n).toFixed(d) }
function fmtUsd(n)     { return (n >= 0 ? '+$' : '-$') + Math.abs(n).toFixed(2) }
function sleep(ms)     { return new Promise(r => setTimeout(r, ms)) }

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
  const todayDate   = sessionOpen.toISOString().slice(0, 10)
  const params = new URLSearchParams({
    timeframe: TIMEFRAME, feed: 'iex',
    start: sessionOpen.toISOString(), limit: '500', adjustment: 'raw'
  })
  const data = await apiFetch(`${DATA}/v2/stocks/${symbol}/bars?${params}`)
  return (data.bars || [])
    .filter(b => b.t.startsWith(todayDate))
    .map(b => ({ t: b.t, o: +b.o, h: +b.h, l: +b.l, c: +b.c, v: +b.v }))
}

async function fetchWarmupBars(symbol) {
  const sessionOpen = sessionOpenTime()
  const start = new Date(sessionOpen.getTime() - 3 * 24 * 60 * 60 * 1000)
  const params = new URLSearchParams({
    timeframe: TIMEFRAME, feed: 'iex',
    start: start.toISOString(), end: sessionOpen.toISOString(),
    limit: '50', adjustment: 'raw'
  })
  const data = await apiFetch(`${DATA}/v2/stocks/${symbol}/bars?${params}`)
  return (data.bars || []).map(b => ({ t: b.t, o: +b.o, h: +b.h, l: +b.l, c: +b.c, v: +b.v }))
}

async function getAccount()          { return apiFetch(`${BROKER}/v2/account`) }
async function getAlpacaPositions()  { return apiFetch(`${BROKER}/v2/positions`) }

async function placeMarketOrder(symbol, side, qty) {
  return apiFetch(`${BROKER}/v2/orders`, {
    method: 'POST',
    headers: { ...authHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ symbol, qty: String(qty), side, type: 'market', time_in_force: 'day' })
  })
}

async function placeLimitOrder(symbol, side, qty, limitPrice) {
  return apiFetch(`${BROKER}/v2/orders`, {
    method: 'POST',
    headers: { ...authHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      symbol, qty: String(qty), side, type: 'limit',
      limit_price: limitPrice.toFixed(2), time_in_force: 'day'
    })
  })
}

async function placeStopOrder(symbol, qty, stopPrice) {
  return apiFetch(`${BROKER}/v2/orders`, {
    method: 'POST',
    headers: { ...authHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      symbol, qty: String(qty), side: 'sell', type: 'stop',
      stop_price: stopPrice.toFixed(2), time_in_force: 'day'
    })
  })
}

async function getOrderStatus(orderId) { return apiFetch(`${BROKER}/v2/orders/${orderId}`) }

async function cancelAlpacaOrder(orderId) {
  try { await apiFetch(`${BROKER}/v2/orders/${orderId}`, { method: 'DELETE' }) } catch {}
}

async function waitForFill(orderId) {
  const deadline = Date.now() + FILL_TIMEOUT
  while (Date.now() < deadline) {
    await sleep(1500)
    const order = await getOrderStatus(orderId)
    if (order.status === 'filled') return order
    if (['cancelled', 'expired', 'rejected'].includes(order.status)) throw new Error(`Order ${order.status}`)
  }
  await cancelAlpacaOrder(orderId)
  throw new Error('Fill timeout — order cancelled')
}

async function fetchLatestSpread(symbol) {
  try {
    const data = await apiFetch(`${DATA}/v2/stocks/${symbol}/quotes/latest?feed=iex`)
    const q = data.quote ?? data
    const ask = parseFloat(q.ap ?? q.ask_price ?? 0)
    const bid = parseFloat(q.bp ?? q.bid_price ?? 0)
    const mid = (ask + bid) / 2
    return mid > 0 ? ((ask - bid) / mid) * 100 : 0.06
  } catch { return 0.06 }
}

// ── Bot state ─────────────────────────────────────────────────────────────────

function makeSymbolState() {
  return {
    candles: [], warmupCandles: [], lastBarTime: null,
    position: null,
    consecutiveLosses: 0, circuitBreakerUntil: null,
    dailyLossesUsd: 0,
    rollingPnl: [], pausedUntilMs: null,
    lastSkipReason: null, lastRegime: null, lastProfile: null, lastRollingExpectancy: 0
  }
}

const symState     = new Map(SYMBOLS.map(s => [s, makeSymbolState()]))
let spyCandles     = []
let spyWarmupCandles = []
let accountEquity  = 100_000
let completedTrips = 0
const allTrades    = []
let lastOrderMs    = 0

function countOpenPositions() {
  let n = 0
  for (const s of symState.values()) if (s.position) n++
  return n
}

function approveBotBuy({ symbol, qty, price, state }) {
  const notional = qty * price
  const dailyLossPct = (state.dailyLossesUsd / accountEquity) * 100
  if (!BOT_ALLOWED_SYMBOLS.includes(symbol))
    return { approved: false, reason: `${symbol} not in BOT_ALLOWED_SYMBOLS` }
  if (BOT_MAX_NOTIONAL > 0 && notional > BOT_MAX_NOTIONAL)
    return { approved: false, reason: `notional $${fmt(notional)} > BOT_MAX_NOTIONAL $${fmt(BOT_MAX_NOTIONAL)}` }
  if (dailyLossPct >= BOT_MAX_DAILY_LOSS_PCT)
    return { approved: false, reason: `daily loss ${fmt(dailyLossPct)}% ≥ limit ${BOT_MAX_DAILY_LOSS_PCT}%` }
  if (state.consecutiveLosses >= BOT_MAX_CONSECUTIVE_LOSSES)
    return { approved: false, reason: `${state.consecutiveLosses} consecutive losses` }
  return { approved: true, reason: 'approved' }
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function printDashboard() {
  console.clear()
  const etTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false })
  console.log(`\n🤖  BROAD-50 PAPER BOT  |  ${TIMEFRAME} bars  |  ${etTime} ET  |  PAPER 💵`)
  console.log(`   Universe  : ${SYMBOLS.join(', ')}`)
  console.log(`   Filter    : setup=breakout  profile=${[...ALLOWED_PROFILES].join(',')}`)
  console.log(`💰  Equity: $${fmt(accountEquity)}  |  Trips: ${completedTrips}/${TARGET_TRIPS}`)
  console.log('─'.repeat(80))

  for (const sym of SYMBOLS) {
    const s = symState.get(sym)
    const bar = s?.candles?.at(-1)
    if (!bar) { console.log(`  ${sym.padEnd(6)} (no data)`); continue }
    const pos = s.position
    if (pos) {
      const pnlUsd = (bar.c - pos.avgEntryPrice) * pos.qty
      const pnlPct = ((bar.c - pos.avgEntryPrice) / pos.avgEntryPrice) * 100
      const heldMin = Math.round((Date.now() - pos.positionOpenedAt) / 60_000)
      console.log(
        `  ${sym.padEnd(6)} $${fmt(bar.c)}  |  📈 LONG ${pos.qty}sh @ $${fmt(pos.avgEntryPrice)}` +
        `  ${fmtUsd(pnlUsd).padStart(9)} (${fmt(pnlPct)}%)  ${heldMin}m`
      )
    } else {
      const paused = s.pausedUntilMs && Date.now() < s.pausedUntilMs ? '  ⏸' : ''
      const cb     = s.circuitBreakerUntil && Date.now() < s.circuitBreakerUntil ? '  ⚡CB' : ''
      const info   = s.lastRegime ? ` [${s.lastRegime}${s.lastProfile ? '/' + s.lastProfile : ''}]` : ''
      const skip   = s.lastSkipReason ? `  ⏭ ${s.lastSkipReason.slice(0, 50)}` : ''
      console.log(`  ${sym.padEnd(6)} $${fmt(bar.c)}  |  — flat${paused}${cb}${info}${skip}`)
    }
  }

  console.log('─'.repeat(80))
  if (allTrades.length) {
    for (const t of allTrades.slice(-5)) {
      const mark = t.pnlUsd > 0 ? '✅' : '❌'
      console.log(`  ${mark}  ${t.symbol.padEnd(6)}  ${(t.setup || '?').padEnd(10)}  $${fmt(t.entryPrice)} → $${fmt(t.exitPrice)}  ${fmtUsd(t.pnlUsd).padStart(9)}  ${t.heldMin}m  ${t.reason}`)
    }
  } else {
    console.log('  No completed trades yet — waiting for breakout setups…')
  }
  console.log()
}

// ── Core evaluation loop ──────────────────────────────────────────────────────

async function evaluateAndTrade(sym) {
  const s = symState.get(sym)
  if (!s) return
  const candles = s.candles
  if (candles.length < 1) return

  const allCandles = [...s.warmupCandles, ...s.candles]
  if (allCandles.length < 15) return

  const bar    = candles.at(-1)
  const prices  = allCandles.map(c => c.c)
  const volumes = allCandles.map(c => c.v)
  const nowMs   = new Date(bar.t).getTime() + BAR_MINUTES * 60_000

  const vwap           = computeVWAP(candles)
  const prevVwap       = candles.length >= 2 ? computeVWAP(candles.slice(0, -1)) : vwap
  const vwapDevPct     = vwap > 0 ? ((bar.c - vwap) / vwap) * 100 : 0
  const prevVwapDevPct = prevVwap > 0 ? ((candles.at(-2)?.c ?? bar.c) - prevVwap) / prevVwap * 100 : 0
  const vwapReclaim    = prevVwapDevPct < -0.1 && vwapDevPct > 0.1
  const atrBaseline    = atrBaseline20Pct(allCandles)
  const pos            = s.position
  const spreadPct      = !pos ? await fetchLatestSpread(sym) : 0.06

  const { orbHigh, orbLow } = computeORB(candles)
  const tf15Bullish          = compute15mBullish(allCandles)
  const marketVolatileRegime = isMarketVolatile([...spyWarmupCandles, ...spyCandles])
  const atrPct               = atr14Pct(allCandles, allCandles.length - 1)
  const circuitBreakerActive = !!(s.circuitBreakerUntil && Date.now() < s.circuitBreakerUntil)
  const rollingGateActive    = !!(s.pausedUntilMs && Date.now() < s.pausedUntilMs)
  const dailyLossesPct       = (s.dailyLossesUsd / accountEquity) * 100
  const rollingExpectancy    = s.rollingPnl.length
    ? s.rollingPnl.reduce((a, b) => a + b, 0) / s.rollingPnl.length : 0

  if (rollingGateActive && !pos) {
    const resumeIn = Math.ceil((s.pausedUntilMs - Date.now()) / 86_400_000)
    s.lastSkipReason = `rolling gate — resumes in ~${resumeIn}d`
    return
  }

  const decision = evaluateDayTradingDecision({
    symbol: sym, riskProfile: RISK_PROFILE, strategyParams: STRATEGY_PARAMS,
    prices, volumes,
    currentPrice: bar.c, currentVolume: bar.v, currentCandleOpen: bar.o,
    vwap, vwapReclaim, atrPct, atrBaselinePct: atrBaseline,
    spreadPct, orbHigh, orbLow, tf15Bullish, marketVolatileRegime,
    circuitBreakerActive, dailyLossesPct, rollingExpectancy,
    positionQty: pos ? pos.qty : 0,
    avgEntryPrice: pos ? pos.avgEntryPrice : bar.c,
    positionOpenedAt: pos ? pos.positionOpenedAt : null,
    highWatermarkPrice: pos ? pos.highWatermarkPrice : 0,
    entrySetup: pos ? pos.entrySetup : null,
    accountEquity, nowMs, barDurationMs: BAR_MINUTES * 60_000,
    disableDailyCatalyst: true
  })

  const { action, setup, scores, reasons, marketRegime, effectiveProfile, symbolBehavior } = decision
  // behaviorProfile is the intra-decision classifier (confirmationRequired / neutral / extendedBreakout /
  // falseBreakoutProne / regimeInstability / noisyHighBeta).  This is what run-100-trades.mjs filters
  // on with --behavior-filter and is the correct property to check against ALLOWED_PROFILES.
  // effectiveProfile.name is a separate symbol-level overlay (default / false-breakout-watch / …)
  // that uses a completely different naming system and must NOT be used for the whitelist check.
  const behaviorProfileName = symbolBehavior?.profile || 'neutral'
  s.lastProfile = behaviorProfileName
  s.lastRegime  = marketRegime ?? null
  s.lastRollingExpectancy = rollingExpectancy

  // Update high-watermark
  if (pos && bar.h > pos.highWatermarkPrice) s.position.highWatermarkPrice = bar.h

  // ── BUY ────────────────────────────────────────────────────────────────────
  if (action === 'buy' && !pos) {
    // Setup filter: breakout only
    if (!ALLOWED_SETUPS.has(setup)) {
      s.lastSkipReason = `setup ${setup} not in whitelist (breakout only)`
      return
    }
    // Profile filter: block falseBreakoutProne, regimeInstability, noisyHighBeta
    if (!ALLOWED_PROFILES.has(behaviorProfileName)) {
      s.lastSkipReason = `behavior ${behaviorProfileName} blocked — not in whitelist`
      return
    }

    if (Date.now() - lastOrderMs < ORDER_COOLDOWN) return
    if (countOpenPositions() >= 2) {
      console.log(`  🔒  ${sym}: correlation guard — 2 positions open`)
      return
    }

    const cappedAlloc = Math.min(accountEquity * SIZE_PCT, BOT_MAX_NOTIONAL > 0 ? BOT_MAX_NOTIONAL : accountEquity * SIZE_PCT)
    const qty = Math.max(1, Math.floor(cappedAlloc / bar.c))
    const approval = approveBotBuy({ symbol: sym, qty, price: bar.c, state: s })
    if (!approval.approved) {
      console.log(`  🛑  ${sym}: buy blocked — ${approval.reason}`)
      return
    }

    const limitBuyPrice = parseFloat((bar.c * 1.001).toFixed(2))
    console.log(`\n🟢  BUY ${sym}  qty:${qty}  limit:$${fmt(limitBuyPrice)}  setup:${setup}  behavior:${behaviorProfileName}  profile:${effectiveProfile?.name}  score:${scores?.entry}`)
    try {
      const order  = await placeLimitOrder(sym, 'buy', qty, limitBuyPrice)
      const filled = await waitForFill(order.id)
      const fillPrice    = parseFloat(filled.filled_avg_price) || bar.c
      const stopLossPct  = Number(decision.executionPlan?.stopLossPct) || 1.2
      const brokerStop   = parseFloat((fillPrice * (1 - stopLossPct / 100)).toFixed(2))
      s.position = {
        qty, avgEntryPrice: fillPrice,
        positionOpenedAt: Date.now(), highWatermarkPrice: fillPrice,
        entrySetup: setup, trimmedHalf: false, stopOrderId: null
      }
      try {
        const stopOrder = await placeStopOrder(sym, qty, brokerStop)
        s.position.stopOrderId = stopOrder.id
        console.log(`  🛡️  Stop @ $${fmt(brokerStop)} (${stopOrder.id})`)
      } catch (err) {
        console.log(`  ⚠️  Broker stop failed: ${err.message}`)
      }
      lastOrderMs = Date.now()
      console.log(`  ✅  Filled @ $${fmt(fillPrice)}`)
    } catch (err) {
      console.log(`  ❌  Buy failed: ${err.message}`)
    }
    return
  }

  // ── TRIM ───────────────────────────────────────────────────────────────────
  if (action === 'trim' && pos && !pos.trimmedHalf) {
    if (Date.now() - lastOrderMs < ORDER_COOLDOWN) return
    const trimQty = Math.floor(pos.qty * 0.5)
    if (trimQty < 1) return
    console.log(`\n🟡  TRIM ${sym}  qty:${trimQty}  ~$${fmt(bar.c)}  ${reasons[0] || ''}`)
    try {
      if (pos.stopOrderId) { await cancelAlpacaOrder(pos.stopOrderId); s.position.stopOrderId = null }
      const order  = await placeMarketOrder(sym, 'sell', trimQty)
      const filled = await waitForFill(order.id)
      const fillPrice = parseFloat(filled.filled_avg_price) || bar.c
      s.position.qty -= trimQty
      s.position.trimmedHalf = true
      const stopLossPct = Number(decision.executionPlan?.stopLossPct) || 1.2
      const brokerStop  = parseFloat((pos.avgEntryPrice * (1 - stopLossPct / 100)).toFixed(2))
      try {
        const stopOrder = await placeStopOrder(sym, s.position.qty, brokerStop)
        s.position.stopOrderId = stopOrder.id
      } catch {}
      lastOrderMs = Date.now()
      console.log(`  ✅  Trimmed @ $${fmt(fillPrice)}  ${fmtUsd((fillPrice - pos.avgEntryPrice) * trimQty)}`)
    } catch (err) { console.log(`  ❌  Trim failed: ${err.message}`) }
    return
  }

  // ── EXIT ───────────────────────────────────────────────────────────────────
  if (action === 'exit' && pos) {
    if (Date.now() - lastOrderMs < ORDER_COOLDOWN) return
    console.log(`\n🔴  SELL ${sym}  qty:${pos.qty}  ~$${fmt(bar.c)}  ${reasons[0] || ''}`)
    try {
      if (pos.stopOrderId) { await cancelAlpacaOrder(pos.stopOrderId).catch(() => {}); s.position.stopOrderId = null }
      const order  = await placeMarketOrder(sym, 'sell', pos.qty)
      const filled = await waitForFill(order.id)
      const fillPrice = parseFloat(filled.filled_avg_price) || bar.c
      const pnlUsd = (fillPrice - pos.avgEntryPrice) * pos.qty
      const pnlPct = ((fillPrice - pos.avgEntryPrice) / pos.avgEntryPrice) * 100

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

      s.rollingPnl.push(pnlUsd)
      if (s.rollingPnl.length > ROLLING_WINDOW_TRADES) s.rollingPnl.shift()
      if (s.rollingPnl.length === ROLLING_WINDOW_TRADES) {
        const net  = s.rollingPnl.reduce((a, b) => a + b, 0)
        const wins = s.rollingPnl.filter(p => p > 0).length
        const exp  = net / s.rollingPnl.length
        if (wins === 0 || (net < 0 && wins <= 1) || (exp < -25 && wins <= 2)) {
          s.pausedUntilMs = Date.now() + ROLLING_PAUSE_MS
          console.log(`  ⏸  Rolling gate: ${sym} paused ${Math.round(ROLLING_PAUSE_MS / 86_400_000)}d`)
        } else {
          s.pausedUntilMs = null
        }
      }

      allTrades.push({
        symbol: sym, setup: pos.entrySetup,
        entryPrice: pos.avgEntryPrice, exitPrice: fillPrice,
        qty: pos.qty, pnlUsd, pnlPct,
        reason: reasons[0] || action,
        heldMin: Math.round((Date.now() - pos.positionOpenedAt) / 60_000)
      })
      await recordSymbolProfileOutcome({
        source: 'paper', symbol: sym,
        setup: pos.entrySetup || setup || 'unknown',
        riskProfile: RISK_PROFILE,
        tradeCount: 1, winCount: pnlUsd > 0 ? 1 : 0, lossCount: pnlUsd < 0 ? 1 : 0,
        realizedPnL: pnlUsd,
        grossProfit: pnlUsd > 0 ? pnlUsd : 0, grossLoss: pnlUsd < 0 ? Math.abs(pnlUsd) : 0
      })
      completedTrips++
      lastOrderMs = Date.now()
      s.position = null
      console.log(`  ✅  Closed @ $${fmt(fillPrice)}  ${fmtUsd(pnlUsd)} (${fmt(pnlPct)}%)  — trip ${completedTrips}/${TARGET_TRIPS}`)
    } catch (err) { console.log(`  ❌  Sell failed: ${err.message}`) }
  } else if (!pos) {
    s.lastSkipReason = `${setup || '?'} ${behaviorProfileName} score:${scores?.entry ?? '?'} — ${(reasons?.[0] || '').slice(0, 45)}`
  }
}

// ── Startup reconcile ─────────────────────────────────────────────────────────

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
      qty, avgEntryPrice: avgEntry,
      positionOpenedAt: Date.now() - 20 * 60_000,
      highWatermarkPrice: Math.max(avgEntry, currPrice),
      entrySetup: null, trimmedHalf: false, stopOrderId: null
    }
    const brokerStop = parseFloat((avgEntry * (1 - 1.2 / 100)).toFixed(2))
    try {
      const stopOrder = await placeStopOrder(sym, qty, brokerStop)
      s.position.stopOrderId = stopOrder.id
      console.log(`  🛡️  Stop @ $${fmt(brokerStop)} for adopted position`)
    } catch (err) { console.log(`  ⚠️  Stop failed: ${err.message}`) }
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
  console.log('\n' + '═'.repeat(80))
  console.log(`FINAL SUMMARY — ${TIMEFRAME} bars — ${allTrades.length} round-trips`)
  console.log(`WR: ${fmt(wr)}%  Net: ${fmtUsd(net)}  PF: ${fmt(pf)}  Gross+: $${fmt(gross)}  Gross-: $${fmt(loss)}`)
  console.log('─'.repeat(80))
  for (const t of allTrades) {
    const mark = t.pnlUsd > 0 ? '✅' : '❌'
    console.log(`${mark}  ${t.symbol.padEnd(6)}  ${(t.setup || '?').padEnd(10)}  $${fmt(t.entryPrice)} → $${fmt(t.exitPrice)}  ${fmtUsd(t.pnlUsd).padStart(9)}  ${fmt(t.pnlPct)}%  ${t.heldMin}m  ${t.reason}`)
  }
  console.log('═'.repeat(80))
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const runStartedAt = Date.now()
  console.log(`\n🚀  BROAD-50 PAPER BOT — 5Min Breakout Strategy (report 2026-04-29)`)
  console.log(`   Universe  : ${SYMBOLS.length} symbols — ${SYMBOLS.join(', ')}`)
  console.log(`   Setup     : breakout only`)
  console.log(`   Profiles  : ${[...ALLOWED_PROFILES].join(', ')}`)
  console.log(`   Params    : trailing=${STRATEGY_PARAMS.trailingStopPct}% stagnation=${STRATEGY_PARAMS.stagnationMinutes}min breakoutSize=${STRATEGY_PARAMS.breakoutSizeMultiplier}x`)
  console.log(`   Target    : ${TARGET_TRIPS} round-trips${RUN_DEADLINE_MS > 0 ? ` OR stop after ${Math.round(RUN_DEADLINE_MS / 60_000)} min` : ''}`)
  console.log(`   Broker    : ${BROKER}`)
  console.log(`   Governor  : max notional $${fmt(BOT_MAX_NOTIONAL)}, daily loss ${BOT_MAX_DAILY_LOSS_PCT}%\n`)

  // Wait for market open if pre-market
  const now  = Date.now()
  const open = sessionOpenTime().getTime()
  if (now < open) {
    const waitMin = Math.ceil((open - now) / 60_000)
    console.log(`⏳  Market opens in ${waitMin} min — waiting…`)
    while (Date.now() < open) await sleep(15_000)
    console.log('🔔  Market open!\n')
  }

  // Warmup bars
  console.log('⏳  Fetching warmup bars…')
  for (const sym of [...SYMBOLS, SPY]) {
    try {
      const bars = await fetchWarmupBars(sym)
      if (sym === SPY) spyWarmupCandles = bars
      else symState.get(sym).warmupCandles = bars
      console.log(`   ${sym.padEnd(6)} ${bars.length} warmup bars`)
      await sleep(200)
    } catch (err) { console.error(`   ${sym} warmup failed: ${err.message}`) }
  }

  // Initial intraday bars
  console.log('⏳  Fetching intraday bars…')
  for (const sym of [...SYMBOLS, SPY]) {
    try {
      const bars = await fetchBarsFromSessionOpen(sym)
      if (sym === SPY) spyCandles = bars
      else { symState.get(sym).candles = bars; symState.get(sym).lastBarTime = bars.at(-1)?.t ?? null }
      console.log(`   ${sym.padEnd(6)} ${bars.length} bars`)
      await sleep(200)
    } catch (err) { console.error(`   ${sym} fetch failed: ${err.message}`) }
  }

  try {
    const acct = await getAccount()
    accountEquity = parseFloat(acct.equity)
    console.log(`\n💰  Account equity: $${fmt(accountEquity)}`)
  } catch (err) { console.error(`Account fetch failed: ${err.message}`) }

  await reconcilePositions()
  printDashboard()

  // Poll loop
  while (completedTrips < TARGET_TRIPS && (RUN_DEADLINE_MS <= 0 || Date.now() < runStartedAt + RUN_DEADLINE_MS)) {
    await sleep(POLL_MS)

    for (const sym of [...SYMBOLS, SPY]) {
      try {
        const bars = await fetchBarsFromSessionOpen(sym)
        if (sym === SPY) spyCandles = bars
        else symState.get(sym).candles = bars
        await sleep(100)
      } catch (err) { console.error(`Bar refresh failed ${sym}: ${err.message}`) }
    }

    try { const acct = await getAccount(); accountEquity = parseFloat(acct.equity) } catch {}

    for (const sym of SYMBOLS) {
      const s = symState.get(sym)
      const newBarTime = s?.candles?.at(-1)?.t
      if (newBarTime && newBarTime !== s.lastBarTime) {
        s.lastBarTime = newBarTime
        try {
          await evaluateAndTrade(sym)
        } catch (err) {
          console.error(`  ⚠️  evaluateAndTrade(${sym}) threw: ${err.message}`)
        }
      }
    }

    printDashboard()
  }

  if (RUN_DEADLINE_MS > 0 && Date.now() >= runStartedAt + RUN_DEADLINE_MS) {
    console.log(`\n⏱  Run deadline reached (${Math.round(RUN_DEADLINE_MS / 60_000)} min).`)
  }
  printSummary()
}

// Prevent SIGPIPE crash when stdout is piped (e.g. `node bot.mjs | tee log`)
process.stdout.on('error', err => { if (err.code === 'EPIPE') process.exit(0) })
process.stderr.on('error', err => { if (err.code === 'EPIPE') process.exit(0) })

main().catch(err => {
  console.error('\n💥  Fatal:', err.message, err.stack)
  process.exit(1)
})
