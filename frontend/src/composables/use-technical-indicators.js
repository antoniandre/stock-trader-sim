import { ref, computed, watch } from 'vue'

const INDICATOR_PERIODS = { EMA: 20, RSI: 14, MACD: { fast: 12, slow: 26, signal: 9 } }

// Technical Indicators Composable
// --------------------------------------------------------
export function useTechnicalIndicators(ohlcData, volumeData) {
  const emaValues = ref([])
  const rsiValues = ref([])
  const macdValues = ref([])

  // EMA Calculation
  // --------------------------------------------------------
  function calculateEMA(prices, period = INDICATOR_PERIODS.EMA) {
    if (!prices || prices.length === 0) return []

    const ema = []
    const multiplier = 2 / (period + 1)
    let sum = 0

    for (let i = 0; i < Math.min(period, prices.length); i++) {
      sum += prices[i]
    }

    ema[period - 1] = sum / period

    for (let i = period; i < prices.length; i++) {
      ema[i] = (prices[i] - ema[i - 1]) * multiplier + ema[i - 1]
    }

    return ema
  }

  // RSI Calculation
  // --------------------------------------------------------
  function calculateRSI(prices, period = INDICATOR_PERIODS.RSI) {
    if (!prices || prices.length < period + 1) return []

    const changes = []
    for (let i = 1; i < prices.length; i++) {
      changes.push(prices[i] - prices[i - 1])
    }

    const gains = changes.map(change => change > 0 ? change : 0)
    const losses = changes.map(change => change < 0 ? Math.abs(change) : 0)

    let avgGain = gains.slice(0, period).reduce((sum, gain) => sum + gain, 0) / period
    let avgLoss = losses.slice(0, period).reduce((sum, loss) => sum + loss, 0) / period

    const rsi = []
    for (let i = period; i < changes.length; i++) {
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss
      rsi.push(100 - (100 / (1 + rs)))

      if (i < changes.length - 1) {
        avgGain = (avgGain * (period - 1) + gains[i]) / period
        avgLoss = (avgLoss * (period - 1) + losses[i]) / period
      }
    }

    return rsi
  }

  // MACD Calculation
  // --------------------------------------------------------
  function calculateMACD(prices, fast = INDICATOR_PERIODS.MACD.fast, slow = INDICATOR_PERIODS.MACD.slow, signal = INDICATOR_PERIODS.MACD.signal) {
    if (!prices || prices.length < slow) return { macd: [], signal: [], histogram: [] }

    const emaFast = calculateEMA(prices, fast)
    const emaSlow = calculateEMA(prices, slow)

    const macdLine = []
    for (let i = slow - 1; i < prices.length; i++) {
      macdLine.push(emaFast[i] - emaSlow[i])
    }

    const signalLine = calculateEMA(macdLine, signal)
    const histogram = []

    for (let i = 0; i < macdLine.length; i++) {
      if (signalLine[i] !== undefined) {
        histogram.push(macdLine[i] - signalLine[i])
      }
    }

    return { macd: macdLine, signal: signalLine, histogram }
  }

  // Data Processing
  // --------------------------------------------------------
  function updateIndicators() {
    if (!ohlcData.value || !Array.isArray(ohlcData.value) || ohlcData.value.length === 0) {
      emaValues.value = []
      rsiValues.value = []
      macdValues.value = { macd: [], signal: [], histogram: [] }
      return
    }

    const closePrices = ohlcData.value.map(d => d.close || d.price || 0).filter(price => price > 0)
    if (closePrices.length === 0) return

    emaValues.value = calculateEMA(closePrices)
    rsiValues.value = calculateRSI(closePrices)
    macdValues.value = calculateMACD(closePrices)
  }

  // Computed Chart Data
  // --------------------------------------------------------
  const emaChartData = computed(() => {
    if (!ohlcData.value || !ohlcData.value.timestamps || !Array.isArray(ohlcData.value.timestamps)) return null
    if (emaValues.value.length === 0) return null

    return {
      datasets: [{
        label: `EMA (${INDICATOR_PERIODS.EMA})`,
        data: ohlcData.value.timestamps.map((timestamp, i) => ({
          x: timestamp || Date.now(),
          y: emaValues.value[i] || null
        })).filter(point => point.y !== null),
        borderColor: '#F59E0B',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1
      }]
    }
  })

  const rsiChartData = computed(() => {
    if (!ohlcData.value || !ohlcData.value.timestamps || !Array.isArray(ohlcData.value.timestamps)) return null
    if (rsiValues.value.length === 0) return null

    const startIndex = INDICATOR_PERIODS.RSI
    return {
      datasets: [{
        label: 'RSI',
        data: ohlcData.value.timestamps.slice(startIndex).map((timestamp, i) => ({
          x: timestamp || Date.now(),
          y: rsiValues.value[i] || null
        })).filter(point => point.y !== null),
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      }]
    }
  })

  const macdChartData = computed(() => {
    if (!ohlcData.value || !ohlcData.value.timestamps || !Array.isArray(ohlcData.value.timestamps)) return null
    if (!macdValues.value.macd || macdValues.value.macd.length === 0) return null

    const startIndex = INDICATOR_PERIODS.MACD.slow - 1
    const timestamps = ohlcData.value.timestamps.slice(startIndex)

    return {
      datasets: [
        {
          label: 'MACD',
          data: timestamps.map((timestamp, i) => ({
            x: timestamp || Date.now(),
            y: macdValues.value.macd[i] || null
          })).filter(point => point.y !== null),
          borderColor: '#3B82F6',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 0,
          type: 'line'
        },
        {
          label: 'Signal',
          data: timestamps.map((timestamp, i) => ({
            x: timestamp || Date.now(),
            y: macdValues.value.signal[i] || null
          })).filter(point => point.y !== null),
          borderColor: '#EF4444',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 0,
          type: 'line'
        },
        {
          label: 'Histogram',
          data: timestamps.map((timestamp, i) => ({
            x: timestamp || Date.now(),
            y: macdValues.value.histogram[i] || null
          })).filter(point => point.y !== null),
          backgroundColor: 'rgba(34, 197, 94, 0.6)',
          borderColor: '#22C55E',
          borderWidth: 1,
          type: 'bar'
        }
      ]
    }
  })

  const volumeChartData = computed(() => {
    if (!ohlcData.value || !ohlcData.value.timestamps || !Array.isArray(ohlcData.value.timestamps)) return null
    if (!volumeData.value || !Array.isArray(volumeData.value)) return null

    return {
      datasets: [{
        label: 'Volume',
        data: ohlcData.value.timestamps.map((timestamp, i) => ({
          x: timestamp || Date.now(),
          y: volumeData.value[i] || 0
        })),
        backgroundColor: ohlcData.value.close && Array.isArray(ohlcData.value.close)
          ? volumeData.value.map((_, i) => {
              if (i === 0) return 'rgba(34, 197, 94, 0.6)'
              return ohlcData.value.close[i] > ohlcData.value.close[i - 1]
                ? 'rgba(34, 197, 94, 0.6)'
                : 'rgba(239, 68, 68, 0.6)'
            })
          : 'rgba(34, 197, 94, 0.6)',
        borderColor: 'transparent',
        borderWidth: 0
      }]
    }
  })

  // Current Values
  // --------------------------------------------------------
  const currentRSI = computed(() => {
    const rsi = rsiValues.value
    if (!rsi || rsi.length === 0) return null
    const lastValue = rsi[rsi.length - 1]
    return lastValue != null ? lastValue : null
  })

  const currentMACD = computed(() => {
    const macd = macdValues.value.macd
    if (!macd || macd.length === 0) return null
    const lastValue = macd[macd.length - 1]
    return lastValue != null ? lastValue : null
  })

  const currentSignal = computed(() => {
    const signal = macdValues.value.signal
    if (!signal || signal.length === 0) return null
    const lastValue = signal[signal.length - 1]
    return lastValue != null ? lastValue : null
  })

  const currentHistogram = computed(() => {
    const histogram = macdValues.value.histogram
    if (!histogram || histogram.length === 0) return null
    const lastValue = histogram[histogram.length - 1]
    return lastValue != null ? lastValue : null
  })

  // Watchers
  // --------------------------------------------------------
  watch([ohlcData, volumeData], updateIndicators, { deep: true, immediate: true })

  return {
    emaChartData,
    rsiChartData,
    macdChartData,
    volumeChartData,
    currentRSI,
    currentMACD,
    currentSignal,
    currentHistogram,
    updateIndicators
  }
}
