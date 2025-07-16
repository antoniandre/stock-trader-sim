import { computed } from 'vue'

/**
 * Get next market open time for a specific exchange.
 *
 * @param {string} exchange - The exchange (NYSE, NASDAQ, etc.)
 * @param {Date} easternTime - Current Eastern Time
 * @returns {string} ISO string of next market open
 */
function getNextMarketOpen(exchange, easternTime) {
  // For US exchanges, market opens at 9:30 AM ET
  const usExchanges = ['NYSE', 'NASDAQ', 'AMEX', 'BATS', 'IEX']

  if (!usExchanges.includes(exchange)) {
    return null // Don't calculate for non-US exchanges yet
  }

  const nextOpen = new Date(easternTime)
  const currentHours = nextOpen.getHours()
  const currentMinutes = nextOpen.getMinutes()
  const currentTimeMinutes = currentHours * 60 + currentMinutes

  // If it's Friday after market close, next open is Monday
  if (nextOpen.getDay() === 5 && currentTimeMinutes >= 16 * 60) {
    nextOpen.setDate(nextOpen.getDate() + 3) // Add 3 days to get to Monday
  }
  // If it's Saturday, next open is Monday
  else if (nextOpen.getDay() === 6) {
    nextOpen.setDate(nextOpen.getDate() + 2) // Add 2 days to get to Monday
  }
  // If it's Sunday, next open is Monday
  else if (nextOpen.getDay() === 0) {
    nextOpen.setDate(nextOpen.getDate() + 1) // Add 1 day to get to Monday
  }
  // If it's after market close on a weekday, next open is next day
  else if (currentTimeMinutes >= 16 * 60) {
    nextOpen.setDate(nextOpen.getDate() + 1)
  }

  // Set to 9:30 AM ET
  nextOpen.setHours(9, 30, 0, 0)
  return nextOpen.toISOString()
}

/**
 * Get next market close time for a specific exchange.
 *
 * @param {string} exchange - The exchange (NYSE, NASDAQ, etc.)
 * @param {Date} easternTime - Current Eastern Time
 * @returns {string} ISO string of next market close
 */
function getNextMarketClose(exchange, easternTime) {
  // For US exchanges, market closes at 4:00 PM ET
  const usExchanges = ['NYSE', 'NASDAQ', 'AMEX', 'BATS', 'IEX']

  if (!usExchanges.includes(exchange)) {
    return null // Don't calculate for non-US exchanges yet
  }

  const nextClose = new Date(easternTime)
  // Set to 4:00 PM ET today
  nextClose.setHours(16, 0, 0, 0)
  return nextClose.toISOString()
}

/**
 * Format next open time for display.
 *
 * @param {string} nextOpenISO - ISO string of next open time
 * @returns {string} Formatted string for display
 */
function formatNextOpen(nextOpenISO) {
  if (!nextOpenISO) return ''

  const nextOpen = new Date(nextOpenISO)
  const now = new Date()

  // If it's today, show time
  if (nextOpen.toDateString() === now.toDateString()) {
    return `at ${nextOpen.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit'
    })} ET`
  }

  // If it's tomorrow, show "tomorrow at time"
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  if (nextOpen.toDateString() === tomorrow.toDateString()) {
    return `tomorrow at ${nextOpen.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit'
    })} ET`
  }

  // Otherwise show day and time
  return `on ${nextOpen.toLocaleDateString('en-US', {
    weekday: 'long',
    timeZone: 'America/New_York'
  })} at ${nextOpen.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit'
  })} ET`
}

/**
 * Get market status for a specific exchange.
 * Currently US-centric but structured to support multiple exchanges in the future.
 *
 * @param {string} exchange - The exchange (NYSE, NASDAQ, etc.)
 * @returns {Object} Market status object with timing information
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
      message: 'Market closed - Weekend',
      nextOpen: getNextMarketOpen(exchange, et),
      nextClose: null
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
      return {
        status: 'overnight',
        message: 'Overnight',
        nextOpen: getNextMarketOpen(exchange, et),
        nextClose: null
      }
    }
    if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) {
      return {
        status: 'premarket',
        message: 'Pre-market',
        nextOpen: getNextMarketOpen(exchange, et),
        nextClose: null
      }
    }
    if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
      return {
        status: 'open',
        message: 'Market Open',
        nextOpen: null,
        nextClose: getNextMarketClose(exchange, et)
      }
    }
    if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) {
      return {
        status: 'afterhours',
        message: 'After-hours',
        nextOpen: getNextMarketOpen(exchange, et),
        nextClose: null
      }
    }
    return {
      status: 'overnight',
      message: 'Overnight',
      nextOpen: getNextMarketOpen(exchange, et),
      nextClose: null
    }
  }

  // For other exchanges, assume closed for now
  // This can be expanded to support international exchanges
  return {
    status: 'closed',
    message: 'Market status unavailable',
    nextOpen: null,
    nextClose: null
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
    if (!stock.value) return {
      status: 'unknown',
      message: 'Loading...',
      nextOpen: null,
      nextClose: null
    }

    // Priority 1: Stock status (inactive/not tradable) - highest priority
    if (stock.value.status && stock.value.status.toLowerCase() === 'inactive') {
      return {
        status: 'closed',
        message: 'Inactive Stock',
        nextOpen: null,
        nextClose: null
      }
    }
    if (stock.value.tradable === false) {
      return {
        status: 'closed',
        message: 'Not Tradable',
        nextOpen: null,
        nextClose: null
      }
    }

    // Priority 2: Market status based on exchange - stock can't be traded when market is closed
    const exchange = stock.value.exchange || 'Unknown'
    const marketStatus = getExchangeMarketStatus(exchange)

    if (marketStatus.status === 'closed') {
      return {
        status: 'closed',
        message: marketStatus.message,
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose
      }
    }
    if (marketStatus.status === 'premarket') {
      return {
        status: 'premarket',
        message: marketStatus.message,
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose
      }
    }
    if (marketStatus.status === 'afterhours') {
      return {
        status: 'afterhours',
        message: marketStatus.message,
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose
      }
    }
    if (marketStatus.status === 'overnight') {
      return {
        status: 'overnight',
        message: marketStatus.message,
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose
      }
    }

    // Priority 3: Market open + stock active - normal trading
    if (marketStatus.status === 'open' &&
        (!stock.value.status || stock.value.status.toLowerCase() === 'active') &&
        (stock.value.tradable !== false)) {
      return {
        status: 'open',
        message: 'Open',
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose
      }
    }

    // Default fallback
    return {
      status: 'closed',
      message: 'Status unavailable',
      nextOpen: null,
      nextClose: null
    }
  })

  // Helper function for formatting next open time
  const formatNextOpenTime = computed(() => {
    if (!currentStatus.value.nextOpen) return ''
    return formatNextOpen(currentStatus.value.nextOpen)
  })

  return {
    currentStatus,
    formatNextOpenTime
  }
}
