import dotenv from 'dotenv'

dotenv.config()

// Configuration
// --------------------------------------------------------
export const {
  ALPACA_KEY,
  ALPACA_SECRET,
  ALPACA_BASE_URL,
  ALPACA_API_BASE_URL,
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

// Mock data is now in simulation.js
