// Trading Service Interface.
// --------------------------------------------------------
// This defines the contract that all trading service implementations must follow.
// When migrating to Trading 212 (or another provider), create a new implementation
// that matches this interface.
//
// The interface abstracts away provider-specific details and provides
// a consistent API for the rest of the application.

// Account Data.
export class TradingService {
  // Account Information.
  // --------------------------------------------------------
  /**
   * Get account information (balance, buying power, etc.).
   * @returns {Promise<Object|null>} Account data or null on error.
   */
  async getAccount() {
    throw new Error('getAccount() must be implemented by service provider')
  }

  /**
   * Get account activities/history.
   * @param {string|null} activityType - Filter by activity type (e.g., 'FILL')
   * @param {number} limit - Maximum number of activities to return
   * @returns {Promise<Array>} Array of activity objects
   */
  async getAccountActivities(activityType = null, limit = 100) {
    throw new Error('getAccountActivities() must be implemented by service provider')
  }

  // Positions.
  // --------------------------------------------------------
  /**
   * Get all open positions.
   * @returns {Promise<Array>} Array of position objects
   */
  async getPositions() {
    throw new Error('getPositions() must be implemented by service provider')
  }

  /**
   * Get position for a specific symbol.
   * @param {string} symbol - Stock symbol
   * @returns {Promise<Object|null>} Position data or null if not found
   */
  async getPosition(symbol) {
    throw new Error('getPosition() must be implemented by service provider')
  }

  // Orders.
  // --------------------------------------------------------
  /**
   * Place an order.
   * @param {string} symbol - Stock symbol
   * @param {number} quantity - Order quantity (positive for buy, negative for sell)
   * @param {string} side - 'buy' or 'sell'
   * @param {string} type - Order type ('market', 'limit', 'stop', etc.)
   * @param {Object} options - Additional order options (price, stop_price, etc.)
   * @returns {Promise<Object|null>} Order data or null on error
   */
  async placeOrder(symbol, quantity, side, type = 'market', options = {}) {
    throw new Error('placeOrder() must be implemented by service provider')
  }

  /**
   * Get order history.
   * @param {number} limit - Maximum number of orders to return
   * @returns {Promise<Object>} { success: boolean, history: Array }
   */
  async getTradingHistory(limit = 100) {
    throw new Error('getTradingHistory() must be implemented by service provider')
  }

  // Portfolio History.
  // --------------------------------------------------------
  /**
   * Get portfolio equity history over time.
   * @param {string} period - Time period ('1D', '1W', '1M', etc.)
   * @param {string} timeframe - Data granularity ('1Min', '1Hour', '1Day', etc.)
   * @returns {Promise<Object|null>} Portfolio history data or null on error
   */
  async getPortfolioHistory(period = '1D', timeframe = '1Min') {
    throw new Error('getPortfolioHistory() must be implemented by service provider')
  }

  // Market Data.
  // --------------------------------------------------------
  /**
   * Get current price for a symbol.
   * @param {string} symbol - Stock symbol
   * @returns {Promise<number|null>} Price or null on error
   */
  async getPrice(symbol) {
    throw new Error('getPrice() must be implemented by service provider')
  }

  /**
   * Get historical data (OHLCV bars) for a symbol.
   * @param {string} symbol - Stock symbol
   * @param {string} period - Time period ('1D', '1W', '1M', etc.)
   * @param {string|null} timeframe - Data granularity ('1Min', '1Hour', '1Day', etc.)
   * @returns {Promise<Object>} { symbol, period, timeframe, data: Array }
   */
  async getStockHistoricalData(symbol, period = '1D', timeframe = null) {
    throw new Error('getStockHistoricalData() must be implemented by service provider')
  }

  /**
   * Get historical data for a specific date range.
   * @param {string} symbol - Stock symbol
   * @param {string} timeframe - Data granularity
   * @param {Date|string} startDate - Start date
   * @param {Date|string} endDate - End date
   * @returns {Promise<Object>} { symbol, timeframe, data: Array }
   */
  async getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate) {
    throw new Error('getStockHistoricalDataByRange() must be implemented by service provider')
  }

  /**
   * Get all tradable stocks/instruments.
   * @returns {Promise<Array>} Array of stock/instrument objects
   */
  async getAllTradableStocks() {
    throw new Error('getAllTradableStocks() must be implemented by service provider')
  }

  /**
   * Get market status (open/closed).
   * @returns {Promise<Object>} Market status object
   */
  async getMarketStatus() {
    throw new Error('getMarketStatus() must be implemented by service provider')
  }

  /**
   * Get top movers (gainers/losers).
   * @param {string} market - Market type ('stocks', etc.)
   * @param {string} direction - 'gainers', 'losers', or 'both'
   * @param {number} top - Number of top movers to return
   * @returns {Promise<Object>} { success: boolean, data: { gainers: Array, losers: Array } }
   */
  async getTopMovers(market = 'stocks', direction = 'both', top = 10) {
    throw new Error('getTopMovers() must be implemented by service provider')
  }
}

// Export a factory function to get the appropriate service instance.
// --------------------------------------------------------
let serviceInstance = null

export async function getTradingService() {
  if (!serviceInstance) {
    // Default to Alpaca for now. Later, this can be config-driven.
    const { AlpacaTradingService } = await import('./alpaca-trading-service.js')
    serviceInstance = new AlpacaTradingService()
  }
  return serviceInstance
}

// Synchronous version for cases where service is already initialized.
export function getTradingServiceSync() {
  if (!serviceInstance) {
    throw new Error('Trading service not initialized. Call getTradingService() first.')
  }
  return serviceInstance
}

export function setTradingService(service) {
  serviceInstance = service
}

