import { runDayTradingBacktest } from './day-trading-backtest.js'

const BASE_STRATEGIES = [
  {
    id: 'trend-rider',
    family: 'trend',
    description: 'Rides clean continuation with moderate risk filters.',
    params: { entryBias: 8, riskBias: -4, sizeBias: 0.02, stopLossAdj: -0.1, rewardAdj: 0.4, trendThresholdBoost: 12, enablePilotWeakMomentum: true, pilotWeakMomentumMinVolumeRatio: 1.25 }
  },
  {
    id: 'breakout-surfer',
    family: 'breakout',
    description: 'Leans into expanding momentum with faster exits.',
    params: { entryBias: 12, riskBias: 4, sizeBias: 0.03, stopLossAdj: 0.15, rewardAdj: 0.8, breakoutThresholdAdj: -3, atrMultiplier: 2.7, breakoutSizeMultiplier: 0.85 }
  },
  {
    id: 'pullback-prober',
    family: 'pullback',
    description: 'Prefers pullback entries inside larger trends.',
    params: { entryBias: 5, riskBias: -6, sizeBias: -0.01, stopLossAdj: -0.25, rewardAdj: 0.25, enablePilotVwapPullback: true, pilotVwapPullbackMaxPct: 0.45, momentumPilotThresholdBoost: 8 }
  },
  {
    id: 'mean-revert-scout',
    family: 'mean-revert',
    description: 'Tests snapback opportunities with tight control.',
    params: { entryBias: -2, riskBias: -2, sizeBias: -0.015, stopLossAdj: -0.35, rewardAdj: 0.1, enableMeanRevert: true, meanRevertSizeMultiplier: 0.5, stopFloorPct: 0.55 }
  }
]

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

function scoreBacktest(backtest) {
  const returnWeight = backtest.totalReturnPct * 1.4
  const drawdownPenalty = backtest.maxDrawdownPct * 1.1
  const lowActivityPenalty = backtest.tradeCount < 2 ? 8 : backtest.tradeCount < 4 ? 4 : 0
  const noClosedTradesPenalty = backtest.closingTradeCount < 1 ? 10 : backtest.closingTradeCount < 2 ? 4 : 0
  const qualityBonus = (backtest.winRatePct || 0) * 0.08
  const expectancyBonus = Math.max(-6, Math.min(6, (backtest.expectancyPerTrade || 0) * 0.25))
  return round(returnWeight - drawdownPenalty - lowActivityPenalty - noClosedTradesPenalty + qualityBonus + expectancyBonus)
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
      rewardAdj: round(strategy.params.rewardAdj + factor * 0.12),
      trendThresholdBoost: strategy.params.trendThresholdBoost == null ? undefined : round(strategy.params.trendThresholdBoost + factor * 2),
      breakoutThresholdAdj: strategy.params.breakoutThresholdAdj == null ? undefined : round(strategy.params.breakoutThresholdAdj + factor * 2),
      momentumPilotThresholdBoost: strategy.params.momentumPilotThresholdBoost == null ? undefined : round(strategy.params.momentumPilotThresholdBoost + factor * 2),
      pilotWeakMomentumMinVolumeRatio: strategy.params.pilotWeakMomentumMinVolumeRatio == null ? undefined : round(strategy.params.pilotWeakMomentumMinVolumeRatio + factor * 0.1),
      pilotVwapPullbackMaxPct: strategy.params.pilotVwapPullbackMaxPct == null ? undefined : round(strategy.params.pilotVwapPullbackMaxPct - factor * 0.05),
      atrMultiplier: strategy.params.atrMultiplier == null ? undefined : round(strategy.params.atrMultiplier + factor * 0.15),
      stopFloorPct: strategy.params.stopFloorPct == null ? undefined : round(strategy.params.stopFloorPct + factor * 0.05),
      enableMeanRevert: strategy.params.enableMeanRevert,
      enablePilotWeakMomentum: strategy.params.enablePilotWeakMomentum,
      enablePilotVwapPullback: strategy.params.enablePilotVwapPullback,
      breakoutSizeMultiplier: strategy.params.breakoutSizeMultiplier,
      meanRevertSizeMultiplier: strategy.params.meanRevertSizeMultiplier
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
      strategyParams: { ...(input.strategyParams || {}), ...strategy.params },
      barDurationMs: input.barDurationMs
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
        sharpeAnnualized: backtest.sharpeAnnualized,
        rewardRiskRatio: backtest.rewardRiskRatio,
        rejectedTradeCount: backtest.rejectedTradeCount,
        endingEquity: backtest.endingEquity,
        calibrationStatus: backtest.calibration?.readiness?.status || 'unknown',
        topProfile: backtest.calibration?.latestProfile || null,
        topRejectReason: backtest.calibration?.topRejectReasons?.[0]?.key || null
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
