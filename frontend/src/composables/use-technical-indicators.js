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
    if (!prices || prices.length === 0 || prices.length < period) {
      return []
    }

    const ema = []
    const multiplier = 2 / (period + 1)

    // Start with Simple Moving Average for the first value.
    let sum = 0
    for (let i = 0; i < period; i++) {
      sum += prices[i]
    }
    ema[0] = sum / period

    // Calculate EMA for the remaining values.
    for (let i = 1; i < prices.length - period + 1; i++) {
      const currentPrice = prices[i + period - 1]
      const prevEMA = ema[i - 1]
      ema[i] = (currentPrice * multiplier) + (prevEMA * (1 - multiplier))
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
    if (!prices || prices.length < slow + signal) {
      return { macd: [], signal: [], histogram: [] }
    }

    // Calculate EMAs - these will be shorter arrays.
    const emaFast = calculateEMA(prices, fast)
    const emaSlow = calculateEMA(prices, slow)

    if (emaFast.length === 0 || emaSlow.length === 0) {
      return { macd: [], signal: [], histogram: [] }
    }

    // Calculate MACD line (Fast EMA - Slow EMA).
    // Use the shorter array length to avoid undefined values.
    const minLength = Math.min(emaFast.length, emaSlow.length)
    const macdLine = []

    for (let i = 0; i < minLength; i++) {
      const fastVal = emaFast[emaFast.length - minLength + i]
      const slowVal = emaSlow[emaSlow.length - minLength + i]
      macdLine.push(fastVal - slowVal)
    }

    if (macdLine.length === 0) {
      return { macd: [], signal: [], histogram: [] }
    }

    // Calculate Signal line (EMA of MACD line).
    const signalLine = calculateEMA(macdLine, signal)

    // Calculate Histogram (MACD - Signal).
    const histogram = []
    const histogramLength = Math.min(macdLine.length, signalLine.length)

    for (let i = 0; i < histogramLength; i++) {
      const macdVal = macdLine[macdLine.length - histogramLength + i]
      const signalVal = signalLine[signalLine.length - histogramLength + i]
      histogram.push(macdVal - signalVal)
    }

    return { macd: macdLine, signal: signalLine, histogram }
  }

  // Data Processing
  // --------------------------------------------------------
  function updateIndicators() {
    try {
      if (!ohlcData.value || !Array.isArray(ohlcData.value) || ohlcData.value.length === 0) {
        emaValues.value = []
        rsiValues.value = []
        macdValues.value = { macd: [], signal: [], histogram: [] }
        return
      }

      const closePrices = ohlcData.value
        .map(d => d && typeof d === 'object' ? (d.close || d.price || 0) : 0)
        .filter(price => typeof price === 'number' && price > 0)

      if (closePrices.length === 0) {
        emaValues.value = []
        rsiValues.value = []
        macdValues.value = { macd: [], signal: [], histogram: [] }
        return
      }

      // Only calculate if we have enough data points.
      if (closePrices.length >= INDICATOR_PERIODS.EMA) {
        emaValues.value = calculateEMA(closePrices)
      }
      else emaValues.value = []

      if (closePrices.length >= INDICATOR_PERIODS.RSI) {
        rsiValues.value = calculateRSI(closePrices)
      }
      else rsiValues.value = []

      if (closePrices.length >= INDICATOR_PERIODS.MACD.slow) {
        macdValues.value = calculateMACD(closePrices)
      }
      else macdValues.value = { macd: [], signal: [], histogram: [] }
    }
    catch (error) {
      console.warn('Error updating indicators:', error)
      emaValues.value = []
      rsiValues.value = []
      macdValues.value = { macd: [], signal: [], histogram: [] }
    }
  }

  // Computed Chart Data
  // --------------------------------------------------------
  const emaChartData = computed(() => {
    try {
      if (!ohlcData.value || !Array.isArray(ohlcData.value) || ohlcData.value.length === 0) {
        return { labels: [], datasets: [] }
      }

      const timestamps = ohlcData.value.map(d => d && typeof d === 'object' ? d.timestamp : Date.now())

      if (!emaValues.value.length) return { labels: [], datasets: [] }

      return {
        labels: timestamps,
        datasets: [{
          label: `EMA (${INDICATOR_PERIODS.EMA})`,
          data: emaValues.value.map((value, index) => ({
            x: timestamps[index] || Date.now(),
            y: value
          })),
          borderColor: '#F59E0B',
          backgroundColor: '#F59E0B',
          fill: false
        }]
      }
    }
    catch (error) {
      console.warn('Error creating EMA chart data:', error)
      return { labels: [], datasets: [] }
    }
  })

  const rsiChartData = computed(() => {
    try {
      if (!rsiValues.value || !rsiValues.value.length) return { labels: [], datasets: [] }

      // Ensure we have corresponding OHLC data for timestamps.
      if (!ohlcData.value || ohlcData.value.length < rsiValues.value.length) return { labels: [], datasets: [] }

      // Get timestamps for the RSI data (skip the first 14 points as RSI needs history).
      const rsiStartIndex = Math.max(0, ohlcData.value.length - rsiValues.value.length)
      const timestamps = ohlcData.value.slice(rsiStartIndex).map(d => d.timestamp)

      // Validate RSI values (should be between 0-100)
      const validRsiValues = rsiValues.value.map((value, index) => {
        const clampedValue = Math.max(0, Math.min(100, value || 50)) // Clamp to 0-100 range
        return {
          x: timestamps[index] || Date.now(),
          y: clampedValue
        }
      })

      return {
        labels: timestamps,
        datasets: [{
          label: 'RSI',
          data: validRsiValues,
          borderColor: '#8B5CF6',
          backgroundColor: 'transparent',
          borderWidth: 1,
          pointRadius: 0,
          fill: false
        }]
      }
    }
    catch (error) {
      console.warn('Error creating RSI chart data:', error)
      return { labels: [], datasets: [] }
    }
  })

  const macdChartData = computed(() => {
    try {
      if (!macdValues.value.macd || macdValues.value.macd.length === 0) {
        return { labels: [], datasets: [] }
      }

      const timestamps = ohlcData.value.slice(-macdValues.value.macd.length).map(d => d.timestamp)

      const datasets = []

      // Add histogram bars first (so they're behind the lines)
      if (macdValues.value.histogram && macdValues.value.histogram.length > 0) {
        datasets.push({
          label: 'Histogram',
          data: macdValues.value.histogram.map((value, index) => ({
            x: timestamps[index] || Date.now(),
            y: value || 0
          })),
          backgroundColor: macdValues.value.histogram.map(value =>
            value >= 0 ? 'rgba(16, 185, 129, 0.6)' : 'rgba(239, 68, 68, 0.6)'
          ),
          borderColor: 'transparent',
          borderWidth: 0,
          type: 'bar',
          barThickness: 'flex',
          categoryPercentage: 0.9,
          barPercentage: 0.9,
          order: 3
        })
      }

      // Add MACD line (main line)
      datasets.push({
        label: 'MACD',
        data: macdValues.value.macd.map((value, index) => ({
          x: timestamps[index] || Date.now(),
          y: value || 0
        })),
        borderColor: '#3B82F6', // Blue
        backgroundColor: 'transparent',
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        tension: 0,
        type: 'line',
        order: 1
      })

      // Add Signal line ONLY if we have signal data
      if (macdValues.value.signal && macdValues.value.signal.length > 0) {
        // Ensure timestamps alignment for signal line
        const signalTimestamps = timestamps.slice(-macdValues.value.signal.length)

        datasets.push({
          label: 'Signal',
          data: macdValues.value.signal.map((value, index) => ({
            x: signalTimestamps[index] || Date.now(),
            y: value || 0
          })),
          borderColor: '#F59E0B', // Orange
          backgroundColor: 'transparent',
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: false,
          tension: 0,
          type: 'line',
          order: 2
        })
      }
      else return { labels: [], datasets: [] }

      return {
        labels: timestamps,
        datasets
      }
    }
    catch (error) {
      console.error('❌ Error creating MACD chart data:', error)
      return { labels: [], datasets: [] }
    }
  })

  const volumeChartData = computed(() => {
    try {
      if (!volumeData.value || !Array.isArray(volumeData.value) || volumeData.value.length === 0) {
        return { labels: [], datasets: [] }
      }

      const timestamps = volumeData.value.map(d => d && typeof d === 'object' ? d.timestamp : Date.now())
      const volumes = volumeData.value.map(d => d && typeof d === 'object' ? (d.volume || 0) : 0)

      // Determine colors based on price movement (green for up, red for down)
      const colors = volumes.map((volume, index) => {
        if (index === 0 || !ohlcData.value || ohlcData.value.length <= index) {
          return '#6B7280' // Gray for first bar or missing price data
        }

        const currentClose = ohlcData.value[index]?.close || ohlcData.value[index]?.price || 0
        const prevClose = ohlcData.value[index - 1]?.close || ohlcData.value[index - 1]?.price || 0

        if (currentClose > prevClose) {
          return '#10B981' // Green for up day
        }
        else if (currentClose < prevClose) {
          return '#EF4444' // Red for down day
        }
        else {
          return '#6B7280' // Gray for unchanged
        }
      })

      return {
        labels: timestamps,
        datasets: [{
          label: 'Volume',
          data: volumes.map((value, index) => ({
            x: timestamps[index] || Date.now(),
            y: value
          })),
          backgroundColor: colors,
          borderColor: colors,
          type: 'bar'
        }]
      }
    }
    catch (error) {
      console.warn('Error creating volume chart data:', error)
      return { labels: [], datasets: [] }
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

