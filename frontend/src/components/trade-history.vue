<template lang="pug">
.glass-box.pa6.ovh
  //- Trading History
  .w-flex.column.gap2(v-if="history.length")
    h3.title2
      | Trading History
      small.ml4.grey.size--sm {{ history.length }} trade{{ history.length > 1 ? 's' : '' }}
    p.caption.op6 Most recent trades are shown first.
    w-table.trade-history-table.bd0(
      :headers="headers"
      fixed-headers
      :items="sortedHistory"
      :pagination="pagination")
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

    .text-center.mt4.py12(v-if="loading")
      w-progress(circle)
      span.grey.mt4 Loading Trades...

  //- No trading history message.
  .text-center.mt6.py12(v-if="!loading && !history.length")
    h3.text-bold.mb4 No Trading History
    p.caption No trades found in your Alpaca account.
</template>

<script setup>
import { computed } from 'vue'
import TickerLogo from './ticker-logo.vue'
import { formatCurrency } from '@/utils/formatters'
import { tradingTickerPath } from '@/utils/trading-routes'
import { isCryptoInstrumentSymbol, tradingMarketForSymbol } from '@/utils/symbol-matching'

const props = defineProps({
  history: { type: Array, required: true },
  loading: { type: Boolean, default: false }
})

const itemsPerPage = 20

// Show the most recent trades first, regardless of the API's array order.
const sortedHistory = computed(() => [...props.history].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)))
const pagination = computed(() => ({
  itemsPerPage,
  total: sortedHistory.value.length,
  itemsPerPageOptions: [10, 20, 50, { label: 'All', value: 0 }]
}))

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
  max-height: 32rem;
}

.crypto-asset-tag {
  flex-shrink: 0;
  letter-spacing: 0.04em;
  font-weight: 600;
  opacity: 0.95;
}
</style>
