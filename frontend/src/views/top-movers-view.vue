<template lang="pug">
.top-movers-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.justify-between.gap3.mb4
    .title1 {{ title }}
    span.op5.size--sm.mt1 Last Update: {{ lastUpdate }}
    //- Connection Status.
    .w-flex.align-center.gap2.mla.no-grow
      .w-icon.size--xs.success--bg(v-if="wsConnected")
      .w-icon.size--xs.yellow--bg(v-else)
      span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
        | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}

  //- Filter Controls
  .w-flex.align-center.gap4.mb4
    w-select(
      v-model="selectedCount"
      :items="countOptions"
      outline
      round
      label="Show top")
    w-select(
      v-model="selectedMarket"
      :items="marketOptions"
      outline
      round
      label="Market")
    w-button(
      @click="refreshData"
      :loading="loading"
      color="primary"
      outline
      round)
      icon.w-icon.mr2(icon="mdi:refresh")
      | Refresh

  //- Volume Filter
  volume-filter.mb4(
    v-model="volumeFilter"
    :stats="volumeStats"
    @filter-change="volumeFilter = $event")

  //- Loading State
  .w-flex.column.py12.align-center.justify-center(v-if="loading")
    w-progress(circle)
    p.op5.mt4 Loading {{ loadingText }}...

  //- Error State
  .error-message.w-flex.column.py12.align-center.justify-center(v-else-if="error")
    w-icon(color="error" size="4rem") wi-info-circle
    h2.title2.error.mt4.mb2 Oops!
    p.mb4 {{ error }}
    w-button(@click="refreshData" text bg-color="error" round) Try again

  //- Content
  div(v-else)
    //- Summary Stats
    .glass-box.pa4.mb4(v-if="stocks.length > 0")
      .w-flex.align-center.justify-between.gap4.wrap
        .stat-item
          .title3(:class="isPositive ? 'currency-positive' : 'currency-negative'") {{ stocks.length }}
          .size--sm.op6 Total {{ isPositive ? 'Gainers' : 'Losers' }}
        .stat-item(v-if="topStock")
          .title3(:class="isPositive ? 'currency-positive' : 'currency-negative'")
            | {{ isPositive ? '+' : '' }}{{ topStock.pct?.toFixed(2) || 'N/A' }}%
          .size--sm.op6 {{ isPositive ? 'Top Performer' : 'Biggest Drop' }}: {{ topStock.symbol }}
        .stat-item
          .title3 {{ averageChange?.toFixed(2) || 'N/A' }}%
          .size--sm.op6 Average {{ isPositive ? 'Gain' : 'Loss' }}

    //- Stocks Grid
    w-grid.gap4(:columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }")
      ticker-card(
        v-for="stock in filteredStocks"
        :key="stock.symbol"
        :stock="stock"
        show-percentage-change
        @click="$router.push(`/trading/${stock.symbol}`)")

    //- Empty State
    .w-flex.column.py12.align-center.justify-center(v-if="!loading && filteredStocks.length === 0")
      w-icon(color="info" size="4rem" :icon="emptyStateIcon")
      h2.title2.info.mt4.mb2 {{ emptyStateTitle }}
      p.mb4 {{ emptyStateMessage }}
      w-button(@click="refreshData" color="info" round) Refresh Data
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { fetchTopMovers, fetchBatchTrends } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import TickerCard from '@/components/ticker-card.vue'
import VolumeFilter, { filterStocksByVolume, calculateVolumeStats } from '@/components/volume-filter.vue'

// Props
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['gainers', 'losers'].includes(value)
  }
})

// Computed properties based on type
const isPositive = computed(() => props.type === 'gainers')
const title = computed(() => `Top ${props.type === 'gainers' ? 'Gainers' : 'Losers'}`)
const loadingText = computed(() => `top ${props.type}`)
const emptyStateIcon = computed(() => isPositive.value ? 'wi-trending-up' : 'wi-trending-down')
const emptyStateTitle = computed(() => `No ${props.type === 'gainers' ? 'Gainers' : 'Losers'} Found`)
const emptyStateMessage = computed(() =>
  `No stocks are showing ${isPositive.value ? 'gains' : 'losses'} at the moment.`
)

// State
const stocks = ref([])
const loading = ref(true)
const error = ref(null)
const lastUpdate = ref('Never')
const selectedCount = ref(20)
const selectedMarket = ref('all')
const volumeFilter = ref('all')

// WebSocket
const { connected: wsConnected } = useWebSocket()

// Options
const countOptions = [
  { label: 'Top 10', value: 10 },
  { label: 'Top 20', value: 20 },
  { label: 'Top 50', value: 50 },
  { label: 'Top 100', value: 100 }
]

const marketOptions = [
  { label: 'All Markets', value: 'all' },
  { label: 'NYSE', value: 'NYSE' },
  { label: 'NASDAQ', value: 'NASDAQ' },
  { label: 'AMEX', value: 'AMEX' }
]

// Computed
const filteredStocks = computed(() => {
  return filterStocksByVolume(stocks.value, volumeFilter.value)
})

const volumeStats = computed(() => {
  return calculateVolumeStats(stocks.value)
})

const topStock = computed(() => {
  if (stocks.value.length === 0) return null
  return stocks.value.reduce((top, stock) => {
    if (!top || !top.pct) return stock
    if (!stock.pct) return top
    return isPositive.value
      ? (stock.pct > top.pct ? stock : top)
      : (stock.pct < top.pct ? stock : top)
  }, null)
})

const averageChange = computed(() => {
  if (stocks.value.length === 0) return null
  const validChanges = stocks.value
    .map(stock => stock.pct)
    .filter(pct => pct != null && !isNaN(pct))

  if (validChanges.length === 0) return null
  return validChanges.reduce((sum, pct) => sum + pct, 0) / validChanges.length
})

// Methods
async function loadMovers() {
  try {
    loading.value = true
    error.value = null

    const response = await fetchTopMovers(selectedCount.value, selectedMarket.value)

    if (response.success) {
      // Filter based on type (gainers or losers)
      const allMovers = response.data || []
      stocks.value = allMovers.filter(stock => {
        if (!stock.pct || isNaN(stock.pct)) return false
        return isPositive.value ? stock.pct > 0 : stock.pct < 0
      })

      // Load trend data for all stocks in batch
      if (stocks.value.length > 0) {
        const symbols = stocks.value.map(stock => stock.symbol)
        const trendsResponse = await fetchBatchTrends(symbols, 20)

        if (trendsResponse.success) {
          // Attach trend data and volume analysis to each stock
          stocks.value.forEach(stock => {
            const trendData = trendsResponse.data[stock.symbol]
            if (trendData) {
              stock.trendData = trendData.data
              stock.trendFallback = trendData.fallback
              stock.volumeAnalysis = trendData.volumeAnalysis
            }
          })
        }
      }

      lastUpdate.value = new Date().toLocaleTimeString()
    } else {
      error.value = response.error || 'Failed to fetch data'
    }
  } catch (err) {
    console.error(`Error loading ${props.type}:`, err)
    error.value = `Failed to load ${props.type}: ${err.message}`
  } finally {
    loading.value = false
  }
}

async function refreshData() {
  await loadMovers()
}

// Lifecycle
onMounted(() => {
  loadMovers()
})

// Watchers
watch([selectedCount, selectedMarket], () => {
  loadMovers()
})
</script>

<style lang="scss" scoped>
.top-movers-view {
  padding: var(--w-spacing);
  max-width: 1400px;
  margin: 0 auto;
}

.glass-box {
  background: var(--w-base-bg-color);
  border-radius: var(--w-border-radius);
  box-shadow: var(--w-shadow);
}

.stat-item {
  text-align: center;
  min-width: 120px;
}

.currency-positive {
  color: var(--w-success-color);
}

.currency-negative {
  color: var(--w-error-color);
}
</style>
