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

    //- Volume multiplier indicator (for top movers)
    .volume-multiplier(v-if="showPercentageChange && volumeMultiplier" :class="volumeMultiplierClass") {{ volumeMultiplier }}x
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
  return hasData
})

// Volume multiplier indicator for top movers
const volumeMultiplier = computed(() => {
  if (!props.stock.volumeAnalysis?.volumeRatio) return null
  const ratio = props.stock.volumeAnalysis.volumeRatio
  if (ratio >= 5) return Math.round(ratio)
  if (ratio >= 3) return Math.round(ratio)
  if (ratio >= 1.5) return Math.round(ratio) // Lowered threshold for testing
  return null // Only show for 1.5x or higher
})

const volumeMultiplierClass = computed(() => {
  if (!volumeMultiplier.value) return ''
  const ratio = volumeMultiplier.value
  if (ratio >= 5) return 'volume--extreme'
  if (ratio >= 3) return 'volume--high'
  if (ratio >= 1.5) return 'volume--medium'
  return 'volume--medium'
})

// Use pre-loaded trend data only - NO individual API calls
async function initializeTrendData() {
  // If we already have batch data from the watch, don't do anything
  if (hasBatchData.value) {
    return
  }

  if (hasPreloadedTrend.value) {
    // Use pre-loaded trend data (from batch loading)
    trendData.value = props.stock.trendData
    trendLoading.value = false
    hasBatchData.value = true

    if (props.stock.trendFallback) {
      console.debug(`Using ${props.stock.trendFallback.period}/${props.stock.trendFallback.timeframe} trend data for ${props.stock.symbol}`)
    }
  }
  else {
    // No pre-loaded trend data - show empty trend
    trendData.value = []
    trendLoading.value = false
  }
}

// Individual API calls are disabled - only batch data is used

// Watch for changes in pre-loaded trend data
watch(() => props.stock.trendData, (newTrendData) => {
  if (newTrendData && Array.isArray(newTrendData) && newTrendData.length > 0) {
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
  }

  .volume-multiplier {
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 10px;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 3px;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    z-index: 10;

    &.volume--extreme {
      background: linear-gradient(135deg, #ff4444, #cc0000);
      box-shadow: 0 2px 4px rgba(255, 68, 68, 0.4);
    }

    &.volume--high {
      background: linear-gradient(135deg, #ff8800, #ff6600);
      box-shadow: 0 2px 4px rgba(255, 136, 0, 0.4);
    }

    &.volume--medium {
      background: linear-gradient(135deg, #ffaa00, #ff8800);
      box-shadow: 0 2px 4px rgba(255, 170, 0, 0.4);
    }
  }

  .w-spinner {height: 12px;}
}
</style>
