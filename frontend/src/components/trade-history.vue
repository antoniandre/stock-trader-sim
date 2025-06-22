<template lang="pug">
.relative.bg-gray-800.rounded-xl.shadow-lg.p-6.border.border-gray-700.overflow-hidden
  //- Glow effect
  .absolute.top-0.right-0.-translate-y-1-2.translate-x-1-2.w-32.h-32.bg-blue-400.opacity-10.blur-3xl

  .relative.z-10
    h3.text-xl.font-bold.text-white.mb-4 Trade History
    .overflow-y-auto(style="max-height: 24rem;")
      ul.space-y-3(v-if="reversedHistory.length > 0")
        li.grid.grid-cols-3.gap-4.text-sm.items-center(
          v-for="trade in reversedHistory"
          :key="trade.timestamp + trade.symbol")
          div
            span.font-bold.text-white {{ trade.symbol }}
            span.ml-2.px-2.py-1.rounded-full.text-xs.font-bold(:class="trade.side === 'buy' ? 'text-green-300 bg-green-900 bg-opacity-50' : 'text-red-300 bg-red-900 bg-opacity-50'") {{ trade.side.toUpperCase() }}
          .text-gray-200.text-right
            span {{ trade.qty }} @ ${{ trade.price.toFixed(2) }}
          .text-gray-400.text-right
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
