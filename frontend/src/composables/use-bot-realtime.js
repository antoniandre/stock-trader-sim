import { ref, onBeforeUnmount, computed } from 'vue'
import { useWebSocket } from './web-socket.js'
import { fetchDayTradingDecision } from '@/api/index.js'

/**
 * useBoRealtimeEvaluation
 * 
 * Hooks bot decision re-evaluation into WebSocket price events.
 * As market prices update (every tick), automatically re-evaluate the trading bot decision.
 * 
 * Features:
 * - Event-driven re-evaluation (zero wasted API calls)
 * - Debounced to prevent excessive UI updates (configurable)
 * - Auto-cleanup on unmount
 * - Fallback polling if WebSocket stalls
 * 
 * @param {Object} options
 * @param {String} options.symbol - Stock symbol to track (required)
 * @param {String} options.riskProfile - 'conservative' | 'balanced' | 'aggressive'
 * @param {Object} options.webSocket - useWebSocket() instance (optional, created if not provided)
 * @param {Number} options.debounceMs - Min ms between re-evaluations (default: 500)
 * @param {Number} options.fallbackPollMs - Fallback polling interval if no price update (default: 10000)
 * 
 * @returns {Object} Reactive state and methods
 */
export function useBotRealtimeEvaluation(options = {}) {
  const {
    symbol,
    riskProfile = 'balanced',
    webSocket = null,
    debounceMs = 500,
    fallbackPollMs = 10000
  } = options

  if (!symbol) throw new Error('useBotRealtimeEvaluation: symbol is required')

  // State
  const decision = ref(null)
  const isLoading = ref(false)
  const error = ref(null)
  const lastEvalTime = ref(0)
  const lastPriceTime = ref(0)
  const isRealTime = ref(false) // True when using WebSocket events (vs polling)

  // Get WebSocket if not provided
  const ws = webSocket || useWebSocket()

  let fallbackPollInterval = null

  // ========================================================
  // Core: Evaluate decision
  // ========================================================
  async function evaluateDecision() {
    if (isLoading.value) return // Already evaluating

    try {
      isLoading.value = true
      error.value = null

      const result = await fetchDayTradingDecision({
        symbol,
        riskProfile
        // Note: API reads prices from cached market data state,
        // so we don't need to pass prices[] here
      })

      decision.value = result.decision || result
      decision.value.evaluatedAt = new Date().toISOString()
      decision.value.method = isRealTime.value ? 'realtime' : 'poll'
    } catch (err) {
      error.value = err.message || 'Failed to evaluate decision'
      console.error('[useBotRealtime] Evaluation failed:', err)
    } finally {
      isLoading.value = false
    }
  }

  // ========================================================
  // WebSocket handler: Price update → re-evaluate
  // ========================================================
  function handlePriceUpdate(priceMsg) {
    // Only handle messages for this symbol
    if (priceMsg.symbol !== symbol) return

    const now = Date.now()
    lastPriceTime.value = now

    // Debounce: respect minimum time between evaluations
    if (now - lastEvalTime.value < debounceMs) {
      // Debounced — skip this evaluation, but update timestamp
      return
    }

    lastEvalTime.value = now
    isRealTime.value = true
    evaluateDecision()
  }

  // ========================================================
  // Fallback polling: If no price updates, still re-eval
  // ========================================================
  function setupFallbackPolling() {
    if (fallbackPollInterval) clearInterval(fallbackPollInterval)

    fallbackPollInterval = setInterval(() => {
      const now = Date.now()
      const timeSincePriceUpdate = now - lastPriceTime.value

      // If it's been >fallbackPollMs since last price update, evaluate anyway
      if (timeSincePriceUpdate > fallbackPollMs) {
        console.log(
          `[useBotRealtime] No price update for ${Math.round(timeSincePriceUpdate / 1000)}s, triggering fallback poll`
        )
        isRealTime.value = false
        evaluateDecision()
      }
    }, fallbackPollMs)
  }

  // ========================================================
  // Lifecycle: Setup and cleanup
  // ========================================================
  function start() {
    if (!ws) {
      console.error('[useBotRealtime] WebSocket not available')
      return false
    }

    // Register handler for 'price' WebSocket messages
    ws.addMessageHandler('price', handlePriceUpdate)

    // Set up fallback polling (safety net)
    setupFallbackPolling()

    // Initial evaluation
    evaluateDecision()

    return true
  }

  function stop() {
    if (ws) {
      ws.removeMessageHandler('price', handlePriceUpdate)
    }
    if (fallbackPollInterval) {
      clearInterval(fallbackPollInterval)
      fallbackPollInterval = null
    }
  }

  // Auto-cleanup on component unmount
  onBeforeUnmount(() => {
    stop()
  })

  // ========================================================
  // Computed: Status indicators
  // ========================================================
  const statusLabel = computed(() => {
    if (isLoading.value) return 'evaluating'
    if (error.value) return 'error'
    if (!decision.value) return 'idle'
    return isRealTime.value ? 'live' : 'polling'
  })

  const statusColor = computed(() => {
    if (statusLabel.value === 'live') return 'success'
    if (statusLabel.value === 'error') return 'error'
    if (statusLabel.value === 'evaluating') return 'warning'
    return 'info'
  })

  const timeSinceEvaluation = computed(() => {
    if (!decision.value?.evaluatedAt) return null
    const evalTime = new Date(decision.value.evaluatedAt).getTime()
    const msAgo = Date.now() - evalTime
    const sAgo = Math.round(msAgo / 1000)
    return sAgo < 60 ? `${sAgo}s ago` : `${Math.round(sAgo / 60)}m ago`
  })

  // ========================================================
  // Return public API
  // ========================================================
  return {
    // State
    decision,
    isLoading,
    error,
    isRealTime,
    statusLabel,
    statusColor,
    timeSinceEvaluation,

    // Methods
    start,
    stop,
    evaluate: evaluateDecision,

    // Advanced
    lastEvalTime,
    lastPriceTime
  }
}
