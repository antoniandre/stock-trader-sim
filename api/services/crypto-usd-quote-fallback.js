import * as AlpacaClient from '../clients/alpaca-client.js'
import { IS_SIMULATION, state, getTradingEnvironmentLabel } from '../config.js'
import { isCryptoPairSymbol } from '../domain/order-intent.js'

const CACHE_MS = 120_000

export function parseCryptoPair(symbol) {
  const s = String(symbol || '').trim()
  const i = s.indexOf('/')
  if (i <= 0) return null
  const base = s.slice(0, i).toUpperCase()
  const quote = s.slice(i + 1).toUpperCase()
  if (!base || !quote) return null
  return { base, quote }
}

/**
 * `paper` (default): only when connected to Alpaca paper API.
 * `always`: also on live (use with care — user asked for a specific quote book).
 * `off`: never rewrite symbol.
 */
function fallbackMode() {
  const v = String(process.env.CRYPTO_USD_QUOTE_FALLBACK || 'paper').toLowerCase()
  if (v === 'off' || v === 'false' || v === '0') return 'off'
  if (v === 'always' || v === 'true' || v === '1') return 'always'
  return 'paper'
}

export function shouldApplyCryptoUsdBuyFallback() {
  if (IS_SIMULATION) return false
  const mode = fallbackMode()
  if (mode === 'off') return false
  if (mode === 'always') return true
  return getTradingEnvironmentLabel() === 'paper'
}

export async function getActiveCryptoAssetsCached() {
  const now = Date.now()
  const c = state.cryptoActiveAssetsCache
  if (c?.list?.length && (now - c.fetchedAt) < CACHE_MS) return c.list

  const list = await AlpacaClient.getAssets('active', 'crypto')
  state.cryptoActiveAssetsCache = { list, fetchedAt: now }
  return list
}

/**
 * Crypto BUY: non-USD quotes (e.g. AAVE/USDC) spend wallet/stable balances on Alpaca.
 * When BASE/USD exists, routing the order to BASE/USD uses USD buying power (paper default).
 *
 * @returns {{ venueSymbol: string, requestedSymbol: string } | null}
 */
export async function resolveCryptoBuyVenueSymbol(requestedSymbol, side) {
  if (!shouldApplyCryptoUsdBuyFallback()) return null
  if (String(side || '').toLowerCase() !== 'buy') return null
  if (!isCryptoPairSymbol(requestedSymbol)) return null

  const parsed = parseCryptoPair(requestedSymbol)
  if (!parsed || parsed.quote === 'USD') return null

  const usdPair = `${parsed.base}/USD`
  const assets = await getActiveCryptoAssetsCached()
  const hit = assets.find((a) => a.symbol === usdPair && a.tradable !== false && String(a.status || '').toLowerCase() === 'active')
  if (!hit) return null

  return {
    venueSymbol: usdPair,
    requestedSymbol: String(requestedSymbol).toUpperCase()
  }
}
