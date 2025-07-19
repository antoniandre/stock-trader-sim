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

  //- Chart Display
  .chart.w-flex.column.align-center.justify-center(:class="`chart--${chartType}`")
    //- Loading state
    .w-flex.column.align-center.justify-center(v-if="isLoadingHistoricalData")
      w-progress.mb4(circle)
      span.text-info Loading chart data...

    //- Charts
    .chart-content.tradingview-chart(v-else ref="chartContainer" style="position: relative;")
      Line(
        v-if="chartType === 'line'"
        ref="lineChartRef"
        :data="lineChartData"
        :options="lineChartOptions")
      CandlestickChart(
        v-else
        ref="candleChartRef"
        :data="candlestickChartData"
        :options="candlestickChartOptions")

      //- Drawing Tools Overlay (positioned inside chart container)
      DrawingTools(
        v-if="!isLoadingHistoricalData"
        :chart-container="chartContainer")

    //- Chart Controls
    .chart-controls-helper.w-flex.align-center.gap2.size--xs(v-if="!isLoadingHistoricalData")
      span.op6 Mouse wheel to zoom • Click &amp; drag to pan
      w-button.pa0.op8(
        width="16"
        height="16"
        @click="resetZoom"
        tooltip="Reset Zoom"
        :tooltip-props="{ sm: true }"
        round)
        icon.w-icon(icon="mdi:refresh" style="width: 12px")
</template>

<script setup>
// This component will receive the chart-related state and methods from the parent
// All the logic remains in ticker.vue for now, just the template is separated

// Since we're just moving the template, we need to define props for the data we need
const props = defineProps({
  chartType: { type: String, required: true },
  selectedPeriod: { type: String, required: true },
  selectedTimeframe: { type: String, required: true },
  chartPeriods: { type: Array, required: true },
  availableTimeframes: { type: Array, required: true },
  isLoadingHistoricalData: { type: Boolean, required: true },
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

// Import Chart.js dependencies
import { Line } from 'vue-chartjs'
import { Chart } from 'chart.js'
import 'chart.js/auto'
import 'chartjs-chart-financial'
import 'chartjs-adapter-luxon'
import zoomPlugin from 'chartjs-plugin-zoom'
import CandlestickChart from './candlestick-chart.vue'
import DrawingTools from './drawing-tools.vue'
import { ref } from 'vue'

// Register zoom plugin
Chart.register(zoomPlugin)

// Template refs
const chartContainer = ref(null)
const lineChartRef = ref(null)
const candleChartRef = ref(null)

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

    .chart-content {
      height: 100%;
      width: 100%;
    }
  }

  // Enhanced chart styling - override some properties but keep height
  .chart--line, .chart--candlestick {
    padding: 0;
    background: transparent;
    border: none;
  }

  // Responsive enhancements
  @media (max-width: 768px) {
    .chart {
      &--line, &--candlestick {height: 350px;}
    }
  }
}
</style>
