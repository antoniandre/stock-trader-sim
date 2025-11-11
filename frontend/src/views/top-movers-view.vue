<template lang="pug">
.top-movers-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.justify-between.gap3.mb4
    .title1 {{ title }}
    span.op5.size--sm.mt1 Last Update: {{ lastUpdate }}
    w-button(
      @click="refreshData"
      :loading="loading"
      color="primary"
      outline
      round)
      icon.w-icon.mr2(icon="mdi:refresh")
      | Refresh
    //- Connection Status.
    .w-flex.align-center.gap2.mla.no-grow
      .w-icon.size--xs.success--bg(v-if="wsConnected")
      .w-icon.size--xs.yellow--bg(v-else)
      span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
        | {{ wsConnected ? 'Live' : 'Polling fallback' }}

  //- Filter Controls
  .w-flex.align-center.gap4.mb4
    w-select(
      v-model="selectedCount"
      :items="countOptions"
      outline
      round
      label="Show top")

  //- Exchange filter tags.
  .w-flex.align-center.gap2.mb4.wrap(v-if="availableExchanges.length")
    span.size--sm.op6.no-shrink Filter by exchange:
    w-tag(
      v-for="exchange in availableExchanges"
      :key="exchange"
      :model-value="selectedExchanges[exchange]"
      @update:model-value="selectedExchanges[exchange] = $event"
      :bg-color="selectedExchanges[exchange] ? 'primary' : 'base'"
      round)
      | {{ exchange }}

  //- Volume filter.
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
const volumeFilter = ref('all')
const selectedExchanges = ref({}) // Object to track which exchanges are selected.

// WebSocket
const { wsConnected, connect } = useWebSocket()

// Options
const countOptions = [
  { label: 'Top 10', value: 10 },
  { label: 'Top 20', value: 20 },
  { label: 'Top 50', value: 50 },
  { label: 'Top 100', value: 100 }
]

// Computed.
// --------------------------------------------------------
// Get all unique exchanges from stocks.
const availableExchanges = computed(() => {
  const exchanges = new Set()
  stocks.value.forEach(stock => {
    if (stock.exchange) exchanges.add(stock.exchange)
  })
  return Array.from(exchanges).sort()
})

// Initialize selected exchanges when stocks change.
watch(availableExchanges, (exchanges) => {
  if (exchanges.length > 0 && Object.keys(selectedExchanges.value).length === 0) {
    // By default, select all exchanges.
    exchanges.forEach(exchange => {
      selectedExchanges.value[exchange] = true
    })
  }
}, { immediate: true })

// Filter stocks by selected exchanges and volume.
const filteredStocks = computed(() => {
  let result = stocks.value

  // Filter by selected exchanges.
  const activeExchanges = Object.keys(selectedExchanges.value).filter(
    exchange => selectedExchanges.value[exchange]
  )
  if (activeExchanges.length > 0) {
    result = result.filter(stock =>
      stock.exchange && activeExchanges.includes(stock.exchange)
    )
  }

  // Apply volume filter.
  return filterStocksByVolume(result, volumeFilter.value)
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

// Methods.
// --------------------------------------------------------
async function loadMovers() {
  try {
    console.log(`🔄 Loading ${props.type} with count: ${selectedCount.value}`)
    loading.value = true
    error.value = null

    console.log('📡 Making API call to fetchTopMovers...')
    const response = await fetchTopMovers(selectedCount.value, 'stocks')
    console.log('✅ API response received:', response)

    // The API returns { gainers: [...], losers: [...], timestamp: "..." }
    // No success field, just the data directly
    if (response && (response.gainers || response.losers)) {
      // Filter based on type (gainers or losers)
      const allMovers = [...(response.gainers || []), ...(response.losers || [])]
      console.log(`📊 Found ${allMovers.length} total movers`)

      const filteredStocks = allMovers.filter(stock => {
        if (!stock.pct || isNaN(stock.pct)) return false
        return isPositive.value ? stock.pct > 0 : stock.pct < 0
      })

      console.log(`📈 Filtered to ${filteredStocks.length} ${props.type}`)

      // Load trend data for all stocks in batch BEFORE setting stocks.value
      if (filteredStocks.length > 0) {
        console.log('📡 Loading batch trends...')
        const symbols = filteredStocks.map(stock => stock.symbol)
        const trendsResponse = await fetchBatchTrends(symbols, 20)

        // Batch trends API returns { symbol: {...}, timestamp: "..." } directly
        console.log('🔍 Batch trends response structure:', {
          hasResponse: !!trendsResponse,
          responseKeys: trendsResponse ? Object.keys(trendsResponse) : [],
          hasSymbols: trendsResponse ? Object.keys(trendsResponse).filter(key => key !== 'timestamp').length > 0 : false
        })

        if (trendsResponse && Object.keys(trendsResponse).filter(key => key !== 'timestamp').length > 0) {
          console.log('✅ Batch trends loaded successfully')
          console.log('📊 Batch trends response keys:', Object.keys(trendsResponse).filter(key => key !== 'timestamp'))

          // Attach trend data and volume analysis to each stock BEFORE setting stocks.value
          filteredStocks.forEach(stock => {
            const trendData = trendsResponse[stock.symbol]
            if (trendData) {
              stock.trendData = trendData.data
              stock.trendFallback = trendData.fallback
              stock.volumeAnalysis = trendData.volumeAnalysis
              console.log(`✅ Attached trend data to ${stock.symbol}: ${trendData.data?.length || 0} points`)
              console.log(`🔍 Stock object after attachment:`, {
                symbol: stock.symbol,
                trendData: stock.trendData,
                trendDataLength: stock.trendData?.length,
                isArray: Array.isArray(stock.trendData)
              })
            }
            else console.warn(`⚠️ No trend data found for ${stock.symbol} in batch response`)
          })
        }
        else console.warn('⚠️ Batch trends failed:', trendsResponse)
      }

      // Only set stocks.value AFTER all trend data is loaded
      stocks.value = filteredStocks

      console.log('🔍 Final stocks array:', stocks.value.map(stock => ({
        symbol: stock.symbol,
        hasTrendData: !!stock.trendData,
        trendDataLength: stock.trendData?.length,
        isArray: Array.isArray(stock.trendData)
      })))

      lastUpdate.value = new Date().toLocaleTimeString()
      console.log('✅ Data loading completed successfully')
    }
    else {
      console.error('❌ API returned error:', response)
      error.value = response.error || 'Failed to fetch data'
    }
  }
  catch (err) {
    console.error(`❌ Error loading ${props.type}:`, err)
    console.error('❌ Error stack:', err.stack)
    error.value = `Failed to load ${props.type}: ${err.message}`
  }
  finally {
    loading.value = false
  }
}

async function refreshData() {
  await loadMovers()
}

// Lifecycle
onMounted(() => {
  connect() // Connect to WebSocket
  loadMovers()
})

// Watchers.
// --------------------------------------------------------
watch(selectedCount, loadMovers)
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
</style>
