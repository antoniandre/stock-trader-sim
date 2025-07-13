import express from 'express'
import { state } from './config.js'
import { subscribeToStock } from './websocket-server.js'
import { getMarketStatus, getPrice, getAllTradableStocks, initializeStockPrices, getStockHistoricalData } from './market-data.js'
import { getAlpacaAccount, getAlpacaAccountActivities, getAlpacaPortfolioHistory, getAlpacaTradingHistory, getAlpacaPositions, placeOrder } from './alpaca-account.js'
import { recordTrade } from './simulation.js'
import { createStandardResponse } from './utils.js'

// Express API Routes
// --------------------------------------------------------
export function createRestApiRoutes() {
  const app = express()

  // CORS middleware.
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  // Portfolio endpoints.
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

  // Account endpoints.
  app.get('/api/account', async (req, res) => {
    try {
      const account = await getAlpacaAccount()
      res.json(account)
    }
    catch (error) {
      console.error('Error fetching account:', error)
      res.status(500).json({ error: 'Failed to fetch account data' })
    }
  })

  app.get('/api/account/activities', async (req, res) => {
    try {
      const { activity_type, limit = 100 } = req.query
      const activities = await getAlpacaAccountActivities(activity_type, parseInt(limit))
      res.json(activities)
    }
    catch (error) {
      console.error('Error fetching account activities:', error)
      res.status(500).json({ error: 'Failed to fetch account activities' })
    }
  })

  app.get('/api/account/portfolio/history', async (req, res) => {
    try {
      const { period = '1D', timeframe = '1Min' } = req.query
      const history = await getAlpacaPortfolioHistory(period, timeframe)
      res.json(history)
    }
    catch (error) {
      console.error('Error fetching portfolio history:', error)
      res.status(500).json({ error: 'Failed to fetch portfolio history' })
    }
  })

  // Portfolio history endpoint (duplicate route for compatibility).
  app.get('/api/portfolio/history', async (req, res) => {
    try {
      const { period = '1D', timeframe = '1Min' } = req.query
      const history = await getAlpacaPortfolioHistory(period, timeframe)
      res.json(history)
    }
    catch (error) {
      console.error('Error fetching portfolio history:', error)
      res.status(500).json({ error: 'Failed to fetch portfolio history' })
    }
  })

  // Trading history endpoint.
  app.get('/api/trading-history', async (req, res) => {
    const { limit = 100 } = req.query
    const { success, history, message } = await getAlpacaTradingHistory(limit)
    if (success) res.json(history)
    else res.status(500).json({ error: 'Failed to fetch trading history.' })
  })

  // Positions endpoint.
  app.get('/api/positions', async (req, res) => {
    try {
      const positions = await getAlpacaPositions()
      res.json(positions)
    }
    catch (error) {
      console.error('Error fetching positions:', error)
      res.status(500).json({ error: 'Failed to fetch positions' })
    }
  })

  // Stock endpoints.
  app.get('/api/stocks', async (req, res) => {
    try {
      const stocks = await getAllTradableStocks()
      const stocksWithPrices = stocks.map(stock => ({
        ...stock,
        price: state.stockPrices[stock.symbol] || 0,
        lastSide: 'buy'
      }))
      res.json({ stocks: stocksWithPrices })
    }
    catch (error) {
      console.error('Error fetching stocks:', error)
      res.status(500).json({ error: 'Failed to fetch stocks' })
    }
  })

  // Single stock price endpoint.
  app.get('/api/stocks/:symbol/price', async (req, res) => {
    try {
      const { symbol } = req.params
      const price = await getPrice(symbol)

      // Cache the price for future WebSocket updates.
      if (price > 0) state.stockPrices[symbol] = price

      res.json(createStandardResponse({ symbol, price }))
    }
    catch (error) {
      console.error(`Error fetching price for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch price for ${req.params.symbol}` })
    }
  })

  // Single stock details endpoint.
  app.get('/api/stocks/:symbol', async (req, res) => {
    try {
      const { symbol } = req.params
      const stocks = await getAllTradableStocks()
      const stockData = stocks.find(stock => stock.symbol === symbol)

      if (!stockData) {
        return res.status(404).json({ error: `Stock ${symbol} not found` })
      }

      const price = await getPrice(symbol)

      // Cache the price for future WebSocket updates.
      if (price > 0) state.stockPrices[symbol] = price

      res.json(createStandardResponse({
        ...stockData,
        price,
        lastSide: 'buy'
      }))
    }
    catch (error) {
      console.error(`Error fetching stock ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch stock ${req.params.symbol}` })
    }
  })

  // Stock subscription endpoint.
  app.post('/api/stocks/:symbol/subscribe', async (req, res) => {
    try {
      const { symbol } = req.params
      subscribeToStock(symbol)
      res.json(createStandardResponse({
        success: true,
        message: `Subscribed to ${symbol} updates`
      }))
    }
    catch (error) {
      console.error(`Error subscribing to ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to subscribe to ${req.params.symbol}` })
    }
  })

  // Stock historical data endpoint.
  app.get('/api/stocks/:symbol/history', async (req, res) => {
    try {
      const { symbol } = req.params
      const { period = '1D' } = req.query
      const historicalData = await getStockHistoricalData(symbol, period)
      res.json(historicalData)
    }
    catch (error) {
      console.error(`Error fetching historical data for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch historical data for ${req.params.symbol}` })
    }
  })

  // Market status endpoint.
  app.get('/api/market-status', (req, res) => {
    try {
      const marketStatus = getMarketStatus()
      res.json(createStandardResponse(marketStatus))
    }
    catch (error) {
      console.error('Error getting market status:', error)
      res.status(500).json({ error: 'Failed to get market status' })
    }
  })

  // Health check endpoint.
  app.get('/api/health', (req, res) => {
    res.json(createStandardResponse({
      status: 'ok',
      simulation: process.env.SIMULATION === 'true',
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
    }))
  })

  return app
}

// Export functions for compatibility.
export {
  getMarketStatus,
  getPrice,
  getAllTradableStocks,
  initializeStockPrices,
  getStockHistoricalData,
  getAlpacaAccount,
  getAlpacaAccountActivities,
  getAlpacaPortfolioHistory,
  getAlpacaTradingHistory,
  getAlpacaPositions,
  placeOrder,
  recordTrade
}
