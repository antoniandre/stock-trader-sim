import WebSocket, { WebSocketServer } from 'ws'
import { IS_SIMULATION, state } from './config.js'
import { getMarketStatus, getStockMarketStatus, startPricePolling, stopPricePolling } from './market-data.js'
import { runSimulation, mockPrices } from './simulation.js'
import { createAlpacaWebSocket, subscribeToSymbols, unsubscribeFromSymbols } from './clients/alpaca-websocket-client.js'
import { SCREENER_WATCH_SYMBOLS } from './screener-watch-symbols.js'

// WebSocket State.
// --------------------------------------------------------
const subscribedStocks = new Set()
// Per-client subscription tracking so we can clean up on disconnect.
const clientSubscriptions = new Map() // ws → Set<symbol>
let isAuthenticated = false
let reconnectAttempts = 0
const MAX_RECONNECT_ATTEMPTS = 5
const RECONNECT_DELAY = 30000

// Price tracking for stale detection.
const priceHistory = new Map() // symbol -> { recentTrades: [], lastQuoteTime: timestamp }

// Market Status Tracking.
// --------------------------------------------------------
let currentMarketStatus = null
let marketStatusInterval = null

export function broadcast(data) {
  const message = JSON.stringify(data)
  for (const client of state.wsClients) {
    if (client.readyState === 1) client.send(message)
  }
}

// Smart price update logic to detect and prevent stale prices.
function shouldUpdatePrice(symbol, newPrice, currentPrice, messageType) {
  const now = Date.now()

  // Initialize price history for symbol if needed.
  if (!priceHistory.has(symbol)) {
    priceHistory.set(symbol, { recentTrades: [], lastQuoteTime: 0, lastTradeTime: 0 })
  }

  const history = priceHistory.get(symbol)

  // Handle trade messages (always trusted).
  if (messageType === 'trade') {
    // Add to recent trades (keep last 10 trades).
    history.recentTrades.push({ price: newPrice, timestamp: now })
    if (history.recentTrades.length > 10) {
      history.recentTrades.shift()
    }
    history.lastTradeTime = now
    return true // Always update for trades.
  }

  // Handle quote messages (need validation).
  if (messageType === 'quote') {
    history.lastQuoteTime = now

    // If no current price, accept the quote.
    if (!currentPrice) return true

    // If we have recent trades, validate quote against them.
    if (history.recentTrades.length) {
      const recentTrades = history.recentTrades.filter(t => now - t.timestamp < 30000) // Last 30 seconds

      if (recentTrades.length) {
        const avgRecentTradePrice = recentTrades.reduce((sum, t) => sum + t.price, 0) / recentTrades.length
        const priceDeviation = Math.abs(newPrice - avgRecentTradePrice) / avgRecentTradePrice

        // If quote deviates more than 0.5% from recent trades, it's likely stale.
        if (priceDeviation > 0.005) {
          console.warn(`🚫 Rejecting stale quote for ${symbol}: $${newPrice} (recent trades avg: $${avgRecentTradePrice.toFixed(2)}, deviation: ${(priceDeviation * 100).toFixed(2)}%)`)
          return false
        }
      }
    }

    // Check for significant price changes (basic validation).
    const priceChange = Math.abs(newPrice - currentPrice) / currentPrice
    if (priceChange > 0.02) { // More than 2% change.
      console.warn(`⚠️ Large price change for ${symbol}: $${currentPrice} → $${newPrice} (${(priceChange * 100).toFixed(2)}%)`)
    }

    // Only update if price actually changed meaningfully.
    return Math.abs(newPrice - currentPrice) > 0.001
  }

  return false
}

function cleanupAlpacaConnection() {
  if (state.alpacaWebSocket) {
    state.alpacaWebSocket.removeAllListeners()
    if (state.alpacaWebSocket.readyState === WebSocket.OPEN) state.alpacaWebSocket.close()
    state.alpacaWebSocket = null
  }
  isAuthenticated = false
  console.log('🧹 Alpaca WebSocket connection cleaned up')

  // Restart price polling as fallback when WebSocket is disconnected
  if (subscribedStocks.size > 0) {
    import('./market-data.js').then(({ startPricePolling }) => {
      console.log('🔄 WebSocket disconnected - restarting price polling as fallback')
      startPricePolling(subscribedStocks, broadcast)
    })
  }
}

// Market Status Functions.
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

// Stock Subscription Functions.
// --------------------------------------------------------
export function subscribeToStock(symbol) {
  if (!subscribedStocks.has(symbol)) {
    subscribedStocks.add(symbol)
    console.log(`📡 Added subscription for ${symbol}`)

    if (subscribedStocks.size === 1) startPricePolling(subscribedStocks, broadcast)

    if (state.alpacaWebSocket && state.alpacaWebSocket.readyState === 1 && isAuthenticated) {
      subscribeToSymbols(state.alpacaWebSocket, [symbol])
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

    // Clean up price history for unsubscribed stock
    if (priceHistory.has(symbol)) {
      priceHistory.delete(symbol)
      console.log(`🧹 Cleaned up price history for ${symbol}`)
    }

    if (subscribedStocks.size === 0) {
      console.log('🛑 No more subscriptions, stopping price polling')
      stopPricePolling()
    }

    if (state.alpacaWebSocket && state.alpacaWebSocket.readyState === 1) {
      if (!SCREENER_WATCH_SYMBOLS.includes(symbol)) {
        unsubscribeFromSymbols(state.alpacaWebSocket, [symbol])
      }
      else {
        console.log(`📡 Keeping Alpaca subscription for ${symbol} (screener watchlist)`)
      }
    }
  }
}

// WebSocket Server.
// --------------------------------------------------------
export function createWebSocketServer(server) {
  const wss = new WebSocketServer({ server })
  startMarketStatusUpdates()

  wss.on('connection', (ws) => {
    console.log('🔌 New WebSocket client connected')
    state.wsClients.add(ws)
    clientSubscriptions.set(ws, new Set())

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

      // Unsubscribe all symbols this client was watching if no other client wants them.
      const mySymbols = clientSubscriptions.get(ws) || new Set()
      clientSubscriptions.delete(ws)
      for (const symbol of mySymbols) {
        const stillWanted = [...clientSubscriptions.values()].some(s => s.has(symbol))
        if (!stillWanted) {
          console.log(`🧹 Client disconnect: removing orphaned subscription for ${symbol}`)
          unsubscribeFromStock(symbol)
        }
      }

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
          clientSubscriptions.get(ws)?.add(message.symbol)
        }
        else if (message.type === 'unsubscribe' && message.symbol) {
          console.log(`📡 Client requesting unsubscription from ${message.symbol}`)
          clientSubscriptions.get(ws)?.delete(message.symbol)
          // Only remove from global set if no other client still wants this symbol.
          const stillWanted = [...clientSubscriptions.values()].some(s => s.has(message.symbol))
          if (!stillWanted) unsubscribeFromStock(message.symbol)
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

// Alpaca WebSocket Functions.
// --------------------------------------------------------
export function connectAlpacaWebSocket() {
  if (IS_SIMULATION) return

  const handleMessage = (messageData) => {
    // Check for error responses first.
    if (messageData.retryAfter !== undefined) {
      if (messageData.code === 406) {
        console.error('💡 Connection limit exceeded. Waiting 60s before retry...')
        // Surface error to frontend clients
        broadcast({
          type: 'alpaca-error',
          error: 'Connection limit exceeded',
          message: 'Alpaca WebSocket temporarily unavailable. Retrying in 60 seconds...',
          severity: 'warning',
          timestamp: new Date().toISOString(),
          retryWaitMs: 60000
        })
        cleanupAlpacaConnection()
        setTimeout(connectAlpacaWebSocket, messageData.retryAfter)
        return
      }
      if (messageData.code === 401) {
        console.error('💡 Authentication failed. Check your keys.')
        cleanupAlpacaConnection()
        return
      }
    }

    const { type, symbol, price } = messageData

    if (type === 'trade') {
      console.log(`💰 Trade received: ${symbol} @ $${price}`)
      const currentPrice = state.stockPrices[symbol]
      const shouldUpdate = shouldUpdatePrice(symbol, price, currentPrice, 'trade')

      if (shouldUpdate) {
        state.stockPrices[symbol] = price
        broadcastPriceUpdate(symbol, price)
      }

      if (messageData.data) {
        import('./src/screener/screener.js').then(m => {
          if (typeof m.ingestAlpacaTradeMessage === 'function') m.ingestAlpacaTradeMessage(messageData.data)
        }).catch(() => {})
      }
    }
    else if (type === 'quote') {
      console.log(`📈 Quote received: ${symbol} @ $${price}`)
      const currentPrice = state.stockPrices[symbol]
      const shouldUpdate = shouldUpdatePrice(symbol, price, currentPrice, 'quote')

      if (shouldUpdate) {
        state.stockPrices[symbol] = price
        broadcastPriceUpdate(symbol, price)
      }

      if (messageData.data) {
        import('./src/screener/screener.js').then(m => {
          if (typeof m.ingestAlpacaQuoteMessage === 'function') m.ingestAlpacaQuoteMessage(messageData.data)
        }).catch(() => {})
      }
    }
    else if (type === 'bar') {
      if (messageData.data) {
        import('./src/screener/screener.js').then(m => {
          if (typeof m.ingestAlpacaBarMessage === 'function') m.ingestAlpacaBarMessage(messageData.data)
        }).catch(() => {})
      }
    }
  }

  const handleAuthenticated = () => {
    isAuthenticated = true
    reconnectAttempts = 0

    // Stop price polling since WebSocket is now active
    import('./market-data.js').then(({ stopPricePolling }) => {
      stopPricePolling()
      console.log('🔄 Stopped price polling - WebSocket now handling real-time updates')
    })

    const merged = [...new Set([...Array.from(subscribedStocks), ...SCREENER_WATCH_SYMBOLS])]
    if (merged.length > 0) {
      subscribeToSymbols(state.alpacaWebSocket, merged, { barSymbols: SCREENER_WATCH_SYMBOLS })
      console.log(`📡 Subscribed to ${merged.length} Alpaca symbol(s) (client feeds + screener watchlist)`)
    }
    else {
      console.log('📡 No symbols to subscribe (unexpected empty watchlist)')
    }
  }

  const handleError = (error) => {
    console.error('❌ Alpaca WebSocket error:', error)
    // Surface error to frontend clients
    broadcast({
      type: 'alpaca-error',
      error: 'WebSocket connection failed',
      message: 'Alpaca WebSocket encountered an error. Attempting to reconnect...',
      severity: 'error',
      timestamp: new Date().toISOString(),
      retryWaitMs: 30000
    })
  }

  const handleClose = (code, reason) => {
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
  }

  state.alpacaWebSocket = createAlpacaWebSocket(
    handleMessage,
    handleAuthenticated,
    handleError,
    handleClose
  )
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

// Simulation Functions.
// --------------------------------------------------------
export async function runSimulationWrapper() {
  const { priceUpdates, trades } = await runSimulation()
  broadcast({ type: 'market-update', data: priceUpdates })
  for (const trade of trades) broadcast(trade)
}

// Export Functions.
// --------------------------------------------------------
export function getCurrentMarketStatus() {
  return currentMarketStatus
}

export function cleanupWebSocketServer() {
  stopMarketStatusUpdates()
  console.log('🔌 WebSocket server cleaned up')
}
