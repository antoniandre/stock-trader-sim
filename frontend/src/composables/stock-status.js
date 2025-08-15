import { computed } from 'vue'

const marketIcons = {
  open: 'ic:round-lens',
  premarket: 'bi:sun-fill',
  afterhours: 'bi:sun-fill',
  overnight: 'clarity:moon-solid',
  closed: 'ic:round-lens'
}

/**
 * Format next open time for display.
 *
 * @param {string} nextOpenISO - ISO string of next open time.
 * @returns {string} Formatted string for display.
 */
function formatNextOpen(nextOpenISO) {
  if (!nextOpenISO) return ''

  const nextOpen = new Date(nextOpenISO)
  const now = new Date()

  // If it's today, show time.
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

  // Otherwise show day and time.
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
 * Composable for stock status display utilities.
 * Uses comprehensive stock data from backend that includes marketState.
 *
 * @param {Ref} stock - Reactive stock object with marketState, marketMessage, nextOpen, nextClose.
 * @returns {Object} Status information and computed properties
 */
export function useStockStatus(stock) {
  // Extract status information from the comprehensive stock data.
  const currentStatus = computed(() => {
    if (!stock.value) {
      return {
        status: 'unknown',
        message: 'Loading...',
        icon: '',
        nextOpen: null,
        nextClose: null
      }
    }

    // Handle cases where marketState is missing or invalid.
    let status = stock.value.marketState || 'unknown'
    let message = stock.value.marketMessage || 'Loading...'

    // If we have a valid stock but no market status, determine a reasonable default.
    if (status === 'unknown' || message === 'Loading...') {
      // If stock is inactive or not tradable, override status.
      if (stock.value.status === 'inactive' || stock.value.tradable === false) {
        status = 'closed'
        message = stock.value.status === 'inactive' ? 'Inactive Stock' : 'Not Tradable'
      }
      else {
        // Default to closed with a more informative message.
        status = 'closed'
        message = 'Market Status Unavailable'
      }
    }

    return {
      status,
      message,
      icon: marketIcons[status] || '',
      nextOpen: stock.value.nextOpen,
      nextClose: stock.value.nextClose
    }
  })

  // Helper function for formatting next open time.
  const formatNextOpenTime = computed(() => {
    if (!currentStatus.value.nextOpen) return ''
    return formatNextOpen(currentStatus.value.nextOpen)
  })

  // Helper for getting CSS classes for status.
  const statusClass = computed(() => {
    switch (currentStatus.value.status) {
      case 'open':
        return 'market-open'
      case 'premarket':
      case 'afterhours':
      case 'overnight':
        return 'market-premarket'
      case 'closed':
      default:
        return 'market-closed'
    }
  })

  return {
    currentStatus,
    formatNextOpenTime,
    statusClass
  }
}
