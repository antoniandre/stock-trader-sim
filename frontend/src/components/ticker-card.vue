<template lang="pug">
.ticker-card.gradient-card(@click="$router.push(`/trading/${stock.symbol}`)")
  .gradient-card__wrap
    .w-flex.justify-between.align-center.gap1
      .w-flex.align-center
        w-badge.mr3(
          overlap
          bottom
          bg-color=""
          :badge-class="`market-status-indicator market-${currentStatus.status}`"
          xs)
          template(#badge)
            span.pa1(:title="currentStatus.message")
          ticker-logo(:symbol="stock.symbol")
        .w-flex.align-center.gap2
          .title2.text-bold {{ stock.symbol }}
      w-button.text-bold.mla.bd1.bdrsr.px2.py1.size--xs(
        @click.stop
        :route="`/trading/${stock.symbol}#buy`"
        :class="(stock.lastSide || 'buy') === 'buy' ? 'success--bg' : 'error--bg'")
        | {{ (stock.lastSide || 'buy').toUpperCase() }}

    //- Mini trend chart
    .trend-chart-container.mt2.mb2
      mini-trend-chart(
        v-if="!trendLoading && trendData.length"
        :data="trendData"
        :height="40"
        :loading="trendLoading")
      .trend-placeholder(v-else-if="trendLoading" style="width: 120px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px;") Loading...
      .trend-placeholder(v-else style="width: 120px; height: 40px; background: rgba(255,255,255,0.05); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #666;") No data

    p.text-bold.mt2
      span.op6.mr1 {{ stock.currencySymbol }}
      | {{ stock.price.toFixed(2) }}
</template>

<script setup>
import { toRef, ref, onMounted } from 'vue'
import { useStockStatus } from '@/composables/stock-status'
import { fetchStockTrend } from '@/api'
import TickerLogo from './ticker-logo.vue'
import MiniTrendChart from './mini-trend-chart.vue'

const props = defineProps({
  stock: { type: Object, required: true }
})

// Use the reusable stock status composable.
const stockRef = toRef(props, 'stock')
const { currentStatus } = useStockStatus(stockRef)

// Trend chart data.
const trendData = ref([])
const trendLoading = ref(true)

// Fetch trend data for the mini chart.
async function loadTrendData() {
  try {
    trendLoading.value = true
    const response = await fetchStockTrend(props.stock.symbol, 20)
    trendData.value = response.data || []
  }
  catch (error) {
    console.warn(`Failed to load trend data for ${props.stock.symbol}:`, error)
    trendData.value = []
  }
  finally {
    trendLoading.value = false
  }
}

onMounted(() => {
  loadTrendData()
})
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

  .trend-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    opacity: 0.8;
    transition: opacity 0.2s ease;

  }
  &:hover .trend-chart-container {opacity: 1;}
}
</style>
