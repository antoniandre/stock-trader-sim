import axios from 'axios'
import dotenv from 'dotenv'
import { createRequire } from 'module'
import express from 'express'
import { createServer } from 'http'

const require = createRequire(import.meta.url)
const WebSocket = require('ws')

dotenv.config()

const {
  ALPACA_KEY,
  ALPACA_SECRET,
  ALPACA_BASE_URL,
  ALPACA_DATA_STREAM,
  SIMULATION
} = process.env

const HEADERS = {
  'APCA-API-KEY-ID': ALPACA_KEY,
  'APCA-API-SECRET-KEY': ALPACA_SECRET
}

// ===== Config =====
const watchlist = ['AAPL', 'MSFT', 'TSLA']
const priceThreshold = 200 // Buy below this price
const intervalMs = 1_000 // 1 second for demo

// ===== Simulation state =====
const isSim = SIMULATION === 'true'
const portfolio = {} // { symbol: { qty, history: [{ side, qty, price, timestamp }] } }

// ===== Mock data for demo =====
const mockPrices = {
  AAPL: 175.50,
  MSFT: 420.30,
  TSLA: 245.80
}

// ===== WebSocket clients for real-time updates =====
const wsClients = new Set()

// ===== Helpers =====
async function getPrice (symbol) {
  // Use mock data if no API credentials
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    // Add more realistic price movement with trends
    const basePrice = mockPrices[symbol]
    const timeVariation = Math.sin(Date.now() / 10000) * 0.02 // Slow trend
    const randomVariation = (Math.random() - 0.5) * 0.01 // Small random movement
    const newPrice = basePrice * (1 + timeVariation + randomVariation)
    return Math.max(newPrice, basePrice * 0.95) // Don't go below 95% of base price
  }

  const url = `https://data.alpaca.markets/v2/stocks/${symbol}/quotes/latest`
  try {
    const { data } = await axios.get(url, { headers: HEADERS })
    return data.quote?.ap
  } catch (e) {
    console.error(`❌ Error fetching ${symbol}:`, e.response?.data || e.message)
    // Fallback to mock data
    return mockPrices[symbol] + (Math.random() - 0.5) * 10
  }
}

async function recordSimTrade (symbol, qty, side, price) {
  const timestamp = new Date().toISOString()
  if (!portfolio[symbol]) portfolio[symbol] = { qty: 0, history: [] }
  if (side === 'buy') portfolio[symbol].qty += qty
  else if (side === 'sell') portfolio[symbol].qty -= qty
  portfolio[symbol].history.push({ side, qty, price, timestamp })

  // Broadcast trade to all connected clients
  const tradeData = { type: 'trade', side, symbol, qty, price, timestamp }
  wsClients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(tradeData))
    }
  })

  return { simulated: true, side, symbol, qty, price, timestamp }
}

async function placeOrder (symbol, qty, side) {
  if (isSim) {
    const price = await getPrice(symbol)
    if (!price) return
    console.log(`🧪 [SIM] ${side.toUpperCase()} ${qty} ${symbol} @ $${price.toFixed(2)}`)
    return recordSimTrade(symbol, qty, side, price)
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
    console.error(`❌ Order error for ${symbol}:`, e.response?.data || e.message)
  }
}

// ===== Polling =====
async function pollPrices () {
  for (const symbol of watchlist) {
    const price = await getPrice(symbol)
    if (!price) continue
    console.log(`📊 ${symbol}: $${price.toFixed(2)}`)

    // Broadcast price update to all connected clients
    const priceData = { type: 'price', symbol, price, timestamp: new Date().toISOString() }
    wsClients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(priceData))
      }
    })

    // More frequent trading for demo - buy on price dips, sell on peaks
    const currentPrice = price
    const basePrice = mockPrices[symbol]
    const priceRatio = currentPrice / basePrice

    if (priceRatio < 0.98) {
      // Buy when price is 2% below base
      await placeOrder(symbol, 1, 'buy')
    }
    else if (priceRatio > 1.02 && portfolio[symbol]?.qty > 0) {
      // Sell when price is 2% above base and we have shares
      await placeOrder(symbol, 1, 'sell')
    }
  }
}

// Only start polling if we have API credentials or in simulation mode
if (isSim || !ALPACA_KEY || ALPACA_KEY === 'your_key') {
  setInterval(pollPrices, intervalMs)
  pollPrices()
}

// ===== WebSocket streaming =====
function connectStream () {
  // Skip WebSocket if no API credentials
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    console.log('⚠️ Skipping Alpaca WebSocket connection - no API credentials')
    return
  }

  const ws = new WebSocket(ALPACA_DATA_STREAM)
  ws.on('open', () => {
    console.log('📡 Connected to Alpaca stream')
    ws.send(JSON.stringify({ action: 'auth', key: ALPACA_KEY, secret: ALPACA_SECRET }))
  })

  ws.on('message', async msg => {
    const messages = JSON.parse(msg)
    for (const m of messages) {
      if (m.T === 'q') {
        const { S, ap } = m
        console.log(`⚡ Live Quote ${S}: $${ap}`)
        if (ap && ap < priceThreshold) await placeOrder(S, 1, 'buy')
      }
      else if (m.T === 'success' && m.msg === 'authenticated') {
        ws.send(JSON.stringify({ action: 'subscribe', quotes: watchlist }))
      }
    }
  })

  ws.on('close', () => {
    console.warn('⚠️ Stream closed, reconnecting in 5s...')
    setTimeout(connectStream, 5000)
  })

  ws.on('error', console.error)
}

connectStream()

// ===== Express API for dashboard =====
const app = express()

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/sim/portfolio', (req, res) => {
  const stocks = Object.entries(portfolio).map(([symbol, val]) => {
    const last = val.history.at(-1) || {}
    return { symbol, price: last.price || 0, lastSide: last.side || 'buy' }
  })
  const history = []
  for (const sym in portfolio) history.push(...portfolio[sym].history.map(h => ({ ...h, symbol: sym })))
  res.json({ stocks, history })
})

// Add health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', simulation: isSim, timestamp: new Date().toISOString() })
})

// ===== Create HTTP server and WebSocket server =====
const server = createServer(app)

// Mock WebSocket server for real-time updates
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  console.log('🔌 New WebSocket client connected')
  wsClients.add(ws)

  // Send initial portfolio data
  const stocks = Object.entries(portfolio).map(([symbol, val]) => {
    const last = val.history.at(-1) || {}
    return { symbol, price: last.price || 0, lastSide: last.side || 'buy' }
  })
  const history = []
  for (const sym in portfolio) history.push(...portfolio[sym].history.map(h => ({ ...h, symbol: sym })))

  ws.send(JSON.stringify({
    type: 'init',
    data: { stocks, history }
  }))

  ws.on('close', () => {
    console.log('🔌 WebSocket client disconnected')
    wsClients.delete(ws)
  })

  ws.on('error', (error) => {
    console.error('WebSocket error:', error)
    wsClients.delete(ws)
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`🌐 API running on port ${PORT}`)
  console.log(`🔌 WebSocket server running on ws://localhost:${PORT}`)
  console.log(`🧪 Simulation mode: ${isSim}`)
  console.log(`⚡ Demo mode: New data every ${intervalMs/1000} second`)
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    console.log('⚠️ Using mock data - set ALPACA_KEY and ALPACA_SECRET for real data')
  }
})
