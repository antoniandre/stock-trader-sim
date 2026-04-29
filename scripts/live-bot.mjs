/**
 * Live Paper / Live Trading Bot — single script, config-driven
 *
 * All tuning params live in a JSON config file under scripts/configs/.
 * This file contains ONLY execution logic — never edit it for tuning.
 *
 * Usage:
 *   node scripts/live-bot.mjs --config=scripts/configs/broad-50-open-mid-breakout-v1.json
 *   BOT_RUN_MS=2400000 node scripts/live-bot.mjs --config=scripts/configs/broad-50-open-mid-breakout-v1.json
 *
 * Config file keys (all optional — defaults shown below):
 *   symbols             string[]   50-symbol universe (required in config)
 *   allowedProfiles     string[]   behavior profiles to trade
 *   allowedSetups       string[]   setup types to trade
 *   riskProfile         string     balanced | conservative | aggressive
 *   sizePct             number     fraction of equity per position (0.10 = 10%)
 *   maxNotionalUsd      number     hard cap per position in USD
 *   maxDailyLossPct     number     stop trading after this % daily loss
 *   maxConsecutiveLosses number    circuit-breaker threshold per symbol
 *   rollingWindowTrades number     rolling gate window
 *   rollingPauseDays    number     pause duration after rolling gate fires
 *   strategyParams      object     passed directly to evaluateDayTradingDecision
 *
 * Env-var overrides (highest priority, override config):
 *   BOT_SYMBOLS          comma-separated symbol list
 *   BOT_TARGET_TRIPS     stop after N round-trips
 *   BOT_RUN_MS           stop after N milliseconds
 *   BOT_MAX_NOTIONAL     cap per position (USD)
 *   BOT_MAX_DAILY_LOSS_PCT
 *   BOT_MAX_CONSECUTIVE_LOSSES
 *   BOT_ALLOWED_SYMBOLS  restrict trading to subset of universe
 *   BOT_ALLOW_LATE_ENTRIES  'true' to bypass last-entry time gate
 *   ALLOW_DIRECT_LIVE_BOT   'true' to allow live broker (not just paper)
 *   ALPACA_BASE_URL, ALPACA_API_BASE_URL
 *
 * Requires ALPACA_KEY + ALPACA_SECRET in api/.env (paper account by default).
 */

import { readFileSync } from 'fs'
import { join, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── Load api/.env ─────────────────────────────────────────────────────────────
for (const line of readFileSync(join(__dirname, '../api/.env'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const { evaluateDayTradingDecision } = await import('../api/day-trading-bot.js')
const { recordSymbolProfileOutcome } = await import('../api/services/symbol-profile-learning.js')

// ── Load config file ──────────────────────────────────────────────────────────
function getCliArg(name) {
  const inline = process.argv.find(a => a.startsWith(`--${name}=`))
  if (inline) return inline.split('=').slice(1).join('=')
  const idx = process.argv.indexOf(`--${name}`)
  return idx >= 0 ? process.argv[idx + 1] : null
}

const configPath = getCliArg('config')
let fileConfig = {}
if (configPath) {
  const abs = resolve(process.cwd(), configPath)
  try {
    fileConfig = JSON.parse(readFileSync(abs, 'utf8'))
    console.log(`📋  Config loaded: ${abs}`)
    if (fileConfig._name) console.log(`    ${fileConfig._name}`)
  } catch (err) {
    console.error(`❌  Failed to load config file "${abs}": ${err.message}`)
    process.exit(1)
  }
} else {
  console.warn('⚠️  No --config file specified. Running with built-in defaults.')
  console.warn('    Usage: node scripts/live-bot.mjs --config=scripts/configs/broad-50-open-mid-breakout-v1.json\n')
}

// ── Merge: built-in defaults → config file → env-var overrides ───────────────

const DEFAULT_SYMBOLS = [
  'NVDA', 'GOOGL', 'AMZN', 'META', 'MSFT', 'AAPL', 'AMD', 'TSLA', 'AVGO', 'NFLX',
  'CRM', 'ORCL', 'ADBE', 'QCOM', 'INTC', 'MU', 'ARM', 'TSM', 'ASML', 'PLTR',
  'COIN', 'SMCI', 'SHOP', 'UBER', 'ABNB', 'PANW', 'CRWD', 'NOW', 'DDOG', 'SNOW',
  'NET', 'MDB', 'ISRG', 'PYPL', 'JPM', 'BAC', 'GS', 'XOM', 'CVX', 'CAT',
  'SPOT', 'MSTR', 'APP', 'HOOD', 'RBLX', 'SOFI', 'MARA', 'CELH', 'RDDT', 'HIMS'
]

const cfg = {
  symbols:               fileConfig.symbols               ?? DEFAULT_SYMBOLS,
  allowedProfiles:       fileConfig.allowedProfiles       ?? ['confirmationRequired', 'neutral', 'extendedBreakout'],
  allowedSetups:         fileConfig.allowedSetups         ?? ['breakout'],
  riskProfile:           fileConfig.riskProfile           ?? 'balanced',
  sizePct:               fileConfig.sizePct               ?? 0.10,
  maxNotionalUsd:        fileConfig.maxNotionalUsd        ?? 1000,
  maxDailyLossPct:       fileConfig.maxDailyLossPct       ?? 1,
  maxConsecutiveLosses:  fileConfig.maxConsecutiveLosses  ?? 2,
  rollingWindowTrades:   fileConfig.rollingWindowTrades   ?? 4,
  rollingPauseDays:      fileConfig.rollingPauseDays      ?? 20,
  strategyParams:        fileConfig.strategyParams        ?? {
    trailingStopPct:              1.0,
    breakoutTrailingStopPct:      1.2,
    stagnationMinutes:            20,
    atrMultiplier:                2.5,
    breakoutThresholdAdj:        -5,
    trendThresholdBoost:          20,
    trendSizeMultiplier:          0.8,
    breakoutSizeMultiplier:       0.75,
    earlyReversalMinutes:         10,
    earlyReversalFraction:        0.25,
    behaviorClassifierMode:       'observe',
    observeBreakoutClassifierBlocks: true,
    lastEntryUtcMin:              930   // 11:30 AM ET = 15:30 UTC
  }
}

// Env-var overrides (highest priority)
let SYMBOLS = (process.env.BOT_SYMBOLS
  ? process.env.BOT_SYMBOLS.split(',').map(s => s.trim().toUpperCase()).filter(Boolean)
  : cfg.symbols)

const ALLOWED_PROFILES    = new Set(cfg.allowedProfiles)
const ALLOWED_SETUPS      = new Set(cfg.allowedSetups)
const RISK_PROFILE        = cfg.riskProfile
const SIZE_PCT            = cfg.sizePct
const STRATEGY_PARAMS     = { ...cfg.strategyParams }
const ROLLING_PAUSE_MS    = cfg.rollingPauseDays * 86_400_000
const ROLLING_WINDOW_TRADES = cfg.rollingWindowTrades
const BOT_MAX_NOTIONAL        = Number(process.env.BOT_MAX_NOTIONAL        ?? cfg.maxNotionalUsd)
const BOT_MAX_DAILY_LOSS_PCT  = Number(process.env.BOT_MAX_DAILY_LOSS_PCT  ?? cfg.maxDailyLossPct)
const BOT_MAX_CONSECUTIVE_LOSSES = Number(process.env.BOT_MAX_CONSECUTIVE_LOSSES ?? cfg.maxConsecutiveLosses)
let BOT_ALLOWED_SYMBOLS = (process.env.BOT_ALLOWED_SYMBOLS
  ? process.env.BOT_ALLOWED_SYMBOLS.split(',').map(s => s.trim().toUpperCase()).filter(Boolean)
  : SYMBOLS)

const TARGET_TRIPS    = Number(process.env.BOT_TARGET_TRIPS || 9999)
const RUN_DEADLINE_MS = Number(process.env.BOT_RUN_MS || 0)

// ── Fixed architectural constants (never tuned via config) ────────────────────
const TIMEFRAME   = '5Min'
const BAR_MINUTES = 5
const POLL_MS     = (BAR_MINUTES * 60 + 15) * 1000
const ORB_BARS    = Math.ceil(30 / BAR_MINUTES)
const HTF_STEP    = Math.ceil(15 / BAR_MINUTES)
const SPY         = 'SPY'
const FILL_TIMEOUT   = 20_000
const ORDER_COOLDOWN = 5_000

// ── Broker / auth ─────────────────────────────────────────────────────────────
const KEY    = process.env.ALPACA_KEY
const SECRET = process.env.ALPACA_SECRET
const BROKER = process.env.ALPACA_BASE_URL     || 'https://paper-api.alpaca.markets'
const DATA   = process.env.ALPACA_API_BASE_URL || 'https://data.alpaca.markets'
const IS_LIVE_BROKER = !/paper-api/i.test(BROKER)
const ALLOW_DIRECT_LIVE_BOT = process.env.ALLOW_DIRECT_LIVE_BOT === 'true'
const authHeaders = { 'APCA-API-KEY-ID': KEY, 'APCA-API-SECRET-KEY': SECRET }

if (!KEY || !SECRET) { console.error('❌  ALPACA_KEY and ALPACA_SECRET required in api/.env'); process.exit(1) }
if (IS_LIVE_BROKER && !ALLOW_DIRECT_LIVE_BOT) {
  console.error('❌  Live broker detected. Set ALLOW_DIRECT_LIVE_BOT=true to allow live trading.')
  process.exit(1)
}

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
    return { approved: false, reason: `notional $${fmt(notional)} > max $${fmt(BOT_MAX_NOTIONAL)}` }
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
  const configLabel = fileConfig._name ? `  [${fileConfig._name}]` : ''
  console.log(`\n🤖  LIVE BOT  |  ${TIMEFRAME} bars  |  ${etTime} ET  |  ${IS_LIVE_BROKER ? 'LIVE 🔴' : 'PAPER 💵'}${configLabel}`)
  console.log(`   Universe  : ${SYMBOLS.join(', ')}`)
  console.log(`   Filter    : setup=${[...ALLOWED_SETUPS].join('+')}  profile=${[...ALLOWED_PROFILES].join(',')}`)
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
    console.log('  No completed trades yet — waiting for setups…')
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

  const bar     = candles.at(-1)
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
  const behaviorProfileName = symbolBehavior?.profile || 'neutral'
  s.lastProfile = behaviorProfileName
  s.lastRegime  = marketRegime ?? null
  s.lastRollingExpectancy = rollingExpectancy

  if (pos && bar.h > pos.highWatermarkPrice) s.position.highWatermarkPrice = bar.h

  // ── BUY ──────────────────────────────────────────────────────────────────
  if (action === 'buy' && !pos) {
    if (!ALLOWED_SETUPS.has(setup)) {
      s.lastSkipReason = `setup ${setup} not in whitelist`
      return
    }
    if (!ALLOWED_PROFILES.has(behaviorProfileName)) {
      s.lastSkipReason = `behavior ${behaviorProfileName} blocked`
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

  // ── TRIM ─────────────────────────────────────────────────────────────────
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

  // ── EXIT ──────────────────────────────────────────────────────────────────
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
          console.log(`  ⏸  Rolling gate: ${sym} paused ${cfg.rollingPauseDays}d`)
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
  console.log(`\n🚀  LIVE BOT — ${TIMEFRAME} Breakout Strategy`)
  if (fileConfig._name) console.log(`    Config: ${fileConfig._name}`)
  console.log(`   Universe  : ${SYMBOLS.length} symbols — ${SYMBOLS.join(', ')}`)
  console.log(`   Setup     : ${[...ALLOWED_SETUPS].join('+')}`)
  console.log(`   Profiles  : ${[...ALLOWED_PROFILES].join(', ')}`)
  console.log(`   Params    : trailing=${STRATEGY_PARAMS.trailingStopPct}% stagnation=${STRATEGY_PARAMS.stagnationMinutes}min breakoutSize=${STRATEGY_PARAMS.breakoutSizeMultiplier}x lastEntry=${STRATEGY_PARAMS.lastEntryUtcMin ?? 'default'}utc`)
  console.log(`   Target    : ${TARGET_TRIPS} round-trips${RUN_DEADLINE_MS > 0 ? ` OR stop after ${Math.round(RUN_DEADLINE_MS / 60_000)} min` : ''}`)
  console.log(`   Broker    : ${BROKER}`)
  console.log(`   Governor  : max notional $${fmt(BOT_MAX_NOTIONAL)}, daily loss ${BOT_MAX_DAILY_LOSS_PCT}%\n`)

  const now  = Date.now()
  const open = sessionOpenTime().getTime()
  if (now < open) {
    const waitMin = Math.ceil((open - now) / 60_000)
    console.log(`⏳  Market opens in ${waitMin} min — waiting…`)
    while (Date.now() < open) await sleep(15_000)
    console.log('🔔  Market open!\n')
  }

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

process.stdout.on('error', err => { if (err.code === 'EPIPE') process.exit(0) })
process.stderr.on('error', err => { if (err.code === 'EPIPE') process.exit(0) })

main().catch(err => {
  console.error('\n💥  Fatal:', err.message, err.stack)
  process.exit(1)
})
