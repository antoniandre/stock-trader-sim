
### 2. **Decision Call Frequency is Poll-Based, Not Event-Driven** ⚠️ BLOCKER

**Location:** API decision refresh logic (search needed for `setInterval`)

**Problem:**

- Decision confidence updates appear to run on a timer (likely `setInterval` somewhere), not real-time.
- This means:
  - If price moves quickly (gap up/down), the bot may miss the exit signal by minutes.
  - Redundant decision calls waste resources.
  - No reaction to WebSocket price updates.

**Why:**

- Screener feeds price data via WebSocket; decision logic should subscribe to the same stream.
- Currently, decision updates are decoupled from real-time price changes.

**Fix Pattern:**

1. Find where decision updates are called (likely a `setInterval` in `websocket-server.js`).
2. Move decision evaluation to the WebSocket price event handler:

```javascript
// In websocket-server.js or market-data handler
priceUpdate.on('update', (symbol, priceData) => {
  const decision = evaluateDayTradingDecision({
    symbol,
    prices: priceData.history,
    currentPrice: priceData.current,
    // ... other inputs
  })

  // Broadcast decision immediately
  broadcast({
    type: 'decision-update',
    symbol,
    decision
  })
})
```

**Severity:** CRITICAL — Bot decisions are stale and reactive, not proactive.

---


### 4. **Alpaca API Calls: No Error Handling for Failed Orders**

**Location:** `api/clients/alpaca-client.js`, `api/services/alpaca-trading-service.js`

**Problem:**

- Order submission calls `POST /v2/orders` but does not handle:
  - Insufficient buying power (OPE_BUYING_POWER)
  - Duplicate order rejection (OPE_DUPLICATE_ORDER)
  - Symbol not found / not tradeable
  - Market hours violations
  - Account restrictions (PDT, pattern day trader)

**Current State:**

- `bot-executor.js` has `recordOrderFailure()` but it's never called from the trading service.
- Failures are logged but not escalated to the frontend.

**Fix Pattern:**

```javascript
// In alpaca-trading-service.js
async submitOrder(symbol, side, qty, type, limitPrice) {
  try {
    const response = await alpacaClient.createOrder({
      symbol, side, qty, type, limit_price: limitPrice
    })
    recordOrderExecution(symbol)
    return { success: true, orderId: response.id }
  } catch (err) {
    const failure = recordOrderFailure(symbol)

    if (failure.escalated) {
      // Notify frontend: symbol needs manual intervention
      broadcastEscalation(symbol, err.message)
    }

    throw new OrderError(symbol, err.code, err.message)
  }
}
```

**Severity:** HIGH — Orders silently fail; user unaware of issues.

---

### 5. **Screener Performance: No Pagination or Caching**

**Location:** `api/src/screener/screener.js`

**Problem:**

- Screener fetches ALL symbols on every run.
- No caching of results (trades/minute, spreads, volumes).
- No pagination for clients.
- Risk of rate-limiting Alpaca market data API.

**Metrics:**

- Typical screener: 3000–5000 symbols per run.
- Run frequency: unknown (need to find the poll interval).
- Data stale-ness: unknown.

**Fix Pattern:**

```javascript
// In screener.js
const SCREENER_CACHE_TTL_MS = 30 * 1000 // 30s
let cachedResults = null
let cacheExpiry = 0

async function runScreener() {
  if (Date.now() < cacheExpiry && cachedResults) {
    return cachedResults
  }

  const results = await fetchAndEvaluate()
  cachedResults = results
  cacheExpiry = Date.now() + SCREENER_CACHE_TTL_MS

  return results
}

// Paginate results to frontend
router.get('/api/screener/candidates', (req, res) => {
  const page = Number(req.query.page || 0)
  const pageSize = Number(req.query.limit || 50)
  const results = runScreener()

  const paginated = results.slice(page * pageSize, (page + 1) * pageSize)
  res.json({ data: paginated, total: results.length, page })
})
```

**Severity:** HIGH — Risk of API throttling; poor UX with large datasets.

---

### 6. **Decision Confidence Floor for Sell Actions Not Enforced**

**Location:** `day-trading-bot.js`, lines ~390-400

**Problem:**

- When `action === 'exit'` or `action === 'trim'`, confidence is floored to 80–82:

```javascript
if (action === 'exit') {
  confidence = clamp(Math.max(confidence, 82), 0, 100)
}
```

- This is correct (sell-side conviction should be high).
- **BUT:** Frontend may not respect this in `bot-executor.js`.
- `evaluateAutoExecution` checks `decision.confidence >= CONFIDENCE_THRESHOLD_FAST_PATH` (80).
- An exit with confidence 35→82 will auto-fire at 82, which is correct.
- However, the floor is set by bot logic, not independently validated.

**Fix:**

- Clarify in comments that sell-side floors are intentional.
- Add assertion in frontend:
  ```javascript
  if (decision.action === 'exit' || decision.action === 'trim') {
    console.assert(decision.confidence >= 80, 'Sell-side confidence too low')
  }
  ```
---

### 9. **Alpaca WebSocket vs REST Parity**

**Location:** `api/clients/alpaca-websocket-client.js` vs `alpaca-client.js`

**Problem:**

- WebSocket client exists (`alpaca-websocket-client.js`) but unclear if it's used for real-time price updates.
- REST client (`alpaca-client.js`) is used for orders.
- If REST is also used for price polling, duplicate subscriptions → wasted quota.

**Fix:**

- Audit which client is active for price data.
- If both, consolidate to WebSocket + REST (orders only).
