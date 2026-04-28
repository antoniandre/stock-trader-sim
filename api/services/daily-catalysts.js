import fs from 'fs'
import path from 'path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CATALYSTS_DIR = path.resolve(__dirname, '../input/daily-catalysts')
const REPO_ROOT = path.resolve(__dirname, '../..')

/** When `CATALYST_AUTO_FETCH_ON_MISS=true`, missing today’s file triggers one background RSS fetch (deduped). */
const CATALYST_AUTO_FETCH_COOLDOWN_MS = 15 * 60 * 1000

let catalystAutoFetchChild = null
let catalystAutoFetchCooldownUntil = 0
let catalystAutoFetchLastError = null

function isCatalystAutoFetchOnMissEnabled() {
  return process.env.CATALYST_AUTO_FETCH_ON_MISS === 'true'
}

/**
 * Shared RSS worker state (manual refetch or auto-fetch-on-miss).
 * @returns {{ inProgress: boolean, cooldownUntilMs: number | null, lastError: string | null }}
 */
export function getCatalystRssWorkerStatus() {
  const now = Date.now()
  return {
    inProgress: catalystAutoFetchChild !== null,
    cooldownUntilMs: catalystAutoFetchCooldownUntil > now ? catalystAutoFetchCooldownUntil : null,
    lastError: catalystAutoFetchLastError
  }
}

/**
 * For API clients when auto-fetch is enabled: background job state (not null only if env is on).
 * @returns {{ enabled: true, inProgress: boolean, cooldownUntilMs: number | null, lastError: string | null } | null}
 */
export function getCatalystAutoFetchStatus() {
  if (!isCatalystAutoFetchOnMissEnabled()) return null
  return { enabled: true, ...getCatalystRssWorkerStatus() }
}

/**
 * @param {string} tradingDayKey — YYYY-MM-DD (America/New_York session)
 * @param {{ bypassCooldown?: boolean }} [options]
 * @returns {{ started: true, tradingDayKey: string } | { started: false, reason: string, cooldownUntilMs?: number }}
 */
function tryStartCatalystRssFetch(tradingDayKey, { bypassCooldown = false } = {}) {
  if (!tradingDayKey) return { started: false, reason: 'bad_date' }
  if (catalystAutoFetchChild) return { started: false, reason: 'in_progress' }
  const now = Date.now()
  if (!bypassCooldown && now < catalystAutoFetchCooldownUntil) {
    return { started: false, reason: 'cooldown', cooldownUntilMs: catalystAutoFetchCooldownUntil }
  }

  const scriptPath = path.join(REPO_ROOT, 'scripts/fetch-daily-catalysts.mjs')
  const args = ['--provider', 'rss', '--date', tradingDayKey, '--merge-existing']

  try {
    catalystAutoFetchChild = spawn(process.execPath, [scriptPath, ...args], {
      cwd: REPO_ROOT,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe']
    })
  }
  catch (err) {
    catalystAutoFetchLastError = err?.message || String(err)
    catalystAutoFetchCooldownUntil = now + CATALYST_AUTO_FETCH_COOLDOWN_MS
    catalystAutoFetchChild = null
    return { started: false, reason: 'spawn_failed', message: catalystAutoFetchLastError }
  }

  let stderrBuf = ''
  catalystAutoFetchChild.stderr?.setEncoding('utf8')
  catalystAutoFetchChild.stderr?.on('data', chunk => {
    stderrBuf += chunk
    if (stderrBuf.length > 4000) stderrBuf = stderrBuf.slice(-4000)
  })

  catalystAutoFetchChild.on('error', err => {
    catalystAutoFetchLastError = err?.message || String(err)
    catalystAutoFetchCooldownUntil = Date.now() + CATALYST_AUTO_FETCH_COOLDOWN_MS
    catalystAutoFetchChild = null
    resetDailyCatalystCache()
  })

  catalystAutoFetchChild.on('close', (code, signal) => {
    catalystAutoFetchChild = null
    resetDailyCatalystCache()
    if (code !== 0) {
      const tail = stderrBuf.trim().slice(-500)
      catalystAutoFetchLastError = tail || `catalyst fetch exited ${code ?? 'null'}${signal ? ` (${signal})` : ''}`
      catalystAutoFetchCooldownUntil = Date.now() + CATALYST_AUTO_FETCH_COOLDOWN_MS
    }
    else {
      catalystAutoFetchLastError = null
    }
  })

  return { started: true, tradingDayKey }
}

/**
 * If today’s catalyst JSON is missing and `CATALYST_AUTO_FETCH_ON_MISS=true`, starts at most one
 * background `scripts/fetch-daily-catalysts.mjs --provider rss` for the NY session date (with cooldown on failure).
 * @param {Date} [asOfDate]
 */
export function touchDailyCatalystAutoFetchIfMissing(asOfDate = new Date()) {
  if (!isCatalystAutoFetchOnMissEnabled()) return
  const freshness = getDailyCatalystFreshness(asOfDate)
  if (freshness.fileExists) return
  tryStartCatalystRssFetch(freshness.tradingDayKey, { bypassCooldown: false })
}

/**
 * Manual desk action: start RSS catalyst fetch for the NY session day (merge-existing). Bypasses failure cooldown.
 * @param {Date} [asOfDate]
 */
export function triggerDailyCatalystRssRefetch(asOfDate = new Date()) {
  const tradingDayKey = formatTradingDayKey(asOfDate)
  return tryStartCatalystRssFetch(tradingDayKey, { bypassCooldown: true })
}

/** Catalyst file older than this (mtime) is treated as stale for scoring / union. */
export const DAILY_CATALYST_STALE_AFTER_MINUTES = 120

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
 * @param {Date} [asOfDate] — calendar instant; trading day is derived in America/New_York.
 * @returns {{
 *   tradingDayKey: string,
 *   filePath: string,
 *   fileExists: boolean,
 *   fileMtimeMs: number | null,
 *   ageMinutes: number | null,
 *   isStale: boolean,
 *   staleAfterMinutes: number
 * }}
 */
export function getDailyCatalystFreshness(asOfDate = new Date()) {
  const tradingDayKey = formatTradingDayKey(asOfDate)
  const filePath = path.join(CATALYSTS_DIR, `${tradingDayKey}.json`)
  const fileExists = fs.existsSync(filePath)
  let fileMtimeMs = null
  let ageMinutes = null
  if (fileExists) {
    try {
      fileMtimeMs = fs.statSync(filePath).mtimeMs
      ageMinutes = (Date.now() - fileMtimeMs) / 60_000
    }
    catch {
      fileMtimeMs = null
      ageMinutes = null
    }
  }
  const isStale = !fileExists || ageMinutes == null || ageMinutes > DAILY_CATALYST_STALE_AFTER_MINUTES
  return {
    tradingDayKey,
    filePath,
    fileExists,
    fileMtimeMs,
    ageMinutes,
    isStale,
    staleAfterMinutes: DAILY_CATALYST_STALE_AFTER_MINUTES
  }
}

/**
 * Desk badge (🔥): catalyst present and not an obvious long no-go from the row alone.
 * @param {object | null | undefined} row — raw catalyst row from JSON
 */
export function isCatalystRowBadgeWorthy(row) {
  if (!row || typeof row !== 'object') return false
  const score = String(row.catalyst_score || '').toLowerCase()
  if (score.includes('weak') || /\blow\b/.test(score)) return false
  const pre = String(row.premarket_direction_and_gap || '')
  if (/gap-down/i.test(pre)) return false
  return true
}

/**
 * Eligible to union into screener candidates: fresh file, not weak/low, no gap-down headline.
 * @param {object | null | undefined} row
 * @param {ReturnType<typeof getDailyCatalystFreshness>} freshness
 */
export function isCatalystRowScreenerUnionEligible(row, freshness) {
  if (!row || typeof row !== 'object') return false
  if (!freshness?.fileExists || freshness.isStale) return false
  return isCatalystRowBadgeWorthy(row)
}

function finalizeDailyCatalystListPayload(core, autoFetch) {
  return {
    ...core,
    rssFetch: getCatalystRssWorkerStatus(),
    ...(autoFetch ? { autoFetch } : {})
  }
}

/**
 * Today’s catalyst rows with summary + UI / union flags (single file read).
 * @param {Date} [asOfDate]
 */
export function listDailyCatalystSummariesWithFlags(asOfDate = new Date()) {
  touchDailyCatalystAutoFetchIfMissing(asOfDate)
  const freshness = getDailyCatalystFreshness(asOfDate)
  const autoFetch = getCatalystAutoFetchStatus()
  const filePath = path.join(CATALYSTS_DIR, `${freshness.tradingDayKey}.json`)
  if (!freshness.fileExists) {
    return finalizeDailyCatalystListPayload({ freshness, catalysts: [] }, autoFetch)
  }
  let data
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    data = JSON.parse(raw)
  }
  catch {
    return finalizeDailyCatalystListPayload({ freshness, catalysts: [] }, autoFetch)
  }
  if (!Array.isArray(data)) {
    return finalizeDailyCatalystListPayload({ freshness, catalysts: [] }, autoFetch)
  }

  const catalysts = []
  for (const row of data) {
    const summary = summarizeCatalystRow(row)
    if (!summary) continue
    catalysts.push({
      ...summary,
      badgeEligible: isCatalystRowBadgeWorthy(row),
      unionEligible: isCatalystRowScreenerUnionEligible(row, freshness)
    })
  }
  return finalizeDailyCatalystListPayload({ freshness, catalysts }, autoFetch)
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
