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

# Application Mode
SIMULATION=false

# Server Configuration (optional)
PORT=3000
```

### 3. Frontend Setup

```bash
cd frontend
pnpm install
```

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
| `ALPACA_KEY` | Your Alpaca API key | Required |
| `ALPACA_SECRET` | Your Alpaca API secret | Required |
| `ALPACA_BASE_URL` | Alpaca trading API URL | `https://api.alpaca.markets` |
| `ALPACA_DATA_STREAM` | Alpaca WebSocket URL | `wss://stream.data.alpaca.markets/v2/iex` |
| `SIMULATION` | Enable simulation mode | `false` |
| `PORT` | Server port | `3000` |

### Trading Modes

#### Simulation Mode (`SIMULATION=true`)
- Uses mock data with realistic price movements
- No real money involved
- Perfect for testing and development
- Runs every 5 seconds with demo trading logic

#### Live Mode (`SIMULATION=false`)
- Connects to Alpaca WebSocket for real-time data
- Real trading capabilities
- Requires valid Alpaca API credentials
- Supports paper trading and live trading

## 📡 API Endpoints

### REST API
- `GET /api/portfolio` - Get current portfolio and trade history
- `GET /api/health` - Health check with connection status

### WebSocket Events
- `market-update` - Stock price updates
- `trade` - Trade execution notifications
- `price` - Individual price updates

## 🏛️ Project Structure

```
stock-trader-sim/
├── api/
│   ├── stockBot.js          # Main server with WebSocket and API
│   ├── package.json
│   └── .env                 # Environment configuration
├── frontend/
│   ├── src/
│   │   ├── views/
│   │   │   └── dashboard.vue # Main trading interface
│   │   ├── components/
│   │   │   ├── ticker-card.vue
│   │   │   ├── portfolio-chart.vue
│   │   │   └── trade-history.vue
│   │   └── api/
│   │       └── index.js     # API client
│   └── package.json
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
