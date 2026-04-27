import { ref } from 'vue'

// Shared WebSocket state (singleton). Multiple `useWebSocket()` callers share one connection
// and the same status refs so the shell (e.g. app.vue) can show a single global indicator.
// --------------------------------------------------------
function getDefaultWebSocketUrl() {
  if (import.meta.env.VITE_WS_URL) return import.meta.env.VITE_WS_URL
  if (import.meta.env.DEV) return 'ws://127.0.0.1:3000'
  if (typeof window === 'undefined') return 'ws://127.0.0.1:3000'
  const { protocol, host } = window.location
  const wsProto = protocol === 'https:' ? 'wss:' : 'ws:'
  return `${wsProto}//${host}`
}

const wsConnected = ref(false)
const wsReconnecting = ref(false)
const wsStatusLabel = ref('Connecting…')
const lastUpdate = ref('Never')

let connectUrl = getDefaultWebSocketUrl()
let ws = null
let reconnectTimeout = null
const messageHandlers = new Map()
let reconnectAllowed = true

function connect(url) {
  reconnectAllowed = true
  if (url) connectUrl = url
  try {
    if (ws?.readyState === WebSocket.OPEN) return
    if (ws) ws.close()

    wsStatusLabel.value = wsConnected.value ? 'Live' : 'Connecting…'
    wsReconnecting.value = !wsConnected.value && lastUpdate.value !== 'Never'
    ws = new WebSocket(connectUrl)

    ws.onopen = () => {
      wsConnected.value = true
      wsReconnecting.value = false
      wsStatusLabel.value = 'Live'
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout)
        reconnectTimeout = null
      }
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        lastUpdate.value = new Date().toLocaleTimeString()

        const handlers = messageHandlers.get(data.type) || []
        for (const handler of handlers) {
          try {
            handler(data)
          }
          catch (handlerError) {
            console.error('Error in WebSocket message handler:', handlerError)
          }
        }
      }
      catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    ws.onclose = () => {
      wsConnected.value = false
      wsReconnecting.value = true
      wsStatusLabel.value = lastUpdate.value === 'Never' ? 'Connecting…' : 'Reconnecting… using cached data'
      if (reconnectAllowed) {
        reconnectTimeout = setTimeout(() => connect(), 3000)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
      wsConnected.value = false
      wsReconnecting.value = true
      wsStatusLabel.value = 'Connection issue — retrying'
    }
  }
  catch (error) {
    console.error('Error connecting to WebSocket:', error)
    wsConnected.value = false
    wsReconnecting.value = true
    wsStatusLabel.value = 'Connection issue — retrying'
  }
}

function send(message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message))
    return true
  }
  return false
}

function subscribeToStock(symbol) {
  return send({ type: 'subscribe', symbol })
}

function unsubscribeFromStock(symbol) {
  return send({ type: 'unsubscribe', symbol })
}

function subscribeToStocks(symbols = []) {
  const normalized = [...new Set((symbols || []).map(symbol => String(symbol || '').trim()).filter(Boolean))]
  if (!normalized.length) return false
  return send({ type: 'subscribe-batch', symbols: normalized })
}

function unsubscribeFromStocks(symbols = []) {
  const normalized = [...new Set((symbols || []).map(symbol => String(symbol || '').trim()).filter(Boolean))]
  if (!normalized.length) return false
  return send({ type: 'unsubscribe-batch', symbols: normalized })
}

function addMessageHandler(type, handler) {
  if (!messageHandlers.has(type)) messageHandlers.set(type, [])
  messageHandlers.get(type).push(handler)
}

function removeMessageHandler(type, handler) {
  if (!messageHandlers.has(type)) return
  const handlers = messageHandlers.get(type)
  const index = handlers.indexOf(handler)
  if (index > -1) handlers.splice(index, 1)

  if (handlers.length === 0) messageHandlers.delete(type)
}

/** Stops reconnects and closes the socket (e.g. tests or full sign-out flows). */
export function destroyWebSocket() {
  reconnectAllowed = false
  if (reconnectTimeout) {
    clearTimeout(reconnectTimeout)
    reconnectTimeout = null
  }
  if (ws) {
    ws.close()
    ws = null
  }
  messageHandlers.clear()
  wsConnected.value = false
  wsReconnecting.value = false
  wsStatusLabel.value = 'Offline'
}

/**
 * Shared WebSocket API. Safe to call from many components; state and socket are singletons.
 * Call `connect()` from `app.vue` (or any root) once on startup.
 */
export function useWebSocket(url = getDefaultWebSocketUrl()) {
  if (url) connectUrl = url

  return {
    wsConnected,
    wsReconnecting,
    wsStatusLabel,
    lastUpdate,
    connect,
    send,
    subscribeToStock,
    unsubscribeFromStock,
    subscribeToStocks,
    unsubscribeFromStocks,
    addMessageHandler,
    removeMessageHandler,
    destroyWebSocket
  }
}
