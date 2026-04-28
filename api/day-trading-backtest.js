import { evaluateDayTradingDecision } from './day-trading-bot.js'

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

function safeDivide(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return 0
  return numerator / denominator
}

function candleTimeMs(candle, fallback = 0) {
  if (typeof candle?.timestamp === 'number') return candle.timestamp
  const parsed = Date.parse(candle?.timestamp || candle?.time || candle?.date || '')
  return Number.isFinite(parsed) ? parsed : fallback
}


function atrPct(candles = [], index, period = 14) {
  if (index < 1) return 0
  const start = Math.max(1, index - period + 1)
  const ranges = []
  for (let i = start; i <= index; i++) {
    const current = candles[i]
    const previous = candles[i - 1]
    const close = Number(current.close ?? current.c)
    const high = Number(current.high ?? current.h ?? close)
    const low = Number(current.low ?? current.l ?? close)
    const prevClose = Number(previous.close ?? previous.c ?? close)
    if (![close, high, low, prevClose].every(Number.isFinite) || close <= 0) continue
    ranges.push(Math.max(high - low, Math.abs(high - prevClose), Math.abs(low - prevClose)))
  }
  if (!ranges.length) return 0
  const atr = ranges.reduce((sum, value) => sum + value, 0) / ranges.length
  const close = Number(candles[index]?.close ?? candles[index]?.c)
  return close > 0 ? (atr / close) * 100 : 0
}

function computeOrb(candles = []) {
  if (!candles.length) return { orbHigh: 0, orbLow: 0 }
  const firstTs = candleTimeMs(candles[0])
  if (!Number.isFinite(firstTs)) return { orbHigh: 0, orbLow: 0 }
  const openingRangeEnd = firstTs + 30 * 60 * 1000
  const openingCandles = candles.filter(candle => {
    const ts = candleTimeMs(candle)
    return Number.isFinite(ts) && ts < openingRangeEnd
  })
  if (!openingCandles.length) return { orbHigh: 0, orbLow: 0 }
  return {
    orbHigh: Math.max(...openingCandles.map(candle => Number(candle.high ?? candle.h ?? candle.close ?? candle.c))),
    orbLow: Math.min(...openingCandles.map(candle => Number(candle.low ?? candle.l ?? candle.close ?? candle.c)))
  }
}

function incrementCount(map, key) {
  const normalized = String(key || 'unknown')
  map.set(normalized, (map.get(normalized) || 0) + 1)
}

function rankedCounts(map, limit = 6) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }))
}

function summarizeCalibration({ trades, rejectedTrades, profileTimeline, totalReturnPct, maxDrawdownPct, profitFactor, rewardRiskRatio, expectancyPerTrade }) {
  const profileCounts = new Map()
  const rejectCounts = new Map()
  const gateCounts = new Map()
  const acceptedBySetup = new Map()

  for (const event of profileTimeline) {
    incrementCount(profileCounts, event.profile)
    for (const gate of event.activeGates || []) incrementCount(gateCounts, gate)
  }

  for (const trade of trades) {
    if (trade.side === 'buy' || trade.side === 'add') incrementCount(acceptedBySetup, trade.setup)
  }

  for (const reject of rejectedTrades) {
    const reason = String(reject.reason || 'unknown').split(':')[0]
    incrementCount(rejectCounts, reason)
    for (const gate of reject.activeGates || []) incrementCount(gateCounts, gate)
  }

  const acceptedEntries = trades.filter(trade => trade.side === 'buy' || trade.side === 'add').length
  const rejectedEntries = rejectedTrades.length
  const latestProfile = [...profileTimeline].reverse().find(event => event.profile)?.profile || null
  const readinessChecks = [
    { key: 'positiveReturn', label: 'Positive return', passed: totalReturnPct > 0 },
    { key: 'controlledDrawdown', label: 'Controlled drawdown', passed: maxDrawdownPct <= 3 },
    { key: 'profitFactor', label: 'Profit factor >= 1.2', passed: profitFactor === null || profitFactor >= 1.2 },
    { key: 'rewardRisk', label: 'R:R >= 1.5', passed: rewardRiskRatio === null || rewardRiskRatio >= 1.5 },
    { key: 'expectancy', label: 'Positive expectancy', passed: expectancyPerTrade > 0 },
    { key: 'activity', label: 'At least one accepted entry', passed: acceptedEntries > 0 }
  ]
  const passedCount = readinessChecks.filter(check => check.passed).length

  return {
    latestProfile,
    acceptedEntries,
    rejectedEntries,
    rejectToAcceptRatio: acceptedEntries > 0 ? round(rejectedEntries / acceptedEntries) : null,
    topProfiles: rankedCounts(profileCounts),
    topRejectReasons: rankedCounts(rejectCounts),
    topActiveGates: rankedCounts(gateCounts),
    acceptedBySetup: rankedCounts(acceptedBySetup),
    readiness: {
      status: passedCount === readinessChecks.length ? 'ready' : passedCount >= 4 ? 'watchlist' : 'not-ready',
      passedCount,
      totalChecks: readinessChecks.length,
      checks: readinessChecks
    }
  }
}

export function runDayTradingBacktest(input = {}) {
  const candles = Array.isArray(input.candles) ? input.candles : []
  const riskProfile = input.riskProfile || 'balanced'
  const startingCapital = Number(input.startingCapital || 10000)
  const slippagePct = Math.max(0, Number(input.slippagePct ?? 0.06))

  if (candles.length < 25) {
    throw new Error('At least 25 candles are required to run a backtest.')
  }

  const strategyParams = input.strategyParams || {}
  const barDurationMs = Number(input.barDurationMs || 5 * 60 * 1000)
  const step15m = Math.max(1, Math.round((15 * 60 * 1000) / barDurationMs))
  const closes15m = []
  for (let i = step15m - 1; i < 20; i += step15m) {
    const close = Number(candles[i]?.close ?? candles[i]?.c)
    if (Number.isFinite(close)) closes15m.push(close)
  }

  let cash = startingCapital
  let positionQty = 0
  let avgEntryPrice = 0
  let positionOpenedAt = null
  let highWatermarkPrice = 0
  let entrySetup = null
  let equityPeak = startingCapital
  let maxDrawdownPct = 0
  const trades = []
  const rejectedTrades = []
  const profileTimeline = []
  const equityCurve = []
  let grossProfit = 0
  let grossLoss = 0
  let realizedPnL = 0
  let winCount = 0
  let lossCount = 0
  let dailyLosses = 0
  let lastTradeDate = null
  const rollingPnl = []
  let dayCandles = []
  let vwapWeighted = 0
  let vwapVolume = 0

  for (let index = 20; index < candles.length; index += 1) {
    const window = candles.slice(Math.max(0, index - 30), index + 1)
    const closes = window.map(candle => Number(candle.close ?? candle.c)).filter(Number.isFinite)
    const volumes = window.map(candle => Number(candle.volume ?? candle.v)).filter(Number.isFinite)
    const current = candles[index]
    const currentPrice = Number(current.close ?? current.c)
    const currentOpen = Number(current.open ?? current.o ?? currentPrice)
    const currentHigh = Number(current.high ?? current.h ?? currentPrice)
    const currentLow = Number(current.low ?? current.l ?? currentPrice)
    const currentTimeMs = candleTimeMs(current, index * barDurationMs)
    if (!Number.isFinite(currentPrice) || currentPrice <= 0) continue
    if (positionQty > 0) highWatermarkPrice = Math.max(highWatermarkPrice || avgEntryPrice, currentHigh, currentPrice)
    const tradeDate = new Date(currentTimeMs).toISOString().slice(0, 10)
    if (tradeDate !== lastTradeDate) {
      dailyLosses = 0
      lastTradeDate = tradeDate
      dayCandles = []
      vwapWeighted = 0
      vwapVolume = 0
    }
    const prevVwap = vwapVolume > 0 ? vwapWeighted / vwapVolume : 0
    const currentVol = Number(current.volume ?? current.v ?? 0)
    if (currentVol > 0 && Number.isFinite(currentVol)) {
      vwapWeighted += ((currentHigh + currentLow + currentPrice) / 3) * currentVol
      vwapVolume += currentVol
    }
    const vwap = vwapVolume > 0 ? vwapWeighted / vwapVolume : 0
    dayCandles.push(current)
    if ((index - (step15m - 1)) % step15m === 0 && Number.isFinite(currentPrice)) closes15m.push(currentPrice)
    const tf15Bullish = closes15m.length >= 10
      ? closes15m.slice(-5).reduce((s, v) => s + v, 0) / 5 > closes15m.slice(-10).reduce((s, v) => s + v, 0) / 10
      : null
    const prevClose = Number(candles[index - 1]?.close ?? candles[index - 1]?.c ?? currentPrice)
    const vwapDevPct = vwap > 0 ? ((currentPrice - vwap) / vwap) * 100 : 0
    const prevVwapDevPct = prevVwap > 0 ? ((prevClose - prevVwap) / prevVwap) * 100 : 0
    const { orbHigh, orbLow } = computeOrb(dayCandles)
    const currentAtrPct = atrPct(candles, index)
    const rollingExpectancy = rollingPnl.length
      ? rollingPnl.reduce((sum, value) => sum + value, 0) / rollingPnl.length
      : 0
    const decision = evaluateDayTradingDecision({
      symbol: input.symbol,
      riskProfile,
      currentPrice,
      currentVolume: Number(current.volume || volumes.at(-1) || 0),
      currentCandleOpen: currentOpen,
      prices: closes,
      volumes,
      spreadPct: Number(input.spreadPct ?? 0.08),
      vwap,
      vwapReclaim: prevVwapDevPct < -0.1 && vwapDevPct > 0.1,
      atrPct: currentAtrPct,
      orbHigh,
      orbLow,
      tf15Bullish,
      dailyLossesPct: startingCapital > 0 ? (dailyLosses / startingCapital) * 100 : 0,
      rollingExpectancy,
      positionQty,
      avgEntryPrice,
      positionOpenedAt,
      highWatermarkPrice,
      entrySetup,
      strategyParams,
      nowMs: currentTimeMs,
      barDurationMs,
      disableDailyCatalyst: true
    })
    const profileName = decision.effectiveProfile?.name || 'default'
    const activeGates = Array.isArray(decision.effectiveProfile?.activeGates)
      ? decision.effectiveProfile.activeGates
      : []
    const timelineEvent = {
      timestamp: current.timestamp || currentTimeMs || index,
      symbol: input.symbol || null,
      action: decision.action,
      setup: decision.setup,
      marketRegime: decision.marketRegime,
      profile: profileName,
      activeGates,
      price: round(currentPrice),
      entryScore: decision.scores?.entry ?? null,
      riskScore: decision.scores?.risk ?? null,
      rewardRiskRatio: decision.metrics?.rewardRiskRatio ?? null
    }
    const previousTimelineEvent = profileTimeline.at(-1)
    const isImportantTimelineEvent = ['buy', 'add', 'trim', 'exit'].includes(decision.action)
      || !previousTimelineEvent
      || previousTimelineEvent.profile !== timelineEvent.profile
      || previousTimelineEvent.marketRegime !== timelineEvent.marketRegime
      || previousTimelineEvent.setup !== timelineEvent.setup
      || activeGates.join('|') !== (previousTimelineEvent.activeGates || []).join('|')
    if (isImportantTimelineEvent) {
      profileTimeline.push(timelineEvent)
      if (profileTimeline.length > 80) profileTimeline.shift()
    }

    const equity = cash + positionQty * currentPrice
    equityPeak = Math.max(equityPeak, equity)
    const drawdownPct = equityPeak > 0 ? ((equityPeak - equity) / equityPeak) * 100 : 0
    maxDrawdownPct = Math.max(maxDrawdownPct, drawdownPct)

    if ((decision.action === 'wait' || decision.action === 'hold') && positionQty <= 0) {
      const primaryReason = decision.reasons?.find(reason => /gate|blocked|spread|volume|R:R|setup|confidence|VWAP|MACD|ORB|RSI/i.test(reason))
      if (primaryReason) {
        rejectedTrades.push({
          timestamp: current.timestamp || index,
          symbol: input.symbol || null,
          setup: decision.setup,
          marketRegime: decision.marketRegime,
          profile: profileName,
          activeGates,
          reason: primaryReason,
          price: round(currentPrice),
          entryScore: decision.scores?.entry ?? null,
          riskScore: decision.scores?.risk ?? null,
          buyThreshold: decision.entryDiagnostics?.buyThreshold ?? null,
          maxRiskScoreForEntry: decision.entryDiagnostics?.maxRiskScoreForEntry ?? null,
          rewardRiskRatio: decision.metrics?.rewardRiskRatio ?? null
        })
      }
    }

    if (decision.action === 'buy' || decision.action === 'add') {
      const targetAllocation = decision.executionPlan.positionSizePct / 100
      const desiredValue = equity * targetAllocation
      const fillPrice = currentPrice * (1 + slippagePct / 100)
      const affordableQty = Math.floor(Math.min(desiredValue, cash) / fillPrice)

      if (affordableQty > 0) {
        const cost = affordableQty * fillPrice
        const newQty = positionQty + affordableQty
        avgEntryPrice = newQty > 0
          ? ((avgEntryPrice * positionQty) + cost) / newQty
          : 0
        positionQty = newQty
        cash -= cost
        positionOpenedAt = positionOpenedAt || currentTimeMs
        highWatermarkPrice = Math.max(highWatermarkPrice, fillPrice, currentHigh)
        entrySetup = decision.setup
        trades.push({
          side: decision.action,
          setup: decision.setup,
          price: round(fillPrice),
          qty: affordableQty,
          confidence: decision.confidence,
          profile: profileName,
          activeGates,
          marketRegime: decision.marketRegime,
          entryScore: decision.scores?.entry ?? null,
          riskScore: decision.scores?.risk ?? null,
          rewardRiskRatio: decision.metrics?.rewardRiskRatio ?? null,
          timestamp: current.timestamp || index
        })
      }
    }

    if ((decision.action === 'trim' || decision.action === 'exit') && positionQty > 0) {
      const trimFraction = decision.action === 'exit' ? 1 : decision.executionPlan.trimFraction
      const qtyToSell = Math.max(1, Math.floor(positionQty * trimFraction))
      const fillPrice = currentPrice * (1 - slippagePct / 100)
      const proceeds = qtyToSell * fillPrice
      const pnl = (fillPrice - avgEntryPrice) * qtyToSell
      cash += proceeds
      positionQty -= qtyToSell
      if (positionQty === 0) {
        avgEntryPrice = 0
        positionOpenedAt = null
        highWatermarkPrice = 0
        entrySetup = null
      }
      realizedPnL += pnl
      if (pnl > 0) {
        grossProfit += pnl
        winCount += 1
      }
      else if (pnl < 0) {
        grossLoss += Math.abs(pnl)
        lossCount += 1
        dailyLosses += Math.abs(pnl)
      }
      if (decision.action === 'exit') {
        rollingPnl.push(pnl)
        if (rollingPnl.length > 5) rollingPnl.shift()
      }
      trades.push({
        side: decision.action,
        setup: entrySetup,
        price: round(fillPrice),
        qty: qtyToSell,
        confidence: decision.confidence,
        profile: profileName,
        activeGates,
        marketRegime: decision.marketRegime,
        timestamp: current.timestamp || index,
        realizedPnL: round(pnl)
      })
    }

    equityCurve.push({
      timestamp: current.timestamp || index,
      equity: round(cash + positionQty * currentPrice)
    })
  }

  const endingPrice = Number(candles.at(-1)?.close || 0)
  const endingEquity = cash + positionQty * endingPrice
  const totalReturnPct = startingCapital > 0 ? ((endingEquity - startingCapital) / startingCapital) * 100 : 0
  const closedTrades = trades.filter(trade => trade.side === 'trim' || trade.side === 'exit')
  const closedTradeCount = closedTrades.length
  const winRatePct = closedTradeCount > 0 ? safeDivide(winCount, closedTradeCount) * 100 : 0
  const profitFactor = grossLoss > 0 ? grossProfit / grossLoss : (grossProfit > 0 ? null : 0)
  const expectancyPerTrade = closedTradeCount > 0 ? realizedPnL / closedTradeCount : 0
  const returns = equityCurve.slice(1).map((point, idx) => {
    const prev = equityCurve[idx]?.equity
    return prev > 0 ? (point.equity - prev) / prev : 0
  })
  const avgReturn = returns.length ? returns.reduce((sum, value) => sum + value, 0) / returns.length : 0
  const variance = returns.length ? returns.reduce((sum, value) => sum + ((value - avgReturn) ** 2), 0) / returns.length : 0
  const sharpeAnnualized = variance > 0 ? (avgReturn / Math.sqrt(variance)) * Math.sqrt(252) : 0
  const avgWin = winCount > 0 ? grossProfit / winCount : 0
  const avgLoss = lossCount > 0 ? grossLoss / lossCount : 0
  const rewardRiskRatio = avgLoss > 0 ? avgWin / avgLoss : (avgWin > 0 ? null : 0)
  const calibration = summarizeCalibration({
    trades,
    rejectedTrades,
    profileTimeline,
    totalReturnPct,
    maxDrawdownPct,
    profitFactor,
    rewardRiskRatio,
    expectancyPerTrade
  })

  return {
    symbol: input.symbol || null,
    riskProfile,
    startingCapital: round(startingCapital),
    endingEquity: round(endingEquity),
    totalReturnPct: round(totalReturnPct),
    maxDrawdownPct: round(maxDrawdownPct),
    tradeCount: trades.length,
    closingTradeCount: closedTradeCount,
    winCount,
    lossCount,
    winRatePct: round(winRatePct),
    grossProfit: round(grossProfit),
    grossLoss: round(grossLoss),
    realizedPnL: round(realizedPnL),
    profitFactor: profitFactor === null ? null : round(profitFactor),
    expectancyPerTrade: round(expectancyPerTrade),
    sharpeAnnualized: round(sharpeAnnualized),
    rewardRiskRatio: rewardRiskRatio === null ? null : round(rewardRiskRatio),
    rejectedTradeCount: rejectedTrades.length,
    rejectedTrades,
    profileTimeline,
    calibration,
    openPositionQty: positionQty,
    trades,
    equityCurve
  }
}
