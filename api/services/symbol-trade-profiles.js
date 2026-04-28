import { getLearnedSymbolStats, summarizeLearnedStats } from './symbol-profile-learning.js'

const BASE_PROFILE = {
  name: 'default',
  maxSpreadPct: 0.35,
  minVolumeRatio: 0.85,
  minRewardRiskRatio: 1.6,
  slippagePct: 0.06,
  sizeMultiplier: 1,
  entryScoreAdj: 0,
  riskScoreAdj: 0,
  thresholdAdj: 0,
  blockSetups: [],
  breakoutConfirmationBars: 1,
  reasons: []
}

const STATIC_SYMBOL_PRIORS = {
  TSLA: {
    name: 'false-breakout-watch',
    maxSpreadPct: 0.28,
    minVolumeRatio: 1.05,
    minRewardRiskRatio: 1.8,
    slippagePct: 0.08,
    sizeMultiplier: 0.85,
    thresholdAdj: 4,
    breakoutConfirmationBars: 2,
    reasons: ['TSLA prior: require stronger follow-through to avoid first-leg false breakouts']
  },
  ARM: {
    name: 'liquidity-slippage-watch',
    maxSpreadPct: 0.22,
    minVolumeRatio: 1.05,
    minRewardRiskRatio: 2.0,
    slippagePct: 0.16,
    sizeMultiplier: 0.65,
    thresholdAdj: 6,
    reasons: ['ARM prior: stricter spread/liquidity filter due to fill quality risk']
  },
  BA: {
    name: 'headline-beta-cautious',
    maxSpreadPct: 0.30,
    minVolumeRatio: 0.95,
    minRewardRiskRatio: 1.8,
    slippagePct: 0.09,
    sizeMultiplier: 0.75,
    thresholdAdj: 3,
    reasons: ['BA prior: headline-sensitive tape, use reduced size unless structure is clean']
  },
  MU: {
    name: 'semis-cyclical-cautious',
    maxSpreadPct: 0.30,
    minVolumeRatio: 0.95,
    minRewardRiskRatio: 1.75,
    slippagePct: 0.08,
    sizeMultiplier: 0.8,
    thresholdAdj: 2,
    reasons: ['MU prior: keep tradable with tighter confirmation and smaller size']
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function mergeProfile(base, override = {}) {
  return {
    ...base,
    ...override,
    blockSetups: [...new Set([...(base.blockSetups || []), ...(override.blockSetups || [])])],
    reasons: [...(base.reasons || []), ...(override.reasons || [])]
  }
}

function recentTrendEfficiency(prices = []) {
  const recent = Array.isArray(prices) ? prices.slice(-12).filter(Number.isFinite) : []
  if (recent.length < 4) return 0
  let path = 0
  for (let i = 1; i < recent.length; i++) path += Math.abs(recent[i] - recent[i - 1])
  const net = Math.abs(recent.at(-1) - recent[0])
  return path > 0 ? net / path : 0
}

export function resolveSymbolTradeProfile(input = {}) {
  const symbol = String(input.symbol || '').trim().toUpperCase()
  const setup = String(input.setup || '')
  const marketRegime = String(input.marketRegime || '')
  const volumeRatio = Number(input.volumeRatio || 0)
  const spreadPct = Number(input.spreadPct || 0)
  const atrPct = Number(input.atrPct || 0)
  const vwapDevPct = Number(input.vwapDevPct || 0)
  const rsi14 = Number(input.rsi14 || 50)
  const behaviorProfile = String(input.behaviorProfile || '')
  const tradeState = String(input.tradeState || '')
  const rollingExpectancy = Number(input.rollingExpectancy || 0)
  const dailyLossesPct = Number(input.dailyLossesPct || 0)
  const trendEfficiency = recentTrendEfficiency(input.prices)
  const learnedStats = getLearnedSymbolStats(symbol, setup)
  const learnedTotal = summarizeLearnedStats(learnedStats?.totals)
  const learnedSetup = summarizeLearnedStats(learnedStats?.setup)

  let profile = mergeProfile(BASE_PROFILE, STATIC_SYMBOL_PRIORS[symbol] || {})
  const dynamicReasons = []
  const activeGates = []

  if (marketRegime === 'chop') {
    profile = mergeProfile(profile, {
      name: `${profile.name}+chop-defense`,
      thresholdAdj: profile.thresholdAdj + 7,
      riskScoreAdj: profile.riskScoreAdj + 8,
      sizeMultiplier: profile.sizeMultiplier * 0.55,
      blockSetups: ['breakout']
    })
    dynamicReasons.push('Dynamic profile: choppy regime blocks breakout chasing and cuts size')
  }

  if (setup === 'breakout' && trendEfficiency < 0.34) {
    profile = mergeProfile(profile, {
      name: `${profile.name}+weak-follow-through`,
      thresholdAdj: profile.thresholdAdj + 6,
      riskScoreAdj: profile.riskScoreAdj + 5,
      blockSetups: ['breakout']
    })
    dynamicReasons.push('Dynamic profile: breakout lacks efficient follow-through')
  }

  if (['liquidity-slippage-risk', 'confirmation-required'].includes(tradeState) || behaviorProfile === 'liquiditySlippageRisk') {
    profile = mergeProfile(profile, {
      name: `${profile.name}+execution-confirmation`,
      thresholdAdj: profile.thresholdAdj + 5,
      riskScoreAdj: profile.riskScoreAdj + 5,
      minRewardRiskRatio: Math.max(profile.minRewardRiskRatio, 2.0),
      slippagePct: Math.max(profile.slippagePct, 0.1),
      sizeMultiplier: profile.sizeMultiplier * 0.7
    })
    dynamicReasons.push('Dynamic profile: current trade state needs better execution quality and confirmation')
  }

  if (['thin-chop', 'regime-instability', 'extended-chase'].includes(tradeState)) {
    profile = mergeProfile(profile, {
      name: `${profile.name}+state-defense`,
      thresholdAdj: profile.thresholdAdj + 8,
      riskScoreAdj: profile.riskScoreAdj + 8,
      minRewardRiskRatio: Math.max(profile.minRewardRiskRatio, 2.1),
      sizeMultiplier: profile.sizeMultiplier * 0.55
    })
    dynamicReasons.push('Dynamic profile: current tape state is defensive, so only exceptional R:R should be considered')
  }

  if (atrPct > 1.25 || Math.abs(vwapDevPct) > 1.6 || rsi14 >= 82) {
    profile = mergeProfile(profile, {
      name: `${profile.name}+extended`,
      thresholdAdj: profile.thresholdAdj + 5,
      riskScoreAdj: profile.riskScoreAdj + 7,
      minRewardRiskRatio: Math.max(profile.minRewardRiskRatio, 1.9),
      slippagePct: Math.max(profile.slippagePct, 0.1),
      sizeMultiplier: profile.sizeMultiplier * 0.7
    })
    dynamicReasons.push('Dynamic profile: tape is extended, require better R:R and smaller size')
  }

  if (rollingExpectancy < -15) {
    profile = mergeProfile(profile, {
      name: `${profile.name}+negative-expectancy`,
      thresholdAdj: profile.thresholdAdj + 10,
      riskScoreAdj: profile.riskScoreAdj + 10,
      sizeMultiplier: profile.sizeMultiplier * 0.4
    })
    dynamicReasons.push('Dynamic profile: recent realized expectancy is negative')
  }

  if (dailyLossesPct >= 0.75) {
    profile = mergeProfile(profile, {
      name: `${profile.name}+daily-loss-defense`,
      thresholdAdj: profile.thresholdAdj + 8,
      riskScoreAdj: profile.riskScoreAdj + 10,
      sizeMultiplier: profile.sizeMultiplier * 0.45
    })
    dynamicReasons.push('Dynamic profile: daily loss budget is being consumed')
  }

  const learnedEvidence = learnedSetup.weightedTrades >= 3 ? learnedSetup : learnedTotal
  if (learnedEvidence.weightedTrades >= 3) {
    if (learnedEvidence.expectancy < -10 || (learnedEvidence.profitFactor !== null && learnedEvidence.profitFactor > 0 && learnedEvidence.profitFactor < 0.8)) {
      profile = mergeProfile(profile, {
        name: `${profile.name}+learned-defense`,
        thresholdAdj: profile.thresholdAdj + 6,
        riskScoreAdj: profile.riskScoreAdj + 6,
        minRewardRiskRatio: Math.max(profile.minRewardRiskRatio, 1.9),
        sizeMultiplier: profile.sizeMultiplier * 0.65
      })
      dynamicReasons.push(`Learned profile: ${symbol} has weak recent expectancy (${learnedEvidence.expectancy}/trade, PF ${learnedEvidence.profitFactor ?? 'inf'})`)
    }
    else if (learnedEvidence.weightedTrades >= 5 && learnedEvidence.winRatePct < 35) {
      profile = mergeProfile(profile, {
        name: `${profile.name}+low-win-rate`,
        thresholdAdj: profile.thresholdAdj + 5,
        riskScoreAdj: profile.riskScoreAdj + 4,
        sizeMultiplier: profile.sizeMultiplier * 0.75
      })
      dynamicReasons.push(`Learned profile: ${symbol} win rate is only ${learnedEvidence.winRatePct}% across recent evidence`)
    }
    else if (learnedEvidence.weightedTrades >= 5 && learnedEvidence.expectancy > 5 && (learnedEvidence.profitFactor === null || learnedEvidence.profitFactor >= 1.4)) {
      profile = mergeProfile(profile, {
        name: `${profile.name}+learned-edge`,
        thresholdAdj: profile.thresholdAdj - 2,
        riskScoreAdj: profile.riskScoreAdj - 2,
        minVolumeRatio: Math.max(0.7, profile.minVolumeRatio - 0.05),
        sizeMultiplier: profile.sizeMultiplier * 1.08
      })
      dynamicReasons.push(`Learned profile: ${symbol} has positive recent expectancy (${learnedEvidence.expectancy}/trade, PF ${learnedEvidence.profitFactor ?? 'inf'})`)
    }
  }

  if (spreadPct > profile.maxSpreadPct) activeGates.push(`spread ${spreadPct.toFixed(2)}% > max ${profile.maxSpreadPct.toFixed(2)}%`)
  if (volumeRatio > 0 && volumeRatio < profile.minVolumeRatio) activeGates.push(`volume ${volumeRatio.toFixed(2)}x < min ${profile.minVolumeRatio.toFixed(2)}x`)
  if (profile.blockSetups.includes(setup)) activeGates.push(`${setup} setup blocked by active profile`)

  return {
    ...profile,
    symbol,
    sizeMultiplier: clamp(Number(profile.sizeMultiplier || 1), 0.2, 1.25),
    thresholdAdj: Math.round(Number(profile.thresholdAdj || 0)),
    riskScoreAdj: Math.round(Number(profile.riskScoreAdj || 0)),
    entryScoreAdj: Math.round(Number(profile.entryScoreAdj || 0)),
    reasons: [...profile.reasons, ...dynamicReasons],
    activeGates,
    diagnostics: {
      trendEfficiency: Math.round((trendEfficiency + Number.EPSILON) * 100) / 100,
      behaviorProfile,
      tradeState,
      rollingExpectancy,
      dailyLossesPct,
      learned: {
        total: learnedTotal,
        setup: learnedSetup
      }
    }
  }
}
