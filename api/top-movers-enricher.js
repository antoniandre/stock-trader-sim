import { getTopMovers } from './market-data.js'

/**
 * Optionally enrich watchlist with top movers from Alpaca.
 * Call this at screener startup if you want to auto-add the day's biggest movers.
 *
 * @param {string[]} baseSymbols - Existing watchlist
 * @param {number} [topMoversCount] - How many top movers to add (default: 10)
 * @param {number} [maxTotal] - Max final size of watchlist (default: 40)
 * @returns {Promise<string[]>} Merged watchlist with top movers
 */
export async function enrichWatchlistWithTopMovers(
  baseSymbols = [],
  topMoversCount = 10,
  maxTotal = 40
) {
  try {
    const movers = await getTopMovers(topMoversCount * 2) // Over-fetch to account for filtering
    const moverSymbols = movers
      .slice(0, topMoversCount)
      .map(m => String(m?.symbol || '').trim().toUpperCase())
      .filter(s => s && s.length > 0 && s.length <= 5) // Sanity check

    const seen = new Set(baseSymbols.map(s => String(s).toUpperCase()))
    const enriched = [...baseSymbols]

    for (const sym of moverSymbols) {
      if (!seen.has(sym) && enriched.length < maxTotal) {
        enriched.push(sym)
        seen.add(sym)
      }
    }

    return enriched
  } catch (err) {
    console.warn('[top-movers-enricher] Failed to fetch top movers, using base watchlist:', err.message)
    return baseSymbols
  }
}
