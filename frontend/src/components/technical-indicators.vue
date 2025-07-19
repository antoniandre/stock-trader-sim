<template lang="pug">
.indicators-panel
  .indicators-toolbar.w-flex.align-center.gap2.mb4
    w-button.indicator-btn(
      v-for="indicator in availableIndicators"
      :key="indicator.id"
      :class="{ 'indicator-btn--active': activeIndicators.includes(indicator.id) }"
      @click="toggleIndicator(indicator.id)"
      size="xs"
      :title="indicator.name")
      | {{ indicator.shortName }}

    .mla
      w-button.settings-btn(
        @click="showSettings = !showSettings"
        size="xs"
        icon="mdi:cog"
        title="Indicator Settings")

  .indicators-display(v-if="activeIndicators.length > 0")
    .indicator-row(
      v-for="indicator in activeIndicators"
      :key="indicator"
      :class="`indicator-row--${indicator}`")
      .indicator-values.w-flex.align-center.gap2.size--xs
        span.indicator-label {{ getIndicatorName(indicator) }}:
        span.indicator-value(
          v-for="(value, key) in getIndicatorValues(indicator)"
          :key="key"
          :class="getIndicatorValueClass(indicator, key, value)")
          | {{ key }}: {{ formatValue(value) }}

  w-modal(
    v-model="showSettings"
    title="Indicator Settings"
    width="500")
    .settings-content
      .setting-group(
        v-for="indicator in activeIndicators"
        :key="indicator")
        .setting-title {{ getIndicatorName(indicator) }}
        .setting-controls
          .w-flex.gap2(v-if="indicator === 'ma'")
            w-input(
              v-model="indicatorSettings.ma.period"
              label="Period"
              type="number"
              min="1"
              max="200")
            w-select(
              v-model="indicatorSettings.ma.type"
              :items="maTypes"
              label="Type")

          .w-flex.gap2(v-if="indicator === 'rsi'")
            w-input(
              v-model="indicatorSettings.rsi.period"
              label="Period"
              type="number"
              min="1"
              max="50")

          .w-flex.gap2(v-if="indicator === 'macd'")
            w-input(
              v-model="indicatorSettings.macd.fastPeriod"
              label="Fast Period"
              type="number"
              min="1"
              max="50")
            w-input(
              v-model="indicatorSettings.macd.slowPeriod"
              label="Slow Period"
              type="number"
              min="1"
              max="50")
            w-input(
              v-model="indicatorSettings.macd.signalPeriod"
              label="Signal Period"
              type="number"
              min="1"
              max="50")

          .w-flex.gap2(v-if="indicator === 'bb'")
            w-input(
              v-model="indicatorSettings.bb.period"
              label="Period"
              type="number"
              min="1"
              max="50")
            w-input(
              v-model="indicatorSettings.bb.deviation"
              label="Deviation"
              type="number"
              min="0.1"
              max="5"
              step="0.1")
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  data: { type: Array, required: true },
  currentPrice: { type: Number, default: 0 }
})

const emit = defineEmits(['indicators-updated'])

const activeIndicators = ref([])
const showSettings = ref(false)

const availableIndicators = [
  { id: 'ma', name: 'Moving Average', shortName: 'MA' },
  { id: 'rsi', name: 'Relative Strength Index', shortName: 'RSI' },
  { id: 'macd', name: 'MACD', shortName: 'MACD' },
  { id: 'bb', name: 'Bollinger Bands', shortName: 'BB' },
  { id: 'volume', name: 'Volume', shortName: 'VOL' }
]

const maTypes = [
  { label: 'Simple (SMA)', value: 'sma' },
  { label: 'Exponential (EMA)', value: 'ema' },
  { label: 'Weighted (WMA)', value: 'wma' }
]

const indicatorSettings = ref({
  ma: {
    period: 20,
    type: 'sma'
  },
  rsi: {
    period: 14
  },
  macd: {
    fastPeriod: 12,
    slowPeriod: 26,
    signalPeriod: 9
  },
  bb: {
    period: 20,
    deviation: 2
  }
})

const calculatedIndicators = computed(() => {
  const indicators = {}

  if (props.data.length < 2) return indicators

  // Calculate Moving Average
  if (activeIndicators.value.includes('ma')) {
    indicators.ma = calculateMovingAverage(props.data, indicatorSettings.value.ma.period, indicatorSettings.value.ma.type)
  }

  // Calculate RSI
  if (activeIndicators.value.includes('rsi')) {
    indicators.rsi = calculateRSI(props.data, indicatorSettings.value.rsi.period)
  }

  // Calculate MACD
  if (activeIndicators.value.includes('macd')) {
    indicators.macd = calculateMACD(props.data, indicatorSettings.value.macd)
  }

  // Calculate Bollinger Bands
  if (activeIndicators.value.includes('bb')) {
    indicators.bb = calculateBollingerBands(props.data, indicatorSettings.value.bb.period, indicatorSettings.value.bb.deviation)
  }

  // Calculate Volume (if available)
  if (activeIndicators.value.includes('volume') && props.data.some(item => item.volume)) {
    indicators.volume = calculateVolumeIndicator(props.data)
  }

  return indicators
})

function toggleIndicator(indicatorId) {
  const index = activeIndicators.value.indexOf(indicatorId)
  if (index > -1) activeIndicators.value.splice(index, 1)
  else activeIndicators.value.push(indicatorId)
}

function getIndicatorName(indicatorId) {
  const indicator = availableIndicators.find(i => i.id === indicatorId)
  return indicator ? indicator.name : indicatorId
}

function getIndicatorValues(indicatorId) {
  const indicator = calculatedIndicators.value[indicatorId]
  if (!indicator || !indicator.length) return {}

  const latest = indicator[indicator.length - 1]

  switch (indicatorId) {
    case 'ma':
      return { MA: latest.value }
    case 'rsi':
      return { RSI: latest.value }
    case 'macd':
      return {
        MACD: latest.macd,
        Signal: latest.signal,
        Histogram: latest.histogram
      }
    case 'bb':
      return {
        Upper: latest.upper,
        Middle: latest.middle,
        Lower: latest.lower
      }
    case 'volume':
      return { Volume: latest.volume }
    default:
      return {}
  }
}

function getIndicatorValueClass(indicatorId, key, value) {
  if (indicatorId === 'rsi') {
    if (value > 70) return 'error'
    if (value < 30) return 'success'
    return 'info'
  }

  if (indicatorId === 'macd' && key === 'Histogram') {
    return value > 0 ? 'success' : 'error'
  }

  return 'info'
}

function formatValue(value) {
  if (typeof value !== 'number') return value
  return value.toFixed(2)
}

// Technical Analysis Calculation Functions
function calculateMovingAverage(data, period, type) {
  const result = []

  for (let i = period - 1; i < data.length; i++) {
    let value = 0

    if (type === 'sma') {
      // Simple Moving Average
      let sum = 0
      for (let j = 0; j < period; j++) {
        sum += (data[i - j].close || data[i - j].price)
      }
      value = sum / period
    }
    else if (type === 'ema') {
      // Exponential Moving Average
      const multiplier = 2 / (period + 1)
      if (i === period - 1) {
        // First EMA value is SMA
        let sum = 0
        for (let j = 0; j < period; j++) {
          sum += (data[i - j].close || data[i - j].price)
        }
        value = sum / period
      }
      else {
        const prevEMA = result[result.length - 1].value
        const currentPrice = data[i].close || data[i].price
        value = (currentPrice * multiplier) + (prevEMA * (1 - multiplier))
      }
    }
    else if (type === 'wma') {
      // Weighted Moving Average
      let sum = 0
      let weightSum = 0
      for (let j = 0; j < period; j++) {
        const weight = period - j
        sum += (data[i - j].close || data[i - j].price) * weight
        weightSum += weight
      }
      value = sum / weightSum
    }

    result.push({ timestamp: data[i].timestamp, value: value })
  }

  return result
}

function calculateRSI(data, period) {
  const result = []

  if (data.length < period + 1) return result

  // Calculate price changes
  const priceChanges = []
  for (let i = 1; i < data.length; i++) {
    const currentPrice = data[i].close || data[i].price
    const previousPrice = data[i - 1].close || data[i - 1].price
    priceChanges.push(currentPrice - previousPrice)
  }

  // Calculate initial average gains and losses.
  let averageGain = 0
  let averageLoss = 0

  for (let i = 0; i < period; i++) {
    averageLoss += priceChanges[i] > 0 ? priceChanges[i] : Math.abs(priceChanges[i]) }

  averageGain /= period
  averageLoss /= period

  // Calculate RSI for each point.
  for (let i = period; i < priceChanges.length; i++) {
    if (i > period) {
      // Use smoothed averages.
      const currentChange = priceChanges[i]
      const gain = currentChange > 0 ? currentChange : 0
      const loss = currentChange < 0 ? Math.abs(currentChange) : 0

      averageGain = (averageGain * (period - 1) + gain) / period
      averageLoss = (averageLoss * (period - 1) + loss) / period
    }

    const rs = averageGain / averageLoss
    const rsi = 100 - (100 / (1 + rs))

    result.push({
      timestamp: data[i + 1].timestamp,
      value: rsi
    })
  }

  return result
}

function calculateMACD(data, settings) {
  const result = []
  const { fastPeriod, slowPeriod, signalPeriod } = settings

  // Calculate fast and slow EMAs
  const fastEMA = calculateMovingAverage(data, fastPeriod, 'ema')
  const slowEMA = calculateMovingAverage(data, slowPeriod, 'ema')

  // Calculate MACD line
  const macdLine = []
  const startIndex = Math.max(fastEMA.length, slowEMA.length) - Math.min(fastEMA.length, slowEMA.length)

  for (let i = startIndex; i < Math.min(fastEMA.length, slowEMA.length); i++) {
    const fastIndex = i + (fastEMA.length - slowEMA.length)
    const slowIndex = i

    if (fastIndex >= 0 && slowIndex >= 0) {
      macdLine.push({
        timestamp: slowEMA[slowIndex].timestamp,
        value: fastEMA[fastIndex].value - slowEMA[slowIndex].value
      })
    }
  }

  // Calculate signal line (EMA of MACD)
  const signalLine = calculateMovingAverage(macdLine, signalPeriod, 'ema')

  // Calculate histogram
  for (let i = 0; i < signalLine.length; i++) {
    const macdIndex = i + (macdLine.length - signalLine.length)
    if (macdIndex >= 0) {
      result.push({
        timestamp: signalLine[i].timestamp,
        macd: macdLine[macdIndex].value,
        signal: signalLine[i].value,
        histogram: macdLine[macdIndex].value - signalLine[i].value
      })
    }
  }

  return result
}

function calculateBollingerBands(data, period, deviation) {
  const result = []
  const sma = calculateMovingAverage(data, period, 'sma')

  for (let i = 0; i < sma.length; i++) {
    const dataIndex = i + (data.length - sma.length)

    // Calculate standard deviation
    let sum = 0
    for (let j = 0; j < period; j++) {
      const price = data[dataIndex - j].close || data[dataIndex - j].price
      sum += Math.pow(price - sma[i].value, 2)
    }
    const stdDev = Math.sqrt(sum / period)

    result.push({
      timestamp: sma[i].timestamp,
      upper: sma[i].value + (deviation * stdDev),
      middle: sma[i].value,
      lower: sma[i].value - (deviation * stdDev)
    })
  }

  return result
}

function calculateVolumeIndicator(data) {
  return data.map(item => ({
    timestamp: item.timestamp,
    volume: item.volume || 0
  }))
}

// Watch for changes and emit updates
watch(calculatedIndicators, (newIndicators) => {
  emit('indicators-updated', newIndicators)
}, { deep: true })

watch(activeIndicators, () => {
  emit('indicators-updated', calculatedIndicators.value)
}, { deep: true })
</script>

<style lang="scss" scoped>
.indicators-panel {
  .indicators-toolbar {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .indicator-btn {
    font-size: 11px;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &--active {
      background: rgba(59, 130, 246, 0.2);
      border-color: rgba(59, 130, 246, 0.4);
      color: #3B82F6;
    }
  }

  .indicators-display {
    margin-top: 0.5rem;
  }

  .indicator-row {
    margin-bottom: 0.25rem;
    padding: 0.25rem 0;

    .indicator-label {
      font-weight: 600;
      opacity: 0.8;
    }

    .indicator-value {
      font-family: monospace;
      font-size: 10px;
      padding: 2px 4px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.05);

      &.success {
        color: #10B981;
        background: rgba(16, 185, 129, 0.1);
      }

      &.error {
        color: #EF4444;
        background: rgba(239, 68, 68, 0.1);
      }

      &.info {
        color: #3B82F6;
        background: rgba(59, 130, 246, 0.1);
      }
    }
  }
}

.settings-content {
  .setting-group {
    margin-bottom: 1rem;

    .setting-title {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
