# Bot Trade Report — 34 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:25:56.038Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $18.34 (+0.02%) over 34 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 34 |
| Win rate | 35.29% (12W / 22L) |
| Net P&L | $+18.34 (+0.02%) |
| Gross profit | $1784.44 |
| Gross loss | $1766.1 |
| Profit factor | 1.01 |
| Avg win | $148.7 |
| Avg loss | $80.28 |
| Payoff ratio | 1.85:1 |
| Expectancy | $+0.54 / trade |
| Max drawdown | 0.83% |
| Sharpe ratio (ann.) | 0.06 |
| Trades / active day | 1.1 |
| Avg confidence | 99.62% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.73R |
| Starting equity | $100,000 |
| Ending equity | $100,018.34 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 50% | $+201.39 | $50.35 |
| Mid  10:30–11:30 | 15 | 33.33% | $-145.23 | $-9.68 |
| Noon 11:30–13:00 | 10 | 20% | $-38.98 | $-3.9 |
| PM   13:00–14:00 | 5 | 60% | $+1.16 | $0.23 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ORCL | 34 | 12 | 35.29% | $+18.34 | $+0.54 | 1.01 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 25 | 9 | 36% | $-249.13 | $-9.97 |
| breakout | 9 | 3 | 33.33% | $+267.47 | $+29.72 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 33 | 12 | 36.36% | $+117.16 | $+3.55 |
| noisyHighBeta | 1 | 0 | 0% | $-98.82 | $-98.82 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 20 | 1.41 | $+18.39 | 13 | 0.68 | $-19.28 | 0.51% | 0.53 | watch |
| Symbol | ORCL | 20 | 1.41 | $+18.39 | 14 | 0.6 | $-24.96 | 0.61% | 0.47 | watch |
| Time slot | Mid 10:30-11:30 | 7 | 1.71 | $+41.48 | 8 | 0.3 | $-54.45 | 0.54% | 0.25 | watch |
| Setup | breakout | 5 | 2.71 | $+101.15 | 4 | 0 | $-59.57 | 0.24% | 0 | watch |
| Time slot | Noon 11:30-13:00 | 6 | 0 | $-31.58 | 4 | 2.05 | $+37.63 | 0.08% | 1.55 | reject |
| Time slot | PM 13:00-14:00 | 5 | 1.01 | $+0.23 | 0 | 0 | $+0 | 0% | 0 | reject |
| Setup | trend | 15 | 0.77 | $-9.2 | 10 | 0.83 | $-11.12 | 0.56% | 0.67 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-69.26 | 0.96 |
| +3 bps/side | $-244.49 | 0.87 |
| +5 bps/side | $-419.64 | 0.8 |
| +10 bps/side | $-857.69 | 0.64 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 12 |
| stagnation | 7 |
| timeout | 7 |
| trim-profit-target | 2 |
| stop-loss | 2 |
| trailing-stop | 2 |
| breakeven-stop | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ORCL | 05-13 15:40 | 05-13 17:00 | 162.17 | 161.96 | 86 | 13946.62 | -18.06 | -0.13% | 0.19R | 80m | market | stagnation | trend | trend | neutral | 76.6 | ↑160.23 | 0.952 | 1.11 | **LOSS** |
| 2 | ORCL | 06-13 14:05 | 06-13 15:50 | 207.06 | 212.71 | 67 | 13873.02 | +378.55 | +2.73% | 1.82R | 105m | market | timeout | breakout | breakout | neutral | 87.64 | ↑204.47 | 1.4876 | 1.16 | **WIN** |
| 3 | ORCL | 06-13 16:00 | 06-13 17:15 | 213.09 | 213 | 65 | 13850.85 | -5.85 | -0.04% | 0.04R | 75m | market | breakeven-stop | trend | trend | neutral | 65.58 | ↑208.23 | 2.3452 | 1.71 | **LOSS** |
| 4 | ORCL | 06-24 15:05 | 06-24 16:05 | 214.47 | 213.62 | 65 | 13940.55 | -55.25 | -0.4% | 0.51R | 60m | market | early-reversal | trend | trend | neutral | 71.45 | ↑212 | 1.9699 | 1.21 | **LOSS** |
| 5 | ORCL | 07-03 15:30 | 07-03 16:50 | 236.37 | 236.16 | 59 | 13945.83 | -12.39 | -0.09% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 72.01 | ↑233.21 | 1.5604 | 1.29 | **LOSS** |
| 6 | ORCL | 07-16 17:45 | 07-16 19:20 | 238.6 | 240.26 | 29 | 13838.8 | +48.14 | +0.7% | 1R | 95m | market | trim-profit-target | trend | trend | neutral | 69.01 | ↑235.55 | 0.814 | 1.44 | **WIN** |
| 7 | ORCL | 07-16 17:45 | 07-16 19:30 | 238.6 | 240.36 | 29 | 13838.8 | +51.04 | +0.74% | 1.06R | 105m | market | timeout | trend | trend | neutral | 69.01 | ↑235.55 | 0.814 | 1.44 | **WIN** |
| 8 | ORCL | 08-15 15:30 | 08-15 15:55 | 249.9 | 248.33 | 56 | 13994.4 | -87.92 | -0.63% | 0.84R | 25m | market | early-reversal | trend | trend | neutral | 78.51 | ↑246.82 | 1.3379 | 1.04 | **LOSS** |
| 9 | ORCL | 08-25 15:25 | 08-25 16:20 | 238.47 | 238.3 | 58 | 13831.26 | -9.86 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 73.04 | ↑236.78 | 0.4119 | 1.96 | **LOSS** |
| 10 | ORCL | 09-22 14:35 | 09-22 16:20 | 317.44 | 322.48 | 44 | 13967.36 | +221.76 | +1.59% | 0.9R | 105m | market | timeout | breakout | trend | neutral | 76.89 | ↑311.38 | 2.4313 | 1.1 | **WIN** |
| 11 | ORCL | 10-01 15:40 | 10-01 16:30 | 288.16 | 287.77 | 48 | 13831.68 | -18.72 | -0.14% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑282.59 | 2.0648 | 1.22 | **LOSS** |
| 12 | ORCL | 10-08 14:00 | 10-08 14:20 | 289.59 | 287.24 | 48 | 13900.32 | -112.8 | -0.81% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 13 | ORCL | 10-28 15:55 | 10-28 16:15 | 285.06 | 284.11 | 49 | 13967.94 | -46.55 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 67.58 | ↑282.94 | 0.5272 | 1.46 | **LOSS** |
| 14 | ORCL | 10-31 15:05 | 10-31 15:25 | 265.34 | 262.22 | 52 | 13797.68 | -162.24 | -1.18% | 1.13R | 20m | market | stop-loss | trend | trend | neutral | 72.41 | ↑261.99 | 1.4291 | 1.3 | **LOSS** |
| 15 | ORCL | 11-14 15:05 | 11-14 16:25 | 218.33 | 223.69 | 64 | 13973.12 | +343.04 | +2.45% | 1.23R | 80m | market | profit-target | breakout | breakout | neutral | 51.85 | ↑214.55 | -0.1836 | 1.14 | **WIN** |
| 16 | ORCL | 11-18 17:40 | 11-18 19:25 | 220.18 | 221.46 | 63 | 13871.34 | +80.64 | +0.58% | 0.62R | 105m | market | timeout | breakout | breakout | neutral | 71.2 | ↑217.24 | 0.4637 | 1.87 | **WIN** |
| 17 | ORCL | 11-19 15:00 | 11-19 15:40 | 228.11 | 224.83 | 56 | 12774.16 | -183.68 | -1.44% | 0.77R | 40m | market | early-reversal | breakout | breakout | neutral | 68.66 | ↓223.69 | 0.7165 | 1.8 | **LOSS** |
| 18 | ORCL | 11-25 17:35 | 11-25 17:55 | 198.62 | 196.33 | 70 | 13903.4 | -160.3 | -1.15% | 0.97R | 20m | market | early-reversal | breakout | trend | neutral | 69.43 | ↑192.09 | 1.6125 | 1.55 | **LOSS** |
| 19 | ORCL | 12-03 17:55 | 12-03 18:50 | 205.73 | 205.46 | 68 | 13989.64 | -18.36 | -0.13% | 0.19R | 55m | market | stagnation | trend | trend | neutral | 65.29 | ↑203.45 | 0.5588 | 1.67 | **LOSS** |
| 20 | ORCL | 12-04 15:20 | 12-04 17:05 | 210.31 | 212.38 | 66 | 13880.46 | +136.62 | +0.98% | 0.57R | 105m | market | timeout | trend | trend | neutral | 58.55 | ↑208.95 | 0.5634 | 1.04 | **WIN** |
| 21 | ORCL | 12-24 15:00 | 12-24 15:40 | 197.71 | 196.77 | 71 | 14037.41 | -66.74 | -0.48% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↓196.66 | 0.6538 | 1.65 | **LOSS** |
| 22 | ORCL | 01-05 14:35 | 01-05 14:45 | 201.15 | 196.41 | 69 | 13879.35 | -327.06 | -2.36% | 3.37R | 10m | market | stop-loss | trend | trend | neutral | 70.98 | ↓200.07 | 1.1997 | 5.63 | **LOSS** |
| 23 | ORCL | 01-23 16:45 | 01-23 17:40 | 179.05 | 178.21 | 78 | 13965.9 | -65.52 | -0.47% | 0.57R | 55m | market | early-reversal | trend | trend | neutral | 60.24 | ↑175.32 | 0.7825 | 1.16 | **LOSS** |
| 24 | ORCL | 02-06 15:15 | 02-06 15:50 | 141.3 | 139.47 | 54 | 7630.2 | -98.82 | -1.3% | 0.66R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 57.03 | ↓141.11 | 1.1336 | 1.26 | **LOSS** |
| 25 | ORCL | 02-19 14:35 | 02-19 15:25 | 158.58 | 158.03 | 88 | 13955.04 | -48.4 | -0.35% | 0.38R | 50m | market | stagnation | breakout | breakout | neutral | 79.17 | ↓157.25 | 0.2146 | 1.37 | **LOSS** |
| 26 | ORCL | 03-02 15:00 | 03-02 16:00 | 145.69 | 148.73 | 47 | 13840.55 | +142.88 | +2.09% | 1.05R | 60m | market | trim-profit-target | trend | trend | neutral | 58.53 | ↑144.48 | 0.6836 | 1.4 | **WIN** |
| 27 | ORCL | 03-02 15:00 | 03-02 16:25 | 145.69 | 146.69 | 48 | 13840.55 | +48 | +0.69% | 0.35R | 85m | market | trailing-stop | trend | trend | neutral | 58.53 | ↓144.48 | 0.6836 | 1.4 | **WIN** |
| 28 | ORCL | 03-19 13:45 | 03-19 14:20 | 154.6 | 153.44 | 90 | 13914 | -104.4 | -0.75% | 0.56R | 35m | market | early-reversal | trend | breakout | neutral | 56.07 | ↓152.41 | -0.3495 | 1.58 | **LOSS** |
| 29 | ORCL | 03-31 16:35 | 03-31 18:20 | 144.04 | 146.13 | 97 | 13971.88 | +202.73 | +1.45% | 1.75R | 105m | market | timeout | trend | trend | neutral | 63.27 | ↑142.22 | 0.271 | 1.37 | **WIN** |
| 30 | ORCL | 04-02 14:35 | 04-02 15:25 | 145.54 | 145.41 | 96 | 13971.84 | -12.48 | -0.09% | 0.06R | 50m | market | stagnation | breakout | breakout | neutral | 73.35 | ↑142.46 | -0.4545 | 1.68 | **LOSS** |
| 31 | ORCL | 04-10 15:10 | 04-10 15:30 | 139.41 | 138.68 | 100 | 13941 | -73 | -0.52% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 89.64 | ↑136.7 | 0.3536 | 2.47 | **LOSS** |
| 32 | ORCL | 04-13 16:30 | 04-13 18:15 | 152.51 | 153.51 | 91 | 13878.41 | +91 | +0.66% | 0.83R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑147.91 | 1.4515 | 1.89 | **WIN** |
| 33 | ORCL | 04-21 14:10 | 04-21 15:00 | 181.25 | 181.77 | 77 | 13956.25 | +40.04 | +0.29% | 0.22R | 50m | market | trailing-stop | trend | trend | neutral | 71.31 | ↑179.07 | 1.007 | 1.48 | **WIN** |
| 34 | ORCL | 04-22 16:05 | 04-22 16:30 | 188.97 | 187.92 | 74 | 13983.78 | -77.7 | -0.56% | 0.61R | 25m | market | early-reversal | trend | trend | neutral | 79.29 | ↑186.68 | 0.8393 | 1.54 | **LOSS** |

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

- ⚠️ **Profit factor 1.01 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.73R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:25:56.038Z*
