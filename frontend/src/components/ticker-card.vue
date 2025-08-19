<template lang="pug">
.ticker-card.gradient-card.gradient-card--tall(@click="$router.push(`/trading/${stock.symbol}`)")
  .gradient-card__wrap.pb3
    .w-flex.justify-between.align-center.gap1
      .w-flex.align-center
        w-badge.mr3(
          overlap
          bottom
          bg-color=""
          :badge-class="`market-status-indicator market-${currentStatus.status}`"
          xs)
          template(#badge)
            span.pa1(:title="currentStatus.message")
          ticker-logo(:symbol="stock.symbol")
        .w-flex.align-center.gap2
          .title2.text-bold {{ stock.symbol }}
      w-button.text-bold.mla.bd1.bdrsr.px2.py1.size--xs(
        @click.stop
        :route="`/trading/${stock.symbol}#buy`"
        :class="(stock.lastSide || 'buy') === 'buy' ? 'success--bg' : 'error--bg'")
        | {{ (stock.lastSide || 'buy').toUpperCase() }}

    //- Mini trend chart
    .trend-chart-container.mt2(v-if="!hideEmptyTrends || (trendData.length > 0)")
      mini-trend-chart(
        v-if="!trendLoading && trendData.length"
        :data="trendData"
        :symbol="stock.symbol"
        :loading="trendLoading"
        @update:data="trendData = $event"
        ref="trendChart")
      w-spinner.op2(v-else-if="trendLoading" xs color="inherit")
      .trend-placeholder(v-else) No data

    .w-flex.align-center.text-bold.mt2.gap1
      span.op6 {{ stock.currencySymbol }}
      | {{ stock.price.toFixed(2) }}

      //- Percentage change (for top movers)
      span.text-bold.size--sm(v-if="showPercentageChange && stock.pct != null" :class="stock.pct >= 0 ? 'success' : 'error'") {{ stock.pct >= 0 ? '+' : '' }}{{ stock.pct.toFixed(2) }}%
</template>

<script setup>
import { toRef, ref, onMounted, computed, watch, onBeforeUnmount } from 'vue'
import { useStockStatus } from '@/composables/stock-status'
import { useWebSocket } from '@/composables/web-socket'
import { fetchStockTrend } from '@/api'
import TickerLogo from './ticker-logo.vue'
import MiniTrendChart from './mini-trend-chart.vue'

const props = defineProps({
  stock: { type: Object, required: true },
  showPercentageChange: { type: Boolean, default: false }, // Show percentage change for top movers.
  hideEmptyTrends: { type: Boolean, default: false } // Hide trend chart completely when no data (for trading view).
})

// Use the reusable stock status composable.
const stockRef = toRef(props, 'stock')
const { currentStatus } = useStockStatus(stockRef)

// Trend chart data - use pre-loaded data if available, otherwise fetch.
const trendData = ref([])
const trendLoading = ref(true)
const hasBatchData = ref(false)

// Check if trend data is pre-loaded in the stock object
const hasPreloadedTrend = computed(() => {
  const hasData = props.stock.trendData && Array.isArray(props.stock.trendData)
  console.log(`🔍 hasPreloadedTrend for ${props.stock.symbol}:`, {
    hasData,
    trendData: props.stock.trendData,
    isArray: Array.isArray(props.stock.trendData),
    length: props.stock.trendData?.length
  })
  return hasData
})

// Use pre-loaded trend data only - NO individual API calls
async function initializeTrendData() {
  console.log(`🔍 Initializing trend data for ${props.stock.symbol}:`, {
    hasPreloadedTrend: hasPreloadedTrend.value,
    hasBatchData: hasBatchData.value,
    trendData: props.stock.trendData,
    trendDataLength: props.stock.trendData?.length
  })

  // If we already have batch data from the watch, don't do anything
  if (hasBatchData.value) {
    console.log(`✅ Already have batch data for ${props.stock.symbol}, skipping initialization`)
    return
  }

  if (hasPreloadedTrend.value) {
    // Use pre-loaded trend data (from batch loading)
    trendData.value = props.stock.trendData
    trendLoading.value = false
    hasBatchData.value = true
    console.log(`✅ Using pre-loaded trend data for ${props.stock.symbol} (${trendData.value.length} points)`)

    if (props.stock.trendFallback) {
      console.debug(`Using ${props.stock.trendFallback.period}/${props.stock.trendFallback.timeframe} trend data for ${props.stock.symbol}`)
    }
  } else {
    // Wait for batch data to arrive - NO individual API calls
    console.warn(`⚠️ No pre-loaded trend data for ${props.stock.symbol}, waiting for batch data...`)

    // Wait for batch data to potentially arrive
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Check again after waiting
    if (hasPreloadedTrend.value) {
      console.log(`✅ Batch data arrived for ${props.stock.symbol}, using pre-loaded data`)
      trendData.value = props.stock.trendData
      trendLoading.value = false
      hasBatchData.value = true
    } else {
      console.warn(`❌ No batch data available for ${props.stock.symbol} - showing empty trend`)
      console.log(`🔍 Final check for ${props.stock.symbol}:`, {
        stock: props.stock,
        trendData: props.stock.trendData,
        hasPreloadedTrend: hasPreloadedTrend.value
      })
      // NO individual API call - just show empty trend
      trendData.value = []
      trendLoading.value = false
    }
  }
}

// Individual API calls are disabled - only batch data is used

// Watch for changes in pre-loaded trend data
watch(() => props.stock.trendData, (newTrendData) => {
  console.log(`👀 Watch triggered for ${props.stock.symbol}:`, {
    newTrendData,
    isArray: Array.isArray(newTrendData),
    length: newTrendData?.length
  })

  if (newTrendData && Array.isArray(newTrendData) && newTrendData.length > 0) {
    console.log(`✅ Watch: Using batch data for ${props.stock.symbol} (${newTrendData.length} points)`)
    trendData.value = newTrendData
    trendLoading.value = false
    hasBatchData.value = true
  }
}, { immediate: true })

// WebSocket integration for real-time trend updates
const { subscribeToStock, unsubscribeFromStock } = useWebSocket()
const trendChart = ref(null)

// Handle real-time price updates
const handlePriceUpdate = (priceData) => {
  if (priceData.symbol === props.stock.symbol && trendChart.value) {
    // Update trend chart with new price
    trendChart.value.updateTrendData(priceData.price)
  }
}

onMounted(() => {
  initializeTrendData()

  // Subscribe to real-time price updates for trend chart
  subscribeToStock(props.stock.symbol, handlePriceUpdate)
})

onBeforeUnmount(() => {
  // Cleanup WebSocket subscription
  unsubscribeFromStock(props.stock.symbol, handlePriceUpdate)
})
</script>

<style lang="scss">
.ticker-card {
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {transform: translateY(-2px);}
  &:active {transform: translateY(0);}

  .market-status-indicator {
    background-color: currentColor !important;
    cursor: help;
    border: 1px solid var(--w-base-bg-color);
    margin-bottom: 0;
    margin-left: -10px;
    width: 12px;
    min-width: 12px;
    height: 12px;
    line-height: 1;
    aspect-ratio: 1;
    border-radius: 99em;
  }

  .trend-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
  &:hover .trend-chart-container {opacity: 1;}

  .trend-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
    font-size: 11px;
    opacity: 0.4;
  }

  .w-spinner {height: 12px;}
}
</style>
