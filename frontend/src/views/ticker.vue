<template lang="pug">
.ticker-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.gap4
    ticker-logo(:symbol="stock.symbol" size="lg")
    div
      .w-flex.align-center.justify-space-between.gap2
        w-tag.w-flex.gap2.pr1.no-grow(round bg-color="info-dark4")
          strong.size--lg {{ stock.symbol }}
          .w-icon.status-icon.size--xs(:title="currentStatus.message" :class="`market-${currentStatus.status}`")
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
  w-grid.gap6.mt4(:columns="{ xs: 1, lg: 2 }")
    //- Left Column: Stock Details & Chart
    div
      //- Price Chart
      .glass-box.pa6
        .chart-container
          //- Chart Controls
          .chart-controls.w-flex.justify-between.align-center.mb4
            .chart-info.w-flex.align-center.gap6
              .price-display
                .title2.text-bold(v-if="stock.price > 0")
                  span.op6.mr2 {{ stock.currencySymbol }}
                  span {{ stock.price.toFixed(2) }}
                .title2.text-bold(v-else)
                  span.op6 Price Unavailable
                .caption.mt1.op7 Last updated: {{ lastUpdate }}

              .price-change(v-if="priceChange && stock.price > 0" :class="priceChange >= 0 ? 'success-light3' : 'error'")
                .text-bold
                  span {{ priceChange >= 0 ? '+' : '' }}{{ stock.currencySymbol }}{{ Math.abs(priceChange).toFixed(2) }}
                .size--sm ({{ priceChange >= 0 ? '+' : '' }}{{ priceChangePercent.toFixed(2) }}%)

              .no-price-info(v-else-if="stock.price === 0")
                .text-bold.op6 Market data not available

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
                  icon.w-icon(icon="material-symbols-light:show-chart" style="width: 22px; height: 22px")
                w-button.pa0(
                  width="26"
                  height="26"
                  :outline="chartType === 'line'"
                  @click="changeChartType('candlestick')"
                  tooltip="Candles"
                  :tooltip-props="{ sm: true }"
                  round)
                  icon.w-icon(icon="material-symbols-light:candlestick-chart-outline-rounded" style="width: 28px; height: 28px")

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
                  outline)

          //- Chart Display
          .chart-display.h-60.relative
            Line(v-if="chartType === 'line'" ref="lineChartRef" :data="lineChartData" :options="lineChartOptions")
            CandlestickChart(v-else ref="candleChartRef" :data="candlestickChartData" :options="candlestickChartOptions")

    //- Right Column: Trading Interface
    div
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
            .mb4.pa3.glass--bg.bdrs2(v-if="orderValue > 0 && stock.price > 0")
              .w-flex.justify-between
                span.op7 Estimated Total:
                span.text-bold {{ stock.currencySymbol }}{{ orderValue.toFixed(2) }}

            //- No Price Data Warning
            .mb4.pa3.error-dark4--bg.bdrs2(v-if="stock.price === 0")
              .w-flex.align-center.gap2
                icon.w-icon.error(icon="mdi:alert-triangle")
                span Trading disabled: No current market data available

          //- Quick Actions
          .w-card.pa6.mt4.no-grow.lg-grow
            .title3.mb4 Quick Actions
            .w-flex.column.gap2
              w-button.fill-width.text-bold(@click="setQuickQuantity(1)" sm) 1 Share
              w-button.fill-width.text-bold(@click="setQuickQuantity(10)" sm) 10 Shares
              w-button.fill-width.text-bold(@click="setQuickQuantity(100)" sm) 100 Shares
              w-button.fill-width.text-bold(@click="setQuickQuantity(1000)" sm) 1000 Shares

        //- Buy/Sell Buttons
        .w-flex.gap4
          w-button.grow(
            @click="placeOrder('buy')"
            color="success"
            :disabled="!isOrderValid || stock.price === 0"
            large)
            strong BUY

          w-button.grow(
            @click="placeOrder('sell')"
            color="error"
            :disabled="!isOrderValid || stock.price === 0"
            large)
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
import 'chart.js/auto'
import 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'
import { fetchStock, fetchStockPrice, fetchStockHistory } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from '@/components/ticker-logo.vue'
import CandlestickChart from '@/components/candlestick-chart.vue'

const props = defineProps({
  symbol: { type: String, required: true }
})

// Consolidated stock object
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
const selectedPeriod = ref('1D')
const selectedTimeframe = ref('1Min')
const chartType = ref('candlestick')
const recentTrades = ref([])

// Use composables for WebSocket and stock status.
const { wsConnected, lastUpdate, connect, addMessageHandler, subscribeToStock } = useWebSocket()
const { currentStatus, formatNextOpenTime } = useStockStatus(stock)

// Chart periods
const chartPeriods = [
  { label: '1D', value: '1D' },
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' }
]

// Available timeframes for each period
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

// Computed available timeframes based on selected period
const availableTimeframes = computed(() => {
  return timeframeOptions[selectedPeriod.value] || timeframeOptions['1D']
})

// Order form
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

// Computed properties
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



// Chart data for line chart
const lineChartData = computed(() => {
  const dataToUse = historicalData.value.length > 0 ? historicalData.value : priceHistory.value

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

// Chart data for candlestick chart
const candlestickChartData = computed(() => {
  const dataToUse = historicalData.value.length > 0 ? historicalData.value : priceHistory.value

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
  animation: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
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
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'HH:mm',
          day: 'MMM dd'
        }
      },
      grid: { display: false },
      ticks: { color: '#C9D1D9' }
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
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'HH:mm',
          day: 'MMM dd'
        }
      },
      grid: { display: false },
      ticks: { color: '#C9D1D9' }
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

async function fetchHistoricalData() {
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
    console.error('Error fetching historical data:', error)
    historicalData.value = []
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
    console.error('Error fetching stock data:', error)

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
      console.error('Error fetching stock price:', priceError)
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

  // Keep track of price history for the chart.
  priceHistory.value.push({
    timestamp: new Date(data.timestamp).getTime(),
    price: data.price
  })

  // Keep only the last 100 price points for performance.
  if (priceHistory.value.length > 100) {
    priceHistory.value = priceHistory.value.slice(-100)
  }

  console.log(`📈 Price update: ${props.symbol} = ${stock.value.currencySymbol}${data.price}`)
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
  if (recentTrades.value.length > 50) {
    recentTrades.value = recentTrades.value.slice(0, 50)
  }
}

// Set up WebSocket handlers.
function setupWebSocket() {
  addMessageHandler('price', handlePriceUpdate)
  addMessageHandler('trade', handleTrade)
}

// Subscribe to stock updates via WebSocket
function subscribeToStockUpdates() {
  // Wait for WebSocket to be connected before subscribing
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
    stock.value = {
      ...stock.value,
      previousPrice: stock.value.price,
      price: newPrice
    }
    lastUpdate.value = new Date().toLocaleTimeString()

    // Add to price history
    priceHistory.value.push({ timestamp: Date.now(), price: newPrice })

    // Keep only last 100 price points
    if (priceHistory.value.length > 100) {
      priceHistory.value = priceHistory.value.slice(-100)
    }

    // For 1D period, also update historical data with live prices
    if (selectedPeriod.value === '1D' && historicalData.value.length > 0) {
      historicalData.value.push({ timestamp: Date.now(), price: newPrice })

      // Keep only relevant data for the period
      const cutoff = Date.now() - (24 * 60 * 60 * 1000)  // 24 hours ago
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

  // Reset timeframe to default for the new period
  const defaultTimeframes = {
    '1D': '1Min',
    '1W': '5Min',
    '1M': '1Hour',
    '3M': '1Day'
  }
  selectedTimeframe.value = defaultTimeframes[period] || '1Min'

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

// formatNextOpen is now imported from utilities.

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

    // For now, just show a confirmation
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
    console.error('Error placing order:', error)
    alert('Failed to place order')
  }
}

// Lifecycle.
onMounted(async () => {
  await fetchStockData()
  await fetchHistoricalData()
  setupWebSocket()
  connect()
})

onUnmounted(() => {
  // WebSocket cleanup is handled by the composable.
})

// Watch for symbol changes.
watch(() => props.symbol, async () => {
  await fetchStockData()
  await fetchHistoricalData()
  priceHistory.value = []
  historicalData.value = []
  recentTrades.value = []
}, { immediate: true })
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

  .chart-display {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);
  }

  .trade-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:last-child {border-bottom: none;}
  }

  .price-display .title2 {
    font-size: 2.2rem;
    line-height: 1;
  }

  .price-change {
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  // Stock status indicator styling.
  .status-icon {background-color: currentColor;}
}
</style>
