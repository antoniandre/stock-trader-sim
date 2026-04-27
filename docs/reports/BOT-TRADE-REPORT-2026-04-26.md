# Bot Trade Report — 41 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T06:44:17.546Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** candidate | **Symbols scanned:** 4 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"lastEntryUtcMin":930,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $1553.1 (+1.55%) over 41 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 41 |
| Win rate | 48.78% (20W / 21L) |
| Net P&L | $+1553.1 (+1.55%) |
| Gross profit | $2837.11 |
| Gross loss | $1284.01 |
| Profit factor | 2.21 |
| Avg win | $141.86 |
| Avg loss | $61.14 |
| Payoff ratio | 2.32:1 |
| Expectancy | $+37.88 / trade |
| Max drawdown | 0.44% |
| Sharpe ratio (ann.) | 5.52 |
| Trades / active day | 1.46 |
| Avg confidence | 100% |
| Avg trade duration | 67 min |
| Avg risk ratio | 0.88R |
| Starting equity | $100,000 |
| Ending equity | $101,553.1 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 23.08% | $-31.88 | $-2.45 |
| Mid  10:30–11:30 | 28 | 60.71% | $+1584.98 | $56.61 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 14 | 7 | 50% | $+614.55 | $+43.9 | 2.31 | eligible |
| GOOGL | 6 | 4 | 66.67% | $+536.36 | $+89.39 | 12.27 | eligible |
| AMZN | 13 | 7 | 53.85% | $+497.25 | $+38.25 | 2.73 | eligible |
| META | 8 | 2 | 25% | $-95.06 | $-11.88 | 0.8 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 21 | 10 | 47.62% | $+313.95 | $+14.95 |
| breakout | 20 | 10 | 50% | $+1239.15 | $+61.96 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 26 | 14 | 53.85% | $+1076.44 | $+41.4 |
| extendedBreakout | 4 | 2 | 50% | $+186.15 | $+46.54 |
| noisyHighBeta | 1 | 1 | 100% | $+160.58 | $+160.58 |
| falseBreakoutProne | 10 | 3 | 30% | $+129.93 | $+12.99 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NVDA | 10 | 2.55 | $+42.12 | 4 | 1.97 | $+48.34 | 0.2% | 1.57 | promote |
| Time slot | Mid 10:30-11:30 | 23 | 3.67 | $+61.32 | 5 | 3.09 | $+34.91 | 0.04% | 1.84 | promote |
| Setup | breakout | 9 | 5.43 | $+101.49 | 11 | 1.64 | $+29.61 | 0.26% | 1.28 | promote |
| Symbol | AMZN | 8 | 3.8 | $+54.19 | 5 | 1.48 | $+12.75 | 0.12% | 0.97 | watch |
| Behavior | neutral | 19 | 3.77 | $+53.78 | 7 | 1.27 | $+7.8 | 0.1% | 0.84 | watch |
| Setup | trend | 15 | 2.25 | $+30.34 | 6 | 0.31 | $-23.53 | 0.14% | 0.18 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1444.39 | 2.07 |
| +3 bps/side | $+1226.98 | 1.84 |
| +5 bps/side | $+1009.55 | 1.64 |
| +10 bps/side | $+466.04 | 1.25 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 15 |
| stagnation | 4 |
| breakeven-stop | 2 |
| trim-profit-target | 2 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 2 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 3 | NVDA | 01-30 15:15 | 01-30 16:15 | 193.04 | 192.29 | 72 | 13898.88 | -54 | -0.39% | 0.4R | 60m | market | stagnation | trend | trend | neutral | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 4 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 5 | AMZN | 02-02 15:15 | 02-02 15:45 | 245.23 | 244.25 | 57 | 13978.11 | -55.86 | -0.4% | 0.34R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 6 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 7 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 8 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 74 | 14027.44 | +160.58 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 9 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 68 | 13850.92 | +189.72 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 10 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 11 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 12 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 13 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 14 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 15 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 16 | META | 02-26 14:40 | 02-26 15:00 | 660.83 | 656.3 | 21 | 13877.43 | -95.13 | -0.69% | 0.84R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 72.73 | ↓655.58 | 1.4234 | 2.3 | **LOSS** |
| 17 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 18 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.25 | 180.95 | 77 | 14033.25 | -100.1 | -0.71% | 0.87R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 19 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 66 | 14040.84 | +196.68 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 20 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 21 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 64 | 14011.52 | -63.36 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 22 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.5 | 185.25 | 76 | 14022 | +57 | +0.41% | 0.44R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 23 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 65 | 13989.95 | -35.75 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 24 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 25 | NVDA | 03-13 13:30 | 03-13 14:00 | 185.35 | 184.03 | 75 | 13901.25 | -99 | -0.71% | 1R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.44 | ↓185.35 | 0.1277 | 3.05 | **LOSS** |
| 26 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 22 | 13962.96 | -48.18 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 27 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 28 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 23 | 13986.3 | -39.33 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 29 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 66 | 14019.06 | -62.7 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 30 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 69 | 13953.87 | -54.51 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 31 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 32 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 33 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 24 | 13983.12 | -149.28 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 34 | META | 04-06 13:30 | 04-06 14:00 | 581.44 | 577.99 | 24 | 13954.56 | -82.8 | -0.59% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.03 | ↓579.82 | 1.2555 | 1.54 | **LOSS** |
| 35 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 36 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 37 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 38 | AMZN | 04-21 13:40 | 04-21 14:45 | 252.58 | 252.31 | 55 | 13891.9 | -14.85 | -0.11% | 0.12R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |
| 39 | AMZN | 04-23 14:35 | 04-23 15:45 | 256.96 | 256.96 | 54 | 13875.84 | +0 | +0% | 0R | 70m | market | breakeven-stop | trend | trend | neutral | 66.63 | ↑255.44 | 0.4717 | 1.03 | **WIN** |
| 40 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 41 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 20 | 13364.4 | -63.8 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |

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

- ✅ **Profit factor 2.21** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.88R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T06:44:17.546Z*
