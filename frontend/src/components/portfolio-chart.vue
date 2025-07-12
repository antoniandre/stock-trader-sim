<template lang="pug">
.glass-box.pa6.ovh
  .w-flex.justify-space-between.align-center.mb4
    h2.title2 Portfolio Performance
    .period-selector.w-flex.gap2.no-grow
      w-button.period-btn(
        v-for="period in periods"
        :key="period.value"
        color="base"
        :class="{ 'period-btn--active': selectedPeriod === period.value }"
        @click="changePeriod(period.value)")
        | {{ period.label }}
  .chart-wrap
    Line(ref="chartRef" :data="chartData" :options="chartOptions")
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { Line } from 'vue-chartjs'
import 'chart.js/auto'

const props = defineProps(['history'])
const emit = defineEmits(['period-change'])
const chartRef = ref(null)

// Period selector.
const periods = [
  { label: '1D', value: '1D' },
  { label: '1M', value: '1M' },
  { label: '1Y', value: '12M' },
  { label: 'All', value: 'ALL' }
]

const selectedPeriod = ref('1M')

function changePeriod(period) {
  selectedPeriod.value = period
  emit('period-change', period)
}

// Store sorted data for tooltip access.
const sortedTimestamps = ref([])
const sortedProfitLoss = ref([])
const sortedProfitLossPercent = ref([])

const chartData = computed(() => {
  // Guard against null/undefined history to prevent rendering errors.
  if (!props.history) {
    // Clear sorted data.
    sortedTimestamps.value = []
    sortedProfitLoss.value = []
    sortedProfitLossPercent.value = []

    return {
      labels: [],
      datasets: [{
        label: 'Portfolio Value',
        data: [],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: 'start',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: '#3B82F6',
        pointHoverBackgroundColor: '#fff'
      }]
    }
  }

  // Check if this is Alpaca portfolio history format (has timestamp and equity arrays).
  if (props.history?.timestamp && props.history?.equity) {
    // Combine timestamp, equity, and profit/loss data, then sort by timestamp.
    const combined = props.history.timestamp.map((timestamp, index) => {
      // Convert Unix timestamp (seconds) to proper JavaScript timestamp (milliseconds).
      let convertedTimestamp = timestamp
      if (typeof timestamp === 'number') {
        // If it's a number and looks like Unix seconds (less than year 2001 in milliseconds).
        // Convert seconds to milliseconds.
        if (timestamp < 1000000000000) convertedTimestamp = timestamp * 1000
      }

      return {
        timestamp: convertedTimestamp,
        equity: props.history.equity[index],
        profitLoss: props.history.profit_loss ? props.history.profit_loss[index] : null,
        profitLossPercent: props.history.profit_loss_pct ? props.history.profit_loss_pct[index] : null
      }
    })

    // Sort by timestamp to ensure chronological order.
    combined.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

    // Store sorted data for tooltip access.
    sortedTimestamps.value = combined.map(item => item.timestamp)
    sortedProfitLoss.value = combined.map(item => item.profitLoss)
    sortedProfitLossPercent.value = combined.map(item => item.profitLossPercent)

    // Format labels based on timeframe and period.
    const labels = combined.map(item => {
      const date = new Date(item.timestamp)

      // For yearly or all-time data with many points, show month/year.
      if (combined.length > 200) {
        return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
      }
      // For monthly data or less than 50 points, show dates.
      else if (combined.length <= 50) {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      }
      // Otherwise show time for intraday data with seconds.
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    })
    const dataPoints = combined.map(item => item.equity)

    // Create gradient.
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
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: '#3B82F6',
        pointHoverBackgroundColor: '#fff'
      }]
    }
  }

  // Fallback to old trading history format if portfolio history not available.
  if (!props.history || !Array.isArray(props.history)) {
    // Clear sorted data.
    sortedTimestamps.value = []
    sortedProfitLoss.value = []
    sortedProfitLossPercent.value = []

    return {
      labels: [],
      datasets: [{
        label: 'Portfolio Value',
        data: [],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: 'start',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: '#3B82F6',
        pointHoverBackgroundColor: '#fff'
      }]
    }
  }

  // Old format: calculate portfolio value from trade history.
  // Clear sorted data for portfolio history format.
  sortedTimestamps.value = []
  sortedProfitLoss.value = []
  sortedProfitLossPercent.value = []

  // Sort trade history by timestamp to ensure chronological order.
  const sortedHistory = [...props.history].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

  const labels = sortedHistory.map(h => new Date(h.timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }))
  const portfolio = {} // Holds the current quantity of each stock.
  const dataPoints = sortedHistory.map(trade => {
    if (!portfolio[trade.symbol]) portfolio[trade.symbol] = { qty: 0, price: 0 }
    portfolio[trade.symbol].qty += (trade.side === 'buy' ? 1 : -1) * trade.qty
    portfolio[trade.symbol].price = trade.price

    let totalValue = 0
    for (const symbol in portfolio) {
      totalValue += portfolio[symbol].qty * portfolio[symbol].price
    }
    return totalValue.toFixed(2)
  })

  // Create gradient.
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
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 2,
      pointHoverBorderColor: '#3B82F6',
      pointHoverBackgroundColor: '#fff'
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#3B82F6',
      borderWidth: 1,
      titleFont: {
        size: 14,
        weight: 'bold'
      },
      bodyFont: {
        size: 13
      },
      callbacks: {
                title: function(tooltipItems) {
          // Get the data index to access the sorted timestamps.
          const dataIndex = tooltipItems[0].dataIndex
          const timestamp = sortedTimestamps.value[dataIndex]

          if (timestamp) {
            const date = new Date(timestamp)
            // For monthly data, show full date and time.
            if (sortedTimestamps.value.length <= 50) {
              return date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })
            }
            // For intraday data, show date and time with seconds.
            return date.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })
          }

          return tooltipItems[0].label
        },
                label: function(context) {
          const value = context.parsed.y
          const dataIndex = context.dataIndex

          // Check if we have portfolio history data with additional info.
          if (sortedProfitLoss.value[dataIndex] !== undefined && sortedProfitLoss.value[dataIndex] !== null) {
            const profitLoss = sortedProfitLoss.value[dataIndex]
            const profitLossPercent = sortedProfitLossPercent.value[dataIndex]

            return [
              `Portfolio Value: $${value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}`,
              `P&L: $${profitLoss.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })} (${profitLossPercent >= 0 ? '+' : ''}${profitLossPercent.toFixed(2)}%)`
            ]
          }

          return `Portfolio Value: $${value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}`
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        callback: function(value) {
          return '$' + value.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          })
        }
      }
    },
    x: {
      grid: { display: false },
      ticks: { color: '#C9D1D9' }
    }
  }
}

watch(() => props.history, (newHistory) => {
  // The 'quiet' mode prevents a jarring re-animation on every update.
  if (chartRef.value?.chart) chartRef.value.chart.update('quiet')
}, { deep: true })
</script>

<style lang="scss">
.chart-wrap {
  height: 40vh;
}

.period-selector {
  .period-btn {
    background-color: rgba(255, 255, 255, 0.1);

    &--active {background-color: var(--w-primary-color);}
  }
}
</style>
