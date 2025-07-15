import { ref, computed } from 'vue'
import { fetchMarketStatus } from '@/api'

export function useMarketStatus() {
  const marketStatus = ref({
    status: 'closed',
    message: 'Loading...',
    isWeekend: false
  })

  const marketStatusClass = computed(() => {
    switch (marketStatus.value.status) {
      case 'open':
        return 'success'
      case 'premarket':
      case 'afterhours':
      case 'overnight':
        return 'warning'
      case 'closed':
      default:
        return 'error'
    }
  })

  const marketStatusIcon = computed(() => {
    switch (marketStatus.value.status) {
      case 'open':
        return 'success--bg'
      case 'premarket':
      case 'afterhours':
      case 'overnight':
        return 'warning--bg'
      case 'closed':
      default:
        return 'error--bg'
    }
  })

  async function fetchMarketStatusData() {
    try {
      const status = await fetchMarketStatus()
      marketStatus.value = status
    } catch (error) {
      console.error('Error fetching market status:', error)
      marketStatus.value = {
        status: 'closed',
        message: 'Unable to determine market status',
        isWeekend: false
      }
    }
  }

  function updateMarketStatus(newStatus) {
    marketStatus.value = newStatus
  }

  return {
    marketStatus,
    marketStatusClass,
    marketStatusIcon,
    fetchMarketStatusData,
    updateMarketStatus
  }
}
