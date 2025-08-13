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
      url: `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/quotes/latest?feed=iex`,
      type: 'quote',
      priority: 1
    },
    // Latest trade (good for extended hours).
    {
      url: `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/trades/latest?feed=iex`,
      type: 'trade',
      priority: 2
    },
    // Daily bar (fallback when markets are closed).
    {
      url: `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars/latest?timeframe=1Day&feed=iex`,
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
// STRATEGY: We fetch substantial amounts of historical data to enable seamless chart interaction.
// This allows users to pan back in time and zoom out without additional API calls or loading delays.
// The frontend chart will auto-focus on recent data but keeps all historical data available.

export async function getStockHistoricalData(symbol, period = '1D', timeframe = null) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock data for ${symbol} (${period}, ${timeframe || 'auto'})`)
    return generateMockHistoricalData(symbol, period, timeframe)
  }

  try {
    const { alpacaTimeframe, limit, maxHistoricalDays } = getPeriodParameters(period, timeframe)
    let endDate = getEasternTime()

    // WORKAROUND: For 1D period, IEX historical data might be delayed
    // Try different end dates to find the most recent available data
    if (period === '1D') {
      console.log(`📊 1D Period: Attempting to find most recent available data for ${symbol}`)

      // Try current time first, then go back day by day if no data
      for (let daysBack = 0; daysBack <= 7; daysBack++) {
        const testEndDate = new Date(getEasternTime().getTime() - (daysBack * 24 * 60 * 60 * 1000))
        const testStartDate = new Date(testEndDate.getTime() - (2 * 24 * 60 * 60 * 1000)) // 2 days range

        console.log(`📅 Trying data range: ${testStartDate.toISOString().split('T')[0]} to ${testEndDate.toISOString().split('T')[0]} (${daysBack} days back)`)

        try {
          const testBars = await fetchHistoricalDataWithPagination(symbol, alpacaTimeframe, testStartDate, testEndDate, 500)

          if (testBars && testBars.length > 10) {
            console.log(`✅ Found ${testBars.length} data points ${daysBack} days back - using this range`)
            endDate = testEndDate
            break
          }
        } catch (error) {
          console.log(`⚠️ No data found ${daysBack} days back, trying further back...`)
        }
      }
    }

    // Calculate optimal start date to maximize historical data while staying within limits.
    // This gives users plenty of data to pan back through without hitting API limits.
    const startDate = calculateOptimalStartDate(period, endDate, maxHistoricalDays)

    console.log(`📊 Fetching ${symbol} data: ${period}/${alpacaTimeframe}`)
    console.log(`📅 Date range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]} (${Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000))} days)`)
    console.log(`📈 Expected data points: ~${limit} (limit: ${limit})`)

    // Fetch data with pagination support for maximum historical coverage.
    // This ensures we get as much data as possible within Alpaca's limits.
    const allBars = await fetchHistoricalDataWithPagination(symbol, alpacaTimeframe, startDate, endDate, limit)

    if (!allBars || allBars.length === 0) {
      console.error(`❌ ALPACA DATA ISSUE: No historical data returned for ${symbol}`)
      console.error(`❌ Period: ${period}, Timeframe: ${alpacaTimeframe}`)
      console.error(`❌ Date range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`)

      return {
        symbol,
        period,
        timeframe: alpacaTimeframe,
        data: [],
        error: `No historical data available from Alpaca for ${symbol}`,
        warning: 'Alpaca API returned no data for the requested period and timeframe.'
      }
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

    // For 1D period, filter to get continuous trading session data (remove gaps)
    if (period === '1D') {
      const filteredData = filterToContinuousTrading(historicalData, symbol)
      if (filteredData.length > 0) {
        console.log(`📊 Filtered to continuous trading data: ${historicalData.length} → ${filteredData.length} points`)

        // FIRST: Check if the historical data is from a different trading day
        // This must happen BEFORE bridging to avoid masking the real issue
        const lastHistoricalTime = filteredData[filteredData.length - 1]?.timestamp
        const now = Date.now()

        // Convert both timestamps to Eastern Time dates for proper comparison
        // Alpaca operates in Eastern Time, so we need to compare trading days in ET
        const lastDataDateET = new Date(lastHistoricalTime).toLocaleDateString('en-US', {
          timeZone: 'America/New_York'
        })

        const currentDateET = new Date(now).toLocaleDateString('en-US', {
          timeZone: 'America/New_York'
        })

        const isFromDifferentTradingDay = lastDataDateET !== currentDateET
        const timeDifference = now - lastHistoricalTime
        const hoursOld = Math.floor(timeDifference / (60 * 60 * 1000))

        console.log(`📊 Data age check for ${symbol}:`, {
          lastHistoricalTime: new Date(lastHistoricalTime).toISOString(),
          lastDataDateET: lastDataDateET,
          currentDateET: currentDateET,
          isFromDifferentTradingDay: isFromDifferentTradingDay,
          hoursOld: hoursOld
        })

        // If data is from a different trading day, return warning immediately (don't bridge with current price).
        if (isFromDifferentTradingDay) {
          console.error(`❌ ALPACA DATA ISSUE: Historical data for ${symbol} is from ${lastDataDateET}, current ET trading day is ${currentDateET}`)
          console.error(`❌ Last data: ${new Date(lastHistoricalTime).toLocaleString('en-US', { timeZone: 'America/New_York' })}`)
          console.error(`❌ Current ET time: ${new Date(now).toLocaleString('en-US', { timeZone: 'America/New_York' })}`)
          console.error(`❌ Age: ${hoursOld} hours old`)

          // Return the old data with a clear warning - DO NOT bridge with current price.
          return {
            symbol,
            period,
            timeframe: alpacaTimeframe,
            data: filteredData,
            dataAge: hoursOld,
            lastDataDate: lastDataDateET,
            currentDate: currentDateET,
            warning: `Historical data is from ${lastDataDateET} (${hoursOld} hours old). Current ET trading day is ${currentDateET}. Chart shows old trading session data.`
          }
        }

        // If data is from today, proceed with normal bridging for intraday gaps
        const bridgedData = await bridgeHistoricalWithCurrent(filteredData, symbol)
        return { symbol, period, timeframe: alpacaTimeframe, data: bridgedData }
      }
    }

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

    return {
      symbol,
      period,
      timeframe: timeframe || 'auto',
      data: [],
      error: error.response?.data?.message || error.message,
      warning: 'Failed to fetch historical data from Alpaca API.'
    }
  }
}

// Enhanced function with progressive loading strategy.
// PROGRESSIVE LOADING STRATEGY:
// Phase 1: Fetch recent data first for immediate chart display (better UX)
// Phase 2: Load full historical data in background for seamless panning/zooming
// This approach gives users instant charts while building a rich dataset behind the scenes.
export async function getStockHistoricalDataProgressive(symbol, period = '1D', timeframe = null) {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock data for ${symbol} (${period}, ${timeframe || 'auto'})`)
    return generateMockHistoricalData(symbol, period, timeframe)
  }

  try {
    const { alpacaTimeframe, limit, maxHistoricalDays } = getPeriodParameters(period, timeframe)
    const endDate = getEasternTime()

    // Progressive loading: Start with recent data for immediate display.
    // For 1D period, this focuses on current trading day for immediate intraday view.
    const recentStartDate = getRecentStartDate(period, endDate)
    const fullStartDate = calculateOptimalStartDate(period, endDate, maxHistoricalDays)

    console.log(`📊 Progressive loading for ${symbol}: ${period}/${alpacaTimeframe}`)
    console.log(`📅 Phase 1 - Recent data: ${recentStartDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`)
    console.log(`📅 Phase 2 - Full range: ${fullStartDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`)

    // Phase 1: Fetch recent data first (60% of limit for immediate display).
    // This ensures users see charts quickly, especially important for intraday trading.
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
    // This runs asynchronously so users can interact with charts while data loads.
    if (fullStartDate < recentStartDate) {
      console.log(`📊 Starting background load of historical data...`)

      // Don't await this - let it load in background for seamless UX.
      fetchHistoricalDataWithPagination(
        symbol,
        alpacaTimeframe,
        fullStartDate,
        recentStartDate, // End where recent data began.
        limit - recentLimit // Remaining limit for historical data.
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
          // This allows charts to seamlessly extend their dataset without user interaction.
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
// PAGINATION STRATEGY:
// Alpaca limits individual requests to 10,000 bars, but we want more historical data.
// This function automatically handles pagination using next_page_token to fetch
// comprehensive datasets that exceed the single-request limit.
// Result: Users get seamless charts with extensive historical data for analysis.
async function fetchHistoricalDataWithPagination(symbol, timeframe, startDate, endDate, maxLimit = 10000) {
  const allBars = []
  let pageToken = null
  let requestCount = 0
  const maxRequests = 10 // Prevent infinite loops and respect API rate limits.

  do {
    try {
      const params = new URLSearchParams({
        timeframe: timeframe,
        limit: Math.min(10000, maxLimit).toString(), // Use Alpaca's maximum limit of 10,000 per request.
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        feed: 'iex'
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

      // Check for next page - Alpaca provides this token when more data is available.
      pageToken = data.next_page_token
      requestCount++

      // Safety check to prevent too many requests and respect API rate limits.
      if (requestCount >= maxRequests) {
        console.warn(`⚠️ Reached maximum pagination requests (${maxRequests}) for ${symbol}`)
        break
      }

      // Stop if we have enough data or no more pages available.
      if (!pageToken || allBars.length >= maxLimit) {
        break
      }

      // Small delay between requests to be respectful to API rate limits.
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
      end: end.toISOString(),
      feed: 'iex'
    })

    const url = `${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars?${params}`
    console.log(`📊 Fetching range data for ${symbol}: ${timeframe}`)

    const { data } = await axios.get(url, { headers: HEADERS })

    if (!data.bars || data.bars.length === 0) {
      console.error(`❌ ALPACA DATA ISSUE: No range data for ${symbol}`)
      return { symbol, timeframe, data: [], error: 'No range data returned by Alpaca.' }
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
      console.error(`❌ ALPACA DATA ISSUE: Range data outdated for ${symbol}`)
      return { symbol, timeframe, data: historicalData, warning: 'Range data appears outdated from Alpaca.' }
    }

    console.log(`✅ Fetched ${historicalData.length} range data points for ${symbol}`)
    return { symbol, timeframe, data: historicalData }
  }
  catch (error) {
    console.error(`❌ Error fetching range data for ${symbol}:`, error.message)
    return { symbol, timeframe, data: [], error: error.message }
  }
}

// Helper Functions
// --------------------------------------------------------
// Helper function to filter historical data to continuous trading sessions (removes gaps)
function filterToContinuousTrading(historicalData, symbol) {
  if (!historicalData || historicalData.length === 0) return []

  console.log(`📊 Filtering ${historicalData.length} data points for continuous trading session`)

  // Filter data to regular trading hours (9:30 AM - 4:00 PM ET)
  const tradingHoursData = []

  historicalData.forEach(point => {
    const pointTime = new Date(point.timestamp)

    // Convert to Eastern Time
    const etTimeString = pointTime.toLocaleString('en-US', {
      timeZone: 'America/New_York',
      hour12: false
    })

    // Parse the time - format: "M/D/YYYY, HH:MM:SS".
    const timePart = etTimeString.split(', ')[1] // Get "HH:MM:SS".
    const [hourStr, minuteStr] = timePart.split(':')
    const etHour = parseInt(hourStr)
    const etMinute = parseInt(minuteStr)
    const timeInMinutes = etHour * 60 + etMinute

    // Trading hours: 9:30 AM (570 min) to 4:00 PM (960 min) ET.
    const marketOpen = 9 * 60 + 30  // 9:30 AM = 570 minutes.
    const marketClose = 16 * 60     // 4:00 PM = 960 minutes.

    if (timeInMinutes >= marketOpen && timeInMinutes <= marketClose) {
      tradingHoursData.push(point)
    }
  })

  console.log(`📊 Filtered to ${tradingHoursData.length} trading hours data points`)

  if (tradingHoursData.length === 0) {
    console.warn(`⚠️ No trading hours data found for ${symbol}, returning original data`)
    return historicalData
  }

  // Sort by timestamp to ensure proper order
  tradingHoursData.sort((a, b) => a.timestamp - b.timestamp)

  console.log(`📊 Final filtered data: ${tradingHoursData.length} points from ${new Date(tradingHoursData[0].timestamp).toLocaleString()} to ${new Date(tradingHoursData[tradingHoursData.length - 1].timestamp).toLocaleString()}`)

  return tradingHoursData
}

// Helper function to bridge historical data with current real-time price.
async function bridgeHistoricalWithCurrent(historicalData, symbol) {
  if (!historicalData || historicalData.length === 0) return historicalData

  try {
    // Get the current real-time price.
    const currentPrice = await getPrice(symbol)
    if (!currentPrice || currentPrice <= 0) {
      console.log(`📊 No current price available for ${symbol}, returning historical data as-is`)
      return historicalData
    }

    const lastHistoricalPoint = historicalData[historicalData.length - 1]
    const currentTime = Date.now()

    // Check if there's a significant time gap (more than 1 hour) between last historical data and now.
    const timeDifference = currentTime - lastHistoricalPoint.timestamp
    const oneHour = 60 * 60 * 1000

    if (timeDifference > oneHour) {
      console.log(`📊 Bridging ${Math.round(timeDifference / oneHour * 10) / 10} hour gap between historical data and current price for ${symbol}`)

      // Create a current price data point
      const currentPricePoint = {
        timestamp: currentTime,
        open: currentPrice,
        high: currentPrice,
        low: currentPrice,
        close: currentPrice,
        volume: 0, // No volume data for current price
        price: currentPrice
      }

      // Add the current price point to bridge the gap
      const bridgedData = [...historicalData, currentPricePoint]

      console.log(`📊 Added current price point: $${currentPrice} at ${new Date(currentTime).toLocaleString()}`)
      return bridgedData
    }

    console.log(`📊 No significant gap detected for ${symbol}, returning historical data as-is`)
    return historicalData

  } catch (error) {
    console.warn(`⚠️ Failed to bridge historical data with current price for ${symbol}:`, error.message)
    return historicalData
  }
}

function calculateDataLimitForRange(timeframe, rangeDays) {
  const timeframeMinutes = { '1Min': 1, '5Min': 5, '15Min': 15, '30Min': 30, '1Hour': 60, '4Hour': 240, '1Day': 1440 }
  const minutes = timeframeMinutes[timeframe] || 60
  const tradingMinutesPerDay = 390

  if (timeframe === '1Day') return Math.min(rangeDays + 10, 1000)

  const estimatedDataPoints = Math.ceil((rangeDays * tradingMinutesPerDay) / minutes)
  return Math.min(estimatedDataPoints + 50, 1000)
}

function getPeriodParameters(period, timeframe = null) {
  const timeframeMap = {
    '1D': timeframe || '5Min',
    '1W': timeframe || '1Hour',
    '1M': timeframe || '1Day',
    '3M': timeframe || '1Day',
    '1Y': timeframe || '1Day', // 1 year - daily data optimal.
    '5Y': timeframe || '1Day' // 5 years - daily data only practical option.
  }
  const selectedTimeframe = timeframe || timeframeMap[period]
  const limit = calculateDataLimit(period, selectedTimeframe)
  const maxHistoricalDays = calculateMaxHistoricalDays(period)

  return { alpacaTimeframe: selectedTimeframe, limit, maxHistoricalDays }
}

function calculateDataLimit(period, timeframe) {
  // DATA FETCHING STRATEGY:
  // We aim to fetch substantial historical data to enable seamless chart interactions.
  // Users can pan back weeks/months and zoom out without additional API calls.
  // We balance this with API limits (10,000 max) and performance considerations.

  // Use Alpaca's maximum limit of 10,000 for optimal data retrieval.
  // Adjust based on period and timeframe to balance historical coverage with performance.

  if (timeframe === '1Day') {
    // For daily data, we can fetch several years of data efficiently.
    // Daily bars are lightweight so we can afford more historical coverage.
    const periodLimits = {
      '1D': 100,    // ~3 months of daily data (for context when zooming out).
      '1W': 500,    // ~2 years of daily data (weekly view needs more context).
      '1M': 2000,   // ~5 years of daily data (monthly view benefits from long history).
      '3M': 5000,   // ~13 years of daily data (quarterly analysis needs extensive history).
      '1Y': 8000,   // ~22 years of daily data (yearly view gets maximum context).
      '5Y': 10000,  // Maximum 10,000 daily bars (~27 years, limited by date range).
      '12M': 10000  // Maximum available daily data for comprehensive analysis.
    }
    return periodLimits[period] || 2000
  }

  // For intraday data, calculate based on trading minutes and desired coverage.
  // Intraday bars are more data-intensive but provide granular detail for active trading.
  const tradingMinutesPerDay = 390 // 6.5 hours * 60 minutes.
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
  // More coverage = better panning/zooming experience but higher API usage.
  const optimalCoverageDays = {
    '1D': 2,    // 2 days for intraday (ensures we get the most recent complete trading day).
    '1W': 30,   // 1 month for weekly view (sufficient context for weekly analysis).
    '1M': 90,   // 3 months for monthly view (quarterly context for monthly trends).
    '3M': 180,  // 6 months for quarterly view (semi-annual context).
    '1Y': 365,  // 1 year for yearly view (full year of intraday data).
    '5Y': 730,  // 2 years for 5-year view (practical limit for intraday storage).
    '12M': 365  // 1 year for 12-month view (balance between detail and coverage).
  }

  const days = optimalCoverageDays[period] || 30
  const estimatedDataPoints = Math.ceil((days * tradingMinutesPerDay) / minutes)

  // Ensure we don't exceed Alpaca's 10,000 limit but aim high for maximum coverage.
  // The 20% buffer accounts for market holidays and partial trading days.
  const targetLimit = Math.min(estimatedDataPoints * 1.2, 10000) // 20% buffer.

  // Set higher minimums to ensure we get meaningful data.
  // These minimums prevent too-sparse datasets that would hurt chart quality.
  const minimumPoints = {
    '1D': 1000,  // At least 1000 points for 1D period (ensures detailed intraday view).
    '1W': 2000,  // At least 2000 points for 1W period (weekly patterns need density).
    '1M': 3000,  // At least 3000 points for 1M period (monthly trends require detail).
    '3M': 5000,  // At least 5000 points for 3M period (quarterly analysis needs depth).
    '1Y': 8000,  // At least 8000 points for 1Y period (yearly view gets priority).
    '5Y': 10000, // Maximum 10000 points for 5Y period (use full API allowance).
    '12M': 8000  // At least 8000 points for 12M period (comprehensive annual data).
  }

  const minPoints = minimumPoints[period] || 1000

  return Math.max(minPoints, Math.min(targetLimit, 10000))
}

function calculateStartDate(period, easternTime) {
  // HISTORICAL RANGE CALCULATION:
  // These are generous start dates that maximize historical coverage for seamless chart interaction.
  // The actual data fetched will be constrained by the limits calculated above.
  // Goal: Give users as much historical context as possible for panning and analysis.

  // Calculate start dates to maximize historical coverage while being practical.
  // These are generous ranges that will be constrained by the API limits above.
  const periodDays = {
    '1D': 1,     // 1 day back for 1D period (most recent trading day only).
    '1W': 90,    // 3 months back for 1W period (quarterly context for weekly analysis).
    '1M': 365,   // 1 year back for 1M period (full year context for monthly trends).
    '3M': 1095,  // 3 years back for 3M period (long-term context for quarterly analysis).
    '1Y': 1825,  // 5 years back for 1Y period (maximum historical context for yearly view).
    '5Y': 1825,  // 5 years back for 5Y period (exactly what user requested).
    '12M': 1825  // 5 years back for 12M period (comprehensive historical analysis).
  }
  const days = periodDays[period] || 90
  return new Date(easternTime.getTime() - days * 24 * 60 * 60 * 1000)
}

function getRecentStartDate(period, endDate) {
  // PROGRESSIVE LOADING - RECENT DATA FOCUS:
  // This function determines how much "recent" data to fetch in Phase 1 of progressive loading.
  // For 1D period: Focus on current trading day for immediate intraday chart display.
  // For longer periods: Fetch proportionally recent data for quick initial chart rendering.

  // This function is used for progressive loading - fetch recent data first for immediate display.
  // For 1D period, focus on current trading day for initial view.
  const recentDays = {
    '1D': 1,     // Current trading day for immediate intraday focus (key for day traders).
    '1W': 7,     // 1 week for recent focus (shows recent weekly activity).
    '1M': 30,    // 1 month for recent focus (recent monthly trends).
    '3M': 60,    // 2 months for recent focus (recent quarterly activity).
    '1Y': 180,   // 6 months for recent focus (recent activity in yearly context).
    '5Y': 365,   // 1 year for recent focus (recent trends in 5-year context).
    '12M': 180   // 6 months for recent focus (recent annual trends).
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
    '1D': 90,    // 3 months max for 1D.
    '1W': 180,   // 6 months max for 1W.
    '1M': 730,   // 2 years max for 1M.
    '3M': 1095,  // 3 years max for 3M.
    '1Y': 1825,  // 5 years max for 1Y (full 5 years as requested).
    '5Y': 1825,  // 5 years max for 5Y (exactly what user wants).
    '12M': 1825  // 5 years max for 12M.
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

export async function getTopMovers(market = 'stocks', direction = 'both', top = 10) {
  try {
    const base = `${ALPACA_API_BASE_URL}/v1beta1/screener/${market}/movers`
    const params = new URLSearchParams()
    if (direction && direction !== 'both') params.append('direction', direction)
    if (top) params.append('top', String(top))

    const url = params.toString() ? `${base}?${params.toString()}` : base
    const { data } = await axios.get(url, { headers: HEADERS })
    return data
  }
  catch (error) {
    const status = error.response?.status
    const message = error.response?.data || error.message
    console.error(`❌ Failed to fetch top movers (${direction}):`, status, message)
    return { error: true, status, message }
  }
}

