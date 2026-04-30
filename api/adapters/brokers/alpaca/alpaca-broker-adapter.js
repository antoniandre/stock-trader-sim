import { BrokerAdapter } from '../base/broker-adapter.js'
import { getTradingService } from '../../../services/trading-service.js'
import { IS_SIMULATION, getTradingEnvironmentLabel } from '../../../config.js'
import { getMockAccountData } from '../../../simulation.js'
import { getBrokerHttpErrorMeta, normalizeBrokerError } from '../../../services/broker-error.js'

export class AlpacaBrokerAdapter extends BrokerAdapter {
  getIdentity() {
    return {
      id: 'alpaca',
      label: IS_SIMULATION ? 'Simulation' : `Alpaca ${getTradingEnvironmentLabel()}`,
      provider: 'alpaca',
      environment: getTradingEnvironmentLabel()
    }
  }

  getCapabilities() {
    return {
      supportsPaper: true,
      supportsLive: !IS_SIMULATION,
      supportsStocks: true,
      supportsCrypto: true,
      supportsOptions: false,
      supportsMarketOrders: true,
      supportsLimitOrders: true,
      supportsStopOrders: true,
      supportsFractionalShares: false,
      supportsExtendedHours: false,
      supportsStreamingOrders: false,
      notes: [
        'Market and limit orders are supported.',
        'Equities: optional stop loss uses bracket orders (order_class=bracket); opening leg uses time_in_force=day.',
        'Crypto pairs (e.g. BTC/USD): simple orders only; market orders use ioc for immediate fill. Limit uses gtc or ioc; stop_limit uses gtc. Standalone stop is rejected. Bracket stops are not attached on crypto.'
      ]
    }
  }

  async getAccount(_context = null) {
    if (IS_SIMULATION) return getMockAccountData()
    const service = await getTradingService()
    return await service.getAccount()
  }

  async getAccountActivities(activityType = null, limit = 100, pageToken = null, _context = null) {
    const service = await getTradingService()
    return await service.getAccountActivities(activityType, limit, pageToken)
  }

  async getPositions(_context = null) {
    const service = await getTradingService()
    return await service.getPositions()
  }

  async getOrders(status = 'open', limit = 100, _context = null) {
    const service = await getTradingService()
    return await service.getOrders(status, limit)
  }

  async getTradingHistory(limit = 100, pageToken = null, _context = null) {
    const service = await getTradingService()
    return await service.getTradingHistory(limit, pageToken)
  }

  async getPortfolioHistory(period = '1D', timeframe = '1Min', _context = null) {
    const service = await getTradingService()
    return await service.getPortfolioHistory(period, timeframe)
  }

  async submitOrder(input, _context = null) {
    const sym = String(input?.symbol || '').trim().toUpperCase()
    const qty = Number(input?.qty ?? input?.quantity)
    const side = String(input?.side || '').toLowerCase()
    const type = String(input?.type || 'market').toLowerCase()
    const limitPrice = Number(input?.limit_price ?? input?.limitPrice)
    const timeInForce = input?.time_in_force || input?.timeInForce || 'gtc'

    if (!sym || !Number.isFinite(qty) || qty <= 0) {
      return { success: false, error: 'Invalid symbol or quantity' }
    }
    if (side !== 'buy' && side !== 'sell') {
      return { success: false, error: 'side must be buy or sell' }
    }
    if (!['market', 'limit', 'stop', 'stop_limit'].includes(type)) {
      return { success: false, error: 'Unsupported order type' }
    }
    if (type === 'limit' && (!Number.isFinite(limitPrice) || limitPrice <= 0)) {
      return { success: false, error: 'Limit price must be greater than 0 for limit orders' }
    }
    if (type === 'stop_limit' && (!Number.isFinite(limitPrice) || limitPrice <= 0)) {
      return { success: false, error: 'Limit price must be greater than 0 for stop-limit orders' }
    }
    const stopPx = input?.stop_price ?? input?.stopPrice
    if (type === 'stop' && (!Number.isFinite(Number(stopPx)) || Number(stopPx) <= 0)) {
      return { success: false, error: 'Stop orders require stop_price' }
    }
    if (type === 'stop_limit' && (!Number.isFinite(Number(stopPx)) || Number(stopPx) <= 0)) {
      return { success: false, error: 'Stop-limit orders require stop_price' }
    }

    try {
      const service = await getTradingService()
      const order = await service.placeOrder(sym, qty, side, type, {
        timeInForce,
        limit_price: (type === 'limit' || type === 'stop_limit') ? limitPrice : undefined,
        extended_hours: input.extended_hours || false,
        stop_price: Number.isFinite(Number(stopPx)) && Number(stopPx) > 0 ? Number(stopPx) : undefined
      })
      if (!order) {
        return { success: false, error: 'Order was not accepted (no price or broker rejection)' }
      }
      return { success: true, order }
    }
    catch (error) {
      const { brokerStatus, brokerCode } = getBrokerHttpErrorMeta(error)
      console.error('AlpacaBrokerAdapter.submitOrder:', error.message, brokerStatus ? `(HTTP ${brokerStatus})` : '')
      return {
        success: false,
        error: normalizeBrokerError(error, 'Order failed'),
        ...(brokerStatus != null ? { brokerStatus } : {}),
        ...(brokerCode != null ? { brokerCode } : {})
      }
    }
  }

  async cancelOrder(orderId, _context = null) {
    try {
      const AlpacaClient = await import('../../../clients/alpaca-client.js')
      await AlpacaClient.cancelOrder(orderId)
      return { success: true }
    }
    catch (error) {
      return { success: false, error: normalizeBrokerError(error, 'Failed to cancel order') }
    }
  }
}
