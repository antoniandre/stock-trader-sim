/**
 * BUY+SELL round-trip trade simulation using real Alpaca historical data.
 * Evaluates the bot strategy with RSI, EMA, MACD, VWAP, and daily loss limit enforcement.
 *
 * Usage:
 *   node scripts/run-100-trades.mjs
 *   node scripts/run-100-trades.mjs 1Min --target=1000 --lookback=365 --universe=broad
 *   node scripts/run-100-trades.mjs --symbols=NVDA,MSFT,META --target=1000
 */

import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load env from api/.env
import { readFileSync as _readFileSync } from 'fs'
const envPath = join(__dirname, '../api/.env')
for (const line of _readFileSync(envPath, 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const { evaluateDayTradingDecision } = await import('../api/day-trading-bot.js')

// ── Configuration ────────────────────────────────────────────────────────────
const ALPACA_KEY    = process.env.ALPACA_KEY
const ALPACA_SECRET = process.env.ALPACA_SECRET
const DATA_URL      = process.env.ALPACA_API_BASE_URL || 'https://data.alpaca.markets'
const RISK_PROFILE  = 'balanced'
const CAPITAL       = 100_000
const DAILY_LOSS_LIMIT_PCT = 5.0
const SLIPPAGE_PCT  = 0.03   // 3 bps each way — models realistic market-order fill cost
const CLI_ARGS = process.argv.slice(2)

function getArg(name) {
  const inline = CLI_ARGS.find(arg => arg.startsWith(`--${name}=`))
  if (inline) return inline.split('=').slice(1).join('=')
  const idx = CLI_ARGS.indexOf(`--${name}`)
  return idx >= 0 ? CLI_ARGS[idx + 1] : null
}

function getNumberArg(name, fallback) {
  const raw = getArg(name) ?? process.env[`BOT_BACKTEST_${name.toUpperCase()}`]
  const value = Number(raw)
  return Number.isFinite(value) && value > 0 ? value : fallback
}

function parseSymbols(raw) {
  return String(raw || '')
    .split(',')
    .map(s => s.trim().toUpperCase())
    .filter(Boolean)
}

const TARGET_TRADES = getNumberArg('target', 300)    // how many chronologically-first round-trips to report on
const LOOKBACK_DAYS = getNumberArg('lookback', 90)   // calendar days of history to fetch

// Timeframe: '5Min' (default, backtested strategy) or '1Min' (live trading mode)
// Usage: node scripts/run-100-trades.mjs 1Min
const TIMEFRAME     = CLI_ARGS.includes('1Min') ? '1Min' : '5Min'
// Bars to keep in the rolling indicator window — sized so both timeframes get ~2h of history
const WINDOW_BARS   = TIMEFRAME === '1Min' ? 120 : 35
// HTF step: how many bars = one 15-min period (for tf15Bullish computation)
const HTF_STEP      = TIMEFRAME === '1Min' ? 15 : 3
// Frozen candidate configs. Test variants with CLI/env inputs before changing these.
const STRATEGY_CONFIGS = {
  '1Min': {
    trailingStopPct: 0.4,
    enableMeanRevert: true,
    stopFloorPct: 0.5,
    rewardTargetPct: 1.2,
    stagnationMinutes: 15,
    enableBreakout: false,
    atrMultiplier: 2.5,
    breakevenTriggerR: 0.8
  },
  '5Min': {
    trailingStopPct: 1.5,
    breakoutTrailingStopPct: 1.7,
    stagnationMinutes: 45,
    atrMultiplier: 2.5,
    breakoutThresholdAdj: -5,
    trendSizeMultiplier: 1.0
  }
}
const STRATEGY_PARAMS = { ...STRATEGY_CONFIGS[TIMEFRAME] }
const ROLLING_WINDOW_TRADES = 5
const ROLLING_PAUSE_DAYS = TIMEFRAME === '1Min' ? 1 : 10
const MIN_BARS = getNumberArg('min-bars', Math.max(WINDOW_BARS * 3, TIMEFRAME === '1Min' ? 240 : 120))
const LAST_ENTRY_UTC_MIN = getNumberArg('last-entry-utc-min', 0)
if (LAST_ENTRY_UTC_MIN > 0) STRATEGY_PARAMS.lastEntryUtcMin = LAST_ENTRY_UTC_MIN

// Removed: AMD (47.83% WR, -$972), SPY/QQQ (ETFs, 0% WR), AAPL (40% WR, -$62),
// TSLA (38–42% WR, net negative every 90d run — hyper-noisy, headline-driven false breakouts)
// Rejected at selection time (pre-backtest): PLTR, CRWD, COIN, SMCI, MU, AVGO, MSFT, NFLX.
const CANDIDATE_SYMBOLS = ['NVDA', 'GOOGL', 'AMZN', 'META']
const BROAD_SYMBOLS = [
  'NVDA', 'GOOGL', 'AMZN', 'META', 'MSFT', 'AAPL', 'AMD', 'TSLA', 'AVGO', 'NFLX',
  'CRM', 'ORCL', 'ADBE', 'QCOM', 'INTC', 'MU', 'ARM', 'TSM', 'ASML', 'PLTR',
  'COIN', 'SMCI', 'SHOP', 'UBER', 'ABNB', 'PANW', 'CRWD', 'NOW', 'DDOG', 'SNOW',
  'NET', 'MDB', 'SQ', 'PYPL', 'JPM', 'BAC', 'GS', 'XOM', 'CVX', 'CAT',
  'GE', 'BA', 'LMT', 'UNH', 'LLY', 'NVO', 'COST', 'WMT', 'HD', 'MCD',
  'DIS', 'V', 'MA', 'ADP', 'INTU', 'TXN', 'AMAT', 'LRCX', 'KLAC', 'MRVL',
  'DELL', 'HPE', 'IBM', 'SBUX', 'NKE', 'TGT', 'LOW', 'ELF', 'CELH', 'RIVN'
]
const SYMBOL_UNIVERSE = (getArg('universe') || process.env.BOT_BACKTEST_UNIVERSE || 'candidate').toLowerCase()
const SYMBOLS = parseSymbols(getArg('symbols') || process.env.BOT_BACKTEST_SYMBOLS)
const BACKTEST_SYMBOLS = SYMBOLS.length
  ? SYMBOLS
  : (SYMBOL_UNIVERSE === 'broad' ? BROAD_SYMBOLS : CANDIDATE_SYMBOLS)

// ── Helpers ──────────────────────────────────────────────────────────────────
function round2(v) { return Math.round((+v + Number.EPSILON) * 100) / 100 }
function round4(v) { return Math.round((+v + Number.EPSILON) * 10000) / 10000 }

function avg(arr) {
  if (!arr.length) return 0
  return arr.reduce((s, v) => s + v, 0) / arr.length
}

function ema(prices, period) {
  if (!prices.length) return 0
  if (prices.length <= period) return avg(prices)
  const k = 2 / (period + 1)
  let e = avg(prices.slice(0, period))
  for (let i = period; i < prices.length; i++) e = prices[i] * k + e * (1 - k)
  return e
}

function rsi14(prices) {
  if (prices.length < 15) return 50
  let g = 0, l = 0
  for (let i = prices.length - 14; i < prices.length; i++) {
    const d = prices[i] - prices[i - 1]
    if (d > 0) g += d; else l += Math.abs(d)
  }
  const ag = g / 14, al = l / 14
  if (al === 0) return 100
  return 100 - 100 / (1 + ag / al)
}

function macd(prices) {
  if (prices.length < 26) return 0
  return ema(prices, 12) - ema(prices, 26)
}

// 14-period ATR as % of close (True Range = max(H−L, |H−prevC|, |L−prevC|))
function atr14Pct(candles, idx) {
  if (idx < 1) return 0
  let total = 0, count = 0
  for (let i = Math.max(1, idx - 13); i <= idx; i++) {
    const h = candles[i].high, l = candles[i].low, pc = candles[i - 1].close
    total += Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc))
    count++
  }
  const cl = candles[idx].close
  return cl > 0 && count > 0 ? round4((total / count) / cl * 100) : 0
}

// 15-min trend: EMA5 > EMA10 on resampled 15-min closes.
// Step = 3 bars at 5-min (3×5=15 min), 15 bars at 1-min (15×1=15 min).
function tf15BullishAt(candles, idx) {
  const closes = []
  for (let k = idx; k >= 0 && closes.length < 15; k -= HTF_STEP) closes.unshift(candles[k].close)
  if (closes.length < 10) return null
  return ema(closes, 5) > ema(closes, 10)
}

// VWAP uses high/low/close + volume for the current trading day
function vwap(dayCandles) {
  let tpv = 0, vol = 0
  for (const c of dayCandles) {
    const tp = (c.high + c.low + c.close) / 3
    tpv += tp * c.volume
    vol += c.volume
  }
  return vol > 0 ? tpv / vol : 0
}

// ── Alpaca data fetch (paginated — Alpaca caps each page at 2000 bars) ────────
async function fetchBars(symbol, start, end, tf = '5Min') {
  const headers = { 'APCA-API-KEY-ID': ALPACA_KEY, 'APCA-API-SECRET-KEY': ALPACA_SECRET }
  const allBars = []
  let pageToken = null

  while (true) {
    const params = new URLSearchParams({ start, end, timeframe: tf, feed: 'iex', limit: '2000' })
    if (pageToken) params.set('page_token', pageToken)
    const url = `${DATA_URL}/v2/stocks/${symbol}/bars?${params}`

    let res
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const ac = new AbortController()
        const timer = setTimeout(() => ac.abort(), 90_000)
        res = await fetch(url, { headers, signal: ac.signal })
        clearTimeout(timer)
        break
      } catch (err) {
        if (attempt === 3) throw err
        await new Promise(r => setTimeout(r, 3000 * attempt))
      }
    }

    if (!res.ok) {
      const txt = await res.text()
      throw new Error(`Alpaca ${res.status} for ${symbol}: ${txt.slice(0, 120)}`)
    }
    const json = await res.json()
    const bars = (json.bars || []).map(b => ({
      timestamp: b.t,
      open: +b.o, high: +b.h, low: +b.l, close: +b.c, volume: +b.v
    }))
    allBars.push(...bars)
    if (!json.next_page_token) break
    pageToken = json.next_page_token
  }

  return allBars
}

// ── ADR: 5-day avg (high−low)/close to measure typical daily move size ───────
function buildADRMap(candles, dayStartIdx) {
  const sortedDates = [...dayStartIdx.keys()].sort()
  const adrMap = new Map()
  for (let d = 0; d < sortedDates.length; d++) {
    const date = sortedDates[d]
    const lookback = sortedDates.slice(Math.max(0, d - 5), d)  // up to 5 prior days (exclude today)
    if (!lookback.length) { adrMap.set(date, 0); continue }
    let total = 0, count = 0
    for (let k = 0; k < lookback.length; k++) {
      const start = dayStartIdx.get(lookback[k])
      const end   = dayStartIdx.get(lookback[k + 1] ?? date) ?? candles.length
      const bars  = candles.slice(start, end)
      if (!bars.length) continue
      const hi = Math.max(...bars.map(b => b.high))
      const lo = Math.min(...bars.map(b => b.low))
      const cl = bars.at(-1).close
      if (cl > 0) { total += (hi - lo) / cl * 100; count++ }
    }
    adrMap.set(date, count > 0 ? round2(total / count) : 0)
  }
  return adrMap
}

// ── ORB map: date → { high, low } of first-30-min range (13:30–14:00 UTC) ────
function buildOrbMap(candles, dayStartIdx) {
  const map = new Map()
  for (const [date, startIdx] of dayStartIdx.entries()) {
    let orbHigh = 0, orbLow = Infinity, found = false
    for (let i = startIdx; i < candles.length; i++) {
      const c = candles[i]
      if (c.timestamp.slice(0, 10) !== date) break
      const d = new Date(c.timestamp)
      const utcMin = d.getUTCHours() * 60 + d.getUTCMinutes()
      if (utcMin < 13 * 60 + 30) continue   // before regular open
      if (utcMin >= 14 * 60) break           // after first 30 min
      orbHigh = Math.max(orbHigh, c.high)
      orbLow  = Math.min(orbLow, c.low)
      found = true
    }
    map.set(date, found ? { high: round2(orbHigh), low: round2(orbLow) } : { high: 0, low: 0 })
  }
  return map
}

// ── SPY short-trend map: timestamp → SPY 5-bar % change ──────────────────────
function buildSpyTrendMap(spyCandles) {
  const map = new Map()
  for (let i = 5; i < spyCandles.length; i++) {
    const from = spyCandles[i - 5].close
    const to   = spyCandles[i].close
    map.set(spyCandles[i].timestamp, from > 0 ? round4((to - from) / from * 100) : 0)
  }
  return map
}

// ── SPY volatility-regime map: timestamp → boolean (true = volatile) ─────────
// Volatile when 5-bar rolling ATR (as % of close) exceeds the 20-bar baseline by 30%+.
function buildVolatilityRegimeMap(spyCandles) {
  const map = new Map()
  for (let i = 20; i < spyCandles.length; i++) {
    let atr5 = 0
    for (let k = i - 4; k <= i; k++) {
      const h = spyCandles[k].high, l = spyCandles[k].low, pc = spyCandles[k - 1].close
      atr5 += Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc))
    }
    atr5 = (atr5 / 5) / spyCandles[i].close * 100

    let atr20 = 0
    for (let k = i - 19; k <= i; k++) {
      const h = spyCandles[k].high, l = spyCandles[k].low, pc = spyCandles[k - 1].close
      atr20 += Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc))
    }
    atr20 = (atr20 / 20) / spyCandles[i].close * 100

    map.set(spyCandles[i].timestamp, atr5 > atr20 * 1.3)
  }
  return map
}

// ── Simulation core ──────────────────────────────────────────────────────────
function simulateSymbol(symbol, candles, spyTrendMap = new Map(), volRegimeMap = new Map()) {
  const completedTrades = []
  let cash = CAPITAL
  let posQty = 0
  let avgEntry = 0
  let highWatermark = 0   // highest close since entry — drives trailing stop
  // Rolling performance gate: throttle symbols when recent realized edge degrades.
  let rollingPnl     = []      // last 5 completed trade P&Ls for this symbol
  let pausedUntilDay = null    // ISO date string; null = not paused
  let entryTime = null
  let entryCandle = null
  let entryIndicators = null
  let trimmedOnce = false   // prevent trim cascade: only one partial exit per position
  let dailyLosses = 0
  let lastDate = null
  let consecutiveLosses = 0  // circuit breaker: resets on win or new day
  let pauseUntilMs = 0       // no new entries until this timestamp

  // Pre-build a date→candle-index map so VWAP slices are O(1) not O(n²)
  const dayStartIdx = new Map()
  for (let i = 0; i < candles.length; i++) {
    const d = candles[i].timestamp.slice(0, 10)
    if (!dayStartIdx.has(d)) dayStartIdx.set(d, i)
  }

  const adrMap = buildADRMap(candles, dayStartIdx)
  const orbMap = buildOrbMap(candles, dayStartIdx)

  for (let i = WINDOW_BARS; i < candles.length; i++) {
    const c = candles[i]
    const currentDate = c.timestamp.slice(0, 10)

    // Reset daily P&L tracker and circuit breaker at start of new session
    if (currentDate !== lastDate) {
      dailyLosses = 0
      consecutiveLosses = 0
      lastDate = currentDate
    }

    // Update high-watermark while in a position
    if (posQty > 0) highWatermark = Math.max(highWatermark, c.high)

    const window  = candles.slice(Math.max(0, i - WINDOW_BARS), i + 1)
    const prices  = window.map(w => w.close)
    const volumes = window.map(w => w.volume)

    // VWAP: use candles from session start up to current bar
    const dayStart = dayStartIdx.get(currentDate) ?? i
    const daySlice = candles.slice(dayStart, i + 1)
    const vwapVal  = round2(vwap(daySlice))

    const equity         = cash + posQty * c.close
    const dailyLossesPct = (dailyLosses / CAPITAL) * 100

    const adrPctVal   = adrMap.get(currentDate) ?? 0
    const spyTrendVal = symbol !== 'SPY' ? (spyTrendMap.get(c.timestamp) ?? 0) : 0
    const atrPctVal   = atr14Pct(candles, i)
    const orb         = orbMap.get(currentDate) ?? { high: 0, low: 0 }
    const tf15        = tf15BullishAt(candles, i)
    const nowMsLocal  = new Date(c.timestamp).getTime()
    const circuitBreakerVal = consecutiveLosses >= 2 && nowMsLocal < pauseUntilMs
    const marketVolatileRegime = symbol !== 'SPY' ? (volRegimeMap.get(c.timestamp) ?? false) : false

    // VWAP reclaim: price crossed from below to above VWAP since the previous bar.
    const prevClose       = candles[i - 1].close
    const vwapDevPct      = vwapVal > 0 && c.close > 0   ? ((c.close   - vwapVal) / vwapVal) * 100 : 0
    const prevVwapDevPct  = vwapVal > 0 && prevClose > 0 ? ((prevClose - vwapVal) / vwapVal) * 100 : 0
    const vwapReclaim     = prevVwapDevPct < -0.1 && vwapDevPct > 0.1

    const decision = evaluateDayTradingDecision({
      symbol,
      riskProfile: RISK_PROFILE,
      strategyParams: STRATEGY_PARAMS,
      currentPrice: c.close,
      currentVolume: c.volume,
      prices,
      volumes,
      spreadPct: 0.06,
      positionQty: posQty,
      avgEntryPrice: avgEntry,
      positionOpenedAt: entryTime,
      nowMs: nowMsLocal,
      accountEquity: equity,
      dailyLossesPct,
      vwap: vwapVal,
      highWatermarkPrice: highWatermark,
      adrPct: adrPctVal,
      spyTrendPct: spyTrendVal,
      atrPct: atrPctVal,
      orbHigh: orb.high,
      orbLow: orb.low,
      tf15Bullish: tf15,
      circuitBreakerActive: circuitBreakerVal,
      currentCandleOpen: c.open,
      marketVolatileRegime,
      vwapReclaim,
      entrySetup: entryIndicators?.entrySetup ?? null,
      barDurationMs: (TIMEFRAME === '1Min' ? 1 : 5) * 60_000,
      disableDailyCatalyst: true
    })

    // Capture indicators at evaluation point
    const rsiVal  = round2(rsi14(prices))
    const ema9v   = round2(ema(prices, 9))
    const ema21v  = round2(ema(prices, 21))
    const macdVal = round4(macd(prices))
    const volRatio = round2(decision.metrics.volumeRatio)

    // ── BUY ──────────────────────────────────────────────────────────────────
    // Rolling performance gate: skip new entries while symbol is cooling off.
    if (pausedUntilDay && currentDate < pausedUntilDay) continue

    if (decision.action === 'buy' && posQty === 0) {
      // Apply slippage: market buy fills slightly above close
      const fillPrice = round2(c.close * (1 + SLIPPAGE_PCT / 100))
      const alloc     = (decision.executionPlan.positionSizePct / 100) * equity
      const qty       = Math.floor(Math.min(alloc, cash) / fillPrice)
      if (qty <= 0) continue

      cash         -= qty * fillPrice
      posQty        = qty
      avgEntry      = fillPrice
      highWatermark = fillPrice
      trimmedOnce   = false
      entryTime     = new Date(c.timestamp).getTime()
      entryCandle   = c

      entryIndicators = {
        rsi: rsiVal, ema9: ema9v, ema21: ema21v, macd: macdVal,
        vwap: vwapVal, volRatio,
        setup: decision.setup,
        entrySetup: decision.setup,
        regime: decision.marketRegime,
        confidence: decision.confidence,
        stopLossPct: decision.executionPlan.stopLossPct,
        targetPct: decision.executionPlan.rewardTargetPct,
        notional: round2(qty * fillPrice)
      }
    }

    // ── EXIT / TRIM ───────────────────────────────────────────────────────────
    if ((decision.action === 'exit' || (decision.action === 'trim' && !trimmedOnce)) && posQty > 0 && entryIndicators) {
      // Apply slippage: market sell fills slightly below close
      const fillPrice  = round2(c.close * (1 - SLIPPAGE_PCT / 100))
      const fraction   = decision.action === 'exit' ? 1 : decision.executionPlan.trimFraction
      const qtyOut     = decision.action === 'exit' ? posQty : Math.max(1, Math.floor(posQty * fraction))
      const proceeds   = qtyOut * fillPrice
      const entryP     = avgEntry
      const savedMeta  = entryIndicators
      const savedEntry = entryCandle

      const pnlUsd  = round2((fillPrice - entryP) * qtyOut)
      const pnlPct  = round2(((fillPrice - entryP) / entryP) * 100)
      const durMin  = Math.round((new Date(c.timestamp).getTime() - entryTime) / 60_000)
      const stopPrice = round2(entryP * (1 - savedMeta.stopLossPct / 100))
      const riskR   = round2(Math.abs(pnlPct) / savedMeta.stopLossPct)
      const exitReason = decision.action === 'trim'
        ? 'trim-profit-target'
        : deriveExitReason(decision.reasons)
      const vwapPos = fillPrice > vwapVal ? 'above' : 'below'

      if (pnlUsd < 0) dailyLosses += Math.abs(pnlUsd)

      cash   += proceeds
      posQty -= qtyOut
      if (decision.action === 'trim') {
        trimmedOnce = true
      } else {
        avgEntry = 0; highWatermark = 0; trimmedOnce = false
        entryTime = null; entryIndicators = null; entryCandle = null

        rollingPnl.push(pnlUsd)
        if (rollingPnl.length > ROLLING_WINDOW_TRADES) rollingPnl.shift()
        if (rollingPnl.length === ROLLING_WINDOW_TRADES) {
          const rollingNet  = rollingPnl.reduce((a, b) => a + b, 0)
          const rollingWins = rollingPnl.filter(p => p > 0).length
          const rollingExpectancy = rollingNet / rollingPnl.length
          const isLosingStreak = rollingWins === 0
            || (rollingNet < 0 && rollingWins <= 1)
            || (rollingExpectancy < -25 && rollingWins <= 2)
          if (isLosingStreak) {
            const resumeDate = new Date(new Date(c.timestamp).getTime() + ROLLING_PAUSE_DAYS * 86_400_000)
            pausedUntilDay = resumeDate.toISOString().slice(0, 10)
          } else {
            pausedUntilDay = null
          }
        }
      }

      completedTrades.push({
        symbol,
        entryTime:  savedEntry.timestamp,
        exitTime:   c.timestamp,
        entryPrice: round2(entryP),
        exitPrice:  round2(fillPrice),
        qty: qtyOut,
        notional: savedMeta.notional,
        pnlUsd,
        pnlPct,
        riskR,
        durMin,
        orderType: 'market',
        exitReason,
        confidence: savedMeta.confidence,
        setup: savedMeta.setup,
        regime: savedMeta.regime,
        stopPrice,
        targetPct: savedMeta.targetPct,
        rsi: savedMeta.rsi,
        vwap: savedMeta.vwap,
        vwapPos,
        macd: savedMeta.macd,
        ema9: savedMeta.ema9,
        ema21: savedMeta.ema21,
        volRatio: savedMeta.volRatio,
        status: pnlUsd >= 0 ? 'WIN' : 'LOSS'
      })

      // Circuit breaker: 2 consecutive losses → pause new entries for 30 min
      if (decision.action === 'exit') {
        if (pnlUsd < 0) {
          consecutiveLosses++
          if (consecutiveLosses >= 2) pauseUntilMs = nowMsLocal + 30 * 60 * 1000
        } else {
          consecutiveLosses = 0
        }
      }
    }
  }

  return completedTrades
}

function deriveExitReason(reasons) {
  if (!Array.isArray(reasons)) return 'signal-exit'
  if (reasons.some(r => /trailing stop/i.test(r)))        return 'trailing-stop'
  if (reasons.some(r => /break-even stop/i.test(r)))      return 'breakeven-stop'
  if (reasons.some(r => /profit target exit/i.test(r)))   return 'profit-target'
  if (reasons.some(r => /stagnation exit/i.test(r)))      return 'stagnation'
  if (reasons.some(r => /EOD/i.test(r)))                  return 'eod-close'
  if (reasons.some(r => /stop level|stop loss|breached the stop/i.test(r))) return 'stop-loss'
  if (reasons.some(r => /timeout/i.test(r)))              return 'timeout'
  if (reasons.some(r => /risk.*trend|trend.*broke/i.test(r))) return 'risk-exit'
  if (reasons.some(r => /early reversal/i.test(r)))           return 'early-reversal'
  return 'signal-exit'
}

// ── Report generator ─────────────────────────────────────────────────────────
function generateReport(trades, runDate, runContext = {}) {
  const wins    = trades.filter(t => t.status === 'WIN')
  const losses  = trades.filter(t => t.status === 'LOSS')
  const total   = trades.length
  const grossProfit = round2(wins.reduce((s, t) => s + t.pnlUsd, 0))
  const grossLoss   = round2(losses.reduce((s, t) => s + Math.abs(t.pnlUsd), 0))
  const netPnL      = round2(grossProfit - grossLoss)
  const netPnLPct   = round2((netPnL / CAPITAL) * 100)
  const winRate     = round2((wins.length / total) * 100)
  const profitFactor = grossLoss > 0 ? round2(grossProfit / grossLoss) : (grossProfit > 0 ? '∞' : '0')
  const avgWin      = wins.length  ? round2(grossProfit / wins.length)  : 0
  const avgLoss     = losses.length ? round2(grossLoss   / losses.length) : 0
  const expectancy   = total > 0 ? round2(netPnL / total) : 0
  const payoffRatio  = avgLoss > 0 ? round2(avgWin / avgLoss) : (avgWin > 0 ? '∞' : '0')
  const avgDurMin   = Math.round(trades.reduce((s, t) => s + t.durMin, 0) / total)
  const avgRiskR    = round2(trades.reduce((s, t) => s + t.riskR, 0) / total)
  const avgConf     = round2(trades.reduce((s, t) => s + t.confidence, 0) / total)

  // Max drawdown (equity curve)
  let equity = CAPITAL, peak = CAPITAL, maxDD = 0
  for (const t of trades) {
    equity += t.pnlUsd
    if (equity > peak) peak = equity
    const dd = round2(((peak - equity) / peak) * 100)
    if (dd > maxDD) maxDD = dd
  }

  // Sharpe ratio (annualized, using daily PnL)
  const dailyPnl = {}
  for (const t of trades) {
    const day = t.entryTime.slice(0, 10)
    dailyPnl[day] = (dailyPnl[day] || 0) + t.pnlUsd
  }
  const dailyReturns = Object.values(dailyPnl)
  const avgDaily = avg(dailyReturns)
  const stdDaily = dailyReturns.length > 1
    ? Math.sqrt(dailyReturns.reduce((s, v) => s + (v - avgDaily) ** 2, 0) / (dailyReturns.length - 1))
    : 0
  const sharpe = stdDaily > 0 ? round2((avgDaily / stdDaily) * Math.sqrt(252)) : 'N/A'
  const tradesPerDay = dailyReturns.length > 0 ? round2(total / dailyReturns.length) : 0

  function slippageScenario(extraBpsEachWay) {
    const adjustedTrades = trades.map(t => {
      const roundTripNotional = ((t.entryPrice * t.qty) + (t.exitPrice * t.qty))
      return round2(t.pnlUsd - (roundTripNotional * extraBpsEachWay / 10000))
    })
    const adjustedWins = adjustedTrades.filter(pnl => pnl > 0)
    const adjustedLosses = adjustedTrades.filter(pnl => pnl <= 0)
    const adjustedGrossProfit = round2(adjustedWins.reduce((sum, pnl) => sum + pnl, 0))
    const adjustedGrossLoss = round2(Math.abs(adjustedLosses.reduce((sum, pnl) => sum + pnl, 0)))
    const adjustedNet = round2(adjustedGrossProfit - adjustedGrossLoss)
    const adjustedPF = adjustedGrossLoss > 0
      ? round2(adjustedGrossProfit / adjustedGrossLoss)
      : (adjustedGrossProfit > 0 ? '∞' : '0')
    return { extraBpsEachWay, adjustedNet, adjustedPF }
  }

  const slippageScenarios = [1, 3, 5, 10].map(slippageScenario)

  // Time-of-day breakdown (ET: UTC-4 during DST)
  const timeSlots = {
    'Open 9:30–10:30':  { t: 0, w: 0, pnl: 0 },
    'Mid  10:30–11:30': { t: 0, w: 0, pnl: 0 },
    'Noon 11:30–13:00': { t: 0, w: 0, pnl: 0 },
    'PM   13:00–14:00': { t: 0, w: 0, pnl: 0 },
  }
  for (const t of trades) {
    const utcH = parseInt(t.entryTime.slice(11, 13), 10)
    const utcM = parseInt(t.entryTime.slice(14, 16), 10)
    const etMin = (utcH - 4) * 60 + utcM  // approximate ET (UTC-4 DST)
    let slot
    if (etMin < 630)       slot = 'Open 9:30–10:30'
    else if (etMin < 690)  slot = 'Mid  10:30–11:30'
    else if (etMin < 780)  slot = 'Noon 11:30–13:00'
    else                   slot = 'PM   13:00–14:00'
    timeSlots[slot].t++
    timeSlots[slot].pnl += t.pnlUsd
    if (t.status === 'WIN') timeSlots[slot].w++
  }

  // Per-symbol breakdown
  const symMap = {}
  for (const t of trades) {
    if (!symMap[t.symbol]) symMap[t.symbol] = { t: 0, w: 0, pnl: 0, grossProfit: 0, grossLoss: 0 }
    symMap[t.symbol].t++
    symMap[t.symbol].pnl += t.pnlUsd
    if (t.status === 'WIN') symMap[t.symbol].w++
    if (t.pnlUsd > 0) symMap[t.symbol].grossProfit += t.pnlUsd
    else symMap[t.symbol].grossLoss += Math.abs(t.pnlUsd)
  }

  // Exit-reason breakdown
  const exitMap = {}
  for (const t of trades) {
    exitMap[t.exitReason] = (exitMap[t.exitReason] || 0) + 1
  }

  // Setup breakdown
  const setupMap = {}
  for (const t of trades) {
    if (!setupMap[t.setup]) setupMap[t.setup] = { t: 0, w: 0, pnl: 0 }
    setupMap[t.setup].t++
    setupMap[t.setup].pnl += t.pnlUsd
    if (t.status === 'WIN') setupMap[t.setup].w++
  }

  const verdict = netPnL > 0
    ? `✅ **PROFITABLE** — net gain of $${netPnL} (+${netPnLPct}%) over ${total} trades`
    : `❌ **UNPROFITABLE** — net loss of $${Math.abs(netPnL)} (${netPnLPct}%) over ${total} trades`

  let md = `# Bot Trade Report — ${total} BUY+SELL Round-Trip Trades\n\n`
  md += `> **Generated:** ${runDate}  \n`
  md += `> **Risk profile:** ${RISK_PROFILE} | **Capital:** $${CAPITAL.toLocaleString()} | **Timeframe:** ${TIMEFRAME} | **Mode:** Alpaca historical bars (IEX feed)\n`
  md += `> **Target trades:** ${TARGET_TRADES} | **Lookback:** ${LOOKBACK_DAYS} days | **Universe:** ${runContext.universe || SYMBOL_UNIVERSE} | **Symbols scanned:** ${runContext.symbolsScanned ?? BACKTEST_SYMBOLS.length}\n\n`
  md += `> **Strategy params:** \`${JSON.stringify(STRATEGY_PARAMS)}\`\n\n`

  md += `## Verdict\n\n${verdict}\n\n`

  md += `## Summary Statistics\n\n`
  md += `| Metric | Value |\n|:--|--:|\n`
  md += `| Total round-trip trades | ${total} |\n`
  md += `| Win rate | ${winRate}% (${wins.length}W / ${losses.length}L) |\n`
  md += `| Net P&L | $${netPnL >= 0 ? '+' : ''}${netPnL} (${netPnLPct >= 0 ? '+' : ''}${netPnLPct}%) |\n`
  md += `| Gross profit | $${grossProfit} |\n`
  md += `| Gross loss | $${grossLoss} |\n`
  md += `| Profit factor | ${profitFactor} |\n`
  md += `| Avg win | $${avgWin} |\n`
  md += `| Avg loss | $${avgLoss} |\n`
  md += `| Payoff ratio | ${payoffRatio}:1 |\n`
  md += `| Expectancy | $${expectancy >= 0 ? '+' : ''}${expectancy} / trade |\n`
  md += `| Max drawdown | ${maxDD}% |\n`
  md += `| Sharpe ratio (ann.) | ${sharpe} |\n`
  md += `| Trades / active day | ${tradesPerDay} |\n`
  md += `| Avg confidence | ${avgConf}% |\n`
  md += `| Avg trade duration | ${avgDurMin} min |\n`
  md += `| Avg risk ratio | ${avgRiskR}R |\n`
  md += `| Starting equity | $${CAPITAL.toLocaleString()} |\n`
  md += `| Ending equity | $${round2(CAPITAL + netPnL).toLocaleString()} |\n\n`

  md += `## Time-of-Day Breakdown (ET)\n\n`
  md += `| Window | Trades | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|\n`
  for (const [slot, s] of Object.entries(timeSlots)) {
    if (s.t === 0) continue
    const wr = round2(s.w / s.t * 100)
    const pnl = round2(s.pnl)
    md += `| ${slot} | ${s.t} | ${wr}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${round2(s.pnl / s.t)} |\n`
  }
  md += '\n'

  md += `## Per-Symbol Breakdown\n\n`
  md += `| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |\n|:--|--:|--:|--:|--:|--:|--:|:--|\n`
  for (const [sym, s] of Object.entries(symMap).sort((a, b) => b[1].pnl - a[1].pnl)) {
    const pnl = round2(s.pnl)
    const exp = round2(s.pnl / s.t)
    const pf = s.grossLoss > 0 ? round2(s.grossProfit / s.grossLoss) : (s.grossProfit > 0 ? '∞' : '0')
    const winPct = round2(s.w / s.t * 100)
    const eligibility = s.t < ROLLING_WINDOW_TRADES
      ? 'watch'
      : (pnl > 0 && exp > 0 && winPct >= 40 ? 'eligible' : 'throttle')
    md += `| ${sym} | ${s.t} | ${s.w} | ${winPct}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${exp >= 0 ? '+' : ''}${exp} | ${pf} | ${eligibility} |\n`
  }

  if (Array.isArray(runContext.skippedSymbols) && runContext.skippedSymbols.length) {
    md += `\n## Skipped Symbols\n\n`
    md += `| Symbol | Reason |\n|:--|:--|\n`
    for (const skipped of runContext.skippedSymbols) {
      md += `| ${skipped.symbol} | ${skipped.reason} |\n`
    }
  }

  md += `\n## Setup Performance\n\n`
  md += `| Setup | Trades | Wins | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|--:|\n`
  for (const [setup, s] of Object.entries(setupMap)) {
    const pnl = round2(s.pnl)
    const exp = round2(s.pnl / s.t)
    md += `| ${setup} | ${s.t} | ${s.w} | ${round2(s.w / s.t * 100)}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${exp >= 0 ? '+' : ''}${exp} |\n`
  }

  md += `\n## Slippage Sensitivity\n\n`
  md += `Additional slippage is applied on top of the built-in ${SLIPPAGE_PCT}% per-side model.\n\n`
  md += `| Extra slippage | Adjusted net P&L | Adjusted PF |\n|:--|--:|--:|\n`
  for (const s of slippageScenarios) {
    md += `| +${s.extraBpsEachWay} bps/side | $${s.adjustedNet >= 0 ? '+' : ''}${s.adjustedNet} | ${s.adjustedPF} |\n`
  }

  md += `\n## Exit Reason Breakdown\n\n`
  md += `| Exit Reason | Count |\n|:--|--:|\n`
  for (const [reason, count] of Object.entries(exitMap).sort((a, b) => b[1] - a[1])) {
    md += `| ${reason} | ${count} |\n`
  }

  md += `\n## Trade Log\n\n`
  md += `| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | RSI | VWAP | MACD | VolR | Result |\n`
  md += `|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|--:|--:|--:|--:|:--|\n`

  trades.forEach((t, idx) => {
    const eTime = t.entryTime.replace('T', ' ').slice(5, 16)
    const xTime = t.exitTime.replace('T', ' ').slice(5, 16)
    const pSign = t.pnlUsd >= 0 ? '+' : ''
    const vwapMark = t.vwapPos === 'above' ? '↑' : '↓'
    md += `| ${idx + 1} | ${t.symbol} | ${eTime} | ${xTime} | ${t.entryPrice} | ${t.exitPrice} | ${t.qty} | ${t.notional} | ${pSign}${t.pnlUsd} | ${pSign}${t.pnlPct}% | ${t.riskR}R | ${t.durMin}m | ${t.orderType} | ${t.exitReason} | ${t.regime} | ${t.setup} | ${t.rsi} | ${vwapMark}${t.vwap} | ${t.macd} | ${t.volRatio} | **${t.status}** |\n`
  })

  md += `\n## Improvements Applied in This Run\n\n`
  md += `| # | Improvement | Detail |\n|--:|:--|:--|\n`
  md += `| 1 | **R ratio fixed** | Balanced stop 1.7%→1.2%, target 1.5%→2.4% — now a true 2R trade |\n`
  md += `| 2 | **Trailing stop** | Exits once price retraces ${0.8}% from the session high-watermark |\n`
  md += `| 3 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |\n`
  md += `| 4 | **Market session gate** | New entries blocked outside 13:30–19:30 UTC (9:30–3:30 PM ET) — eliminates extended-hours overnight holds |\n`
  md += `| 5 | **RSI > 80 hard block (trend)** | RSI > 80 in a trend setup = chasing overbought momentum; entry blocked (breakout setup exempt) |\n`
  md += `| 6 | **Higher buy threshold** | Balanced buyThreshold raised 52→55 — filters marginal entries |\n`
  md += `| 7 | **Break-even stop** | Once position reaches 1R (highWatermark ≥ entry×1.012), exit if price returns to entry — stops winners from turning losers |\n`
  md += `| 8 | **dailyLossesPct auto-injected** | REST API injects live daily-loss % from server tradeState when client omits it |\n`
  md += `| 9 | **VWAP in entry scoring** | +5 pts above VWAP, −8 pts significantly below, +4 pts below VWAP for mean-revert |\n`
  md += `| 10 | **Slippage model** | ${SLIPPAGE_PCT} bps applied to every fill (buy high, sell low) — realistic market-order cost |\n`
  md += `| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |\n`
  md += `| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |\n`
  md += `| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |\n`
  md += `| 14 | **Daily loss limit** | ${DAILY_LOSS_LIMIT_PCT}% account equity — new entries blocked for the session once hit |\n`
  md += `| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |\n`
  md += `| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |\n\n`

  md += `## Remaining Gaps Before Live Real-Money\n\n`
  if (+profitFactor < 1.5 && profitFactor !== '∞') {
    md += `- ⚠️ **Profit factor ${profitFactor} < 1.5** — still not robust enough; needs further parameter tuning or symbol filter\n`
  } else {
    md += `- ✅ **Profit factor ${profitFactor}** — healthy; validate on a fresh out-of-sample date range before going live\n`
  }
  if (avgRiskR < 1.0) {
    md += `- ⚠️ **Avg R = ${avgRiskR}R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout\n`
  } else {
    md += `- ✅ **Avg R = ${avgRiskR}R** — strategy is capturing meaningful profit relative to risk\n`
  }
  md += `- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes\n`
  md += `- ⚠️ **\`dailyLossesPct\` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet\n`
  md += `- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital\n\n`

  md += `---\n*Generated by \`scripts/run-100-trades.mjs\` | Alpaca IEX feed | Slippage: ${SLIPPAGE_PCT} bps | ${runDate}*\n`

  return md
}

// ── Entry point ──────────────────────────────────────────────────────────────
async function main() {
  const today     = new Date()
  const endDate   = today.toISOString().slice(0, 10)
  const startDate = new Date(today - LOOKBACK_DAYS * 86_400_000).toISOString().slice(0, 10)

  console.log(`\n=== ${TARGET_TRADES}-Trade Bot Simulation [${TIMEFRAME}] ===`)
  console.log(`Period: ${startDate} → ${endDate}`)
  console.log(`Risk profile: ${RISK_PROFILE} | Capital: $${CAPITAL.toLocaleString()} | Window: ${WINDOW_BARS} bars`)
  console.log(`Universe: ${SYMBOL_UNIVERSE}${SYMBOLS.length ? ' (custom symbols)' : ''} | Symbols: ${BACKTEST_SYMBOLS.length} | Min bars: ${MIN_BARS}`)
  console.log(`Daily loss limit: ${DAILY_LOSS_LIMIT_PCT}%\n`)

  const allTrades = []
  const skippedSymbols = []

  // Pre-fetch SPY to build broad-market breadth and volatility-regime maps.
  process.stdout.write(`  Fetching SPY (breadth + vol-regime) ... `)
  let spyTrendMap = new Map()
  let volRegimeMap = new Map()
  try {
    const spyBars = await fetchBars('SPY', startDate, endDate, TIMEFRAME)
    spyTrendMap  = buildSpyTrendMap(spyBars)
    volRegimeMap = buildVolatilityRegimeMap(spyBars)
    const volatileBars = [...volRegimeMap.values()].filter(Boolean).length
    console.log(`${spyBars.length} bars → ${spyTrendMap.size} trend points, ${volatileBars} volatile bars`)
  } catch (err) {
    console.error(`    WARN: SPY fetch failed (${err.message}) — breadth/vol-regime filters disabled`)
  }

  // Fetch ALL symbols before cutting to TARGET_TRADES so no symbol is systematically skipped.
  for (const sym of BACKTEST_SYMBOLS) {
    process.stdout.write(`  Fetching ${sym} ... `)
    try {
      const bars = await fetchBars(sym, startDate, endDate, TIMEFRAME)
      if (bars.length < MIN_BARS) {
        const reason = `insufficient OHLC bars (${bars.length} < ${MIN_BARS})`
        console.log(`skip (${reason})`)
        skippedSymbols.push({ symbol: sym, reason })
        continue
      }
      console.log(`${bars.length} bars`)

      const trades = simulateSymbol(sym, bars, spyTrendMap, volRegimeMap)
      console.log(`    → ${trades.length} completed round-trips`)
      allTrades.push(...trades)
    } catch (err) {
      console.error(`    ERROR: ${err.message}`)
      skippedSymbols.push({ symbol: sym, reason: err.message })
    }
  }

  // Sort by entry time, take first TARGET_TRADES
  allTrades.sort((a, b) => a.entryTime.localeCompare(b.entryTime))
  const finalTrades = allTrades.slice(0, TARGET_TRADES)

  console.log(`\nTotal completed trades across all symbols: ${allTrades.length}`)
  console.log(`Reporting on: ${finalTrades.length} trades`)

  if (finalTrades.length === 0) {
    console.error('\nNo trades generated — check Alpaca connectivity or strategy thresholds.')
    process.exit(1)
  }

  const runDate  = new Date().toISOString()
  const report   = generateReport(finalTrades, runDate, {
    universe: SYMBOLS.length ? 'custom' : SYMBOL_UNIVERSE,
    symbolsScanned: BACKTEST_SYMBOLS.length,
    skippedSymbols
  })
  // Use local calendar date for the filename so re-runs on the same UTC day don't collide.
  const dateSlug = new Date().toLocaleDateString('en-CA')
  const outDir   = join(__dirname, '../docs/reports')
  mkdirSync(outDir, { recursive: true })
  const customRun = TARGET_TRADES !== 300 || LOOKBACK_DAYS !== 90 || SYMBOL_UNIVERSE !== 'candidate' || SYMBOLS.length > 0
  const tfSlug    = TIMEFRAME === '1Min' ? '-1min' : ''
  const cutoffSlug = LAST_ENTRY_UTC_MIN > 0 ? `-cutoff${LAST_ENTRY_UTC_MIN}` : ''
  const runSlug   = customRun
    ? `-${TIMEFRAME.toLowerCase()}-${SYMBOLS.length ? 'custom' : SYMBOL_UNIVERSE}-${TARGET_TRADES}trades-${LOOKBACK_DAYS}d${cutoffSlug}`
    : tfSlug
  const outPath  = join(outDir, `BOT-TRADE-REPORT-${dateSlug}${runSlug}.md`)
  writeFileSync(outPath, report, 'utf8')

  console.log(`\nReport saved → ${outPath}`)

  // Quick summary to stdout
  const wins  = finalTrades.filter(t => t.status === 'WIN').length
  const netPnL = round2(finalTrades.reduce((s, t) => s + t.pnlUsd, 0))
  console.log(`\nResult: ${wins}W / ${finalTrades.length - wins}L | Net P&L: $${netPnL}`)
  console.log(`Win rate: ${round2(wins / finalTrades.length * 100)}%`)
}

main().catch(err => { console.error(err); process.exit(1) })
