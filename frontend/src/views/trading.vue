<template lang="pug">
w-grid.gap-xl
  .w-col-12
    .w-flex.align-center.justify-between
      .title1 Stock Trading
      //- Connection Status & Market Status
      .w-flex.align-center.gap4.mla.no-grow
        .w-flex.align-center.gap2
          .w-icon.size--xs.success--bg(v-if="wsConnected")
          .w-icon.size--xs.yellow--bg(v-else)
          span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
            | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}
        .w-flex.align-center.gap2
          .w-icon.size--xs(:class="marketStatusIcon")
          span.size--sm(:class="marketStatusClass")
            | {{ marketStatus.message }}
          span.size--xs.op6(v-if="marketStatus.status === 'open' && marketStatus.nextClose")
            | (closes at {{ new Date(marketStatus.nextClose).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }) }} ET)
          span.size--xs.op6(v-else-if="marketStatus.nextOpen")
            | (opens {{ formatNextOpen(marketStatus.nextOpen) }})

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
    .w-flex.column.py12.align-center.justify-center(v-if="loading")
      w-progress(circle)
      p.op5.mt4 Loading stocks...

    //- Error State
    w-alert.bdrs2(v-else-if="error")
      p.error {{ error }}
      w-button(@click="connectWebSocket") Try again

    //- Content
    div(v-else)
      //- Stats
      .w-flex.gap4.my4
        .w-card.dark2--bg.bdrs2.pa4
          span.op5.text-upper.size--sm Total Stocks
          .title2 {{ filteredStocks.length }}
        .w-card.dark2--bg.bdrs2.pa4
          span.op5.text-upper.size--sm Last Update
          .lg {{ lastUpdate }}

      //- Stocks Table
      .glass-box.ova.pa4
        w-table.bd0(:headers="tableHeaders" :items="paginatedStocks")
          template(#item="{ item: stock }")
            tr.clickable-row(@click="$router.push(`/trading/${stock.symbol}`)")
              td.px2.py2
                .w-flex.align-center
                  ticker-logo.mr3(:symbol="stock.symbol")
                  .w-flex.gap2
                    span.text-bold {{ stock.symbol }}
                    w-tag(sm round :class="stock.exchange === 'NYSE' ? 'teal-dark3--bg' : (stock.exchange === 'NASDAQ' ? 'primary-dark4--bg' : 'success-dark4--bg')")
                      small {{ stock.exchange }}
              td.px2.py2
                span {{ stock.name }}
              td.px2.py2.text-right
                span.text-bold ${{ stock.price.toFixed(2) }}
              td.px2.py2.text-center
                .w-flex.align-center.justify-center.gap2(@click.stop)
                  w-button.px2(
                    @click="placeOrder(stock.symbol, 1, 'buy')"
                    color="success"
                    outline
                    round
                    sm)
                    strong.size--xs BUY
                  w-button.px2(
                    @click="placeOrder(stock.symbol, 1, 'sell')"
                    color="error"
                    outline
                    round
                    sm)
                    strong.size--xs SELL

        //- Pagination
        .w-flex.align-center.justify-between(v-if="totalPages > 1")
          .w-flex.align-center.gap2
            w-button(:disabled="currentPage === 1" @click="currentPage--") Previous
            span Page {{ currentPage }} of {{ totalPages }}
            w-button(:disabled="currentPage === totalPages" @click="currentPage++") Next
          span.op5.size--sm Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ filteredStocks.length }} stocks
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { fetchAllStocks, fetchMarketStatus } from '@/api'
import TickerCard from '@/components/ticker-card.vue'
import TickerLogo from '@/components/ticker-logo.vue'

const stocks = ref([])
const searchQuery = ref('')
const loading = ref(true)
const error = ref(null)
const wsConnected = ref(false)
const lastUpdate = ref('Never')
const currentPage = ref(1)
const itemsPerPage = 50
const marketStatus = ref({
  status: 'closed',
  message: 'Loading...',
  isWeekend: false
})
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

const tableHeaders = [
  { key: 'symbol', label: 'Symbol' },
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price', align: 'right' },
  { key: 'actions', label: 'Actions', align: 'center' }
]

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
  await fetchMarketStatusData()
  connectWebSocket()

  // Update market status every 30 seconds
  const statusInterval = setInterval(fetchMarketStatusData, 30000)

  // Clean up interval on unmount
  onUnmounted(() => {
    clearInterval(statusInterval)
  })
})

onUnmounted(() => {
  if (ws) ws.close()
  if (pollInterval) clearInterval(pollInterval)
})
</script>

<style lang="scss" scoped>
.clickable-row {
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {background-color: rgba(255, 255, 255, 0.08) !important;}
}
</style>
