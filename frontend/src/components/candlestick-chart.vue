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
  options: { type: Object, default: () => ({}) },
  plugins: { type: Array, default: () => [] },
  ordinalLookup: { type: Array, default: () => [] }
})

const emit = defineEmits(['hover-ohlc'])

const $waveui = inject('$waveui')

// Datasets that are not the main OHLC series (ordinal-mapped overlays).
const OVERLAY_DATASET_LABELS = new Set(['Volume', 'VWAP', 'EMA 20', 'EMA 50', 'EMA 200'])

function candlePointAtOrdinalIndex(chart, idx) {
  for (const ds of chart.data.datasets || []) {
    if (OVERLAY_DATASET_LABELS.has(ds.label)) continue
    const p = ds.data?.find(point => Math.round(point.x) === idx)
    if (p && (p.o != null || p.c != null || p.h != null || p.open != null)) return p
  }
  return null
}

function emitHoverOhlcForCrosshair(chart) {
  if (!chart.crosshair?.draw) {
    emit('hover-ohlc', null)
    return
  }
  const xPix = chart.crosshair.x
  const rawX = chart.scales.x?.getValueForPixel(xPix)
  if (rawX == null || Number.isNaN(rawX)) {
    emit('hover-ohlc', null)
    return
  }
  const idx = Math.round(rawX)
  if (props.ordinalLookup.length) {
    if (idx < 0 || idx >= props.ordinalLookup.length || !props.ordinalLookup[idx]) {
      emit('hover-ohlc', null)
      return
    }
  }
  const point = candlePointAtOrdinalIndex(chart, idx)
  if (!point) {
    emit('hover-ohlc', null)
    return
  }
  emit('hover-ohlc', {
    open: point.o ?? point.open ?? 0,
    high: point.h ?? point.high ?? 0,
    low: point.l ?? point.low ?? 0,
    close: point.c ?? point.close ?? 0,
    volume: Number(point.volume ?? point.v ?? point.V ?? point.tradeVolume ?? point.size ?? 0) || 0
  })
}

// Register chart components.
Chart.register(CandlestickController, CandlestickElement, zoomPlugin)

const volumeBandPlugin = {
  id: 'volumeBand',
  afterLayout(chart, args, opts) {
    const volScale = chart.scales?.yVolume
    if (!volScale) return
    const area = chart.chartArea
    const chartHeight = area.bottom - area.top
    // heightRatio takes priority (e.g. 0.25 = 25%); fallback to fixed px.
    const band = opts?.heightRatio
      ? Math.floor(chartHeight * opts.heightRatio)
      : Math.min(opts?.height ?? 0, chartHeight)
    if (band <= 0) return

    // Reposition the scale to the bottom band.
    volScale.top = area.bottom - band
    volScale.bottom = area.bottom
    volScale.height = band
    // Scale.configure() ran before this hook and set _startPixel/_length from
    // the pre-plugin top/bottom. Override them so getPixelForDecimal() maps
    // correctly into the new band.
    volScale._startPixel = area.bottom - band
    volScale._endPixel = area.bottom
    volScale._length = band

    // Compute yVolume.max from bars in the current x-zoom window.
    const volDs = chart.data.datasets?.find(d => d.label === 'Volume')
    if (!volDs?.data?.length) return

    const xScale = chart.scales.x
    const xMin = xScale?.min ?? -Infinity
    const xMax = xScale?.max ?? Infinity
    let maxVol = 0
    for (const p of volDs.data) {
      if (p.x >= xMin && p.x <= xMax) {
        const v = Number(p.y)
        if (Number.isFinite(v) && v > maxVol) maxVol = v
      }
    }
    // Fallback: use all bars when none fall in the current window.
    if (maxVol <= 0) {
      for (const p of volDs.data) {
        const v = Number(p.y)
        if (Number.isFinite(v) && v > maxVol) maxVol = v
      }
    }
    if (maxVol > 0) {
      const newMax = maxVol * 1.04
      // Update options for next configure() cycle.
      volScale.options.max = newMax
      // Override LinearScaleBase.configure() values so current render is correct.
      volScale.max = newMax
      volScale._endValue = newMax
      volScale._valueRange = newMax  // min is 0
    }
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

    emitHoverOhlcForCrosshair(chart)

    // Redraw on every move so crosshair clears when leaving the plot.
    if (type === 'mousemove') chart.draw()
  },
  afterDraw(chart) {
    if (!chart.crosshair.draw) return

    const ctx = chart.ctx
    const { chartArea, scales } = chart
    const { x, y } = chart.crosshair

    if (!chartArea || x < chartArea.left || x > chartArea.right) return

    const rawX = scales.x ? scales.x.getValueForPixel(x) : null
    // Ordinal charts (parent passes ordinalLookup) can pan/zoom into empty padding — no bar there.
    const hasBarAtCrosshairX = (() => {
      if (rawX == null || Number.isNaN(rawX)) return false
      if (!props.ordinalLookup.length) return true
      const idx = Math.round(rawX)
      if (idx < 0 || idx >= props.ordinalLookup.length) return false
      return Boolean(props.ordinalLookup[idx])
    })()

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
      const timeLabel = (() => {
        if (rawX == null || Number.isNaN(rawX)) return null
        if (props.ordinalLookup.length) {
          const ts = props.ordinalLookup[Math.round(rawX)]
          if (!ts) return null
          return new Date(ts).toLocaleString('en-US', {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
          })
        }
        return new Date(rawX).toLocaleString('en-US', {
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        })
      })()
      if (timeLabel) {
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

    // Draw Y-axis label only when the cursor X is over a real bar (not empty chart padding).
    if (isWithinChartY && scales.y && hasBarAtCrosshairX) {
      const yValue = scales.y.getValueForPixel(y)
      if (yValue != null && Number.isFinite(yValue)) {
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
let canvasPointerLeave = null

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
    plugins: [volumeBandPlugin, crosshairPlugin, ...props.plugins]
  })

  canvasPointerLeave = () => {
    emit('hover-ohlc', null)
    if (chartInstance?.crosshair) chartInstance.crosshair.draw = false
    chartInstance?.draw()
  }
  chartInstance.canvas.addEventListener('pointerleave', canvasPointerLeave)
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
    if (canvasPointerLeave) {
      chartInstance.canvas.removeEventListener('pointerleave', canvasPointerLeave)
      canvasPointerLeave = null
    }
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

