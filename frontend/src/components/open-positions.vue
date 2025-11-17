<template lang="pug">
.glass-box.px4.py6
  .w-flex.justify-space-between.align-center.mb4.mx2
    h2.title2
      | Open Positions
      small.ml4.grey.size--sm {{ positions.length }} Position{{ positions.length > 1 ? 's' : '' }}
    w-button.mr-3(@click="refreshPositions" text round)
      icon.w-icon.mr2(:class="{ 'w-icon--spin': loading }" icon="mdi:refresh")
      | Refresh

  .positions-list(v-if="positions.length")
    .position-item.px2(v-for="(position, i) in positions" :key="position.symbol")
      .w-divider(v-if="i")
      .w-flex.justify-space-between.align-center.py3
        .position-info.w-flex.align-center
          ticker-logo.mr3(:symbol="position.symbol")
          div
            router-link.symbol.title3.mb1.text-bold.hover-underline(:to="`/trading/${position.symbol}`") {{ position.symbol }}
            .qty.size--sm.op7 {{ position.qty }} share{{ position.qty > 1 ? 's' : '' }}

        .position-values
          .market-value.title3.mb1.w-flex.gap1.align-center
            small.op6 @
            span(v-html="formatCurrency(position.market_value, position.currency, 2, false)")

          .unrealized-pl(:class="parseFloat(position.unrealized_pl) >= 0 ? 'currency-positive' : 'currency-negative'")
            span(v-html="formatCurrency(position.unrealized_pl, position.currency, 2, false)")
            span.mx1 ({{ formatPercentage(position.unrealized_plpc) }}%)
            small P/L

        .price-info.text-right.ml4
          .current-price.title3.mb1
            span(v-html="formatCurrency(position.current_price, position.currency, 2, false)")

          .price-change.size--sm(:class="parseFloat(position.change_today || 0) >= 0 ? 'currency-positive' : 'currency-negative'")
            span(v-html="formatCurrency(position.change_today || 0, position.currency, 2, false)")

  .empty-state.text-center.py12.op5(v-else-if="!loading")
    icon.w-icon.op1(icon="mdi:information-outline" size="48")
    .mt4.title3 No Open Positions
    .mt2.size--sm.op7 Your positions will appear here once you make trades

  .loading-state.text-center.py12(v-if="loading && !positions.length")
    w-progress(circle)
    p Loading Positions...
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchPositions } from '@/api'
import { formatNumber, formatPercentage, formatCurrency } from '@/utils/formatters'
import TickerLogo from './ticker-logo.vue'

const positions = ref([])
const loading = ref(false)

async function refreshPositions() {
  try {
    loading.value = true
    positions.value = await fetchPositions()
  }
  catch (error) {
    console.error('Error fetching positions:', error)
    positions.value = []
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  refreshPositions()
})
</script>

<style lang="scss" scoped>
.positions-list {
  max-height: 60vh;
  overflow-y: auto;
}

.position-item {
  transition: background-color 0.2s;
  &:hover {background-color: rgba(255, 255, 255, 0.02);}
}

.position-info {min-width: 120px;}
.position-values {min-width: 140px;}
.price-info {min-width: 100px;}

.empty-state {
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}
</style>
