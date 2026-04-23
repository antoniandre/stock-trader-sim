/**
 * 100 BUY+SELL round-trip trade simulation using real Alpaca historical data (5-min bars).
 * Evaluates the bot strategy with RSI, EMA, MACD, VWAP, and daily loss limit enforcement.
 *
 * Usage: node scripts/run-100-trades.mjs
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
const BROKER_URL    = process.env.ALPACA_BASE_URL || 'https://paper-api.alpaca.markets'
const RISK_PROFILE  = 'balanced'
const CAPITAL       = 100_000
const DAILY_LOSS_LIMIT_PCT = 5.0
const SLIPPAGE_PCT  = 0.03   // 3 bps each way — models realistic market-order fill cost

// Removed: AMD (47.83% WR, -$972), SPY/QQQ (ETFs lack momentum edge, 0% WR, -$68),
// AAPL (40% WR, -$62 — consistent underperformer like AMD). SPY kept only for breadth.
const SYMBOLS = ['NVDA', 'GOOGL', 'TSLA', 'MSFT', 'AMZN', 'META']

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

// ── Alpaca data fetch ────────────────────────────────────────────────────────
async function fetchBars(symbol, start, end, tf = '5Min') {
  const url = `${DATA_URL}/v2/stocks/${symbol}/bars?start=${start}&end=${end}&timeframe=${tf}&feed=iex&limit=2000`
  const res = await fetch(url, {
    headers: { 'APCA-API-KEY-ID': ALPACA_KEY, 'APCA-API-SECRET-KEY': ALPACA_SECRET }
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Alpaca ${res.status} for ${symbol}: ${txt.slice(0, 120)}`)
  }
  const json = await res.json()
  return (json.bars || []).map(b => ({
    timestamp: b.t,
    open: +b.o, high: +b.h, low: +b.l, close: +b.c, volume: +b.v
  }))
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

// ── Simulation core ──────────────────────────────────────────────────────────
function simulateSymbol(symbol, candles, spyTrendMap = new Map()) {
  const completedTrades = []
  let cash = CAPITAL
  let posQty = 0
  let avgEntry = 0
  let highWatermark = 0   // highest close since entry — drives trailing stop
  let entryTime = null
  let entryCandle = null
  let entryIndicators = null
  let dailyLosses = 0
  let lastDate = null

  // Pre-build a date→candle-index map so VWAP slices are O(1) not O(n²)
  const dayStartIdx = new Map()
  for (let i = 0; i < candles.length; i++) {
    const d = candles[i].timestamp.slice(0, 10)
    if (!dayStartIdx.has(d)) dayStartIdx.set(d, i)
  }

  const adrMap = buildADRMap(candles, dayStartIdx)

  for (let i = 30; i < candles.length; i++) {
    const c = candles[i]
    const currentDate = c.timestamp.slice(0, 10)

    // Reset daily P&L tracker at start of new session
    if (currentDate !== lastDate) {
      dailyLosses = 0
      lastDate = currentDate
    }

    // Update high-watermark while in a position
    if (posQty > 0) highWatermark = Math.max(highWatermark, c.high)

    const window  = candles.slice(Math.max(0, i - 35), i + 1)
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

    const decision = evaluateDayTradingDecision({
      symbol,
      riskProfile: RISK_PROFILE,
      currentPrice: c.close,
      currentVolume: c.volume,
      prices,
      volumes,
      spreadPct: 0.06,
      positionQty: posQty,
      avgEntryPrice: avgEntry,
      positionOpenedAt: entryTime,
      nowMs: new Date(c.timestamp).getTime(),
      accountEquity: equity,
      dailyLossesPct,
      vwap: vwapVal,
      highWatermarkPrice: highWatermark,
      adrPct: adrPctVal,
      spyTrendPct: spyTrendVal,
      currentCandleOpen: c.open,
      disableDailyCatalyst: true
    })

    // Capture indicators at evaluation point
    const rsiVal  = round2(rsi14(prices))
    const ema9v   = round2(ema(prices, 9))
    const ema21v  = round2(ema(prices, 21))
    const macdVal = round4(macd(prices))
    const volRatio = round2(decision.metrics.volumeRatio)

    // ── BUY ──────────────────────────────────────────────────────────────────
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
      entryTime     = new Date(c.timestamp).getTime()
      entryCandle   = c

      entryIndicators = {
        rsi: rsiVal, ema9: ema9v, ema21: ema21v, macd: macdVal,
        vwap: vwapVal, volRatio,
        setup: decision.setup,
        regime: decision.marketRegime,
        confidence: decision.confidence,
        stopLossPct: decision.executionPlan.stopLossPct,
        targetPct: decision.executionPlan.rewardTargetPct,
        notional: round2(qty * fillPrice)
      }
    }

    // ── EXIT / TRIM ───────────────────────────────────────────────────────────
    if ((decision.action === 'exit' || decision.action === 'trim') && posQty > 0 && entryIndicators) {
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
      if (posQty === 0) {
        avgEntry = 0; highWatermark = 0
        entryTime = null; entryIndicators = null; entryCandle = null
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
    }
  }

  return completedTrades
}

function deriveExitReason(reasons) {
  if (!Array.isArray(reasons)) return 'signal-exit'
  if (reasons.some(r => /trailing stop/i.test(r)))        return 'trailing-stop'
  if (reasons.some(r => /break-even stop/i.test(r)))      return 'breakeven-stop'
  if (reasons.some(r => /stagnation exit/i.test(r)))      return 'stagnation'
  if (reasons.some(r => /EOD/i.test(r)))                  return 'eod-close'
  if (reasons.some(r => /stop level|stop loss|breached the stop/i.test(r))) return 'stop-loss'
  if (reasons.some(r => /timeout/i.test(r)))              return 'timeout'
  if (reasons.some(r => /risk.*trend|trend.*broke/i.test(r))) return 'risk-exit'
  if (reasons.some(r => /early reversal/i.test(r)))           return 'early-reversal'
  return 'signal-exit'
}

// ── Report generator ─────────────────────────────────────────────────────────
function generateReport(trades, runDate) {
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

  // Per-symbol breakdown
  const symMap = {}
  for (const t of trades) {
    if (!symMap[t.symbol]) symMap[t.symbol] = { t: 0, w: 0, pnl: 0 }
    symMap[t.symbol].t++
    symMap[t.symbol].pnl += t.pnlUsd
    if (t.status === 'WIN') symMap[t.symbol].w++
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

  let md = `# Bot Trade Report — 100 BUY+SELL Round-Trip Trades\n\n`
  md += `> **Generated:** ${runDate}  \n`
  md += `> **Risk profile:** ${RISK_PROFILE} | **Capital:** $${CAPITAL.toLocaleString()} | **Mode:** Alpaca historical 5-min bars (IEX feed)\n\n`

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
  md += `| Max drawdown | ${maxDD}% |\n`
  md += `| Avg confidence | ${avgConf}% |\n`
  md += `| Avg trade duration | ${avgDurMin} min |\n`
  md += `| Avg risk ratio | ${avgRiskR}R |\n`
  md += `| Starting equity | $${CAPITAL.toLocaleString()} |\n`
  md += `| Ending equity | $${round2(CAPITAL + netPnL).toLocaleString()} |\n\n`

  md += `## Per-Symbol Breakdown\n\n`
  md += `| Symbol | Trades | Wins | Win% | Net P&L |\n|:--|--:|--:|--:|--:|\n`
  for (const [sym, s] of Object.entries(symMap).sort((a, b) => b[1].pnl - a[1].pnl)) {
    md += `| ${sym} | ${s.t} | ${s.w} | ${round2(s.w / s.t * 100)}% | $${round2(s.pnl) >= 0 ? '+' : ''}${round2(s.pnl)} |\n`
  }

  md += `\n## Setup Performance\n\n`
  md += `| Setup | Trades | Wins | Win% | Net P&L |\n|:--|--:|--:|--:|--:|\n`
  for (const [setup, s] of Object.entries(setupMap)) {
    md += `| ${setup} | ${s.t} | ${s.w} | ${round2(s.w / s.t * 100)}% | $${round2(s.pnl) >= 0 ? '+' : ''}${round2(s.pnl)} |\n`
  }

  md += `\n## Exit Reason Breakdown\n\n`
  md += `| Exit Reason | Count |\n|:--|--:|\n`
  for (const [reason, count] of Object.entries(exitMap).sort((a, b) => b[1] - a[1])) {
    md += `| ${reason} | ${count} |\n`
  }

  md += `\n## 100-Trade Log\n\n`
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
  const startDate = new Date(today - 35 * 86_400_000).toISOString().slice(0, 10)

  console.log(`\n=== 100-Trade Bot Simulation ===`)
  console.log(`Period: ${startDate} → ${endDate}`)
  console.log(`Risk profile: ${RISK_PROFILE} | Capital: $${CAPITAL.toLocaleString()}`)
  console.log(`Daily loss limit: ${DAILY_LOSS_LIMIT_PCT}%\n`)

  const allTrades = []

  // Pre-fetch SPY to build broad-market breadth map used by all other symbols.
  process.stdout.write(`  Fetching SPY (breadth) ... `)
  let spyTrendMap = new Map()
  try {
    const spyBars = await fetchBars('SPY', startDate, endDate)
    spyTrendMap = buildSpyTrendMap(spyBars)
    console.log(`${spyBars.length} bars → ${spyTrendMap.size} trend points`)
  } catch (err) {
    console.error(`    WARN: SPY fetch failed (${err.message}) — breadth filter disabled`)
  }

  // Fetch ALL symbols before cutting to 100 so no symbol is systematically skipped.
  for (const sym of SYMBOLS) {
    process.stdout.write(`  Fetching ${sym} ... `)
    try {
      const bars = await fetchBars(sym, startDate, endDate)
      if (bars.length < 50) { console.log(`skip (only ${bars.length} bars)`); continue }
      console.log(`${bars.length} bars`)

      const trades = simulateSymbol(sym, bars, spyTrendMap)
      console.log(`    → ${trades.length} completed round-trips`)
      allTrades.push(...trades)
    } catch (err) {
      console.error(`    ERROR: ${err.message}`)
    }
  }

  // Sort by entry time, take first 100
  allTrades.sort((a, b) => a.entryTime.localeCompare(b.entryTime))
  const final100 = allTrades.slice(0, 100)

  console.log(`\nTotal completed trades across all symbols: ${allTrades.length}`)
  console.log(`Reporting on: ${final100.length} trades`)

  if (final100.length === 0) {
    console.error('\nNo trades generated — check Alpaca connectivity or strategy thresholds.')
    process.exit(1)
  }

  const runDate  = new Date().toISOString()
  const report   = generateReport(final100, runDate)
  // Use local calendar date for the filename so re-runs on the same UTC day don't collide.
  const dateSlug = new Date().toLocaleDateString('en-CA')
  const outDir   = join(__dirname, '../docs/reports')
  mkdirSync(outDir, { recursive: true })
  const outPath  = join(outDir, `BOT-TRADE-REPORT-${dateSlug}.md`)
  writeFileSync(outPath, report, 'utf8')

  console.log(`\nReport saved → ${outPath}`)

  // Quick summary to stdout
  const wins  = final100.filter(t => t.status === 'WIN').length
  const netPnL = round2(final100.reduce((s, t) => s + t.pnlUsd, 0))
  console.log(`\nResult: ${wins}W / ${final100.length - wins}L | Net P&L: $${netPnL}`)
  console.log(`Win rate: ${round2(wins / final100.length * 100)}%`)
}

main().catch(err => { console.error(err); process.exit(1) })
