<template lang="pug">
.candlestick-chart
  canvas(ref="chartCanvas")
</template>

<script setup>
import { inject, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { Chart } from 'chart.js'
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial'
import zoomPlugin from 'chartjs-plugin-zoom'
import 'chartjs-adapter-luxon'

const props = defineProps({
  data: { type: Object, required: true },
  options: { type: Object, default: () => ({}) }
})

const $waveui = inject('$waveui')

// Register chart components.
Chart.register(CandlestickController, CandlestickElement, zoomPlugin)

const volumeBandPlugin = {
  afterLayout(chart, args, opts) {
    if (!opts?.height) return
    const volScale = chart.scales?.yVolume
    if (!volScale) return
    const area = chart.chartArea
    const band = Math.min(opts.height, area.bottom - area.top)
    volScale.top = area.bottom - band
    volScale.bottom = area.bottom
    volScale.height = band
  }
}

// Crosshair plugin for cursor tracking with axis labels.
const crosshairPlugin = {
  beforeInit(chart) {
    chart.crosshair = { x: null, y: null, draw: false }
  },
  afterEvent(chart, args) {
    const { inChartArea } = args
    const { type, x, y } = args.event

    chart.crosshair.draw = inChartArea
    chart.crosshair.x = x
    chart.crosshair.y = y

    if (type === 'mousemove' && inChartArea) chart.draw()
  },
  afterDraw(chart) {
    if (!chart.crosshair.draw) return

    const ctx = chart.ctx
    const { chartArea, scales } = chart
    const { x, y } = chart.crosshair

    if (!chartArea || x < chartArea.left || x > chartArea.right) return

    ctx.save()

    // Draw vertical line.
    ctx.strokeStyle = $waveui.colors.light2
    ctx.lineWidth = 1
    ctx.setLineDash([3, 3])
    ctx.beginPath()
    ctx.moveTo(x, chartArea.top)
    ctx.lineTo(x, chartArea.bottom)
    ctx.stroke()

    const isWithinChartY = y >= chartArea.top && y <= chartArea.bottom

    // Draw horizontal line if within chart area.
    if (isWithinChartY) {
      ctx.beginPath()
      ctx.moveTo(chartArea.left, y)
      ctx.lineTo(chartArea.right, y)
      ctx.stroke()
    }

    ctx.setLineDash([])

    // Helper function to draw labels.
    const drawLabel = (text, labelX, labelY, width, height) => {
      ctx.fillStyle = $waveui.colors[$waveui.theme === 'dark' ? 'primary-dark2' : 'primary-light1']

      ctx.beginPath()
      ctx.roundRect(labelX, labelY, width, height, 4)
      ctx.fill()

      ctx.fillStyle = $waveui.colors.white
      ctx.fillText(text, labelX + width / 2, labelY + height / 2)
    }

    // Draw X-axis label (only on main chart).
    if (scales.x) {
      const xValue = scales.x.getValueForPixel(x)
      if (xValue) {
        const timeLabel = new Date(xValue).toLocaleString('en-US', {
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        })

        ctx.font = `10px Quicksand, sans-serif`
        const labelWidth = ctx.measureText(timeLabel).width + 4
        const labelHeight = 10 + 4
        const labelX = Math.max(chartArea.left + labelWidth / 2 + 12,
                                Math.min(x, chartArea.right - labelWidth / 2 - 12)) - labelWidth / 2
        const labelY = chartArea.bottom + 5

        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        drawLabel(timeLabel, labelX, labelY, labelWidth, labelHeight)
      }
    }

    // Draw Y-axis label if within chart Y area.
    if (isWithinChartY && scales.y) {
      const yValue = scales.y.getValueForPixel(y)
      if (yValue) {
        const priceLabel = `$${yValue.toFixed(2)}`

        ctx.font = '10px Quicksand, sans-serif'
        const labelWidth = ctx.measureText(priceLabel).width + 4
        const labelHeight = 10 + 4
        const labelX = chartArea.right + 3
        const labelY = Math.max(chartArea.top + labelHeight / 2,
                                Math.min(y, chartArea.bottom - labelHeight / 2)) - labelHeight / 2

        ctx.textBaseline = 'middle'
        drawLabel(priceLabel, labelX, labelY, labelWidth, labelHeight)
      }
    }

    ctx.restore()
  }
}

const chartCanvas = ref(null)
let chartInstance = null

// Chart Configuration
// --------------------------------------------------------
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: { minute: 'HH:mm', hour: 'HH:mm', day: 'MMM dd' }
      }
    },
    y: { beginAtZero: false }
  }
}

// Chart Management
// --------------------------------------------------------
function createChart() {
  if (!chartCanvas.value) return

  const validData = validateChartData(props.data)
  const mergedOptions = { ...defaultOptions, ...props.options }

  chartInstance = new Chart(chartCanvas.value, {
    type: 'candlestick',
    data: validData,
    options: mergedOptions,
    plugins: [volumeBandPlugin, crosshairPlugin]
  })
}

function updateChart() {
  if (!chartInstance) return

  const validData = validateChartData(props.data)
  chartInstance.data = validData
  chartInstance.options = { ...defaultOptions, ...props.options }
  chartInstance.update('none')
}

function validateChartData(data) {
  // Return safe default if data is invalid.
  if (!data || !data.datasets || !Array.isArray(data.datasets)) {
    return { datasets: [{ label: 'OHLC', data: [] }] }
  }

  const validatedDatasets = data.datasets.map(dataset => ({
    ...dataset,
    data: Array.isArray(dataset.data) ? dataset.data : []
  }))

  return { ...data, datasets: validatedDatasets }
}

function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
}

// Watchers
// --------------------------------------------------------
watch(() => props.data, () => {
  if (!props.data || !props.data.datasets) return
  if (!chartInstance) createChart()
  else updateChart()
}, { deep: true })

watch(() => props.options, () => updateChart(), { deep: true })

// Lifecycle
// --------------------------------------------------------
onMounted(async () => {
  await nextTick()
  if (props.data && props.data.datasets) createChart()
})

onBeforeUnmount(() => {
  destroyChart()
})

// Expose chart instance.
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

