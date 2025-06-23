<template lang="pug">
.p-4(class="sm:p-6 lg:p-8")
  h1.text-3xl.font-bold.text-white.mb-8 Portfolio
  .grid.gap-6(class="lg:grid-cols-5")
    div(class="lg:col-span-3")
      portfolio-chart(:history="history")
    div(class="lg:col-span-2")
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
