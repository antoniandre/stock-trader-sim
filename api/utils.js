// Utilities
// --------------------------------------------------------
export function getEasternTime() {
  // Return current time - Alpaca API handles timezone conversion internally
  // We should send UTC timestamps and let Alpaca convert to Eastern Time for trading day calculations
  return new Date()
}

export function getCurrentEasternTime() {
  // Get current time in Eastern Time zone for display/logging purposes
  const now = new Date()
  return new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
}

export function formatDateForEasternTime(date) {
  // Format a date for Eastern Time display
  return date.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
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
