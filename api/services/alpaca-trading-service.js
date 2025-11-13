import { TradingService } from './trading-service.js'
import * as AlpacaClient from '../clients/alpaca-client.js'
import { IS_SIMULATION, state } from '../config.js'
import { getMockAccountData, getMockAccountActivities, getMockPositions, generateMockPortfolioHistory, mockPlaceOrder } from '../simulation.js'
import { getMockPrice, getMockTradableStocks, generateMockHistoricalData, generateMockHistoricalDataByRange } from '../simulation.js'
import { getMarketStatus as getMarketStatusImpl, getPrice as getPriceImpl, getAllTradableStocks as getAllTradableStocksImpl, getStockHistoricalData as getStockHistoricalDataImpl, getStockHistoricalDataByRange as getStockHistoricalDataByRangeImpl, getTopMovers as getTopMoversImpl } from '../market-data.js'
import { getCurrencyInfo } from '../utils.js'
import { getEasternTime } from '../utils.js'

// Alpaca Trading Service Implementation.
// --------------------------------------------------------
// Implements the TradingService interface using Alpaca API.
// This bridges the abstract interface with Alpaca-specific implementation.

export class AlpacaTradingService extends TradingService {
  // Account Information.
  // --------------------------------------------------------
  async getAccount() {
    if (IS_SIMULATION) return getMockAccountData()

    try {
      const data = await AlpacaClient.getAccount()
      state.alpacaAccount = data
      return data
    }
    catch (error) {
      console.error('❌ Error fetching Alpaca account:', error.message)
      return null
    }
  }

  async getAccountActivities(activityType = null, limit = 100) {
    if (IS_SIMULATION) return getMockAccountActivities()

    try {
      const data = await AlpacaClient.getAccountActivities(activityType, limit)
      console.log(`✅ Successfully fetched ${data.length} account activities`)
      state.accountActivities = data
      return data
    }
    catch (error) {
      console.error('❌ Error fetching account activities:', error.message)
      return []
    }
  }

  // Positions.
  // --------------------------------------------------------
  async getPositions() {
    if (IS_SIMULATION) return getMockPositions()

    try {
      const data = await AlpacaClient.getPositions()
      console.log(`✅ Successfully fetched ${data.length} positions`)
      return data
    }
    catch (error) {
      console.error('❌ Error fetching positions:', error.message)
      return []
    }
  }

  async getPosition(symbol) {
    if (IS_SIMULATION) {
      const positions = await this.getPositions()
      return positions.find(p => p.symbol === symbol) || null
    }

    try {
      const data = await AlpacaClient.getPosition(symbol)
      return data
    }
    catch (error) {
      if (error.response?.status === 404) return null
      console.error(`❌ Error fetching position for ${symbol}:`, error.message)
      return null
    }
  }

  // Orders.
  // --------------------------------------------------------
  async placeOrder(symbol, quantity, side, type = 'market', options = {}) {
    if (IS_SIMULATION) {
      const price = await getPriceImpl(symbol)
      if (!price) return null
      return mockPlaceOrder(symbol, Math.abs(quantity), side, price)
    }

    try {
      const orderData = {
        symbol,
        qty: Math.abs(quantity),
        side,
        type,
        time_in_force: options.timeInForce || 'gtc',
        ...options
      }

      // Remove undefined fields.
      Object.keys(orderData).forEach(key => orderData[key] === undefined && delete orderData[key])

      const data = await AlpacaClient.createOrder(orderData)
      console.log(`✅ ${side.toUpperCase()} ${Math.abs(quantity)} ${symbol} @ ${new Date().toLocaleTimeString()}`)
      return data
    }
    catch (error) {
      console.error(`❌ Order error for ${symbol}:`, error.message)
      return null
    }
  }

  async getOrders(status = 'open', limit = 100) {
    if (IS_SIMULATION) return []

    try {
      const data = await AlpacaClient.getOrders(status, limit)
      console.log(`✅ Successfully fetched ${data.length} orders (status: ${status})`)
      return data
    }
    catch (error) {
      console.error('❌ Error fetching orders:', error.message)
      return []
    }
  }

  async getTradingHistory(limit = 100) {
    try {
      const activities = await this.getAccountActivities('FILL', limit)

      // Transform activities to match frontend expectations.
      const tradingHistory = activities.map(activity => ({
        id: activity.id,
        symbol: activity.symbol,
        side: activity.side,
        qty: parseFloat(activity.qty),
        price: parseFloat(activity.price),
        timestamp: activity.transaction_time,
        type: activity.type,
        order_id: activity.order_id
      }))

      return { success: true, history: tradingHistory }
    }
    catch (error) {
      console.error('Error fetching trading history:', error)
      return { success: false, message: 'Failed to fetch trading history.' }
    }
  }

  // Portfolio History.
  // --------------------------------------------------------
  async getPortfolioHistory(period = '1D', timeframe = '1Min') {
    if (IS_SIMULATION) {
      console.log(`🧪 [SIM] Using mock portfolio history for ${period} period with ${timeframe} timeframe`)
      return generateMockPortfolioHistory(period, timeframe)
    }

    try {
      // Validate and adjust timeframe based on Alpaca API restrictions.
      const adjustedTimeframe = this.adjustTimeframeForPeriod(period, timeframe)

      console.log(`📊 Requesting portfolio history: period=${period}, timeframe=${adjustedTimeframe}`)

      const data = await AlpacaClient.getPortfolioHistory(period, adjustedTimeframe, true)
      console.log('✅ Successfully fetched portfolio history')
      return data
    }
    catch (error) {
      console.error('❌ Error fetching portfolio history:', error.message)
      if (error.response) {
        console.error('❌ Response status:', error.response.status)
        console.error('❌ Response data:', error.response.data)
      }
      return null
    }
  }

  adjustTimeframeForPeriod(period, timeframe) {
    // According to Alpaca docs: timeframe can only be less than 1 day when period is less than 30 days.
    // For longer periods (12M, ALL), we must use 1D timeframe.
    if (period === '12M' || period === 'ALL') return '1D'

    // For 1 month, allow 1D or larger timeframes.
    if (period === '1M' && (timeframe === '1Min' || timeframe === '15Min' || timeframe === '1H')) {
      return '1D'
    }

    // For 1 day, allow any timeframe.
    if (period === '1D') return timeframe

    return timeframe
  }

  // Market Data.
  // --------------------------------------------------------
  // Note: These delegate to market-data.js functions which have complex logic.
  // The market-data.js file will be refactored to use the Alpaca client internally.
  async getPrice(symbol) {
    return await getPriceImpl(symbol)
  }

  async getStockHistoricalData(symbol, period = '1D', timeframe = null) {
    return await getStockHistoricalDataImpl(symbol, period, timeframe)
  }

  async getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate) {
    return await getStockHistoricalDataByRangeImpl(symbol, timeframe, startDate, endDate)
  }

  async getAllTradableStocks() {
    // This has complex caching logic, so delegate to existing function for now.
    // TODO: Refactor market-data.js to use Alpaca client.
    return await getAllTradableStocksImpl()
  }

  async getMarketStatus() {
    return await getMarketStatusImpl()
  }

  async getTopMovers(market = 'stocks', direction = 'both', top = 10) {
    return await getTopMoversImpl(market, direction, top)
  }
}

