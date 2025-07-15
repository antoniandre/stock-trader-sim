<template lang="pug">
.ticker-card.gradient-card(@click="$router.push(`/trading/${stock.symbol}`)")
  .gradient-card__wrap
    .w-flex.justify-between.align-center.gap1
      .w-flex.align-center
        ticker-logo.mr3(:symbol="stock.symbol")
        .w-flex.align-center.gap2
          .title2.text-bold {{ stock.symbol }}
          .stock-status-indicator(:class="`stock-status--${stockStatusClass}`")
      .text-bold.mla.bd1.bdrsr.px2.py1.size--xs(:class="stock.lastSide === 'buy' ? 'success--bg' : 'error--bg'")
        | {{ stock.lastSide.toUpperCase() }}

    p.text-bold.mt2
      span.op6.mr1 {{ stock.currencySymbol }}
      | {{ stock.price.toFixed(2) }}
</template>

<script setup>
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from './ticker-logo.vue'

const props = defineProps({
  stock: {
    type: Object,
    required: true
  }
})

const stockStatusClass = computed(() => {
  return props.stock.tradable ? (['active', 'inactive'].includes(props.stock.status) ? props.stock.status : 'unknown') : 'inactive'
})
</script>

<style lang="scss" scoped>
.ticker-card {
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {transform: translateY(-2px);}
  &:active {transform: translateY(0);}
}

.stock-status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;

  &.stock-status--active {background-color: var(--market-open-color);}
  &.stock-status--inactive {background-color: var(--market-closed-color);}
  &.stock-status--unknown {background-color: var(--market-premarket-color);}
}
</style>
