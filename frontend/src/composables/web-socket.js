import { ref, onBeforeUnmount } from 'vue'

export function useWebSocket(url = 'ws://localhost:3000') {
  const wsConnected = ref(false)
  const lastUpdate = ref('Never')
  let ws = null
  let reconnectTimeout = null
  let messageHandlers = new Map()

  function connect() {
    try {
      // Don't create a new connection if one already exists and is open.
      if (ws?.readyState === WebSocket.OPEN) return
      // Close existing connection if it exists.
      if (ws) ws.close()

      console.log('🔌 Connecting to WebSocket...')
      ws = new WebSocket(url)

      ws.onopen = () => {
        console.log('✅ WebSocket connected')
        wsConnected.value = true
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
          handlers.forEach(handler => handler(data))
        } catch (error) {
          console.error('Error parsing WebSocket message:', error)
        }
      }

      ws.onclose = () => {
        console.log('🔌 WebSocket disconnected')
        wsConnected.value = false

        // Auto-reconnect after 3 seconds.
        reconnectTimeout = setTimeout(connect, 3000)
      }

      ws.onerror = (error) => {
        console.error('WebSocket error:', error)
        wsConnected.value = false
      }
    } catch (error) {
      console.error('Error connecting to WebSocket:', error)
      wsConnected.value = false
    }
  }

  function send(message) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message))
      return true
    }
    else {
      console.warn('WebSocket not connected, cannot send message:', message)
      return false
    }
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
  }

  onBeforeUnmount(() => {
    if (ws) ws.close()
    if (reconnectTimeout) clearTimeout(reconnectTimeout)
  })

  return {
    wsConnected,
    lastUpdate,
    connect,
    send,
    subscribeToStock,
    unsubscribeFromStock,
    addMessageHandler,
    removeMessageHandler
  }
}
