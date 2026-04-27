# Bot Trade Report — 43 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:05:44.944Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** candidate | **Symbols scanned:** 4 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $1120.98 (+1.12%) over 43 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 43 |
| Win rate | 34.88% (15W / 28L) |
| Net P&L | $+1120.98 (+1.12%) |
| Gross profit | $2648.54 |
| Gross loss | $1527.56 |
| Profit factor | 1.73 |
| Avg win | $176.57 |
| Avg loss | $54.56 |
| Payoff ratio | 3.24:1 |
| Expectancy | $+26.07 / trade |
| Max drawdown | 0.68% |
| Sharpe ratio (ann.) | 4.08 |
| Trades / active day | 1.48 |
| Avg confidence | 100% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.9R |
| Starting equity | $100,000 |
| Ending equity | $101,120.98 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 33.33% | $+358.37 | $29.86 |
| Mid  10:30–11:30 | 20 | 45% | $+842.4 | $42.12 |
| Noon 11:30–13:00 | 10 | 20% | $-4.82 | $-0.48 |
| PM   13:00–14:00 | 1 | 0% | $-74.97 | $-74.97 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 13 | 5 | 38.46% | $+574.11 | $+44.16 | 2.45 | throttle |
| GOOGL | 9 | 4 | 44.44% | $+387.59 | $+43.07 | 3.23 | eligible |
| META | 10 | 3 | 30% | $+82.77 | $+8.28 | 1.18 | throttle |
| AMZN | 11 | 3 | 27.27% | $+76.51 | $+6.96 | 1.16 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 22 | 5 | 22.73% | $-114.69 | $-5.21 |
| breakout | 21 | 10 | 47.62% | $+1235.67 | $+58.84 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 9 | 4 | 44.44% | $+537.92 | $+59.77 |
| neutral | 28 | 8 | 28.57% | $+387.2 | $+13.83 |
| noisyHighBeta | 1 | 1 | 100% | $+154.66 | $+154.66 |
| extendedBreakout | 5 | 2 | 40% | $+41.2 | $+8.24 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 11 | 2.34 | $+46.13 | 10 | 2.98 | $+72.82 | 0.15% | 2.35 | promote |
| Symbol | GOOGL | 5 | 2.14 | $+28.49 | 4 | 6.09 | $+61.28 | 0.05% | 4.05 | promote |
| Symbol | NVDA | 9 | 2.55 | $+39.36 | 4 | 2.31 | $+54.96 | 0.17% | 1.78 | promote |
| Time slot | Mid 10:30-11:30 | 15 | 2.59 | $+49.97 | 5 | 1.6 | $+18.57 | 0.1% | 1.12 | promote |
| Symbol | META | 6 | 1.4 | $+13.11 | 4 | 1.01 | $+1.03 | 0.21% | 0.84 | watch |
| Symbol | AMZN | 5 | 1.67 | $+29.96 | 6 | 0.72 | $-12.22 | 0.17% | 0.53 | watch |
| Behavior | neutral | 19 | 2.2 | $+27.86 | 9 | 0.63 | $-15.79 | 0.27% | 0.45 | watch |
| Setup | trend | 14 | 1.55 | $+15.55 | 8 | 0.14 | $-41.55 | 0.33% | 0.09 | watch |
| Behavior | extendedBreakout | 5 | 1.12 | $+8.24 | 0 | 0 | $+0 | 0% | 0 | reject |
| Time slot | Noon 11:30-13:00 | 9 | 1.23 | $+5.62 | 1 | 0 | $-55.44 | 0.06% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1007.22 | 1.63 |
| +3 bps/side | $+779.68 | 1.44 |
| +5 bps/side | $+552.15 | 1.29 |
| +10 bps/side | $-16.7 | 0.99 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 19 |
| timeout | 11 |
| stagnation | 7 |
| breakeven-stop | 2 |
| trim-profit-target | 2 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-30 15:15 | 01-30 16:05 | 193.08 | 192.95 | 72 | 13901.76 | -9.36 | -0.07% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 79.21 | ↑192.21 | 0.3686 | 1.84 | **LOSS** |
| 2 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 3 | AMZN | 02-02 15:15 | 02-02 15:40 | 245.28 | 244.31 | 57 | 13980.96 | -55.29 | -0.4% | 0.34R | 25m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 4 | META | 02-05 16:25 | 02-05 17:15 | 675.25 | 674.78 | 20 | 13505 | -9.4 | -0.07% | 0.06R | 50m | market | stagnation | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **LOSS** |
| 5 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.4 | 181.94 | 39 | 13915.2 | +138.06 | +1.98% | 1.14R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 6 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.4 | 183.49 | 39 | 13915.2 | +198.51 | +2.85% | 1.64R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 7 | META | 02-06 17:30 | 02-06 18:05 | 664.25 | 660.68 | 21 | 13949.25 | -74.97 | -0.54% | 0.72R | 35m | market | early-reversal | trend | trend | neutral | 64.21 | ↑656.89 | 1.4376 | 1.26 | **LOSS** |
| 8 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.6 | 191.69 | 74 | 14030.4 | +154.66 | +1.1% | 1.08R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 9 | META | 02-09 15:55 | 02-09 17:35 | 666.6 | 680.03 | 10 | 13332 | +134.3 | +2.01% | 2.87R | 100m | market | trim-profit-target | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 10 | META | 02-09 15:55 | 02-09 17:40 | 666.6 | 680.56 | 10 | 13332 | +139.6 | +2.09% | 2.99R | 105m | market | timeout | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 11 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.25 | 313.59 | 44 | 13827 | -29.04 | -0.21% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 12 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.31 | 183.96 | 76 | 14007.56 | -26.6 | -0.19% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 13 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.73 | 206.44 | 68 | 13853.64 | +184.28 | +1.33% | 1.9R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 14 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 15 | GOOGL | 02-19 16:20 | 02-19 16:40 | 305.49 | 303.85 | 45 | 13747.05 | -73.8 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↑303.29 | 0.5567 | 3.82 | **LOSS** |
| 16 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 17 | AMZN | 02-20 14:30 | 02-20 14:50 | 206.49 | 205.78 | 67 | 13834.83 | -47.57 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 79.64 | ↓205.54 | 0.2565 | 2.14 | **LOSS** |
| 18 | AMZN | 02-20 15:10 | 02-20 15:30 | 210 | 208.19 | 66 | 13860 | -119.46 | -0.86% | 0.7R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 80.43 | ↑207.76 | 1.1209 | 2.49 | **LOSS** |
| 19 | META | 02-20 15:35 | 02-20 16:25 | 656.04 | 655.55 | 21 | 13776.84 | -10.29 | -0.07% | 0.06R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 20 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.6 | 188.75 | 74 | 14030.4 | -62.9 | -0.45% | 0.41R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 21 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.14 | 191.6 | 72 | 13906.08 | -110.88 | -0.8% | 1.1R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 22 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.12 | 191.87 | 73 | 14024.76 | -18.25 | -0.13% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 23 | META | 02-26 14:40 | 02-26 15:00 | 660.96 | 656.17 | 21 | 13880.16 | -100.59 | -0.72% | 0.88R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 72.73 | ↓655.58 | 1.4234 | 2.3 | **LOSS** |
| 24 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.63 | 307.38 | 45 | 13843.35 | -11.25 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 25 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.78 | 215.67 | 65 | 13830.7 | +187.85 | +1.36% | 1.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 26 | AMZN | 03-05 14:30 | 03-05 15:05 | 218.97 | 218 | 64 | 14014.08 | -62.08 | -0.44% | 0.63R | 35m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 27 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.77 | 180.05 | 77 | 13919.29 | -55.44 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 28 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.28 | 214.63 | 65 | 13993.2 | -42.25 | -0.3% | 0.31R | 50m | market | early-reversal | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 29 | GOOGL | 03-11 14:25 | 03-11 15:05 | 311.03 | 309.96 | 45 | 13996.35 | -48.15 | -0.34% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 30 | META | 03-17 13:30 | 03-17 13:55 | 634.81 | 632.36 | 22 | 13965.82 | -53.9 | -0.39% | 0.51R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 31 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.13 | 177.33 | 78 | 13894.14 | -62.4 | -0.45% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↓177.24 | 1.1472 | 1.96 | **LOSS** |
| 32 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.46 | 211.42 | 65 | 13809.9 | -67.6 | -0.49% | 0.68R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 33 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.99 | 281.38 | 50 | 13949.5 | +119.5 | +0.86% | 0.92R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 34 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.29 | 296.79 | 47 | 13831.63 | +117.5 | +0.85% | 1.04R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 35 | META | 04-01 13:30 | 04-01 13:50 | 582.75 | 576.3 | 24 | 13986 | -154.8 | -1.11% | 1.28R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 36 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.94 | 231.06 | 61 | 13904.34 | +190.32 | +1.37% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 37 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.53 | 182.88 | 76 | 13948.28 | -49.4 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 38 | AMZN | 04-10 13:35 | 04-10 14:00 | 238.42 | 237.19 | 58 | 13828.36 | -71.34 | -0.52% | 0.68R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.44 | ↓237.43 | 1.1799 | 2.17 | **LOSS** |
| 39 | META | 04-14 13:35 | 04-14 15:20 | 646.56 | 659.98 | 21 | 13577.76 | +281.82 | +2.08% | 2.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 95.25 | ↑643.39 | 2.4169 | 2.58 | **WIN** |
| 40 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.81 | 332.15 | 42 | 13894.02 | +56.28 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 41 | AMZN | 04-21 13:40 | 04-21 14:45 | 252.63 | 252.26 | 55 | 13894.65 | -20.35 | -0.15% | 0.16R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |
| 42 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.81 | 208.42 | 69 | 13993.89 | +387.09 | +2.77% | 2.35R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 43 | META | 04-24 14:05 | 04-24 14:25 | 668.35 | 664.9 | 20 | 13367 | -69 | -0.52% | 0.62R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |

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

- ✅ **Profit factor 1.73** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.9R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:05:44.944Z*
