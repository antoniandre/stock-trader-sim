# Bot Trade Report — 40 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:18:39.480Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $292.71 (+0.29%) over 40 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 40 |
| Win rate | 45% (18W / 22L) |
| Net P&L | $+292.71 (+0.29%) |
| Gross profit | $2259.88 |
| Gross loss | $1967.17 |
| Profit factor | 1.15 |
| Avg win | $125.55 |
| Avg loss | $89.42 |
| Payoff ratio | 1.4:1 |
| Expectancy | $+7.32 / trade |
| Max drawdown | 0.63% |
| Sharpe ratio (ann.) | 0.88 |
| Trades / active day | 1.21 |
| Avg confidence | 100% |
| Avg trade duration | 56 min |
| Avg risk ratio | 0.78R |
| Starting equity | $100,000 |
| Ending equity | $100,292.71 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 58.33% | $+336.63 | $28.05 |
| Mid  10:30–11:30 | 28 | 39.29% | $-43.92 | $-1.57 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 40 | 18 | 45% | $+292.71 | $+7.32 | 1.15 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 15 | 6 | 40% | $+487.42 | $+32.49 |
| trend | 25 | 12 | 48% | $-194.71 | $-7.79 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 37 | 16 | 43.24% | $+220.48 | $+5.96 |
| noisyHighBeta | 3 | 2 | 66.67% | $+72.23 | $+24.08 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | TSLA | 24 | 1.54 | $+22.6 | 16 | 0.74 | $-15.61 | 0.64% | 0.59 | watch |
| Behavior | neutral | 21 | 1.5 | $+22.39 | 16 | 0.74 | $-15.61 | 0.64% | 0.59 | watch |
| Setup | breakout | 5 | 5.47 | $+141.38 | 10 | 0.72 | $-21.95 | 0.51% | 0.6 | watch |
| Time slot | Open 9:30-10:30 | 10 | 2.84 | $+47.46 | 2 | 0 | $-68.97 | 0.14% | 0 | watch |
| Setup | trend | 19 | 0.8 | $-8.65 | 6 | 0.83 | $-5.05 | 0.18% | 0.57 | reject |
| Time slot | Mid 10:30-11:30 | 14 | 1.09 | $+4.85 | 14 | 0.87 | $-7.99 | 0.5% | 0.69 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+198.37 | 1.1 |
| +3 bps/side | $+9.64 | 1 |
| +5 bps/side | $-179.12 | 0.92 |
| +10 bps/side | $-650.88 | 0.75 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 18 |
| timeout | 9 |
| trim-profit-target | 5 |
| profit-target | 2 |
| stagnation | 2 |
| stop-loss | 2 |
| breakeven-stop | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.83 | 321.86 | 43 | 13924.69 | -84.71 | -0.61% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 2 | TSLA | 05-22 15:20 | 05-22 15:40 | 344.05 | 342.24 | 40 | 13762 | -72.4 | -0.53% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 3 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.94 | 361.1 | 38 | 13791.72 | -69.92 | -0.51% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 4 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.3 | 353.52 | 39 | 13622.7 | +164.58 | +1.21% | 0.92R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 5 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.45 | 323.08 | 43 | 13951.35 | -58.91 | -0.42% | 0.32R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 6 | TSLA | 07-16 14:30 | 07-16 15:20 | 319.75 | 318.04 | 43 | 13749.25 | -73.53 | -0.53% | 0.32R | 50m | market | early-reversal | breakout | breakout | neutral | 78.44 | ↑316.63 | 1.4422 | 1.43 | **LOSS** |
| 7 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.87 | 308.27 | 44 | 13678.28 | -114.4 | -0.84% | 0.52R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 8 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.68 | 334.98 | 42 | 13720.56 | +348.6 | +2.54% | 3.39R | 25m | market | profit-target | breakout | breakout | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 9 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.16 | 339.81 | 41 | 13946.56 | -14.35 | -0.1% | 0.08R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 10 | TSLA | 09-10 14:45 | 09-10 16:20 | 353.43 | 353.58 | 39 | 13783.77 | +5.85 | +0.04% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 11 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.34 | 361.09 | 19 | 13936.26 | +71.25 | +1.05% | 0.72R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 12 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.34 | 362.27 | 20 | 13936.26 | +98.6 | +1.38% | 0.95R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 13 | TSLA | 09-16 14:45 | 09-16 15:05 | 421.01 | 416.42 | 33 | 13893.33 | -151.47 | -1.09% | 0.78R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 14 | TSLA | 09-16 15:15 | 09-16 15:40 | 420.17 | 417.43 | 33 | 13865.61 | -90.42 | -0.65% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 58.69 | ↑416.21 | 2.128 | 2.31 | **LOSS** |
| 15 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.92 | 455.47 | 15 | 13978.52 | +68.25 | +1.01% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 16 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.92 | 455.36 | 16 | 13978.52 | +71.04 | +0.98% | 0.75R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 17 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.83 | 421.98 | 32 | 13722.56 | -219.2 | -1.6% | 1.01R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 18 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.23 | 455.2 | 15 | 13566.9 | +44.55 | +0.66% | 0.51R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 19 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.23 | 454.25 | 15 | 13566.9 | +30.3 | +0.45% | 0.35R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 20 | TSLA | 11-10 14:55 | 11-10 16:25 | 439.43 | 446.76 | 8 | 7470.31 | +58.64 | +1.67% | 1.11R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 21 | TSLA | 11-10 14:55 | 11-10 16:40 | 439.43 | 446.32 | 9 | 7470.31 | +62.01 | +1.57% | 1.05R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 22 | TSLA | 11-14 15:25 | 11-14 17:10 | 400.19 | 409.48 | 35 | 14006.65 | +325.15 | +2.32% | 1.16R | 105m | market | timeout | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 23 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.64 | 419.44 | 33 | 13650.12 | +191.4 | +1.4% | 1.01R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 24 | TSLA | 11-19 15:15 | 11-19 15:35 | 410.53 | 407.84 | 18 | 7389.54 | -48.42 | -0.66% | 0.38R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↑406.75 | 1.7263 | 1.09 | **LOSS** |
| 25 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.76 | 441.23 | 16 | 13944.32 | +87.52 | +1.26% | 1.58R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 26 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.76 | 439.57 | 16 | 13944.32 | +60.96 | +0.87% | 1.09R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 27 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 31 | 14060.05 | -103.54 | -0.74% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 28 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.14 | 447.07 | 31 | 13737.34 | +121.83 | +0.89% | 1.06R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 29 | TSLA | 12-12 14:30 | 12-12 15:10 | 452.91 | 454.45 | 31 | 14040.21 | +47.74 | +0.34% | 0.49R | 40m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **WIN** |
| 30 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.83 | 441.03 | 31 | 13758.73 | -86.8 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 31 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.43 | 441.68 | 31 | 13746.33 | -54.25 | -0.39% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 32 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 31 | 13818.25 | -85.87 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 33 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.14 | 438.31 | 33 | 14062.62 | +401.61 | +2.86% | 2.17R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 34 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 34 | 13876.76 | -79.9 | -0.58% | 0.47R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 35 | TSLA | 02-06 15:25 | 02-06 16:15 | 410.34 | 409.75 | 34 | 13951.56 | -20.06 | -0.14% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 76.46 | ↑405.96 | 3.5207 | 1.2 | **LOSS** |
| 36 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.15 | 428.29 | 32 | 13924.8 | -219.52 | -1.58% | 1.34R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 37 | TSLA | 02-24 15:20 | 02-24 15:55 | 406.01 | 404.48 | 34 | 13804.34 | -52.02 | -0.38% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 38 | TSLA | 03-04 15:25 | 03-04 15:45 | 407.81 | 404 | 34 | 13865.54 | -129.54 | -0.93% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 70.86 | ↑401.99 | 3.2565 | 1.83 | **LOSS** |
| 39 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.5 | 362.25 | 38 | 13851 | -85.5 | -0.62% | 0.72R | 35m | market | early-reversal | breakout | breakout | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 40 | TSLA | 04-14 14:25 | 04-14 15:00 | 363.09 | 361.71 | 38 | 13797.42 | -52.44 | -0.38% | 0.24R | 35m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |

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

- ⚠️ **Profit factor 1.15 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.78R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:18:39.480Z*
