<template lang="pug">
.w-space-xl.dark--bg.w-min-h-screen
  .title1 Portfolio
  .w-flex.gap4
    .xs12.sm8
      w-card(w-shadow.bdrs2 w-bg="dark-2")
        portfolio-chart(:history="history")
    .xs12.sm4
      w-card(w-shadow.bdrs2 w-bg="dark-2")
        trade-history(:history="history")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PortfolioChart from '@/components/portfolio-chart.vue'
import TradeHistory from '@/components/trade-history.vue'
import { fetchPortfolio } from '@/api'

const history = ref([])

async function fetchPortfolioData() {
  try {
    const data = await fetchPortfolio()
    history.value = data.history || []
  } catch (err) {
    console.error('Error fetching portfolio:', err)
  }
}

onMounted(() => {
  fetchPortfolioData()
})
</script>
