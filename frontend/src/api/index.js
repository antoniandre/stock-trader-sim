const API_BASE = 'http://localhost:3000/api'

// Re-export utilities for convenience.
export { formatCurrency, formatNumber, formatPercentage, getCurrencySymbol } from '@/utils/formatters'

// Account & Portfolio.
// --------------------------------------------------------
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
    const params = new URLSearchParams({ status, limit: limit.toString() })
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
    const response = await fetch(`${API_BASE}/orders/${orderId}`, { method: 'DELETE' })
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Market Data.
// --------------------------------------------------------
export async function fetchAllStocks(page = 1, limit = 50, search = '') {
  try {
    const params = new URLSearchParams()
    if (page) params.append('page', page.toString())
    if (limit) params.append('limit', limit.toString())
    if (search) params.append('search', search)

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

// Get single stock details
export async function fetchStock(symbol) {
  try {
    const response = await fetch(`${API_BASE}/stocks/${symbol}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
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
export async function fetchStockHistory(symbol, period = '1D', timeframe = null) {
  try {
    const params = new URLSearchParams({ period })
    if (timeframe) params.append('timeframe', timeframe)

    const response = await fetch(`${API_BASE}/stocks/${symbol}/history?${params}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    return await response.json()
  }
  catch (error) {
    console.error('Error fetching stock history:', error)
    throw error
  }
}

export async function fetchStockHistoryProgressive(symbol, period = '1D', timeframe = null) {
  try {
    const params = new URLSearchParams({ period })
    if (timeframe) params.append('timeframe', timeframe)

    const response = await fetch(`${API_BASE}/stocks/${symbol}/history/progressive?${params}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    return await response.json()
  }
  catch (error) {
    console.error('Error fetching progressive stock history:', error)
    // Fallback to regular history if progressive fails.
    return fetchStockHistory(symbol, period, timeframe)
  }
}

export async function fetchStockHistoryRange(symbol, timeframe, startDate, endDate) {
  try {
    const params = new URLSearchParams({
      timeframe,
      start: new Date(startDate).toISOString(),
      end: new Date(endDate).toISOString()
    })

    const response = await fetch(`${API_BASE}/stocks/${symbol}/history/range?${params}`)
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
