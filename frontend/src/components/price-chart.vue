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
          :model-value="selectedTimeframe"
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

  //- Main Chart Display
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
        .pane-values.size--xs.op4
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
        .pane-values.size--xs.op4
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
        w-button.pa0.op8(
          width="18"
          height="18"
          @click="() => { hasInitialized = false; focusOnRecentData() }"
          tooltip="Focus on Latest Data"
          :tooltip-props="{ sm: true }"
          round)
          icon.size--xs(icon="mdi:skip-forward")
        .loading-indicator.w-flex.align-center.gap1(v-if="isLoadingAdditionalData")
          w-spinner(size="12" color="primary")
          span.op7 Loading...

  //- Loading state
  .w-flex.column.align-center.justify-center.py12(v-else)
    w-progress.mb4(circle)
    .caption Loading chart data...
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
import { ref, computed, inject, watch, nextTick } from 'vue'
import { useTechnicalIndicators } from '@/composables/use-technical-indicators'

const $waveui = inject('$waveui')

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
const hasInitialized = ref(false)

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

  // Auto-rescale Y-axis when zooming to show optimal price range.
  const visibleData = getVisibleDataInRange(zoomState.min, zoomState.max)
  const { yMin, yMax } = calculateOptimalYRange(visibleData)

  getAllChartInstances().forEach(chart => {
    if (chart && chart !== sourceChart && chart.scales && chart.scales.x && chart.scales.x.options) {
      chart.scales.x.options.min = zoomState.min
      chart.scales.x.options.max = zoomState.max

      // Auto-rescale Y-axis for price charts (not indicators).
      if (chart.scales.y && !chart.canvas.parentElement.classList.contains('rsi-pane') &&
          !chart.canvas.parentElement.classList.contains('macd-pane')) {
        if (yMin !== null && yMax !== null) {
          chart.scales.y.options.min = yMin
          chart.scales.y.options.max = yMax
        }
      }

      chart.update('none')
    }
  })

  isInternalZoom.value = false
}

// Helper function to get visible data in a time range.
const getVisibleDataInRange = (startTime, endTime) => {
  const data = props.chartType === 'line' ? props.lineChartData : props.candlestickChartData
  const chartData = data?.datasets?.[0]?.data || []

  return chartData.filter(point => {
    const pointTime = point.x
    return pointTime >= startTime && pointTime <= endTime
  })
}

// Helper function to calculate optimal Y-axis range for visible data
const calculateOptimalYRange = (visibleData) => {
  if (!visibleData || visibleData.length === 0) {
    return { yMin: null, yMax: null }
  }

  let minPrice = Infinity
  let maxPrice = -Infinity

  visibleData.forEach(point => {
    if (props.chartType === 'line') {
      const price = point.y
      if (price < minPrice) minPrice = price
      if (price > maxPrice) maxPrice = price
    }
    else {
      // Candlestick data.
      const high = point.h || point.high
      const low = point.l || point.low
      if (low < minPrice) minPrice = low
      if (high > maxPrice) maxPrice = high
    }
  })

  if (minPrice === Infinity || maxPrice === -Infinity) {
    return { yMin: null, yMax: null }
  }

  // Add smart padding based on price volatility.
  const priceRange = maxPrice - minPrice
  const volatilityRatio = priceRange / ((minPrice + maxPrice) / 2)

  let pricePaddingRatio
  if (volatilityRatio < 0.02) {
    pricePaddingRatio = 0.05 // Low volatility: more padding.
  }
  else if (volatilityRatio < 0.1) {
    pricePaddingRatio = 0.03 // Medium volatility: standard padding.
  }
  else {
    pricePaddingRatio = 0.02 // High volatility: less padding.
  }

  const pricePadding = priceRange * pricePaddingRatio
  const yMin = minPrice - pricePadding
  const yMax = maxPrice + pricePadding

  return { yMin, yMax }
}

// Reset zoom on all charts.
const resetAllCharts = () => {
  zoomRange.value = { min: null, max: null }
  hasInitialized.value = false
  getAllChartInstances().forEach(chart => {
    if (chart && chart.resetZoom) {
      chart.resetZoom()

      // Also reset Y-axis constraints for price charts
      if (chart.scales.y && !chart.canvas.parentElement.classList.contains('rsi-pane') &&
          !chart.canvas.parentElement.classList.contains('macd-pane')) {
        delete chart.scales.y.options.min
        delete chart.scales.y.options.max
      }
    }
  })
  emit('reset-zoom-complete')
}

// Auto-focus on recent data when chart loads
const focusOnRecentData = () => {
  if (hasInitialized.value) {
    console.log('📊 Auto-focus skipped: already initialized')
    return
  }

  const data = props.chartType === 'line' ? props.lineChartData : props.candlestickChartData
  const chartData = data?.datasets?.[0]?.data

  if (!chartData || chartData.length === 0) {
    console.log('📊 Auto-focus skipped: no chart data available')
    return
  }

  // Don't auto-focus if we're still loading data
  if (props.isLoadingHistoricalData) {
    console.log('📊 Auto-focus skipped: still loading historical data')
    return
  }

  // Ensure we have a reasonable amount of data before focusing.
  if (chartData.length < 10) {
    console.log(`📊 Auto-focus skipped: insufficient data (${chartData.length} points)`)
    return
  }

  console.log(`📊 Starting intelligent auto-focus with ${chartData.length} data points`)

  const totalPoints = chartData.length

  // Smart focus calculation based on timeframe and period.
  let focusPoints = calculateSmartFocusPoints(totalPoints)

  // Ensure we're focusing on the most recent data.
  const startIndex = Math.max(0, totalPoints - focusPoints)
  const recentData = chartData.slice(startIndex)

  if (recentData.length === 0) return

  const startTime = recentData[0].x
  const endTime = recentData[recentData.length - 1].x

  // Smart padding calculation based on timeframe.
  const timeRange = endTime - startTime
  const timePadding = calculateSmartTimePadding(timeRange)

  const focusMin = new Date(startTime - timePadding)
  const focusMax = new Date(endTime + timePadding)

  // Enhanced Y-axis range calculation
  let minPrice = Infinity
  let maxPrice = -Infinity

  recentData.forEach(point => {
    if (props.chartType === 'line') {
      const price = point.y
      if (price < minPrice) minPrice = price
      if (price > maxPrice) maxPrice = price
    }
    else {
      // Candlestick data
      const high = point.h || point.high
      const low = point.l || point.low
      if (low < minPrice) minPrice = low
      if (high > maxPrice) maxPrice = high
    }
  })

  // Smart Y-axis padding based on price volatility.
  const priceRange = maxPrice - minPrice
  const volatilityRatio = priceRange / ((minPrice + maxPrice) / 2) // Relative volatility.

  // Adjust padding based on volatility.
  let pricePaddingRatio
  if (volatilityRatio < 0.02) {
    // Low volatility: more padding for better visibility.
    pricePaddingRatio = 0.05
  }
  else if (volatilityRatio < 0.1) {
    // Medium volatility: standard padding.
    pricePaddingRatio = 0.03
  }
  else {
    // High volatility: less padding to show full range.
    pricePaddingRatio = 0.02
  }

  const pricePadding = priceRange * pricePaddingRatio
  const yMin = minPrice - pricePadding
  const yMax = maxPrice + pricePadding

  // Enhanced logging with timeframe context.
  const timeframeInfo = getTimeframeDisplayInfo(props.selectedTimeframe, timeRange)

  console.log(`📊 Smart auto-focus applied:`)
  console.log(`   - Timeframe: ${props.selectedTimeframe} (${timeframeInfo.description})`)
  console.log(`   - Dataset: ${totalPoints} total points, focusing on ${focusPoints} recent points`)
  console.log(`   - Focus coverage: ${timeframeInfo.coverage}`)
  console.log(`   - Time range: ${focusMin.toLocaleString()} to ${focusMax.toLocaleString()}`)
  console.log(`   - Price range: $${yMin.toFixed(2)} - $${yMax.toFixed(2)} (volatility: ${(volatilityRatio*100).toFixed(2)}%)`)

  zoomRange.value = { min: focusMin, max: focusMax }
  hasInitialized.value = true

  // Apply the zoom to all charts
  getAllChartInstances().forEach(chart => {
    if (chart && chart.scales && chart.scales.x && chart.scales.x.options) {
      chart.scales.x.options.min = focusMin
      chart.scales.x.options.max = focusMax

      // Set Y-axis range for price charts (not indicators)
      if (chart.scales.y && !chart.canvas.parentElement.classList.contains('rsi-pane') &&
          !chart.canvas.parentElement.classList.contains('macd-pane')) {
        chart.scales.y.options.min = yMin
        chart.scales.y.options.max = yMax
      }

      chart.update('none')
    }
  })
}

// Smart focus calculation based on timeframe.
function calculateSmartFocusPoints(totalPoints) {
  const timeframe = props.selectedTimeframe
  const period = props.selectedPeriod

  // Timeframe-specific focus logic.
  const focusStrategy = {
    '1Min': {
      '1D': Math.min(totalPoints, 120),   // 2 hours of 1-min data
      '1W': Math.min(totalPoints, 240),   // 4 hours of 1-min data
      '1M': Math.min(totalPoints, 480),   // 8 hours of 1-min data
      '3M': Math.min(totalPoints, 960)    // 16 hours of 1-min data
    },
    '5Min': {
      '1D': Math.min(totalPoints, 48),    // 4 hours of 5-min data
      '1W': Math.min(totalPoints, 96),    // 8 hours of 5-min data
      '1M': Math.min(totalPoints, 144),   // 12 hours of 5-min data
      '3M': Math.min(totalPoints, 288)    // 24 hours of 5-min data
    },
    '15Min': {
      '1D': Math.min(totalPoints, 26),    // ~6.5 hours (1 trading day)
      '1W': Math.min(totalPoints, 52),    // ~2 trading days
      '1M': Math.min(totalPoints, 104),   // ~4 trading days
      '3M': Math.min(totalPoints, 208)    // ~8 trading days
    },
    '30Min': {
      '1D': Math.min(totalPoints, 13),    // ~6.5 hours (1 trading day)
      '1W': Math.min(totalPoints, 26),    // ~2 trading days
      '1M': Math.min(totalPoints, 52),    // ~4 trading days
      '3M': Math.min(totalPoints, 104)    // ~8 trading days
    },
    '1Hour': {
      '1D': Math.min(totalPoints, 20),    // ~3 trading days
      '1W': Math.min(totalPoints, 35),    // ~1 trading week
      '1M': Math.min(totalPoints, 140),   // ~1 trading month
      '3M': Math.min(totalPoints, 280)    // ~2 trading months
    },
    '1Day': {
      '1D': Math.min(totalPoints, 5),     // 5 days
      '1W': Math.min(totalPoints, 10),    // 2 weeks
      '1M': Math.min(totalPoints, 30),    // 1 month
      '3M': Math.min(totalPoints, 90),    // 3 months
      '12M': Math.min(totalPoints, 365)   // 1 year
    }
  }

  const strategy = focusStrategy[timeframe]
  if (strategy && strategy[period]) {
    return strategy[period]
  }

  // Fallback logic for unknown combinations.
  if (totalPoints <= 50) return Math.max(10, Math.floor(totalPoints * 0.8))
  if (totalPoints <= 200) return Math.max(30, Math.floor(totalPoints * 0.4))
  if (totalPoints <= 1000) return Math.max(60, Math.floor(totalPoints * 0.2))

  return Math.min(200, Math.max(100, Math.floor(totalPoints * 0.1)))
}

// Smart time padding based on timeframe.
function calculateSmartTimePadding(timeRange) {
  const timeframe = props.selectedTimeframe

  // Base padding as percentage of time range.
  const basePaddingRatio = {
    '1Min': 0.05,   // 5% padding for 1-min (tight focus)
    '5Min': 0.08,   // 8% padding for 5-min
    '15Min': 0.10,  // 10% padding for 15-min
    '30Min': 0.12,  // 12% padding for 30-min
    '1Hour': 0.15,  // 15% padding for 1-hour
    '1Day': 0.20    // 20% padding for daily
  }

  const paddingRatio = basePaddingRatio[timeframe] || 0.10
  const calculatedPadding = timeRange * paddingRatio

  // Minimum padding based on timeframe.
  const minimumPadding = {
    '1Min': 5 * 60 * 1000,      // 5 minutes minimum
    '5Min': 15 * 60 * 1000,     // 15 minutes minimum
    '15Min': 30 * 60 * 1000,    // 30 minutes minimum
    '30Min': 60 * 60 * 1000,    // 1 hour minimum
    '1Hour': 2 * 60 * 60 * 1000, // 2 hours minimum
    '1Day': 24 * 60 * 60 * 1000  // 1 day minimum
  }

  const minPadding = minimumPadding[timeframe] || 15 * 60 * 1000

  return Math.max(calculatedPadding, minPadding)
}

// Helper function for display information.
function getTimeframeDisplayInfo(timeframe, timeRange) {
  const hours = timeRange / (60 * 60 * 1000)
  const days = timeRange / (24 * 60 * 60 * 1000)

  let coverage, description

  if (hours < 1) coverage = `${Math.round(timeRange / (60 * 1000))} minutes`
  else if (hours < 24) coverage = `${hours.toFixed(1)} hours`
  else coverage = `${days.toFixed(1)} days`

  const descriptions = {
    '1Min': 'High-resolution intraday',
    '5Min': 'Detailed intraday',
    '15Min': 'Standard intraday',
    '30Min': 'Broad intraday',
    '1Hour': 'Hourly data',
    '1Day': 'Daily data'
  }

  description = descriptions[timeframe] || 'Unknown timeframe'

  return { coverage, description }
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
  }
  else if (props.chartType === 'candlestick' && props.candlestickChartData?.datasets?.[0]?.data) {
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

  // Check if we have real volume data.
  const volumes = ohlcData.value.map(point => point.volume || 0)
  const hasRealVolume = volumes.some(v => v > 0) && new Set(volumes).size > 1

  if (!hasRealVolume) {
    // Fallback to simple moving average of typical price.
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
  }
  else {
    // Calculate real VWAP with actual volume data.
    let cumulativeTpv = 0 // Typical Price * Volume.
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

// EMA calculation function.
function calculateSimpleEMA(prices, period) {
  if (!prices || !Array.isArray(prices) || prices.length < period) return []

  const ema = []
  const multiplier = 2 / (period + 1)

  // Start with simple moving average for first value.
  let sum = 0
  for (let i = 0; i < period; i++) {
    sum += prices[i]
  }

  // Fill the EMA array with null values for the initial period.
  for (let i = 0; i < period - 1; i++) {
    ema[i] = null
  }
  ema[period - 1] = sum / period // First valid EMA value.

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
  if (showVWAP.value && vwapData.value.length) {
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
    }
    else {
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
    }
    else {
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
      grid: { color: $waveui.colors.light2 },
      ticks: { color: $waveui.colors.light1, maxTicksLimit: 4 }
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
        color: $waveui.colors.light2,
        drawOnChartArea: true
      },
      ticks: {
        color: $waveui.colors.light1,
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
        color: $waveui.colors.light2,
        drawOnChartArea: true
      },
      ticks: {
        color: $waveui.colors.light1,
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
      grid: { color: $waveui.colors.light2 },
      ticks: { color: $waveui.colors.light1 },
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

            // Auto-rescale Y-axis when zooming.
            const visibleData = getVisibleDataInRange(min, max)
            const { yMin, yMax } = calculateOptimalYRange(visibleData)

            if (yMin !== null && yMax !== null && chart.scales.y &&
                !chart.canvas.parentElement.classList.contains('rsi-pane') &&
                !chart.canvas.parentElement.classList.contains('macd-pane')) {
              chart.scales.y.options.min = yMin
              chart.scales.y.options.max = yMax
              chart.update('none')
            }

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

            // Auto-rescale Y-axis when panning.
            const visibleData = getVisibleDataInRange(min, max)
            const { yMin, yMax } = calculateOptimalYRange(visibleData)

            if (yMin !== null && yMax !== null && chart.scales.y &&
                !chart.canvas.parentElement.classList.contains('rsi-pane') &&
                !chart.canvas.parentElement.classList.contains('macd-pane')) {
              chart.scales.y.options.min = yMin
              chart.scales.y.options.max = yMax
              chart.update('none')
            }

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
      display: true // Show x-axis on main chart.
    },
    y: {
      position: 'right',
      grid: { color: $waveui.colors.light2 },
      ticks: { color: $waveui.colors.light1 }
    }
  }
}))

const synchronizedCandlestickChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: {
      ...baseSynchronizedOptions.value.scales.x,
      display: true // Show x-axis on main chart.
    },
    y: {
      position: 'right',
      grid: { color: $waveui.colors.light2 },
      ticks: { color: $waveui.colors.light1 }
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
      ticks: { color: $waveui.colors.light1 }
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
        color: $waveui.colors.light2,
        drawOnChartArea: false
      },
      ticks: {
        color: $waveui.colors.light1,
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
      grid: { color: $waveui.colors.light2 },
      ticks: { color: $waveui.colors.light1 }
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

// Watchers for auto-focusing on data changes
// --------------------------------------------------------
watch(
  () => [props.lineChartData, props.candlestickChartData, props.isLoadingHistoricalData],
  async ([lineData, candleData, isLoading]) => {
    if (isLoading) return

    // Only auto-focus if we have meaningful data
    const data = props.chartType === 'line' ? lineData : candleData
    const chartData = data?.datasets?.[0]?.data

    if (!chartData || chartData.length < 10) {
      console.log('📊 Data watcher: insufficient data for auto-focus')
      return
    }

    // Enhanced logging for large datasets.
    const datasetSize = chartData.length
    const isLargeDataset = datasetSize > 1000

    console.log(`📊 Data watcher triggered: ${datasetSize} points available${isLargeDataset ? ' (large dataset)' : ''}, hasInitialized: ${hasInitialized.value}`)

    // For smooth transitions, only reset initialization if we have significantly different data
    // This prevents unnecessary re-focusing when just changing timeframes.
    const currentDataRange = chartData.length > 0 ? {
      start: chartData[0].x,
      end: chartData[chartData.length - 1].x,
      size: chartData.length
    } : null

    // Check if this is a smooth transition (similar time range, just different granularity).
    const shouldResetInitialization = !hasInitialized.value ||
      !currentDataRange ||
      Math.abs(currentDataRange.size - (lastDataRange?.size || 0)) > currentDataRange.size * 0.3 // More than 30% size difference.

    if (shouldResetInitialization) {
      console.log('📊 Resetting chart initialization for new data')
      hasInitialized.value = false
    }
    else {
      console.log('📊 Smooth data transition - keeping current view')
    }

    // Store current data range for next comparison.
    lastDataRange = currentDataRange

    // Wait for next tick to ensure charts are rendered.
    await nextTick()

    // For large datasets, use a slightly longer delay to ensure proper rendering.
    const delay = isLargeDataset ? 200 : 100

    // Only auto-focus if we reset initialization
    if (!hasInitialized.value) {
      setTimeout(() => {
        focusOnRecentData()
      }, delay)
    }
  },
  { deep: true, immediate: true }
)

// Track last data range for smooth transitions.
let lastDataRange = null

// Watch for symbol changes to reset initialization.
watch(() => props.symbol, () => {
  hasInitialized.value = false
})

// Watch for period/timeframe changes to reset initialization.
watch(() => [props.selectedPeriod, props.selectedTimeframe], () => {
  console.log('📊 Period/timeframe changed - resetting initialization')
  hasInitialized.value = false
})

// Expose refs and methods for parent access if needed.
defineExpose({
  chartContainer,
  lineChartRef,
  candleChartRef,
  resetZoom,
  focusOnRecentData
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
