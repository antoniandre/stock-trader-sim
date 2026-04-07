<template lang="pug">
.stats-panel
  .title2.mb4 Stats

  .stats-content.w-flex.gap4
    //- 1 Day Range Card
    .range-card.gradient-card.gradient-card--tall.grow
      .gradient-card__wrap
        .period-label.mb3 1 DAY
        .w-flex
          .range-visualization
            .range-track
              .range-fill(:style="{ height: dayRange.fill + '%', backgroundColor: '#22C55E' }")
              .current-position(:style="{ top: (100 - dayRange.fill) + '%' }")
          .range-values
            .range-high
              .size--xs.op6 High
              .value.lh0(v-html="formatCurrency(dayRange.high, undefined, 2, false)")
            .range-low.mt2
              .size--xs.op6 Low
              .value.lh0(v-html="formatCurrency(dayRange.low, undefined, 2, false)")

    //- 52 Week Range Card
    .range-card.gradient-card.gradient-card--tall.grow
      .gradient-card__wrap
        .period-label.mb3 52 WEEKS
        .w-flex
          .range-visualization
            .range-track
              .range-fill(:style="{ height: weekRange.fill + '%', backgroundColor: '#EF4444' }")
              .current-position(:style="{ top: (100 - weekRange.fill) + '%' }")
          .range-values
            .range-high
              .size--xs.op6 High
              .value.lh0(v-html="formatCurrency(weekRange.high, undefined, 2, false)")
            .range-low.mt2
              .size--xs.op6 Low
              .value.lh0(v-html="formatCurrency(weekRange.low, undefined, 2, false)")

  //- Financial Metrics
  .metrics-list.mt4.text-upper
    .metric-row
      .op5.size--sm Exchange
      w-tag.size--md.bd0.px2.py1(
        v-if="stock.exchange"
        :bg-color="$waveui.theme === 'dark' ? 'info-dark5' : 'info-light5'"
        round
        xs)
        .w-icon.mr1.size--xs(:class="$waveui.theme === 'dark' ? 'primary-dark2--bg' : 'primary--bg'")
        | {{ stock.exchange }}
    .metric-row(v-for="metric in financialMetrics" :key="metric.label")
      .op5.size--sm {{ metric.label }}
      strong.size--md(:class="metric.colorClass") {{ metric.value }}
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency, formatVolumeWithSuffixes } from '@/utils/formatters'

const props = defineProps({
  stock: { type: Object, required: true },
  currentPrice: { type: Number, default: 0 },
  currencySymbol: { type: String, default: '$' },
  historicalData: { type: Array, default: () => [] }, // Long-term daily data for 52-week ranges.
  intradayData: { type: Array, default: () => [] }, // Intraday data for current period (1-day ranges).
  priceHistory: { type: Array, default: () => [] }
})

// Get currency information.
const currency = computed(() => props.stock.currency || 'USD')
const currencySymbol = computed(() => props.currencySymbol || props.stock.currencySymbol || '$')

// Calculate price ranges from real data.
const currentPrice = computed(() => ({
  value: props.currentPrice || props.stock.price || 0,
  currency: currency.value,
  currencySymbol: currencySymbol.value
}))

// Day range data organized semantically.
const dayRange = computed(() => {
  // Calculate 1-day high/low using intraday data + real-time updates.
  const stats = (() => {
    // Get today's date in YYYY-MM-DD format.
    const today = new Date().toISOString().split('T')[0]
    const todayStart = new Date(today).getTime()

    // Use intraday data (from current chart) filtered for today.
    const todayIntradayData = props.intradayData.filter(item => {
      const itemTime = new Date(item.timestamp).getTime()
      return itemTime >= todayStart
    })

    // Include all real-time updates from today.
    const todayRealTime = props.priceHistory.filter(item => {
      const itemTime = new Date(item.timestamp).getTime()
      return itemTime >= todayStart
    })

    // Combine intraday + real-time data.
    const allTodayData = [...todayIntradayData, ...todayRealTime]

    // If no data available, try to get at least some recent data from any source.
    if (allTodayData.length === 0) {
      // Fallback to recent intraday data regardless of date.
      const recentData = [...props.intradayData.slice(-10), ...props.priceHistory.slice(-5)]

      if (recentData.length === 0) {
        return {
          high: currentPrice.value.value,
          low: currentPrice.value.value
        }
      }

      // Use recent data as fallback.
      const fallbackPrices = []
      recentData.forEach(item => {
        if (item.price > 0) fallbackPrices.push(item.price)
        if (item.close > 0) fallbackPrices.push(item.close)
        if (item.open > 0) fallbackPrices.push(item.open)
        if (item.high > 0) fallbackPrices.push(item.high)
        if (item.low > 0) fallbackPrices.push(item.low)
      })

      fallbackPrices.push(currentPrice.value.value)
      const validPrices = fallbackPrices.filter(p => p > 0)

      return {
        high: validPrices.length > 0 ? Math.max(...validPrices) : currentPrice.value.value,
        low: validPrices.length > 0 ? Math.min(...validPrices) : currentPrice.value.value
      }
    }

    // Extract all price points from today's data.
    const allPrices = []
    allTodayData.forEach(item => {
      // Add main price.
      const mainPrice = item.price || item.close
      if (mainPrice > 0) allPrices.push(mainPrice)

      // Add OHLC values if available (important for intraday ranges).
      if (item.open > 0) allPrices.push(item.open)
      if (item.high > 0) allPrices.push(item.high)
      if (item.low > 0) allPrices.push(item.low)
      if (item.close > 0) allPrices.push(item.close)
    })

    // Include current price.
    allPrices.push(currentPrice.value.value)

    const validPrices = allPrices.filter(p => p > 0)

    return {
      high: validPrices.length ? Math.max(...validPrices) : currentPrice.value.value,
      low: validPrices.length ? Math.min(...validPrices) : currentPrice.value.value
    }
  })()

  const high = stats.high
  const low = stats.low

  const range = high - low
  const fill = range === 0 ? 50 : Math.max(0, Math.min(100, ((currentPrice.value.value - low) / range) * 100))

  return {
    stats,
    high: { value: high, currency: currency.value, currencySymbol: currencySymbol.value },
    low: { value: low, currency: currency.value, currencySymbol: currencySymbol.value },
    fill
  }
})

// Week range data organized semantically.
const weekRange = computed(() => {
  // Calculate 52-week high/low from all available historical data.
  const stats = (() => {
    // Use all available historical data as approximation for 52-week range.
    const allData = [...props.historicalData, ...props.priceHistory]

    if (allData.length === 0) {
      return {
        high: currentPrice.value.value,
        low: currentPrice.value.value
      }
    }

    // Get all price points including OHLC values.
    const allPrices = []
    allData.forEach(item => {
      // Add main price.
      const mainPrice = item.price || item.close
      if (mainPrice > 0) allPrices.push(mainPrice)

      // Add OHLC values if available.
      if (item.open > 0) allPrices.push(item.open)
      if (item.high > 0) allPrices.push(item.high)
      if (item.low > 0) allPrices.push(item.low)
      if (item.close > 0) allPrices.push(item.close)
    })

    // Include current price.
    allPrices.push(currentPrice.value.value)

    const validPrices = allPrices.filter(p => p > 0)

    return {
      high: Math.max(...validPrices),
      low: Math.min(...validPrices)
    }
  })()

  const high = stats.high
  const low = stats.low

  const range = high - low
  const fill = range === 0 ? 50 : Math.max(0, Math.min(100, ((currentPrice.value.value - low) / range) * 100))

  return {
    stats,
    high: { value: high, currency: currency.value, currencySymbol: currencySymbol.value },
    low: { value: low, currency: currency.value, currencySymbol: currencySymbol.value },
    fill
  }
})

// Financial calculations organized semantically.
const financial = computed(() => {
  const calculateVolume = () => {
    if (!props.historicalData || props.historicalData.length === 0) return 'N/A'

    const volumes = props.historicalData
      .filter(item => item.volume && item.volume > 0)
      .map(item => item.volume)

    if (volumes.length === 0) return 'N/A'

    const avgVolume = volumes.reduce((sum, vol) => sum + vol, 0) / volumes.length
    return formatVolumeWithSuffixes(avgVolume)
  }

  const calculateMarketCap = () => {
    return 'N/A'
  }

  // Calculate volatility from price data.
  const calculateVolatility = () => {
    if (!props.historicalData || props.historicalData.length < 2) return 'N/A'

    const prices = props.historicalData.map(item => item.close || item.price)
    const returns = []

    for (let i = 1; i < prices.length; i++) {
      const dailyReturn = (prices[i] - prices[i-1]) / prices[i-1]
      returns.push(dailyReturn)
    }

    if (returns.length === 0) return 'N/A'

    const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length
    const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length
    const volatility = Math.sqrt(variance) * Math.sqrt(252) * 100 // Annualized volatility.

    return volatility.toFixed(1) + '%'
  }

  // Financial metrics with real/calculated data where possible.
  const metrics = [
    { label: 'VOLATILITY', value: calculateVolatility(), colorClass: '' },
    { label: 'MARKET CAP', value: calculateMarketCap(), colorClass: '' },
    { label: 'AVERAGE VOLUME', value: calculateVolume(), colorClass: '' },
    { label: 'P/E RATIO', value: 'N/A', colorClass: '' },
    { label: 'DIVIDEND YIELD', value: 'N/A', colorClass: '' }
  ]

  return { volume: calculateVolume, marketCap: calculateMarketCap, volatility: calculateVolatility, metrics }
})

// Expose financial metrics for template.
const financialMetrics = computed(() => financial.value.metrics)
</script>

<style lang="scss" scoped>
.stats-content {
  .range-card .gradient-card__wrap {
    border-radius: 12px;
    padding: 20px 24px 24px;

    .period-label {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .range-visualization {
      position: relative;
      width: 24px;

      .range-track {
        position: relative;
        width: 6px;
        height: 100%;
        background: color-mix(in srgb, var(--w-contrast-bg-color) 12%, transparent);
        border-radius: 3px;
        left: 2px;
      }

      .range-fill {
        position: absolute;
        bottom: 0;
        width: 6px;
        border-radius: 3px;
        transition: height 0.3s ease;
      }

      .current-position {
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 7px solid var(--w-contrast-bg-color);
        border-radius: 2px;
      }
    }

    .range-values {
      .range-high .value,
      .range-low .value {
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
    padding: 6px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 5%, transparent);

    &:last-child {border-bottom: none;}
  }
}
</style>
