# Bot Trade Report — 14 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:57.763Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $153.59 (-0.15%) over 14 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 14 |
| Win rate | 28.57% (4W / 10L) |
| Net P&L | $-153.59 (-0.15%) |
| Gross profit | $539.68 |
| Gross loss | $693.27 |
| Profit factor | 0.78 |
| Avg win | $134.92 |
| Avg loss | $69.33 |
| Payoff ratio | 1.95:1 |
| Expectancy | $-10.97 / trade |
| Max drawdown | 0.52% |
| Sharpe ratio (ann.) | -1.53 |
| Trades / active day | 1.17 |
| Avg confidence | 99.07% |
| Avg trade duration | 51 min |
| Avg risk ratio | 0.85R |
| Starting equity | $100,000 |
| Ending equity | $99,846.41 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 100% | $+302.66 | $302.66 |
| Mid  10:30–11:30 | 7 | 14.29% | $-265.93 | $-37.99 |
| Noon 11:30–13:00 | 5 | 40% | $-146.66 | $-29.33 |
| PM   13:00–14:00 | 1 | 0% | $-43.66 | $-43.66 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| HD | 14 | 4 | 28.57% | $-153.59 | $-10.97 | 0.78 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 4 | 40% | $+239.59 | $+23.96 |
| breakout | 4 | 0 | 0% | $-393.18 | $-98.29 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 14 | 4 | 28.57% | $-153.59 | $-10.97 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 7 | 2.53 | $+33.24 | 3 | 1.05 | $+2.3 | 0.15% | 0.8 | watch |
| Symbol | HD | 8 | 2.3 | $+27.14 | 6 | 0.3 | $-61.78 | 0.53% | 0.24 | watch |
| Behavior | neutral | 8 | 2.3 | $+27.14 | 6 | 0.3 | $-61.78 | 0.53% | 0.24 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-189.26 | 0.74 |
| +3 bps/side | $-260.63 | 0.66 |
| +5 bps/side | $-331.99 | 0.6 |
| +10 bps/side | $-510.39 | 0.47 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 4 |
| early-reversal | 4 |
| timeout | 3 |
| stop-loss | 2 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | HD | 06-27 16:10 | 06-27 17:00 | 369.38 | 368.41 | 37 | 13667.06 | -35.89 | -0.26% | 0.37R | 50m | market | stagnation | trend | trend | neutral | 75.19 | ↑366.27 | 0.9883 | 2.68 | **LOSS** |
| 2 | HD | 07-01 14:25 | 07-01 16:10 | 371.08 | 379.26 | 37 | 13729.96 | +302.66 | +2.2% | 3.14R | 105m | market | timeout | trend | trend | neutral | 72.26 | ↑367.75 | 0.8124 | 1.17 | **WIN** |
| 3 | HD | 07-08 15:10 | 07-08 16:00 | 369.8 | 369.25 | 37 | 13682.6 | -20.35 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 4 | HD | 07-23 17:35 | 07-23 18:00 | 377.88 | 376.7 | 37 | 13981.56 | -43.66 | -0.31% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 78.19 | ↑374.28 | 0.7867 | 4.2 | **LOSS** |
| 5 | HD | 11-21 14:35 | 11-21 15:40 | 338.39 | 338.01 | 41 | 13873.99 | -15.58 | -0.11% | 0.16R | 65m | market | stagnation | breakout | breakout | neutral | 79.13 | ↓335.84 | 0.4622 | 1.24 | **LOSS** |
| 6 | HD | 11-21 16:35 | 11-21 17:40 | 342.69 | 345.27 | 20 | 13707.6 | +51.6 | +0.75% | 0.94R | 65m | market | trim-profit-target | trend | trend | neutral | 61.25 | ↑339.4 | 1.7183 | 1.81 | **WIN** |
| 7 | HD | 11-21 16:35 | 11-21 18:20 | 342.69 | 344.2 | 20 | 13707.6 | +30.2 | +0.44% | 0.55R | 105m | market | timeout | trend | trend | neutral | 61.25 | ↑339.4 | 1.7183 | 1.81 | **WIN** |
| 8 | HD | 12-05 15:35 | 12-05 16:00 | 354.07 | 352.74 | 39 | 13808.73 | -51.87 | -0.38% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 67.55 | ↑352.14 | 0.7199 | 1.18 | **LOSS** |
| 9 | HD | 01-08 15:15 | 01-08 17:00 | 356.85 | 360.83 | 39 | 13917.15 | +155.22 | +1.12% | 1.12R | 105m | market | timeout | trend | trend | neutral | 73.26 | ↑351.41 | 1.0435 | 1.16 | **WIN** |
| 10 | HD | 01-09 14:35 | 01-09 15:00 | 364.41 | 362.26 | 38 | 13847.58 | -81.7 | -0.59% | 0.74R | 25m | market | early-reversal | trend | breakout | neutral | 64.78 | ↓363.89 | -0.1651 | 1.87 | **LOSS** |
| 11 | HD | 01-22 14:40 | 01-22 14:55 | 388.63 | 384.77 | 36 | 13990.68 | -138.96 | -0.99% | 1.41R | 15m | market | stop-loss | breakout | trend | neutral | 73.65 | ↓388.59 | 1.4586 | 1.37 | **LOSS** |
| 12 | HD | 02-10 14:30 | 02-10 15:20 | 385.23 | 384.97 | 36 | 13868.28 | -9.36 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 73.3 | ↓384.63 | 0.5713 | 1.87 | **LOSS** |
| 13 | HD | 02-24 14:45 | 02-24 15:05 | 391.65 | 386.8 | 32 | 12532.8 | -155.2 | -1.24% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 78.94 | ↓390.88 | 2.8923 | 1.14 | **LOSS** |
| 14 | HD | 03-31 16:40 | 03-31 16:45 | 330.19 | 326.84 | 42 | 13867.98 | -140.7 | -1.01% | 1.44R | 5m | market | stop-loss | breakout | breakout | neutral | 85.93 | ↑325.84 | 0.3599 | 3.82 | **LOSS** |

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

- ⚠️ **Profit factor 0.78 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.85R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:57.763Z*
