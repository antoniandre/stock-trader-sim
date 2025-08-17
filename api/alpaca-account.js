import axios from 'axios'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state } from './config.js'
import { getPrice } from './market-data.js'
import { createStandardResponse } from './utils.js'
import { getMockAccountData, getMockAccountActivities, getMockPositions, generateMockPortfolioHistory, mockPlaceOrder, recordTrade } from './simulation.js'

// Alpaca Account Functions.
// --------------------------------------------------------
export async function getAlpacaAccount() {
  if (IS_SIMULATION) return getMockAccountData()

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
  if (IS_SIMULATION) return getMockAccountActivities()

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
  if (IS_SIMULATION) return getMockPositions()

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

// Portfolio History Functions.
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

// Mock portfolio generation functions are now in simulation.js

// Trading Functions.
// --------------------------------------------------------
export async function placeOrder(symbol, qty, side) {
  if (IS_SIMULATION) {
    const price = await getPrice(symbol)
    if (!price) return null

    return mockPlaceOrder(symbol, qty, side, price)
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

// recordTrade function is now in simulation.js
