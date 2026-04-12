import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'

// Always load `api/.env` (not cwd), so `AUTH_MODE=provider` etc. apply even when
// the process is started from the repo root.
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

// Configuration
// --------------------------------------------------------
export const {
  ALPACA_KEY,
  ALPACA_SECRET,
  ALPACA_BASE_URL,
  ALPACA_API_BASE_URL,
  ALPACA_DATA_STREAM_URL,
  SIMULATION,
  API_BEARER_TOKEN,
  AUTH_MODE = 'off',
  AUTH_PROVIDER = 'mock',
  AUTH_JWT_SECRET,
  AUTH_JWT_ISSUER,
  AUTH_JWT_AUDIENCE,
  SUPABASE_URL,
  SUPABASE_JWT_SECRET,
  DEV_AUTH_USER_ID,
  DEV_AUTH_EMAIL,
  DEV_AUTH_NAME,
  DEV_AUTH_PLAN = 'pro',
  FEATURE_LIVE_TRADING = 'true',
  FEATURE_PAPER_TRADING = 'true',
  FEATURE_MARKET_ORDERS = 'true',
  FEATURE_LIMIT_ORDERS = 'false',
  FEATURE_STOP_ORDERS = 'true',
  FEATURE_API_ACCESS = 'false',
  FEATURE_ALERTS = 'false',
  FEATURE_BOTS = 'false'
} = process.env

export const IS_SIMULATION = !ALPACA_KEY || (SIMULATION === 'true')

/** For health/API: simulation vs Alpaca paper vs live endpoint (informational only). */
export function getTradingEnvironmentLabel() {
  if (IS_SIMULATION) return 'simulation'
  const base = String(ALPACA_BASE_URL || '')
  if (base.includes('paper-api')) return 'paper'
  return 'live'
}

export const HEADERS = {
  'APCA-API-KEY-ID': ALPACA_KEY,
  'APCA-API-SECRET-KEY': ALPACA_SECRET
}

if (AUTH_PROVIDER === 'supabase') {
  process.env.AUTH_JWT_ISSUER = process.env.AUTH_JWT_ISSUER || (SUPABASE_URL ? `${SUPABASE_URL}/auth/v1` : '')
  process.env.AUTH_JWT_AUDIENCE = process.env.AUTH_JWT_AUDIENCE || 'authenticated'
}

export const FEATURE_FLAGS = {
  liveTrading: FEATURE_LIVE_TRADING === 'true',
  paperTrading: FEATURE_PAPER_TRADING === 'true',
  marketOrders: FEATURE_MARKET_ORDERS === 'true',
  limitOrders: FEATURE_LIMIT_ORDERS === 'true',
  stopOrders: FEATURE_STOP_ORDERS === 'true',
  apiAccess: FEATURE_API_ACCESS === 'true',
  alerts: FEATURE_ALERTS === 'true',
  bots: FEATURE_BOTS === 'true'
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
  sseClient: null, // Server-Sent Events client for account updates
  /** Short-lived cache for `getAssets('active','crypto')` (USD-quote routing). */
  cryptoActiveAssetsCache: null
}

// Mock data is now in simulation.js
