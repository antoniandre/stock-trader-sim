<template lang="pug">
.ticker-card.gradient-card(@click="$router.push(`/trading/${stock.symbol}`)")
  .gradient-card__wrap
    .w-flex.justify-between.align-center.gap1
      .w-flex.align-center
        w-badge.mr3(overlap bottom bg-color="" xs :badge-class="`market-status-indicator market-${currentStatus.status}`")
          template(#badge)
            span.pa1(:title="currentStatus.message")
          ticker-logo(:symbol="stock.symbol")
        .w-flex.align-center.gap2
          .title2.text-bold {{ stock.symbol }}
      .text-bold.mla.bd1.bdrsr.px2.py1.size--xs(:class="stock.lastSide === 'buy' ? 'success--bg' : 'error--bg'")
        | {{ stock.lastSide.toUpperCase() }}

    p.text-bold.mt2
      span.op6.mr1 {{ stock.currencySymbol }}
      | {{ stock.price.toFixed(2) }}
</template>

<script setup>
import { toRef } from 'vue'
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from './ticker-logo.vue'

const props = defineProps({
  stock: { type: Object, required: true }
})

// Use the reusable stock status composable.
const stockRef = toRef(props, 'stock')
const { currentStatus } = useStockStatus(stockRef)
</script>

<style lang="scss">
.ticker-card {
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {transform: translateY(-2px);}
  &:active {transform: translateY(0);}

  .market-status-indicator {
    background-color: currentColor !important;
    cursor: help;
    border: 1px solid var(--w-base-bg-color);
    margin-bottom: 0;
    margin-left: -10px;
    width: 12px;
    min-width: 12px;
    height: 12px;
    line-height: 1;
    aspect-ratio: 1;
    border-radius: 99em;
  }
}
</style>
