<template lang="pug">
.relative.bg-gray-800.rounded-xl.shadow-lg.p-5.border.border-gray-700.overflow-hidden
  //- Glow effect
  .absolute.top-0.left-0.-translate-x-1-2.-translate-y-1-2.w-32.h-32.bg-purple-500.opacity-20.blur-3xl

  .relative.z-10
    .flex.justify-between.items-center
      span.text-2xl.font-bold.text-white {{ symbol }}
      span.px-2.py-1.rounded-full.text-xs.font-bold(
        :class="lastSide === 'buy' ? 'text-green-300 bg-green-900 bg-opacity-50' : 'text-red-300 bg-red-900 bg-opacity-50'"
      ) {{ lastSide.toUpperCase() }}

    p.text-3xl.font-bold.text-white.mt-2 ${{ price.toFixed(2) }}

</template>

<script setup>
defineProps({
  symbol: String,
  price: Number,
  lastSide: String
})
</script>
