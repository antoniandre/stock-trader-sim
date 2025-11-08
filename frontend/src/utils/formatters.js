// Time Formatting
// --------------------------------------------------------
export function formatNextOpen(nextOpenISO) {
  if (!nextOpenISO) return null

  try {
    const nextOpen = new Date(nextOpenISO)
    const now = new Date()
    const diffMs = nextOpen.getTime() - now.getTime()

    if (diffMs < 0) return 'now'

    const diffMinutes = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMinutes / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffDays > 0) {
      const dayName = nextOpen.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'America/New_York' })
      const time = nextOpen.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' })
      return `${dayName} at ${time} ET`
    }

    if (diffHours > 0) {
      const remainingMinutes = diffMinutes % 60
      if (remainingMinutes > 0) return `in ${diffHours}h ${remainingMinutes}m`
      return `in ${diffHours}h`
    }

    if (diffMinutes > 0) return `in ${diffMinutes}m`
    return 'soon'
  }
  catch (error) {
    console.warn('Error formatting next open time:', error)
    return null
  }
}

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


// Currency Formatting
// --------------------------------------------------------
export function formatCurrency(amount, currency = 'USD', decimals = 2) {
  const value = parseFloat(amount)
  if (isNaN(value)) return `${currencySymbols[currency]}0.00`
  return `<small class="op6">${currencySymbols[currency]}</small><span class="${value > 0 ? 'currency-positive' : (value ? 'currency-negative' : 'base')}">${value.toFixed(decimals)}</span>`
}

export function getCurrencySymbol(currency) {
  const symbols = { 'USD': '$', 'EUR': '€', 'GBP': '£', 'JPY': '¥', 'CAD': 'C$', 'AUD': 'A$', 'CHF': 'Fr', 'CNY': '¥', 'BTC': '₿', 'ETH': 'Ξ' }
  return symbols[currency] || currency
}

// Number Formatting
// --------------------------------------------------------
export function formatPercentage(value, decimals = 2) {
  const num = parseFloat(value)
  if (isNaN(num)) return '0.00%'
  return `${num.toFixed(decimals)}%`
}

export function formatNumber(value, decimals = 2) {
  const num = parseFloat(value)
  if (isNaN(num)) return '0.00'

  // Format large numbers with K, M, B suffixes.
  if (Math.abs(num) >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`
  if (Math.abs(num) >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (Math.abs(num) >= 1000) return `${(num / 1000).toFixed(1)}K`

  return num.toFixed(decimals)
}

export function formatPriceChange(change, currencySymbol = '$', decimals = 2) {
  const value = parseFloat(change)
  if (isNaN(value)) return `${currencySymbol}0.00`
  const sign = value >= 0 ? '+' : ''
  return `${sign}${currencySymbol}${value.toFixed(decimals)}`
}

export function formatPriceChangePercent(changePercent, decimals = 2) {
  const value = parseFloat(changePercent)
  if (isNaN(value)) return '0.00%'
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(decimals)}%`
}

// Format price to 2 decimal places (without currency symbol).
export function formatPrice(price, decimals = 2) {
  if (!price && price !== 0) return '0.00'
  return typeof price === 'number' ? price.toFixed(decimals) : price
}

// Format volume with commas (no K/M/B suffixes).
export function formatVolume(volume) {
  if (!volume && volume !== 0) return '0'
  if (typeof volume !== 'number') return volume
  // Format large numbers with commas.
  return volume.toLocaleString('en-US', { maximumFractionDigits: 0 })
}
