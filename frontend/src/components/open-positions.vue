<template lang="pug">
.glass-box.pa6
  .w-flex.justify-space-between.align-center.mb4
    h2.title2
      | Open Positions
      small.ml4.grey.size--sm {{ positions.length }} Position{{ positions.length > 1 ? 's' : '' }}
    w-button.mr-3(@click="refreshPositions" text round)
      w-icon.mr2(:spin="loading" sm) wi-spinner
      | Refresh

  .positions-list(v-if="positions.length")
    .position-item(v-for="(position, i) in positions" :key="position.symbol")
      .w-divider(v-if="i")
      .w-flex.justify-space-between.align-center.py3
        .position-info
          .symbol.title3.mb1 {{ position.symbol }}
          .qty.size--sm.op7 {{ position.qty }} shares

        .position-values.text-right
          .market-value.title3.mb1
            span.op6.mr1 $
            span {{ formatCurrency(position.market_value) }}

          .unrealized-pl.size--sm(
            :class="parseFloat(position.unrealized_pl) >= 0 ? 'success-light3' : 'error'")
            span {{ formatCurrency(position.unrealized_pl) }}
            span.ml1 ({{ formatPercentage(position.unrealized_plpc) }}%)

        .price-info.text-right.ml4
          .current-price.title3.mb1
            span.op6.mr1 $
            span {{ formatCurrency(position.current_price) }}

          .price-change.size--sm(
            :class="parseFloat(position.change_today || 0) >= 0 ? 'success-light3' : 'error'"
          )
            span {{ formatCurrency(position.change_today || 0) }}

  .empty-state.text-center.py12.op5(v-else-if="!loading")
    w-icon.op1(size="48") wi-info-circle
    .mt4.title3 No Open Positions
    .mt2.size--sm.op7 Your positions will appear here once you make trades

  .loading-state.text-center.py12(v-if="loading && !positions.length")
    w-progress(circle)
    p Loading Positions...
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchPositions } from '@/api'

const positions = ref([])
const loading = ref(false)

function formatCurrency(value) {
  const num = parseFloat(value)
  return isNaN(num) ? '0.00' : num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

function formatPercentage(value) {
  const num = parseFloat(value) * 100
  return isNaN(num) ? '0.00' : num.toFixed(2)
}

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
