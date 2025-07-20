<template lang="pug">
.stats-panel
  .panel-header
    .title2 Stats
    .see-all-btn See all

  .stats-content
    //- 1 Day Range Card
    .range-card
      .period-label 1 DAY
      .range-visualization
        .range-track
          .range-bar(:style="{ width: '75%', backgroundColor: '#22C55E' }")
          .current-position(:style="{ left: '60%' }")
      .range-values
        .range-high
          .label High
          .value {{ formatPrice(dayHigh) }}
        .range-low
          .label Low
          .value {{ formatPrice(dayLow) }}

    //- 52 Week Range Card
    .range-card
      .period-label 52 WEEKS
      .range-visualization
        .range-track
          .range-bar(:style="{ width: '85%', backgroundColor: '#EF4444' }")
          .current-position(:style="{ left: '45%' }")
      .range-values
        .range-high
          .label High
          .value {{ formatPrice(weekHigh) }}
        .range-low
          .label Low
          .value {{ formatPrice(weekLow) }}

    //- Financial Metrics
    .metrics-list
      .metric-row(v-for="metric in financialMetrics" :key="metric.label")
        .metric-label.op5 {{ metric.label }}
        .metric-value(:class="metric.colorClass") {{ metric.value }}
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stock: { type: Object, required: true },
  currentPrice: { type: Number, default: 0 },
  currencySymbol: { type: String, default: '$' }
})

// Calculate price ranges.
const currentPrice = computed(() => props.currentPrice || props.stock.price || 0)
// Mock high.
const dayHigh = computed(() => currentPrice.value > 0 ? currentPrice.value * 1.034 : 0)
// Mock low.
const dayLow = computed(() => currentPrice.value > 0 ? currentPrice.value * 0.977 : 0)
// Mock 52-week high.
const weekHigh = computed(() => currentPrice.value > 0 ? currentPrice.value * 5.23 : 0)
// Mock 52-week low.
const weekLow = computed(() => currentPrice.value > 0 ? currentPrice.value * 0.558 : 0)

const formatPrice = (price) => {
  if (price === 0) return '$0.0000'
  return '$' + price.toFixed(4)
}

// Financial metrics exactly as shown in image.
const financialMetrics = computed(() => [
  { label: 'VOLATILITY', value: 'High', colorClass: '' },
  { label: 'MARKET CAP', value: '$1.74M', colorClass: '' },
  { label: 'AVERAGE VOLUME', value: '141M', colorClass: '' },
  { label: 'P/E RATIO', value: '-0.05', colorClass: 'error' },
  { label: 'DIVIDEND YIELD', value: '0.00%', colorClass: '' }
])
</script>

<style lang="scss" scoped>
.stats-panel {
  overflow: hidden;

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 16px 24px;

    .see-all-btn {
      color: #6366F1;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;

      &:hover {text-decoration: underline;}
    }
  }

  .stats-content {
    padding: 0 24px 24px 24px;

    .range-card {
      background: var(--w-base-bg-color);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;

      &:last-of-type {margin-bottom: 24px;}

      .period-label {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 16px;
        letter-spacing: 0.5px;
      }

      .range-visualization {
        position: relative;
        margin-bottom: 16px;
        height: 24px;

        .range-track {
          position: relative;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          top: 9px;
        }

        .range-bar {
          height: 6px;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .current-position {
          position: absolute;
          top: -4px;
          width: 12px;
          height: 14px;
          background: var(--w-contrast-bg-color);
          border-radius: 2px;
          transform: translateX(-50%);

          &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid var(--w-contrast-bg-color);
          }
        }
      }

      .range-values {
        display: flex;
        justify-content: space-between;

        .range-high,
        .range-low {
          .label {
            color: #9CA3AF;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 4px;
          }

          .value {
            font-size: 14px;
            font-weight: 700;
          }
        }
      }
    }

    .metrics-list {
      .metric-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);

        &:last-child {border-bottom: none;}

        .metric-label {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
