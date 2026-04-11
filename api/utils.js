// Utilities.
// --------------------------------------------------------
export function getEasternTime() {
  // Return current time - Alpaca API handles timezone conversion internally.
  // We should send UTC timestamps and let Alpaca convert to Eastern Time for trading day calculations.
  return new Date()
}

export function getCurrentEasternTime() {
  // Get current time in Eastern Time zone for display/logging purposes.
  const now = new Date()
  return new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
}

export function formatDateForEasternTime(date) {
  // Format a date for Eastern Time display.
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

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function withRateLimitBackoff(fn, options = {}) {
  const {
    retries = 2,
    baseDelayMs = 500,
    maxDelayMs = 3000,
    label = 'request'
  } = options

  let attempt = 0
  let lastError = null

  while (attempt <= retries) {
    try {
      return await fn()
    }
    catch (error) {
      lastError = error
      const status = error?.response?.status
      if (status !== 429 || attempt === retries) throw error

      const retryAfterHeader = error?.response?.headers?.['retry-after']
      const retryAfterMs = retryAfterHeader
        ? Math.max(0, Number(retryAfterHeader) * 1000)
        : 0
      const exponentialDelay = Math.min(baseDelayMs * (2 ** attempt), maxDelayMs)
      const delayMs = Math.max(retryAfterMs, exponentialDelay)

      console.warn(`⏳ Rate limited for ${label}; retrying in ${delayMs}ms (attempt ${attempt + 1}/${retries})`)
      await sleep(delayMs)
      attempt += 1
    }
  }

  throw lastError
}

// Currency utility functions.
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
