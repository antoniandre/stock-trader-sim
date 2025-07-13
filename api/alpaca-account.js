import axios from 'axios'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state } from './config.js'
import { getPrice } from './market-data.js'
import { createStandardResponse } from './utils.js'

// Alpaca Account Functions
// --------------------------------------------------------
export async function getAlpacaAccount() {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] Using mock account data')
    // Match the final portfolio value from the 1M chart data.
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

// Portfolio History Functions
// --------------------------------------------------------
export async function getAlpacaPortfolioHistory(period = '1D', timeframe = '1Min') {
  if (IS_SIMULATION) {
    console.log(`🧪 [SIM] Using mock portfolio history for ${period} period with ${timeframe} timeframe`)
    return generateMockPortfolioHistory(period, timeframe)
  }

  try {
    // Validate and adjust timeframe based on Alpaca API restrictions.
    const adjustedTimeframe = adjustTimeframeForPeriod(period, timeframe)

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

function adjustTimeframeForPeriod(period, timeframe) {
  // According to Alpaca docs: timeframe can only be less than 1 day when period is less than 30 days.
  // For longer periods (12M, ALL), we must use 1D timeframe.
  if (period === '12M' || period === 'ALL') return '1D'

  // For 1 month, allow 1D or larger timeframes.
  if (period === '1M' && (timeframe === '1Min' || timeframe === '15Min' || timeframe === '1H')) {
    return '1D'
  }

  // For 1 day, allow any timeframe.
  if (period === '1D') return timeframe

  return timeframe
}

function generateMockPortfolioHistory(period, timeframe) {
  // Determine data points and time intervals based on period and timeframe.
  const { dataPoints, intervalMs, baseValue } = getMockPortfolioParams(period, timeframe)

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
    const { trend, volatility } = getGrowthPattern(period, progress, seed, i)

    const value = baseValue * (1 + trend + volatility)
    equity.push(Math.round(value * 100) / 100) // Round to 2 decimal places.
  }

  return {
    timestamp: timestamps,
    equity: equity,
    profit_loss: equity.map(val => Math.round((val - baseValue) * 100) / 100),
    profit_loss_pct: equity.map(val => Math.round(((val - baseValue) / baseValue) * 10000) / 100),
    base_value: baseValue,
    timeframe: timeframe
  }
}

function getMockPortfolioParams(period, timeframe) {
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

  return { dataPoints, intervalMs, baseValue }
}

function getGrowthPattern(period, progress, seed, i) {
  let trend, volatility

  if (period === '1M') {
    // Dramatic growth for 1-month view - from ~$10k to ~$100k.
    trend = 9.0 * progress // 900% growth trend over the month to reach ~100k.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.5 * Math.sin(progress * 12 + pseudoRandom1 * 8) * pseudoRandom2

    // Add some dramatic jumps to simulate real trading activity.
    if (i > progress * 0.6 && i < progress * 0.65) {
      trend += 2.0 // Big jump in the middle-end.
    }
  }
  else if (period === '12M') {
    // Year-long growth from $5k to $100k.
    trend = 19.0 * progress // 1900% growth over the year.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.8 * Math.sin(progress * 20 + pseudoRandom1 * 12) * pseudoRandom2

    // Add major market events.
    if (i > progress * 0.3 && i < progress * 0.35) trend += 5.0 // Q2 surge.
    if (i > progress * 0.7 && i < progress * 0.75) trend += 3.0 // Q4 rally.
  }
  else if (period === 'ALL') {
    // All-time growth from $1k to $100k+.
    trend = 99.0 * progress // 9900% growth over 2+ years.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 1.2 * Math.sin(progress * 30 + pseudoRandom1 * 15) * pseudoRandom2

    // Multiple growth phases.
    if (i > progress * 0.2 && i < progress * 0.25) trend += 10.0 // Early growth.
    if (i > progress * 0.5 && i < progress * 0.55) trend += 15.0 // Mid growth.
    if (i > progress * 0.8 && i < progress * 0.85) trend += 8.0 // Recent surge.
  }
  else if (period === '1W') {
    trend = 0.05 * progress // 5% growth trend over the week.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.02 * Math.sin(progress * 10 + pseudoRandom1 * 6) * pseudoRandom2
  }
  else {
    // 1 day - smaller movements.
    trend = 0.015 * progress // 1.5% growth trend over the day.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.008 * Math.sin(progress * 8 + pseudoRandom1 * 6) * pseudoRandom2
  }

  return { trend, volatility }
}

// Trading Functions
// --------------------------------------------------------
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
