import { state } from './config.js'
import { getEasternTime } from './utils.js'

// Mock Data
// --------------------------------------------------------
export const mockPrices = {
  AAPL: 175.50,
  MSFT: 420.30,
  TSLA: 245.80,
  GOOGL: 2800.00,
  AMZN: 3500.00,
  META: 380.00,
  NVDA: 950.00,
  NFLX: 650.00,
  AMD: 180.00,
  INTC: 45.00,
  ORCL: 140.00,
  CRM: 250.00,
  ADBE: 580.00,
  PYPL: 220.00,
  SQ: 180.00
}

// Popular stocks for simulation.
export const popularStocks = [
  'AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN', 'META', 'NVDA', 'NFLX',
  'AMD', 'INTC', 'ORCL', 'CRM', 'ADBE', 'PYPL', 'SQ', 'UBER',
  'LYFT', 'SPOT', 'ZM', 'SHOP', 'TWTR', 'SNAP', 'PINS', 'ROKU'
]

// Mock Account Data
// --------------------------------------------------------
export function getMockAccountData() {
  console.log('🧪 [SIM] Using mock account data')
  // Match the final portfolio value from the 1M chart data.
  return {
    id: 'mock-account',
    status: 'ACTIVE',
    currency: 'USD',
    cash: 99138.34,
    portfolio_value: 100078.87,
    buying_power: 199217.21
  }
}

export function getMockAccountActivities() {
  console.log('🧪 [SIM] Using mock trading history')
  return []
}

export function getMockPositions() {
  console.log('🧪 [SIM] Using mock positions')
  return [
    {
      symbol: 'AAPL',
      qty: '10',
      market_value: '1755.00',
      cost_basis: '1700.00',
      unrealized_pl: '55.00',
      unrealized_plpc: '0.0324',
      current_price: '175.50',
      lastday_price: '174.20',
      change_today: '1.30'
    },
    {
      symbol: 'MSFT',
      qty: '5',
      market_value: '2101.50',
      cost_basis: '2000.00',
      unrealized_pl: '101.50',
      unrealized_plpc: '0.0508',
      current_price: '420.30',
      lastday_price: '418.90',
      change_today: '1.40'
    }
  ]
}

// Mock Stock Data
// --------------------------------------------------------
export function getMockTradableStocks() {
  // In simulation, use popular stocks.
  return popularStocks.map(symbol => ({
    symbol,
    name: symbol,
    exchange: 'NASDAQ',
    status: 'active',
    tradable: true,
    currency: 'USD',
    currencySymbol: '$'
  }))
}

// Mock Price Generation
// --------------------------------------------------------
export function getMockPrice(symbol) {
  const basePrice = mockPrices[symbol]
  if (!basePrice) return 0

  const timeVariation = Math.sin(Date.now() / 10000) * 0.02
  const randomVariation = (Math.random() - 0.5) * 0.01
  const newPrice = basePrice * (1 + timeVariation + randomVariation)
  return Math.max(newPrice, basePrice * 0.95)
}

export function initializeMockPrices() {
  console.log('🧪 [SIM] Initializing mock prices for all stocks')

  // Initialize prices for all stocks in the simulation.
  for (const stock of state.allStocks) {
    const price = getMockPrice(stock.symbol)
    if (price > 0) {
      state.stockPrices[stock.symbol] = price
    }
  }

  console.log(`✅ Initialized ${Object.keys(state.stockPrices).length} stock prices`)
}

// Mock Historical Data Generation
// --------------------------------------------------------
export function generateMockHistoricalData(symbol, period) {
  const basePrice = mockPrices[symbol] || 100
  const now = Date.now()
  const { dataPoints, intervalMs } = getMockDataParams(period)

  const data = []
  let currentPrice = basePrice

  for (let i = 0; i < dataPoints; i++) {
    const timestamp = now - (dataPoints - 1 - i) * intervalMs

    // Generate realistic price movement.
    const volatility = 0.02  // 2% volatility.
    const trend = Math.sin(i / 20) * 0.005  // Small trend component.
    const randomChange = (Math.random() - 0.5) * volatility

    currentPrice = currentPrice * (1 + trend + randomChange)

    // Ensure price doesn't go below 10% of base price.
    currentPrice = Math.max(currentPrice, basePrice * 0.1)

    data.push({
      timestamp,
      price: Math.round(currentPrice * 100) / 100,
      volume: Math.floor(Math.random() * 10000) + 1000,
      open: currentPrice,
      high: currentPrice * 1.01,
      low: currentPrice * 0.99
    })
  }

  return { symbol, period, data }
}

function getMockDataParams(period) {
  switch (period) {
    case '1D':
      return {
        dataPoints: 390,  // Trading minutes in a day.
        intervalMs: 60 * 1000  // 1 minute.
      }
    case '1W':
      return {
        dataPoints: 336,  // 7 days * 48 (5-min intervals per day).
        intervalMs: 5 * 60 * 1000  // 5 minutes.
      }
    case '1M':
      return {
        dataPoints: 720,  // 30 days * 24 hours.
        intervalMs: 60 * 60 * 1000  // 1 hour.
      }
    case '3M':
      return {
        dataPoints: 90,  // 90 days.
        intervalMs: 24 * 60 * 60 * 1000  // 1 day.
      }
    default:
      return {
        dataPoints: 100,
        intervalMs: 60 * 60 * 1000  // 1 hour.
      }
  }
}

// Mock Portfolio History Generation
// --------------------------------------------------------
export function generateMockPortfolioHistory(period, timeframe) {
  // Determine data points and time intervals based on period and timeframe.
  const { dataPoints, intervalMs, baseValue } = getMockPortfolioParams(period, timeframe)

  const now = Date.now()
  const timestamps = []
  const equity = []

  // Create a deterministic seed based on the current day to ensure consistent data.
  const daysSinceEpoch = Math.floor(now / (1000 * 60 * 60 * 24))
  const seed = daysSinceEpoch * 12345 // Simple seed for consistent data.

  for (let i = 0; i < dataPoints; i++) {
    // Generate timestamps going from past to present (chronological order).
    const time = now - (dataPoints - 1 - i) * intervalMs
    timestamps.push(new Date(time).toISOString())

    // Generate realistic portfolio value curve with deterministic pseudo-random.
    const progress = i / dataPoints
    const { trend, volatility } = getGrowthPattern(period, progress, seed, i)

    const value = baseValue * (1 + trend + volatility)
    equity.push(Math.round(value * 100) / 100) // Round to 2 decimal places.
  }

  return {
    timestamp: timestamps,
    equity: equity,
    profit_loss: equity.map(val => Math.round((val - baseValue) * 100) / 100),
    profit_loss_pct: equity.map(val => Math.round(((val - baseValue) / baseValue) * 10000) / 100),
    base_value: baseValue,
    timeframe: timeframe
  }
}

function getMockPortfolioParams(period, timeframe) {
  let dataPoints, intervalMs, baseValue

  if (period === '1M') {
    // 1 month of data.
    dataPoints = timeframe === '1D' ? 30 : (timeframe === '1H' ? 720 : 1440)
    intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
    baseValue = 10000 // Start at 10k to show growth to 100k.
  }
  else if (period === '12M') {
    // 12 months (1 year) of data.
    dataPoints = timeframe === '1D' ? 365 : (timeframe === '1H' ? 8760 : 17520)
    intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
    baseValue = 5000 // Start even lower for dramatic year-long growth.
  }
  else if (period === 'ALL') {
    // All time data (simulate 2+ years).
    dataPoints = timeframe === '1D' ? 730 : (timeframe === '1H' ? 17520 : 35040)
    intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
    baseValue = 1000 // Start very low for maximum growth story.
  }
  else if (period === '1W') {
    // 1 week of data.
    dataPoints = timeframe === '1D' ? 7 : (timeframe === '1H' ? 168 : 10080)
    intervalMs = timeframe === '1D' ? 24 * 60 * 60 * 1000 : (timeframe === '1H' ? 60 * 60 * 1000 : 60 * 1000)
    baseValue = 75000
  }
  else {
    // 1 day of data (default).
    dataPoints = timeframe === '1H' ? 24 : (timeframe === '15Min' ? 96 : 1440)
    intervalMs = timeframe === '1H' ? 60 * 60 * 1000 : (timeframe === '15Min' ? 15 * 60 * 1000 : 60 * 1000)
    baseValue = 100000
  }

  return { dataPoints, intervalMs, baseValue }
}

function getGrowthPattern(period, progress, seed, i) {
  let trend, volatility

  if (period === '1M') {
    // Dramatic growth for 1-month view - from ~$10k to ~$100k.
    trend = 9.0 * progress // 900% growth trend over the month to reach ~100k.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.5 * Math.sin(progress * 12 + pseudoRandom1 * 8) * pseudoRandom2

    // Add some dramatic jumps to simulate real trading activity.
    if (i > progress * 0.6 && i < progress * 0.65) {
      trend += 2.0 // Big jump in the middle-end.
    }
  }
  else if (period === '12M') {
    // Year-long growth from $5k to $100k.
    trend = 19.0 * progress // 1900% growth over the year.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.8 * Math.sin(progress * 20 + pseudoRandom1 * 12) * pseudoRandom2

    // Add major market events.
    if (i > progress * 0.3 && i < progress * 0.35) trend += 5.0 // Q2 surge.
    if (i > progress * 0.7 && i < progress * 0.75) trend += 3.0 // Q4 rally.
  }
  else if (period === 'ALL') {
    // All-time growth from $1k to $100k+.
    trend = 99.0 * progress // 9900% growth over 2+ years.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 1.2 * Math.sin(progress * 30 + pseudoRandom1 * 15) * pseudoRandom2

    // Multiple growth phases.
    if (i > progress * 0.2 && i < progress * 0.25) trend += 10.0 // Early growth.
    if (i > progress * 0.5 && i < progress * 0.55) trend += 15.0 // Mid growth.
    if (i > progress * 0.8 && i < progress * 0.85) trend += 8.0 // Recent surge.
  }
  else if (period === '1W') {
    trend = 0.05 * progress // 5% growth trend over the week.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.02 * Math.sin(progress * 10 + pseudoRandom1 * 6) * pseudoRandom2
  }
  else {
    // 1 day - smaller movements.
    trend = 0.015 * progress // 1.5% growth trend over the day.
    const pseudoRandom1 = Math.sin(seed + i * 17) * 0.5 + 0.5
    const pseudoRandom2 = Math.sin(seed + i * 23) * 0.5 + 0.5
    volatility = 0.008 * Math.sin(progress * 8 + pseudoRandom1 * 6) * pseudoRandom2
  }

  return { trend, volatility }
}

// Mock Trading Functions
// --------------------------------------------------------
export function mockPlaceOrder(symbol, qty, side, price) {
  console.log(`🧪 [SIM] ${side.toUpperCase()} ${qty} ${symbol} @ $${price.toFixed(2)}`)
  return recordTrade(symbol, qty, side, price)
}

export function recordTrade(symbol, qty, side, price) {
  const timestamp = new Date().toISOString()

  if (!state.portfolio[symbol]) state.portfolio[symbol] = { qty: 0, history: [] }
  if (side === 'buy') state.portfolio[symbol].qty += qty
  else if (side === 'sell') state.portfolio[symbol].qty -= qty

  state.portfolio[symbol].history.push({ side, qty, price, timestamp })
  return { side, symbol, qty, price, timestamp }
}

// Simulation Trading Logic
// --------------------------------------------------------
export async function runSimulation() {
  // Update prices for all stocks in simulation.
  for (const stock of state.allStocks) {
    const price = getMockPrice(stock.symbol)
    if (price > 0) state.stockPrices[stock.symbol] = price
  }

  // Broadcast updated prices (will be handled by the caller).
  const priceUpdates = Object.entries(state.stockPrices).map(([symbol, price]) => {
    const stockData = state.allStocks.find(s => s.symbol === symbol)
    return {
      symbol,
      price,
      lastSide: 'buy',
      currency: stockData?.currency || 'USD',
      currencySymbol: stockData?.currencySymbol || '$'
    }
  })

  // Simple trading logic for demo (only for a few stocks).
  const demoStocks = ['AAPL', 'MSFT', 'TSLA']
  const trades = []

  for (const symbol of demoStocks) {
    const price = getMockPrice(symbol)
    if (!price) continue

    console.log(`📊 ${symbol}: $${price.toFixed(2)}`)

    const basePrice = mockPrices[symbol]
    const priceRatio = price / basePrice

    if (priceRatio < 0.98) {
      const trade = mockPlaceOrder(symbol, 1, 'buy', price)
      if (trade) {
        trades.push({
          type: 'trade',
          side: 'buy',
          symbol,
          qty: 1,
          price,
          timestamp: new Date().toISOString()
        })
      }
    }
    else if (priceRatio > 1.02 && state.portfolio[symbol]?.qty > 0) {
      const trade = mockPlaceOrder(symbol, 1, 'sell', price)
      if (trade) {
        trades.push({
          type: 'trade',
          side: 'sell',
          symbol,
          qty: 1,
          price,
          timestamp: new Date().toISOString()
        })
      }
    }
  }

  return { priceUpdates, trades }
}
