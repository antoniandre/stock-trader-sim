// Market Data Provider Interface
// --------------------------------------------------------
// Separate this from the execution broker so the product can mix
// Alpaca execution with another quote/bar provider later.

export class MarketDataProvider {
  getIdentity() {
    throw new Error('getIdentity() must be implemented by market-data provider')
  }

  getCapabilities() {
    throw new Error('getCapabilities() must be implemented by market-data provider')
  }

  async getMarketStatus(_context = null) {
    throw new Error('getMarketStatus() must be implemented by market-data provider')
  }

  async getPrice(_symbol, _context = null) {
    throw new Error('getPrice() must be implemented by market-data provider')
  }

  async getAllTradableStocks(_context = null) {
    throw new Error('getAllTradableStocks() must be implemented by market-data provider')
  }

  async getStockHistoricalData(_symbol, _period = '1D', _timeframe = null, _context = null) {
    throw new Error('getStockHistoricalData() must be implemented by market-data provider')
  }

  async getStockHistoricalDataByRange(_symbol, _timeframe, _startDate, _endDate, _context = null) {
    throw new Error('getStockHistoricalDataByRange() must be implemented by market-data provider')
  }

  async getTopMovers(_market = 'stocks', _direction = 'both', _top = 10, _context = null) {
    throw new Error('getTopMovers() must be implemented by market-data provider')
  }
}
