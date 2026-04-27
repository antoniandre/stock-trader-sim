# Bot Trade Report — 28 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:45:45.822Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $30.23 (+0.03%) over 28 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 28 |
| Win rate | 39.29% (11W / 17L) |
| Net P&L | $+30.23 (+0.03%) |
| Gross profit | $917.22 |
| Gross loss | $886.99 |
| Profit factor | 1.03 |
| Avg win | $83.38 |
| Avg loss | $52.18 |
| Payoff ratio | 1.6:1 |
| Expectancy | $+1.08 / trade |
| Max drawdown | 0.38% |
| Sharpe ratio (ann.) | 0.21 |
| Trades / active day | 1.12 |
| Avg confidence | 100% |
| Avg trade duration | 63 min |
| Avg risk ratio | 0.67R |
| Starting equity | $100,000 |
| Ending equity | $100,030.23 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 28 | 39.29% | $+30.23 | $1.08 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AAPL | 28 | 11 | 39.29% | $+30.23 | $+1.08 | 1.03 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 6 | 2 | 33.33% | $+0.74 | $+0.12 |
| trend | 22 | 9 | 40.91% | $+29.49 | $+1.34 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 27 | 11 | 40.74% | $+147.83 | $+5.48 |
| noisyHighBeta | 1 | 0 | 0% | $-117.6 | $-117.6 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 13 | 0.44 | $-26.37 | 9 | 4.3 | $+41.37 | 0.11% | 2.78 | reject |
| Symbol | AAPL | 16 | 0.65 | $-14.72 | 12 | 2.21 | $+22.15 | 0.22% | 1.42 | reject |
| Behavior | neutral | 15 | 0.79 | $-7.86 | 12 | 2.21 | $+22.15 | 0.22% | 1.42 | reject |
| Time slot | Mid 10:30-11:30 | 16 | 0.65 | $-14.72 | 12 | 2.21 | $+22.15 | 0.22% | 1.42 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-37.85 | 0.96 |
| +3 bps/side | $-174.04 | 0.83 |
| +5 bps/side | $-310.28 | 0.72 |
| +10 bps/side | $-650.76 | 0.52 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 12 |
| timeout | 8 |
| trim-profit-target | 3 |
| breakeven-stop | 3 |
| stagnation | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AAPL | 06-11 14:35 | 06-11 16:20 | 202.05 | 204.13 | 69 | 13941.45 | +143.52 | +1.03% | 0.79R | 105m | market | timeout | breakout | breakout | neutral | 92.76 | ↑198.85 | 2.1704 | 1.19 | **WIN** |
| 2 | AAPL | 06-17 14:55 | 06-17 15:15 | 216.99 | 216.22 | 64 | 13887.36 | -49.28 | -0.35% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.29 | ↑214.82 | 1.1471 | 1.21 | **LOSS** |
| 3 | AAPL | 06-24 15:15 | 06-24 16:00 | 212.3 | 211.61 | 66 | 14011.8 | -45.54 | -0.33% | 0.42R | 45m | market | early-reversal | trend | trend | neutral | 71.54 | ↑208.99 | 0.5474 | 2.88 | **LOSS** |
| 4 | AAPL | 07-23 15:25 | 07-23 16:15 | 226.75 | 226.21 | 61 | 13831.75 | -32.94 | -0.24% | 0.34R | 50m | market | stagnation | trend | trend | neutral | 78.41 | ↑224.8 | 0.4321 | 1.83 | **LOSS** |
| 5 | AAPL | 09-26 14:40 | 09-26 15:10 | 228.12 | 227.03 | 61 | 13915.32 | -66.49 | -0.48% | 0.69R | 30m | market | early-reversal | trend | trend | neutral | 70.78 | ↑226.73 | 0.6878 | 1.47 | **LOSS** |
| 6 | AAPL | 11-25 14:30 | 11-25 15:15 | 232.47 | 231.56 | 60 | 13948.2 | -54.6 | -0.39% | 0.56R | 45m | market | early-reversal | breakout | breakout | neutral | 80.71 | ↓232.14 | 0.1145 | 2.11 | **LOSS** |
| 7 | AAPL | 12-24 14:30 | 12-24 16:15 | 257.01 | 257.35 | 54 | 13878.54 | +18.36 | +0.13% | 0.14R | 105m | market | timeout | trend | breakout | neutral | 71.1 | ↑256.37 | 0.4318 | 1.44 | **WIN** |
| 8 | AAPL | 01-23 15:05 | 01-23 15:50 | 225.96 | 225.12 | 61 | 13783.56 | -51.24 | -0.37% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 75.35 | ↓225.3 | 0.7539 | 1.71 | **LOSS** |
| 9 | AAPL | 02-11 15:00 | 02-11 16:05 | 231.23 | 233.64 | 30 | 13873.8 | +72.3 | +1.04% | 1.08R | 65m | market | trim-profit-target | trend | trend | neutral | 75.07 | ↑230.4 | 0.5416 | 1.66 | **WIN** |
| 10 | AAPL | 02-11 15:00 | 02-11 16:45 | 231.23 | 234.83 | 30 | 13873.8 | +108 | +1.56% | 1.63R | 105m | market | timeout | trend | trend | neutral | 75.07 | ↑230.4 | 0.5416 | 1.66 | **WIN** |
| 11 | AAPL | 02-14 14:45 | 02-14 15:40 | 243.85 | 243.55 | 57 | 13899.45 | -17.1 | -0.12% | 0.17R | 55m | market | stagnation | trend | trend | neutral | 73.29 | ↓242.96 | 0.32 | 2.28 | **LOSS** |
| 12 | AAPL | 02-24 14:55 | 02-24 15:35 | 248.19 | 246.39 | 56 | 13898.64 | -100.8 | -0.73% | 0.78R | 40m | market | early-reversal | trend | trend | neutral | 72.78 | ↓246.36 | 0.1914 | 1.94 | **LOSS** |
| 13 | AAPL | 03-07 14:35 | 03-07 16:20 | 237.44 | 238.99 | 58 | 13771.52 | +89.9 | +0.65% | 0.81R | 105m | market | timeout | trend | trend | neutral | 64.78 | ↑236.29 | 0.4002 | 1.01 | **WIN** |
| 14 | AAPL | 04-09 14:30 | 04-09 14:50 | 180.1 | 177.3 | 42 | 7564.2 | -117.6 | -1.55% | 0.78R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 74.61 | ↓177.17 | 1.7521 | 1 | **LOSS** |
| 15 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.34 | 203.44 | 68 | 13895.12 | -61.2 | -0.44% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 16 | AAPL | 07-03 14:30 | 07-03 14:50 | 214.33 | 213.24 | 65 | 13931.45 | -70.85 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 69.28 | ↓213.2 | 0.518 | 1.91 | **LOSS** |
| 17 | AAPL | 08-06 15:15 | 08-06 16:25 | 212.94 | 214.37 | 32 | 13841.1 | +45.76 | +0.67% | 0.89R | 70m | market | trim-profit-target | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 18 | AAPL | 08-06 15:15 | 08-06 17:00 | 212.94 | 214.09 | 33 | 13841.1 | +37.95 | +0.54% | 0.72R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 19 | AAPL | 08-08 14:30 | 08-08 16:15 | 223.42 | 227.01 | 62 | 13852.04 | +222.58 | +1.61% | 1.66R | 105m | market | timeout | trend | trend | neutral | 77.34 | ↑221.79 | 0.8259 | 1.49 | **WIN** |
| 20 | AAPL | 10-24 14:45 | 10-24 16:30 | 262.23 | 263.1 | 53 | 13898.19 | +46.11 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑260.66 | 0.4667 | 1.06 | **WIN** |
| 21 | AAPL | 11-10 14:30 | 11-10 15:35 | 271.65 | 271.11 | 51 | 13854.15 | -27.54 | -0.2% | 0.28R | 65m | market | breakeven-stop | breakout | breakout | neutral | 80.22 | ↓270.77 | 0.4078 | 1.35 | **LOSS** |
| 22 | AAPL | 11-19 15:10 | 11-19 15:55 | 271.27 | 270.22 | 51 | 13834.77 | -53.55 | -0.39% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 71.19 | ↑269.24 | 0.6054 | 1 | **LOSS** |
| 23 | AAPL | 11-20 14:30 | 11-20 16:05 | 272.68 | 272.66 | 51 | 13906.68 | -1.02 | -0.01% | 0.01R | 95m | market | breakeven-stop | trend | trend | neutral | 69.09 | ↓272.4 | 0.0598 | 3.59 | **LOSS** |
| 24 | AAPL | 11-24 14:30 | 11-24 14:50 | 274.98 | 273.41 | 50 | 13749 | -78.5 | -0.57% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 67.43 | ↓273.82 | 0.0722 | 1.64 | **LOSS** |
| 25 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.78 | 274.77 | 50 | 13739 | -0.5 | 0% | 0R | 40m | market | breakeven-stop | breakout | breakout | neutral | 85.63 | ↓273.89 | 0.3927 | 4.02 | **LOSS** |
| 26 | AAPL | 02-23 15:15 | 02-23 16:00 | 266.85 | 265.73 | 52 | 13876.2 | -58.24 | -0.42% | 0.38R | 45m | market | early-reversal | trend | trend | neutral | 63.51 | ↓265.35 | 0.4074 | 1.4 | **LOSS** |
| 27 | AAPL | 04-15 14:45 | 04-15 16:25 | 262.14 | 264.4 | 26 | 13893.42 | +58.76 | +0.86% | 1.23R | 100m | market | trim-profit-target | trend | trend | neutral | 62.81 | ↑259.85 | 0.7879 | 1.16 | **WIN** |
| 28 | AAPL | 04-15 14:45 | 04-15 16:30 | 262.14 | 264.88 | 27 | 13893.42 | +73.98 | +1.05% | 1.5R | 105m | market | timeout | trend | trend | neutral | 62.81 | ↑259.85 | 0.7879 | 1.16 | **WIN** |

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

- ⚠️ **Profit factor 1.03 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.67R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:45:45.822Z*
