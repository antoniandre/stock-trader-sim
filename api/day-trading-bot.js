import { formatTradingDayKey, getDailyCatalystForSymbol, summarizeCatalystRow } from './services/daily-catalysts.js'
import { resolveSymbolTradeProfile } from './services/symbol-trade-profiles.js'

// US regular-session window (UTC). Clocks are in EDT (UTC-4) March–Nov, EST (UTC-5) Nov–Mar.
// We use the EDT values year-round because the sim data is in EDT and the live bot
// feeds nowMs per-candle — any small EST offset just shifts the effective cutoff by 1 h,
// which is still well within the safe zone for avoiding extended-hours entries.
const SESSION_OPEN_UTC_MIN       = 13 * 60 + 30   // 9:30 AM EDT = 13:30 UTC
const SESSION_LAST_ENTRY_UTC_MIN = 18 * 60         // 2:00 PM EDT = 18:00 UTC — cut off power-hour entries (0% WR)
const SESSION_CLOSE_UTC_MIN      = 19 * 60 + 30    // 3:30 PM EDT = final live-bot entry window end

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function average(values) {
  if (!Array.isArray(values) || values.length === 0) return 0
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function percentChange(from, to) {
  if (!Number.isFinite(from) || !Number.isFinite(to) || from === 0) return 0
  return ((to - from) / from) * 100
}

function stdDev(values) {
  if (!Array.isArray(values) || values.length < 2) return 0
  const mean = average(values)
  const variance = average(values.map(value => (value - mean) ** 2))
  return Math.sqrt(variance)
}

function trendEfficiency(values) {
  const prices = Array.isArray(values) ? values.filter(Number.isFinite) : []
  if (prices.length < 4) return 0
  let path = 0
  for (let index = 1; index < prices.length; index += 1) {
    path += Math.abs(prices[index] - prices[index - 1])
  }
  const net = Math.abs(prices.at(-1) - prices[0])
  return path > 0 ? net / path : 0
}

// RSI (Wilder smoothing, 14-period default).
function calculateRSI(prices, period = 14) {
  if (!Array.isArray(prices) || prices.length < period + 1) return 50
  let gains = 0, losses = 0
  for (let i = prices.length - period; i < prices.length; i++) {
    const delta = prices[i] - prices[i - 1]
    if (delta > 0) gains += delta
    else losses += Math.abs(delta)
  }
  const avgGain = gains / period
  const avgLoss = losses / period
  if (avgLoss === 0) return 100
  const rs = avgGain / avgLoss
  return 100 - (100 / (1 + rs))
}

// True EMA.
function calculateEMA(prices, period) {
  if (!Array.isArray(prices) || prices.length === 0) return 0
  if (prices.length <= period) return average(prices)
  const k = 2 / (period + 1)
  let ema = average(prices.slice(0, period))
  for (let i = period; i < prices.length; i++) ema = prices[i] * k + ema * (1 - k)
  return ema
}

// MACD: line, signal (9-EMA of line), and histogram (line - signal).
// Histogram direction is the real signal — not just line > 0.
function calculateMACD(prices) {
  if (!Array.isArray(prices) || prices.length < 26) return { line: 0, signal: 0, histogram: 0 }
  // Need enough bars to build the MACD history for the signal EMA.
  // Compute MACD line for each of the last 35 bars, then 9-EMA of that.
  const macdHistory = []
  for (let i = Math.max(25, prices.length - 35); i < prices.length; i++) {
    const slice = prices.slice(0, i + 1)
    if (slice.length >= 26) macdHistory.push(calculateEMA(slice, 12) - calculateEMA(slice, 26))
  }
  const line = macdHistory.at(-1) ?? 0
  const signal = macdHistory.length >= 9 ? calculateEMA(macdHistory, 9) : line
  return { line, signal, histogram: line - signal }
}

export const RISK_PROFILES = {
  conservative: {
    maxRiskScoreForEntry: 34,
    buyThreshold: 64,
    addThreshold: 74,
    trimThreshold: 58,
    exitThreshold: 74,
    basePositionSizePct: 0.06,
    maxPositionSizePct: 0.12,
    stopLossPct: 0.8,          // tighter stop — cleaner risk control
    trailingStopPct: 0.5,      // trail from high-watermark once in profit
    trimFraction: 0.35,
    rewardTargetPct: 1.6,      // 2R target (2 × 0.8% stop)
    dailyLossLimitPct: 2.0
  },
  balanced: {
    maxRiskScoreForEntry: 46,
    buyThreshold: 55,
    addThreshold: 60,
    trimThreshold: 48,
    exitThreshold: 68,
    basePositionSizePct: 0.1,
    maxPositionSizePct: 0.2,
    stopLossPct: 1.2,          // tighter stop (was 1.7%) — fires sooner, keeps losses small
    trailingStopPct: 0.8,      // trail from high-watermark (was 1.2%) — override per timeframe via strategyParams.trailingStopPct
    trimFraction: 0.5,         // capture half at first target (was 0.4 — too little)
    rewardTargetPct: 2.4,      // 2R target (2 × 1.2% stop) — was 1.5% which was sub-1R
    dailyLossLimitPct: 5.0
  },
  aggressive: {
    maxRiskScoreForEntry: 58,
    buyThreshold: 54,
    addThreshold: 63,
    trimThreshold: 50,
    exitThreshold: 63,
    basePositionSizePct: 0.14,
    maxPositionSizePct: 0.28,
    stopLossPct: 1.8,          // tighter stop (was 2.4%)
    trailingStopPct: 1.2,      // trail from high-watermark (was 1.7%)
    trimFraction: 0.5,
    rewardTargetPct: 3.6,      // 2R target (2 × 1.8% stop)
    dailyLossLimitPct: 8.0
  }
}

function validateRisk({ entryPrice, stopLossPrice, positionSize, accountEquity }) {
  if (!Number.isFinite(entryPrice) || !Number.isFinite(stopLossPrice) || !Number.isFinite(positionSize) || !Number.isFinite(accountEquity)) {
    return { valid: false, lossPercent: 1, detail: 'Invalid risk parameters' };
  }
  const lossPercent = positionSize > 0 ? (entryPrice - stopLossPrice) * positionSize / accountEquity : 0;
  return {
    valid: lossPercent <= 0.02,
    lossPercent,
    ratio: stopLossPrice > entryPrice ? (entryPrice - stopLossPrice) / (stopLossPrice - entryPrice) : 0
  };
}

export function evaluateDayTradingDecision(input = {}) {
  const profileName = input.riskProfile in RISK_PROFILES ? input.riskProfile : 'balanced'
  const profile = RISK_PROFILES[profileName]
  const strategyParams = input.strategyParams || {}

  const prices = Array.isArray(input.prices) ? input.prices.filter(Number.isFinite) : Array.isArray(input.stock?.history?.prices) ? input.stock.history.prices.filter(Number.isFinite) : []
  const volumes = Array.isArray(input.volumes) ? input.volumes.filter(Number.isFinite) : Array.isArray(input.stock?.history?.volumes) ? input.stock.history.volumes.filter(Number.isFinite) : []
  const currentPrice = Number(input.currentPrice ?? prices.at(-1) ?? 0)
  const prevPrice = Number(prices.at(-2) ?? currentPrice)
  const shortWindow = prices.slice(-5)
  const mediumWindow = prices.slice(-12)
  const longWindow = prices.slice(-30)

  const shortTrendPct = percentChange(shortWindow[0] ?? currentPrice, currentPrice)
  const mediumTrendPct = percentChange(mediumWindow[0] ?? currentPrice, currentPrice)
  const longTrendPct = percentChange(longWindow[0] ?? currentPrice, currentPrice)
  const recentTrendEfficiency = trendEfficiency(prices.slice(-20))
  const momentumPct = percentChange(prevPrice, currentPrice)

  const avgVolume = average(volumes.slice(-20))
  const currentVolume = Number(input.currentVolume ?? volumes.at(-1) ?? avgVolume)
  const volumeRatio = avgVolume > 0 ? currentVolume / avgVolume : 1

  const realizedVolatilityPct = currentPrice > 0
    ? (stdDev(shortWindow.length ? shortWindow : [currentPrice]) / currentPrice) * 100
    : 0

  const spreadPct = Number(input.spreadPct ?? 0)
  const positionQty = Number(input.positionQty ?? 0)
  const avgEntryPrice = Number(input.avgEntryPrice ?? currentPrice)
  const unrealizedPnLPct = positionQty > 0 ? percentChange(avgEntryPrice, currentPrice) : 0
  const marketRegime = input.marketRegime || inferMarketRegime({ shortTrendPct, mediumTrendPct, longTrendPct, realizedVolatilityPct, trendEfficiency: recentTrendEfficiency })

  // Technical indicators.
  const rsi14 = calculateRSI(prices)
  const ema9 = calculateEMA(prices, 9)
  const ema21 = calculateEMA(prices, 21)
  const { line: macdLine, signal: macdSignal, histogram: macdHistogram } = calculateMACD(prices)
  const rsiOverbought = rsi14 > 70
  const rsiOversold = rsi14 < 30
  const emaBullish = ema9 > ema21

  // VWAP — intraday fair-value anchor (caller computes from OHLCV candles)
  const vwap = Number(input.vwap ?? 0)
  const vwapDevPct = vwap > 0 && currentPrice > 0 ? ((currentPrice - vwap) / vwap) * 100 : 0

  // High-watermark for trailing stop (caller tracks the highest price since entry)
  const highWatermarkPrice = Number(input.highWatermarkPrice ?? 0)

  // ATR-based dynamic stop: normalize stop distance to actual symbol/day volatility.
  // 3.0× the 5-min ATR gives ~1 full average bar of room; clamped so it can't go below
  // the minimum meaningful stop (0.7%) or above a sensible max (2.0%).
  const atrPct = Number(input.atrPct ?? 0)
  const atrBaselinePct = Number(input.atrBaselinePct ?? 0)
  const stopFloor = Number(strategyParams.stopFloorPct ?? 0.7)
  const atrMultiplier = Number(strategyParams.atrMultiplier ?? 3.0)
  const dynamicStopPct = atrPct > 0 ? clamp(atrPct * atrMultiplier, stopFloor, 2.0) : profile.stopLossPct

  // Trailing stop: profile default, but caller can override via strategyParams.trailingStopPct
  // (used to pass 1-min specific value without touching the risk profile).
  const trailingStopPct = Number(strategyParams.trailingStopPct ?? profile.trailingStopPct)
  const effectiveRewardPct = Number(strategyParams.rewardTargetPct ?? profile.rewardTargetPct)
  const rewardRiskRatio = dynamicStopPct > 0 ? effectiveRewardPct / dynamicStopPct : 0

  // Daily loss limit enforcement — block new entries when limit reached.
  const dailyLossesPct = Number(input.dailyLossesPct ?? 0)
  const dailyLossLimitReached = profile.dailyLossLimitPct > 0 && dailyLossesPct >= profile.dailyLossLimitPct

  const liquidityOk = spreadPct <= 0.18 && volumeRatio >= 0.85
  const volatilityOkForMeanReversion = realizedVolatilityPct >= 0.18 && realizedVolatilityPct <= 1.35
  const weakLiquidity = spreadPct > 0.3 || volumeRatio < 0.7
  const weakVolatilityForEntries = realizedVolatilityPct < 0.12 || realizedVolatilityPct > 1.8
  const weakEvidence = weakLiquidity || weakVolatilityForEntries

  const rawSetup = classifySetup({
    shortTrendPct,
    mediumTrendPct,
    longTrendPct,
    momentumPct,
    liquidityOk,
    volatilityOkForMeanReversion,
    volumeRatio,
    realizedVolatilityPct
  })
  // Mean-revert is unprofitable at 5-min (36% WR) but profitable at 1-min. Opt in via enableMeanRevert.
  // Breakout is structurally noisy at 1-min (not enough bars to confirm). Opt out via enableBreakout = false.
  let setup = rawSetup === 'mean-revert' && !strategyParams.enableMeanRevert ? 'weak' : rawSetup
  if (setup === 'breakout' && strategyParams.enableBreakout === false) setup = 'weak'
  if (setup === 'weak' && strategyParams.enablePilotWeakMomentum === true) {
    const pilotWeakMomentum = marketRegime === 'trend'
      && volumeRatio >= Number(strategyParams.pilotWeakMomentumMinVolumeRatio ?? 1.2)
      && spreadPct <= Number(strategyParams.pilotWeakMomentumMaxSpreadPct ?? 0.12)
      && realizedVolatilityPct <= Number(strategyParams.pilotWeakMomentumMaxVolatilityPct ?? 3)
    if (pilotWeakMomentum) setup = 'momentum-pilot'
  }

  // RSI > 80 into a trend setup = chasing overbought momentum — block entry.
  // Breakout stays exempt: META/GOOGL can sustain elevated RSI on genuine volume expansion.
  const rsiBadForMomentumEntry = rsi14 > 80 && setup === 'trend'

  // HARD GATES — these block entries regardless of score.
  // Evidence from 100-trade analysis (2026-04-23):
  // 1. VWAP gate: 14 below-VWAP trend/breakout entries produced -$897 gross loss.
  //    Mean-revert is exempt — it intentionally buys pullbacks below VWAP.
  const pilotVwapPullback = Boolean(strategyParams.enablePilotVwapPullback)
    && setup === 'momentum-pilot'
    && marketRegime === 'trend'
    && vwapDevPct >= -Number(strategyParams.pilotVwapPullbackMaxPct ?? 0.6)
    && volumeRatio >= 2
    && spreadPct <= 0.08
    && rewardRiskRatio >= 2
  const vwapBearishGate = vwap > 0 && vwapDevPct < -0.2 && setup !== 'mean-revert' && !pilotVwapPullback
  // 2. MACD gate: line strongly negative means established bearish momentum.
  //    Histogram requirement dropped — when MACD has been falling for a while the signal
  //    line can be more negative than the MACD line, making the histogram briefly positive
  //    even on a -3.37 MACD. Gate on the line alone.
  const macdBearishGate = macdLine < -1.0 && setup !== 'mean-revert'
  // 3. Candle direction gate: buying a red bar (close < open) means entering on selling pressure.
  //    Require the signal candle to close above its open for trend/breakout entries.
  const currentCandleOpen = Number(input.currentCandleOpen ?? 0)
  const shallowPilotPullbackCandle = Boolean(strategyParams.enablePilotPullbackCandle)
    && setup === 'momentum-pilot'
    && currentCandleOpen > 0
    && currentPrice < currentCandleOpen
    && ((currentCandleOpen - currentPrice) / currentCandleOpen) * 100 <= Number(strategyParams.pilotPullbackMaxRedPct ?? 0.08)
    && marketRegime === 'trend'
    && volumeRatio >= 1.2
    && spreadPct <= 0.05
  const bearishCandleGate = currentCandleOpen > 0 && currentPrice < currentCandleOpen && setup !== 'mean-revert' && !shallowPilotPullbackCandle

  // Structural context inputs.
  // Opening Range Breakout: first-30-min high/low (only valid after 14:00 UTC / 10am ET).
  const orbHigh = Number(input.orbHigh ?? 0)
  const orbLow  = Number(input.orbLow  ?? 0)
  // 15-min trend: EMA5 > EMA10 on resampled closes. null = insufficient history (no penalty).
  const tf15Bullish = 'tf15Bullish' in input ? input.tf15Bullish : null
  // Circuit breaker: set by caller after 2 consecutive losses on this symbol.
  const circuitBreakerActive = Boolean(input.circuitBreakerActive ?? false)

  // External context inputs for market-breadth and volatility filters.
  const adrPct = Number(input.adrPct ?? 0)           // caller: 5-day avg daily range as % of close
  const spyTrendPct = Number(input.spyTrendPct ?? 0) // caller: SPY 5-bar short-trend %
  // SPY rolling-ATR regime: true when 5-bar ATR is 30%+ above the 20-bar baseline.
  const marketVolatileRegime = Boolean(input.marketVolatileRegime ?? false)
  // VWAP reclaim: price crossed from below VWAP to above within the last bar.
  const vwapReclaim = Boolean(input.vwapReclaim ?? false)
  // Setup at the time of entry — passed back by caller on each in-position bar.
  const entrySetup = input.entrySetup ?? null

  // Compute nowMs here so time-of-day awareness can inform entry scoring AND position management.
  const nowMs = Number.isFinite(input.nowMs) ? input.nowMs : Date.now()
  const requestedBarDurationMs = Number(input.barDurationMs ?? strategyParams.barDurationMs ?? 5 * 60 * 1000)
  const barDurationMs = Number.isFinite(requestedBarDurationMs) && requestedBarDurationMs > 0
    ? requestedBarDurationMs
    : 5 * 60 * 1000
  const _nowDate = new Date(nowMs)
  const _sessionMinute = _nowDate.getUTCHours() * 60 + _nowDate.getUTCMinutes()
  const lastEntryMaxUtcMin = strategyParams.allowLateEntries === true
    ? SESSION_CLOSE_UTC_MIN
    : SESSION_LAST_ENTRY_UTC_MIN
  const lastEntryUtcMin = clamp(
    Number(strategyParams.lastEntryUtcMin ?? SESSION_LAST_ENTRY_UTC_MIN),
    SESSION_OPEN_UTC_MIN,
    lastEntryMaxUtcMin
  )
  const inRegularSession = _sessionMinute >= SESSION_OPEN_UTC_MIN && _sessionMinute < lastEntryUtcMin
  const isAfternoon = _sessionMinute >= 18 * 60   // after 2:00 PM ET (18:00 UTC): volume thins
  const behaviorClassifierMode = ['observe', 'apply'].includes(String(strategyParams.behaviorClassifierMode || '').toLowerCase())
    ? String(strategyParams.behaviorClassifierMode).toLowerCase()
    : (strategyParams.enableBehaviorClassifier ? 'apply' : 'off')
  const shouldClassifyBehavior = behaviorClassifierMode !== 'off'
  const shouldApplyBehavior = behaviorClassifierMode === 'apply'
  const rawSymbolBehavior = shouldClassifyBehavior
    ? classifySymbolBehavior({
        prices,
        volumes,
        currentPrice,
        vwap,
        volumeRatio,
        realizedVolatilityPct,
        atrPct,
        adrPct,
        orbHigh,
        orbLow,
        tf15Bullish,
        marketRegime,
        setup,
        rsi14,
        macdLine,
        macdHistogram,
        vwapDevPct,
        sessionMinute: _sessionMinute,
        spreadPct
      })
    : {
        profile: 'neutral',
        confidence: 0,
        entryScoreAdj: 0,
        riskScoreAdj: 0,
        thresholdAdj: 0,
        sizeMultiplier: 1,
        blockSetups: [],
        tradeState: 'neutral',
        strategyAction: 'off',
        metrics: {},
        reasons: []
      }
  const symbolBehavior = shouldApplyBehavior
    ? rawSymbolBehavior
    : {
        ...rawSymbolBehavior,
        mode: behaviorClassifierMode,
        observedOnly: shouldClassifyBehavior,
        entryScoreAdj: 0,
        riskScoreAdj: 0,
        thresholdAdj: 0,
        sizeMultiplier: 1,
        blockSetups: [],   // in observe mode classifier labels but never acts
        strategyAction: 'observe-only'
      }

  const effectiveProfile = resolveSymbolTradeProfile({
    symbol: input.symbol,
    setup,
    marketRegime,
    prices,
    volumeRatio,
    spreadPct,
    atrPct,
    vwapDevPct,
    realizedVolatilityPct,
    rsi14,
    behaviorProfile: symbolBehavior.profile,
    tradeState: symbolBehavior.tradeState,
    dailyLossesPct,
    rollingExpectancy: input.rollingExpectancy,
    nowMs
  })

  let entryScore = 50 + Number(strategyParams.entryBias || 0)
  if (shortTrendPct > 0.35) entryScore += 12
  if (mediumTrendPct > 0.8) entryScore += 10
  if (longTrendPct > 1.5) entryScore += 8
  if (momentumPct > 0.15) entryScore += 8
  if (volumeRatio > 1.2) entryScore += 10
  if (volumeRatio > 1.8) entryScore += 8
  if (marketRegime === 'trend') entryScore += 8
  if (marketRegime === 'chop') entryScore -= 12
  if (marketRegime === 'breakout') entryScore += 12
  if (marketRegime === 'bearish') entryScore -= 20   // short AND medium both down: strong suppression
  if (shortTrendPct < -0.5) entryScore -= 16

  if (setup === 'mean-revert') {
    entryScore += 18
    if (shortTrendPct < -0.25) entryScore += 6
    if (Math.abs(mediumTrendPct) < 0.6) entryScore += 4
  }

  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) entryScore -= 24
  if (marketRegime === 'bearish' && (setup === 'trend' || setup === 'breakout')) entryScore -= 12
  if (setup === 'breakout' && marketRegime !== 'breakout') entryScore -= 10
  if (setup === 'weak') entryScore -= 14
  if (weakEvidence) entryScore -= 12

  // RSI signal: overbought suppresses new longs; oversold boosts mean-reversion.
  if (rsiOverbought) entryScore -= 8
  if (rsiOversold && setup === 'mean-revert') entryScore += 10
  else if (rsi14 < 40 && setup === 'mean-revert') entryScore += 4
  else if (rsi14 >= 50 && rsi14 <= 70) entryScore += 6  // trend momentum sweet spot.

  // EMA crossover: 9 > 21 = short-term bullish structure.
  if (emaBullish) entryScore += 6
  else entryScore -= 6

  // MACD: use histogram (line - signal) to detect momentum acceleration, not just direction.
  // Histogram > 0 and rising = bulls accelerating. Histogram < 0 and falling = bears in control.
  if (macdHistogram > 0) entryScore += 7              // bullish momentum accelerating
  else if (macdHistogram < 0) entryScore -= 7         // bearish momentum
  if (macdLine > 0 && macdHistogram > 0) entryScore += 3   // both confirm bullish: double reward
  if (macdLine < 0 && macdHistogram < 0) entryScore -= 3   // double bearish confirmation

  // VWAP: price relative to intraday fair value — only applied when caller provides it.
  if (vwap > 0) {
    if (vwapDevPct > 0.2) entryScore += 6             // above VWAP: trend has institutional support
    if (vwapDevPct > 0.5) entryScore += 4             // well above VWAP: strong institutional buying
    if (vwapDevPct < -0.5) entryScore -= 10           // significantly below VWAP: strong distribution signal
    else if (vwapDevPct < 0 && setup === 'mean-revert') entryScore += 4  // below VWAP + oversold = snapback opportunity
  }
  // VWAP reclaim: fresh cross from below to above = institutional re-entry signal.
  if (vwapReclaim && setup !== 'mean-revert') entryScore += 10

  // Time-of-day: afternoon volume thins and intraday moves often exhaust by 2 PM ET.
  if (isAfternoon) entryScore -= 6

  // ADR: if the typical daily range is too tight to reach the reward target, quality is lower.
  if (adrPct > 0 && adrPct < profile.rewardTargetPct * 1.2) entryScore -= 8

  // ORB: price position relative to the session's first-30-min range.
  // Above ORB high = confirmed directional break with institutional order flow.
  // Below ORB low = bearish structure — no long entries.
  if (orbHigh > 0 && orbLow > 0) {
    const orbMid = (orbHigh + orbLow) / 2
    if (currentPrice > orbHigh)     entryScore += 12  // ORB breakout: strong momentum confirmation
    else if (currentPrice > orbMid) entryScore += 3   // above midpoint: mild bullish
    else if (currentPrice > orbLow) entryScore -= 8   // below midpoint: inside range, no conviction
    else                            entryScore -= 16  // below ORB low: bearish structure
  }

  // 15-min trend: higher-timeframe EMA direction filters counter-trend 5-min entries.
  // Most intraday losses come from fighting the HTF trend — this explicitly penalises them.
  if (tf15Bullish === true) {
    entryScore += 8
  } else if (tf15Bullish === false) {
    entryScore -= 12
    if (setup === 'trend') entryScore -= 4  // trend entries against HTF are doubly suppressed
  }
  // ATR expansion: per-bar volatility 40%+ above the 20-bar baseline means a real directional
  // move is underway (not just random noise) — reward breakout entries in this regime.
  if (atrBaselinePct > 0 && atrPct > atrBaselinePct * 1.4 && setup === 'breakout') entryScore += 6

  entryScore += symbolBehavior.entryScoreAdj
  entryScore += effectiveProfile.entryScoreAdj

  const dailyCatalystRow = input.disableDailyCatalyst
    ? null
    : ('dailyCatalyst' in input ? input.dailyCatalyst : getDailyCatalystForSymbol(input.symbol))

  let dailyCatalystForResponse = null
  if (dailyCatalystRow && typeof dailyCatalystRow === 'object') {
    const pre = String(dailyCatalystRow.premarket_direction_and_gap || '')
    const scoreLabel = String(dailyCatalystRow.catalyst_score || '').toLowerCase()
    const priority = String(dailyCatalystRow.priority || '').toLowerCase()
    const gapDown = /gap-down/i.test(pre)
    const gapUp = /gap-up/i.test(pre)

    let catalystEntryDelta = 0
    if (scoreLabel.includes('strong')) catalystEntryDelta += 5
    else if (scoreLabel.includes('moderate')) catalystEntryDelta += 2
    if (priority.includes('high')) catalystEntryDelta += 3
    else if (priority.includes('medium')) catalystEntryDelta += 1
    if (gapUp) catalystEntryDelta += 4
    if (gapDown) catalystEntryDelta -= 7

    const confLetter = String(dailyCatalystRow.confidence || '').toUpperCase()
    if (confLetter === 'A') catalystEntryDelta += 2
    else if (confLetter === 'B') catalystEntryDelta += 1

    entryScore += catalystEntryDelta

    dailyCatalystForResponse = summarizeCatalystRow(dailyCatalystRow)
  }

  entryScore = clamp(entryScore, 0, 100)

  let riskScore = 18 + Number(strategyParams.riskBias || 0)
  riskScore += clamp(spreadPct * 12, 0, 20)
  riskScore += clamp(realizedVolatilityPct * 7, 0, 28)
  if (volumeRatio < 0.75) riskScore += 12
  if (Math.abs(momentumPct) > 1.2) riskScore += 12
  if (marketRegime === 'chop') riskScore += 16
  if (marketRegime === 'bearish') riskScore += 18   // sustained negative momentum = elevated reversal risk on longs
  if (marketRegime === 'breakout') riskScore += 5
  if (weakLiquidity) riskScore += 12
  if (weakVolatilityForEntries) riskScore += 10
  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) riskScore += 16
  if (rsiOverbought) riskScore += 8 // overbought = elevated reversal risk for new longs.
  if (rsi14 < 25) riskScore += 5 // extreme oversold = elevated volatility risk.
  if (vwap > 0 && vwapDevPct < -0.5) riskScore += 6  // selling below VWAP = weakness raises risk
  // SPY breadth: broad-market weakness raises risk for individual stock longs.
  if (spyTrendPct < -0.3) riskScore += 8
  if (spyTrendPct < -0.8) riskScore += 10  // strong sell pressure: cumulative +18
  if (spyTrendPct < -1.2) riskScore += 15  // freefall: cumulative +33, pushes past maxRiskScoreForEntry
  if (orbHigh > 0 && currentPrice <= orbLow) riskScore += 12  // below ORB low = confirmed bearish structure
  riskScore += symbolBehavior.riskScoreAdj
  riskScore += effectiveProfile.riskScoreAdj
  riskScore = clamp(riskScore, 0, 100)

  const managementScore = clamp(
    50 + (unrealizedPnLPct * 10) + (shortTrendPct * 8) - (realizedVolatilityPct * 6),
    0,
    100
  )

  let confidence = clamp(Math.round(entryScore - riskScore * 0.3), 0, 100)
  if (entryScore >= 62 && riskScore <= 40) confidence = clamp(confidence + 12, 0, 100)
  if (weakEvidence) confidence = clamp(confidence - 10, 0, 100)
  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) confidence = clamp(confidence - 18, 0, 100)
  const lowConfidence = confidence < 56

  const reasons = []

  if (shortTrendPct > 0.35) reasons.push('Short-term momentum is positive')
  if (mediumTrendPct > 0.8) reasons.push('Medium trend is supportive')
  if (volumeRatio > 1.2) reasons.push('Volume confirms the move')
  if (spreadPct > 0.35) reasons.push('Spread is wide, execution risk is higher')
  if (realizedVolatilityPct > 1.4) reasons.push('Volatility is elevated')
  if (marketRegime === 'chop') reasons.push('Market regime is choppy')
  if (marketRegime === 'trend') reasons.push('Market regime favors trend continuation')
  if (marketRegime === 'bearish') reasons.push('Market regime is bearish — short and medium trends both negative')
  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) {
    reasons.push('Trend and breakout entries are suppressed during chop')
  }
  if (marketRegime === 'bearish' && (setup === 'trend' || setup === 'breakout')) {
    reasons.push('Trend and breakout entries are suppressed in bearish regime')
  }
  if (setup === 'mean-revert') {
    reasons.push(liquidityOk && volatilityOkForMeanReversion
      ? 'Mean-reversion conditions are acceptable for a controlled snapback entry'
      : 'Mean-reversion is present, but execution conditions still need work')
  }
  if (weakEvidence) reasons.push('Liquidity or volatility conditions make the signal unreliable')
  if (lowConfidence) reasons.push('Confidence is below the bar for a fresh trade')
  if (symbolBehavior.profile !== 'neutral') {
    reasons.push(`${shouldApplyBehavior ? 'Applied' : 'Observed'} symbol behavior profile: ${symbolBehavior.profile}`)
    for (const reason of symbolBehavior.reasons) reasons.push(reason)
  }
  if (effectiveProfile.name !== 'default' || effectiveProfile.activeGates.length) {
    reasons.push(`Effective trade profile: ${effectiveProfile.name}`)
    for (const reason of effectiveProfile.reasons.slice(0, 3)) reasons.push(reason)
    for (const gate of effectiveProfile.activeGates) reasons.push(`Profile gate: ${gate}`)
  }

  if (dailyCatalystForResponse) {
    const text = String(dailyCatalystRow.catalyst || '')
    const clipped = text.length > 180 ? `${text.slice(0, 180)}…` : text
    reasons.push(
      `Daily catalyst (${dailyCatalystForResponse.catalyst_score || 'n/a'}, ${dailyCatalystForResponse.priority || 'n/a'}): ${clipped}`
    )
  }

  let action = 'hold'
  // Trend WR 43-51% across 90 days — require near-breakout quality.
  // Default +15 bias (balanced → 70); caller can override via strategyParams.trendThresholdBoost
  // for noisier timeframes (e.g. 1-min uses +20 → threshold 75).
  const trendBoost = Number(strategyParams.trendThresholdBoost ?? 15)
  const breakoutBoost = Number(strategyParams.breakoutThresholdAdj ?? strategyParams.breakoutThresholdBoost ?? 0)
  const buyThreshold = profile.buyThreshold
    + (setup === 'mean-revert' ? -4 : 0)
    + (setup === 'trend'       ? trendBoost : 0)
    + (setup === 'breakout'    ? breakoutBoost : 0)
    + (setup === 'momentum-pilot' ? Number(strategyParams.momentumPilotThresholdBoost ?? 12) : 0)
    + Number(symbolBehavior.thresholdAdj || 0)
    + Number(effectiveProfile.thresholdAdj || 0)
  const addThreshold = profile.addThreshold + (marketRegime === 'chop' ? 8 : 0)
  const profileSpreadGate = spreadPct > effectiveProfile.maxSpreadPct
  const profileVolumeGate = volumeRatio > 0 && volumeRatio < effectiveProfile.minVolumeRatio
  const profileSetupGate = Array.isArray(effectiveProfile.blockSetups) && effectiveProfile.blockSetups.includes(setup)
  const profileRrGate = rewardRiskRatio > 0 && rewardRiskRatio < effectiveProfile.minRewardRiskRatio
  const allowNewEntry = riskScore <= profile.maxRiskScoreForEntry
    && !(marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout'))
    && !(marketRegime === 'mixed' && setup === 'trend')   // trend in ambiguous regime = low edge
    && !(marketRegime === 'bearish' && setup !== 'mean-revert')  // bearish regime: only mean-revert longs allowed
    && !profileSpreadGate
    && !profileVolumeGate
    && !profileSetupGate
    && !profileRrGate
  const pilotHtfOverride = Boolean(strategyParams.enablePilotHtfOverride)
    && setup === 'trend'
    && marketRegime === 'trend'
    && tf15Bullish === false
    && entryScore >= buyThreshold + 8
    && riskScore <= profile.maxRiskScoreForEntry
    && volumeRatio >= 1.8
    && spreadPct <= 0.12
  const pilotScoutEntry = Boolean(strategyParams.enablePilotScoutEntry)
    && setup === 'trend'
    && marketRegime === 'trend'
    && allowNewEntry
    && entryScore >= buyThreshold - Number(strategyParams.pilotScoutThresholdDiscount ?? 10)
    && confidence >= 55
    && volumeRatio >= 1.2
    && spreadPct <= 0.12
    && rewardRiskRatio >= 2

  if (positionQty <= 0) {
    if (dailyLossLimitReached) {
      action = 'wait'
      reasons.push(`Daily loss limit reached (${dailyLossesPct.toFixed(1)}% of equity ≥ ${profile.dailyLossLimitPct}% limit) — no new entries today`)
    }
    else if (!inRegularSession) {
      action = 'wait'
      reasons.push('Entry cutoff: after 2:00 PM ET — no fresh bot entries this late in the session')
    }
    else if (rsiBadForMomentumEntry) {
      action = 'wait'
      reasons.push(`RSI ${round(rsi14)} > 80 in a trend setup — chasing overbought momentum; waiting for RSI to cool below 80`)
    }
    else if (circuitBreakerActive) {
      action = 'wait'
      reasons.push('Circuit breaker: 2 consecutive losses on this symbol — pausing new entries for 30 min')
    }
    else if (setup !== 'mean-revert' && marketRegime === 'bearish') {
      action = 'wait'
      reasons.push('Bearish regime: both short and medium-term momentum are negative — no trend or breakout longs into a falling stock')
    }
    else if (setup === 'trend' && marketVolatileRegime) {
      action = 'wait'
      reasons.push('Volatility-regime gate: SPY ATR is elevated — suppressing trend entries until market calms')
    }
    else if (setup === 'trend' && tf15Bullish === false && !pilotHtfOverride) {
      action = 'wait'
      reasons.push('HTF gate: 15-min trend is bearish — no trend entries against higher-timeframe direction')
    }
    else if (setup === 'trend' && orbHigh > 0 && currentPrice <= orbHigh) {
      action = 'wait'
      reasons.push(`ORB gate: price ${round(currentPrice)} has not broken above ORB high ${round(orbHigh)} — trend entry requires confirmed range breakout`)
    }
    else if ((setup === 'trend' || setup === 'breakout' || setup === 'momentum-pilot') && volumeRatio < 1.0) {
      action = 'wait'
      reasons.push(`Volume gate: ${setup} entry blocked — volume ${round(volumeRatio)}× below average (no institutional backing)`)
    }
    else if (vwapBearishGate) {
      action = 'wait'
      reasons.push(`VWAP gate: price is ${round(Math.abs(vwapDevPct))}% below VWAP — no trend/breakout longs against institutional distribution`)
    }
    else if (macdBearishGate) {
      action = 'wait'
      reasons.push(`MACD gate: line ${round(macdLine)} is deeply negative — established bearish momentum, not buying into this`)
    }
    else if (bearishCandleGate) {
      action = 'wait'
      reasons.push('Candle gate: signal bar closed below open — no entries on red candles for trend/breakout setups')
    }
    else if (spreadPct > 0.35 && setup !== 'mean-revert') {
      action = 'wait'
      reasons.push(`Spread gate: ${round(spreadPct)}% bid-ask spread exceeds maximum — execution cost too high for this setup`)
    }
    else if (profileSpreadGate) {
      action = 'wait'
      reasons.push(`Profile spread gate: ${round(spreadPct)}% exceeds ${round(effectiveProfile.maxSpreadPct)}% for ${effectiveProfile.name}`)
    }
    else if (profileVolumeGate) {
      action = 'wait'
      reasons.push(`Profile volume gate: ${round(volumeRatio)}× is below ${round(effectiveProfile.minVolumeRatio)}× required for ${effectiveProfile.name}`)
    }
    else if (profileRrGate) {
      action = 'wait'
      reasons.push(`Profile R:R gate: ${round(rewardRiskRatio)}R is below ${round(effectiveProfile.minRewardRiskRatio)}R minimum after slippage/profile risk`)
    }
    else if (profileSetupGate) {
      action = 'wait'
      reasons.push(`Profile setup gate: ${setup} is blocked by ${effectiveProfile.name}`)
    }
    else if (shouldApplyBehavior && Array.isArray(symbolBehavior.blockSetups) && symbolBehavior.blockSetups.includes(setup)) {
      action = 'wait'
      reasons.push(`Behavior gate [${symbolBehavior.profile}]: ${symbolBehavior.reasons[0] || 'entry suppressed by classifier'}`)
    }
    else if (allowNewEntry && entryScore >= buyThreshold && (setup !== 'weak')) {
      action = 'buy'
      reasons.push(pilotHtfOverride
        ? 'Pilot HTF override: high-score trend has strong volume, tight spread, low risk, and paper-test sizing'
        : setup === 'mean-revert'
        ? 'Qualified mean-reversion entry clears the buy threshold with acceptable risk'
        : 'Entry score clears the buy threshold with acceptable risk')
    }
    else if (pilotScoutEntry) {
      action = 'buy'
      reasons.push('Pilot scout entry: clean trend is near threshold with tight spread, supportive volume, low risk, and intact R:R')
    }
    else {
      action = 'wait'
      reasons.push('Setup is not clean enough yet')
    }
  }
  else {
    const stopTriggered = unrealizedPnLPct <= -dynamicStopPct
    const takeProfitZone = unrealizedPnLPct >= effectiveRewardPct
    const positionElapsedMs = input.positionOpenedAt ? (nowMs - input.positionOpenedAt) : 0

    if (stopTriggered) {
      action = 'exit'
      reasons.push('Loss breached the stop level')
    }
    else if (takeProfitZone && (shortTrendPct < 0.2 || momentumPct < 0.08)) {
      action = 'exit'
      reasons.push('Profit target exit: reached 2R with cooling momentum — closing full position')
    }
    // 1R PARTIAL EXIT: lock in half when trend has actually turned negative.
    // Breakout entries are exempt — their higher continuation rate means they should run
    // to the 2R target or trailing stop rather than be trimmed at 1R on a brief pause.
    else if (unrealizedPnLPct >= dynamicStopPct && !takeProfitZone && shortTrendPct < -0.15 && entrySetup !== 'breakout') {
      action = 'trim'
      reasons.push(`1R partial exit: ${round(unrealizedPnLPct)}% gain with fading momentum — locking partial profit`)
    }
    else if (
      allowNewEntry
      && marketRegime !== 'chop'
      && entryScore >= addThreshold
      && unrealizedPnLPct >= 0.4
    ) {
      action = 'add'
      reasons.push('Trend and momentum support adding to the winner')
    }

    // Optional portfolio check for scale-ups: needs account equity from the client.
    // Never blocks exit/trim (risk reduction). Uses avg entry vs profile stop %.
    const accountEquityForRisk = Number(input.accountEquity)
    if (
      action === 'add'
      && positionQty > 0
      && Number.isFinite(accountEquityForRisk)
      && accountEquityForRisk > 0
    ) {
      const riskEntryPrice = Number.isFinite(avgEntryPrice) && avgEntryPrice > 0 ? avgEntryPrice : currentPrice
      const riskStopPrice = riskEntryPrice * (1 - dynamicStopPct / 100)
      const riskValidation = validateRisk({
        entryPrice: riskEntryPrice,
        stopLossPrice: riskStopPrice,
        positionSize: positionQty,
        accountEquity: accountEquityForRisk
      })
      if (!riskValidation.valid) {
        action = 'hold'
        reasons.push(
          `Add skipped: stop risk vs equity is about ${(riskValidation.lossPercent * 100).toFixed(2)}% (above the 2% guard).`
        )
      }
    }

    // Safety: Never recommend "buy" if already positioned.
    // Do not overwrite exit / trim — those are active risk-management actions.
    if (action === 'buy') {
      action = 'hold'
      reasons.push('Already positioned, holding instead of buying again')
    }
    else if (lowConfidence && marketRegime === 'chop' && action === 'add') {
      action = 'hold'
      reasons.push('Choppy, low-confidence conditions argue for sitting tight')
    }
    else if (action === 'hold') {
      reasons.push('Current position still fits the measured risk')
    }

    // TRAILING STOP: exit if price pulls back from high-watermark once meaningfully in profit.
    // Breakout entries use breakoutTrailingStopPct (default: trailingStopPct + 0.2) — they need room to run to 2R.
    // Trend / mean-revert use trailingStopPct so losers exit sooner once they stall.
    // Only fires when the caller passes highWatermarkPrice (live bot and simulation both do).
    const breakoutTrailingStopPct = Number(strategyParams.breakoutTrailingStopPct ?? trailingStopPct + 0.2)
    const effectiveTrailPct = entrySetup === 'breakout' ? breakoutTrailingStopPct : trailingStopPct
    if (action === 'hold' && highWatermarkPrice > avgEntryPrice * (1 + effectiveTrailPct / 100)) {
      const trailPrice = highWatermarkPrice * (1 - effectiveTrailPct / 100)
      if (currentPrice <= trailPrice) {
        action = 'exit'
        reasons.push(`Trailing stop: price ${round(currentPrice)} fell below trail ${round(trailPrice)} (peak: ${round(highWatermarkPrice)}, trail: ${effectiveTrailPct}%)`)
      }
    }

    // BREAK-EVEN STOP: once the position reached the configured R threshold,
    // treat entry price as the new floor. Any pullback to entry triggers an exit — prevents
    // a trade that was winning from becoming a loser.
    const breakevenTriggerR = clamp(Number(strategyParams.breakevenTriggerR ?? 1), 0.5, 1.5)
    if (action === 'hold'
        && highWatermarkPrice >= avgEntryPrice * (1 + (dynamicStopPct * breakevenTriggerR) / 100)
        && currentPrice <= avgEntryPrice * 1.001) {
      action = 'exit'
      reasons.push(`Break-even stop: reached ${round(breakevenTriggerR)}R then retreated to entry (${round(currentPrice)} ≤ ${round(avgEntryPrice)})`)
    }

    // EARLY REVERSAL EXIT: cut losers before the full stop fires.
    // Evidence: TSLA -$300 in 30min, GOOGL -$174 in 20min — waiting for 1.2% stop was too slow.
    // Cut losers at 15 min, shallower threshold (0.35× stop) — entries that go wrong in the first
    // 3 bars and are already at -0.35% rarely recover to the +2.4% target.
    // Tested: 0.40× (PF 1.46), 0.35× (PF 1.47 — best on old dataset), 0.30× (PF 1.41 — too tight).
    if (action === 'hold' && positionElapsedMs > 15 * 60 * 1000 && unrealizedPnLPct < -(dynamicStopPct * 0.35)) {
      action = 'exit'
      reasons.push(`Early reversal exit: -${round(Math.abs(unrealizedPnLPct))}% after ${Math.round(positionElapsedMs / 60000)} min (pre-stop cut)`)
    }

    // STAGNATION EXIT: cut losers when stuck; let flat winners run longer.
    // Default 35 min for 5-min bars; override via strategyParams.stagnationMinutes for 1-min (use 20).
    if (action === 'hold') {
      const stagnationMin = Number(strategyParams.stagnationMinutes ?? 35)
      const min35  = stagnationMin * 60 * 1000
      const min110 = 110 * 60 * 1000
      if (unrealizedPnLPct < 0 && positionElapsedMs > min35 && Math.abs(unrealizedPnLPct) < 0.8) {
        action = 'exit'
        reasons.push(`Stagnation exit (loser): ${round(unrealizedPnLPct)}% after ${Math.round(positionElapsedMs / 60000)} min`)
      }
      else if (unrealizedPnLPct >= 0 && positionElapsedMs > min110 && unrealizedPnLPct < 0.2) {
        action = 'exit'
        reasons.push(`Stagnation exit (flat winner): ${round(unrealizedPnLPct)}% after ${Math.round(positionElapsedMs / 60000)} min`)
      }
    }

    // EOD FORCE-CLOSE: flatten 10 min before US regular-session close (19:50 UTC = 3:50 PM EDT).
    // Prevents overnight holds that day-trading strategies must avoid.
    if (action !== 'exit' && action !== 'trim') {
      const d = new Date(nowMs)
      const utcH = d.getUTCHours(), utcM = d.getUTCMinutes()
      if (utcH === 19 && utcM >= 50) {
        action = 'exit'
        reasons.push('EOD force-close: flattening before US regular-session end (19:50 UTC)')
      }
    }

    // POSITION TIMEOUT: Force exit after 20 bars or 2 hours without meaningful progress
    const positionAge = input.positionOpenedAt ? Math.round((nowMs - input.positionOpenedAt) / barDurationMs) : null
    const twoHoursMs = 2 * 60 * 60 * 1000
    const positionTimeoutTriggered = positionAge && (positionAge > 20 || positionElapsedMs > twoHoursMs)

    if (positionTimeoutTriggered) {
      action = 'exit'
      reasons.push(`Position timeout (${positionAge} bars, ${Math.round(positionElapsedMs / 1000 / 60)}min elapsed)`)
    }
  }

  // Exit/trim are risk-management actions; entry/risk-based confidence can read very low
  // while the action is still correct (e.g. stop hit). Clients gate auto-execution on
  // confidence, so floor sell-side conviction without inflating buy/wait signals.
  if (action === 'exit') {
    confidence = clamp(Math.max(confidence, 82), 0, 100)
  }
  else if (action === 'trim') {
    confidence = clamp(Math.max(confidence, 80), 0, 100)
  }

  // BUILD LIVE TRACING OBJECT
  const positionAge = input.positionOpenedAt ? Math.round((nowMs - input.positionOpenedAt) / barDurationMs) : null
  const positionElapsedMs = input.positionOpenedAt ? (nowMs - input.positionOpenedAt) : 0
  const stopLossPct = dynamicStopPct
  const profitTargetPct = effectiveRewardPct
  const entryPriceForTrace = positionQty > 0 ? avgEntryPrice : null
  const stopLossPriceForTrace = entryPriceForTrace ? entryPriceForTrace * (1 - stopLossPct / 100) : null
  const profitTargetPriceForTrace = entryPriceForTrace ? entryPriceForTrace * (1 + profitTargetPct / 100) : null

  let trendStrength = 'neutral'
  if (shortTrendPct > 0.5) trendStrength = 'bullish'
  else if (shortTrendPct < -0.35) trendStrength = 'bearish'

  let momentumLevel = 'weak'
  if (Math.abs(momentumPct) > 0.2) momentumLevel = 'strong'
  else if (Math.abs(momentumPct) > 0.08) momentumLevel = 'medium'

  const trace = {
    timestamp: new Date().toISOString(),
    symbol: input.symbol || null,
    action,
    reasons: [...reasons],
    positionQty: positionQty > 0 ? positionQty : null,
    positionAge: positionAge !== null ? `${positionAge} bars (${Math.round(positionElapsedMs / 1000 / 60)}min)` : 'N/A',
    priceMetrics: positionQty > 0 ? {
      current: round(currentPrice),
      entry: round(entryPriceForTrace),
      stopLoss: round(stopLossPriceForTrace),
      profitTarget: round(profitTargetPriceForTrace),
      pctGain: round(unrealizedPnLPct)
    } : null,
    signals: {
      trendStrength,
      momentum: momentumLevel,
      symbolBehavior: symbolBehavior.profile,
      tradeState: symbolBehavior.tradeState,
      strategyAction: symbolBehavior.strategyAction,
      exitSignal: action === 'exit',
      timeout: positionAge && (positionAge > 20 || positionElapsedMs > (2 * 60 * 60 * 1000))
    }
  }

  const setupSizeMultiplier = setup === 'breakout'
    ? Number(strategyParams.breakoutSizeMultiplier ?? 1)
    : setup === 'trend'
      ? Number(strategyParams.trendSizeMultiplier ?? 0.8)
      : setup === 'momentum-pilot'
        ? Number(strategyParams.momentumPilotSizeMultiplier ?? 0.35)
      : setup === 'mean-revert'
        ? Number(strategyParams.meanRevertSizeMultiplier ?? 0.7)
        : 0.5
  const regimeSizeMultiplier = marketVolatileRegime && setup === 'trend'
    ? Number(strategyParams.volatileTrendSizeMultiplier ?? 0.5)
    : 1
  const behaviorSizeMultiplier = Number(symbolBehavior.sizeMultiplier ?? 1)
  const profileSizeMultiplier = Number(effectiveProfile.sizeMultiplier ?? 1)
  const sizeMultiplier = clamp(setupSizeMultiplier * regimeSizeMultiplier * behaviorSizeMultiplier * profileSizeMultiplier, 0.2, 1.25)
  const sizeConfidence = clamp(confidence - (setup === 'mean-revert' ? 4 : 8), 35, 90)
  const positionSizePct = clamp(
    (profile.basePositionSizePct + ((sizeConfidence - 50) / 100) * profile.basePositionSizePct + Number(strategyParams.sizeBias || 0)) * sizeMultiplier,
    0.02,
    profile.maxPositionSizePct
  )

  const executionPlan = {
    positionSizePct: round(positionSizePct * 100),
    stopLossPct: round(dynamicStopPct + Number(strategyParams.stopLossAdj || 0)),
    trailingStopPct: trailingStopPct,
    trimFraction: profile.trimFraction,
    rewardTargetPct: round(effectiveRewardPct + Number(strategyParams.rewardAdj || 0))
  }

  return {
    symbol: input.symbol || null,
    riskProfile: profileName,
    marketRegime,
    symbolBehavior,
    effectiveProfile,
    setup,
    guardrails: {
      liquidityOk,
      volatilityOkForMeanReversion,
      weakEvidence,
      lowConfidence
    },
    action,
    confidence,
    scores: {
      entry: Math.round(entryScore),
      risk: Math.round(riskScore),
      management: Math.round(managementScore)
    },
    entryDiagnostics: {
      buyThreshold: Math.round(buyThreshold),
      maxRiskScoreForEntry: profile.maxRiskScoreForEntry,
      allowNewEntry,
      gates: {
        marketChopTrend: marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout'),
        mixedTrend: marketRegime === 'mixed' && setup === 'trend',
        bearishNonMeanRevert: marketRegime === 'bearish' && setup !== 'mean-revert',
        setupWeak: setup === 'weak',
        profileSpreadGate,
        profileVolumeGate,
        profileSetupGate,
        profileRrGate
      },
      profileLimits: {
        maxSpreadPct: round(effectiveProfile.maxSpreadPct),
        minVolumeRatio: round(effectiveProfile.minVolumeRatio),
        minRewardRiskRatio: round(effectiveProfile.minRewardRiskRatio)
      }
    },
    metrics: {
      currentPrice,
      shortTrendPct: round(shortTrendPct),
      mediumTrendPct: round(mediumTrendPct),
      longTrendPct: round(longTrendPct),
      trendEfficiency: round(recentTrendEfficiency),
      momentumPct: round(momentumPct),
      volumeRatio: round(volumeRatio),
      spreadPct: round(spreadPct),
      realizedVolatilityPct: round(realizedVolatilityPct),
      unrealizedPnLPct: round(unrealizedPnLPct),
      rsi14: round(rsi14),
      ema9: round(ema9),
      ema21: round(ema21),
      macdLine: round(macdLine),
      macdSignal: round(macdSignal),
      macdHistogram: round(macdHistogram),
      vwap: round(vwap),
      vwapDevPct: round(vwapDevPct),
      dailyLossesPct: round(dailyLossesPct),
      rewardRiskRatio: round(rewardRiskRatio),
      profileSlippagePct: round(effectiveProfile.slippagePct)
    },
    executionPlan,
    dailyCatalyst: dailyCatalystForResponse,
    catalystTradingDay: input.disableDailyCatalyst ? null : formatTradingDayKey(),
    recommendation: buildRecommendation({
      action,
      confidence,
      currentPrice,
      spreadPct,
      momentumPct,
      positionQty,
      executionPlan,
      marketRegime,
      setup,
      primaryReason: reasons.at(-1) || reasons[0] || '',
      guardrails: {
        liquidityOk,
        volatilityOkForMeanReversion,
        weakEvidence,
        lowConfidence
      }
    }),
    reasons,
    trace
  }
}

function buildRecommendation({ action, confidence, currentPrice, spreadPct, momentumPct, positionQty, executionPlan, marketRegime, setup, primaryReason, guardrails }) {
  const safePrice = Number.isFinite(currentPrice) ? currentPrice : 0
  const safeSpreadPct = Number.isFinite(spreadPct) ? spreadPct : 0
  const limitBuyPrice = safePrice > 0
    ? round(safePrice * (1 - clamp(Math.max(safeSpreadPct / 100, 0.0005), 0.0005, 0.004)))
    : null
  const stopPrice = safePrice > 0
    ? round(safePrice * (1 - ((Number(executionPlan?.stopLossPct) || 0) / 100)))
    : null
  const targetPrice = safePrice > 0
    ? round(safePrice * (1 + ((Number(executionPlan?.rewardTargetPct) || 0) / 100)))
    : null

  if (action === 'exit') {
    return {
      label: 'Sell now',
      orderType: 'market',
      side: 'sell',
      price: safePrice || null,
      stopPrice,
      targetPrice: null,
      detail: positionQty > 0
        ? 'The bot wants out of the current position and would prioritize speed over price improvement.'
        : 'The bot would avoid fresh exposure and flatten any open position immediately.'
    }
  }

  if (action === 'trim') {
    return {
      label: 'Sell now',
      orderType: 'market',
      side: 'sell',
      price: safePrice || null,
      stopPrice,
      targetPrice,
      detail: `The bot would trim about ${Math.round((Number(executionPlan?.trimFraction) || 0) * 100)}% to lock gains while the move cools.`
    }
  }

  if (action === 'buy') {
    const prefersImmediate = marketRegime === 'breakout' || Number(momentumPct) > 0.2 || confidence >= 80
    const isMeanReversion = setup === 'mean-revert'
    return {
      label: prefersImmediate && safePrice > 0 && !isMeanReversion
        ? `Buy now near ${formatPrice(safePrice)}`
        : limitBuyPrice
          ? `Limit buy now at ${formatPrice(limitBuyPrice)}`
          : 'Buy now',
      orderType: prefersImmediate && !isMeanReversion ? 'marketable-limit' : 'limit',
      side: 'buy',
      price: prefersImmediate && !isMeanReversion ? safePrice || null : limitBuyPrice,
      stopPrice,
      targetPrice,
      detail: isMeanReversion
        ? 'The bot sees a controlled snapback setup and prefers a disciplined limit entry instead of chasing.'
        : prefersImmediate
          ? 'Momentum is strong enough that the bot would accept immediate execution with a tight price guard.'
          : 'The bot prefers price discipline and would lean on a limit entry instead of chasing.'
    }
  }

  if (action === 'add') {
    const isMeanReversion = setup === 'mean-revert'
    return {
      label: `Scale up near ${formatPrice(safePrice)}`,
      orderType: 'limit',
      side: 'buy',
      price: limitBuyPrice,
      stopPrice,
      targetPrice,
      detail: isMeanReversion
        ? 'The bot sees a controlled snapback setup and prefers a disciplined limit entry instead of chasing.'
        : 'Trend and momentum support adding to the winner with a disciplined entry.'
    }
  }

  if (action === 'wait') {
    const waitDetail = primaryReason && /gate|blocked|wait|confidence|setup|profile|volume|spread|VWAP|MACD|ORB|RSI|loss|session/i.test(primaryReason)
      ? primaryReason
      : marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')
      ? 'The tape is choppy, so trend and breakout signals are being ignored until conditions clean up.'
      : guardrails?.weakEvidence
        ? 'The setup is not liquid or stable enough yet, so the bot would stand down and keep monitoring.'
        : guardrails?.lowConfidence
          ? 'Confidence is too soft, so the bot would rather wait than force a mediocre trade.'
          : 'The setup is not clean enough yet, so the bot would stay patient and keep monitoring.'

    return {
      label: 'Wait',
      orderType: null,
      side: null,
      price: null,
      stopPrice,
      targetPrice,
      detail: waitDetail
    }
  }

  if (action === 'hold' && positionQty > 0) {
    return {
      label: 'Hold position',
      orderType: null,
      side: null,
      price: null,
      stopPrice,
      targetPrice,
      detail: primaryReason || 'The current position still fits the measured risk, so the bot would keep monitoring.'
    }
  }

  return {
    label: 'No recommendation for now',
    orderType: null,
    side: null,
    price: null,
    stopPrice,
    targetPrice,
    detail: 'There is no actionable edge right now based on the latest read.'
  }
}

function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`
}

function classifySetup({ shortTrendPct, mediumTrendPct, longTrendPct, momentumPct, liquidityOk, volatilityOkForMeanReversion, volumeRatio, realizedVolatilityPct }) {
  const breakoutSetup = shortTrendPct > 0.8 && mediumTrendPct > 0.9 && momentumPct > 0.18 && volumeRatio > 1.1 && realizedVolatilityPct > 0.45
  if (breakoutSetup) return 'breakout'

  const trendSetup = shortTrendPct > 0.35
    && mediumTrendPct > 0.7
    && longTrendPct > 0.8
    && volumeRatio >= 1.05
    && realizedVolatilityPct >= 0.12
  if (trendSetup) return 'trend'

  // Some intraday runners have decisive near-term momentum before the longer
  // trend filter catches up. Keep this as a small pilot setup: it still needs
  // trend regime, volume, reasonable volatility, green candle, risk, spread,
  // and R:R gates later in the decision pipeline.
  const momentumPilotSetup = shortTrendPct > 0.55
    && mediumTrendPct > -0.2
    && momentumPct > 0.14
    && volumeRatio > 1.45
    && realizedVolatilityPct >= 0.12
    && realizedVolatilityPct <= 1.8
  if (momentumPilotSetup) return 'momentum-pilot'

  const meanReversionSetup = shortTrendPct <= -0.2
    && longTrendPct >= 0
    && Math.abs(mediumTrendPct) <= 0.7
    && momentumPct <= -0.05
    && liquidityOk
    && volatilityOkForMeanReversion
  if (meanReversionSetup) return 'mean-revert'

  return 'weak'
}

function classifySymbolBehavior({ prices, volumes, currentPrice, vwap, volumeRatio, realizedVolatilityPct, atrPct, adrPct, orbHigh, orbLow, tf15Bullish, marketRegime, setup, rsi14, macdLine = 0, macdHistogram, vwapDevPct, sessionMinute = null, spreadPct = 0 }) {
  const recentPrices = Array.isArray(prices) ? prices.slice(-36).filter(Number.isFinite) : []
  const recentVolumes = Array.isArray(volumes) ? volumes.slice(-36).filter(Number.isFinite) : []
  if (recentPrices.length < 12) {
    return {
      profile: 'neutral',
      confidence: 0,
      entryScoreAdj: 0,
      riskScoreAdj: 0,
      thresholdAdj: 0,
      sizeMultiplier: 1,
      blockSetups: [],
      metrics: {},
      reasons: ['Insufficient rolling bars for behavior classification']
    }
  }

  let pathDistance = 0
  let directionFlips = 0
  let lastSign = 0
  for (let i = 1; i < recentPrices.length; i++) {
    const delta = recentPrices[i] - recentPrices[i - 1]
    pathDistance += Math.abs(delta)
    const sign = Math.sign(delta)
    if (sign !== 0 && lastSign !== 0 && sign !== lastSign) directionFlips++
    if (sign !== 0) lastSign = sign
  }

  const netDistance = Math.abs(recentPrices.at(-1) - recentPrices[0])
  const trendEfficiency = pathDistance > 0 ? netDistance / pathDistance : 0
  const flipRatio = recentPrices.length > 2 ? directionFlips / (recentPrices.length - 2) : 0
  const aboveVwap = vwap > 0 && currentPrice > vwap
  const vwapCrosses = vwap > 0
    ? recentPrices.slice(1).reduce((count, price, idx) => {
        const prev = recentPrices[idx]
        return count + ((prev - vwap) * (price - vwap) < 0 ? 1 : 0)
      }, 0)
    : 0
  const avgRecentVolume = average(recentVolumes)
  const latestVolume = recentVolumes.at(-1) ?? 0
  const volumeExpansion = avgRecentVolume > 0 ? latestVolume / avgRecentVolume : volumeRatio
  const recentAboveOrb = orbHigh > 0 ? recentPrices.slice(-8).filter(price => price > orbHigh).length : 0
  const recentHigh = Math.max(...recentPrices.slice(-12))
  const orbBreakFailed = orbHigh > 0
    && recentHigh > orbHigh * 1.002
    && currentPrice <= orbHigh * 1.001
    && recentAboveOrb <= 2
  const insideOrbRange = orbHigh > 0 && orbLow > 0 && currentPrice < orbHigh && currentPrice > orbLow
  const highVolatility = atrPct >= 1.05 || realizedVolatilityPct >= 1.15 || adrPct >= 5
  const lowLiquidityOrQuiet = volumeRatio < 0.85 || volumeExpansion < 0.75 || realizedVolatilityPct < 0.12
  const spreadElevated = spreadPct >= 0.16
  const spreadWideForMomentum = spreadPct >= 0.11 && (volumeExpansion < 0.95 || volumeRatio < 1.05)
  const unstableTape = vwapCrosses >= 4
    && flipRatio > 0.36
    && trendEfficiency < 0.36
    && volumeExpansion < 1.15
  const momentumSetup = setup === 'breakout' || setup === 'trend' || setup === 'momentum-pilot'
  const isMidMorning = Number.isFinite(sessionMinute) && sessionMinute >= 14 * 60 + 30
  const unconfirmedFirstLeg = momentumSetup
    && orbHigh > 0
    && currentPrice > orbHigh
    && recentAboveOrb < 3
    && (volumeExpansion < 1.15 || trendEfficiency < 0.38)
  const weakContinuation = momentumSetup
    && !aboveVwap
    && (trendEfficiency < 0.34 || macdHistogram < 0)
  const weakPilotMomentum = setup === 'momentum-pilot'
    && (
      marketRegime !== 'trend'
      || !aboveVwap
      || macdHistogram < 0
      || trendEfficiency < 0.36
      || rsi14 > 74
    )
  const weakBreakoutQuality = setup === 'breakout'
    && (
      vwapDevPct < 0.1
      || macdHistogram < 0
      || volumeRatio < 1.3
      || rsi14 >= 81.5
      || (rsi14 > 72 && macdLine < 0.2)
      || (rsi14 > 72 && volumeRatio < 2.5)
      || (isMidMorning && rsi14 < 72 && volumeRatio < 3.3)
      || (marketRegime === 'breakout' && volumeRatio < 2.5)
    )
  // Range too tight: per-bar ATR so small the stock can't realistically reach the reward target
  // before a stagnation exit. adrPct < 1.5% = less than half a typical 2.4% reward target in the full day.
  const tightRange = atrPct > 0 && atrPct < 0.25 && (adrPct > 0 && adrPct < 1.5)
  const stretchedBreakout = momentumSetup
    && (
      rsi14 >= 82
      || vwapDevPct > 1.4
      || volumeRatio >= 2.2
      || (setup === 'trend' && rsi14 >= 76 && vwapDevPct > 0.5 && volumeExpansion < 1.35)
    )
    && trendEfficiency >= 0.38

  // Sustained intraday sell: three consecutive rolling windows each lower than the previous,
  // below VWAP, and price actually ended lower than it started. Blocks trend/breakout longs.
  const avgLast6  = average(recentPrices.slice(-6))
  const avgPrev6  = average(recentPrices.slice(-12, -6))
  const avgPrev12 = average(recentPrices.slice(-18, -12))
  const sustainedSellSignal = recentPrices.length >= 18
    && avgLast6 < avgPrev6
    && avgPrev6 < avgPrev12
    && !aboveVwap
    && recentPrices.at(-1) < recentPrices[0]
    && trendEfficiency >= 0.28   // real directional move, not just noise

  let profile = 'neutral'
  let confidence = 35
  let entryScoreAdj = 0
  let riskScoreAdj = 0
  let thresholdAdj = 0
  let sizeMultiplier = 1
  let blockSetups = []
  let tradeState = 'neutral'
  let strategyAction = 'trade-if-score-clears'
  const reasons = []

  const cleanTrend = trendEfficiency >= 0.42
    && flipRatio <= 0.34
    && setup === 'trend'
    && aboveVwap
    && volumeRatio >= 1.7
    && rsi14 >= 52
    && rsi14 <= 78
    && vwapDevPct >= 0.15
    && vwapDevPct <= 1.6
    && macdHistogram >= 0
    && tf15Bullish === true
    && marketRegime === 'trend'
  const unconfirmedTrend = setup === 'trend'
    && !cleanTrend
    && (
      rsi14 > 72
      || volumeRatio < 1.7
      || trendEfficiency < 0.42
      || vwapDevPct < 0.25
      || macdHistogram < 0
    )

  if (sustainedSellSignal) {
    // Stock making consistent lower lows below VWAP — no long entries on trend or breakout setups.
    // Mean-revert is allowed (it intentionally buys pullbacks, which is valid even in a decline).
    profile = 'sustainedSell'
    confidence = 72
    entryScoreAdj = -18
    riskScoreAdj = 14
    thresholdAdj = 18
    sizeMultiplier = 0.4
    blockSetups = ['trend', 'breakout', 'momentum-pilot']
    tradeState = 'sustained-sell'
    strategyAction = 'no-trade-long-momentum'
    reasons.push('Stock making consistent lower lows below VWAP — trend and breakout longs suppressed')
  } else if (spreadElevated || spreadWideForMomentum) {
    profile = 'liquiditySlippageRisk'
    confidence = 70
    entryScoreAdj = -5
    riskScoreAdj = 10
    thresholdAdj = 10
    sizeMultiplier = 0.45
    blockSetups = spreadPct >= 0.22 ? ['trend', 'breakout'] : ['breakout']
    tradeState = 'liquidity-slippage-risk'
    strategyAction = spreadPct >= 0.22 ? 'no-trade' : 'wait-for-confirmation'
    reasons.push('Current spread/liquidity context can erase the edge — require better fills or confirmation before momentum entries')
  } else if ((lowLiquidityOrQuiet && trendEfficiency < 0.32 && flipRatio > 0.35) || tightRange) {
    profile = 'thinChop'
    confidence = 70
    entryScoreAdj = -6
    riskScoreAdj = 8
    thresholdAdj = 10
    sizeMultiplier = 0.3
    blockSetups = ['trend', 'breakout', 'momentum-pilot']
    tradeState = 'thin-chop'
    strategyAction = 'no-trade'
    reasons.push('Rolling behavior is thin/choppy: low participation with poor directional efficiency — entries require exceptional quality')
  } else if (unstableTape || weakContinuation || weakPilotMomentum) {
    profile = 'regimeInstability'
    confidence = 68
    entryScoreAdj = -6
    riskScoreAdj = 9
    thresholdAdj = 12
    sizeMultiplier = 0.45
    blockSetups = ['trend', 'breakout', 'momentum-pilot']
    tradeState = 'regime-instability'
    strategyAction = 'no-trade'
    reasons.push('Current tape is unstable: repeated VWAP rotations, weak pilot momentum, or weak continuation make momentum entries unreliable')
  } else if (unconfirmedTrend) {
    profile = 'confirmationRequired'
    confidence = 64
    entryScoreAdj = -3
    riskScoreAdj = 5
    thresholdAdj = 8
    sizeMultiplier = 0.7
    blockSetups = ['trend']
    tradeState = 'confirmation-required'
    strategyAction = 'wait-for-clean-trend'
    reasons.push('Trend setup is not clean enough yet — wait for stronger efficiency, volume, VWAP, and momentum alignment')
  } else if (weakBreakoutQuality) {
    profile = 'confirmationRequired'
    confidence = 66
    entryScoreAdj = -4
    riskScoreAdj = 6
    thresholdAdj = 10
    sizeMultiplier = 0.65
    blockSetups = ['breakout']
    tradeState = 'confirmation-required'
    strategyAction = 'wait-for-breakout-quality'
    reasons.push('Breakout lacks enough VWAP, momentum, or volume confirmation — wait for a cleaner second leg')
  } else if (orbBreakFailed || (setup === 'breakout' && insideOrbRange && flipRatio > 0.38)) {
    profile = 'falseBreakoutProne'
    confidence = 68
    entryScoreAdj = -4
    riskScoreAdj = 5
    thresholdAdj = 6
    sizeMultiplier = 0.8
    blockSetups = ['breakout']   // ORB analysis says the breakout is unreliable — block breakout entries, trend still allowed
    tradeState = 'false-breakout-risk'
    strategyAction = 'trend-only-or-wait'
    reasons.push('Recent breakout attempt did not hold above the opening range — breakout entries blocked, trend allowed at reduced size')
  } else if (unconfirmedFirstLeg) {
    profile = 'confirmationRequired'
    confidence = 62
    entryScoreAdj = -2
    riskScoreAdj = 4
    thresholdAdj = 7
    sizeMultiplier = 0.75
    blockSetups = ['breakout']
    tradeState = 'confirmation-required'
    strategyAction = 'wait-for-second-leg'
    reasons.push('Opening-range break is still first-leg or low-confirmation — wait for follow-through before breakout entries')
  } else if (stretchedBreakout) {
    profile = 'extendedBreakout'
    confidence = 66
    entryScoreAdj = -3
    riskScoreAdj = 6
    thresholdAdj = 8
    sizeMultiplier = 0.65
    blockSetups = ['trend', 'breakout', 'momentum-pilot']  // overbought + fading vol/momentum — all longs are chasing; wait for reset
    tradeState = 'extended-chase'
    strategyAction = 'wait-for-reset'
    reasons.push('Stock is overbought and extended from VWAP with fading volume — all long entries blocked until reset')
  } else if (highVolatility && (trendEfficiency < 0.38 || flipRatio > 0.42 || vwapCrosses >= 4)) {
    profile = 'noisyHighBeta'
    confidence = 64
    entryScoreAdj = -2
    riskScoreAdj = 7
    thresholdAdj = 5
    sizeMultiplier = 0.55
    blockSetups = ['breakout']  // noisy + breakout = false breakout; trend still allowed at reduced size
    tradeState = 'noisy-high-beta'
    strategyAction = 'trend-only-reduced-size'
    reasons.push('High volatility paired with noisy follow-through — breakout entries blocked, trend allowed at reduced size')
  } else if (cleanTrend) {
    // All structure aligned: efficient trend, above VWAP, healthy RSI, HTF confirmation.
    // Reward best-quality setups with a lower entry bar and slightly larger size.
    profile = 'cleanTrend'
    confidence = 62
    entryScoreAdj = 6
    riskScoreAdj = -3
    thresholdAdj = -4
    sizeMultiplier = 1.15
    tradeState = 'good-trend-continuation'
    strategyAction = 'trade-trend'
    reasons.push('Rolling behavior is directionally efficient above VWAP with supportive volume — best entry conditions')
  }

  return {
    profile,
    mode: 'apply',
    observedOnly: false,
    confidence,
    tradeState,
    strategyAction,
    entryScoreAdj,
    riskScoreAdj,
    thresholdAdj,
    sizeMultiplier,
    blockSetups,
    metrics: {
      trendEfficiency: round(trendEfficiency),
      flipRatio: round(flipRatio),
      vwapCrosses,
      volumeExpansion: round(volumeExpansion),
      highVolatility,
      unstableTape,
      unconfirmedFirstLeg,
      weakBreakoutQuality,
      spreadElevated,
      orbBreakFailed,
      stretchedBreakout,
      sustainedSellSignal
    },
    reasons
  }
}

function inferMarketRegime({ shortTrendPct, mediumTrendPct, longTrendPct, realizedVolatilityPct, trendEfficiency: efficiency = 0 }) {
  // Bearish checked first: both short AND medium declining — block long entries regardless of setup
  if (shortTrendPct < -0.5 && mediumTrendPct < -0.3) return 'bearish'
  // Quiet stair-step trends can have small short/medium deltas while still moving cleanly.
  // Treat efficient, higher-low advances as trend before the generic chop bucket.
  if (longTrendPct > 0.35 && mediumTrendPct > -0.1 && shortTrendPct > -0.2 && efficiency >= 0.28) return 'trend'
  if (Math.abs(shortTrendPct) < 0.2 && Math.abs(mediumTrendPct) < 0.35) return 'chop'
  if (shortTrendPct > 0.7 && mediumTrendPct > 1 && realizedVolatilityPct > 0.45) return 'breakout'
  if (shortTrendPct > 0 && mediumTrendPct > 0 && longTrendPct > 0) return 'trend'
  return 'mixed'
}

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
