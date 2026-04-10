import { createServer } from 'http'
import { IS_SIMULATION, ALPACA_KEY } from './config.js'
import { createRestApiRoutes } from './rest-api.js'
import { getAllTradableStocks, initializeMarketData } from './market-data.js'
import { getAlpacaAccount, getAlpacaAccountActivities } from './alpaca-account.js'
import { connectAlpacaSSE } from './sse-client.js'
import { createWebSocketServer, connectAlpacaWebSocket, runSimulationWrapper, broadcast } from './websocket-server.js'
import { initializeScreener, setOpportunityCallback } from './src/screener/screener.js'

// Server Setup.
// --------------------------------------------------------
const PORT = process.env.PORT || 3000

async function startServer() {
  // Create Express app with REST API routes.
  const app = createRestApiRoutes()

  // Create HTTP server.
  const server = createServer(app)

  // Create WebSocket server.
  const wss = createWebSocketServer(server)

  // Start server.
  server.listen(PORT, async () => {
    console.log(`🌐 API running on port ${PORT}`)
    console.log(`🔌 WebSocket server running on ws://localhost:${PORT}`)

    // Initialize stock data.
    await getAllTradableStocks()
    await initializeMarketData()

    // Initialize the smart decision-making bot's screener functionality.
    await initializeScreener()

    // Set a callback to handle detected opportunities (for now, just log them).
    setOpportunityCallback((opportunity) => {
      console.log('🚨 Screener detected opportunity:', opportunity)
      // In a real scenario, this would trigger an an action in the main trading bot.
      // For example, passing the opportunity to the day-trading-bot.
    })

    if (IS_SIMULATION) {
      console.log('🧪 Demo mode: Running simulation every 1 second')
      setInterval(runSimulationWrapper, 1000) // Update every 1 second.
    }
    else {
      console.log('⚡ Live mode: Using Alpaca WebSocket streaming')
      connectAlpacaWebSocket()

      // Initialize account data.
      console.log('📊 Initializing Alpaca account data...')
      await getAlpacaAccount()
      await getAlpacaAccountActivities()

      // Connect to SSE for real-time account updates.
      console.log('🔌 Setting up SSE for account updates...')
      connectAlpacaSSE(broadcast)
    }

    if (!ALPACA_KEY) console.log('⚠️ Using mock data - set ALPACA_KEY and ALPACA_SECRET for real data')
  })
}

// Start the server.
startServer().catch(error => {
  console.error('❌ Failed to start server:', error)
  process.exit(1)
})
