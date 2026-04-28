import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CATALYSTS_DIR = path.resolve(__dirname, '../input/daily-catalysts')

/** In-memory index for the current NY trading day (invalidated on day or file change). */
let cache = { tradingDayKey: null, bySymbol: null, fileMtimeMs: null }

/**
 * Format a trading day key as YYYY-MM-DD based on the market timezone (America/New_York).
 * This ensures we use the market date, not the server date, by using UTC date components
 * which represent the market date when converted to NY timezone.
 * @param {Date} date
 * @returns {string} YYYY-MM-DD
 */
export function formatTradingDayKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date)

  const year = parts.find(part => part.type === 'year')?.value
  const month = parts.find(part => part.type === 'month')?.value
  const day = parts.find(part => part.type === 'day')?.value

  if (!year || !month || !day) return ''
  return `${year}-${month}-${day}`
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

function getCatalystFileMtimeMs(tradingDayKey) {
  const filePath = path.join(CATALYSTS_DIR, `${tradingDayKey}.json`)
  try {
    return fs.statSync(filePath).mtimeMs
  }
  catch {
    return null
  }
}

export function resetDailyCatalystCache() {
  cache = { tradingDayKey: null, bySymbol: null, fileMtimeMs: null }
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
  const fileMtimeMs = getCatalystFileMtimeMs(tradingDayKey)
  if (cache.tradingDayKey !== tradingDayKey || !cache.bySymbol || cache.fileMtimeMs !== fileMtimeMs) {
    cache = {
      tradingDayKey,
      bySymbol: loadCatalystsForTradingDay(tradingDayKey),
      fileMtimeMs
    }
  }
  return cache.bySymbol.get(sym) || null
}

export function getDailyCatalystDiagnostics(asOfDate = new Date(), symbols = []) {
  const tradingDayKey = formatTradingDayKey(asOfDate)
  const filePath = path.join(CATALYSTS_DIR, `${tradingDayKey}.json`)
  const fileExists = fs.existsSync(filePath)
  const requestedSymbols = [...new Set((Array.isArray(symbols) ? symbols : [])
    .map(symbol => String(symbol || '').trim().toUpperCase())
    .filter(Boolean))]

  let rowCount = 0
  let symbolsInFile = []
  let parseError = null

  if (fileExists) {
    try {
      const raw = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(raw)
      if (Array.isArray(data)) {
        rowCount = data.length
        symbolsInFile = [...buildCatalystIndex(data).keys()]
      }
    }
    catch (error) {
      parseError = error.message || 'Unable to parse catalyst file'
    }
  }

  const symbolSet = new Set(symbolsInFile)
  const matchedSymbols = requestedSymbols.filter(symbol => symbolSet.has(symbol))
  const unmatchedSymbols = requestedSymbols.filter(symbol => !symbolSet.has(symbol))

  return {
    tradingDayKey,
    filePath,
    fileExists,
    rowCount,
    symbolsInFile,
    requestedSymbols,
    matchedSymbols,
    unmatchedSymbols,
    matchedCount: matchedSymbols.length,
    parseError
  }
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
