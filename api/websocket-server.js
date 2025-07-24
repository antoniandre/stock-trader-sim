import WebSocket, { WebSocketServer } from 'ws'
import { ALPACA_DATA_STREAM_URL, ALPACA_KEY, ALPACA_SECRET, IS_SIMULATION, state } from './config.js'
import { getMarketStatus, getStockMarketStatus, startPricePolling, stopPricePolling } from './market-data.js'
import { placeOrder } from './alpaca-account.js'
import { runSimulation, mockPrices } from './simulation.js'

// WebSocket State
// --------------------------------------------------------
const subscribedStocks = new Set()
let isAuthenticated = false
let reconnectAttempts = 0
const MAX_RECONNECT_ATTEMPTS = 5
const RECONNECT_DELAY = 30000

// Market Status Tracking
// --------------------------------------------------------
let currentMarketStatus = null
let marketStatusInterval = null

export function broadcast(data) {
  const message = JSON.stringify(data)
  for (const client of state.wsClients) {
    if (client.readyState === 1) client.send(message)
  }
}

function cleanupAlpacaConnection() {
  if (state.alpacaWebSocket) {
    state.alpacaWebSocket.removeAllListeners()
    if (state.alpacaWebSocket.readyState === WebSocket.OPEN) state.alpacaWebSocket.close()
    state.alpacaWebSocket = null
  }
  isAuthenticated = false
  console.log('🧹 Alpaca WebSocket connection cleaned up')
}

// Market Status Functions
// --------------------------------------------------------
async function checkAndBroadcastMarketStatus() {
  try {
    const newStatus = await getMarketStatus()

    if (!currentMarketStatus ||
        currentMarketStatus.status !== newStatus.status ||
        currentMarketStatus.message !== newStatus.message) {

      console.log(`📊 Market status: ${currentMarketStatus?.status || 'initial'} → ${newStatus.status}`)
      currentMarketStatus = newStatus

      broadcast({
        type: 'market-status',
        data: newStatus,
        timestamp: new Date().toISOString()
      })
    }
  }
  catch (error) {
    console.error('❌ Error checking market status:', error)
  }
}

function startMarketStatusUpdates() {
  if (marketStatusInterval) {
    console.log('📊 Market status monitoring already running')
    return
  }

  checkAndBroadcastMarketStatus()
  marketStatusInterval = setInterval(checkAndBroadcastMarketStatus, 2 * 60 * 1000)
  console.log('📊 Market status monitoring started')
}

function stopMarketStatusUpdates() {
  if (marketStatusInterval) {
    clearInterval(marketStatusInterval)
    marketStatusInterval = null
    console.log('📊 Market status monitoring stopped')
  }
}

// Stock Subscription Functions
// --------------------------------------------------------
export function subscribeToStock(symbol) {
  if (!subscribedStocks.has(symbol)) {
    subscribedStocks.add(symbol)
    console.log(`📡 Added subscription for ${symbol}`)

    if (subscribedStocks.size === 1) startPricePolling(subscribedStocks, broadcast)

    if (state.alpacaWebSocket && state.alpacaWebSocket.readyState === 1 && isAuthenticated) {
      const subscribeMessage = { action: 'subscribe', trades: [symbol], quotes: [symbol] }
      state.alpacaWebSocket.send(JSON.stringify(subscribeMessage))
      console.log(`📡 Subscribed to ${symbol} via WebSocket`)
    }
    else {
      console.log(`📡 ${symbol} queued for subscription`)
    }
  }
  else {
    console.log(`📡 ${symbol} already subscribed`)
  }
}

export function unsubscribeFromStock(symbol) {
  if (subscribedStocks.has(symbol)) {
    subscribedStocks.delete(symbol)
    console.log(`📡 Removing subscription for ${symbol} (${subscribedStocks.size} remaining)`)

    if (subscribedStocks.size === 0) {
      console.log('🛑 No more subscriptions, stopping price polling')
      stopPricePolling()
    }

    if (state.alpacaWebSocket && state.alpacaWebSocket.readyState === 1) {
      const unsubscribeMessage = {
        action: 'unsubscribe',
        trades: [symbol],
        quotes: [symbol]
      }
      state.alpacaWebSocket.send(JSON.stringify(unsubscribeMessage))
    }
  }
}

// WebSocket Server
// --------------------------------------------------------
export function createWebSocketServer(server) {
  const wss = new WebSocketServer({ server })
  startMarketStatusUpdates()

  wss.on('connection', (ws) => {
    console.log('🔌 New WebSocket client connected')
    state.wsClients.add(ws)

    if (state.wsClients.size === 1) startMarketStatusUpdates()

    // Send initial market status.
    if (currentMarketStatus) {
      ws.send(JSON.stringify({
        type: 'market-status',
        data: currentMarketStatus,
        timestamp: new Date().toISOString()
      }))
    }

    // Send initial stock data.
    if (IS_SIMULATION) {
      const mockStocks = Object.entries(mockPrices).map(([symbol, price]) => {
        const stockData = state.allStocks.find(s => s.symbol === symbol)
        return {
          symbol,
          price,
          lastSide: 'buy',
          currency: stockData?.currency || 'USD',
          currencySymbol: stockData?.currencySymbol || '$'
        }
      })
      ws.send(JSON.stringify({ type: 'market-update', data: mockStocks }))
    }
    else {
      const liveStocks = Object.entries(state.stockPrices).map(([symbol, price]) => {
        const stockData = state.allStocks.find(s => s.symbol === symbol)
        return {
          symbol,
          price,
          lastSide: 'buy',
          currency: stockData?.currency || 'USD',
          currencySymbol: stockData?.currencySymbol || '$'
        }
      })
      if (liveStocks.length > 0) ws.send(JSON.stringify({ type: 'market-update', data: liveStocks }))
    }

    ws.on('close', () => {
      console.log('🔌 WebSocket client disconnected')
      state.wsClients.delete(ws)

      if (state.wsClients.size === 0) {
        stopMarketStatusUpdates()
        if (subscribedStocks.size === 0) stopPricePolling()
      }
    })

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data.toString())
        console.log('📨 Client message:', message)

        if (message.type === 'subscribe' && message.symbol) {
          console.log(`📡 Client requesting subscription to ${message.symbol}`)
          subscribeToStock(message.symbol)
        }
        else if (message.type === 'unsubscribe' && message.symbol) {
          console.log(`📡 Client requesting unsubscription from ${message.symbol}`)
          unsubscribeFromStock(message.symbol)
        }
      }
      catch (error) {
        console.error('❌ Error parsing client message:', error)
      }
    })

    ws.on('error', (error) => {
      console.error('WebSocket error:', error)
      state.wsClients.delete(ws)
    })
  })

  return wss
}

// Alpaca WebSocket Functions
// --------------------------------------------------------
export function connectAlpacaWebSocket() {
  if (IS_SIMULATION) return

  try {
    console.log('🔌 Connecting to Alpaca WebSocket stream...')
    state.alpacaWebSocket = new WebSocket(ALPACA_DATA_STREAM_URL)

    state.alpacaWebSocket.on('open', () => {
      console.log('✅ Connected to Alpaca WebSocket stream')
      const authMessage = { action: 'auth', key: ALPACA_KEY, secret: ALPACA_SECRET }
      console.log('🔑 Sending authentication message...')
      state.alpacaWebSocket.send(JSON.stringify(authMessage))
    })

    state.alpacaWebSocket.on('message', (data) => {
      try {
        const messages = JSON.parse(data)

        if (Array.isArray(messages)) {
          console.log('📨 Processing', messages.length, 'messages')
          for (const message of messages) {
            handleAlpacaMessage(message)
          }
        }
      }
      catch (error) {
        console.error('❌ Error parsing WebSocket message:', error)
        console.error('Raw message:', data.toString())
      }
    })

    state.alpacaWebSocket.on('error', (error) => {
      console.error('❌ Alpaca WebSocket error:', error)
    })

    state.alpacaWebSocket.on('close', (code, reason) => {
      console.log(`🔌 Alpaca WebSocket disconnected (code: ${code})`)
      cleanupAlpacaConnection()

      if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        reconnectAttempts++
        console.log(`🔄 Reconnecting in ${RECONNECT_DELAY/1000}s... (${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
        setTimeout(connectAlpacaWebSocket, RECONNECT_DELAY)
      }
      else {
        console.error('❌ Max reconnection attempts reached')
        reconnectAttempts = 0
      }
    })
  }
  catch (error) {
    console.error('❌ Failed to connect to Alpaca WebSocket:', error)
  }
}

function handleAlpacaMessage(message) {
  if (message.T === 'success' && message.msg === 'authenticated') {
    console.log('✅ Authenticated with Alpaca WebSocket')
    isAuthenticated = true
    reconnectAttempts = 0

    if (subscribedStocks.size > 0) {
      const stocksArray = Array.from(subscribedStocks)
      const subscribeMessage = { action: 'subscribe', trades: stocksArray, quotes: stocksArray }
      console.log('📡 Subscribing to trades and quotes for:', stocksArray)
      state.alpacaWebSocket.send(JSON.stringify(subscribeMessage))
    }
    else {
      console.log('📡 No stocks requested yet, waiting for subscriptions...')
    }
  }

  if (message.T === 't') {
    const symbol = message.S
    const price = message.p
    console.log(`💰 Trade received: ${symbol} @ $${price}`)
    state.stockPrices[symbol] = price
    broadcastPriceUpdate(symbol, price)
  }

  if (message.T === 'q') {
    const symbol = message.S
    const askPrice = message.ap
    const bidPrice = message.bp
    const price = askPrice || bidPrice

    if (price > 0) {
      console.log(`📈 Quote received: ${symbol} @ $${price}`)
      state.stockPrices[symbol] = price
      broadcastPriceUpdate(symbol, price)
    }
  }

  if (message.T === 'error') {
    console.error(`❌ Alpaca WebSocket error: ${message.code} - ${message.msg}`)

    if (message.code === 406) {
      console.error('💡 Connection limit exceeded. Waiting 60s before retry...')
      cleanupAlpacaConnection()
      setTimeout(connectAlpacaWebSocket, 60000)
      return
    }

    if (message.code === 401) {
      console.error('💡 Authentication failed. Check your keys.')
      cleanupAlpacaConnection()
      return
    }
  }

  if (message.T && message.T !== 't' && message.T !== 'q' && message.T !== 'success' && message.T !== 'error') {
    console.log(`🔍 Unknown message type: ${message.T}`, message)
  }
}

async function broadcastPriceUpdate(symbol, price) {
  const stockData = state.allStocks.find(s => s.symbol === symbol)
  if (stockData) {
    try {
      const marketStatus = await getStockMarketStatus(stockData)
      broadcast({
        type: 'price',
        symbol,
        price,
        currency: stockData.currency || 'USD',
        currencySymbol: stockData.currencySymbol || '$',
        marketState: marketStatus.status,
        marketMessage: marketStatus.message,
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose,
        timestamp: new Date().toISOString()
      })
    }
    catch (error) {
      console.warn(`⚠️ Failed to get market status for ${symbol}:`, error)
      broadcast({
        type: 'price',
        symbol,
        price,
        currency: stockData.currency || 'USD',
        currencySymbol: stockData.currencySymbol || '$',
        timestamp: new Date().toISOString()
      })
    }
  }
}

export function disconnectAlpacaWebSocket() {
  console.log('🔌 Disconnecting from Alpaca WebSocket...')
  cleanupAlpacaConnection()
}

// Simulation Functions
// --------------------------------------------------------
export async function runSimulationWrapper() {
  const { priceUpdates, trades } = await runSimulation()
  broadcast({ type: 'market-update', data: priceUpdates })
  for (const trade of trades) broadcast(trade)
}

// Export Functions
// --------------------------------------------------------
export function getCurrentMarketStatus() {
  return currentMarketStatus
}

export function cleanupWebSocketServer() {
  stopMarketStatusUpdates()
  console.log('🔌 WebSocket server cleaned up')
}
