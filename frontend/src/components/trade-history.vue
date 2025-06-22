<template lang="pug">
.bg-white.rounded-2xl.shadow-lg.p-6
  h3.text-lg.font-bold.mb-4 Trade History
  .overflow-y-auto(style="max-height: 24rem;")
    ul.space-y-2(v-if="reversedHistory.length > 0")
      li.grid.grid-cols-4.gap-4.p-2.rounded-lg.text-sm(
        v-for="(trade, index) in reversedHistory"
        :key="trade.timestamp + trade.symbol"
        :class="trade.side === 'buy' ? 'bg-green-50' : 'bg-red-50'"
      )
        div
          span.font-bold {{ trade.symbol }}
        div
          span.font-semibold(:class="trade.side === 'buy' ? 'text-green-600' : 'text-red-600'")
            | {{ trade.side.toUpperCase() }}
        div
          span {{ trade.qty }} @ ${{ trade.price.toFixed(2) }}
        div.text-right.text-gray-500
          | {{ new Date(trade.timestamp).toLocaleTimeString() }}
    .text-center.py-10.text-gray-500(v-else)
      p No trades yet.
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
</script>
