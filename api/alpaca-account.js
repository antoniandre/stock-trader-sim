// Alpaca Account Functions - Service Layer Wrapper.
// --------------------------------------------------------
// This file now acts as a compatibility layer that delegates to the Trading Service.
// The actual implementation is in api/services/alpaca-trading-service.js
// which uses api/clients/alpaca-client.js for API calls.
//
// This structure makes it easy to migrate to Trading 212 (or another provider) by:
// 1. Creating api/services/trading212-trading-service.js
// 2. Creating api/clients/trading212-client.js
// 3. Updating the service factory in api/services/trading-service.js

import { getTradingService } from './services/trading-service.js'
import { getPrice } from './market-data.js'
import { state } from './config.js'
import { getMockAccountData } from './simulation.js'
import { getBrokerAdapter } from './services/broker-manager.js'

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

/** Cursor pagination uses `pageToken`; call service directly so broker stays thin. */
export async function getAlpacaAccountActivities(activityType = null, limit = 100, pageToken = null) {
  const service = await getService()
  return await service.getAccountActivities(activityType, limit, pageToken)
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
  const service = await getService()
  return await service.getTradingHistory(limit, pageToken)
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
