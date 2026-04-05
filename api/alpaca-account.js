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

// Lazy-load service instance.
let serviceInstance = null

async function getService() {
  if (!serviceInstance) serviceInstance = await getTradingService()
  return serviceInstance
}

// Account Functions.
// --------------------------------------------------------
export async function getAlpacaAccount() {
  if (IS_SIMULATION) return getMockAccountData()
  const service = await getService()
  const account = await service.getAccount()
  if (account) state.alpacaAccount = account
  return account
}

export async function getAlpacaAccountActivities(activityType = null, limit = 100) {
  const service = await getService()
  return await service.getAccountActivities(activityType, limit)
}

export async function getAlpacaPositions() {
  const service = await getService()
  return await service.getPositions()
}

export async function getAlpacaOrders(status = 'open', limit = 100) {
  const service = await getService()
  return await service.getOrders(status, limit)
}

export async function getAlpacaTradingHistory(limit = 100) {
  const service = await getService()
  return await service.getTradingHistory(limit)
}

export async function getAlpacaPortfolioHistory(period = '1D', timeframe = '1Min') {
  const service = await getService()
  return await service.getPortfolioHistory(period, timeframe)
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
  const sym = String(symbol || '').trim().toUpperCase()
  const qty = Number(rawQty)
  if (!sym || !Number.isFinite(qty) || qty <= 0) {
    return { success: false, error: 'Invalid symbol or quantity' }
  }
  const s = String(side || '').toLowerCase()
  if (s !== 'buy' && s !== 'sell') {
    return { success: false, error: 'side must be buy or sell' }
  }

  try {
    const service = await getService()
    const order = await service.placeOrder(sym, qty, s, 'market', { timeInForce: 'gtc' })
    if (!order) {
      return { success: false, error: 'Order was not accepted (no price or broker rejection)' }
    }
    return { success: true, order }
  }
  catch (error) {
    console.error('submitMarketOrder:', error.message)
    return { success: false, error: brokerErrorMessage(error) }
  }
}
