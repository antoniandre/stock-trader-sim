import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DATA_DIR = path.resolve(__dirname, '../data')
const PROFILE_STATS_PATH = path.join(DATA_DIR, 'symbol-profile-stats.json')
const VERSION = 1

let cache = null

function round(value, places = 2) {
  const factor = 10 ** places
  return Math.round((Number(value || 0) + Number.EPSILON) * factor) / factor
}

function sourceWeight(source) {
  const normalized = String(source || '').toLowerCase()
  if (normalized.includes('live')) return 2
  if (normalized.includes('paper')) return 1
  if (normalized.includes('backtest') || normalized.includes('simulation')) return 0.25
  return 0.5
}

function createEmptyStore() {
  return {
    version: VERSION,
    updatedAt: null,
    symbols: {}
  }
}

function loadStoreSync() {
  if (cache) return cache

  try {
    const raw = fs.readFileSync(PROFILE_STATS_PATH, 'utf8')
    cache = JSON.parse(raw)
  }
  catch {
    cache = createEmptyStore()
  }

  if (!cache.symbols || typeof cache.symbols !== 'object') cache.symbols = {}
  return cache
}

async function saveStore(store) {
  cache = store
  await fsp.mkdir(DATA_DIR, { recursive: true })
  await fsp.writeFile(PROFILE_STATS_PATH, `${JSON.stringify(store, null, 2)}\n`, 'utf8')
}

function emptyStats() {
  return {
    weightedTrades: 0,
    weightedWins: 0,
    weightedLosses: 0,
    weightedNetPnl: 0,
    weightedGrossProfit: 0,
    weightedGrossLoss: 0,
    rawTrades: 0,
    rawWins: 0,
    rawLosses: 0,
    lastUpdatedAt: null,
    sources: {}
  }
}

function getSymbolBucket(store, symbol) {
  const normalized = String(symbol || '').trim().toUpperCase()
  if (!normalized) return null

  store.symbols[normalized] ||= {
    symbol: normalized,
    totals: emptyStats(),
    setups: {}
  }

  return store.symbols[normalized]
}

function getSetupBucket(symbolBucket, setup) {
  const normalized = String(setup || 'unknown').trim() || 'unknown'
  symbolBucket.setups[normalized] ||= emptyStats()
  return symbolBucket.setups[normalized]
}

function mergeOutcome(stats, outcome, weight) {
  const tradeCount = Math.max(0, Number(outcome.tradeCount || 0))
  const winCount = Math.max(0, Number(outcome.winCount || 0))
  const lossCount = Math.max(0, Number(outcome.lossCount || 0))
  const realizedPnL = Number(outcome.realizedPnL || 0)
  const grossProfit = Math.max(0, Number(outcome.grossProfit || (realizedPnL > 0 ? realizedPnL : 0)))
  const grossLoss = Math.max(0, Number(outcome.grossLoss || (realizedPnL < 0 ? Math.abs(realizedPnL) : 0)))
  const source = String(outcome.source || 'unknown')

  stats.weightedTrades = round(stats.weightedTrades + tradeCount * weight, 4)
  stats.weightedWins = round(stats.weightedWins + winCount * weight, 4)
  stats.weightedLosses = round(stats.weightedLosses + lossCount * weight, 4)
  stats.weightedNetPnl = round(stats.weightedNetPnl + realizedPnL * weight, 4)
  stats.weightedGrossProfit = round(stats.weightedGrossProfit + grossProfit * weight, 4)
  stats.weightedGrossLoss = round(stats.weightedGrossLoss + grossLoss * weight, 4)
  stats.rawTrades += tradeCount
  stats.rawWins += winCount
  stats.rawLosses += lossCount
  stats.lastUpdatedAt = new Date().toISOString()
  stats.sources[source] = (stats.sources[source] || 0) + tradeCount
}

export async function recordSymbolProfileOutcome(outcome = {}) {
  const symbol = String(outcome.symbol || '').trim().toUpperCase()
  if (!symbol) return null

  const tradeCount = Number(outcome.tradeCount || 0)
  if (!Number.isFinite(tradeCount) || tradeCount <= 0) return null

  const store = loadStoreSync()
  const bucket = getSymbolBucket(store, symbol)
  if (!bucket) return null

  const weight = sourceWeight(outcome.source)
  const setup = String(outcome.setup || 'all')

  mergeOutcome(bucket.totals, outcome, weight)
  mergeOutcome(getSetupBucket(bucket, setup), outcome, weight)

  store.updatedAt = new Date().toISOString()
  await saveStore(store)

  return {
    path: PROFILE_STATS_PATH,
    symbol,
    setup,
    weightedTrades: bucket.totals.weightedTrades
  }
}

export function recordBacktestProfileOutcome({ symbol, riskProfile, backtest, source = 'backtest' } = {}) {
  const trades = Array.isArray(backtest?.trades) ? backtest.trades : []
  const closedTrades = trades.filter(trade => trade.side === 'trim' || trade.side === 'exit')
  const primarySetup = trades.find(trade => trade.side === 'buy' || trade.side === 'add')?.setup || 'all'
  return recordSymbolProfileOutcome({
    source,
    symbol,
    setup: primarySetup,
    riskProfile,
    tradeCount: closedTrades.length,
    winCount: Number(backtest?.winCount || 0),
    lossCount: Number(backtest?.lossCount || 0),
    realizedPnL: Number(backtest?.realizedPnL || 0),
    grossProfit: Number(backtest?.grossProfit || 0),
    grossLoss: Number(backtest?.grossLoss || 0)
  })
}

export function getLearnedSymbolStats(symbol, setup = null) {
  const store = loadStoreSync()
  const normalized = String(symbol || '').trim().toUpperCase()
  const bucket = store.symbols?.[normalized]
  if (!bucket) return null

  const setupStats = setup ? bucket.setups?.[String(setup)] : null
  return {
    symbol: normalized,
    totals: bucket.totals || emptyStats(),
    setup: setupStats || null,
    updatedAt: bucket.totals?.lastUpdatedAt || null
  }
}

export function summarizeLearnedStats(stats) {
  if (!stats || Number(stats.weightedTrades || 0) <= 0) {
    return {
      weightedTrades: 0,
      winRatePct: 0,
      expectancy: 0,
      profitFactor: 0
    }
  }

  const weightedTrades = Number(stats.weightedTrades || 0)
  const grossLoss = Number(stats.weightedGrossLoss || 0)
  const profitFactor = grossLoss > 0
    ? Number(stats.weightedGrossProfit || 0) / grossLoss
    : (Number(stats.weightedGrossProfit || 0) > 0 ? null : 0)

  return {
    weightedTrades: round(weightedTrades, 2),
    rawTrades: Number(stats.rawTrades || 0),
    winRatePct: round((Number(stats.weightedWins || 0) / weightedTrades) * 100),
    expectancy: round(Number(stats.weightedNetPnl || 0) / weightedTrades),
    profitFactor: profitFactor == null ? null : round(profitFactor)
  }
}
