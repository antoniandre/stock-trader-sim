/**
 * Server-side symbol normalization (keep in sync with frontend `symbol-matching.js`).
 */

export function canonicalTradableSymbol(symbol) {
  const s = String(symbol || '').trim().toUpperCase()
  if (!s) return ''
  if (s.includes('/')) return s

  const suffixes = ['USDT', 'USDC', 'USD', 'EUR', 'GBP']
  for (const suf of suffixes) {
    if (s.endsWith(suf) && s.length > suf.length + 1) {
      const base = s.slice(0, -suf.length)
      if (/^[A-Z0-9.]+$/i.test(base) && base.length >= 2) return `${base}/${suf}`
    }
  }
  return s
}

export function tradableSymbolsEquivalent(a, b) {
  return canonicalTradableSymbol(a) === canonicalTradableSymbol(b)
}

/** True when symbol should use Alpaca crypto market-data stream (pair form). */
export function isCryptoStreamSymbol(symbol) {
  return String(symbol || '').includes('/')
}
