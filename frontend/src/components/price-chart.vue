<template lang="pug">
.price-chart
  .pane-values.size--xs.op7(v-if="currentPrice") OHLC: {{ formatPrice(currentPrice) }}

  //- Chart Controls
  .chart-controls.w-flex.justify-space-between.align-center.mt6.mb2
    .chart-selectors.w-flex.gap2
      //- Chart Type Toggle
      .chart-type-toggle.w-flex.gap1.no-grow
        w-button.pa0(
          width="26"
          height="26"
          :outline="chartType === 'candlestick'"
          @click="changeChartType('line')"
          tooltip="Line"
          :tooltip-props="{ sm: true }"
          round)
          icon.size--lg(icon="material-symbols-light:show-chart")
        w-button.pa0(
          width="26"
          height="26"
          :outline="chartType === 'line'"
          @click="changeChartType('candlestick')"
          tooltip="Candles"
          :tooltip-props="{ sm: true }"
          round)
          icon.size--xl(icon="material-symbols-light:candlestick-chart-outline-rounded")

      //- Period Selector
      .period-selector.w-flex.gap1.no-grow.mla
        w-button.period-btn(
          v-for="period in chartPeriods"
          :key="period.value"
          color="base"
          :class="{ 'period-btn--active': selectedPeriod === period.value }"
          @click="changePeriod(period.value)") {{ period.label }}

      //- Timeframe Selector
      .timeframe-selector.w-flex.gap1.no-grow
        w-select.timeframe-btn(
          :value="selectedTimeframe"
          :items="availableTimeframes"
          @input="changeTimeframe"
          outline)

  //- Indicators Toggle
  .indicators-panel.w-flex.gap2.mb4
    w-button.indicator-btn(:outline="!showEMA" @click="showEMA = !showEMA" xs) EMA (20,50,200)
    w-button.indicator-btn(:outline="!showVWAP" @click="showVWAP = !showVWAP" xs) VWAP
    w-button.indicator-btn(:outline="!showVolume" @click="showVolume = !showVolume" xs) Volume
    w-button.indicator-btn(:outline="!showRSI" @click="showRSI = !showRSI" xs) RSI
    w-button.indicator-btn(:outline="!showMACD" @click="showMACD = !showMACD" xs) MACD

  //- Main Chart Display - Replace the individual chart sections with synchronized panes
  .charts-wrap.w-flex.column.bdrs2.pa4.w-card(v-if="!isLoadingHistoricalData")
    //- Main Price Chart Pane
    .charts(ref="chartContainer")
      Line.chart.chart--price.chart--line(
        v-if="chartType === 'line'"
        ref="lineChartRef"
        :data="enhancedLineChartData"
        :options="synchronizedLineChartOptions")
      CandlestickChart.chart.chart--price.chart--candles(
        v-else
        ref="candleChartRef"
        :data="enhancedCandlestickChartData"
        :options="synchronizedCandlestickChartOptions")
      .chart.chart--volume
        Line(
          v-show="showVolume"
          ref="volumeChartRef"
          :data="indicators.volumeChartData.value"
          :options="synchronizedVolumeChartOptions")

    //- Drawing Tools Overlay
    DrawingTools(:chart-container="chartContainer")

    //- RSI Pane (if enabled)
    .chart-pane.bd1.bdrs2.ovh.mt2.rsi-pane(v-show="showRSI")
      .pane-header.w-flex.align-center.justify-space-between.pa1.contrast-o05--bg
        .pane-title.size--sm.text-bold.ml8 RSI (14)
        .pane-values.size--xs.op7
          span.mr2 {{ currentRSI }}
          span Overbought: 70 • Oversold: 30

      .chart-container
        Line(
          ref="rsiChartRef"
          :data="indicators.rsiChartData.value"
          :options="synchronizedRsiChartOptions")

    //- MACD Pane (if enabled)
    .chart-pane.bd1.bdrs2.ovh.mt2.macd-pane(v-show="showMACD")
      .pane-header.w-flex.align-center.justify-space-between.pa1.contrast-o05--bg
        .pane-title.size--sm.text-bold.ml8 MACD (12,26,9)
        .pane-values.size--xs.op7
          span.mr2 MACD: {{ currentMACD }}
          span.mr2 Signal: {{ currentSignal }}
          span Histogram: {{ currentHistogram }}

      .chart-container
        Line(
          ref="macdChartRef"
          :data="indicators.macdChartData.value"
          :options="synchronizedMacdChartOptions")

    //- Chart Controls
    .chart-controls-bottom.w-flex.align-center.justify-space-between.pa2
      .w-flex.align-center.gap2.size--xs.ml8
        span.op6 Mouse wheel to zoom • Click &amp; drag to pan
        w-button.pa0.op8(
          width="18"
          height="18"
          @click="resetAllCharts"
          tooltip="Reset Zoom"
          :tooltip-props="{ sm: true }"
          round)
          icon.size--xs(icon="mdi:refresh")
        .loading-indicator.w-flex.align-center.gap1(v-if="isLoadingAdditionalData")
          w-spinner(size="12" color="primary")
          span.op7 Loading...

  //- Loading state (keep existing)
  .chart-loading.w-flex.column.align-center.justify-center(v-else)
    w-progress.mb4(circle)
    span.text-info Loading chart data...
</template>

<script setup>
// Imports
// --------------------------------------------------------
import { Line } from 'vue-chartjs'
import { Chart } from 'chart.js'
import 'chart.js/auto'
import 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'
import zoomPlugin from 'chartjs-plugin-zoom'
import { BarController, BarElement } from 'chart.js'
import CandlestickChart from './candlestick-chart.vue'
import DrawingTools from './drawing-tools.vue'
import { ref, computed } from 'vue'
import { useTechnicalIndicators } from '@/composables/use-technical-indicators'

// Register Chart.js plugins and components.
Chart.register(zoomPlugin, BarController, BarElement)

// Props & Emits
// --------------------------------------------------------
const props = defineProps({
  symbol: { type: String, required: true },
  chartType: { type: String, required: true },
  selectedPeriod: { type: String, required: true },
  selectedTimeframe: { type: String, required: true },
  chartPeriods: { type: Array, required: true },
  availableTimeframes: { type: Array, required: true },
  isLoadingHistoricalData: { type: Boolean, required: true },
  isLoadingAdditionalData: { type: Boolean, default: false },
  lineChartData: { type: Object, required: true },
  lineChartOptions: { type: Object, required: true },
  candlestickChartData: { type: Object, required: true },
  candlestickChartOptions: { type: Object, required: true }
})

const emit = defineEmits([
  'change-chart-type',
  'change-period',
  'change-timeframe',
  'reset-zoom-complete'
])

// Template Refs & State
// --------------------------------------------------------
const chartContainer = ref(null)
const lineChartRef = ref(null)
const candleChartRef = ref(null)
const volumeChartRef = ref(null)
const rsiChartRef = ref(null)
const macdChartRef = ref(null)

// Indicator visibility toggles.
const showEMA = ref(true)
const showVWAP = ref(true)
const showVolume = ref(true)
const showRSI = ref(true)
const showMACD = ref(true)

// Synchronization state.
const zoomRange = ref({ min: null, max: null })
const isInternalZoom = ref(false)

// Helper Functions
// --------------------------------------------------------
const formatPrice = (price) => {
  if (!price) return '0.00'
  return typeof price === 'number' ? price.toFixed(2) : price
}

// Get all active chart instances.
const getAllChartInstances = () => {
  const charts = []

  // Main price chart (line or candlestick).
  if (lineChartRef.value?.chart) charts.push(lineChartRef.value.chart)
  if (candleChartRef.value?.chart) charts.push(candleChartRef.value.chart)

  // Indicator charts.
  if (showVolume.value && volumeChartRef.value?.chart) charts.push(volumeChartRef.value.chart)
  if (showRSI.value && rsiChartRef.value?.chart) charts.push(rsiChartRef.value.chart)
  if (showMACD.value && macdChartRef.value?.chart) charts.push(macdChartRef.value.chart)

  // Filter out charts that don't have proper scales.
  return charts.filter(chart => chart && chart.scales && chart.scales.x)
}

// Chart Synchronization
// --------------------------------------------------------
// Synchronize zoom across all charts.
const syncZoom = (sourceChart, zoomState) => {
  if (isInternalZoom.value) return

  isInternalZoom.value = true
  zoomRange.value = { min: zoomState.min, max: zoomState.max }

  getAllChartInstances().forEach(chart => {
    if (chart && chart !== sourceChart && chart.scales && chart.scales.x && chart.scales.x.options) {
      chart.scales.x.options.min = zoomState.min
      chart.scales.x.options.max = zoomState.max
      chart.update('none')
    }
  })

  isInternalZoom.value = false
}

// Reset zoom on all charts.
const resetAllCharts = () => {
  zoomRange.value = { min: null, max: null }
  getAllChartInstances().forEach(chart => {
    if (chart && chart.resetZoom) chart.resetZoom()
  })
  emit('reset-zoom-complete')
}

// Data Processing
// --------------------------------------------------------
// OHLC data processing for technical indicators.
const ohlcData = computed(() => {
  let sourceData = []

  if (props.chartType === 'line' && props.lineChartData?.datasets?.[0]?.data) {
    // Convert line data to OHLC format for indicator calculations.
    sourceData = props.lineChartData.datasets[0].data.map(point => ({
      timestamp: point.x,
      open: point.y,
      high: point.y,
      low: point.y,
      close: point.y,
      volume: 1000000, // Default volume for line charts.
      price: point.y
    }))
  } else if (props.chartType === 'candlestick' && props.candlestickChartData?.datasets?.[0]?.data) {
    // Use candlestick data directly.
    sourceData = props.candlestickChartData.datasets[0].data.map(item => ({
      timestamp: item.x,
      open: item.o,
      high: item.h,
      low: item.l,
      close: item.c,
      volume: item.volume || 0,
      price: item.c
    }))
  }

  // Debug logging for data integrity.
  if (sourceData.length > 0) {
    const priceRange = {
      min: Math.min(...sourceData.map(d => d.close)),
      max: Math.max(...sourceData.map(d => d.close))
    }
    const hasVolume = sourceData.some(d => d.volume > 0)
    console.log(`📊 OHLC Data: ${sourceData.length} points, price range: $${priceRange.min.toFixed(2)}-$${priceRange.max.toFixed(2)}, has volume: ${hasVolume}`)
  }

  return sourceData
})

// Volume data for indicators.
const volumeData = computed(() => {
  return ohlcData.value.map(point => ({
    timestamp: point.timestamp,
    volume: point.volume || 0
  }))
})

// Technical indicators from composable.
const indicators = useTechnicalIndicators(ohlcData, volumeData)

// VWAP calculation
const vwapData = computed(() => {
  if (ohlcData.value.length === 0) return []

  // Check if we have real volume data
  const volumes = ohlcData.value.map(point => point.volume || 0)
  const hasRealVolume = volumes.some(v => v > 0) && new Set(volumes).size > 1

  if (!hasRealVolume) {
    // Fallback to simple moving average of typical price
    const typicalPrices = ohlcData.value.map(point => (point.high + point.low + point.close) / 3)
    const period = 20
    const smaData = []

    for (let i = period - 1; i < typicalPrices.length; i++) {
      const sum = typicalPrices.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0)
      smaData.push({
        x: ohlcData.value[i].timestamp,
        y: sum / period
      })
    }
    return smaData
  } else {
    // Calculate real VWAP with actual volume data
    let cumulativeTpv = 0 // Typical Price * Volume
    let cumulativeVolume = 0
    const vwap = []

    for (const point of ohlcData.value) {
      const typicalPrice = (point.high + point.low + point.close) / 3
      const volume = Math.max(point.volume || 0, 1) // Ensure volume is at least 1

      cumulativeTpv += typicalPrice * volume
      cumulativeVolume += volume

      vwap.push({
        x: point.timestamp,
        y: cumulativeTpv / cumulativeVolume
      })
    }
    return vwap
  }
})

// EMA calculation function
function calculateSimpleEMA(prices, period) {
  if (!prices || !Array.isArray(prices) || prices.length < period) return []

  const ema = []
  const multiplier = 2 / (period + 1)

  // Start with simple moving average for first value
  let sum = 0
  for (let i = 0; i < period; i++) {
    sum += prices[i]
  }

  // Fill the EMA array with null values for the initial period
  for (let i = 0; i < period - 1; i++) {
    ema[i] = null
  }
  ema[period - 1] = sum / period // First valid EMA value

  // Calculate EMA for remaining values
  for (let i = period; i < prices.length; i++) {
    const currentPrice = prices[i]
    const prevEMA = ema[i - 1]
    ema[i] = (currentPrice * multiplier) + (prevEMA * (1 - multiplier))
  }

  return ema
}

// Enhanced chart data with technical indicators
const enhancedLineChartData = computed(() => {
  if (!props.lineChartData?.datasets?.[0]?.data) return props.lineChartData

  const baseDataset = props.lineChartData.datasets[0]
  const datasets = [baseDataset]

  // Add EMA lines if enabled
  if (showEMA.value && ohlcData.value.length > 0) {
    const closePrices = ohlcData.value.map(d => d.close || d.price || 0)

    // EMA 20 (Green)
    if (closePrices.length >= 20) {
      const ema20 = calculateSimpleEMA(closePrices, 20)
      const ema20Data = ema20.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        label: 'EMA 20',
        data: ema20Data,
        borderColor: '#00ff88',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false
      })
    }

    // EMA 50 (Blue)
    if (closePrices.length >= 50) {
      const ema50 = calculateSimpleEMA(closePrices, 50)
      const ema50Data = ema50.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        label: 'EMA 50',
        data: ema50Data,
        borderColor: '#0088ff',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false
      })
    }

    // EMA 200 (Orange)
    if (closePrices.length >= 200) {
      const ema200 = calculateSimpleEMA(closePrices, 200)
      const ema200Data = ema200.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        label: 'EMA 200',
        data: ema200Data,
        borderColor: '#ff8800',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false
      })
    }
  }

  // Add VWAP if enabled
  if (showVWAP.value && vwapData.value.length > 0) {
    datasets.push({
      label: 'VWAP',
      data: vwapData.value,
      borderColor: '#ff00ff',
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      pointRadius: 0,
      fill: false
    })
  }

  return { ...props.lineChartData, datasets }
})

const enhancedCandlestickChartData = computed(() => {
  if (!props.candlestickChartData?.datasets?.[0]?.data) return props.candlestickChartData

  const datasets = [...props.candlestickChartData.datasets]

  // Add EMA lines if enabled (same logic as line chart)
  if (showEMA.value && ohlcData.value.length > 0) {
    const closePrices = ohlcData.value.map(d => d.close || d.price || 0)

    if (closePrices.length >= 20) {
      const ema20 = calculateSimpleEMA(closePrices, 20)
      const ema20Data = ema20.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        type: 'line',
        label: 'EMA 20',
        data: ema20Data,
        borderColor: '#00ff88',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false
      })
    }

    if (closePrices.length >= 50) {
      const ema50 = calculateSimpleEMA(closePrices, 50)
      const ema50Data = ema50.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        type: 'line',
        label: 'EMA 50',
        data: ema50Data,
        borderColor: '#0088ff',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false
      })
    }

    if (closePrices.length >= 200) {
      const ema200 = calculateSimpleEMA(closePrices, 200)
      const ema200Data = ema200.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        type: 'line',
        label: 'EMA 200',
        data: ema200Data,
        borderColor: '#ff8800',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        pointRadius: 0,
        fill: false
      })
    }
  }

  // Add VWAP if enabled
  if (showVWAP.value && vwapData.value.length > 0) {
    datasets.push({
      type: 'line',
      label: 'VWAP',
      data: vwapData.value,
      borderColor: '#ff00ff',
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      pointRadius: 0,
      fill: false
    })
  }

  return { ...props.candlestickChartData, datasets }
})

// Simple RSI calculation function.
function calculateSimpleRSI(prices, period = 14) {
  if (!prices || prices.length < period) return []

  const rsi = []
  const avgGain = []
  const avgLoss = []

  // Initialize first average gain and loss.
  let gainSum = 0
  let lossSum = 0
  for (let i = 1; i <= period; i++) {
    const diff = prices[i] - prices[i - 1]
    if (diff > 0) {
      gainSum += diff
      lossSum += 0
    } else {
      gainSum += 0
      lossSum += Math.abs(diff)
    }
  }
  avgGain[0] = gainSum / period
  avgLoss[0] = lossSum / period

  // Calculate subsequent RSIs.
  for (let i = period + 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    const prevPrice = prices[i - 1]

    const diff = currentPrice - prevPrice
    const currentGain = diff > 0 ? diff : 0
    const currentLoss = diff < 0 ? Math.abs(diff) : 0

    avgGain[i - period] = (avgGain[i - period - 1] * (period - 1) + currentGain) / period
    avgLoss[i - period] = (avgLoss[i - period - 1] * (period - 1) + currentLoss) / period

    if (avgLoss[i - period] === 0) {
      rsi.push(100)
    } else {
      const rs = avgGain[i - period] / avgLoss[i - period]
      rsi.push(100 - (100 / (1 + rs)))
    }
  }

  return rsi
}

// Chart options for indicator panels.
const volumeChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  },
  scales: {
    x: {
      type: 'time',
      display: false
    },
    y: {
      position: 'right',
      beginAtZero: true,
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: { color: '#C9D1D9', maxTicksLimit: 4 }
    }
  }
}))

const rsiChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  },
  scales: {
    x: {
      type: 'time',
      display: false
    },
    y: {
      position: 'right',
      min: 0,
      max: 100,
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        drawOnChartArea: true
      },
      ticks: {
        color: '#C9D1D9',
        stepSize: 10,
        // Show all major levels for better readability.
        callback: function(value, index, values) {
          // Show every 10 units: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.
          if (value % 10 === 0) {
            return value.toString()
          }
          return ''
        }
      }
    }
  },
  // Add background fill and reference lines like in the reference image.
  plugins: [{
    beforeDraw: (chart) => {
      const ctx = chart.ctx
      const chartArea = chart.chartArea

      // Draw light background fill between 30 and 70 (neutral zone).
      const y30 = chart.scales.y.getPixelForValue(30)
      const y70 = chart.scales.y.getPixelForValue(70)

      ctx.save()
      ctx.fillStyle = 'rgba(100, 116, 139, 0.1)' // Light gray background
      ctx.fillRect(chartArea.left, y70, chartArea.right - chartArea.left, y30 - y70)
      ctx.restore()
    },
    afterDraw: (chart) => {
      const ctx = chart.ctx
      const chartArea = chart.chartArea

      ctx.save()
      ctx.strokeStyle = 'rgba(107, 114, 128, 0.5)' // Gray color for reference lines
      ctx.setLineDash([2, 3]) // Dashed lines
      ctx.lineWidth = 1

      // Draw horizontal reference lines at key levels.
      const levels = [30, 50, 70]
      levels.forEach(level => {
        const y = chart.scales.y.getPixelForValue(level)
        ctx.beginPath()
        ctx.moveTo(chartArea.left, y)
        ctx.lineTo(chartArea.right, y)
        ctx.stroke()
      })

      ctx.restore()
    }
  }]
}))

const macdChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      callbacks: {
        title: function(context) {
          return new Date(context[0].parsed.x).toLocaleTimeString()
        },
        label: function(context) {
          const label = context.dataset.label
          const value = context.parsed.y
          return `${label}: ${value.toFixed(4)}`
        }
      }
    }
  },
  scales: {
    x: {
      type: 'time',
      display: false
    },
    y: {
      position: 'right',
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        drawOnChartArea: true
      },
      ticks: {
        color: '#C9D1D9',
        maxTicksLimit: 5,
        callback: function(value) {
          return value.toFixed(4)
        }
      }
    }
  },
  // Enable mixed chart types (bars + lines).
  interaction: {
    intersect: false,
    mode: 'index'
  },
  // Add zero line for MACD.
  plugins: [{
    afterDraw: (chart) => {
      const ctx = chart.ctx
      const chartArea = chart.chartArea

      // Draw zero line.
      const zeroY = chart.scales.y.getPixelForValue(0)
      if (zeroY >= chartArea.top && zeroY <= chartArea.bottom) {
        ctx.save()
        ctx.strokeStyle = 'rgba(107, 114, 128, 0.7)'
        ctx.setLineDash([1, 1])
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(chartArea.left, zeroY)
        ctx.lineTo(chartArea.right, zeroY)
        ctx.stroke()
        ctx.restore()
      }
    }
  }]
}))

// Current Values for Display
// --------------------------------------------------------
const currentPrice = computed(() => {
  const data = props.chartType === 'line' ? props.lineChartData : props.candlestickChartData
  const lastPoint = data?.datasets?.[0]?.data?.slice(-1)[0]
  return lastPoint?.y || lastPoint?.c || 0
})

const currentRSI = computed(() => {
  const rsiData = indicators.rsiChartData.value?.datasets?.[0]?.data
  const lastRSI = rsiData?.slice(-1)[0]?.y
  return lastRSI ? lastRSI.toFixed(1) : '--'
})

const currentMACD = computed(() => {
  const macdData = indicators.macdChartData.value?.datasets?.[0]?.data
  const lastMACD = macdData?.slice(-1)[0]?.y
  return lastMACD ? lastMACD.toFixed(4) : '--'
})

const currentSignal = computed(() => {
  const signalData = indicators.macdChartData.value?.datasets?.[1]?.data
  const lastSignal = signalData?.slice(-1)[0]?.y
  return lastSignal ? lastSignal.toFixed(4) : '--'
})

const currentHistogram = computed(() => {
  const histogramData = indicators.macdChartData.value?.datasets?.[2]?.data
  const lastHistogram = histogramData?.slice(-1)[0]?.y
  return lastHistogram ? lastHistogram.toFixed(4) : '--'
})

// Chart Options
// --------------------------------------------------------
// Base chart options for synchronization.
const baseSynchronizedOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 0 },
  interaction: {
    intersect: false,
    mode: 'index'
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: { minute: 'HH:mm', hour: 'MMM dd HH:mm' }
      },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' },
      min: zoomRange.value.min,
      max: zoomRange.value.max
    }
  },
  plugins: {
    legend: { display: false },
    zoom: {
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: 'x',
        onZoomComplete: (context) => {
          const chart = context.chart
          if (chart && chart.scales && chart.scales.x) {
            const { min, max } = chart.scales.x
            syncZoom(chart, { min, max })
          }
        }
      },
      pan: {
        enabled: true,
        mode: 'x',
        onPanComplete: (context) => {
          const chart = context.chart
          if (chart && chart.scales && chart.scales.x) {
            const { min, max } = chart.scales.x
            syncZoom(chart, { min, max })
          }
        }
      }
    }
  }
}))

// Synchronized chart options for each pane.
const synchronizedLineChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: {
      ...baseSynchronizedOptions.value.scales.x,
      display: false // Hide x-axis on main chart.
    },
    y: {
      position: 'right',
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' }
    }
  }
}))

const synchronizedCandlestickChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: {
      ...baseSynchronizedOptions.value.scales.x,
      display: false // Hide x-axis on main chart.
    },
    y: {
      position: 'right',
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' }
    }
  }
}))

const synchronizedVolumeChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: {
      ...baseSynchronizedOptions.value.scales.x,
      display: false // Hide x-axis on volume chart.
    },
    y: {
      position: 'right',
      grid: { display: false },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' }
    }
  }
}))

const synchronizedRsiChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: {
      ...baseSynchronizedOptions.value.scales.x,
      display: false // Hide x-axis on RSI chart.
    },
    y: {
      position: 'right',
      min: 0,
      max: 100,
      grid: {
        display: true,
        color: 'rgba(255, 255, 255, 0.1)',
        drawOnChartArea: false
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
        stepSize: 20,
        callback: (value) => value
      }
    }
  }
}))

const synchronizedMacdChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: {
      ...baseSynchronizedOptions.value.scales.x,
      display: true // Show x-axis on bottom chart.
    },
    y: {
      position: 'right',
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: 'rgba(255, 255, 255, 0.7)' }
    }
  }
}))

// Event Handlers
// --------------------------------------------------------
const changeChartType = (type) => emit('change-chart-type', type)
const changePeriod = (period) => emit('change-period', period)
const changeTimeframe = (timeframe) => emit('change-timeframe', timeframe)

// Legacy function for compatibility - delegates to resetAllCharts.
function resetZoom() {
  resetAllCharts()
}

// Expose refs and methods for parent access if needed.
defineExpose({
  chartContainer,
  lineChartRef,
  candleChartRef,
  resetZoom
})
</script>

<style lang="scss">
.price-chart {
  .chart-controls {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .timeframe-selector .w-select__selection-wrap { min-height: 24px; }

  .period-selector, .chart-type-toggle {
    .period-btn, .chart-type-btn {
      min-width: 40px;
      font-size: 12px;
      padding: 6px 12px;
      background-color: rgba(255, 255, 255, 0.1);

      &--active {
        background-color: var(--w-primary-color);
        color: white;
      }
    }
  }

  .timeframe-selector {
    .timeframe-btn {
      &--active {
        background-color: var(--w-info-color);
        color: white;
      }
    }
  }

  // TradingView-style synchronized charts.
  .charts-wrap {
    position: relative;
    background: var(--w-base-bg-color);
    overflow: hidden;

    .charts {
      position: relative;
      height: 400px;
    }

    .chart-pane {
      position: relative;

      // Individual pane heights.
      &.chart--price {height: 400px;}
      &.chart--rsi {height: 110px;}
      &.chart--macd {height: 110px;}
    }
    .chart--volume {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 115px;
    }
  }

  // Loading state.
  .chart-loading {
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 4rem;
    min-height: 400px;
  }

  // Responsive design.
  @media (max-width: 768px) {
    .charts-wrap {
      .chart-pane {
        &.price-pane .chart-container {height: 250px;}
        &.volume-pane .chart-container {height: 80px;}
        &.rsi-pane .chart-container {height: 80px;}
        &.macd-pane .chart-container {height: 100px;}
      }
    }

    .indicators-panel {flex-wrap: wrap;}
  }
}
</style>
