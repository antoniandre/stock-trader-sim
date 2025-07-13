import dotenv from 'dotenv'

dotenv.config()

// Configuration
// --------------------------------------------------------
export const {
  ALPACA_KEY,
  ALPACA_SECRET,
  ALPACA_BASE_URL,
  ALPACA_DATA_STREAM_URL,
  SIMULATION
} = process.env

export const IS_SIMULATION = !ALPACA_KEY || (SIMULATION === 'true')
export const ALPACA_ACCOUNT_URL = `${ALPACA_BASE_URL}/v2/account`

export const HEADERS = {
  'APCA-API-KEY-ID': ALPACA_KEY,
  'APCA-API-SECRET-KEY': ALPACA_SECRET
}

// State Management
// --------------------------------------------------------
export const state = {
  portfolio: {}, // { symbol: { qty, history: [{ side, qty, price, timestamp }] } }
  stockPrices: {}, // { symbol: price }
  allStocks: [], // Array of all tradable stocks
  wsClients: new Set(),
  alpacaWebSocket: null,
  accountActivities: [], // Real trading history from Alpaca
  alpacaAccount: null, // Account information
  sseClient: null // Server-Sent Events client for account updates
}

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
