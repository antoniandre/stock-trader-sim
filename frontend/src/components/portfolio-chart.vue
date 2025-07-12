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

// ===== Configuration =====
const periods = [
  { label: '1D', value: '1D' },
  { label: '1M', value: '1M' },
  { label: '1Y', value: '12M' },
  { label: 'All', value: 'ALL' }
]

const selectedPeriod = ref('1M')

// Store sorted data for tooltip access.
const sortedTimestamps = ref([])
const sortedProfitLoss = ref([])
const sortedProfitLossPercent = ref([])

// ===== Helper Functions =====
function convertTimestamp(timestamp) {
  if (typeof timestamp !== 'number') return timestamp
  // Convert Unix seconds to milliseconds if needed.
  return timestamp < 1000000000000 ? timestamp * 1000 : timestamp
}

function createEmptyDataset() {
  return {
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
  }
}

function formatChartLabel(timestamp, period, dataLength) {
  const date = new Date(timestamp)

  // For 1D period (intraday data), show times.
  if (period === '1D') {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  // For large datasets, show month/year.
  if (dataLength > 200) {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: '2-digit'
    })
  }

  // Default: show dates.
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
}

function processAlpacaHistory(history, period) {
  // Combine and convert timestamps.
  const combined = history.timestamp.map((timestamp, index) => ({
    timestamp: convertTimestamp(timestamp),
    equity: history.equity[index],
    profitLoss: history.profit_loss?.[index] || null,
    profitLossPercent: history.profit_loss_pct?.[index] || null
  }))

  // Sort chronologically.
  combined.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

  // Store sorted data for tooltips.
  sortedTimestamps.value = combined.map(item => item.timestamp)
  sortedProfitLoss.value = combined.map(item => item.profitLoss)
  sortedProfitLossPercent.value = combined.map(item => item.profitLossPercent)

  // Generate labels and data.
  const labels = combined.map(item => formatChartLabel(item.timestamp, period, combined.length))
  const dataPoints = combined.map(item => item.equity)

  return { labels, dataPoints }
}

function processTradeHistory(history) {
  if (!Array.isArray(history)) return { labels: [], dataPoints: [] }

  // Clear portfolio history data.
  sortedTimestamps.value = []
  sortedProfitLoss.value = []
  sortedProfitLossPercent.value = []

  // Sort by timestamp.
  const sortedHistory = [...history].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

  // Calculate portfolio values.
  const portfolio = {}
  const labels = sortedHistory.map(trade =>
    new Date(trade.timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  )

  const dataPoints = sortedHistory.map(trade => {
    if (!portfolio[trade.symbol]) portfolio[trade.symbol] = { qty: 0, price: 0 }

    portfolio[trade.symbol].qty += (trade.side === 'buy' ? 1 : -1) * trade.qty
    portfolio[trade.symbol].price = trade.price

    const totalValue = Object.values(portfolio).reduce((sum, pos) => sum + (pos.qty * pos.price), 0)
    return Number(totalValue.toFixed(2))
  })

  return { labels, dataPoints }
}

function createGradient() {
  const chartEl = chartRef.value?.chart
  if (!chartEl) return 'rgba(59, 130, 246, 0.1)'

  const ctx = chartEl.ctx
  const gradient = ctx.createLinearGradient(0, 0, 0, 400)
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)')
  gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
  return gradient
}

// ===== Main Computed =====
const chartData = computed(() => {
  // Guard against null/undefined history.
  if (!props.history) {
    sortedTimestamps.value = []
    sortedProfitLoss.value = []
    sortedProfitLossPercent.value = []
    return { labels: [], datasets: [createEmptyDataset()] }
  }

  let labels, dataPoints

  // Process Alpaca portfolio history format.
  if (props.history?.timestamp && props.history?.equity) {
    ({ labels, dataPoints } = processAlpacaHistory(props.history, selectedPeriod.value))
  }
  else {
    // Process trade history format.
    ({ labels, dataPoints } = processTradeHistory(props.history))
  }

  // Create dataset with gradient.
  const dataset = {
    ...createEmptyDataset(),
    data: dataPoints,
    backgroundColor: createGradient()
  }

  return { labels, datasets: [dataset] }
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
      titleFont: { size: 14, weight: 'bold' },
      bodyFont: { size: 13 },
      callbacks: {
        title(tooltipItems) {
          const dataIndex = tooltipItems[0].dataIndex
          const timestamp = sortedTimestamps.value[dataIndex]

          if (!timestamp) return tooltipItems[0].label

          const date = new Date(timestamp)

          // For 1D period, show date and time.
          if (selectedPeriod.value === '1D') {
            return date.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })
          }

          // For longer periods, show full date.
          return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        },
        label(context) {
          const value = context.parsed.y
          const dataIndex = context.dataIndex
          const profitLoss = sortedProfitLoss.value[dataIndex]
          const profitLossPercent = sortedProfitLossPercent.value[dataIndex]

          const portfolioValue = `Portfolio Value: $${value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}`

          // Show P&L info if available.
          if (profitLoss !== undefined && profitLoss !== null) {
            const plValue = `P&L: $${profitLoss.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })} (${profitLossPercent >= 0 ? '+' : ''}${profitLossPercent.toFixed(2)}%)`

            return [portfolioValue, plValue]
          }

          return portfolioValue
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
        callback: value => '$' + value.toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }
    },
    x: {
      grid: { display: false },
      ticks: { color: '#C9D1D9' }
    }
  }
}

// ===== Event Handlers =====
function changePeriod(period) {
  selectedPeriod.value = period
  emit('period-change', period)
}

// ===== Watchers =====
watch(() => props.history, () => {
  // Update chart quietly to prevent jarring animations.
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
