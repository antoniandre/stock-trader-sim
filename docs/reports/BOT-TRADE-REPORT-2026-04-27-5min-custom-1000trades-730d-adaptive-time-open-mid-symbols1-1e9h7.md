# Bot Trade Report — 33 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:40:01.521Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $152.87 (-0.15%) over 33 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 33 |
| Win rate | 39.39% (13W / 20L) |
| Net P&L | $-152.87 (-0.15%) |
| Gross profit | $1470.2 |
| Gross loss | $1623.07 |
| Profit factor | 0.91 |
| Avg win | $113.09 |
| Avg loss | $81.15 |
| Payoff ratio | 1.39:1 |
| Expectancy | $-4.63 / trade |
| Max drawdown | 0.78% |
| Sharpe ratio (ann.) | -0.62 |
| Trades / active day | 1.1 |
| Avg confidence | 97.3% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $99,847.13 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 10 | 60% | $+202.13 | $20.21 |
| Mid  10:30–11:30 | 23 | 30.43% | $-355 | $-15.43 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LRCX | 33 | 13 | 39.39% | $-152.87 | $-4.63 | 0.91 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 11 | 4 | 36.36% | $-138.95 | $-12.63 |
| trend | 22 | 9 | 40.91% | $-13.92 | $-0.63 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 31 | 12 | 38.71% | $-66.17 | $-2.13 |
| noisyHighBeta | 2 | 1 | 50% | $-86.7 | $-43.35 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 17 | 1.47 | $+17.47 | 14 | 0.58 | $-25.94 | 0.78% | 0.47 | watch |
| Time slot | Mid 10:30-11:30 | 13 | 1.61 | $+21.74 | 10 | 0.2 | $-63.76 | 0.78% | 0.16 | watch |
| Setup | breakout | 7 | 1.5 | $+18.91 | 4 | 0.37 | $-67.82 | 0.43% | 0.31 | watch |
| Time slot | Open 9:30-10:30 | 6 | 0.76 | $-12.04 | 4 | 5.04 | $+68.6 | 0.07% | 3.92 | reject |
| Setup | trend | 12 | 1.16 | $+6.5 | 10 | 0.79 | $-9.19 | 0.42% | 0.61 | reject |
| Symbol | LRCX | 19 | 1.28 | $+11.07 | 14 | 0.58 | $-25.94 | 0.78% | 0.47 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-232.23 | 0.86 |
| +3 bps/side | $-390.97 | 0.78 |
| +5 bps/side | $-549.74 | 0.71 |
| +10 bps/side | $-946.58 | 0.56 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| timeout | 9 |
| stagnation | 4 |
| trim-profit-target | 3 |
| breakeven-stop | 2 |
| trailing-stop | 2 |
| stop-loss | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LRCX | 06-10 15:00 | 06-10 16:45 | 994.56 | 1001.38 | 14 | 13923.84 | +95.48 | +0.69% | 0.68R | 105m | market | timeout | breakout | breakout | neutral | 77.5 | ↑979.64 | 6.7585 | 3.3 | **WIN** |
| 2 | LRCX | 07-12 14:40 | 07-12 16:05 | 1078.75 | 1078.53 | 12 | 12945 | -2.64 | -0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 65.36 | ↑1068.98 | 1.3141 | 1.15 | **LOSS** |
| 3 | LRCX | 08-08 14:25 | 08-08 16:10 | 781.65 | 786.94 | 9 | 7034.85 | +47.61 | +0.68% | 0.37R | 105m | market | timeout | trend | trend | noisyHighBeta | 67.45 | ↑776.56 | 7.2109 | 1.76 | **WIN** |
| 4 | LRCX | 09-25 13:45 | 09-25 15:30 | 801.66 | 806.15 | 17 | 13628.22 | +76.33 | +0.56% | 0.8R | 105m | market | timeout | breakout | breakout | neutral | 80.58 | ↑796.29 | 0.3041 | 2.1 | **WIN** |
| 5 | LRCX | 10-09 14:30 | 10-09 16:15 | 82.41 | 82.55 | 170 | 14009.7 | +23.8 | +0.17% | 0.18R | 105m | market | timeout | trend | trend | neutral | 76.42 | ↑81.76 | 0.3513 | 3.31 | **WIN** |
| 6 | LRCX | 11-07 14:55 | 11-07 15:15 | 78.28 | 77.81 | 179 | 14012.12 | -84.13 | -0.6% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 63.43 | ↓77.82 | 0.2736 | 1.37 | **LOSS** |
| 7 | LRCX | 12-11 14:40 | 12-11 15:50 | 76.18 | 76.15 | 184 | 14017.12 | -5.52 | -0.04% | 0.04R | 70m | market | trailing-stop | breakout | breakout | neutral | 67.96 | ↓75.96 | 0.1632 | 1.44 | **LOSS** |
| 8 | LRCX | 12-13 14:45 | 12-13 15:05 | 77.19 | 76.4 | 181 | 13971.39 | -142.99 | -1.02% | 0.95R | 20m | market | early-reversal | breakout | breakout | neutral | 70.34 | ↓76.43 | 0.1901 | 1.38 | **LOSS** |
| 9 | LRCX | 01-02 14:30 | 01-02 15:20 | 73.09 | 72.76 | 191 | 13960.19 | -63.03 | -0.45% | 0.56R | 50m | market | stagnation | breakout | breakout | neutral | 79.35 | ↓73.09 | 0.1794 | 2.1 | **LOSS** |
| 10 | LRCX | 01-22 14:30 | 01-22 16:15 | 83.22 | 84.65 | 156 | 12982.32 | +223.08 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | neutral | 62.33 | ↑83.04 | 0.0269 | 1.84 | **WIN** |
| 11 | LRCX | 02-18 15:05 | 02-18 16:50 | 84.97 | 86.03 | 165 | 14020.05 | +174.9 | +1.25% | 0.69R | 105m | market | timeout | breakout | trend | neutral | 69.09 | ↑84.54 | 0.4882 | 2.73 | **WIN** |
| 12 | LRCX | 03-03 15:10 | 03-03 15:45 | 77.58 | 79.19 | 90 | 14041.98 | +144.9 | +2.08% | 1.08R | 35m | market | trim-profit-target | trend | trend | neutral | 64.11 | ↑77.24 | 0.3721 | 1.21 | **WIN** |
| 13 | LRCX | 03-03 15:10 | 03-03 16:10 | 77.58 | 78.49 | 91 | 14041.98 | +82.81 | +1.17% | 0.61R | 60m | market | trailing-stop | trend | trend | neutral | 64.11 | ↑77.24 | 0.3721 | 1.21 | **WIN** |
| 14 | LRCX | 03-12 13:30 | 03-12 14:30 | 76.07 | 75.77 | 170 | 12931.9 | -51 | -0.39% | 0.23R | 60m | market | stagnation | breakout | breakout | neutral | 58.28 | ↓75.8 | 0.265 | 1.28 | **LOSS** |
| 15 | LRCX | 04-15 14:05 | 04-15 14:25 | 69.39 | 68.18 | 111 | 7702.29 | -134.31 | -1.74% | 1.31R | 20m | market | stop-loss | trend | trend | noisyHighBeta | 67.42 | ↓68.88 | 0.2349 | 1.86 | **LOSS** |
| 16 | LRCX | 05-01 15:15 | 05-01 15:35 | 73.42 | 73.03 | 191 | 14023.22 | -74.49 | -0.53% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 17 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.85 | 83.17 | 167 | 14002.95 | -113.56 | -0.81% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 18 | LRCX | 07-08 15:05 | 07-08 15:25 | 99.88 | 99.24 | 140 | 13983.2 | -89.6 | -0.64% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 64.24 | ↓99.26 | 0.4218 | 2.7 | **LOSS** |
| 19 | LRCX | 08-12 14:10 | 08-12 15:25 | 103.02 | 104.53 | 68 | 14010.72 | +102.68 | +1.47% | 1.63R | 75m | market | trim-profit-target | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 20 | LRCX | 08-12 14:10 | 08-12 15:55 | 103.02 | 105.27 | 68 | 14010.72 | +153 | +2.18% | 2.42R | 105m | market | timeout | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 21 | LRCX | 09-11 15:15 | 09-11 16:20 | 115.22 | 115.14 | 121 | 13941.62 | -9.68 | -0.07% | 0.08R | 65m | market | stagnation | trend | trend | neutral | 79.42 | ↑113.2 | 1.8468 | 1.06 | **LOSS** |
| 22 | LRCX | 10-01 14:10 | 10-01 14:55 | 134.7 | 135.98 | 52 | 14008.8 | +66.56 | +0.95% | 0.89R | 45m | market | trim-profit-target | trend | trend | neutral | 62.56 | ↑133.41 | 0.3217 | 1.06 | **WIN** |
| 23 | LRCX | 10-01 14:10 | 10-01 15:55 | 134.7 | 137.06 | 52 | 14008.8 | +122.72 | +1.75% | 1.64R | 105m | market | timeout | trend | trend | neutral | 62.56 | ↑133.41 | 0.3217 | 1.06 | **WIN** |
| 24 | LRCX | 10-15 14:00 | 10-15 14:50 | 144.22 | 143.52 | 97 | 13989.34 | -67.9 | -0.49% | 0.27R | 50m | market | early-reversal | trend | trend | neutral | 67.73 | ↓143.32 | 0.7586 | 1.18 | **LOSS** |
| 25 | LRCX | 11-05 14:30 | 11-05 16:15 | 159.79 | 161.72 | 81 | 12942.99 | +156.33 | +1.21% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 69.67 | ↑159.05 | -0.2161 | 1.41 | **WIN** |
| 26 | LRCX | 11-12 15:05 | 11-12 15:25 | 161.21 | 159.65 | 87 | 14025.27 | -135.72 | -0.97% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 67.29 | ↓160.56 | 0.2963 | 1.2 | **LOSS** |
| 27 | LRCX | 11-26 14:30 | 11-26 15:10 | 153.84 | 152.93 | 84 | 12922.56 | -76.44 | -0.59% | 0.84R | 40m | market | early-reversal | trend | trend | neutral | 78.35 | ↓153.56 | 0.504 | 1.09 | **LOSS** |
| 28 | LRCX | 12-15 14:30 | 12-15 15:25 | 163.76 | 163.6 | 79 | 12937.04 | -12.64 | -0.1% | 0.09R | 55m | market | stagnation | breakout | breakout | neutral | 69.82 | ↓163.27 | -0.1389 | 2.51 | **LOSS** |
| 29 | LRCX | 01-12 15:20 | 01-12 15:55 | 220.83 | 219.54 | 63 | 13912.29 | -81.27 | -0.58% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 59.24 | ↓219.52 | 0.499 | 1.38 | **LOSS** |
| 30 | LRCX | 01-29 14:35 | 01-29 14:55 | 249.84 | 244.01 | 51 | 12741.84 | -297.33 | -2.33% | 1.47R | 20m | market | stop-loss | breakout | breakout | neutral | 81.94 | ↓248.35 | 1.7014 | 1.8 | **LOSS** |
| 31 | LRCX | 02-13 14:30 | 02-13 14:55 | 239.1 | 236.88 | 53 | 12672.3 | -117.66 | -0.93% | 0.72R | 25m | market | early-reversal | breakout | breakout | neutral | 68.03 | ↓238.55 | -0.0282 | 3.65 | **LOSS** |
| 32 | LRCX | 03-18 15:00 | 03-18 16:35 | 229.4 | 229.37 | 60 | 13764 | -1.8 | -0.01% | 0.01R | 95m | market | breakeven-stop | breakout | trend | neutral | 69.31 | ↑226.3 | 0.9563 | 1.12 | **LOSS** |
| 33 | LRCX | 04-10 15:10 | 04-10 15:30 | 266.98 | 265.8 | 52 | 13882.96 | -61.36 | -0.44% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.49 | ↑263.68 | 2.0817 | 2.89 | **LOSS** |

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

- ⚠️ **Profit factor 0.91 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:40:01.521Z*
