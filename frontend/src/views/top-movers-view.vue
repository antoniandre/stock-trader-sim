<template lang="pug">
.top-movers-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.justify-between.gap2.mb4
    .title1.lh0.pb1 {{ title }}
    span.op5.size--sm Last Update: {{ lastUpdate }}
    w-badge(bottom overlap bg-color="" color="info")
      template(#badge)
        .size--xs(v-if="countdown > 0 && !loading") {{ countdown }}s
      w-button.w-button--icon(
        @click="refreshData"
        :loading="loading"
        text
        round)
        icon.w-icon(icon="mdi:refresh")
    //- Connection Status.
    .w-flex.align-center.gap2.mla.no-grow
      .w-icon.size--xs.success--bg(v-if="wsConnected")
      .w-icon.size--xs.yellow--bg(v-else)
      span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
        | {{ wsConnected ? 'Live' : 'Polling fallback' }}

  //- Filter Controls
  .w-flex.wrap.align-center.gap6.mb4
    .w-flex.align-center.gap2.no-grow
      icon.w-icon.size--xs(icon="mdi:apps")
      span.text-upper.size--sm.op6 Show
      w-button(
        v-for="option in countOptions"
        :key="option.value"
        width="28"
        height="28"
        @click="selectedCount = option.value"
        :outline="selectedCount !== option.value"
        round
        sm) {{ option.value }}

    //- Exchange filter tags.
    .w-flex.align-center.gap2.wrap(v-if="availableExchanges.length")
      .w-flex.align-center.gap2.no-grow
        icon.w-icon.size--xs(icon="mdi:filter-variant")
        span.text-upper.size--sm.op6 Exchange
      w-tag.justify-start(
        v-for="exchange in availableExchanges"
        :key="exchange"
        :model-value="selectedExchanges[exchange]"
        @update:model-value="selectedExchanges[exchange] = $event"
        :bg-color="selectedExchanges[exchange] ? 'primary' : 'transparent'"
        :class="selectedExchanges[exchange] ? 'pl5 pr3' : 'px4 primary'"
        :outline="!selectedExchanges[exchange]"
        round)
        | &nbsp;
        w-icon.ml-4.absolute(v-if="selectedExchanges[exchange]") wi-check
        span {{ exchange }}

  //- Volume filter.
  .volume-filter.w-flex.align-center.gap2.wrap.mb4
    .w-flex.align-center.gap2.no-grow
      icon.w-icon.size--sm(icon="material-symbols-light:bar-chart")
      span.text-upper.size--sm.op6 Volume
    w-tag.justify-start(
      v-for="option in volumeOptions"
      :key="option.value"
      :model-value="volumeFilter[option.value]"
      @update:model-value="volumeFilter[option.value] = $event"
      :bg-color="volumeFilter[option.value] ? option.color : 'transparent'"
      :color="volumeFilter[option.value] ? 'white' : option.color"
      :class="[volumeFilter[option.value] ? 'pl5 pr3' : 'px4']"
      :outline="!volumeFilter[option.value]"
      round)
      | &nbsp;
      w-icon.ml-4.absolute(v-if="volumeFilter[option.value]") wi-check
      span {{ option.label }}
    //- Volume stats display
    .volume-stats.ml3
      .w-flex.align-center.gap3
        .stat-item(v-if="volumeStats.highVolume")
          .size--sm.op6 High Volume
          strong.warning {{ volumeStats.highVolume }}
        .stat-item(v-if="volumeStats.unusualVolume")
          .size--sm.op6 Unusual
          strong.error {{ volumeStats.unusualVolume }}

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
        .stat-item(v-if="topStock")
          .title3(:class="isPositive ? 'currency-positive' : 'currency-negative'")
            | {{ isPositive ? '+' : '' }}{{ formatPercentage(topStock.pct) }}
          .size--sm.op6 {{ isPositive ? 'Top Performer' : 'Biggest Drop' }}: {{ topStock.symbol }}
        .stat-item
          .title3 {{ formatPercentage(averageChange) }}
          .size--sm.op6 Average {{ isPositive ? 'Gain' : 'Loss' }}
        .stat-item
          .title3 {{ filteredStocks.length }}
          .size--sm.op6 Showing {{ filteredStocks.length }} of {{ stocks.length }}

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

// Props.
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: value => ['gainers', 'losers'].includes(value)
  }
})

// Computed properties based on type.
const isPositive = computed(() => props.type === 'gainers')
const title = computed(() => `Top ${props.type === 'gainers' ? 'Gainers' : 'Losers'}`)
const loadingText = computed(() => `top ${props.type}`)
const emptyStateIcon = computed(() => isPositive.value ? 'wi-trending-up' : 'wi-trending-down')
const emptyStateTitle = computed(() => `No ${props.type === 'gainers' ? 'Gainers' : 'Losers'} Found`)
const emptyStateMessage = computed(() =>
  `No stocks are showing ${isPositive.value ? 'gains' : 'losses'} at the moment.`
)

// State.
const stocks = ref([])
const loading = ref(true)
const error = ref(null)
const lastUpdate = ref('Never')
const selectedCount = ref(20)
const volumeFilter = ref({
  normal: true,
  high: true,
  'very-high': true,
  extreme: true
})
const selectedExchanges = ref({}) // Object to track which exchanges are selected.
const countdown = ref(0) // Countdown timer for next auto-refresh.

// WebSocket.
const { wsConnected, connect, addMessageHandler } = useWebSocket()

// Options.
const countOptions = [
  { label: 'Top 10', value: 10 },
  { label: 'Top 20', value: 20 },
  { label: 'Top 50', value: 50 },
  { label: 'Top 100', value: 100 }
]

// Volume filter options with colors.
const volumeOptions = [
  { label: 'Normal', value: 'normal', color: 'light-green' },
  { label: 'High', value: 'high', color: 'amber' },
  { label: 'Very High', value: 'very-high', color: 'warning' },
  { label: 'Extreme', value: 'extreme', color: 'error' }
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
  if (activeExchanges.length) {
    result = result.filter(stock =>
      stock.exchange && activeExchanges.includes(stock.exchange)
    )
  }

  // Apply volume filter.
  const filterValues = volumeFilter.value
  const hasActiveFilter = Object.values(filterValues).some(v => v === true)
  if (!hasActiveFilter) return []

  const allFiltersActive = Object.values(filterValues).every(v => v === true)
  if (allFiltersActive) return result

  return result.filter(stock => {
    const volumeAnalysis = stock.volumeAnalysis
    if (!volumeAnalysis) {
      return filterValues.normal === true
    }

    const status = volumeAnalysis.volumeStatus

    if (status === 'normal' && filterValues.normal) return true
    if (filterValues.high) {
      if (status === 'high') return true
      if (volumeAnalysis.isUnusualVolume && !status) return true
    }
    if (status === 'very-high' && filterValues['very-high']) return true
    if (status === 'extremely-high' && filterValues.extreme) return true

    return false
  })
})

// Calculate volume stats from filtered stocks.
const volumeStats = computed(() => {
  const stats = { total: 0, highVolume: 0, unusualVolume: 0 }
  filteredStocks.value.forEach(stock => {
    if (stock.volumeAnalysis) {
      if (stock.volumeAnalysis.isUnusualVolume) {
        stats.highVolume++
      }
      if (stock.volumeAnalysis.volumeStatus === 'very-high' || stock.volumeAnalysis.volumeStatus === 'extremely-high') {
        stats.unusualVolume++
      }
    }
  })
  stats.total = filteredStocks.value.length
  return stats
})

// Format percentage - handle potential decimal conversion issues.
function formatPercentage(pct) {
  if (pct == null || isNaN(pct)) return 'N/A'
  // If percentage seems way too high (likely a decimal that wasn't converted), divide by 100.
  if (Math.abs(pct) > 1000) pct = pct / 100
  return pct.toFixed(2)
}

// Get top stock from filtered stocks.
const topStock = computed(() => {
  if (filteredStocks.value.length === 0) return null
  return filteredStocks.value.reduce((top, stock) => {
    if (!top || !top.pct) return stock
    if (!stock.pct) return top
    const topPct = Math.abs(top.pct) > 1000 ? top.pct / 100 : top.pct
    const stockPct = Math.abs(stock.pct) > 1000 ? stock.pct / 100 : stock.pct
    return isPositive.value
      ? (stockPct > topPct ? stock : top)
      : (stockPct < topPct ? stock : top)
  }, null)
})

// Calculate average change from filtered stocks.
const averageChange = computed(() => {
  if (filteredStocks.value.length === 0) return null
  const validChanges = filteredStocks.value
    .map(stock => {
      let pct = stock.pct
      if (pct != null && !isNaN(pct) && Math.abs(pct) > 1000) pct = pct / 100
      return pct
    })
    .filter(pct => pct != null && !isNaN(pct))

  if (validChanges.length === 0) return null
  return validChanges.reduce((sum, pct) => sum + pct, 0) / validChanges.length
})

// Methods.
// --------------------------------------------------------
// Incremental update: merge new data into existing stocks without full reload.
async function updateMoversIncremental() {
  try {
    console.log(`🔄 Incremental update for ${props.type}...`)
    const response = await fetchTopMovers(selectedCount.value, 'stocks')

    if (response && (response.gainers || response.losers)) {
      const allMovers = [...(response.gainers || []), ...(response.losers || [])]

      const newStocks = allMovers.filter(stock => {
        if (!stock.pct || isNaN(stock.pct)) return false
        let pct = stock.pct
        if (Math.abs(pct) > 1000) pct = pct / 100
        stock.pct = pct
        return isPositive.value ? stock.pct > 0 : stock.pct < 0
      })

      // Create a map of existing stocks by symbol for efficient lookup.
      const existingStocksMap = new Map(stocks.value.map(s => [s.symbol, s]))
      const newStocksMap = new Map(newStocks.map(s => [s.symbol, s]))

      // Update existing stocks in place.
      stocks.value.forEach(existingStock => {
        const newStock = newStocksMap.get(existingStock.symbol)
        if (newStock) {
          // Update price, percentage, and other fields without replacing the object.
          Object.assign(existingStock, {
            price: newStock.price || existingStock.price,
            pct: newStock.pct,
            change: newStock.change,
            exchange: newStock.exchange || existingStock.exchange,
            marketState: newStock.marketState || existingStock.marketState,
            marketMessage: newStock.marketMessage || existingStock.marketMessage
          })
        }
      })

      // Find new stocks that need to be added.
      const stocksToAdd = newStocks.filter(s => !existingStocksMap.has(s.symbol))

      // Find stocks that should be removed (no longer in top movers).
      const symbolsToKeep = new Set(newStocks.map(s => s.symbol))
      const stocksToRemove = stocks.value.filter(s => !symbolsToKeep.has(s.symbol))

      // Load trend data for new stocks only.
      if (stocksToAdd.length) {
        const newSymbols = stocksToAdd.map(s => s.symbol)
        const trendsResponse = await fetchBatchTrends(newSymbols, 20)

        if (trendsResponse) {
          stocksToAdd.forEach(stock => {
            const trendData = trendsResponse[stock.symbol]
            if (trendData) {
              stock.trendData = trendData.data
              stock.trendFallback = trendData.fallback
              stock.volumeAnalysis = trendData.volumeAnalysis
            }
          })
        }
      }

      // Remove stocks that are no longer in the list.
      if (stocksToRemove.length) {
        stocks.value = stocks.value.filter(s => !symbolsToKeep.has(s.symbol))
      }

      // Add new stocks.
      if (stocksToAdd.length) {
        stocks.value.push(...stocksToAdd)
        // Sort by percentage to maintain order.
        stocks.value.sort((a, b) => {
          const aPct = Math.abs(a.pct) > 1000 ? a.pct / 100 : a.pct
          const bPct = Math.abs(b.pct) > 1000 ? b.pct / 100 : b.pct
          return isPositive.value ? bPct - aPct : aPct - bPct
        })
      }

      lastUpdate.value = new Date().toLocaleTimeString()
      console.log(`✅ Incremental update complete: ${stocksToAdd.length} added, ${stocksToRemove.length} removed, ${stocks.value.length} updated`)
    }
  }
  catch (err) {
    console.error(`❌ Error in incremental update:`, err)
  }
}

async function loadMovers(initialLoad = false) {
  try {
    if (initialLoad) {
      console.log(`🔄 Initial loading ${props.type} with count: ${selectedCount.value}`)
      loading.value = true
      error.value = null
    }

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
        // Normalize percentage if it seems to be in decimal form (e.g., 161.59 instead of 16159).
        let pct = stock.pct
        if (Math.abs(pct) > 1000) pct = pct / 100
        stock.pct = pct
        return isPositive.value ? stock.pct > 0 : stock.pct < 0
      })

      console.log(`📈 Filtered to ${filteredStocks.length} ${props.type}`)

      // Load trend data for all stocks in batch BEFORE setting stocks.value
      if (filteredStocks.length) {
        console.log('📡 Loading batch trends...')
        const symbols = filteredStocks.map(stock => stock.symbol)
        const trendsResponse = await fetchBatchTrends(symbols, 20)

        if (trendsResponse && Object.keys(trendsResponse).filter(key => key !== 'timestamp').length) {
          console.log('✅ Batch trends loaded successfully')

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
      lastUpdate.value = new Date().toLocaleTimeString()
      console.log('✅ Data loading completed successfully')
    }
    else {
      console.error('❌ API returned error:', response)
      if (initialLoad) error.value = response.error || 'Failed to fetch data'
    }
  }
  catch (err) {
    console.error(`❌ Error loading ${props.type}:`, err)
    if (initialLoad) error.value = `Failed to load ${props.type}: ${err.message}`
  }
  finally {
    if (initialLoad) loading.value = false
  }
}

async function refreshData() {
  await loadMovers(true)
  countdown.value = AUTO_REFRESH_INTERVAL / 1000 // Reset countdown after manual refresh.
}

// WebSocket price update handler for real-time price updates.
function handlePriceUpdate(priceData) {
  const stock = stocks.value.find(s => s.symbol === priceData.symbol)
  if (stock) {
    // Update price in place without triggering full re-render.
    stock.price = priceData.price
    // Recalculate percentage if we have previous close.
    // Note: percentage from API is day-to-day, so we keep it as is.
  }
}

// Auto-refresh for real-time updates - incremental updates only.
let autoRefreshInterval = null
let countdownInterval = null
const AUTO_REFRESH_INTERVAL = 30000 // 30 seconds.

function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval)
  countdown.value = AUTO_REFRESH_INTERVAL / 1000 // Start at 30 seconds.

  countdownInterval = setInterval(() => {
    if (countdown.value > 0) countdown.value--
    else countdown.value = AUTO_REFRESH_INTERVAL / 1000 // Reset to 30 seconds.
  }, 1000) // Update every second.
}

function stopCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
    countdown.value = 0
  }
}

function startAutoRefresh() {
  if (autoRefreshInterval) return
  startCountdown() // Start countdown timer.

  autoRefreshInterval = setInterval(() => {
    if (!loading.value && stocks.value.length) {
      console.log(`🔄 Incremental update for ${props.type}...`)
      updateMoversIncremental()
      countdown.value = AUTO_REFRESH_INTERVAL / 1000 // Reset countdown after refresh.
    }
  }, AUTO_REFRESH_INTERVAL)
  console.log(`✅ Auto-refresh started for ${props.type} (every ${AUTO_REFRESH_INTERVAL / 1000}s)`)
}

function stopAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval)
    autoRefreshInterval = null
    console.log(`🛑 Auto-refresh stopped for ${props.type}`)
  }
  stopCountdown()
}

// Watchers.
// --------------------------------------------------------
watch(selectedCount, loadMovers)

// Lifecycle.
// --------------------------------------------------------
onMounted(() => {
  connect() // Connect to WebSocket.
  addMessageHandler('price', handlePriceUpdate) // Listen for real-time price updates.
  loadMovers(true) // Initial load with loading state.
  startAutoRefresh() // Start incremental auto-refresh.
})

onBeforeUnmount(() => {
  stopAutoRefresh()
  stopCountdown()
})
</script>

<style lang="scss" scoped>
.stat-item {
  text-align: center;
  min-width: 120px;
}

.volume-stats {
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60px;
  }
}

// Responsive adjustments.
@media (max-width: 768px) {
  .volume-filter {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    .volume-stats {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  }
}
</style>
