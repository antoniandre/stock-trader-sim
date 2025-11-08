<template lang="pug">
.chart-info.w-flex.align-center.gap2
  .price-display.w-flex.align-center.gap2
    .title2.text-bold(v-if="stock.price")
      span.op6.mr2 {{ stock.currencySymbol }}
      span {{ stock.price.toFixed(2) }}
    .title3(v-else)
      w-icon.mr2.op4(size="1.4rem") wi-info-circle
      span.op6 Price Unavailable
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

  .price-change.text-center.lh0(
    v-if="priceChange && stock.price"
    :class="priceChange >= 0 ? 'currency-positive' : 'currency-negative'")
    strong {{ priceChange >= 0 ? '+' : '' }}{{ stock.currencySymbol }}{{ Math.abs(priceChange).toFixed(2) }}
    span.size--xs ({{ priceChange >= 0 ? '+' : '' }}{{ priceChangePercent.toFixed(2) }}%)
  .w-flex.align-center.gap2.mla.no-grow
    w-button.pa0(
      v-if="showFullscreenButton"
      width="24"
      height="24"
      @click="$emit('toggle-fullscreen')"
      tooltip="Fullscreen Chart"
      :tooltip-props="{ sm: true }"
      round)
      icon(icon="mdi:fullscreen")
    //- Smooth transition indicator
    .w-flex.align-center.gap1.ml2(v-if="isTransitioningTimeframe")
      w-spinner(size="10")
      span.size--xs.op5 Updating...
</template>

<script setup>
import { computed } from 'vue'

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
  lastUpdate: {
    type: String,
    default: ''
  },
  isRefreshing: {
    type: Boolean,
    default: false
  },
  isTransitioningTimeframe: {
    type: Boolean,
    default: false
  },
  showFullscreenButton: {
    type: Boolean,
    default: true
  }
})

defineEmits(['refresh-price', 'toggle-fullscreen'])

// Computed Properties
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
.chart-info {
  .price-display .title2 {
    font-size: 2.2rem;
    line-height: 1;
  }
}
</style>

