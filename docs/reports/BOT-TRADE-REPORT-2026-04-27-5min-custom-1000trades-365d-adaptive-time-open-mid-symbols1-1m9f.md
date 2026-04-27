# Bot Trade Report — 7 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:18:37.953Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $162.58 (-0.16%) over 7 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 7 |
| Win rate | 28.57% (2W / 5L) |
| Net P&L | $-162.58 (-0.16%) |
| Gross profit | $101.15 |
| Gross loss | $263.73 |
| Profit factor | 0.38 |
| Avg win | $50.58 |
| Avg loss | $52.75 |
| Payoff ratio | 0.96:1 |
| Expectancy | $-23.23 / trade |
| Max drawdown | 0.25% |
| Sharpe ratio (ann.) | -5.66 |
| Trades / active day | 1 |
| Avg confidence | 99.86% |
| Avg trade duration | 61 min |
| Avg risk ratio | 0.47R |
| Starting equity | $100,000 |
| Ending equity | $99,837.42 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 7 | 28.57% | $-162.58 | $-23.23 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LMT | 7 | 2 | 28.57% | $-162.58 | $-23.23 | 0.38 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 3 | 1 | 33.33% | $-117.3 | $-39.1 |
| breakout | 4 | 1 | 25% | $-45.28 | $-11.32 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 7 | 2 | 28.57% | $-162.58 | $-23.23 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-181.69 | 0.34 |
| +3 bps/side | $-219.93 | 0.28 |
| +5 bps/side | $-258.18 | 0.22 |
| +10 bps/side | $-353.79 | 0.14 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 3 |
| stagnation | 2 |
| timeout | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LMT | 07-01 15:10 | 07-01 16:20 | 467.72 | 467.18 | 29 | 13563.88 | -15.66 | -0.12% | 0.17R | 70m | market | stagnation | trend | trend | neutral | 73.98 | ↑463.76 | 0.9874 | 1.1 | **LOSS** |
| 2 | LMT | 12-24 14:30 | 12-24 16:15 | 487.67 | 488.22 | 28 | 13654.76 | +15.4 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 76.38 | ↓487.17 | 0.3584 | 1.07 | **WIN** |
| 3 | LMT | 01-13 14:40 | 01-13 16:25 | 556.67 | 560.1 | 25 | 13916.75 | +85.75 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | neutral | 70.38 | ↑555.08 | 1.7667 | 1.3 | **WIN** |
| 4 | LMT | 01-21 14:35 | 01-21 16:00 | 585.13 | 584.82 | 23 | 13457.99 | -7.13 | -0.05% | 0.07R | 85m | market | stagnation | breakout | breakout | neutral | 82.03 | ↑581.39 | 0.6397 | 1.75 | **LOSS** |
| 5 | LMT | 02-03 14:35 | 02-03 14:55 | 643.82 | 640.93 | 21 | 13520.22 | -60.69 | -0.45% | 0.62R | 20m | market | early-reversal | trend | breakout | neutral | 69.78 | ↓641.52 | 0.8183 | 1.17 | **LOSS** |
| 6 | LMT | 02-06 15:00 | 02-06 15:20 | 618.93 | 613.61 | 22 | 13616.46 | -117.04 | -0.86% | 1.05R | 20m | market | early-reversal | trend | trend | neutral | 72.64 | ↓617.62 | 1.2905 | 6.48 | **LOSS** |
| 7 | LMT | 02-19 14:35 | 02-19 15:00 | 664.56 | 661.55 | 21 | 13955.76 | -63.21 | -0.45% | 0.53R | 25m | market | early-reversal | breakout | breakout | neutral | 77.56 | ↓661.34 | 0.8997 | 1.54 | **LOSS** |

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

- ⚠️ **Profit factor 0.38 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.47R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:18:37.953Z*
