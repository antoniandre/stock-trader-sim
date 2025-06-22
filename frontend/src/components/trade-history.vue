<template lang="pug">
.bg-gray-800.rounded-lg.shadow-md.p-4.border.border-gray-700(class="sm:p-6")
  h3.text-lg.font-bold.text-white.mb-4 Trade History
  .overflow-y-auto.h-96
    ul.space-y-2(v-if="reversedHistory.length > 0")
      li.grid.grid-cols-4.gap-2.p-2.rounded-md.text-sm.items-center(
        v-for="trade in reversedHistory"
        :key="trade.timestamp + trade.symbol"
        class="hover:bg-gray-700"
      )
        div
          span.font-bold.text-white {{ trade.symbol }}
        div
          span.font-semibold(:class="trade.side === 'buy' ? 'text-green-400' : 'text-red-400'")
            | {{ trade.side.toUpperCase() }}
        div.text-gray-200
          span {{ trade.qty }} @ ${{ trade.price.toFixed(2) }}
        div.text-right.text-gray-400
          | {{ new Date(trade.timestamp).toLocaleTimeString() }}
    .flex.items-center.justify-center.h-full.text-gray-500(v-else)
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
