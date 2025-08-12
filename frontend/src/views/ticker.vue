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
          .w-flex.align-center.gap2
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
    .mdd12.lg7.grow
      //- Price Chart
      .glass-box.pa6
        .chart-wrap
          .chart-info.w-flex.align-center.gap2
            .price-display
              .title2.text-bold(v-if="stock.price")
                span.op6.mr2 {{ stock.currencySymbol }}
                span {{ stock.price.toFixed(2) }}
              .title3(v-else)
                w-icon.mr2.op4(size="1.4rem") wi-info-circle
                span.op6 Price Unavailable
              .caption.mt1.op7.absolute Last updated: {{ lastUpdate }}

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
            @change-chart-type="changeChartType"
            @change-period="changePeriod"
            @change-timeframe="changeTimeframe"
            @reset-zoom-complete="handleResetZoomComplete"
            ref="priceChartRef")

    //- Right Column: Trading Interface & Stats
    .spacer.ma3
    .mdd12.lg5.pl8.grow
      //- Trading Form
      .glass-box.pa6
        .title2.mb4.w-flex.gap2
          a#buy
          | Place
          w-select.no-grow(
            v-model="orderForm.type"
            :items="orderTypes"
            outline
            round)
            template(#selection="{ item }")
              span.size--lg.ml2.mr1.pb2 {{ item.label }}
          | Order

        .w-flex.gap4.wrap
          .grow
            //- Quantity Input
            .mb4
              label.size--sm.op7.mb2 Quantity
              w-input(
                v-model.number="orderForm.quantity"
                type="number"
                min="1"
                placeholder="Number of shares"
                outline)

            //- Limit Price (only for limit orders)
            .mb4(v-if="orderForm.type === 'limit'")
              label.size--sm.op7.mb2 Limit Price
              w-input(
                v-model.number="orderForm.limitPrice"
                type="number"
                step="0.01"
                placeholder="Price per share"
                outline)

            //- Stop Loss (optional)
            .mb4
              label.size--sm.op7.mb2 Stop Loss (Optional)
              w-input(
                v-model.number="orderForm.stopLoss"
                type="number"
                step="0.01"
                placeholder="Stop loss price"
                outline)

            //- Order Value Display
            .pa3.glass--bg.bdrs2(v-if="orderValue > 0 && stock.price > 0")
              .w-flex.justify-between.gap2
                span.op7 Estimated Total:
                span.text-bold {{ stock.currencySymbol }}{{ orderValue.toFixed(2) }}

            //- No Price Data Warning
            .pa3.error-dark4--bg.bdrs2(v-if="stock.price === 0")
              .w-flex.align-center.gap2
                icon.w-icon.error(icon="mdi:alert-triangle")
                span Trading disabled: No current market data available

          //- Quick Actions
          .w-card.bdrs2.pa6.no-grow.lg-grow
            .mb3.text-upper.op6.body Quick Actions
            .w-flex.align-center.gap2
              w-button(
                @click="setQuickQuantity(1)"
                round
                tooltip="1 Share"
                width="40"
                height="40")
                strong.size--xl 1
              w-button(
                @click="setQuickQuantity(10)"
                round
                tooltip="10 Shares"
                width="40"
                height="40")
                strong.size--xl 10
              w-button(
                @click="setQuickQuantity(100)"
                round
                tooltip="100 Shares"
                width="40"
                height="40")
                strong.size--lg 100
              w-button(
                @click="setQuickQuantity(1000)"
                round
                tooltip="1000 Shares"
                width="40"
                height="40")
                strong.size--md 1000
              span Shares

        //- Buy/Sell Buttons
        .w-flex.gap4.mt4
          w-button.grow.py4(
            @click="placeOrder('buy')"
            bg-color="success"
            :disabled="!isOrderValid || stock.price === 0")
            strong BUY

          w-button.grow.py4(
            @click="placeOrder('sell')"
            bg-color="error"
            :disabled="!isOrderValid || stock.price === 0")
            strong SELL

      //- Recent Trades for this symbol
      .glass-box.pa6.mt4(v-if="recentTrades.length")
        .title3.mb4 Recent Trades
        .ova
          .trade-item.w-flex.justify-between.align-center.py2(
            v-for="trade in recentTrades.slice(0, 5)"
            :key="trade.timestamp")
            .w-flex.align-center.gap2
              w-tag(:class="trade.side === 'buy' ? 'success--bg' : 'error--bg'" xs)
                | {{ trade.side.toUpperCase() }}
              span {{ trade.qty }} shares
            .text-right
              .text-bold {{ stock.currencySymbol }}{{ trade.price.toFixed(2) }}
              .size--sm.op7 {{ new Date(trade.timestamp).toLocaleTimeString() }}

      .glass-box.mt4
        StockStatsPanel(
          :stock="stock"
          :current-price="stock.price"
          :currency-symbol="stock.currencySymbol"
          :historical-data="statsHistoricalData"
          :intraday-data="historicalData"
          :price-history="priceHistory")

  //- Fullscreen Chart Dialog
  w-dialog(
    v-model="showDialog"
    :fullscreen="true"
    dialog-class="ma8"
    content-class="pa0")
    .tradingview-chart.chart-fullscreen
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
        @change-chart-type="changeChartType"
        @change-period="changePeriod"
        @change-timeframe="changeTimeframe"
        @reset-zoom-complete="handleResetZoomComplete")
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { fetchStock, fetchStockPrice, fetchStockHistory } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from '@/components/ticker-logo.vue'
import PriceChart from '@/components/price-chart.vue'
import StockStatsPanel from '@/components/stock-stats-panel.vue'

const props = defineProps({
  symbol: { type: String, required: true }
})

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
const selectedTimeframe = ref('5Min')
const chartType = ref('candlestick')
const recentTrades = ref([])
const priceChartRef = ref(null)
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
  { label: '3M', value: '3M' }
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
  ]
}

const defaultTimeframes = {
  '1D': '5Min',
  '1W': '15Min',
  '1M': '1Hour',
  '3M': '1Day'
}

// Trading Form
// --------------------------------------------------------
const orderForm = ref({
  type: 'market',
  side: 'buy',
  quantity: 1,
  limitPrice: 0
})

const orderTypes = [
  { label: 'Market', value: 'market' },
  { label: 'Limit', value: 'limit' }
]

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

// Trading Computed Properties
// --------------------------------------------------------
const orderValue = computed(() => {
  if (!stock.value.price || !orderForm.value.quantity) return 0

  let pricePerShare = stock.value.price
  if (orderForm.value.type === 'limit' && orderForm.value.limitPrice > 0) {
    pricePerShare = orderForm.value.limitPrice
  }

  return pricePerShare * orderForm.value.quantity
})

const isOrderValid = computed(() => {
  if (!orderForm.value.quantity || orderForm.value.quantity <= 0) return false
  if (!stock.value.price || stock.value.price <= 0) return false
  if (orderForm.value.type === 'limit' && (!orderForm.value.limitPrice || orderForm.value.limitPrice <= 0)) return false

  return true
})

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
      onZoomStart: ({ chart }) => {
        console.log('📊 Zoom START')
      },
      onZoomComplete: ({ chart }) => {
        console.log('📊 Zoom COMPLETE')
        handleChartViewChange(chart, 'zoom')
      }
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
        })),
        borderColor: '#10B981',
        backgroundColor: '#10B981'
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
        title: (tooltipItems) => new Date(tooltipItems[0].parsed.x).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }),
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
      adapters: { date: { zone: 'UTC' } },
      time: { unit: chartTimeUnit.value, displayFormats: chartDisplayFormats.value },
      grid: { display: false },
      ticks: { color: '#C9D1D9', maxTicksLimit: 8, source: 'auto' }
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
        title: (tooltipItems) => new Date(tooltipItems[0].parsed.x).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }),
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
      adapters: { date: { zone: 'UTC' } },
      time: { unit: chartTimeUnit.value, displayFormats: chartDisplayFormats.value },
      grid: { display: false },
      ticks: { color: '#C9D1D9', maxTicksLimit: 8, source: 'auto' }
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

function resetZoom() {
  // Trigger reset zoom on the chart component.
  if (priceChartRef.value?.resetZoom) {
    priceChartRef.value.resetZoom()
  }
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
  stock.value.marketState = data.marketState
  stock.value.marketMessage = data.marketMessage
  stock.value.nextOpen = data.nextOpen
  stock.value.nextClose = data.nextClose

  console.log(`📊 Price update for ${data.symbol}: $${oldPrice.toFixed(2)} → $${data.price.toFixed(2)} (${((data.price - oldPrice) / oldPrice * 100).toFixed(2)}%)`, {
    marketState: data.marketState,
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
  stock.value.marketState = data.status
  stock.value.marketMessage = data.message
  stock.value.nextOpen = data.nextOpen
  stock.value.nextClose = data.nextClose
}

// Dynamic Loading Functions
// --------------------------------------------------------
async function checkAndLoadAdditionalData(chart, action = 'pan') {
  if (!chart || !chart.scales || !chart.scales.x) {
    console.log('📊 Skipping additional data check - invalid chart')
    return
  }

  // Use debouncing for both pan and zoom to prevent rapid-fire requests
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

  // Different strategies for zoom vs pan.
  let loadStart, loadEnd

  if (action === 'zoom') {
    // For zoom: load data for the ENTIRE visible range plus reasonable buffer.
    const zoomBuffer = getZoomBufferTime(selectedPeriod.value, currentRange)
    loadStart = viewMin - zoomBuffer
    loadEnd = viewMax + zoomBuffer

    console.log('📊 Zoom operation - loading full visible range:', {
      dataStart: new Date(dataStart).toISOString(),
      dataEnd: new Date(dataEnd).toISOString(),
      loadStart: new Date(loadStart).toISOString(),
      loadEnd: new Date(loadEnd).toISOString(),
      needsEarlierData: loadStart < dataStart,
      needsLaterData: loadEnd > dataEnd,
      zoomBuffer: Math.round(zoomBuffer / 60000) + 'm'
    })
  }
  else {
    // For pan: use smaller buffer approach.
    const bufferTime = getBufferTime(selectedPeriod.value)
    loadStart = viewMin - bufferTime
    loadEnd = viewMax + bufferTime

    console.log('📊 Pan operation - loading buffer range:', {
      dataStart: new Date(dataStart).toISOString(),
      dataEnd: new Date(dataEnd).toISOString(),
      loadStart: new Date(loadStart).toISOString(),
      loadEnd: new Date(loadEnd).toISOString(),
      needsEarlierData: loadStart < dataStart,
      needsLaterData: loadEnd > dataEnd,
      panBuffer: Math.round(bufferTime / 60000) + 'm'
    })
  }

  // Load earlier data if needed.
  if (loadStart < dataStart) {
    console.log(`📊 Loading additional data: ${new Date(loadStart).toISOString()} to ${new Date(dataStart).toISOString()}`)
    await loadAdditionalData(loadStart, dataStart)
  }
  else console.log('📊 No additional data needed')
}

async function loadAdditionalData(startTime, endTime) {
  if (isLoadingAdditionalData.value) {
    console.log('📊 Already loading additional data, skipping request')
    return
  }

  try {
    isLoadingAdditionalData.value = true

    // Create a more granular cache key that prevents overlapping requests
    const startKey = Math.floor(startTime / (60 * 1000)) // Round to minutes
    const endKey = Math.floor(endTime / (60 * 1000))
    const rangeMinutes = endKey - startKey
    const cacheKey = `${props.symbol}-${selectedTimeframe.value}-${startKey}-${endKey}-${rangeMinutes}m`

    // Create a broader request key to prevent overlapping requests
    // Use larger buckets to catch overlapping ranges better
    const requestStartBucket = Math.floor(startTime / (15 * 60 * 1000)) // 15-minute buckets
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

    // Check if we're already loading this range or an overlapping range
    const overlappingRequest = Array.from(activeRequests.value).find(key => {
      if (key.startsWith(`${props.symbol}-${selectedTimeframe.value}-`)) {
        const [, , , startBucket, endBucket] = key.split('-').map(Number)
        // Check for overlap
        return (requestStartBucket <= endBucket && requestEndBucket >= startBucket)
      }
      return false
    })

    if (overlappingRequest) {
      console.log('📊 Overlapping request detected, skipping:', overlappingRequest)
      return
    }

    // Mark this request as active
    activeRequests.value.add(requestKey)

    // Check cache first
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

    // Cache the result with size limits
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

    // Remove this request from active requests
    const requestStartBucket = Math.floor(startTime / (15 * 60 * 1000))
    const requestEndBucket = Math.floor(endTime / (15 * 60 * 1000))
    const requestKey = `${props.symbol}-${selectedTimeframe.value}-${requestStartBucket}-${requestEndBucket}`
    activeRequests.value.delete(requestKey)

    console.log('📊 Request completed, removed from active:', requestKey)
  }
}

async function mergeAdditionalData(newData, expectedStartTime = null, expectedEndTime = null) {
  if (!Array.isArray(newData) || newData.length === 0) {
    console.log('📊 No new data to merge')
    return
  }

  if (!Array.isArray(historicalData.value)) {
    console.log('📊 Initializing historical data with new data')
    historicalData.value = [...newData]
    return
  }

  console.log(`📊 Merging ${newData.length} new data points with ${historicalData.value.length} existing`)

  // Validate that new data is within expected time range
  if (expectedStartTime && expectedEndTime) {
    const filteredNewData = newData.filter(item => {
      return item.timestamp >= expectedStartTime && item.timestamp <= expectedEndTime
    })

    if (filteredNewData.length !== newData.length) {
      console.log(`📊 Filtered new data from ${newData.length} to ${filteredNewData.length} points (time range validation)`)
      newData = filteredNewData
    }
  }

  // Use nextTick to ensure we're not in the middle of a reactive update
  await nextTick()

  // Create a comprehensive data map using timestamps as keys
  const dataMap = new Map()

  // Track existing data range for validation
  const existingTimestamps = historicalData.value.map(item => item.timestamp).sort((a, b) => a - b)
  const existingStart = existingTimestamps[0]
  const existingEnd = existingTimestamps[existingTimestamps.length - 1]

  console.log(`📊 Existing data range: ${new Date(existingStart).toISOString()} to ${new Date(existingEnd).toISOString()}`)

  // First, add all existing data to the map
  historicalData.value.forEach(item => {
    if (item && item.timestamp) {
      dataMap.set(item.timestamp, item)
    }
  })

  // Then add/update with new data (new data takes precedence for same timestamps)
  let addedCount = 0
  let updatedCount = 0
  let skippedCount = 0

  newData.forEach(item => {
    if (item &&
        item.timestamp &&
        typeof item.timestamp === 'number' &&
        typeof item.price === 'number' &&
        item.price > 0 &&
        typeof item.open === 'number' &&
        typeof item.high === 'number' &&
        typeof item.low === 'number' &&
        typeof item.close === 'number') {

      // Check if this timestamp already exists
      const existing = dataMap.has(item.timestamp)

      // Additional validation: check if data makes sense
      const isValidPrice = item.price > 0 && item.open > 0 && item.high > 0 && item.low > 0 && item.close > 0
      const isValidOHLC = item.high >= Math.max(item.open, item.close) &&
                         item.low <= Math.min(item.open, item.close)

      if (!isValidPrice || !isValidOHLC) {
        console.warn('📊 Skipping invalid OHLC data:', item)
        skippedCount++
        return
      }

      dataMap.set(item.timestamp, item)

      if (existing) updatedCount++
      else addedCount++
    }
    else {
      console.warn('📊 Skipping invalid data item:', item)
      skippedCount++
    }
  })

  // Convert map back to sorted array
  const newHistoricalData = Array.from(dataMap.values()).sort((a, b) => a.timestamp - b.timestamp)

  // Validate the merged data for consistency
  const finalTimestamps = newHistoricalData.map(item => item.timestamp)
  const duplicateTimestamps = finalTimestamps.filter((timestamp, index) =>
    finalTimestamps.indexOf(timestamp) !== index
  )

  if (duplicateTimestamps.length > 0) {
    console.error('📊 Found duplicate timestamps after merge:', duplicateTimestamps)
    // Remove duplicates by keeping the last occurrence
    const deduplicatedMap = new Map()
    newHistoricalData.forEach(item => {
      deduplicatedMap.set(item.timestamp, item)
    })
    const deduplicatedData = Array.from(deduplicatedMap.values()).sort((a, b) => a.timestamp - b.timestamp)
    console.log(`📊 Removed ${newHistoricalData.length - deduplicatedData.length} duplicate entries`)
    historicalData.value = deduplicatedData
  }
  else historicalData.value = newHistoricalData

  console.log(`📊 Merge complete: ${addedCount} new points added, ${updatedCount} points updated, ${skippedCount} skipped, total: ${historicalData.value.length}`)

  // Log data range for debugging
  if (historicalData.value.length > 0) {
    const firstPoint = historicalData.value[0]
    const lastPoint = historicalData.value[historicalData.value.length - 1]
    const priceValues = historicalData.value.map(d => d.price)
    const timestamps = historicalData.value.map(d => d.timestamp)

    // Check for any timestamp gaps that might indicate data issues.
    const timeGaps = []
    for (let i = 1; i < timestamps.length; i++) {
      const gap = timestamps[i] - timestamps[i - 1]
      const expectedGap = getTimeframeMs(selectedTimeframe.value)
      if (gap > expectedGap * 2) { // Allow for some flexibility.
        timeGaps.push({
          index: i,
          gap: Math.round(gap / 60000), // Convert to minutes.
          expected: Math.round(expectedGap / 60000)
        })
      }
    }

    if (timeGaps.length > 0) {
      console.warn('📊 Found significant time gaps in data:', timeGaps.slice(0, 5)) // Show first 5 gaps.
    }

    console.log('📊 Final data range after merge:', {
      first: new Date(firstPoint.timestamp).toISOString(),
      last: new Date(lastPoint.timestamp).toISOString(),
      totalPoints: historicalData.value.length,
      priceRange: `$${Math.min(...priceValues).toFixed(2)} - $${Math.max(...priceValues).toFixed(2)}`,
      timeSpan: Math.round((lastPoint.timestamp - firstPoint.timestamp) / (1000 * 60 * 60)) + 'h',
      significantGaps: timeGaps.length
    })
  }
}

// Helper function to get timeframe in milliseconds.
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

function getBufferTime(period) {
  const bufferTimes = {
    '1D': 2 * 60 * 60 * 1000, // 2 hours
    '1W': 24 * 60 * 60 * 1000, // 1 day
    '1M': 7 * 24 * 60 * 60 * 1000, // 1 week
    '3M': 14 * 24 * 60 * 60 * 1000 // 2 weeks
  }
  return bufferTimes[period] || bufferTimes['1D']
}

function getZoomBufferTime(period, currentRange) {
  // For zoom operations, use a buffer that scales with the current range.
  // This ensures we load enough data when zooming out to very wide ranges.
  const baseBuffer = Math.max(currentRange * 0.2, getBufferTime(period)) // 20% of visible range or min buffer.
  const maxBuffer = {
    '1D': 6 * 60 * 60 * 1000,      // 6 hours max
    '1W': 3 * 24 * 60 * 60 * 1000, // 3 days max
    '1M': 14 * 24 * 60 * 60 * 1000, // 2 weeks max
    '3M': 30 * 24 * 60 * 60 * 1000  // 1 month max
  }[period] || 24 * 60 * 60 * 1000 // 1 day default

  const calculatedBuffer = Math.min(baseBuffer, maxBuffer)

  console.log('📊 Zoom buffer calculation:', {
    currentRangeHours: Math.round(currentRange / (1000 * 60 * 60) * 10) / 10,
    baseBufferHours: Math.round(baseBuffer / (1000 * 60 * 60) * 10) / 10,
    maxBufferHours: Math.round(maxBuffer / (1000 * 60 * 60) * 10) / 10,
    finalBufferHours: Math.round(calculatedBuffer / (1000 * 60 * 60) * 10) / 10,
    period
  })

  return calculatedBuffer
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
  console.log(`📊 Chart ${action} detected`)

  if (action === 'pan' || action === 'zoom') {
    checkAndLoadAdditionalData(chart, action)
  }
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
    stock.value = { ...stock.value, ...data }
    subscribeToStock(props.symbol)
  }
  catch (error) {
    console.error(`❌ Error fetching stock data for ${props.symbol}:`, error)
  }
}

async function fetchHistoricalData() {
  if (!props.symbol) return

  try {
    isLoadingHistoricalData.value = true
    dataCache.value.clear()

    console.log(`📊 Fetching historical data for ${props.symbol}, period: ${selectedPeriod.value}, timeframe: ${selectedTimeframe.value}`)
    const response = await fetchStockHistory(props.symbol, selectedPeriod.value, selectedTimeframe.value)
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
          samplePoint: firstPoint
        })
      }
      else console.log(`✅ Loaded ${historicalData.value.length} historical data points (empty)`)
    }
    else {
      console.warn(`⚠️ No historical data available for ${props.symbol}`)
      historicalData.value = []
    }
  }
  catch (error) {
    console.error(`❌ Error fetching historical data for ${props.symbol}:`, error)
    historicalData.value = []
  }
  finally {
    isLoadingHistoricalData.value = false
  }
}

async function fetchStatsHistoricalData() {
  if (!props.symbol) return

  try {
    const response = await fetchStockHistory(props.symbol, '12M', '1Day')
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

function changePeriod(period) {
  console.log(`📊 Changing period to ${period}`)

  selectedPeriod.value = period
  selectedTimeframe.value = defaultTimeframes[period] || '5Min'

  // Clear cache and reset states to prevent data corruption.
  dataCache.value.clear()
  activeRequests.value.clear()
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

  console.log(`📊 Period changed to ${period} with timeframe ${selectedTimeframe.value} - data will be fetched by watcher`)
}

async function changeTimeframe(timeframe) {
  selectedTimeframe.value = timeframe

  // Clear cache and reset states to prevent data corruption.
  dataCache.value.clear()
  activeRequests.value.clear()
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
    stock.value = { ...stock.value, marketState: data.status, marketMessage: data.message, nextOpen: data.nextOpen, nextClose: data.nextClose }
  }
  catch (error) {
    console.error('❌ Error refreshing market status:', error)
  }
}

async function placeOrder(side) {
  try {
    const order = { symbol: props.symbol, side, quantity: orderForm.value.quantity, type: orderForm.value.type, limitPrice: orderForm.value.limitPrice, stopLoss: orderForm.value.stopLoss }
    const orderTypeText = orderForm.value.type.charAt(0).toUpperCase() + orderForm.value.type.slice(1)
    let confirmationText = `${orderTypeText} ${side.toUpperCase()} ${order.quantity} ${props.symbol}`

    if (orderForm.value.type === 'limit') confirmationText += ` @ $${orderForm.value.limitPrice}`
    if (orderForm.value.stopLoss) confirmationText += ` (Stop Loss: $${orderForm.value.stopLoss})`

    alert(`Order placed: ${confirmationText}`)
    orderForm.value.quantity = 1
    orderForm.value.limitPrice = 0
    orderForm.value.stopLoss = null
  }
  catch (error) {
    console.error('❌ Error placing order:', error)
    alert('Failed to place order')
  }
}

function setQuickQuantity(quantity) {
  orderForm.value.quantity = quantity
}

function snapToCurrentTime() {
  console.log('📊 Snapping to current time')

  // Reset all states immediately.
  userHasPanned.value = false
  isPanning.value = false
  dataCache.value.clear()

  // Clear any pending timers.
  if (panDebounceTimer) {
    clearTimeout(panDebounceTimer)
    panDebounceTimer = null
  }

  // Reset chart zoom.
  resetZoom()
}

// Lifecycle
// --------------------------------------------------------
onMounted(async () => {
  setupWebSocket()
  connect()

  await Promise.all([fetchStockData(), fetchHistoricalData(), fetchStatsHistoricalData(), refreshMarketStatus()])
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
  activeRequests.value.clear()
})

watch(() => props.symbol, async (newSymbol, oldSymbol) => {
  if (newSymbol === oldSymbol) return

  priceHistory.value = []
  historicalData.value = []
  statsHistoricalData.value = []
  realtimeOHLC.value = []
  recentTrades.value = []

  await Promise.all([fetchStockData(), fetchHistoricalData(), fetchStatsHistoricalData()])
}, { immediate: false })

watch([selectedPeriod, selectedTimeframe], async () => {
  await fetchHistoricalData()
})

watch(() => historicalData.value.length, (newLength, oldLength) => {
  if (newLength > oldLength) console.log(`📊 Added ${newLength - oldLength} historical data points`)
})
</script>

<style lang="scss">
.ticker-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  .trade-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:last-child {border-bottom: none;}
  }

  .price-display .title2 {
    font-size: 2.2rem;
    line-height: 1;
  }
}
</style>




