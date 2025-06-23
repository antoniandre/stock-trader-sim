<template lang="pug">
.relative.grey8--bg.bdrs2.sh2.pa6.bd1.overflow-hidden
  //- Glow effect
  .absolute.bottom-0.right-0.blue5--bg.op2.blur-3xl

  .relative.z-10
    h3.text-xl.text-bold.white.mb-4 Portfolio Performance
    .h-96
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

  // Create gradient
  const chartEl = chartRef.value?.chart
  let gradient = null
  if (chartEl) {
    const ctx = chartEl.ctx
    gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)')
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
  }

  return {
    labels,
    datasets: [{
      label: 'Portfolio Value',
      data: dataPoints,
      borderColor: '#3B82F6',
      backgroundColor: gradient || 'rgba(59, 130, 246, 0.1)',
      borderWidth: 2,
      fill: 'start',
      tension: 0.4,
      pointRadius: 0
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
      beginAtZero: false,
      grid: {
        color: 'rgba(255, 255, 255, 0.05)'
      },
      ticks: {
        color: '#C9D1D9'
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#C9D1D9'
      }
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

