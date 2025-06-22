<template lang="pug">
.p-6.space-y-6
  h1.text-3xl.font-bold Simulated Trading Dashboard

  //- Loading State
  .text-center.py-8(v-if="loading")
    .animate-spin.rounded-full.h-8.w-8.border-b-2.border-blue-600.mx-auto
    p.mt-2.text-gray-600 Loading portfolio data...

  //- Error State
  .bg-red-50.border.border-red-200.rounded-lg.p-4(v-else-if="error")
    p.text-red-800 {{ error }}
    button.mt-2.text-red-600.underline(class="hover:text-red-800" @click="load")
      | Try again

  //- Content
  div(v-else)
    .grid.gap-4(class="md:grid-cols-3")
      ticker-card(
        v-for="stock in stocks"
        :key="stock.symbol"
        :symbol="stock.symbol"
        :price="stock.price"
        :lastSide="stock.lastSide"
      )
    portfolio-chart(:history="history")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TickerCard from '@/components/ticker-card.vue'
import PortfolioChart from '@/components/portfolio-chart.vue'
import { fetchPortfolio } from '@/api'

const stocks = ref([])
const history = ref([])
const loading = ref(true)
const error = ref(null)

async function load() {
  try {
    loading.value = true
    error.value = null
    const data = await fetchPortfolio()
    stocks.value = data.stocks
    history.value = data.history
  } catch (err) {
    error.value = 'Failed to load portfolio data. Make sure the API server is running.'
    console.error('Error loading portfolio:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  load()
  setInterval(load, 60_000) // refresh each minute
})
</script>
