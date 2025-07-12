<template lang="pug">
.glass-box.pa6.ovh
  //- Trading History
  .w-flex.column.gap6(v-if="history.length")
    h3.title2
      | Trading History
      small.ml4.grey.size--sm {{ history.length }} trade{{ history.length > 1 ? 's' : '' }}
    .ova(style="max-height: 32rem")
      w-table.bd0(:headers="headers" :items="reversedHistory")
        template(#item="{ item }")
          tr
            td.px2.text-bold
              .w-flex.align-center
                ticker-logo.mr3(:symbol="item.symbol" size="sm")
                span {{ item.symbol }}
            td.px2.text-center
              w-tag.px2.py1.text-bold(:class="item.side === 'buy' ? 'success--bg' : 'error--bg'" round xs)
                | {{ item.side.toUpperCase() }}
            td.px2.text-right {{ item.qty }}
            td.px2.text-right.text-bold
              span.op6.mr1 $
              | {{ item.price.toFixed(2) }}
            td.px2.text-right.text-bold
              span.op6.mr1 $
              | {{ (item.qty * item.price).toFixed(2) }}
            td.px2.text-right.grey.size--sm
              | {{ new Date(item.timestamp).toLocaleDateString() }}
              br
              | {{ new Date(item.timestamp).toLocaleTimeString() }}

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

const props = defineProps({
  history: { type: Array, required: true },
  loading: { type: Boolean, default: false }
})

// Show the most recent trades first.
const reversedHistory = computed(() => {
  return [...props.history].reverse()
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
