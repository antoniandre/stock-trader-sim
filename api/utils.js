// Utilities
// --------------------------------------------------------
export function getEasternTime() {
  const now = new Date()
  return new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))
}

export function formatErrorResponse(error, message) {
  console.error(`❌ ${message}:`, error.message)
  return { error: message }
}

export function createStandardResponse(data, timestamp = true) {
  const response = { ...data }
  if (timestamp) response.timestamp = new Date().toISOString()
  return response
}

export function handleTryCatch(fn, fallback = null) {
  return async (...args) => {
    try {
      return await fn(...args)
    }
    catch (error) {
      console.error('❌ Error in function:', error.message)
      return fallback
    }
  }
}

// Currency utility functions
// --------------------------------------------------------
export function getCurrencyInfo(asset) {
  // For crypto pairs, extract currency from symbol (e.g., BTC/USD -> USD).
  if (asset.class === 'crypto' && asset.symbol.includes('/')) {
    const [, quoteCurrency] = asset.symbol.split('/')
    return {
      currency: quoteCurrency,
      symbol: getCurrencySymbol(quoteCurrency)
    }
  }

  // For US equities, default to USD.
  if (asset.class === 'us_equity' || !asset.class) {
    return {
      currency: 'USD',
      symbol: '$'
    }
  }

  // Default fallback.
  return {
    currency: 'USD',
    symbol: '$'
  }
}

export function getCurrencySymbol(currency) {
  const currencySymbols = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'CAD': 'C$',
    'AUD': 'A$',
    'CHF': 'Fr',
    'CNY': '¥',
    'BTC': '₿',
    'ETH': 'Ξ',
    'USDT': '$',
    'USDC': '$'
  }

  return currencySymbols[currency] || currency
}

export function formatCurrency(amount, currency = 'USD', decimals = 2) {
  const symbol = getCurrencySymbol(currency)
  const formatted = parseFloat(amount).toFixed(decimals)
  return `${symbol}${formatted}`
}
