# 🚀 Stock Trader Simulation

A real-time stock trading simulation app with live market data integration and a beautiful Vue.js dashboard.

## 📁 Project Structure

```
stock-trader-sim/
├── api/                 # Node.js backend (trading bot + REST API)
│   ├── stockBot.js     # Main trading logic with Alpaca integration
│   ├── package.json    # Backend dependencies
│   └── .env           # Environment configuration
└── frontend/           # Vue 3 frontend dashboard
    ├── src/
    │   ├── views/Dashboard.vue
    │   ├── components/TickerCard.vue
    │   ├── components/PortfolioChart.vue
    │   └── api/index.js
    └── package.json    # Frontend dependencies
```

## 🛠️ Prerequisites

- **Node.js** >= 18
- **pnpm** package manager
- **Alpaca API credentials** (optional - app works with mock data)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Backend
cd api
pnpm install

# Frontend
cd ../frontend
pnpm install
```

### 2. Configure Environment (Optional)

For real market data, get free API credentials from [Alpaca Markets](https://alpaca.markets/):

```bash
cd api
cp .env.example .env
# Edit .env with your Alpaca credentials
```

**Note:** The app works perfectly with mock data if you don't have API credentials!

### 3. Start the Application

```bash
# Terminal 1: Start backend API
cd api
pnpm dev

# Terminal 2: Start frontend dashboard
cd frontend
pnpm dev
```

### 4. Open the Dashboard

Visit [http://localhost:5173](http://localhost:5173) to see your trading dashboard! 🎉

## 🎯 Features

### Backend (Node.js)
- **Real-time stock data** from Alpaca Markets API
- **Automated trading bot** with configurable strategies
- **WebSocket streaming** for live price updates
- **REST API** for dashboard integration
- **Simulation mode** with mock data
- **Portfolio tracking** and trade history

### Frontend (Vue 3)
- **Real-time dashboard** with live updates
- **Stock ticker cards** showing current prices
- **Interactive charts** using Chart.js
- **Responsive design** with TailwindCSS
- **Error handling** and loading states

## 🔧 Configuration

### Trading Strategy

Edit `api/stockBot.js` to customize your trading strategy:

```javascript
const watchlist = ['AAPL', 'MSFT', 'TSLA']  // Stocks to monitor
const priceThreshold = 200                  // Buy below this price
const intervalMs = 60_000                   // Check every minute
```

### Environment Variables

```bash
# api/.env
ALPACA_KEY=your_key                    # Alpaca API key
ALPACA_SECRET=your_secret              # Alpaca API secret
ALPACA_BASE_URL=https://paper-api.alpaca.markets
ALPACA_DATA_STREAM=wss://stream.data.alpaca.markets/v2/iex
SIMULATION=true                        # Enable simulation mode
```

## 🐛 Troubleshooting

### Backend Issues

1. **Port 3000 already in use:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **API credentials not working:**
   - The app automatically falls back to mock data
   - Check your Alpaca API credentials
   - Ensure you're using paper trading endpoints

3. **WebSocket connection issues:**
   - Normal if no API credentials are set
   - Check network connectivity
   - Verify Alpaca stream URL

### Frontend Issues

1. **Port 5173 already in use:**
   ```bash
   lsof -ti:5173 | xargs kill -9
   ```

2. **Import errors:**
   - Ensure all dependencies are installed: `pnpm install`
   - Check that Vite config has proper path aliases

3. **Chart not displaying:**
   - Verify Chart.js and vue-chartjs are installed
   - Check browser console for errors

## 📊 API Endpoints

- `GET /health` - Health check
- `GET /sim/portfolio` - Portfolio data and trade history

## 🎨 Customization

### Adding New Stocks

1. Update `watchlist` in `api/stockBot.js`
2. Add mock prices in `mockPrices` object
3. Restart the backend

### Styling

The frontend uses TailwindCSS. Customize styles in:
- `frontend/src/index.css`
- Component template classes

### Trading Logic

Modify the trading strategy in `api/stockBot.js`:
- Change `priceThreshold` for different buy/sell triggers
- Adjust `intervalMs` for different polling frequencies
- Add new technical indicators

## 🔒 Security Notes

- Never commit your `.env` file with real API credentials
- Use paper trading for testing
- The app includes CORS headers for development

## 🚀 Next Steps

1. **Add more stocks** to your watchlist
2. **Implement advanced trading strategies** (moving averages, RSI, etc.)
3. **Add user authentication** and multiple portfolios
4. **Create mobile app** using the same API
5. **Add real-time notifications** for trades
6. **Implement backtesting** for strategy validation

## 📝 License

MIT License - feel free to use this for learning and personal projects!

---

**Happy Trading! 📈**
