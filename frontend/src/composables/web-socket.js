import { ref, onUnmounted } from 'vue'

// WebSocket Composable
// --------------------------------------------------------
function getDefaultWebSocketUrl() {
  if (import.meta.env.VITE_WS_URL) return import.meta.env.VITE_WS_URL
  if (import.meta.env.DEV) return 'ws://127.0.0.1:3000'
  if (typeof window === 'undefined') return 'ws://127.0.0.1:3000'
  const { protocol, host } = window.location
  const wsProto = protocol === 'https:' ? 'wss:' : 'ws:'
  return `${wsProto}//${host}`
}

export function useWebSocket(url = getDefaultWebSocketUrl()) {
  const wsConnected = ref(false)
  const wsReconnecting = ref(false)
  const wsStatusLabel = ref('Connecting…')
  const lastUpdate = ref('Never')
  let ws = null
  let reconnectTimeout = null
  let messageHandlers = new Map()
  let isDestroyed = false

  // Connection Management
  // --------------------------------------------------------
  function connect() {
    try {
      if (ws?.readyState === WebSocket.OPEN) return
      if (ws) ws.close()

      wsStatusLabel.value = wsConnected.value ? 'Live' : 'Connecting…'
      wsReconnecting.value = !wsConnected.value && lastUpdate.value !== 'Never'
      ws = new WebSocket(url)

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

          // Call all registered handlers for this message type.
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
        // Do not reconnect after the component has been destroyed.
        if (!isDestroyed) {
          reconnectTimeout = setTimeout(connect, 3000)
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

  // Message Handling
  // --------------------------------------------------------
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

  function addMessageHandler(type, handler) {
    if (!messageHandlers.has(type)) messageHandlers.set(type, [])
    messageHandlers.get(type).push(handler)
  }

  function removeMessageHandler(type, handler) {
    if (!messageHandlers.has(type)) return
    const handlers = messageHandlers.get(type)
    const index = handlers.indexOf(handler)
    if (index > -1) handlers.splice(index, 1)

    // Clean up empty handler arrays to prevent memory leaks
    if (handlers.length === 0) messageHandlers.delete(type)
  }

  // Cleanup
  // --------------------------------------------------------
  function cleanup() {
    // Set destroyed flag first so ws.onclose does not schedule a reconnect.
    isDestroyed = true
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

  // Use onUnmounted (not onBeforeUnmount) so consuming components can still
  // send a final WS message (e.g. unsubscribe) in their own onBeforeUnmount,
  // which Vue always fires before any onUnmounted hooks.
  onUnmounted(() => {
    cleanup()
  })

  return {
    wsConnected,
    wsReconnecting,
    wsStatusLabel,
    lastUpdate,
    connect,
    send,
    subscribeToStock,
    unsubscribeFromStock,
    addMessageHandler,
    removeMessageHandler,
    cleanup
  }
}
