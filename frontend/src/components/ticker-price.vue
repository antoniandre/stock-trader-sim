<template lang="pug">
.chart-info.w-flex.align-center.gap2
  h2.title2(v-if="stock.price")
    strong(v-html="formatCurrency(stock.price, stock.currency, 2, false)")
  .title3(v-else)
    w-icon.mr2.op4(size="1.4rem") wi-info-circle
    span.op6 Price Unavailable

  .price-change.text-center.lh0.w-flex.align-center.gap1(
    v-if="priceChange && stock.price"
    :class="priceChange >= 0 ? 'currency-positive' : 'currency-negative'")
    strong(v-html="formatCurrency(priceChange, stock.currency, 2, true)")
    span.size--xs ({{ priceChange >= 0 ? '+' : '' }}{{ priceChangePercent.toFixed(2) }}%)

  .caption.mt1.op7.w-flex.align-center.gap1
    icon(icon="mdi:clock-outline")
    | Updated {{ lastUpdate }}
    w-button.w-button--icon(
      @click="$emit('refresh-price')"
      :loading="isRefreshing"
      tooltip="Refresh Price"
      :tooltip-props="{ sm: true }"
      round
      xs
      text)
      icon(icon="mdi:refresh" width="0.9rem" height="0.9rem")

  //- Smooth transition indicator
  .w-flex.align-center.gap1.mla.no-grow(v-if="isTransitioningTimeframe")
    w-spinner(size="10")
    span.size--xs.op5 Updating...
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency } from '@/utils/formatters'

const props = defineProps({
  stock: {
    type: Object,
    required: true,
    default: () => ({
      price: 0,
      previousPrice: 0,
      currencySymbol: '$'
    })
  },
  lastUpdate: { type: String, default: '' },
  isRefreshing: { type: Boolean, default: false },
  isTransitioningTimeframe: { type: Boolean, default: false }
})

defineEmits(['refresh-price'])

// Computed Properties.
// --------------------------------------------------------
const priceChange = computed(() => {
  return props.stock.price && props.stock.previousPrice
    ? props.stock.price - props.stock.previousPrice
    : null
})

const priceChangePercent = computed(() => {
  return priceChange.value && props.stock.previousPrice
    ? (priceChange.value / props.stock.previousPrice) * 100
    : 0
})
</script>

<style lang="scss">
.chart-info .title2 {
  font-size: 2.2rem;
  line-height: 1;
}
</style>

