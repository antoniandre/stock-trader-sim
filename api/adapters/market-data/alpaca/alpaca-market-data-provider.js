import { MarketDataProvider } from '../base/market-data-provider.js'
import { IS_SIMULATION } from '../../../config.js'
import {
  getMarketStatus,
  getPrice,
  getAllTradableStocks,
  getStockHistoricalData,
  getStockHistoricalDataByRange,
  getTopMovers
} from '../../../market-data.js'

export class AlpacaMarketDataProvider extends MarketDataProvider {
  getIdentity() {
    return {
      id: IS_SIMULATION ? 'simulation-data' : 'alpaca-data',
      label: IS_SIMULATION ? 'Simulation Market Data' : 'Alpaca Market Data',
      provider: IS_SIMULATION ? 'simulation' : 'alpaca',
      environment: IS_SIMULATION ? 'simulation' : 'broker-feed'
    }
  }

  getCapabilities() {
    return {
      supportsRealtimeQuotes: !IS_SIMULATION,
      supportsOffHoursQuotes: false,
      supportsHistoricalBars: true,
      supportsIntradayBars: true,
      supportsMovers: true,
      supportsStreamingQuotes: !IS_SIMULATION,
      delaySeconds: IS_SIMULATION ? 0 : null,
      notes: [
        'Current product market data is sourced from Alpaca-oriented logic in api/market-data.js.',
        'Off-hours quote availability depends on current plan/provider entitlements.'
      ]
    }
  }

  async getMarketStatus(_context = null) {
    return await getMarketStatus()
  }

  async getPrice(symbol, _context = null) {
    return await getPrice(symbol)
  }

  async getAllTradableStocks(_context = null) {
    return await getAllTradableStocks()
  }

  async getStockHistoricalData(symbol, period = '1D', timeframe = null, _context = null) {
    return await getStockHistoricalData(symbol, period, timeframe)
  }

  async getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate, _context = null) {
    return await getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate)
  }

  async getTopMovers(market = 'stocks', direction = 'both', top = 10, _context = null) {
    return await getTopMovers(market, direction, top)
  }
}
