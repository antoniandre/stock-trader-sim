<template lang="pug">
w-grid.gap-xl
  .w-col-12
    .w-flex.align-center.justify-between
      .title1 Stock Trading
      //- Connection Status
      .w-flex.align-center.gap2.mla.no-grow
        .w-icon.size--xs.success--bg(v-if="wsConnected")
        .w-icon.size--xs.yellow--bg(v-else)
        span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
          | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}

    w-input.w-input.light.my4.h-auto(
      v-model="searchQuery"
      outline
      round
      placeholder="Search for a stock..."
      input-class="py4 px6")

    //- Ticker Cards
    w-grid.gap4(:columns="{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }" )
      ticker-card(
        v-for="stock in filteredStocks.slice(0, 20)"
        :key="stock.symbol"
        :symbol="stock.symbol"
        :price="stock.price"
        :lastSide="stock.lastSide")

    //- Loading State
    .w-center.w-my-xxl(v-if="loading")
      .w-loader.w-xxl
      p.op5 Loading stocks...

    //- Error State
    w-alert.bdrs2(v-else-if="error")
      p.error {{ error }}
      w-button(@click="connectWebSocket") Try again

    //- Content
    div(v-else)
      //- Stats
      .w-flex.gap4.my4
        .w-card.dark2--bg.bdrs2.pa4
          .sm.light Total Stocks
          .title2 {{ filteredStocks.length }}
        .w-card.dark2--bg.bdrs2.pa4
          .sm.light Last Update
          .lg.light {{ lastUpdate }}

      //- Stocks Table
      .w-card.dark2--bg.bdrs2.ova.pa4
        table.w-table
          thead.dark3--bg
            tr
              th.py4 Symbol
              th.py4 Name
              th.py4.right.xs.light Price
              th.py4.center.xs.light Actions
          tbody
            tr(v-for="stock in paginatedStocks" :key="stock.symbol" class="w-hover-bg-dark-3")
              td.py4
                .w-flex.align-center
                  .stock-logo.mr3
                    w-image.logo-img(:src="`https://financialmodelingprep.com/image-stock/${stock.symbol}.png`" :alt="stock.symbol" lazy)
                      .logo-placeholder {{ stock.symbol.charAt(0) }}
                  div
                    span.sm.light {{ stock.symbol }}
                    span.w-ml-md.w.pxmd.w.pyxs.xs.bdrs2.dark3--bg.light {{ stock.exchange }}
              td.py4
                span.sm.light {{ stock.name }}
              td.py4.right
                span.sm.light ${{ stock.price.toFixed(2) }}
              td.py4.center
                .w-flex.align-center.justify-center.gap1
                  w-button(@click="placeOrder(stock.symbol, 1, 'buy')" color="success" text)
                    strong.size--xs BUY
                  w-button(@click="placeOrder(stock.symbol, 1, 'sell')" color="error" text)
                    strong.size--xs SELL

      //- Pagination
      .w-flex.align-center.justify-between.w-mt-xl(v-if="totalPages > 1")
        .w-flex.align-center.gap-md
          w-button.dark(:disabled="currentPage === 1" @click="currentPage--") Previous
          span.sm.light Page {{ currentPage }} of {{ totalPages }}
          w-button.dark(:disabled="currentPage === totalPages" @click="currentPage++") Next
        .sm.light Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ filteredStocks.length }} stocks
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { fetchAllStocks } from '@/api'
import TickerCard from '@/components/ticker-card.vue'

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
          // If stocks.value is empty, initialize it from the incoming data
          if (!stocks.value.length && data.data?.length) stocks.value = data.data

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

        if (data.type === 'trade') {
          console.log('📈 New trade received in trading view:', data)
          // You can add trade notifications or updates here
        }

        if (data.type === 'trading-history-update') {
          console.log('📊 Trading history updated:', data.history.length, 'trades')
          // You can update any trading-related UI here
        }
      }
      catch (err) {
        console.error('Error parsing WebSocket message:', err)
      }
    }

    ws.onerror = (err) => {
      console.error('❌ WebSocket error:', err)
      wsConnected.value = false
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

onMounted(async () => {
  await fetchStocks()
  connectWebSocket()
})

onUnmounted(() => {
  if (ws) ws.close()
  if (pollInterval) clearInterval(pollInterval)
})
</script>
