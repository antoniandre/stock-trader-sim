<template lang="pug">
.trading-market-view
  .w-flex.gap2.align-center
    .title1.mb1 Trading
    w-button.text-upper(
      v-for="option in marketOptions"
      :key="option.value"
      round
      :outline="market !== option.value"
      :bg-color="market === option.value ? 'primary' : undefined"
      :color="market === option.value ? 'white' : 'grey'"
      @click="$router.push(tradingOverviewPath(option.value))") {{ option.label }}
    span.w-flex.align-center.gap1.op5.size--sm.no-grow.mt1.mla
      icon(icon="mdi:clock-outline")
      | Updated {{ lastUpdate }}

  p.op6.mb0 {{ pageSubtitle }}

  .glass-box.w-flex.wrap.gap3.my4.py2.px4
    .w-flex.column.gap1
      .w-flex.align-center.gap2
        .title3.size--sm.op4 TOP GAINERS
        w-button.ml2(@click="$router.push(tradingTopMoversPath('gainers', market))" text xs round) View All
      .w-flex.gap1.wrap
        template(v-for="n in topMovers.gainersDisplayCount" :key="`g-${n}`")
          w-tag.clickable.px2.py1(
            v-if="topMovers.data.gainers[n - 1]"
            @click="$router.push(tradingTickerPath(topMovers.data.gainers[n - 1].symbol, market))"
            round
            xs)
            strong {{ topMovers.data.gainers[n - 1].symbol }}
            span.ml2.currency-positive {{ ~~(topMovers.data.gainers[n - 1].pct) }}%
        w-button(v-if="topMovers.gainersDisplayCount < 15" @click="topMovers.gainersDisplayCount += 15" color="info" text xs round)
          span.mb2.mt-1.size--xl ...
    .w-flex.column.gap1
      .w-flex.align-center.gap2
        .title3.size--sm.op4 TOP LOSERS
        w-button.ml2(@click="$router.push(tradingTopMoversPath('losers', market))" text xs round) View All
      .w-flex.gap1.wrap
        template(v-for="n in topMovers.losersDisplayCount" :key="`l-${n}`")
          w-tag.clickable.px2.py1(
            v-if="topMovers.data.losers[n - 1]"
            @click="$router.push(tradingTickerPath(topMovers.data.losers[n - 1].symbol, market))"
            round
            xs)
            strong {{ topMovers.data.losers[n - 1].symbol }}
            span.ml2.currency-negative {{ ~~(topMovers.data.losers[n - 1].pct) }}%
        w-button(v-if="topMovers.losersDisplayCount < 15" @click="topMovers.losersDisplayCount += 15" color="info" text xs round)
          span.mb2.mt-1.size--xl ...

  .glass-box.pa4.mt4
    .w-flex.align-center.justify-between.gap3.wrap
      .w-flex.column.gap1
        .title3 Best potential trades
        p.op6.mb0 Ranked {{ selectedMarketLabel.toLowerCase() }} candidates with quick reasons, so the desk has somewhere to start.
      .w-flex.align-center.gap2.no-grow
        w-tag(v-if="tradeCandidatesUsedFallback" round sm color="warning") Fallback data
        w-button(@click="loadTradeCandidates" :loading="tradeCandidatesLoading" text xs round) Refresh
    .w-flex.column.py8.align-center.justify-center(v-if="tradeCandidatesLoading && !tradeCandidates.length")
      w-progress(circle)
      p.op5.mt3 Building the screener...
    w-grid.mt4(v-else-if="tradeCandidates.length" :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }" gap="3")
      router-link.gradient-card.gradient-card--tall.clickable(
        v-for="candidate in tradeCandidates"
        :key="candidate.symbol"
        :to="tradingTickerPath(candidate.symbol, market)")
        .gradient-card__wrap.fill-height
          .w-flex.wrap.align-center.justify-between.gap2
            .w-flex.align-center.justify-between.gap2
              .w-flex.align-center.gap1.no-grow
                strong.title3.no-grow {{ candidate.symbol }}
                w-tooltip(v-if="candidate.dailyCatalyst")
                  template(#activator="{ on }")
                    span.catalyst-fire-wrap(
                      v-on="on"
                      @click.stop
                      tabindex="0"
                      aria-label="Daily catalyst")
                      icon.catalyst-fire-icon(icon="mdi:fire" width="1.15rem" height="1.15rem" aria-hidden="true")
                  .catalyst-tooltip-content.text-left
                    .w-flex.wrap.gap1.mb2(v-if="candidate.dailyCatalyst.catalyst_score || candidate.dailyCatalyst.priority")
                      w-tag(v-if="candidate.dailyCatalyst.catalyst_score" xs round) {{ candidate.dailyCatalyst.catalyst_score }}
                      w-tag(v-if="candidate.dailyCatalyst.priority" xs round outline) {{ candidate.dailyCatalyst.priority }}
                    p.size--sm.mb2 {{ candidate.dailyCatalyst.catalyst }}
                    p.size--xs.op7.mb1(v-if="candidate.dailyCatalyst.premarket_direction_and_gap") {{ candidate.dailyCatalyst.premarket_direction_and_gap }}
                    p.size--xs.op6.mb0(v-if="candidate.dailyCatalyst.setup_potential") Setup: {{ candidate.dailyCatalyst.setup_potential }}
              w-tag(round xs :bg-color="candidate.side === 'buy' ? 'success' : 'error'") {{ candidate.side.toUpperCase() }}
            .w-flex.justify-between.align-center.gap1.no-grow
              span.size--xs.op6 Confidence:
              w-tag.px2(round xs) {{ candidate.confidence.toUpperCase() }}
          .w-flex.align-center.justify-between.mt2.gap2.wrap
            .w-flex.column.bdrs3.contrast-o05--bg.px3.py2.no-grow
              span.size--xs.op6 Score
              strong.size--xl.lh0 {{ candidate.score }}
            .w-flex.column.bdrs3.contrast-o05--bg.px3.py2.no-grow
              span.size--xs.op6 Move
              strong(:class="candidate.changePct >= 0 ? 'currency-positive' : 'currency-negative'") {{ candidate.changePct >= 0 ? '+' : '' }}{{ candidate.changePct }}%
            .w-flex.column.bdrs3.contrast-o05--bg.px3.py2.no-grow(v-if="candidate.price")
              span.size--xs.op6 Price
              strong(v-html="formatCurrency(candidate.price, 'USD', 2, false)")
          .size--sm.contrast-o7.mt2.mb0
            | {{ candidate.thesis }}&nbsp;
            w-tooltip
              template(#activator="{ on }")
                w-icon(v-on="on" color="white" size="1rem") wi-info-circle
              ul.screener-reasons.mt2.mb0.pl4
                li.size--sm(v-for="reason in candidate.reasons" :key="`${candidate.symbol}-${reason}`") {{ reason }}

    .w-flex.column.py8.align-center.justify-center(v-else)
      w-icon(color="info" size="3rem") wi-info-circle
      p.op6.mt3.mb0 No ranked candidates yet. Try refreshing once market data settles.
  .w-flex.align-center.gap2.wrap.my4
    w-input.w-input.light.h-auto.grow(
      v-model="searchQuery"
      @input="handleSearchChange"
      outline
      round
      :placeholder="searchPlaceholder"
      input-class="py4 px6")
      template(#icon-left)
        w-icon.ml4.mr-4(size="1.5rem") wi-search

  w-grid.gap4(:columns="{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }")
    ticker-card(v-for="stock in paginatedStocks.slice(0, 20)" :key="stock.symbol" :stock="stock" :market="market" :hide-empty-trends="true")

  .w-flex.column.py12.align-center.justify-center(v-if="loading")
    w-progress(circle)
    p.op5.mt4 Loading {{ instrumentLabel.toLowerCase() }}...

  .error-message.w-flex.column.py12.align-center.justify-center(v-else-if="error")
    w-icon(color="error" size="4rem") wi-info-circle
    h2.title2.error.mt4.mb2 Oops!
    p.mb4 {{ error }}
    w-button(@click="connectWebSocket" text bg-color="error" round) Try again

  div(v-else)
    .glass-box.ova.mt6
      w-table.bd0(:headers="tableHeaders" :items="paginatedStocks")
        template(#no-data)
          .w-flex.column.align-center.justify-center.py12
            w-icon(color="info" size="4rem") wi-info-circle
            h2.title2.info.mt4.mb2 No results found
            p.mb4 No {{ instrumentLabel.toLowerCase() }} matched your search.
            w-button(@click="fetchStocks(true)" text bg-color="info" round) Refresh
        template(#item="{ item: stock }")
          tr.w-table__row.clickable-row(@click="$router.push(tradingTickerPath(stock.symbol, market))")
            td.w-table__cell.pl4.pr2.py2
              .w-flex.align-center
                w-badge.mr3(overlap bottom bg-color="" xs :badge-class="`market-status-indicator market-${stock.marketState}`")
                  template(#badge)
                    span.pa1(:title="stock.marketMessage")
                  ticker-logo(:symbol="stock.symbol")
                .w-flex.gap2
                  strong {{ stock.symbol }}
                  w-tag(sm round :style="`background-color: var(--${['NYSE', 'NASDAQ'].includes(stock.exchange) ? stock.exchange.toLowerCase() : 'other-se'}-color)`")
                    small {{ stock.exchange || marketBadgeLabel }}
            td.w-table__cell.px2.py2
              span {{ stock.name }}
            td.w-table__cell.px2.py2.text-right
              strong.w-flex.align-center.justify-end(v-if="stock.price" v-html="formatCurrency(stock.price, stock.currency, 2, false)")
              .w-flex.align-center.justify-end.gap1(v-else)
                span.op5 Fetching...
            td.w-table__cell.pl2.pr4.py2.text-center
              .w-flex.align-center.justify-center.gap2(@click.stop)
                w-button.px2(@click="openListOrderConfirmation(stock, 'buy')" color="success" outline round sm :disabled="stock.price === 0 || stock.tradable === false")
                  strong.size--xs BUY
                w-button.px2(@click="openListOrderConfirmation(stock, 'sell')" color="error" outline round sm :disabled="stock.price === 0 || stock.tradable === false")
                  strong.size--xs SELL

    .w-flex.align-center.justify-between.mt4(v-if="totalPages > 1")
      .w-flex.align-center.gap2
        w-button(:disabled="currentPage === 1" @click="prevPage") Previous
        span Page {{ currentPage }} of {{ totalPages }}
        w-button(:disabled="currentPage === totalPages" @click="nextPage") Next
      .w-flex.align-center.gap2.wrap.justify-end
        span.op5.size--sm Showing {{ stocks.length }} of {{ totalStocks }} {{ instrumentLabel.toLowerCase() }}
        span.op5.size--sm • Desk: {{ selectedMarketLabel }}
        span.op5.size--sm(v-if="searchQuery") • Filtered by "{{ searchQuery }}"

  OrderConfirmationDialog(
    v-model="showOrderConfirmation"
    title="Review quick order"
    :pending="!!pendingOrder"
    :market-gate="marketGate"
    :environment-label="pendingEnvironmentLabel"
    :provider-summary="providerSummary"
    :submitting="submittingOrder"
    :confirm-disabled="submittingOrder || marketGate.reason !== 'open' || pendingOrder?.tradable === false"
    :confirm-color="pendingOrder && pendingOrder.side === 'buy' ? 'success' : 'error'"
    :confirm-label="pendingOrder ? `Confirm ${pendingOrder.side.toUpperCase()}` : 'Confirm'"
    @confirm="confirmListOrder")
    template(v-if="pendingOrder" #rows)
      .order-confirmation-dialog__grid
        .order-confirmation-dialog__row
          span.op7 Instrument
          strong {{ pendingOrder.symbol }}
        .order-confirmation-dialog__row
          span.op7 Desk
          strong {{ selectedMarketLabel }}
        .order-confirmation-dialog__row
          span.op7 Side
          strong(:class="pendingOrder.side === 'buy' ? 'success' : 'error'") {{ pendingOrder.side.toUpperCase() }}
        .order-confirmation-dialog__row
          span.op7 Order type
          strong MARKET
        .order-confirmation-dialog__row
          span.op7 Quantity
          strong 1 {{ quantityLabel }}
        .order-confirmation-dialog__row
          span.op7 Estimated notional
          strong(v-html="formatCurrency(pendingOrder.estimatedNotional, pendingOrder.currency, 2, false)")
    template(v-if="pendingOrder" #notes)
      p.size--sm.op7.mt4 Quick orders always place a single market order. Open the detailed ticket for limit pricing or risk controls.
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, inject, watch } from 'vue'
import { fetchAllStocks, fetchTopMovers, fetchBatchTrends, fetchTradeCandidates, postOrder, fetchMarketStatus, checkHealth } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { formatCurrency } from '@/utils/formatters'
import TickerCard from '@/components/ticker-card.vue'
import TickerLogo from '@/components/ticker-logo.vue'
import OrderConfirmationDialog from '@/components/order-confirmation-dialog.vue'
import { tradingOverviewPath, tradingTickerPath, tradingTopMoversPath } from '@/utils/trading-routes'

const props = defineProps({
  market: {
    type: String,
    default: 'stocks',
    validator: value => ['stocks', 'crypto'].includes(value)
  }
})

const $waveui = inject('$waveui')
const stocks = ref([])
const searchQuery = ref('')
const marketOptions = [
  { label: 'Stocks', value: 'stocks' },
  { label: 'Crypto', value: 'crypto' }
]
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const itemsPerPage = 50
const totalStocks = ref(0)
const totalPages = ref(1)
const fetchingPrices = ref(false)
const showOrderConfirmation = ref(false)
const pendingOrder = ref(null)
const submittingOrder = ref(false)
const marketStatus = ref(null)
const health = ref(null)
let searchTimeout = null

const pageSubtitle = computed(() => props.market === 'crypto'
  ? 'Digital assets, movers, and fast execution in one dedicated desk.'
  : 'Equities, market leaders, and execution tools in one dedicated desk.')
const instrumentLabel = computed(() => props.market === 'crypto' ? 'Crypto pairs' : 'Stocks')
const quantityLabel = computed(() => props.market === 'crypto' ? 'unit' : 'share')
const marketBadgeLabel = computed(() => props.market === 'crypto' ? 'CRYPTO' : 'STOCK')
const searchPlaceholder = computed(() => props.market === 'crypto' ? 'Search crypto pairs...' : 'Search for a stock...')
const selectedMarketLabel = computed(() => marketOptions.find(option => option.value === props.market)?.label || 'Stocks')

const topMovers = ref({
  data: { gainers: [], losers: [] },
  count: 20,
  gainersDisplayCount: 5,
  losersDisplayCount: 5
})
const tradeCandidates = ref([])
const tradeCandidatesLoading = ref(false)
const tradeCandidatesMeta = ref(null)

const { lastUpdate, addMessageHandler, send, wsConnected } = useWebSocket()

const SCREENER_CANDIDATES_REFRESH_MS = 60_000
let tradeCandidatesInterval = null

function notifyScreenerDeskPresence(active) {
  const ok = send(JSON.stringify({ type: 'screener-desk', active }))
  if (!ok && active) {
    // Socket not ready yet; watch(wsConnected) will retry.
  }
}

function startTradeCandidatesPolling() {
  if (tradeCandidatesInterval) return
  tradeCandidatesInterval = setInterval(() => {
    if (!tradeCandidatesLoading.value) loadTradeCandidates()
  }, SCREENER_CANDIDATES_REFRESH_MS)
}

function stopTradeCandidatesPolling() {
  if (tradeCandidatesInterval) {
    clearInterval(tradeCandidatesInterval)
    tradeCandidatesInterval = null
  }
}
const paginatedStocks = computed(() => stocks.value)
const tradeCandidatesUsedFallback = computed(() => !!tradeCandidatesMeta.value?.usedFallback)

const tableHeaders = [
  { key: 'symbol', label: 'Symbol' },
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price', align: 'right' },
  { key: 'actions', label: 'Actions', align: 'center' }
]

const pendingEnvironmentLabel = computed(() => {
  const env = health.value?.tradingEnvironment || (health.value?.effectiveSimulation ? 'simulation' : 'live')
  if (env === 'simulation') return 'Simulation mode'
  if (env === 'paper') return 'Paper trading'
  return 'Live trading'
})

const providerSummary = computed(() => {
  const broker = health.value?.broker?.label || 'Unknown broker'
  const dataProvider = health.value?.marketDataProvider?.label || 'Unknown data provider'
  return `Execution: ${broker} • Data: ${dataProvider}`
})

const marketGate = computed(() => {
  const payload = marketStatus.value?.data || marketStatus.value || {}
  const status = String(payload.status || payload.marketState || '').toLowerCase()
  const isOpen = props.market === 'crypto'
    ? true
    : (payload.isOpen === true || status === 'open')

  if (isOpen) {
    return {
      reason: 'open',
      title: props.market === 'crypto' ? 'Crypto market available' : 'Market open',
      message: props.market === 'crypto'
        ? 'Crypto orders are available continuously. Review the ticket carefully before sending.'
        : (payload.message || 'Orders can be submitted now.')
    }
  }

  const nextOpen = payload.nextOpen ? new Date(payload.nextOpen).toLocaleString() : null
  return {
    reason: status || 'closed',
    title: 'Market closed',
    message: payload.message || (nextOpen ? `Orders are disabled until the market reopens at ${nextOpen}.` : 'Orders are disabled while the market is closed.')
  }
})

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

async function refreshTradingContext() {
  try {
    const [healthPayload, marketPayload] = await Promise.all([checkHealth(), fetchMarketStatus()])
    health.value = healthPayload.data || healthPayload
    marketStatus.value = marketPayload.data || marketPayload
  }
  catch (contextError) {
    console.error('Failed to refresh trading context:', contextError)
  }
}

async function loadTradeCandidates() {
  tradeCandidatesLoading.value = true
  try {
    const payload = await fetchTradeCandidates(8, props.market)
    tradeCandidates.value = payload?.candidates || []
    tradeCandidatesMeta.value = payload || null
  }
  catch (candidateError) {
    console.error('Failed to load trade candidates:', candidateError)
    tradeCandidates.value = []
    tradeCandidatesMeta.value = null
  }
  finally {
    tradeCandidatesLoading.value = false
  }
}

async function loadMovers() {
  try {
    const top = topMovers.value.count
    const payload = await fetchTopMovers(top, props.market)
    const data = payload?.data || payload
    let gainers = Array.isArray(data?.gainers) ? data.gainers : []
    let losers = Array.isArray(data?.losers) ? data.losers : []

    if (!gainers.length && !losers.length) {
      const list = Array.isArray(data?.movers) ? data.movers : (Array.isArray(data) ? data : [])
      if (list.length) {
        gainers = list.filter(r => (r.change ?? r.change_value ?? 0) > 0)
        losers = list.filter(r => (r.change ?? r.change_value ?? 0) < 0)
      }
    }

    const normalize = arr => (arr || []).slice(0, top).map(r => ({ ...r, market: props.market, pct: extractPercent(r) }))
    const normalizedGainers = normalize(gainers)
    const normalizedLosers = normalize(losers)

    try {
      const allSymbols = [...normalizedGainers, ...normalizedLosers].map(stock => stock.symbol)
      if (allSymbols.length > 0) {
        const trendsResponse = await fetchBatchTrends(allSymbols, 20)
        for (const item of [...normalizedGainers, ...normalizedLosers]) {
          const trendInfo = trendsResponse?.[item.symbol]
          item.trendData = trendInfo?.data || []
          item.trendFallback = trendInfo?.fallback || null
        }
      }
    }
    catch (trendError) {
      console.warn('Batch trend loading failed for trading desk:', trendError.message)
      for (const item of [...normalizedGainers, ...normalizedLosers]) {
        item.trendData = []
        item.trendFallback = null
      }
    }

    topMovers.value.data = { gainers: normalizedGainers, losers: normalizedLosers }
  }
  catch (e) {
    console.error('Failed to load movers:', e)
    topMovers.value.data = { gainers: [], losers: [] }
  }
}

async function fetchStocks(resetPage = false) {
  try {
    if (resetPage) currentPage.value = 1
    loading.value = true
    fetchingPrices.value = true

    const data = await fetchAllStocks(currentPage.value, itemsPerPage, searchQuery.value, props.market)
    stocks.value = (data.stocks || []).map(stock => ({
      ...stock,
      market: props.market,
      marketState: stock.marketState || (props.market === 'crypto' ? 'open' : 'closed'),
      marketMessage: stock.marketMessage || (props.market === 'crypto' ? 'Crypto market available' : 'Market Status Unavailable'),
      nextOpen: stock.nextOpen || null,
      nextClose: stock.nextClose || null
    }))

    totalStocks.value = data.pagination?.total || 0
    totalPages.value = data.pagination?.totalPages || 1
    loading.value = false
    fetchingPrices.value = false
    lastUpdate.value = new Date().toLocaleTimeString()
  }
  catch (err) {
    error.value = `Failed to load ${instrumentLabel.value.toLowerCase()}. Make sure the API server is running.`
    console.error('Error fetching instruments:', err)
    loading.value = false
    fetchingPrices.value = false
  }
}

function onSearchInput() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => { fetchStocks(true) }, 500)
}

function handleSearchChange() {
  onSearchInput()
}

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

function openListOrderConfirmation(stock, side) {
  if (stock.tradable === false) {
    $waveui.notify('This symbol is not tradable for your brokerage account.', 'warning')
    return
  }
  pendingOrder.value = {
    symbol: String(stock.symbol).toUpperCase(),
    side,
    currency: stock.currency || 'USD',
    estimatedNotional: Number(stock.price || 0),
    tradable: stock.tradable
  }
  showOrderConfirmation.value = true
}

async function confirmListOrder() {
  if (!pendingOrder.value) return
  if (marketGate.value.reason !== 'open') {
    $waveui.notify(marketGate.value.message, 'warning')
    return
  }
  if (pendingOrder.value.tradable === false) {
    $waveui.notify('This symbol is not tradable for your brokerage account.', 'warning')
    return
  }

  submittingOrder.value = true
  try {
    const placed = await postOrder({
      symbol: pendingOrder.value.symbol,
      qty: 1,
      side: pendingOrder.value.side,
      type: 'market'
    })
    const filledSym = placed?.symbol || pendingOrder.value.symbol
    if (placed?.requested_symbol && filledSym && placed.requested_symbol !== filledSym) {
      $waveui.notify(
        `Order placed on ${filledSym} (USD pair) instead of ${placed.requested_symbol} so USD buying power is used.`,
        'success',
        9000
      )
    }
    else {
      $waveui.notify(`Order placed: MARKET ${pendingOrder.value.side.toUpperCase()} 1 ${filledSym}`, 'success')
    }
    showOrderConfirmation.value = false
    pendingOrder.value = null
    await refreshTradingContext()
  }
  catch (err) {
    console.error('Error placing quick order:', err)
    $waveui.notify(err.message || 'Failed to place order', 'error')
  }
  finally {
    submittingOrder.value = false
  }
}

function handleMarketUpdate(data) {
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
    if (data.marketState) {
      existingStock.marketState = data.marketState
      existingStock.marketMessage = data.marketMessage || 'Status Updated'
      existingStock.nextOpen = data.nextOpen
      existingStock.nextClose = data.nextClose
    }
  }
}

function handleTrade(data) {
  const stockIndex = stocks.value.findIndex(s => s.symbol === data.symbol)
  if (stockIndex !== -1) {
    stocks.value[stockIndex].price = data.price
    if (data.marketState) {
      stocks.value[stockIndex].marketState = data.marketState
      stocks.value[stockIndex].marketMessage = data.marketMessage || 'Status Updated'
      stocks.value[stockIndex].nextOpen = data.nextOpen
      stocks.value[stockIndex].nextClose = data.nextClose
    }
  }
}

function handleMarketStatusUpdate(data) {
  stocks.value.forEach(stock => {
    if (!stock.marketState || stock.marketState === 'unknown' || stock.marketMessage === 'Loading...') {
      stock.marketState = data.status || data.data?.status || stock.marketState || 'closed'
      stock.marketMessage = data.message || data.data?.message || 'Market Status Updated'
      stock.nextOpen = data.nextOpen || data.data?.nextOpen
      stock.nextClose = data.nextClose || data.data?.nextClose
    }
  })
}

function setupWebSocket() {
  addMessageHandler('market-update', handleMarketUpdate)
  addMessageHandler('price', handlePriceUpdate)
  addMessageHandler('trade', handleTrade)
  addMessageHandler('market-status-update', handleMarketStatusUpdate)
}

watch(wsConnected, online => {
  if (online) notifyScreenerDeskPresence(true)
})

onMounted(async () => {
  loading.value = true
  try {
    await Promise.all([fetchStocks(), loadMovers(), loadTradeCandidates(), refreshTradingContext()])
    setupWebSocket()
    notifyScreenerDeskPresence(true)
    startTradeCandidatesPolling()
  }
  catch (mountedError) {
    console.error('Error during trading desk initialization:', mountedError)
    loading.value = false
  }
})

watch(() => props.market, async () => {
  searchQuery.value = ''
  currentPage.value = 1
  await Promise.all([fetchStocks(true), loadMovers(), loadTradeCandidates(), refreshTradingContext()])
})

onBeforeUnmount(() => {
  if (searchTimeout) clearTimeout(searchTimeout)
  stopTradeCandidatesPolling()
  notifyScreenerDeskPresence(false)
})
</script>

<style lang="scss" scoped>
.clickable-row {
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {background-color: rgba(255, 255, 255, 0.08) !important;}
}

.market-switcher {
  border: 1px solid color-mix(in srgb, var(--w-primary-color) 12%, transparent);
}

.screener-card {border: 1px solid rgba(255, 255, 255, 0.06);}

.catalyst-fire-wrap {
  cursor: help;
  display: inline-flex;
  align-items: center;
  line-height: 0;
}

.catalyst-fire-icon {color: #ff922b;}

.catalyst-tooltip-content {
  max-width: 20rem;
  padding: 2px 0;
}

:deep(.no-data .w-table__cell) {background: none;}
:deep(.w-table__header) {padding: 12px 8px; background: none;}
:deep(.w-table__header:first-child, .w-table__cell:first-child) {padding-left: 16px;}
:deep(.w-table__header:last-child, .w-table__cell:last-child) {padding-right: 16px;}
</style>
