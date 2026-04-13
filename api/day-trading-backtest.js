import { evaluateDayTradingDecision } from './day-trading-bot.js'

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

function safeDivide(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return 0
  return numerator / denominator
}

export function runDayTradingBacktest(input = {}) {
  const candles = Array.isArray(input.candles) ? input.candles : []
  const riskProfile = input.riskProfile || 'balanced'
  const startingCapital = Number(input.startingCapital || 10000)

  if (candles.length < 25) {
    throw new Error('At least 25 candles are required to run a backtest.')
  }

  let cash = startingCapital
  let positionQty = 0
  let avgEntryPrice = 0
  let equityPeak = startingCapital
  let maxDrawdownPct = 0
  const trades = []
  const equityCurve = []
  let grossProfit = 0
  let grossLoss = 0
  let realizedPnL = 0
  let winCount = 0
  let lossCount = 0

  for (let index = 20; index < candles.length; index += 1) {
    const window = candles.slice(Math.max(0, index - 30), index + 1)
    const closes = window.map(candle => Number(candle.close)).filter(Number.isFinite)
    const volumes = window.map(candle => Number(candle.volume)).filter(Number.isFinite)
    const current = candles[index]
    const currentPrice = Number(current.close)
    if (!Number.isFinite(currentPrice) || currentPrice <= 0) continue

    const strategyParams = input.strategyParams || {}
    const decision = evaluateDayTradingDecision({
      symbol: input.symbol,
      riskProfile,
      currentPrice,
      currentVolume: Number(current.volume || volumes.at(-1) || 0),
      prices: closes,
      volumes,
      spreadPct: Number(input.spreadPct ?? 0.08),
      positionQty,
      avgEntryPrice,
      strategyParams,
      disableDailyCatalyst: true
    })

    const equity = cash + positionQty * currentPrice
    equityPeak = Math.max(equityPeak, equity)
    const drawdownPct = equityPeak > 0 ? ((equityPeak - equity) / equityPeak) * 100 : 0
    maxDrawdownPct = Math.max(maxDrawdownPct, drawdownPct)

    if (decision.action === 'buy' || decision.action === 'add') {
      const targetAllocation = decision.executionPlan.positionSizePct / 100
      const desiredValue = equity * targetAllocation
      const affordableQty = Math.floor(Math.min(desiredValue, cash) / currentPrice)

      if (affordableQty > 0) {
        const cost = affordableQty * currentPrice
        const newQty = positionQty + affordableQty
        avgEntryPrice = newQty > 0
          ? ((avgEntryPrice * positionQty) + cost) / newQty
          : 0
        positionQty = newQty
        cash -= cost
        trades.push({
          side: decision.action,
          price: round(currentPrice),
          qty: affordableQty,
          confidence: decision.confidence,
          timestamp: current.timestamp || index
        })
      }
    }

    if ((decision.action === 'trim' || decision.action === 'exit') && positionQty > 0) {
      const trimFraction = decision.action === 'exit' ? 1 : decision.executionPlan.trimFraction
      const qtyToSell = Math.max(1, Math.floor(positionQty * trimFraction))
      const proceeds = qtyToSell * currentPrice
      const pnl = (currentPrice - avgEntryPrice) * qtyToSell
      cash += proceeds
      positionQty -= qtyToSell
      if (positionQty === 0) avgEntryPrice = 0
      realizedPnL += pnl
      if (pnl > 0) {
        grossProfit += pnl
        winCount += 1
      }
      else if (pnl < 0) {
        grossLoss += Math.abs(pnl)
        lossCount += 1
      }
      trades.push({
        side: decision.action,
        price: round(currentPrice),
        qty: qtyToSell,
        confidence: decision.confidence,
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
    openPositionQty: positionQty,
    trades,
    equityCurve
  }
}
