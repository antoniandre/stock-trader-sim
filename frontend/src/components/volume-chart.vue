<template lang="pug">
.volume-chart
  .volume-info.w-flex.align-center.gap2.mb2
    .volume-title.size--sm.text-bold Volume
    .volume-value.size--sm.op7(v-if="currentVolume") {{ formatVolume(currentVolume) }}
    .volume-avg.size--xs.op5(v-if="averageVolume") Avg: {{ formatVolume(averageVolume) }}

  .volume-canvas(ref="canvasContainer")
    Bar(
      :data="volumeChartData"
      :options="volumeChartOptions"
      :key="chartKey")
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const props = defineProps({
  data: { type: Array, required: true },
  symbol: { type: String, required: true },
  height: { type: Number, default: 100 }
})

const canvasContainer = ref(null)
const chartKey = ref(0)

const volumeChartData = computed(() => {
  if (!props.data || props.data.length === 0) {
    return {
      labels: [],
      datasets: []
    }
  }

  const labels = props.data.map(item => new Date(item.timestamp))
  const volumes = props.data.map(item => item.volume || 0)
  const prices = props.data.map(item => item.close || item.price)

  // Color bars based on price direction
  const colors = []
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      colors.push('rgba(156, 163, 175, 0.8)') // Gray for first bar
    } else {
      const currentPrice = prices[i]
      const previousPrice = prices[i - 1]
      if (currentPrice > previousPrice) {
        colors.push('rgba(16, 185, 129, 0.8)') // Green for up
      } else if (currentPrice < previousPrice) {
        colors.push('rgba(239, 68, 68, 0.8)') // Red for down
      } else {
        colors.push('rgba(156, 163, 175, 0.8)') // Gray for no change
      }
    }
  }

  return {
    labels,
    datasets: [{
      label: 'Volume',
      data: volumes,
      backgroundColor: colors,
      borderColor: colors.map(color => color.replace('0.8', '1')),
      borderWidth: 1,
      borderRadius: 1,
      borderSkipped: false
    }]
  }
})

const volumeChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#3B82F6',
      borderWidth: 1,
      callbacks: {
        title(tooltipItems) {
          return new Date(tooltipItems[0].parsed.x).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })
        },
        label(context) {
          return `Volume: ${formatVolume(context.parsed.y)}`
        }
      }
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'HH:mm',
          day: 'MMM dd'
        }
      },
      grid: {
        display: false
      },
      ticks: {
        display: false // Hide x-axis labels since main chart shows them
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false
      },
      ticks: {
        color: '#C9D1D9',
        font: {
          size: 10
        },
        maxTicksLimit: 3,
        callback: (value) => formatVolume(value)
      }
    }
  }
}))

const currentVolume = computed(() => {
  if (!props.data || props.data.length === 0) return 0
  const latest = props.data[props.data.length - 1]
  return latest.volume || 0
})

const averageVolume = computed(() => {
  if (!props.data || props.data.length === 0) return 0

  const volumes = props.data.map(item => item.volume || 0).filter(v => v > 0)
  if (volumes.length === 0) return 0

  const sum = volumes.reduce((acc, vol) => acc + vol, 0)
  return sum / volumes.length
})

function formatVolume(volume) {
  if (volume >= 1000000) {
    return (volume / 1000000).toFixed(1) + 'M'
  } else if (volume >= 1000) {
    return (volume / 1000).toFixed(1) + 'K'
  } else {
    return volume.toString()
  }
}

// Force re-render when data changes
watch(() => props.data, () => {
  chartKey.value++
}, { deep: true })
</script>

<style lang="scss" scoped>
.volume-chart {
  .volume-info {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .volume-title {
      color: #3B82F6;
    }

    .volume-value {
      font-family: monospace;
    }

    .volume-avg {
      font-family: monospace;
      margin-left: auto;
    }
  }

  .volume-canvas {
    height: v-bind(height + 'px');
    position: relative;

    canvas {
      border-radius: 4px;
    }
  }
}
</style>
