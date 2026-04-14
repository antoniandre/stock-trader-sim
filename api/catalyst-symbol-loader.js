import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { formatTradingDayKey } from './services/daily-catalysts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CATALYSTS_DIR = path.join(__dirname, 'input/daily-catalysts')

/**
 * Load symbols from today's catalyst file.
 * @param {Date} [asOfDate] - Defaults to now; used for testing with past dates
 * @returns {string[]} Array of symbols from the catalyst file, uppercase, deduplicated
 */
export function loadCatalystSymbols(asOfDate = new Date()) {
  const tradingDayKey = formatTradingDayKey(asOfDate)
  const filePath = path.join(CATALYSTS_DIR, `${tradingDayKey}.json`)

  if (!fs.existsSync(filePath)) {
    return []
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(raw)
    const symbols = Array.isArray(data)
      ? data.map(row => String(row?.symbol || '').trim().toUpperCase()).filter(s => s)
      : []
    return [...new Set(symbols)] // Deduplicate
  } catch (err) {
    console.warn(`[catalyst-symbol-loader] Failed to load ${filePath}:`, err.message)
    return []
  }
}

/**
 * Merge catalyst symbols with a core watchlist, avoiding duplicates.
 * Catalysts are prioritized (come first in list for visual emphasis).
 * @param {string[]} coreSymbols - Base watchlist (e.g., ['AAPL', 'MSFT', ...])
 * @param {Date} [asOfDate] - Date to load catalysts for
 * @param {number} [maxSize] - Max symbols to return; defaults to no limit
 * @returns {string[]} Merged, deduplicated list
 */
export function mergeWatchlistWithCatalysts(coreSymbols = [], asOfDate = new Date(), maxSize = null) {
  const catalystSyms = loadCatalystSymbols(asOfDate)
  const coreLower = coreSymbols.map(s => String(s).toUpperCase())

  // Catalysts first (prioritized), then core symbols not in catalysts
  const seen = new Set()
  const merged = []

  // Add catalyst symbols first
  for (const sym of catalystSyms) {
    if (!seen.has(sym)) {
      merged.push(sym)
      seen.add(sym)
    }
  }

  // Add core symbols
  for (const sym of coreLower) {
    if (!seen.has(sym)) {
      merged.push(sym)
      seen.add(sym)
    }
  }

  return maxSize ? merged.slice(0, maxSize) : merged
}
