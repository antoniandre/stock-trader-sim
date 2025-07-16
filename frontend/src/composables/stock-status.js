import { computed } from 'vue'

/**
 * Get market status for a specific exchange.
 * Currently US-centric but structured to support multiple exchanges in the future.
 *
 * @param {string} exchange - The exchange (NYSE, NASDAQ, etc.)
 * @returns {Object} Market status object
 */
function getExchangeMarketStatus(exchange) {
  // Get current time in Eastern Time (US markets)
  const easternTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York"
  })
  const et = new Date(easternTime)

  const day = et.getDay() // 0 = Sunday, 6 = Saturday
  const hours = et.getHours()
  const minutes = et.getMinutes()
  const currentTimeMinutes = hours * 60 + minutes

  // Weekend check
  if (day === 0 || day === 6) {
    return {
      status: 'closed',
      message: 'Market closed - Weekend'
    }
  }

  // US market hours (all US exchanges use same hours)
  const usExchanges = ['NYSE', 'NASDAQ', 'AMEX', 'BATS', 'IEX']

  if (usExchanges.includes(exchange)) {
    // Market hours in minutes since midnight ET
    const preMarketStart = 4 * 60 // 4:00 AM ET
    const marketOpen = 9 * 60 + 30 // 9:30 AM ET
    const marketClose = 16 * 60 // 4:00 PM ET
    const afterHoursEnd = 20 * 60 // 8:00 PM ET

    if (currentTimeMinutes < preMarketStart) {
      return { status: 'overnight', message: 'Overnight' }
    }
    if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) {
      return { status: 'premarket', message: 'Pre-market' }
    }
    if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
      return { status: 'open', message: 'Market Open' }
    }
    if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) {
      return { status: 'afterhours', message: 'After-hours' }
    }
    return { status: 'overnight', message: 'Overnight' }
  }

  // For other exchanges, assume closed for now
  // This can be expanded to support international exchanges
  return {
    status: 'closed',
    message: 'Market status unavailable'
  }
}

/**
 * Composable for determining stock status based on individual stock data.
 * Determines market status internally from the stock's exchange information.
 *
 * @param {Ref} stock - Reactive stock object
 * @returns {Object} Status information and computed properties
 */
export function useStockStatus(stock) {
  // Determine the current trading status with priority hierarchy
  const currentStatus = computed(() => {
    if (!stock.value) return { status: 'unknown', message: 'Loading...' }

    // Priority 1: Stock status (inactive/not tradable) - highest priority
    if (stock.value.status && stock.value.status.toLowerCase() === 'inactive') {
      return { status: 'closed', message: 'Inactive Stock' }
    }
    if (stock.value.tradable === false) {
      return { status: 'closed', message: 'Not Tradable' }
    }

    // Priority 2: Market status based on exchange - stock can't be traded when market is closed
    const exchange = stock.value.exchange || 'Unknown'
    const marketStatus = getExchangeMarketStatus(exchange)

    if (marketStatus.status === 'closed') {
      return { status: 'closed', message: marketStatus.message }
    }
    if (marketStatus.status === 'premarket') {
      return { status: 'premarket', message: marketStatus.message }
    }
    if (marketStatus.status === 'afterhours') {
      return { status: 'afterhours', message: marketStatus.message }
    }
    if (marketStatus.status === 'overnight') {
      return { status: 'overnight', message: marketStatus.message }
    }

    // Priority 3: Market open + stock active - normal trading
    if (marketStatus.status === 'open' &&
        (!stock.value.status || stock.value.status.toLowerCase() === 'active') &&
        (stock.value.tradable !== false)) {
      return { status: 'open', message: 'Open' }
    }

    // Default fallback
    return { status: 'closed', message: 'Status unavailable' }
  })

  return {
    currentStatus
  }
}
