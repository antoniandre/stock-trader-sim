# Bot Trade Report — 16 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:38:47.491Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $801.86 (-0.8%) over 16 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 16 |
| Win rate | 12.5% (2W / 14L) |
| Net P&L | $-801.86 (-0.8%) |
| Gross profit | $118.86 |
| Gross loss | $920.72 |
| Profit factor | 0.13 |
| Avg win | $59.43 |
| Avg loss | $65.77 |
| Payoff ratio | 0.9:1 |
| Expectancy | $-50.12 / trade |
| Max drawdown | 0.8% |
| Sharpe ratio (ann.) | -13.24 |
| Trades / active day | 1.14 |
| Avg confidence | 100% |
| Avg trade duration | 42 min |
| Avg risk ratio | 0.72R |
| Starting equity | $100,000 |
| Ending equity | $99,198.14 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 0% | $-314.7 | $-78.68 |
| Mid  10:30–11:30 | 10 | 20% | $-334.08 | $-33.41 |
| Noon 11:30–13:00 | 2 | 0% | $-153.08 | $-76.54 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMGN | 16 | 2 | 12.5% | $-801.86 | $-50.12 | 0.13 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 13 | 2 | 15.38% | $-532.54 | $-40.96 |
| breakout | 3 | 0 | 0% | $-269.32 | $-89.77 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 16 | 2 | 12.5% | $-801.86 | $-50.12 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 8 | 0 | $-64.59 | 5 | 0.88 | $-3.16 | 0.13% | 0.6 | reject |
| Symbol | AMGN | 9 | 0 | $-61.12 | 7 | 0.32 | $-35.96 | 0.37% | 0.24 | reject |
| Behavior | neutral | 9 | 0 | $-61.12 | 7 | 0.32 | $-35.96 | 0.37% | 0.24 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-843.23 | 0.12 |
| +3 bps/side | $-925.97 | 0.11 |
| +5 bps/side | $-1008.69 | 0.09 |
| +10 bps/side | $-1215.5 | 0.07 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 10 |
| stagnation | 3 |
| trim-profit-target | 1 |
| timeout | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMGN | 05-15 14:35 | 05-15 14:55 | 267.61 | 266.67 | 52 | 13915.72 | -48.88 | -0.35% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 76.53 | ↑265.76 | 1.2722 | 1.11 | **LOSS** |
| 2 | AMGN | 06-10 14:40 | 06-10 15:05 | 295.15 | 293.73 | 47 | 13872.05 | -66.74 | -0.48% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 68.58 | ↑292.96 | 0.8401 | 1.41 | **LOSS** |
| 3 | AMGN | 06-12 14:35 | 06-12 15:20 | 296.12 | 295.05 | 47 | 13917.64 | -50.29 | -0.36% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 71.87 | ↓294.66 | 0.5124 | 1.65 | **LOSS** |
| 4 | AMGN | 07-02 14:00 | 07-02 14:20 | 296.51 | 294.43 | 47 | 13935.97 | -97.76 | -0.7% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 77.29 | ↑293.18 | 1.2048 | 1.04 | **LOSS** |
| 5 | AMGN | 07-02 15:35 | 07-02 15:55 | 297.69 | 296.45 | 46 | 13693.74 | -57.04 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 77.77 | ↑294.57 | 1.4478 | 1.23 | **LOSS** |
| 6 | AMGN | 07-16 14:30 | 07-16 15:15 | 297.62 | 295.63 | 46 | 13690.52 | -91.54 | -0.67% | 0.96R | 45m | market | early-reversal | trend | trend | neutral | 74.3 | ↓295.4 | 0.9508 | 1.12 | **LOSS** |
| 7 | AMGN | 09-30 16:35 | 09-30 16:55 | 281.81 | 279.85 | 49 | 13808.69 | -96.04 | -0.7% | 1R | 20m | market | early-reversal | trend | trend | neutral | 72.83 | ↑278.37 | 0.9181 | 2.87 | **LOSS** |
| 8 | AMGN | 10-13 14:20 | 10-13 15:50 | 295.18 | 295 | 47 | 13873.46 | -8.46 | -0.06% | 0.08R | 90m | market | stagnation | trend | trend | neutral | 73.65 | ↑293.14 | 0.6713 | 1.32 | **LOSS** |
| 9 | AMGN | 10-31 13:55 | 10-31 14:55 | 294.88 | 294.17 | 47 | 13859.36 | -33.37 | -0.24% | 0.31R | 60m | market | stagnation | breakout | breakout | neutral | 66.32 | ↑292.72 | -0.0496 | 2.11 | **LOSS** |
| 10 | AMGN | 11-11 15:00 | 11-11 16:30 | 327.18 | 329.51 | 21 | 13741.56 | +48.93 | +0.71% | 1.01R | 90m | market | trim-profit-target | trend | trend | neutral | 75.93 | ↑326.21 | 0.9812 | 1.05 | **WIN** |
| 11 | AMGN | 11-11 15:00 | 11-11 16:45 | 327.18 | 330.51 | 21 | 13741.56 | +69.93 | +1.02% | 1.46R | 105m | market | timeout | trend | trend | neutral | 75.93 | ↑326.21 | 0.9812 | 1.05 | **WIN** |
| 12 | AMGN | 12-03 14:40 | 12-03 15:00 | 342.99 | 341.81 | 40 | 13719.6 | -47.2 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.49 | ↓341.71 | 0.707 | 1.88 | **LOSS** |
| 13 | AMGN | 02-03 14:30 | 02-03 15:20 | 347.42 | 346.76 | 40 | 13896.8 | -26.4 | -0.19% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 75.73 | ↓344.99 | 0.4356 | 2.29 | **LOSS** |
| 14 | AMGN | 02-23 14:35 | 02-23 15:00 | 378.98 | 377.29 | 36 | 13643.28 | -60.84 | -0.45% | 0.64R | 25m | market | early-reversal | breakout | breakout | neutral | 82.08 | ↓377.93 | 0.657 | 1.62 | **LOSS** |
| 15 | AMGN | 03-09 15:05 | 03-09 15:30 | 373.16 | 371.51 | 37 | 13806.92 | -61.05 | -0.44% | 0.52R | 25m | market | early-reversal | trend | trend | neutral | 60.32 | ↑369.8 | 0.7679 | 2.01 | **LOSS** |
| 16 | AMGN | 03-31 14:00 | 03-31 14:15 | 355.08 | 350.59 | 39 | 13848.12 | -175.11 | -1.26% | 1.7R | 15m | market | stop-loss | breakout | breakout | neutral | 83.17 | ↓351.98 | 0.5972 | 1.6 | **LOSS** |

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

- ⚠️ **Profit factor 0.13 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.72R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:38:47.491Z*
