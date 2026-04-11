/**
 * Normalize symbols for comparison (Alpaca crypto orders use pairs like BTC/USD;
 * positions and some order rows may use legacy BTCUSD / HYPEUSD).
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

/** Bracket / OCO protective leg: stays open after entry fills; omit from "open orders" list. */
export function isBracketStopChildOrder(order) {
  const pid = order?.parent_order_id
  if (pid == null || pid === '') return false
  const t = String(order?.type || '').toLowerCase()
  return t === 'stop' || t === 'stop_limit'
}
