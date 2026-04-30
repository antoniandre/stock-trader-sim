<template lang="pug">
.glass-box.pa6.ovh
  //- Trading History
  .w-flex.column.gap2
    h3.title2
      | Trading History
      small.ml4.grey.size--sm {{ countLabel }}
    p.caption.op6 Most recent trades are shown first.
    w-table.trade-history-table.bd0(
      :key="tableKey"
      :headers="headers"
      fixed-headers
      fixed-footers
      :items="historyItems"
      :pagination="tablePagination"
      :fetch="fetchHistoryPage"
      :loading="historyLoading"
      uid-key="id")
      //- Custom footer: true total + page count from GET /trading-history/count (Alpaca has no total in list calls).
      template(#pagination="{ goToPage }")
        .w-table__pagination.w-pagination
          w-select.w-pagination__items-per-page(
            :model-value="currentItemsPerPage"
            :items="itemsPerPageSelectItems"
            label-position="left"
            label="Items per page"
            label-color="inherit"
            :menu-props="{ top: true }"
            @update:model-value="onItemsPerPageChange")
          .pages-wrap
            w-button.w-pagination__arrow.w-pagination__arrow--prev(
              text
              lg
              icon="wi-chevron-left"
              :disabled="currentPage <= 1 || historyLoading"
              @click="goToPage('-1')")
            template(v-if="fillTotal !== null && !countLoading")
              template(v-if="pagesCount > 7")
                template(v-for="i in pagesCount" :key="'p' + i")
                  w-button.w-pagination__page(
                    v-if="[1, pagesCount, currentPage - 1, currentPage, currentPage + 1].includes(i)"
                    round
                    lg
                    :class="{ 'w-pagination__page--active': i === currentPage }"
                    :disabled="historyLoading"
                    @click="i !== currentPage && goToPage(i)") {{ i }}
                  w-button.w-pagination__page(
                    v-else-if="[1, pagesCount, currentPage - 1, currentPage, currentPage + 1].includes(i - 1)"
                    round
                    lg
                    disabled) …
              template(v-else)
                w-button.w-pagination__page(
                  v-for="i in pagesCount"
                  :key="i"
                  round
                  lg
                  :class="{ 'w-pagination__page--active': i === currentPage }"
                  :disabled="historyLoading"
                  @click="i !== currentPage && goToPage(i)") {{ i }}
            span.op5.px2(v-else) …
            w-button.w-pagination__arrow.w-pagination__arrow--next(
              text
              lg
              icon="wi-chevron-right"
              :disabled="!canGoNext || historyLoading"
              @click="goToPage('+1')")
          span.w-pagination__results {{ resultsRangeLabel }}
      template(#item="{ item }")
        tr
          td.px1.text-bold
            .w-flex.align-center.gap2.flex-wrap
              ticker-logo.mr3(:symbol="item.symbol" size="sm")
              router-link.text-bold.hover-underline(:to="tradingTickerPath(item.symbol, tradingMarketForSymbol(item.symbol))") {{ item.symbol }}
              w-tag.crypto-asset-tag(v-if="isCryptoInstrumentSymbol(item.symbol)" xs round outline color="grey") CRYPTO
          td.px1.text-center
            w-tag.px2.py1.text-bold(:class="item.side === 'buy' ? 'success--bg' : 'error--bg'" round xs)
              | {{ item.side.toUpperCase() }}
          td.px1.text-right {{ item.qty }}
          td.px1.text-right.text-bold(v-html="formatCurrency(item.price, 'USD', 2, false)")
          td.px1.text-right.text-bold(v-html="formatCurrency((item.qty * item.price), 'USD', 2, false)")
          td.px1.text-right.size--sm.w-flex.column.align-end.op7
            .w-flex.align-center.gap1
              icon.grey.op7(icon="mdi:calendar-outline" width="12" height="12")
              span.date-time {{ new Date(item.timestamp).toLocaleDateString() }}
            .w-flex.align-center.gap1
              icon.grey.op7(icon="mdi:clock-outline" width="12" height="12")
              span.date-time {{ new Date(item.timestamp).toLocaleTimeString() }}
      template(#no-data)
        .text-center.py12(v-if="!historyLoading")
          h3.text-bold.mb4 No Trading History
          p.caption No trades found in your Alpaca account.
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import TickerLogo from './ticker-logo.vue'
import { formatCurrency } from '@/utils/formatters'
import { tradingTickerPath } from '@/utils/trading-routes'
import { isCryptoInstrumentSymbol, tradingMarketForSymbol } from '@/utils/symbol-matching'
import { fetchTradingHistory, fetchTradingHistoryCount } from '@/api'

const props = defineProps({
  /** Increment (e.g. from parent) to clear caches and reload from the broker. */
  refreshToken: { type: Number, default: 0 }
})

const historyItems = ref([])
const historyLoading = ref(false)
const currentPage = ref(1)
const currentItemsPerPage = ref(20)
const tableKey = ref(0)

/** Exact FILL count from server (Alpaca cursor walk + cache). */
const fillTotal = ref(null)
const fillCountCapped = ref(false)
const countLoading = ref(true)

const pageCache = new Map()
const afterPage = new Map()

function cacheKey(page, ipp) {
  return `${page}|${ipp}`
}

/**
 * Load sequential pages from the broker until `targetPage` is cached (Alpaca cursor).
 */
async function loadPageInternal(targetPage, ippSafe, { withSpinner } = { withSpinner: true }) {
  if (pageCache.has(cacheKey(targetPage, ippSafe))) return

  if (withSpinner) historyLoading.value = true
  try {
    if (targetPage > 1) {
      if (afterPage.get(targetPage - 1) === undefined) {
        await loadPageInternal(targetPage - 1, ippSafe, { withSpinner: false })
      }
      if (afterPage.get(targetPage - 1) === null) {
        pageCache.set(cacheKey(targetPage, ippSafe), [])
        afterPage.set(targetPage, null)
        return
      }
    }

    const token = targetPage === 1 ? null : afterPage.get(targetPage - 1)
    const { tradingHistory, pagination } = await fetchTradingHistory(ippSafe, token)
    pageCache.set(cacheKey(targetPage, ippSafe), tradingHistory)
    afterPage.set(targetPage, pagination.nextPageToken || null)
  }
  finally {
    if (withSpinner) historyLoading.value = false
  }
}

async function fetchHistoryPage({ page, itemsPerPage: ippIn }) {
  let ipp = Number(ippIn) || currentItemsPerPage.value
  if (!ipp || ipp <= 0) ipp = 20
  ipp = Math.min(Math.max(ipp, 1), 100)

  if (ipp !== currentItemsPerPage.value) {
    currentItemsPerPage.value = ipp
    pageCache.clear()
    afterPage.clear()
    tableKey.value += 1
  }

  currentPage.value = page

  await loadPageInternal(page, ipp, { withSpinner: true })
  historyItems.value = pageCache.get(cacheKey(page, ipp)) || []
}

async function loadFillTotal(bypassCache) {
  countLoading.value = true
  try {
    const { total, capped } = await fetchTradingHistoryCount(bypassCache)
    fillTotal.value = total
    fillCountCapped.value = capped
  }
  catch (e) {
    console.error('Trade history count failed:', e)
    fillTotal.value = 0
    fillCountCapped.value = false
  }
  finally {
    countLoading.value = false
  }
}

const itemsPerPageSelectItems = [20, 50, 100].map(value => ({ label: String(value), value }))

const tablePagination = computed(() => ({
  page: currentPage.value,
  itemsPerPage: currentItemsPerPage.value,
  total: fillTotal.value ?? 0,
  itemsPerPageOptions: [20, 50, 100]
}))

const pagesCount = computed(() => {
  const ipp = currentItemsPerPage.value || 20
  const t = fillTotal.value
  if (t === null || t <= 0) return 1
  return Math.max(1, Math.ceil(t / ipp))
})

const hasMoreAfterCurrentPage = computed(() => Boolean(afterPage.get(currentPage.value)))

const canGoNext = computed(() => {
  if (fillTotal.value !== null && fillTotal.value > 0) {
    return currentPage.value < pagesCount.value
  }
  return hasMoreAfterCurrentPage.value
})

const rangeStart = computed(() => {
  const ipp = currentItemsPerPage.value || 20
  if (fillTotal.value === 0 && !countLoading.value) return 0
  return (currentPage.value - 1) * ipp + 1
})

const rangeEnd = computed(() => {
  const ipp = currentItemsPerPage.value || 20
  const t = fillTotal.value ?? 0
  const n = historyItems.value.length
  const start = (currentPage.value - 1) * ipp + 1
  if (t <= 0) return 0
  if (!n) return Math.max(0, Math.min(start - 1, t))
  return Math.min(start + n - 1, t)
})

const resultsRangeLabel = computed(() => {
  if (countLoading.value && fillTotal.value === null) return 'Loading…'
  const t = fillTotal.value
  if (t === null) return '—'
  if (t <= 0) return '0 of 0'
  const suffix = fillCountCapped.value ? '+' : ''
  return `${rangeStart.value}-${rangeEnd.value} of ${t}${suffix}`
})

async function onItemsPerPageChange(value) {
  const n = Number(value)
  if (!Number.isFinite(n) || n <= 0) return
  if (n === currentItemsPerPage.value) return
  currentItemsPerPage.value = n
  pageCache.clear()
  afterPage.clear()
  currentPage.value = 1
  historyItems.value = []
  fillTotal.value = null
  tableKey.value += 1
  await loadFillTotal(false)
}

const countLabel = computed(() => {
  if (fillTotal.value === null && countLoading.value) return ''
  const t = fillTotal.value
  if (t === null) return ''
  if (t <= 0) return '0 trades'
  if (fillCountCapped.value) return `${t}+ trades`
  return `${t} trade${t === 1 ? '' : 's'}`
})

watch(
  () => props.refreshToken,
  async () => {
    pageCache.clear()
    afterPage.clear()
    currentPage.value = 1
    historyItems.value = []
    fillTotal.value = null
    tableKey.value += 1
    await loadFillTotal(true)
  }
)

onMounted(() => {
  loadFillTotal(false)
})

const headers = [
  { key: 'symbol', label: 'Symbol', align: 'left' },
  { key: 'side', label: 'Side', align: 'center' },
  { key: 'qty', label: 'Quantity', align: 'right' },
  { key: 'price', label: 'Price', align: 'right' },
  { key: 'value', label: 'Value', align: 'right' },
  { key: 'timestamp', label: 'Date', align: 'right' }
]
</script>

<style lang="scss" scoped>
.date-time {width: 4.3rem;}

.trade-history-table :deep(.w-table__scroll-wrap) {
  height: 10rem;
}

.crypto-asset-tag {
  flex-shrink: 0;
  letter-spacing: 0.04em;
  font-weight: 600;
  opacity: 0.95;
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
