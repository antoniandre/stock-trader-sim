// Dev: use Vite proxy (`/api` → api :3000). Prod: set VITE_API_BASE to your API origin + /api
import { getAccessToken } from '@/stores/auth'

const API_BASE = import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? '/api' : 'http://127.0.0.1:3000/api')
const API_BEARER_TOKEN = import.meta.env.VITE_API_BEARER_TOKEN || ''

async function getAuthHeaders(extra = {}) {
  const headers = { ...extra }
  const accessToken = await getAccessToken()
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`
  else if (API_BEARER_TOKEN) headers.Authorization = `Bearer ${API_BEARER_TOKEN}`
  return headers
}

// Request deduplication and caching.
// --------------------------------------------------------
const pendingRequests = new Map() // Track in-flight requests.
const requestCache = new Map() // Simple cache for GET requests.
const CACHE_TTL = 5000 // 5 seconds cache TTL for fast updates.

// Helper to create cache key from URL and params.
function getCacheKey(url, params = {}) {
  const sortedParams = Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&')
  return `${url}${sortedParams ? `?${sortedParams}` : ''}`
}

// Helper to check if request is cached and valid.
function getCachedResponse(cacheKey) {
  const cached = requestCache.get(cacheKey)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data
  }
  if (cached) requestCache.delete(cacheKey) // Expired cache.
  return null
}

// Helper to cache response.
function setCachedResponse(cacheKey, data) {
  requestCache.set(cacheKey, { data, timestamp: Date.now() })
  // Limit cache size to prevent memory issues.
  if (requestCache.size > 100) {
    const firstKey = requestCache.keys().next().value
    requestCache.delete(firstKey)
  }
}

// Re-export utilities for convenience.
export { formatCurrency, formatNumber, formatPercentage, getCurrencySymbol } from '@/utils/formatters'

// Account & Portfolio.
// --------------------------------------------------------
// Batch endpoint for dashboard - fetches account + positions + orders + trading history in one call.
export async function fetchDashboard(tradingHistoryLimit = 100, ordersStatus = 'open', ordersLimit = 100) {
  const params = {
    tradingHistoryLimit: tradingHistoryLimit.toString(),
    ordersStatus,
    ordersLimit: ordersLimit.toString()
  }
  const cacheKey = getCacheKey(`${API_BASE}/dashboard`, params)

  // Check cache first.
  const cached = getCachedResponse(cacheKey)
  if (cached) {
    console.log('💾 Using cached dashboard data')
    return cached
  }

  // Check if request is already in flight.
  if (pendingRequests.has(cacheKey)) {
    console.log('⏳ Dashboard request already in flight, waiting...')
    return await pendingRequests.get(cacheKey)
  }

  // Create new request.
  const requestPromise = (async () => {
    try {
      const urlParams = new URLSearchParams(params)
      const response = await fetch(`${API_BASE}/dashboard?${urlParams}`)
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

      const result = await response.json()
      const data = result.data || result

      // Cache the response.
      setCachedResponse(cacheKey, data)

      return data
    }
    catch (error) {
      console.error('API Error:', error)
      throw error
    }
    finally {
      // Remove from pending requests.
      pendingRequests.delete(cacheKey)
    }
  })()

  pendingRequests.set(cacheKey, requestPromise)
  return await requestPromise
}

export async function fetchAccount() {
  try {
    const response = await fetch(`${API_BASE}/account`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchPortfolio() {
  try {
    const response = await fetch(`${API_BASE}/portfolio`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('Health check failed:', error)
    throw error
  }
}

export async function fetchMe() {
  try {
    const response = await fetch(`${API_BASE}/me`, {
      headers: await getAuthHeaders()
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    const result = await response.json()
    return result.data || result
  }
  catch (error) {
    console.error('Fetch me failed:', error)
    throw error
  }
}

export async function fetchDayTradingDecision(payload) {
  try {
    const response = await fetch(`${API_BASE}/bot/day-trading/decision`, {
      method: 'POST',
      headers: await getAuthHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload)
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok) {
      throw new Error(getErrorMessage(result, `HTTP ${response.status}: ${response.statusText}`))
    }

    return result.data || result
  }
  catch (error) {
    console.error('Fetch day-trading decision failed:', error)
    throw error
  }
}

export async function runDayTradingBacktest(payload) {
  try {
    const response = await fetch(`${API_BASE}/bot/day-trading/backtest`, {
      method: 'POST',
      headers: await getAuthHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload)
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok) {
      throw new Error(getErrorMessage(result, `HTTP ${response.status}: ${response.statusText}`))
    }

    return result.data || result
  }
  catch (error) {
    console.error('Run day-trading backtest failed:', error)
    throw error
  }
}

export async function evolveDayTradingStrategies(payload) {
  try {
    const response = await fetch(`${API_BASE}/bot/day-trading/evolve`, {
      method: 'POST',
      headers: await getAuthHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload)
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok) {
      throw new Error(getErrorMessage(result, `HTTP ${response.status}: ${response.statusText}`))
    }

    return result.data || result
  }
  catch (error) {
    console.error('Evolve day-trading strategies failed:', error)
    throw error
  }
}

export async function fetchTradingHistory(limit = 100) {
  try {
    const response = await fetch(`${API_BASE}/trading-history?limit=${limit}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchPortfolioHistory(period = '1D', timeframe = '1Min') {
  try {
    const response = await fetch(`${API_BASE}/portfolio/history?period=${period}&timeframe=${timeframe}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchPositions() {
  try {
    const response = await fetch(`${API_BASE}/positions`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchOrders(status = 'open', limit = 100) {
  try {
    const params = new URLSearchParams()
    if (status != null && status !== '') params.append('status', status)
    params.append('limit', limit.toString())
    const response = await fetch(`${API_BASE}/orders?${params}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function cancelOrder(orderId) {
  try {
    const response = await fetch(`${API_BASE}/orders/${orderId}`, {
      method: 'DELETE',
      headers: await getAuthHeaders()
    })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(getErrorMessage(payload, `HTTP ${response.status}: ${response.statusText}`))

    return payload.data || payload
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

function getErrorMessage(payload, fallback = 'Order failed') {
  if (!payload) return fallback
  if (typeof payload.error === 'string') return payload.error
  if (typeof payload.message === 'string') return payload.message
  if (Array.isArray(payload.details) && payload.details.length) return payload.details.join(', ')
  if (typeof payload.data?.error === 'string') return payload.data.error
  return fallback
}

export async function previewOrder(order) {
  const response = await fetch(`${API_BASE}/orders/preview`, {
    method: 'POST',
    headers: await getAuthHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(order)
  })

  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(getErrorMessage(payload, response.statusText))
  return payload.data || payload
}

export async function postOrder(order) {
  const normalized = {
    symbol: String(order.symbol).trim().toUpperCase(),
    qty: Number(order.qty ?? order.quantity),
    side: String(order.side).toLowerCase(),
    type: String(order.type || 'market').toLowerCase(),
    limitPrice: order.limitPrice != null ? Number(order.limitPrice) : undefined,
    timeInForce: order.timeInForce || 'gtc'
  }

  const response = await fetch(`${API_BASE}/orders`, {
    method: 'POST',
    headers: await getAuthHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(normalized)
  })

  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(getErrorMessage(payload, response.statusText))
  return payload.data?.order || payload.order || payload.data || payload
}

/** Backward-compatible market order helper */
export async function postMarketOrder(symbol, qty, side) {
  return postOrder({ symbol, qty, side, type: 'market' })
}

// Market Data.
// --------------------------------------------------------
export async function fetchAllStocks(page = 1, limit = 50, search = '', market = 'stocks') {
  try {
    const params = new URLSearchParams()
    if (page) params.append('page', page.toString())
    if (limit) params.append('limit', limit.toString())
    if (search) params.append('search', search)
    if (market) params.append('market', market)

    const queryString = params.toString() ? `?${params.toString()}` : ''
    const response = await fetch(`${API_BASE}/stocks${queryString}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Batch endpoint for ticker - fetches stock + position + orders + market status in one call.
export async function fetchTicker(symbol, ordersStatus = 'open', ordersLimit = 100, market = 'stocks') {
  const params = { ordersStatus, ordersLimit: ordersLimit.toString(), market }
  const cacheKey = getCacheKey(`${API_BASE}/ticker/${symbol}`, params)

  // Check cache first (shorter TTL for ticker data since it changes frequently).
  const cached = getCachedResponse(cacheKey)
  if (cached) {
    console.log(`💾 Using cached ticker data for ${symbol}`)
    return cached
  }

  // Check if request is already in flight.
  if (pendingRequests.has(cacheKey)) {
    console.log(`⏳ Ticker request for ${symbol} already in flight, waiting...`)
    return await pendingRequests.get(cacheKey)
  }

  // Create new request.
  const requestPromise = (async () => {
    try {
      const urlParams = new URLSearchParams(params)
      const response = await fetch(`${API_BASE}/ticker/${encodeURIComponent(symbol)}?${urlParams}`)
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

      const result = await response.json()
      const data = result.data || result

      // Cache the response.
      setCachedResponse(cacheKey, data)

      return data
    }
    catch (error) {
      console.error('API Error:', error)
      throw error
    }
    finally {
      // Remove from pending requests.
      pendingRequests.delete(cacheKey)
    }
  })()

  pendingRequests.set(cacheKey, requestPromise)
  return await requestPromise
}

// Get single stock details
export async function fetchStock(symbol) {
  try {
    const response = await fetch(`${API_BASE}/stocks/${symbol}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    const result = await response.json()
    return result.data || result
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Get single stock price
export async function fetchStockPrice(symbol, fresh = false) {
  try {
    const params = fresh ? '?fresh=true' : ''
    const response = await fetch(`${API_BASE}/stocks/${symbol}/price${params}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Note: Stock subscription is now handled via WebSocket directly in the useWebSocket composable

// Get market status
export async function fetchMarketStatus() {
  try {
    const response = await fetch(`${API_BASE}/market-status`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Get historical data for a stock
export async function fetchStockHistory(symbol, period = '1D', timeframe = null, market = 'stocks') {
  try {
    const params = new URLSearchParams({ period, market })
    if (timeframe) params.append('timeframe', timeframe)

    const response = await fetch(`${API_BASE}/stocks/${encodeURIComponent(symbol)}/history?${params}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    return await response.json()
  }
  catch (error) {
    console.error('Error fetching stock history:', error)
    throw error
  }
}

export async function fetchStockHistoryProgressive(symbol, period = '1D', timeframe = null, market = 'stocks') {
  try {
    const params = new URLSearchParams({ period, market })
    if (timeframe) params.append('timeframe', timeframe)

    const response = await fetch(`${API_BASE}/stocks/${encodeURIComponent(symbol)}/history/progressive?${params}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    return await response.json()
  }
  catch (error) {
    console.error('Error fetching progressive stock history:', error)
    // Fallback to regular history if progressive fails.
    return fetchStockHistory(symbol, period, timeframe, market)
  }
}

export async function fetchStockHistoryRange(symbol, timeframe, startDate, endDate, market = 'stocks') {
  try {
    const params = new URLSearchParams({
      timeframe,
      market,
      start: new Date(startDate).toISOString(),
      end: new Date(endDate).toISOString()
    })

    const response = await fetch(`${API_BASE}/stocks/${encodeURIComponent(symbol)}/history/range?${params}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchTopMovers(top = 10, market = 'stocks') {
  try {
    const params = new URLSearchParams({ direction: 'both', top: String(top), market })
    const res = await fetch(`${API_BASE}/movers?${params.toString()}`)
    if (!res.ok) throw new Error(`Failed to fetch movers: ${res.status}`)
    const payload = await res.json()
    return payload
  }
  catch (error) {
    console.error('Error fetching top movers:', error)
    throw error
  }
}

export async function fetchTradeCandidates(limit = 8, market = 'stocks') {
  try {
    const params = new URLSearchParams({ limit: String(limit), market })
    const response = await fetch(`${API_BASE}/screener/candidates?${params}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    const payload = await response.json()
    return payload.data || payload
  }
  catch (error) {
    console.error('Trade screener API Error:', error)
    throw error
  }
}

export async function fetchStockTrend(symbol, points = 20) {
  try {
    const response = await fetch(`${API_BASE}/stocks/${symbol}/trend?points=${points}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Batch trend data fetching for multiple stocks (much faster)
export async function fetchBatchTrends(symbols, points = 20) {
  try {
    const response = await fetch(`${API_BASE}/stocks/trends/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symbols, points })
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('Batch trends API Error:', error)
    throw error
  }
}
