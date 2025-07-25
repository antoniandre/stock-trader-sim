<template lang="pug">
.price-chart
  //- Chart Controls
  .chart-controls.w-flex.justify-between.align-center.mt6.mb2
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
          @click="changePeriod(period.value)")
          | {{ period.label }}

      //- Timeframe Selector
      .timeframe-selector.w-flex.gap1.no-grow
        w-select.timeframe-btn(
          :value="selectedTimeframe"
          :items="availableTimeframes"
          @input="changeTimeframe"
          outline)

  //- Indicators Toggle
  .indicators-panel.w-flex.gap2.mb4
    w-button.indicator-btn(
      :outline="!showEMA"
      @click="showEMA = !showEMA"
      size="xs")
      | EMA (20,50,200)
    w-button.indicator-btn(
      :outline="!showVWAP"
      @click="showVWAP = !showVWAP"
      size="xs")
      | VWAP
    w-button.indicator-btn(
      :outline="!showVolume"
      @click="showVolume = !showVolume"
      size="xs")
      | Volume
    w-button.indicator-btn(
      :outline="!showRSI"
      @click="showRSI = !showRSI"
      size="xs")
      | RSI
    w-button.indicator-btn(
      :outline="!showMACD"
      @click="showMACD = !showMACD"
      size="xs")
      | MACD

  //- Main Chart Display
  .chart.w-flex.column.align-center.justify-center(:class="`chart--${chartType}`")
    //- Loading state
    .w-flex.column.align-center.justify-center(v-if="isLoadingHistoricalData")
      w-progress.mb4(circle)
      span.text-info Loading chart data...

    //- Main Price Chart
    .tradingview-chart(v-else ref="chartContainer" style="position: relative;")
      Line(
        v-if="chartType === 'line'"
        ref="lineChartRef"
        :data="enhancedLineChartData"
        :options="lineChartOptions")
      CandlestickChart(
        v-else
        ref="candleChartRef"
        :data="enhancedCandlestickChartData"
        :options="candlestickChartOptions")

      //- Drawing Tools Overlay (positioned inside chart container)
      DrawingTools(
        v-if="!isLoadingHistoricalData"
        :chart-container="chartContainer")

    //- Chart Controls
    .w-flex.align-center.gap2.size--xs.mt2(v-if="!isLoadingHistoricalData")
      span.op6 Mouse wheel to zoom • Click &amp; drag to pan
      //- Additional data loading indicator
      .w-flex.align-center.gap1(v-if="isLoadingAdditionalData")
        w-spinner(size="12" color="primary")
        span.op7 Loading...

      w-button.pa0.op8(
        width="16"
        height="16"
        @click="resetZoom"
        tooltip="Reset Zoom"
        :tooltip-props="{ sm: true }"
        round)
        icon.w-icon(icon="mdi:refresh" style="width: 12px")

  //- Volume Panel
  .volume-panel.w-card.mt4(v-show="showVolume")
    .panel-header.w-flex.align-center.justify-between.gap2.pa2.contrast-o05--bg
      .panel-title.size--sm.text-bold Volume
      .panel-values.size--xs.op7
        span.mr2 Volume SMA 20
    .volume-chart(v-if="!isLoadingHistoricalData")
      Line(
        ref="volumeChartRef"
        :data="indicators.volumeChartData.value"
        :options="volumeChartOptions")
    .loading-placeholder(v-else) Loading volume data...

  //- RSI Panel
  .rsi-panel.w-card.mt4(v-show="showRSI")
    .panel-header.w-flex.align-center.justify-between.gap2.pa2.contrast-o05--bg
      .panel-title.size--sm.text-bold RSI (14)
      .panel-values.size--xs.op7
        span.mr2 RSI: {{ currentRSI }}
        span SMA: {{ currentRSISMA }}
    .rsi-chart(v-if="!isLoadingHistoricalData")
      Line(
        ref="rsiChartRef"
        :data="indicators.rsiChartData.value"
        :options="rsiChartOptions")
    .loading-placeholder(v-else) Loading RSI data...

  //- MACD Panel
  .macd-panel.w-card.mt4(v-show="showMACD")
    .panel-header.w-flex.align-center.justify-between.gap2.pa2.contrast-o05--bg
      .panel-title.size--sm.text-bold MACD (12,26,9)
      .panel-values.size--xs.op7
        span.mr2 MACD: {{ currentMACD }}
        span.mr2 Signal: {{ currentSignal }}
        span Histogram: {{ currentHistogram }}
    .macd-chart(v-if="!isLoadingHistoricalData")
      Line(
        ref="macdChartRef"
        :data="indicators.macdChartData.value"
        :options="macdChartOptions")
    .loading-placeholder(v-else) Loading MACD data...
</template>

<script setup>
// Import Chart.js dependencies
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

// Register zoom plugin and bar chart components for mixed MACD chart
Chart.register(zoomPlugin, BarController, BarElement)

const props = defineProps({
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

// Template refs
const chartContainer = ref(null)
const lineChartRef = ref(null)
const candleChartRef = ref(null)
const volumeChartRef = ref(null)
const rsiChartRef = ref(null)
const macdChartRef = ref(null)

// Indicator visibility toggles
const showEMA = ref(true)
const showVWAP = ref(true)
const showVolume = ref(true)
const showRSI = ref(true)
const showMACD = ref(true)

// OHLC data processing for technical indicators.
const ohlcData = computed(() => {
  try {
    if (props.chartType === 'line') {
      // Convert line data to OHLC format
      if (!props.lineChartData?.datasets?.[0]?.data || !Array.isArray(props.lineChartData.datasets[0].data)) {
        return []
      }

      const lineData = props.lineChartData.datasets[0].data.map(point => {
        if (!point || typeof point !== 'object') return null

        const timestamp = point.x || Date.now()
        const price = point.y || 0

        return {
          timestamp,
          price,
          open: price,
          high: price,
          low: price,
          close: price,
          volume: 0 // No volume data for line charts
        }
      }).filter(Boolean) // Remove any null entries.

      console.log(`📊 Line OHLC Data: ${lineData.length} points, price range: $${Math.min(...lineData.map(d => d.price)).toFixed(2)} - $${Math.max(...lineData.map(d => d.price)).toFixed(2)}`)
      return lineData
    }
    else {
      // Use candlestick data
      if (!props.candlestickChartData?.datasets?.[0]?.data || !Array.isArray(props.candlestickChartData.datasets[0].data)) {
        return []
      }

      const candleData = props.candlestickChartData.datasets[0].data.map(point => {
        if (!point || typeof point !== 'object') return null

        return {
          timestamp: point.x || Date.now(),
          open: point.o || 0,
          high: point.h || 0,
          low: point.l || 0,
          close: point.c || 0,
          price: point.c || 0,
          volume: point.volume || point.v || 0 // Default to 0 if no volume
        }
      }).filter(Boolean) // Remove any null entries

      if (candleData.length > 0) {
        const prices = candleData.map(d => d.close)
        const volumes = candleData.map(d => d.volume)
        const hasVolume = volumes.some(v => v > 0)
        console.log(`📊 Candlestick OHLC Data: ${candleData.length} points, price range: $${Math.min(...prices).toFixed(2)} - $${Math.max(...prices).toFixed(2)}, has volume: ${hasVolume}`)

        // Log sample data points for debugging
        if (candleData.length >= 3) {
          console.log('📊 Sample data points:', {
            first: candleData[0],
            middle: candleData[Math.floor(candleData.length / 2)],
            last: candleData[candleData.length - 1]
          })
        }
      }

      return candleData
    }
  }
  catch (error) {
    console.warn('Error processing OHLC data:', error)
    return []
  }
})

// Extract volume data for technical indicators.
const volumeData = computed(() => {
  try {
    if (!Array.isArray(ohlcData.value)) return []

    return ohlcData.value.map(point => {
      if (!point || typeof point !== 'object') return null

      return {
        timestamp: point.timestamp || Date.now(),
        volume: point.volume || 0
      }
    }).filter(Boolean) // Remove any null entries
  }
  catch (error) {
    console.warn('Error processing volume data:', error)
    return []
  }
})

// VWAP Calculation
// --------------------------------------------------------
const vwapData = computed(() => {
  if (!ohlcData.value || ohlcData.value.length === 0) return []

  // Check if we have real volume data (not all the same default value)
  const volumes = ohlcData.value.map(point => point.volume || 0)
  const hasRealVolume = volumes.some(v => v > 0) && new Set(volumes).size > 1

  if (!hasRealVolume) {
    // If no real volume data, return simple moving average of typical price
    const windowSize = 20
    const vwapValues = []

    for (let i = 0; i < ohlcData.value.length; i++) {
      const point = ohlcData.value[i]
      const typicalPrice = (point.high + point.low + point.close) / 3

      if (i < windowSize - 1) {
        vwapValues.push({ timestamp: point.timestamp, value: typicalPrice })
      } else {
        // Calculate simple average of last 20 typical prices
        let sum = 0
        for (let j = i - windowSize + 1; j <= i; j++) {
          const prevPoint = ohlcData.value[j]
          sum += (prevPoint.high + prevPoint.low + prevPoint.close) / 3
        }
        vwapValues.push({ timestamp: point.timestamp, value: sum / windowSize })
      }
    }

    return vwapValues
  }

  // Calculate real VWAP with actual volume data
  let cumulativeVolumePrice = 0
  let cumulativeVolume = 0
  const vwapValues = []

  for (const point of ohlcData.value) {
    const typicalPrice = (point.high + point.low + point.close) / 3
    const volume = Math.max(point.volume || 0, 1) // Ensure minimum volume

    cumulativeVolumePrice += typicalPrice * volume
    cumulativeVolume += volume

    const vwap = cumulativeVolume > 0 ? cumulativeVolumePrice / cumulativeVolume : typicalPrice

    vwapValues.push({ timestamp: point.timestamp, value: vwap })
  }

  return vwapValues
})

// Initialize technical indicators.
const indicators = useTechnicalIndicators(ohlcData, volumeData)

// Current indicator values for display.
const currentRSI = computed(() => {
  // Try to get from composable first
  if (indicators.currentRSI?.value != null) {
    return typeof indicators.currentRSI.value === 'number' ? indicators.currentRSI.value.toFixed(2) : indicators.currentRSI.value
  }

  // Fallback: calculate manually if needed
  const closePrices = ohlcData.value.map(d => d.close || d.price || 0).filter(p => p > 0)
  if (closePrices.length < 14) return '--'

  const rsi = calculateSimpleRSI(closePrices, 14)
  return rsi.length > 0 ? rsi[rsi.length - 1].toFixed(2) : '--'
})

const currentRSISMA = computed(() => {
  return '--' // RSI SMA not implemented in indicators composable.
})

const currentMACD = computed(() => {
  // Try to get from composable first.
  if (indicators.currentMACD?.value != null) {
    return typeof indicators.currentMACD.value === 'number' ? indicators.currentMACD.value.toFixed(4) : indicators.currentMACD.value
  }
  return '--'
})

const currentSignal = computed(() => {
  // Try to get from composable first.
  if (indicators.currentSignal?.value != null) {
    return typeof indicators.currentSignal.value === 'number' ? indicators.currentSignal.value.toFixed(4) : indicators.currentSignal.value
  }
  return '--'
})

const currentHistogram = computed(() => {
  // Try to get from composable first.
  if (indicators.currentHistogram?.value != null) {
    return typeof indicators.currentHistogram.value === 'number' ? indicators.currentHistogram.value.toFixed(4) : indicators.currentHistogram.value
  }
  return '--'
})

// Enhanced chart data with indicators.
const enhancedLineChartData = computed(() => {
  // Ensure we always return a valid chart data structure.
  const defaultData = {
    labels: [],
    datasets: []
  }

  if (!props.lineChartData || !props.lineChartData.datasets || !Array.isArray(props.lineChartData.datasets)) {
    return defaultData
  }

  const baseData = {
    labels: props.lineChartData.labels || [],
    datasets: [...props.lineChartData.datasets]
  }
  const datasets = [...baseData.datasets]

  // Add EMA overlays if enabled and data is available.
  if (showEMA.value && ohlcData.value.length > 0) {
    const closePrices = ohlcData.value.map(d => d.close || d.price || 0).filter(p => p > 0)

    if (closePrices.length >= 20) {
      const ema20 = calculateSimpleEMA(closePrices, 20)
      if (ema20.length > 0) {
        const ema20Data = ema20
          .map((value, index) => ({
            x: ohlcData.value[index]?.timestamp || Date.now(),
            y: value
          }))
          .filter(point => point.y !== null) // Remove null values

        datasets.push({
          label: 'EMA 20',
          data: ema20Data,
          borderColor: '#10B981', // Green
          backgroundColor: 'transparent',
          borderWidth: 0.5,
          pointRadius: 0,
          tension: 0.1,
          fill: false
        })
      }
    }

    if (closePrices.length >= 50) {
      const ema50 = calculateSimpleEMA(closePrices, 50)
      if (ema50.length > 0) {
        const ema50Data = ema50
          .map((value, index) => ({
            x: ohlcData.value[index]?.timestamp || Date.now(),
            y: value
          }))
          .filter(point => point.y !== null) // Remove null values

        datasets.push({
          label: 'EMA 50',
          data: ema50Data,
          borderColor: '#3B82F6', // Blue
          backgroundColor: 'transparent',
          borderWidth: 0.5,
          pointRadius: 0,
          tension: 0.1,
          fill: false
        })
      }
    }

    if (closePrices.length >= 200) {
      const ema200 = calculateSimpleEMA(closePrices, 200)
      if (ema200.length > 0) {
        const ema200Data = ema200
          .map((value, index) => ({
            x: ohlcData.value[index]?.timestamp || Date.now(),
            y: value
          }))
          .filter(point => point.y !== null) // Remove null values

        datasets.push({
          label: 'EMA 200',
          data: ema200Data,
          borderColor: '#8B5CF6', // Purple
          backgroundColor: 'transparent',
          borderWidth: 0.5,
          pointRadius: 0,
          tension: 0.1,
          fill: false
        })
      }
    }
    else {
      console.log(`📊 EMA 200: Skipped - need 200 data points, have ${closePrices.length}`)
    }
  }

  // Add VWAP overlay if enabled
  if (showVWAP.value && vwapData.value.length > 0) {
    const vwapChartData = vwapData.value.map(point => ({
      x: point.timestamp,
      y: point.value
    }))

    datasets.push({
      label: 'VWAP',
      data: vwapChartData,
      borderColor: '#F59E0B', // Orange color
      backgroundColor: 'transparent',
      borderWidth: 0.5,
      pointRadius: 0,
      tension: 0.1,
      fill: false
    })
  }

  return { ...baseData, datasets }
})

// EMA calculation function - improved for continuity.
function calculateSimpleEMA(prices, period) {
  if (!prices || !Array.isArray(prices) || prices.length < period) return []

  const ema = []
  const multiplier = 2 / (period + 1)

  // Start with simple moving average for first value at index (period - 1).
  let sum = 0
  for (let i = 0; i < period; i++) {
    sum += prices[i]
  }

  // Fill the EMA array with null values for the initial period, then add the first EMA value.
  for (let i = 0; i < period - 1; i++) {
    ema[i] = null
  }
  ema[period - 1] = sum / period

  // Calculate EMA for remaining values using the standard formula.
  for (let i = period; i < prices.length; i++) {
    const currentPrice = prices[i]
    const prevEMA = ema[i - 1]
    ema[i] = (currentPrice * multiplier) + (prevEMA * (1 - multiplier))
  }

  return ema
}

const enhancedCandlestickChartData = computed(() => {
  // Ensure we always return a valid chart data structure.
  const defaultData = {
    labels: [],
    datasets: []
  }

  if (!props.candlestickChartData || !props.candlestickChartData.datasets || !Array.isArray(props.candlestickChartData.datasets)) {
    return defaultData
  }

  const baseData = {
    labels: props.candlestickChartData.labels || [],
    datasets: [...props.candlestickChartData.datasets]
  }
  const datasets = [...baseData.datasets]

  // Add EMA overlays if enabled and data is available.
  if (showEMA.value && ohlcData.value.length > 0) {
    const timestamps = ohlcData.value.map(d => d.timestamp)
    const closePrices = ohlcData.value.map(d => d.close || d.price || 0)

    if (closePrices.length >= 20) {
      // Calculate EMA 20.
      const ema20 = calculateSimpleEMA(closePrices, 20)
      if (ema20.length > 0) {
        datasets.push({
          label: 'EMA 20',
          type: 'line',
          data: ema20
            .map((value, index) => ({
              x: timestamps[index] || Date.now(),
              y: value
            }))
            .filter(point => point.y !== null), // Remove null values
          borderColor: '#10B981', // Green
          backgroundColor: '#10B981',
          borderWidth: 0.5,
          fill: false,
          pointRadius: 0
        })
      }
    }

    if (closePrices.length >= 50) {
      // Calculate EMA 50.
      const ema50 = calculateSimpleEMA(closePrices, 50)
      if (ema50.length > 0) {
        datasets.push({
          label: 'EMA 50',
          type: 'line',
          data: ema50
            .map((value, index) => ({
              x: timestamps[index] || Date.now(),
              y: value
            }))
            .filter(point => point.y !== null), // Remove null values
          borderColor: '#3B82F6', // Blue
          backgroundColor: '#3B82F6',
          borderWidth: 0.5,
          fill: false,
          pointRadius: 0
        })
      }
    }

    if (closePrices.length >= 200) {
      // Calculate EMA 200.
      const ema200 = calculateSimpleEMA(closePrices, 200)
      if (ema200.length > 0) {
        datasets.push({
          label: 'EMA 200',
          type: 'line',
          data: ema200
            .map((value, index) => ({
              x: timestamps[index] || Date.now(),
              y: value
            }))
            .filter(point => point.y !== null), // Remove null values.
          borderColor: '#8B5CF6', // Purple
          backgroundColor: '#8B5CF6',
          borderWidth: 0.5,
          fill: false,
          pointRadius: 0
        })
      }
    }
  }

  // Add VWAP overlay if enabled.
  if (showVWAP.value && vwapData.value.length > 0) {
    const vwapChartData = vwapData.value.map(point => ({
      x: point.timestamp,
      y: point.value
    }))

    datasets.push({
      label: 'VWAP',
      type: 'line',
      data: vwapChartData,
      borderColor: '#F59E0B', // Orange color
      backgroundColor: '#F59E0B',
      borderWidth: 0.5,
      fill: false,
      pointRadius: 0
    })
  }

  return {
    labels: baseData.labels,
    datasets
  }
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

// Methods used in template - emit events to parent.
function changeChartType(type) {
  emit('change-chart-type', type)
}

function changePeriod(period) {
  emit('change-period', period)
}

function changeTimeframe(timeframe) {
  emit('change-timeframe', timeframe)
}

function resetZoom() {
  // Reset zoom for both chart types with correct chart access.
  try {
    if (props.chartType === 'line' && lineChartRef.value?.chart) {
      // Line chart from vue-chartjs exposes chart as a property.
      lineChartRef.value.chart.resetZoom()
      console.log('📊 Line chart zoom reset')
    } else if (props.chartType === 'candlestick' && candleChartRef.value?.chart) {
      // Candlestick chart exposes chart as a function that returns the instance.
      candleChartRef.value.chart().resetZoom()
      console.log('📊 Candlestick chart zoom reset')
    }

    // Emit event to parent to handle state reset and data refresh.
    emit('reset-zoom-complete')
  }
  catch (error) {
    console.error('❌ Error resetting chart zoom:', error)
  }
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

  .timeframe-selector .w-select__selection-wrap {min-height: 24px;}

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

  .chart-type-toggle {
    .chart-type-btn {
      &--active {
        background-color: var(--w-secondary-color);
        color: white;
      }
    }
  }

  .chart {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.2);

    &--line {height: 450px;}
    &--candlestick {height: 450px;}
  }

  .tradingview-chart {
    background: var(--chart-bg-color);
    border-radius: 12px;
    overflow: hidden;
    padding: 12px;
    height: 100%;
    width: 100%;
  }

  // Enhanced chart styling - override some properties but keep height.
  .chart--line, .chart--candlestick {
    padding: 0;
    background: transparent;
    border: none;
  }

  .volume-chart, .rsi-chart, .macd-chart {
    height: 120px;
    padding: 0.5rem;
  }
  .macd-chart {height: 140px;}

  // Responsive enhancements
  @media (max-width: 768px) {
    .chart {
      &--line, &--candlestick {height: 350px;}
    }

    .indicators-panel {flex-wrap: wrap;}

    .volume-chart, .rsi-chart, .macd-chart {height: 100px;}
  }
}
</style>
