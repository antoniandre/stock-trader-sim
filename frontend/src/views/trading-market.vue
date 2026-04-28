<template lang="pug">
.trading-market-view.w-flex.column.gap3
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

  .glass-box.w-flex.wrap.gap2.py2.px4
    .w-flex.column.gap1
      .w-flex.align-center.gap2
        .title3.size--sm.op5 TOP GAINERS
        w-button.ml2(@click="$router.push(tradingTopMoversPath('gainers', market))" text xs round) View All
      .w-flex.gap1.wrap
        template(v-for="mover in displayedGainers" :key="`g-${mover.symbol}`")
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
        .title3.size--sm.op5 TOP LOSERS
        w-button.ml2(@click="$router.push(tradingTopMoversPath('losers', market))" text xs round) View All
      .w-flex.gap1.wrap
        template(v-for="mover in displayedLosers" :key="`l-${mover.symbol}`")
          w-tag.clickable.px2.py1(
            @click="$router.push(tradingTickerPath(mover.symbol, market))"
            round
            xs)
            strong {{ topMovers.data.losers[n - 1].symbol }}
            span.ml2.currency-negative {{ ~~(topMovers.data.losers[n - 1].pct) }}%
        w-button(v-if="topMovers.losersDisplayCount < 15" @click="topMovers.losersDisplayCount += 15" color="info" text xs round)
          span.mb2.mt-1.size--xl ...

  .glass-box.px4.py2
    .w-flex.align-center.justify-between.gap3.wrap
      .w-flex.column.gap1
        .w-flex.align-center.gap1
          .title3 Best potential trades
          w-tooltip
            template(#activator="{ on }")
              w-button.w-button--icon(v-on="on" @click="recommendedTrades.expanded = !recommendedTrades.expanded" text)
                icon.size--xs(:icon="recommendedTrades.expanded ? 'line-md:minus-circle' : 'line-md:arrows-diagonal'")
            | Expand for more details
        p.caption Ranked {{ selectedMarketLabel.toLowerCase() }} candidates with quick reasons, so the desk has somewhere to start.
      .w-flex.align-center.gap2.no-grow
        w-tag(v-if="recommendedTrades.meta?.usedFallback" round sm color="warning") Fallback data
        w-button(@click="loadRecommendedTrades" :loading="recommendedTrades.loading" text xs round) Refresh
    .w-flex.column.py8.align-center.justify-center(v-if="recommendedTrades.loading && !recommendedTrades.candidates.length")
      w-progress(circle)
      p.op5.mt3 Building the screener...
    w-grid.mt3(v-else-if="recommendedTrades.candidates.length" :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }" gap="3")
      router-link.gradient-card.gradient-card--tall.clickable(
        v-for="candidate in recommendedTrades.candidates"
        :key="candidate.symbol"
        :to="tradingTickerPath(candidate.symbol, market)")
        .gradient-card__wrap.fill-height.py2
          .w-flex.wrap.align-center.justify-between.gap2
            .w-flex.align-center.justify-between(:class="recommendedTrades.expanded ? 'gap2' : 'gap1'")
              .w-flex.align-center.gap1.no-grow
                strong.title3.no-grow {{ candidate.symbol }}
                w-tooltip(v-if="candidate.dailyCatalyst && candidate.catalystBadgeEligible !== false")
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
            .w-flex.justify-between.align-center.gap1.no-grow(v-if="recommendedTrades.expanded")
              span.size--xs.op6 Confidence:
              w-tag(round xs :class="recommendedTrades.expanded ? 'px2' : ''") {{ candidate.confidence.toUpperCase() }}
            w-tooltip(v-else caption)
              template(#activator="{ on }")
                w-tag(v-on="on" round xs :class="recommendedTrades.expanded ? 'px2' : ''") {{ candidate.confidence.toUpperCase() }}
              | Confidence level
          .w-flex.align-center.justify-between.wrap(v-if="recommendedTrades.expanded" :class="recommendedTrades.expanded ? 'mt2 gap2' : 'mt1 gap1'")
            .w-flex.column.bdrs3.contrast-o05--bg.px3.py2.no-grow
              span.size--xs.op6 Score
              strong.size--xl.lh0 {{ candidate.score }}
            .w-flex.column.bdrs3.contrast-o05--bg.px3.py2.no-grow
              span.size--xs.op6 Move
              strong(:class="candidate.changePct >= 0 ? 'currency-positive' : 'currency-negative'") {{ candidate.changePct >= 0 ? '+' : '' }}{{ candidate.changePct }}%
            .w-flex.column.bdrs3.contrast-o05--bg.px3.py2.no-grow(v-if="candidate.price")
              span.size--xs.op6 Price
              strong(v-html="formatCurrency(candidate.price, 'USD', 2, false)")
          .w-flex.align-center.justify-between.gap1.wrap(v-else)
            span(v-if="candidate.price" v-html="formatCurrency(candidate.price, 'USD', 2, false)")
            span.body(:class="candidate.changePct >= 0 ? 'currency-positive' : 'currency-negative'") {{ candidate.changePct >= 0 ? '+' : '' }}{{ candidate.changePct }}%
            strong.size--sm.op6 &bull; Score {{ candidate.score }}
          .size--sm.contrast-o7.mt2.mb0(v-if="recommendedTrades.expanded")
            | {{ candidate.thesis }}&nbsp;
            w-tooltip
              template(#activator="{ on }")
                w-icon(v-on="on" color="white" size="1rem") wi-info-circle
              ul.screener-reasons.mt2.mb0.pl4
                li.size--sm(v-for="reason in candidate.reasons" :key="`${candidate.symbol}-${reason}`") {{ reason }}

    .w-flex.column.py8.align-center.justify-center(v-else)
      w-icon(color="info" size="3rem") wi-info-circle
      p.op6.mt3.mb0 No ranked candidates yet. Try refreshing once market data settles.

  .glass-box.px4.py2.watchlist
    .w-flex.align-center.justify-between.gap2.wrap
      .grow
        .title3.size--sm.op5 WATCHLIST
        p.caption.op6.mb0(v-if="alpacaWatchlist.name") {{ alpacaWatchlist.name }}
        p.caption.op6.mb0(v-else) From your Alpaca account
        p.caption.op5.mb0(v-if="alpacaWatchlist.tradingEnvironment && !alpacaWatchlist.stocks.length && !alpacaWatchlist.loading") Watchlists follow this API environment ({{ alpacaWatchlist.tradingEnvironment }}). Paper and live accounts have separate lists.
      .w-flex.align-center.gap2.no-grow
        w-select.no-grow(
          v-if="alpacaWatchlist.watchlists.length > 1"
          v-model="alpacaWatchlist.selectedWatchlistId"
          :items="alpacaWatchlistSelectItems"
          outline
          round
          xs)
        w-button(
          @click="loadAlpacaWatchlist"
          :loading="alpacaWatchlist.loading"
          text xs round) Refresh
    .w-flex.column.py6.align-center.justify-center(v-if="alpacaWatchlist.loading && !alpacaWatchlist.stocks.length")
      w-progress(circle xs)
      p.op5.mt2.mb0 Loading watchlist…
    .w-flex.column.py6.align-center.justify-center(v-else-if="alpacaWatchlist.unavailable")
      p.op6.mb0.text-center {{ alpacaWatchlist.message }}
    .w-flex.column.py6.align-center.justify-center(v-else-if="alpacaWatchlist.error")
      p.error.mb0.text-center {{ alpacaWatchlist.error }}
    .w-flex.column.py6.align-center.justify-center(v-else-if="!alpacaWatchlist.stocks.length")
      p.op6.mb0.text-center {{ alpacaWatchlist.message || 'No symbols in this watchlist for this desk.' }}
      p.size--xs.op5.mb0.mt2.text-center(v-if="alpacaWatchlist.alpacaError") {{ alpacaWatchlist.alpacaError }}
    w-grid.gap4(v-else :columns="{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }")
      ticker-card(
        v-for="stock in alpacaWatchlist.stocks"
        :key="stock.symbol"
        :stock="stock"
        :market="market"
        :hide-empty-trends="true"
        :daily-catalyst="dailyCatalystForWatchlistSymbol(stock.symbol)")

  .w-flex.column.py12.align-center.justify-center(v-if="loading")
    w-progress(circle)
    p.op5.mt4 Loading {{ instrumentLabel.toLowerCase() }}...

  .error-message.w-flex.column.py12.align-center.justify-center(v-else-if="error")
    w-icon(color="error" size="4rem") wi-info-circle
    h2.title2.error.mt4.mb2 Oops!
    p.mb4 {{ error }}
    w-button(@click="connectWebSocket" text bg-color="error" round) Try again

  div(v-else)
    .glass-box.ovh
      w-input.search-input.w-input.light.h-auto.grow(
        v-model="symbolListSearch.keyword"
        @input="handleSearchChange"
        type="search"
        :placeholder="searchPlaceholder"
        input-class="py3 pl5 pr3 title3")
        template(#icon-left)
          w-icon.pl6(size="1.5rem") wi-search

      w-table.bd0(
        :headers="tableHeaders"
        :items="stocks"
        :filter="symbolListSearch.keywordFilter(symbolListSearch.keyword)"
        :pagination="tablePagination"
        :fetch="fetchStocksPage"
        :loading="tableLoading"
        fixed-headers
        fixed-footers
        style="height: 600px")
        template(#no-data)
          .w-flex.column.align-center.justify-center.py12
            w-icon(color="info" size="4rem") wi-info-circle
            h2.title2.info.mt4.mb2 No results found
            p.mb4 No {{ instrumentLabel.toLowerCase() }} matched your search.
            w-button(@click="refreshStocks(true)" text bg-color="info" round) Refresh
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
    .w-flex.align-center.gap2.wrap.justify-end.mt2
      span.op5.size--sm Desk: {{ selectedMarketLabel }}
      span.op5.size--sm(v-if="symbolListSearch.keyword") • Filtered by "{{ symbolListSearch.keyword }}"

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
import { ref, reactive, onMounted, onBeforeUnmount, computed, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchAllStocks, fetchTopMovers, fetchBatchTrends, fetchTradeCandidates, fetchScreenerSummary, fetchAlpacaWatchlist, postOrder, fetchMarketStatus, checkHealth } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { formatCurrency } from '@/utils/formatters'
import TickerCard from '@/components/ticker-card.vue'
import TickerLogo from '@/components/ticker-logo.vue'
import OrderConfirmationDialog from '@/components/order-confirmation-dialog.vue'
import { tradingOverviewPath, tradingTickerPath, tradingTopMoversPath } from '@/utils/trading-routes'
import { usePageTitle } from '@/composables/use-page-title'

const props = defineProps({
  market: {
    type: String,
    default: 'stocks',
    validator: value => ['stocks', 'crypto'].includes(value)
  }
})

usePageTitle(computed(() => props.market === 'crypto' ? 'Crypto' : 'Stocks'))

const $waveui = inject('$waveui')
const route = useRoute()
const router = useRouter()
const stocks = ref([])

const symbolListSearch = reactive({
  keyword: searchFromQuery(),
  keywordFilter: keyword => item => {
    const kw = String(keyword || '')
    const allTheColumns = `${item.symbol || ''} ${item.name || ''}`
    return new RegExp(kw.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&'), 'i').test(allTheColumns)
  }
})
const marketOptions = [
  { label: 'Stocks', value: 'stocks' },
  { label: 'Crypto', value: 'crypto' }
]
const loading = ref(true)
const error = ref(null)
const currentPage = ref(pageFromQuery())
const itemsPerPageOptions = [20, 50, 100, 200]
const currentItemsPerPage = ref(50)
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
const recommendedTrades = reactive({
  expanded: false,
  candidates: [],
  loading: false,
  meta: null
})

const alpacaWatchlist = reactive({
  loading: false,
  stocks: [],
  watchlists: [],
  selectedWatchlistId: null,
  name: '',
  unavailable: false,
  message: null,
  error: null,
  alpacaError: null,
  tradingEnvironment: null
})

/** Avoid refetch loop when the API assigns the same watchlist id we just loaded. */
let lastLoadedAlpacaWatchlistId = null

const alpacaWatchlistSelectItems = computed(() =>
  alpacaWatchlist.watchlists.map(w => ({
    label: w.name || w.id,
    value: w.id
  }))
)

const { lastUpdate, addMessageHandler, removeMessageHandler, send, wsConnected, subscribeToStocks, unsubscribeFromStocks } = useWebSocket()

let subscribedWatchlistSymbols = []
let subscribedScreenerSymbols = []
let screenersFallbackTimer = null

function notifyScreenerDeskPresence(active) {
  const ok = send({ type: 'screener-desk', active })
  if (!ok && active) {
    // Socket not ready yet; watch(wsConnected) will retry.
  }
}

function syncWatchlistSubscriptions() {
  const next = alpacaWatchlist.stocks
    .slice(0, 30)
    .map(stock => stock.symbol)
    .filter(Boolean)
  const nextSet = new Set(next)
  const prevSet = new Set(subscribedWatchlistSymbols)
  const toAdd = next.filter(symbol => !prevSet.has(symbol))
  const toRemove = subscribedWatchlistSymbols.filter(symbol => !nextSet.has(symbol))
  if (toAdd.length) subscribeToStocks(toAdd)
  if (toRemove.length) unsubscribeFromStocks(toRemove)
  subscribedWatchlistSymbols = next
}

function syncScreenerSubscriptions() {
  const symbols = [
    ...topMovers.value.data.gainers.slice(0, topMovers.value.gainersDisplayCount),
    ...topMovers.value.data.losers.slice(0, topMovers.value.losersDisplayCount),
    ...recommendedTrades.candidates
  ].map(item => item.symbol).filter(Boolean)
  const next = [...new Set(symbols)]
  const nextSet = new Set(next)
  const prevSet = new Set(subscribedScreenerSymbols)
  const toAdd = next.filter(symbol => !prevSet.has(symbol))
  const toRemove = subscribedScreenerSymbols.filter(symbol => !nextSet.has(symbol))
  if (toAdd.length) subscribeToStocks(toAdd)
  if (toRemove.length) unsubscribeFromStocks(toRemove)
  subscribedScreenerSymbols = next
}

function requestScreenerSnapshot({ fallback = true } = {}) {
  recommendedTrades.loading = true
  const sent = send({
    type: 'screeners-snapshot',
    market: props.market,
    top: topMovers.value.count,
    limit: 8
  })
  if (!sent && fallback) {
    loadDashboardScreeners()
    return false
  }
  if (screenersFallbackTimer) clearTimeout(screenersFallbackTimer)
  if (fallback) {
    screenersFallbackTimer = setTimeout(() => {
      if (recommendedTrades.loading && !recommendedTrades.candidates.length) loadDashboardScreeners()
    }, 2500)
  }
  return sent
}
const tablePagination = computed(() => ({
  page: currentPage.value,
  itemsPerPage: currentItemsPerPage.value,
  total: totalStocks.value,
  itemsPerPageOptions
}))
const tableLoading = computed(() => fetchingPrices.value && stocks.value.length ? 'header' : false)

const tableHeaders = [
  { key: 'symbol', label: 'Symbol' },
  { key: 'name', label: 'Name' },
  { key: 'price', label: 'Price', align: 'right', width: '100px' },
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

function firstQueryValue(value) {
  return Array.isArray(value) ? value[0] : value
}

function pageFromQuery(query = route.query) {
  const parsed = Number.parseInt(firstQueryValue(query.page), 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1
}

function searchFromQuery(query = route.query) {
  return String(firstQueryValue(query.search) || '').trim()
}

function syncListStateFromRoute() {
  currentPage.value = pageFromQuery()
  symbolListSearch.keyword = searchFromQuery()
}

function queryForListState({ page = currentPage.value, search = symbolListSearch.keyword } = {}) {
  const nextQuery = { ...route.query }
  const normalizedPage = Number.parseInt(page, 10)
  const cleanPage = Number.isFinite(normalizedPage) && normalizedPage > 0 ? normalizedPage : 1
  const cleanSearch = String(search || '').trim()

  if (cleanPage > 1) nextQuery.page = String(cleanPage)
  else delete nextQuery.page

  if (cleanSearch) nextQuery.search = cleanSearch
  else delete nextQuery.search

  return nextQuery
}

async function syncListUrlState({ page = currentPage.value, search = symbolListSearch.keyword, replace = false } = {}) {
  const cleanPage = Math.max(1, Number.parseInt(page, 10) || 1)
  const cleanSearch = String(search || '').trim()
  if (pageFromQuery() === cleanPage && searchFromQuery() === cleanSearch) return false

  const location = {
    path: route.path,
    query: queryForListState({ page: cleanPage, search: cleanSearch })
  }
  if (replace) await router.replace(location)
  else await router.push(location)
  return true
}

async function loadRecommendedTrades() {
  if (requestScreenerSnapshot({ fallback: false })) return
  recommendedTrades.loading = true
  try {
    const payload = await fetchTradeCandidates(8, props.market)
    recommendedTrades.candidates = payload?.candidates || []
    recommendedTrades.meta = payload || null
    syncScreenerSubscriptions()
  }
  catch (candidateError) {
    console.error('Failed to load trade candidates:', candidateError)
    recommendedTrades.candidates = []
    recommendedTrades.meta = null
  }
  finally {
    recommendedTrades.loading = false
  }
}

async function loadDashboardScreeners() {
  recommendedTrades.loading = true
  const started = performance.now()
  try {
    const payload = await fetchScreenerSummary({
      top: topMovers.value.count,
      limit: 8,
      market: props.market,
      trendPoints: 20
    })
    const movers = payload?.movers || {}
    const trends = payload?.trends || {}
    const attachTrend = item => {
      const trendInfo = trends?.[item.symbol]
      return {
        ...item,
        market: props.market,
        pct: extractPercent(item),
        trendData: trendInfo?.data || item.trendData || [],
        trendFallback: trendInfo?.fallback || item.trendFallback || null,
        volumeAnalysis: trendInfo?.volumeAnalysis || item.volumeAnalysis || null
      }
    }
    topMovers.value.data = {
      gainers: (movers.gainers || []).slice(0, topMovers.value.count).map(attachTrend),
      losers: (movers.losers || []).slice(0, topMovers.value.count).map(attachTrend)
    }
    recommendedTrades.candidates = payload?.candidates || []
    recommendedTrades.meta = {
      ...(payload?.candidatesMeta || {}),
      ...(payload?.meta || {}),
      loadedInMs: Math.round(performance.now() - started)
    }
    syncScreenerSubscriptions()
  }
  catch (summaryError) {
    console.warn('Dashboard screener summary failed, falling back to dedicated loaders:', summaryError.message)
    await Promise.all([loadMovers(), loadRecommendedTrades()])
  }
  finally {
    recommendedTrades.loading = false
    lastUpdate.value = new Date().toLocaleTimeString()
  }
}

async function loadAlpacaWatchlist() {
  alpacaWatchlist.loading = true
  alpacaWatchlist.error = null
  alpacaWatchlist.alpacaError = null
  try {
    const data = await fetchAlpacaWatchlist({
      market: props.market,
      watchlistId: alpacaWatchlist.selectedWatchlistId || undefined
    })
    alpacaWatchlist.unavailable = !!data.unavailable
    alpacaWatchlist.message = data.message || null
    alpacaWatchlist.name = data.name || ''
    alpacaWatchlist.tradingEnvironment = data.tradingEnvironment || null
    alpacaWatchlist.alpacaError = data.alpacaError || null
    alpacaWatchlist.watchlists = data.watchlists || []
    alpacaWatchlist.stocks = (data.stocks || []).map(s => ({
      ...s,
      market: props.market,
      marketState: s.marketState || (props.market === 'crypto' ? 'open' : 'closed'),
      marketMessage: s.marketMessage || (props.market === 'crypto' ? 'Crypto market available' : 'Market Status Unavailable')
    }))
    const resolvedId = data.watchlistId || null
    lastLoadedAlpacaWatchlistId = resolvedId
    alpacaWatchlist.selectedWatchlistId = resolvedId
  }
  catch (e) {
    console.error('Failed to load Alpaca watchlist:', e)
    alpacaWatchlist.error = e.message || 'Failed to load watchlist'
    alpacaWatchlist.stocks = []
  }
  finally {
    alpacaWatchlist.loading = false
  }
}

watch(
  () => alpacaWatchlist.selectedWatchlistId,
  async id => {
    if (id === lastLoadedAlpacaWatchlistId) return
    await loadAlpacaWatchlist()
  }
)

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
    const showPageLoader = !stocks.value.length
    loading.value = showPageLoader
    fetchingPrices.value = true

    const data = await fetchAllStocks(currentPage.value, currentItemsPerPage.value, symbolListSearch.keyword, props.market)
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
    fetchingPrices.value = false
    loading.value = false
    lastUpdate.value = new Date().toLocaleTimeString()
  }
  catch (err) {
    error.value = `Failed to load ${instrumentLabel.value.toLowerCase()}. Make sure the API server is running.`
    console.error('Error fetching instruments:', err)
    loading.value = false
    fetchingPrices.value = false
  }
}

async function refreshStocks(resetPage = false) {
  if (!resetPage) {
    await fetchStocks()
    return
  }

  const navigated = await syncListUrlState({ page: 1, search: symbolListSearch.keyword, replace: true })
  if (!navigated) await fetchStocks(true)
}

function onSearchInput() {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(async () => {
    currentPage.value = 1
    await fetchStocks()
    syncListUrlState({ page: 1, search: symbolListSearch.keyword, replace: true })
  }, 500)
}

function handleSearchChange() {
  onSearchInput()
}

async function goToPage(page) {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    const navigated = await syncListUrlState({ page })
    if (!navigated) await fetchStocks()
  }
}

async function fetchStocksPage({ page, itemsPerPage }) {
  const previousItemsPerPage = currentItemsPerPage.value
  if (Number.isFinite(Number(itemsPerPage)) && Number(itemsPerPage) > 0) {
    currentItemsPerPage.value = Number(itemsPerPage)
  }
  const nextPage = Number(page) || 1
  if (nextPage === currentPage.value && previousItemsPerPage !== currentItemsPerPage.value) {
    await fetchStocks()
    return
  }
  await goToPage(nextPage)
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
    const wl = alpacaWatchlist.stocks.find(s => s.symbol === stock.symbol)
    if (wl) {
      wl.price = stock.price
      wl.lastSide = stock.lastSide || 'buy'
      wl.currency = stock.currency || 'USD'
      wl.currencySymbol = stock.currencySymbol || '$'
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
  const wl = alpacaWatchlist.stocks.find(s => s.symbol === data.symbol)
  if (wl) {
    wl.price = data.price
    wl.lastSide = data.lastSide || 'buy'
    wl.currency = data.currency || 'USD'
    wl.currencySymbol = data.currencySymbol || '$'
    if (data.marketState) {
      wl.marketState = data.marketState
      wl.marketMessage = data.marketMessage || 'Status Updated'
      wl.nextOpen = data.nextOpen
      wl.nextClose = data.nextClose
    }
  }
  updateScreenerPrice(data)
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
  const wl = alpacaWatchlist.stocks.find(s => s.symbol === data.symbol)
  if (wl) {
    wl.price = data.price
    if (data.marketState) {
      wl.marketState = data.marketState
      wl.marketMessage = data.marketMessage || 'Status Updated'
      wl.nextOpen = data.nextOpen
      wl.nextClose = data.nextClose
    }
  }
  updateScreenerPrice(data)
}

function patchScreenerItem(item, data) {
  if (!item || item.symbol !== data.symbol) return
  item.price = data.price
  item.lastSide = data.lastSide || item.lastSide || 'buy'
  item.currency = data.currency || item.currency || 'USD'
  item.currencySymbol = data.currencySymbol || item.currencySymbol || '$'
}

function updateScreenerPrice(data) {
  for (const item of topMovers.value.data.gainers) patchScreenerItem(item, data)
  for (const item of topMovers.value.data.losers) patchScreenerItem(item, data)
  for (const item of recommendedTrades.candidates) patchScreenerItem(item, data)
}

function normalizeMoverItem(item) {
  return {
    ...item,
    market: props.market,
    pct: extractPercent(item)
  }
}

function handleScreenerSnapshot(message) {
  if (message.market && message.market !== props.market) return
  if (screenersFallbackTimer) {
    clearTimeout(screenersFallbackTimer)
    screenersFallbackTimer = null
  }
  const payload = message.data || {}
  const movers = payload.movers || {}
  topMovers.value.data = {
    gainers: (movers.gainers || []).slice(0, topMovers.value.count).map(normalizeMoverItem),
    losers: (movers.losers || []).slice(0, topMovers.value.count).map(normalizeMoverItem)
  }
  recommendedTrades.candidates = payload.candidates || []
  recommendedTrades.meta = {
    ...(payload.candidatesMeta || {}),
    ...(message.meta || {}),
    loadedVia: 'websocket'
  }
  recommendedTrades.loading = false
  syncScreenerSubscriptions()
}

function handleScreenerError(message) {
  if (message.market && message.market !== props.market) return
  console.warn('WS screener snapshot failed, falling back to HTTP:', message.error)
  loadDashboardScreeners()
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
  addMessageHandler('screeners-snapshot', handleScreenerSnapshot)
  addMessageHandler('screeners-error', handleScreenerError)
}

watch(wsConnected, online => {
  if (online) {
    notifyScreenerDeskPresence(true)
    requestScreenerSnapshot()
    syncWatchlistSubscriptions()
    syncScreenerSubscriptions()
  }
})

onMounted(async () => {
  loading.value = true
  try {
    syncListStateFromRoute()
    setupWebSocket()
    await Promise.all([fetchStocks(), loadAlpacaWatchlist(), refreshTradingContext()])
    notifyScreenerDeskPresence(true)
    requestScreenerSnapshot()
    syncWatchlistSubscriptions()
  }
  catch (mountedError) {
    console.error('Error during trading desk initialization:', mountedError)
    loading.value = false
  }
})

watch(() => props.market, async () => {
  syncListStateFromRoute()
  lastLoadedAlpacaWatchlistId = null
  alpacaWatchlist.selectedWatchlistId = null
  topMovers.value.data = { gainers: [], losers: [] }
  recommendedTrades.candidates = []
  await Promise.all([fetchStocks(), loadAlpacaWatchlist(), refreshTradingContext()])
  requestScreenerSnapshot()
  syncWatchlistSubscriptions()
})

watch(
  () => route.query.page,
  async (newPage, oldPage) => {
    if (newPage === oldPage) return
    currentPage.value = pageFromQuery()
    await fetchStocks()
  }
)

onBeforeUnmount(() => {
  if (searchTimeout) clearTimeout(searchTimeout)
  if (screenersFallbackTimer) clearTimeout(screenersFallbackTimer)
  notifyScreenerDeskPresence(false)
  removeMessageHandler('market-update', handleMarketUpdate)
  removeMessageHandler('price', handlePriceUpdate)
  removeMessageHandler('trade', handleTrade)
  removeMessageHandler('market-status-update', handleMarketStatusUpdate)
  removeMessageHandler('screeners-snapshot', handleScreenerSnapshot)
  removeMessageHandler('screeners-error', handleScreenerError)
  if (subscribedWatchlistSymbols.length) unsubscribeFromStocks(subscribedWatchlistSymbols)
  if (subscribedScreenerSymbols.length) unsubscribeFromStocks(subscribedScreenerSymbols)
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

:deep(.w-table__table) {min-height: auto;}
:deep(.w-table__table:has(.no-data)) {min-height: 100%;}

:deep(.w-table__scroll-wrap) {min-height: auto;flex-grow: 1;}
:deep(.w-table--fixed-header thead) {
  background: color-mix(in srgb, var(--w-glass-radial-gradient) 10%, var(--w-base-bg-color) 100%) radial-gradient(20rem circle at 90% 10%, var(--w-glass-radial-gradient), #00ccff12);
  z-index: 2;
}
:deep(.w-table__header) {
  padding: 4px 8px;
  background: none;
  height: 50px;

  &:first-child {padding-left: 16px;}
  &:last-child {padding-right: 16px;}
}
:deep(.w-table tbody) {min-height: 300px;}
:deep(.no-data .w-table__cell) {background: none;}
</style>
