import { getMarketStatus, getTopMovers, fetchStockTrend } from '../market-data.js'
import { sleep } from '../utils.js'
import { state } from '../config.js'
import * as AlpacaClient from '../clients/alpaca-client.js'
import { formatTradingDayKey, getDailyCatalystDiagnostics, getDailyCatalystForSymbol, summarizeCatalystRow } from './daily-catalysts.js'

const DEFAULT_LIMIT = 8

// Bars-backed trend is expensive (Alpaca rate limits). Only enrich a small subset, sequentially.
const TREND_ENRICH_TOP_K = 4
const TREND_ENRICH_MIN_SCORE = 56
const TREND_FETCH_GAP_MS = 280

function clampLimit(limit) {
  const parsed = Number.parseInt(limit, 10)
  if (!Number.isFinite(parsed)) return DEFAULT_LIMIT
  return Math.min(Math.max(parsed, 1), 12)
}

function normalizePercent(candidate) {
  const raw = candidate?.pct ?? candidate?.percent_change ?? candidate?.change_percent ?? candidate?.changePct
  const pct = Number(raw)
  if (!Number.isFinite(pct)) return 0
  return Math.abs(pct) <= 1 ? pct * 100 : pct
}

function normalizePrice(candidate) {
  return Number(candidate?.price ?? candidate?.close ?? candidate?.latest_close ?? 0) || 0
}

function normalizeVolume(candidate) {
  return Number(candidate?.volume ?? candidate?.day_volume ?? 0) || 0
}

function scoreCandidate(candidate, market, marketStatus) {
  const pct = normalizePercent(candidate)
  const absPct = Math.abs(pct)
  const price = normalizePrice(candidate)
  const volume = normalizeVolume(candidate)
  const side = pct >= 0 ? 'buy' : 'sell'
  const reasons = []
  let score = 0

  score += Math.min(absPct * 7, 45)
  if (absPct >= 4) {
    reasons.push(`${absPct.toFixed(1)}% momentum leader`)
  }

  if (volume > 0) {
    if (volume >= 1_000_000) {
      score += 15
      reasons.push('heavy tape with deep volume')
    }
    else if (volume >= 100_000) {
      score += 9
      reasons.push('healthy participation')
    }
    else {
      score += 4
      reasons.push('lighter volume, size carefully')
    }
  }

  if (price >= 5 && price <= 250) {
    score += 10
    reasons.push('clean price zone for fast execution')
  }
  else if (price > 0) {
    score += 5
  }

  if (market === 'crypto') {
    score += 8
    reasons.push('24/7 crypto venue keeps setup tradeable')
  }
  else if (marketStatus?.status === 'open') {
    score += 8
    reasons.push('cash session is open')
  }
  else {
    reasons.push('watch until the equity session reopens')
  }

  return {
    symbol: candidate.symbol,
    name: candidate.name || candidate.symbol,
    market,
    side,
    score: Math.round(score),
    confidence: score >= 70 ? 'high' : score >= 52 ? 'medium' : 'watch',
    price,
    changePct: Number(pct.toFixed(2)),
    volume,
    exchange: candidate.exchange || null,
    assetClass: candidate.assetClass || candidate.class || market,
    reasons: reasons.slice(0, 3),
    thesis: side === 'buy'
      ? `Momentum is already on the boil, look for continuation with disciplined risk.`
      : `Weak tape and downside pressure make this a fade or short-watch candidate.`
  }
}

function applyCatalystEnrichment(candidate) {
  const catalystRow = getDailyCatalystForSymbol(candidate.symbol)
  if (catalystRow) {
    candidate.dailyCatalyst = summarizeCatalystRow(catalystRow)
    candidate.score = Math.min(100, Math.round((candidate.score || 0) + 8))
    const reasons = [...(candidate.reasons || [])]
    const label = `daily catalyst (${catalystRow.catalyst_score || 'on file'})`
    if (!reasons.some(r => String(r).toLowerCase().includes('catalyst'))) {
      reasons.unshift(label)
    }
    candidate.reasons = reasons.slice(0, 3)
  }
}

async function enrichTrendFromBars(candidate, points = 6) {
  try {
    const trend = await fetchStockTrend(candidate.symbol, points)
    const trendData = trend?.data || []
    if (trendData.length >= 2) {
      const first = Number(trendData[0]?.price || 0)
      const last = Number(trendData[trendData.length - 1]?.price || 0)
      if (first > 0 && last > 0) {
        const intradayTrendPct = ((last - first) / first) * 100
        candidate.intradayTrendPct = Number(intradayTrendPct.toFixed(2))
        if (intradayTrendPct > 0.75) candidate.reasons?.push('trend line is still climbing')
        if (intradayTrendPct < -0.75) candidate.reasons?.push('trend line is still fading')
      }
    }
  }
  catch (_error) {
    // Trend detail is optional; movers payload is still useful.
  }
}

function symbolGetsTrendFetch(candidate, rankIndex) {
  if (rankIndex < TREND_ENRICH_TOP_K) return true
  if ((candidate.score || 0) >= TREND_ENRICH_MIN_SCORE) return true
  return false
}

/**
 * Catalyst for everyone (cheap). Bars trend only for top movers / high preview score, one at a time.
 */
async function enrichStockCandidatesStaged(candidates) {
  let firstTrend = true
  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i]
    if (!symbolGetsTrendFetch(c, i)) continue
    if (!firstTrend) await sleep(TREND_FETCH_GAP_MS)
    firstTrend = false
    await enrichTrendFromBars(c, 6)
  }

  for (const c of candidates) {
    applyCatalystEnrichment(c)
  }
}

function dedupeBySymbol(items) {
  const seen = new Set()
  return items.filter(item => {
    if (!item?.symbol || seen.has(item.symbol)) return false
    seen.add(item.symbol)
    return true
  })
}

async function getFallbackCandidates(market, limit) {
  let baseAssets = []

  if (market === 'crypto') {
    try {
      baseAssets = await AlpacaClient.getAssets('active', 'crypto')
    }
    catch (_error) {
      baseAssets = [
        { symbol: 'BTC/USD', name: 'Bitcoin', class: 'crypto', exchange: 'CRYPTO' },
        { symbol: 'ETH/USD', name: 'Ethereum', class: 'crypto', exchange: 'CRYPTO' },
        { symbol: 'SOL/USD', name: 'Solana', class: 'crypto', exchange: 'CRYPTO' },
        { symbol: 'AVAX/USD', name: 'Avalanche', class: 'crypto', exchange: 'CRYPTO' }
      ]
    }
  }
  else {
    baseAssets = (state.allStocks || []).slice(0, 25)
    if (!baseAssets.length) {
      baseAssets = [
        { symbol: 'AAPL', name: 'Apple Inc.', class: 'us_equity', exchange: 'NASDAQ' },
        { symbol: 'MSFT', name: 'Microsoft Corp.', class: 'us_equity', exchange: 'NASDAQ' },
        { symbol: 'NVDA', name: 'NVIDIA Corp.', class: 'us_equity', exchange: 'NASDAQ' },
        { symbol: 'TSLA', name: 'Tesla Inc.', class: 'us_equity', exchange: 'NASDAQ' }
      ]
    }
  }

  const sliced = dedupeBySymbol(baseAssets).slice(0, limit)
  return sliced.map((asset, index) => ({
    symbol: asset.symbol,
    name: asset.name || asset.symbol,
    market,
    side: 'buy',
    score: Math.max(40 - (index * 2), 20),
    confidence: 'watch',
    price: 0,
    changePct: 0,
    volume: 0,
    exchange: asset.exchange || null,
    assetClass: asset.class || market,
    reasons: ['market screener data is thin right now', 'keep on radar for manual review'],
    thesis: 'No strong tape signal yet, but this stays on the prep list until live momentum arrives.'
  }))
}

export async function getTradeCandidates({ market = 'stocks', limit = DEFAULT_LIMIT, enrichTrends = true } = {}) {
  const normalizedMarket = String(market).toLowerCase() === 'crypto' ? 'crypto' : 'stocks'
  const finalLimit = clampLimit(limit)
  const marketStatus = normalizedMarket === 'crypto'
    ? { status: 'open', message: 'Crypto markets trade continuously.' }
    : await getMarketStatus()

  let candidates = []
  let usedFallback = false

  try {
    const movers = await getTopMovers(normalizedMarket, 'both', Math.max(finalLimit, 6))
    const moverData = movers?.data || {}
    const combined = dedupeBySymbol([...(moverData.gainers || []), ...(moverData.losers || [])])
    candidates = combined
      .map(candidate => scoreCandidate(candidate, normalizedMarket, marketStatus))
      .sort((a, b) => b.score - a.score)
      .slice(0, finalLimit)
  }
  catch (_error) {
    candidates = []
  }

  if (!candidates.length) {
    usedFallback = true
    candidates = await getFallbackCandidates(normalizedMarket, finalLimit)
  }

  if (normalizedMarket === 'stocks' && enrichTrends) {
    await enrichStockCandidatesStaged(candidates)
  }
  else if (normalizedMarket === 'stocks') {
    for (const c of candidates) applyCatalystEnrichment(c)
  }

  return {
    market: normalizedMarket,
    asOf: new Date().toISOString(),
    catalystTradingDay: normalizedMarket === 'stocks' ? formatTradingDayKey() : null,
    catalystDiagnostics: normalizedMarket === 'stocks'
      ? getDailyCatalystDiagnostics(new Date(), candidates.map(candidate => candidate.symbol))
      : null,
    marketStatus,
    usedFallback,
    candidates
  }
}
