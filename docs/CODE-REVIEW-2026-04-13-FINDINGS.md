# Code Review Findings — 2026-04-13

## Executive Summary

**Critical Issues:** 3  
**High Priority:** 2  
**Medium Priority:** 4  
**Code Quality:** Good structure, decision logic is sound, but execution gaps exist.

---

## Critical Issues

### 1. **Bot Never Executes Sell Actions** ⚠️ BLOCKER

**Location:** `api/rest-api.js` + frontend `trading-market.vue`

**Problem:**

- Decision engine (`day-trading-bot.js`) correctly evaluates `action: 'exit'` and `action: 'trim'`.
- **Sell orders are never submitted** to Alpaca.
- `bot-executor.js` has the safety gates and evaluation logic, but there is **no code path** that calls the actual order submission when a sell is recommended.

**Why:**

- Frontend shows the recommendation (label: "Sell now") but never calls the `/execute-order` API endpoint for sell-side actions.
- Backend decision logic is orphaned — decisions flow to WebSocket but do not trigger order placement.

**Fix Pattern:**

In `trading-market.vue` (or the component handling bot auto-execution):

```javascript
// Listen for bot decisions (already done via WebSocket)
// When decision.action === 'exit' or 'trim':
if (decision.action === 'exit' || decision.action === 'trim') {
  const shouldExecute = evaluateAutoExecution(
    decision,
    autonomousTrading,  // user's toggle
    accountInfo,
    currentPosition,
    symbol
  )
  
  if (shouldExecute.shouldExecute) {
    // Auto-fire sell order
    await executeOrder({
      symbol,
      side: 'sell',
      qty: shouldExecute.qty,
      type: decision.recommendation.orderType,
      limitPrice: decision.recommendation.price
    })
  } else if (shouldExecute.shouldShowModal) {
    // Show confirmation modal for user approval
    showBotExecutionModal(decision, shouldExecute)
  }
}
```

**Severity:** CRITICAL — Trading bot is non-functional for risk management (stop-loss, profit-taking).

---

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

### 3. **Catalyst Feed NOT Consumed by Screener or Trading Logic** ⚠️ BLOCKER

**Location:** `api/services/daily-catalysts.js`, `frontend/trading-market.vue`

**Problem:**

- Catalyst JSON report is parsed and available in `daily-catalysts.js`.
- **Screener does NOT filter by catalyst symbols.**
- Frontend does NOT mark catalyst stocks with 🔥 icon.
- Catalyst stocks often missing from screener results (design gap, not bug).

**Questions:**

- Should catalyst stocks be auto-included in screener results? (Spec says yes — they should show 🔥.)
- Why are catalyst-bearing stocks missing from screener output?

**Fix Pattern:**

1. Modify screener to include catalyst symbols:

```javascript
// In trade-screener-service.js or screener.js
async function augmentWithCatalysts(symbols) {
  const catalystSymbols = new Set()
  const today = getDailyCatalystForTradingDay()
  
  if (today) {
    today.forEach(row => {
      if (row.symbol && row.catalyst_score !== 'low') {
        catalystSymbols.add(row.symbol.toUpperCase())
      }
    })
  }
  
  // Return union of screener results + catalyst symbols
  return {
    screenerResults: symbols,
    catalystSymbols,
    merged: Array.from(new Set([...symbols, ...catalystSymbols]))
  }
}
```

1. Add 🔥 icon to frontend ticker cards:

```vue
<!-- In ticker-card.vue or trading-market.vue -->
<span v-if="hasCatalyst" class="catalyst-badge">🔥</span>
```

**Severity:** CRITICAL — Catalyst edge is not being exploited.

---

## High-Priority Issues

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

## Medium-Priority Issues

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

**Severity:** MEDIUM — Design is sound, but undocumented intent.

---

### 7. **Catalyst Score Integration Bias is Arbitrary**

**Location:** `day-trading-bot.js`, lines ~140-150

**Problem:**

- Catalyst score adds points to entry decision:
  - "Strong" → +5
  - "Moderate" → +2
  - Priority "High" → +3
  - Gap up → +4
  - Confidence "A" → +2
- **No validation** that catalyst data is fresh (today's data only?).
- **No weighting** against other signals (e.g., catalyst +5 can flip a 59→64 entry when fundamentals say no).

**Fix:**

- Add freshness check:
  ```javascript
  const catalystFreshness = getDailyCatalystFreshness()
  if (catalystFreshness.isStale || catalystFreshness.ageMinutes > 120) {
    catalystEntryDelta *= 0.5 // Reduce weight if stale
  }
  ```
- Document why each point value was chosen.

**Severity:** MEDIUM — Catalyst weighting is opaque.

---

### 8. **No Position Timeout Logic**

**Location:** `day-trading-bot.js`, lines ~335

**Problem:**

- TODO comment exists:
  ```javascript
  // TODO: Add position timeout when candle index tracking is available
  ```
- Positions can remain open indefinitely if momentum stalls.
- Should exit stale positions after 20+ candles without progress.

**Fix:**

- Track entry candle index:
  ```javascript
  if (input.entryCandle) {
    const candlesSinceEntry = input.currentCandle - input.entryCandle
    if (candlesSinceEntry > 20 && Math.abs(unrealizedPnLPct) < 0.5) {
      action = 'exit'
      reasons.push(`Position stale (${candlesSinceEntry} candles, flat P&L)`)
    }
  }
  ```

**Severity:** MEDIUM — Risk management gap for dead positions.

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

**Severity:** MEDIUM — Efficiency + quota waste.

---

## Code Quality Observations (Non-Blocking)

### Positives:

1. **Decision logic is robust:** Entry/exit/trim logic is well-structured with configurable risk profiles.
2. **Safety gates are in place:** Confidence thresholds, cooldowns, escalation tracking.
3. **Catalyst integration conceptually sound:** Framework to include catalysts exists.

### Gaps:

1. **Tests:** No unit tests for `day-trading-bot.js` decision logic (edge cases + regression risk).
2. **Logging:** Decision reasoning is good, but execution logs lack timestamps and failure modes.
3. **Instrumentation:** No metrics on decision accuracy (win rate, avg hold time, etc.).

---

## Summary: Actionable Fix List

### **IMMEDIATE (Week 1)**

1. **Implement sell order execution** → Frontend WebSocket listener + order API call.
2. **Migrate decision updates to event-driven** → Hook decision call to price WebSocket, not timer.
3. **Integrate catalyst feed into screener** → Union screener results with catalyst symbols, add 🔥 badge.

### **URGENT (Week 1–2)**

1. Add error handling + escalation for failed Alpaca orders.
2. Add screener caching and pagination.
3. Add position timeout logic (20-candle stale exit).

### **POLISH (Week 2–3)**

1. Audit WebSocket vs REST usage; consolidate if duplicated.
2. Add unit tests for decision logic.
3. Document catalyst weighting rationale.
4. Clarify confidence floor intent in comments.

---

## Files to Create / Modify


| File                                      | Change                                         | Priority     |
| ----------------------------------------- | ---------------------------------------------- | ------------ |
| `frontend/src/views/trading-market.vue`   | Add sell order execution on decision event     | **CRITICAL** |
| `api/websocket-server.js`                 | Hook decision evaluation to price update       | **CRITICAL** |
| `api/services/daily-catalysts.js`         | Export catalyst symbols for screener           | **CRITICAL** |
| `api/src/screener/screener.js`            | Merge catalyst symbols, add caching/pagination | **CRITICAL** |
| `frontend/src/components/ticker-card.vue` | Add 🔥 catalyst badge                          | **HIGH**     |
| `api/services/alpaca-trading-service.js`  | Add error handling + escalation                | **HIGH**     |
| `api/day-trading-bot.js`                  | Add position timeout, catalyst freshness check | **MEDIUM**   |
| Tests                                     | Add unit tests for decision logic              | **MEDIUM**   |


---

## Questions for Antoni

1. **Should catalyst stocks auto-appear in screener even if they don't meet technical filters?**
2. **Current decision poll interval?** (Need to find and move to event-driven.)
3. **Expected position hold time?** (For timeout logic — currently 20 candles assumed.)
4. **Catalyst data freshness requirement?** (Is stale end-of-day data acceptable?)

---

## Confidence

This review scanned decision logic, bot execution, catalyst integration, and API calls. **Could not run the app directly**, so findings are code-based. Recommend live testing of:

- Bot auto-execution flow (buy → sell).
- Catalyst symbol integration.
- Alpaca order failures under stress.

