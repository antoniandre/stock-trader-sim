import WebSocket from 'ws'
import { ALPACA_DATA_STREAM_URL, ALPACA_KEY, ALPACA_SECRET, IS_SIMULATION, state } from '../config.js'

// Alpaca WebSocket Client.
// --------------------------------------------------------
// Handles real-time market data streaming from Alpaca.
// This isolates Alpaca-specific WebSocket logic for easy migration.

export function createAlpacaWebSocket(onMessage, onAuthenticated, onError, onClose) {
  if (IS_SIMULATION) return null

  try {
    console.log('🔌 Connecting to Alpaca WebSocket stream...')
    const ws = new WebSocket(ALPACA_DATA_STREAM_URL)

    ws.on('open', () => {
      console.log('✅ Connected to Alpaca WebSocket stream')
      const authMessage = { action: 'auth', key: ALPACA_KEY, secret: ALPACA_SECRET }
      console.log('🔑 Sending authentication message...')
      ws.send(JSON.stringify(authMessage))
    })

    ws.on('message', (data) => {
      try {
        const parsed = JSON.parse(data)
        const messages = Array.isArray(parsed) ? parsed : [parsed]

        if (messages.length > 0) {
          const counts = {}
          for (const m of messages) {
            const key = m.T != null ? String(m.T) : (m.msg != null ? 'success' : 'other')
            counts[key] = (counts[key] || 0) + 1
          }
          const summary = Object.keys(counts)
            .sort()
            .map(k => `${k}:${counts[k]}`)
            .join(' ')
          console.log(`📨 Alpaca stream batch: ${messages.length} [${summary}] → fanout to app (quotes/trades/bars)`)
          for (const message of messages) {
            handleAlpacaMessage(message, onMessage, onAuthenticated)
          }
        }
      }
      catch (error) {
        console.error('❌ Error parsing WebSocket message:', error)
        console.error('Raw message:', data.toString())
      }
    })

    ws.on('error', (error) => {
      console.error('❌ Alpaca WebSocket error:', error)
      if (onError) onError(error)
    })

    ws.on('close', (code, reason) => {
      console.log(`🔌 Alpaca WebSocket disconnected (code: ${code})`)
      if (onClose) onClose(code, reason)
    })

    return ws
  }
  catch (error) {
    console.error('❌ Failed to create Alpaca WebSocket:', error)
    return null
  }
}

// Handle Alpaca-specific message format.
// Alpaca uses: T='t' for trades, T='q' for quotes, T='success' for auth, T='error' for errors.
function handleAlpacaMessage(message, onMessage, onAuthenticated) {
  if (message.T === 'success' && message.msg === 'authenticated') {
    console.log('✅ Authenticated with Alpaca WebSocket')
    if (onAuthenticated) onAuthenticated()
    return
  }

  if (message.T === 't') {
    // Trade message: { T: 't', S: symbol, p: price, ... }
    const symbol = message.S
    const price = message.p
    if (onMessage) onMessage({ type: 'trade', symbol, price, data: message })
    return
  }

  if (message.T === 'q') {
    // Quote message: { T: 'q', S: symbol, ap: askPrice, bp: bidPrice, ... }
    const symbol = message.S
    const askPrice = message.ap
    const bidPrice = message.bp
    const price = askPrice || bidPrice
    if (price > 0 && onMessage) {
      onMessage({ type: 'quote', symbol, price, askPrice, bidPrice, data: message })
    }
    return
  }

  if (message.T === 'b') {
    const symbol = message.S
    const price = message.c
    if (onMessage && symbol && price > 0) {
      onMessage({ type: 'bar', symbol, price, data: message })
    }
    return
  }

  if (message.T === 'error') {
    console.error(`❌ Alpaca WebSocket error: ${message.code} - ${message.msg}`)

    // Pass error to message handler so it can decide on retry logic.
    if (onMessage) {
      if (message.code === 406) {
        onMessage({ retryAfter: 60000, code: message.code, message: message.msg })
        return
      }

      if (message.code === 401) {
        onMessage({ retryAfter: null, code: message.code, message: message.msg })
        return
      }

      onMessage({ retryAfter: null, code: message.code, message: message.msg })
    }
    return
  }

  if (message.T && message.T !== 't' && message.T !== 'q' && message.T !== 'b' && message.T !== 'success' && message.T !== 'error') {
    console.log(`🔍 Unknown Alpaca message type: ${message.T}`, message)
  }
}

// Send subscription message to Alpaca WebSocket.
export function subscribeToSymbols(ws, symbols, { barSymbols } = {}) {
  if (!ws || ws.readyState !== WebSocket.OPEN) {
    console.warn('⚠️ Cannot subscribe - WebSocket not open')
    return false
  }

  const subscribeMessage = {
    action: 'subscribe',
    trades: symbols,
    quotes: symbols
  }

  // Stock v2/iex WebSocket expects minute bars as plain symbols (not *@1Min.* — that triggers 400 invalid syntax).
  if (barSymbols && barSymbols.length > 0) {
    subscribeMessage.bars = [...new Set(barSymbols.map(s => String(s).trim()).filter(Boolean))]
  }

  ws.send(JSON.stringify(subscribeMessage))
  console.log(`📡 Subscribed to trades and quotes for:`, symbols, barSymbols?.length ? `(+ ${barSymbols.length} 1Min bar feeds)` : '')
  return true
}

// Send unsubscription message to Alpaca WebSocket.
export function unsubscribeFromSymbols(ws, symbols) {
  if (!ws || ws.readyState !== WebSocket.OPEN) {
    console.warn('⚠️ Cannot unsubscribe - WebSocket not open')
    return false
  }

  const unsubscribeMessage = {
    action: 'unsubscribe',
    trades: symbols,
    quotes: symbols
  }

  ws.send(JSON.stringify(unsubscribeMessage))
  console.log(`📡 Unsubscribed from trades and quotes for:`, symbols)
  return true
}

