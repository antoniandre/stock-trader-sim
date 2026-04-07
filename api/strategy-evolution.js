import { runDayTradingBacktest } from './day-trading-backtest.js'

const BASE_STRATEGIES = [
  {
    id: 'trend-rider',
    family: 'trend',
    description: 'Rides clean continuation with moderate risk filters.',
    params: { entryBias: 8, riskBias: -4, sizeBias: 0.02, stopLossAdj: -0.1, rewardAdj: 0.4 }
  },
  {
    id: 'breakout-surfer',
    family: 'breakout',
    description: 'Leans into expanding momentum with faster exits.',
    params: { entryBias: 12, riskBias: 4, sizeBias: 0.03, stopLossAdj: 0.15, rewardAdj: 0.8 }
  },
  {
    id: 'pullback-prober',
    family: 'pullback',
    description: 'Prefers pullback entries inside larger trends.',
    params: { entryBias: 5, riskBias: -6, sizeBias: -0.01, stopLossAdj: -0.25, rewardAdj: 0.25 }
  },
  {
    id: 'mean-revert-scout',
    family: 'mean-revert',
    description: 'Tests snapback opportunities with tight control.',
    params: { entryBias: -2, riskBias: -2, sizeBias: -0.015, stopLossAdj: -0.35, rewardAdj: 0.1 }
  }
]

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

function scoreBacktest(backtest) {
  const returnWeight = backtest.totalReturnPct * 1.4
  const drawdownPenalty = backtest.maxDrawdownPct * 1.1
  const activityPenalty = backtest.tradeCount < 2 ? 8 : 0
  const qualityBonus = (backtest.winRatePct || 0) * 0.08
  return round(returnWeight - drawdownPenalty - activityPenalty + qualityBonus)
}

function mutateStrategy(strategy, index) {
  const factor = (index % 3) - 1
  return {
    id: `${strategy.id}-m${index + 1}`,
    family: strategy.family,
    description: `${strategy.description} Mutation ${index + 1}.`,
    params: {
      entryBias: round(strategy.params.entryBias + factor * 2),
      riskBias: round(strategy.params.riskBias - factor * 1.5),
      sizeBias: round(strategy.params.sizeBias + factor * 0.01),
      stopLossAdj: round(strategy.params.stopLossAdj + factor * 0.08),
      rewardAdj: round(strategy.params.rewardAdj + factor * 0.12)
    }
  }
}

export function evolveTradingStrategies(input = {}) {
  const candles = Array.isArray(input.candles) ? input.candles : []
  const riskProfile = input.riskProfile || 'balanced'
  const strategyCount = Math.max(4, Number(input.strategyCount || BASE_STRATEGIES.length))

  if (candles.length < 25) {
    throw new Error('At least 25 candles are required to evolve strategies.')
  }

  const seedStrategies = [...BASE_STRATEGIES]
  while (seedStrategies.length < strategyCount) {
    const parent = BASE_STRATEGIES[seedStrategies.length % BASE_STRATEGIES.length]
    seedStrategies.push(mutateStrategy(parent, seedStrategies.length))
  }

  const evaluated = seedStrategies.map(strategy => {
    const spreadPct = Math.max(0.02, round((input.spreadPct ?? 0.08) + (strategy.params.riskBias * 0.01)))
    const backtest = runDayTradingBacktest({
      symbol: input.symbol,
      riskProfile,
      candles,
      spreadPct,
      strategyParams: strategy.params
    })

    return {
      ...strategy,
      backtestSummary: {
        totalReturnPct: backtest.totalReturnPct,
        maxDrawdownPct: backtest.maxDrawdownPct,
        tradeCount: backtest.tradeCount,
        closingTradeCount: backtest.closingTradeCount,
        winRatePct: backtest.winRatePct,
        realizedPnL: backtest.realizedPnL,
        profitFactor: backtest.profitFactor,
        expectancyPerTrade: backtest.expectancyPerTrade,
        endingEquity: backtest.endingEquity
      },
      score: scoreBacktest(backtest)
    }
  })

  const ranked = evaluated.sort((a, b) => b.score - a.score)
  const survivors = ranked.slice(0, Math.max(2, Math.ceil(ranked.length / 2)))
  const pruned = ranked.slice(survivors.length)
  const nextGeneration = survivors.map((strategy, index) => mutateStrategy(strategy, index))

  return {
    symbol: input.symbol || null,
    riskProfile,
    cohort: BASE_STRATEGIES.slice(0, 3).map(strategy => strategy.id),
    evaluatedCount: ranked.length,
    survivors: survivors.map(strategy => ({
      id: strategy.id,
      family: strategy.family,
      description: strategy.description,
      score: strategy.score,
      backtestSummary: strategy.backtestSummary,
      params: strategy.params
    })),
    pruned: pruned.map(strategy => ({
      id: strategy.id,
      family: strategy.family,
      score: strategy.score,
      backtestSummary: strategy.backtestSummary
    })),
    nextGeneration: nextGeneration.map(strategy => ({
      id: strategy.id,
      family: strategy.family,
      description: strategy.description,
      params: strategy.params
    }))
  }
}
