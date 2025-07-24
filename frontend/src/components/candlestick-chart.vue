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
import zoomPlugin from 'chartjs-plugin-zoom'
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
  CandlestickElement,
  zoomPlugin
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

  // Validate data before creating chart.
  const validData = validateChartData(props.data)
  const mergedOptions = { ...defaultOptions, ...props.options }

  chartInstance = new Chart(chartCanvas.value, {
    type: 'candlestick',
    data: validData,
    options: mergedOptions
  })
}

function updateChart() {
  if (!chartInstance) return

  // Validate data before updating chart.
  const validData = validateChartData(props.data)
  chartInstance.data = validData
  chartInstance.options = { ...defaultOptions, ...props.options }
  chartInstance.update('none')
}

function validateChartData(data) {
  // Return safe default if data is invalid.
  if (!data || !data.datasets || !Array.isArray(data.datasets)) {
    return {
      datasets: [{
        label: 'OHLC',
        data: []
      }]
    }
  }

  // Ensure each dataset has valid data array.
  const validatedDatasets = data.datasets.map(dataset => ({
    ...dataset,
    data: Array.isArray(dataset.data) ? dataset.data : []
  }))

  return {
    ...data,
    datasets: validatedDatasets
  }
}

function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
}

// Watch for data changes.
watch(() => props.data, () => {
  if (!props.data || !props.data.datasets) return

  // Create chart if it doesn't exist yet (data arrived later).
  if (!chartInstance) createChart()
  else updateChart()
}, { deep: true })

// Watch for options changes.
watch(() => props.options, () => updateChart(), { deep: true })

onMounted(async () => {
  await nextTick()
  // Only create chart if we have valid data
  if (props.data && props.data.datasets) createChart()
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

