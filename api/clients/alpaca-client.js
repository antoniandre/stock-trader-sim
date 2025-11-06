import axios from 'axios'
import { ALPACA_BASE_URL, ALPACA_API_BASE_URL, HEADERS } from '../config.js'

// Alpaca API Client.
// --------------------------------------------------------
// Pure API client - no business logic, just HTTP calls.
// This makes it easy to swap out for Trading 212 or another provider.
//
// All functions return raw API responses or throw errors.
// Data transformation happens in the service layer.

// Account Endpoints.
// --------------------------------------------------------
export async function getAccount() {
  const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/account`, { headers: HEADERS })
  return data
}

export async function getAccountActivities(activityType = null, limit = 100, direction = 'desc') {
  let url = `${ALPACA_BASE_URL}/v2/account/activities`
  if (activityType) url += `/${activityType}`

  const params = new URLSearchParams({
    limit: limit.toString(),
    direction
  })

  const { data } = await axios.get(`${url}?${params}`, { headers: HEADERS })
  return data
}

export async function getPortfolioHistory(period = '1D', timeframe = '1Min', extendedHours = true) {
  const params = new URLSearchParams({
    period,
    timeframe,
    extended_hours: extendedHours.toString()
  })

  const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/account/portfolio/history?${params}`, { headers: HEADERS })
  return data
}

// Positions Endpoints.
// --------------------------------------------------------
export async function getPositions() {
  const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/positions`, { headers: HEADERS })
  return data
}

export async function getPosition(symbol) {
  const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/positions/${symbol}`, { headers: HEADERS })
  return data
}

// Orders Endpoints.
// --------------------------------------------------------
export async function createOrder(orderData) {
  const { data } = await axios.post(`${ALPACA_BASE_URL}/v2/orders`, orderData, { headers: HEADERS })
  return data
}

export async function getOrders(status = null, limit = null, after = null, until = null, direction = null) {
  const params = new URLSearchParams()
  if (status) params.append('status', status)
  if (limit) params.append('limit', limit.toString())
  if (after) params.append('after', after)
  if (until) params.append('until', until)
  if (direction) params.append('direction', direction)

  const url = params.toString() ? `${ALPACA_BASE_URL}/v2/orders?${params}` : `${ALPACA_BASE_URL}/v2/orders`
  const { data } = await axios.get(url, { headers: HEADERS })
  return data
}

export async function getOrder(orderId) {
  const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/orders/${orderId}`, { headers: HEADERS })
  return data
}

export async function cancelOrder(orderId) {
  await axios.delete(`${ALPACA_BASE_URL}/v2/orders/${orderId}`, { headers: HEADERS })
  return { success: true }
}

// Assets (Stock List) Endpoints.
// --------------------------------------------------------
export async function getAssets(status = null, assetClass = null, exchange = null) {
  const params = new URLSearchParams()
  if (status) params.append('status', status)
  if (assetClass) params.append('asset_class', assetClass)
  if (exchange) params.append('exchange', exchange)

  const url = params.toString() ? `${ALPACA_BASE_URL}/v2/assets?${params}` : `${ALPACA_BASE_URL}/v2/assets`
  const { data } = await axios.get(url, { headers: HEADERS })
  return data
}

// Market Data Endpoints.
// --------------------------------------------------------
export async function getLatestQuote(symbol, feed = 'iex') {
  const { data } = await axios.get(`${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/quotes/latest?feed=${feed}`, { headers: HEADERS })
  return data
}

export async function getLatestTrade(symbol, feed = 'iex') {
  const { data } = await axios.get(`${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/trades/latest?feed=${feed}`, { headers: HEADERS })
  return data
}

export async function getLatestBar(symbol, timeframe = '1Day', feed = 'iex') {
  const { data } = await axios.get(`${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars/latest?timeframe=${timeframe}&feed=${feed}`, { headers: HEADERS })
  return data
}

export async function getBars(symbol, timeframe, startDate, endDate, limit = null, feed = 'iex', pageToken = null) {
  const params = new URLSearchParams({
    timeframe,
    feed,
    start: startDate instanceof Date ? startDate.toISOString() : startDate,
    end: endDate instanceof Date ? endDate.toISOString() : endDate
  })

  if (limit) params.append('limit', limit.toString())
  if (pageToken) params.append('page_token', pageToken)

  const { data } = await axios.get(`${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars?${params}`, { headers: HEADERS })
  return data
}

// Market Calendar Endpoints.
// --------------------------------------------------------
export async function getMarketCalendar(startDate, endDate) {
  const start = startDate || new Date().toISOString().split('T')[0]
  const end = endDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const url = `${ALPACA_BASE_URL}/v2/calendar?start=${start}&end=${end}`

  const { data } = await axios.get(url, { headers: HEADERS })
  return data
}

export async function getMarketClock() {
  const { data } = await axios.get(`${ALPACA_BASE_URL}/v2/clock`, { headers: HEADERS })
  return data
}

// Top Movers Endpoints.
// --------------------------------------------------------
export async function getTopMovers(market = 'stocks', top = 10) {
  const params = new URLSearchParams()
  if (top) params.append('top', String(top))

  const url = params.toString()
    ? `${ALPACA_API_BASE_URL}/v1beta1/screener/${market}/movers?${params}`
    : `${ALPACA_API_BASE_URL}/v1beta1/screener/${market}/movers`

  const { data } = await axios.get(url, { headers: HEADERS })
  return data
}

