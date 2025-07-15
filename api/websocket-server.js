import WebSocket, { WebSocketServer } from 'ws'
import { ALPACA_DATA_STREAM_URL, ALPACA_KEY, ALPACA_SECRET, IS_SIMULATION, state } from './config.js'
import { getPrice, getMarketStatus } from './market-data.js'
import { placeOrder } from './alpaca-account.js'
import { runSimulation, mockPrices } from './simulation.js'

// Track subscribed stocks dynamically - start with empty set.
const subscribedStocks = new Set()

// Market status tracking
let currentMarketStatus = null
let marketStatusInterval = null

// WebSocket Management
// --------------------------------------------------------
export function broadcast(data) {
  const message = JSON.stringify(data)
  state.wsClients.forEach(client => {
    if (client.readyState === 1) client.send(message) // WebSocket.OPEN.
  })
}

// Market Status Broadcasting
// --------------------------------------------------------
async function checkAndBroadcastMarketStatus() {
  try {
    const newStatus = await getMarketStatus()

    // Only broadcast if status changed
    if (!currentMarketStatus ||
        currentMarketStatus.status !== newStatus.status ||
        currentMarketStatus.message !== newStatus.message) {

      console.log(`📊 Market status changed: ${currentMarketStatus?.status || 'initial'} → ${newStatus.status}`)
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
  // Don't start if already running
  if (marketStatusInterval) {
    console.log('📊 Market status monitoring already running')
    return
  }

  // Initial status check
  checkAndBroadcastMarketStatus()

  // Check every 2 minutes (market status only changes 4x per day).
  marketStatusInterval = setInterval(checkAndBroadcastMarketStatus, 2 * 60 * 1000)
  console.log('📊 Market status monitoring started (2-minute intervals)')
}

function stopMarketStatusUpdates() {
  if (marketStatusInterval) {
    clearInterval(marketStatusInterval)
    marketStatusInterval = null
    console.log('📊 Market status monitoring stopped')
  }
}

// Function to subscribe to a new stock.
export function subscribeToStock(symbol) {
  if (!subscribedStocks.has(symbol)) {
    subscribedStocks.add(symbol)
    console.log(`📡 Adding subscription for ${symbol} (total: ${subscribedStocks.size})`)

    // If we have an active Alpaca WebSocket, update the subscription.
    if (state.alpacaWebSocket && state.alpacaWebSocket.readyState === 1) {
      const subscribeMessage = {
        action: 'subscribe',
        trades: [symbol],
        quotes: [symbol]
      }
      state.alpacaWebSocket.send(JSON.stringify(subscribeMessage))
      console.log(`📡 Subscribed to ${symbol} via WebSocket`)
    }
  } else {
    console.log(`📡 ${symbol} already subscribed`)
  }
}

// Function to unsubscribe from a stock (optional, for cleanup).
export function unsubscribeFromStock(symbol) {
  if (subscribedStocks.has(symbol)) {
    subscribedStocks.delete(symbol)
    console.log(`📡 Removing subscription for ${symbol}`)

    // If we have an active Alpaca WebSocket, update the subscription.
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

export function createWebSocketServer(server) {
  const wss = new WebSocketServer({ server })

  // Start market status monitoring when server starts
  startMarketStatusUpdates()

  wss.on('connection', (ws) => {
    console.log('🔌 New WebSocket client connected')
    state.wsClients.add(ws)

    // Restart market status monitoring if this is the first client.
    if (state.wsClients.size === 1) startMarketStatusUpdates()

    // Send initial market status to new client
    if (currentMarketStatus) {
      ws.send(JSON.stringify({
        type: 'market-status',
        data: currentMarketStatus,
        timestamp: new Date().toISOString()
      }))
    }

    // Send initial stock data.
    if (IS_SIMULATION) {
      const mockStocks = Object.entries(mockPrices).map(([symbol, price]) => ({
        symbol,
        price,
        lastSide: 'buy'
      }))
      ws.send(JSON.stringify({ type: 'market-update', data: mockStocks }))
    }
    else {
      const liveStocks = Object.entries(state.stockPrices).map(([symbol, price]) => ({
        symbol,
        price,
        lastSide: 'buy'
      }))
      if (liveStocks.length > 0) {
        ws.send(JSON.stringify({ type: 'market-update', data: liveStocks }))
      }
    }

    ws.on('close', () => {
      console.log('🔌 WebSocket client disconnected')
      state.wsClients.delete(ws)

      // Stop market status updates if no clients connected
      if (state.wsClients.size === 0) {
        stopMarketStatusUpdates()
      }
    })

    ws.on('error', (error) => {
      console.error('WebSocket error:', error)
      state.wsClients.delete(ws)
    })
  })

  return wss
}

// Alpaca WebSocket Streaming
// --------------------------------------------------------
export function connectAlpacaWebSocket() {
  if (IS_SIMULATION) return

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

          // Only subscribe if we have stocks that have been explicitly requested.
          if (subscribedStocks.size > 0) {
            const stocksArray = Array.from(subscribedStocks)
            const subscribeMessage = {
              action: 'subscribe',
              trades: stocksArray,
              quotes: stocksArray
            }
            console.log('📡 Subscribing to trades and quotes for:', stocksArray)
            state.alpacaWebSocket.send(JSON.stringify(subscribeMessage))
          } else {
            console.log('📡 No stocks requested yet, waiting for specific subscriptions...')
          }
        }

        // Handle both trades and quotes.
        if (message.T === 'trade') {
          const symbol = message.S
          const price = message.p
          console.log(`💰 Trade received: ${symbol} @ $${price}`)
          state.stockPrices[symbol] = price

          broadcast({
            type: 'price',
            symbol,
            price,
            timestamp: new Date().toISOString()
          })
        }

        if (message.T === 'quote') {
          const symbol = message.S
          const price = message.ap || message.bp // Ask price or bid price.
          if (price > 0) {
            console.log(`📈 Quote received: ${symbol} @ $${price}`)
            state.stockPrices[symbol] = price

            broadcast({
              type: 'price',
              symbol,
              price,
              timestamp: new Date().toISOString()
            })
          }
        }

        // Log other message types for debugging.
        if (message.T && message.T !== 'trade' && message.T !== 'success') {
          console.log(`🔍 Unknown message type: ${message.T}`, message)
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

    state.alpacaWebSocket.on('close', () => {
      console.log('🔌 Alpaca WebSocket disconnected, reconnecting in 5 seconds...')
      setTimeout(connectAlpacaWebSocket, 5000)
    })
  }
  catch (error) {
    console.error('❌ Failed to connect to Alpaca WebSocket:', error)
  }
}

export function disconnectAlpacaWebSocket() {
  if (state.alpacaWebSocket) {
    console.log('🔌 Disconnecting from Alpaca WebSocket...')
    state.alpacaWebSocket.close()
    state.alpacaWebSocket = null
  }
}

// Simulation Mode
// --------------------------------------------------------
export async function runSimulationWrapper() {
  const { priceUpdates, trades } = await runSimulation()

  // Broadcast updated prices.
  broadcast({ type: 'market-update', data: priceUpdates })

  // Broadcast trades.
  trades.forEach(trade => broadcast(trade))
}

// Export current market status for API endpoints
export function getCurrentMarketStatus() {
  return currentMarketStatus
}

// Cleanup function for server shutdown
export function cleanupWebSocketServer() {
  stopMarketStatusUpdates()
  console.log('🔌 WebSocket server cleaned up')
}
