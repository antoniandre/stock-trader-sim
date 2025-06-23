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
  APCA_API_BASE_URL: customBaseUrl,
  ALPACA_DATA_STREAM,
  SIMULATION
} = process.env

// Alpaca has different URLs for trading and for market data
const ALPACA_TRADE_API_URL = process.env.APCA_API_BASE_URL || 'https://api.alpaca.markets'
const ALPACA_DATA_API_URL = 'https://data.alpaca.markets' // Data API is always the same

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

// ===== Mock data for demo =====
const mockPrices = {
  AAPL: 175.50,
  MSFT: 420.30,
  TSLA: 245.80
}

// ===== WebSocket clients for real-time updates =====
const wsClients = new Set()

function broadcast(data) {
  const message = JSON.stringify(data)
  wsClients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
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
    console.error(`❌ FATAL: Error fetching tradable assets from Alpaca. Please check your network connection and API keys.`, e.message);
    return [];
  }
}

async function getLatestTradePrice(symbol) {
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    return mockPrices[symbol] || 0;
  }
  const url = `https://data.alpaca.markets/v2/stocks/${symbol}/trades/latest`;
  try {
    const { data } = await axios.get(url, { headers: HEADERS });
    return data.trade?.p || mockPrices[symbol] || 0;
  } catch (e) {
    console.error(`❌ Error fetching latest trade for ${symbol}:`, e.message);
    return mockPrices[symbol] || 0; // Fallback to mock on error
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

async function pollAllStockPrices() {
  if (isSim) return; // Only run in live mode

  const symbols = await getAllTradableAssets();
  if (symbols.length === 0) return;

  const chunkSize = 200;
  let allSnapshots = {};

  for (let i = 0; i < symbols.length; i += chunkSize) {
    const chunk = symbols.slice(i, i + chunkSize);
    const url = `${ALPACA_DATA_API_URL}/v2/stocks/snapshots?symbols=${chunk.join(',')}`;
    try {
      const { data } = await axios.get(url, { headers: HEADERS });
      // Merge chunk data into allSnapshots
      Object.assign(allSnapshots, data);
    } catch (e) {
      console.error(`❌ Error fetching price snapshot from Alpaca for chunk starting with ${chunk[0]}.`, e.message)
    }
  }

  // Transform the snapshot object into an array of stocks for the frontend
  const stocksArray = Object.entries(allSnapshots)
    .map(([symbol, snapshot]) => {
      if (!snapshot || !snapshot.latestTrade) {
        return null; // Skip stocks without a recent trade
      }

      const price = snapshot.latestTrade.p;
      // Determine trend by comparing to yesterday's close or today's open
      const lastKnownPrice = snapshot.prevDailyBar ? snapshot.prevDailyBar.c : (snapshot.dailyBar ? snapshot.dailyBar.o : price);

      return {
        symbol: symbol,
        price: price,
        lastSide: price >= lastKnownPrice ? 'buy' : 'sell', // 'buy' for up/stable, 'sell' for down
      };
    })
    .filter(Boolean); // Filter out any null entries

  console.log(`📊 Broadcasting update for ${stocksArray.length} stocks.`);
  broadcast({ type: 'market-update', data: stocksArray });
}

setInterval(() => {
  if (isSim) {
    pollPrices();
  } else {
    pollAllStockPrices();
  }
}, isSim ? intervalMs : 5000);

// ===== WebSocket streaming =====
// The connectStream function is now replaced by the pollAllStockPrices logic.

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

wss.on('connection', async (ws) => {
  console.log('🔌 New WebSocket client connected')
  wsClients.add(ws)

  // Initial market data is now sent by the first run of pollAllStockPrices()
  // No initial message needed here.

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
  } else {
    console.log('⚡ Live mode: Polling all market prices every 5 seconds.')
  }
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    console.log('⚠️ Using mock data - set ALPACA_KEY and ALPACA_SECRET for real data')
  }
})
