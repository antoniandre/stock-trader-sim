<template lang="pug">
.p-4(class="sm:p-6 lg:p-8")
  //- Header
  .mb-8
    h1.text-3xl.font-bold.text-white Simulated Trading Dashboard
    .flex.items-center.gap-2.mt-2(v-if="!loading && !error")
      .w-3.h-3.rounded-full(:class="wsConnected ? 'bg-green-500' : 'bg-yellow-500'")
      span.text-sm(:class="wsConnected ? 'text-green-700' : 'text-yellow-700'")
        | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}

  //- Loading State
  .text-center.py-8(v-if="loading")
    .animate-spin.rounded-full.h-8.w-8.border-b-2.border-blue-400.mx-auto
    p.mt-2.text-gray-400 Loading portfolio data...

  //- Error State
  .bg-red-900.bg-opacity-25.border.border-red-500.rounded-lg.p-4(v-else-if="error")
    p.text-red-300 {{ error }}
    button.mt-2.text-red-300.underline(class="hover:text-red-200" @click="connectWebSocket")
      | Try again

  //- Content
  div(v-else)
    //- Ticker Cards
    .grid.gap-4.mb-6(class="md:grid-cols-3")
      ticker-card(
        v-for="stock in stocks"
        :key="stock.symbol"
        :symbol="stock.symbol"
        :price="stock.price"
        :lastSide="stock.lastSide"
      )

    //- Main Panels
    .grid.gap-6(class="lg:grid-cols-5")
      div(class="lg:col-span-3")
        portfolio-chart(:history="history")
      div(class="lg:col-span-2")
        trade-history(:history="history")
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TickerCard from '@/components/ticker-card.vue'
import PortfolioChart from '@/components/portfolio-chart.vue'
import TradeHistory from '@/components/trade-history.vue'
import { fetchPortfolio } from '@/api'

const stocks = ref([])
const history = ref([])
const loading = ref(true)
const error = ref(null)
const wsConnected = ref(false)
let ws = null
let pollInterval = null

async function fetchPortfolioFallback() {
  try {
    console.log('📊 Fetching portfolio via REST API...')
    const data = await fetchPortfolio()
    stocks.value = data.stocks
    history.value = data.history
    loading.value = false
  } catch (err) {
    error.value = 'Failed to load portfolio data. Make sure the API server is running.'
    console.error('Error fetching portfolio:', err)
    loading.value = false
  }
}

function connectWebSocket() {
  try {
    loading.value = true
    error.value = null

    if (ws) ws.close()

    console.log('🔌 Attempting WebSocket connection to ws://localhost:3000')
    ws = new WebSocket('ws://localhost:3000')

    ws.onopen = () => {
      console.log('🔌 WebSocket connected successfully')
      wsConnected.value = true
      loading.value = false
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type === 'init') {
        stocks.value = data.data.stocks
        history.value = data.data.history
      } else if (data.type === 'trade') {
        history.value = [...history.value, { ...data, symbol: data.symbol }]
      } else if (data.type === 'price') {
        const stock = stocks.value.find(s => s.symbol === data.symbol)
        if (stock) stock.price = data.price
      }
    }

    ws.onerror = (err) => {
      console.error('🔌 WebSocket error:', err)
      wsConnected.value = false
      // Fallback to polling if WebSocket fails
      if (!pollInterval) {
        console.log('🔄 Falling back to REST API polling')
        fetchPortfolioFallback()
        pollInterval = setInterval(fetchPortfolioFallback, 2000)
      }
    }

    ws.onclose = () => {
      console.log('🔌 WebSocket disconnected')
      wsConnected.value = false
    }
  } catch (err) {
    console.error('Failed to create WebSocket:', err)
    error.value = 'Could not connect to the server.'
    loading.value = false
  }
}

onMounted(() => {
  connectWebSocket()
})

onUnmounted(() => {
  if (ws) {
    ws.close()
  }
  if (pollInterval) {
    clearInterval(pollInterval)
  }
})
</script>
