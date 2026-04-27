import WebSocket, { WebSocketServer } from 'ws'
import { IS_SIMULATION, state, ALPACA_CRYPTO_DATA_STREAM_URL } from './config.js'
import { getMarketStatus, getStockMarketStatus, getTopMovers, startPricePolling, stopPricePolling } from './market-data.js'
import { runSimulation, mockPrices } from './simulation.js'
import {
  createAlpacaWebSocket,
  subscribeToSymbols,
  unsubscribeFromSymbols,
  subscribeToCryptoStreamChannels,
  unsubscribeFromCryptoStreamChannels
} from './clients/alpaca-websocket-client.js'
import { getWatchlist } from './screener-watch-symbols.js'
import { tradableSymbolsEquivalent, isCryptoStreamSymbol } from './utils/tradable-symbol.js'
import { getTradeCandidates } from './services/trade-screener-service.js'

// WebSocket State.
// --------------------------------------------------------
const subscribedStocks = new Set()
// Per-client subscription tracking so we can clean up on disconnect.
const clientSubscriptions = new Map() // ws → Set<symbol>
// Trading desk (screener UI) presence — throttles server-side screener Alpaca history calls.
const clientScreenerDeskActive = new Map() // ws → boolean
let isAuthenticated = false
let reconnectAttempts = 0
let isCryptoStreamAuthenticated = false
let cryptoReconnectAttempts = 0
const MAX_RECONNECT_ATTEMPTS = 5
const RECONNECT_DELAY = 30000

// Price tracking for stale detection.
const priceHistory = new Map() // symbol -> { recentTrades: [], lastQuoteTime: timestamp }

function resolveSubscribedClientSymbol(incoming) {
  if (incoming == null || incoming === '') return null
  const inc = String(incoming).trim()
  for (const s of subscribedStocks) {
    if (tradableSymbolsEquivalent(s, inc)) return s
  }
  return null
}

function subscribedStockStreamSymbols() {
  return [...subscribedStocks].filter(s => !isCryptoStreamSymbol(s))
}

function subscribedCryptoStreamSymbols() {
  return [...subscribedStocks].filter(isCryptoStreamSymbol)
}

function liveFeedsCoverSubscriptions() {
  const stocks = subscribedStockStreamSymbols()
  const cryptos = subscribedCryptoStreamSymbols()
  const stockOk = stocks.length === 0 || (state.alpacaWebSocket?.readyState === 1 && isAuthenticated)
  const cryptoOk = cryptos.length === 0 || (state.alpacaCryptoWebSocket?.readyState === 1 && isCryptoStreamAuthenticated)
  return stockOk && cryptoOk
}

function maybeStopOrStartPricePolling() {
  if (IS_SIMULATION || subscribedStocks.size === 0) return
  import('./market-data.js').then(({ startPricePolling, stopPricePolling }) => {
    if (liveFeedsCoverSubscriptions()) stopPricePolling()
    else startPricePolling(subscribedStocks, broadcast)
  })
}

function sendWs(ws, payload) {
  if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(payload))
}

async function sendScreenerSnapshot(ws, message = {}) {
  const startedAt = Date.now()
  const market = String(message.market || 'stocks').toLowerCase() === 'crypto' ? 'crypto' : 'stocks'
  const top = Math.min(Math.max(Number.parseInt(message.top || 20, 10) || 20, 1), 100)
  const limit = Math.min(Math.max(Number.parseInt(message.limit || 8, 10) || 8, 1), 12)

  try {
    const [movers, candidatesPayload] = await Promise.all([
      getTopMovers(market, 'both', top),
      getTradeCandidates({ market, limit, enrichTrends: false })
    ])

    const moverData = movers?.data && !Array.isArray(movers.data)
      ? movers.data
      : { gainers: [], losers: [] }

    sendWs(ws, {
      type: 'screeners-snapshot',
      market,
      top,
      limit,
      data: {
        movers: {
          gainers: moverData.gainers || [],
          losers: moverData.losers || [],
          isFallbackData: !!movers?.isFallbackData
        },
        candidates: candidatesPayload.candidates || [],
        candidatesMeta: {
          usedFallback: candidatesPayload.usedFallback,
          catalystDiagnostics: candidatesPayload.catalystDiagnostics,
          catalystTradingDay: candidatesPayload.catalystTradingDay
        }
      },
      meta: {
        durationMs: Date.now() - startedAt,
        loadingModel: 'websocket-fast-snapshot',
        enrichedTrends: false
      },
      timestamp: new Date().toISOString()
    })
  }
  catch (error) {
    console.error('❌ Failed to build WS screener snapshot:', error.message)
    sendWs(ws, {
      type: 'screeners-error',
      market,
      error: error.message || 'Failed to build screener snapshot',
      timestamp: new Date().toISOString()
    })
  }
}

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
          if (subscribedStocks.has(symbol)) {
            console.warn(`🚫 Rejecting stale quote for ${symbol}: $${newPrice} (recent trades avg: $${avgRecentTradePrice.toFixed(2)}, deviation: ${(priceDeviation * 100).toFixed(2)}%)`)
          }
          return false
        }
      }
    }

    // Check for significant price changes (basic validation).
    const priceChange = Math.abs(newPrice - currentPrice) / currentPrice
    if (priceChange > 0.02 && subscribedStocks.has(symbol)) { // More than 2% change.
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
  state.alpacaStockStreamReady = false
  console.log('🧹 Alpaca stock WebSocket connection cleaned up')
  maybeStopOrStartPricePolling()
}

function cleanupAlpacaCryptoConnection() {
  if (state.alpacaCryptoWebSocket) {
    state.alpacaCryptoWebSocket.removeAllListeners()
    if (state.alpacaCryptoWebSocket.readyState === WebSocket.OPEN) state.alpacaCryptoWebSocket.close()
    state.alpacaCryptoWebSocket = null
  }
  isCryptoStreamAuthenticated = false
  state.alpacaCryptoStreamReady = false
  console.log('🧹 Alpaca crypto WebSocket connection cleaned up')
  maybeStopOrStartPricePolling()
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

    if (isCryptoStreamSymbol(symbol)) {
      ensureAlpacaCryptoStream()
      if (state.alpacaCryptoWebSocket?.readyState === 1 && isCryptoStreamAuthenticated) {
        subscribeToCryptoStreamChannels(state.alpacaCryptoWebSocket, [symbol])
      }
      maybeStopOrStartPricePolling()
    }
    else if (state.alpacaWebSocket?.readyState === 1 && isAuthenticated) {
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

    if (isCryptoStreamSymbol(symbol)) {
      const screenerWatchSymbols = getWatchlist()
      if (state.alpacaCryptoWebSocket?.readyState === 1 && !screenerWatchSymbols.some(s => tradableSymbolsEquivalent(s, symbol))) {
        unsubscribeFromCryptoStreamChannels(state.alpacaCryptoWebSocket, [symbol])
      }
      if (subscribedCryptoStreamSymbols().length === 0) cleanupAlpacaCryptoConnection()
      maybeStopOrStartPricePolling()
    }
    else if (state.alpacaWebSocket?.readyState === 1) {
      const screenerWatchSymbols = getWatchlist()
      if (!screenerWatchSymbols.includes(symbol)) {
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
      const hadScreenerDesk = clientScreenerDeskActive.get(ws) === true
      clientScreenerDeskActive.delete(ws)
      if (hadScreenerDesk) {
        import('./src/screener/screener.js').then(m => {
          if (typeof m.adjustScreenerDeskViewers === 'function') m.adjustScreenerDeskViewers(-1)
        }).catch(() => {})
      }

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
        else if (message.type === 'subscribe-batch' && Array.isArray(message.symbols)) {
          const symbols = [...new Set(message.symbols.map(symbol => String(symbol || '').trim().toUpperCase()).filter(Boolean))]
          console.log(`📡 Client requesting batch subscription to ${symbols.length} symbol(s)`)
          for (const symbol of symbols) {
            subscribeToStock(symbol)
            clientSubscriptions.get(ws)?.add(symbol)
          }
        }
        else if (message.type === 'unsubscribe' && message.symbol) {
          console.log(`📡 Client requesting unsubscription from ${message.symbol}`)
          clientSubscriptions.get(ws)?.delete(message.symbol)
          // Only remove from global set if no other client still wants this symbol.
          const stillWanted = [...clientSubscriptions.values()].some(s => s.has(message.symbol))
          if (!stillWanted) unsubscribeFromStock(message.symbol)
        }
        else if (message.type === 'unsubscribe-batch' && Array.isArray(message.symbols)) {
          const symbols = [...new Set(message.symbols.map(symbol => String(symbol || '').trim().toUpperCase()).filter(Boolean))]
          console.log(`📡 Client requesting batch unsubscription from ${symbols.length} symbol(s)`)
          for (const symbol of symbols) {
            clientSubscriptions.get(ws)?.delete(symbol)
            const stillWanted = [...clientSubscriptions.values()].some(s => s.has(symbol))
            if (!stillWanted) unsubscribeFromStock(symbol)
          }
        }
        else if (message.type === 'screeners-snapshot') {
          console.log(`📊 Client requesting fast screener snapshot for ${message.market || 'stocks'}`)
          sendScreenerSnapshot(ws, message)
        }
        else if (message.type === 'screener-desk') {
          const next = Boolean(message.active)
          const prev = clientScreenerDeskActive.get(ws) || false
          if (prev !== next) {
            clientScreenerDeskActive.set(ws, next)
            const delta = next ? 1 : -1
            import('./src/screener/screener.js').then(m => {
              if (typeof m.adjustScreenerDeskViewers === 'function') m.adjustScreenerDeskViewers(delta)
            }).catch(() => {})
          }
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
function ensureAlpacaCryptoStream() {
  if (IS_SIMULATION) return
  if (!ALPACA_CRYPTO_DATA_STREAM_URL) return
  if (state.alpacaCryptoWebSocket && (state.alpacaCryptoWebSocket.readyState === WebSocket.OPEN ||
      state.alpacaCryptoWebSocket.readyState === WebSocket.CONNECTING)) return
  connectAlpacaCryptoWebSocket()
}

/** Shared fan-out for stock (`v2/...`) and crypto (`v1beta3/crypto/us`) Alpaca data streams. */
function routeMarketMessage(messageData, streamKind) {
  if (messageData.retryAfter !== undefined) {
    if (messageData.code === 406) {
      console.error('💡 Connection limit exceeded. Waiting 60s before retry...')
      broadcast({
        type: 'alpaca-error',
        error: 'Connection limit exceeded',
        message: 'Alpaca WebSocket temporarily unavailable. Retrying in 60 seconds...',
        severity: 'warning',
        timestamp: new Date().toISOString(),
        retryWaitMs: 60000
      })
      if (streamKind === 'crypto') {
        cleanupAlpacaCryptoConnection()
        setTimeout(connectAlpacaCryptoWebSocket, messageData.retryAfter)
      }
      else {
        cleanupAlpacaConnection()
        setTimeout(connectAlpacaWebSocket, messageData.retryAfter)
      }
      return
    }
    if (messageData.code === 401) {
      console.error('💡 Authentication failed. Check your keys.')
      if (streamKind === 'crypto') cleanupAlpacaCryptoConnection()
      else cleanupAlpacaConnection()
      return
    }
  }

  const { type, symbol, price } = messageData

  if (type === 'trade') {
    const symKey = resolveSubscribedClientSymbol(symbol)
    if (symKey) {
      const clientWants = subscribedStocks.has(symKey)
      if (clientWants) console.log(`💰 Trade received: ${symbol} → ${symKey} @ $${price}`)
      const currentPrice = state.stockPrices[symKey]
      const shouldUpdate = shouldUpdatePrice(symKey, price, currentPrice, 'trade')
      const tradeSize = messageData.data?.s

      if (shouldUpdate) {
        state.stockPrices[symKey] = price
        if (clientWants) broadcastPriceUpdate(symKey, price, { tradeSize })
      }
    }

    if (messageData.data) {
      import('./src/screener/screener.js').then(m => {
        if (typeof m.ingestAlpacaTradeMessage === 'function') m.ingestAlpacaTradeMessage(messageData.data)
      }).catch(() => {})
    }
  }
  else if (type === 'quote') {
    const symKey = resolveSubscribedClientSymbol(symbol)
    if (symKey) {
      const clientWants = subscribedStocks.has(symKey)
      if (clientWants) console.log(`📈 Quote received: ${symbol} → ${symKey} @ $${price}`)
      const currentPrice = state.stockPrices[symKey]
      const shouldUpdate = shouldUpdatePrice(symKey, price, currentPrice, 'quote')

      if (shouldUpdate) {
        state.stockPrices[symKey] = price
        if (clientWants) broadcastPriceUpdate(symKey, price, {})
      }
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

export function connectAlpacaWebSocket() {
  if (IS_SIMULATION) return

  const handleAuthenticated = () => {
    isAuthenticated = true
    reconnectAttempts = 0

    const screenerWatchSymbols = getWatchlist()
    const merged = [...new Set([...Array.from(subscribedStocks), ...screenerWatchSymbols])]
    const stockMerged = merged.filter(s => !isCryptoStreamSymbol(s))
    const barStockOnly = screenerWatchSymbols.filter(s => !isCryptoStreamSymbol(s))

    if (stockMerged.length > 0) {
      subscribeToSymbols(state.alpacaWebSocket, stockMerged, { barSymbols: barStockOnly })
      console.log(`📡 Stock stream: subscribed ${stockMerged.length} symbol(s) (+ ${barStockOnly.length} bar feeds)`)
    }
    else {
      console.log('📡 Stock stream: no stock symbols to subscribe (crypto-only clients use the crypto stream)')
    }

    state.alpacaStockStreamReady = true
    maybeStopOrStartPricePolling()
  }

  const handleError = (error) => {
    console.error('❌ Alpaca WebSocket error:', error)
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
      console.log(`🔄 Reconnecting stock stream in ${RECONNECT_DELAY / 1000}s... (${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
      setTimeout(connectAlpacaWebSocket, RECONNECT_DELAY)
    }
    else {
      console.error('❌ Max reconnection attempts reached (stock stream)')
      reconnectAttempts = 0
    }
  }

  state.alpacaWebSocket = createAlpacaWebSocket(
    (msg) => routeMarketMessage(msg, 'stock'),
    handleAuthenticated,
    handleError,
    handleClose
  )
}

export function connectAlpacaCryptoWebSocket() {
  if (IS_SIMULATION) return
  if (!ALPACA_CRYPTO_DATA_STREAM_URL) {
    console.warn('⚠️ ALPACA_CRYPTO_DATA_STREAM_URL not set; skipping crypto stream')
    return
  }

  const handleAuthenticated = () => {
    isCryptoStreamAuthenticated = true
    cryptoReconnectAttempts = 0
    const cryptos = subscribedCryptoStreamSymbols()
    if (cryptos.length > 0) subscribeToCryptoStreamChannels(state.alpacaCryptoWebSocket, cryptos)
    state.alpacaCryptoStreamReady = true
    maybeStopOrStartPricePolling()
  }

  const handleError = (error) => {
    console.error('❌ Alpaca crypto WebSocket error:', error)
  }

  const handleClose = () => {
    cleanupAlpacaCryptoConnection()
    if (cryptoReconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      cryptoReconnectAttempts++
      console.log(`🔄 Reconnecting crypto stream in ${RECONNECT_DELAY / 1000}s... (${cryptoReconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`)
      setTimeout(connectAlpacaCryptoWebSocket, RECONNECT_DELAY)
    }
    else {
      console.error('❌ Max reconnection attempts reached (crypto stream)')
      cryptoReconnectAttempts = 0
    }
  }

  state.alpacaCryptoWebSocket = createAlpacaWebSocket(
    (msg) => routeMarketMessage(msg, 'crypto'),
    handleAuthenticated,
    handleError,
    handleClose,
    ALPACA_CRYPTO_DATA_STREAM_URL
  )
}

async function broadcastPriceUpdate(symbol, price, { tradeSize } = {}) {
  const stockData = state.allStocks.find(s => tradableSymbolsEquivalent(s.symbol, symbol))
  const sizeNum = tradeSize != null && Number.isFinite(Number(tradeSize)) ? Number(tradeSize) : null
  const tradePayload = sizeNum != null && sizeNum > 0 ? { tradeSize: sizeNum } : {}

  if (stockData) {
    try {
      const marketStatus = await getStockMarketStatus(stockData)
      broadcast({
        type: 'price',
        symbol,
        price,
        ...tradePayload,
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
        ...tradePayload,
        currency: stockData.currency || 'USD',
        currencySymbol: stockData.currencySymbol || '$',
        timestamp: new Date().toISOString()
      })
    }
  }
  else if (isCryptoStreamSymbol(symbol)) {
    broadcast({
      type: 'price',
      symbol,
      price,
      ...tradePayload,
      currency: 'USD',
      currencySymbol: '$',
      marketState: 'open',
      marketMessage: 'Crypto — 24/7',
      nextOpen: null,
      nextClose: null,
      timestamp: new Date().toISOString()
    })
  }
}

export function disconnectAlpacaWebSocket() {
  console.log('🔌 Disconnecting from Alpaca WebSockets...')
  cleanupAlpacaConnection()
  cleanupAlpacaCryptoConnection()
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
