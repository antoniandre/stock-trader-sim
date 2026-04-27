# Bot Trade Report — 4 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:17:28.948Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $203.94 (-0.2%) over 4 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 4 |
| Win rate | 0% (0W / 4L) |
| Net P&L | $-203.94 (-0.2%) |
| Gross profit | $0 |
| Gross loss | $203.94 |
| Profit factor | 0 |
| Avg win | $0 |
| Avg loss | $50.99 |
| Payoff ratio | 0:1 |
| Expectancy | $-50.98 / trade |
| Max drawdown | 0.2% |
| Sharpe ratio (ann.) | -32.29 |
| Trades / active day | 1 |
| Avg confidence | 99.25% |
| Avg trade duration | 44 min |
| Avg risk ratio | 0.44R |
| Starting equity | $100,000 |
| Ending equity | $99,796.06 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 0% | $-49.95 | $-49.95 |
| Mid  10:30–11:30 | 3 | 0% | $-153.99 | $-51.33 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MCD | 4 | 0 | 0% | $-203.94 | $-50.98 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 2 | 0 | 0% | $-76.5 | $-38.25 |
| trend | 2 | 0 | 0% | $-127.44 | $-63.72 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 4 | 0 | 0% | $-203.94 | $-50.98 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-214.94 | 0 |
| +3 bps/side | $-236.96 | 0 |
| +5 bps/side | $-258.98 | 0 |
| +10 bps/side | $-314.03 | 0 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 2 |
| early-reversal | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MCD | 11-05 14:40 | 11-05 15:30 | 307.85 | 306.54 | 45 | 13853.25 | -58.95 | -0.43% | 0.27R | 50m | market | stagnation | breakout | breakout | neutral | 76.23 | ↓305.84 | 2.0202 | 1.75 | **LOSS** |
| 2 | MCD | 11-21 14:45 | 11-21 16:10 | 308.4 | 308.01 | 45 | 13878 | -17.55 | -0.13% | 0.18R | 85m | market | stagnation | breakout | breakout | neutral | 77.27 | ↓307.97 | 1.2787 | 1.11 | **LOSS** |
| 3 | MCD | 02-23 15:05 | 02-23 15:25 | 334.01 | 332.12 | 41 | 13694.41 | -77.49 | -0.57% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | 79.7 | ↓333.18 | 1.3572 | 1.1 | **LOSS** |
| 4 | MCD | 04-23 14:10 | 04-23 14:30 | 304.86 | 303.75 | 45 | 13718.7 | -49.95 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 78.52 | ↓303.85 | 0.968 | 1.18 | **LOSS** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio fixed** | Balanced stop 1.7%→1.2%, target 1.5%→2.4% — now a true 2R trade |
| 2 | **Trailing stop** | Exits once price retraces 0.8% from the session high-watermark |
| 3 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 4 | **Market session gate** | New entries blocked outside 13:30–19:30 UTC (9:30–3:30 PM ET) — eliminates extended-hours overnight holds |
| 5 | **RSI > 80 hard block (trend)** | RSI > 80 in a trend setup = chasing overbought momentum; entry blocked (breakout setup exempt) |
| 6 | **Higher buy threshold** | Balanced buyThreshold raised 52→55 — filters marginal entries |
| 7 | **Break-even stop** | Once position reaches 1R (highWatermark ≥ entry×1.012), exit if price returns to entry — stops winners from turning losers |
| 8 | **dailyLossesPct auto-injected** | REST API injects live daily-loss % from server tradeState when client omits it |
| 9 | **VWAP in entry scoring** | +5 pts above VWAP, −8 pts significantly below, +4 pts below VWAP for mean-revert |
| 10 | **Slippage model** | 0.05 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.44R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:17:28.948Z*
