// Broker Adapter Interface
// --------------------------------------------------------
// Execution-broker abstraction used by the product layer.
// Keep safety, auth, and entitlement policy above this boundary.

export class BrokerAdapter {
  getIdentity() {
    throw new Error('getIdentity() must be implemented by broker adapter')
  }

  getCapabilities() {
    throw new Error('getCapabilities() must be implemented by broker adapter')
  }

  async getAccount(_context = null) {
    throw new Error('getAccount() must be implemented by broker adapter')
  }

  async getAccountActivities(_activityType = null, _limit = 100, _pageToken = null, _context = null) {
    throw new Error('getAccountActivities() must be implemented by broker adapter')
  }

  async getPositions(_context = null) {
    throw new Error('getPositions() must be implemented by broker adapter')
  }

  async getOrders(_status = 'open', _limit = 100, _context = null) {
    throw new Error('getOrders() must be implemented by broker adapter')
  }

  async getTradingHistory(_limit = 100, _pageToken = null, _context = null) {
    throw new Error('getTradingHistory() must be implemented by broker adapter')
  }

  async getPortfolioHistory(_period = '1D', _timeframe = '1Min', _context = null) {
    throw new Error('getPortfolioHistory() must be implemented by broker adapter')
  }

  async submitOrder(_input, _context = null) {
    throw new Error('submitOrder() must be implemented by broker adapter')
  }

  async cancelOrder(_orderId, _context = null) {
    throw new Error('cancelOrder() must be implemented by broker adapter')
  }
}
