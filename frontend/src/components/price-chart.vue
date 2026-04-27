<template lang="pug">
.price-chart
  //- Live price + OHLCV (autonomous trading lives on the bot panel)
  .price-chart__header.w-flex.justify-space-between.align-end.gap4.wrap(
    v-if="hasChartHeader")
    div
      TickerPrice.chart-header__price(
        v-if="stock"
        :stock="stock"
        :last-update="lastUpdate"
        :is-refreshing="isRefreshing"
        :is-transitioning-timeframe="isTransitioningTimeframe"
        @refresh-price="emit('refresh-price')")

  //- Chart Controls
  .chart-controls.w-flex.justify-space-between.align-center.mb2
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
          :disabled="isRecenterDisabled"
          :tooltip="isRecenterDisabled ? 'Already centered on latest data' : 'Reset zoom (snap to latest)'"
          :tooltip-props="{ sm: true }"
          outline
          round)
          icon(icon="mdi:crosshairs")
        //- Fullscreen Button
        w-button.pa0(
          v-if="showFullscreenButton"
          width="26"
          height="26"
          @click="$emit('toggle-fullscreen')"
          tooltip="Toggle Fullscreen"
          :tooltip-props="{ sm: true }"
          outline
          round)
          icon.size--lg(icon="mdi:fullscreen")

        //- Buy/Sell Buttons
        .w-flex.gap7(v-if="showTradingToggle")
          button.buy(@click="$emit('toggle-trading', 'buy')")
            strong BUY

          button.sell(@click="$emit('toggle-trading', 'sell')")
            strong SELL

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
  .charts-wrap.w-flex.column.bdrs2.w-card(v-if="!isLoadingHistoricalData")
    //- Main Price Chart Pane
    .charts.ml6.relative(ref="chartContainer")
      Line.chart.chart--price.chart--line(
        v-if="chartType === 'line'"
        ref="lineChartRef"
        :data="enhancedLineChartData"
        :options="synchronizedLineChartOptions"
        :plugins="entryPricePlugins")
      CandlestickChart.chart.chart--price.chart--candles(
        v-else
        ref="candleChartRef"
        :data="enhancedCandlestickChartData"
        :options="synchronizedCandlestickChartOptions"
        :plugins="entryPricePlugins"
        :ordinal-lookup="ordinalLookup"
        @hover-ohlc="onHoverOhlc")

      w-transition-fade(appear)
        div(v-if="!isRecenterDisabled")
          w-button.price-chart__reset-button(
            @click.stop="resetView"
            tooltip="Reset chart view"
            :tooltip-props="{ sm: true }"
            text
            round)
            icon(icon="mdi:restore")

    //- Drawing Tools Overlay
    DrawingTools(:chart-container="chartContainer")

    //- OHLCV over plot (hover updates; Chart.js tooltip disabled on main chart).
    .price-chart__ohlcv.size--xs(
      v-if="hasChartHeader && displayOHLC"
      :class="ohlcDisplayColorClass")
      span.base-color O
      strong {{ formatPrice(displayOHLC.open) }}
      span.base-color.ml1 H
      strong {{ formatPrice(displayOHLC.high) }}
      span.base-color.ml1 L
      strong {{ formatPrice(displayOHLC.low) }}
      span.base-color.ml1 C
      strong {{ formatPrice(displayOHLC.close) }}
      span.base-color.ml1 V
      strong {{ displayOHLC.volume > 0 ? formatVolume(displayOHLC.volume) : '—' }}

    //- RSI Pane (if enabled)
    .chart.chart--rsi.mt-1.ml6(v-show="showRSI && chartType === 'candlestick'")
      .w-flex.align-center.pa1.op4.ml3.absolute
        strong.size--sm.op7 RSI (14)
        code.size--sm.ml2 {{ currentRSI }}

      .chart-container
        Line(
          ref="rsiChartRef"
          :plugins="[rsiBackgroundPlugin]"
          :data="ordinalRsiChartData"
          :options="synchronizedRsiChartOptions")

    //- MACD Pane (if enabled)
    .chart.chart--macd.mt-1.ml6(v-show="showMACD && chartType === 'candlestick'")
      .w-flex.align-center.pa1.op4.ml3.absolute
        strong.size--sm.op7 MACD (12,26,9)
        code.size--sm.ml2 {{ currentMACD }}/{{ currentSignal }}/{{ currentHistogram }}

      .chart-container
        Line(
          ref="macdChartRef"
          :data="ordinalMacdChartData"
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
import { ref, computed, inject, watch, nextTick, onBeforeUnmount, markRaw } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart, BarController, BarElement } from 'chart.js'
import { getRelativePosition } from 'chart.js/helpers'
import 'chart.js/auto'
import 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'
import zoomPlugin from 'chartjs-plugin-zoom'
import { useTechnicalIndicators } from '@/composables/use-technical-indicators'
import { formatPrice, formatVolume } from '@/utils/formatters'
import CandlestickChart from './candlestick-chart.vue'
import DrawingTools from './drawing-tools.vue'
import TickerPrice from './ticker-price.vue'

// Props & Emits
// --------------------------------------------------------
const props = defineProps({
  symbol: { type: String, required: true },
  /** `crypto` = 24/7 ordinal axis (no weekend bar drop). */
  market: { type: String, default: 'stocks' },
  chartType: { type: String, required: true },
  selectedPeriod: { type: String, required: true },
  selectedTimeframe: { type: String, required: true },
  chartPeriods: { type: Array, required: true },
  availableTimeframes: { type: Array, required: true },
  isLoadingHistoricalData: { type: Boolean, required: true },
  isLoadingAdditionalData: { type: Boolean, default: false },
  lineChartData: { type: Object, required: true },
  candlestickChartData: { type: Object, required: true },
  // Smart timeframe selection props.
  effectiveTimeframe: { type: String, default: null },
  isUsingFallbackTimeframe: { type: Boolean, default: false },
  // Show trading interface toggle button (for fullscreen mode).
  showTradingToggle: { type: Boolean, default: false },
  // Show fullscreen button.
  showFullscreenButton: { type: Boolean, default: true },
  // Position entry price to display on chart.
  entryPrice: { type: Number, default: null },
  // Header: live price (TickerPrice) — optional so chart stays reusable.
  stock: { type: Object, default: null },
  lastUpdate: { type: String, default: '' },
  isRefreshing: { type: Boolean, default: false },
  isTransitioningTimeframe: { type: Boolean, default: false }
})

const emit = defineEmits([
  'change-chart-type',
  'change-period',
  'change-timeframe',
  'reset-zoom-complete',
  'toggle-trading',
  'toggle-fullscreen',
  'refresh-price'
])
// --------------------------------------------------------

const $waveui = inject('$waveui')

const hasChartHeader = computed(() => props.stock != null)

const buttonsColors = computed(() => {
  return {
    active: $waveui.theme === 'dark' ? 'primary-dark4' : 'primary-light5',
    inactive: $waveui.theme === 'dark' ? 'primary-dark6' : 'light2'
  }
})

// Register Chart.js plugins and components.
// Same object reference required for removeEventListener capture matching.
const Y_AXIS_POINTER_CAPTURE = { capture: true }

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

/** Candle under crosshair; cleared on leave — `displayOHLC` falls back to last bar. */
const hoverOHLC = ref(null)

function onHoverOhlc(payload) {
  hoverOHLC.value = payload
}

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
let lastAutoFocusRange = null

// Helper Functions
// --------------------------------------------------------
// Get all active chart instances.
const getAllChartInstances = () => {
  const charts = []

  // First add the main price chart (line or candlestick) with null checks.
  const mainChart = getActiveChart()
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

// Helper function to get visible data in an ordinal index range.
const OVERLAY_LABELS = new Set(['Volume', 'EMA 20', 'EMA 50', 'EMA 200', 'VWAP'])
const getVisibleDataInRange = (startIdx, endIdx) => {
  const enhanced = props.chartType === 'line' ? enhancedLineChartData.value : enhancedCandlestickChartData.value
  const mainDataset = enhanced?.datasets?.find(ds => !OVERLAY_LABELS.has(ds.label)) || enhanced?.datasets?.[0]
  const chartData = mainDataset?.data || []
  return chartData.filter(point => point.x >= startIdx && point.x <= endIdx)
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

  // Ensure entry price (open position line) is always in range.
  if (props.entryPrice && props.entryPrice > 0) {
    if (props.entryPrice < minPrice) minPrice = props.entryPrice
    if (props.entryPrice > maxPrice) maxPrice = props.entryPrice
  }

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

  const bounds = computeRecentDataFocusBounds()
  if (!bounds) return

  applyRecentDataFocusBounds(bounds)
  hasInitialized.value = true
}

function applyRecentDataFocusBounds(bounds) {
  calculateZoomLimits()

  const { focusMin, focusMax, yMin, yMax } = bounds
  zoomRange.value = { min: focusMin, max: focusMax }
  lastAutoFocusRange = { min: focusMin, max: focusMax }
  if (!yAxisManuallySet.value) manualYRange.value = { min: yMin, max: yMax }

  getAllChartInstances().forEach(chart => {
    if (chart?.scales?.x?.options) {
      chart.scales.x.options.min = focusMin
      chart.scales.x.options.max = focusMax
      if (chart.scales.y && !chart.canvas.parentElement.classList.contains('rsi-pane') &&
          !chart.canvas.parentElement.classList.contains('macd-pane') &&
          !yAxisManuallySet.value) {
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
      volume: candleVolumeY(item),
      price: item.c
    }))
  }

  return sourceData
})

// Technical indicators from composable.
const indicators = useTechnicalIndicators(ohlcData)

// Ordinal (gap-free) scale support
// Maps each trading data point to a sequential index, eliminating weekend/overnight gaps.
const ordinalLookup = computed(() => {
  const data = props.chartType === 'candlestick' ? props.candlestickChartData : props.lineChartData
  const mainData = data?.datasets?.[0]?.data || []
  const tsList = mainData.map(p => p.x)
  if (String(props.market).toLowerCase() === 'crypto') return tsList
  return tsList.filter(ts => {
    const d = new Date(ts).getDay()
    return d !== 0 && d !== 6
  })
})

function applyOrdinalMapping(data) {
  if (!data?.datasets?.length || !ordinalLookup.value.length) return data
  const tsToIndex = new Map(ordinalLookup.value.map((ts, i) => [ts, i]))
  return {
    ...data,
    datasets: data.datasets.map(ds => ({
      ...ds,
      data: (ds.data || [])
        .filter(p => tsToIndex.has(p.x))
        .map(p => ({ ...p, x: tsToIndex.get(p.x) }))
    }))
  }
}

function formatOrdinalTick(ts) {
  const d = new Date(ts)
  if (props.selectedTimeframe === '1Day') {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  if (props.selectedPeriod === '1D') {
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  }
  return d.toLocaleString('en-US', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
  })
}

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

  return applyOrdinalMapping({ ...props.lineChartData, datasets })
})

const enhancedCandlestickChartData = computed(() => {
  if (!props.candlestickChartData?.datasets?.[0]?.data) return props.candlestickChartData

  const datasets = [...props.candlestickChartData.datasets]

  // Append volume bars aligned 1:1 on a secondary y-axis band.
  if (showVolume.value && props.candlestickChartData.datasets[0].data?.length) {
    const candles = props.candlestickChartData.datasets[0].data
    const volData = candles.map(c => ({ x: (c.x ?? c.t ?? c.timestamp), y: candleVolumeY(c) }))
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

  return applyOrdinalMapping({ ...props.candlestickChartData, datasets })
})

/** Numeric volume from a candle row (feeds differ: `volume`, Alpaca `v`, etc.). */
function candleVolumeY(c) {
  if (!c || typeof c !== 'object') return 0
  const raw = c.volume ?? c.v ?? c.V ?? c.tradeVolume ?? c.size ?? c.s
  const n = Number(raw)
  return Number.isFinite(n) ? n : 0
}


/** X/Y bounds for the initial "snap to latest" view (same math as focusOnRecentData). Pure — no ref writes. */
function computeRecentDataFocusBounds() {
  if (!ordinalLookup.value.length) return null

  const enhanced = props.chartType === 'line' ? enhancedLineChartData.value : enhancedCandlestickChartData.value
  const mainDataset = enhanced?.datasets?.find(ds => !OVERLAY_LABELS.has(ds.label)) || enhanced?.datasets?.[0]
  const chartData = mainDataset?.data

  if (!chartData?.length || chartData.length < 10) return null

  const totalPoints = chartData.length
  let focusData

  if (props.selectedPeriod === '1D') {
    const now = new Date()
    const easternTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
    const y = easternTime.getFullYear(), m = easternTime.getMonth(), d = easternTime.getDate()
    const sessionStartUTC = new Date(y, m, d, 9, 30, 0, 0).getTime()
    const sessionEndUTC = new Date(y, m, d, 16, 0, 0, 0).getTime()

    const todaysTradingData = chartData.filter(point => {
      const ts = ordinalLookup.value[point.x]
      return ts >= sessionStartUTC && ts <= sessionEndUTC
    })

    if (todaysTradingData.length > 5) {
      focusData = todaysTradingData
    }
    else {
      const recentData = chartData.slice(-Math.max(100, Math.floor(totalPoints * 0.2)))
      const lastTs = ordinalLookup.value[recentData[recentData.length - 1]?.x]
      if (lastTs) {
        const et = new Date(new Date(lastTs).toLocaleString('en-US', { timeZone: 'America/New_York' }))
        const ly = et.getFullYear(), lm = et.getMonth(), ld = et.getDate()
        const lStart = new Date(ly, lm, ld, 9, 30, 0, 0).getTime()
        const lEnd = new Date(ly, lm, ld, 16, 0, 0, 0).getTime()
        const sessionData = chartData.filter(p => {
          const ts = ordinalLookup.value[p.x]
          return ts >= lStart && ts <= lEnd
        })
        focusData = sessionData.length > 5 ? sessionData : recentData
      }
      else focusData = chartData.slice(-100)
    }
  }
  else {
    const focusPoints = calculateSmartFocusPoints(totalPoints)
    focusData = chartData.slice(Math.max(0, totalPoints - focusPoints))
  }

  if (!focusData?.length) return null

  const startIdx = focusData[0].x
  const endIdx = focusData[focusData.length - 1].x
  const span = endIdx - startIdx
  const pad = Math.max(1, Math.ceil(span * 0.05))
  const { min: focusMin, max: focusMax } = validateZoomRange(startIdx - pad, endIdx + pad)

  let minPrice = Infinity, maxPrice = -Infinity
  focusData.forEach(point => {
    if (point.y !== undefined) {
      if (point.y < minPrice) minPrice = point.y
      if (point.y > maxPrice) maxPrice = point.y
    }
    else {
      const high = point.h || point.high
      const low = point.l || point.low
      if (low < minPrice) minPrice = low
      if (high > maxPrice) maxPrice = high
    }
  })

  if (props.entryPrice > 0) {
    if (props.entryPrice < minPrice) minPrice = props.entryPrice
    if (props.entryPrice > maxPrice) maxPrice = props.entryPrice
  }

  const priceRange = maxPrice - minPrice
  const volatilityRatio = priceRange / ((minPrice + maxPrice) / 2)
  let pricePaddingRatio = 0.02
  if (volatilityRatio < 0.02) pricePaddingRatio = 0.05
  else if (volatilityRatio < 0.1) pricePaddingRatio = 0.03
  const pricePadding = priceRange * pricePaddingRatio
  const yMin = minPrice - pricePadding
  const yMax = maxPrice + pricePadding

  return { focusMin, focusMax, yMin, yMax }
}

function xRangeMatches(a, b) {
  if (!a || !b || a.min == null || a.max == null || b.min == null || b.max == null) return false
  const eps = 0.15
  return Math.abs(a.min - b.min) < eps && Math.abs(a.max - b.max) < eps
}

function followLatestDataIfAnchored() {
  if (!hasInitialized.value || !lastAutoFocusRange) return
  if (!xRangeMatches(zoomRange.value, lastAutoFocusRange)) return

  const bounds = computeRecentDataFocusBounds()
  if (!bounds) return
  applyRecentDataFocusBounds(bounds)
}

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
// Must match the main price series actually drawn (ordinal filter, overlays unshifted, etc.).
function ohlcFromCandlePoint(point) {
  if (!point) return null
  return {
    open: point.o ?? point.open ?? 0,
    high: point.h ?? point.high ?? 0,
    low: point.l ?? point.low ?? 0,
    close: point.c ?? point.close ?? 0,
    volume: candleVolumeY(point)
  }
}

const lastBarOHLC = computed(() => {
  if (props.chartType === 'candlestick') {
    const enhanced = enhancedCandlestickChartData.value
    const mainDataset = enhanced?.datasets?.find(ds => !OVERLAY_LABELS.has(ds.label)) || enhanced?.datasets?.[0]
    const dataPoints = mainDataset?.data
    if (!dataPoints?.length) return null
    const last = dataPoints[dataPoints.length - 1]
    const ohlc = ohlcFromCandlePoint(last)
    // Live/bridge candles have volume=0; use the last closed candle's volume instead.
    if (ohlc && ohlc.volume === 0) {
      for (let i = dataPoints.length - 2; i >= 0; i--) {
        const v = candleVolumeY(dataPoints[i])
        if (v > 0) { ohlc.volume = v; break }
      }
    }
    return ohlc
  }
  if (props.chartType === 'line') {
    const enhanced = enhancedLineChartData.value
    const mainDataset = enhanced?.datasets?.find(ds => !OVERLAY_LABELS.has(ds.label)) || enhanced?.datasets?.[0]
    const lastPoint = mainDataset?.data?.slice(-1)[0]
    if (!lastPoint) return null
    const price = lastPoint.y ?? 0
    return {
      open: price,
      high: price,
      low: price,
      close: price,
      volume: 0
    }
  }
  return null
})

/** Last bar ordinal x + close for a dashed current-price segment (from last bar to plot right edge). */
const lastTickGuide = computed(() => {
  const enhanced = props.chartType === 'line' ? enhancedLineChartData.value : enhancedCandlestickChartData.value
  const mainDataset = enhanced?.datasets?.find(ds => !OVERLAY_LABELS.has(ds.label)) || enhanced?.datasets?.[0]
  const last = mainDataset?.data?.[mainDataset.data.length - 1]
  if (!last || last.x == null || !Number.isFinite(Number(last.x))) return null

  let open
  let close
  if (props.chartType === 'line') {
    const y = last.y
    if (!Number.isFinite(y) || y <= 0) return null
    open = y
    close = y
  }
  else {
    const ohlc = ohlcFromCandlePoint(last)
    if (!ohlc || !Number.isFinite(ohlc.close) || ohlc.close <= 0) return null
    open = ohlc.open
    close = ohlc.close
  }

  return {
    x: Number(last.x),
    price: close,
    bullish: close >= open
  }
})

const displayOHLC = computed(() => hoverOHLC.value ?? lastBarOHLC.value)

const ohlcDisplayColorClass = computed(() => {
  if (!displayOHLC.value) return ''
  const { open, close } = displayOHLC.value
  // Green (success) if price is increasing or stable, red (error) if declining.
  return close >= open ? 'success' : 'error'
})

watch(
  () => [props.chartType, props.symbol],
  () => {
    hoverOHLC.value = null
  }
)

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

// Ordinal-mapped indicator data for RSI/MACD panes (same index space as main chart).
const ordinalRsiChartData = computed(() => applyOrdinalMapping(indicators.rsiChartData.value))
const ordinalMacdChartData = computed(() => applyOrdinalMapping(indicators.macdChartData.value))

// Smart Zoom Management (TradingView-style)
// --------------------------------------------------------
const dataRange = ref({ min: null, max: null })
const originalDataRange = ref({ min: null, max: null })
const zoomLimits = ref({ minZoom: null, maxZoom: null })

// Calculate intelligent zoom boundaries based on ordinal indices.
function calculateZoomLimits() {
  const n = ordinalLookup.value.length
  if (!n) return

  originalDataRange.value = { min: 0, max: n - 1 }
  dataRange.value = { min: 0, max: n - 1 }

  const padding = Math.ceil(n * 0.1)
  zoomLimits.value = {
    minZoom: 3,
    maxZoom: n * 1.5,
    dataMin: -padding,
    dataMax: n - 1 + padding
  }
}

// Keep the X viewport overlapping real series indices [0, n - 1] (no panning into empty space).
function clampXViewToSeries(min, max, n) {
  if (n == null || n < 1) return { min, max }
  const range = max - min
  if (range <= 0) return { min, max }

  let a = min
  let b = max

  if (b < 0) {
    const shift = -b
    a += shift
    b += shift
  }
  if (a > n - 1) {
    const shift = a - (n - 1)
    a -= shift
    b -= shift
  }

  return { min: a, max: b }
}

// Smart zoom validation - prevent over-zooming or losing data.
function validateZoomRange(min, max) {
  const n = ordinalLookup.value.length
  if (!n) return { min, max }

  const range = max - min

  // Prevent extreme zoom-in (fewer than 2 candles visible).
  if (range < 2) {
    const center = (min + max) / 2
    min = center - 1
    max = center + 1
  }

  const clamped = clampXViewToSeries(min, max, n)
  return clamped
}

// While panning, enforce the same X rails (plugin may otherwise leave the scale unchanged when blocked).
function handlePanClamp(context) {
  const chart = context.chart
  if (!chart?.scales?.x) return

  const n = ordinalLookup.value.length
  if (!n) return

  const xs = chart.scales.x
  const min = xs.min
  const max = xs.max
  const { min: cmin, max: cmax } = clampXViewToSeries(min, max, n)
  if (cmin === min && cmax === max) return

  xs.options.min = cmin
  xs.options.max = cmax
  chart.update('none')
}

// Replace multiple reset functions with a single resetView.
function resetView() {
  zoomRange.value = { min: null, max: null }
  lastAutoFocusRange = null
  hasInitialized.value = false
  yAxisManuallySet.value = false
  manualYRange.value = { min: null, max: null }
  zoomLimits.value = { minZoom: null, maxZoom: null }
  nextTick(focusOnRecentData)
}

// Enhanced zoom/pan handlers with intelligent boundaries.
function handleZoomComplete(context) {
  const chart = context.chart
  if (!chart || !chart.scales || !chart.scales.x) return

  // Handle X-axis zoom (default behavior).
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

  // Auto-rescale Y-axis when zooming X-axis.
  // Skip if user has manually set the Y range via Y-axis drag.
  if (!yAxisDrag.isDragging && !yAxisManuallySet.value) {
    const visibleData = getVisibleDataInRange(min, max)
    const { yMin, yMax } = calculateOptimalYRange(visibleData)

    if (yMin !== null && yMax !== null && chart.scales.y &&
        !chart.canvas.parentElement.classList.contains('rsi-pane') &&
        !chart.canvas.parentElement.classList.contains('macd-pane')) {
      manualYRange.value = { min: yMin, max: yMax }
      chart.scales.y.options.min = yMin
      chart.scales.y.options.max = yMax
    }
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

  // Auto-rescale Y-axis when panning.
  // Skip if user has manually set the Y range via Y-axis drag.
  if (yAxisManuallySet.value) {
    if (rangeWasModified) chart.update('none')
    syncZoom(chart, { min, max })
    return
  }

  const visibleData = getVisibleDataInRange(min, max)
  const { yMin, yMax } = calculateOptimalYRange(visibleData)

  if (yMin !== null && yMax !== null && chart.scales.y &&
      !chart.canvas.parentElement.classList.contains('rsi-pane') &&
      !chart.canvas.parentElement.classList.contains('macd-pane')) {
    manualYRange.value = { min: yMin, max: yMax }
    chart.scales.y.options.min = yMin
    chart.scales.y.options.max = yMax
  }

  // Only force update if we made corrections, otherwise let Chart.js handle it naturally.
  if (rangeWasModified) {
    chart.update('none')
  }

  syncZoom(chart, { min, max })
}

// Y-axis drag zoom.
const yAxisManuallySet = ref(false)
const manualYRange = ref({ min: null, max: null }) // Reactive Y range — survives vue-chartjs option re-renders.
const yAxisDrag = { isDragging: false, chart: null, startY: 0, startMin: 0, startMax: 0, pointerId: null }

const isRecenterDisabled = computed(() => {
  if (props.isLoadingHistoricalData) return true
  const bounds = computeRecentDataFocusBounds()
  if (!bounds) return true
  const { focusMin, focusMax } = bounds
  const zr = zoomRange.value
  if (zr.min == null || zr.max == null) return false
  const eps = 0.15
  const xMatch = Math.abs(zr.min - focusMin) < eps && Math.abs(zr.max - focusMax) < eps
  return xMatch && !yAxisManuallySet.value
})

function chartFromCanvas(canvas) {
  let chart = Chart.getChart(canvas)
  if (!chart) {
    const fromRef = getActiveChart()
    if (fromRef?.canvas === canvas) chart = fromRef
  }
  return chart
}

// Price Y-axis strip: right of plot (ticks/labels), same coords as Chart.js layout (getRelativePosition).
function isPointerOnPriceYAxisStrip(chart, event) {
  const ca = chart?.chartArea
  if (!ca || chart.scales?.y == null || chart.width == null) return false
  const { x, y } = getRelativePosition(event, chart)
  if (!Number.isFinite(x) || !Number.isFinite(y)) return false
  if (x < ca.right || x > chart.width) return false
  if (y < ca.top || y > ca.bottom) return false
  return true
}

function onYAxisStripPointerMoveHover(e) {
  if (yAxisDrag.isDragging) return
  const canvas = e.currentTarget
  const chart = chartFromCanvas(canvas)
  if (!chart) return
  canvas.style.cursor = isPointerOnPriceYAxisStrip(chart, e) ? 'ns-resize' : ''
}

function onYAxisStripPointerLeave(e) {
  if (!yAxisDrag.isDragging) e.currentTarget.style.cursor = ''
}

function onWindowYAxisPointerMove(e) {
  updateYAxisZoom(e)
}

function onWindowYAxisPointerEnd() {
  endYAxisDrag()
}

// pointerdown (capture) runs before chartjs-plugin-zoom / Hammer so we can own vertical scale drags.
function startYAxisDrag(e) {
  if (e.pointerType === 'mouse' && e.button !== 0) return

  const canvas = e.currentTarget || e.target
  if (!canvas) return

  const chart = chartFromCanvas(canvas)
  if (!chart) return

  const isRSIChart = chart === rsiChartRef.value?.chart
  const isMACDChart = chart === macdChartRef.value?.chart
  if (isRSIChart || isMACDChart) return

  if (!chart.chartArea || !chart.scales?.y) return
  if (!isPointerOnPriceYAxisStrip(chart, e)) return

  yAxisDrag.isDragging = true
  yAxisDrag.chart = markRaw(chart)
  yAxisDrag.pointerId = e.pointerId
  yAxisDrag.startY = e.clientY
  yAxisDrag.startMin = chart.scales.y.min
  yAxisDrag.startMax = chart.scales.y.max

  try {
    if (typeof canvas.setPointerCapture === 'function') canvas.setPointerCapture(e.pointerId)
  }
  catch {
    // setPointerCapture can throw if not eligible; drag still works without it.
  }

  window.addEventListener('pointermove', onWindowYAxisPointerMove, { passive: false })
  window.addEventListener('pointerup', onWindowYAxisPointerEnd)
  window.addEventListener('pointercancel', onWindowYAxisPointerEnd)

  canvas.style.cursor = 'ns-resize'
  e.preventDefault()
  e.stopPropagation()
  e.stopImmediatePropagation()
}

function updateYAxisZoom(e) {
  if (!yAxisDrag.isDragging || !yAxisDrag.chart) return
  const y = e.clientY ?? e.touches?.[0]?.clientY
  if (!y) return

  const { chart, startY, startMin, startMax } = yAxisDrag
  if (!chart?.chartArea || !chart?.scales?.y) return

  // Only update the chart being dragged, and only if it's the main price chart (not RSI/MACD).
  const isRSIChart = chart === rsiChartRef.value?.chart
  const isMACDChart = chart === macdChartRef.value?.chart

  if (isRSIChart || isMACDChart) {
    // Don't allow Y-axis drag on indicator charts.
    return
  }

  const deltaY = startY - y
  const range = startMax - startMin
  const newRange = range * Math.max(0.1, Math.min(10, 1 + (deltaY / chart.chartArea.height) * 2))
  const center = (startMin + startMax) / 2
  const newMin = center - newRange / 2
  const newMax = center + newRange / 2

  // Only update the chart being dragged.
  if (chart.scales.y.options) {
    manualYRange.value = { min: newMin, max: newMax }
    chart.scales.y.options.min = newMin
    chart.scales.y.options.max = newMax
    chart.update('none')
  }

  e.preventDefault()
  e.stopPropagation()
}

function endYAxisDrag() {
  const canvas = yAxisDrag.chart?.canvas
  const pid = yAxisDrag.pointerId
  if (yAxisDrag.isDragging) yAxisManuallySet.value = true
  if (canvas && pid != null && typeof canvas.releasePointerCapture === 'function') {
    try {
      if (canvas.hasPointerCapture(pid)) canvas.releasePointerCapture(pid)
    } catch {
      // ignore
    }
  }
  if (canvas) canvas.style.cursor = ''
  window.removeEventListener('pointermove', onWindowYAxisPointerMove)
  window.removeEventListener('pointerup', onWindowYAxisPointerEnd)
  window.removeEventListener('pointercancel', onWindowYAxisPointerEnd)
  Object.assign(yAxisDrag, { isDragging: false, chart: null, startY: 0, startMin: 0, startMax: 0, pointerId: null })
}

// Attach listeners when chart is ready.
function attachYAxisListeners() {
  // Attach to both line and candlestick charts (but not RSI/MACD).
  const charts = []
  const candleChart = candleChartRef.value
  const lineChart = lineChartRef.value

  if (candleChart) {
    const chart = typeof candleChart.chart === 'function' ? candleChart.chart() : candleChart.chart
    if (chart?.canvas) charts.push(chart)
  }
  if (lineChart?.chart?.canvas) charts.push(lineChart.chart)

  charts.forEach(chart => {
    if (!chart?.canvas) return

    chart.canvas.removeEventListener('pointerdown', startYAxisDrag, Y_AXIS_POINTER_CAPTURE)
    chart.canvas.removeEventListener('pointermove', onYAxisStripPointerMoveHover)
    chart.canvas.removeEventListener('pointerleave', onYAxisStripPointerLeave)

    chart.canvas.addEventListener('pointerdown', startYAxisDrag, Y_AXIS_POINTER_CAPTURE)
    chart.canvas.addEventListener('pointermove', onYAxisStripPointerMoveHover, { passive: true })
    chart.canvas.addEventListener('pointerleave', onYAxisStripPointerLeave)
  })
}

watch([lineChartRef, candleChartRef, () => props.chartType], () => {
  nextTick(() => {
    setTimeout(() => {
      attachYAxisListeners()
    }, 300) // Wait for chart to fully initialize
  })
}, { immediate: true })

onBeforeUnmount(() => {
  endYAxisDrag()
  attachYAxisListeners() // Remove listeners
})


// Get the active chart (line or candlestick).
function getActiveChart() {
  // Handle both function and property access patterns.
  const candleChart = candleChartRef.value
  const lineChart = lineChartRef.value

  if (candleChart) {
    return typeof candleChart.chart === 'function' ? candleChart.chart() : candleChart.chart
  }
  if (lineChart) {
    return lineChart.chart
  }
  return null
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
      type: 'linear',
      grid: { color: $waveui.colors.light2 },
      ticks: {
        color: $waveui.colors.light1,
        maxTicksLimit: 8,
        callback(value) {
          const idx = Math.round(value)
          if (idx < 0 || idx >= ordinalLookup.value.length) return ''
          return formatOrdinalTick(ordinalLookup.value[idx])
        }
      },
      offset: false,
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
          speed: 0.03
        },
        pinch: { enabled: true },
        mode: 'x',
        onZoomComplete: handleZoomComplete
      },
      pan: {
        enabled: true,
        mode: 'x',
        threshold: 5, // Lower threshold for more responsive panning (was 10).
        onPan: handlePanClamp,
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

// Entry price line plugin - creates a plugin function that returns the plugin object.
const createEntryPricePlugin = () => ({
  id: 'entryPriceLine',
  afterDraw: chart => {
    if (!props.entryPrice || props.entryPrice <= 0) return

    const ctx = chart.ctx
    const chartArea = chart.chartArea
    const yScale = chart.scales.y

    if (!yScale || !chartArea) return

    const entryY = yScale.getPixelForValue(props.entryPrice)

    // Only draw if the entry price is within the visible chart area.
    if (entryY < chartArea.top || entryY > chartArea.bottom) return

    ctx.save()

    // Draw horizontal line at entry price.
    ctx.strokeStyle = $waveui.colors.primary
    ctx.setLineDash([0]) // Dashed line.
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(chartArea.left, entryY)
    ctx.lineTo(chartArea.right, entryY)
    ctx.stroke()

    // Draw label on the right side.
    const labelText = `Entry: $${props.entryPrice.toFixed(2)}`
    ctx.font = '11px sans-serif'
    const labelPadding = 6
    const labelWidth = ctx.measureText(labelText).width + labelPadding * 2
    const labelHeight = 14
    const labelX = chartArea.right * 0.25
    const labelY = entryY - labelHeight / 2

    // Draw label background.
    ctx.fillStyle = $waveui.colors.primary
    ctx.beginPath()
    ctx.roundRect(labelX, labelY, labelWidth, labelHeight, 4)
    ctx.fill()

    // Draw label text.
    ctx.fillStyle = $waveui.colors.white
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(labelText, labelX + labelWidth / 2, entryY)

    ctx.restore()
  }
})

// Match volume bar convention: green up / red down (see enhancedCandlestickChartData volume colors).
const LAST_TICK_LINE_UP = '#22c55e'
const LAST_TICK_LINE_DOWN = '#ef4444'

const createLastTickPricePlugin = () => ({
  id: 'lastTickPriceLine',
  afterDraw: chart => {
    const g = lastTickGuide.value
    if (!g) return

    const xScale = chart.scales.x
    const yScale = chart.scales.y
    const chartArea = chart.chartArea
    if (!xScale || !yScale || !chartArea) return

    const xMin = xScale.min
    const xMax = xScale.max
    if (g.x < xMin || g.x > xMax) return

    const y = yScale.getPixelForValue(g.price)
    if (!Number.isFinite(y) || y < chartArea.top || y > chartArea.bottom) return

    const xCenter = xScale.getPixelForValue(g.x)
    if (!Number.isFinite(xCenter)) return

    let xStart = xCenter
    const xPrev = g.x > xMin ? xScale.getPixelForValue(g.x - 1) : null
    const xNext = g.x < xMax ? xScale.getPixelForValue(g.x + 1) : null
    if (Number.isFinite(xPrev)) xStart = xCenter - (xCenter - xPrev) * 0.45
    else if (Number.isFinite(xNext)) xStart = xCenter - (xNext - xCenter) * 0.45
    else xStart = xCenter - Math.max(4, (chartArea.right - chartArea.left) * 0.015)

    xStart = Math.max(chartArea.left, Math.min(xStart, chartArea.right - 2))

    const ctx = chart.ctx
    ctx.save()
    ctx.strokeStyle = g.bullish ? LAST_TICK_LINE_UP : LAST_TICK_LINE_DOWN
    ctx.setLineDash([3, 3])
    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(chartArea.left, y)
    ctx.lineTo(chartArea.right, y)
    ctx.stroke()

    // Price tag on the y-axis strip (right), same idea as entry label.
    const labelText = formatPrice(g.price)
    ctx.font = '10px sans-serif'
    const labelPadding = 3
    const labelWidth = ctx.measureText(labelText).width + labelPadding * 2
    const labelHeight = 14
    const margin = 4
    const stripRight = Math.min(chart.width - margin, (yScale.right ?? chart.width) - margin)
    let labelX = stripRight - labelWidth
    const minX = chartArea.right + margin
    if (labelX < minX) labelX = minX

    let labelY = y - labelHeight / 2
    labelY = Math.max(chartArea.top, Math.min(labelY, chartArea.bottom - labelHeight))

    const fillColor = g.bullish ? LAST_TICK_LINE_UP : LAST_TICK_LINE_DOWN
    ctx.fillStyle = fillColor
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.roundRect(labelX, labelY, labelWidth, labelHeight, 4)
    ctx.fill()

    ctx.fillStyle = $waveui.colors.white
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(labelText, labelX + labelWidth / 2, labelY + labelHeight / 2)

    ctx.restore()
  }
})

// Synchronized chart options for each pane.
const entryPricePlugins = [createEntryPricePlugin(), createLastTickPricePlugin()]

const synchronizedLineChartOptions = computed(() => {
  const yConfig = manualYRange.value.min !== null
    ? { ...baseYAxisConfig, min: manualYRange.value.min, max: manualYRange.value.max }
    : baseYAxisConfig
  return {
    ...baseSynchronizedOptions.value,
    plugins: {
      ...baseSynchronizedOptions.value.plugins,
      tooltip: { enabled: false }
    },
    scales: {
      ...baseSynchronizedOptions.value.scales,
      x: { ...baseSynchronizedOptions.value.scales.x, display: true },
      y: yConfig
    }
  }
})

const synchronizedCandlestickChartOptions = computed(() => {
  const plugins = {
    ...baseSynchronizedOptions.value.plugins,
    tooltip: { enabled: false },
    volumeBand: { heightRatio: 0.25 } // Reserve 25% of chart area for volume band.
  }
  const yConfig = manualYRange.value.min !== null
    ? { ...baseYAxisConfig, min: manualYRange.value.min, max: manualYRange.value.max }
    : baseYAxisConfig
  return {
    ...baseSynchronizedOptions.value,
    plugins,
    scales: {
      ...baseSynchronizedOptions.value.scales,
      x: { ...baseSynchronizedOptions.value.scales.x, display: true },
      y: yConfig,
      yVolume: {
        position: 'right',
        display: false,
        beginAtZero: true,
        min: 0,
        grid: { display: false }
      }
    }
  }
})

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
    const shouldFollowLatest = !shouldResetInitialization &&
      currentDataRange &&
      lastDataRange &&
      (currentDataRange.end !== lastDataRange.end || currentDataRange.size !== lastDataRange.size)

    if (shouldResetInitialization) {
      hasInitialized.value = false
      lastAutoFocusRange = null

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
    else if (shouldFollowLatest) setTimeout(followLatestDataIfAnchored, 0)
  },
  { deep: true, immediate: true }
)

// Watch for symbol changes to reset initialization.
watch(() => props.symbol, () => {
  hasInitialized.value = false
  lastAutoFocusRange = null
})

// Watch for period/timeframe changes to reset initialization.
watch(() => [props.selectedPeriod, props.selectedTimeframe], () => {
  hasInitialized.value = false
  lastAutoFocusRange = null
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
  .price-chart__header {
    width: 100%;
    align-items: flex-start;

    .chart-header__price {
      flex: 1;
      min-width: 0;
    }
  }

  .chart-controls {
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.5rem;

    .buy, .sell {
      position: relative;
      background-image: linear-gradient(135deg, #fff -100%, transparent 80%);
      border: none;
      color: #fff;
      height: 26px;
      transition: filter 0.25s;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      &:not(:disabled) {cursor: pointer;}

      &:not(:disabled):hover {filter: contrast(1.1) brightness(1.1);}
      &:not(:disabled):active {filter: contrast(1.2) brightness(1.2) saturate(0.9);}

      &:before {
        content: '';
        position: absolute;
        inset: 0;
        height: 100%;
        left: 100%;
        border: 13px solid transparent;
        aspect-ratio: 1;
      }
    }
    .buy {
      border-radius: 99em 0 0 99em;
      background-color: var(--w-success-color);

      &:before {
        border-left-color: var(--w-success-color);
        border-top-color: var(--w-success-color);
      }
      strong {position: relative;left: 7px;}
    }
    .sell {
      border-radius: 0 99em 99em 0;
      background-color: var(--w-error-color);
      background-image: linear-gradient(-135deg, #fff -100%, transparent 80%);

      &:before {
        border-right-color: var(--w-error-color);
        border-bottom-color: var(--w-error-color);
        right: 100%;
        left: auto;
      }
      strong {position: relative;left: -6px;}
    }
  }
  &.small .chart-controls {margin-top: 0.2rem;}

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
    padding: 0.8rem;

    .charts {
      position: relative;
      height: 400px;
    }

    .price-chart__ohlcv {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 2px;
      z-index: 1;
      top: 0.4rem;
      left: 3.3rem;
      pointer-events: none;
      padding: 0.12rem 0.3rem 0.14rem;
      border-radius: 4px;
      flex-wrap: wrap;
      row-gap: 2px;
      box-shadow: 0 1px 2px rgba(#000, 0.06);
      backdrop-filter: blur(4px);
    }

    .price-chart__reset-button {
      position: absolute;
      z-index: 12;
      left: 50%;
      bottom: 0.9rem;
      transform: translateX(-50%);
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.2rem 0.45rem 0.22rem;
      font-size: 0.65rem;
      color: var(--w-base-color);
      background: color-mix(in srgb, var(--w-base-bg-color) 8%, transparent);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      cursor: pointer;
      backdrop-filter: blur(4px);

      &:active {transform: translateX(-50%) scale(0.98);}
    }

    .chart {
      position: relative;

      canvas {
        cursor: crosshair;
        width: 100% !important;
        height: 100% !important;
      }

      &.chart--rsi, &.chart--macd {border-top: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 10%, transparent);}
      &.chart--rsi .chart-container  {max-height: 100px;}
      &.chart--macd .chart-container  {max-height: 130px;}
      &.chart--rsi .chart-container canvas,
      &.chart--macd .chart-container canvas {
        max-height: 100% !important;
        overflow: hidden;
      }
    }
  }
  &.small .charts-wrap {padding: 0.1rem;}
}
</style>
