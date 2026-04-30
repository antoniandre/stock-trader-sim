// Alpaca Account Functions - Service Layer Wrapper.
// --------------------------------------------------------
// This file now acts as a compatibility layer that delegates to the Trading Service.
// The actual implementation is in api/services/alpaca-trading-service.js
// which uses api/clients/alpaca-client.js for API calls.
//
// This structure makes it easy to migrate to Trading 212 by:
// 1. Creating api/services/trading212-trading-service.js
// 2. Creating api/clients/trading212-client.js
// 3. Updating the service factory in api/services/trading-service.js

import { getTradingService } from './services/trading-service.js'
import { getPrice } from './market-data.js'
import { IS_SIMULATION, state } from './config.js'
import { getMockAccountData } from './simulation.js'
import { getBrokerAdapter } from './services/broker-manager.js'

/** Alpaca does not expose a total; we walk cursors (cached) for accurate pagination. */
const FILL_COUNT_CACHE_TTL_MS = 120_000
const FILL_COUNT_HARD_CAP = 50_000
const FILL_COUNT_PAGE = 100

let fillActivityCountCache = {
  at: 0,
  total: null,
  capped: false
}

function countSimulationFills() {
  let n = 0
  for (const row of Object.values(state.portfolio || {})) {
    n += Array.isArray(row?.history) ? row.history.length : 0
  }
  return n
}

// Lazy-load service instance.
let serviceInstance = null

async function getService() {
  if (!serviceInstance) serviceInstance = await getTradingService()
  return serviceInstance
}

// Account Functions.
// --------------------------------------------------------
export async function getAlpacaAccount() {
  const broker = await getBrokerAdapter()
  const account = await broker.getAccount()
  if (account) state.alpacaAccount = account
  return account
}

export async function getAlpacaAccountActivities(activityType = null, limit = 100, pageToken = null) {
  const broker = await getBrokerAdapter()
  return await broker.getAccountActivities(activityType, limit, pageToken)
}

export async function getAlpacaPositions() {
  const broker = await getBrokerAdapter()
  return await broker.getPositions()
}

export async function getAlpacaOrders(status = 'open', limit = 100) {
  const broker = await getBrokerAdapter()
  return await broker.getOrders(status, limit)
}

export async function getAlpacaTradingHistory(limit = 100, pageToken = null) {
  const broker = await getBrokerAdapter()
  return await broker.getTradingHistory(limit, pageToken)
}

/**
 * Total FILL activities (trade executions) for the linked account.
 * @param {{ bypassCache?: boolean }} [opts]
 * @returns {Promise<{ total: number, capped: boolean, cached: boolean }>}
 */
export async function getAlpacaFillActivityCount(opts = {}) {
  const { bypassCache = false } = opts

  if (IS_SIMULATION) {
    return { total: countSimulationFills(), capped: false, cached: false }
  }

  const now = Date.now()
  if (
    !bypassCache
    && fillActivityCountCache.total !== null
    && now - fillActivityCountCache.at < FILL_COUNT_CACHE_TTL_MS
  ) {
    return {
      total: fillActivityCountCache.total,
      capped: fillActivityCountCache.capped,
      cached: true
    }
  }

  let total = 0
  let capped = false
  let pageToken = null

  while (true) {
    const batch = await getAlpacaAccountActivities('FILL', FILL_COUNT_PAGE, pageToken)
    const arr = Array.isArray(batch) ? batch : []
    total += arr.length

    if (total >= FILL_COUNT_HARD_CAP) {
      capped = true
      total = FILL_COUNT_HARD_CAP
      break
    }
    if (arr.length < FILL_COUNT_PAGE) break

    const lastId = arr[arr.length - 1]?.id
    if (!lastId) break
    pageToken = lastId
  }

  fillActivityCountCache = { at: now, total, capped }
  return { total, capped, cached: false }
}

export async function getAlpacaPortfolioHistory(period = '1D', timeframe = '1Min') {
  const broker = await getBrokerAdapter()
  return await broker.getPortfolioHistory(period, timeframe)
}

// Trading Functions.
// --------------------------------------------------------
export async function placeOrder(symbol, qty, side) {
  const service = await getService()
  return await service.placeOrder(symbol, qty, side, 'market', { timeInForce: 'gtc' })
}

function brokerErrorMessage(error) {
  const d = error.response?.data
  if (!d) return error.message || 'Order failed'
  if (typeof d.message === 'string') return d.message
  if (Array.isArray(d.errors)) {
    return d.errors.map((e) => (typeof e === 'string' ? e : e?.message || JSON.stringify(e))).join('; ')
  }
  return error.message || 'Order failed'
}

/**
 * REST-friendly market order: structured result, Alpaca errors surfaced.
 */
export async function submitMarketOrder(symbol, rawQty, side) {
  const broker = await getBrokerAdapter()
  return await broker.submitOrder({ symbol, qty: rawQty, side, type: 'market' })
}
