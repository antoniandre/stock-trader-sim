import { getCachedWatchlist, preloadWatchlist } from './catalyst-watchlist-loader.js'

/**
 * Hard-coded core watchlist — always included regardless of catalyst data.
 * Expanded from 5 to 50+ to maximize coverage of momentum candidates.
 */
const CORE_WATCHLIST = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'META', 'NFLX', 'ORCL', 'INTC',
  'AMD', 'QCOM', 'MSTR', 'MRVL', 'CRM', 'ADBE', 'SNPS', 'CDNS', 'PSTG', 'CRWD',
  'NET', 'SQ', 'ROKU', 'ZS', 'MDB', 'DDOG', 'ESTC', 'SPLK', 'OKTA', 'UPST',
  'COIN', 'SOFI', 'PLTR', 'RBLX', 'HOOD', 'CFLT', 'SMCI', 'SUPER', 'GLDRUSH', 'AVGO',
  'LOGI', 'PINS', 'SNAP', 'TTD', 'U', 'ABNB', 'DASH', 'UBER', 'LYFT', 'CPRT'
]

/**
 * Maximum symbols to watch at once.
 * Alpaca supports 100+ per stream; we cap at 50 for breadth + efficiency.
 */
const MAX_WATCH_SIZE = 50

/**
 * Get the cached watchlist (pre-loaded at startup or refreshed at market open).
 * This is synchronous and <5ms since data is in-memory.
 * @returns {string[]} Array of 30–50 watchlist symbols
 */
export function getWatchlist() {
  return getCachedWatchlist(CORE_WATCHLIST, MAX_WATCH_SIZE)
}

/**
 * Preload watchlist at module init. Called by screener.js on startup.
 * Should run <50ms total: file I/O + merge + cache.
 */
export async function initWatchlist() {
  await preloadWatchlist(CORE_WATCHLIST, MAX_WATCH_SIZE)
}

/**
 * Legacy export kept for compatibility. Do not import this for runtime subscriptions,
 * because it freezes the watchlist at module load time.
 */
export const SCREENER_WATCH_SYMBOLS = Object.freeze([...getWatchlist()])
