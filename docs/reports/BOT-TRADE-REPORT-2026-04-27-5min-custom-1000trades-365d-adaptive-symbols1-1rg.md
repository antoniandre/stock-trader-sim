# Bot Trade Report — 23 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:57.013Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $228.28 (-0.23%) over 23 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 23 |
| Win rate | 39.13% (9W / 14L) |
| Net P&L | $-228.28 (-0.23%) |
| Gross profit | $781.58 |
| Gross loss | $1009.86 |
| Profit factor | 0.77 |
| Avg win | $86.84 |
| Avg loss | $72.13 |
| Payoff ratio | 1.2:1 |
| Expectancy | $-9.93 / trade |
| Max drawdown | 0.65% |
| Sharpe ratio (ann.) | -1.71 |
| Trades / active day | 1.1 |
| Avg confidence | 99.43% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.83R |
| Starting equity | $100,000 |
| Ending equity | $99,771.72 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 2 | 50% | $+92.56 | $46.28 |
| Mid  10:30–11:30 | 13 | 46.15% | $-59.9 | $-4.61 |
| Noon 11:30–13:00 | 7 | 28.57% | $-241.39 | $-34.48 |
| PM   13:00–14:00 | 1 | 0% | $-19.55 | $-19.55 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GS | 23 | 9 | 39.13% | $-228.28 | $-9.93 | 0.77 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 17 | 7 | 41.18% | $-149.14 | $-8.77 |
| breakout | 6 | 2 | 33.33% | $-79.14 | $-13.19 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 23 | 9 | 39.13% | $-228.28 | $-9.93 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 7 | 2.74 | $+35.47 | 6 | 0.2 | $-51.37 | 0.34% | 0.11 | watch |
| Setup | trend | 11 | 0.49 | $-22.77 | 6 | 1.73 | $+16.89 | 0.11% | 1.21 | reject |
| Symbol | GS | 13 | 1.11 | $+4.1 | 10 | 0.46 | $-28.16 | 0.45% | 0.33 | reject |
| Behavior | neutral | 13 | 1.11 | $+4.1 | 10 | 0.46 | $-28.16 | 0.45% | 0.33 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-287.69 | 0.73 |
| +3 bps/side | $-406.49 | 0.64 |
| +5 bps/side | $-525.26 | 0.56 |
| +10 bps/side | $-822.28 | 0.41 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 8 |
| early-reversal | 7 |
| stagnation | 3 |
| stop-loss | 3 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GS | 05-01 15:10 | 05-01 16:00 | 555.93 | 555.25 | 25 | 13898.25 | -17 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 2 | GS | 05-08 15:20 | 05-08 17:10 | 565.92 | 570.89 | 24 | 13582.08 | +119.28 | +0.88% | 1.26R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 3 | GS | 08-22 14:10 | 08-22 15:55 | 734.26 | 742.22 | 19 | 13950.94 | +151.24 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 4 | GS | 09-09 14:35 | 09-09 16:20 | 753.38 | 755.19 | 18 | 13560.84 | +32.58 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 5 | GS | 09-10 14:00 | 09-10 14:35 | 771.21 | 767.95 | 18 | 13881.78 | -58.68 | -0.42% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 6 | GS | 09-15 14:40 | 09-15 15:45 | 789.8 | 782.9 | 17 | 13426.6 | -117.3 | -0.87% | 1.24R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 7 | GS | 10-14 15:55 | 10-14 16:15 | 777.71 | 771.71 | 18 | 13998.78 | -108 | -0.77% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑758.94 | 2.5555 | 1.27 | **LOSS** |
| 8 | GS | 10-14 17:15 | 10-14 18:40 | 779.47 | 778.32 | 17 | 13250.99 | -19.55 | -0.15% | 0.21R | 85m | market | breakeven-stop | trend | trend | neutral | 62.93 | ↑762.4 | 3.3509 | 2 | **LOSS** |
| 9 | GS | 10-29 15:40 | 10-29 16:00 | 800.41 | 794.92 | 17 | 13606.97 | -93.33 | -0.69% | 0.99R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑792.92 | 1.5953 | 3.31 | **LOSS** |
| 10 | GS | 11-18 16:30 | 11-18 17:20 | 781.55 | 777.63 | 17 | 13286.35 | -66.64 | -0.5% | 0.71R | 50m | market | early-reversal | trend | trend | neutral | 77.45 | ↑773.2 | 1.4057 | 1.15 | **LOSS** |
| 11 | GS | 12-03 15:00 | 12-03 16:45 | 824.1 | 829.51 | 16 | 13185.6 | +86.56 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 12 | GS | 12-17 14:30 | 12-17 15:20 | 889.97 | 889.37 | 14 | 12459.58 | -8.4 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 13 | GS | 01-15 15:05 | 01-15 16:50 | 957.97 | 968.87 | 14 | 13411.58 | +152.6 | +1.14% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 14 | GS | 01-21 15:05 | 01-21 16:50 | 958.11 | 960.3 | 14 | 13413.54 | +30.66 | +0.23% | 0.31R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 15 | GS | 01-26 14:40 | 01-26 15:00 | 933.3 | 929.72 | 15 | 13999.5 | -53.7 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 16 | GS | 02-03 14:30 | 02-03 14:50 | 957.62 | 950.12 | 14 | 13406.68 | -105 | -0.78% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 17 | GS | 02-09 15:15 | 02-09 17:00 | 940.19 | 943.34 | 14 | 13162.66 | +44.1 | +0.34% | 0.4R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 18 | GS | 02-10 14:45 | 02-10 15:10 | 958.47 | 955.05 | 14 | 13418.58 | -47.88 | -0.36% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 71.91 | ↓953.51 | 1.4363 | 2.25 | **LOSS** |
| 19 | GS | 02-24 14:40 | 02-24 14:50 | 906.55 | 894.79 | 15 | 13598.25 | -176.4 | -1.3% | 1.55R | 10m | market | stop-loss | breakout | breakout | neutral | 79.74 | ↓896.16 | 2.0987 | 1.63 | **LOSS** |
| 20 | GS | 03-16 15:40 | 03-16 15:55 | 804.36 | 797.92 | 17 | 13674.12 | -109.48 | -0.8% | 1.14R | 15m | market | stop-loss | trend | trend | neutral | 57.21 | ↓798.57 | 3.5466 | 2.94 | **LOSS** |
| 21 | GS | 03-31 16:35 | 03-31 17:35 | 832.11 | 841.42 | 8 | 13313.76 | +74.48 | +1.12% | 1.6R | 60m | market | trim-profit-target | trend | trend | neutral | 72.3 | ↑822.17 | 1.6616 | 2.02 | **WIN** |
| 22 | GS | 03-31 16:35 | 03-31 18:20 | 832.11 | 843.37 | 8 | 13313.76 | +90.08 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 72.3 | ↑822.17 | 1.6616 | 2.02 | **WIN** |
| 23 | GS | 04-14 16:05 | 04-14 16:55 | 908.28 | 906.38 | 15 | 13624.2 | -28.5 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 70.17 | ↑900.03 | 2.7464 | 1.92 | **LOSS** |

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

- ⚠️ **Profit factor 0.77 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.83R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:57.013Z*
