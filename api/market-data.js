import axios from 'axios'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state } from './config.js'
import { getEasternTime, formatErrorResponse, getCurrencyInfo } from './utils.js'
import { getMockPrice, initializeMockPrices, getMockTradableStocks, generateMockHistoricalData, generateMockHistoricalDataByRange } from './simulation.js'

// Market Calendar Functions
// --------------------------------------------------------
let marketCalendar = null
let marketClockData = null
let pricePollingInterval = null
let isPollingActive = false

export async function fetchMarketCalendar(startDate, endDate) {
  if (IS_SIMULATION) return null

  try {
    const start = startDate || new Date().toISOString().split('T')[0]
    const end = endDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    const url = `${ALPACA_BASE_URL}/v2/calendar?start=${start}&end=${end}`

    console.log('📅 Fetching market calendar from Alpaca...')
    const { data } = await axios.get(url, { headers: HEADERS })
    marketCalendar = data
    console.log(`✅ Fetched ${data.length} market calendar entries`)
    return data
  }
  catch (error) {
    console.error('❌ Error fetching market calendar:', error.message)
    return null
  }
}

export async function fetchMarketClock() {
  if (IS_SIMULATION) return null

  try {
    const url = `${ALPACA_BASE_URL}/v2/clock`
    console.log('🕐 Fetching market clock from Alpaca...')
    const { data } = await axios.get(url, { headers: HEADERS })
    marketClockData = data
    console.log(`✅ Market clock: ${data.is_open ? 'OPEN' : 'CLOSED'}`)
    return data
  }
  catch (error) {
    console.error('❌ Error fetching market clock:', error.message)
    return null
  }
}

async function isMarketTradingDay(date) {
  if (IS_SIMULATION) return true

  if (!marketCalendar || marketCalendar.length === 0) await fetchMarketCalendar()
  if (!marketCalendar) return true // Fallback if API fails.

  const dateStr = date.toISOString().split('T')[0]
  return marketCalendar.some(entry => entry.date === dateStr)
}

// Market Status Functions
// --------------------------------------------------------
export async function getMarketStatus() {
  const easternTime = getEasternTime()
  const day = easternTime.getDay()
  const currentTimeMinutes = easternTime.getHours() * 60 + easternTime.getMinutes()
  const isTradingDay = await isMarketTradingDay(easternTime)

  if (!isTradingDay) {
    return {
      status: 'closed',
      message: 'Closed',
      nextOpen: getNextMarketOpen(),
      isWeekend: day === 0 || day === 6
    }
  }

  // Market hours in minutes since midnight ET.
  const preMarketStart = 4 * 60 // 4:00 AM ET.
  const marketOpen = 9 * 60 + 30 // 9:30 AM ET.
  const marketClose = 16 * 60 // 4:00 PM ET.
  const afterHoursEnd = 20 * 60 // 8:00 PM ET.

  if (currentTimeMinutes < preMarketStart) {
    return {
      status: 'overnight',
      message: 'Overnight',
      nextOpen: getNextMarketOpen(),
      isWeekend: false
    }
  }

  if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) {
    return {
      status: 'premarket',
      message: 'Pre-market',
      nextOpen: getNextMarketOpen(),
      isWeekend: false
    }
  }

  if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
    return {
      status: 'open',
      message: 'Open',
      nextClose: getNextMarketClose(),
      isWeekend: false
    }
  }

  if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) {
    return {
      status: 'afterhours',
      message: 'After-hours',
      nextOpen: getNextMarketOpen(),
      isWeekend: false
    }
  }

  return {
    status: 'overnight',
    message: 'Overnight',
    nextOpen: getNextMarketOpen(),
    isWeekend: false
  }
}

export async function getStockMarketStatus(stock) {
  const easternTime = getEasternTime()
  const currentTimeMinutes = easternTime.getHours() * 60 + easternTime.getMinutes()

  // Priority 1: Stock status.
  if (stock.status && stock.status.toLowerCase() === 'inactive') {
    return { status: 'closed', message: 'Inactive Stock', nextOpen: null, nextClose: null }
  }
  if (stock.tradable === false) {
    return { status: 'closed', message: 'Not Tradable', nextOpen: null, nextClose: null }
  }

  const isTradingDay = await isMarketTradingDay(easternTime)
  if (!isTradingDay) {
    return { status: 'closed', message: 'Closed', nextOpen: getNextMarketOpen(), nextClose: null }
  }

  // US market hours.
  const usExchanges = ['NYSE', 'NASDAQ', 'AMEX', 'BATS', 'IEX']
  const exchange = stock.exchange || 'Unknown'

  if (usExchanges.includes(exchange)) {
    const preMarketStart = 4 * 60
    const marketOpen = 9 * 60 + 30
    const marketClose = 16 * 60
    const afterHoursEnd = 20 * 60

    if (currentTimeMinutes < preMarketStart) return { status: 'overnight', message: 'Overnight', nextOpen: getNextMarketOpen(), nextClose: null }
    if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) return { status: 'premarket', message: 'Pre-market', nextOpen: getNextMarketOpen(), nextClose: null }
    if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) return { status: 'open', message: 'Open', nextOpen: null, nextClose: getNextMarketClose() }
    if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) return { status: 'afterhours', message: 'After-hours', nextOpen: getNextMarketOpen(), nextClose: null }

    return { status: 'overnight', message: 'Overnight', nextOpen: getNextMarketOpen(), nextClose: null }
  }

  return { status: 'closed', message: 'Unavailable', nextOpen: null, nextClose: null }
}

function getNextMarketOpen() {
  const today = new Date()
  let nextOpen = new Date(today)

  if (nextOpen.getDay() === 5 && nextOpen.getHours() >= 16) nextOpen.setDate(nextOpen.getDate() + 3)
  else if (nextOpen.getDay() === 6) nextOpen.setDate(nextOpen.getDate() + 2)
  else if (nextOpen.getDay() === 0) nextOpen.setDate(nextOpen.getDate() + 1)
  else if (nextOpen.getHours() >= 16) nextOpen.setDate(nextOpen.getDate() + 1)

  const year = nextOpen.getFullYear()
  const month = nextOpen.getMonth()
  const date = nextOpen.getDate()
  const targetDate = new Date(year, month, date)
  const july = new Date(year, 6, 1)
  const january = new Date(year, 0, 1)
  const isDST = targetDate.getTimezoneOffset() < Math.max(july.getTimezoneOffset(), january.getTimezoneOffset())
  const utcHour = isDST ? 13 : 14

  return new Date(Date.UTC(year, month, date, utcHour, 30, 0, 0)).toISOString()
}

function getNextMarketClose() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const date = today.getDate()
  const targetDate = new Date(year, month, date)
  const july = new Date(year, 6, 1)
  const january = new Date(year, 0, 1)
  const isDST = targetDate.getTimezoneOffset() < Math.max(july.getTimezoneOffset(), january.getTimezoneOffset())
  const utcHour = isDST ? 20 : 21

  return new Date(Date.UTC(year, month, date, utcHour, 0, 0, 0)).toISOString()
}

// Price Data Functions
// --------------------------------------------------------
export async function getPrice(symbol) {
  if (IS_SIMULATION) return getMockPrice(symbol)

  if (state.stockPrices[symbol]) {
    console.log(`💰 Using cached price for ${symbol}: $${state.stockPrices[symbol]}`)
    return state.stockPrices[symbol]
  }

  const endpoints = [
    `https://data.alpaca.markets/v2/stocks/${symbol}/quotes/latest`,
    `https://data.alpaca.markets/v2/stocks/${symbol}/trades/latest`,
    `https://data.alpaca.markets/v2/stocks/${symbol}/bars/latest?timeframe=1Day`
  ]

  for (const url of endpoints) {
    try {
      const { data } = await axios.get(url, { headers: HEADERS })
      let price = 0

      if (data.quote?.ap) price = data.quote.ap
      else if (data.quote?.bp) price = data.quote.bp
      else if (data.trade?.p) price = data.trade.p
      else if (data.bar?.c) price = data.bar.c

      if (price > 0) {
        console.log(`💲 Got ${symbol} price: $${price.toFixed(3)} from ${endpoint.type}`)
        state.stockPrices[symbol] = price
        return price
      }
    }
    catch (e) {
      console.warn(`⚠️ Failed to fetch ${symbol} from ${url.split('/').pop()}: ${e.message}`)
    }
  }

  console.warn(`⚠️ No price data available for ${symbol}`)
  return 0
}

export async function initializeStockPrices() {
  if (IS_SIMULATION) {
    initializeMockPrices()
    return
  }

  console.log('💰 Fetching initial prices for popular stocks...')
  const popularStocks = ['AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'NVDA', 'NFLX', 'AMD', 'INTC']
  let pricesFetched = 0

  for (const symbol of popularStocks) {
    try {
      const price = await getPrice(symbol)
      if (price > 0) {
        pricesFetched++
        console.log(`💲 Initialized ${symbol}: $${price.toFixed(3)}`)
      }
    }
    catch (error) {
      console.warn(`⚠️ Failed to fetch initial price for ${symbol}: ${error.message}`)
    }
  }

  console.log(`✅ Initialized ${pricesFetched} stock prices from Alpaca`)
}

// Stock Data Functions
// --------------------------------------------------------
export async function getAllTradableStocks() {
  if (state.allStocks.length > 0) return state.allStocks
  if (IS_SIMULATION) {
    state.allStocks = getMockTradableStocks()
    return state.allStocks
  }

  try {
    console.log('📊 Fetching all tradable stocks from Alpaca...')
    const url = `${ALPACA_BASE_URL}/v2/assets?status=active&tradable=true&asset_class=us_equity`
    const { data } = await axios.get(url, { headers: HEADERS })

    state.allStocks = data
      .filter(asset =>
        asset.class === 'us_equity' &&
        asset.exchange !== 'OTC' &&
        asset.status === 'active' &&
        asset.tradable
      )
      .map(asset => {
        const currencyInfo = getCurrencyInfo(asset)
        return {
          symbol: asset.symbol,
          name: asset.name,
          exchange: asset.exchange,
          status: asset.status,
          tradable: asset.tradable,
          currency: currencyInfo.currency,
          currencySymbol: currencyInfo.symbol
        }
      })

    console.log(`✅ Fetched ${state.allStocks.length} tradable stocks`)
    return state.allStocks
  }
  catch (error) {
    console.error('❌ Error fetching tradable stocks:', error.message)
    state.allStocks = getMockTradableStocks()
    return state.allStocks
  }
}

// Historical Data Functions
// --------------------------------------------------------
export async function getStockHistoricalData(symbol, period = '1D', timeframe = null) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock data for ${symbol} (${period}, ${timeframe || 'auto'})`)
    return generateMockHistoricalData(symbol, period, timeframe)
  }

  try {
    const { alpacaTimeframe, limit, startDate } = getPeriodParameters(period, timeframe)
    const endDate = getEasternTime()
    const params = new URLSearchParams({
      timeframe: alpacaTimeframe,
      limit: limit.toString(),
      start: startDate.toISOString(),
      end: endDate.toISOString()
    })

    const url = `https://data.alpaca.markets/v2/stocks/${symbol}/bars?${params}`
    console.log(`📊 Fetching ${symbol} data: ${period}/${alpacaTimeframe}`)

    const { data } = await axios.get(url, { headers: HEADERS })

    if (!data.bars || data.bars.length === 0) {
      console.warn(`⚠️ No data for ${symbol}, using mock`)
      return generateMockHistoricalData(symbol, period, timeframe)
    }

    const historicalData = data.bars.map(bar => ({
      timestamp: new Date(bar.t).getTime(),
      open: bar.o,
      high: bar.h,
      low: bar.l,
      close: bar.c,
      volume: bar.v,
      price: bar.c
    }))

    // Check if data is outdated.
    const latestDataTime = Math.max(...historicalData.map(d => d.timestamp))
    const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000)

    if (latestDataTime < twoDaysAgo) {
      console.warn(`⚠️ Data outdated for ${symbol}, using mock`)
      return generateMockHistoricalData(symbol, period, timeframe)
    }

    console.log(`✅ Fetched ${historicalData.length} data points for ${symbol}`)
    return { symbol, period, timeframe: alpacaTimeframe, data: historicalData }
  }
  catch (error) {
    console.error(`❌ Error fetching data for ${symbol}:`, error.message)
    return generateMockHistoricalData(symbol, period, timeframe)
  }
}

export async function getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating range data for ${symbol}`)
    return { symbol, timeframe, data: generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) }
  }

  try {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const rangeDays = Math.ceil((end - start) / (24 * 60 * 60 * 1000))
    const limit = calculateDataLimitForRange(timeframe, rangeDays)
    const params = new URLSearchParams({
      timeframe: timeframe,
      limit: limit.toString(),
      start: start.toISOString(),
      end: end.toISOString()
    })

    const url = `https://data.alpaca.markets/v2/stocks/${symbol}/bars?${params}`
    console.log(`📊 Fetching range data for ${symbol}: ${timeframe}`)

    const { data } = await axios.get(url, { headers: HEADERS })

    if (!data.bars || data.bars.length === 0) {
      console.warn(`⚠️ No range data for ${symbol}, using mock`)
      return { symbol, timeframe, data: generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) }
    }

    const historicalData = data.bars.map(bar => ({
      timestamp: new Date(bar.t).getTime(),
      open: bar.o,
      high: bar.h,
      low: bar.l,
      close: bar.c,
      volume: bar.v,
      price: bar.c
    }))

    // Check if data is outdated.
    const latestDataTime = Math.max(...historicalData.map(d => d.timestamp))
    const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000)

    if (latestDataTime < twoDaysAgo) {
      console.warn(`⚠️ Range data outdated for ${symbol}, using mock`)
      return { symbol, timeframe, data: generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) }
    }

    console.log(`✅ Fetched ${historicalData.length} range data points for ${symbol}`)
    return { symbol, timeframe, data: historicalData }
  }
  catch (error) {
    console.error(`❌ Error fetching range data for ${symbol}:`, error.message)
    return { symbol, timeframe, data: generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) }
  }
}

// Helper Functions
// --------------------------------------------------------
function calculateDataLimitForRange(timeframe, rangeDays) {
  const timeframeMinutes = { '1Min': 1, '5Min': 5, '15Min': 15, '30Min': 30, '1Hour': 60, '4Hour': 240, '1Day': 1440 }
  const minutes = timeframeMinutes[timeframe] || 60
  const tradingMinutesPerDay = 390

  if (timeframe === '1Day') return Math.min(rangeDays + 10, 1000)

  const estimatedDataPoints = Math.ceil((rangeDays * tradingMinutesPerDay) / minutes)
  return Math.min(estimatedDataPoints + 50, 1000)
}

function getPeriodParameters(period, timeframe = null) {
  const easternTime = getEasternTime()
  const timeframeMap = { '1D': timeframe || '1Min', '1W': timeframe || '5Min', '1M': timeframe || '1Hour', '3M': timeframe || '1Day' }
  const selectedTimeframe = timeframe || timeframeMap[period]
  const limit = calculateDataLimit(period, selectedTimeframe)
  const startDate = calculateStartDate(period, easternTime)

  return { alpacaTimeframe: selectedTimeframe, limit, startDate }
}

function calculateDataLimit(period, timeframe) {
  if (timeframe === '1Day') {
    const periodLimits = { '1D': 30, '1W': 50, '1M': 100, '3M': 200, '12M': 300 }
    return periodLimits[period] || 100
  }

  const tradingMinutesPerDay = 390
  const timeframeMinutes = { '1Min': 1, '5Min': 5, '10Min': 10, '15Min': 15, '30Min': 30, '1Hour': 60, '4Hour': 240, '1Day': 1440 }
  const minutes = timeframeMinutes[timeframe] || 5
  const periodDays = { '1D': 1, '1W': 5, '1M': 22, '3M': 66, '12M': 252 }
  const days = periodDays[period] || 1
  const dataPoints = Math.ceil((days * tradingMinutesPerDay) / minutes)
  const minPoints = Math.max(200, dataPoints)

  return Math.min(minPoints, 1000)
}

function calculateStartDate(period, easternTime) {
  const periodDays = { '1D': 7, '1W': 14, '1M': 45, '3M': 120, '12M': 400 }
  const days = periodDays[period] || 30
  return new Date(easternTime.getTime() - days * 24 * 60 * 60 * 1000)
}

export async function initializeMarketData() {
  if (IS_SIMULATION) {
    initializeMockPrices()
    return
  }

  console.log('📅 Initializing market data...')
  const [calendarData, clockData] = await Promise.all([fetchMarketCalendar(), fetchMarketClock(), initializeStockPrices()])
  console.log('✅ Market data initialization complete')
  return { calendar: calendarData, clock: clockData }
}

// Price Polling Functions
// --------------------------------------------------------
export function startPricePolling(subscribedStocks, broadcast) {
  if (IS_SIMULATION || isPollingActive) return

  console.log('🔄 Starting price polling...')
  isPollingActive = true

  pricePollingInterval = setInterval(async () => {
    try {
      const marketStatus = await getMarketStatus()
      if (marketStatus.status !== 'open') {
        console.log('📊 Market closed, skipping polling')
        return
      }

      const priceUpdates = []
      for (const symbol of subscribedStocks) {
        try {
          const cachedPrice = state.stockPrices[symbol]
          delete state.stockPrices[symbol]
          const newPrice = await getPrice(symbol)

          if (newPrice > 0 && newPrice !== cachedPrice) {
            const stockData = state.allStocks.find(s => s.symbol === symbol)
            if (stockData) {
              const marketStatus = await getStockMarketStatus(stockData)
              priceUpdates.push({
                type: 'price',
                symbol,
                price: newPrice,
                currency: stockData.currency || 'USD',
                currencySymbol: stockData.currencySymbol || '$',
                marketState: marketStatus.status,
                marketMessage: marketStatus.message,
                nextOpen: marketStatus.nextOpen,
                nextClose: marketStatus.nextClose,
                timestamp: new Date().toISOString()
              })
            }
          }
        }
        catch (error) {
          console.warn(`⚠️ Failed to poll ${symbol}:`, error.message)
        }
      }

      if (priceUpdates.length > 0) {
        console.log(`📡 Broadcasting ${priceUpdates.length} price updates`)
        for (const update of priceUpdates) broadcast(update)
      }
    }
    catch (error) {
      console.error('❌ Error in price polling:', error.message)
    }
  }, 1000)

  console.log('✅ Price polling started')
}

export function stopPricePolling() {
  if (pricePollingInterval) {
    clearInterval(pricePollingInterval)
    pricePollingInterval = null
    isPollingActive = false
    console.log('🛑 Price polling stopped')
  }
}
