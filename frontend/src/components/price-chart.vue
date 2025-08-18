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
        //- Reset Zoom Button
        w-button.pa0(
          width="26"
          height="26"
          @click="resetView"
          tooltip="Reset Zoom"
          :tooltip-props="{ xs: true }"
          round)
          icon.size--lg(icon="material-symbols-light:fit-screen-outline")

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
          :model-value="effectiveTimeframe || selectedTimeframe"
          :items="availableTimeframes"
          @input="changeTimeframe"
          outline)
        //- Show fallback indicator if using a different timeframe than selected.
        w-tag(
          v-if="isUsingFallbackTimeframe && effectiveTimeframe"
          xs
          bg-color="warning"
          color="white"
          :title="`Showing ${effectiveTimeframe} data (${selectedTimeframe} unavailable)`")
          w-icon(size="12") wi-info-circle

  //- Indicators Toggle
  .indicators-panel.w-flex.gap2.mb2.justify-end(v-if="chartType === 'candlestick'")
    w-button.indicator-btn(
      @click="showEMA = !showEMA"
      color="base"
      :bg-color="showEMA ? buttonsColors.active : buttonsColors.inactive"
      xs)
      w-icon.mr1(v-if="showEMA" size="12") wi-check
      | EMA (20,50,200)
    w-button.indicator-btn(
      @click="showVWAP = !showVWAP"
      color="base"
      :bg-color="showVWAP ? buttonsColors.active : buttonsColors.inactive"
      xs)
      w-icon.mr1(v-if="showVWAP" size="12") wi-check
      | VWAP
    w-button.indicator-btn(
      @click="showVolume = !showVolume"
      color="base"
      :bg-color="showVolume ? buttonsColors.active : buttonsColors.inactive"
      xs)
      w-icon.mr1(v-if="showVolume" size="12") wi-check
      | Volume
    w-button.indicator-btn(
      @click="showRSI = !showRSI"
      color="base"
      :bg-color="showRSI ? buttonsColors.active : buttonsColors.inactive"
      xs)
      w-icon.mr1(v-if="showRSI" size="12") wi-check
      | RSI
    w-button.indicator-btn(
      @click="showMACD = !showMACD"
      color="base"
      :bg-color="showMACD ? buttonsColors.active : buttonsColors.inactive"
      xs)
      w-icon.mr1(v-if="showMACD" size="12") wi-check
      | MACD

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

    //- Drawing Tools Overlay
    DrawingTools(:chart-container="chartContainer")

    //- RSI Pane (if enabled)
    .chart.chart--rsi.mt2(v-show="showRSI && chartType === 'candlestick'")
      .w-flex.align-center.justify-space-between.pa1.contrast-o05--bg
        .size--sm.text-bold.op7.ml8 RSI (14)
        .pane-values.size--xs.op3
          span.mr2 {{ currentRSI }}
          span Overbought: 70 • Oversold: 30

      .chart-container
        Line(
          ref="rsiChartRef"
          :plugins="[rsiBackgroundPlugin]"
          :data="indicators.rsiChartData.value"
          :options="synchronizedRsiChartOptions")

    //- MACD Pane (if enabled)
    .chart.chart--macd.mt2(v-show="showMACD && chartType === 'candlestick'")
      .w-flex.align-center.justify-space-between.pa1.contrast-o05--bg
        .size--sm.text-bold.op7.ml8 MACD (12,26,9)
        .pane-values.size--xs.op3
          span.mr2 MACD: {{ currentMACD }}
          span.mr2 Signal: {{ currentSignal }}
          span Histogram: {{ currentHistogram }}

      .chart-container
        Line(
          ref="macdChartRef"
          :data="indicators.macdChartData.value"
          :options="synchronizedMacdChartOptions")

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
import { ref, computed, inject, watch, nextTick } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart, BarController, BarElement } from 'chart.js'
import 'chart.js/auto'
import 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'
import zoomPlugin from 'chartjs-plugin-zoom'
import { useTechnicalIndicators } from '@/composables/use-technical-indicators'
import CandlestickChart from './candlestick-chart.vue'
import DrawingTools from './drawing-tools.vue'

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
  candlestickChartOptions: { type: Object, required: true },
  // Smart timeframe selection props.
  effectiveTimeframe: { type: String, default: null },
  isUsingFallbackTimeframe: { type: Boolean, default: false }
})

const emit = defineEmits([
  'change-chart-type',
  'change-period',
  'change-timeframe',
  'reset-zoom-complete'
])
// --------------------------------------------------------

const $waveui = inject('$waveui')

const buttonsColors = computed(() => {
  return {
    active: $waveui.theme === 'dark' ? 'primary-dark4' : 'primary-light5',
    inactive: $waveui.theme === 'dark' ? 'primary-dark6' : 'light2'
  }
})

// Register Chart.js plugins and components.
// Plugin to reserve a fixed-height band at the bottom for the volume scale, sharing the same X scale.
const VOLUME_BAND_HEIGHT = 115 // Pixels.

// RSI background plugin - register globally but only apply to RSI charts
const rsiBackgroundPlugin = {
  beforeDraw(chart) {
    const ctx = chart.ctx
    const chartArea = chart.chartArea
    if (!chartArea) return

    // Draw colored background fill between 30 and 70 (neutral zone)
    const y30 = chart.scales.y.getPixelForValue(30)
    const y70 = chart.scales.y.getPixelForValue(70)

    ctx.save()
    ctx.fillStyle = '#8b5cf611' // Translucent purple.
    ctx.fillRect(chartArea.left, y70, chartArea.right - chartArea.left, y30 - y70)

    ctx.strokeStyle = $waveui.colors.light2 // Grey color for reference lines.
    ctx.setLineDash([2, 3]) // Dashed lines.
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
}

Chart.register(
  zoomPlugin,
  BarController,
  BarElement
)

// Template Refs & State
// --------------------------------------------------------
const chartContainer = ref(null)
const lineChartRef = ref(null)
const candleChartRef = ref(null)
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

  // First add the main price chart (line or candlestick) with null checks.
  const mainChart = candleChartRef.value?.chart || lineChartRef.value?.chart
  if (mainChart) charts.push(mainChart)

  // Indicator charts.
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
  if (!visibleData?.length) return { yMin: null, yMax: null }

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

  if (minPrice === Infinity || maxPrice === -Infinity) return { yMin: null, yMax: null }

  // Add smart padding based on price volatility.
  const priceRange = maxPrice - minPrice
  const volatilityRatio = priceRange / ((minPrice + maxPrice) / 2)

  let pricePaddingRatio = 0.02 // High volatility: less padding.
  if (volatilityRatio < 0.02) pricePaddingRatio = 0.05 // Low volatility: more padding.
  else if (volatilityRatio < 0.1) pricePaddingRatio = 0.03 // Medium volatility: standard padding.

  const pricePadding = priceRange * pricePaddingRatio
  const yMin = minPrice - pricePadding
  const yMax = maxPrice + pricePadding

  return { yMin, yMax }
}

// Auto-focus on recent data when chart loads
const focusOnRecentData = () => {
  if (hasInitialized.value || props.isLoadingHistoricalData) return

  const data = props.chartType === 'line' ? props.lineChartData : props.candlestickChartData
  const chartData = data?.datasets?.[0]?.data

  if (!chartData?.length) return

  // Ensure we have a reasonable amount of data before focusing.
  if (chartData.length < 10) {
    console.log(`📊 Auto-focus skipped: insufficient data (${chartData.length} points)`)
    return
  }

  calculateZoomLimits() // CRITICAL: Calculate zoom limits first.

  const totalPoints = chartData.length

  // ENHANCED: For 1D period, focus specifically on today's trading session.
  let focusData, focusDescription

  if (props.selectedPeriod === '1D') {
    // Find today's data specifically for 1D period.
    const now = new Date()

    // Get current Eastern Time.
    const easternTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))

    // Create today's trading session boundaries in Eastern Time.
    const todayYear = easternTime.getFullYear()
    const todayMonth = easternTime.getMonth()
    const todayDate = easternTime.getDate()

    // 9:30 AM ET and 4:00 PM ET in local Eastern time.
    const sessionStartET = new Date(todayYear, todayMonth, todayDate, 9, 30, 0, 0)
    const sessionEndET = new Date(todayYear, todayMonth, todayDate, 16, 0, 0, 0)

    // Convert to UTC timestamps for comparison with chart data.
    const sessionStartUTC = sessionStartET.getTime()
    const sessionEndUTC = sessionEndET.getTime()

    // Filter data to today's trading session specifically.
    const todaysTradingData = chartData.filter(point => {
      return point.x >= sessionStartUTC && point.x <= sessionEndUTC
    })

    if (todaysTradingData.length > 5) {
      // We have good data from today's trading session.
      focusData = todaysTradingData
      focusDescription = `today's trading session (${todaysTradingData.length} points)`
    }
    else {
      // Fallback 1: Try to find the most recent trading day's session.
      console.log(`📊 1D Period: No data for today's session, looking for most recent trading day`)

      // Look at the most recent 20% of all data points.
      const recentPointsCount = Math.max(100, Math.floor(totalPoints * 0.2)) // At least 100 points, or 20% of data.
      const mostRecentData = chartData.slice(-recentPointsCount)

      if (mostRecentData.length) {
        // Find the most recent trading day and get its trading session data.
        const lastDataTime = new Date(mostRecentData[mostRecentData.length - 1].x)

        // Convert to Eastern Time to get the correct date.
        const lastDataET = new Date(lastDataTime.toLocaleString('en-US', { timeZone: 'America/New_York' }))
        const lastYear = lastDataET.getFullYear()
        const lastMonth = lastDataET.getMonth()
        const lastDate = lastDataET.getDate()

        // Define trading session for that day (9:30 AM - 4:00 PM ET).
        const lastSessionStartET = new Date(lastYear, lastMonth, lastDate, 9, 30, 0, 0)
        const lastSessionEndET = new Date(lastYear, lastMonth, lastDate, 16, 0, 0, 0)

        // Convert to UTC.
        const lastSessionStartUTC = lastSessionStartET.getTime()
        const lastSessionEndUTC = lastSessionEndET.getTime()

        // Get all data from that trading session.
        const sessionData = chartData.filter(point => {
          return point.x >= lastSessionStartUTC && point.x <= lastSessionEndUTC
        })

        if (sessionData.length > 5) {
          focusData = sessionData
          focusDescription = `most recent trading session - ${lastDataET.toDateString()} (${sessionData.length} points)`
          console.log(`📊 1D Period: Focusing on most recent trading session ${lastDataET.toDateString()} with ${sessionData.length} data points`)
        }
        else {
          // Fallback 2: Use most recent data points.
          focusData = mostRecentData
          focusDescription = `most recent data (${mostRecentData.length} points)`
          console.log(`📊 1D Period: Focusing on most recent ${mostRecentData.length} data points`)
        }
      }
      else {
        // Final fallback: Use last 100 points.
        focusData = chartData.slice(-100)
        focusDescription = `latest available data (${focusData.length} points)`
        console.log(`📊 1D Period: Fallback - focusing on latest ${focusData.length} points`)
      }
    }
  }
  else {
    // For other periods, use smart focus calculation based on timeframe and period.
    const focusPoints = calculateSmartFocusPoints(totalPoints)
    const startIndex = Math.max(0, totalPoints - focusPoints)
    focusData = chartData.slice(startIndex)
    focusDescription = `${focusPoints} recent points`
  }

  if (focusData.length === 0) return

  const startTime = focusData[0].x
  const endTime = focusData[focusData.length - 1].x

  // Smart padding calculation based on timeframe.
  const timeRange = endTime - startTime
  const timePadding = calculateSmartTimePadding(timeRange)

  let focusMin = new Date(startTime - timePadding)
  let focusMax = new Date(endTime + timePadding)

  // Apply zoom limits validation to initial focus.
  const validatedRange = validateZoomRange(focusMin.getTime(), focusMax.getTime())
  focusMin = new Date(validatedRange.min)
  focusMax = new Date(validatedRange.max)

  // Enhanced Y-axis range calculation.
  let minPrice = Infinity
  let maxPrice = -Infinity

  focusData.forEach(point => {
    if (point.y !== undefined) {
      // Line chart data.
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

  // Smart Y-axis padding based on price volatility.
  const priceRange = maxPrice - minPrice
  const volatilityRatio = priceRange / ((minPrice + maxPrice) / 2) // Relative volatility.

  // Adjust padding based on volatility.
  let pricePaddingRatio = 0.02 // High volatility: less padding to show full range.
  if (volatilityRatio < 0.02) pricePaddingRatio = 0.05 // Low volatility: more padding for better visibility.
  else if (volatilityRatio < 0.1) pricePaddingRatio = 0.03 // Medium volatility: standard padding.

  const pricePadding = priceRange * pricePaddingRatio
  const yMin = minPrice - pricePadding
  const yMax = maxPrice + pricePadding

  zoomRange.value = { min: focusMin, max: focusMax }
  hasInitialized.value = true

  // Apply the zoom to all charts.
  getAllChartInstances().forEach(chart => {
    if (chart && chart.scales && chart.scales.x && chart.scales.x.options) {
      chart.scales.x.options.min = focusMin
      chart.scales.x.options.max = focusMax

      // Set Y-axis range for price charts (not indicators).
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
      '1D': Math.min(totalPoints, 120), // 2 hours of 1-min data
      '1W': Math.min(totalPoints, 240), // 4 hours of 1-min data
      '1M': Math.min(totalPoints, 480), // 8 hours of 1-min data
      '3M': Math.min(totalPoints, 960)  // 16 hours of 1-min data
    },
    '5Min': {
      '1D': Math.min(totalPoints, 48),  // 4 hours of 5-min data
      '1W': Math.min(totalPoints, 96),  // 8 hours of 5-min data
      '1M': Math.min(totalPoints, 144), // 12 hours of 5-min data
      '3M': Math.min(totalPoints, 288)  // 24 hours of 5-min data
    },
    '15Min': {
      '1D': Math.min(totalPoints, 26),  // ~6.5 hours (1 trading day)
      '1W': Math.min(totalPoints, 52),  // ~2 trading days
      '1M': Math.min(totalPoints, 104), // ~4 trading days
      '3M': Math.min(totalPoints, 208)  // ~8 trading days
    },
    '30Min': {
      '1D': Math.min(totalPoints, 13),  // ~6.5 hours (1 trading day)
      '1W': Math.min(totalPoints, 26),  // ~2 trading days
      '1M': Math.min(totalPoints, 52),  // ~4 trading days
      '3M': Math.min(totalPoints, 104)  // ~8 trading days
    },
    '1Hour': {
      '1D': Math.min(totalPoints, 20),  // ~3 trading days
      '1W': Math.min(totalPoints, 35),  // ~1 trading week
      '1M': Math.min(totalPoints, 140), // ~1 trading month
      '3M': Math.min(totalPoints, 280)  // ~2 trading months
    },
    '1Day': {
      '1D': Math.min(totalPoints, 5),   // 5 days.
      '1W': Math.min(totalPoints, 10),  // 2 weeks.
      '1M': Math.min(totalPoints, 30),  // 1 month.
      '3M': Math.min(totalPoints, 90),  // 3 months.
      '1Y': Math.min(totalPoints, 365), // 1 year (focus on recent year).
      '5Y': Math.min(totalPoints, 730), // 2 years (focus on recent 2 years for 5Y period).
      '12M': Math.min(totalPoints, 365) // 1 year.
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
    '1Min': 0.05,  // 5% padding for 1-min (tight focus).
    '5Min': 0.08,  // 8% padding for 5-min.
    '15Min': 0.10, // 10% padding for 15-min.
    '30Min': 0.12, // 12% padding for 30-min.
    '1Hour': 0.15, // 15% padding for 1-hour.
    '1Day': 0.20   // 20% padding for daily (works for 1Y and 5Y periods).
  }

  const paddingRatio = basePaddingRatio[timeframe] || 0.10
  const calculatedPadding = timeRange * paddingRatio

  // Minimum padding based on timeframe.
  const minimumPadding = {
    '1Min': 5 * 60 * 1000,          // 5 minutes minimum.
    '5Min': 15 * 60 * 1000,         // 15 minutes minimum.
    '15Min': 30 * 60 * 1000,        // 30 minutes minimum.
    '30Min': 60 * 60 * 1000,        // 1 hour minimum.
    '1Hour': 2 * 60 * 60 * 1000,    // 2 hours minimum.
    '1Day': 7 * 24 * 60 * 60 * 1000 // 1 week minimum (works for 1Y and 5Y periods).
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
    '1Day': 'Daily data (optimal for 1Y/5Y periods)'
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

// VWAP calculation.
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

  // Calculate EMA for remaining values.
  for (let i = period; i < prices.length; i++) {
    const currentPrice = prices[i]
    const prevEMA = ema[i - 1]
    ema[i] = (currentPrice * multiplier) + (prevEMA * (1 - multiplier))
  }

  return ema
}

// Enhanced chart data with technical indicators.
const enhancedLineChartData = computed(() => {
  if (!props.lineChartData?.datasets?.[0]?.data) return props.lineChartData

  const baseDataset = props.lineChartData.datasets[0]
  const datasets = [baseDataset]

  // Add EMA lines if enabled.
  if (showEMA.value && ohlcData.value.length && props.chartType === 'candlestick') {
    const closePrices = ohlcData.value.map(d => d.close || d.price || 0)

    // EMA 20 (Green).
    if (closePrices.length >= 20) {
      const ema20 = calculateSimpleEMA(closePrices, 20)
      const ema20Data = ema20.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        label: 'EMA 20',
        data: ema20Data,
        borderColor: '#10B981',
        backgroundColor: '#10B981',
        borderWidth: 0.5,
        pointRadius: 0
      })
    }

    // EMA 50 (Blue).
    if (closePrices.length >= 50) {
      const ema50 = calculateSimpleEMA(closePrices, 50)
      const ema50Data = ema50.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        label: 'EMA 50',
        data: ema50Data,
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        borderWidth: 0.5,
        pointRadius: 0
      })
    }

    // EMA 200 (Purple).
    if (closePrices.length >= 200) {
      const ema200 = calculateSimpleEMA(closePrices, 200)
      const ema200Data = ema200.map((value, index) => ({
        x: ohlcData.value[index]?.timestamp,
        y: value
      })).filter(point => point.y !== null)

      datasets.push({
        label: 'EMA 200',
        data: ema200Data,
        borderColor: '#8B5CF6',
        backgroundColor: '#8B5CF6',
        borderWidth: 0.5,
        pointRadius: 0
      })
    }
  }

  // Add VWAP if enabled (orange).
  if (showVWAP.value && vwapData.value.length && props.chartType === 'candlestick') {
    datasets.push({
      label: 'VWAP',
      data: vwapData.value,
      borderColor: '#F59E0B',
      backgroundColor: '#F59E0B'
    })
  }

  return { ...props.lineChartData, datasets }
})

const enhancedCandlestickChartData = computed(() => {
  if (!props.candlestickChartData?.datasets?.[0]?.data) return props.candlestickChartData

  const datasets = [...props.candlestickChartData.datasets]

  // Append volume bars aligned 1:1 on a secondary y-axis band.
  if (showVolume.value && props.candlestickChartData.datasets[0].data?.length) {
    const candles = props.candlestickChartData.datasets[0].data
    const volData = candles.map(c => ({ x: (c.x ?? c.t ?? c.timestamp), y: c.volume || c.v || 0 }))
    datasets.unshift({
      type: 'bar',
      label: 'Volume',
      yAxisID: 'yVolume',
      data: volData,
      parsing: false,
      order: -1,
      backgroundColor: ctx => {
        const i = ctx.dataIndex
        const candle = candles[i]
        if (!candle) return 'rgba(34,197,94,0.5)'
        const up = ((candle.c ?? candle.close) >= (candle.o ?? candle.open))
        return up ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'
      },
      borderWidth: 0,
      barPercentage: 0.8,
      categoryPercentage: 1,
      grouped: false
    })
  }

  // Add EMA lines if enabled (same logic as line chart).
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
        borderColor: '#10B981',
        backgroundColor: '#10B981',
        borderWidth: 0.5,
        pointRadius: 0
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
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        borderWidth: 0.5,
        pointRadius: 0
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
        borderColor: '#8B5CF6',
        backgroundColor: '#8B5CF6',
        borderWidth: 0.5,
        pointRadius: 0
      })
    }
  }

  // Add VWAP if enabled.
  if (showVWAP.value && vwapData.value.length) {
    datasets.push({
      type: 'line',
      label: 'VWAP',
      data: vwapData.value,
      borderColor: $waveui.colors.warning,
      backgroundColor: $waveui.colors.warning,
      borderWidth: 0.5,
      pointRadius: 0,
      tension: 0.1,
      borderDash: [5, 3]
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

    if (avgLoss[i - period] === 0) rsi.push(100)
    else rsi.push(100 - (100 / (1 + avgGain[i - period] / avgLoss[i - period])))
  }

  return rsi
}

const rsiChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
    annotation: {
      annotations: [{
        drawTime: "beforeDatasetsDraw",
        type: "box",
        xScaleID: "x-axis-0",
        yScaleID: "y-axis-0",
        borderWidth: 0,
        yMin: 25,
        yMax: 40,
        backgroundColor: "rgba(46, 204, 113,0.3)"
      }]
    }
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
          if (value % 10 === 0) return value.toString()
          return ''
        }
      }
    }
  },

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

// Smart Zoom Management (TradingView-style)
// --------------------------------------------------------
const dataRange = ref({ min: null, max: null })
const originalDataRange = ref({ min: null, max: null })
const zoomLimits = ref({ minZoom: null, maxZoom: null })

// Calculate intelligent zoom boundaries based on data.
function calculateZoomLimits() {
  const data = props.chartType === 'line' ? props.lineChartData : props.candlestickChartData
  const chartData = data?.datasets?.[0]?.data

  if (!chartData || chartData.length === 0) return

  const timestamps = chartData.map(point => point.x)
  const minTime = Math.min(...timestamps)
  const maxTime = Math.max(...timestamps)
  const totalTimeRange = maxTime - minTime

  // Store original data range for reference.
  originalDataRange.value = { min: minTime, max: maxTime }
  dataRange.value = { min: minTime, max: maxTime }

  // Calculate intelligent zoom limits.
  const minDataPoints = Math.max(5, Math.min(50, chartData.length * 0.02)) // Show at least 5 points, max 50, or 2% of data
  const maxDataPoints = chartData.length

  // Time per data point (average).
  const avgTimePerPoint = totalTimeRange / chartData.length

  zoomLimits.value = {
    // Maximum zoom in: show minimum data points.
    minZoom: avgTimePerPoint * minDataPoints,
    // Maximum zoom out: show all data plus 10% padding on each side.
    maxZoom: totalTimeRange * 1.2,
    // Data boundaries (with padding).
    dataMin: minTime - (totalTimeRange * 0.1),
    dataMax: maxTime + (totalTimeRange * 0.1)
  }
}

// Smart zoom validation - prevent over-zooming or losing data.
function validateZoomRange(min, max) {
  if (!zoomLimits.value.minZoom) return { min, max }

  const requestedRange = max - min
  const limits = zoomLimits.value

  // Only prevent extreme cases.
  // Allow users to zoom in very close (down to 2 data points) and zoom out very far.
  const veryMinZoom = limits.minZoom * 0.1 // Allow 10x closer than calculated minimum.
  const veryMaxZoom = limits.maxZoom * 3   // Allow 3x further than calculated maximum.

  // Only prevent extreme zoom-in (less than 2 data points visible).
  if (requestedRange < veryMinZoom) {
    const center = (min + max) / 2
    const halfMinRange = veryMinZoom / 2
    min = center - halfMinRange
    max = center + halfMinRange
    console.log(`📊 Extreme zoom-in prevented (showing minimum ${(veryMinZoom / (1000 * 60)).toFixed(1)} minutes)`)
  }

  // Only prevent extreme zoom-out (way beyond all data).
  if (requestedRange > veryMaxZoom) {
    const center = (min + max) / 2
    const halfMaxRange = veryMaxZoom / 2
    min = center - halfMaxRange
    max = center + halfMaxRange
    console.log(`📊 Extreme zoom-out prevented`)
  }

  // Permissive boundaries: allow panning well beyond data.
  const generousPadding = (limits.dataMax - limits.dataMin) * 2 // 200% padding on each side.
  const veryGenerousMin = limits.dataMin - generousPadding
  const veryGenerousMax = limits.dataMax + generousPadding

  // Only prevent panning extremely far beyond data (way off the chart).
  if (max < veryGenerousMin) {
    const shift = veryGenerousMin - max
    max = veryGenerousMin
    min = min + shift
  }

  if (min > veryGenerousMax) {
    const shift = min - veryGenerousMax
    min = veryGenerousMax
    max = max - shift
  }

  return { min, max }
}

// Replace multiple reset functions with a single resetView.
function resetView() {
  // Clear zoom state and re-focus smartly on recent data.
  zoomRange.value = { min: null, max: null }
  hasInitialized.value = false
  zoomLimits.value = { minZoom: null, maxZoom: null }
  nextTick(focusOnRecentData)
}

// Enhanced zoom/pan handlers with intelligent boundaries.
function handleZoomComplete(context) {
  const chart = context.chart
  if (!chart || !chart.scales || !chart.scales.x) return

  let { min, max } = chart.scales.x
  const originalMin = min
  const originalMax = max

  // Apply intelligent zoom validation (very permissive).
  const validatedRange = validateZoomRange(min, max)
  min = validatedRange.min
  max = validatedRange.max

  // Only update chart if range was actually modified (avoid unnecessary updates).
  const rangeWasModified = (min !== originalMin || max !== originalMax)

  if (rangeWasModified) {
    chart.scales.x.options.min = min
    chart.scales.x.options.max = max
    console.log('📊 Zoom range corrected due to extreme values')
  }

  // Auto-rescale Y-axis when zooming (but don't force update if range wasn't modified).
  const visibleData = getVisibleDataInRange(min, max)
  const { yMin, yMax } = calculateOptimalYRange(visibleData)

  if (yMin !== null && yMax !== null && chart.scales.y &&
      !chart.canvas.parentElement.classList.contains('rsi-pane') &&
      !chart.canvas.parentElement.classList.contains('macd-pane')) {
    chart.scales.y.options.min = yMin
    chart.scales.y.options.max = yMax
  }

  // Only force update if we made corrections, otherwise let Chart.js handle it naturally.
  if (rangeWasModified) chart.update('none')

  syncZoom(chart, { min, max })
}

function handlePanComplete(context) {
  const chart = context.chart
  if (!chart || !chart.scales || !chart.scales.x) return

  let { min, max } = chart.scales.x
  const originalMin = min
  const originalMax = max

  // Apply intelligent pan validation (very permissive).
  const validatedRange = validateZoomRange(min, max)
  min = validatedRange.min
  max = validatedRange.max

  // Only update chart if range was actually modified (avoid unnecessary updates).
  const rangeWasModified = (min !== originalMin || max !== originalMax)

  if (rangeWasModified) {
    chart.scales.x.options.min = min
    chart.scales.x.options.max = max
    console.log('📊 Pan range corrected due to extreme values')
  }

  // Auto-rescale Y-axis when panning (but don't force update if range wasn't modified).
  const visibleData = getVisibleDataInRange(min, max)
  const { yMin, yMax } = calculateOptimalYRange(visibleData)

  if (yMin !== null && yMax !== null && chart.scales.y &&
      !chart.canvas.parentElement.classList.contains('rsi-pane') &&
      !chart.canvas.parentElement.classList.contains('macd-pane')) {
    chart.scales.y.options.min = yMin
    chart.scales.y.options.max = yMax
  }

  // Only force update if we made corrections, otherwise let Chart.js handle it naturally.
  if (rangeWasModified) {
    chart.update('none')
  }

  syncZoom(chart, { min, max })
}

// Base chart options for synchronization.
const baseSynchronizedOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 0 },
  spanGaps: true, // Connect points across gaps to show continuous lines
  elements: {
    line: {
      spanGaps: true // Connect line segments across gaps
    }
  },
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
      adapters: { date: { zone: Intl.DateTimeFormat().resolvedOptions().timeZone } },
      distribution: 'linear', // Use linear distribution to eliminate gaps
      grid: { color: $waveui.colors.light2 },
      ticks: { color: $waveui.colors.light1, source: 'data' },
      offset: false, // Prevent category offset so bars align exactly at timestamps.
      min: zoomRange.value.min,
      max: zoomRange.value.max
    }
  },
  plugins: {
    legend: { display: false },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.08
        },
        pinch: { enabled: true },
        mode: 'x',
        onZoomComplete: handleZoomComplete
      },
      pan: {
        enabled: true,
        mode: 'x',
        threshold: 5, // Lower threshold for more responsive panning (was 10).
        onPanComplete: handlePanComplete
      },
      limits: {
        // Remove restrictive limits - let users zoom and pan freely.
        // Only extreme cases will be caught by our validation functions.
      }
    }
  }
}))

// Common Y-axis configuration to reduce redundancy.
const baseYAxisConfig = {
  position: 'right',
  grid: { color: $waveui.colors.light2 },
  ticks: { color: $waveui.colors.light1 }
}

// Synchronized chart options for each pane.
const synchronizedLineChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: { ...baseSynchronizedOptions.value.scales.x, display: true },
    y: baseYAxisConfig
  }
}))

const synchronizedCandlestickChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  plugins: {
    ...baseSynchronizedOptions.value.plugins,
    volumeBand: { height: VOLUME_BAND_HEIGHT } // Reserve space for volume band.
  },
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: { ...baseSynchronizedOptions.value.scales.x, display: true },
    y: baseYAxisConfig,
    yVolume: {
      position: 'right',
      display: false,
      beginAtZero: true,
      grid: { display: false }
    }
  }
}))

const synchronizedRsiChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: { ...baseSynchronizedOptions.value.scales.x, display: false },
    y: {
      ...baseYAxisConfig,
      min: 0,
      max: 100,
      grid: {
        ...baseYAxisConfig.grid,
        display: true,
        drawOnChartArea: false
      },
      ticks: {
        ...baseYAxisConfig.ticks,
        stepSize: 10,
        callback: (value) => {
          // Always show 30 and 70, plus other major levels
          if (value === 30 || value === 70 || value % 20 === 0) {
            return value.toString()
          }
          return ''
        }
      }
    }
  }
}))

const synchronizedMacdChartOptions = computed(() => ({
  ...baseSynchronizedOptions.value,
  scales: {
    ...baseSynchronizedOptions.value.scales,
    x: { ...baseSynchronizedOptions.value.scales.x, display: true },
    y: baseYAxisConfig
  }
}))

// Event Handlers
// --------------------------------------------------------
const changeChartType = (type) => emit('change-chart-type', type)
const changePeriod = (period) => emit('change-period', period)
const changeTimeframe = (timeframe) => emit('change-timeframe', timeframe)

// Track last data range for smooth transitions.
let lastDataRange = null

// Watchers for auto-focusing on data changes
// --------------------------------------------------------
watch(
  () => [props.lineChartData, props.candlestickChartData, props.isLoadingHistoricalData],
  async ([lineData, candleData, isLoading]) => {
    if (isLoading) return

    // Only auto-focus if we have meaningful data.
    const data = props.chartType === 'line' ? lineData : candleData
    const chartData = data?.datasets?.[0]?.data

    if (!chartData || chartData.length < 10) return

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
      hasInitialized.value = false

      // Recalculate zoom limits for new data
      calculateZoomLimits()
    }
    // Even for smooth transitions, update zoom limits to reflect new data range
    else calculateZoomLimits()

    // Store current data range for next comparison.
    lastDataRange = currentDataRange

    // Wait for next tick to ensure charts are rendered.
    await nextTick()

    // Only auto-focus if we reset initialization.
    // Slightly longer delay for smooth transitions.
    if (!hasInitialized.value) setTimeout(focusOnRecentData, 100)
  },
  { deep: true, immediate: true }
)

// Watch for symbol changes to reset initialization.
watch(() => props.symbol, () => {
  hasInitialized.value = false
})

// Watch for period/timeframe changes to reset initialization.
watch(() => [props.selectedPeriod, props.selectedTimeframe], () => {
  hasInitialized.value = false
})

// Expose refs and methods for parent access if needed.
defineExpose({
  chartContainer,
  lineChartRef,
  candleChartRef
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

    .chart {
      position: relative;

      canvas {cursor: crosshair;}

      // Individual pane heights.
      &.chart--rsi .chart-container canvas,
      &.chart--macd .chart-container canvas {
        max-height: 100% !important;
        overflow: hidden;
      }
      &.chart--rsi .chart-container  {max-height: 100px;}
      &.chart--macd .chart-container  {max-height: 130px;}
    }
  }
}
</style>
