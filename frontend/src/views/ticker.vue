<template lang="pug">
.ticker-view
  //- Header with back button
  .w-flex.align-center.gap4.mb6
    w-button(@click="$router.push('/trading')" text round)
      w-icon.mr2 wi-arrow-left
      | Back to Trading
    .w-flex.align-center.gap4
      ticker-logo(:symbol="symbol" size="lg")
      div
        .title1 {{ symbol }}
        .size--sm.op7 {{ stockData?.name || 'Loading...' }}

  //- Stock Details & Trading
  w-grid.gap6(:columns="{ xs: 1, lg: 2 }")
    //- Left Column: Stock Details & Chart
    .w-col
      //- Price & Stats
      .glass-box.pa6.mb4
        .w-flex.justify-between.align-center.mb4
          .title2 Current Price
          .w-flex.align-center.gap2
            .w-icon.size--xs(:class="wsConnected ? 'success--bg' : 'yellow--bg'")
            span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
              | {{ wsConnected ? 'Live' : 'Delayed' }}

        .w-flex.align-center.gap6
          .price-display
            .title1.text-bold
              span.op6.mr2 $
              span {{ currentPrice.toFixed(2) }}
            .size--sm.mt1.op7 Last updated: {{ lastUpdate }}

          .price-change(v-if="priceChange" :class="priceChange >= 0 ? 'success-light3' : 'error'")
            .text-bold
              span {{ priceChange >= 0 ? '+' : '' }}${{ Math.abs(priceChange).toFixed(2) }}
            .size--sm
              | ({{ priceChange >= 0 ? '+' : '' }}{{ priceChangePercent.toFixed(2) }}%)

      //- Price Chart
      .glass-box.pa6
        .w-flex.justify-between.align-center.mb4
          .title2 Price Chart
          .period-selector.w-flex.gap2
            w-button.period-btn(
              v-for="period in chartPeriods"
              :key="period.value"
              color="base"
              :class="{ 'period-btn--active': selectedPeriod === period.value }"
              @click="selectedPeriod = period.value")
              | {{ period.label }}

        .chart-container
          Line(ref="chartRef" :data="chartData" :options="chartOptions")

    //- Right Column: Trading Interface
    .w-col
      //- Trading Form
      .glass-box.pa6
        .title2.mb4 Place Order

        //- Order Type Selection
        .mb4
          label.size--sm.op7.mb2 Order Type
          w-select(
            v-model="orderForm.type"
            :items="orderTypes"
            item-label="label"
            item-value="value"
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
        .mb4.pa3.glass--bg.bdrs2(v-if="orderValue > 0")
          .w-flex.justify-between
            span.op7 Estimated Total:
            span.text-bold ${{ orderValue.toFixed(2) }}

        //- Buy/Sell Buttons
        .w-flex.gap4
          w-button.grow(
            @click="placeOrder('buy')"
            color="success"
            :disabled="!isOrderValid"
            large)
            strong BUY {{ symbol }}

          w-button.grow(
            @click="placeOrder('sell')"
            color="error"
            :disabled="!isOrderValid"
            large)
            strong SELL {{ symbol }}

      //- Quick Actions
      .glass-box.pa6.mt4
        .title3.mb4 Quick Actions
        .w-flex.gap2.wrap
          w-button(@click="setQuickQuantity(1)" sm) 1 Share
          w-button(@click="setQuickQuantity(10)" sm) 10 Shares
          w-button(@click="setQuickQuantity(100)" sm) 100 Shares
          w-button(@click="setQuickQuantity(1000)" sm) 1000 Shares

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
import { fetchAllStocks } from '@/api'
import TickerLogo from '@/components/ticker-logo.vue'

const props = defineProps({
  symbol: { type: String, required: true }
})

// Reactive data
const stockData = ref(null)
const currentPrice = ref(0)
const previousPrice = ref(0)
const priceHistory = ref([])
const wsConnected = ref(false)
const lastUpdate = ref('Never')
const selectedPeriod = ref('1D')
const recentTrades = ref([])

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

// Chart data
const chartData = computed(() => {
  if (!priceHistory.value.length) {
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

  const labels = priceHistory.value.map(item => {
    const date = new Date(item.timestamp)
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  })

  const data = priceHistory.value.map(item => item.price)

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
async function fetchStockData() {
  try {
    const data = await fetchAllStocks()
    stockData.value = data.stocks?.find(stock => stock.symbol === props.symbol)
    if (stockData.value) {
      currentPrice.value = stockData.value.price
      previousPrice.value = stockData.value.price
    }
  }
  catch (error) {
    console.error('Error fetching stock data:', error)
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
  }
}

function setQuickQuantity(quantity) {
  orderForm.value.quantity = quantity
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
  connectWebSocket()
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
  priceHistory.value = []
  recentTrades.value = []
}, { immediate: true })
</script>

<style lang="scss" scoped>
.ticker-view {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.chart-container {
  height: 400px;
}

.period-selector {
  .period-btn {
    background-color: rgba(255, 255, 255, 0.1);

    &--active {
      background-color: var(--w-primary-color);
    }
  }
}

.trade-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }
}

.price-display {
  .title1 {
    font-size: 3rem;
    line-height: 1;
  }
}

.price-change {
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
