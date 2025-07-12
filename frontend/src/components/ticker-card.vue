<template lang="pug">
.ticker-card.gradient-card
  .gradient-card__wrap
    .w-flex.justify-between.align-center.gap1
      .w-flex.align-center
        .stock-logo.mr3
          w-image(:src="`https://financialmodelingprep.com/image-stock/${symbol}.png`" :alt="symbol" lazy)
            .logo-placeholder {{ symbol.charAt(0) }}
        .title2.text-bold {{ symbol }}
      .text-bold.mla.bd1.bdrsr.px2.py1.size--xs(:class="lastSide === 'buy' ? 'success--bg' : 'error--bg'")
        | {{ lastSide.toUpperCase() }}

    p.text-bold.mt2
      span.op6.mr1 $
      | {{ price.toFixed(2) }}
</template>

<script setup>
defineProps({
  symbol: String,
  price: Number,
  lastSide: String
})
</script>
