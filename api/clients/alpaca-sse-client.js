import { ALPACA_BASE_URL, ALPACA_KEY, ALPACA_SECRET, IS_SIMULATION, state } from '../config.js'

// Alpaca SSE (Server-Sent Events) Client.
// --------------------------------------------------------
// Handles real-time account event updates from Alpaca.
// This isolates Alpaca-specific SSE logic for easy migration.

export async function createAlpacaSSE(onMessage, onError, onOpen) {
  if (IS_SIMULATION) {
    console.log('🧪 [SIM] SSE not available in simulation mode')
    return null
  }

  try {
    const EventSource = (await import('eventsource')).default

    const sseUrl = `${ALPACA_BASE_URL}/v2/events/trades`
    const headers = {
      'APCA-API-KEY-ID': ALPACA_KEY,
      'APCA-API-SECRET-KEY': ALPACA_SECRET
    }

    console.log('🔌 Connecting to Alpaca SSE for account updates...')
    const sseClient = new EventSource(sseUrl, { headers })

    sseClient.onopen = () => {
      console.log('✅ Connected to Alpaca SSE stream')
      if (onOpen) onOpen()
    }

    sseClient.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('📊 Received account update:', data)
        if (onMessage) onMessage(data)
      }
      catch (error) {
        console.error('❌ Error parsing SSE message:', error)
      }
    }

    sseClient.onerror = (error) => {
      console.error('❌ Alpaca SSE error:', error)
      if (onError) {
        // SSE automatically reconnects, but we can handle errors
        const shouldReconnect = onError(error)
        if (shouldReconnect === false) {
          sseClient.close()
          return null
        }
      }
      // Default: reconnect after 5 seconds
      return sseClient
    }

    return sseClient
  }
  catch (error) {
    console.error('❌ Failed to connect to Alpaca SSE:', error)
    console.log('ℹ️ Install eventsource package for SSE support: npm install eventsource')
    return null
  }
}

export function disconnectAlpacaSSE(sseClient) {
  if (sseClient) {
    console.log('🔌 Disconnecting from Alpaca SSE...')
    sseClient.close()
    return true
  }
  return false
}

