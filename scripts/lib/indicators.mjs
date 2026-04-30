/**
 * Shared technical-indicator helpers used by both the backtest (run-100-trades.mjs)
 * and the live/paper bot (live-bot.mjs).
 *
 * Candle format: functions accept both the backtest long-key format
 *   { high, low, close, volume, timestamp }
 * and the live-bot short-key format
 *   { h, l, c, v, t }
 * via internal accessors.
 */

// ── Candle field accessors ────────────────────────────────────────────────────
function _h(c)  { return c.h  ?? c.high }
function _l(c)  { return c.l  ?? c.low }
function _cl(c) { return c.c  ?? c.close }
function _v(c)  { return c.v  ?? c.volume }

// ── Basic math ────────────────────────────────────────────────────────────────
export function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
export function round2(v) { return Math.round((+v + Number.EPSILON) * 100) / 100 }
export function round4(v) { return Math.round((+v + Number.EPSILON) * 10000) / 10000 }
export function avg(arr)  { return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 0 }

// ── Price-series indicators ───────────────────────────────────────────────────

export function ema(prices, period) {
  if (!prices.length) return 0
  if (prices.length <= period) return avg(prices)
  const k = 2 / (period + 1)
  let e = avg(prices.slice(0, period))
  for (let i = period; i < prices.length; i++) e = prices[i] * k + e * (1 - k)
  return e
}

export function rsi14(prices) {
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

export function macd(prices) {
  if (prices.length < 26) return 0
  return ema(prices, 12) - ema(prices, 26)
}

// ── Candle-based indicators ───────────────────────────────────────────────────

/**
 * 14-period ATR as % of close.
 * @param {object[]} candles  Array of candles (long or short key format).
 * @param {number}   idx      Index of the current bar.
 */
export function atr14Pct(candles, idx) {
  if (idx < 1) return 0
  let total = 0, count = 0
  for (let i = Math.max(1, idx - 13); i <= idx; i++) {
    const c = candles[i], p = candles[i - 1]
    if (!c || !p) continue
    const h = _h(c), l = _l(c), pc = _cl(p)
    total += Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc))
    count++
  }
  const cl = _cl(candles[idx])
  return cl > 0 && count > 0 ? round4((total / count) / cl * 100) : 0
}

/**
 * Average 14-period ATR% over the 20 bars ending at (but not including) idx.
 * When idx is omitted the last bar is used — matches the live-bot calling convention.
 */
export function atrBaseline20Pct(candles, idx) {
  const end = idx ?? candles.length - 1
  if (end < 25) return 0
  let sum = 0, count = 0
  for (let i = end - 20; i < end; i++) {
    const v = atr14Pct(candles, i)
    if (v > 0) { sum += v; count++ }
  }
  return count > 0 ? sum / count : 0
}

/**
 * Session VWAP using typical price × volume.
 * @param {object[]} candles  Session-only candles (long or short key format).
 */
export function vwap(candles) {
  let tpv = 0, vol = 0
  for (const c of candles) {
    const tp = (_h(c) + _l(c) + _cl(c)) / 3
    tpv += tp * _v(c)
    vol += _v(c)
  }
  return vol > 0 ? tpv / vol : 0
}

/**
 * Higher-timeframe (15-min equivalent) bullish bias: EMA5 > EMA10 on resampled closes.
 *
 * @param {object[]} candles   Full candle array (long or short key format).
 * @param {number}   htfStep   Bars per 15-min period (3 for 5-min bars, 15 for 1-min bars).
 * @param {number}   [idx]     Bar to evaluate from; defaults to last bar.
 */
export function tf15Bullish(candles, htfStep, idx) {
  const start = idx ?? candles.length - 1
  const closes = []
  for (let k = start; k >= 0 && closes.length < 15; k -= htfStep) {
    closes.unshift(_cl(candles[k]))
  }
  if (closes.length < 10) return null
  return ema(closes, 5) > ema(closes, 10)
}

/**
 * Returns true when SPY's 5-bar ATR significantly exceeds its 20-bar baseline,
 * indicating a volatile macro regime.
 * @param {object[]} spyCandles  SPY candles (long or short key format).
 */
export function isMarketVolatile(spyCandles) {
  const n = spyCandles.length
  if (n < 21) return false
  let atr5 = 0
  for (let k = n - 5; k < n; k++) {
    const c = spyCandles[k], p = spyCandles[k - 1]
    if (!p) continue
    atr5 += Math.max(_h(c) - _l(c), Math.abs(_h(c) - _cl(p)), Math.abs(_l(c) - _cl(p)))
  }
  atr5 = (atr5 / 5) / _cl(spyCandles[n - 1]) * 100
  let atr20 = 0
  for (let k = n - 20; k < n; k++) {
    const c = spyCandles[k], p = spyCandles[k - 1]
    if (!p) continue
    atr20 += Math.max(_h(c) - _l(c), Math.abs(_h(c) - _cl(p)), Math.abs(_l(c) - _cl(p)))
  }
  atr20 = (atr20 / 20) / _cl(spyCandles[n - 1]) * 100
  return atr20 > 0 && atr5 > atr20 * 1.3
}
