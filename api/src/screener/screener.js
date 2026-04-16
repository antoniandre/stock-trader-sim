import WebSocket from 'ws'
import {
  ALPACA_KEY,
  ALPACA_SECRET,
  ALPACA_DATA_STREAM_URL,
  state,
  IS_SIMULATION
} from '../../config.js'
import {
  analyzeVolume,
  getMarketStatus,
  getStockHistoricalData,
  getAllTradableStocks,
  runAlpacaBarsAsBackground
} from '../../market-data.js' // Assuming these are needed for filtering
import { getEasternTime } from '../../utils.js'
import { initWatchlist, getWatchlist } from '../../screener-watch-symbols.js'

// In-memory queue for opportunities
const opportunityQueue = []
const MAX_QUEUE_SIZE = 100 // Limit queue size to prevent memory issues

// Store recent market data for calculations
const marketDataCache = new Map() // symbol -> { bars: [], trades: [], quotes: [], lastPrice: 0, lastVolume: 0 }
// STOCKS_TO_WATCH is resolved from the current cached watchlist after initialization
let STOCKS_TO_WATCH = []

let alpacaWebSocket = null
let isConnected = false
let onOpportunityCallback = null

/** Browsers on the Trading desk increment this via WebSocket so we can poll history faster only when someone is watching. */
let screenerDeskViewerCount = 0

/** @param {number} delta +1 when a desk tab opens, -1 when it closes */
export function adjustScreenerDeskViewers(delta) {
  screenerDeskViewerCount = Math.max(0, screenerDeskViewerCount + delta)
}

const PREVIOUS_CLOSE_CACHE = new Map() // symbol -> { close: number, atMs: number }
const LAST_HISTORY_PULL_MS = new Map() // symbol -> number

/** Min delay between Alpaca historical pulls per symbol (stream can fire many times/sec). */
const HISTORY_PULL_INTERVAL_DESK_MS = 20_000
const HISTORY_PULL_INTERVAL_IDLE_MS = 60_000

export function setOpportunityCallback(callback) {
  onOpportunityCallback = callback
}

export function getOpportunityQueue() {
  return opportunityQueue
}

export async function connectAlpacaWebSocket() {
  if (isConnected || IS_SIMULATION) {
    console.log('Alpaca WebSocket already connected or in simulation mode.')
    return
  }

  if (!ALPACA_KEY || !ALPACA_SECRET || !ALPACA_DATA_STREAM_URL) {
    console.error('Alpaca API keys or data stream URL are not configured.')
    return
  }

  console.log('Connecting to Alpaca data stream...')
  alpacaWebSocket = new WebSocket(ALPACA_DATA_STREAM_URL)
  state.alpacaWebSocket = alpacaWebSocket // Store in global state

  alpacaWebSocket.onopen = async () => {
    console.log('Alpaca WebSocket connected. Authenticating...')
    isConnected = true
    // Refresh STOCKS_TO_WATCH from cache (in case watchlist was refreshed at market open)
    STOCKS_TO_WATCH = getWatchlist()
    // Authenticate
    alpacaWebSocket.send(JSON.stringify({
      action: 'auth',
      key: ALPACA_KEY,
      secret: ALPACA_SECRET
    }))
  }

  alpacaWebSocket.onmessage = async (event) => {
    const data = JSON.parse(event.data)

    if (data.data) {
      for (const message of data.data) {
        switch (message.T) {
          case 'success':
            if (message.msg === 'authenticated') {
              console.log('Alpaca WebSocket authenticated. Subscribing to market data...')
              // Subscribe to trades and quotes for the stocks we want to screen
              alpacaWebSocket.send(JSON.stringify({
                action: 'subscribe',
                trades: STOCKS_TO_WATCH,
                quotes: STOCKS_TO_WATCH,
                bars: STOCKS_TO_WATCH
              }))
            }
            break
          case 'subscription':
            console.log('Alpaca WebSocket subscription:', message)
            break
          case 't': // Trade data
            await processTradeData(message)
            break
          case 'q': // Quote data
            await processQuoteData(message)
            break
          case 'b': // Bar data (aggregated candle)
            await processBarData(message)
            break
          default:
            // console.log('Unhandled message type:', message.T, message)
            break
        }
      }
    } else {
      // console.log('Alpaca WebSocket message:', data)
    }
  }

  alpacaWebSocket.onclose = (event) => {
    isConnected = false
    state.alpacaWebSocket = null // Clear from global state
    console.warn('Alpaca WebSocket disconnected:', event.code, event.reason)
    // Implement reconnection logic if necessary
    setTimeout(() => {
      console.log('Attempting to reconnect Alpaca WebSocket...')
      connectAlpacaWebSocket()
    }, 5000) // Reconnect after 5 seconds
  }

  alpacaWebSocket.onerror = (error) => {
    console.error('Alpaca WebSocket error:', error.message)
    isConnected = false
    state.alpacaWebSocket = null // Clear from global state
  }
}

/** Feed raw Alpaca trade objects (`T: 't'`) from the shared websocket-server stream. */
export async function ingestAlpacaTradeMessage(trade) {
  await processTradeData(trade)
}

/** Feed raw Alpaca quote objects (`T: 'q'`). */
export async function ingestAlpacaQuoteMessage(quote) {
  await processQuoteData(quote)
}

/** Feed raw Alpaca minute bar objects (`T: 'b'`). */
export async function ingestAlpacaBarMessage(bar) {
  await processBarData(bar)
}

async function processTradeData(trade) {
  // Update cache with latest trade
  updateMarketDataCache(trade.S, 'trade', {
    timestamp: trade.t,
    price: trade.p,
    volume: trade.s,
  })
  await evaluateOpportunity(trade.S)
}

async function processQuoteData(quote) {
  // Update cache with latest quote (bid/ask)
  updateMarketDataCache(quote.S, 'quote', {
    timestamp: quote.t,
    bidPrice: quote.bp,
    askPrice: quote.ap,
    bidSize: quote.bs,
    askSize: quote.as
  })
  // Quotes alone don't trigger opportunities, usually combined with trades/bars
}

async function processBarData(bar) {
  // Update cache with latest 1-minute bar
  updateMarketDataCache(bar.S, 'bar', {
    timestamp: bar.t,
    open: bar.o,
    high: bar.h,
    low: bar.l,
    close: bar.c,
    volume: bar.v,
  })
  await evaluateOpportunity(bar.S)
}

function updateMarketDataCache(symbol, type, data) {
  if (!marketDataCache.has(symbol)) {
    marketDataCache.set(symbol, { bars: [], trades: [], quotes: [], lastPrice: 0, lastVolume: 0 })
  }
  const cache = marketDataCache.get(symbol)

  if (type === 'bar') {
    // Only keep a certain number of recent bars for trend calculation
    cache.bars.push(data)
    if (cache.bars.length > 60) { // Keep last 60 minutes of 1-minute bars
      cache.bars.shift()
    }
    cache.lastPrice = data.close
    cache.lastVolume = data.volume
  } else if (type === 'trade') {
    cache.trades.push(data)
    if (cache.trades.length > 10) { // Keep last 10 trades
      cache.trades.shift()
    }
    cache.lastPrice = data.price
    cache.lastVolume = data.volume
  } else if (type === 'quote') {
    cache.quotes.push(data)
    if (cache.quotes.length > 10) { // Keep last 10 quotes
      cache.quotes.shift()
    }
  }
  // console.log(`Cache updated for ${symbol} (${type}):`, cache.lastPrice)
}

async function evaluateOpportunity(symbol) {
  const cache = marketDataCache.get(symbol)
  if (!cache || !cache.lastPrice || cache.lastVolume === undefined) return false

  // 1. Market Status Filter
  const marketStatus = await getMarketStatus()
  if (marketStatus.status !== 'open') {
    // console.log(`Skipping ${symbol}: Market is ${marketStatus.status}`)
    return false
  }

  // Previous close: do not call Alpaca on every tick — stream can be very chatty.
  const intervalMs = screenerDeskViewerCount > 0 ? HISTORY_PULL_INTERVAL_DESK_MS : HISTORY_PULL_INTERVAL_IDLE_MS
  const now = Date.now()
  const lastPull = LAST_HISTORY_PULL_MS.get(symbol) || 0
  let previousClose = 0

  if (now - lastPull >= intervalMs) {
    try {
      const historicalDataResponse = await runAlpacaBarsAsBackground(() =>
        getStockHistoricalData(symbol, '1D', '1Day')
      )
      if (historicalDataResponse && historicalDataResponse.data && historicalDataResponse.data.length >= 2) {
        previousClose = historicalDataResponse.data[historicalDataResponse.data.length - 2].close // Previous trading day's close
      }
      else if (cache.bars.length > 0) {
        previousClose = cache.bars[0].open
      }
      LAST_HISTORY_PULL_MS.set(symbol, now)
      if (previousClose > 0 && !Number.isNaN(previousClose)) {
        PREVIOUS_CLOSE_CACHE.set(symbol, { close: previousClose, atMs: now })
      }
    }
    catch (error) {
      console.warn(`Could not fetch historical data for ${symbol} to determine previous close:`, error.message)
      LAST_HISTORY_PULL_MS.set(symbol, now)
    }
  }
  else {
    const cached = PREVIOUS_CLOSE_CACHE.get(symbol)
    if (cached && cached.close > 0) previousClose = cached.close
  }

  // Ensure previousClose is a valid number before using it
  if (previousClose === 0 || isNaN(previousClose)) {
    // console.log(`Skipping ${symbol}: Could not determine previous close.`)
    return false
  }


  // 2. Percentage Change
  const percentageChange = ((cache.lastPrice - previousClose) / previousClose) * 100
  const PERCENTAGE_CHANGE_THRESHOLD = 0.5 // e.g., > 0.5% or < -0.5% for an opportunity

  // 3. Volume
  // For volume analysis, we need a longer history of volume.
  // The 'analyzeVolume' function in market-data.js can calculate this.
  // However, it expects historicalData (OHLCV bars). Our real-time cache only has 1-minute bars.
  // We'll need to adapt `analyzeVolume` or fetch more historical data.
  // For now, let's use a simple minimum volume threshold.
  const MIN_VOLUME_THRESHOLD = 50000 // Minimum 50,000 shares traded in the last minute (configurable)
  const isHighVolume = cache.lastVolume >= MIN_VOLUME_THRESHOLD

  // 4. Price Range
  const MIN_PRICE = 5.00
  const MAX_PRICE = 500.00
  const isInPriceRange = cache.lastPrice >= MIN_PRICE && cache.lastPrice <= MAX_PRICE

  // 5. Intraday Trend (Simplified for now - using moving average of recent closes)
  let intradayTrend = 'Neutral'
  if (cache.bars.length >= 20) { // Need at least 20 bars for a simple MA
    const closes = cache.bars.map(bar => bar.close)
    const shortTermMA = closes.slice(-9).reduce((sum, p) => sum + p, 0) / 9
    const longTermMA = closes.slice(-20).reduce((sum, p) => sum + p, 0) / 20

    if (shortTermMA > longTermMA && cache.lastPrice > shortTermMA) {
      intradayTrend = 'Uptrend'
    } else if (shortTermMA < longTermMA && cache.lastPrice < shortTermMA) {
      intradayTrend = 'Downtrend'
    }
  }

  // Determine opportunity type based on percentage change and trend
  let opportunityType = 'Neutral'
  if (percentageChange > PERCENTAGE_CHANGE_THRESHOLD && intradayTrend === 'Uptrend' && isHighVolume) {
    opportunityType = 'BUY'
  } else if (percentageChange < -PERCENTAGE_CHANGE_THRESHOLD && intradayTrend === 'Downtrend' && isHighVolume) {
    opportunityType = 'SELL'
  }

  if (opportunityType !== 'Neutral' && isInPriceRange) {
    const opportunity = {
      symbol: symbol,
      opportunityType: opportunityType,
      currentPrice: cache.lastPrice,
      volume: cache.lastVolume,
      percentageChange: Number(percentageChange.toFixed(2)),
      intradayTrend: intradayTrend,
      timestamp: new Date().toISOString()
    }
    addOpportunity(opportunity)
    return true
  }

  return false
}

function addOpportunity(opportunity) {
  if (opportunityQueue.length >= MAX_QUEUE_SIZE) {
    opportunityQueue.shift() // Remove oldest opportunity if queue is full
  }
  opportunityQueue.push(opportunity)
  console.log('✨ New opportunity detected:', opportunity)
  if (onOpportunityCallback) {
    onOpportunityCallback(opportunity)
  }
}

export function disconnectAlpacaWebSocket() {
  if (alpacaWebSocket && isConnected) {
    alpacaWebSocket.close()
    isConnected = false
    console.log('Alpaca WebSocket disconnected manually.')
  }
}

// Initial setup to get all tradable stocks for watching (can be updated later dynamically)
export async function initializeScreener() {
  console.log('Initializing screener...')
  // Preload watchlist from catalyst file + core symbols at startup
  const startMs = Date.now()
  await initWatchlist()
  const elapsed = Date.now() - startMs
  console.log(`✓ Watchlist preloaded in ${elapsed}ms`)
  
  // Refresh STOCKS_TO_WATCH reference after preload
  const currentWatch = getWatchlist()
  console.log(`Screener watching ${currentWatch.length} symbols: ${currentWatch.slice(0, 10).join(', ')} ...`)
  
  // Do not open a second Alpaca market-data WebSocket here — stockbot uses
  // websocket-server only; duplicate connections hit Alpaca 406 (limit exceeded).
  // Trades for STOCKS_TO_WATCH are forwarded via ingestAlpacaTradeMessage().
}
