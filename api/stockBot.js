import axios from 'axios'
import dotenv from 'dotenv'
import WebSocket from 'ws'
import express from 'express'

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
const intervalMs = 60_000 // 1 minute

// ===== Simulation state =====
const isSim = SIMULATION === 'true'
const portfolio = {} // { symbol: { qty, history: [{ side, qty, price, timestamp }] } }

// ===== Mock data for demo =====
const mockPrices = {
  AAPL: 175.50,
  MSFT: 420.30,
  TSLA: 245.80
}

// ===== Helpers =====
async function getPrice (symbol) {
  // Use mock data if no API credentials
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    return mockPrices[symbol] + (Math.random() - 0.5) * 10
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
  } catch (e) {
    console.error(`❌ Order error for ${symbol}:`, e.response?.data || e.message)
  }
}

// ===== Polling =====
async function pollPrices () {
  for (const symbol of watchlist) {
    const price = await getPrice(symbol)
    if (!price) continue
    console.log(`📊 ${symbol}: $${price.toFixed(2)}`)
    if (price < priceThreshold) await placeOrder(symbol, 1, 'buy')
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
    console.log('⚠️ Skipping WebSocket connection - no API credentials')
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
      } else if (m.T === 'success' && m.msg === 'authenticated') {
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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🌐 API running on port ${PORT}`)
  console.log(`🧪 Simulation mode: ${isSim}`)
  if (!ALPACA_KEY || ALPACA_KEY === 'your_key') {
    console.log('⚠️ Using mock data - set ALPACA_KEY and ALPACA_SECRET for real data')
  }
})
