<template lang="pug">
.bg-white.rounded-2xl.shadow-lg.p-6
  h3.text-lg.font-bold.mb-4 Portfolio Performance
  .h-64
    Line(ref="chartRef" :data="chartData" :options="chartOptions")
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { Line } from 'vue-chartjs'
import 'chart.js/auto'

const props = defineProps(['history'])
const chartRef = ref(null)

const chartData = computed(() => {
  const labels = props.history?.map(h => new Date(h.timestamp).toLocaleTimeString()) || []

  // Correctly calculate cumulative portfolio value over time
  const portfolio = {} // Holds the current quantity of each stock
  const dataPoints = (props.history || []).map(trade => {
    // Initialize stock if it's the first time we see it
    if (!portfolio[trade.symbol]) {
      portfolio[trade.symbol] = { qty: 0, price: 0 }
    }

    // Update quantity based on the trade
    if (trade.side === 'buy') {
      portfolio[trade.symbol].qty += trade.qty
    } else {
      portfolio[trade.symbol].qty -= trade.qty
    }

    // Update the latest price for this stock
    portfolio[trade.symbol].price = trade.price

    // Calculate the total value of all holdings at this point in time
    let totalValue = 0
    for (const symbol in portfolio) {
      totalValue += portfolio[symbol].qty * portfolio[symbol].price
    }
    return totalValue.toFixed(2)
  })

  return {
    labels,
    datasets: [{
      label: 'Portfolio Value',
      data: dataPoints,
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 2,
      fill: 'start',
      tension: 0.1
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: {
      beginAtZero: false
    }
  }
}

watch(() => props.history, (newHistory) => {
  if (chartRef.value?.chart) {
    // The 'quiet' mode prevents a jarring re-animation on every update
    chartRef.value.chart.update('quiet')
  }
}, { deep: true })

</script>

