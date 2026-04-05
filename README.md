# Stock Trading Simulator

A real-time stock trading application with live market data integration using Alpaca API and WebSocket streaming.

## 🚀 Features

- **Real-time Market Data**: Live stock prices via Alpaca WebSocket streaming
- **Trading Interface**: Buy/sell orders with portfolio tracking
- **Simulation Mode**: Mock trading with realistic price movements
- **Live Mode**: Real trading with Alpaca API integration
- **WebSocket Updates**: Real-time frontend updates
- **Clean Architecture**: Modular, scalable codebase

## 🏗️ Architecture

### Backend (`api/`)
- **Express.js** server with REST API endpoints
- **WebSocket** server for real-time communication
- **Alpaca API** integration for live trading
- **State Management** with centralized data store
- **Error Handling** with graceful fallbacks

### Frontend (`frontend/`)
- **Vue 3** with Composition API
- **Tailwind CSS** for styling
- **WebSocket** client for real-time updates
- **Responsive Design** with dark theme

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Alpaca API account (for live trading)

## 🛠️ Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd stock-trader-sim
```

### 2. Backend Setup

```bash
cd api
pnpm install
```

Create `.env` file:
```env
# Alpaca API Configuration
ALPACA_KEY=your_api_key_here
ALPACA_SECRET=your_api_secret_here
ALPACA_BASE_URL=https://paper-api.alpaca.markets
ALPACA_DATA_STREAM=wss://stream.data.alpaca.markets/v2/iex

# Application Mode (optional; see Trading Modes below)
# SIMULATION=true

# Server Configuration (optional)
PORT=3000
```

**Note:** The API treats **`SIMULATION=true` *or* missing `ALPACA_KEY`** as simulation mode (mock data, no Alpaca trading). Set both keys and `SIMULATION=false` for paper/live Alpaca.

### 3. Frontend Setup

```bash
cd frontend
pnpm install
```

In **development**, Vite proxies **`/api`** to `http://127.0.0.1:3000`, so the UI can call the API on the same origin as the dev server. For **production**, set `VITE_API_BASE` and usually `VITE_WS_URL` — see `frontend/.env.example`.

### 4. Start Development

**Terminal 1 - Backend:**
```bash
cd api
pnpm dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
pnpm dev
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ALPACA_KEY` | Your Alpaca API key | Omit for simulation |
| `ALPACA_SECRET` | Your Alpaca API secret | Omit for simulation |
| `ALPACA_BASE_URL` | Alpaca trading API URL | `https://api.alpaca.markets` |
| `ALPACA_DATA_STREAM_URL` | Alpaca market data WebSocket URL | See `api/config.js` / Alpaca docs |
| `SIMULATION` | Force simulation when `true` | unset |
| `API_BEARER_TOKEN` | Bearer token required on order mutations when set | unset |
| `FEATURE_LIVE_TRADING` | Enable live trading surfaces/flows | `true` |
| `FEATURE_PAPER_TRADING` | Enable paper trading flows | `true` |
| `FEATURE_MARKET_ORDERS` | Enable market order flows | `true` |
| `FEATURE_LIMIT_ORDERS` | Enable limit order flows | `false` |
| `FEATURE_STOP_ORDERS` | Enable stop order flows | `false` |
| `FEATURE_API_ACCESS` | Enable partner/pro API surfaces | `false` |
| `FEATURE_ALERTS` | Enable alerts features | `false` |
| `FEATURE_BOTS` | Enable automation/bot features | `false` |
| `PORT` | Server port | `3000` |

### Trading Modes

#### Simulation Mode (`SIMULATION=true` **or** no `ALPACA_KEY`)
- Uses mock data with realistic price movements
- No real money involved
- Perfect for testing and development
- Demo loop runs about **every 1 second** (see `api/stockbot.js`)

#### Live Mode (`SIMULATION=false` and keys set)
- Connects to Alpaca WebSocket for real-time data
- Real trading capabilities
- Requires valid Alpaca API credentials
- Supports paper trading and live trading

## 📡 API Endpoints

### REST API
- `GET /api/portfolio` — Local/sim portfolio and trade history
- `GET /api/dashboard` — Account, positions, orders, history (Alpaca path)
- `GET /api/agent/snapshot` — Compact JSON for scripts / AI assistants
- `POST /api/orders` — Place a **market** order (`{ "symbol", "qty", "side": "buy"|"sell", "type": "market" }`)
- `GET /api/health` — Health check; includes `effectiveSimulation` (matches server logic) and `simulationReason`

### WebSocket Events
- `market-update` - Stock price updates
- `trade` - Trade execution notifications
- `price` - Individual price updates

## 🏛️ Project Structure

```
stock-trader-sim/
├── api/
│   ├── stockbot.js         # HTTP + WebSocket entry
│   ├── rest-api.js         # REST routes
│   ├── package.json
│   └── .env                # Environment configuration
├── frontend/
│   ├── src/
│   │   ├── views/          # dashboard, ticker, trading, movers, …
│   │   ├── components/
│   │   └── api/
│   │       └── index.js    # API client
│   └── package.json
├── AGENTS.md               # OpenClaw / agent backlog charter (optional)
└── README.md
```

## 🔄 Data Flow

1. **Market Data**: Alpaca WebSocket → Backend → Frontend
2. **Trading**: Frontend → Backend → Alpaca API → Portfolio Update
3. **Real-time Updates**: WebSocket broadcasts to all connected clients

## 🚨 Error Handling

- **WebSocket Disconnection**: Automatic reconnection every 5 seconds
- **API Failures**: Graceful fallback to mock data
- **Rate Limiting**: Handled with exponential backoff
- **Invalid Orders**: Proper error responses

## 🔒 Security

- Environment variables for sensitive data
- CORS configuration for development
- Input validation on all endpoints
- No hardcoded credentials

## 🧪 Testing

### Simulation Mode
Perfect for testing without real money:
```bash
# Set in .env
SIMULATION=true
```

### Live Mode Testing
Use Alpaca's paper trading environment:
```bash
# Set in .env
ALPACA_BASE_URL=https://paper-api.alpaca.markets
SIMULATION=false
```

### Feature Flags

Use feature flags to control commercialization and rollout without changing code defaults.

Example backend `.env`:

```env
API_BEARER_TOKEN=change-me
FEATURE_LIVE_TRADING=true
FEATURE_PAPER_TRADING=true
FEATURE_MARKET_ORDERS=true
FEATURE_LIMIT_ORDERS=false
FEATURE_STOP_ORDERS=false
FEATURE_API_ACCESS=false
FEATURE_ALERTS=false
FEATURE_BOTS=false
```

Current note:
- `GET /api/health` exposes `featureFlags` so the frontend and operators can inspect enabled capabilities.
- The current UI fully supports market orders; limit/stop are still intentionally disabled by default.

## 📈 Scaling Considerations

The current architecture supports scaling through:

- **Modular Design**: Easy to add new features
- **State Management**: Centralized data store
- **WebSocket Efficiency**: Real-time updates without polling
- **Error Resilience**: Graceful degradation
- **Configuration**: Environment-based settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## ⚠️ Disclaimer

This is a trading application for educational purposes. Always test thoroughly before using with real money. The authors are not responsible for any financial losses.

---

**Happy Trading! 📈**
