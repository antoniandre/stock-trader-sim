import express from 'express'
import { state } from './config.js'
import { subscribeToStock, unsubscribeFromStock, getCurrentMarketStatus } from './websocket-server.js'
import { getMarketStatus, getPrice, getAllTradableStocks, initializeMarketData, getStockHistoricalData, getStockHistoricalDataByRange, getStockMarketStatus, getStockHistoricalDataProgressive, getTopMovers, fetchStockTrend, analyzeVolume } from './market-data.js'
import { getAlpacaAccount, getAlpacaAccountActivities, getAlpacaPortfolioHistory, getAlpacaTradingHistory, getAlpacaPositions, getAlpacaOrders, placeOrder } from './alpaca-account.js'
import { recordTrade } from './simulation.js'
import { createStandardResponse } from './utils.js'

// Express API Routes.
// --------------------------------------------------------
export function createRestApiRoutes() {
  const app = express()

  // JSON body parsing middleware.
  app.use(express.json())

  // CORS middleware.
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Handle preflight requests
    if (req.method === 'OPTIONS') return res.sendStatus(200)

    next()
  })

  // Top movers endpoint (gainers/losers).
  app.get('/api/movers', async (req, res) => {
    try {
      const { market = 'stocks', direction = 'both', top = '10' } = req.query

      // Handle 'all' market type by defaulting to 'stocks'
      const validMarket = market === 'all' ? 'stocks' : market

      const response = await getTopMovers(validMarket, direction, parseInt(top))

      if (response.error) {
        return res.status(500).json({ error: response.message || 'Failed to fetch top movers.' })
      }

      res.json(createStandardResponse(response.data))
    }
    catch (error) {
      console.error('Error fetching top movers:', error)
      res.status(500).json({ error: 'Failed to fetch top movers.' })
    }
  })

  // Portfolio endpoints.
  app.get('/api/portfolio', (req, res) => {
    const stocks = Object.entries(state.portfolio).map(([symbol, data]) => {
      const lastTrade = data.history[data.history.length - 1] || {}
      // Find stock data to get currency info.
      const stockData = state.allStocks.find(s => s.symbol === symbol)
      return {
        symbol,
        qty: data.qty,
        price: lastTrade.price || 0,
        lastSide: lastTrade.side || 'buy',
        currency: stockData?.currency || 'USD',
        currencySymbol: stockData?.currencySymbol || '$'
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
      const { period = '1D', timeframe } = req.query
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

  // Orders endpoint.
  app.get('/api/orders', async (req, res) => {
    try {
      const { status = 'open', limit = 100 } = req.query
      const orders = await getAlpacaOrders(status, parseInt(limit))
      res.json(orders)
    }
    catch (error) {
      console.error('Error fetching orders:', error)
      res.status(500).json({ error: 'Failed to fetch orders' })
    }
  })

  // Cancel order endpoint.
  app.delete('/api/orders/:orderId', async (req, res) => {
    try {
      const { orderId } = req.params
      const AlpacaClient = await import('./clients/alpaca-client.js')
      await AlpacaClient.cancelOrder(orderId)
      res.json({ success: true })
    }
    catch (error) {
      console.error('Error cancelling order:', error)
      res.status(500).json({ error: 'Failed to cancel order' })
    }
  })

  // Stock endpoints.
  app.get('/api/stocks', async (req, res) => {
    try {
      const stocks = await getAllTradableStocks()
      const { search, page = 1, limit = 50 } = req.query

      let filteredStocks = stocks

      // Apply search filter.
      if (search) {
        filteredStocks = stocks.filter(stock =>
          stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
          stock.name.toLowerCase().includes(search.toLowerCase())
        )
      }

      // Sort stocks to show ones with prices first.
      filteredStocks.sort((a, b) => {
        const aPrice = state.stockPrices[a.symbol] || 0
        const bPrice = state.stockPrices[b.symbol] || 0
        if (aPrice > 0 && bPrice === 0) return -1
        if (aPrice === 0 && bPrice > 0) return 1
        return a.symbol.localeCompare(b.symbol)
      })

      // Calculate pagination.
      const pageNum = parseInt(page)
      const limitNum = parseInt(limit)
      const startIndex = (pageNum - 1) * limitNum
      const endIndex = startIndex + limitNum
      const paginatedStocks = filteredStocks.slice(startIndex, endIndex)

      console.log(`💰 Fetching data for ${paginatedStocks.length} stocks on page ${pageNum}`)

      // Fetch prices and market status in parallel.
      const comprehensiveStocks = await Promise.all(paginatedStocks.map(async (stock) => {
        try {
          // Get price (use cached if available, otherwise fetch).
          let price = state.stockPrices[stock.symbol] || 0
          if (price === 0) {
            price = await getPrice(stock.symbol)
            if (price > 0) {
              state.stockPrices[stock.symbol] = price
              console.log(`💲 Fetched ${stock.symbol}: $${price.toFixed(2)}`)
            }
          }

          const marketStatus = await getStockMarketStatus(stock)

          return {
            symbol: stock.symbol,
            name: stock.name,
            exchange: stock.exchange,
            status: stock.status,
            tradable: stock.tradable,
            price,
            lastSide: 'buy',
            currency: stock.currency || 'USD',
            currencySymbol: stock.currencySymbol || '$',
            marketState: marketStatus.status,
            marketMessage: marketStatus.message,
            nextOpen: marketStatus.nextOpen,
            nextClose: marketStatus.nextClose
          }
        }
        catch (error) {
          console.warn(`⚠️ Failed to fetch data for ${stock.symbol}: ${error.message}`)
          return {
            symbol: stock.symbol,
            name: stock.name,
            exchange: stock.exchange,
            status: stock.status,
            tradable: stock.tradable,
            price: 0,
            lastSide: 'buy',
            currency: stock.currency || 'USD',
            currencySymbol: stock.currencySymbol || '$',
            marketState: 'closed',
            marketMessage: 'Data Unavailable',
            nextOpen: null,
            nextClose: null
          }
        }
      }))

      res.json({
        stocks: comprehensiveStocks,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: filteredStocks.length,
          totalPages: Math.ceil(filteredStocks.length / limitNum)
        }
      })
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
      const { fresh } = req.query

      let price
      if (fresh === 'true') {
        // Force fresh price fetch by clearing cache.
        delete state.stockPrices[symbol]
        price = await getPrice(symbol)
        console.log(`🔄 Fresh price fetch for ${symbol}: $${price.toFixed(2)}`)
      }
      else {
        price = await getPrice(symbol)
      }

      // Cache the price for future WebSocket updates.
      if (price > 0) state.stockPrices[symbol] = price

      // Find stock data to get currency info.
      const stockData = state.allStocks.find(s => s.symbol === symbol)
      res.json(createStandardResponse({
        symbol,
        price,
        currency: stockData?.currency || 'USD',
        currencySymbol: stockData?.currencySymbol || '$'
      }))
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

      if (!stockData) return res.status(404).json({ error: `Stock ${symbol} not found` })

      const price = await getPrice(symbol)

      // Cache the price for future WebSocket updates.
      if (price > 0) state.stockPrices[symbol] = price

      let marketStatus
      try {
        marketStatus = await getStockMarketStatus(stockData)
      }
      catch (error) {
        console.warn(`⚠️ Failed to get market status for ${symbol}:`, error.message)
        // Provide fallback market status.
        marketStatus = {
          status: 'closed',
          message: 'Market Status Unavailable',
          nextOpen: null,
          nextClose: null
        }
      }

      res.json(createStandardResponse({
        symbol: stockData.symbol,
        name: stockData.name,
        exchange: stockData.exchange,
        status: stockData.status,
        tradable: stockData.tradable,
        price,
        lastSide: 'buy',
        currency: stockData.currency || 'USD',
        currencySymbol: stockData.currencySymbol || '$',
        marketState: marketStatus.status,
        marketMessage: marketStatus.message,
        nextOpen: marketStatus.nextOpen,
        nextClose: marketStatus.nextClose
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

  // Stock unsubscription endpoint.
  app.post('/api/stocks/:symbol/unsubscribe', async (req, res) => {
    try {
      const { symbol } = req.params
      unsubscribeFromStock(symbol)
      res.json(createStandardResponse({
        success: true,
        message: `Unsubscribed from ${symbol} updates`
      }))
    }
    catch (error) {
      console.error(`Error unsubscribing from ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to unsubscribe from ${req.params.symbol}` })
    }
  })

  // Stock historical data endpoint with enhanced data fetching.
  app.get('/api/stocks/:symbol/history', async (req, res) => {
    try {
      const { symbol } = req.params
      const { period = '1D', timeframe, progressive = 'true' } = req.query

      // For 1D period, use regular loading to get complete continuous data like TradingView.
      // Progressive loading can cause gaps in intraday data.
      if (period === '1D') {
        const historicalData = await getStockHistoricalData(symbol, period, timeframe)
        res.json(historicalData)
      }
      // Use progressive loading for longer periods where it's beneficial.
      else if (progressive === 'true') {
        const historicalData = await getStockHistoricalDataProgressive(symbol, period, timeframe)
        res.json(historicalData)
      }
      else {
        const historicalData = await getStockHistoricalData(symbol, period, timeframe)
        res.json(historicalData)
      }
    }
    catch (error) {
      console.error(`Error fetching historical data for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch historical data for ${req.params.symbol}` })
    }
  })

  // Legacy endpoint for progressive data loading (redirects to main endpoint).
  app.get('/api/stocks/:symbol/history/progressive', async (req, res) => {
    try {
      const { symbol } = req.params
      const { period = '1D', timeframe } = req.query

      // Redirect to main endpoint with progressive=true.
      req.query.progressive = 'true'
      const historicalData = await getStockHistoricalDataProgressive(symbol, period, timeframe)
      res.json(historicalData)
    }
    catch (error) {
      console.error(`Error fetching progressive historical data for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch progressive historical data for ${req.params.symbol}` })
    }
  })

  // Stock historical data with specific date range endpoint (for dynamic loading).
  app.get('/api/stocks/:symbol/history/range', async (req, res) => {
    try {
      const { symbol } = req.params
      const { timeframe, start, end } = req.query

      if (!timeframe || !start || !end) {
        return res.status(400).json({ error: 'timeframe, start, and end parameters are required' })
      }

      const historicalData = await getStockHistoricalDataByRange(symbol, timeframe, start, end)
      res.json(historicalData)
    }
    catch (error) {
      console.error(`Error fetching historical data range for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch historical data range for ${req.params.symbol}` })
    }
  })

  // Batch trend data endpoint for multiple stocks (much faster than individual calls).
  app.post('/api/stocks/trends/batch', async (req, res) => {
    try {
      const { symbols, points = 20 } = req.body

      if (!symbols || !Array.isArray(symbols) || symbols.length === 0) {
        return res.status(400).json({ error: 'symbols array is required' })
      }

      console.log(`🚀 Batch trends: Processing ${symbols.length} symbols with simplified approach`)

      const results = {}
      const batchSize = 5 // Process in small batches to avoid overwhelming the API

      // Process ALL stocks in parallel - no batching, no delays!
      const promises = symbols.map(async (symbol) => {
          try {
            // Simple single API call to avoid rate limits
            const historicalData = await getStockHistoricalData(symbol, '1W', '1Day')

            if (historicalData?.data && historicalData.data.length >= 2) {
              const trendData = historicalData.data
                .slice(-parseInt(points))
                .map(item => ({
                  timestamp: item.timestamp,
                  price: item.close || item.price || 0
                }))

              // Analyze volume for unusual activity
              const volumeAnalysis = analyzeVolume(historicalData.data)

              return {
                symbol,
                data: trendData,
                volumeAnalysis,
                fallback: { period: '1W', timeframe: '1Day' }
              }
            }
            else {
              // No historical data available - this is common for some screener stocks.
              // Return empty data but indicate this is expected for some stocks.
              return {
                symbol,
                data: [],
                volumeAnalysis: {
                  currentVolume: 0,
                  averageVolume: 0,
                  volumeRatio: 0,
                  isUnusualVolume: false,
                  volumeStatus: 'no-historical-data'
                },
                fallback: null
              }
            }
          }
          catch (error) {
            console.warn(`Failed to fetch trend for ${symbol}:`, error.message)
            return {
              symbol,
              data: [],
              volumeAnalysis: {
                currentVolume: 0,
                averageVolume: 0,
                volumeRatio: 0,
                isUnusualVolume: false,
                volumeStatus: 'no-historical-data'
              },
              fallback: null
            }
          }
        })

      const allResults = await Promise.all(promises)
      for (const result of allResults) {
        results[result.symbol] = {
          data: result.data,
          volumeAnalysis: result.volumeAnalysis,
          fallback: result.fallback
        }
      }

      res.json(createStandardResponse(results))
    }
    catch (error) {
      console.error('Error in batch trend fetch:', error)
      res.status(500).json({ error: 'Failed to fetch batch trend data' })
    }
  })

    // Mini trend data endpoint for ticker cards (single stock - kept for compatibility).
  app.get('/api/stocks/:symbol/trend', async (req, res) => {
    try {
      const { symbol } = req.params
      const { points = 20 } = req.query

      // Try multiple timeframes as fallbacks for better data availability.
      const fallbackOptions = [
        { period: '1D', timeframe: '1Hour' }, // Start with 1Hour for better availability
        { period: '1W', timeframe: '1Day' },
        { period: '1M', timeframe: '1Day' },
        { period: '3M', timeframe: '1Day' },
        { period: '1Y', timeframe: '1Day' } // Very long fallback
      ]

      let historicalData = null
      let usedFallback = null

      for (const option of fallbackOptions) {
        try {
          historicalData = await getStockHistoricalData(symbol, option.period, option.timeframe)

          // If we got data and no error/warning, use it.
          if (historicalData?.data && historicalData.data.length >= 5) {
            usedFallback = option
            break
          }
        }
        catch (error) {
          console.warn(`Failed to fetch ${symbol} with ${option.period}/${option.timeframe}:`, error.message)
          continue
        }
      }

      if (!historicalData?.data || historicalData.data.length === 0) {
        return res.json(createStandardResponse({ symbol, data: [] }))
      }

      // Take the most recent data points for the trend chart.
      const trendData = historicalData.data
        .slice(-parseInt(points))
        .map(item => ({
          timestamp: item.timestamp,
          price: item.close || item.price || 0
        }))

      res.json(createStandardResponse({ symbol, data: trendData, fallback: usedFallback }))
    }
    catch (error) {
      console.error(`Error fetching trend data for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch trend data for ${req.params.symbol}` })
    }
  })

  // Market status endpoint.
  app.get('/api/market-status', async (req, res) => {
    try {
      let marketStatus = getCurrentMarketStatus()

      // Fallback to direct API call if cached status not available yet.
      if (!marketStatus) marketStatus = await getMarketStatus()

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
  initializeMarketData,
  getStockHistoricalData,
  getAlpacaAccount,
  getAlpacaAccountActivities,
  getAlpacaPortfolioHistory,
  getAlpacaTradingHistory,
  getAlpacaPositions,
  placeOrder,
  recordTrade
}
