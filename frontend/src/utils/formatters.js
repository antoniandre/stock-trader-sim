// Date and time formatting utilities.
export function formatNextOpen(nextOpenISO) {
  const nextOpen = new Date(nextOpenISO)
  const now = new Date()
  const diffMs = nextOpen - now
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffDays > 0) return `in ${diffDays} day${diffDays > 1 ? 's' : ''}`
  if (diffHours > 0) return `in ${diffHours} hour${diffHours > 1 ? 's' : ''}`
  return 'soon'
}

// Currency formatting utilities.
export function formatCurrency(amount, currency = 'USD', currencySymbol = '$', decimals = 2) {
  if (amount === null || amount === undefined) return `${currencySymbol}0.${'0'.repeat(decimals)}`
  const formatted = parseFloat(amount).toFixed(decimals)
  return `${currencySymbol}${formatted}`
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

export function formatPercentage(value, decimals = 2) {
  const num = parseFloat(value)
  return isNaN(num) ? '0.00' : num.toFixed(decimals)
}

export function formatNumber(value, decimals = 2) {
  const num = parseFloat(value)
  return isNaN(num) ? '0.00' : num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
}

// Price change formatting.
export function formatPriceChange(change, currencySymbol = '$', decimals = 2) {
  if (!change) return null
  const sign = change >= 0 ? '+' : ''
  return `${sign}${currencySymbol}${Math.abs(change).toFixed(decimals)}`
}

export function formatPriceChangePercent(changePercent, decimals = 2) {
  if (changePercent === null || changePercent === undefined) return null
  const sign = changePercent >= 0 ? '+' : ''
  return `${sign}${changePercent.toFixed(decimals)}%`
}
