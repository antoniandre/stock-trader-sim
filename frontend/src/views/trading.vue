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
      @input="handleSearchChange"
      outline
      round
      placeholder="Search for a stock..."
      input-class="py4 px6")

    //- Loading indicator for price fetching
    .w-flex.align-center.gap2.my2(v-if="fetchingPrices")
      w-progress.mr2(circle sm)
      span.size--sm.op7 Fetching current prices for visible stocks...

    //- Ticker Cards
    w-grid.gap4(:columns="{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }" )
      ticker-card(
        v-for="stock in paginatedStocks.slice(0, 20)"
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
          .title2 {{ totalStocks }}
        .w-card.dark2--bg.bdrs2.pa4
          span.op5.text-upper.size--sm Showing
          .title2 {{ stocks.length }}
        .w-card.dark2--bg.bdrs2.pa4
          span.op5.text-upper.size--sm With Prices
          .title2 {{ stocks.filter(s => s.price > 0).length }}
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
                    w-tag(sm round :style="`background-color: var(--${['NYSE', 'NASDAQ'].includes(stock.exchange) ? stock.exchange.toLowerCase() : 'other-se'}-color)`")
                      small {{ stock.exchange }}
              td.px2.py2
                span {{ stock.name }}
              td.px2.py2.text-right
                .w-flex.align-center.justify-end.gap1(v-if="stock.price > 0")
                  span.text-bold ${{ stock.price.toFixed(2) }}
                .w-flex.align-center.justify-end.gap1(v-else)
                  span.op5 Fetching...
              td.px2.py2.text-center
                .w-flex.align-center.justify-center.gap2(@click.stop)
                  w-button.px2(
                    @click="placeOrder(stock.symbol, 1, 'buy')"
                    color="success"
                    outline
                    round
                    sm
                    :disabled="stock.price === 0")
                    strong.size--xs BUY
                  w-button.px2(
                    @click="placeOrder(stock.symbol, 1, 'sell')"
                    color="error"
                    outline
                    round
                    sm
                    :disabled="stock.price === 0")
                    strong.size--xs SELL

        //- Pagination
        .w-flex.align-center.justify-between.mt4(v-if="totalPages > 1")
          .w-flex.align-center.gap2
            w-button(:disabled="currentPage === 1" @click="prevPage") Previous
            span Page {{ currentPage }} of {{ totalPages }}
            w-button(:disabled="currentPage === totalPages" @click="nextPage") Next
          .w-flex.align-center.gap2
            span.op5.size--sm Showing {{ stocks.length }} of {{ totalStocks }} stocks
            span.op5.size--sm(v-if="searchQuery") • Filtered by "{{ searchQuery }}"
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
const totalStocks = ref(0)
const totalPages = ref(1)
const fetchingPrices = ref(false)
const marketStatus = ref({
  status: 'closed',
  message: 'Loading...',
  isWeekend: false
})
let ws = null
let pollInterval = null
let searchTimeout = null

const filteredStocks = computed(() => {
  return stocks.value
})

const paginatedStocks = computed(() => {
  return stocks.value
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

async function fetchStocks(resetPage = false) {
  try {
    if (resetPage) currentPage.value = 1

    console.log(`📊 Fetching stocks page ${currentPage.value} (search: "${searchQuery.value}")...`)
    loading.value = true
    fetchingPrices.value = true

    const data = await fetchAllStocks(currentPage.value, itemsPerPage, searchQuery.value)

    stocks.value = data.stocks || []
    totalStocks.value = data.pagination?.total || 0
    totalPages.value = data.pagination?.totalPages || 1

    loading.value = false
    fetchingPrices.value = false
    lastUpdate.value = new Date().toLocaleTimeString()

    console.log(`✅ Loaded ${stocks.value.length} stocks for page ${currentPage.value}/${totalPages.value}`)
    console.log(`💰 Stocks with prices: ${stocks.value.filter(s => s.price > 0).length}/${stocks.value.length}`)
  }
  catch (err) {
    error.value = 'Failed to load stocks. Make sure the API server is running.'
    console.error('Error fetching stocks:', err)
    loading.value = false
    fetchingPrices.value = false
  }
}

// Debounced search function
function onSearchInput() {
  if (searchTimeout) clearTimeout(searchTimeout)

  searchTimeout = setTimeout(() => {
    fetchStocks(true) // Reset to page 1 when searching
  }, 500) // 500ms delay
}

// Watch for search changes
function handleSearchChange() {
  onSearchInput()
}

// Page navigation functions
async function goToPage(page) {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    currentPage.value = page
    await fetchStocks()
  }
}

async function nextPage() {
  await goToPage(currentPage.value + 1)
}

async function prevPage() {
  await goToPage(currentPage.value - 1)
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
          // Update prices for stocks currently displayed on this page
          if (data.data?.length && stocks.value.length) {
            const priceMap = {}
            data.data.forEach(stock => {
              priceMap[stock.symbol] = stock.price
            })

            // Update prices for currently displayed stocks
            stocks.value = stocks.value.map(stock => ({
              ...stock,
              price: priceMap[stock.symbol] || stock.price
            }))

            lastUpdate.value = new Date().toLocaleTimeString()
          }
        }

        if (data.type === 'price') {
          // Update specific stock price if it's currently displayed
          const stockIndex = stocks.value.findIndex(s => s.symbol === data.symbol)
          if (stockIndex !== -1) {
            stocks.value[stockIndex].price = data.price
            lastUpdate.value = new Date().toLocaleTimeString()
          }
        }

        if (data.type === 'trade') {
          console.log('📈 New trade received in trading view:', data)
          // Update the price of the traded stock if it's visible
          const stockIndex = stocks.value.findIndex(s => s.symbol === data.symbol)
          if (stockIndex !== -1) {
            stocks.value[stockIndex].price = data.price
          }
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
  setInterval(fetchMarketStatusData, 30000)
})

onUnmounted(() => {
  if (ws) ws.close()
  if (pollInterval) clearInterval(pollInterval)
  if (searchTimeout) clearTimeout(searchTimeout)
})
</script>

<style lang="scss" scoped>
.clickable-row {
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {background-color: rgba(255, 255, 255, 0.08) !important;}
}
</style>
