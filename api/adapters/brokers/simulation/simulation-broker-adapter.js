import { BrokerAdapter } from '../base/broker-adapter.js'
import { getTradingService } from '../../../services/trading-service.js'
import { getMockAccountData } from '../../../simulation.js'

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
      supportsStopOrders: false,
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

  async getAccountActivities(activityType = null, limit = 100, _context = null) {
    const service = await getTradingService()
    return await service.getAccountActivities(activityType, limit)
  }

  async getPositions(_context = null) {
    const service = await getTradingService()
    return await service.getPositions()
  }

  async getOrders(status = 'open', limit = 100, _context = null) {
    const service = await getTradingService()
    return await service.getOrders(status, limit)
  }

  async getTradingHistory(limit = 100, _context = null) {
    const service = await getTradingService()
    return await service.getTradingHistory(limit)
  }

  async getPortfolioHistory(period = '1D', timeframe = '1Min', _context = null) {
    const service = await getTradingService()
    return await service.getPortfolioHistory(period, timeframe)
  }

  async submitOrder(input, _context = null) {
    const service = await getTradingService()
    const type = input?.type || 'market'
    const order = await service.placeOrder(input?.symbol, input?.qty ?? input?.quantity, input?.side, type, {
      timeInForce: input?.time_in_force || input?.timeInForce || 'gtc',
      limit_price: input?.limit_price ?? input?.limitPrice
    })
    if (!order) return { success: false, error: 'Order was not accepted (simulation rejected it)' }
    return { success: true, order }
  }

  async cancelOrder(_orderId, _context = null) {
    return { success: false, error: 'Cancel order is not implemented for simulation mode yet' }
  }
}
