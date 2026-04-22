import { createServer } from 'http'
import { IS_SIMULATION, ALPACA_KEY } from './config.js'
import { createRestApiRoutes } from './rest-api.js'
import { getAllTradableStocks, initializeMarketData } from './market-data.js'
import { getAlpacaAccount, getAlpacaAccountActivities } from './alpaca-account.js'
import { connectAlpacaSSE } from './sse-client.js'
import { createWebSocketServer, connectAlpacaWebSocket, runSimulationWrapper, broadcast } from './websocket-server.js'
import { initializeScreener, setOpportunityCallback } from './src/screener/screener.js'
import { seedDailyLossesFromAlpaca } from './services/risk-management.js'
import { getBrokerAdapter } from './services/broker-manager.js'

// Server Setup.
// --------------------------------------------------------
const PORT = process.env.PORT || 3000

// EOD Force-Close Scheduler.
// --------------------------------------------------------
// Fires a market sell for every open equity position at 19:50 UTC (3:50 PM ET).
// This guarantees positions are flat before the 4:00 PM ET close even if the
// frontend is unreachable or the decision loop stalls.
//
// Idempotent: if there are no open positions the call is a cheap no-op.
// The 19:50–19:55 UTC window (5 min wide) means the interval fires at most once
// per trading day while we're in that window; subsequent ticks within the window
// find no open positions and exit silently.

let eodCloseFiredForDate = null  // YYYY-MM-DD of last successful EOD close

async function closeOpenPositionsForEOD() {
  const today = new Date().toISOString().slice(0, 10)
  if (eodCloseFiredForDate === today) return  // already ran today

  let positions = []
  try {
    const broker = await getBrokerAdapter()
    const raw = await broker.getPositions()
    positions = Array.isArray(raw) ? raw : []
  }
  catch (err) {
    console.error('EOD close: failed to fetch positions —', err.message)
    return
  }

  // Only close equity positions (crypto trades 24/7 and doesn't need EOD close).
  const equityPositions = positions.filter(p => !String(p.symbol || '').includes('/') && Number(p.qty) > 0)
  if (!equityPositions.length) {
    eodCloseFiredForDate = today
    return
  }

  console.log(`🔔 EOD force-close: ${equityPositions.length} open equity position(s) at 19:50 UTC`)
  const broker = await getBrokerAdapter()

  const results = await Promise.allSettled(
    equityPositions.map(async (pos) => {
      const sym = String(pos.symbol)
      const qty = Number(pos.qty)
      try {
        const result = await broker.submitOrder({ symbol: sym, qty, side: 'sell', type: 'market', time_in_force: 'day' })
        if (result.success) {
          console.log(`✅ EOD close: sold ${qty} ${sym}`)
          broadcast({ type: 'eod-close', symbol: sym, qty, timestamp: new Date().toISOString() })
        }
        else {
          console.error(`❌ EOD close failed for ${sym}: ${result.error}`)
        }
        return result
      }
      catch (err) {
        console.error(`❌ EOD close exception for ${sym}:`, err.message)
        throw err
      }
    })
  )

  const allOk = results.every(r => r.status === 'fulfilled' && r.value?.success)
  if (allOk) eodCloseFiredForDate = today
}

function startEodScheduler() {
  // Check once per minute; fire when UTC time is 19:50–19:54.
  setInterval(() => {
    const now = new Date()
    const utcH = now.getUTCHours()
    const utcM = now.getUTCMinutes()
    if (utcH === 19 && utcM >= 50 && utcM < 55) {
      closeOpenPositionsForEOD().catch(err => console.error('EOD scheduler error:', err.message))
    }
  }, 60_000)
}

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

      // Seed dailyLosses from today's Alpaca equity delta so a cold restart doesn't
      // allow trading past the daily-loss limit if losses occurred earlier today.
      seedDailyLossesFromAlpaca()

      // Start the EOD force-close scheduler (fires at 19:50 UTC each trading day).
      startEodScheduler()
      console.log('🕒 EOD force-close scheduler started (fires at 19:50 UTC)')

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
