import axios from 'axios'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state } from './config.js'
import { getEasternTime, formatErrorResponse } from './utils.js'
import { getMockPrice, initializeMockPrices, getMockTradableStocks, generateMockHistoricalData } from './simulation.js'

// Market Status Functions
// --------------------------------------------------------
export function getMarketStatus() {
  const easternTime = getEasternTime()
  const day = easternTime.getDay() // 0 = Sunday, 6 = Saturday.
  const hours = easternTime.getHours()
  const minutes = easternTime.getMinutes()
  const currentTimeMinutes = hours * 60 + minutes

  // Weekend check.
  if (day === 0 || day === 6) {
    return {
      status: 'closed',
      message: 'Market is closed - Weekend',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: true
    }
  }

  // Market hours in minutes since midnight ET.
  const preMarketStart = 4 * 60 // 4:00 AM ET.
  const marketOpen = 9 * 60 + 30 // 9:30 AM ET.
  const marketClose = 16 * 60 // 4:00 PM ET.
  const afterHoursEnd = 20 * 60 // 8:00 PM ET.

  if (currentTimeMinutes < preMarketStart) {
    return {
      status: 'closed',
      message: 'Market is closed - Before premarket',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  }

  if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) {
    return {
      status: 'premarket',
      message: 'Pre-market trading',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  }

  if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
    return {
      status: 'open',
      message: 'Market is open',
      nextClose: getNextMarketClose(easternTime),
      isWeekend: false
    }
  }

  if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) {
    return {
      status: 'afterhours',
      message: 'After-hours trading',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  }

  return {
    status: 'closed',
    message: 'Market is closed - After hours ended',
    nextOpen: getNextMarketOpen(easternTime),
    isWeekend: false
  }
}

function getNextMarketOpen(easternTime) {
  const nextOpen = new Date(easternTime)

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

  // Set to 9:30 AM ET.
  nextOpen.setHours(9, 30, 0, 0)
  return nextOpen.toISOString()
}

function getNextMarketClose(easternTime) {
  const nextClose = new Date(easternTime)
  // Set to 4:00 PM ET today.
  nextClose.setHours(16, 0, 0, 0)
  return nextClose.toISOString()
}

// Price Data Functions
// --------------------------------------------------------
export async function getPrice(symbol) {
  if (IS_SIMULATION) {
    return getMockPrice(symbol)
  }

  // Use cached price from WebSocket if available.
  if (state.stockPrices[symbol]) return state.stockPrices[symbol]

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
      if (data.quote?.ap) price = data.quote.ap  // Ask price from quotes.
      else if (data.quote?.bp) price = data.quote.bp  // Bid price from quotes.
      else if (data.trade?.p) price = data.trade.p   // Price from latest trade.
      else if (data.bar?.c) price = data.bar.c       // Close price from latest bar.

      if (price > 0) {
        console.log(`💲 Got ${symbol} price: $${price.toFixed(2)} from ${url.split('/').pop()}`)
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

  console.log('💰 Stock prices will be fetched on-demand when requested')
  // No longer pre-fetching popular stocks - prices are fetched when needed.
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
      .map(asset => ({
        symbol: asset.symbol,
        name: asset.name,
        exchange: asset.exchange,
        status: asset.status,
        tradable: asset.tradable
      }))

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
export async function getStockHistoricalData(symbol, period = '1D') {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock historical data for ${symbol} (${period})`)
    return generateMockHistoricalData(symbol, period)
  }

  try {
    // Map period to Alpaca API parameters.
    const { timeframe, limit, startDate } = getPeriodParameters(period)
    const params = new URLSearchParams({
      timeframe,
      limit: limit.toString(),
      start: startDate.toISOString()
    })

    const url = `https://data.alpaca.markets/v2/stocks/${symbol}/bars?${params}`
    console.log(`📊 Fetching historical data for ${symbol} (${period}): ${url}`)

    const { data } = await axios.get(url, { headers: HEADERS })

    if (!data.bars || data.bars.length === 0) {
      console.warn(`⚠️ No historical data found for ${symbol}`)
      return { symbol, period, data: [] }
    }

    // Transform Alpaca data to our format.
    const historicalData = data.bars.map(bar => ({
      timestamp: new Date(bar.t).getTime(),
      price: bar.c,  // Close price.
      volume: bar.v,
      open: bar.o,
      high: bar.h,
      low: bar.l
    }))

    console.log(`✅ Fetched ${historicalData.length} historical data points for ${symbol}`)
    return { symbol, period, data: historicalData }
  }
  catch (error) {
    console.error(`❌ Error fetching historical data for ${symbol}:`, error.message)
    // Fall back to mock data on error.
    return generateMockHistoricalData(symbol, period)
  }
}

function getPeriodParameters(period) {
  const easternTime = getEasternTime()

  switch (period) {
    case '1D':
      return {
        timeframe: '1Min',
        limit: 390,  // Trading minutes in a day.
        startDate: new Date(easternTime.getTime() - 24 * 60 * 60 * 1000)
      }
    case '1W':
      return {
        timeframe: '5Min',
        limit: 500,
        startDate: new Date(easternTime.getTime() - 7 * 24 * 60 * 60 * 1000)
      }
    case '1M':
      return {
        timeframe: '1Hour',
        limit: 500,
        startDate: new Date(easternTime.getTime() - 30 * 24 * 60 * 60 * 1000)
      }
    case '3M':
      return {
        timeframe: '1Day',
        limit: 90,
        startDate: new Date(easternTime.getTime() - 90 * 24 * 60 * 60 * 1000)
      }
    default:
      return {
        timeframe: '1Hour',
        limit: 100,
        startDate: new Date(easternTime.getTime() - 24 * 60 * 60 * 1000)
      }
  }
}
