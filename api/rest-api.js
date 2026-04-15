import express from 'express'
import { createHttpLogger, logger } from './logger.js'
import { evaluateDayTradingDecision, RISK_PROFILES } from './day-trading-bot.js'
import { runDayTradingBacktest } from './day-trading-backtest.js'
import { evolveTradingStrategies } from './strategy-evolution.js'
import { state, IS_SIMULATION, getTradingEnvironmentLabel, API_BEARER_TOKEN, FEATURE_FLAGS } from './config.js'
import { attachUser, requireUser, requireEntitlement, getAuthSummary } from './auth.js'
import { getBrokerAdapter, getBrokerIdentity, getBrokerCapabilities } from './services/broker-manager.js'
import { getMarketDataIdentity, getMarketDataCapabilities, getMarketDataProvider } from './services/market-data-manager.js'
import { subscribeToStock, unsubscribeFromStock, getCurrentMarketStatus } from './websocket-server.js'
import { getMarketStatus, getPrice, getAllTradableStocks, initializeMarketData, getStockHistoricalData, getStockHistoricalDataByRange, getStockMarketStatus, getStockHistoricalDataProgressive, getTopMovers, fetchStockTrend, analyzeVolume } from './market-data.js'
import { getAlpacaAccount, getAlpacaAccountActivities, getAlpacaPortfolioHistory, getAlpacaTradingHistory, getAlpacaPositions, getAlpacaOrders, placeOrder } from './alpaca-account.js'
import * as AlpacaClient from './clients/alpaca-client.js'
import { broadcast } from './websocket-server.js'
import { recordTrade } from './simulation.js'
import { createStandardResponse, sleep, withRateLimitBackoff, tickerSymbolMatchesRow } from './utils.js'
import { normalizeOrderIntent, validateOrderIntent, estimateOrderNotional, isCryptoPairSymbol } from './domain/order-intent.js'
import { recordStrategyRun } from './services/strategy-run-recorder.js'
import { normalizeBrokerError } from './services/broker-error.js'
import { getTradeCandidates } from './services/trade-screener-service.js'
import { resolveCryptoBuyVenueSymbol } from './services/crypto-usd-quote-fallback.js'

function midPriceFromCryptoQuote(q) {
  if (!q || typeof q !== 'object') return 0
  const ap = Number(q.ap)
  const bp = Number(q.bp)
  if (Number.isFinite(ap) && ap > 0 && Number.isFinite(bp) && bp > 0) return (ap + bp) / 2
  if (Number.isFinite(ap) && ap > 0) return ap
  if (Number.isFinite(bp) && bp > 0) return bp
  return 0
}

function orderIntentRequiresStopFeature(orderIntent) {
  if (orderIntent.type === 'stop' || orderIntent.type === 'stop_limit') return true
  // Optional bracket stop in the UI is ignored for crypto pairs (never routed to Alpaca as a stop leg).
  if (isCryptoPairSymbol(orderIntent.symbol) && (orderIntent.type === 'market' || orderIntent.type === 'limit')) {
    return false
  }
  return (orderIntent.type === 'market' || orderIntent.type === 'limit')
    && Number.isFinite(orderIntent.stopPrice) && orderIntent.stopPrice > 0
}

// Express API Routes.
// --------------------------------------------------------
export function createRestApiRoutes() {
  const app = express()

  // JSON body parsing middleware.
  // Bot/backtest payloads can include long candle arrays, so raise the default
  // limit above Express's 100kb ceiling to avoid parser-level 500s.
  app.use(express.json({ limit: '1mb' }))
  app.use(createHttpLogger())
  app.use((req, res, next) => {
    res.setHeader('X-Request-Id', req.id)
    next()
  })
  app.use(attachUser)

  // CORS middleware.
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Handle preflight requests
    if (req.method === 'OPTIONS') return res.sendStatus(200)

    next()
  })

  function requireMutationAuth(req, res, next) {
    if (req.user) return next()
    if (!API_BEARER_TOKEN) return next()

    const authHeader = req.headers.authorization || ''
    const expected = `Bearer ${API_BEARER_TOKEN}`
    if (authHeader !== expected) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Provide Authorization: Bearer <token> for mutation routes.'
      })
    }

    next()
  }

  app.get('/api/me', requireUser, (req, res) => {
    res.json(createStandardResponse({
      user: req.user,
      auth: getAuthSummary()
    }))
  })

  async function safeRecordStrategyRun(event) {
    try {
      return await recordStrategyRun(event)
    }
    catch (error) {
      logger.warn({ err: error, type: event?.type, symbol: event?.symbol }, 'strategy run capture failed, continuing without capture')
      return null
    }
  }

  app.post('/api/bot/day-trading/decision', async (req, res) => {
    try {
      const input = req.body || {}
      const decision = evaluateDayTradingDecision(input)
      const capture = await safeRecordStrategyRun({
        type: 'day-trading-decision',
        symbol: input.symbol,
        riskProfile: input.riskProfile,
        metrics: {
          action: decision.action,
          confidence: decision.confidence,
          marketRegime: decision.marketRegime
        },
        details: {
          reasons: decision.reasons,
          executionPlan: decision.executionPlan,
          scores: decision.scores
        }
      })
      res.json(createStandardResponse({
        decision,
        capture,
        availableRiskProfiles: Object.keys(RISK_PROFILES)
      }))
    }
    catch (error) {
      logger.error({ err: error }, 'failed to evaluate day-trading decision')
      res.status(400).json({
        error: 'Bad Request',
        message: error.message || 'Unable to evaluate day-trading decision.'
      })
    }
  })

  app.post('/api/bot/day-trading/backtest', async (req, res) => {
    try {
      const input = req.body || {}
      const backtest = runDayTradingBacktest(input)
      const capture = await safeRecordStrategyRun({
        type: 'day-trading-backtest',
        symbol: input.symbol,
        riskProfile: input.riskProfile,
        summary: backtest,
        metrics: {
          candleCount: Array.isArray(input.candles) ? input.candles.length : 0,
          strategyId: input.strategyId || null
        },
        details: {
          cohort: input.cohort || null,
          strategyParams: input.strategyParams || null
        }
      })
      res.json(createStandardResponse({
        backtest,
        capture,
        availableRiskProfiles: Object.keys(RISK_PROFILES)
      }))
    }
    catch (error) {
      logger.error({ err: error }, 'failed to run day-trading backtest')
      res.status(400).json({
        error: 'Bad Request',
        message: error.message || 'Unable to run day-trading backtest.'
      })
    }
  })

  app.post('/api/bot/day-trading/evolve', async (req, res) => {
    try {
      const input = req.body || {}
      const evolution = evolveTradingStrategies(input)
      const capture = await safeRecordStrategyRun({
        type: 'day-trading-evolution',
        symbol: input.symbol,
        riskProfile: input.riskProfile,
        cohort: evolution.cohort,
        metrics: {
          evaluatedCount: evolution.evaluatedCount,
          survivorCount: evolution.survivors.length
        },
        details: {
          survivors: evolution.survivors,
          pruned: evolution.pruned,
          nextGeneration: evolution.nextGeneration
        }
      })
      res.json(createStandardResponse({
        evolution,
        capture,
        availableRiskProfiles: Object.keys(RISK_PROFILES)
      }))
    }
    catch (error) {
      logger.error({ err: error }, 'failed to evolve trading strategies')
      res.status(400).json({
        error: 'Bad Request',
        message: error.message || 'Unable to evolve trading strategies.'
      })
    }
  })

  // Top movers endpoint (gainers/losers).
  app.get('/api/movers', async (req, res) => {
    try {
      const { market = 'stocks', direction = 'both', top = '10' } = req.query

      // Handle 'all' market type by defaulting to 'stocks'
      const validMarket = market === 'all' ? 'stocks' : market
      const marketDataProvider = await getMarketDataProvider()
      const response = await marketDataProvider.getTopMovers(validMarket, direction, parseInt(top))

      if (response.error) {
        return res.status(500).json({ error: response.message || 'Failed to fetch top movers.' })
      }

      const movers = response.data && !Array.isArray(response.data)
        ? response.data
        : { gainers: [], losers: [] }

      res.json(createStandardResponse({
        gainers: movers.gainers || [],
        losers: movers.losers || [],
        isFallbackData: !!response.isFallbackData
      }))
    }
    catch (error) {
      console.error('Error fetching top movers:', error)
      res.status(500).json({ error: 'Failed to fetch top movers.' })
    }
  })

  app.get('/api/screener/candidates', async (req, res) => {
    try {
      const { market = 'stocks', limit = '8' } = req.query
      const payload = await getTradeCandidates({ market, limit })
      res.json(createStandardResponse(payload))
    }
    catch (error) {
      logger.error({ err: error, market: req.query?.market }, 'failed to build trade screener candidates')
      res.status(500).json({ error: 'Failed to build trade screener candidates.' })
    }
  })

  function watchlistAssetRows(detail) {
    if (!detail || typeof detail !== 'object') return []
    if (Array.isArray(detail.assets)) return detail.assets
    if (Array.isArray(detail.symbols)) {
      return detail.symbols.map(s => (typeof s === 'string' ? { symbol: s } : s))
    }
    return []
  }

  function watchlistAssetMatchesMarket(asset, normalizedMarket) {
    const sym = String(asset.symbol || '')
    const cls = String(asset.class || '').toLowerCase()
    const isCrypto = cls === 'crypto' || sym.includes('/')
    if (normalizedMarket === 'crypto') return isCrypto
    return !isCrypto
  }

  function formatAlpacaWatchlistError(err) {
    const status = err?.response?.status
    const body = err?.response?.data
    let msg = err?.message || 'Alpaca request failed'
    if (body && typeof body === 'object' && body.message) msg = String(body.message)
    else if (typeof body === 'string' && body.trim()) msg = body.trim()
    return status ? `${msg} (HTTP ${status})` : msg
  }

  /** Alpaca UI often names the default list "Watchlist"; docs examples use "Primary Watchlist". */
  const WATCHLIST_BY_NAME_FALLBACKS = ['Watchlist', 'Primary Watchlist', 'Primary', 'Default']

  function pickDefaultWatchlistMeta(metaList) {
    if (!metaList.length) return null
    const byExact = name => metaList.find(w => String(w.name || '').trim().toLowerCase() === name.toLowerCase())
    const w = byExact('Watchlist')
      || metaList.find(x => /primary/i.test(String(x.name || '')))
      || metaList.find(x => /default/i.test(String(x.name || '')))
      || metaList[0]
    return w
  }

  async function tryWatchlistDetailByNameFallbacks() {
    for (const n of WATCHLIST_BY_NAME_FALLBACKS) {
      try {
        const d = await AlpacaClient.getWatchlistByName(n)
        if (d && d.id) return d
      }
      catch {
        /* try next name */
      }
    }
    return null
  }

  /** Alpaca account watchlists (Trading API — same account as ALPACA_BASE_URL / your API keys). */
  app.get('/api/watchlist', async (req, res) => {
    try {
      const normalizedMarket = String(req.query.market || 'stocks').toLowerCase() === 'crypto' ? 'crypto' : 'stocks'
      const watchlistIdQuery = req.query.watchlistId ? String(req.query.watchlistId).trim() : ''
      const watchlistNameQuery = req.query.watchlistName ? String(req.query.watchlistName).trim() : ''
      const tradingEnvironment = getTradingEnvironmentLabel()

      if (IS_SIMULATION) {
        return res.json(createStandardResponse({
          unavailable: true,
          reason: 'simulation',
          message: 'Connect Alpaca (paper or live) to load your dashboard watchlists here.',
          tradingEnvironment,
          watchlistId: null,
          name: null,
          stocks: [],
          watchlists: []
        }))
      }

      const marketDataProvider = await getMarketDataProvider()
      let watchlistsMeta = []
      let listFetchError = null
      try {
        watchlistsMeta = await AlpacaClient.getWatchlists()
      }
      catch (e) {
        listFetchError = formatAlpacaWatchlistError(e)
        logger.warn({ err: e, message: listFetchError }, 'GET /v2/watchlists failed')
      }

      let detail = null
      let detailLoadError = null

      const loadDetail = async () => {
        if (watchlistIdQuery) {
          try {
            detail = await AlpacaClient.getWatchlistById(watchlistIdQuery)
          }
          catch (e1) {
            detailLoadError = formatAlpacaWatchlistError(e1)
            logger.warn({ err: e1, watchlistId: watchlistIdQuery }, 'getWatchlistById failed, trying by_name with id as name')
            try {
              detail = await AlpacaClient.getWatchlistByName(watchlistIdQuery)
            }
            catch (e2) {
              logger.warn({ err: e2 }, 'watchlist fallback by id-as-name failed')
            }
          }
          return
        }
        if (watchlistNameQuery) {
          try {
            detail = await AlpacaClient.getWatchlistByName(watchlistNameQuery)
          }
          catch (e) {
            detailLoadError = formatAlpacaWatchlistError(e)
            logger.warn({ err: e, watchlistName: watchlistNameQuery }, 'getWatchlistByName failed')
          }
          return
        }

        if (watchlistsMeta.length) {
          const chosen = pickDefaultWatchlistMeta(watchlistsMeta)
          try {
            detail = await AlpacaClient.getWatchlistById(chosen.id)
          }
          catch (e1) {
            detailLoadError = formatAlpacaWatchlistError(e1)
            logger.warn({ err: e1, id: chosen.id }, 'getWatchlistById failed for default list, trying by_name')
            try {
              detail = await AlpacaClient.getWatchlistByName(String(chosen.name || '').trim() || chosen.id)
            }
            catch (e2) {
              logger.warn({ err: e2, name: chosen.name }, 'getWatchlistByName for chosen list failed')
            }
          }
          return
        }

        // Index returned [] (paper vs live mismatch, or new account) — try common dashboard names.
        detail = await tryWatchlistDetailByNameFallbacks()
        if (detail) {
          watchlistsMeta = [{ id: detail.id, name: detail.name }]
        }
      }

      await loadDetail()

      // If the index call failed (or returned nothing) we may still load the default list by name.
      if (!detail && listFetchError) {
        detail = await tryWatchlistDetailByNameFallbacks()
        if (detail) {
          watchlistsMeta = [{ id: detail.id, name: detail.name }]
          listFetchError = null
        }
      }

      if (!detail && listFetchError) {
        return res.json(createStandardResponse({
          unavailable: false,
          tradingEnvironment,
          watchlistId: null,
          name: null,
          stocks: [],
          watchlists: [],
          alpacaError: listFetchError,
          message: `Could not list watchlists from Alpaca. ${tradingEnvironment === 'paper'
            ? 'Paper and live accounts have separate lists — confirm your API keys match the dashboard you use.'
            : 'Check API keys and account status.'}`
        }))
      }

      if (!detail) {
        const hint = detailLoadError
          ? `Alpaca said: ${detailLoadError}`
          : (listFetchError || 'No watchlist matched.')
        return res.json(createStandardResponse({
          unavailable: false,
          tradingEnvironment,
          watchlistId: null,
          name: null,
          stocks: [],
          watchlists: watchlistsMeta.map(w => ({ id: w.id, name: w.name })),
          alpacaError: detailLoadError || null,
          message: watchlistsMeta.length
            ? `Could not load that watchlist. ${hint}`
            : `No watchlists returned for this API key (${tradingEnvironment}). Watchlists are per account: use paper API keys with paper-api.alpaca.markets if your list is on the paper dashboard, or live keys with api.alpaca.markets for live.`
        }))
      }

      const rawRows = watchlistAssetRows(detail)
      const filtered = rawRows
        .filter(a => a && a.symbol && watchlistAssetMatchesMarket(a, normalizedMarket))
        .slice(0, 60)

      let cryptoQuotesBySymbol = {}
      if (normalizedMarket === 'crypto' && filtered.length > 0) {
        try {
          cryptoQuotesBySymbol = await AlpacaClient.getCryptoLatestQuotesForSymbols(
            filtered.map(s => s.symbol)
          )
        }
        catch (e) {
          console.warn('⚠️ Batch crypto quotes failed for watchlist:', e.message)
        }
      }

      const stocks = await Promise.all(filtered.map(async (stock) => {
        try {
          let price = state.stockPrices[stock.symbol] || 0
          if (price === 0 && normalizedMarket === 'crypto') {
            price = midPriceFromCryptoQuote(cryptoQuotesBySymbol[stock.symbol])
            if (price > 0) state.stockPrices[stock.symbol] = price
          }
          if (price === 0) {
            price = await marketDataProvider.getPrice(stock.symbol)
            if (price > 0) state.stockPrices[stock.symbol] = price
          }

          const marketStatusRow = await getStockMarketStatus(stock)

          return {
            symbol: stock.symbol,
            name: stock.name || stock.symbol,
            exchange: stock.exchange,
            status: stock.status,
            tradable: stock.tradable !== false,
            price,
            lastSide: 'buy',
            assetClass: stock.class || normalizedMarket,
            currency: stock.currency || 'USD',
            currencySymbol: stock.currencySymbol || '$',
            marketState: marketStatusRow.status,
            marketMessage: marketStatusRow.message,
            nextOpen: marketStatusRow.nextOpen,
            nextClose: marketStatusRow.nextClose
          }
        }
        catch (error) {
          console.warn(`⚠️ Watchlist row failed for ${stock.symbol}: ${error.message}`)
          return {
            symbol: stock.symbol,
            name: stock.name || stock.symbol,
            exchange: stock.exchange,
            status: stock.status,
            tradable: stock.tradable !== false,
            price: 0,
            lastSide: 'buy',
            assetClass: stock.class || normalizedMarket,
            currency: stock.currency || 'USD',
            currencySymbol: stock.currencySymbol || '$',
            marketState: 'closed',
            marketMessage: 'Data Unavailable',
            nextOpen: null,
            nextClose: null
          }
        }
      }))

      res.json(createStandardResponse({
        unavailable: false,
        tradingEnvironment,
        watchlistId: detail.id || null,
        name: detail.name || null,
        stocks,
        watchlists: watchlistsMeta.map(w => ({ id: w.id, name: w.name }))
      }))
    }
    catch (error) {
      logger.error({ err: error }, 'GET /api/watchlist failed')
      res.status(500).json({ error: 'Failed to load Alpaca watchlist.' })
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

  // Dashboard batch endpoint - combines account + portfolio + positions + orders + trading history.
  app.get('/api/dashboard', async (req, res) => {
    try {
      const { tradingHistoryLimit = 100, ordersStatus = 'open', ordersLimit = 100 } = req.query

      // Fetch all data in parallel for maximum speed.
      const [account, positions, orders, tradingHistoryResult] = await Promise.all([
        getAlpacaAccount(),
        getAlpacaPositions(),
        getAlpacaOrders(ordersStatus, parseInt(ordersLimit)),
        getAlpacaTradingHistory(parseInt(tradingHistoryLimit))
      ])

      const tradingHistory = tradingHistoryResult.success ? tradingHistoryResult.history : []

      res.json(createStandardResponse({
        account: account || null,
        positions: positions || [],
        orders: orders || [],
        tradingHistory
      }))
    }
    catch (error) {
      console.error('Error fetching dashboard data:', error)
      res.status(500).json({ error: 'Failed to fetch dashboard data' })
    }
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
  app.delete('/api/orders/:orderId', requireMutationAuth, async (req, res) => {
    try {
      const { orderId } = req.params
      const broker = await getBrokerAdapter()
      const result = await broker.cancelOrder(orderId)
      if (!result?.success) {
        return res.status(400).json({ error: result?.error || 'Failed to cancel order' })
      }
      res.json(createStandardResponse({ success: true }))
    }
    catch (error) {
      console.error('Error cancelling order:', error)
      res.status(500).json({ error: normalizeBrokerError(error, 'Failed to cancel order') })
    }
  })

  // Stock endpoints.
  app.get('/api/stocks', async (req, res) => {
    try {
      const marketDataProvider = await getMarketDataProvider()
      const { search, page = 1, limit = 50, market = 'stocks' } = req.query
      const normalizedMarket = String(market).toLowerCase() === 'crypto' ? 'crypto' : 'stocks'
      const stocks = normalizedMarket === 'crypto'
        ? await AlpacaClient.getAssets('active', 'crypto')
        : await marketDataProvider.getAllTradableStocks()

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

      let cryptoQuotesBySymbol = {}
      if (normalizedMarket === 'crypto' && paginatedStocks.length > 0) {
        try {
          cryptoQuotesBySymbol = await AlpacaClient.getCryptoLatestQuotesForSymbols(
            paginatedStocks.map(s => s.symbol)
          )
        }
        catch (e) {
          console.warn('⚠️ Batch crypto quotes failed, falling back per symbol:', e.message)
        }
      }

      // Fetch prices and market status in parallel.
      const comprehensiveStocks = await Promise.all(paginatedStocks.map(async (stock) => {
        try {
          // Get price (use cached if available, otherwise fetch).
          let price = state.stockPrices[stock.symbol] || 0
          if (price === 0 && normalizedMarket === 'crypto') {
            price = midPriceFromCryptoQuote(cryptoQuotesBySymbol[stock.symbol])
            if (price > 0) {
              state.stockPrices[stock.symbol] = price
              console.log(`💲 Fetched ${stock.symbol} (batch quote): $${price.toFixed(2)}`)
            }
          }
          if (price === 0) {
            price = await marketDataProvider.getPrice(stock.symbol)
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
            assetClass: stock.class || normalizedMarket,
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
            assetClass: stock.class || normalizedMarket,
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
      const marketDataProvider = await getMarketDataProvider()

      let price
      let stale = false
      if (fresh === 'true') {
        delete state.stockPrices[symbol]
      }

      try {
        price = await marketDataProvider.getPrice(symbol)
        if (price > 0) {
          state.stockPrices[symbol] = price
          if (fresh === 'true') console.log(`🔄 Fresh price fetch for ${symbol}: $${price.toFixed(2)}`)
        }
      }
      catch (error) {
        price = state.stockPrices[symbol] || 0
        stale = price > 0
        if (!stale) throw error
      }

      const stockData = state.allStocks.find(s => s.symbol === symbol)
      res.json(createStandardResponse({
        symbol,
        price,
        stale,
        currency: stockData?.currency || 'USD',
        currencySymbol: stockData?.currencySymbol || '$'
      }))
    }
    catch (error) {
      console.error(`Error fetching price for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch price for ${req.params.symbol}` })
    }
  })

  // Batch price endpoint - fetch multiple symbols in one request
  app.post('/api/stocks/prices', async (req, res) => {
    try {
      const { symbols = [] } = req.body

      if (!Array.isArray(symbols) || symbols.length === 0) {
        return res.status(400).json({ error: 'symbols array is required' })
      }

      if (symbols.length > 100) {
        return res.status(400).json({ error: 'Maximum 100 symbols per request' })
      }

      const marketDataProvider = await getMarketDataProvider()
      const prices = {}

      // Fetch all prices in parallel
      await Promise.all(
        symbols.map(async (symbol) => {
          try {
            const price = await marketDataProvider.getPrice(symbol)
            if (price > 0) {
              state.stockPrices[symbol] = price
              prices[symbol] = price
            }
          }
          catch (error) {
            console.warn(`Failed to fetch price for ${symbol}:`, error.message)
            prices[symbol] = 0
          }
        })
      )

      res.json(createStandardResponse(prices))
    }
    catch (error) {
      console.error('POST /api/stocks/prices:', error)
      res.status(500).json({ error: 'Failed to fetch batch prices' })
    }
  })

  // Ticker batch endpoint - combines stock + position + orders + market status for a symbol.
  app.get('/api/ticker/:symbol', async (req, res) => {
    try {
      const symbol = decodeURIComponent(req.params.symbol)
      const { ordersStatus = 'open', ordersLimit = 100, market = 'stocks' } = req.query
      const marketDataProvider = await getMarketDataProvider()
      const normalizedMarket = String(market).toLowerCase() === 'crypto' ? 'crypto' : 'stocks'

      // Fetch all data in parallel for maximum speed.
      const [stockData, positions, orders, marketStatusData] = await Promise.all([
        (async () => {
          const stocks = normalizedMarket === 'crypto'
            ? await AlpacaClient.getAssets('active', 'crypto')
            : await marketDataProvider.getAllTradableStocks()
          const stock = stocks.find(s => s.symbol === symbol)
          if (!stock) return null

          let price = state.stockPrices[symbol] || 0
          try {
            const freshPrice = await marketDataProvider.getPrice(symbol)
            if (freshPrice > 0) {
              price = freshPrice
              state.stockPrices[symbol] = freshPrice
            }
          }
          catch (error) {
            console.warn(`⚠️ Falling back to cached price for ${symbol}:`, error.message)
          }

          let marketStatus
          try {
            marketStatus = await getStockMarketStatus(stock)
          }
          catch (error) {
            console.warn(`⚠️ Failed to get market status for ${symbol}:`, error.message)
            marketStatus = {
              status: 'closed',
              message: 'Market Status Unavailable',
              nextOpen: null,
              nextClose: null
            }
          }

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
        })(),
        getAlpacaPositions(),
        getAlpacaOrders(ordersStatus, parseInt(ordersLimit)),
        marketDataProvider.getMarketStatus()
      ])

      if (!stockData) return res.status(404).json({ error: `Stock ${symbol} not found` })

      // Find position and orders for this symbol (crypto: same base matches BASE/USD venue fills).
      const position = positions.find(p => tickerSymbolMatchesRow(symbol, p.symbol, normalizedMarket)) || null
      const symbolOrders = orders.filter(o => tickerSymbolMatchesRow(symbol, o.symbol, normalizedMarket))

      res.json(createStandardResponse({
        stock: stockData,
        position,
        orders: symbolOrders,
        marketStatus: marketStatusData
      }))
    }
    catch (error) {
      console.error(`Error fetching ticker data for ${req.params.symbol}:`, error)
      res.status(500).json({ error: `Failed to fetch ticker data for ${req.params.symbol}` })
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
      const symbol = decodeURIComponent(req.params.symbol)
      const { period = '1D', timeframe, progressive = 'true', market = 'stocks' } = req.query
      const marketDataProvider = await getMarketDataProvider()

      // For 1D period, use regular loading to get complete continuous data like TradingView.
      // Progressive loading can cause gaps in intraday data.
      if (period === '1D') {
        const historicalData = await marketDataProvider.getStockHistoricalData(symbol, period, timeframe, market)
        res.json(historicalData)
      }
      // Use progressive loading for longer periods where it's beneficial.
      else if (progressive === 'true') {
        const historicalData = await getStockHistoricalDataProgressive(symbol, period, timeframe, market)
        res.json(historicalData)
      }
      else {
        const historicalData = await marketDataProvider.getStockHistoricalData(symbol, period, timeframe, market)
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
      const symbol = decodeURIComponent(req.params.symbol)
      const { period = '1D', timeframe, market = 'stocks' } = req.query

      const historicalData = await getStockHistoricalDataProgressive(symbol, period, timeframe, market)
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
      const symbol = decodeURIComponent(req.params.symbol)
      const { timeframe, start, end, market = 'stocks' } = req.query

      if (!timeframe || !start || !end) {
        return res.status(400).json({ error: 'timeframe, start, and end parameters are required' })
      }

      const historicalData = await getStockHistoricalDataByRange(symbol, timeframe, start, end, market)
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

      console.log(`🚀 Batch trends: Processing ${symbols.length} symbols with bounded concurrency`)

      const results = {}
      const batchSize = 5 // Keep bounded concurrency to respect provider limits.
      const normalizedPoints = parseInt(points)

      async function fetchTrendForSymbol(symbol) {
        try {
          const historicalData = await withRateLimitBackoff(
            () => getStockHistoricalData(symbol, '1W', '1Day'),
            { label: `trend:${symbol}`, retries: 2, baseDelayMs: 600, maxDelayMs: 2500 }
          )

          if (historicalData?.data && historicalData.data.length >= 2) {
            const trendData = historicalData.data
              .slice(-normalizedPoints)
              .map(item => ({
                timestamp: item.timestamp,
                price: item.close || item.price || 0
              }))

            const volumeAnalysis = analyzeVolume(historicalData.data)

            return {
              symbol,
              data: trendData,
              volumeAnalysis,
              fallback: { period: '1W', timeframe: '1Day' }
            }
          }

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
      }

      for (let i = 0; i < symbols.length; i += batchSize) {
        const batch = symbols.slice(i, i + batchSize)
        const batchResults = await Promise.all(batch.map(fetchTrendForSymbol))

        for (const result of batchResults) {
          results[result.symbol] = {
            data: result.data,
            volumeAnalysis: result.volumeAnalysis,
            fallback: result.fallback
          }
        }

        if (i + batchSize < symbols.length) await sleep(250)
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

      // Fallback to active market-data provider if cached status not available yet.
      if (!marketStatus) {
        const marketDataProvider = await getMarketDataProvider()
        marketStatus = await marketDataProvider.getMarketStatus()
      }

      res.json(createStandardResponse(marketStatus))
    }
    catch (error) {
      console.error('Error getting market status:', error)
      res.status(500).json({ error: 'Failed to get market status' })
    }
  })

  // Health check endpoint.
  app.get('/api/health', async (req, res) => {
    const tradingEnvironment = getTradingEnvironmentLabel()
    const [broker, brokerCapabilities, marketDataProvider, marketDataCapabilities] = await Promise.all([
      getBrokerIdentity(),
      getBrokerCapabilities(),
      getMarketDataIdentity(),
      getMarketDataCapabilities()
    ])

    res.json(createStandardResponse({
      status: 'ok',
      simulation: process.env.SIMULATION === 'true',
      effectiveSimulation: IS_SIMULATION,
      simulationReason: IS_SIMULATION
        ? (!process.env.ALPACA_KEY ? 'missing_alpaca_key' : 'SIMULATION=true')
        : 'live_alpaca',
      tradingEnvironment,
      broker,
      brokerCapabilities,
      marketDataProvider,
      marketDataCapabilities,
      featureFlags: FEATURE_FLAGS,
      auth: getAuthSummary(),
      currentUser: req.user
        ? {
            id: req.user.id,
            plan: req.user.plan,
            authProvider: req.user.authProvider
          }
        : null,
      riskNotice:
        tradingEnvironment === 'simulation'
          ? 'Simulation — mock prices and local portfolio only.'
          : tradingEnvironment === 'paper'
            ? 'Alpaca paper — no real money, but real market data delays/feeds apply per Alpaca.'
            : 'Live brokerage — real money at risk. Not financial advice.',
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

  function buildOrderPayload(result) {
    const o = result?.order || null
    if (!o) return null

    const rawQty = o.qty ?? o.filled_qty ?? o.quantity
    const qtyNum = typeof rawQty === 'string' ? parseFloat(rawQty) : Number(rawQty)
    const limitPrice = o.limit_price != null ? Number(o.limit_price) : undefined
    const averagePrice = o.filled_avg_price != null ? Number(o.filled_avg_price) : undefined
    const referencePrice = averagePrice ?? limitPrice ?? o.price ?? state.stockPrices[o.symbol]

    return {
      ...o,
      qty: Number.isFinite(qtyNum) ? qtyNum : rawQty,
      type: String(o.type || 'market').toLowerCase(),
      limit_price: Number.isFinite(limitPrice) ? limitPrice : o.limit_price,
      estimated_notional: Number.isFinite(Number(referencePrice)) && Number.isFinite(qtyNum)
        ? Number((Number(referencePrice) * qtyNum).toFixed(2))
        : null
    }
  }

  async function cryptoVenueMeta(orderIntent) {
    const swap = await resolveCryptoBuyVenueSymbol(orderIntent.symbol, orderIntent.side)
    if (!swap) {
      return {
        venueSymbol: orderIntent.symbol,
        requestedSymbolForPayload: null,
        swapped: false
      }
    }
    console.log(`🔄 Crypto buy venue: ${swap.requestedSymbol} → ${swap.venueSymbol} (USD buying power)`)
    return {
      venueSymbol: swap.venueSymbol,
      requestedSymbolForPayload: swap.requestedSymbol,
      swapped: true
    }
  }

  async function getOrderPreview(input) {
    const orderIntent = normalizeOrderIntent(input)
    if (orderIntentRequiresStopFeature(orderIntent) && !FEATURE_FLAGS.stopOrders) {
      return { statusCode: 403, body: { error: 'Stop / stop-loss orders are disabled in this deployment.' } }
    }

    const venue = await cryptoVenueMeta(orderIntent)
    const currentPrice = await getPrice(venue.venueSymbol).catch(() => 0)
    const intentAtVenue = { ...orderIntent, symbol: venue.venueSymbol }
    const validation = validateOrderIntent(intentAtVenue, { referencePrice: currentPrice })
    if (!validation.valid) {
      return { statusCode: 400, body: { error: 'Invalid order request', details: validation.errors } }
    }
    const positions = await getAlpacaPositions().catch(() => [])
    const previewMarket = isCryptoPairSymbol(orderIntent.symbol) ? 'crypto' : 'stocks'
    const position = Array.isArray(positions)
      ? positions.find((item) => tickerSymbolMatchesRow(orderIntent.symbol, item.symbol, previewMarket)) || null
      : null
    const estimatedNotional = estimateOrderNotional(intentAtVenue, currentPrice || null)

    return {
      statusCode: 200,
      body: createStandardResponse({
        order: {
          symbol: orderIntent.symbol,
          venue_symbol: venue.venueSymbol,
          routes_to_usd_pair: venue.swapped,
          side: orderIntent.side,
          type: orderIntent.type,
          qty: orderIntent.qty,
          limit_price: orderIntent.limitPrice,
          stop_price: orderIntent.stopPrice,
          time_in_force: orderIntent.timeInForce,
          estimated_notional: estimatedNotional,
          reference_price: currentPrice || null
        },
        position: position
          ? {
              symbol: position.symbol,
              qty: Number(position.qty),
              market_value: position.market_value,
              current_price: position.current_price
            }
          : null
      })
    }
  }

  app.post('/api/orders/preview', requireMutationAuth, async (req, res) => {
    try {
      const preview = await getOrderPreview(req.body || {})
      return res.status(preview.statusCode).json(preview.body)
    }
    catch (error) {
      console.error('POST /api/orders/preview:', error)
      return res.status(500).json({ error: 'Failed to preview order' })
    }
  })

  // Place a market or limit order (simulation or Alpaca paper/live per .env).
  app.post('/api/orders', requireMutationAuth, async (req, res) => {
    try {
      const orderIntent = normalizeOrderIntent(req.body || {})
      if (orderIntentRequiresStopFeature(orderIntent) && !FEATURE_FLAGS.stopOrders) {
        return res.status(403).json({ error: 'Stop / stop-loss orders are disabled in this deployment.' })
      }

      const venue = await cryptoVenueMeta(orderIntent)
      const referencePrice = await getPrice(venue.venueSymbol).catch(() => 0)
      const intentAtVenue = { ...orderIntent, symbol: venue.venueSymbol }
      const validation = validateOrderIntent(intentAtVenue, { referencePrice })
      if (!validation.valid) {
        return res.status(400).json({
          error: 'Invalid order request',
          details: validation.errors
        })
      }

      const broker = await getBrokerAdapter()
      const result = await broker.submitOrder({
        symbol: venue.venueSymbol,
        qty: orderIntent.qty,
        side: orderIntent.side,
        type: orderIntent.type,
        limit_price: orderIntent.limitPrice,
        stop_price: orderIntent.stopPrice,
        time_in_force: orderIntent.timeInForce
      })
      if (!result.success) {
        const body = { error: result.error }
        if (result.brokerStatus != null) body.brokerStatus = result.brokerStatus
        if (result.brokerCode != null) body.brokerCode = result.brokerCode
        return res.status(400).json(body)
      }

      let payload = buildOrderPayload(result)
      if (venue.requestedSymbolForPayload && payload?.symbol && payload.symbol !== venue.requestedSymbolForPayload) {
        payload = {
          ...payload,
          requested_symbol: venue.requestedSymbolForPayload,
          crypto_venue_note: 'Buy was executed on the USD-quoted pair so USD buying power funds the order. Set CRYPTO_USD_QUOTE_FALLBACK=off in api/.env to submit the exact pair you request.'
        }
      }

      // Trade event — always broadcast on success so tickers refresh orders/positions.
      // Previously we only broadcast when filled_avg_price was finite; pending or odd
      // broker payloads skipped the event and the UI never refetched.
      if (payload?.symbol) {
        let price = payload.filled_avg_price ?? payload.limit_price ?? payload.price ?? state.stockPrices[payload.symbol]
        if (price == null || !Number.isFinite(Number(price))) {
          price = await getPrice(payload.symbol).catch(() => 0)
        }
        if (!Number.isFinite(Number(price))) price = 0
        broadcast({
          type: 'trade',
          symbol: payload.symbol,
          qty: Number.isFinite(Number(payload.qty)) ? Number(payload.qty) : undefined,
          side: String(payload.side || orderIntent.side || '').toLowerCase(),
          orderType: payload.type,
          price: Number(price),
          timestamp: payload.timestamp || payload.submitted_at || new Date().toISOString()
        })
      }

      // Positions — always broadcast (even []) and retry once: the broker often lags
      // the order response, so the first getPositions() can still be empty while the
      // second sees the new open position.
      try {
        let updatedPositions = await getAlpacaPositions()
        if (!Array.isArray(updatedPositions)) updatedPositions = []
        broadcast({
          type: 'positions-updated',
          data: updatedPositions,
          timestamp: new Date().toISOString()
        })
        await sleep(400)
        updatedPositions = await getAlpacaPositions()
        if (!Array.isArray(updatedPositions)) updatedPositions = []
        broadcast({
          type: 'positions-updated',
          data: updatedPositions,
          timestamp: new Date().toISOString()
        })
        if (payload?.symbol) {
          console.log(`📊 Broadcasted position updates after order execution for ${payload.symbol}`)
        }
      }
      catch (positionError) {
        logger.warn({ err: positionError, symbol: payload?.symbol }, 'Failed to fetch and broadcast positions after order')
        // Continue without position broadcast - order was still successful
      }

      res.json(createStandardResponse({ order: payload || result.order }))
    }
    catch (error) {
      console.error('POST /api/orders:', error)
      res.status(500).json({ error: error.message || 'Failed to place order' })
    }
  })

  // Compact read-only bundle for local AI agents (OpenClaw, scripts, MCP bridges).
  app.get('/api/agent/snapshot', requireEntitlement('apiAccess', {
    message: 'API snapshot access requires a Pro or Team plan.'
  }), async (req, res) => {
    try {
      const baseUrl = process.env.STOCK_TRADER_API_BASE || `http://localhost:${process.env.PORT || 3000}/api`

      const [marketStatus, account, positions, orders] = await Promise.all([
        getMarketStatus().catch(() => null),
        getAlpacaAccount().catch(() => null),
        getAlpacaPositions().catch(() => []),
        getAlpacaOrders('open', 50).catch(() => [])
      ])

      const accountSummary = account
        ? {
            status: account.status,
            currency: account.currency,
            cash: account.cash,
            portfolio_value: account.portfolio_value,
            buying_power: account.buying_power
          }
        : null

      const positionSummaries = (positions || []).slice(0, 25).map((p) => ({
        symbol: p.symbol,
        qty: p.qty,
        market_value: p.market_value,
        unrealized_pl: p.unrealized_pl,
        current_price: p.current_price
      }))

      res.json(createStandardResponse({
        generatedAt: new Date().toISOString(),
        apiBase: baseUrl,
        mode: IS_SIMULATION ? 'simulation' : 'live',
        tradingEnvironment: getTradingEnvironmentLabel(),
        auth: getAuthSummary(),
        currentUser: req.user
          ? {
              id: req.user.id,
              plan: req.user.plan,
              authProvider: req.user.authProvider
            }
          : null,
        server: {
          connectedWebSocketClients: state.wsClients.size,
          tradableStocksLoaded: state.allStocks.length
        },
        market: marketStatus,
        account: accountSummary,
        positions: positionSummaries,
        openOrdersCount: Array.isArray(orders) ? orders.length : 0,
        hints: {
          ticker: 'GET /api/ticker/:symbol',
          dashboard: 'GET /api/dashboard',
          movers: 'GET /api/movers',
          history: 'GET /api/stocks/:symbol/history?period=1D',
          placeOrder: 'POST /api/orders JSON { symbol, qty, side, type: "market"|"limit"|"stop"|"stop_limit", limitPrice?, stopPrice? }',
          previewOrder: 'POST /api/orders/preview JSON { symbol, qty, side, type, limitPrice?, stopPrice? }'
        }
      }))
    }
    catch (error) {
      console.error('Error building agent snapshot:', error)
      res.status(500).json({ error: 'Failed to build agent snapshot' })
    }
  })

  // 404 handler for unmatched routes.
  app.use((req, res) => {
    logger.warn({ method: req.method, url: req.url, requestId: req.id }, 'Route not found')
    res.status(404).json({ error: `Route not found: ${req.method} ${req.url}`, requestId: req.id })
  })

  // Error handler.
  app.use((err, req, res, next) => {
    if (err?.type === 'entity.too.large') {
      logger.warn({ err, requestId: req.id }, 'request payload too large')
      return res.status(413).json({
        error: 'Payload Too Large',
        message: 'Request body is too large for this endpoint.',
        requestId: req.id
      })
    }

    if (err instanceof SyntaxError && err?.status === 400 && 'body' in err) {
      logger.warn({ err, requestId: req.id }, 'invalid json payload')
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Request body contains invalid JSON.',
        requestId: req.id
      })
    }

    logger.error({ err, requestId: req.id }, 'Express error')
    res.status(500).json({ error: 'Internal server error', requestId: req.id })
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
