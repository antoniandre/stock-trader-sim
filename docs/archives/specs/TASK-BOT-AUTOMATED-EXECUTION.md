# TASK: Bot Automated Buy + Sell Execution

## Goal
Wire the bot's decision logic to **automatically execute buy/sell orders** when:
- Bot decision action is "buy" or "sell"
- Confidence level meets threshold (configurable, suggest 70%+)
- Safety gates are passed (confirmation, position limits, etc.)
- **Autonomous Trading toggle is enabled**

## Standing Orders (from AGENTS.md)
- ✅ No auto-trading without confirmation UX
- ✅ Escalate after 2 failed verifications
- ✅ Max order size limits per risk profile
- ✅ **NEW:** Autonomous Trading toggle (critical safety gate)

## What to Build

### 1. Autonomous Trading Toggle (Safety Gate)
**File:** `frontend/src/components/autonomous-trading-toggle.vue` (new)

**Toggle Behavior:**
- **When OFF:**
  - Bot still makes decisions (visible in UI)
  - Confirmation modal always appears
  - Orders do NOT fire automatically
  - User must manually click "Execute" button
  - All decisions logged
  
- **When ON:**
  - Bot makes decisions
  - If confidence < 80%: show confirmation modal (require manual click)
  - If confidence >= 80% AND whitelisted: skip confirmation, fire immediately
  - All executions logged with autonomous flag

**Implementation:**
- Add toggle switch (w-switch style) to ticker UI header or bot control panel
- Label: "Autonomous Trading" with ON/OFF states
- Store state in `localStorage` key: `"autonomousTrading"` (boolean)
- Persists across sessions
- Passed to bot-executor to control execution flow
- Logged in audit trail as `autonomous: true/false`

### 2. Bot Decision → Auto-Execution Loop
**File:** `api/services/bot-executor.js` (new)

When bot decision is recorded with action="buy" or action="sell":
- Extract: symbol, confidence, executionPlan (positionSizePct, etc.)
- Check autonomousTrading toggle from frontend (passed via API call)
- Check threshold: `if (confidence >= BOT_EXECUTION_CONFIDENCE_THRESHOLD)` (suggest 70)
- Build order: qty, side, type (market), calculate position size from executionPlan
- **If autonomousTrading OFF OR confidence < 80%:** emit event for confirmation UI
- **If autonomousTrading ON AND confidence >= 80%:** skip confirmation, fire immediately
- Wait for user confirmation (if required) or proceed directly
- Fire order via `/api/orders`
- Log execution record to `strategy-runs.jsonl` with type="bot-auto-execution"

### 3. Frontend: Confirmation Modal
**File:** `frontend/src/components/bot-auto-execution-modal.vue` (new)

When bot wants to execute (either autonomous OFF or confidence < 80%):
- Show modal: "Bot recommends [BUY/SELL] {symbol} × {qty} at market"
  - Display confidence, reason, estimated notional
  - Show current Autonomous Trading toggle state
  - Show "Execute", "Skip", "Adjust Qty" buttons
  - (Optional: whitelist toggle for auto-confirm on future signals)
- On "Execute" → call `/api/orders` via trading API
- On "Skip" → log skip reason, continue monitoring
- On failure → show error, offer manual execution or retry

### 4. Safety Gates
**File:** `api/services/bot-executor.js`

Implement:
- **Autonomous Trading toggle gate:** Check localStorage autonomousTrading state before auto-execution
- **Confidence threshold:** 70%+ (configurable per risk profile)
  - If autonomousTrading OFF: always require confirmation (any confidence)
  - If autonomousTrading ON and confidence >= 80%: skip confirmation (whitelisted fast path)
  - If autonomousTrading ON and confidence < 80%: require confirmation
- **Position size check:** Never exceed executionPlan.positionSizePct of account
- **Failure escalation:** 
  - 1st failure: auto-retry once after 30s
  - 2nd failure: emit alert event, require manual intervention
- **Cooldown:** Don't fire multiple orders for same symbol within 5 minutes (avoid whipsaw)

### 5. Logging & Audit Trail
**strategy-runs.jsonl** new record type:

```json
{
  "type": "bot-auto-execution",
  "recordedAt": "2026-04-10T22:50:00.000Z",
  "symbol": "YDDL",
  "autonomous": true,
  "decision": {
    "action": "buy",
    "confidence": 75,
    "marketRegime": "breakout"
  },
  "order": {
    "qty": 10,
    "side": "buy",
    "type": "market",
    "estimatedNotional": 52.20
  },
  "execution": {
    "status": "submitted",
    "orderId": "...",
    "requirementsMet": {
      "autonomousTrading": true,
      "confidenceThreshold": true,
      "positionSizeOk": true,
      "cooldownOk": true
    },
    "reason": "auto-fired: autonomous=ON, confidence=75% >= 70%"
  }
}
```

## Files to Touch

- `api/services/bot-executor.js` (new or extend trading-service)
- `api/rest-api.js` (add endpoint for bot auto-exec, add autonomousTrading state endpoint)
- `frontend/src/components/bot-auto-execution-modal.vue` (new)
- `frontend/src/components/autonomous-trading-toggle.vue` (new)
- `frontend/src/views/ticker.vue` (integrate modal + toggle)
- `frontend/src/api/index.js` (add autonomousTrading getter/setter)

## Testing Plan

### Phase A: Toggle & Manual Trigger Test
1. Open ticker, verify Autonomous Trading toggle is visible
2. Set toggle to OFF
3. Manually call bot decision endpoint: `POST /api/bots/decide/{symbol}`
4. Check: Does confirmation modal appear?
5. Click "Execute" → does order fire?
6. Verify order in orders list and strategy-runs.jsonl (autonomous: false)
7. Refresh browser, verify toggle state persisted

### Phase B: Autonomous Execution Test (confidence < 80%)
1. Set toggle to ON
2. Trigger bot decision with confidence = 75%
3. Check: Confirmation modal should still appear (confidence < 80%)
4. Click "Execute" → order fires
5. Verify logged with autonomous: true

### Phase C: Fast-Path Execution (confidence >= 80%)
1. Set toggle to ON
2. Trigger bot decision with confidence = 85%
3. Check: Confirmation modal should NOT appear (confidence >= 80%)
4. Order should fire immediately
5. Verify logged with autonomous: true, skipConfirmation: true

### Phase D: Live Automation Test
1. Start app with toggle ON, let it run 5 min
2. Bot polls and makes decisions
3. Capture 2-3 cycles of: bot → decision → toggle check → (modal or auto-fire) → order → logged

### Phase E: Safety Gate Test
1. Try to execute order exceeding position size → should reject
2. Simulate 2 order failures → should escalate to alert
3. Verify cooldown: fire buy on YDDL, fire again 2 min later → should be rejected
4. Toggle OFF → all decisions require manual click, none fire auto

## Commits

1. `"Feat: Add autonomous trading toggle with localStorage persistence"`
2. `"Feat: Add bot auto-execution with confidence-based gating"`
3. `"Feat: Add bot-execution confirmation modal"`
4. `"Test: Verify bot automation with safety gates and toggle states"`

## Done When

- ✅ Autonomous Trading toggle visible in ticker UI and persists via localStorage
- ✅ When toggle OFF: bot decisions → confirmation modal always, manual click required
- ✅ When toggle ON + confidence >= 80%: auto-execute (skip modal for whitelisted)
- ✅ When toggle ON + confidence < 80%: confirmation modal still required
- ✅ Order logged to strategy-runs.jsonl with execution status, autonomous flag, and requirements met
- ✅ Safety gates tested (position size, failure escalation, cooldown)
- ✅ Live paper-trade test shows full cycle: bot→decision→toggle check→confirm→order→logged
- ✅ Verify toggle state persists after browser refresh
