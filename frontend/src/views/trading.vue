<template lang="pug">
.w-flex.align-center.justify-between.gap3
  .title1 Stock Trading
  span.op5.size--sm.no-grow.mt1 Last Update: {{ lastUpdate }}
  //- Connection Status.
  .w-flex.align-center.gap2.no-grow.mt1
    .w-icon.size--xs(:class="wsConnected ? 'success--bg' : 'yellow--bg'")
    span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
      | {{ wsConnected ? 'Live' : 'Polling fallback' }}

//- Top Movers Strip.
.my4.w-flex.wrap.gap2
  //- Gainers
  .w-flex.column.gap1
    .w-flex.align-center.gap2.mb2
      .title3.size--sm.op4 TOP GAINERS
      w-button.ml2(
        @click="$router.push('/trading/top-gainers')"
        text
        xs
        round) View All
    .w-flex.gap1.wrap
      template(v-for="n in topMovers.gainersDisplayCount" :key="n")
        w-tag.clickable.px2.py1(
          v-if="topMovers.data.gainers[n - 1]"
          @click="$router.push(`/trading/${topMovers.data.gainers[n - 1].symbol}`)"
          round
          xs)
          span.text-bold {{ topMovers.data.gainers[n - 1].symbol }}
          span.ml2.currency-positive {{ ~~(topMovers.data.gainers[n - 1].pct) }}%
      w-button(
        v-if="topMovers.gainersDisplayCount < 15"
        @click="topMovers.gainersDisplayCount += 15"
        color="info"
        text
        xs
        round)
        span.mb2.mt-1.size--xl ...
  //- Losers
  .w-flex.column.gap1
    .w-flex.align-center.gap2.mb2
      .title3.size--sm.op4 TOP LOSERS
      w-button.ml2(
        @click="$router.push('/trading/top-losers')"
        text
        xs
        round) View All
    .w-flex.gap1.wrap
      template(v-for="n in topMovers.losersDisplayCount" :key="n")
        w-tag.clickable.px2.py1(
          v-if="topMovers.data.losers[n - 1]"
          @click="$router.push(`/trading/${topMovers.data.losers[n - 1].symbol}`)"
          round
          xs)
          span.text-bold {{ topMovers.data.losers[n - 1].symbol }}
          span.ml2.currency-negative {{ ~~(topMovers.data.losers[n - 1].pct) }}%
      w-button(
        v-if="topMovers.losersDisplayCount < 15"
        @click="topMovers.losersDisplayCount += 15"
        color="info"
        text
        xs
        round)
        span.mb2.mt-1.size--xl ...
w-input.w-input.light.my4.h-auto(
  v-model="searchQuery"
  @input="handleSearchChange"
  outline
  round
  placeholder="Search for a stock..."
  input-class="py4 px6")

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
import { ref, onMounted, onBeforeUnmount, computed, inject } from 'vue'
import { fetchAllStocks, fetchTopMovers, fetchBatchTrends } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import TickerCard from '@/components/ticker-card.vue'
import TickerLogo from '@/components/ticker-logo.vue'

const $waveui = inject('$waveui')
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

// Top movers state - consolidated into single object.
const topMovers = ref({
  data: { gainers: [], losers: [] },
  count: 20,
  gainersDisplayCount: 5,
  losersDisplayCount: 5
})

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

function extractPercent(rec) {
  let p = rec.change_percent ?? rec.changePercent ?? rec.percent_change ?? rec.changePct
  if (p === undefined || p === null) {
    const ch = rec.change ?? rec.change_value ?? rec.delta
    const prev = rec.previous_close ?? rec.prev_close ?? rec.prevClose
    const last = rec.latest_close ?? rec.close ?? rec.price
    if (typeof ch === 'number' && typeof prev === 'number' && prev !== 0) p = (ch / prev) * 100
    else if (typeof ch === 'number' && typeof last === 'number' && last - ch !== 0) p = (ch / (last - ch)) * 100
  }
  const n = Number(p)
  if (!Number.isFinite(n)) return null
  if (Math.abs(n) <= 1) return n * 100
  return n
}

async function loadMovers() {
  try {
    const top = topMovers.value.count
    const payload = await fetchTopMovers(top, 'stocks')
    const data = payload?.data || payload

    // Normalize into gainers/losers arrays.
    let gainers = Array.isArray(data?.gainers) ? data.gainers : []
    let losers = Array.isArray(data?.losers) ? data.losers : []

    if (!gainers.length && !losers.length) {
      const list = Array.isArray(data?.movers) ? data.movers : (Array.isArray(data) ? data : [])
      if (list.length) {
        gainers = list.filter(r => (r.change ?? r.change_value ?? 0) > 0)
        losers = list.filter(r => (r.change ?? r.change_value ?? 0) < 0)
      }
    }

    const normalize = arr => (arr || []).slice(0, top).map(r => ({
      ...r,
      pct: extractPercent(r)
    }))

    const normalizedGainers = normalize(gainers)
    const normalizedLosers = normalize(losers)

    // Load trend data for all movers in batch (much faster!)
    try {
      const allSymbols = [...normalizedGainers, ...normalizedLosers].map(stock => stock.symbol)
      if (allSymbols.length > 0) {
        const trendsResponse = await fetchBatchTrends(allSymbols, 20)

        if (trendsResponse) {
          // Attach trend data to gainers
          normalizedGainers.forEach(gainer => {
            const trendInfo = trendsResponse[gainer.symbol]
            if (trendInfo) {
              gainer.trendData = trendInfo.data || []
              gainer.trendFallback = trendInfo.fallback || null
            } else {
              gainer.trendData = []
              gainer.trendFallback = null
            }
          })

          // Attach trend data to losers
          normalizedLosers.forEach(loser => {
            const trendInfo = trendsResponse[loser.symbol]
            if (trendInfo) {
              loser.trendData = trendInfo.data || []
              loser.trendFallback = trendInfo.fallback || null
            } else {
              loser.trendData = []
              loser.trendFallback = null
            }
          })
        }
      }
    } catch (trendError) {
      console.warn('⚠️ Batch trend loading failed for trading view, ticker cards will load individually:', trendError.message)
      // Set empty trend data so ticker cards will load individually
      normalizedGainers.forEach(gainer => {
        gainer.trendData = []
        gainer.trendFallback = null
      })
      normalizedLosers.forEach(loser => {
        loser.trendData = []
        loser.trendFallback = null
      })
    }

    topMovers.value.data = { gainers: normalizedGainers, losers: normalizedLosers }
  }
  catch (e) {
    console.error('❌ Failed to load movers:', e)
    topMovers.value.data = { gainers: [], losers: [] }
  }
}

// Market status is now handled by the composable.

async function fetchStocks(resetPage = false) {
  try {
    if (resetPage) currentPage.value = 1

    console.log(`📊 Fetching stocks page ${currentPage.value} (search: "${searchQuery.value}")...`)
    loading.value = true
    fetchingPrices.value = true

    const data = await fetchAllStocks(currentPage.value, itemsPerPage, searchQuery.value)

    // Ensure all stocks have proper market status.
    const processedStocks = (data.stocks || []).map(stock => ({
      ...stock,
      // Ensure market status is always set.
      marketState: stock.marketState || 'closed',
      marketMessage: stock.marketMessage || 'Market Status Unavailable',
      nextOpen: stock.nextOpen || null,
      nextClose: stock.nextClose || null
    }))

    stocks.value = processedStocks
    totalStocks.value = data.pagination?.total || 0
    totalPages.value = data.pagination?.totalPages || 1
    loading.value = false
    fetchingPrices.value = false
    lastUpdate.value = new Date().toLocaleTimeString()

    console.log(`✅ Loaded ${stocks.value.length} stocks for page ${currentPage.value}/${totalPages.value}`)
    console.log(`💰 Stocks with prices: ${stocks.value.filter(s => s.price > 0).length}/${stocks.value.length}`)

    // Log market status distribution for debugging.
    const statusCounts = stocks.value.reduce((acc, stock) => {
      acc[stock.marketState] = (acc[stock.marketState] || 0) + 1
      return acc
    }, {})
    console.log(`📊 Market status distribution:`, statusCounts)
  }
  catch (err) {
    error.value = 'Failed to load stocks. Make sure the API server is running.'
    console.error('Error fetching stocks:', err)
    loading.value = false
    fetchingPrices.value = false
  }
}

// Debounced search function.
function onSearchInput() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => { fetchStocks(true) }, 500)
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
    $waveui.notify(`${side.toUpperCase()} ${qty} ${symbol} - Order placed!`, 'success')
  }
  catch (err) {
    console.error('Error placing order:', err)
    $waveui.notify('Failed to place order', 'error')
  }
}

// WebSocket handlers.
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

    // Always update market state if provided, or preserve existing state.
    if (data.marketState) {
      existingStock.marketState = data.marketState
      existingStock.marketMessage = data.marketMessage || 'Status Updated'
      existingStock.nextOpen = data.nextOpen
      existingStock.nextClose = data.nextClose
    }
    // If no market state in update but stock has none, set a reasonable default.
    else if (!existingStock.marketState || existingStock.marketState === 'unknown') {
      existingStock.marketState = 'closed'
      existingStock.marketMessage = 'Market Status Unavailable'
    }
  }
}

function handleTrade(data) {
  console.log('📈 New trade received in trading view:', data)
  // Update the price of the traded stock if it's visible.
  const stockIndex = stocks.value.findIndex(s => s.symbol === data.symbol)
  if (stockIndex !== -1) {
    stocks.value[stockIndex].price = data.price

    // Update market status if provided in trade data.
    if (data.marketState) {
      stocks.value[stockIndex].marketState = data.marketState
      stocks.value[stockIndex].marketMessage = data.marketMessage || 'Status Updated'
      stocks.value[stockIndex].nextOpen = data.nextOpen
      stocks.value[stockIndex].nextClose = data.nextClose
    }
  }
}

function handleTradingHistoryUpdate(data) {
  console.log('📊 Trading history updated:', data.history.length, 'trades')
  // You can update any trading-related UI here.
}

// Handle general market status updates.
function handleMarketStatusUpdate(data) {
  console.log('📊 Global market status update:', data)
  // Update all stocks with the new market status if they don't have individual status.
  stocks.value.forEach(stock => {
    if (!stock.marketState || stock.marketState === 'unknown' || stock.marketMessage === 'Loading...') {
      stock.marketState = data.status || data.data?.status || 'closed'
      stock.marketMessage = data.message || data.data?.message || 'Market Status Updated'
      stock.nextOpen = data.nextOpen || data.data?.nextOpen
      stock.nextClose = data.nextClose || data.data?.nextClose
    }
  })
}

// Set up WebSocket handlers.
function setupWebSocket() {
  addMessageHandler('market-update', handleMarketUpdate)
  addMessageHandler('price', handlePriceUpdate)
  addMessageHandler('trade', handleTrade)
  addMessageHandler('trading-history-update', handleTradingHistoryUpdate)
  addMessageHandler('market-status-update', handleMarketStatusUpdate)
}

onMounted(async () => {
  loading.value = true

  try {
    await Promise.all([fetchStocks(), loadMovers()])
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
