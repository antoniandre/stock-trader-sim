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

// Alpaca has different URLs for trading and for market data
const ALPACA_TRADE_API_URL = ALPACA_BASE_URL || 'https://api.alpaca.markets'
const ALPACA_DATA_STREAM_URL = ALPACA_DATA_STREAM || 'wss://stream.data.alpaca.markets/v2/iex'

// Prioritize API keys over simulation flag. If keys exist, it's not a simulation.
const isSim = !(ALPACA_KEY && ALPACA_KEY !== 'your_key')

const HEADERS = {
  'APCA-API-KEY-ID': ALPACA_KEY,
  'APCA-API-SECRET-KEY': ALPACA_SECRET
}

// ===== Config =====
const watchlist = ['AAPL', 'MSFT', 'TSLA']
const priceThreshold = 200 // Buy below this price
const intervalMs = 1_000 // 1 second for demo

// ===== Simulation state =====
let allTradableAssets = [] // Cache for all assets
const portfolio = {} // { symbol: { qty, history: [{ side, qty, price, timestamp }] } }
const stockPrices = {} // { symbol: price }

// ===== Mock data for demo =====
const mockPrices = {
  AAPL: 175.50,
  MSFT: 420.30,
  TSLA: 245.80
}

// ===== WebSocket clients for real-time updates =====
const wsClients = new Set()
let alpacaWebSocket = null

function broadcast(data) {
  const message = JSON.stringify(data)
  wsClients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

// ===== Alpaca WebSocket Streaming =====
function connectAlpacaWebSocket() {
  if (isSim) return // Only connect in live mode

  try {
    console.log('🔌 Connecting to Alpaca WebSocket stream...')
    alpacaWebSocket = new WebSocket(ALPACA_DATA_STREAM_URL)

    alpacaWebSocket.on('open', () => {
      console.log('✅ Connected to Alpaca WebSocket stream')

      // Subscribe to trade updates for all stocks
      const authMessage = {
        action: 'auth',
        key: ALPACA_KEY,
        secret: ALPACA_SECRET
      }
      alpacaWebSocket.send(JSON.stringify(authMessage))
    })

    alpacaWebSocket.on('message', (data) => {
      console.log('🔔 Alpaca WS message:', data)
      try {
        const message = JSON.parse(data)

        if (message.T === 'success' && message.msg === 'authenticated') {
          console.log('✅ Authenticated with Alpaca WebSocket')

          // Subscribe to trade updates for popular stocks
          const subscribeMessage = {
            action: 'subscribe',
            trades: ['AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'NVDA', 'NFLX']
          }
          alpacaWebSocket.send(JSON.stringify(subscribeMessage))
        }

        if (message.T === 'trade') {
          // Update stock price
          const symbol = message.S
          const price = message.p
          stockPrices[symbol] = price

          // Broadcast price update to frontend
          broadcast({
            type: 'price',
            symbol,
            price,
            timestamp: new Date().toISOString()
          })
        }
      } catch (error) {
        console.error('❌ Error parsing WebSocket message:', error)
      }
    })

    alpacaWebSocket.on('error', (error) => {
      console.error('❌ Alpaca WebSocket error:', error)
    })

    alpacaWebSocket.on('close', () => {
      console.log('🔌 Alpaca WebSocket disconnected, reconnecting in 5 seconds...')
      setTimeout(connectAlpacaWebSocket, 5000)
    })

  } catch (error) {
    console.error('❌ Failed to connect to Alpaca WebSocket:', error)
  }
}

// ===== Helpers =====
async function getAllTradableAssets() {
  if (allTradableAssets.length > 0) {
    return allTradableAssets
  }
  const url = `${ALPACA_TRADE_API_URL}/v2/assets?status=active&tradable=true&asset_class=us_equity`
  try {
    const { data } = await axios.get(url, { headers: HEADERS })
    // Filter out non-common stocks if necessary
    allTradableAssets = data.filter(asset => asset.class === 'us_equity' && asset.exchange !== 'OTC').map(asset => asset.symbol)
    console.log(`✅ Fetched ${allTradableAssets.length} tradable US equity assets.`)
    return allTradableAssets
  } catch (e) {
    console.error(`❌ FATAL: Error fetching tradable assets from Alpaca. Please check your network connection and API keys.`, e.message)
    return []
  }
}

async function getLatestTradePrice(symbol) {
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    return mockPrices[symbol] || 0
  }
  const url = `https://data.alpaca.markets/v2/stocks/${symbol}/trades/latest`
  try {
    const { data } = await axios.get(url, { headers: HEADERS })
    return data.trade?.p || mockPrices[symbol] || 0
  } catch (e) {
    console.error(`❌ Error fetching latest trade for ${symbol}:`, e.message)
    return mockPrices[symbol] || 0 // Fallback to mock on error
  }
}

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

  // Use cached price from WebSocket if available
  if (stockPrices[symbol]) {
    return stockPrices[symbol]
  }

  // Fallback to REST API
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
    const { data } = await axios.post(`${ALPACA_TRADE_API_URL}/v2/orders`, order, { headers: HEADERS })
    console.log(`✅ ${side.toUpperCase()} ${qty} ${symbol} @ ${new Date().toLocaleTimeString()}`)
    return data
  }
  catch (e) {
    console.error(`❌ Order error for ${symbol}:`, e.response?.data || e.message)
  }
}

// ===== Polling (for simulation mode only) =====
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

// WebSocket server for frontend clients
const wss = new WebSocket.Server({ server })

wss.on('connection', async (ws) => {
  console.log('🔌 New WebSocket client connected')
  wsClients.add(ws)

  // Send initial market data
  if (isSim) {
    // For simulation, send mock data
    const mockStocks = watchlist.map(symbol => ({
      symbol,
      price: mockPrices[symbol] || 0,
      lastSide: 'buy'
    }))
    broadcast({ type: 'market-update', data: mockStocks })
  } else {
    // For live mode, send current stock prices
    const liveStocks = Object.entries(stockPrices).map(([symbol, price]) => ({
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

  if (isSim) {
    console.log(`⚡ Demo mode: New data every 1 second`)
    // Start polling for simulation mode
    setInterval(pollPrices, intervalMs)
  } else {
    console.log('⚡ Live mode: Using Alpaca WebSocket streaming')
    // Connect to Alpaca WebSocket for live mode
    connectAlpacaWebSocket()
  }

  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    console.log('⚠️ Using mock data - set ALPACA_KEY and ALPACA_SECRET for real data')
  }
})
