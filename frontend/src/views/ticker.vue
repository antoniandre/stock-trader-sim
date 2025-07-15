<template lang="pug">
.ticker-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.gap4
    ticker-logo(:symbol="symbol" size="lg")
    div
      .w-flex.align-center.justify-space-between.gap2
        w-tag.w-flex.gap2.pr1.no-grow(round bg-color="info-dark4")
          strong.size--lg {{ symbol }}
          .w-icon.size--xs(:class="marketStatusIcon")
        .w-flex.align-center.gap4
          .w-flex.align-center.gap2
            span.size--sm(:class="marketStatusClass")
              | {{ marketStatus.message }}
            span.size--xs.op6(v-if="marketStatus.status === 'open' && marketStatus.nextClose")
              | (closes at {{ new Date(marketStatus.nextClose).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }) }} ET)
            span.size--xs.op6(v-else-if="marketStatus.nextOpen")
              | (opens {{ formatNextOpen(marketStatus.nextOpen) }})
          .w-flex.align-center.gap2.mla
            .w-icon.size--xs(:class="wsConnected ? 'success--bg' : 'yellow--bg'")
            span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
              | {{ wsConnected ? 'Live' : 'Delayed' }}
      h1.title2 {{ stockData?.name || 'Loading...' }}

  //- Stock Details & Trading
  w-grid.gap6.mt4(:columns="{ xs: 1, lg: 2 }")
    //- Left Column: Stock Details & Chart
    div
      //- Price Chart
      .glass-box.pa6
        .w-flex.justify-space-between.align-center.mb4
          .w-flex.align-center.gap6
            .price-display
              .title2.text-bold(v-if="currentPrice > 0")
                span.op6.mr2 $
                span {{ currentPrice.toFixed(2) }}
              .title2.text-bold(v-else)
                span.op6 Price Unavailable
              .caption.mt1.op7 Last updated: {{ lastUpdate }}

            .price-change(v-if="priceChange && currentPrice > 0" :class="priceChange >= 0 ? 'success-light3' : 'error'")
              .text-bold
                span {{ priceChange >= 0 ? '+' : '' }}${{ Math.abs(priceChange).toFixed(2) }}
              .size--sm ({{ priceChange >= 0 ? '+' : '' }}{{ priceChangePercent.toFixed(2) }}%)

            .no-price-info(v-else-if="currentPrice === 0")
              .text-bold.op6 Market data not available
          .period-selector.w-flex.gap2.no-grow
            w-button.period-btn(
              v-for="period in chartPeriods"
              :key="period.value"
              color="base"
              :class="{ 'period-btn--active': selectedPeriod === period.value }"
              @click="changePeriod(period.value)")
              | {{ period.label }}

        .chart-container
          Line(ref="chartRef" :data="chartData" :options="chartOptions")

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
            .mb4.pa3.glass--bg.bdrs2(v-if="orderValue > 0 && currentPrice > 0")
              .w-flex.justify-between
                span.op7 Estimated Total:
                span.text-bold ${{ orderValue.toFixed(2) }}

            //- No Price Data Warning
            .mb4.pa3.error-dark4--bg.bdrs2(v-if="currentPrice === 0")
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
            :disabled="!isOrderValid || currentPrice === 0"
            large)
            strong BUY

          w-button.grow(
            @click="placeOrder('sell')"
            color="error"
            :disabled="!isOrderValid || currentPrice === 0"
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
              .text-bold ${{ trade.price.toFixed(2) }}
              .size--sm.op7 {{ new Date(trade.timestamp).toLocaleTimeString() }}
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { Line } from 'vue-chartjs'
import 'chart.js/auto'
import { fetchStock, fetchStockPrice, subscribeToStock, fetchMarketStatus, fetchStockHistory } from '@/api'
import TickerLogo from '@/components/ticker-logo.vue'

const props = defineProps({
  symbol: { type: String, required: true }
})

// Reactive data
const stockData = ref(null)
const currentPrice = ref(0)
const previousPrice = ref(0)
const priceHistory = ref([])
const historicalData = ref([])
const wsConnected = ref(false)
const lastUpdate = ref('Never')
const selectedPeriod = ref('1D')
const recentTrades = ref([])
const marketStatus = ref({
  status: 'closed',
  message: 'Loading...',
  isWeekend: false
})

// WebSocket
let ws = null

// Chart periods
const chartPeriods = [
  { label: '1D', value: '1D' },
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' }
]

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
const priceChange = computed(() => {
  return previousPrice.value > 0 ? currentPrice.value - previousPrice.value : 0
})

const priceChangePercent = computed(() => {
  return previousPrice.value > 0 ? (priceChange.value / previousPrice.value) * 100 : 0
})

const orderValue = computed(() => {
  if (!orderForm.value.quantity) return 0
  const price = orderForm.value.type === 'limit' ? orderForm.value.limitPrice : currentPrice.value
  return price ? orderForm.value.quantity * price : 0
})

const isOrderValid = computed(() => {
  if (!orderForm.value.quantity || orderForm.value.quantity <= 0) return false
  if (orderForm.value.type === 'limit' && (!orderForm.value.limitPrice || orderForm.value.limitPrice <= 0)) return false
  return true
})

const marketStatusClass = computed(() => {
  switch (marketStatus.value.status) {
    case 'open':
      return 'success'
    case 'premarket':
    case 'afterhours':
      return 'warning'
    case 'closed':
    default:
      return 'error'
  }
})

const marketStatusIcon = computed(() => {
  switch (marketStatus.value.status) {
    case 'open':
      return 'success--bg'
    case 'premarket':
    case 'afterhours':
      return 'warning--bg'
    case 'closed':
    default:
      return 'error--bg'
  }
})

// Chart data
const chartData = computed(() => {
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

  const labels = dataToUse.map(item => {
    const date = new Date(item.timestamp)
    // Format labels based on selected period.
    switch (selectedPeriod.value) {
      case '1D':
        return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      case '1W':
        return date.toLocaleDateString('en-US', {
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      case '1M':
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          hour12: false
        })
      case '3M':
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })
      default:
        return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
    }
  })

  const data = dataToUse.map(item => item.price)

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

// Chart options
const chartOptions = {
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
          const dataIndex = tooltipItems[0].dataIndex
          const item = priceHistory.value[dataIndex]
          if (!item) return tooltipItems[0].label

          return new Date(item.timestamp).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          })
        },
        label(context) {
          const value = context.parsed.y
          return `${props.symbol}: $${value.toFixed(2)}`
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        callback: value => '$' + value.toFixed(2)
      }
    },
    x: {
      grid: { display: false },
      ticks: { color: '#C9D1D9' }
    }
  }
}

// Methods
async function fetchMarketStatusData() {
  try {
    const status = await fetchMarketStatus()
    marketStatus.value = status
  }
  catch (error) {
    console.error('Error fetching market status:', error)
    marketStatus.value = {
      status: 'closed',
      message: 'Unable to determine market status',
      isWeekend: false
    }
  }
}

async function fetchHistoricalData() {
  try {
    console.log(`📊 Fetching historical data for ${props.symbol} (${selectedPeriod.value})...`)
    const data = await fetchStockHistory(props.symbol, selectedPeriod.value)

    if (data.data && data.data.length > 0) {
      historicalData.value = data.data
      console.log(`✅ Loaded ${data.data.length} historical data points for ${props.symbol}`)
    } else {
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
    stockData.value = data

    if (stockData.value) {
      currentPrice.value = stockData.value.price
      previousPrice.value = stockData.value.price

      // Subscribe to WebSocket updates for this stock
      try {
        await subscribeToStock(props.symbol)
        console.log(`📡 Subscribed to ${props.symbol} updates`)
      } catch (subscribeError) {
        console.warn(`⚠️ Failed to subscribe to ${props.symbol}:`, subscribeError)
      }
    }
  }
  catch (error) {
    console.error('Error fetching stock data:', error)

    // If the stock is not found, still try to get price data
    try {
      console.log(`📊 Trying to fetch price for ${props.symbol}...`)
      const priceData = await fetchStockPrice(props.symbol)
      if (priceData.price > 0) {
        currentPrice.value = priceData.price
        previousPrice.value = priceData.price

        // Create basic stock data
        stockData.value = {
          symbol: props.symbol,
          name: props.symbol,
          price: priceData.price,
          exchange: 'Unknown'
        }

        // Subscribe to WebSocket updates
        try {
          await subscribeToStock(props.symbol)
          console.log(`📡 Subscribed to ${props.symbol} updates`)
        } catch (subscribeError) {
          console.warn(`⚠️ Failed to subscribe to ${props.symbol}:`, subscribeError)
        }
      }
    } catch (priceError) {
      console.error('Error fetching stock price:', priceError)
      // Set default values
      stockData.value = {
        symbol: props.symbol,
        name: props.symbol,
        price: 0,
        exchange: 'Unknown'
      }
      currentPrice.value = 0
      previousPrice.value = 0
    }
  }
}

function connectWebSocket() {
  try {
    console.log(`🔌 Connecting to WebSocket for ${props.symbol}...`)

    if (ws) ws.close()

    ws = new WebSocket('ws://localhost:3000')

    ws.onopen = () => {
      console.log('✅ WebSocket connected for ticker view')
      wsConnected.value = true
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)

        if (data.type === 'market-update') {
          const stockUpdate = data.data?.find(stock => stock.symbol === props.symbol)
          if (stockUpdate) {
            updatePrice(stockUpdate.price)
          }
        }

        if (data.type === 'price' && data.symbol === props.symbol) {
          updatePrice(data.price)
        }

        if (data.type === 'trade' && data.symbol === props.symbol) {
          console.log(`📈 New trade for ${props.symbol}:`, data)
          recentTrades.value.unshift({
            side: data.side,
            qty: data.qty,
            price: data.price,
            timestamp: data.timestamp
          })

          // Keep only last 10 trades
          if (recentTrades.value.length > 10) {
            recentTrades.value = recentTrades.value.slice(0, 10)
          }
        }
      }
      catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    ws.onerror = (error) => {
      console.error('❌ WebSocket error:', error)
      wsConnected.value = false
    }

    ws.onclose = () => {
      console.log('🔌 WebSocket disconnected')
      wsConnected.value = false
      // Reconnect after 5 seconds
      setTimeout(connectWebSocket, 5000)
    }
  }
  catch (error) {
    console.error('Failed to create WebSocket:', error)
  }
}

function updatePrice(newPrice) {
  if (newPrice && newPrice !== currentPrice.value) {
    previousPrice.value = currentPrice.value
    currentPrice.value = newPrice
    lastUpdate.value = new Date().toLocaleTimeString()

    // Add to price history
    priceHistory.value.push({
      timestamp: Date.now(),
      price: newPrice
    })

    // Keep only last 100 price points
    if (priceHistory.value.length > 100) {
      priceHistory.value = priceHistory.value.slice(-100)
    }

    // For 1D period, also update historical data with live prices
    if (selectedPeriod.value === '1D' && historicalData.value.length > 0) {
      historicalData.value.push({
        timestamp: Date.now(),
        price: newPrice
      })

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
  await fetchHistoricalData()
}

function formatNextOpen(nextOpenISO) {
  const nextOpen = new Date(nextOpenISO)
  const now = new Date()
  const diffMs = nextOpen - now
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffDays > 0) {
    return `in ${diffDays} day${diffDays > 1 ? 's' : ''}`
  } else if (diffHours > 0) {
    return `in ${diffHours} hour${diffHours > 1 ? 's' : ''}`
  } else {
    return 'soon'
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

    // Reset form
    orderForm.value.quantity = 1
    orderForm.value.limitPrice = null
    orderForm.value.stopLoss = null
  }
  catch (error) {
    console.error('Error placing order:', error)
    alert('Failed to place order')
  }
}

// Lifecycle
onMounted(async () => {
  await fetchStockData()
  await fetchMarketStatusData()
  await fetchHistoricalData()
  connectWebSocket()

  // Update market status every 30 seconds
  const statusInterval = setInterval(fetchMarketStatusData, 30000)

  // Clean up interval on unmount
  onUnmounted(() => {
    clearInterval(statusInterval)
  })
})

onUnmounted(() => {
  if (ws) {
    ws.close()
    ws = null
  }
})

// Watch for symbol changes
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

  .chart-container {height: 400px;}

  .period-selector {
    .period-btn {
      background-color: rgba(255, 255, 255, 0.1);

      &--active {background-color: var(--w-primary-color);}
    }
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
}
</style>
