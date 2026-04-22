# Strategy Review — Profitability, Robustness & Live-Trading Readiness

**Date:** 2026-04-18  
**Reviewed by:** Claude Code (claude-sonnet-4-6)  
**Scope:** `api/day-trading-bot.js`, `api/day-trading-backtest.js`, `api/services/risk-management.js`, `api/services/bot-executor.js`

---

## 1. Strategy Architecture Overview

The bot uses a **point-score decision engine** (`evaluateDayTradingDecision`) rather than a fixed rule set. Every candle, two independent scores are computed:

| Score | Range | Purpose |
|:--|--:|:--|
| `entryScore` | 0–100 | Quality of the setup |
| `riskScore`  | 0–100 | Risk of the environment |
| `confidence` | 0–100 | `entryScore − riskScore×0.3`, clamped |

An action fires when `entryScore ≥ buyThreshold AND riskScore ≤ maxRiskScoreForEntry`. The three risk profiles control all thresholds:

| Profile | Buy threshold | Max risk score | Stop loss | Daily loss limit |
|:--|--:|--:|--:|--:|
| Conservative | 64 | 34 | 1.2% | **2.0%** ← new |
| Balanced     | 52 | 46 | 1.7% | **5.0%** ← new |
| Aggressive   | 54 | 58 | 2.4% | **8.0%** ← new |

---

## 2. Indicators — Before vs After This Review

### 2.1 Indicators NOT previously implemented (now added)

| Indicator | Where added | How used |
|:--|:--|:--|
| **RSI-14** | `day-trading-bot.js` | −8 pts if overbought (>70); +10 pts for mean-revert when oversold (<30); +6 pts in sweet-spot (50–70). RSI>70 also adds +8 to riskScore. |
| **EMA-9 / EMA-21** | `day-trading-bot.js` | Bullish cross (EMA9>EMA21) adds +6 to entryScore; bearish cross subtracts −6. Replaces raw price-window trend for the cross signal. |
| **MACD** (EMA12−EMA26) | `day-trading-bot.js` | Positive line: +5 pts entry. Negative: −5 pts. Confirms momentum direction. |
| **VWAP** (intraday) | `scripts/run-100-trades.mjs` | Computed per trading day from OHLCV. Shown in trade log. **Not yet wired into bot scoring** — requires candle data (H/L/C/V) to be passed into `evaluateDayTradingDecision`. |
| **Daily loss limit** | `RISK_PROFILES` + decision logic | Per-profile `dailyLossLimitPct`. When `input.dailyLossesPct ≥ profile.dailyLossLimitPct`, new entries are blocked for the rest of the session; existing positions can still exit. |

### 2.2 Indicators already implemented (pre-existing)

| Indicator | Implementation | Notes |
|:--|:--|:--|
| Volume ratio | 20-period avg vs current | `volumeRatio > 1.2` adds +10 pts; `> 1.8` adds +8 more |
| Realized volatility | StdDev of 5-bar window / price | Used for both entry and risk scoring |
| Trend windows | 5/12/30-bar % change | Short/medium/long trend alignment |
| Momentum | Candle-to-candle % change | +8 pts if > 0.15% |
| Bid-ask spread | `spreadPct` input | Directly increases riskScore |
| Market regime | Inferred: chop / trend / breakout / mixed | Gates entries in chop regime |
| Daily catalyst | External catalyst service | Score delta applied to entryScore |

### 2.3 Indicator gaps still open

| Gap | Impact | Recommended fix |
|:--|:--|:--|
| VWAP not in scoring | Can't confirm intraday price relative to fair value | Pass `candles[]` (OHLCV) into `evaluateDayTradingDecision`; compute VWAP there |
| Bollinger Bands | Can't detect compression/breakout statistically | Add `bbWidth = (stdDevN / midBB) * 100`; use in regime detection |
| ATR-based sizing | Position size not volatility-normalised | Replace fixed `stopLossPct` with `stopLossPct = k × ATR / price` |
| Order flow / tape | No bid/ask size data | Requires Level 2 subscription |

---

## 3. Buy/Sell Decision Quality

### Entry gates (in order)

1. `riskScore ≤ maxRiskScoreForEntry` — environment risk filter
2. `!(chop && trend/breakout setup)` — regime-setup mismatch filter
3. `dailyLossLimitReached` — day-level circuit breaker (new)
4. `entryScore ≥ buyThreshold` — minimum signal quality
5. `setup !== 'weak'` — explicit weak-signal guard
6. **RSI** overbought guard (new) — RSI > 70 suppresses entries
7. **EMA cross** confirmation (new) — bearish cross reduces entryScore by 6 pts
8. **MACD** direction check (new) — negative MACD costs 5 pts

### Exit logic (all evaluated every candle)

| Condition | Action | Priority |
|:--|:--|--:|
| Stop-loss hit (`unrealizedPnL ≤ -stopLossPct`) | `exit` | Highest |
| Risk elevated + trend broken | `exit` | High |
| Position timeout (>20 candles or >2 h) | `exit` | High |
| Profit-target zone + cooling momentum | `trim` | Medium |
| Trend + momentum support for scale-up | `add` | Low |

**Verdict:** Exit logic is sound. The forced timeout prevents open losers from running overnight. The risk-score + trend-break exit catches deteriorating setups before stop is hit.

---

## 4. Recovery from Wrong Entries & Missed Exits

### 4.1 Wrong entry recovery

| Scenario | Current behaviour | Assessment |
|:--|:--|:--|
| Price moves against immediately | Stop-loss triggers on next candle close | ✅ Works, but 5-min candle can widen the loss |
| False breakout (buy > 1.8× volume, no follow-through) | Trend-break exit (`shortTrendPct < −0.35%`) | ✅ Catches within 1–2 candles |
| Mean-revert that keeps falling | RSI oversold now adds extra caution; timeout kills after 100 min | ✅ Improved with RSI guard |
| Network drops just after entry | Price polling fallback restarts; position re-evaluated on reconnect | ✅ WebSocket → HTTP fallback exists |

**Recommendation:** For live trading, attach a **stop-limit order at the broker level** immediately on fill. This protects against the Python process crashing or the process being unreachable (total infra failure), not just a temporary network dropout.

### 4.2 Missed exit recovery

| Scenario | Current behaviour | Gap |
|:--|:--|:--|
| Bot crashes with open position | Position remains open at broker; bot re-reads it on restart | ✅ Position re-read from Alpaca on reconnect |
| Profit target fires but order fails | `MAX_FAILURES_BEFORE_ESCALATION = 2` → auto-execution blocked, manual intervention required | ⚠️ Could stay in position longer than intended |
| Broker timeout on sell order | Normalised broker error returned; not auto-retried immediately | ⚠️ No automatic retry on sell side |
| EOD with open long position | **No EOD force-close** logic exists | ❌ Critical gap for day trading |

**Recommendation before live:** Add an EOD (End-of-Day) force-exit 5 minutes before market close that closes all open positions unconditionally, overriding all other signals.

### 4.3 Recovery table summary

| Failure type | Protected? | Mechanism |
|:--|:--:|:--|
| Network dropout (brief) | ✅ | WebSocket 5-s reconnect + HTTP fallback |
| Stale/bad quotes | ✅ | 0.5% price-deviation filter |
| Broker order rejection | ✅ | Error normalisation + escalation after 2 failures |
| Total server crash with open position | ✅ | Position re-read from broker on restart |
| EOD with open position | ❌ | Missing — must be added before live |
| Broker latency spike (fill ≠ signal price) | ⚠️ | No slippage guard on fills |
| Missed profit-target exit (order failed) | ⚠️ | No auto-retry on sells |

---

## 5. Daily Loss Limit

Previously: `dailyLossLimit: 0.05` existed in `api/services/risk-management.js` but was **not connected** to the bot decision engine or bot executor.

**Added in this review:**
- `dailyLossLimitPct` added to all three `RISK_PROFILES` in `day-trading-bot.js`
- Checked inside `evaluateDayTradingDecision` — sets `action = 'wait'` when `dailyLossesPct ≥ profile.dailyLossLimitPct`
- The caller must pass `input.dailyLossesPct` (cumulative session losses as % of account equity)

**Still needed:**
- Wire `dailyLossesPct` from live account state through the API call in the frontend/bot-executor

---

## 6. Profitability Assessment (Qualitative, Pre-Simulation)

### What the strategy has going for it

- **Multi-filter entry** (6 independent gates) — very selective; avoids churning
- **Hard daily limit** — prevents catastrophic drawdown days
- **Regime awareness** — suppresses all trend/breakout entries during choppy tape (the most common losing scenario for momentum strategies)
- **Asymmetric confidence floor** — exit/trim signals are floored at 80-82% confidence so autonomous execution fires reliably even when market conditions are poor

### What could still sink it live

1. **Backtest-to-live gap** — strategy scores optimized on historical data; live execution faces slippage, partial fills, and spread costs not modeled
2. **No EOD close** — a $200K position held overnight on a day-trading strategy is a hard no
3. **5-minute candles only** — the strategy misses sub-5-min moves; a flash spike can blow through the stop before a sell is submitted
4. **VWAP not in scoring** — position relative to fair value is one of the strongest intraday filters; its absence means the bot may buy into distribution above VWAP
5. **No sector/market correlation check** — an SPY sell-off will drag individual stocks down regardless of their own chart

---

## 7. Critical Pre-Live Checklist

| # | Item | Status |
|--:|:--|:--|
| 1 | RSI-14 integrated into entry/risk scoring | ✅ Done |
| 2 | EMA-9/21 crossover signal | ✅ Done |
| 3 | MACD momentum confirmation | ✅ Done |
| 4 | Daily loss limit per risk profile | ✅ Done |
| 5 | VWAP wired into `evaluateDayTradingDecision` | ❌ Pending |
| 6 | EOD force-close logic | ❌ Pending |
| 7 | Broker-level stop-limit on entry fill | ❌ Pending |
| 8 | Auto-retry on failed sell order (max 2× then alert) | ❌ Pending |
| 9 | `dailyLossesPct` plumbed from account state to decision | ❌ Pending |
| 10 | ATR-based dynamic stop-loss | ❌ Pending (nice to have) |
| 11 | 2+ weeks of paper-trade validation post-changes | ❌ Required before live |

---

## 8. Running the 100-Trade Simulation

The simulation script is ready at `scripts/run-100-trades.mjs`.

```bash
# From project root
node scripts/run-100-trades.mjs
```

It will:
1. Fetch 35 days of real 5-min bars from Alpaca (IEX feed) for SPY, QQQ, NVDA, TSLA, AAPL, MSFT, AMZN, META, GOOGL, AMD
2. Simulate round-trip trades using the updated strategy (RSI + EMA + MACD + daily loss limit)
3. Track per-trade: P&L, entry/exit price, duration, RSI, VWAP, MACD, volume ratio, regime, setup, risk ratio
4. Save the full report to `docs/reports/BOT-TRADE-REPORT-<date>.md`

The report will include conclusions about profitability, profit factor, win rate, and specific strategy gaps visible in the data.

---

*Review completed: 2026-04-18 | Next action: run simulation on 2026-04-21 (Monday) once IEX feed is live*
