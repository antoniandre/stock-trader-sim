# Bot Trade Report — 32 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:19:02.581Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $141.74 (+0.14%) over 32 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 32 |
| Win rate | 46.88% (15W / 17L) |
| Net P&L | $+141.74 (+0.14%) |
| Gross profit | $1730.45 |
| Gross loss | $1588.71 |
| Profit factor | 1.09 |
| Avg win | $115.36 |
| Avg loss | $93.45 |
| Payoff ratio | 1.23:1 |
| Expectancy | $+4.43 / trade |
| Max drawdown | 0.76% |
| Sharpe ratio (ann.) | 0.48 |
| Trades / active day | 1.1 |
| Avg confidence | 99.63% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $100,141.74 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 32 | 46.88% | $+141.74 | $4.43 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRVL | 32 | 15 | 46.88% | $+141.74 | $+4.43 | 1.09 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 24 | 12 | 50% | $+83.4 | $+3.48 |
| breakout | 8 | 3 | 37.5% | $+58.34 | $+7.29 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 28 | 14 | 50% | $+179.35 | $+6.41 |
| noisyHighBeta | 4 | 1 | 25% | $-37.61 | $-9.4 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 17 | 1.53 | $+16.98 | 7 | 0.49 | $-29.32 | 0.26% | 0.38 | watch |
| Symbol | MRVL | 19 | 2.68 | $+47.76 | 13 | 0.27 | $-58.9 | 0.77% | 0.21 | watch |
| Time slot | Mid 10:30-11:30 | 19 | 2.68 | $+47.76 | 13 | 0.27 | $-58.9 | 0.77% | 0.21 | watch |
| Behavior | neutral | 17 | 2.83 | $+50.45 | 11 | 0.29 | $-61.66 | 0.68% | 0.23 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+65.75 | 1.04 |
| +3 bps/side | $-86.19 | 0.95 |
| +5 bps/side | $-238.15 | 0.87 |
| +10 bps/side | $-618.07 | 0.7 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 13 |
| timeout | 10 |
| stagnation | 4 |
| trim-profit-target | 3 |
| profit-target | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 05-01 14:30 | 05-01 15:30 | 61.44 | 61.38 | 227 | 13946.88 | -13.62 | -0.1% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 65.67 | ↑60.26 | 0.9581 | 1.33 | **LOSS** |
| 2 | MRVL | 05-21 15:05 | 05-21 16:50 | 62 | 62.29 | 225 | 13950 | +65.25 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 3 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.12 | 62.84 | 221 | 13949.52 | -61.88 | -0.44% | 0.42R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 4 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.99 | 64.74 | 109 | 13949.82 | +81.75 | +1.17% | 0.89R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 5 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.99 | 65.46 | 109 | 13949.82 | +160.23 | +2.3% | 1.74R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 6 | MRVL | 06-09 14:30 | 06-09 14:50 | 71.13 | 70.45 | 108 | 7682.04 | -73.44 | -0.96% | 0.57R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.45 | ↑70.25 | 0.5731 | 1.23 | **LOSS** |
| 7 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.11 | 69.72 | 200 | 14022 | -78 | -0.56% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 8 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.52 | 78.94 | 178 | 13976.56 | +74.76 | +0.53% | 0.39R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 9 | MRVL | 07-08 14:40 | 07-08 15:15 | 73.18 | 72.9 | 191 | 13977.38 | -53.48 | -0.38% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 10 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.22 | 72.82 | 97 | 14010.68 | +58.2 | +0.83% | 0.99R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 11 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.22 | 72.83 | 97 | 14010.68 | +59.17 | +0.84% | 1R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 12 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 95 | 13958.28 | +97.85 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 13 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 96 | 13958.28 | +85.44 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 14 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.59 | 78.07 | 178 | 13989.02 | -92.56 | -0.66% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 15 | MRVL | 08-13 14:40 | 08-13 15:00 | 80.06 | 79.1 | 175 | 14010.5 | -168 | -1.2% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 61.57 | ↓79.47 | 0.5948 | 1.22 | **LOSS** |
| 16 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.08 | 64.09 | 122 | 7695.76 | +123.22 | +1.6% | 1.38R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 17 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.82 | 64.93 | 216 | 14001.12 | +23.76 | +0.17% | 0.12R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 18 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.11 | 82.38 | 177 | 14002.47 | +578.79 | +4.13% | 3.3R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 19 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.02 | 88.27 | 160 | 14083.2 | +40 | +0.28% | 0.17R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 20 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.36 | 95.76 | 146 | 14068.56 | -87.6 | -0.62% | 0.31R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 21 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.94 | 92.8 | 150 | 14091 | -171 | -1.21% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 22 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.27 | 87.17 | 159 | 14034.93 | -174.9 | -1.25% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 23 | MRVL | 11-20 15:00 | 11-20 15:50 | 84.15 | 83.97 | 167 | 14053.05 | -30.06 | -0.21% | 0.11R | 50m | market | stagnation | breakout | breakout | neutral | 71.79 | ↑83.56 | 0.9253 | 1.17 | **LOSS** |
| 24 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.3 | 85 | 151 | 13031.3 | -196.3 | -1.51% | 0.76R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 25 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.43 | 87.6 | 162 | 14001.66 | +189.54 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 26 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.91 | 82.42 | 171 | 14006.61 | +87.21 | +0.62% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 27 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.26 | 82.94 | 169 | 14070.94 | -54.08 | -0.38% | 0.26R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 28 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.05 | 83.79 | 165 | 14033.25 | -207.9 | -1.48% | 1.41R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 29 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 175 | 14007 | -38.5 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 30 | MRVL | 02-25 14:30 | 02-25 15:35 | 79.35 | 79.38 | 176 | 13965.6 | +5.28 | +0.04% | 0.06R | 65m | market | breakeven-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **WIN** |
| 31 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.12 | 91.94 | 83 | 7645.96 | -14.94 | -0.2% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 32 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.74 | 119.59 | 63 | 7606.62 | -72.45 | -0.95% | 0.5R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |

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

- ⚠️ **Profit factor 1.09 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:19:02.581Z*
