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
          icon(:icon="currentStatus.icon" :class="`market-${currentStatus.status}`" :title="currentStatus.message" style="width: 15px")
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
          .chart-info.w-flex.align-center.gap6
            .price-display
              .title2.text-bold(v-if="stock.price")
                span.op6.mr2 {{ stock.currencySymbol }}
                span {{ stock.price.toFixed(2) }}
              .title3(v-else)
                w-icon.mr2.op4(size="1.4rem") wi-info-circle
                span.op6 Price Unavailable
              .caption.mt1.op7.absolute Last updated: {{ lastUpdate }}

            .price-change.text-center(v-if="priceChange && stock.price" :class="priceChange >= 0 ? 'success-light3' : 'error'")
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
            :key="chartKey"
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
            ref="priceChartRef")

    //- Right Column: Trading Interface & Stats
    .spacer.ma3
    .mdd12.lg5.pl8.grow
      //- Trading Form
      .glass-box.pa6
        .title2.mb4.w-flex.gap2
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
        :key="chartKey"
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
        @change-timeframe="changeTimeframe")
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
const panDebounceTimeout = ref(null)
const chartKey = ref(0)

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

// Chart Data Functions
// --------------------------------------------------------
function createZoomPanConfig() {
  return {
    limits: {
      x: {
        minRange: 60000 * 5,
        min: () => Date.now() - getReasonableTimeRange().min,
        max: () => Date.now()
      }
    },
    pan: {
      enabled: true,
      mode: 'x',
      threshold: 5,
      modifierKey: null,
      onPanStart: ({ chart }) => {
        isPanning.value = true
        console.log('📊 Pan START')
      },
      onPan: ({ chart }) => debouncedPanLoad(chart),
      onPanComplete: ({ chart }) => {
        const currentTime = Date.now()
        const viewMin = chart.scales.x.min
        const viewMax = chart.scales.x.max
        const viewCenter = (viewMin + viewMax) / 2
        const timeDiffFromCenter = Math.abs(currentTime - viewCenter)
        const timeDiffFromMax = currentTime - viewMax
        const isPannedAway = timeDiffFromCenter > 30 * 60 * 1000 || timeDiffFromMax > 10 * 60 * 1000

        userHasPanned.value = isPannedAway
        handleChartViewChange(chart, 'pan')
        isPanning.value = false
      }
    },
    zoom: {
      wheel: { enabled: true, speed: 0.1 },
      pinch: { enabled: true },
      mode: 'x',
      onZoomComplete: ({ chart }) => handleChartViewChange(chart, 'zoom')
    }
  }
}

const lineChartData = computed(() => {
  let dataToUse = []

  if (historicalData.value.length > 0) {
    dataToUse = [...historicalData.value]

    if (!userHasPanned.value && priceHistory.value.length > 0) {
      const lastHistoricalTime = historicalData.value[historicalData.value.length - 1].timestamp
      const newRealTimeData = priceHistory.value.filter(item => item.timestamp > lastHistoricalTime)
      dataToUse = [...dataToUse, ...newRealTimeData]
    }
  } else if (!userHasPanned.value) {
    dataToUse = priceHistory.value
  }

  const chartData = {
    datasets: [{
      label: props.symbol,
      data: dataToUse.map(item => ({ x: item.timestamp, y: item.price })),
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
})

const candlestickChartData = computed(() => {
  let dataToUse = []

  if (historicalData.value.length > 0) {
    dataToUse = [...historicalData.value]

    if (!userHasPanned.value && realtimeOHLC.value.length > 0) {
      const lastHistoricalTime = historicalData.value[historicalData.value.length - 1].timestamp
      const newRealTimeData = realtimeOHLC.value.filter(item => item.timestamp > lastHistoricalTime)
      dataToUse = [...dataToUse, ...newRealTimeData]
    }
  } else if (!userHasPanned.value) {
    dataToUse = realtimeOHLC.value
  }

  return {
    datasets: [{
      label: props.symbol,
      data: dataToUse.map(item => ({
        x: item.timestamp,
        o: item.open,
        h: item.high,
        l: item.low,
        c: item.close
      })),
      borderColor: '#10B981',
      backgroundColor: '#10B981'
    }]
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
  const basePeriods = { '1D': { min: 2 * 24 * 60 * 60 * 1000, max: 10 * 60 * 1000 }, '1W': { min: 14 * 24 * 60 * 60 * 1000, max: 60 * 60 * 1000 }, '1M': { min: 60 * 24 * 60 * 60 * 1000, max: 6 * 60 * 60 * 1000 }, '3M': { min: 180 * 24 * 60 * 60 * 1000, max: 24 * 60 * 60 * 1000 } }
  return basePeriods[selectedPeriod.value] || basePeriods['1D']
}

function getAdditionalDataRange(period) {
  return period
}

function resetZoom() {
  if (priceChartRef.value?.chart) priceChartRef.value.chart.resetZoom()
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
  } else {
    realtimeOHLC.value.push({ timestamp: bucketTime, open: price, high: price, low: price, close: price, volume: 0 })
  }
}

// Message Handlers
// --------------------------------------------------------
function handlePriceUpdate(data) {
  if (data.symbol !== props.symbol) return

  const oldPrice = stock.value.price
  stock.value.price = data.price
  stock.value.previousPrice = oldPrice
  stock.value.marketState = data.marketState
  stock.value.marketMessage = data.marketMessage
  stock.value.nextOpen = data.nextOpen
  stock.value.nextClose = data.nextClose

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

function handleMarketStatusUpdate(data) {
  stock.value.marketState = data.status
  stock.value.marketMessage = data.message
  stock.value.nextOpen = data.nextOpen
  stock.value.nextClose = data.nextClose
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

    const response = await fetchStockHistory(props.symbol, selectedPeriod.value, selectedTimeframe.value)
    if (response?.data) {
      historicalData.value = response.data.sort((a, b) => a.timestamp - b.timestamp)
      console.log(`✅ Loaded ${historicalData.value.length} historical data points`)
    } else {
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
  selectedPeriod.value = period
  selectedTimeframe.value = defaultTimeframes[period] || '5Min'
  dataCache.value.clear()
  userHasPanned.value = false
}

function changeTimeframe(timeframe) {
  selectedTimeframe.value = timeframe
  dataCache.value.clear()
  userHasPanned.value = false
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

function snapToCurrentTime() {
  userHasPanned.value = false
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




