<template lang="pug">
.ticker-view.mt6
  w-button.mt2.ml8.pl2(@click="$router.push(tradingOverviewPath(market))" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .ticker-not-found(v-if="stockNotFound")
    .ticker-not-found__icon 🔍
    .title2.mt2 Symbol not found
    p.op7.mt1 <strong>{{ stock.symbol }}</strong> is not in the tradable securities list.
    p.size--sm.op5.mt1 It may be delisted, unsupported, or mistyped.
    w-button.mt4(round @click="$router.push(tradingOverviewPath(market))") Back to markets

  TickerHeader(v-if="!stockNotFound" :stock="stock")


  //- Stock Details & Trading
  .w-flex.mt4.mdd-column(v-if="!stockNotFound")
    //- Left Column: Stock Details & Chart

    //- Price Chart
    .glass-box.pa6.grow
      .chart-wrap
        PriceChart(
          :symbol="stock.symbol"
          :chart-type="chartType"
          :selected-period="selectedPeriod"
          :selected-timeframe="selectedTimeframe"
          :chart-periods="chartPeriods"
          :available-timeframes="availableTimeframes"
          :is-loading-historical-data="isLoadingHistoricalData"
          :is-loading-additional-data="isLoadingAdditionalData"
          :line-chart-data="lineChartData"
          :candlestick-chart-data="candlestickChartData"
          :effective-timeframe="effectiveTimeframe"
          :is-using-fallback-timeframe="isUsingFallbackTimeframe"
          :show-fullscreen-button="true"
          :stock="stock"
          :last-update="lastUpdate"
          :is-refreshing="isRefreshing"
          :is-transitioning-timeframe="isTransitioningTimeframe"
          @change-chart-type="changeChartType"
          @change-period="changePeriod"
          @change-timeframe="changeTimeframe"
          @reset-zoom-complete="handleResetZoomComplete"
          @toggle-fullscreen="showDialog = true"
          @refresh-price="refreshPrice")

    //- Right Column: Stats, Positions and Trading Interface
    .spacer.ma3.no-grow
    aside.side-panel.w-flex.lgu-column.basis-zero.gap6
      TradingInterface(
        :symbol="stock.symbol"
        :market="market"
        :stock="stock"
        :recent-trades="recentTrades"
        :has-position="!!currentPosition"
        :initial-side="currentPosition ? 'sell' : 'buy'"
        :ticker-quote-pending="tickerQuoteBootstrapPending"
        @order-placed="onOrderPlacedFromPanel")


      DayTradingBotPanel(
        :ticker-symbol="stock.symbol"
        :autonomous-toggle-disabled="!wsConnected"
        :decision="botDecision"
        :loading="botLoading"
        :error="botError"
        :selected-risk-profile="selectedRiskProfile"
        :backtest="backtestResult"
        :backtest-loading="backtestLoading"
        :backtest-error="backtestError"
        :backtest-comparisons="backtestComparisons"
        :evolution="evolutionResult"
        :evolution-loading="evolutionLoading"
        :evolution-error="evolutionError"
        @refresh="refreshBotDecision"
        @run-backtest="runBacktest"
        @run-evolution="runEvolution"
        @update:risk-profile="onRiskProfileChange"
        @auto-fire-detected="handleBotAutoFire"
        :execute-recommendation-loading="botOneClickLoading"
        :execute-recommendation-blocked="botExecuteRecommendationBlocked"
        @execute-recommendation="onBotExecuteRecommendation"
        @update:autonomous="onAutonomousToggle")

      //- Open Orders
      .glass-box.pa6.pt4(v-if="openOrders.length")
        .title2.mb4 Open Orders
        .orders-list
          .order-item.w-flex.justify-space-between.align-center.gap3.bdrs2.bd1.my1.pa2(
            v-for="order in openOrders"
            :key="order.id"
            :class="order.side === 'buy' ? 'order-item--buy' : 'order-item--sell'")
            .order-info.flex1
              .w-flex.align-center.gap2.mb1
                .title3 {{ order.symbol }}
                w-tag(
                  :class="order.side === 'buy' ? 'success--bg' : 'error--bg'"
                  xs) {{ order.side.toUpperCase() }}
              .size--sm.op6 {{ order.qty }} shares @
                span(v-if="order.type === 'limit'" v-html="formatCurrency(order.limit_price || 0, stock.currency, 2, false)")
                span(v-else) Market
            .order-actions
              w-button.pa3(
                @click="cancelOrderHandler(order.id)"
                text
                sm
                color="error"
                icon="wi-cross"
                tooltip="Cancel"
                :tooltip-props="{ alignRight: true }"
                round)

      //- Current Position
      .glass-box.mt4.pa6.pt4(v-if="currentPosition")
        .title2.mb4 Position
        .w-flex.justify-space-between.align-center.py2
          .position-info.w-flex.align-center.gap3
            div
              .title3.mb1 {{ parseFloat(currentPosition.qty) || 0 }} share{{ parseFloat(currentPosition.qty) !== 1 ? 's' : '' }}
              .size--sm.op6 Avg:
                span(v-html="formatCurrency(avgEntryPrice, stock.currency, 2, false)")
            div.mla.text-right
              .title3.mb1(v-html="formatCurrency(unrealizedPL, stock.currency, 2, false)")
              .size--sm.op6(:class="unrealizedPLPercent >= 0 ? 'currency-positive' : 'currency-negative'")
                | ({{ formatPercentage(unrealizedPLPercent) }}) P/L
          .ml4.text-right
            .title3.mb1 Market Value
            .size--sm.op6
              span(v-html="formatCurrency(marketValue, stock.currency, 2, false)")

      .glass-box.pa6.pt4
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
    content-class="pa6 pt3"
    @update:model-value="(val) => { showDialog = val; if (!val) showTradingInterface = false }")
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
    TickerHeader.mb2(:stock="stock" small)
    PriceChart.small(
      :symbol="stock.symbol"
      :chart-type="chartType"
      :selected-period="selectedPeriod"
      :selected-timeframe="selectedTimeframe"
      :chart-periods="chartPeriods"
      :available-timeframes="availableTimeframes"
      :is-loading-historical-data="isLoadingHistoricalData"
      :is-loading-additional-data="isLoadingAdditionalData"
      :line-chart-data="lineChartData"
      :candlestick-chart-data="candlestickChartData"
      :effective-timeframe="effectiveTimeframe"
      :is-using-fallback-timeframe="isUsingFallbackTimeframe"
      :show-fullscreen-button="false"
      :entry-price="avgEntryPrice"
      :stock="stock"
      :last-update="lastUpdate"
      :is-refreshing="isRefreshing"
      :is-transitioning-timeframe="isTransitioningTimeframe"
      show-trading-toggle
      @change-chart-type="changeChartType"
      @change-period="changePeriod"
      @change-timeframe="changeTimeframe"
      @reset-zoom-complete="handleResetZoomComplete"
      @toggle-trading="onToggleTrading"
      @refresh-price="refreshPrice")
    DraggableTradingInterface(
      v-if="showTradingInterface"
      :visible="showTradingInterface"
      :symbol="stock.symbol"
      :market="market"
      :stock="stock"
      :recent-trades="recentTrades"
      :initial-side="tradingInterfaceSide"
      :ticker-quote-pending="tickerQuoteBootstrapPending"
      @close="showTradingInterface = false"
      @order-placed="onOrderPlacedFromPanel")
</template>

<script setup>
import { reactive, ref, computed, onMounted, onUnmounted, onBeforeUnmount, watch, nextTick, inject } from 'vue'
import {
  fetchTicker,
  fetchStock,
  fetchStockHistoryProgressive,
  fetchPositions,
  fetchOrders,
  cancelOrder,
  fetchStockPrice,
  fetchMarketStatus,
  fetchStockHistoryRange,
  fetchDayTradingDecision,
  runDayTradingBacktest,
  evolveDayTradingStrategies,
  invalidateTickerCache
} from '@/api'
import { formatPercentage, formatCurrency } from '@/utils/formatters'
import { useWebSocket } from '@/composables/web-socket'
import { useBotRealtimeEvaluation } from '@/composables/use-bot-realtime'
import PriceChart from '@/components/price-chart.vue'
import StockStatsPanel from '@/components/stock-stats-panel.vue'
import TradingInterface from '@/components/trading-interface.vue'
import TickerHeader from '@/components/ticker-header.vue'
import DraggableTradingInterface from '@/components/draggable-trading-interface.vue'
import DayTradingBotPanel from '@/components/day-trading-bot-panel.vue'
import BotAutoExecutionModal from '@/components/bot-auto-execution-modal.vue'
import { tradingOverviewPath } from '@/utils/trading-routes'
import { isBracketStopChildOrder, tickerRowMatchesStock } from '@/utils/symbol-matching'
import { fireOrderAutomatically, notifyAutoExecution } from '@/api/bot-execution'

const props = defineProps({
  symbol: { type: String, required: true },
  market: { type: String, default: 'stocks' }
})

const $waveui = inject('$waveui')

// Stock Data
// --------------------------------------------------------
const stock = reactive({
  symbol: props.symbol.toUpperCase(),
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
const stockNotFound = ref(false)

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
const showTradingInterface = ref(false)
const tradingInterfaceSide = ref('buy')
const isLoadingHistoricalData = ref(false)
/** True until first batch ticker + history fetch finishes; suppresses misleading order-panel alerts. */
const tickerQuoteBootstrapPending = ref(true)
const positions = ref([])
const orders = ref([])
const selectedRiskProfile = ref('balanced')
const botDecision = ref(null)
const botLoading = ref(false)
const botError = ref('')
const backtestResult = ref(null)
const backtestLoading = ref(false)
const backtestError = ref('')
const backtestComparisons = ref([])
const evolutionResult = ref(null)
const evolutionLoading = ref(false)
const evolutionError = ref('')
const autonomousEnabled = ref(false)
const botOneClickLoading = ref(false)
let marketStatusInterval = null
let botRefreshInterval = null  // Fallback refresh when prices are flat

// Real-time bot evaluation
let botRealtimeEvaluator = null

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

// Bot decision debounce: WS ticks are the primary driver, but we cap evaluations
// at once per BOT_DECISION_INTERVAL_MS to avoid spamming the bot API on every tick.
// The same interval is reused as the fallback poll for flat/no-price-change periods.
let lastBotEval = 0
const BOT_DECISION_INTERVAL_MS = 30_000

// WebSocket Setup
// --------------------------------------------------------
const {
  wsConnected,
  lastUpdate,
  addMessageHandler,
  removeMessageHandler,
  subscribeToStock,
  unsubscribeFromStock: wsUnsubscribeFromStock
} = useWebSocket()

// Store message handler references for cleanup
let priceUpdateHandler = null
let marketStatusHandler = null
let tradeHandler = null
let positionsUpdatedHandler = null

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
      const testResponse = await fetchStockHistoryProgressive(stock.symbol, period, timeframe, props.market)

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

// Get current position for this symbol (case-insensitive matching).
const currentPosition = computed(() => {
  return positions.value.find(p => tickerRowMatchesStock(stock.symbol, p.symbol, props.market)) || null
})

// Get open orders for this symbol.
const openOrders = computed(() => {
  const filtered = orders.value.filter(o => {
    if (isBracketStopChildOrder(o)) return false

    const orderStatus = o.status?.toLowerCase()
    const matchesSymbol = tickerRowMatchesStock(stock.symbol, o.symbol, props.market)
    const matchesStatus = ['new', 'accepted', 'pending_new', 'pending_replace', 'pending_cancel', 'open', 'held'].includes(orderStatus)

    if (matchesSymbol && !matchesStatus) {
      console.log(`⚠️ Order for ${stock.symbol} has unexpected status: ${o.status}`, o)
    }

    // Filter by symbol and ensure status is open (Alpaca returns open orders, but double-check).
    return matchesSymbol && matchesStatus
  })

  if (orders.value.length && filtered.length === 0) {
    console.log(`⚠️ No matching orders for ${stock.symbol}. All orders:`, orders.value.map(o => ({ symbol: o.symbol, status: o.status })))
  }

  return filtered
})

/** Disables bot one-click buy when venue or quote is not ready (aligned with trading-interface market gate). */
const botExecuteRecommendationBlocked = computed(() => {
  if (props.market !== 'crypto') {
    const s = String(stock.marketState || '').toLowerCase()
    if (!s || s === 'unknown') return 'Market status is still loading.'
    if (s !== 'open') return stock.marketMessage || 'Market is closed; stock orders are paused.'
  }
  if (!stock.price || stock.price <= 0) return 'Wait for a live price before sending a market order.'
  if (stock.tradable === false) return 'This symbol is not tradable right now.'
  return ''
})

// Position display values.
const avgEntryPrice = computed(() => {
  if (!currentPosition.value) return 0
  const qty = parseFloat(currentPosition.value.qty) || 0
  const costBasis = parseFloat(currentPosition.value.cost_basis) || 0
  return qty > 0 ? costBasis / qty : 0
})

const unrealizedPL = computed(() => {
  if (!currentPosition.value) return 0
  return parseFloat(currentPosition.value.unrealized_pl) || 0
})

const unrealizedPLPercent = computed(() => {
  if (!currentPosition.value) return 0
  return parseFloat(currentPosition.value.unrealized_plpc) || 0
})

const marketValue = computed(() => {
  if (!currentPosition.value) return 0
  return parseFloat(currentPosition.value.market_value) || 0
})

const chartTimeUnit = computed(() => {
  const unitMap = { '1Min': 'minute', '5Min': 'minute', '15Min': 'minute', '30Min': 'minute', '1Hour': 'hour', '4Hour': 'hour', '1Day': 'day' }
  return unitMap[selectedTimeframe.value] || 'hour'
})

const chartDisplayFormats = computed(() => {
  const formatMap = { 'minute': { minute: 'HH:mm', hour: 'HH:mm', day: 'MMM dd' }, 'hour': { hour: 'HH:mm', day: 'MMM dd' }, 'day': { day: 'MMM dd', month: 'MMM' } }
  return formatMap[chartTimeUnit.value] || formatMap.hour
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
        label: stock.symbol || 'Stock',
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
        label: stock.symbol || 'Stock',
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
  else {
    // Real-time data doesn't include volume - volume is only available from historical bars.
    // During market hours, volume will be updated when historical data refreshes.
    realtimeOHLC.value.push({ timestamp: bucketTime, open: price, high: price, low: price, close: price, volume: 0 })
  }
}

// Message Handlers
// --------------------------------------------------------
function handlePriceUpdate(data) {
  if (data.symbol !== stock.symbol) return

  // Throttle price updates to prevent blinking.
  const now = Date.now()
  if (now - lastPriceUpdate < PRICE_UPDATE_THROTTLE) return
  lastPriceUpdate = now

  const oldPrice = stock.price
  stock.price = data.price
  stock.previousPrice = oldPrice

  // Always update market status if provided, otherwise preserve existing.
  if (data.marketState) {
    stock.marketState = data.marketState
    stock.marketMessage = data.marketMessage || 'Status Updated'
    stock.nextOpen = data.nextOpen
    stock.nextClose = data.nextClose
  }
  // If no market status provided but current status is unknown/loading, set default.
  else if (!stock.marketState || stock.marketState === 'unknown' || stock.marketMessage === 'Loading...') {
    stock.marketState = 'closed'
    stock.marketMessage = 'Market Status Unavailable'
  }

  console.log(`📊 Price update for ${data.symbol}: $${oldPrice.toFixed(2)} → $${data.price.toFixed(2)} (${((data.price - oldPrice) / oldPrice * 100).toFixed(2)}%)`, {
    marketState: stock.marketState,
    marketMessage: stock.marketMessage,
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

  // Re-evaluate bot on price tick, debounced to once per BOT_DECISION_INTERVAL_MS.
  // This keeps the display live via WS without spamming the bot API every second.
  const now2 = Date.now()
  if (now2 - lastBotEval >= BOT_DECISION_INTERVAL_MS) {
    lastBotEval = now2
    refreshBotDecision()
  }
}

function handleMarketStatusUpdate(data) {
  console.log('📊 Market status update received:', data)
  const statusData = data.data || data
  stock.marketState = statusData.status || 'closed'
  stock.marketMessage = statusData.message || 'Market Status Updated'
  stock.nextOpen = statusData.nextOpen
  stock.nextClose = statusData.nextClose
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
    const cacheKey = `${stock.symbol}-${selectedTimeframe.value}-${startKey}-${endKey}-${rangeMinutes}m`

    // Create a broader request key to prevent overlapping requests.
    // Use larger buckets to catch overlapping ranges better.
    const requestStartBucket = Math.floor(startTime / (15 * 60 * 1000)) // 15-minute buckets.
    const requestEndBucket = Math.floor(endTime / (15 * 60 * 1000))
    const requestKey = `${stock.symbol}-${selectedTimeframe.value}-${requestStartBucket}-${requestEndBucket}`

    console.log('📊 Loading data request:', {
      symbol: stock.symbol,
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
      if (key.startsWith(`${stock.symbol}-${selectedTimeframe.value}-`)) {
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
      symbol: stock.symbol,
      timeframe: selectedTimeframe.value,
      start: new Date(startTime).toISOString(),
      end: new Date(endTime).toISOString(),
      rangeMinutes
    })

    const result = await fetchStockHistoryRange(
      stock.symbol,
      selectedTimeframe.value,
      startTime,
      endTime,
      props.market
    )
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
    const requestKey = `${stock.symbol}-${selectedTimeframe.value}-${requestStartBucket}-${requestEndBucket}`
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

  // Fallback: re-evaluate bot decision when prices aren't ticking.
  // handlePriceUpdate already calls refreshBotDecision on each tick; this
  // interval only fires when there has been no price event in the last window,
  // so it doesn't double-call during active market hours.
  botRefreshInterval = setInterval(() => {
    const timeSinceEval = Date.now() - lastBotEval
    if (timeSinceEval >= BOT_DECISION_INTERVAL_MS) {
      lastBotEval = Date.now()
      refreshBotDecision()
    }
  }, BOT_DECISION_INTERVAL_MS)
}

function stopMarketStatusMonitoring() {
  if (botRefreshInterval) {
    clearInterval(botRefreshInterval)
    botRefreshInterval = null
  }
  if (marketStatusInterval) {
    clearInterval(marketStatusInterval)
    marketStatusInterval = null
  }
}

function handleChartViewChange(chart, action) {
  if (action === 'pan' || action === 'zoom') checkAndLoadAdditionalData(chart, action)
}

/** Row symbol (order, position, WS payload) vs ticker route symbol. */
function sameTickerSymbol(rowSymbol, tickerSymbol) {
  return tickerRowMatchesStock(tickerSymbol, rowSymbol, props.market)
}

function handleTrade(data) {
  if (!sameTickerSymbol(data.symbol, stock.symbol)) return
  // Immediate refresh for order list, then a short delayed re-fetch to catch
  // fills that take a moment to process at the broker.
  fetchTickerData()
  setTimeout(fetchTickerData, 1500)
}

/** REST path after confirm — refreshes even if WS trade/positions events are missed. */
function onOrderPlacedFromPanel() {
  invalidateTickerCache(stock.symbol)
  fetchTickerData()
  setTimeout(fetchTickerData, 800)
  setTimeout(fetchTickerData, 2000)
}

function handlePositionsUpdated(data) {
  // Server pushes fresh positions right after every order via POST /api/orders.
  // Apply the update directly instead of waiting for the next WS trade event.
  const allPositions = Array.isArray(data.data) ? data.data : []
  const myPosition = allPositions.find(p => sameTickerSymbol(p.symbol, stock.symbol)) || null
  const existingIndex = positions.value.findIndex(p => tickerRowMatchesStock(stock.symbol, p.symbol, props.market))

  if (myPosition) {
    if (existingIndex >= 0) positions.value[existingIndex] = myPosition
    else positions.value.push(myPosition)
  }
  else if (existingIndex >= 0) {
    positions.value.splice(existingIndex, 1)
  }

  // Also refresh orders for this symbol to reflect any fills
  fetchTickerData()
}

function setupWebSocket() {
  // Store handlers so we can clean them up properly
  priceUpdateHandler = handlePriceUpdate
  marketStatusHandler = handleMarketStatusUpdate
  tradeHandler = handleTrade
  positionsUpdatedHandler = handlePositionsUpdated

  addMessageHandler('price', priceUpdateHandler)
  addMessageHandler('market-status', marketStatusHandler)
  addMessageHandler('trade', tradeHandler)
  addMessageHandler('positions-updated', positionsUpdatedHandler)
}

// Data Fetching Functions
// --------------------------------------------------------
// Batch fetch stock + position + orders + market status in one call.
async function fetchTickerData() {
  if (!stock.symbol) return

  try {
    const data = await fetchTicker(stock.symbol, 'open', 100, props.market)

    // Update stock data.
    if (data.stock) {
      Object.assign(stock, {
        name: data.stock.name || stock.name || '',
        price: data.stock.price || stock.price || 0,
        currency: data.stock.currency || stock.currency || 'USD',
        currencySymbol: data.stock.currencySymbol || stock.currencySymbol || '$',
        marketState: data.stock.marketState || 'closed',
        marketMessage: data.stock.marketMessage || 'Market Status Unavailable',
        nextOpen: data.stock.nextOpen || null,
        nextClose: data.stock.nextClose || null,
        exchange: data.stock.exchange || stock.exchange || 'Unknown',
        tradable: data.stock.tradable !== undefined ? data.stock.tradable : stock.tradable
      })
    }

    // Update positions — always sync, including removal when position is closed.
    const existingIndex = positions.value.findIndex(p => tickerRowMatchesStock(stock.symbol, p.symbol, props.market))
    if (data.position) {
      if (existingIndex >= 0) {
        positions.value[existingIndex] = data.position
      }
      else {
        positions.value.push(data.position)
      }
    }
    else if (existingIndex >= 0) {
      // No position returned — remove stale entry.
      positions.value.splice(existingIndex, 1)
    }

    // Update orders.
    if (data.orders) {
      // Remove prior rows for this ticker (Alpaca may use HYPEUSD vs HYPE/USD for crypto).
      orders.value = orders.value.filter(o => !tickerRowMatchesStock(stock.symbol, o.symbol, props.market))
      orders.value.push(...data.orders)
    }

    console.log(`📊 Ticker data loaded for ${stock.symbol}:`, {
      name: stock.name,
      price: stock.price,
      marketState: stock.marketState,
      hasPosition: !!data.position,
      orderCount: data.orders?.length || 0
    })

    subscribeToStock(stock.symbol)
  }
  catch (error) {
    console.error(`❌ Error fetching ticker data for ${stock.symbol}:`, error)
    if (String(error?.message).includes('404')) {
      stockNotFound.value = true
      return
    }
    // Set fallback values if API fails.
    Object.assign(stock, {
      marketState: 'closed',
      marketMessage: 'Data Unavailable',
      nextOpen: null,
      nextClose: null
    })
  }
}

// Legacy function for compatibility.
async function fetchStockData() {
  await fetchTickerData()
}

async function fetchPositionsData() {
  try {
    positions.value = await fetchPositions()
    console.log(`📊 Positions loaded: ${positions.value.length} positions`)
    console.log(`📊 Position symbols:`, positions.value.map(p => p.symbol))
    console.log(`📊 Looking for position for symbol: ${stock.symbol}`)
    if (currentPosition.value) {
      console.log(`✅ Found position for ${stock.symbol}:`, currentPosition.value)
    }
    else {
      console.log(`⚠️ No position found for ${stock.symbol} in ${positions.value.length} positions`)
    }
  }
  catch (error) {
    console.error('❌ Error fetching positions:', error)
    positions.value = []
  }
}

async function fetchOrdersData() {
  try {
    // First try fetching with status='open'.
    orders.value = await fetchOrders('open', 100)
    console.log(`📊 Orders loaded (status=open): ${orders.value.length} orders`)

    // If no orders found, try fetching all orders as fallback (useful during premarket).
    if (orders.value.length === 0) {
      console.log('⚠️ No orders with status=open, trying to fetch all orders...')
      try {
        // Try with status='all' first, then without status parameter.
        let allOrders = await fetchOrders('all', 100)
        if (allOrders.length === 0) {
          console.log('⚠️ No orders with status=all, trying without status filter...')
          allOrders = await fetchOrders(null, 100)
        }
        console.log(`📊 All orders loaded: ${allOrders.length} orders`)
        if (allOrders.length > 0) {
          // Filter to only open/pending orders.
          orders.value = allOrders.filter(o => {
            const status = o.status?.toLowerCase()
            return ['new', 'accepted', 'pending_new', 'pending_replace', 'pending_cancel', 'open', 'held', 'accepted_for_bidding'].includes(status)
          })
          console.log(`📊 Filtered to ${orders.value.length} open/pending orders`)
        }
      }
      catch (fallbackError) {
        console.warn('⚠️ Fallback fetch failed:', fallbackError)
      }
    }

    if (orders.value.length > 0) {
      console.log(`📊 Order symbols:`, orders.value.map(o => o.symbol))
      console.log(`📊 Order statuses:`, orders.value.map(o => ({ symbol: o.symbol, status: o.status })))
      console.log(`📊 Sample order:`, orders.value[0])
    }
    else {
      console.log('⚠️ No orders returned from backend after all attempts')
    }
  }
  catch (error) {
    console.error('❌ Error fetching orders:', error)
    orders.value = []
  }
}

async function cancelOrderHandler(orderId) {
  try {
    await cancelOrder(orderId)
    invalidateTickerCache(stock.symbol)
    await Promise.all([fetchTickerData(), fetchOrdersData()])
    $waveui.notify('Order cancelled', 'success')
  }
  catch (error) {
    console.error('❌ Error cancelling order:', error)
    $waveui.notify('Failed to cancel order', 'error')
  }
}

async function fetchHistoricalData() {
  if (!stock.symbol) return

  try {
    isLoadingHistoricalData.value = true
    dataCache.value.clear()

    // Use smart timeframe selection for initial load.
    if (!isUsingFallbackTimeframe.value) {
      const availableTimeframe = await selectAvailableTimeframe(selectedPeriod.value, selectedTimeframe.value)
      selectedTimeframe.value = availableTimeframe
    }

    console.log(`📊 Fetching historical data for ${stock.symbol}, period: ${selectedPeriod.value}, timeframe: ${selectedTimeframe.value}`)
    // Use progressive loading for faster initial display and maximum data retrieval.
    const response = await fetchStockHistoryProgressive(stock.symbol, selectedPeriod.value, selectedTimeframe.value, props.market)

    // Check for warnings, errors, or fallback data in the response
    if (response?.warning || response?.error) {
      const message = response.error || response.warning
      console.error(`❌ ALPACA DATA ISSUE for ${stock.symbol}:`, message)

      // Show alert to user about data issues
      if (response.dataAge) {
        $waveui.notify(`DATA WARNING: ${stock.symbol} historical data is ${response.dataAge} hours old.\n\n${message}\n\nNote: Alpaca operates in US Eastern Time. The chart shows old trading session data, not current market data.`, 'warning', 0)
      }
      else $waveui.notify(`DATA ERROR: ${message}`, 'error', 0)
    }

    // Handle fallback data (showing data from last available trading day)
    if (response?.isFallbackData && response?.fallbackMessage) {
      console.log(`📊 Using fallback data for ${stock.symbol}: ${response.fallbackMessage}`)

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
          symbol: stock.symbol,
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
      $waveui.notify(`NO DATA: No historical data available for ${stock.symbol} from Alpaca API.`, 'error', 0)
      historicalData.value = []
      statsHistoricalData.value = []
    }
  }
  catch (error) {
    $waveui.notify(`API ERROR: Failed to fetch historical data for ${stock.symbol}.\n\n${error.message}`, 'error', 0)
    historicalData.value = []
    statsHistoricalData.value = []
  }
  finally {
    isLoadingHistoricalData.value = false
  }
}

async function fetchStatsHistoricalData() {
  if (!stock.symbol) return

  try {
    // Use separate request only for stats that need longer timeframe data.
    console.log(`📊 Fetching stats historical data for ${stock.symbol} (12M/1Day)`)
    const response = await fetchStockHistoryProgressive(stock.symbol, '12M', '1Day', props.market)
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
  const oldCacheKey = `${stock.symbol}-${previousPeriod}-${previousTimeframe}`
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
    const cacheKey = `${stock.symbol}-${selectedPeriod.value}-${availableTimeframe}`

    if (timeframeDataCache.value.has(cacheKey)) {
      console.log(`📊 Using cached data for ${availableTimeframe}`)
      const cachedData = timeframeDataCache.value.get(cacheKey)

      // Smoothly transition the data instead of replacing it
      await transitionChartData(cachedData)
    }
    else {
      console.log(`📊 Fetching new data for ${availableTimeframe}`)

      // Fetch new data but don't clear existing data until we have the new data
      const response = await fetchStockHistoryProgressive(stock.symbol, selectedPeriod.value, availableTimeframe, props.market)

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
    const data = await fetchStockPrice(stock.symbol, true)
    if (data.price > 0) {
      const oldPrice = stock.price
      stock.price = data.price
      stock.previousPrice = oldPrice

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
    console.error(`❌ Error refreshing price for ${stock.symbol}:`, error)
  }
  finally {
    isRefreshing.value = false
  }
}

async function refreshMarketStatus() {
  try {
    // Use ticker batch endpoint which includes market status.
    const data = await fetchTicker(stock.symbol, 'open', 100, props.market)
    if (data.stock) {
      Object.assign(stock, {
        marketState: data.stock.marketState || 'closed',
        marketMessage: data.stock.marketMessage || 'Market Status Updated',
        nextOpen: data.stock.nextOpen,
        nextClose: data.stock.nextClose
      })
    }
    else if (data.marketStatus) {
      Object.assign(stock, {
        marketState: data.marketStatus.status || 'closed',
        marketMessage: data.marketStatus.message || 'Market Status Updated',
        nextOpen: data.marketStatus.nextOpen,
        nextClose: data.marketStatus.nextClose
      })
    }

    console.log('📊 Market status refreshed:', {
      status: stock.marketState,
      message: stock.marketMessage
    })
  }
  catch (error) {
    console.error('❌ Error refreshing market status:', error)
    // Don't leave stock in loading state - set reasonable defaults.
    if (!stock.marketState || stock.marketState === 'unknown' || stock.marketMessage === 'Loading...') {
      stock.marketState = 'closed'
      stock.marketMessage = 'Market Status Unavailable'
    }
  }
}

function onToggleTrading(side) {
  tradingInterfaceSide.value = side
  showTradingInterface.value = !showTradingInterface.value
}

// Lifecycle
// --------------------------------------------------------
async function refreshBotDecision() {
  if (!stock.symbol || !historicalData.value?.length) return

  lastBotEval = Date.now() // reset debounce clock so neither the WS path nor the
                           // fallback interval double-fires right after this call
  botLoading.value = true
  botError.value = ''
  try {
    const closes = historicalData.value.map(item => Number(item?.close)).filter(Number.isFinite)
    const volumes = historicalData.value.map(item => Number(item?.volume)).filter(Number.isFinite)

    const { decision } = await fetchDayTradingDecision({
      symbol: stock.symbol,
      riskProfile: selectedRiskProfile.value,
      currentPrice: stock.price,
      prices: closes,
      volumes,
      currentVolume: volumes.at(-1),
      spreadPct: 0.08,
      positionQty: currentPosition.value ? Number(currentPosition.value.qty || 0) : 0,
      avgEntryPrice: currentPosition.value ? Number(currentPosition.value.avg_entry_price || currentPosition.value.avgEntryPrice || 0) : 0
    })

    botDecision.value = decision
  }
  catch (error) {
    botDecision.value = null
    botError.value = formatBotError(error, 'Unable to generate bot decision.')
  }
  finally {
    botLoading.value = false
  }
}

const MIN_CANDLES = 25

async function runBacktest() {
  if (!stock.symbol || historicalData.value.length < MIN_CANDLES) return

  backtestLoading.value = true
  backtestError.value = ''
  try {
    const candles = historicalData.value
      .map(item => ({
        close: Number(item?.close),
        volume: Number(item?.volume || 0),
        timestamp: item?.timestamp || item?.time || item?.date
      }))
      .filter(item => Number.isFinite(item.close))

    const profiles = ['conservative', 'balanced', 'aggressive']
    const comparisonResults = []

    for (const profile of profiles) {
      const { backtest, capture } = await runDayTradingBacktest({
        symbol: stock.symbol,
        riskProfile: profile,
        candles,
        cohort: ['trend-rider', 'breakout-surfer', 'pullback-prober']
      })
      comparisonResults.push({
        riskProfile: profile,
        totalReturnPct: backtest.totalReturnPct,
        maxDrawdownPct: backtest.maxDrawdownPct,
        tradeCount: backtest.tradeCount,
        winRatePct: backtest.winRatePct,
        realizedPnL: backtest.realizedPnL
      })

      if (profile === selectedRiskProfile.value) {
        backtestResult.value = { ...backtest, captureId: capture?.id || null }
      }
    }

    backtestComparisons.value = comparisonResults
  }
  catch (error) {
    backtestResult.value = null
    backtestComparisons.value = []
    backtestError.value = formatBotError(error, 'Unable to run backtest.')
  }
  finally {
    backtestLoading.value = false
  }
}

async function runEvolution() {
  if (!stock.symbol || historicalData.value.length < MIN_CANDLES) return

  evolutionLoading.value = true
  evolutionError.value = ''
  try {
    const candles = historicalData.value
      .map(item => ({
        close: Number(item?.close),
        volume: Number(item?.volume || 0),
        timestamp: item?.timestamp || item?.time || item?.date
      }))
      .filter(item => Number.isFinite(item.close))

    const { evolution, capture } = await evolveDayTradingStrategies({
      symbol: stock.symbol,
      riskProfile: selectedRiskProfile.value,
      candles
    })

    evolutionResult.value = { ...evolution, captureId: capture?.id || null }
  }
  catch (error) {
    evolutionResult.value = null
    evolutionError.value = formatBotError(error, 'Unable to evolve strategies.')
  }
  finally {
    evolutionLoading.value = false
  }
}

function formatBotError(error, fallback) {
  const message = String(error?.message || '').trim()
  if (!message) return fallback
  if (message.toLowerCase() === 'internal server error') {
    return 'The bot service hit a backend error. Please retry in a moment.'
  }
  if (message.startsWith('HTTP 5')) {
    return 'The bot service is temporarily unavailable. Please retry in a moment.'
  }
  return message
}

function onRiskProfileChange(value) {
  selectedRiskProfile.value = value
  refreshBotDecision()
  if (backtestComparisons.value.length) runBacktest()
  if (evolutionResult.value) runEvolution()
}

function handleBotAutoFire(decision) {
  console.log('🤖 Auto-fire detected from bot panel:', decision)
  // Auto-fire event bubbled from day-trading-bot-panel.
  // The bot-execution module already called emitAutoExecutionEvent internally.
  // Here we can show a notification or trigger additional UI feedback.
  if (decision && decision.action) {
    console.log(`🤖 Auto-fire action: ${decision.action} with confidence ${decision.confidence}%`)
  }
}

async function onBotExecuteRecommendation(decision) {
  const d = decision || botDecision.value
  if (!d?.executionPlan || !['buy', 'add'].includes(d.action)) return

  const blocked = botExecuteRecommendationBlocked.value
  if (blocked) {
    $waveui.notify(blocked, 'warning')
    return
  }

  botOneClickLoading.value = true
  try {
    await fireOrderAutomatically(d, {
      symbol: stock.symbol,
      currentPrice: stock.price,
      positionQty: currentPosition.value ? Number(currentPosition.value.qty || 0) : 0
    })
    $waveui.notify(`Bought ${stock.symbol} from the bot panel (market, bot size plan).`, 'success')
    onOrderPlacedFromPanel()
  }
  catch (error) {
    console.error('Bot one-click buy failed:', error)
    $waveui.notify(error?.message || 'One-click buy failed', 'error')
  }
  finally {
    botOneClickLoading.value = false
  }
}

function onAutonomousToggle(enabled) {
  autonomousEnabled.value = enabled
  console.log(`🤖 Autonomous trading ${enabled ? 'enabled' : 'disabled'}`)
}

function initializeRealtimeBot() {
  const COOLDOWN_MS = 5 * 60 * 1000  // 5 minutes between auto-fires for same symbol
  let lastAutoFireTime = 0
  let isAutoFiring = false

  const intervalId = setInterval(async () => {
    if (!autonomousEnabled.value) return
    if (!botDecision.value) return
    if (isAutoFiring) return

    const decision = botDecision.value
    const confidence = Number(decision.confidence || 0)
    // 'add' is a bullish signal (add to existing position) — treat same as 'buy'
    const isValidAction = ['buy', 'add', 'sell', 'exit', 'trim'].includes(decision.action)

    if (!isValidAction || confidence < 80) return

    const now = Date.now()
    if (now - lastAutoFireTime < COOLDOWN_MS) {
      console.log(`🤖 [REALTIME BOT] Cooldown active for ${stock.symbol}, skipping auto-fire`)
      return
    }

    isAutoFiring = true
    lastAutoFireTime = now

    try {
      console.log(`🤖 [REALTIME BOT] Auto-firing ${decision.action} for ${stock.symbol} @ ${confidence}% confidence`)
      const response = await fireOrderAutomatically(decision, {
        symbol: stock.symbol,
        currentPrice: stock.price,
        positionQty: currentPosition.value ? Number(currentPosition.value.qty || 0) : 0
      })
      notifyAutoExecution(
        `Auto-executed: ${decision.action.toUpperCase()} ${stock.symbol} × order placed @ ${confidence}% confidence`,
        'success'
      )
      console.log(`✅ [REALTIME BOT] Order submitted:`, response)
    }
    catch (error) {
      console.error(`❌ [REALTIME BOT] Auto-fire failed for ${stock.symbol}:`, error)
      notifyAutoExecution(`Auto-execution failed for ${stock.symbol}: ${error.message}`, 'error')
    }
    finally {
      isAutoFiring = false
    }
  }, 10_000) // Re-check every 10 s; refreshBotDecision() already runs on each price tick

  botRealtimeEvaluator = {
    stop() {
      clearInterval(intervalId)
    }
  }
}

onMounted(async () => {
  // Sync autonomous toggle state from localStorage before the interval starts.
  autonomousEnabled.value = localStorage.getItem('autonomousTrading') === 'true'

  setupWebSocket()

  // Initialize smart timeframe selection before fetching data.
  const availableTimeframe = await selectAvailableTimeframe(selectedPeriod.value, selectedTimeframe.value)
  selectedTimeframe.value = availableTimeframe

  // Use batch endpoint to fetch stock + position + orders + market status in one call.
  // Market status is included in ticker data, so we don't need a separate call.
  try {
    await Promise.all([fetchTickerData(), fetchHistoricalData()])
  }
  finally {
    tickerQuoteBootstrapPending.value = false
  }
  await refreshBotDecision()
  await runBacktest()
  await runEvolution()
  startMarketStatusMonitoring()

  // Start real-time bot re-evaluation on WebSocket price events
  initializeRealtimeBot()
})

// Send the unsubscribe message while the WebSocket is still open (singleton, app-owned).
onBeforeUnmount(() => {
  wsUnsubscribeFromStock(stock.symbol)
  console.log(`✅ Unsubscribed from WebSocket for ${stock.symbol}`)
})

onUnmounted(() => {
  console.log(`📊 Cleaning up ticker view for ${stock.symbol}...`)

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

  // Clear real-time bot evaluator if exists
  if (botRealtimeEvaluator) {
    botRealtimeEvaluator.stop()
    botRealtimeEvaluator = null
  }

  // Remove message handlers to prevent memory leaks
  if (priceUpdateHandler) {
    removeMessageHandler('price', priceUpdateHandler)
    priceUpdateHandler = null
  }
  if (marketStatusHandler) {
    removeMessageHandler('market-status', marketStatusHandler)
    marketStatusHandler = null
  }
  if (tradeHandler) {
    removeMessageHandler('trade', tradeHandler)
    tradeHandler = null
  }
  if (positionsUpdatedHandler) {
    removeMessageHandler('positions-updated', positionsUpdatedHandler)
    positionsUpdatedHandler = null
  }

  // Clear data to free memory
  priceHistory.value = []
  historicalData.value = []
  statsHistoricalData.value = []
  realtimeOHLC.value = []
  recentTrades.value = []
  timeframeDataCache.value.clear()
  dataCache.value.clear()

  console.log(`✅ Cleanup complete for ${stock.symbol}`)
})

watch(() => stock.symbol, async (newSymbol, oldSymbol) => {
  if (newSymbol === oldSymbol) return

  tickerQuoteBootstrapPending.value = true

  // Cancel any ongoing requests for the old symbol.
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

  try {
    await Promise.all([fetchTickerData(), fetchHistoricalData()])
  }
  finally {
    tickerQuoteBootstrapPending.value = false
  }
  await refreshBotDecision()
}, { immediate: false })

watch(() => currentPosition.value, () => {
  refreshBotDecision()
})

watch(() => historicalData.value.length, (newLength, oldLength) => {
  if (newLength >= MIN_CANDLES) refreshBotDecision()
  if (newLength === MIN_CANDLES) {
    // First time we cross the threshold — also kick off backtest + evolution
    runBacktest()
    runEvolution()
  }
  if (newLength > oldLength) console.log(`📊 Added ${newLength - oldLength} historical data points`)
})
</script>

<style lang="scss">
.ticker-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  opacity: 0.85;

  &__icon {
    font-size: 3rem;
  }
}

.ticker-view {
  .controls-bar {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }

  .price-display .title2 {
    font-size: 2.2rem;
    line-height: 1;
  }

  .side-panel {min-width: 300px;}

  div.order-item {
    border: 1px solid transparent;

    &--buy {
      background-image: linear-gradient(135deg, color-mix(in srgb, var(--w-success-color) 12%, transparent), transparent 80%);
      border-color: color-mix(in srgb, var(--w-success-color) 40%, transparent);
    }
    &--sell {
      background-image: linear-gradient(135deg, color-mix(in srgb, var(--w-error-color) 12%, transparent), transparent 80%);
      border-color: color-mix(in srgb, var(--w-error-color) 40%, transparent);
    }
  }
}

@media (max-width: 768px) {
  .ticker-view .controls-bar {
    justify-content: flex-start !important;
    margin-bottom: 0.5rem;
  }
}
</style>




