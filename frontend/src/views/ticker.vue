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
  .w-flex.wrap.mt4
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
            w-button.pa0.mla(
              width="24"
              height="24"
              @click="refreshPrice"
              :loading="isRefreshing"
              tooltip="Refresh Price"
              :tooltip-props="{ sm: true }"
              round)
              icon.w-icon(icon="mdi:refresh" style="width: 18px")

          //- Chart Controls
          .chart-controls.w-flex.justify-between.align-center.mt6.mb2
            .chart-selectors.w-flex.gap2
              //- Chart Type Toggle
              .chart-type-toggle.w-flex.gap1.no-grow
                w-button.pa0(
                  width="26"
                  height="26"
                  :outline="chartType === 'candlestick'"
                  @click="changeChartType('line')"
                  tooltip="Line"
                  :tooltip-props="{ sm: true }"
                  round)
                  icon.size--lg(icon="material-symbols-light:show-chart")
                w-button.pa0(
                  width="26"
                  height="26"
                  :outline="chartType === 'line'"
                  @click="changeChartType('candlestick')"
                  tooltip="Candles"
                  :tooltip-props="{ sm: true }"
                  round)
                  icon.size--xl(icon="material-symbols-light:candlestick-chart-outline-rounded")

              //- Period Selector
              .period-selector.w-flex.gap1.no-grow.mla
                w-button.period-btn(
                  v-for="period in chartPeriods"
                  :key="period.value"
                  color="base"
                  :class="{ 'period-btn--active': selectedPeriod === period.value }"
                  @click="changePeriod(period.value)")
                  | {{ period.label }}

              //- Timeframe Selector
              .timeframe-selector.w-flex.gap1.no-grow
                w-select.timeframe-btn(
                  v-model="selectedTimeframe"
                  :items="availableTimeframes"
                  @input="changeTimeframe"
                  outline)

          //- Chart Display
          .chart.w-flex.column.align-center.justify-center(:class="`chart--${chartType}`")
            //- Loading state
            .w-flex.column.align-center.justify-center(v-if="isLoadingHistoricalData")
              w-progress.mb4(circle)
              span.text-info Loading chart data...

            //- Charts
            .chart-content.tradingview-chart(v-else ref="chartContainer")
              Line(
                v-if="chartType === 'line'"
                ref="lineChartRef"
                :data="lineChartData"
                :options="lineChartOptions")
              CandlestickChart(
                v-else
                ref="candleChartRef"
                :data="candlestickChartData"
                :options="candlestickChartOptions")

            //- Chart Controls
            .chart-controls-helper.op6(v-if="!isLoadingHistoricalData")
              .w-flex.align-center.gap2.size--xs
                span Mouse wheel to zoom • Click &amp; drag to pan
                w-button.pa0.ml2(
                  width="20"
                  height="20"
                  @click="resetZoom"
                  tooltip="Reset Zoom"
                  :tooltip-props="{ sm: true }"
                  round)
                  icon.w-icon(icon="mdi:refresh" style="width: 16px")

    //- Right Column: Trading Interface
    .mdd12.lg5.pl8.grow
      //- Trading Form
      .glass-box.pa6
        .title2.mb4 Place Order

        .w-flex.gap4.wrap
          .grow
            //- Order Type Selection
            .mb4
              label.size--sm.op7.mb2 Order Type
              w-select(
                v-model="orderForm.type"
                :items="orderTypes"
                outline)

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
        .max-h-40.ova
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart } from 'chart.js'
import 'chart.js/auto'
import 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'
import zoomPlugin from 'chartjs-plugin-zoom'
import { fetchStock, fetchStockPrice, fetchStockHistory } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from '@/components/ticker-logo.vue'
import CandlestickChart from '@/components/candlestick-chart.vue'

// Register zoom plugin.
Chart.register(zoomPlugin)

const props = defineProps({
  symbol: { type: String, required: true }
})

// Consolidated stock object.
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

const priceHistory = ref([])
const historicalData = ref([])
const realtimeOHLC = ref([]) // Real-time OHLC data for candlestick chart.
const selectedPeriod = ref('1D')
const selectedTimeframe = ref('1Min')
const chartType = ref('candlestick')
const recentTrades = ref([])
const lineChartRef = ref(null)
const candleChartRef = ref(null)
const chartContainer = ref(null)
const isRefreshing = ref(false)
const isLoadingHistoricalData = ref(false)
let marketStatusInterval = null

// Use composables for WebSocket and stock status.
const { wsConnected, lastUpdate, connect, addMessageHandler, subscribeToStock } = useWebSocket()
const { currentStatus, formatNextOpenTime } = useStockStatus(stock)

// Chart periods.
const chartPeriods = [
  { label: '1D', value: '1D' },
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' }
]

// Available timeframes for each period.
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
    { label: '1d', value: '1Day' }
  ]
}

// Computed available timeframes based on selected period.
const availableTimeframes = computed(() => {
  return timeframeOptions[selectedPeriod.value] || timeframeOptions['1D']
})

// Order form.
const orderForm = ref({
  type: 'market',
  quantity: 1,
  limitPrice: null,
  stopLoss: null
})

const orderTypes = [
  { label: 'Market Order', value: 'market' },
  { label: 'Limit Order', value: 'limit' },
  { label: 'Stop Loss', value: 'stop' }
]

// Computed properties.
const currentPrice = computed(() => stock.value.price)
const previousPrice = computed(() => stock.value.previousPrice)
const currency = computed(() => stock.value.currency)
const currencySymbol = computed(() => stock.value.currencySymbol)

const priceChange = computed(() => {
  return stock.value.previousPrice > 0 ? stock.value.price - stock.value.previousPrice : 0
})

const priceChangePercent = computed(() => {
  return stock.value.previousPrice > 0 ? (priceChange.value / stock.value.previousPrice) * 100 : 0
})

const orderValue = computed(() => {
  if (!orderForm.value.quantity) return 0
  const price = orderForm.value.type === 'limit' ? orderForm.value.limitPrice : stock.value.price
  return price ? orderForm.value.quantity * price : 0
})

const isOrderValid = computed(() => {
  if (!orderForm.value.quantity || orderForm.value.quantity <= 0) return false
  if (orderForm.value.type === 'limit' && (!orderForm.value.limitPrice || orderForm.value.limitPrice <= 0)) return false
  return true
})

// Chart data for line chart.
const lineChartData = computed(() => {
  // Always combine historical data with real-time price history for seamless transition.
  let dataToUse = []

  if (historicalData.value.length > 0) {
    // Start with historical data.
    dataToUse = [...historicalData.value]

    // Add real-time price updates that don't overlap with historical data.
    if (priceHistory.value.length > 0) {
      const lastHistoricalTime = historicalData.value[historicalData.value.length - 1]?.timestamp || 0
      const newRealTimeData = priceHistory.value.filter(item => item.timestamp > lastHistoricalTime)
      dataToUse = [...dataToUse, ...newRealTimeData]
    }
  }
  // Fallback to real-time data only if no historical data.
  else dataToUse = priceHistory.value

  if (!dataToUse.length) {
    return {
      labels: [],
      datasets: [{
        label: `${props.symbol} Price`,
        data: [],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6
      }]
    }
  }

  const labels = dataToUse.map(item => new Date(item.timestamp))
  const data = dataToUse.map(item => item.close || item.price)

  return {
    labels,
    datasets: [{
      label: `${props.symbol} Price`,
      data,
      borderColor: priceChange.value >= 0 ? '#10B981' : '#EF4444',
      backgroundColor: priceChange.value >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 2,
      pointHoverBorderColor: priceChange.value >= 0 ? '#10B981' : '#EF4444',
      pointHoverBackgroundColor: '#fff'
    }]
  }
})

// Chart data for candlestick chart.
const candlestickChartData = computed(() => {
  // Always combine historical data with real-time OHLC data for seamless transition.
  let dataToUse = []

  if (historicalData.value.length > 0) {
    // Start with historical data.
    dataToUse = [...historicalData.value]

    // Add real-time OHLC updates that don't overlap with historical data.
    if (realtimeOHLC.value.length > 0) {
      const lastHistoricalTime = historicalData.value[historicalData.value.length - 1]?.timestamp || 0
      const newRealTimeData = realtimeOHLC.value.filter(item => item.timestamp > lastHistoricalTime)
      dataToUse = [...dataToUse, ...newRealTimeData]
    }
  }
  // Fallback to real-time data only if no historical data.
  else dataToUse = realtimeOHLC.value

  if (!dataToUse.length) {
    return {
      datasets: [{
        label: `${props.symbol} OHLC`,
        data: [],
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6'
      }]
    }
  }

  const candlestickData = dataToUse.map(item => ({
    x: item.timestamp,
    o: item.open || item.price,
    h: item.high || item.price,
    l: item.low || item.price,
    c: item.close || item.price
  }))

  return {
    datasets: [{
      label: `${props.symbol} OHLC`,
      data: candlestickData,
      borderColor: {
        up: '#10B981',    // Green for bullish candles
        down: '#EF4444',  // Red for bearish candles
        unchanged: '#6B7280'
      },
      backgroundColor: {
        up: 'rgba(16, 185, 129, 0.8)',
        down: 'rgba(239, 68, 68, 0.8)',
        unchanged: 'rgba(107, 114, 128, 0.8)'
      }
    }]
  }
})

// Chart options for line chart
const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  // Disable animations for real-time updates
  animation: { duration: 0 },
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
        title(tooltipItems) {
          return new Date(tooltipItems[0].parsed.x).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })
        },
        label(context) {
          const value = context.parsed.y
          return `${props.symbol}: ${stock.value.currencySymbol}${value.toFixed(2)}`
        }
      }
    },
    zoom: {
      zoom: {
        wheel: { enabled: true, modifierKey: 'ctrl' },
        pinch: { enabled: true },
        mode: 'xy',
        scaleMode: 'xy'
      },
      pan: {
        enabled: true,
        mode: 'xy',
        modifierKey: 'shift'
      }
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'HH:mm',
          day: 'MMM dd',
          week: 'MMM dd',
          month: 'MMM yyyy'
        }
      },
      grid: { display: false },
      ticks: {
        color: '#C9D1D9',
        maxTicksLimit: 8 // Limit number of ticks for better readability
      }
    },
    y: {
      beginAtZero: false,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        callback: value => stock.value.currencySymbol + value.toFixed(2)
      }
    }
  }
}

// Chart options for candlestick chart
const candlestickChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#3B82F6',
      borderWidth: 1,
      callbacks: {
        title(tooltipItems) {
          return new Date(tooltipItems[0].parsed.x).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })
        },
        label(context) {
          const data = context.parsed
          return [
            `Open: ${stock.value.currencySymbol}${data.o.toFixed(2)}`,
            `High: ${stock.value.currencySymbol}${data.h.toFixed(2)}`,
            `Low: ${stock.value.currencySymbol}${data.l.toFixed(2)}`,
            `Close: ${stock.value.currencySymbol}${data.c.toFixed(2)}`
          ]
        }
      }
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
          modifierKey: 'ctrl'
        },
        pinch: { enabled: true },
        mode: 'xy',
        scaleMode: 'xy'
      },
      pan: {
        enabled: true,
        mode: 'xy',
        modifierKey: 'shift'
      }
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'HH:mm',
          day: 'MMM dd',
          week: 'MMM dd',
          month: 'MMM yyyy'
        }
      },
      grid: { display: false },
      ticks: {
        color: '#C9D1D9',
        maxTicksLimit: 8 // Limit number of ticks for better readability
      }
    },
    y: {
      beginAtZero: false,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        callback: value => stock.value.currencySymbol + value.toFixed(2)
      }
    }
  }
}

// Methods.
// fetchMarketStatusData is now handled by the composable.

// Build OHLC data from price updates
function updateOHLCData(price, timestamp) {
  const now = new Date(timestamp)
  const intervalMs = 60000 // 1 minute intervals
  const intervalStart = Math.floor(now.getTime() / intervalMs) * intervalMs

  // Find existing OHLC bar for this interval
  const existingBarIndex = realtimeOHLC.value.findIndex(bar =>
    Math.floor(bar.timestamp / intervalMs) * intervalMs === intervalStart
  )

  if (existingBarIndex !== -1) {
    // Update existing bar
    const bar = realtimeOHLC.value[existingBarIndex]
    realtimeOHLC.value[existingBarIndex] = {
      ...bar,
      high: Math.max(bar.high, price),
      low: Math.min(bar.low, price),
      close: price,
      timestamp: now.getTime() // Update timestamp to latest
    }
  }
  else {
    // Create new bar
    const newBar = {
      timestamp: now.getTime(),
      open: price,
      high: price,
      low: price,
      close: price,
      price: price // For backward compatibility
    }

    // Add to realtime OHLC data
    realtimeOHLC.value.push(newBar)

    // Sort by timestamp
    realtimeOHLC.value.sort((a, b) => a.timestamp - b.timestamp)

    // Keep only last 200 bars for performance
    if (realtimeOHLC.value.length > 200) {
      realtimeOHLC.value = realtimeOHLC.value.slice(-200)
    }
  }
}

async function fetchHistoricalData() {
  isLoadingHistoricalData.value = true
  try {
    console.log(`📊 Fetching historical data for ${props.symbol} (${selectedPeriod.value}, ${selectedTimeframe.value})...`)
    const data = await fetchStockHistory(props.symbol, selectedPeriod.value, selectedTimeframe.value)

    if (data.data && data.data.length > 0) {
      historicalData.value = data.data
      console.log(`✅ Loaded ${data.data.length} historical data points for ${props.symbol}`)
    }
    else {
      console.warn(`⚠️ No historical data available for ${props.symbol}`)
      historicalData.value = []
    }
  }
  catch (error) {
    console.error('❌ Error fetching historical data:', error)
    historicalData.value = []
  }
  finally {
    isLoadingHistoricalData.value = false
  }
}

async function fetchStockData() {
  try {
    console.log(`📊 Fetching data for ${props.symbol}...`)

    // Fetch stock details and price
    const data = await fetchStock(props.symbol)

    if (data) {
      // Update stock object with fetched data
      stock.value = {
        symbol: data.symbol || props.symbol,
        name: data.name || props.symbol,
        price: data.price || 0,
        previousPrice: data.price || 0,
        currency: data.currency || 'USD',
        currencySymbol: data.currencySymbol || '$',
        status: data.status || 'unknown',
        tradable: data.tradable !== false,
        exchange: data.exchange || 'Unknown',
        marketState: data.marketState || 'unknown',
        marketMessage: data.marketMessage || 'Loading...',
        nextOpen: data.nextOpen,
        nextClose: data.nextClose
      }

      // Subscribe to WebSocket updates for this stock
      subscribeToStockUpdates()
    }
  }
  catch (error) {
    console.error('❌ Error fetching stock data:', error)

    // If the stock is not found, still try to get price data
    try {
      console.log(`📊 Trying to fetch price for ${props.symbol}...`)
      const priceData = await fetchStockPrice(props.symbol)
      if (priceData.price > 0) {
        // Update stock object with price data
        stock.value = {
          symbol: props.symbol,
          name: props.symbol,
          price: priceData.price,
          previousPrice: priceData.price,
          currency: priceData.currency || 'USD',
          currencySymbol: priceData.currencySymbol || '$',
          status: 'unknown',
          tradable: true,
          exchange: 'Unknown',
          marketState: 'unknown',
          marketMessage: 'Market status unavailable',
          nextOpen: null,
          nextClose: null
        }

        // Subscribe to WebSocket updates
        subscribeToStockUpdates()
      }
    }
    catch (priceError) {
      console.error('❌ Error fetching stock price:', priceError)
      // Set default values
      stock.value = {
        symbol: props.symbol,
        name: props.symbol,
        price: 0,
        previousPrice: 0,
        currency: 'USD',
        currencySymbol: '$',
        status: 'unknown',
        tradable: true,
        exchange: 'Unknown',
        marketState: 'unknown',
        marketMessage: 'Market data unavailable',
        nextOpen: null,
        nextClose: null
      }
    }
  }
}

// WebSocket message handlers.
function handlePriceUpdate(data) {
  if (data.symbol !== props.symbol) return

  const oldPrice = stock.value.price
  const timestamp = new Date(data.timestamp).getTime()

  // Update stock object with new price data
  stock.value = {
    ...stock.value,
    price: data.price,
    previousPrice: oldPrice,
    currency: data.currency || stock.value.currency,
    currencySymbol: data.currencySymbol || stock.value.currencySymbol,
    marketState: data.marketState || stock.value.marketState,
    marketMessage: data.marketMessage || stock.value.marketMessage,
    nextOpen: data.nextOpen || stock.value.nextOpen,
    nextClose: data.nextClose || stock.value.nextClose
  }

  // Keep track of price history for line chart
  priceHistory.value.push({
    timestamp: timestamp,
    price: data.price
  })

  // Keep only the last 100 price points for performance
  if (priceHistory.value.length > 100) {
    priceHistory.value = priceHistory.value.slice(-100)
  }

  // Update OHLC data for candlestick chart
  updateOHLCData(data.price, timestamp)

  // Keep realtime OHLC data manageable
  if (realtimeOHLC.value.length > 200) {
    realtimeOHLC.value = realtimeOHLC.value.slice(-200)
  }

  // If we have a lot of combined data, trim old historical data to prevent memory issues
  if (historicalData.value.length > 0 && priceHistory.value.length > 50) {
    // Keep only the most recent part of historical data
    const totalPoints = historicalData.value.length + priceHistory.value.length
    if (totalPoints > 500) {
      // Remove only ~10% of historical data instead of fixed 100 points
      const removePoints = Math.max(10, Math.floor(historicalData.value.length * 0.1))
      const keepHistorical = Math.max(300, historicalData.value.length - removePoints)
      historicalData.value = historicalData.value.slice(-keepHistorical)
    }
  }

  console.log(`📈 Price update: ${props.symbol} = ${stock.value.currencySymbol}${data.price}`)
}

function handleMarketStatusUpdate(data) {
  // Update stock object with new market status
  stock.value = {
    ...stock.value,
    marketState: data.status,
    marketMessage: data.message,
    nextOpen: data.nextOpen,
    nextClose: data.nextClose
  }

  console.log(`📊 Market status update: ${data.status} - ${data.message}`)
}

function handleTrade(data) {
  recentTrades.value.unshift({
    symbol: data.symbol,
    side: data.side,
    quantity: data.qty,
    price: data.price,
    timestamp: data.timestamp
  })

  // Keep only the last 50 trades.
  if (recentTrades.value.length > 50) recentTrades.value = recentTrades.value.slice(0, 50)
}

// Set up WebSocket handlers.
function setupWebSocket() {
  addMessageHandler('price', handlePriceUpdate)
  addMessageHandler('trade', handleTrade)
  addMessageHandler('market-status', handleMarketStatusUpdate)
}

// Subscribe to stock updates via WebSocket.
function subscribeToStockUpdates() {
  // Wait for WebSocket to be connected before subscribing.
  const checkConnection = () => {
    if (wsConnected.value) {
      const success = subscribeToStock(props.symbol)
      if (success) console.log(`📡 Subscribed to ${props.symbol} updates via WebSocket`)
      else console.warn(`⚠️ Failed to subscribe to ${props.symbol} via WebSocket`)
    }
    else setTimeout(checkConnection, 100)
  }
  checkConnection()
}

function updatePrice(newPrice) {
  if (newPrice && newPrice !== stock.value.price) {
    const timestamp = Date.now()

    stock.value = {
      ...stock.value,
      previousPrice: stock.value.price,
      price: newPrice
    }
    lastUpdate.value = new Date().toLocaleTimeString()

    // Add to price history for line chart.
    priceHistory.value.push({ timestamp: timestamp, price: newPrice })

    // Keep only last 100 price points.
    if (priceHistory.value.length > 100) {
      priceHistory.value = priceHistory.value.slice(-100)
    }

    // Update OHLC data for candlestick chart.
    updateOHLCData(newPrice, timestamp)

    // For 1D period, also update historical data with live prices.
    if (selectedPeriod.value === '1D' && historicalData.value.length > 0) {
      historicalData.value.push({ timestamp: timestamp, price: newPrice })

      // Keep only relevant data for the period.
      const cutoff = Date.now() - (24 * 60 * 60 * 1000)  // 24 hours ago.
      historicalData.value = historicalData.value.filter(item => item.timestamp > cutoff)
    }
  }
}

function setQuickQuantity(quantity) {
  orderForm.value.quantity = quantity
}

async function changePeriod(period) {
  if (selectedPeriod.value === period) return

  selectedPeriod.value = period

  // Reset timeframe to default for the new period.
  const defaultTimeframes = {
    '1D': '1Min',
    '1W': '5Min',
    '1M': '1Hour',
    '3M': '1Day'
  }
  selectedTimeframe.value = defaultTimeframes[period] || '1Min'

  // Clear real-time OHLC data when changing periods.
  realtimeOHLC.value = []

  await fetchHistoricalData()
}

async function changeTimeframe(timeframe) {
  if (selectedTimeframe.value === timeframe) return

  selectedTimeframe.value = timeframe
  await fetchHistoricalData()
}

function changeChartType(type) {
  if (chartType.value === type) return
  chartType.value = type
}

function resetZoom() {
  // Reset zoom for both chart types.
  if (chartType.value === 'line' && lineChartRef.value?.chart) {
    lineChartRef.value.chart.resetZoom()
  } else if (chartType.value === 'candlestick' && candleChartRef.value?.chart) {
    candleChartRef.value.chart().resetZoom()
  }
}

async function refreshPrice() {
  if (isRefreshing.value) return

  isRefreshing.value = true
  try {
    console.log(`🔄 Refreshing price for ${props.symbol}...`)

    // Fetch fresh price from API.
    const response = await fetch(`http://localhost:3000/api/stocks/${props.symbol}/price?fresh=true`)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()
    if (data.price > 0) {
      // Update stock price.
      const oldPrice = stock.value.price
      stock.value.price = data.price
      stock.value.previousPrice = oldPrice

      console.log(`✅ Price refreshed: ${props.symbol} = $${data.price.toFixed(2)}`)
      lastUpdate.value = new Date().toLocaleTimeString()

      const timestamp = Date.now()

      // Add to price history for line chart.
      priceHistory.value.push({ timestamp: timestamp, price: data.price })

      // Keep only last 100 price points for performance.
      if (priceHistory.value.length > 100) {
        priceHistory.value = priceHistory.value.slice(-100)
      }

      // Update OHLC data for candlestick chart.
      updateOHLCData(data.price, timestamp)

      // Keep realtime OHLC data manageable.
      if (realtimeOHLC.value.length > 200) {
        realtimeOHLC.value = realtimeOHLC.value.slice(-200)
      }

      // If we have a lot of combined data, trim old historical data to prevent memory issues.
      if (historicalData.value.length > 0 && priceHistory.value.length > 50) {
        // Keep only the most recent part of historical data.
        const totalPoints = historicalData.value.length + priceHistory.value.length
        if (totalPoints > 500) {
          // Remove only ~10% of historical data instead of fixed 100 points.
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
    console.log('🔄 Refreshing market status...')

    // Fetch fresh market status from API
    const response = await fetch('http://localhost:3000/api/market-status')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()

    // Update stock object with new market status
    stock.value = {
      ...stock.value,
      marketState: data.status,
      marketMessage: data.message,
      nextOpen: data.nextOpen,
      nextClose: data.nextClose
    }

    console.log(`✅ Market status refreshed: ${data.status} - ${data.message}`)
  }
  catch (error) {
    console.error('❌ Error refreshing market status:', error)
  }
}

function startMarketStatusMonitoring() {
  // Don't start if already running.
  if (marketStatusInterval) return

  // Check market status every 5 minutes as a fallback.
  marketStatusInterval = setInterval(refreshMarketStatus, 5 * 60 * 1000)
  console.log('📊 Market status monitoring started (5-minute intervals)')
}

function stopMarketStatusMonitoring() {
  if (marketStatusInterval) {
    clearInterval(marketStatusInterval)
    marketStatusInterval = null
    console.log('📊 Market status monitoring stopped')
  }
}

async function placeOrder(side) {
  try {
    const order = {
      symbol: props.symbol,
      side,
      quantity: orderForm.value.quantity,
      type: orderForm.value.type,
      limitPrice: orderForm.value.limitPrice,
      stopLoss: orderForm.value.stopLoss
    }

    console.log(`📈 Placing ${side} order for ${props.symbol}:`, order)

    // For now, just show a confirmation.
    const orderTypeText = orderForm.value.type.charAt(0).toUpperCase() + orderForm.value.type.slice(1)
    let confirmationText = `${orderTypeText} ${side.toUpperCase()} ${order.quantity} ${props.symbol}`

    if (orderForm.value.type === 'limit') {
      confirmationText += ` @ $${orderForm.value.limitPrice}`
    }

    if (orderForm.value.stopLoss) {
      confirmationText += ` (Stop Loss: $${orderForm.value.stopLoss})`
    }

    alert(`Order placed: ${confirmationText}`)

    // Reset form.
    orderForm.value.quantity = 1
    orderForm.value.limitPrice = null
    orderForm.value.stopLoss = null
  }
  catch (error) {
    console.error('❌ Error placing order:', error)
    alert('Failed to place order')
  }
}

// Lifecycle.
onMounted(async () => {
  console.log(`🔄 Component mounted for ${props.symbol}`)
  setupWebSocket()
  connect()

  // Wait for stock data, historical data, and market status to load.
  await Promise.all([
    fetchStockData(),
    fetchHistoricalData(),
    refreshMarketStatus()
  ])

  // Start periodic market status monitoring.
  startMarketStatusMonitoring()

  console.log(`✅ Component ready for ${props.symbol}`)
})

onUnmounted(() => {
  // WebSocket cleanup is handled by the composable.
  // Stop market status monitoring.
  stopMarketStatusMonitoring()
  console.log(`🔄 Component unmounted for ${props.symbol}`)
})

// Watch for symbol changes.
watch(() => props.symbol, async (newSymbol, oldSymbol) => {
  if (newSymbol === oldSymbol) return

  console.log(`🔄 Symbol changed from ${oldSymbol} to ${newSymbol}`)

  // Clear existing data.
  priceHistory.value = []
  historicalData.value = []
  realtimeOHLC.value = []
  recentTrades.value = []

  // Fetch new data.
  await Promise.all([
    fetchStockData(),
    fetchHistoricalData()
  ])
}, { immediate: false })

// Watch for period/timeframe changes.
watch([selectedPeriod, selectedTimeframe], async () => {
  await fetchHistoricalData()
})
</script>

<style lang="scss">
.ticker-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  .chart-controls {
    flex-wrap: wrap;
    gap: 1rem;

    .chart-info {
      flex: 1;
      min-width: 300px;
    }

    .chart-selectors {
      flex-wrap: wrap;
      align-items: center;
    }
  }

  .timeframe-selector .w-select__selection-wrap {min-height: 24px;}
  .period-selector, .chart-type-toggle {
    .period-btn, .chart-type-btn {
      min-width: 40px;
      font-size: 12px;
      padding: 6px 12px;
      background-color: rgba(255, 255, 255, 0.1);

      &--active {
        background-color: var(--w-primary-color);
        color: white;
      }
    }
  }

  .timeframe-selector {
    .timeframe-btn {
      &--active {
        background-color: var(--w-info-color);
        color: white;
      }
    }
  }

  .chart-type-toggle {
    .chart-type-btn {
      &--active {
        background-color: var(--w-secondary-color);
        color: white;
      }
    }
  }

  .chart {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);

    &--line {height: 450px;}
    &--candlestick {height: 450px;}
  }

  .chart-controls-helper {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    padding: 6px 10px;
    backdrop-filter: blur(10px);
    color: rgba(255, 255, 255, 0.8);
    font-size: 11px;
    transition: opacity 0.3s ease;

    &:hover {opacity: 1;}
  }

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
