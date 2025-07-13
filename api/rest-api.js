import axios from 'axios'
import express from 'express'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state, mockPrices, popularStocks } from './config.js'
import { subscribeToStock } from './websocket-server.js'

// ===== Historical Stock Data Functions =====
export async function getStockHistoricalData(symbol, period = '1D') {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Generating mock historical data for ${symbol} (${period})`)
    return generateMockHistoricalData(symbol, period)
  }

  try {
    // Map period to Alpaca API parameters.
    let timeframe, limit, startDate
    const now = new Date()
    const easternTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))

    switch (period) {
      case '1D':
        timeframe = '1Min'
        limit = 390  // Trading minutes in a day.
        startDate = new Date(easternTime.getTime() - 24 * 60 * 60 * 1000)
        break
      case '1W':
        timeframe = '5Min'
        limit = 500
        startDate = new Date(easternTime.getTime() - 7 * 24 * 60 * 60 * 1000)
        break
      case '1M':
        timeframe = '1Hour'
        limit = 500
        startDate = new Date(easternTime.getTime() - 30 * 24 * 60 * 60 * 1000)
        break
      case '3M':
        timeframe = '1Day'
        limit = 90
        startDate = new Date(easternTime.getTime() - 90 * 24 * 60 * 60 * 1000)
        break
      default:
        timeframe = '1Hour'
        limit = 100
        startDate = new Date(easternTime.getTime() - 24 * 60 * 60 * 1000)
    }

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

function generateMockHistoricalData(symbol, period) {
  const basePrice = mockPrices[symbol] || 100
  const now = Date.now()
  let dataPoints, intervalMs

  switch (period) {
    case '1D':
      dataPoints = 390  // Trading minutes in a day.
      intervalMs = 60 * 1000  // 1 minute.
      break
    case '1W':
      dataPoints = 336  // 7 days * 48 (5-min intervals per day).
      intervalMs = 5 * 60 * 1000  // 5 minutes.
      break
    case '1M':
      dataPoints = 720  // 30 days * 24 hours.
      intervalMs = 60 * 60 * 1000  // 1 hour.
      break
    case '3M':
      dataPoints = 90  // 90 days.
      intervalMs = 24 * 60 * 60 * 1000  // 1 day.
      break
    default:
      dataPoints = 100
      intervalMs = 60 * 60 * 1000  // 1 hour.
  }

  const data = []
  let currentPrice = basePrice

  for (let i = 0; i < dataPoints; i++) {
    const timestamp = now - (dataPoints - 1 - i) * intervalMs

    // Generate realistic price movement.
    const volatility = 0.02  // 2% volatility.
    const trend = Math.sin(i / 20) * 0.005  // Small trend component.
    const randomChange = (Math.random() - 0.5) * volatility

    currentPrice = currentPrice * (1 + trend + randomChange)

    // Ensure price doesn't go below 10% of base price.
    currentPrice = Math.max(currentPrice, basePrice * 0.1)

    data.push({
      timestamp,
      price: Math.round(currentPrice * 100) / 100,
      volume: Math.floor(Math.random() * 10000) + 1000,
      open: currentPrice,
      high: currentPrice * 1.01,
      low: currentPrice * 0.99
    })
  }

  return { symbol, period, data }
}

// ===== Market Status Functions =====
export function getMarketStatus() {
  const now = new Date()
  const easternTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))

  const day = easternTime.getDay() // 0 = Sunday, 6 = Saturday
  const hours = easternTime.getHours()
  const minutes = easternTime.getMinutes()
  const currentTimeMinutes = hours * 60 + minutes

  // Weekend check
  if (day === 0 || day === 6) {
    return {
      status: 'closed',
      message: 'Market is closed - Weekend',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: true
    }
  }

  // Market hours in minutes since midnight ET
  const preMarketStart = 4 * 60 // 4:00 AM ET
  const marketOpen = 9 * 60 + 30 // 9:30 AM ET
  const marketClose = 16 * 60 // 4:00 PM ET
  const afterHoursEnd = 20 * 60 // 8:00 PM ET

  if (currentTimeMinutes < preMarketStart) {
    return {
      status: 'closed',
      message: 'Market is closed - Before premarket',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  } else if (currentTimeMinutes >= preMarketStart && currentTimeMinutes < marketOpen) {
    return {
      status: 'premarket',
      message: 'Pre-market trading',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  } else if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
    return {
      status: 'open',
      message: 'Market is open',
      nextClose: getNextMarketClose(easternTime),
      isWeekend: false
    }
  } else if (currentTimeMinutes >= marketClose && currentTimeMinutes < afterHoursEnd) {
    return {
      status: 'afterhours',
      message: 'After-hours trading',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  } else {
    return {
      status: 'closed',
      message: 'Market is closed - After hours ended',
      nextOpen: getNextMarketOpen(easternTime),
      isWeekend: false
    }
  }
}

function getNextMarketOpen(easternTime) {
  const nextOpen = new Date(easternTime)

  // If it's Friday after market close, next open is Monday
  if (nextOpen.getDay() === 5 && nextOpen.getHours() >= 16) {
    nextOpen.setDate(nextOpen.getDate() + 3) // Add 3 days to get to Monday
  }
  // If it's Saturday, next open is Monday
  else if (nextOpen.getDay() === 6) {
    nextOpen.setDate(nextOpen.getDate() + 2) // Add 2 days to get to Monday
  }
  // If it's Sunday, next open is Monday
  else if (nextOpen.getDay() === 0) {
    nextOpen.setDate(nextOpen.getDate() + 1) // Add 1 day to get to Monday
  }
  // If it's after market close on a weekday, next open is next day
  else if (nextOpen.getHours() >= 16) {
    nextOpen.setDate(nextOpen.getDate() + 1)
  }

  // Set to 9:30 AM ET
  nextOpen.setHours(9, 30, 0, 0)

  return nextOpen.toISOString()
}

function getNextMarketClose(easternTime) {
  const nextClose = new Date(easternTime)

  // Set to 4:00 PM ET today
  nextClose.setHours(16, 0, 0, 0)

  return nextClose.toISOString()
}

// ===== Alpaca Account Data Functions =====
export async function getAlpacaAccount() {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] Using mock account data')
    // Match the final portfolio value from the 1M chart data.
    const finalPortfolioValue = 100000 // This should match the end value of our 1M chart.
    return {
      id: 'mock-account',
      status: 'ACTIVE',
      currency: 'USD',
      cash: 99138.34,
      portfolio_value: 100078.87,
      buying_power: 199217.21
    }
  }

  try {
    const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/account`, { headers: HEADERS })
    state.alpacaAccount = data
    return data
  }
  catch (error) {
    console.error('❌ Error fetching Alpaca account:', error.message)
    return null
  }
}

export async function getAlpacaAccountActivities(activityType = null, limit = 100) {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] Using mock trading history')
    return []
  }

  try {
    let url = `${ALPACA_BASE_URL}/v2/account/activities`
    if (activityType) url += `/${activityType}`

    const params = new URLSearchParams({
      limit: limit.toString(),
      direction: 'desc'
    })

    const { data } = await axios.get(`${url}?${params}`, { headers: HEADERS })
    console.log(`✅ Successfully fetched ${data.length} account activities`)
    state.accountActivities = data
    return data
  }
  catch (error) {
    console.error('❌ Error fetching account activities:', error.message)
    return []
  }
}

export async function getAlpacaPortfolioHistory(period = '1D', timeframe = '1Min') {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Using mock portfolio history for ${period} period with ${timeframe} timeframe`)

    // Determine data points and time intervals based on period and timeframe.
    let dataPoints, intervalMs, baseValue

    if (period === '1M') {
      // 1 month of data.
      dataPoints = timeframe === '1D' ? 30 : (timeframe === '1H' ? 720 : 1440)
      intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
      baseValue = 10000 // Start at 10k to show growth to 100k.
    }
    else if (period === '12M') {
      // 12 months (1 year) of data.
      dataPoints = timeframe === '1D' ? 365 : (timeframe === '1H' ? 8760 : 17520)
      intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
      baseValue = 5000 // Start even lower for dramatic year-long growth.
    }
    else if (period === 'ALL') {
      // All time data (simulate 2+ years).
      dataPoints = timeframe === '1D' ? 730 : (timeframe === '1H' ? 17520 : 35040)
      intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
      baseValue = 1000 // Start very low for maximum growth story.
    }
    else if (period === '1W') {
      // 1 week of data.
      dataPoints = timeframe === '1D' ? 7 : (timeframe === '1H' ? 168 : 10080)
      intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
      baseValue = 75000
    }
    else {
      // 1 day of data (default).
      dataPoints = timeframe === '1H' ? 24 : (timeframe === '15Min' ? 96 : 1440)
      intervalMs = timeframe === '1H' ? 60 * 60 * 1000 : (timeframe === '15Min' ? 15 * 60 * 1000 : 60 * 1000)
      baseValue = 100000
    }

    const now = Date.now()
    const timestamps = []
    const equity = []

    // Create a deterministic seed based on the current day to ensure consistent data.
    const daysSinceEpoch = Math.floor(now / (1000 * 60 * 60 * 24))
    const seed = daysSinceEpoch * 12345 // Simple seed for consistent data.

    for (let i = 0; i < dataPoints; i++) {
      // Generate timestamps going from past to present (chronological order).
      const time = now - (dataPoints - 1 - i) * intervalMs
      timestamps.push(new Date(time).toISOString())

      // Generate realistic portfolio value curve with deterministic pseudo-random.
      const progress = i / dataPoints

      // Different growth patterns based on period
      let trend, volatility
      if (period === '1M') {
        // Dramatic growth for 1-month view - from ~$10k to ~$100k
        trend = 9.0 * progress // 900% growth trend over the month to reach ~100k
        const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
        const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
        volatility = 0.5 * Math.sin(progress * 12 + pseudoRandom1 * 8) * pseudoRandom2

        // Add some dramatic jumps to simulate real trading activity.
        if (i > dataPoints * 0.6 && i < dataPoints * 0.65) {
          trend += 2.0 // Big jump in the middle-end.
        }
      } else if (period === '12M') {
        // Year-long growth from $5k to $100k
        trend = 19.0 * progress // 1900% growth over the year.
        const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
        const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
        volatility = 0.8 * Math.sin(progress * 20 + pseudoRandom1 * 12) * pseudoRandom2

        // Add major market events.
        if (i > dataPoints * 0.3 && i < dataPoints * 0.35) trend += 5.0 // Q2 surge.
        if (i > dataPoints * 0.7 && i < dataPoints * 0.75) trend += 3.0 // Q4 rally.
      } else if (period === 'ALL') {
        // All-time growth from $1k to $100k+
        trend = 99.0 * progress // 9900% growth over 2+ years.
        const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
        const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
        volatility = 1.2 * Math.sin(progress * 30 + pseudoRandom1 * 15) * pseudoRandom2

        // Multiple growth phases.
        if (i > dataPoints * 0.2 && i < dataPoints * 0.25) trend += 10.0 // Early growth.
        if (i > dataPoints * 0.5 && i < dataPoints * 0.55) trend += 15.0 // Mid growth.
        if (i > dataPoints * 0.8 && i < dataPoints * 0.85) trend += 8.0 // Recent surge.
      } else if (period === '1W') {
        trend = 0.05 * progress // 5% growth trend over the week.
        const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
        const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
        volatility = 0.02 * Math.sin(progress * 10 + pseudoRandom1 * 6) * pseudoRandom2
      } else {
        // 1 day - smaller movements.
        trend = 0.015 * progress // 1.5% growth trend over the day.
        const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
        const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
        volatility = 0.008 * Math.sin(progress * 8 + pseudoRandom1 * 6) * pseudoRandom2
      }

      const value = baseValue * (1 + trend + volatility)
      equity.push(Math.round(value * 100) / 100) // Round to 2 decimal places.
    }

    const result = {
      timestamp: timestamps,
      equity: equity,
      profit_loss: equity.map(val => Math.round((val - baseValue) * 100) / 100),
      profit_loss_pct: equity.map(val => Math.round(((val - baseValue) / baseValue) * 10000) / 100),
      base_value: baseValue,
      timeframe: timeframe
    }

    console.log(`🧪 [SIM] Generated portfolio history:`, {
      period,
      timeframe,
      dataPoints,
      baseValue,
      firstValue: equity[0],
      lastValue: equity[equity.length - 1],
      firstTimestamp: timestamps[0],
      lastTimestamp: timestamps[timestamps.length - 1]
    })

    return result
  }

  try {
    // Validate and adjust timeframe based on Alpaca API restrictions.
    let adjustedTimeframe = timeframe

    // According to Alpaca docs: timeframe can only be less than 1 day when period is less than 30 days.
    // For longer periods (12M, ALL), we must use 1D timeframe.
    if (period === '12M' || period === 'ALL') adjustedTimeframe = '1D'
    // For 1 month, allow 1D or larger timeframes.
    else if (period === '1M' && (timeframe === '1Min' || timeframe === '15Min' || timeframe === '1H')) {
      adjustedTimeframe = '1D'
    }
    // For 1 day, allow any timeframe.
    // Keep the original timeframe (1H, 15Min, 1Min are all valid for 1D).
    else if (period === '1D') adjustedTimeframe = timeframe

    console.log(`📊 Requesting portfolio history: period=${period}, timeframe=${adjustedTimeframe}`)

    const params = new URLSearchParams({
      period,
      timeframe: adjustedTimeframe,
      extended_hours: 'true'
    })

    const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/account/portfolio/history?${params}`, { headers: HEADERS })
    console.log('✅ Successfully fetched portfolio history')
    return data
  }
  catch (error) {
    console.error('❌ Error fetching portfolio history:', error.message)
    if (error.response) {
      console.error('❌ Response status:', error.response.status)
      console.error('❌ Response data:', error.response.data)
    }
    return null
  }
}

export async function getAlpacaTradingHistory(limit = 100) {
  try {
    const activities = await getAlpacaAccountActivities('FILL', parseInt(limit))

    // Transform activities to match frontend expectations.
    const tradingHistory = activities.map(activity => ({
      id: activity.id,
      symbol: activity.symbol,
      side: activity.side,
      qty: parseFloat(activity.qty),
      price: parseFloat(activity.price),
      timestamp: activity.transaction_time,
      type: activity.type,
      order_id: activity.order_id
    }))

    return { success: true, history: tradingHistory }
  }
  catch (error) {
    console.error('Error fetching trading history:', error)
    return { success: false, message: 'Failed to fetch trading history.' }
  }
}

export async function getAlpacaPositions() {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] Using mock positions')
    return [
      {
        symbol: 'AAPL',
        qty: '10',
        market_value: '1755.00',
        cost_basis: '1700.00',
        unrealized_pl: '55.00',
        unrealized_plpc: '0.0324',
        current_price: '175.50',
        lastday_price: '174.20',
        change_today: '1.30'
      },
      {
        symbol: 'MSFT',
        qty: '5',
        market_value: '2101.50',
        cost_basis: '2000.00',
        unrealized_pl: '101.50',
        unrealized_plpc: '0.0508',
        current_price: '420.30',
        lastday_price: '418.90',
        change_today: '1.40'
      }
    ]
  }

  try {
    const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/positions`, { headers: HEADERS })
    console.log(`✅ Successfully fetched ${data.length} positions`)
    return data
  }
  catch (error) {
    console.error('❌ Error fetching positions:', error.message)
    return []
  }
}

export async function getAllTradableStocks() {
  if (state.allStocks.length > 0) return state.allStocks

  if (IS_SIMULATION) {
    // In simulation, use popular stocks.
    state.allStocks = popularStocks.map(symbol => ({
      symbol,
      name: symbol,
      exchange: 'NASDAQ',
      status: 'active',
      tradable: true
    }))
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
    state.allStocks = popularStocks.map(symbol => ({
      symbol,
      name: symbol,
      exchange: 'NASDAQ',
      status: 'active',
      tradable: true
    }))
    return state.allStocks
  }
}

export async function getPrice(symbol) {
  if (IS_SIMULATION) {
    const basePrice = mockPrices[symbol]
    if (!basePrice) return 0

    const timeVariation = Math.sin(Date.now() / 10000) * 0.02
    const randomVariation = (Math.random() - 0.5) * 0.01
    const newPrice = basePrice * (1 + timeVariation + randomVariation)
    return Math.max(newPrice, basePrice * 0.95)
  }

  // Use cached price from WebSocket if available.
  if (state.stockPrices[symbol]) return state.stockPrices[symbol]

  // Try multiple Alpaca endpoints for price data
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
      if (data.quote?.ap) price = data.quote.ap  // Ask price from quotes
      else if (data.quote?.bp) price = data.quote.bp  // Bid price from quotes
      else if (data.trade?.p) price = data.trade.p   // Price from latest trade
      else if (data.bar?.c) price = data.bar.c       // Close price from latest bar

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
    console.log('🧪 [SIM] Using mock prices')
    return
  }

  console.log('💰 Stock prices will be fetched on-demand when requested')
  // No longer pre-fetching popular stocks - prices are fetched when needed
}

export async function placeOrder(symbol, qty, side) {
  if (IS_SIMULATION) {
    const price = await getPrice(symbol)
    if (!price) return null

    console.log(`🧪 [SIM] ${side.toUpperCase()} ${qty} ${symbol} @ $${price.toFixed(2)}`)
    return recordTrade(symbol, qty, side, price)
  }

  try {
    const order = {
      symbol,
      qty,
      side,
      type: 'market',
      time_in_force: 'gtc'
    }

    const { data } = await axios.post(`${ALPACA_BASE_URL}/v2/orders`, order, { headers: HEADERS })
    console.log(`✅ ${side.toUpperCase()} ${qty} ${symbol} @ ${new Date().toLocaleTimeString()}`)
    return data
  }
  catch (e) {
    console.error(`❌ Order error for ${symbol}:`, e.message)
    return null
  }
}

export async function recordTrade(symbol, qty, side, price) {
  const timestamp = new Date().toISOString()

  if (!state.portfolio[symbol]) state.portfolio[symbol] = { qty: 0, history: [] }
  if (side === 'buy') state.portfolio[symbol].qty += qty
  else if (side === 'sell') state.portfolio[symbol].qty -= qty

  state.portfolio[symbol].history.push({ side, qty, price, timestamp })

  return { side, symbol, qty, price, timestamp }
}

// ===== Express API Routes =====
export function createRestApiRoutes() {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/api/portfolio', (req, res) => {
    const stocks = Object.entries(state.portfolio).map(([symbol, data]) => {
      const lastTrade = data.history[data.history.length - 1] || {}
      return {
        symbol,
        qty: data.qty,
        price: lastTrade.price || 0,
        lastSide: lastTrade.side || 'buy'
      }
    })

    const history = []
    for (const [symbol, data] of Object.entries(state.portfolio)) {
      history.push(...data.history.map(trade => ({ ...trade, symbol })))
    }

    res.json({ stocks, history })
  })

  // ===== Alpaca Account API Endpoints =====
  app.get('/api/account', async (req, res) => {
    try {
      const account = await getAlpacaAccount()
      res.json(account)
    }
    catch (error) {
      console.error('Error fetching account:', error)
      res.status(500).json({ error: 'Failed to fetch account data' })
    }
  })

  app.get('/api/account/activities', async (req, res) => {
    try {
      const { activity_type, limit = 100 } = req.query
      const activities = await getAlpacaAccountActivities(activity_type, parseInt(limit))
      res.json(activities)
    }
    catch (error) {
      console.error('Error fetching account activities:', error)
      res.status(500).json({ error: 'Failed to fetch account activities' })
    }
  })

  app.get('/api/account/portfolio/history', async (req, res) => {
    try {
      const { period = '1D', timeframe = '1Min' } = req.query
      const history = await getAlpacaPortfolioHistory(period, timeframe)
      res.json(history)
    }
    catch (error) {
      console.error('Error fetching portfolio history:', error)
      res.status(500).json({ error: 'Failed to fetch portfolio history' })
    }
  })

  // Get portfolio history with proper data formatting for chart.
  app.get('/api/portfolio/history', async (req, res) => {
    try {
      const { period = '1D', timeframe = '1Min' } = req.query
      const history = await getAlpacaPortfolioHistory(period, timeframe)
      res.json(history)
    }
    catch (error) {
      console.error('Error fetching portfolio history:', error)
      res.status(500).json({ error: 'Failed to fetch portfolio history' })
    }
  })

  // Get trading history specifically (filtered activities).
  app.get('/api/trading-history', async (req, res) => {
    const { limit = 100 } = req.query
    const { success, history, message } = await getAlpacaTradingHistory(limit)
    if (success) res.json(history)
    else res.status(500).json({ error: 'Failed to fetch trading history.' })
  })

  // Get open positions.
  app.get('/api/positions', async (req, res) => {
    try {
      const positions = await getAlpacaPositions()
      res.json(positions)
    }
    catch (error) {
      console.error('Error fetching positions:', error)
      res.status(500).json({ error: 'Failed to fetch positions' })
    }
  })

  app.get('/api/stocks', async (req, res) => {
    try {
      const stocks = await getAllTradableStocks()
      const stocksWithPrices = stocks.map(stock => ({
        ...stock,
        price: state.stockPrices[stock.symbol] || 0,
        lastSide: 'buy'
      }))
      res.json({ stocks: stocksWithPrices })
    }
    catch (error) {
      console.error('Error fetching stocks:', error)
      res.status(500).json({ error: 'Failed to fetch stocks' })
    }
  })

  // Get single stock price
  app.get('/api/stocks/:symbol/price', async (req, res) => {
    try {
      const { symbol } = req.params
      const price = await getPrice(symbol)

      // Cache the price for future WebSocket updates
      if (price > 0) {
        state.stockPrices[symbol] = price
      }

      res.json({
        symbol,
        price,
        timestamp: new Date().toISOString()
      })
    }
    catch (error) {
      console.error(`Error fetching price for ${symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch price for ${symbol}` })
    }
  })

  // Get single stock details
  app.get('/api/stocks/:symbol', async (req, res) => {
    try {
      const { symbol } = req.params
      const stocks = await getAllTradableStocks()
      const stockData = stocks.find(stock => stock.symbol === symbol)

      if (!stockData) {
        return res.status(404).json({ error: `Stock ${symbol} not found` })
      }

      const price = await getPrice(symbol)

      // Cache the price for future WebSocket updates
      if (price > 0) {
        state.stockPrices[symbol] = price
      }

      res.json({
        ...stockData,
        price,
        lastSide: 'buy',
        timestamp: new Date().toISOString()
      })
    }
    catch (error) {
      console.error(`Error fetching stock ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch stock ${req.params.symbol}` })
    }
  })

  // Subscribe to a stock's WebSocket updates
  app.post('/api/stocks/:symbol/subscribe', async (req, res) => {
    try {
      const { symbol } = req.params
      subscribeToStock(symbol)
      res.json({
        success: true,
        message: `Subscribed to ${symbol} updates`,
        timestamp: new Date().toISOString()
      })
    }
    catch (error) {
      console.error(`Error subscribing to ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to subscribe to ${req.params.symbol}` })
    }
  })

  // Get historical data for a stock
  app.get('/api/stocks/:symbol/history', async (req, res) => {
    try {
      const { symbol } = req.params
      const { period = '1D' } = req.query

      const historicalData = await getStockHistoricalData(symbol, period)
      res.json(historicalData)
    }
    catch (error) {
      console.error(`Error fetching historical data for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch historical data for ${req.params.symbol}` })
    }
  })

  app.get('/api/market-status', (req, res) => {
    try {
      const marketStatus = getMarketStatus()
      res.json({
        ...marketStatus,
        timestamp: new Date().toISOString()
      })
    }
    catch (error) {
      console.error('Error getting market status:', error)
      res.status(500).json({ error: 'Failed to get market status' })
    }
  })

  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      simulation: IS_SIMULATION,
      timestamp: new Date().toISOString(),
      connectedClients: state.wsClients.size,
      totalStocks: state.allStocks.length,
      alpacaConnections: {
        websocket: state.alpacaWebSocket ? 'connected' : 'disconnected',
        sse: state.sseClient ? 'connected' : 'disconnected'
      },
      accountData: {
        hasAccount: !!state.alpacaAccount,
        activitiesCount: state.accountActivities.length
      }
    })
  })

  return app
}
