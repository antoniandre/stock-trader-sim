<template lang="pug">
w-grid.gap-xl
  .w-col-12
    .w-flex.align-center.justify-between.gap3
      .title1 Stock Trading
      span.op5.size--sm.mt1 Last Update: {{ lastUpdate }}
      //- Connection Status.
      .w-flex.align-center.gap2.mla.no-grow
        .w-icon.size--xs.success--bg(v-if="wsConnected")
        .w-icon.size--xs.yellow--bg(v-else)
        span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
          | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}
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
        :stock="stock")

    //- Loading State
    .w-flex.column.py12.align-center.justify-center(v-if="loading")
      w-progress(circle)
      p.op5.mt4 Loading stocks...

    //- Error State
    .error-message.w-flex.column.py12.align-center.justify-center(v-else-if="error")
      w-icon(color="error" size="4rem") wi-info-circle
      h2.title2.error.mt4.mb2 Oops!
      p.mb4 {{ error }}
      w-button(@click="connectWebSocket" text bg-color="error" round) Try again

    //- Content
    div(v-else)
      //- Stocks Table
      .glass-box.ova.pa4
        w-table.bd0(:headers="tableHeaders" :items="paginatedStocks")
          template(#item="{ item: stock }")
            tr.clickable-row(@click="$router.push(`/trading/${stock.symbol}`)")
              td.px2.py2
                .w-flex.align-center
                  w-badge.mr3(overlap bottom bg-color="" xs :badge-class="`market-status-indicator market-${stock.marketState}`")
                    template(#badge)
                      span.pa1(:title="stock.marketMessage")
                    ticker-logo(:symbol="stock.symbol")

                  //- ticker-logo.mr3(:symbol="stock.symbol")
                  .w-flex.gap2
                    span.text-bold {{ stock.symbol }}
                    w-tag(sm round :style="`background-color: var(--${['NYSE', 'NASDAQ'].includes(stock.exchange) ? stock.exchange.toLowerCase() : 'other-se'}-color)`")
                      small {{ stock.exchange }}
              td.px2.py2
                span {{ stock.name }}
              td.px2.py2.text-right
                .w-flex.align-center.justify-end.gap1(v-if="stock.price > 0")
                  span.text-bold {{ stock.currencySymbol || '$' }}{{ stock.price.toFixed(2) }}
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
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { fetchAllStocks } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import TickerCard from '@/components/ticker-card.vue'
import TickerLogo from '@/components/ticker-logo.vue'

const stocks = ref([])
const searchQuery = ref('')
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const itemsPerPage = 50
const totalStocks = ref(0)
const totalPages = ref(1)
const fetchingPrices = ref(false)
let searchTimeout = null

// Use composables for WebSocket and market status.
const { wsConnected, lastUpdate, connect, addMessageHandler } = useWebSocket()

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

// Market status is now handled by the composable.

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

// formatNextOpen is now imported from utilities.

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

// WebSocket message handlers.
function handleMarketUpdate(data) {
  console.log('📊 Market update received:', data.data.length, 'stocks')

  // Update existing stocks with new prices.
  data.data.forEach(stock => {
    const existingStock = stocks.value.find(s => s.symbol === stock.symbol)
    if (existingStock) {
      existingStock.price = stock.price
      existingStock.lastSide = stock.lastSide || 'buy'
      existingStock.currency = stock.currency || 'USD'
      existingStock.currencySymbol = stock.currencySymbol || '$'
    }
  })
}



function handlePriceUpdate(data) {
  const existingStock = stocks.value.find(s => s.symbol === data.symbol)
  if (existingStock) {
    existingStock.price = data.price
    existingStock.lastSide = data.lastSide || 'buy'
    existingStock.currency = data.currency || 'USD'
    existingStock.currencySymbol = data.currencySymbol || '$'

    // Update market state if provided
    if (data.marketState) {
      existingStock.marketState = data.marketState
      existingStock.marketMessage = data.marketMessage
      existingStock.nextOpen = data.nextOpen
      existingStock.nextClose = data.nextClose
    }
  }
}

function handleTrade(data) {
  console.log('📈 New trade received in trading view:', data)
  // Update the price of the traded stock if it's visible.
  const stockIndex = stocks.value.findIndex(s => s.symbol === data.symbol)
  if (stockIndex !== -1) {
    stocks.value[stockIndex].price = data.price
  }
}

function handleTradingHistoryUpdate(data) {
  console.log('📊 Trading history updated:', data.history.length, 'trades')
  // You can update any trading-related UI here.
}

// Set up WebSocket handlers.
function setupWebSocket() {
  addMessageHandler('market-update', handleMarketUpdate)
  addMessageHandler('price', handlePriceUpdate)
  addMessageHandler('trade', handleTrade)
  addMessageHandler('trading-history-update', handleTradingHistoryUpdate)
}

onMounted(async () => {
  loading.value = true

  try {
    await fetchStocks()
    setupWebSocket()
    connect()
  }
  catch (error) {
    console.error('Error during initialization:', error)
    loading.value = false
  }
})

onBeforeUnmount(() => {
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
