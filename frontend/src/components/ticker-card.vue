<template lang="pug">
.ticker-card.w-card.rounded-xl.shadow-lg.pa5.bd1.bdrs3.overflow-hidden
  //- Glow effect
  .absolute.top-0.left-0.-translate-x-1-2.-translate-y-1-2.w-32.h-32.purple5--bg.op2.blur-3xl

  .relative.z-10
    .w-flex.justify-between.align-center
      .title2.text-bold {{ symbol }}
      .text-bold.mla.bd1.bdrsr.px2.py1.size--xs(:class="lastSide === 'buy' ? 'success--bg' : 'error--bg'")
        | {{ lastSide.toUpperCase() }}

    p.text-bold.mt2 ${{ price.toFixed(2) }}
</template>

<script setup>
defineProps({
  symbol: String,
  price: Number,
  lastSide: String
})
</script>

<style lang="scss">
.ticker-card {
  background: radial-gradient(circle at 10% 10%, #00000036, #2c789a30, #ffffff08);
}
</style>
