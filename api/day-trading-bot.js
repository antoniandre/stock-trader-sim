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

export const RISK_PROFILES = {
  conservative: {
    maxRiskScoreForEntry: 34,
    buyThreshold: 64,
    addThreshold: 74,
    trimThreshold: 58,
    exitThreshold: 74,
    basePositionSizePct: 0.06,
    maxPositionSizePct: 0.12,
    stopLossPct: 1.2,
    trailingStopPct: 0.9,
    trimFraction: 0.35,
    rewardTargetPct: 1.8
  },
  balanced: {
    maxRiskScoreForEntry: 46,
    buyThreshold: 58,
    addThreshold: 68,
    trimThreshold: 54,
    exitThreshold: 68,
    basePositionSizePct: 0.1,
    maxPositionSizePct: 0.2,
    stopLossPct: 1.7,
    trailingStopPct: 1.2,
    trimFraction: 0.4,
    rewardTargetPct: 2.5
  },
  aggressive: {
    maxRiskScoreForEntry: 58,
    buyThreshold: 54,
    addThreshold: 63,
    trimThreshold: 50,
    exitThreshold: 63,
    basePositionSizePct: 0.14,
    maxPositionSizePct: 0.28,
    stopLossPct: 2.4,
    trailingStopPct: 1.7,
    trimFraction: 0.5,
    rewardTargetPct: 3.4
  }
}

export function evaluateDayTradingDecision(input = {}) {
  const profileName = input.riskProfile in RISK_PROFILES ? input.riskProfile : 'balanced'
  const profile = RISK_PROFILES[profileName]
  const strategyParams = input.strategyParams || {}

  const prices = Array.isArray(input.prices) ? input.prices.filter(Number.isFinite) : []
  const volumes = Array.isArray(input.volumes) ? input.volumes.filter(Number.isFinite) : []
  const currentPrice = Number(input.currentPrice ?? prices.at(-1) ?? 0)
  const prevPrice = Number(prices.at(-2) ?? currentPrice)
  const shortWindow = prices.slice(-5)
  const mediumWindow = prices.slice(-12)
  const longWindow = prices.slice(-30)

  const shortTrendPct = percentChange(shortWindow[0] ?? currentPrice, currentPrice)
  const mediumTrendPct = percentChange(mediumWindow[0] ?? currentPrice, currentPrice)
  const longTrendPct = percentChange(longWindow[0] ?? currentPrice, currentPrice)
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
  const marketRegime = input.marketRegime || inferMarketRegime({ shortTrendPct, mediumTrendPct, longTrendPct, realizedVolatilityPct })

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
  if (shortTrendPct < -0.5) entryScore -= 16
  entryScore = clamp(entryScore, 0, 100)

  let riskScore = 18 + Number(strategyParams.riskBias || 0)
  riskScore += clamp(spreadPct * 12, 0, 20)
  riskScore += clamp(realizedVolatilityPct * 7, 0, 28)
  if (volumeRatio < 0.75) riskScore += 12
  if (Math.abs(momentumPct) > 1.2) riskScore += 12
  if (marketRegime === 'chop') riskScore += 16
  if (marketRegime === 'breakout') riskScore += 5
  riskScore = clamp(riskScore, 0, 100)

  const managementScore = clamp(
    50 + (unrealizedPnLPct * 10) + (shortTrendPct * 8) - (realizedVolatilityPct * 6),
    0,
    100
  )

  const confidence = clamp(Math.round(entryScore - riskScore * 0.45), 0, 100)
  const reasons = []

  if (shortTrendPct > 0.35) reasons.push('Short-term momentum is positive')
  if (mediumTrendPct > 0.8) reasons.push('Medium trend is supportive')
  if (volumeRatio > 1.2) reasons.push('Volume confirms the move')
  if (spreadPct > 0.35) reasons.push('Spread is wide, execution risk is higher')
  if (realizedVolatilityPct > 1.4) reasons.push('Volatility is elevated')
  if (marketRegime === 'chop') reasons.push('Market regime is choppy')
  if (marketRegime === 'trend') reasons.push('Market regime favors trend continuation')

  let action = 'hold'
  if (positionQty <= 0) {
    if (riskScore <= profile.maxRiskScoreForEntry && entryScore >= profile.buyThreshold) {
      action = 'buy'
      reasons.push('Entry score clears the buy threshold with acceptable risk')
    }
    else {
      action = 'wait'
      reasons.push('Setup is not clean enough yet')
    }
  }
  else {
    const stopTriggered = unrealizedPnLPct <= -profile.stopLossPct
    const trendBroken = shortTrendPct < -0.7 && mediumTrendPct < 0
    const takeProfitZone = unrealizedPnLPct >= profile.rewardTargetPct

    if (stopTriggered || (riskScore >= profile.exitThreshold && trendBroken)) {
      action = 'exit'
      reasons.push(stopTriggered ? 'Loss breached the stop level' : 'Risk is elevated and trend support broke')
    }
    else if (takeProfitZone && managementScore < profile.trimThreshold) {
      action = 'trim'
      reasons.push('Open profit is strong, but momentum is cooling')
    }
    else if (riskScore <= profile.maxRiskScoreForEntry && entryScore >= profile.addThreshold && unrealizedPnLPct >= 0.4) {
      action = 'add'
      reasons.push('Trend and momentum support adding to the winner')
    }
    else {
      action = 'hold'
      reasons.push('Current position still fits the measured risk')
    }
  }

  const positionSizePct = clamp(
    profile.basePositionSizePct + ((confidence - 50) / 100) * profile.basePositionSizePct + Number(strategyParams.sizeBias || 0),
    0.02,
    profile.maxPositionSizePct
  )

  return {
    symbol: input.symbol || null,
    riskProfile: profileName,
    marketRegime,
    action,
    confidence,
    scores: {
      entry: Math.round(entryScore),
      risk: Math.round(riskScore),
      management: Math.round(managementScore)
    },
    metrics: {
      currentPrice,
      shortTrendPct: round(shortTrendPct),
      mediumTrendPct: round(mediumTrendPct),
      longTrendPct: round(longTrendPct),
      momentumPct: round(momentumPct),
      volumeRatio: round(volumeRatio),
      spreadPct: round(spreadPct),
      realizedVolatilityPct: round(realizedVolatilityPct),
      unrealizedPnLPct: round(unrealizedPnLPct)
    },
    executionPlan: {
      positionSizePct: round(positionSizePct * 100),
      stopLossPct: round(profile.stopLossPct + Number(strategyParams.stopLossAdj || 0)),
      trailingStopPct: profile.trailingStopPct,
      trimFraction: profile.trimFraction,
      rewardTargetPct: round(profile.rewardTargetPct + Number(strategyParams.rewardAdj || 0))
    },
    reasons
  }
}

function inferMarketRegime({ shortTrendPct, mediumTrendPct, longTrendPct, realizedVolatilityPct }) {
  if (Math.abs(shortTrendPct) < 0.2 && Math.abs(mediumTrendPct) < 0.35) return 'chop'
  if (shortTrendPct > 0.7 && mediumTrendPct > 1 && realizedVolatilityPct > 0.45) return 'breakout'
  if (shortTrendPct > 0 && mediumTrendPct > 0 && longTrendPct > 0) return 'trend'
  return 'mixed'
}

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
