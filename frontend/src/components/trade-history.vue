<template lang="pug">
.relative.grey8--bg.rounded-xl.shadow-lg.pa6.bd1.ovh
  //- Glow effect
  .absolute.top-0.right-0.-translate-y-1-2.translate-x-1-2.w-32.h-32.blue-dark4--bg.op1.blur-3xl

  //- Trading History
  .w-flex.column.gap4.mt6(v-if="history.length")
    h3.title2
      | Trading History
      small.ml1.grey.size--sm ({{ history.length }} trades)
    .ova(style="max-height: 32rem")
      w-table.w-full.bd0(:headers="headers" :items="history")
        template(#item="{ item }")
          tr
            td.px2.text-bold {{ item.symbol }}
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

    .w-flex.justify-center.mt4(v-if="loadingHistory")
      .w-loader.w-sm
      span.ml2.grey Loading more trades...

  //- No trading history message
  .w-flex.gap4.mt6(v-if="!loadingHistory && !history.length")
    .xs12
        .pa6.text-center
          h3.text-xl.text-bold.white.mb-4 No Alpaca Trading History
          p.grey No trades found in your Alpaca account.
          w-button(@click="fetchHistory" color="primary" class="mt-4") Refresh
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  history: {
    type: Array,
    required: true
  }
})

// Show the most recent trades first
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
