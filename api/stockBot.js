import axios from 'axios'
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import WebSocket, { WebSocketServer } from 'ws'

dotenv.config()

// ===== Configuration =====
const {
  ALPACA_KEY,
  ALPACA_SECRET,
  ALPACA_BASE_URL,
  ALPACA_DATA_STREAM_URL,
  SIMULATION
} = process.env

const isSim = !ALPACA_KEY || (SIMULATION === 'true')
const ALPACA_ACCOUNT_URL = `${ALPACA_BASE_URL}/v2/account`

const HEADERS = {
  'APCA-API-KEY-ID': ALPACA_KEY,
  'APCA-API-SECRET-KEY': ALPACA_SECRET
}

// ===== State Management =====
const state = {
  portfolio: {}, // { symbol: { qty, history: [{ side, qty, price, timestamp }] } }
  stockPrices: {}, // { symbol: price }
  allStocks: [], // Array of all tradable stocks
  wsClients: new Set(),
  alpacaWebSocket: null,
  accountActivities: [], // Real trading history from Alpaca
  alpacaAccount: null, // Account information
  sseClient: null // Server-Sent Events client for account updates
}

// ===== Mock Data =====
const mockPrices = {
  AAPL: 175.50,
  MSFT: 420.30,
  TSLA: 245.80,
  GOOGL: 2800.00,
  AMZN: 3500.00,
  META: 380.00,
  NVDA: 950.00,
  NFLX: 650.00,
  AMD: 180.00,
  INTC: 45.00,
  ORCL: 140.00,
  CRM: 250.00,
  ADBE: 580.00,
  PYPL: 220.00,
  SQ: 180.00
}

// Popular stocks for simulation
const popularStocks = [
  'AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'NVDA', 'NFLX',
  'AMD', 'INTC', 'ORCL', 'CRM', 'ADBE', 'PYPL', 'SQ', 'UBER',
  'LYFT', 'SPOT', 'ZM', 'SHOP', 'TWTR', 'SNAP', 'PINS', 'ROKU'
]

// ===== Alpaca Account Data =====
async function getAlpacaAccount() {
  if (isSim) {
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

async function getAlpacaAccountActivities(activityType = null, limit = 100) {
  if (isSim) {
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

async function getAlpacaPortfolioHistory(period = '1D', timeframe = '1Min') {
  if (isSim) {
    console.log('🧪 [SIM] Using mock portfolio history')
    return {
      timestamp: [Date.now()],
      equity: [100000],
      profit_loss: [0],
      profit_loss_pct: [0],
      base_value: 100000,
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
  } catch (error) {
    console.error('❌ Error fetching portfolio history:', error.message)
    return null
  }
}

async function getAlpacaTradingHistory(limit = 100) {
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
// ===== Server-Sent Events for Account Updates =====
async function connectAlpacaSSE() {
  if (isSim) {
    console.log('🧪 [SIM] SSE not available in simulation mode')
    return
  }

  // Note: Using EventSource for SSE connection
  // This requires installing 'eventsource' package
  try {
    const EventSource = (await import('eventsource')).default

    const sseUrl = `${ALPACA_BASE_URL}/v2/events/trades`
    const headers = {
      'APCA-API-KEY-ID': ALPACA_KEY,
      'APCA-API-SECRET-KEY': ALPACA_SECRET
    }

    console.log('🔌 Connecting to Alpaca SSE for account updates...')
    state.sseClient = new EventSource(sseUrl, { headers })

    state.sseClient.onopen = () => {
      console.log('✅ Connected to Alpaca SSE stream')
    }

    state.sseClient.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('📊 Received account update:', data)

        // Broadcast account updates to frontend
        broadcast({
          type: 'account-update',
          data: data,
          timestamp: new Date().toISOString()
        })

        // Refresh account activities when new trades occur
        if (data.event_type === 'trade') {
          getAlpacaAccountActivities()
        }
      } catch (error) {
        console.error('❌ Error parsing SSE message:', error)
      }
    }

    state.sseClient.onerror = (error) => {
      console.error('❌ Alpaca SSE error:', error)
      console.log('🔌 Reconnecting to SSE in 5 seconds...')
      setTimeout(() => {
        if (state.sseClient) {
          state.sseClient.close()
        }
        connectAlpacaSSE()
      }, 5000)
    }

  } catch (error) {
    console.error('❌ Failed to connect to Alpaca SSE:', error)
    console.log('ℹ️ Install eventsource package for SSE support: npm install eventsource')
  }
}

// ===== WebSocket Management =====
function broadcast(data) {
  const message = JSON.stringify(data)
  state.wsClients.forEach(client => {
    if (client.readyState === 1) client.send(message) // WebSocket.OPEN
  })
}

// ===== Stock Data Management =====
async function getAllTradableStocks() {
  if (state.allStocks.length > 0) {
    return state.allStocks
  }

  if (isSim) {
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
    const url = `${ALPACA_ACCOUNT_URL}?status=active&tradable=true&asset_class=us_equity`
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
  } catch (error) {
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

// ===== Alpaca WebSocket Streaming =====
function connectAlpacaWebSocket() {
  if (isSim) return

  try {
    console.log('🔌 Connecting to Alpaca WebSocket stream...')
    state.alpacaWebSocket = new WebSocket(ALPACA_DATA_STREAM_URL)

    state.alpacaWebSocket.on('open', () => {
      console.log('✅ Connected to Alpaca WebSocket stream')

      const authMessage = {
        action: 'auth',
        key: ALPACA_KEY,
        secret: ALPACA_SECRET
      }
      state.alpacaWebSocket.send(JSON.stringify(authMessage))
    })

    state.alpacaWebSocket.on('message', (data) => {
      try {
        const message = JSON.parse(data)

        if (message.T === 'success' && message.msg === 'authenticated') {
          console.log('✅ Authenticated with Alpaca WebSocket')

          // Subscribe to popular stocks
          const subscribeMessage = {
            action: 'subscribe',
            trades: popularStocks
          }
          state.alpacaWebSocket.send(JSON.stringify(subscribeMessage))
        }

        if (message.T === 'trade') {
          const symbol = message.S
          const price = message.p
          state.stockPrices[symbol] = price

          broadcast({
            type: 'price',
            symbol,
            price,
            timestamp: new Date().toISOString()
          })
        }
      }
      catch (error) {
        console.error('❌ Error parsing WebSocket message:', error)
      }
    })

    state.alpacaWebSocket.on('error', (error) => {
      console.error('❌ Alpaca WebSocket error:', error)
    })

    state.alpacaWebSocket.on('close', () => {
      console.log('🔌 Alpaca WebSocket disconnected, reconnecting in 5 seconds...')
      setTimeout(connectAlpacaWebSocket, 5000)
    })

  }
  catch (error) {
    console.error('❌ Failed to connect to Alpaca WebSocket:', error)
  }
}

// ===== Price Management =====
async function getPrice(symbol) {
  if (isSim) {
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

// ===== Trading Logic =====
async function recordTrade(symbol, qty, side, price) {
  const timestamp = new Date().toISOString()

  if (!state.portfolio[symbol]) state.portfolio[symbol] = { qty: 0, history: [] }
  if (side === 'buy') state.portfolio[symbol].qty += qty
  else if (side === 'sell') state.portfolio[symbol].qty -= qty

  state.portfolio[symbol].history.push({ side, qty, price, timestamp })

  // Broadcast trade to frontend
  broadcast({
    type: 'trade',
    side,
    symbol,
    qty,
    price,
    timestamp
  })

  return { side, symbol, qty, price, timestamp }
}

async function placeOrder(symbol, qty, side) {
  if (isSim) {
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

// ===== Simulation Mode =====
async function runSimulation() {
  // Update prices for all stocks in simulation
  for (const stock of state.allStocks) {
    const price = await getPrice(stock.symbol)
    if (price > 0) {
      state.stockPrices[stock.symbol] = price
    }
  }

  // Broadcast updated prices
  const priceUpdates = Object.entries(state.stockPrices).map(([symbol, price]) => ({
    symbol,
    price,
    lastSide: 'buy'
  }))

  broadcast({ type: 'market-update', data: priceUpdates })

  // Simple trading logic for demo (only for a few stocks)
  const demoStocks = ['AAPL', 'MSFT', 'TSLA']
  for (const symbol of demoStocks) {
    const price = await getPrice(symbol)
    if (!price) continue

    console.log(`📊 ${symbol}: $${price.toFixed(2)}`)

    const basePrice = mockPrices[symbol]
    const priceRatio = price / basePrice

    if (priceRatio < 0.98) await placeOrder(symbol, 1, 'buy')
    else if (priceRatio > 1.02 && state.portfolio[symbol]?.qty > 0) {
      await placeOrder(symbol, 1, 'sell')
    }
  }
}

// ===== Express API =====
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
  } catch (error) {
    console.error('Error fetching account:', error)
    res.status(500).json({ error: 'Failed to fetch account data' })
  }
})

app.get('/api/account/activities', async (req, res) => {
  try {
    const { activity_type, limit = 100 } = req.query
    const activities = await getAlpacaAccountActivities(activity_type, parseInt(limit))
    res.json(activities)
  } catch (error) {
    console.error('Error fetching account activities:', error)
    res.status(500).json({ error: 'Failed to fetch account activities' })
  }
})

app.get('/api/account/portfolio/history', async (req, res) => {
  try {
    const { period = '1D', timeframe = '1Min' } = req.query
    const history = await getAlpacaPortfolioHistory(period, timeframe)
    res.json(history)
  } catch (error) {
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

app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await getAllTradableStocks()
    const stocksWithPrices = stocks.map(stock => ({
      ...stock,
      price: state.stockPrices[stock.symbol] || 0,
      lastSide: 'buy'
    }))
    res.json({ stocks: stocksWithPrices })
  } catch (error) {
    console.error('Error fetching stocks:', error)
    res.status(500).json({ error: 'Failed to fetch stocks' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    simulation: isSim,
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

// ===== Server Setup =====
const server = createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', (ws) => {
  console.log('🔌 New WebSocket client connected')
  state.wsClients.add(ws)

  // Send initial data
  if (isSim) {
    const mockStocks = Object.entries(mockPrices).map(([symbol, price]) => ({
      symbol,
      price,
      lastSide: 'buy'
    }))
    broadcast({ type: 'market-update', data: mockStocks })
  }
  else {
    const liveStocks = Object.entries(state.stockPrices).map(([symbol, price]) => ({
      symbol,
      price,
      lastSide: 'buy'
    }))
    if (liveStocks.length > 0) {
      broadcast({ type: 'market-update', data: liveStocks })
    }
  }

  ws.on('close', () => {
    console.log('🔌 WebSocket client disconnected')
    state.wsClients.delete(ws)
  })

  ws.on('error', (error) => {
    console.error('WebSocket error:', error)
    state.wsClients.delete(ws)
  })
})

// ===== Startup =====
const PORT = process.env.PORT || 3000

server.listen(PORT, async () => {
  console.log(`🌐 API running on port ${PORT}`)
  console.log(`🔌 WebSocket server running on ws://localhost:${PORT}`)
  console.log(`🧪 Simulation mode: ${isSim}`)

  // Initialize stock data
  await getAllTradableStocks()

  if (isSim) {
    console.log('⚡ Demo mode: Running simulation every 1 second')
    setInterval(runSimulation, 1000) // Update every 1 second
  }
  else {
    console.log('⚡ Live mode: Using Alpaca WebSocket streaming')
    connectAlpacaWebSocket()

    // Initialize account data
    console.log('📊 Initializing Alpaca account data...')
    await getAlpacaAccount()
    await getAlpacaAccountActivities()

    // Connect to SSE for real-time account updates
    console.log('🔌 Setting up SSE for account updates...')
    connectAlpacaSSE()
  }

  if (!ALPACA_KEY) {
    console.log('⚠️ Using mock data - set ALPACA_KEY and ALPACA_SECRET for real data')
  }
})
