# Risk Management & End-to-End Trade Cycle Test

## Owner's Requirements

1. **Execute a full automated buy + sell cycle** and analyze results
2. **Sell logic must chase profit**, not blind 20-candle exits
3. **Risk management strategy** with:
   - P/L ratio benchmarks (2:1 or 3:1 minimum for sustainability)
   - Position sizing rules
   - Stop-loss / max-loss guards

---

## Implementation Spec

### Part A: Risk Management Framework

#### 1. Position Sizing
- Base: Account equity % per trade (e.g., 2% risk per position)
- Formula: `positionSize = (accountEquity * riskPercent) / (entryPrice - stopLossPrice)`
- Example: $10k account, 2% risk, entry $100, stop $95 → max 400 shares

#### 2. P/L Ratio Logic (Profit/Loss Ratio)
- **Win rate assumption:** 50% (conservative)
- **Required P/L ratio for profitability:** 2:1 minimum
  - If 50% win rate + 2:1 P/L → net +50% over 100 trades
- **Exit rule:** Sell when:
  - Profit target reached: `(currentPrice - entryPrice) / entryPrice >= profitTargetPercent` (default 3%)
  - OR stop-loss hit: `(currentPrice - entryPrice) / entryPrice <= -stopLossPercent` (default 1.5%)
  - Whichever comes first

#### 3. Max Loss Per Trade
- Hard cap: position can lose max 1.5% of account equity per trade
- Enforced at order time: reject if calculated loss > max loss cap

#### 4. Daily Risk Limit
- Total daily losses capped at 5% of account equity
- If cumulative losses exceed 5%, halt new entries for the day

---

### Part B: End-to-End Trade Test

#### Test Scenario
- **Symbol:** `TSLA` (volatile, reliable data)
- **Entry trigger:** 5-minute RSI > 70 (overbought → mean reversion entry)
- **Order:** 10 shares (hardcoded for test reproducibility)
- **Profit target:** 3% above entry
- **Stop-loss:** 1.5% below entry
- **Max duration:** Hold 60 minutes; exit on time if P/L inconclusive
- **Test mode:** Run in **simulation** (no live cash)

#### Expected Output
1. Entry order placed + confirmed
2. Position tracking (real-time P/L calculation)
3. Exit triggered (profit target, stop-loss, or timeout)
4. Trade results logged:
   - Entry price, exit price, P/L %, duration
   - Win/loss classification
   - Risk ratio achieved
5. Summary: "Trade complete. Entry $X, exit $Y, P/L $Z (+N%). Risk ratio: 2.5:1."

---

### Part C: Code Changes Required

#### 1. Add Risk Config to `stockbot.js`
```javascript
const RISK_CONFIG = {
  riskPercentPerTrade: 0.02,        // 2% of account per trade
  profitTargetPercent: 0.03,        // 3% profit target
  stopLossPercent: 0.015,           // 1.5% stop loss
  maxLossPerTrade: 0.015,           // Max 1.5% account loss per trade
  dailyLossLimit: 0.05,             // Max 5% daily losses
  testOrderSize: 10,                // Hardcoded for test
};
```

#### 2. Add Risk Check Before Order
- Before `POST /api/orders`, validate:
  - Calculated max loss <= `maxLossPerTrade`
  - Daily cumulative loss < `dailyLossLimit`
  - Log rejection reason if blocked

#### 3. Add Exit Logic to Bot
- Track entry price, calculate real-time P/L
- Exit if:
  - `unrealizedPnlPercent >= profitTargetPercent` (profit target)
  - `unrealizedPnlPercent <= -stopLossPercent` (stop loss)
  - Position age > 60 minutes (timeout exit)
- POST sell order with reason: "profit target" | "stop loss" | "timeout"

#### 4. Add Trade Result Logger
- Log each completed trade to `/api/trades` or file
- Fields: entry, exit, P/L $, P/L %, risk ratio, duration, reason
- Persist for later analysis

#### 5. Integration Test Script
- Run in simulation mode
- Trigger entry + monitor exit
- Assert: trade completed, P/L calculated, log created
- Report: "✓ End-to-end trade cycle complete"

---

## Success Criteria

- [ ] Risk config deployed; visible in `/api/health`
- [ ] Full buy → sell → log cycle executes
- [ ] Trade results match expected P/L (within 0.1%)
- [ ] Risk limits enforced (orders blocked if breaching)
- [ ] Trade log retrievable and analyzed

---

## Next Steps

1. Claude: Implement risk config + exit logic in bot
2. Claude: Add trade logger + API endpoint
3. Test: Run one full cycle (entry → exit → analyze)
4. Report: Trade details + P/L analysis to Antoni
