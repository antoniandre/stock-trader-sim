import { computed } from 'vue'

/**
 * Composable for determining stock status based on individual stock data and market conditions.
 *
 * @param {Ref} stock - Reactive stock object
 * @param {Ref} marketStatus - Reactive market status object (optional)
 * @returns {Object} Status information and computed properties
 */
export function useStockStatus(stock, marketStatus = null) {
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

    // Priority 2: Market status (if provided) - stock can't be traded regardless of stock status
    if (marketStatus && marketStatus.value) {
      if (marketStatus.value.status === 'closed') {
        return { status: 'closed', message: marketStatus.value.message || 'Market Closed' }
      }
      if (marketStatus.value.status === 'premarket') {
        return { status: 'premarket', message: 'Pre-market' }
      }
      if (marketStatus.value.status === 'afterhours') {
        return { status: 'afterhours', message: 'After-hours' }
      }
      if (marketStatus.value.status === 'overnight') {
        return { status: 'overnight', message: 'Overnight' }
      }
    }

    // Priority 3: Market open + stock active - normal trading
    if ((!marketStatus || marketStatus.value.status === 'open') &&
        (!stock.value.status || stock.value.status.toLowerCase() === 'active') &&
        (stock.value.tradable !== false)) {
      return { status: 'open', message: 'Open' }
    }

    // Default fallback
    return { status: 'closed', message: marketStatus?.value?.message || 'Status unavailable' }
  })

  return {
    currentStatus
  }
}
