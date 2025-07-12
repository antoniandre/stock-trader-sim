import { ALPACA_BASE_URL, ALPACA_KEY, ALPACA_SECRET, IS_SIMULATION, state } from './config.js'
import { getAlpacaAccountActivities } from './rest-api.js'

// ===== Server-Sent Events for Account Updates =====
export async function connectAlpacaSSE(broadcastFn) {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] SSE not available in simulation mode')
    return
  }

  // Note: Using EventSource for SSE connection
  // This requires installing 'eventsource' package
  try {
    const EventSource = (await import('eventsource')).default

    const sseUrl = `${ALPACA_BASE_URL}/v2/events/trades`
    const headers = {
      'APCA-API-KEY-ID': ALPACA_KEY,
      'APCA-API-SECRET-KEY': ALPACA_SECRET
    }

    console.log('🔌 Connecting to Alpaca SSE for account updates...')
    state.sseClient = new EventSource(sseUrl, { headers })

    state.sseClient.onopen = () => {
      console.log('✅ Connected to Alpaca SSE stream')
    }

    state.sseClient.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('📊 Received account update:', data)

        // Broadcast account updates to frontend
        if (broadcastFn) {
          broadcastFn({
            type: 'account-update',
            data: data,
            timestamp: new Date().toISOString()
          })
        }

        // Refresh account activities when new trades occur
        if (data.event_type === 'trade') {
          getAlpacaAccountActivities()
        }
      }
      catch (error) {
        console.error('❌ Error parsing SSE message:', error)
      }
    }

    state.sseClient.onerror = (error) => {
      console.error('❌ Alpaca SSE error:', error)
      console.log('🔌 Reconnecting to SSE in 5 seconds...')
      setTimeout(() => {
        if (state.sseClient) {
          state.sseClient.close()
        }
        connectAlpacaSSE(broadcastFn)
      }, 5000)
    }
  }
  catch (error) {
    console.error('❌ Failed to connect to Alpaca SSE:', error)
    console.log('ℹ️ Install eventsource package for SSE support: npm install eventsource')
  }
}

export function disconnectAlpacaSSE() {
  if (state.sseClient) {
    console.log('🔌 Disconnecting from Alpaca SSE...')
    state.sseClient.close()
    state.sseClient = null
  }
}
