<template lang="pug">
.p-4(class="sm:p-6 lg:p-8")
  //- Header
  .mb-8
    h1.text-3xl.font-bold.text-white Trading Dashboard
    .flex.items-center.gap-4.mt-4
      //- Search Bar
      .flex-1
        input.w-full.bg-gray-800.border.border-gray-700.rounded-lg.px-4.py-2.text-white(
          type="text"
          placeholder="Search stocks..."
          v-model="searchQuery"
        )
      //- Connection Status
      .flex.items-center.gap-2
        .w-3.h-3.rounded-full(class="wsConnected ? 'bg-green-500' : 'bg-yellow-500'")
        span.text-sm(class="wsConnected ? 'text-green-700' : 'text-yellow-700'")
          | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}

  //- Loading State
  .text-center.py-8(v-if="loading")
    .animate-spin.rounded-full.h-8.w-8.border-b-2.border-blue-400.mx-auto
    p.mt-2.text-gray-400 Loading stocks...

  //- Error State
  .bg-red-900.bg-opacity-25.border.border-red-500.rounded-lg.p-4(v-else-if="error")
    p.text-red-300 {{ error }}
    button.mt-2.text-red-300.underline(class="hover:text-red-200" @click="connectWebSocket")
      | Try again

  //- Content
  div(v-else)
    //- Stats
    .grid.gap-4.mb-6(class="md:grid-cols-3")
      .bg-gray-800.rounded-lg.p-4.border.border-gray-700
        .text-sm.text-gray-400 Total Stocks
        .text-2xl.font-bold.text-white {{ filteredStocks.length }}
      .bg-gray-800.rounded-lg.p-4.border.border-gray-700
        .text-sm.text-gray-400 Last Update
        .text-lg.font-semibold.text-white {{ lastUpdate }}
      .bg-gray-800.rounded-lg.p-4.border.border-gray-700
        .text-sm.text-gray-400 Connection
        .text-lg.font-semibold(class="wsConnected ? 'text-green-400' : 'text-yellow-400'")
          | {{ wsConnected ? 'WebSocket' : 'Polling' }}

    //- Stocks Table
    .bg-gray-800.rounded-xl.border.border-gray-700.overflow-hidden
      .overflow-x-auto
        table.w-full
          thead.bg-gray-900
            tr
              th.px-6.py-3.text-left.text-xs.font-medium.text-gray-300.uppercase.tracking-wider Symbol
              th.px-6.py-3.text-left.text-xs.font-medium.text-gray-300.uppercase.tracking-wider Name
              th.px-6.py-3.text-right.text-xs.font-medium.text-gray-300.uppercase.tracking-wider Price
              th.px-6.py-3.text-center.text-xs.font-medium.text-gray-300.uppercase.tracking-wider Actions
          tbody.divide-y.divide-gray-700
            tr(v-for="stock in paginatedStocks" :key="stock.symbol" class="hover:bg-gray-700")
              td.px-6.py-4.whitespace-nowrap
                .flex.items-center
                  span.text-sm.font-medium.text-white {{ stock.symbol }}
                  span.ml-2.px-2.py-1.text-xs.rounded-full.bg-gray-600.text-gray-300 {{ stock.exchange }}
              td.px-6.py-4.whitespace-nowrap
                span.text-sm.text-gray-300 {{ stock.name }}
              td.px-6.py-4.whitespace-nowrap.text-right
                span.text-sm.font-medium.text-white ${{ stock.price.toFixed(2) }}
              td.px-6.py-4.whitespace-nowrap.text-center
                .flex.items-center.justify-center.gap-2
                  button.px-3.py-1.text-xs.font-medium.rounded.bg-green-600.text-white(class="hover:bg-green-700" @click="placeOrder(stock.symbol, 1, 'buy')")
                    | Buy
                  button.px-3.py-1.text-xs.font-medium.rounded.bg-red-600.text-white(class="hover:bg-red-700" @click="placeOrder(stock.symbol, 1, 'sell')")
                    | Sell

    //- Pagination
    .flex.items-center.justify-between.mt-6(v-if="totalPages > 1")
      .flex.items-center.gap-2
        button.px-3.py-1.text-sm.rounded.bg-gray-700.text-white(class="hover:bg-gray-600" :disabled="currentPage === 1" @click="currentPage--")
          | Previous
        span.text-sm.text-gray-400 Page {{ currentPage }} of {{ totalPages }}
        button.px-3.py-1.text-sm.rounded.bg-gray-700.text-white(class="hover:bg-gray-600" :disabled="currentPage === totalPages" @click="currentPage++")
          | Next
      .text-sm.text-gray-400 Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ filteredStocks.length }} stocks
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { fetchAllStocks } from '@/api'

const stocks = ref([])
const searchQuery = ref('')
const loading = ref(true)
const error = ref(null)
const wsConnected = ref(false)
const lastUpdate = ref('Never')
const currentPage = ref(1)
const itemsPerPage = 50
let ws = null
let pollInterval = null

const filteredStocks = computed(() => {
  if (!searchQuery.value) return stocks.value

  return stocks.value.filter(stock =>
    stock.symbol.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalPages = computed(() => Math.ceil(filteredStocks.value.length / itemsPerPage))

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage, filteredStocks.value.length))

const paginatedStocks = computed(() => {
  return filteredStocks.value.slice(startIndex.value, endIndex.value)
})

async function fetchStocks() {
  try {
    console.log('📊 Fetching all stocks...')
    const data = await fetchAllStocks()
    stocks.value = data.stocks || []
    loading.value = false
    lastUpdate.value = new Date().toLocaleTimeString()
  }
  catch (err) {
    error.value = 'Failed to load stocks. Make sure the API server is running.'
    console.error('Error fetching stocks:', err)
    loading.value = false
  }
}

async function placeOrder(symbol, qty, side) {
  try {
    console.log(`📈 Placing ${side} order for ${qty} ${symbol}`)
    // For now, just log the order. In a real app, you'd call the trading API
    alert(`${side.toUpperCase()} ${qty} ${symbol} - Order placed!`)
  }
  catch (err) {
    console.error('Error placing order:', err)
    alert('Failed to place order')
  }
}

function connectWebSocket() {
  try {
    loading.value = true
    error.value = null

    if (ws) ws.close()

    console.log('🔌 Connecting to WebSocket...')
    ws = new WebSocket('ws://localhost:3000')

    ws.onopen = () => {
      console.log('✅ WebSocket connected')
      wsConnected.value = true
      loading.value = false
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)

        if (data.type === 'market-update') {
          // Update stock prices
          const priceMap = {}
          data.data.forEach(stock => {
            priceMap[stock.symbol] = stock.price
          })

          stocks.value = stocks.value.map(stock => ({
            ...stock,
            price: priceMap[stock.symbol] || stock.price
          }))

          lastUpdate.value = new Date().toLocaleTimeString()
        }
      }
      catch (err) {
        console.error('Error parsing WebSocket message:', err)
      }
    }

    ws.onerror = (err) => {
      console.error('❌ WebSocket error:', err)
      wsConnected.value = false
      // Fallback to polling
      if (!pollInterval) {
        console.log('🔄 Falling back to polling')
        fetchStocks()
        pollInterval = setInterval(fetchStocks, 1000)
      }
    }

    ws.onclose = () => {
      console.log('🔌 WebSocket disconnected')
      wsConnected.value = false
    }
  }
  catch (err) {
    console.error('Failed to create WebSocket:', err)
    error.value = 'Could not connect to the server.'
    loading.value = false
  }
}

onMounted(() => {
  connectWebSocket()
})

onUnmounted(() => {
  if (ws) ws.close()
  if (pollInterval) clearInterval(pollInterval)
})
</script>
