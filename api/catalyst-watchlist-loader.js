import { loadCatalystSymbols, mergeWatchlistWithCatalysts } from './catalyst-symbol-loader.js'

/**
 * In-memory cache for the watchlist.
 * Populated once at startup and refreshed only at market open.
 * @type {{ symbols: string[] | null, loadedAt: number | null }}
 */
let watchlistCache = { symbols: null, loadedAt: null }

/**
 * Preload watchlist from disk (catalyst file) and merge with core symbols.
 * Should be called once at startup; run time ~<50ms.
 * @param {string[]} coreSymbols - Core watchlist
 * @param {number} maxSize - Max symbols to keep
 * @returns {Promise<string[]>} Merged watchlist
 */
export async function preloadWatchlist(coreSymbols, maxSize) {
  // Load file synchronously (file I/O is fast for small JSON)
  const merged = mergeWatchlistWithCatalysts(coreSymbols, new Date(), maxSize)
  watchlistCache = {
    symbols: merged,
    loadedAt: Date.now()
  }
  console.log(`[catalyst-watchlist-loader] Preloaded ${merged.length} symbols in ${Date.now() - watchlistCache.loadedAt}ms`)
  return merged
}

/**
 * Get cached watchlist synchronously. Must be called after preloadWatchlist().
 * Time: <1ms (array reference only).
 * @param {string[]} coreSymbols - Fallback if cache is empty
 * @param {number} maxSize - Fallback max size
 * @returns {string[]} Cached watchlist or fallback
 */
export function getCachedWatchlist(coreSymbols, maxSize) {
  // If cache is populated, return it immediately
  if (watchlistCache.symbols && watchlistCache.symbols.length > 0) {
    return watchlistCache.symbols
  }

  // Fallback: merge core + today's catalysts (synchronous, <50ms)
  // This only runs if preloadWatchlist() hasn't been called yet.
  const merged = mergeWatchlistWithCatalysts(coreSymbols, new Date(), maxSize)
  watchlistCache = {
    symbols: merged,
    loadedAt: Date.now()
  }
  return merged
}

/**
 * Optional: refresh watchlist at market open.
 * Call this once per trading day if you want fresh catalyst picks.
 * @param {string[]} coreSymbols
 * @param {number} maxSize
 */
export function refreshWatchlist(coreSymbols, maxSize) {
  const merged = mergeWatchlistWithCatalysts(coreSymbols, new Date(), maxSize)
  watchlistCache = {
    symbols: merged,
    loadedAt: Date.now()
  }
  console.log(`[catalyst-watchlist-loader] Refreshed watchlist with ${merged.length} symbols`)
  return merged
}
