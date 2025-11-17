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
export function getCurrencySymbol(currency) {
  const currencyCode = currency || 'USD'
  return currencySymbols[currencyCode] || currencyCode
}

// Format currency - accepts amount, price object { value, currency, currencySymbol }, or (value, currency).
export function formatCurrency(amountOrPrice, currency = 'USD', decimals = 2, color = true) {
  // Handle price object format: { value, currency, currencySymbol }.
  if (typeof amountOrPrice === 'object' && amountOrPrice !== null && 'value' in amountOrPrice) {
    const priceValue = amountOrPrice.value || 0
    const priceCurrency = amountOrPrice.currency || currency || 'USD'
    return formatCurrency(priceValue, priceCurrency, decimals, color)
  }

  // Handle simple value with currency code.
  const value = typeof amountOrPrice === 'number' ? amountOrPrice : parseFloat(amountOrPrice) || 0
  const currencyCode = currency || 'USD'
  const symbolText = getCurrencySymbol(currencyCode)
  if (isNaN(value)) return `<strong class="lh0">${symbolText}0.00</strong>`

  const symbol = `<small class="op6">${symbolText}</small>`
  const formattedValue = value.toFixed(decimals)

  if (color) {
    const colorClass = value > 0 ? 'currency-positive' : (value ? 'currency-negative' : 'base')
    return `<strong class="lh0">${symbol}<span class="${colorClass}">${formattedValue}</span></strong>`
  }

  return `<strong class="lh0">${symbol}${formattedValue}</strong>`
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

export function formatPriceChange(change, currency = 'USD', decimals = 2) {
  const value = parseFloat(change)
  const symbol = getCurrencySymbol(currency)
  if (isNaN(value)) return `${symbol}0.00`
  const sign = value >= 0 ? '+' : ''
  return `${sign}${symbol}${value.toFixed(decimals)}`
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

// Format market cap with currency symbol and K/M/B suffixes.
export function formatMarketCap(marketCap, currency = 'USD') {
  if (!marketCap || marketCap === 0) return 'N/A'
  const value = typeof marketCap === 'number' ? marketCap : parseFloat(marketCap)
  if (isNaN(value)) return 'N/A'

  const symbol = getCurrencySymbol(currency)

  if (value >= 1000000000) return `${symbol}${(value / 1000000000).toFixed(1)}B`
  if (value >= 1000000) return `${symbol}${(value / 1000000).toFixed(1)}M`
  return `${symbol}${value.toLocaleString()}`
}

// Format volume with K/M/B suffixes.
export function formatVolumeWithSuffixes(volume) {
  if (!volume && volume !== 0) return '0'
  const value = typeof volume === 'number' ? volume : parseFloat(volume)
  if (isNaN(value)) return '0'

  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`
  return Math.round(value).toLocaleString()
}

// Format volume with commas (no K/M/B suffixes).
export function formatVolume(volume) {
  if (!volume && volume !== 0) return '0'
  if (typeof volume !== 'number') return volume
  // Format large numbers with commas.
  return volume.toLocaleString('en-US', { maximumFractionDigits: 0 })
}
