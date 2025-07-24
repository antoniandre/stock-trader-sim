import { computed } from 'vue'

// Stock Status Composable
// --------------------------------------------------------
export function useStockStatus(stock) {
  const statusIcons = {
    open: 'mdi:circle',
    premarket: 'mdi:circle-outline',
    afterhours: 'mdi:circle-half-full',
    overnight: 'mdi:moon-waning-crescent',
    closed: 'mdi:circle-off-outline'
  }

  const statusMessages = {
    open: 'Market Open',
    premarket: 'Pre-market',
    afterhours: 'After Hours',
    overnight: 'Overnight',
    closed: 'Market Closed',
    unknown: 'Loading...'
  }

  const currentStatus = computed(() => {
    const state = stock.value?.marketState || 'unknown'
    const message = stock.value?.marketMessage || statusMessages[state] || statusMessages.unknown
    const icon = statusIcons[state] || statusIcons.closed

    return { status: state, message, icon }
  })

  const formatNextOpenTime = computed(() => {
    if (!stock.value?.nextOpen) return null
    return formatNextOpen(stock.value.nextOpen)
  })

  return { currentStatus, formatNextOpenTime }
}

// Time Formatting Helper
// --------------------------------------------------------
function formatNextOpen(nextOpenISO) {
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
