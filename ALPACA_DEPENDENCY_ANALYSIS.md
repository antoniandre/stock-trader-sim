# Alpaca API Dependency Analysis

## Project Overview

This is a **real-time stock trading application** with a Vue.js frontend and Node.js/Express backend. The application provides:
- Real-time stock price updates via WebSocket streaming
- Trading interface for buying/selling stocks
- Portfolio tracking and history
- Historical market data visualization
- Market status monitoring (open/closed/premarket/afterhours)
- Top movers (gainers/losers) tracking

## Architecture Overview

### Backend Structure (`api/`)
- **Express.js** REST API server
- **WebSocket** server for real-time client communication
- **Alpaca WebSocket** client for live market data streaming
- **State Management** with centralized in-memory store
- **Simulation Mode** for testing without Alpaca credentials

### Frontend Structure (`frontend/`)
- **Vue 3** with Composition API
- **WebSocket** client for real-time updates
- **Chart Components** for price visualization
- **Trading Interface** for order placement

## Complete Alpaca API Dependencies

### 1. Configuration (`api/config.js`)
**Alpaca Environment Variables Required:**
- `ALPACA_KEY` - API key for authentication
- `ALPACA_SECRET` - API secret for authentication
- `ALPACA_BASE_URL` - Trading API base URL (defaults to paper trading)
- `ALPACA_API_BASE_URL` - Market data API base URL
- `ALPACA_DATA_STREAM_URL` - WebSocket stream URL (IEX feed only)
- `SIMULATION` - Flag to enable/disable simulation mode

**Key Point:** If `ALPACA_KEY` is missing, the system automatically falls back to simulation mode with mock data.

---

### 2. Market Data (`api/market-data.js`)
**This is the core file with extensive Alpaca dependencies.**

#### A. Market Calendar & Clock
- **`fetchMarketCalendar(startDate, endDate)`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/calendar?start=${start}&end=${end}`
  - Purpose: Get trading days for market status calculations
  - Returns: Array of trading days

- **`fetchMarketClock()`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/clock`
  - Purpose: Get real-time market status (open/closed) with timestamps
  - Used by: `getMarketStatus()`, `getStockMarketStatus()`
  - Cached: 30 seconds for performance

#### B. Stock Price Data
- **`getPrice(symbol)`**
  - **Primary:** `GET ${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/quotes/latest?feed=iex`
  - **Fallback 1:** `GET ${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/trades/latest?feed=iex`
  - **Fallback 2:** `GET ${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars/latest?timeframe=1Day&feed=iex`
  - Purpose: Get current stock price with multiple fallback strategies
  - **Critical:** Uses IEX feed only (free tier, as per project requirements)

- **`initializeStockPrices()`**
  - Fetches initial prices for popular stocks (AAPL, MSFT, TSLA, etc.)
  - Uses `getPrice()` for each stock

#### C. Stock List
- **`getAllTradableStocks()`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/assets?status=active&tradable=true&asset_class=us_equity`
  - Purpose: Get all tradable US equity stocks
  - Filters: Excludes OTC stocks, inactive stocks, non-tradable assets
  - Cached: In `state.allStocks` for performance

#### D. Historical Data (Heavily Alpaca-Dependent)
- **`getStockHistoricalData(symbol, period, timeframe)`**
  - Endpoint: `GET ${ALPACA_API_BASE_URL}/v2/stocks/${symbol}/bars?timeframe=${tf}&limit=${limit}&start=${start}&end=${end}&feed=iex`
  - **Features:**
    - Pagination support (handles `next_page_token` for >10,000 bars)
    - Multiple timeframe fallbacks (1Min → 1Hour → 1Day)
    - Smart date range calculation to maximize historical coverage
    - Data validation and stale data detection
    - Uses **IEX feed only** (free tier)
  - **Limits:**
    - Maximum 10,000 bars per request
    - Automatically paginates to fetch more historical data
  - **Data Bridging:** Can bridge historical data with current real-time price

- **`getStockHistoricalDataProgressive(symbol, period, timeframe)`**
  - Same endpoint as above but with progressive loading strategy
  - Phase 1: Fetch recent data for immediate chart display
  - Phase 2: Load full historical data in background

- **`getStockHistoricalDataByRange(symbol, timeframe, startDate, endDate)`**
  - Same endpoint with custom date range
  - Used for dynamic chart loading when users pan/zoom

- **`fetchStockTrend(symbol, points)`**
  - Uses `getStockHistoricalData()` with multiple fallback timeframes
  - Purpose: Get recent price trend for mini charts
  - Cached: 5 minutes

#### E. Market Status
- **`getMarketStatus()`**
  - Primary: Uses `fetchMarketClock()` (Alpaca `/v2/clock` endpoint)
  - Fallback: Local time calculation if Alpaca unavailable
  - Returns: `{ status, message, nextOpen, nextClose, timestamp }`

- **`getStockMarketStatus(stock)`**
  - Priority logic:
    1. Stock status (inactive stocks always closed)
    2. Stock tradable flag (non-tradable always closed)
    3. Global market status from Alpaca (`getMarketStatus()`)
    4. Exchange-specific rules (US exchanges use Alpaca status)

#### F. Top Movers
- **`getTopMovers(market, direction, top)`**
  - Endpoint: `GET ${ALPACA_API_BASE_URL}/v1beta1/screener/${market}/movers?top=${top}`
  - Returns: Gainers and losers with volume analysis
  - Fallback: If no recent data, uses historical data from popular stocks

#### G. Price Polling (Fallback Mechanism)
- **`startPricePolling(subscribedStocks, broadcast)`**
  - **Only runs when WebSocket is disconnected**
  - Polls `getPrice()` for subscribed stocks at intervals:
    - Market open: Every 1 second
    - Premarket/Afterhours: Every 5 seconds
    - Closed/Overnight: Every 30 seconds
  - Purpose: Fallback when Alpaca WebSocket is unavailable

---

### 3. Account & Trading (`api/alpaca-account.js`)
**All account operations depend on Alpaca API.**

#### A. Account Information
- **`getAlpacaAccount()`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/account`
  - Returns: Account balance, buying power, portfolio value
  - Cached: In `state.alpacaAccount`

- **`getAlpacaAccountActivities(activityType, limit)`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/account/activities[/${activityType}]?limit=${limit}&direction=desc`
  - Purpose: Get account activity history (trades, dividends, etc.)
  - Cached: In `state.accountActivities`

- **`getAlpacaPositions()`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/positions`
  - Returns: Current open positions with P&L

- **`getAlpacaTradingHistory(limit)`**
  - Uses `getAlpacaAccountActivities('FILL', limit)` to get trade fills
  - Transforms activities into trading history format

#### B. Portfolio History
- **`getAlpacaPortfolioHistory(period, timeframe)`**
  - Endpoint: `GET ${ALPACA_BASE_URL}/v2/account/portfolio/history?period=${period}&timeframe=${timeframe}&extended_hours=true`
  - **Restrictions:**
    - Timeframe must be `1D` or larger when period >= 30 days
    - Automatically adjusts timeframe based on period
  - Returns: Portfolio equity, profit/loss over time

#### C. Order Placement
- **`placeOrder(symbol, qty, side)`**
  - Endpoint: `POST ${ALPACA_BASE_URL}/v2/orders`
  - Body: `{ symbol, qty, side, type: 'market', time_in_force: 'gtc' }`
  - **Critical:** This places real market orders!
  - Used by: Trading interface when users buy/sell

---

### 4. WebSocket Streaming (`api/websocket-server.js`)
**Real-time market data via Alpaca WebSocket.**

#### A. Alpaca WebSocket Connection
- **`connectAlpacaWebSocket()`**
  - URL: `ALPACA_DATA_STREAM_URL` (IEX feed: `wss://stream.data.alpaca.markets/v2/iex`)
  - Authentication: Sends `{ action: 'auth', key: ALPACA_KEY, secret: ALPACA_SECRET }`
  - **Message Types Handled:**
    - `t` (trade): Real transaction prices (always trusted)
    - `q` (quote): Bid/ask quotes (validated against recent trades)
    - `success` (auth confirmation): Enables subscriptions
    - `error`: Handles connection limits, auth failures

- **Subscription Management**
  - Subscribes to trades and quotes: `{ action: 'subscribe', trades: [symbols], quotes: [symbols] }`
  - Unsubscribes: `{ action: 'unsubscribe', trades: [symbols], quotes: [symbols] }`
  - **Smart Price Updates:** Validates quotes against recent trades to prevent stale data

#### B. Price Polling Fallback
- If WebSocket disconnects, automatically falls back to price polling
- If WebSocket reconnects, stops price polling

#### C. Market Status Broadcasting
- Monitors market status every 2 minutes
- Broadcasts status changes to all WebSocket clients
- Uses `getMarketStatus()` (which depends on Alpaca clock API)

---

### 5. Server-Sent Events (`api/sse-client.js`)
**Real-time account updates.**

- **`connectAlpacaSSE(broadcastFn)`**
  - URL: `GET ${ALPACA_BASE_URL}/v2/events/trades`
  - Headers: Alpaca authentication headers
  - Purpose: Get real-time account event notifications (trades, fills)
  - **Note:** Requires `eventsource` package
  - On trade events: Automatically refreshes account activities

---

### 6. REST API Routes (`api/rest-api.js`)
**All endpoints that expose Alpaca data to frontend.**

#### Account & Portfolio Endpoints
- `GET /api/account` → `getAlpacaAccount()`
- `GET /api/account/activities` → `getAlpacaAccountActivities()`
- `GET /api/account/portfolio/history` → `getAlpacaPortfolioHistory()`
- `GET /api/portfolio/history` → `getAlpacaPortfolioHistory()` (duplicate)
- `GET /api/trading-history` → `getAlpacaTradingHistory()`
- `GET /api/positions` → `getAlpacaPositions()`

#### Market Data Endpoints
- `GET /api/stocks` → `getAllTradableStocks()` + `getPrice()` for each
- `GET /api/stocks/:symbol` → `getAllTradableStocks()` + `getPrice()` + `getStockMarketStatus()`
- `GET /api/stocks/:symbol/price` → `getPrice()`
- `GET /api/stocks/:symbol/history` → `getStockHistoricalData()` or `getStockHistoricalDataProgressive()`
- `GET /api/stocks/:symbol/history/range` → `getStockHistoricalDataByRange()`
- `GET /api/stocks/:symbol/trend` → `fetchStockTrend()`
- `POST /api/stocks/trends/batch` → Batch `getStockHistoricalData()` for multiple symbols
- `GET /api/movers` → `getTopMovers()`
- `GET /api/market-status` → `getMarketStatus()`

#### Trading Endpoints
- `POST /api/trade` → `placeOrder()` (places real Alpaca orders!)

#### Health Check
- `GET /api/health` → Reports Alpaca connection status (WebSocket, SSE)

---

### 7. Server Initialization (`api/stockbot.js`)
**Main server setup and Alpaca initialization.**

- Initializes market data on startup:
  - `getAllTradableStocks()` → Alpaca assets API
  - `initializeMarketData()` → Alpaca calendar + clock
- If not simulation mode:
  - `connectAlpacaWebSocket()` → Alpaca data stream
  - `getAlpacaAccount()` → Alpaca account API
  - `getAlpacaAccountActivities()` → Alpaca activities API
  - `connectAlpacaSSE()` → Alpaca events stream

---

## Frontend Dependencies (`frontend/src/`)

### API Client (`frontend/src/api/index.js`)
All frontend functions call backend REST endpoints, which in turn call Alpaca:

- `fetchAccount()` → Backend `/api/account` → Alpaca `/v2/account`
- `fetchPortfolio()` → Backend `/api/portfolio` → Uses Alpaca data
- `fetchTradingHistory()` → Backend `/api/trading-history` → Alpaca activities API
- `fetchPortfolioHistory()` → Backend `/api/portfolio/history` → Alpaca portfolio history API
- `fetchPositions()` → Backend `/api/positions` → Alpaca positions API
- `fetchAllStocks()` → Backend `/api/stocks` → Alpaca assets + price APIs
- `fetchStock()` → Backend `/api/stocks/:symbol` → Alpaca assets + price APIs
- `fetchStockPrice()` → Backend `/api/stocks/:symbol/price` → Alpaca price API
- `fetchStockHistory()` → Backend `/api/stocks/:symbol/history` → Alpaca bars API
- `fetchTopMovers()` → Backend `/api/movers` → Alpaca screener API
- `fetchStockTrend()` → Backend `/api/stocks/:symbol/trend` → Alpaca bars API

### WebSocket Client (`frontend/src/composables/web-socket.js`)
- Connects to backend WebSocket server (`ws://localhost:3000`)
- Receives real-time updates that originate from Alpaca WebSocket:
  - `price` updates (from Alpaca trades/quotes)
  - `market-status` updates (from Alpaca clock)
  - `trade` notifications (from Alpaca SSE)
  - `account-update` notifications (from Alpaca SSE)

---

## Critical Alpaca Dependencies Summary

### Core Dependencies (Cannot Function Without Alpaca)
1. **Stock Price Data** - All price displays depend on Alpaca
2. **Historical Data** - All charts depend on Alpaca bars API
3. **Market Status** - Market open/closed status from Alpaca clock
4. **Account Information** - Portfolio value, buying power, balance
5. **Trading** - Order placement requires Alpaca trading API
6. **Real-time Updates** - WebSocket streaming requires Alpaca data stream

### Optional Dependencies (Have Fallbacks)
1. **Market Calendar** - Falls back to local calculation
2. **Top Movers** - Falls back to historical data from popular stocks

### Simulation Mode Fallbacks
When `IS_SIMULATION === true` or `ALPACA_KEY` is missing:
- All Alpaca API calls are skipped
- Mock data is used from `api/simulation.js`
- WebSocket uses simulated price updates
- Trading is simulated (no real orders)

---

## IEX Feed Restriction

**Important:** The project is configured to use **IEX feed only** (free tier):
- All historical data requests include `feed=iex` parameter
- WebSocket connects to IEX stream: `wss://stream.data.alpaca.markets/v2/iex`
- This means:
  - ✅ Free tier compatible
  - ❌ Data may have slight delays (15-20 minutes for some data)
  - ❌ Not real-time SIP data

---

## Data Flow Diagrams

### Real-time Price Updates
```
Alpaca WebSocket (IEX feed)
    ↓
websocket-server.js (handleAlpacaMessage)
    ↓
Broadcast to backend WebSocket clients
    ↓
Frontend WebSocket composable
    ↓
Vue components (ticker-card, price-chart, etc.)
```

### Historical Data Requests
```
Frontend (ticker.vue, dashboard.vue)
    ↓
fetchStockHistory() API call
    ↓
Backend REST endpoint /api/stocks/:symbol/history
    ↓
getStockHistoricalData() in market-data.js
    ↓
Alpaca API: GET /v2/stocks/:symbol/bars?feed=iex
    ↓
Response with pagination
    ↓
Back to frontend for chart rendering
```

### Trading Flow
```
Frontend Trading Interface
    ↓
POST /api/trade
    ↓
placeOrder() in alpaca-account.js
    ↓
Alpaca API: POST /v2/orders (REAL ORDER!)
    ↓
Alpaca SSE: Account update event
    ↓
Frontend: Refresh account/portfolio data
```

---

## Rate Limiting & Error Handling

### Rate Limit Management
- Price polling respects market status (slower polling when closed)
- Historical data pagination with delays between requests
- Trend data caching (5 minutes) to reduce API calls
- Batch trend endpoint processes stocks in parallel but respects API limits

### Error Handling
- All Alpaca calls wrapped in try/catch
- Falls back to mock data in simulation mode
- WebSocket auto-reconnects (max 5 attempts)
- Price polling activates if WebSocket fails
- Graceful degradation when Alpaca unavailable

---

## Summary

**Total Alpaca API Endpoints Used:**
1. `/v2/calendar` - Market calendar
2. `/v2/clock` - Market clock
3. `/v2/assets` - Stock list
4. `/v2/stocks/:symbol/quotes/latest` - Real-time quotes
5. `/v2/stocks/:symbol/trades/latest` - Real-time trades
6. `/v2/stocks/:symbol/bars` - Historical data (with pagination)
7. `/v1beta1/screener/:market/movers` - Top movers
8. `/v2/account` - Account info
9. `/v2/account/activities` - Account activities
10. `/v2/positions` - Positions
11. `/v2/account/portfolio/history` - Portfolio history
12. `/v2/orders` - Order placement (POST)
13. `/v2/events/trades` - Account events (SSE)
14. `wss://stream.data.alpaca.markets/v2/iex` - WebSocket stream

**Critical Files with Alpaca Dependencies:**
- `api/config.js` - Configuration
- `api/market-data.js` - **HEAVY dependency** (market data, prices, historical data)
- `api/alpaca-account.js` - Account and trading
- `api/websocket-server.js` - WebSocket streaming
- `api/sse-client.js` - Account events
- `api/rest-api.js` - All REST endpoints
- `api/stockbot.js` - Server initialization

The entire application is **heavily dependent on Alpaca API** for live market data, trading, and account management. Without Alpaca credentials, the system falls back to simulation mode with mock data.

