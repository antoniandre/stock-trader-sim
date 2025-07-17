<template lang="pug">
.candlestick-chart
  canvas(ref="chartCanvas")
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import {
  Chart,
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'

// Register chart components.
Chart.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement
)

const props = defineProps({
  data: { type: Object, required: true },
  options: { type: Object, default: () => ({}) }
})

const chartCanvas = ref(null)
let chartInstance = null

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          minute: 'HH:mm',
          hour: 'HH:mm',
          day: 'MMM dd'
        }
      }
    },
    y: { beginAtZero: false }
  }
}

function createChart() {
  if (!chartCanvas.value) return

  const mergedOptions = { ...defaultOptions, ...props.options }

  chartInstance = new Chart(chartCanvas.value, {
    type: 'candlestick',
    data: props.data,
    options: mergedOptions
  })
}

function updateChart() {
  if (!chartInstance) return

  chartInstance.data = props.data
  chartInstance.options = { ...defaultOptions, ...props.options }
  chartInstance.update('none')
}

function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
}

// Watch for data changes.
watch(() => props.data, () => updateChart(), { deep: true })

// Watch for options changes.
watch(() => props.options, () => updateChart(), { deep: true })

onMounted(async () => {
  await nextTick()
  createChart()
})

onBeforeUnmount(() => {
  destroyChart()
})

// Expose methods for parent component.
defineExpose({
  chart: () => chartInstance,
  update: updateChart
})
</script>

<style scoped>
.candlestick-chart {
  width: 100%;
  height: 100%;
  position: relative;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>

