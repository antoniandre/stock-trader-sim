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
import CandlestickChart from './candlestick-chart.vue'
import DrawingTools from './drawing-tools.vue'
import { ref, computed } from 'vue'
import { useTechnicalIndicators } from '@/composables/use-technical-indicators'

// Register zoom plugin
Chart.register(zoomPlugin)

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
  'change-timeframe'
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

// Extract OHLC data from props for indicators
const ohlcData = computed(() => {
  if (props.chartType === 'line') {
    // Convert line data to OHLC format
    if (!props.lineChartData?.datasets?.[0]?.data) return []

    return props.lineChartData.datasets[0].data.map(point => ({
      timestamp: point.x,
      price: point.y,
      open: point.y,
      high: point.y,
      low: point.y,
      close: point.y,
      volume: 1000000 // Default volume for line charts
    }))
  }
  else {
    // Use candlestick data
    if (!props.candlestickChartData?.datasets?.[0]?.data) return []

    return props.candlestickChartData.datasets[0].data.map(point => ({
      timestamp: point.x,
      open: point.o,
      high: point.h,
      low: point.l,
      close: point.c,
      price: point.c,
      volume: Math.random() * 10000000 // Mock volume data - replace with real volume
    }))
  }
})

// Initialize technical indicators
const indicators = useTechnicalIndicators(ohlcData)

// Current indicator values for display
const currentRSI = computed(() => {
  const rsi = indicators.rsi.value
  if (!rsi || !rsi.length) return '--'
  const lastValue = rsi[rsi.length - 1]
  return (lastValue != null) ? lastValue.toFixed(2) : '--'
})

const currentRSISMA = computed(() => {
  const rsiSMA = indicators.rsiSMA.value
  if (!rsiSMA || !rsiSMA.length) return '--'
  const lastValue = rsiSMA[rsiSMA.length - 1]
  return (lastValue != null) ? lastValue.toFixed(2) : '--'
})

const currentMACD = computed(() => {
  const macd = indicators.macd.value?.MACD
  if (!macd || !macd.length) return '--'
  const lastValue = macd[macd.length - 1]
  return (lastValue != null) ? lastValue.toFixed(4) : '--'
})

const currentSignal = computed(() => {
  const signal = indicators.macd.value?.signal
  if (!signal || !signal.length) return '--'
  const lastValue = signal[signal.length - 1]
  return (lastValue != null) ? lastValue.toFixed(4) : '--'
})

const currentHistogram = computed(() => {
  const histogram = indicators.macd.value?.histogram
  if (!histogram || !histogram.length) return '--'
  const lastValue = histogram[histogram.length - 1]
  return (lastValue != null) ? lastValue.toFixed(4) : '--'
})

// Enhanced chart data with indicators
const enhancedLineChartData = computed(() => {
  if (!props.lineChartData || !props.lineChartData.datasets) {
    return { datasets: [] }
  }

  const baseData = { ...props.lineChartData }
  const datasets = [...baseData.datasets]

  // Add EMA overlays
  if (showEMA.value && indicators.ema20.value && indicators.ema20.value.length &&
      indicators.prices.value.timestamps && indicators.prices.value.timestamps.length) {
    const emaOffset20 = indicators.prices.value.close.length - indicators.ema20.value.length

    datasets.push({
      label: 'EMA 20',
      data: indicators.ema20.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index + emaOffset20] || Date.now(),
        y: value
      })),
      borderColor: '#F59E0B',
      backgroundColor: '#F59E0B',
      borderWidth: 2,
      fill: false,
      pointRadius: 0
    })
  }

  if (showEMA.value && indicators.ema50.value && indicators.ema50.value.length &&
      indicators.prices.value.timestamps && indicators.prices.value.timestamps.length) {
    const emaOffset50 = indicators.prices.value.close.length - indicators.ema50.value.length
    datasets.push({
      label: 'EMA 50',
      data: indicators.ema50.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index + emaOffset50] || Date.now(),
        y: value
      })),
      borderColor: '#8B5CF6',
      backgroundColor: '#8B5CF6',
      borderWidth: 2,
      fill: false,
      pointRadius: 0
    })
  }

  if (showEMA.value && indicators.ema200.value && indicators.ema200.value.length &&
      indicators.prices.value.timestamps && indicators.prices.value.timestamps.length) {
    const emaOffset200 = indicators.prices.value.close.length - indicators.ema200.value.length
    datasets.push({
      label: 'EMA 200',
      data: indicators.ema200.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index + emaOffset200] || Date.now(),
        y: value
      })),
      borderColor: '#EF4444',
      backgroundColor: '#EF4444',
      borderWidth: 2,
      fill: false,
      pointRadius: 0
    })
  }

  // Add VWAP overlay
  if (showVWAP.value && indicators.vwap.value && indicators.vwap.value.length &&
      indicators.prices.value.timestamps && indicators.prices.value.timestamps.length) {
    datasets.push({
      label: 'VWAP',
      data: indicators.vwap.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index] || Date.now(),
        y: value
      })),
      borderColor: '#10B981',
      backgroundColor: '#10B981',
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      borderDash: [5, 5]
    })
  }

  return { datasets }
})

const enhancedCandlestickChartData = computed(() => {
  if (!props.candlestickChartData || !props.candlestickChartData.datasets) {
    return { datasets: [] }
  }

  const baseData = { ...props.candlestickChartData }
  const datasets = [...baseData.datasets]

  // Add same indicators as line chart
  if (showEMA.value &&
      indicators.ema20.value && Array.isArray(indicators.ema20.value) && indicators.ema20.value.length &&
      indicators.prices.value && indicators.prices.value.timestamps &&
      Array.isArray(indicators.prices.value.timestamps) && indicators.prices.value.timestamps.length &&
      indicators.prices.value.close && Array.isArray(indicators.prices.value.close)) {
    const emaOffset20 = indicators.prices.value.close.length - indicators.ema20.value.length

    datasets.push({
      label: 'EMA 20',
      type: 'line',
      data: indicators.ema20.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index + emaOffset20] || Date.now(),
        y: value
      })),
      borderColor: '#F59E0B',
      backgroundColor: '#F59E0B',
      borderWidth: 2,
      fill: false,
      pointRadius: 0
    })
  }

  if (showEMA.value &&
      indicators.ema50.value && Array.isArray(indicators.ema50.value) && indicators.ema50.value.length &&
      indicators.prices.value && indicators.prices.value.timestamps &&
      Array.isArray(indicators.prices.value.timestamps) && indicators.prices.value.timestamps.length &&
      indicators.prices.value.close && Array.isArray(indicators.prices.value.close)) {
    const emaOffset50 = indicators.prices.value.close.length - indicators.ema50.value.length
    datasets.push({
      label: 'EMA 50',
      type: 'line',
      data: indicators.ema50.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index + emaOffset50] || Date.now(),
        y: value
      })),
      borderColor: '#8B5CF6',
      backgroundColor: '#8B5CF6',
      borderWidth: 2,
      fill: false,
      pointRadius: 0
    })
  }

  if (showEMA.value &&
      indicators.ema200.value && Array.isArray(indicators.ema200.value) && indicators.ema200.value.length &&
      indicators.prices.value && indicators.prices.value.timestamps &&
      Array.isArray(indicators.prices.value.timestamps) && indicators.prices.value.timestamps.length &&
      indicators.prices.value.close && Array.isArray(indicators.prices.value.close)) {
    const emaOffset200 = indicators.prices.value.close.length - indicators.ema200.value.length
    datasets.push({
      label: 'EMA 200',
      type: 'line',
      data: indicators.ema200.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index + emaOffset200] || Date.now(),
        y: value
      })),
      borderColor: '#EF4444',
      backgroundColor: '#EF4444',
      borderWidth: 2,
      fill: false,
      pointRadius: 0
    })
  }

  // Add VWAP overlay
  if (showVWAP.value &&
      indicators.vwap.value && Array.isArray(indicators.vwap.value) && indicators.vwap.value.length &&
      indicators.prices.value && indicators.prices.value.timestamps &&
      Array.isArray(indicators.prices.value.timestamps) && indicators.prices.value.timestamps.length) {
    datasets.push({
      label: 'VWAP',
      type: 'line',
      data: indicators.vwap.value.map((value, index) => ({
        x: indicators.prices.value.timestamps[index] || Date.now(),
        y: value
      })),
      borderColor: '#10B981',
      backgroundColor: '#10B981',
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
      borderDash: [5, 5]
    })
  }

  return { datasets }
})

// Chart options for indicator panels
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
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: {
        color: '#C9D1D9',
        stepSize: 25,
        callback: (value) => value === 30 || value === 70 ? value : ''
      }
    }
  },
  // Add horizontal lines at 30 and 70
  plugins: [{
    afterDraw: (chart) => {
      const ctx = chart.ctx
      const chartArea = chart.chartArea
      ctx.strokeStyle = '#6B7280'
      ctx.setLineDash([5, 5])
      ctx.lineWidth = 1

      // 70 line
      const y70 = chart.scales.y.getPixelForValue(70)
      ctx.beginPath()
      ctx.moveTo(chartArea.left, y70)
      ctx.lineTo(chartArea.right, y70)
      ctx.stroke()

      // 30 line
      const y30 = chart.scales.y.getPixelForValue(30)
      ctx.beginPath()
      ctx.moveTo(chartArea.left, y30)
      ctx.lineTo(chartArea.right, y30)
      ctx.stroke()

      ctx.setLineDash([])
    }
  }]
}))

const macdChartOptions = computed(() => ({
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
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: { color: '#C9D1D9', maxTicksLimit: 4 }
    }
  }
}))

// Methods used in template - emit events to parent
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
  // Reset zoom for both chart types.
  if (props.chartType === 'line' && lineChartRef.value?.chart) {
    lineChartRef.value.chart.resetZoom()
  } else if (props.chartType === 'candlestick' && candleChartRef.value?.chart) {
    candleChartRef.value.chart().resetZoom()
  }
}

// Expose refs and methods for parent access if needed
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

  // Enhanced chart styling - override some properties but keep height
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
