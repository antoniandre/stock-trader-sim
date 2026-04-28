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

function compute15mBullish(candles = [], barDurationMs) {
  const step = Math.max(1, Math.round((15 * 60 * 1000) / Math.max(1, Number(barDurationMs || 5 * 60 * 1000))))
  const closes = []
  for (let index = step - 1; index < candles.length; index += step) {
    const close = Number(candles[index]?.close ?? candles[index]?.c)
    if (Number.isFinite(close)) closes.push(close)
  }
  if (closes.length < 10) return null
  const avg = values => values.reduce((sum, value) => sum + value, 0) / values.length
  return avg(closes.slice(-5)) > avg(closes.slice(-10))
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
      tf15Bullish: compute15mBullish(candles.slice(0, index + 1), barDurationMs),
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
          profile: decision.effectiveProfile?.name || null,
          reason: primaryReason,
          price: round(currentPrice)
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
          profile: decision.effectiveProfile?.name || null,
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
        profile: decision.effectiveProfile?.name || null,
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
    openPositionQty: positionQty,
    trades,
    equityCurve
  }
}
