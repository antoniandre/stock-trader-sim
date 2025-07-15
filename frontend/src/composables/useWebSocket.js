import { ref, onBeforeUnmount } from 'vue'

export function useWebSocket(url = 'ws://localhost:3000') {
  const wsConnected = ref(false)
  const lastUpdate = ref('Never')
  let ws = null
  let reconnectTimeout = null
  let messageHandlers = new Map()

  function connect() {
    try {
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

  function disconnect() {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout)
      reconnectTimeout = null
    }
    if (ws) {
      ws.close()
      ws = null
    }
    wsConnected.value = false
  }

  onBeforeUnmount(() => {
    disconnect()
  })

  return {
    wsConnected,
    lastUpdate,
    connect,
    disconnect,
    addMessageHandler,
    removeMessageHandler
  }
}
