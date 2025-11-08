<template lang="pug">
.ticker-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.gap4
    ticker-logo(:symbol="stock.symbol" size="lg")
    div
      .w-flex.align-center.justify-space-between.gap2
        w-tag.w-flex.gap2.pr1.no-grow(round :bg-color="$waveui.theme === 'dark' ? 'info-dark4' : 'info-light5'")
          strong.size--lg {{ stock.symbol }}
          icon(
            :icon="currentStatus.icon"
            :class="`market-${currentStatus.status}`"
            :title="currentStatus.message"
            style="width: 15px")
        .w-flex.align-center.gap4
          .w-flex.align-center.gap2.no-grow
            span.size--xs.text-upper(:class="`market-${currentStatus.status}`") {{ currentStatus.message }}
            span.size--xs.op6(v-if="currentStatus.status === 'open' && currentStatus.nextClose")
              | (closes at {{ new Date(currentStatus.nextClose).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }) }} ET)
            span.size--xs.op6(v-else-if="currentStatus.nextOpen")
              | (opens {{ formatNextOpenTime }})
          .w-flex.align-center.gap2.mla
            .w-icon.size--xs(:class="wsConnected ? 'success--bg' : 'yellow--bg'")
            span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
              | {{ wsConnected ? 'Live' : 'Delayed' }}
      h1.title2 {{ stock.name || 'Loading...' }}

  //- Stock Details & Trading
  .w-flex.mt4.mdd-column
    //- Left Column: Stock Details & Chart

    //- Price Chart
    .glass-box.pa6.grow
      .chart-wrap
        .chart-info.w-flex.align-center.gap2
          .price-display.w-flex.align-center.gap2
            .title2.text-bold(v-if="stock.price")
              span.op6.mr2 {{ stock.currencySymbol }}
              span {{ stock.price.toFixed(2) }}
            .title3(v-else)
              w-icon.mr2.op4(size="1.4rem") wi-info-circle
              span.op6 Price Unavailable
            .caption.mt1.op7.w-flex.align-center.gap1
              icon(icon="mdi:clock-outline")
              | Updated {{ lastUpdate }}

          .price-change.text-center.lh0(
            v-if="priceChange && stock.price"
            :class="priceChange >= 0 ? 'currency-positive' : 'currency-negative'")
            .text-bold
              span {{ priceChange >= 0 ? '+' : '' }}{{ stock.currencySymbol }}{{ Math.abs(priceChange).toFixed(2) }}
            .size--xs ({{ priceChange >= 0 ? '+' : '' }}{{ priceChangePercent.toFixed(2) }}%)
          .w-flex.align-center.gap2.mla.no-grow
            w-button.pa0(
              width="24"
              height="24"
              @click="refreshPrice"
              :loading="isRefreshing"
              tooltip="Refresh Price"
              :tooltip-props="{ sm: true }"
              round)
              icon(icon="mdi:refresh")
            w-button.pa0(
              width="24"
              height="24"
              @click="showDialog = true"
              tooltip="Fullscreen Chart"
              :tooltip-props="{ sm: true }"
              round)
              icon(icon="mdi:fullscreen")
            //- Smooth transition indicator
            .w-flex.align-center.gap1.ml2(v-if="isTransitioningTimeframe")
              w-spinner(size="10")
              span.size--xs.op5 Updating...

        //- Price Chart Component
        PriceChart(
          :symbol="props.symbol"
          :chart-type="chartType"
          :selected-period="selectedPeriod"
          :selected-timeframe="selectedTimeframe"
          :chart-periods="chartPeriods"
          :available-timeframes="availableTimeframes"
          :is-loading-historical-data="isLoadingHistoricalData"
          :is-loading-additional-data="isLoadingAdditionalData"
          :line-chart-data="lineChartData"
          :line-chart-options="lineChartOptions"
          :candlestick-chart-data="candlestickChartData"
          :candlestick-chart-options="candlestickChartOptions"
          :effective-timeframe="effectiveTimeframe"
          :is-using-fallback-timeframe="isUsingFallbackTimeframe"
          @change-chart-type="changeChartType"
          @change-period="changePeriod"
          @change-timeframe="changeTimeframe"
          @reset-zoom-complete="handleResetZoomComplete")

    //- Right Column: Trading Interface & Stats
    .spacer.ma3.no-grow
    aside.side-panel
      TradingInterface(
        :symbol="props.symbol"
        :stock="stock"
        :recent-trades="recentTrades")

      .glass-box.mt4
        StockStatsPanel(
          :stock="stock"
          :current-price="stock.price"
          :currency-symbol="stock.currencySymbol"
          :historical-data="statsHistoricalData"
          :intraday-data="historicalData"
          :price-history="priceHistory")

  //- Fullscreen Chart Dialog
  w-dialog.fullscreen-chart-overlay(
    v-model="showDialog"
    fullscreen
    dialog-class="fullscreen-chart"
    content-class="pa6")
    w-button.pa0.ml2(
      absolute
      right
      top
      width="24"
      height="24"
      @click="showDialog = false"
      tooltip="Close"
      icon="wi-cross"
      bg-color="error"
      round)
    PriceChart(
      :symbol="props.symbol"
      :chart-type="chartType"
      :selected-period="selectedPeriod"
      :selected-timeframe="selectedTimeframe"
      :chart-periods="chartPeriods"
      :available-timeframes="availableTimeframes"
      :is-loading-historical-data="isLoadingHistoricalData"
      :is-loading-additional-data="isLoadingAdditionalData"
      :line-chart-data="lineChartData"
      :line-chart-options="lineChartOptions"
      :candlestick-chart-data="candlestickChartData"
      :candlestick-chart-options="candlestickChartOptions"
      :effective-timeframe="effectiveTimeframe"
      :is-using-fallback-timeframe="isUsingFallbackTimeframe"
      @change-chart-type="changeChartType"
      @change-period="changePeriod"
      @change-timeframe="changeTimeframe"
      @reset-zoom-complete="handleResetZoomComplete")
    TradingInterface.floating(
      :symbol="props.symbol"
      :stock="stock"
      :recent-trades="recentTrades")
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick, inject } from 'vue'
import { fetchStock, fetchStockHistoryProgressive } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from '@/components/ticker-logo.vue'
import PriceChart from '@/components/price-chart.vue'
import StockStatsPanel from '@/components/stock-stats-panel.vue'
import TradingInterface from '@/components/trading-interface.vue'

const props = defineProps({
  symbol: { type: String, required: true }
})

const $waveui = inject('$waveui')

// Stock Data
// --------------------------------------------------------
const stock = ref({
  symbol: props.symbol,
  name: '',
  price: 0,
  previousPrice: 0,
  currency: 'USD',
  currencySymbol: '$',
  status: 'unknown',
  tradable: true,
  exchange: 'Unknown',
  marketState: 'unknown',
  marketMessage: 'Loading...',
  nextOpen: null,
  nextClose: null
})

// Chart Data
// --------------------------------------------------------
const priceHistory = ref([])
const historicalData = ref([])
const statsHistoricalData = ref([])
const realtimeOHLC = ref([])
const selectedPeriod = ref('1D')
const selectedTimeframe = ref('1Min')
const chartType = ref('candlestick')
const recentTrades = ref([])
const isRefreshing = ref(false)
const showDialog = ref(false)
const isLoadingHistoricalData = ref(false)
let marketStatusInterval = null

// Dynamic Loading State
// --------------------------------------------------------
const isLoadingAdditionalData = ref(false)
const isPanning = ref(false)
const userHasPanned = ref(false)
const dataCache = ref(new Map())
const activeRequests = ref(new Set()) // Track active requests to prevent duplicates.
let panDebounceTimer = null
let zoomDebounceTimer = null // Add zoom debouncing.

// Enhanced data management for smooth transitions.
const isTransitioningTimeframe = ref(false)
const timeframeDataCache = ref(new Map()) // Cache data for different timeframes.

// Smooth data transition function.
// Instead of replacing all data at once, we'll update it smoothly.
// This keeps the chart instances alive and just updates their data.
// Don't show loading spinner - keep chart visible during transition.
// isLoadingHistoricalData.value = true  // REMOVED: This caused the spinner
async function transitionChartData(newData) {
  try {
    // Update historical data with smooth transition.
    historicalData.value = newData

    // Minimal delay for smooth rendering - almost instantaneous.
    await new Promise(resolve => setTimeout(resolve, 25))
  }
  catch (error) {
    console.error('❌ Error during data transition:', error)
  }
  // No finally block needed since we're not setting loading state.
}

// Price Update Throttling
// --------------------------------------------------------
let lastPriceUpdate = 0
const PRICE_UPDATE_THROTTLE = 1000 // 1 second.

// WebSocket Setup
// --------------------------------------------------------
const { wsConnected, lastUpdate, connect, addMessageHandler, subscribeToStock } = useWebSocket()

// Stock Status
// --------------------------------------------------------
const { currentStatus, formatNextOpenTime } = useStockStatus(stock)

// Chart Configuration
// --------------------------------------------------------
const chartPeriods = [
  { label: '1D', value: '1D' },
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' },
  { label: '1Y', value: '1Y' },
  { label: '5Y', value: '5Y' }
]

const timeframeOptions = {
  '1D': [
    { label: '1m', value: '1Min' },
    { label: '5m', value: '5Min' },
    { label: '10m', value: '10Min' },
    { label: '15m', value: '15Min' },
    { label: '30m', value: '30Min' },
    { label: '1h', value: '1Hour' }
  ],
  '1W': [
    { label: '5m', value: '5Min' },
    { label: '15m', value: '15Min' },
    { label: '30m', value: '30Min' },
    { label: '1h', value: '1Hour' },
    { label: '4h', value: '4Hour' }
  ],
  '1M': [
    { label: '1h', value: '1Hour' },
    { label: '4h', value: '4Hour' },
    { label: '1d', value: '1Day' }
  ],
  '3M': [
    { label: '4h', value: '4Hour' },
    { label: '1d', value: '1Day' }
  ],
  '1Y': [
    { label: '1d', value: '1Day' }
  ],
  '5Y': [
    { label: '1d', value: '1Day' }
  ]
}

// Smart timeframe selection - fallback to available timeframes.
// --------------------------------------------------------
const effectiveTimeframe = ref('1Min') // The actual timeframe being displayed
const originalTimeframe = ref('1Min') // The user-selected timeframe.
const isUsingFallbackTimeframe = ref(false) // Track if we're using a fallback.

// Get fallback timeframes for a given period, ordered by preference.
function getFallbackTimeframes(period) {
  const timeframes = timeframeOptions[period] || []
  return timeframes.map(tf => tf.value)
}

// Smart timeframe selection function.
async function selectAvailableTimeframe(period, preferredTimeframe) {
  console.log(`🔍 Smart timeframe selection for ${period}, preferred: ${preferredTimeframe}`)

  const fallbackTimeframes = getFallbackTimeframes(period)
  const preferredIndex = fallbackTimeframes.indexOf(preferredTimeframe)

  // Start with preferred timeframe, then try fallbacks.
  const timeframesToTry = [
    preferredTimeframe,
    ...fallbackTimeframes.filter(tf => tf !== preferredTimeframe)
  ]

  for (const timeframe of timeframesToTry) {
    try {
      console.log(`🔍 Testing timeframe: ${timeframe}`)

      // Quick test to see if this timeframe has data.
      const testResponse = await fetchStockHistoryProgressive(props.symbol, period, timeframe)

      if (testResponse?.data && testResponse.data.length > 0) {
        console.log(`✅ Found data for timeframe: ${timeframe} (${testResponse.data.length} points)`)

        // Update the effective timeframe.
        effectiveTimeframe.value = timeframe
        originalTimeframe.value = preferredTimeframe
        isUsingFallbackTimeframe.value = timeframe !== preferredTimeframe

        if (isUsingFallbackTimeframe.value) {
          console.log(`⚠️ Using fallback timeframe: ${timeframe} (preferred: ${preferredTimeframe} had no data)`)
        }

        return timeframe
      }
      else {
        console.log(`❌ No data for timeframe: ${timeframe}`)
      }
    }
    catch (error) {
      console.log(`❌ Error testing timeframe ${timeframe}:`, error.message)
    }
  }

  // If no timeframes have data, use the preferred one and let the error handling show.
  console.log(`⚠️ No timeframes have data, using preferred: ${preferredTimeframe}`)
  effectiveTimeframe.value = preferredTimeframe
  originalTimeframe.value = preferredTimeframe
  isUsingFallbackTimeframe.value = false
  return preferredTimeframe
}

const defaultTimeframes = {
  '1D': '5Min',
  '1W': '15Min',
  '1M': '1Hour',
  '3M': '1Day',
  '1Y': '1Day',
  '5Y': '1Day'
}

// Computed Properties
// --------------------------------------------------------
const availableTimeframes = computed(() => timeframeOptions[selectedPeriod.value] || [])

const chartTimeUnit = computed(() => {
  const unitMap = { '1Min': 'minute', '5Min': 'minute', '15Min': 'minute', '30Min': 'minute', '1Hour': 'hour', '4Hour': 'hour', '1Day': 'day' }
  return unitMap[selectedTimeframe.value] || 'hour'
})

const chartDisplayFormats = computed(() => {
  const formatMap = { 'minute': { minute: 'HH:mm', hour: 'HH:mm', day: 'MMM dd' }, 'hour': { hour: 'HH:mm', day: 'MMM dd' }, 'day': { day: 'MMM dd', month: 'MMM' } }
  return formatMap[chartTimeUnit.value] || formatMap.hour
})

const priceChange = computed(() => stock.value.price && stock.value.previousPrice ? stock.value.price - stock.value.previousPrice : null)
const priceChangePercent = computed(() => priceChange.value && stock.value.previousPrice ? (priceChange.value / stock.value.previousPrice) * 100 : 0)

// Chart Data Functions
// --------------------------------------------------------
function createZoomPanConfig() {
  return {
    limits: {
      x: {
        minRange: 60000 * 5, // Minimum 5-minute range.
        min: () => {
          // Calculate a fixed minimum based on the current time and period.
          // This prevents the min from shifting each time we reset.
          const now = Date.now()
          const timeRange = getReasonableTimeRange()
          return now - timeRange.min
        },
        max: () => {
          // Calculate a fixed maximum based on current time.
          // This prevents accumulating errors in the max calculation.
          const now = Date.now()
          return now + (5 * 60 * 1000) // Allow slight future panning.
        }
      }
    },
    pan: {
      enabled: true,
      mode: 'x',
      threshold: 5,
      modifierKey: null,
      onPanStart: ({ chart }) => {
        isPanning.value = true
        console.log('📊 Pan START - current view:', {
          min: new Date(chart.scales.x.min).toISOString(),
          max: new Date(chart.scales.x.max).toISOString()
        })
      },
      onPan: ({ chart }) => {
        if (chart && chart.scales && chart.scales.x) {
          console.log('📊 Panning - checking for additional data needed')
          checkAndLoadAdditionalData(chart, 'pan')
        }
      },
      onPanComplete: ({ chart }) => {
        console.log('📊 Pan COMPLETE')

        if (!chart || !chart.scales || !chart.scales.x) {
          isPanning.value = false
          return
        }

        const currentTime = Date.now()
        const viewMin = chart.scales.x.min
        const viewMax = chart.scales.x.max
        const viewCenter = (viewMin + viewMax) / 2
        const timeDiffFromCenter = Math.abs(currentTime - viewCenter)
        const timeDiffFromMax = currentTime - viewMax
        const isPannedAway = timeDiffFromCenter > 30 * 60 * 1000 || timeDiffFromMax > 10 * 60 * 1000

        console.log('📊 Pan analysis:', {
          currentTime: new Date(currentTime).toISOString(),
          viewCenter: new Date(viewCenter).toISOString(),
          isPannedAway,
          timeDiffFromCenter: Math.round(timeDiffFromCenter / 60000) + 'm',
          timeDiffFromMax: Math.round(timeDiffFromMax / 60000) + 'm'
        })

        userHasPanned.value = isPannedAway
        handleChartViewChange(chart, 'pan')
        isPanning.value = false
      }
    },
    zoom: {
      wheel: { enabled: true, speed: 0.1 },
      pinch: { enabled: true },
      mode: 'x',
      // onZoomStart: ({ chart }) => {},
      onZoomComplete: ({ chart }) => handleChartViewChange(chart, 'zoom')
    }
  }
}

const lineChartData = computed(() => {
  let dataToUse = []

  try {
    if (historicalData.value && Array.isArray(historicalData.value) && historicalData.value.length > 0) {
      dataToUse = [...historicalData.value]

      if (!userHasPanned.value && priceHistory.value && Array.isArray(priceHistory.value) && priceHistory.value.length > 0) {
        const lastHistoricalTime = historicalData.value[historicalData.value.length - 1].timestamp
        const newRealTimeData = priceHistory.value.filter(item => item && item.timestamp > lastHistoricalTime)
        dataToUse = [...dataToUse, ...newRealTimeData]
      }
    }
    else if (!userHasPanned.value && priceHistory.value && Array.isArray(priceHistory.value)) {
      dataToUse = priceHistory.value
    }

    const chartData = {
      labels: [],
      datasets: [{
        label: props.symbol || 'Stock',
        data: dataToUse.filter(Boolean).map(item => ({
          x: item.timestamp || Date.now(),
          y: item.price || 0
        })),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        tension: 0.1,
        fill: false
      }]
    }

    return chartData
  }
  catch (error) {
    console.warn('Error in lineChartData:', error)
    return { labels: [], datasets: [] }
  }
})

const candlestickChartData = computed(() => {
  let dataToUse = []

  try {
    if (historicalData.value && Array.isArray(historicalData.value) && historicalData.value.length > 0) {
      dataToUse = [...historicalData.value]

      if (!userHasPanned.value && realtimeOHLC.value && Array.isArray(realtimeOHLC.value) && realtimeOHLC.value.length > 0) {
        const lastHistoricalTime = historicalData.value[historicalData.value.length - 1].timestamp
        const newRealTimeData = realtimeOHLC.value.filter(item => item && item.timestamp > lastHistoricalTime)
        dataToUse = [...dataToUse, ...newRealTimeData]
      }
    }
    else if (!userHasPanned.value && realtimeOHLC.value && Array.isArray(realtimeOHLC.value)) {
      dataToUse = realtimeOHLC.value
    }

    return {
      labels: [],
      datasets: [{
        label: props.symbol || 'Stock',
        data: dataToUse.filter(Boolean).map(item => ({
          x: item.timestamp || Date.now(),
          o: item.open || 0,
          h: item.high || 0,
          l: item.low || 0,
          c: item.close || 0,
          volume: item.volume || 0
        }))
      }]
    }
  }
  catch (error) {
    console.warn('Error in candlestickChartData:', error)
    return { labels: [], datasets: [] }
  }
})

// Chart Options.
const lineChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  parsing: false,
  normalized: true,
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#3B82F6',
      borderWidth: 1,
      callbacks: {
        title: (tooltipItems) => new Date(tooltipItems[0].parsed.x).toLocaleString(undefined, {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }),
        label: (context) => {
          if (typeof context.parsed.y !== 'number') return ''
          return `${props.symbol}: ${stock.value.currencySymbol}${context.parsed.y.toFixed(2)}`
        }
      }
    },
    zoom: createZoomPanConfig()
  },
  scales: {
    x: {
      type: 'time',
      adapters: { date: { zone: Intl.DateTimeFormat().resolvedOptions().timeZone } },
      time: { unit: chartTimeUnit.value, displayFormats: chartDisplayFormats.value },
      grid: { display: false },
      ticks: { color: '#C9D1D9', maxTicksLimit: 16, source: 'auto' }
    },
    y: {
      position: 'right',
      beginAtZero: false,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        callback: value => typeof value === 'number' ? stock.value.currencySymbol + value.toFixed(2) : ''
      }
    }
  }
}))

const candlestickChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  parsing: false,
  normalized: true,
  interaction: { mode: 'index', intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#3B82F6',
      borderWidth: 1,
      callbacks: {
        title: (tooltipItems) => new Date(tooltipItems[0].parsed.x).toLocaleString(undefined, {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }),
        label: (context) => {
          const value = context.parsed
          if (!value || typeof value.o !== 'number') return ''
          const { o: open, h: high, l: low, c: close } = value
          return [
            `${props.symbol}`,
            `O: ${stock.value.currencySymbol}${open.toFixed(2)}`,
            `H: ${stock.value.currencySymbol}${high.toFixed(2)}`,
            `L: ${stock.value.currencySymbol}${low.toFixed(2)}`,
            `C: ${stock.value.currencySymbol}${close.toFixed(2)}`
          ]
        }
      }
    },
    zoom: createZoomPanConfig()
  },
  scales: {
    x: {
      type: 'time',
      adapters: { date: { zone: Intl.DateTimeFormat().resolvedOptions().timeZone } },
      time: { unit: chartTimeUnit.value, displayFormats: chartDisplayFormats.value },
      grid: { display: false },
      ticks: { color: '#C9D1D9', maxTicksLimit: 16, source: 'auto' }
    },
    y: {
      position: 'right',
      beginAtZero: false,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        callback: value => typeof value === 'number' ? stock.value.currencySymbol + value.toFixed(2) : ''
      }
    }
  }
}))

// Helper Functions
// --------------------------------------------------------
function getReasonableTimeRange() {
  const basePeriods = {
    '1D': { min: 2 * 24 * 60 * 60 * 1000, max: 10 * 60 * 1000 }, // 2 days back, 10 min forward.
    '1W': { min: 14 * 24 * 60 * 60 * 1000, max: 60 * 60 * 1000 }, // 2 weeks back, 1 hour forward.
    '1M': { min: 60 * 24 * 60 * 60 * 1000, max: 6 * 60 * 60 * 1000 }, // 2 months back, 6 hours forward.
    '3M': { min: 180 * 24 * 60 * 60 * 1000, max: 24 * 60 * 60 * 1000 } // 6 months back, 1 day forward.
  }
  return basePeriods[selectedPeriod.value] || basePeriods['1D']
}

function getAdditionalDataRange(period) {
  return period
}

function handleResetZoomComplete() {
  console.log('📊 Handling reset zoom complete - resetting all states')

  // Reset all panning and zoom states.
  userHasPanned.value = false
  isPanning.value = false

  // Clear data cache to prevent wrong data.
  dataCache.value.clear()

  // Clear active requests to prevent stale requests.
  activeRequests.value.clear()

  // Clear any pending debounce timers.
  if (panDebounceTimer) {
    clearTimeout(panDebounceTimer)
    panDebounceTimer = null
  }
  if (zoomDebounceTimer) {
    clearTimeout(zoomDebounceTimer)
    zoomDebounceTimer = null
  }

  // Refresh historical data to ensure we have the correct current view.
  fetchHistoricalData()

  console.log('📊 Reset zoom complete - ready for current time view')
}

function updateOHLCData(price, timestamp) {
  const timeframe = selectedTimeframe.value
  const intervalMs = { '1Min': 60000, '5Min': 300000, '15Min': 900000, '30Min': 1800000, '1Hour': 3600000, '4Hour': 14400000, '1Day': 86400000 }[timeframe] || 300000
  const bucketTime = Math.floor(timestamp / intervalMs) * intervalMs

  let lastCandle = realtimeOHLC.value[realtimeOHLC.value.length - 1]

  if (lastCandle && lastCandle.timestamp === bucketTime) {
    lastCandle.high = Math.max(lastCandle.high, price)
    lastCandle.low = Math.min(lastCandle.low, price)
    lastCandle.close = price
  }
  else realtimeOHLC.value.push({ timestamp: bucketTime, open: price, high: price, low: price, close: price, volume: 0 })
}

// Message Handlers
// --------------------------------------------------------
function handlePriceUpdate(data) {
  if (data.symbol !== props.symbol) return

  // Throttle price updates to prevent blinking.
  const now = Date.now()
  if (now - lastPriceUpdate < PRICE_UPDATE_THROTTLE) return
  lastPriceUpdate = now

  const oldPrice = stock.value.price
  stock.value.price = data.price
  stock.value.previousPrice = oldPrice

  // Always update market status if provided, otherwise preserve existing.
  if (data.marketState) {
    stock.value.marketState = data.marketState
    stock.value.marketMessage = data.marketMessage || 'Status Updated'
    stock.value.nextOpen = data.nextOpen
    stock.value.nextClose = data.nextClose
  }
  // If no market status provided but current status is unknown/loading, set default.
  else if (!stock.value.marketState || stock.value.marketState === 'unknown' || stock.value.marketMessage === 'Loading...') {
    stock.value.marketState = 'closed'
    stock.value.marketMessage = 'Market Status Unavailable'
  }

  console.log(`📊 Price update for ${data.symbol}: $${oldPrice.toFixed(2)} → $${data.price.toFixed(2)} (${((data.price - oldPrice) / oldPrice * 100).toFixed(2)}%)`, {
    marketState: stock.value.marketState,
    marketMessage: stock.value.marketMessage,
    timestamp: new Date().toLocaleString()
  })

  // Only update real-time data if user hasn't panned away.
  if (!userHasPanned.value) {
    const timestamp = Date.now()
    priceHistory.value.push({ timestamp, price: data.price })
    if (priceHistory.value.length > 100) priceHistory.value = priceHistory.value.slice(-100)

    updateOHLCData(data.price, timestamp)
    if (realtimeOHLC.value.length > 200) realtimeOHLC.value = realtimeOHLC.value.slice(-200)

    // Only trim historical data if we have real-time data and user is viewing current data.
    if (historicalData.value.length > 0 && priceHistory.value.length > 50) {
      const totalPoints = historicalData.value.length + priceHistory.value.length
      if (totalPoints > 500) {
        const removePoints = Math.max(10, Math.floor(historicalData.value.length * 0.1))
        const keepHistorical = Math.max(300, historicalData.value.length - removePoints)
        historicalData.value = historicalData.value.slice(-keepHistorical)
      }
    }
  }
  else console.log('📊 User has panned away, not updating real-time data')
}

function handleMarketStatusUpdate(data) {
  console.log('📊 Market status update received:', data)
  const statusData = data.data || data
  stock.value.marketState = statusData.status || 'closed'
  stock.value.marketMessage = statusData.message || 'Market Status Updated'
  stock.value.nextOpen = statusData.nextOpen
  stock.value.nextClose = statusData.nextClose
}

// Dynamic Loading Functions
// --------------------------------------------------------
async function checkAndLoadAdditionalData(chart, action = 'pan') {
  if (!chart || !chart.scales || !chart.scales.x) {
    console.log('📊 Skipping additional data check - invalid chart')
    return
  }

  // Use debouncing for both pan and zoom to prevent rapid-fire requests.
  if (action === 'zoom') {
    clearTimeout(zoomDebounceTimer)
    zoomDebounceTimer = setTimeout(() => {
      performDataCheck(chart, action)
    }, 300) // 300ms debounce for zoom
  }
  else if (action === 'pan') {
    clearTimeout(panDebounceTimer)
    panDebounceTimer = setTimeout(() => {
      performDataCheck(chart, action)
    }, 200) // 200ms debounce for pan
  }
  // Immediate execution for other actions.
  else performDataCheck(chart, action)
}

async function performDataCheck(chart, action) {
  if (isLoadingAdditionalData.value) {
    console.log('📊 Skipping data check - already loading')
    return
  }

  const { x: xScale } = chart.scales
  const viewMin = xScale.min
  const viewMax = xScale.max
  const currentRange = viewMax - viewMin

  console.log(`📊 Checking for additional data needed (${action}):`, {
    viewMin: new Date(viewMin).toISOString(),
    viewMax: new Date(viewMax).toISOString(),
    currentRange: Math.round(currentRange / 60000) + 'm',
    existingDataPoints: historicalData.value.length
  })

  if (historicalData.value.length === 0) {
    console.log('📊 No historical data available, cannot load additional data')
    return
  }

  const dataStart = Math.min(...historicalData.value.map(d => d.timestamp))
  const dataEnd = Math.max(...historicalData.value.map(d => d.timestamp))

  // Use consolidated buffer calculation for all actions.
  const bufferTime = action === 'zoom'
    ? getBufferTime(selectedPeriod.value, currentRange)
    : getBufferTime(selectedPeriod.value)

  let loadStart, loadEnd
  let shouldLoad = false

  if (action === 'zoom') {
    // For zoom: Check if user is viewing areas outside our data range.
    if (viewMin < dataStart + bufferTime) {
      // User is viewing time before our data starts - load earlier data.
      loadEnd = dataStart
      loadStart = new Date(Math.max(
        viewMin - currentRange, // Go back by current view range.
        dataStart - currentRange * 3 // Or 3x current range, whichever is more recent.
      ))
      shouldLoad = true
      console.log('📊 Zoom detected need for earlier data')
    }

    if (viewMax > dataEnd - bufferTime) {
      // User is viewing time after our data ends - load more recent data.
      loadStart = dataEnd
      loadEnd = new Date(Math.min(
        viewMax + currentRange, // Go forward by current view range.
        dataEnd + currentRange * 2 // Or 2x current range, whichever is sooner.
      ))
      shouldLoad = true
      console.log('📊 Zoom detected need for later data')
    }
  }
  else if (action === 'pan') {
    // For pan: More conservative loading based on pan direction.
    const panBuffer = bufferTime * 0.5 // Use smaller buffer for pan.

    if (viewMin < dataStart + panBuffer) {
      loadEnd = dataStart
      loadStart = new Date(dataStart - bufferTime * 2)
      shouldLoad = true
      console.log('📊 Pan detected need for earlier data')
    }

    if (viewMax > dataEnd - panBuffer) {
      loadStart = dataEnd
      loadEnd = new Date(dataEnd + bufferTime * 2)
      shouldLoad = true
      console.log('📊 Pan detected need for later data')
    }
  }

  if (shouldLoad) {
    console.log(`📊 Loading additional data (${action}):`, {
      loadStart: new Date(loadStart).toISOString(),
      loadEnd: new Date(loadEnd).toISOString(),
      bufferHours: Math.round(bufferTime / (1000 * 60 * 60) * 10) / 10
    })

    await loadAdditionalData(loadStart.getTime(), loadEnd.getTime())
  }
  else console.log('📊 No additional data needed')
}

async function loadAdditionalData(startTime, endTime) {
  if (isLoadingAdditionalData.value) {
    console.log('📊 Already loading additional data, skipping')
    return
  }

  try {
    isLoadingAdditionalData.value = true

    // Create a more granular cache key that prevents overlapping requests.
    const startKey = Math.floor(startTime / (60 * 1000)) // Round to minutes.
    const endKey = Math.floor(endTime / (60 * 1000))
    const rangeMinutes = endKey - startKey
    const cacheKey = `${props.symbol}-${selectedTimeframe.value}-${startKey}-${endKey}-${rangeMinutes}m`

    // Create a broader request key to prevent overlapping requests.
    // Use larger buckets to catch overlapping ranges better.
    const requestStartBucket = Math.floor(startTime / (15 * 60 * 1000)) // 15-minute buckets.
    const requestEndBucket = Math.floor(endTime / (15 * 60 * 1000))
    const requestKey = `${props.symbol}-${selectedTimeframe.value}-${requestStartBucket}-${requestEndBucket}`

    console.log('📊 Loading data request:', {
      symbol: props.symbol,
      timeframe: selectedTimeframe.value,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      rangeMinutes,
      cacheKey,
      requestKey,
      activeRequests: Array.from(activeRequests.value)
    })

    // Check if we're already loading this range or an overlapping range.
    const overlappingRequest = Array.from(activeRequests.value).find(key => {
      if (key.startsWith(`${props.symbol}-${selectedTimeframe.value}-`)) {
        const [, , , startBucket, endBucket] = key.split('-').map(Number)
        // Check for overlap.
        return (requestStartBucket <= endBucket && requestEndBucket >= startBucket)
      }
      return false
    })

    if (overlappingRequest) {
      console.log('📊 Overlapping request detected, skipping:', overlappingRequest)
      return
    }

    // Mark this request as active.
    activeRequests.value.add(requestKey)

    // Check cache first.
    if (dataCache.value.has(cacheKey)) {
      console.log('💾 Using cached data for range:', {
        cacheKey,
        cachedDataLength: dataCache.value.get(cacheKey).length
      })
      const cachedData = dataCache.value.get(cacheKey)
      if (Array.isArray(cachedData) && cachedData.length > 0) {
        await mergeAdditionalData(cachedData, startTime, endTime)
      }
      return
    }

    console.log('🌐 Fetching new data from API:', {
      symbol: props.symbol,
      timeframe: selectedTimeframe.value,
      start: new Date(startTime).toISOString(),
      end: new Date(endTime).toISOString(),
      rangeMinutes
    })

    const response = await fetch(`http://localhost:3000/api/stocks/${props.symbol}/history/range?` +
      new URLSearchParams({
        timeframe: selectedTimeframe.value,
        start: new Date(startTime).toISOString(),
        end: new Date(endTime).toISOString()
      }))

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const result = await response.json()
    const additionalData = result.data || []

    console.log(`📊 API returned ${additionalData.length} data points for range`)

    // Cache the result with size limits.
    if (dataCache.value.size > 20) {
      const firstKey = dataCache.value.keys().next().value
      dataCache.value.delete(firstKey)
      console.log('🗑️ Removed oldest cache entry:', firstKey)
    }
    dataCache.value.set(cacheKey, additionalData)

    if (additionalData.length > 0) {
      console.log(`📊 Merging ${additionalData.length} additional data points`)
      await mergeAdditionalData(additionalData, startTime, endTime)
    }
    else console.log('📊 No additional data available for this range')
  }
  catch (error) {
    console.error('❌ Error loading additional data:', error)
  }
  finally {
    isLoadingAdditionalData.value = false

    // Remove this request from active requests.
    const requestStartBucket = Math.floor(startTime / (15 * 60 * 1000))
    const requestEndBucket = Math.floor(endTime / (15 * 60 * 1000))
    const requestKey = `${props.symbol}-${selectedTimeframe.value}-${requestStartBucket}-${requestEndBucket}`
    activeRequests.value.delete(requestKey)
  }
}

async function mergeAdditionalData(newData, startTime, endTime) {
  if (!newData || newData.length === 0) return

  // Validate that new data is within expected time range.
  const validData = newData.filter(item => {
    const timestamp = item.timestamp
    return timestamp >= startTime - 60000 && timestamp <= endTime + 60000 // 1-minute tolerance
  })

  if (!validData.length) {
    console.log('📊 No valid additional data within expected time range')
    return
  }

  // Use nextTick to ensure we're not in the middle of a reactive update.
  await nextTick()

  // Create a comprehensive data map using timestamps as keys.
  const dataMap = new Map()

  // Track existing data range for validation.
  let existingStart = Infinity
  let existingEnd = -Infinity

  // First, add all existing data to the map.
  historicalData.value.forEach(item => {
    const timestamp = item.timestamp
    dataMap.set(timestamp, item)
    if (timestamp < existingStart) existingStart = timestamp
    if (timestamp > existingEnd) existingEnd = timestamp
  })

  // Then add/update with new data (new data takes precedence for same timestamps).
  let newDataCount = 0
  let updatedCount = 0

  validData.forEach(item => {
    const timestamp = item.timestamp

    // Validate individual data points.
    if (!timestamp || timestamp <= 0) {
      console.warn('📊 Skipping invalid timestamp:', item)
      return
    }

    if (!item.close && !item.price) {
      console.warn('📊 Skipping item without price data:', item)
      return
    }

    // Check if this timestamp already exists.
    const exists = dataMap.has(timestamp)

    // Additional validation: check if data makes sense.
    const price = item.close || item.price
    if (price <= 0 || price > 100000) {
      console.warn('📊 Skipping item with unrealistic price:', price, item)
      return
    }

    // Ensure required fields are present.
    const processedItem = {
      timestamp,
      open: item.open || price,
      high: item.high || price,
      low: item.low || price,
      close: item.close || price,
      volume: item.volume || 0,
      price: price
    }

    dataMap.set(timestamp, processedItem)

    if (exists) updatedCount++
    else newDataCount++
  })

  // Convert map back to sorted array.
  const mergedData = Array.from(dataMap.values()).sort((a, b) => a.timestamp - b.timestamp)

  // Validate the merged data for consistency.
  if (mergedData.length < historicalData.value.length) {
    console.warn('📊 Warning: merged data has fewer points than original', {
      original: historicalData.value.length,
      merged: mergedData.length,
      newAdded: newDataCount
    })
  }

  // Remove duplicates by keeping the last occurrence.
  const deduplicatedData = []
  const seenTimestamps = new Set()

  for (let i = mergedData.length - 1; i >= 0; i--) {
    const item = mergedData[i]
    if (!seenTimestamps.has(item.timestamp)) {
      seenTimestamps.add(item.timestamp)
      deduplicatedData.unshift(item)
    }
  }

  // Update historical data.
  historicalData.value = deduplicatedData

  // Log data range for debugging.
  if (deduplicatedData.length > 0) {
    const newStart = deduplicatedData[0].timestamp
    const newEnd = deduplicatedData[deduplicatedData.length - 1].timestamp

    console.log(`📊 Merged additional data:`, {
      newDataPoints: newDataCount,
      updatedPoints: updatedCount,
      totalPoints: deduplicatedData.length,
      timeRange: {
        start: new Date(newStart).toLocaleString(),
        end: new Date(newEnd).toLocaleString()
      },
      coverage: Math.round((newEnd - newStart) / (60 * 60 * 1000)) + ' hours'
    })
  }
}

// Timeframe & Buffer Utilities
// --------------------------------------------------------
function getTimeframeMs(timeframe) {
  const timeframeMs = {
    '1Min': 60 * 1000,
    '5Min': 5 * 60 * 1000,
    '10Min': 10 * 60 * 1000,
    '15Min': 15 * 60 * 1000,
    '30Min': 30 * 60 * 1000,
    '1Hour': 60 * 60 * 1000,
    '4Hour': 4 * 60 * 60 * 1000,
    '1Day': 24 * 60 * 60 * 1000
  }
  return timeframeMs[timeframe] || 5 * 60 * 1000
}

function getBufferTime(period, currentRange = null) {
  const baseTimes = {
    '1D': 2 * 60 * 60 * 1000,       // 2 hours
    '1W': 24 * 60 * 60 * 1000,      // 1 day
    '1M': 7 * 24 * 60 * 60 * 1000,  // 1 week
    '3M': 14 * 24 * 60 * 60 * 1000  // 2 weeks
  }

  const baseBuffer = baseTimes[period] || baseTimes['1D']

  // For zoom operations, scale with current range if provided.
  if (currentRange) {
    const scaledBuffer = Math.max(currentRange * 0.2, baseBuffer) // 20% of visible range or min buffer.
    const maxBuffer = {
      '1D': 6 * 60 * 60 * 1000,       // 6 hours max
      '1W': 3 * 24 * 60 * 60 * 1000,  // 3 days max
      '1M': 14 * 24 * 60 * 60 * 1000, // 2 weeks max
      '3M': 30 * 24 * 60 * 60 * 1000  // 1 month max
    }[period] || 24 * 60 * 60 * 1000  // 1 day default

    return Math.min(scaledBuffer, maxBuffer)
  }

  return baseBuffer
}

function startMarketStatusMonitoring() {
  if (marketStatusInterval) return

  marketStatusInterval = setInterval(async () => {
    await refreshMarketStatus()
  }, 2 * 60 * 1000) // Every 2 minutes.
}

function stopMarketStatusMonitoring() {
  if (marketStatusInterval) {
    clearInterval(marketStatusInterval)
    marketStatusInterval = null
  }
}

function handleChartViewChange(chart, action) {
  if (action === 'pan' || action === 'zoom') checkAndLoadAdditionalData(chart, action)
}

function setupWebSocket() {
  addMessageHandler('price', handlePriceUpdate)
  addMessageHandler('market-status', handleMarketStatusUpdate)
}

// Data Fetching Functions
// --------------------------------------------------------
async function fetchStockData() {
  if (!props.symbol) return

  try {
    const data = await fetchStock(props.symbol)
    // Ensure market status is always set.
    stock.value = {
      ...stock.value,
      ...data,
      marketState: data.marketState || 'closed',
      marketMessage: data.marketMessage || 'Market Status Unavailable',
      nextOpen: data.nextOpen || null,
      nextClose: data.nextClose || null
    }

    console.log(`📊 Stock data loaded for ${props.symbol}:`, {
      price: stock.value.price,
      marketState: stock.value.marketState,
      marketMessage: stock.value.marketMessage
    })

    subscribeToStock(props.symbol)
  }
  catch (error) {
    console.error(`❌ Error fetching stock data for ${props.symbol}:`, error)
    // Set fallback values if API fails.
    stock.value = {
      ...stock.value,
      marketState: 'closed',
      marketMessage: 'Data Unavailable',
      nextOpen: null,
      nextClose: null
    }
  }
}

async function fetchHistoricalData() {
  if (!props.symbol) return

  try {
    isLoadingHistoricalData.value = true
    dataCache.value.clear()

    // Use smart timeframe selection for initial load.
    if (!isUsingFallbackTimeframe.value) {
      const availableTimeframe = await selectAvailableTimeframe(selectedPeriod.value, selectedTimeframe.value)
      selectedTimeframe.value = availableTimeframe
    }

    console.log(`📊 Fetching historical data for ${props.symbol}, period: ${selectedPeriod.value}, timeframe: ${selectedTimeframe.value}`)
    // Use progressive loading for faster initial display and maximum data retrieval.
    const response = await fetchStockHistoryProgressive(props.symbol, selectedPeriod.value, selectedTimeframe.value)

    // Check for warnings, errors, or fallback data in the response
    if (response?.warning || response?.error) {
      const message = response.error || response.warning
      console.error(`❌ ALPACA DATA ISSUE for ${props.symbol}:`, message)

      // Show alert to user about data issues
      if (response.dataAge) {
        $waveui.notify(`DATA WARNING: ${props.symbol} historical data is ${response.dataAge} hours old.\n\n${message}\n\nNote: Alpaca operates in US Eastern Time. The chart shows old trading session data, not current market data.`, 'warning', 0)
      }
      else $waveui.notify(`DATA ERROR: ${message}`, 'error', 0)
    }

    // Handle fallback data (showing data from last available trading day)
    if (response?.isFallbackData && response?.fallbackMessage) {
      console.log(`📊 Using fallback data for ${props.symbol}: ${response.fallbackMessage}`)

      // Show a less intrusive notification for fallback data
      $waveui.notify(`📊 ${response.fallbackMessage}`, 'info', 5000)
    }

    if (response?.data) {
      historicalData.value = response.data.sort((a, b) => a.timestamp - b.timestamp)

      if (historicalData.value.length > 0) {
        const firstPoint = historicalData.value[0]
        const lastPoint = historicalData.value[historicalData.value.length - 1]
        const prices = historicalData.value.map(d => d.close || d.price || 0)
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)

        console.log(`✅ Loaded ${historicalData.value.length} historical data points:`, {
          symbol: props.symbol,
          period: selectedPeriod.value,
          timeframe: selectedTimeframe.value,
          timeRange: `${new Date(firstPoint.timestamp).toLocaleString()} to ${new Date(lastPoint.timestamp).toLocaleString()}`,
          priceRange: `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`,
          latestPrice: `$${(lastPoint.close || lastPoint.price || 0).toFixed(2)}`,
          samplePoint: firstPoint,
          isProgressive: response.isProgressive || false,
          loadingMore: response.loadingMore || false,
          dataAge: response.dataAge || 0,
          warning: response.warning || null
        })
      }
      else console.log(`✅ Loaded ${historicalData.value.length} historical data points (empty)`)

      // Automatically fetch stats data after main historical data is loaded.
      await fetchStatsHistoricalData()
    }
    else {
      $waveui.notify(`NO DATA: No historical data available for ${props.symbol} from Alpaca API.`, 'error', 0)
      historicalData.value = []
      statsHistoricalData.value = []
    }
  }
  catch (error) {
    $waveui.notify(`API ERROR: Failed to fetch historical data for ${props.symbol}.\n\n${error.message}`, 'error', 0)
    historicalData.value = []
    statsHistoricalData.value = []
  }
  finally {
    isLoadingHistoricalData.value = false
  }
}

async function fetchStatsHistoricalData() {
  if (!props.symbol) return

  try {
    // Use separate request only for stats that need longer timeframe data.
    console.log(`📊 Fetching stats historical data for ${props.symbol} (12M/1Day)`)
    const response = await fetchStockHistoryProgressive(props.symbol, '12M', '1Day')
    if (response?.data) {
      statsHistoricalData.value = response.data.sort((a, b) => a.timestamp - b.timestamp)
      console.log(`✅ Loaded ${statsHistoricalData.value.length} stats historical data points`)
    }
  }
  catch (error) {
    console.error(`❌ Error fetching stats historical data:`, error)
    statsHistoricalData.value = []
  }
}

// UI Event Handlers
// --------------------------------------------------------
function changeChartType(type) {
  chartType.value = type
}

// Enhanced period change with smart timeframe selection.
async function changePeriod(period) {
  console.log(`📊 Changing period to ${period} (smart timeframe selection)`)

  const previousPeriod = selectedPeriod.value
  const previousTimeframe = selectedTimeframe.value

  selectedPeriod.value = period
  const preferredTimeframe = defaultTimeframes[period] || '5Min'

  // Use smart timeframe selection to find available data.
  const availableTimeframe = await selectAvailableTimeframe(period, preferredTimeframe)
  selectedTimeframe.value = availableTimeframe

  // Only clear cache for the old period/timeframe combination.
  const oldCacheKey = `${props.symbol}-${previousPeriod}-${previousTimeframe}`
  if (timeframeDataCache.value.has(oldCacheKey)) {
    // Keep recent cache but clear old one to save memory.
    const cacheKeys = Array.from(timeframeDataCache.value.keys())
    if (cacheKeys.length > 5) {
      // Only keep the 5 most recent cache entries.
      cacheKeys.slice(0, -5).forEach(key => {
        timeframeDataCache.value.delete(key)
      })
    }
  }

  // Reset dynamic loading states.
  userHasPanned.value = false
  isPanning.value = false

  // Clear any pending timers.
  if (panDebounceTimer) {
    clearTimeout(panDebounceTimer)
    panDebounceTimer = null
  }
  if (zoomDebounceTimer) {
    clearTimeout(zoomDebounceTimer)
    zoomDebounceTimer = null
  }

  console.log(`📊 Period changed to ${period} with effective timeframe ${selectedTimeframe.value}`)

  // Fetch data with new period/timeframe combination.
  fetchHistoricalData()
}

// Enhanced timeframe change with smart selection.
async function changeTimeframe(timeframe) {
  console.log(`📊 Changing timeframe to ${timeframe} (smart selection)`)

  isTransitioningTimeframe.value = true
  const previousTimeframe = selectedTimeframe.value

  try {
    // Use smart timeframe selection to find available data.
    const availableTimeframe = await selectAvailableTimeframe(selectedPeriod.value, timeframe)
    selectedTimeframe.value = availableTimeframe

    // Check if we have cached data for this timeframe.
    const cacheKey = `${props.symbol}-${selectedPeriod.value}-${availableTimeframe}`

    if (timeframeDataCache.value.has(cacheKey)) {
      console.log(`📊 Using cached data for ${availableTimeframe}`)
      const cachedData = timeframeDataCache.value.get(cacheKey)

      // Smoothly transition the data instead of replacing it
      await transitionChartData(cachedData)
    }
    else {
      console.log(`📊 Fetching new data for ${availableTimeframe}`)

      // Fetch new data but don't clear existing data until we have the new data
      const response = await fetchStockHistoryProgressive(props.symbol, selectedPeriod.value, availableTimeframe)

      if (response?.data) {
        const newData = response.data.sort((a, b) => a.timestamp - b.timestamp)

        // Cache the new data
        timeframeDataCache.value.set(cacheKey, newData)

        // Smoothly transition to new data
        await transitionChartData(newData)

        console.log(`✅ Smooth transition to ${availableTimeframe} complete with ${newData.length} data points`)
      }
    }
  }
  catch (error) {
    console.error(`❌ Error during timeframe transition:`, error)
    // Revert timeframe on error
    selectedTimeframe.value = previousTimeframe
  }
  finally {
    // Clear transition state quickly.
    setTimeout(() => {
      isTransitioningTimeframe.value = false
    }, 100) // Very short delay to show completion.
  }
}

async function refreshPrice() {
  if (isRefreshing.value) return

  try {
    isRefreshing.value = true
    const response = await fetch(`http://localhost:3000/api/stocks/${props.symbol}/price?fresh=true`)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()
    if (data.price > 0) {
      const oldPrice = stock.value.price
      stock.value.price = data.price
      stock.value.previousPrice = oldPrice

      const timestamp = Date.now()
      priceHistory.value.push({ timestamp, price: data.price })
      if (priceHistory.value.length > 100) priceHistory.value = priceHistory.value.slice(-100)

      updateOHLCData(data.price, timestamp)
      if (realtimeOHLC.value.length > 200) realtimeOHLC.value = realtimeOHLC.value.slice(-200)

      if (historicalData.value.length > 0 && priceHistory.value.length > 50) {
        const totalPoints = historicalData.value.length + priceHistory.value.length
        if (totalPoints > 500) {
          const removePoints = Math.max(10, Math.floor(historicalData.value.length * 0.1))
          const keepHistorical = Math.max(300, historicalData.value.length - removePoints)
          historicalData.value = historicalData.value.slice(-keepHistorical)
        }
      }
    }
  }
  catch (error) {
    console.error(`❌ Error refreshing price for ${props.symbol}:`, error)
  }
  finally {
    isRefreshing.value = false
  }
}

async function refreshMarketStatus() {
  try {
    const response = await fetch('http://localhost:3000/api/market-status')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()
    stock.value = {
      ...stock.value,
      marketState: data.status || 'closed',
      marketMessage: data.message || 'Market Status Updated',
      nextOpen: data.nextOpen,
      nextClose: data.nextClose
    }

    console.log('📊 Market status refreshed:', {
      status: stock.value.marketState,
      message: stock.value.marketMessage
    })
  }
  catch (error) {
    console.error('❌ Error refreshing market status:', error)
    // Don't leave stock in loading state - set reasonable defaults.
    if (!stock.value.marketState || stock.value.marketState === 'unknown' || stock.value.marketMessage === 'Loading...') {
      stock.value.marketState = 'closed'
      stock.value.marketMessage = 'Market Status Unavailable'
    }
  }
}


// Lifecycle
// --------------------------------------------------------
onMounted(async () => {
  setupWebSocket()
  connect()

  // Initialize smart timeframe selection before fetching data.
  const availableTimeframe = await selectAvailableTimeframe(selectedPeriod.value, selectedTimeframe.value)
  selectedTimeframe.value = availableTimeframe

  await Promise.all([fetchStockData(), fetchHistoricalData(), refreshMarketStatus()])
  startMarketStatusMonitoring()
})

onUnmounted(() => {
  stopMarketStatusMonitoring()

  // Clear any pending timers.
  if (panDebounceTimer) {
    clearTimeout(panDebounceTimer)
    panDebounceTimer = null
  }
  if (zoomDebounceTimer) {
    clearTimeout(zoomDebounceTimer)
    zoomDebounceTimer = null
  }

  // Clear active requests.
  activeRequests.value.forEach(request => request.abort())
  activeRequests.value.clear()

  // Clear data to free memory
  priceHistory.value = []
  historicalData.value = []
  statsHistoricalData.value = []
  realtimeOHLC.value = []
  recentTrades.value = []
  timeframeDataCache.value.clear()
  dataCache.value.clear()
})

watch(() => props.symbol, async (newSymbol, oldSymbol) => {
  if (newSymbol === oldSymbol) return

  // Cancel any ongoing requests for the old symbol
  activeRequests.value.forEach(request => request.abort())
  activeRequests.value.clear()

  // Clear all data for symbol change
  priceHistory.value = []
  historicalData.value = []
  statsHistoricalData.value = []
  realtimeOHLC.value = []
  recentTrades.value = []

  // Clear timeframe cache for new symbol.
  timeframeDataCache.value.clear()
  dataCache.value.clear()

  // Reset state.
  userHasPanned.value = false
  isLoadingHistoricalData.value = false

  // Fetch new data.
  await Promise.all([fetchStockData(), fetchHistoricalData()])
}, { immediate: false })

watch(() => historicalData.value.length, (newLength, oldLength) => {
  if (newLength > oldLength) console.log(`📊 Added ${newLength - oldLength} historical data points`)
})
</script>

<style lang="scss">
.ticker-view {
  padding: 2rem;
  margin: 0 auto;

  .price-display .title2 {
    font-size: 2.2rem;
    line-height: 1;
  }

  .side-panel {
    width: 25%;
    min-width: 300px;
  }
}
</style>




