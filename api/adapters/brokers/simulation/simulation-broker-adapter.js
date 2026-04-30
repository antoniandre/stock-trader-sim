import { BrokerAdapter } from '../base/broker-adapter.js'
import { getTradingService } from '../../../services/trading-service.js'
import { getMockAccountData } from '../../../simulation.js'
import { normalizeBrokerError } from '../../../services/broker-error.js'

export class SimulationBrokerAdapter extends BrokerAdapter {
  getIdentity() {
    return {
      id: 'simulation',
      label: 'Simulation',
      provider: 'simulation',
      environment: 'simulation'
    }
  }

  getCapabilities() {
    return {
      supportsPaper: true,
      supportsLive: false,
      supportsStocks: true,
      supportsCrypto: false,
      supportsOptions: false,
      supportsMarketOrders: true,
      supportsLimitOrders: true,
      supportsStopOrders: true,
      supportsFractionalShares: false,
      supportsExtendedHours: false,
      supportsStreamingOrders: false,
      notes: [
        'Local simulation mode using mock prices and local portfolio state.',
        'Use as the default safe environment for learners and dry-run automation.'
      ]
    }
  }

  async getAccount(_context = null) {
    return getMockAccountData()
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
    try {
      const service = await getTradingService()
      const type = input?.type || 'market'
      const stopPx = input?.stop_price ?? input?.stopPrice
      const order = await service.placeOrder(input?.symbol, input?.qty ?? input?.quantity, input?.side, type, {
        timeInForce: input?.time_in_force || input?.timeInForce || 'gtc',
        limit_price: input?.limit_price ?? input?.limitPrice,
        stop_price: Number.isFinite(Number(stopPx)) && Number(stopPx) > 0 ? Number(stopPx) : undefined
      })
      if (!order) return { success: false, error: 'Order was not accepted (simulation rejected it)' }
      return { success: true, order }
    }
    catch (error) {
      return { success: false, error: normalizeBrokerError(error, 'Simulation order failed') }
    }
  }

  async cancelOrder(orderId, _context = null) {
    try {
      const service = await getTradingService()
      if (typeof service.cancelOrder !== 'function') {
        return { success: false, error: 'Cancel order is not available in the current simulation service yet' }
      }

      const result = await service.cancelOrder(orderId)
      if (result === false) return { success: false, error: 'Failed to cancel order' }
      return { success: true }
    }
    catch (error) {
      return { success: false, error: normalizeBrokerError(error, 'Failed to cancel order') }
    }
  }
}
