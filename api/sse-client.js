import { IS_SIMULATION, state } from './config.js'
import { getAlpacaAccountActivities } from './alpaca-account.js'
import { createAlpacaSSE, disconnectAlpacaSSE as disconnectSSE } from './clients/alpaca-sse-client.js'

// Server-Sent Events for Account Updates.
// --------------------------------------------------------
// Wrapper around Alpaca SSE client that handles account-specific logic.
export async function connectAlpacaSSE(broadcastFn) {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] SSE not available in simulation mode')
    return
  }

  const handleMessage = (data) => {
    console.log('📊 Received account update:', data)

    // Broadcast account updates to frontend.
    if (broadcastFn) {
      broadcastFn({
        type: 'account-update',
        data: data,
        timestamp: new Date().toISOString()
      })
    }

    // Refresh account activities when new trades occur.
    if (data.event_type === 'trade') {
      getAlpacaAccountActivities()
    }
  }

  const handleError = (error) => {
    console.error('❌ Alpaca SSE error:', error)
    console.log('🔌 Reconnecting to SSE in 5 seconds...')
    setTimeout(() => {
      if (state.sseClient) {
        state.sseClient.close()
        state.sseClient = null
      }
      connectAlpacaSSE(broadcastFn)
    }, 5000)
    return true // Continue reconnecting
  }

  const handleOpen = () => {
    console.log('✅ Connected to Alpaca SSE stream')
  }

  state.sseClient = await createAlpacaSSE(handleMessage, handleError, handleOpen)
}

export function disconnectAlpacaSSE() {
  if (state.sseClient) {
    disconnectSSE(state.sseClient)
    state.sseClient = null
  }
}
