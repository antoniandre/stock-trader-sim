import axios from 'axios'
import express from 'express'
import { ALPACA_BASE_URL, HEADERS, IS_SIMULATION, state, mockPrices, popularStocks } from './config'

// ===== Alpaca Account Data Functions =====
export async function getAlpacaAccount() {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] Using mock account data')
    return {
      id: 'mock-account',
      status: 'ACTIVE',
      currency: 'USD',
      cash: 100000,
      portfolio_value: 100000,
      buying_power: 100000
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
    console.log('🧪 [SIM] Using mock portfolio history')
    // Generate mock historical data with realistic curve
    const now = Date.now()
    const dataPoints = 100
    const timestamps = []
    const equity = []
    const baseValue = 100000

    // Create a deterministic seed based on the current day to ensure consistent data
    const daysSinceEpoch = Math.floor(now / (1000 * 60 * 60 * 24))
    const seed = daysSinceEpoch * 12345 // Simple seed for consistent data

    for (let i = 0; i < dataPoints; i++) {
      // Generate timestamps going from past to present (chronological order)
      const time = now - (dataPoints - 1 - i) * 60000 // 1 minute intervals, oldest first
      timestamps.push(new Date(time).toISOString())

      // Generate realistic portfolio value curve with deterministic pseudo-random
      const progress = i / dataPoints
      const trend = 0.015 * progress // 1.5% growth trend over time

      // Use deterministic "random" values based on seed and index
      const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
      const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5

      const volatility = 0.008 * Math.sin(progress * 8 + pseudoRandom1 * 6) * pseudoRandom2
      const value = baseValue * (1 + trend + volatility)
      equity.push(Math.round(value * 100) / 100) // Round to 2 decimal places
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

  try {
    const params = new URLSearchParams({
      period,
      timeframe,
      extended_hours: 'true'
    })

    const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/account/portfolio/history?${params}`, { headers: HEADERS })
    console.log('✅ Successfully fetched portfolio history')
    return data
  }
  catch (error) {
    console.error('❌ Error fetching portfolio history:', error.message)
    return null
  }
}

export async function getAlpacaTradingHistory(limit = 100) {
  try {
    const activities = await getAlpacaAccountActivities('FILL', parseInt(limit))

    // Transform activities to match frontend expectations
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
    // In simulation, use popular stocks
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

    // Filter to common stocks (exclude OTC, preferred shares, etc.)
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
    // Fallback to popular stocks
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

  // Use cached price from WebSocket if available
  if (state.stockPrices[symbol]) return state.stockPrices[symbol]

  // Fallback to REST API
  const url = `https://data.alpaca.markets/v2/stocks/${symbol}/quotes/latest`
  try {
    const { data } = await axios.get(url, { headers: HEADERS })
    return data.quote?.ap || 0
  }
  catch (e) {
    console.error(`❌ Error fetching ${symbol}:`, e.message)
    return mockPrices[symbol] || 0
  }
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

  // Get portfolio history with proper data formatting for chart
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

  // Get trading history specifically (filtered activities)
  app.get('/api/trading-history', async (req, res) => {
    const { limit = 100 } = req.query
    const { success, history, message } = await getAlpacaTradingHistory(limit)
    if (success) res.json(history)
    else res.status(500).json({ error: 'Failed to fetch trading history.' })
  })

  // Get open positions
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
