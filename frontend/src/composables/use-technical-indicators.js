import { computed } from 'vue'
import {
  EMA,
  SMA,
  RSI,
  MACD,
  BollingerBands,
  VWAP as VWAPIndicator
} from 'technicalindicators'

export function useTechnicalIndicators(ohlcData, volumeData) {
  // Extract price arrays from OHLC data
  const prices = computed(() => {
    if (!ohlcData.value || !ohlcData.value.length) return { open: [], high: [], low: [], close: [], volume: [] }

    return {
      open: ohlcData.value.map(item => item.open || item.price),
      high: ohlcData.value.map(item => item.high || item.price),
      low: ohlcData.value.map(item => item.low || item.price),
      close: ohlcData.value.map(item => item.close || item.price),
      volume: ohlcData.value.map(item => item.volume || 0),
      timestamps: ohlcData.value.map(item => item.timestamp)
    }
  })

  // Moving Averages
  const ema20 = computed(() => {
    if (!prices.value.close.length) return []
    try {
      return EMA.calculate({ values: prices.value.close, period: 20 })
    } catch (error) {
      console.warn('EMA20 calculation error:', error)
      return []
    }
  })

  const ema50 = computed(() => {
    if (!prices.value.close.length) return []
    try {
      return EMA.calculate({ values: prices.value.close, period: 50 })
    } catch (error) {
      console.warn('EMA50 calculation error:', error)
      return []
    }
  })

  const ema200 = computed(() => {
    if (!prices.value.close.length) return []
    try {
      return EMA.calculate({ values: prices.value.close, period: 200 })
    } catch (error) {
      console.warn('EMA200 calculation error:', error)
      return []
    }
  })

  const sma20 = computed(() => {
    if (!prices.value.close.length) return []
    try {
      return SMA.calculate({ values: prices.value.close, period: 20 })
    } catch (error) {
      console.warn('SMA20 calculation error:', error)
      return []
    }
  })

  // RSI Indicator
  const rsi = computed(() => {
    if (!prices.value.close.length) return []
    try {
      return RSI.calculate({ values: prices.value.close, period: 14 })
    } catch (error) {
      console.warn('RSI calculation error:', error)
      return []
    }
  })

  const rsiSMA = computed(() => {
    if (!rsi.value.length) return []
    try {
      return SMA.calculate({ values: rsi.value, period: 14 })
    } catch (error) {
      console.warn('RSI SMA calculation error:', error)
      return []
    }
  })

  // MACD Indicator
  const macd = computed(() => {
    if (!prices.value.close.length) return { MACD: [], signal: [], histogram: [] }
    try {
      const macdData = MACD.calculate({
        values: prices.value.close,
        fastPeriod: 12,
        slowPeriod: 26,
        signalPeriod: 9,
        SimpleMAOscillator: false,
        SimpleMASignal: false
      })
      return {
        MACD: macdData.map(item => item.MACD),
        signal: macdData.map(item => item.signal),
        histogram: macdData.map(item => item.histogram)
      }
    } catch (error) {
      console.warn('MACD calculation error:', error)
      return { MACD: [], signal: [], histogram: [] }
    }
  })

  // Volume indicators
  const volumeSMA = computed(() => {
    if (!prices.value.volume.length) return []
    try {
      return SMA.calculate({ values: prices.value.volume, period: 20 })
    } catch (error) {
      console.warn('Volume SMA calculation error:', error)
      return []
    }
  })

  // VWAP (Volume Weighted Average Price)
  const vwap = computed(() => {
    if (!prices.value.close.length || !prices.value.volume.length) return []
    try {
      // Calculate VWAP manually since technicalindicators VWAP might be different
      const vwapValues = []
      let cumulativeVolume = 0
      let cumulativeVolumePrice = 0

      for (let i = 0; i < prices.value.close.length; i++) {
        const typicalPrice = (prices.value.high[i] + prices.value.low[i] + prices.value.close[i]) / 3
        const volume = prices.value.volume[i]

        cumulativeVolumePrice += typicalPrice * volume
        cumulativeVolume += volume

        const vwapValue = cumulativeVolume > 0 ? cumulativeVolumePrice / cumulativeVolume : typicalPrice
        vwapValues.push(vwapValue)
      }

      return vwapValues
    } catch (error) {
      console.warn('VWAP calculation error:', error)
      return []
    }
  })

  // Bollinger Bands
  const bollingerBands = computed(() => {
    if (!prices.value.close.length) return { upper: [], middle: [], lower: [] }
    try {
      const bbData = BollingerBands.calculate({
        values: prices.value.close,
        period: 20,
        stdDev: 2
      })
      return {
        upper: bbData.map(item => item.upper),
        middle: bbData.map(item => item.middle),
        lower: bbData.map(item => item.lower)
      }
    } catch (error) {
      console.warn('Bollinger Bands calculation error:', error)
      return { upper: [], middle: [], lower: [] }
    }
  })

  // Create chart data with proper timestamps
  const getIndicatorChartData = (values, label, color, startOffset = 0) => {
    if (!values.length || !prices.value.timestamps.length) return { datasets: [] }

    const data = values.map((value, index) => ({
      x: prices.value.timestamps[index + startOffset],
      y: value
    }))

    return {
      datasets: [{
        label,
        data,
        borderColor: color,
        backgroundColor: color,
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 4
      }]
    }
  }

  // RSI Chart Data
  const rsiChartData = computed(() => {
    if (!rsi.value || !rsi.value.length || !prices.value || !prices.value.timestamps || !Array.isArray(prices.value.timestamps) || !prices.value.close) {
      return { datasets: [] }
    }

    const datasets = []

    // RSI dataset
    if (rsi.value.length > 0) {
      const rsiOffset = prices.value.close.length - rsi.value.length
      datasets.push({
        label: 'RSI 14',
        data: rsi.value.map((value, index) => ({
          x: prices.value.timestamps[index + rsiOffset] || Date.now(),
          y: value
        })),
        borderColor: '#8B5CF6',
        backgroundColor: '#8B5CF6',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
      })
    }

    // RSI SMA dataset
    if (rsiSMA.value && rsiSMA.value.length > 0) {
      const rsiSMAOffset = prices.value.close.length - rsiSMA.value.length
      datasets.push({
        label: 'RSI SMA 14',
        data: rsiSMA.value.map((value, index) => ({
          x: prices.value.timestamps[index + rsiSMAOffset] || Date.now(),
          y: value
        })),
        borderColor: '#F59E0B',
        backgroundColor: '#F59E0B',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
      })
    }

    return { datasets }
  })

  // MACD Chart Data
  const macdChartData = computed(() => {
    if (!macd.value || !macd.value.MACD || !macd.value.MACD.length || !prices.value || !prices.value.timestamps || !Array.isArray(prices.value.timestamps) || !prices.value.close) {
      return { datasets: [] }
    }

    const datasets = []
    const macdOffset = prices.value.close.length - macd.value.MACD.length

    // MACD Line
    if (macd.value.MACD && macd.value.MACD.length > 0) {
      datasets.push({
        label: 'MACD',
        type: 'line',
        data: macd.value.MACD.map((value, index) => ({
          x: prices.value.timestamps[index + macdOffset] || Date.now(),
          y: value
        })),
        borderColor: '#3B82F6',
        backgroundColor: '#3B82F6',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
      })
    }

    // Signal Line
    if (macd.value.signal && macd.value.signal.length > 0) {
      datasets.push({
        label: 'Signal',
        type: 'line',
        data: macd.value.signal.map((value, index) => ({
          x: prices.value.timestamps[index + macdOffset] || Date.now(),
          y: value
        })),
        borderColor: '#EF4444',
        backgroundColor: '#EF4444',
        borderWidth: 2,
        fill: false,
        pointRadius: 0
      })
    }

    // Histogram
    if (macd.value.histogram && macd.value.histogram.length > 0) {
      datasets.push({
        label: 'Histogram',
        type: 'bar',
        data: macd.value.histogram.map((value, index) => ({
          x: prices.value.timestamps[index + macdOffset] || Date.now(),
          y: value
        })),
        backgroundColor: (ctx) => {
          const value = ctx.parsed.y
          return value >= 0 ? '#10B981' : '#EF4444'
        },
        borderWidth: 0
      })
    }

    return { datasets }
  })

  // Volume Chart Data
  const volumeChartData = computed(() => {
    if (!prices.value || !prices.value.volume || !prices.value.volume.length || !prices.value.timestamps || !Array.isArray(prices.value.timestamps) || !prices.value.close) {
      return { datasets: [] }
    }

    const datasets = []

    // Volume bars
    if (prices.value.volume.length > 0) {
      datasets.push({
        label: 'Volume',
        type: 'bar',
        data: prices.value.volume.map((value, index) => ({
          x: prices.value.timestamps[index] || Date.now(),
          y: value
        })),
        backgroundColor: (ctx) => {
          const index = ctx.dataIndex
          if (index === 0 || !prices.value.close || !Array.isArray(prices.value.close)) return '#6B7280'
          const current = prices.value.close[index]
          const previous = prices.value.close[index - 1]
          return current >= previous ? '#10B981' : '#EF4444'
        },
        borderWidth: 0
      })
    }

    // Volume SMA
    if (volumeSMA.value && volumeSMA.value.length > 0) {
      const volumeSMAOffset = prices.value.volume.length - volumeSMA.value.length
      datasets.push({
        label: 'Volume SMA 20',
        type: 'line',
        data: volumeSMA.value.map((value, index) => ({
          x: prices.value.timestamps[index + volumeSMAOffset] || Date.now(),
          y: value
        })),
        borderColor: '#F59E0B',
        backgroundColor: '#F59E0B',
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        yAxisID: 'volume'
      })
    }

    return { datasets }
  })

  return {
    // Raw indicator values
    ema20,
    ema50,
    ema200,
    sma20,
    rsi,
    rsiSMA,
    macd,
    vwap,
    volumeSMA,
    bollingerBands,

    // Chart data
    rsiChartData,
    macdChartData,
    volumeChartData,

    // Helper function
    getIndicatorChartData,

    // Price data
    prices
  }
}
