<template lang="pug">
.relative.grey8--bg.rounded-xl.shadow-lg.pa6.bd1.overflow-hidden
  //- Glow effect
  .absolute.top-0.right-0.-translate-y-1-2.translate-x-1-2.w-32.h-32.blue-dark4--bg.op1.blur-3xl

  .relative.z-10
    h3.text-xl.text-bold.white.mb-4 Trade History
    .ova(style="max-height: 24rem")
      ul.space-y-3(v-if="reversedHistory.length")
        li.grid.grid-cols-3.gap-4.align-center(
          v-for="trade in reversedHistory"
          :key="trade.timestamp + trade.symbol")
          div
            span.text-bold.white {{ trade.symbol }}
            span.ml2.px2.py1.bdrsr.size--xs.text-bold(:class="trade.side === 'buy' ? 'text-success-300.success9--bg bg.op5' : 'text-error-300.error9--bg bg.op5'") {{ trade.side.toUpperCase() }}
          .text-grey-200.text-right
            span {{ trade.qty }} @ ${{ trade.price.toFixed(2) }}
          .grey.text-right
            | {{ new Date(trade.timestamp).toLocaleTimeString() }}
      .w-flex.align-center.justify-center.h-full.text-grey-500(v-else)
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
