<template lang="pug">
div.p-6.space-y-6
  h1.text-3xl.font-bold Simulated Trading Dashboard
  div.grid.md:grid-cols-3.gap-4
    TickerCard(
      v-for="s in stocks"
      :key="s.symbol"
      :symbol="s.symbol"
      :price="s.price"
      :lastSide="s.lastSide"
    )
  PortfolioChart(:history="history")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TickerCard from '@/components/TickerCard.vue'
import PortfolioChart from '@/components/PortfolioChart.vue'
import { fetchPortfolio } from '@/api'

const stocks = ref([])
const history = ref([])

async function load () {
  const data = await fetchPortfolio()
  stocks.value = data.stocks
  history.value = data.history
}

onMounted(() => {
  load()
  setInterval(load, 60_000) // refresh each minute
})
</script>