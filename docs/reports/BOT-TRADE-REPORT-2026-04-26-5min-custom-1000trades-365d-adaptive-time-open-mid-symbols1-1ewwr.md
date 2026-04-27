# Bot Trade Report — 37 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:14:23.721Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $61.18 (-0.06%) over 37 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 37 |
| Win rate | 45.95% (17W / 20L) |
| Net P&L | $-61.18 (-0.06%) |
| Gross profit | $1782.55 |
| Gross loss | $1843.73 |
| Profit factor | 0.97 |
| Avg win | $104.86 |
| Avg loss | $92.19 |
| Payoff ratio | 1.14:1 |
| Expectancy | $-1.65 / trade |
| Max drawdown | 0.72% |
| Sharpe ratio (ann.) | -0.19 |
| Trades / active day | 1.09 |
| Avg confidence | 99.68% |
| Avg trade duration | 64 min |
| Avg risk ratio | 0.68R |
| Starting equity | $100,000 |
| Ending equity | $99,938.82 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 22.22% | $-434.21 | $-48.25 |
| Mid  10:30–11:30 | 28 | 53.57% | $+373.03 | $13.32 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRVL | 37 | 17 | 45.95% | $-61.18 | $-1.65 | 0.97 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 28 | 13 | 46.43% | $-239.99 | $-8.57 |
| breakout | 9 | 4 | 44.44% | $+178.81 | $+19.87 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 30 | 14 | 46.67% | $-11.23 | $-0.37 |
| noisyHighBeta | 7 | 3 | 42.86% | $-49.95 | $-7.14 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | MRVL | 22 | 1.73 | $+27.36 | 15 | 0.35 | $-44.2 | 0.67% | 0.27 | watch |
| Time slot | Mid 10:30-11:30 | 14 | 4.66 | $+74.58 | 14 | 0.34 | $-47.94 | 0.67% | 0.27 | watch |
| Behavior | neutral | 19 | 1.92 | $+32.96 | 11 | 0.31 | $-57.94 | 0.65% | 0.24 | watch |
| Time slot | Open 9:30-10:30 | 8 | 0.19 | $-55.29 | 1 | ∞ | $+8.1 | 0% | 0 | reject |
| Setup | trend | 18 | 0.87 | $-5.89 | 10 | 0.66 | $-13.39 | 0.26% | 0.49 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-148.43 | 0.92 |
| +3 bps/side | $-323.05 | 0.84 |
| +5 bps/side | $-497.63 | 0.76 |
| +10 bps/side | $-934.09 | 0.61 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 15 |
| timeout | 12 |
| trim-profit-target | 3 |
| stagnation | 3 |
| breakeven-stop | 2 |
| stop-loss | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.06 | 60.92 | 229 | 13982.74 | -32.06 | -0.23% | 0.12R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 2 | MRVL | 05-21 15:05 | 05-21 16:50 | 62 | 62.29 | 225 | 13950 | +65.25 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 3 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.12 | 62.84 | 221 | 13949.52 | -61.88 | -0.44% | 0.42R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 4 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.99 | 64.74 | 109 | 13949.82 | +81.75 | +1.17% | 0.89R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 5 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.99 | 65.46 | 109 | 13949.82 | +160.23 | +2.3% | 1.74R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 6 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.71 | 70.1 | 109 | 7707.39 | -66.49 | -0.86% | 0.61R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 7 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.11 | 69.72 | 199 | 13951.89 | -77.61 | -0.56% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 8 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.61 | 70.59 | 195 | 13963.95 | -198.9 | -1.42% | 1.25R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 9 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.52 | 78.94 | 178 | 13976.56 | +74.76 | +0.53% | 0.39R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 10 | MRVL | 07-08 14:40 | 07-08 15:15 | 73.18 | 72.9 | 191 | 13977.38 | -53.48 | -0.38% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 11 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 95 | 13958.28 | +97.85 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 12 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 96 | 13958.28 | +85.44 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 13 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.59 | 78.07 | 178 | 13989.02 | -92.56 | -0.66% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 14 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.14 | 76.74 | 181 | 13962.34 | -72.4 | -0.52% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 15 | MRVL | 08-13 14:10 | 08-13 14:30 | 79.93 | 79.46 | 174 | 13907.82 | -81.78 | -0.59% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.08 | ↑79.26 | 0.4703 | 2.17 | **LOSS** |
| 16 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.08 | 64.09 | 121 | 7632.68 | +122.21 | +1.6% | 1.38R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 17 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.82 | 64.93 | 215 | 13936.3 | +23.65 | +0.17% | 0.12R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 18 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.57 | 71.08 | 198 | 13972.86 | +100.98 | +0.72% | 0.62R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 19 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.11 | 82.38 | 177 | 14002.47 | +578.79 | +4.13% | 3.3R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 20 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.86 | 87.94 | 87 | 7730.82 | -80.04 | -1.04% | 0.55R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 21 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.79 | 84.72 | 166 | 14075.14 | -11.62 | -0.08% | 0.06R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 22 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.02 | 88.27 | 159 | 13995.18 | +39.75 | +0.28% | 0.17R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 23 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.36 | 95.76 | 146 | 14068.56 | -87.6 | -0.62% | 0.31R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 24 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.94 | 92.8 | 149 | 13997.06 | -169.86 | -1.21% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 25 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.27 | 87.17 | 159 | 14034.93 | -174.9 | -1.25% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 26 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.93 | 81.57 | 47 | 7688.35 | +30.08 | +0.79% | 0.4R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 27 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.93 | 81.59 | 48 | 7688.35 | +31.68 | +0.82% | 0.41R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 28 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.3 | 85 | 150 | 12945 | -195 | -1.51% | 0.76R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 29 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.43 | 87.6 | 162 | 14001.66 | +189.54 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 30 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.91 | 82.42 | 171 | 14006.61 | +87.21 | +0.62% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 31 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.26 | 82.94 | 168 | 13987.68 | -53.76 | -0.38% | 0.26R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 32 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.05 | 83.79 | 165 | 14033.25 | -207.9 | -1.48% | 1.41R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 33 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 175 | 14007 | -38.5 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 34 | MRVL | 02-25 14:30 | 02-25 15:35 | 79.35 | 79.38 | 176 | 13965.6 | +5.28 | +0.04% | 0.06R | 65m | market | breakeven-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **WIN** |
| 35 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.12 | 91.94 | 83 | 7645.96 | -14.94 | -0.2% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 36 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.74 | 119.59 | 63 | 7606.62 | -72.45 | -0.95% | 0.5R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |
| 37 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.67 | 154.76 | 90 | 13920.3 | +8.1 | +0.06% | 0.03R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |

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

- ⚠️ **Profit factor 0.97 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.68R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:14:23.721Z*
