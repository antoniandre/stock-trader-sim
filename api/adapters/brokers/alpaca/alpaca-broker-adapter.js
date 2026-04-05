import { BrokerAdapter } from '../base/broker-adapter.js'
import { getTradingService } from '../../../services/trading-service.js'
import { IS_SIMULATION, getTradingEnvironmentLabel } from '../../../config.js'
import { getMockAccountData } from '../../../simulation.js'

function brokerErrorMessage(error) {
  const d = error.response?.data
  if (!d) return error.message || 'Order failed'
  if (typeof d.message === 'string') return d.message
  if (Array.isArray(d.errors)) {
    return d.errors.map((e) => (typeof e === 'string' ? e : e?.message || JSON.stringify(e))).join('; ')
  }
  return error.message || 'Order failed'
}

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
      supportsCrypto: false,
      supportsOptions: false,
      supportsMarketOrders: true,
      supportsLimitOrders: false,
      supportsStopOrders: false,
      supportsFractionalShares: false,
      supportsExtendedHours: false,
      supportsStreamingOrders: false,
      notes: [
        'Current product wiring supports market orders only.',
        'Additional order types should be exposed only after backend support is implemented.'
      ]
    }
  }

  async getAccount(_context = null) {
    if (IS_SIMULATION) return getMockAccountData()
    const service = await getTradingService()
    return await service.getAccount()
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
    const sym = String(input?.symbol || '').trim().toUpperCase()
    const qty = Number(input?.qty ?? input?.quantity)
    const side = String(input?.side || '').toLowerCase()
    const type = String(input?.type || 'market').toLowerCase()

    if (!sym || !Number.isFinite(qty) || qty <= 0) {
      return { success: false, error: 'Invalid symbol or quantity' }
    }
    if (side !== 'buy' && side !== 'sell') {
      return { success: false, error: 'side must be buy or sell' }
    }
    if (type !== 'market') {
      return { success: false, error: 'Only type=market is supported' }
    }

    try {
      const service = await getTradingService()
      const order = await service.placeOrder(sym, qty, side, 'market', { timeInForce: 'gtc' })
      if (!order) {
        return { success: false, error: 'Order was not accepted (no price or broker rejection)' }
      }
      return { success: true, order }
    }
    catch (error) {
      console.error('AlpacaBrokerAdapter.submitOrder:', error.message)
      return { success: false, error: brokerErrorMessage(error) }
    }
  }

  async cancelOrder(orderId, _context = null) {
    const AlpacaClient = await import('../../../clients/alpaca-client.js')
    await AlpacaClient.cancelOrder(orderId)
    return { success: true }
  }
}
