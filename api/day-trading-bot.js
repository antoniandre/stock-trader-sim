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
    buyThreshold: 52,
    addThreshold: 60,
    trimThreshold: 48,
    exitThreshold: 68,
    basePositionSizePct: 0.1,
    maxPositionSizePct: 0.2,
    stopLossPct: 1.7,
    trailingStopPct: 1.2,
    trimFraction: 0.4,
    rewardTargetPct: 1.5
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

  const liquidityOk = spreadPct <= 0.18 && volumeRatio >= 0.85
  const volatilityOkForMeanReversion = realizedVolatilityPct >= 0.18 && realizedVolatilityPct <= 1.35
  const weakLiquidity = spreadPct > 0.3 || volumeRatio < 0.7
  const weakVolatilityForEntries = realizedVolatilityPct < 0.12 || realizedVolatilityPct > 1.8
  const weakEvidence = weakLiquidity || weakVolatilityForEntries

  const setup = classifySetup({
    shortTrendPct,
    mediumTrendPct,
    longTrendPct,
    momentumPct,
    marketRegime,
    liquidityOk,
    volatilityOkForMeanReversion,
    volumeRatio,
    realizedVolatilityPct
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
  if (shortTrendPct < -0.5) entryScore -= 16

  if (setup === 'mean-revert') {
    entryScore += 18
    if (shortTrendPct < -0.25) entryScore += 6
    if (Math.abs(mediumTrendPct) < 0.6) entryScore += 4
  }

  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) entryScore -= 24
  if (setup === 'breakout' && marketRegime !== 'breakout') entryScore -= 10
  if (setup === 'weak') entryScore -= 14
  if (weakEvidence) entryScore -= 12
  entryScore = clamp(entryScore, 0, 100)

  let riskScore = 18 + Number(strategyParams.riskBias || 0)
  riskScore += clamp(spreadPct * 12, 0, 20)
  riskScore += clamp(realizedVolatilityPct * 7, 0, 28)
  if (volumeRatio < 0.75) riskScore += 12
  if (Math.abs(momentumPct) > 1.2) riskScore += 12
  if (marketRegime === 'chop') riskScore += 16
  if (marketRegime === 'breakout') riskScore += 5
  if (weakLiquidity) riskScore += 12
  if (weakVolatilityForEntries) riskScore += 10
  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) riskScore += 16
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
  if (marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')) {
    reasons.push('Trend and breakout entries are suppressed during chop')
  }
  if (setup === 'mean-revert') {
    reasons.push(liquidityOk && volatilityOkForMeanReversion
      ? 'Mean-reversion conditions are acceptable for a controlled snapback entry'
      : 'Mean-reversion is present, but execution conditions still need work')
  }
  if (weakEvidence) reasons.push('Liquidity or volatility conditions make the signal unreliable')
  if (lowConfidence) reasons.push('Confidence is below the bar for a fresh trade')

  let action = 'hold'
  const buyThreshold = profile.buyThreshold + (setup === 'mean-revert' ? -4 : 0)
  const addThreshold = profile.addThreshold + (marketRegime === 'chop' ? 8 : 0)
  const allowNewEntry = riskScore <= profile.maxRiskScoreForEntry
    && !(marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout'))

  if (positionQty <= 0) {
    if (allowNewEntry && entryScore >= buyThreshold && (setup !== 'weak')) {
      action = 'buy'
      reasons.push(setup === 'mean-revert'
        ? 'Qualified mean-reversion entry clears the buy threshold with acceptable risk'
        : 'Entry score clears the buy threshold with acceptable risk')
    }
    else {
      action = 'wait'
      reasons.push('Setup is not clean enough yet')
    }
  }
  else {
    const stopTriggered = unrealizedPnLPct <= -profile.stopLossPct
    const trendBroken = shortTrendPct < -0.35
    const takeProfitZone = unrealizedPnLPct >= profile.rewardTargetPct

    if (stopTriggered) {
      action = 'exit'
      reasons.push('Loss breached the stop level')
    }
    else if (riskScore >= profile.exitThreshold && trendBroken && unrealizedPnLPct > -0.5) {
      action = 'exit'
      reasons.push('Risk is elevated and trend support broke')
    }
    else if (takeProfitZone && (shortTrendPct < 0.2 || momentumPct < 0.08)) {
      action = 'trim'
      reasons.push('Open profit is strong, but momentum is cooling')
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

    // TODO: Add position timeout when candle index tracking is available
    // Currently, the backtest engine doesn't track when positions were opened.
    // Once candle entry index is available, implement: timeout stale positions >20 candles without meaningful progress.
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

  const sizeConfidence = clamp(confidence - (setup === 'mean-revert' ? 4 : 8), 35, 90)
  const positionSizePct = clamp(
    profile.basePositionSizePct + ((sizeConfidence - 50) / 100) * profile.basePositionSizePct + Number(strategyParams.sizeBias || 0),
    0.02,
    profile.maxPositionSizePct
  )

  const executionPlan = {
    positionSizePct: round(positionSizePct * 100),
    stopLossPct: round(profile.stopLossPct + Number(strategyParams.stopLossAdj || 0)),
    trailingStopPct: profile.trailingStopPct,
    trimFraction: profile.trimFraction,
    rewardTargetPct: round(profile.rewardTargetPct + Number(strategyParams.rewardAdj || 0))
  }

  return {
    symbol: input.symbol || null,
    riskProfile: profileName,
    marketRegime,
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
    executionPlan,
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
      guardrails: {
        liquidityOk,
        volatilityOkForMeanReversion,
        weakEvidence,
        lowConfidence
      }
    }),
    reasons
  }
}

function buildRecommendation({ action, confidence, currentPrice, spreadPct, momentumPct, positionQty, executionPlan, marketRegime, setup, guardrails }) {
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
    const waitDetail = marketRegime === 'chop' && (setup === 'trend' || setup === 'breakout')
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

function classifySetup({ shortTrendPct, mediumTrendPct, longTrendPct, momentumPct, marketRegime, liquidityOk, volatilityOkForMeanReversion, volumeRatio, realizedVolatilityPct }) {
  const breakoutSetup = shortTrendPct > 0.8 && mediumTrendPct > 0.9 && momentumPct > 0.18 && volumeRatio > 1.1 && realizedVolatilityPct > 0.45
  if (breakoutSetup) return 'breakout'

  const trendSetup = shortTrendPct > 0.35 && mediumTrendPct > 0.7 && longTrendPct > 0.8
  if (trendSetup) return 'trend'

  const meanReversionSetup = marketRegime === 'chop'
    && shortTrendPct <= -0.2
    && Math.abs(mediumTrendPct) <= 0.7
    && momentumPct <= -0.05
    && liquidityOk
    && volatilityOkForMeanReversion
  if (meanReversionSetup) return 'mean-revert'

  return 'weak'
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
