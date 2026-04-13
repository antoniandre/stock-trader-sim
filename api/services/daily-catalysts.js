import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CATALYSTS_DIR = path.resolve(__dirname, '../input/daily-catalysts')

/** @type {{ tradingDayKey: string | null, bySymbol: Map<string, object> | null }} */
let cache = { tradingDayKey: null, bySymbol: null }

export function formatTradingDayKey(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

export function buildCatalystIndex(entries) {
  const map = new Map()
  if (!Array.isArray(entries)) return map
  for (const row of entries) {
    const sym = String(row?.symbol || '').trim().toUpperCase()
    if (sym) map.set(sym, row)
  }
  return map
}

function loadCatalystsForTradingDay(tradingDayKey) {
  const filePath = path.join(CATALYSTS_DIR, `${tradingDayKey}.json`)
  if (!fs.existsSync(filePath)) {
    return new Map()
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(raw)
    return buildCatalystIndex(Array.isArray(data) ? data : [])
  }
  catch {
    return new Map()
  }
}

export function resetDailyCatalystCache() {
  cache = { tradingDayKey: null, bySymbol: null }
}

/**
 * @param {string} symbol
 * @param {Date} [asOfDate]
 * @returns {object | null}
 */
export function getDailyCatalystForSymbol(symbol, asOfDate = new Date()) {
  const sym = String(symbol || '').trim().toUpperCase()
  if (!sym) return null

  const tradingDayKey = formatTradingDayKey(asOfDate)
  if (cache.tradingDayKey !== tradingDayKey || !cache.bySymbol) {
    cache = {
      tradingDayKey,
      bySymbol: loadCatalystsForTradingDay(tradingDayKey)
    }
  }
  return cache.bySymbol.get(sym) || null
}

/**
 * @param {object | null | undefined} row
 * @returns {object | null}
 */
export function summarizeCatalystRow(row) {
  if (!row || typeof row !== 'object') return null
  return {
    symbol: String(row.symbol || '').toUpperCase(),
    catalyst: row.catalyst,
    catalyst_score: row.catalyst_score,
    priority: row.priority,
    confidence: row.confidence,
    premarket_direction_and_gap: row.premarket_direction_and_gap,
    premarket_volume: row.premarket_volume,
    key_levels: row.key_levels,
    setup_potential: row.setup_potential
  }
}
