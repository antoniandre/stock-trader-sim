export function normalizeTradingMarket(market = 'stocks') {
  return market === 'crypto' ? 'crypto' : 'stocks'
}

export function tradingOverviewPath(market = 'stocks') {
  return `/trading/${normalizeTradingMarket(market)}`
}

export function tradingTickerPath(symbol, market = 'stocks') {
  const normalizedSymbol = encodeURIComponent(String(symbol || '').trim().toUpperCase())
  return `${tradingOverviewPath(market)}/${normalizedSymbol}`
}

export function tradingTopMoversPath(type, market = 'stocks') {
  const normalizedType = type === 'losers' ? 'top-losers' : 'top-gainers'
  return `${tradingOverviewPath(market)}/${normalizedType}`
}
