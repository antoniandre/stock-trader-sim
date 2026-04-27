# Bot Trade Report — 34 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:05:42.438Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $937.69 (-0.94%) over 34 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 34 |
| Win rate | 26.47% (9W / 25L) |
| Net P&L | $-937.69 (-0.94%) |
| Gross profit | $669.15 |
| Gross loss | $1606.84 |
| Profit factor | 0.42 |
| Avg win | $74.35 |
| Avg loss | $64.27 |
| Payoff ratio | 1.16:1 |
| Expectancy | $-27.58 / trade |
| Max drawdown | 0.94% |
| Sharpe ratio (ann.) | -5.58 |
| Trades / active day | 1.03 |
| Avg confidence | 99.24% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.66R |
| Starting equity | $100,000 |
| Ending equity | $99,062.31 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 27.27% | $-137.59 | $-12.51 |
| Mid  10:30–11:30 | 23 | 26.09% | $-800.1 | $-34.79 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GS | 34 | 9 | 26.47% | $-937.69 | $-27.58 | 0.42 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 23 | 6 | 26.09% | $-575.81 | $-25.04 |
| breakout | 11 | 3 | 27.27% | $-361.88 | $-32.9 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 34 | 9 | 26.47% | $-937.69 | $-27.58 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 14 | 0.13 | $-38.65 | 9 | 0.83 | $-3.86 | 0.14% | 0.44 | reject |
| Time slot | Open 9:30-10:30 | 10 | 0.72 | $-12.13 | 1 | 0 | $-16.24 | 0.02% | 0 | reject |
| Symbol | GS | 20 | 0.34 | $-33.81 | 14 | 0.55 | $-18.68 | 0.4% | 0.37 | reject |
| Behavior | neutral | 20 | 0.34 | $-33.81 | 14 | 0.55 | $-18.68 | 0.4% | 0.37 | reject |
| Time slot | Mid 10:30-11:30 | 10 | 0.06 | $-55.48 | 13 | 0.56 | $-18.87 | 0.38% | 0.38 | reject |
| Setup | breakout | 6 | 0.67 | $-22.51 | 5 | 0.4 | $-45.36 | 0.38% | 0.32 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1026.6 | 0.39 |
| +3 bps/side | $-1204.34 | 0.33 |
| +5 bps/side | $-1382.1 | 0.29 |
| +10 bps/side | $-1826.52 | 0.2 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 7 |
| stagnation | 5 |
| stop-loss | 3 |
| breakeven-stop | 2 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GS | 06-28 14:05 | 06-28 15:00 | 454.27 | 453.99 | 30 | 13628.1 | -8.4 | -0.06% | 0.08R | 55m | market | stagnation | trend | trend | neutral | 78.94 | ↑452.45 | 1.9032 | 1.58 | **LOSS** |
| 2 | GS | 07-11 14:05 | 07-11 14:25 | 481.84 | 479.23 | 29 | 13973.36 | -75.69 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 63.78 | ↓479.52 | 0.925 | 2.64 | **LOSS** |
| 3 | GS | 07-15 13:35 | 07-15 13:45 | 490.68 | 483.07 | 28 | 13739.04 | -213.08 | -1.55% | 2.21R | 10m | market | stop-loss | breakout | breakout | neutral | 80.16 | ↓487.76 | 0.6454 | 2.04 | **LOSS** |
| 4 | GS | 07-16 13:40 | 07-16 15:25 | 498.55 | 503.43 | 27 | 13460.85 | +131.76 | +0.98% | 1.4R | 105m | market | timeout | breakout | breakout | neutral | 81.23 | ↑495.98 | 2.0953 | 1.42 | **WIN** |
| 5 | GS | 07-23 14:00 | 07-23 14:50 | 492.4 | 491.08 | 28 | 13787.2 | -36.96 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 75.29 | ↓488.64 | 0.633 | 1.32 | **LOSS** |
| 6 | GS | 09-05 14:00 | 09-05 14:40 | 495.26 | 493.61 | 28 | 13867.28 | -46.2 | -0.33% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 69.92 | ↑491.53 | 0.6454 | 1.18 | **LOSS** |
| 7 | GS | 09-19 14:10 | 09-19 14:55 | 499.81 | 503.25 | 13 | 13494.87 | +44.72 | +0.69% | 0.57R | 45m | market | trim-profit-target | trend | trend | neutral | 73.09 | ↑497.96 | 3.0285 | 2.35 | **WIN** |
| 8 | GS | 09-19 14:10 | 09-19 15:50 | 499.81 | 499.66 | 14 | 13494.87 | -2.1 | -0.03% | 0.02R | 100m | market | breakeven-stop | trend | trend | neutral | 73.09 | ↓497.96 | 3.0285 | 2.35 | **LOSS** |
| 9 | GS | 11-08 15:25 | 11-08 16:35 | 591.63 | 589.28 | 23 | 13607.49 | -54.05 | -0.4% | 0.48R | 70m | market | early-reversal | trend | trend | neutral | 65.7 | ↓587.39 | 1.4525 | 1.04 | **LOSS** |
| 10 | GS | 12-03 14:30 | 12-03 14:50 | 611.59 | 608.49 | 22 | 13454.98 | -68.2 | -0.51% | 0.73R | 20m | market | early-reversal | trend | breakout | neutral | 68.63 | ↓610.18 | 0.1362 | 2.19 | **LOSS** |
| 11 | GS | 12-20 14:35 | 12-20 14:55 | 563.44 | 559.72 | 22 | 12395.68 | -81.84 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 73.51 | ↓559.27 | -0.1415 | 1.99 | **LOSS** |
| 12 | GS | 02-07 14:55 | 02-07 15:15 | 663.79 | 659.74 | 21 | 13939.59 | -85.05 | -0.61% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 77.17 | ↓660.66 | 1.1549 | 1.86 | **LOSS** |
| 13 | GS | 02-27 15:20 | 02-27 15:55 | 623.59 | 621.33 | 22 | 13718.98 | -49.72 | -0.36% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | 59.22 | ↑619.81 | 0.8545 | 1.53 | **LOSS** |
| 14 | GS | 03-17 15:20 | 03-17 15:45 | 551.51 | 548.82 | 25 | 13787.75 | -67.25 | -0.49% | 0.7R | 25m | market | early-reversal | trend | trend | neutral | 71.27 | ↑546.75 | 1.9621 | 1.19 | **LOSS** |
| 15 | GS | 04-01 15:15 | 04-01 15:40 | 548.19 | 546.31 | 25 | 13704.75 | -47 | -0.34% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 66.65 | ↑540.04 | 0.0063 | 1.39 | **LOSS** |
| 16 | GS | 05-01 15:10 | 05-01 16:00 | 555.93 | 555.25 | 25 | 13898.25 | -17 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 17 | GS | 08-22 14:10 | 08-22 15:55 | 734.26 | 742.22 | 18 | 13216.68 | +143.28 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 18 | GS | 09-09 14:35 | 09-09 16:20 | 753.38 | 755.19 | 18 | 13560.84 | +32.58 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 19 | GS | 09-10 14:00 | 09-10 14:35 | 771.21 | 767.95 | 18 | 13881.78 | -58.68 | -0.42% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 20 | GS | 09-15 14:40 | 09-15 15:45 | 789.8 | 782.9 | 17 | 13426.6 | -117.3 | -0.87% | 1.24R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 21 | GS | 11-04 15:05 | 11-04 16:10 | 795.57 | 795.74 | 17 | 13524.69 | +2.89 | +0.02% | 0.02R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 22 | GS | 12-03 15:00 | 12-03 16:45 | 824.1 | 829.51 | 16 | 13185.6 | +86.56 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 23 | GS | 12-04 15:20 | 12-04 15:45 | 843.81 | 838.44 | 16 | 13500.96 | -85.92 | -0.64% | 0.91R | 25m | market | early-reversal | trend | trend | neutral | 69.2 | ↓840.22 | 1.5946 | 1.51 | **LOSS** |
| 24 | GS | 12-17 14:30 | 12-17 15:20 | 889.97 | 889.37 | 14 | 12459.58 | -8.4 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 25 | GS | 12-19 15:10 | 12-19 15:40 | 895.46 | 892.62 | 15 | 13431.9 | -42.6 | -0.32% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 77.85 | ↑890.85 | 3.3771 | 2.29 | **LOSS** |
| 26 | GS | 01-15 15:05 | 01-15 16:50 | 957.97 | 968.87 | 14 | 13411.58 | +152.6 | +1.14% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 27 | GS | 01-21 15:05 | 01-21 16:50 | 958.11 | 960.3 | 14 | 13413.54 | +30.66 | +0.23% | 0.31R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 28 | GS | 01-26 14:40 | 01-26 15:00 | 933.3 | 929.72 | 14 | 13066.2 | -50.12 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 29 | GS | 02-03 14:30 | 02-03 14:50 | 957.62 | 950.12 | 14 | 13406.68 | -105 | -0.78% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 30 | GS | 02-09 15:15 | 02-09 17:00 | 940.19 | 943.34 | 14 | 13162.66 | +44.1 | +0.34% | 0.4R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 31 | GS | 02-10 14:45 | 02-10 15:10 | 958.47 | 955.05 | 14 | 13418.58 | -47.88 | -0.36% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 71.91 | ↓953.51 | 1.4363 | 2.25 | **LOSS** |
| 32 | GS | 02-24 14:40 | 02-24 14:50 | 906.55 | 894.79 | 15 | 13598.25 | -176.4 | -1.3% | 1.55R | 10m | market | stop-loss | breakout | breakout | neutral | 79.74 | ↓896.16 | 2.0987 | 1.63 | **LOSS** |
| 33 | GS | 03-23 15:00 | 03-23 15:25 | 848 | 845.14 | 16 | 13568 | -45.76 | -0.34% | 0.45R | 25m | market | early-reversal | trend | trend | neutral | 70.46 | ↑839.76 | 8.9736 | 1.01 | **LOSS** |
| 34 | GS | 04-23 14:20 | 04-23 15:35 | 942.06 | 940.9 | 14 | 13188.84 | -16.24 | -0.12% | 0.17R | 75m | market | stagnation | trend | trend | neutral | 72.79 | ↑938.59 | 1.646 | 1.07 | **LOSS** |

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

- ⚠️ **Profit factor 0.42 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.66R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:05:42.438Z*
