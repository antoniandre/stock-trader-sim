import axios from 'axios'
import { ALPACA_BASE_URL, ALPACA_API_BASE_URL, HEADERS, IS_SIMULATION, state } from './config.js'
import { getEasternTime, getCurrencyInfo } from './utils.js'
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

  // Try multiple endpoints in order of preference for different market conditions.
  const endpoints = [
    // Real-time quote (best for active trading hours).
    {
      url: `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/quotes/latest`,
      type: 'quote',
      priority: 1
    },
    // Latest trade (good for extended hours).
    {
      url: `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/trades/latest`,
      type: 'trade',
      priority: 2
    },
    // Daily bar (fallback when markets are closed).
    {
      url: `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars/latest?timeframe=1Day`,
      type: 'bar',
      priority: 3
    }
  ]

  for (const endpoint of endpoints) {
    try {
      console.log(`💰 Fetching ${symbol} price from ${endpoint.type} endpoint...`)
      const { data } = await axios.get(endpoint.url, { headers: HEADERS })
      let price = 0

      // Extract price based on endpoint type.
      // For quotes, prefer ask price, fallback to bid.
      if (endpoint.type === 'quote') price = data.quote?.ap || data.quote?.bp || 0
      // For trades, use the trade price.
      else if (endpoint.type === 'trade') price = data.trade?.p || 0
      // For bars, use the closing price.
      else if (endpoint.type === 'bar') price = data.bar?.c || 0

      if (price > 0) {
        console.log(`💲 Got ${symbol} price: $${price.toFixed(3)} from ${endpoint.type}`)
        state.stockPrices[symbol] = price
        return price
      }
    }
    catch (error) {
      console.warn(`⚠️ Failed to fetch ${symbol} from ${endpoint.type}: ${error.message}`)

      // Special handling for common API errors.
      if (error.response?.status === 429) {
        console.warn(`🚦 Rate limited on ${endpoint.type}, waiting before trying next endpoint...`)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }
  }

  console.warn(`⚠️ No price data available for ${symbol} from any endpoint`)
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
    const { alpacaTimeframe, limit, maxHistoricalDays } = getPeriodParameters(period, timeframe)
    let endDate = getEasternTime()

    // For intraday data, adjust end time to respect free tier 15-minute delay
    if (['1Min', '5Min', '10Min', '15Min', '30Min', '1Hour'].includes(alpacaTimeframe)) {
      const fifteenMinutesAgo = new Date(endDate.getTime() - 15 * 60 * 1000)
      endDate = fifteenMinutesAgo
    }

    // Calculate optimal start date to maximize historical data while staying within limits.
    const startDate = calculateOptimalStartDate(period, endDate, maxHistoricalDays)

    console.log(`📊 Fetching ${symbol} data: ${period}/${alpacaTimeframe}`)
    console.log(`📅 Date range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]} (${Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000))} days)`)
    console.log(`📈 Expected data points: ~${limit} (limit: ${limit})`)

    // Fetch data with pagination support for maximum historical coverage.
    const allBars = await fetchHistoricalDataWithPagination(symbol, alpacaTimeframe, startDate, endDate, limit)

    if (!allBars || allBars.length === 0) {
      console.warn(`⚠️ No data for ${symbol}, using mock`)
      return generateMockHistoricalData(symbol, period, timeframe)
    }

    const historicalData = allBars.map(bar => ({
      timestamp: new Date(bar.t).getTime(),
      open: bar.o,
      high: bar.h,
      low: bar.l,
      close: bar.c,
      volume: bar.v,
      price: bar.c
    }))

    // Sort by timestamp to ensure proper order.
    historicalData.sort((a, b) => a.timestamp - b.timestamp)

    console.log(`✅ Fetched ${historicalData.length} data points for ${symbol}`)
    console.log(`📊 Data range: ${new Date(historicalData[0]?.timestamp).toLocaleString()} to ${new Date(historicalData[historicalData.length - 1]?.timestamp).toLocaleString()}`)

    // Check if the data ends more than 2 days ago (indicating stale data).
    const lastDataTime = historicalData[historicalData.length - 1]?.timestamp
    const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000)
    if (lastDataTime < twoDaysAgo) {
      console.warn(`⚠️ Data for ${symbol} ends on ${new Date(lastDataTime).toDateString()}, which is more than 2 days old. Today is ${new Date().toDateString()}`)
      console.warn(`⚠️ This could be due to: market closure, weekends, holidays, or API limitations`)
    }

    return { symbol, period, timeframe: alpacaTimeframe, data: historicalData }
  }
  catch (error) {
    // Handle free tier limitations gracefully.
    if (error.response?.status === 403 && error.response?.data?.message?.includes('subscription does not permit')) {
      console.log(`🔒 Free tier limitation for ${symbol} - trying with daily data instead`)

      // Retry with daily timeframe for free tier compatibility.
      if (timeframe !== '1Day') {
        return getStockHistoricalData(symbol, period, '1Day')
      }
    }

    console.error(`❌ Error fetching data for ${symbol}:`, error.response?.data?.message || error.message)
    return generateMockHistoricalData(symbol, period, timeframe)
  }
}

// Enhanced function with progressive loading strategy.
export async function getStockHistoricalDataProgressive(symbol, period = '1D', timeframe = null) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock data for ${symbol} (${period}, ${timeframe || 'auto'})`)
    return generateMockHistoricalData(symbol, period, timeframe)
  }

  try {
    const { alpacaTimeframe, limit, maxHistoricalDays } = getPeriodParameters(period, timeframe)
    let endDate = getEasternTime()

    // For intraday data, adjust end time to respect free tier 15-minute delay.
    if (['1Min', '5Min', '10Min', '15Min', '30Min', '1Hour'].includes(alpacaTimeframe)) {
      const fifteenMinutesAgo = new Date(endDate.getTime() - 15 * 60 * 60 * 1000)
      endDate = fifteenMinutesAgo
    }

    // Progressive loading: Start with recent data for immediate display.
    const recentStartDate = getRecentStartDate(period, endDate)
    const fullStartDate = calculateOptimalStartDate(period, endDate, maxHistoricalDays)

    console.log(`📊 Progressive loading for ${symbol}: ${period}/${alpacaTimeframe}`)
    console.log(`📅 Phase 1 - Recent data: ${recentStartDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`)
    console.log(`📅 Phase 2 - Full range: ${fullStartDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`)

    // Phase 1: Fetch recent data first (larger initial request for better UX).
    const recentLimit = Math.min(2000, Math.floor(limit * 0.6)) // 60% of total limit for recent data.
    console.log(`📊 Fetching recent data (${recentLimit} points max)...`)

    const recentBars = await fetchHistoricalDataWithPagination(
      symbol,
      alpacaTimeframe,
      recentStartDate,
      endDate,
      recentLimit
    )

    if (!recentBars || recentBars.length === 0) {
      console.warn(`⚠️ No recent data for ${symbol}, trying full range`)
      // Fallback to original method.
      return getStockHistoricalData(symbol, period, timeframe)
    }

    // Convert recent data.
    const recentHistoricalData = recentBars.map(bar => ({
      timestamp: new Date(bar.t).getTime(),
      open: bar.o,
      high: bar.h,
      low: bar.l,
      close: bar.c,
      volume: bar.v,
      price: bar.c
    })).sort((a, b) => a.timestamp - b.timestamp)

    console.log(`✅ Phase 1 complete: ${recentHistoricalData.length} recent data points`)

    // Return recent data immediately for fast initial display.
    const recentResult = {
      symbol,
      period,
      timeframe: alpacaTimeframe,
      data: recentHistoricalData,
      isProgressive: true,
      loadingMore: true
    }

    // Phase 2: Load full historical data in background if needed.
    if (fullStartDate < recentStartDate) {
      console.log(`📊 Starting background load of historical data...`)

      // Don't await this - let it load in background.
      fetchHistoricalDataWithPagination(
        symbol,
        alpacaTimeframe,
        fullStartDate,
        recentStartDate, // End where recent data began.
        limit - recentLimit // Remaining limit.
      ).then(historicalBars => {
        if (historicalBars && historicalBars.length > 0) {
          const historicalData = historicalBars.map(bar => ({
            timestamp: new Date(bar.t).getTime(),
            open: bar.o,
            high: bar.h,
            low: bar.l,
            close: bar.c,
            volume: bar.v,
            price: bar.c
          }))

          console.log(`✅ Phase 2 complete: ${historicalData.length} additional historical points`)

          // Broadcast the additional data to any listeners.
          if (typeof global !== 'undefined' && global.broadcastHistoricalDataUpdate) {
            global.broadcastHistoricalDataUpdate({
              symbol,
              period,
              timeframe: alpacaTimeframe,
              additionalData: historicalData,
              isComplete: true
            })
          }
        }
      }).catch(error => {
        console.warn(`⚠️ Background historical data load failed for ${symbol}:`, error.message)
      })
    }

    return recentResult

  } catch (error) {
    console.error(`❌ Progressive loading failed for ${symbol}:`, error.message)
    // Fallback to original method.
    return getStockHistoricalData(symbol, period, timeframe)
  }
}

// New function to fetch data with pagination support.
async function fetchHistoricalDataWithPagination(symbol, timeframe, startDate, endDate, maxLimit = 10000) {
  const allBars = []
  let pageToken = null
  let requestCount = 0
  const maxRequests = 10 // Prevent infinite loops.

  do {
    try {
      const params = new URLSearchParams({
        timeframe: timeframe,
        limit: Math.min(10000, maxLimit).toString(), // Use Alpaca's maximum limit of 10,000.
        start: startDate.toISOString(),
        end: endDate.toISOString()
      })

      if (pageToken) {
        params.append('page_token', pageToken)
      }

      const url = `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars?${params}`
      console.log(`📊 Fetching page ${requestCount + 1} for ${symbol}${pageToken ? ' (paginated)' : ''}`)

      const { data } = await axios.get(url, { headers: HEADERS })

      if (data.bars && data.bars.length > 0) {
        allBars.push(...data.bars)
        console.log(`📊 Fetched ${data.bars.length} bars (total: ${allBars.length})`)
      }

      // Check for next page.
      pageToken = data.next_page_token
      requestCount++

      // Safety check to prevent too many requests.
      if (requestCount >= maxRequests) {
        console.warn(`⚠️ Reached maximum pagination requests (${maxRequests}) for ${symbol}`)
        break
      }

      // Stop if we have enough data or no more pages.
      if (!pageToken || allBars.length >= maxLimit) {
        break
      }

      // Small delay between requests to be respectful to API.
      await new Promise(resolve => setTimeout(resolve, 100))

    }
    catch (error) {
      console.error(`❌ Error fetching paginated data for ${symbol}:`, error.message)
      break
    }
  }
  while (pageToken && requestCount < maxRequests)

  console.log(`✅ Pagination complete for ${symbol}: ${allBars.length} total bars from ${requestCount} requests`)
  return allBars
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

    const url = `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars?${params}`
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
  const timeframeMap = { '1D': timeframe || '5Min', '1W': timeframe || '1Hour', '1M': timeframe || '1Day', '3M': timeframe || '1Day' }
  const selectedTimeframe = timeframe || timeframeMap[period]
  const limit = calculateDataLimit(period, selectedTimeframe)
  const maxHistoricalDays = calculateMaxHistoricalDays(period)

  return { alpacaTimeframe: selectedTimeframe, limit, maxHistoricalDays }
}

function calculateDataLimit(period, timeframe) {
  // Use Alpaca's maximum limit of 10,000 for optimal data retrieval.
  // Adjust based on period and timeframe to balance historical coverage with performance.

  if (timeframe === '1Day') {
    // For daily data, we can fetch several years of data efficiently.
    const periodLimits = {
      '1D': 100,    // ~3 months of daily data
      '1W': 500,    // ~2 years of daily data
      '1M': 2000,   // ~5 years of daily data
      '3M': 5000,   // ~13 years of daily data
      '12M': 10000  // Maximum available daily data
    }
    return periodLimits[period] || 2000
  }

  // For intraday data, calculate based on trading minutes and desired coverage.
  const tradingMinutesPerDay = 390 // 6.5 hours * 60 minutes
  const timeframeMinutes = {
    '1Min': 1,
    '5Min': 5,
    '10Min': 10,
    '15Min': 15,
    '30Min': 30,
    '1Hour': 60,
    '4Hour': 240
  }

  const minutes = timeframeMinutes[timeframe] || 5

  // Calculate optimal coverage days based on period.
  const optimalCoverageDays = {
    '1D': 15,   // 3 weeks for intraday (more context).
    '1W': 30,   // 1 month for intraday
    '1M': 90,   // 3 months for intraday
    '3M': 180,  // 6 months for intraday
    '12M': 365  // 1 year for intraday (maximum useful coverage).
  }

  const days = optimalCoverageDays[period] || 30
  const estimatedDataPoints = Math.ceil((days * tradingMinutesPerDay) / minutes)

  // Ensure we don't exceed Alpaca's 10,000 limit but aim high for maximum coverage.
  const targetLimit = Math.min(estimatedDataPoints * 1.2, 10000) // 20% buffer

  // Set higher minimums to ensure we get meaningful data.
  const minimumPoints = {
    '1D': 1000,  // At least 1000 points for 1D period (more data for better analysis)
    '1W': 2000,  // At least 2000 points for 1W period
    '1M': 3000,  // At least 3000 points for 1M period
    '3M': 5000,  // At least 5000 points for 3M period
    '12M': 8000  // At least 8000 points for 12M period
  }

  const minPoints = minimumPoints[period] || 1000

  return Math.max(minPoints, Math.min(targetLimit, 10000))
}

function calculateStartDate(period, easternTime) {
  // Calculate start dates to maximize historical coverage while being practical.
  // These are generous ranges that will be constrained by the API limits above.
  const periodDays = {
    '1D': 30,    // 1 month back for 1D period
    '1W': 90,    // 3 months back for 1W period
    '1M': 365,   // 1 year back for 1M period
    '3M': 1095,  // 3 years back for 3M period
    '12M': 1825  // 5 years back for 12M period
  }
  const days = periodDays[period] || 90
  return new Date(easternTime.getTime() - days * 24 * 60 * 60 * 1000)
}

function getRecentStartDate(period, endDate) {
  // This function is now used as a fallback for when we need recent data focus.
  // Kept for backward compatibility but optimized for better coverage.
  const recentDays = {
    '1D': 7,     // 1 week for recent focus
    '1W': 21,    // 3 weeks for recent focus
    '1M': 60,    // 2 months for recent focus
    '3M': 120,   // 4 months for recent focus
    '12M': 365   // 1 year for recent focus
  }
  const days = recentDays[period] || 14
  return new Date(endDate.getTime() - days * 24 * 60 * 60 * 1000)
}

function calculateOptimalStartDate(period, endDate, maxHistoricalDays) {
  // Start with our ideal start date for maximum coverage.
  const idealStartDate = calculateStartDate(period, endDate)
  const daysSinceIdealStart = Math.ceil((endDate - idealStartDate) / (24 * 60 * 60 * 1000))

  // If our ideal range fits within limits, use it.
  if (daysSinceIdealStart <= maxHistoricalDays) {
    return idealStartDate
  }

  // Otherwise, go back as far as we're allowed.
  return new Date(endDate.getTime() - maxHistoricalDays * 24 * 60 * 60 * 1000)
}

function calculateMaxHistoricalDays(period) {
  // Maximum days we'll go back based on period and practical limits.
  // These align with our data limit calculations above.
  const maxDays = {
    '1D': 90,    // 3 months max for 1D
    '1W': 180,   // 6 months max for 1W
    '1M': 730,   // 2 years max for 1M
    '3M': 1095,  // 3 years max for 3M
    '12M': 1825  // 5 years max for 12M
  }
  return maxDays[period] || 365
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
let lastPollTime = 0

export function startPricePolling(subscribedStocks, broadcast) {
  if (IS_SIMULATION || isPollingActive) return

  // Don't start polling if WebSocket is connected and active
  if (state.alpacaWebSocket && state.alpacaWebSocket.readyState === 1) {
    console.log('🔄 WebSocket is active - skipping price polling to avoid conflicts')
    return
  }

  console.log('🔄 Starting price polling...')
  isPollingActive = true
  lastPollTime = Date.now()

  pricePollingInterval = setInterval(async () => {
    try {
      const marketStatus = await getMarketStatus()

      // Determine polling interval based on market status.
      const pollIntervalMs = getPollIntervalForStatus(marketStatus.status) * 1000
      const timeSinceLastPoll = Date.now() - lastPollTime

      // Check if enough time has passed for this market status.
      // Don't log every skip to avoid spam.
      if (timeSinceLastPoll < pollIntervalMs) return

      console.log(`📊 Market ${marketStatus.status}, polling for price updates...`)
      lastPollTime = Date.now()

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

      if (priceUpdates.length) {
        console.log(`📡 Broadcasting ${priceUpdates.length} price updates (${marketStatus.status})`)
        for (const update of priceUpdates) broadcast(update)
      }
    }
    catch (error) {
      console.error('❌ Error in price polling:', error.message)
    }
  }, 1000) // Check every second, but actual polling frequency controlled by market status.

  console.log('✅ Price polling started')
}

// Helper function for polling strategy
function getPollIntervalForStatus(marketStatus) {
  switch (marketStatus) {
    case 'open':
      return 1 // Poll every 1 second during market hours.
    case 'premarket':
    case 'afterhours':
      return 5 // Poll every 5 seconds during extended hours.
    case 'overnight':
    case 'closed':
      return 30 // Poll every 30 seconds when closed (to get latest available data).
    default:
      return 60 // Very slow fallback.
  }
}

export function stopPricePolling() {
  if (pricePollingInterval) {
    clearInterval(pricePollingInterval)
    pricePollingInterval = null
    isPollingActive = false
    lastPollTime = 0 // Reset for clean restart.
    console.log('🛑 Price polling stopped')
  }
}

