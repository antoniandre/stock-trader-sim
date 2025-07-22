import axios from 'axios'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state } from './config.js'
import { getEasternTime, formatErrorResponse, getCurrencyInfo } from './utils.js'
import { getMockPrice, initializeMockPrices, getMockTradableStocks, generateMockHistoricalData } from './simulation.js'

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

    console.log(`✅ Market clock: ${data.is_open ? 'OPEN' : 'CLOSED'} - Next ${data.is_open ? 'close' : 'open'}: ${data.is_open ? data.next_close : data.next_open}`)
    return data
  }
  catch (error) {
    console.error('❌ Error fetching market clock:', error.message)
    return null
  }
}

async function isMarketTradingDay(date) {
  if (IS_SIMULATION) return true

  // Fetch calendar if not already cached or if date is outside current range.
  if (!marketCalendar || marketCalendar.length === 0) {
    await fetchMarketCalendar()
  }

  if (!marketCalendar) return true // Fallback to assume trading day if API fails.

  const dateStr = date.toISOString().split('T')[0]
  return marketCalendar.some(entry => entry.date === dateStr)
}

// Market Status Functions
// --------------------------------------------------------
export async function getMarketStatus() {
  const easternTime = getEasternTime()
  const day = easternTime.getDay() // 0 = Sunday, 6 = Saturday.
  const hours = easternTime.getHours()
  const minutes = easternTime.getMinutes()
  const currentTimeMinutes = hours * 60 + minutes

  // Check if today is a trading day according to Alpaca calendar.
  const isTradingDay = await isMarketTradingDay(easternTime)

  // If not a trading day (weekend or holiday), market is closed.
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

/**
 * Get market status for a specific stock based on its exchange
 * @param {Object} stock - Stock object with exchange property
 * @returns {Object} Market status object
 */
export async function getStockMarketStatus(stock) {
  const easternTime = getEasternTime()
  const day = easternTime.getDay() // 0 = Sunday, 6 = Saturday.
  const hours = easternTime.getHours()
  const minutes = easternTime.getMinutes()
  const currentTimeMinutes = hours * 60 + minutes

  // Priority 1: Stock status (inactive/not tradable) - highest priority
  if (stock.status && stock.status.toLowerCase() === 'inactive') {
    return {
      status: 'closed',
      message: 'Inactive Stock',
      nextOpen: null,
      nextClose: null
    }
  }
  if (stock.tradable === false) {
    return {
      status: 'closed',
      message: 'Not Tradable',
      nextOpen: null,
      nextClose: null
    }
  }

  // Check if today is a trading day according to Alpaca calendar.
  const isTradingDay = await isMarketTradingDay(easternTime)

  // If not a trading day (weekend or holiday), market is closed.
  if (!isTradingDay) {
    return {
      status: 'closed',
      message: 'Closed',
      nextOpen: getNextMarketOpen(),
      nextClose: null
    }
  }

  // US market hours (all US exchanges use same hours)
  const usExchanges = ['NYSE', 'NASDAQ', 'AMEX', 'BATS', 'IEX']
  const exchange = stock.exchange || 'Unknown'

  if (usExchanges.includes(exchange)) {
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
        nextClose: null
      }
    }

    if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) {
      return {
        status: 'premarket',
        message: 'Pre-market',
        nextOpen: getNextMarketOpen(),
        nextClose: null
      }
    }

    if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
      return {
        status: 'open',
        message: 'Open',
        nextOpen: null,
        nextClose: getNextMarketClose()
      }
    }

    if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) {
      return {
        status: 'afterhours',
        message: 'After-hours',
        nextOpen: getNextMarketOpen(),
        nextClose: null
      }
    }

    return {
      status: 'overnight',
      message: 'Overnight',
      nextOpen: getNextMarketOpen(),
      nextClose: null
    }
  }

  // For other exchanges, assume closed for now
  // This can be expanded to support international exchanges
  return {
    status: 'closed',
    message: 'Unavailable',
    nextOpen: null,
    nextClose: null
  }
}

function getNextMarketOpen() {
  const today = new Date()
  let nextOpen = new Date(today)

  // If it's Friday after market close, next open is Monday.
  if (nextOpen.getDay() === 5 && nextOpen.getHours() >= 16) {
    nextOpen.setDate(nextOpen.getDate() + 3) // Add 3 days to get to Monday.
  }
  // If it's Saturday, next open is Monday.
  else if (nextOpen.getDay() === 6) {
    nextOpen.setDate(nextOpen.getDate() + 2) // Add 2 days to get to Monday.
  }
  // If it's Sunday, next open is Monday.
  else if (nextOpen.getDay() === 0) {
    nextOpen.setDate(nextOpen.getDate() + 1) // Add 1 day to get to Monday.
  }
  // If it's after market close on a weekday, next open is next day.
  else if (nextOpen.getHours() >= 16) {
    nextOpen.setDate(nextOpen.getDate() + 1)
  }

  // Create a proper date for 9:30 AM Eastern Time
  const year = nextOpen.getFullYear()
  const month = nextOpen.getMonth()
  const date = nextOpen.getDate()

  // Check if we're in DST on the target date
  const targetDate = new Date(year, month, date)
  const july = new Date(year, 6, 1) // July 1st
  const january = new Date(year, 0, 1) // January 1st
  const isDST = targetDate.getTimezoneOffset() < Math.max(july.getTimezoneOffset(), january.getTimezoneOffset())

  // EDT is UTC-4, EST is UTC-5
  // 9:30 AM EDT = 13:30 UTC, 9:30 AM EST = 14:30 UTC
  const utcHour = isDST ? 13 : 14
  const utcMinute = 30

  return new Date(Date.UTC(year, month, date, utcHour, utcMinute, 0, 0)).toISOString()
}

function getNextMarketClose() {
  // Create a date for 4:00 PM Eastern Time today
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const date = today.getDate()

  // Check if we're in DST on the target date
  const targetDate = new Date(year, month, date)
  const july = new Date(year, 6, 1) // July 1st
  const january = new Date(year, 0, 1) // January 1st
  const isDST = targetDate.getTimezoneOffset() < Math.max(july.getTimezoneOffset(), january.getTimezoneOffset())

  // EDT is UTC-4, EST is UTC-5
  // 4:00 PM EDT = 20:00 UTC, 4:00 PM EST = 21:00 UTC
  const utcHour = isDST ? 20 : 21

  return new Date(Date.UTC(year, month, date, utcHour, 0, 0, 0)).toISOString()
}

// Price Data Functions
// --------------------------------------------------------
export async function getPrice(symbol) {
  if (IS_SIMULATION) return getMockPrice(symbol)

  // Use cached price from WebSocket if available.
  if (state.stockPrices[symbol]) {
    console.log(`💰 Using cached price for ${symbol}: $${state.stockPrices[symbol]}`)
    return state.stockPrices[symbol]
  }

  // Try multiple Alpaca endpoints for price data.
  const endpoints = [
    `https://data.alpaca.markets/v2/stocks/${symbol}/quotes/latest`,
    `https://data.alpaca.markets/v2/stocks/${symbol}/trades/latest`,
    `https://data.alpaca.markets/v2/stocks/${symbol}/bars/latest?timeframe=1Day`
  ]

  for (const url of endpoints) {
    try {
      console.log(`💲 Trying to fetch ${symbol} price from ${url.split('/').pop()}`)
      const { data } = await axios.get(url, { headers: HEADERS })

      let price = 0
      if (data.quote?.ap) price = data.quote.ap // Ask price from quotes.
      else if (data.quote?.bp) price = data.quote.bp // Bid price from quotes.
      else if (data.trade?.p) price = data.trade.p // Price from latest trade.
      else if (data.bar?.c) price = data.bar.c // Close price from latest bar.

      if (price > 0) {
        console.log(`💲 Got ${symbol} price: $${price.toFixed(3)} from ${url.split('/').pop()}`)
        state.stockPrices[symbol] = price
        return price
      }
    }
    catch (e) {
      console.warn(`⚠️ Failed to fetch ${symbol} from ${url.split('/').pop()}: ${e.message}`)
    }
  }

  console.warn(`⚠️ No price data available for ${symbol} from any Alpaca endpoint`)
  return 0
}

export async function initializeStockPrices() {
  if (IS_SIMULATION) {
    initializeMockPrices()
    return
  }

    console.log('💰 Fetching initial prices for popular stocks...')

  // Fetch prices for popular stocks to have some initial data.
  const popularStocks = ['AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'NVDA', 'NFLX', 'AMD', 'INTC', 'ORCL', 'CRM', 'ADBE', 'PYPL', 'SQ', 'UBER', 'LYFT', 'SPOT', 'ZM', 'SHOP']

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

    // Filter to common stocks (exclude OTC, preferred shares, etc.).
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
    // Fallback to popular stocks.
    state.allStocks = getMockTradableStocks()
    return state.allStocks
  }
}

// Historical Data Functions
// --------------------------------------------------------
export async function getStockHistoricalData(symbol, period = '1D', timeframe = null) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock historical data for ${symbol} (${period}, ${timeframe || 'auto'})`)
    return generateMockHistoricalData(symbol, period, timeframe)
  }

  try {
    // Map period and timeframe to Alpaca API parameters.
    const { alpacaTimeframe, limit, startDate } = getPeriodParameters(period, timeframe)
    const endDate = getEasternTime() // Current time as end date

    const params = new URLSearchParams({
      timeframe: alpacaTimeframe,
      limit: limit.toString(),
      start: startDate.toISOString(),
      end: endDate.toISOString()
    })

    const url = `https://data.alpaca.markets/v2/stocks/${symbol}/bars?${params}`
    console.log(`📊 Fetching historical data for ${symbol}:`)
    console.log(`   Period: ${period} | Timeframe: ${alpacaTimeframe} | Limit: ${limit}`)
    console.log(`   Start Date: ${startDate.toISOString()} (${startDate.toLocaleString('en-US', { timeZone: 'America/New_York' })})`)
    console.log(`   End Date: ${endDate.toISOString()} (${endDate.toLocaleString('en-US', { timeZone: 'America/New_York' })})`)
    console.log(`   URL: ${url}`)

    const { data } = await axios.get(url, { headers: HEADERS })

    if (!data.bars || data.bars.length === 0) {
      console.warn(`⚠️ No historical data found for ${symbol}, using current mock data`)
      return generateMockHistoricalData(symbol, period, timeframe)
    }

    // Transform Alpaca data to our format with OHLCV data for candlesticks.
    const historicalData = data.bars.map(bar => ({
      timestamp: new Date(bar.t).getTime(),
      open: bar.o,
      high: bar.h,
      low: bar.l,
      close: bar.c,
      volume: bar.v,
      price: bar.c  // For backward compatibility
    }))

    // Check if data is outdated (more than 2 days old)
    const latestDataTime = Math.max(...historicalData.map(d => d.timestamp))
    const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000)

    if (latestDataTime < twoDaysAgo) {
      console.warn(`⚠️ Alpaca data is outdated (latest: ${new Date(latestDataTime).toISOString()}), using current mock data`)
      return generateMockHistoricalData(symbol, period, timeframe)
    }

    console.log(`✅ Fetched ${historicalData.length} historical data points for ${symbol}`)
    if (historicalData.length > 0) {
      const firstBar = historicalData[0]
      const lastBar = historicalData[historicalData.length - 1]
      console.log(`   First bar: ${new Date(firstBar.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })} (${new Date(firstBar.timestamp).toISOString()})`)
      console.log(`   Last bar: ${new Date(lastBar.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })} (${new Date(lastBar.timestamp).toISOString()})`)
    }
    return { symbol, period, timeframe: alpacaTimeframe, data: historicalData }
  }
  catch (error) {
    console.error(`❌ Error fetching historical data for ${symbol}:`, error.message)
    console.log(`📊 Falling back to mock data for ${symbol}`)
    return generateMockHistoricalData(symbol, period, timeframe)
  }
}

// Historical Data by Date Range (for dynamic loading)
export async function getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock historical data for ${symbol} (${timeframe}, ${startDate} to ${endDate})`)
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
    console.log(`📊 Fetching historical data range for ${symbol}:`)
    console.log(`   Timeframe: ${timeframe} | Limit: ${limit}`)
    console.log(`   Start: ${start.toISOString()} (${start.toLocaleString('en-US', { timeZone: 'America/New_York' })})`)
    console.log(`   End: ${end.toISOString()} (${end.toLocaleString('en-US', { timeZone: 'America/New_York' })})`)
    console.log(`   URL: ${url}`)

    const { data } = await axios.get(url, { headers: HEADERS })

    if (!data.bars || data.bars.length === 0) {
      console.warn(`⚠️ No Alpaca data found for ${symbol} in range, generating current mock data`)
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

    // Check if data is outdated (more than 2 days old) for range requests too
    const latestDataTime = Math.max(...historicalData.map(d => d.timestamp))
    const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000)

    if (latestDataTime < twoDaysAgo) {
      console.warn(`⚠️ Alpaca range data is outdated (latest: ${new Date(latestDataTime).toISOString()}), generating current mock data`)
      return { symbol, timeframe, data: generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) }
    }

    console.log(`✅ Fetched ${historicalData.length} historical data points for ${symbol} in range`)
    if (historicalData.length > 0) {
      const firstBar = historicalData[0]
      const lastBar = historicalData[historicalData.length - 1]
      console.log(`   First bar: ${new Date(firstBar.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })}`)
      console.log(`   Last bar: ${new Date(lastBar.timestamp).toLocaleString('en-US', { timeZone: 'America/New_York' })}`)
    }

    return { symbol, timeframe, data: historicalData }
  } catch (error) {
    console.error(`❌ Error fetching historical data range for ${symbol}:`, error.message)
    console.log(`📊 Falling back to mock data for ${symbol} range request`)
    return { symbol, timeframe, data: generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) }
  }
}

function calculateDataLimitForRange(timeframe, rangeDays) {
  // Calculate appropriate data limit based on timeframe and date range
  const timeframeMinutes = {
    '1Min': 1,
    '5Min': 5,
    '15Min': 15,
    '30Min': 30,
    '1Hour': 60,
    '4Hour': 240,
    '1Day': 1440
  }

  const minutes = timeframeMinutes[timeframe] || 60
  const tradingMinutesPerDay = 390 // 6.5 hours × 60 minutes

  if (timeframe === '1Day') {
    return Math.min(rangeDays + 10, 1000) // Add buffer for weekends
  }

  const estimatedDataPoints = Math.ceil((rangeDays * tradingMinutesPerDay) / minutes)
  return Math.min(estimatedDataPoints + 50, 1000) // Add small buffer, cap at 1000
}

// Mock data generation for date range (simulation mode)
function generateMockHistoricalDataByRange(symbol, timeframe, startDate, endDate) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const duration = end - start

  const timeframeMs = {
    '1Min': 60 * 1000,
    '5Min': 5 * 60 * 1000,
    '15Min': 15 * 60 * 1000,
    '30Min': 30 * 60 * 1000,
    '1Hour': 60 * 60 * 1000,
    '4Hour': 4 * 60 * 60 * 1000,
    '1Day': 24 * 60 * 60 * 1000
  }

  const intervalMs = timeframeMs[timeframe] || 60 * 60 * 1000
  const dataPoints = Math.floor(duration / intervalMs)

  // Use existing mock generation logic
  const mockPrices = { AAPL: 212, TSLA: 180, MSFT: 340, GOOGL: 2800 }
  const basePrice = mockPrices[symbol] || 100

  const data = []
  let currentPrice = basePrice

  for (let i = 0; i < Math.min(dataPoints, 1000); i++) {
    const timestamp = start.getTime() + (i * intervalMs)

    const volatility = 0.02
    const randomChange = (Math.random() - 0.5) * volatility
    currentPrice = currentPrice * (1 + randomChange)

    const randomHigh = Math.random() * 0.02 + 0.005
    const randomLow = Math.random() * 0.02 + 0.005

    const openPrice = currentPrice
    const high = Math.max(openPrice, currentPrice) * (1 + randomHigh)
    const low = Math.min(openPrice, currentPrice) * (1 - randomLow)

    data.push({
      timestamp,
      open: Math.round(openPrice * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(currentPrice * 100) / 100,
      volume: Math.floor(Math.random() * 100000) + 10000,
      price: Math.round(currentPrice * 100) / 100
    })
  }

  return data
}

function getPeriodParameters(period, timeframe = null) {
  const easternTime = getEasternTime()

  // Define available timeframes for each period
  const timeframeMap = {
    '1D': timeframe || '1Min',
    '1W': timeframe || '5Min',
    '1M': timeframe || '1Hour',
    '3M': timeframe || '1Day'
  }

  // If custom timeframe provided, validate it
  const selectedTimeframe = timeframe || timeframeMap[period]

  // Calculate appropriate limit based on period and timeframe
  const limit = calculateDataLimit(period, selectedTimeframe)

  // Calculate start date based on period
  const startDate = calculateStartDate(period, easternTime)

  return {
    alpacaTimeframe: selectedTimeframe,
    limit,
    startDate
  }
}

function calculateDataLimit(period, timeframe) {
  // For daily (1Day) timeframes, use fixed limits based on period
  if (timeframe === '1Day') {
    const periodLimits = {
      '1D': 30,   // Get 30 recent trading days for daily view
      '1W': 50,   // Get 50 trading days for weekly view
      '1M': 100,  // Get 100 trading days for monthly view
      '3M': 200,  // Get 200 trading days for quarterly view
      '12M': 300  // Get 300 trading days for yearly view (~1.2 years)
    }
    return periodLimits[period] || 100
  }

  // For intraday timeframes, calculate based on trading hours
  const tradingMinutesPerDay = 390 // 6.5 hours × 60 minutes (9:30 AM - 4:00 PM EST)
  const timeframeMinutes = {
    '1Min': 1,
    '5Min': 5,
    '10Min': 10,
    '15Min': 15,
    '30Min': 30,
    '1Hour': 60,
    '4Hour': 240,
    '1Day': 1440
  }

  const minutes = timeframeMinutes[timeframe] || 5
  const periodDays = {
    '1D': 1,    // 1 trading day
    '1W': 5,    // 5 trading days
    '1M': 22,   // ~22 trading days per month
    '3M': 66,   // ~66 trading days per quarter
    '12M': 252  // ~252 trading days per year
  }
  const days = periodDays[period] || 1

  const dataPoints = Math.ceil((days * tradingMinutesPerDay) / minutes)

  // Ensure we have enough data for technical indicators
  const minPoints = Math.max(200, dataPoints)

  return Math.min(minPoints, 1000) // Cap at 1000 for API limits
}

function calculateStartDate(period, easternTime) {
  const periodDays = {
    '1D': 7,    // Look back 7 days to ensure we get recent trading data (accounts for weekends) + enables panning
    '1W': 14,   // Look back 14 days to get at least a week of trading days
    '1M': 45,   // Look back 45 days to ensure a full month of trading data
    '3M': 120,  // Look back 120 days to ensure 3 months of trading data
    '12M': 400  // Look back 400 days to ensure we get a full year of trading data
  }

  const days = periodDays[period] || 30
  return new Date(easternTime.getTime() - days * 24 * 60 * 60 * 1000)
}

export async function initializeMarketData() {
  if (IS_SIMULATION) {
    initializeMockPrices()
    return
  }

  console.log('📅 Initializing market data...')

  // Fetch market calendar and clock data in parallel with stock prices.
  const [calendarData, clockData, _] = await Promise.all([
    fetchMarketCalendar(),
    fetchMarketClock(),
    initializeStockPrices()
  ])

  console.log('✅ Market data initialization complete')
  return { calendar: calendarData, clock: clockData }
}

// Price Polling Functions
// --------------------------------------------------------
export function startPricePolling(subscribedStocks, broadcast) {
  if (IS_SIMULATION || isPollingActive) return

  console.log('🔄 Starting price polling for subscribed stocks...')
  isPollingActive = true

  pricePollingInterval = setInterval(async () => {
    try {
      // Only poll during market hours
      const marketStatus = await getMarketStatus()
      if (marketStatus.status !== 'open') {
        console.log('📊 Market closed, skipping price polling')
        return
      }

            // Fetch fresh prices for all subscribed stocks
      const priceUpdates = []
      for (const symbol of subscribedStocks) {
        try {
          // Force fresh price fetch by temporarily clearing cache
          const cachedPrice = state.stockPrices[symbol]
          delete state.stockPrices[symbol]

          const newPrice = await getPrice(symbol)
          if (newPrice > 0 && newPrice !== cachedPrice) {
            console.log(`💰 Price update: ${symbol} = $${newPrice.toFixed(3)} (was $${cachedPrice?.toFixed(3) || 'N/A'})`)

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
        } catch (error) {
          console.warn(`⚠️ Failed to poll price for ${symbol}:`, error.message)
        }
      }

      // Broadcast price updates
      if (priceUpdates.length > 0) {
        console.log(`📡 Broadcasting ${priceUpdates.length} price updates to ${state.wsClients.size} clients`)
        priceUpdates.forEach(update => broadcast(update))
      }
    } catch (error) {
      console.error('❌ Error in price polling:', error.message)
    }
      }, 1000) // Poll every 1 second

  console.log('✅ Price polling started (1 second intervals)')
}

export function stopPricePolling() {
  if (pricePollingInterval) {
    clearInterval(pricePollingInterval)
    pricePollingInterval = null
    isPollingActive = false
    console.log('🛑 Price polling stopped')
  }
}
