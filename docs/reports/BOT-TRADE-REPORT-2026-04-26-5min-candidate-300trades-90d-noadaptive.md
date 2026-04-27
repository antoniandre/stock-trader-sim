# Bot Trade Report — 53 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T01:54:26.489Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** candidate | **Symbols scanned:** 4

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1}`

## Verdict

✅ **PROFITABLE** — net gain of $2255.23 (+2.26%) over 53 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 53 |
| Win rate | 47.17% (25W / 28L) |
| Net P&L | $+2255.23 (+2.26%) |
| Gross profit | $3606.92 |
| Gross loss | $1351.69 |
| Profit factor | 2.67 |
| Avg win | $144.28 |
| Avg loss | $48.27 |
| Payoff ratio | 2.99:1 |
| Expectancy | $+42.55 / trade |
| Max drawdown | 0.44% |
| Sharpe ratio (ann.) | 6.3 |
| Trades / active day | 1.66 |
| Avg confidence | 100% |
| Avg trade duration | 67 min |
| Avg risk ratio | 0.89R |
| Starting equity | $100,000 |
| Ending equity | $102,255.23 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 38.46% | $+477.41 | $36.72 |
| Mid  10:30–11:30 | 27 | 62.96% | $+1769.68 | $65.54 |
| Noon 11:30–13:00 | 12 | 25% | $+77.44 | $6.45 |
| PM   13:00–14:00 | 1 | 0% | $-69.3 | $-69.3 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| META | 17 | 8 | 47.06% | $+690.4 | $+40.61 | 2.33 | eligible |
| NVDA | 14 | 6 | 42.86% | $+628.35 | $+44.88 | 2.57 | eligible |
| AMZN | 13 | 7 | 53.85% | $+497.25 | $+38.25 | 2.73 | eligible |
| GOOGL | 9 | 4 | 44.44% | $+439.23 | $+48.8 | 4.04 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 32 | 13 | 40.63% | $+508.04 | $+15.88 |
| breakout | 21 | 12 | 57.14% | $+1747.19 | $+83.2 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 53 | 25 | 47.17% | $+2255.23 | $+42.55 |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2116.13 | 2.48 |
| +3 bps/side | $+1837.93 | 2.15 |
| +5 bps/side | $+1559.72 | 1.89 |
| +10 bps/side | $+864.25 | 1.4 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 19 |
| early-reversal | 18 |
| stagnation | 8 |
| breakeven-stop | 3 |
| trim-profit-target | 3 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 2 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 3 | NVDA | 01-30 15:15 | 01-30 16:15 | 193.04 | 192.29 | 72 | 13898.88 | -54 | -0.39% | 0.4R | 60m | market | stagnation | trend | trend | neutral | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 4 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 5 | AMZN | 02-02 15:15 | 02-02 15:45 | 245.23 | 244.25 | 57 | 13978.11 | -55.86 | -0.4% | 0.34R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 6 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 7 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 8 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 9 | META | 02-06 17:30 | 02-06 18:05 | 664.12 | 660.82 | 21 | 13946.52 | -69.3 | -0.5% | 0.67R | 35m | market | early-reversal | trend | trend | neutral | 64.21 | ↑656.89 | 1.4376 | 1.26 | **LOSS** |
| 10 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 74 | 14027.44 | +160.58 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 11 | META | 02-09 15:55 | 02-09 17:35 | 666.47 | 680.17 | 10 | 13995.87 | +137 | +2.06% | 2.94R | 100m | market | trim-profit-target | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 12 | META | 02-09 15:55 | 02-09 17:40 | 666.47 | 680.7 | 11 | 13995.87 | +156.53 | +2.14% | 3.06R | 105m | market | timeout | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 13 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 14 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 15 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 68 | 13850.92 | +189.72 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 16 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 17 | GOOGL | 02-19 16:20 | 02-19 16:40 | 305.43 | 303.91 | 45 | 13744.35 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↑303.29 | 0.5567 | 3.82 | **LOSS** |
| 18 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 19 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 20 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 21 | META | 02-20 15:35 | 02-20 16:25 | 655.91 | 655.68 | 21 | 13774.11 | -4.83 | -0.04% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 22 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.56 | 188.79 | 74 | 14027.44 | -56.98 | -0.41% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 23 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | neutral | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 24 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 25 | META | 02-26 14:40 | 02-26 15:00 | 660.83 | 656.3 | 21 | 13877.43 | -95.13 | -0.69% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 72.73 | ↓655.58 | 1.4234 | 2.3 | **LOSS** |
| 26 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 27 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.57 | 307.44 | 45 | 13840.65 | -5.85 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 28 | META | 03-02 16:55 | 03-02 17:15 | 659.72 | 657.71 | 21 | 13854.12 | -42.21 | -0.3% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 66.44 | ↑650.04 | 3.161 | 1.16 | **LOSS** |
| 29 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 66 | 14040.84 | +196.68 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | neutral | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 30 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 31 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 64 | 14011.52 | -63.36 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 32 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.73 | 180.09 | 77 | 13916.21 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 33 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 65 | 13989.95 | -35.75 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 34 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 35 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 22 | 13962.96 | -48.18 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | neutral | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 36 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 37 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 23 | 13986.3 | -39.33 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 38 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 66 | 14019.06 | -62.7 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | neutral | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 39 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 69 | 13953.87 | -54.51 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | neutral | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 40 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | neutral | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 41 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | neutral | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 42 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 24 | 13983.12 | -149.28 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | neutral | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 43 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 44 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 45 | META | 04-14 13:35 | 04-14 15:20 | 646.43 | 660.11 | 21 | 13575.03 | +287.28 | +2.12% | 3.03R | 105m | market | timeout | breakout | breakout | neutral | 95.25 | ↑643.39 | 2.4169 | 2.58 | **WIN** |
| 46 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 47 | META | 04-14 15:45 | 04-14 16:35 | 663.7 | 663.48 | 21 | 13937.7 | -4.62 | -0.03% | 0.04R | 50m | market | stagnation | trend | trend | neutral | 79.61 | ↑652.9 | 6 | 1.08 | **LOSS** |
| 48 | META | 04-15 14:10 | 04-15 15:55 | 672.49 | 674.66 | 20 | 13449.8 | +43.4 | +0.32% | 0.39R | 105m | market | timeout | trend | trend | neutral | 76.68 | ↑669.14 | 2.6108 | 1.02 | **WIN** |
| 49 | AMZN | 04-21 13:40 | 04-21 14:45 | 252.58 | 252.31 | 55 | 13891.9 | -14.85 | -0.11% | 0.12R | 65m | market | stagnation | breakout | breakout | neutral | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |
| 50 | AMZN | 04-23 14:35 | 04-23 15:45 | 256.96 | 256.96 | 54 | 13875.84 | +0 | +0% | 0R | 70m | market | breakeven-stop | trend | trend | neutral | 66.63 | ↑255.44 | 0.4717 | 1.03 | **WIN** |
| 51 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | neutral | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 52 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 21 | 14032.62 | -66.99 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |
| 53 | META | 04-24 15:25 | 04-24 17:10 | 672.73 | 679.81 | 20 | 13454.6 | +141.6 | +1.05% | 1.5R | 105m | market | timeout | trend | trend | neutral | 68.58 | ↑665.22 | 2.6989 | 1.72 | **WIN** |

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
| 10 | **Slippage model** | 0.03 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ✅ **Profit factor 2.67** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.89R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T01:54:26.489Z*
