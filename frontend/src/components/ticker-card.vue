<template lang="pug">
.bg-gray-800.rounded-lg.shadow-md.p-4.border.border-gray-700.flex.justify-between.items-center
  div
    span.text-xl.font-bold.text-white {{ symbol }}
    p.text-gray-400.text-sm Stock
  div.text-right
    p.text-2xl.font-semibold.text-white ${{ price.toFixed(2) }}
    span.px-2.py-1.rounded-full.text-xs.font-bold(
      :class="lastSide === 'buy' ? 'text-green-300 bg-green-900 bg-opacity-50' : 'text-red-300 bg-red-900 bg-opacity-50'"
    ) {{ lastSide.toUpperCase() }}
</template>

<script setup>
defineProps({
  symbol: String,
  price: Number,
  lastSide: String
})
</script>
