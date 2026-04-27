# Bot Trade Report — 28 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:38:48.290Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $184.2 (+0.18%) over 28 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 28 |
| Win rate | 32.14% (9W / 19L) |
| Net P&L | $+184.2 (+0.18%) |
| Gross profit | $1258.63 |
| Gross loss | $1074.43 |
| Profit factor | 1.17 |
| Avg win | $139.85 |
| Avg loss | $56.55 |
| Payoff ratio | 2.47:1 |
| Expectancy | $+6.58 / trade |
| Max drawdown | 0.4% |
| Sharpe ratio (ann.) | 0.91 |
| Trades / active day | 1.04 |
| Avg confidence | 99.07% |
| Avg trade duration | 59 min |
| Avg risk ratio | 0.82R |
| Starting equity | $100,000 |
| Ending equity | $100,184.2 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 16.67% | $+176.55 | $29.43 |
| Mid  10:30–11:30 | 13 | 38.46% | $+90.7 | $6.98 |
| Noon 11:30–13:00 | 6 | 16.67% | $-204.51 | $-34.08 |
| PM   13:00–14:00 | 3 | 66.67% | $+121.46 | $40.49 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRK | 28 | 9 | 32.14% | $+184.2 | $+6.58 | 1.17 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 21 | 7 | 33.33% | $+287.84 | $+13.71 |
| breakout | 7 | 2 | 28.57% | $-103.64 | $-14.81 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 28 | 9 | 32.14% | $+184.2 | $+6.58 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 13 | 1.8 | $+25.85 | 8 | 0.83 | $-6.03 | 0.2% | 0.56 | watch |
| Time slot | Open 9:30-10:30 | 5 | 1.9 | $+37.47 | 1 | 0 | $-10.8 | 0.01% | 0 | watch |
| Time slot | Mid 10:30-11:30 | 7 | 0.67 | $-16.27 | 6 | 1.95 | $+34.1 | 0.12% | 1.48 | reject |
| Symbol | MRK | 16 | 1.27 | $+10.01 | 12 | 1.05 | $+2.01 | 0.29% | 0.76 | reject |
| Behavior | neutral | 16 | 1.27 | $+10.01 | 12 | 1.05 | $+2.01 | 0.29% | 0.76 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+109.28 | 1.1 |
| +3 bps/side | $-40.61 | 0.97 |
| +5 bps/side | $-190.54 | 0.86 |
| +10 bps/side | $-565.2 | 0.65 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| timeout | 8 |
| stagnation | 5 |
| breakeven-stop | 1 |
| profit-target | 1 |
| stop-loss | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRK | 05-16 14:25 | 05-16 15:15 | 75.62 | 75.38 | 185 | 13989.7 | -44.4 | -0.32% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 77.84 | ↓75.12 | 0.2509 | 1.03 | **LOSS** |
| 2 | MRK | 05-22 17:30 | 05-22 19:15 | 78.05 | 78.03 | 179 | 13970.95 | -3.58 | -0.03% | 0.04R | 105m | market | timeout | trend | trend | neutral | 75.09 | ↑77.27 | 0.2259 | 3.5 | **LOSS** |
| 3 | MRK | 06-04 14:20 | 06-04 15:10 | 78.94 | 78.75 | 177 | 13972.38 | -33.63 | -0.24% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 72.99 | ↑78.5 | 0.5109 | 1.2 | **LOSS** |
| 4 | MRK | 06-18 15:20 | 06-18 15:40 | 79.35 | 79.15 | 176 | 13965.6 | -35.2 | -0.25% | 0.33R | 20m | market | breakeven-stop | breakout | breakout | neutral | 92 | ↑77.79 | 0.1151 | 2.7 | **LOSS** |
| 5 | MRK | 07-01 14:20 | 07-01 15:30 | 79.93 | 82.2 | 174 | 13907.82 | +394.98 | +2.84% | 4.06R | 70m | market | profit-target | trend | trend | neutral | 71.57 | ↑79.37 | 0.1942 | 1 | **WIN** |
| 6 | MRK | 07-08 14:30 | 07-08 14:55 | 82.2 | 81.87 | 170 | 13974 | -56.1 | -0.4% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 74.18 | ↑81.52 | 0.2055 | 1.66 | **LOSS** |
| 7 | MRK | 07-10 14:20 | 07-10 15:20 | 84.6 | 84.44 | 165 | 13959 | -26.4 | -0.19% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.45 | ↑83.9 | 0.129 | 1.28 | **LOSS** |
| 8 | MRK | 08-05 14:45 | 08-05 15:00 | 80.78 | 80.11 | 173 | 13974.94 | -115.91 | -0.83% | 1.19R | 15m | market | stop-loss | trend | trend | neutral | 71.98 | ↓80.1 | 0.1629 | 1.03 | **LOSS** |
| 9 | MRK | 08-07 16:15 | 08-07 17:05 | 80.27 | 80.07 | 174 | 13966.98 | -34.8 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 70.29 | ↑79.35 | 0.1585 | 1.71 | **LOSS** |
| 10 | MRK | 08-08 14:00 | 08-08 14:20 | 81.14 | 80.54 | 172 | 13956.08 | -103.2 | -0.74% | 1R | 20m | market | early-reversal | trend | trend | neutral | 72.31 | ↓80.74 | 0.1427 | 1.39 | **LOSS** |
| 11 | MRK | 08-21 14:55 | 08-21 16:40 | 86.91 | 87.05 | 160 | 13905.6 | +22.4 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 71.12 | ↑86.1 | 0.5215 | 1.09 | **WIN** |
| 12 | MRK | 09-30 17:15 | 09-30 18:50 | 82.6 | 83.36 | 84 | 13959.4 | +63.84 | +0.92% | 1.31R | 95m | market | trim-profit-target | trend | trend | neutral | 79.22 | ↑80.96 | 0.4855 | 1.33 | **WIN** |
| 13 | MRK | 09-30 17:15 | 09-30 19:00 | 82.6 | 83.32 | 85 | 13959.4 | +61.2 | +0.87% | 1.24R | 105m | market | timeout | trend | trend | neutral | 79.22 | ↑80.96 | 0.4855 | 1.33 | **WIN** |
| 14 | MRK | 10-30 15:20 | 10-30 15:45 | 87.18 | 86.66 | 160 | 13948.8 | -83.2 | -0.6% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 70.05 | ↑85.29 | 0.1518 | 1.72 | **LOSS** |
| 15 | MRK | 11-10 14:30 | 11-10 14:50 | 87.25 | 86.89 | 160 | 13960 | -57.6 | -0.41% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 81.38 | ↓87.03 | 0.1874 | 1.36 | **LOSS** |
| 16 | MRK | 11-21 14:30 | 11-21 16:15 | 95.96 | 97.42 | 145 | 13914.2 | +211.7 | +1.52% | 2.17R | 105m | market | timeout | trend | trend | neutral | 75.51 | ↑95.77 | 0.1809 | 1.68 | **WIN** |
| 17 | MRK | 11-24 16:30 | 11-24 16:50 | 102.05 | 101.55 | 137 | 13980.85 | -68.5 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 54.79 | ↑101.31 | 0.7457 | 1 | **LOSS** |
| 18 | MRK | 11-25 15:30 | 11-25 15:50 | 104.12 | 103.63 | 134 | 13952.08 | -65.66 | -0.47% | 0.35R | 20m | market | early-reversal | trend | trend | neutral | 79.38 | ↑103.31 | 0.7394 | 1.07 | **LOSS** |
| 19 | MRK | 12-11 15:40 | 12-11 16:00 | 98.84 | 98.35 | 141 | 13936.44 | -69.09 | -0.5% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 61.95 | ↑98.21 | 0.3205 | 1.08 | **LOSS** |
| 20 | MRK | 12-22 16:05 | 12-22 17:50 | 103.17 | 103.79 | 135 | 13927.95 | +83.7 | +0.6% | 0.86R | 105m | market | timeout | trend | trend | neutral | 67.01 | ↑102.46 | 0.3435 | 1.32 | **WIN** |
| 21 | MRK | 01-08 14:35 | 01-08 15:25 | 111.6 | 110.82 | 125 | 13950 | -97.5 | -0.7% | 0.56R | 50m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓111.16 | 0.3221 | 2.43 | **LOSS** |
| 22 | MRK | 01-29 14:40 | 01-29 16:25 | 108.19 | 109.03 | 119 | 12874.61 | +99.96 | +0.78% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 98.42 | ↑107.8 | 0.2874 | 1.19 | **WIN** |
| 23 | MRK | 02-04 14:30 | 02-04 15:05 | 118.89 | 117.94 | 108 | 12840.12 | -102.6 | -0.8% | 0.66R | 35m | market | early-reversal | breakout | breakout | neutral | 67.31 | ↓118.06 | 0.183 | 1.12 | **LOSS** |
| 24 | MRK | 02-05 15:10 | 02-05 16:20 | 121.66 | 121.52 | 115 | 13990.9 | -16.1 | -0.12% | 0.07R | 70m | market | stagnation | trend | trend | neutral | 68.65 | ↓121.15 | 0.4632 | 1.06 | **LOSS** |
| 25 | MRK | 02-06 15:50 | 02-06 16:20 | 122.43 | 121.99 | 114 | 13957.02 | -50.16 | -0.36% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 64.66 | ↑121.5 | 0.6164 | 1.25 | **LOSS** |
| 26 | MRK | 02-27 14:35 | 02-27 16:20 | 121.39 | 122.89 | 115 | 13959.85 | +172.5 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | neutral | 72.49 | ↑120.95 | 0.186 | 1.7 | **WIN** |
| 27 | MRK | 03-17 14:05 | 03-17 15:00 | 116.27 | 116.18 | 120 | 13952.4 | -10.8 | -0.08% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 70.82 | ↑115.47 | 0.1513 | 1.31 | **LOSS** |
| 28 | MRK | 04-08 15:15 | 04-08 17:00 | 121.54 | 122.83 | 115 | 13977.1 | +148.35 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 67.93 | ↑120.22 | 0.699 | 1.15 | **WIN** |

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

- ⚠️ **Profit factor 1.17 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.82R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:38:48.290Z*
