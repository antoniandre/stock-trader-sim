# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:38:52.314Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1009.32 (-1.01%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 7.69% (1W / 12L) |
| Net P&L | $-1009.32 (-1.01%) |
| Gross profit | $5.33 |
| Gross loss | $1014.65 |
| Profit factor | 0.01 |
| Avg win | $5.33 |
| Avg loss | $84.55 |
| Payoff ratio | 0.06:1 |
| Expectancy | $-77.64 / trade |
| Max drawdown | 1.01% |
| Sharpe ratio (ann.) | -20.43 |
| Trades / active day | 1 |
| Avg confidence | 99% |
| Avg trade duration | 33 min |
| Avg risk ratio | 0.69R |
| Starting equity | $100,000 |
| Ending equity | $98,990.68 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 9 | 11.11% | $-838.91 | $-93.21 |
| Noon 11:30–13:00 | 4 | 0% | $-170.41 | $-42.6 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ASML | 13 | 1 | 7.69% | $-1009.32 | $-77.64 | 0.01 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 0 | 0% | $-441.22 | $-63.03 |
| breakout | 6 | 1 | 16.67% | $-568.1 | $-94.68 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 13 | 1 | 7.69% | $-1009.32 | $-77.64 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ASML | 7 | 0.01 | $-53.14 | 6 | 0 | $-106.22 | 0.64% | 0 | reject |
| Behavior | neutral | 7 | 0.01 | $-53.14 | 6 | 0 | $-106.22 | 0.64% | 0 | reject |
| Time slot | Mid 10:30-11:30 | 5 | 0.02 | $-64.09 | 4 | 0 | $-129.61 | 0.52% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1043.73 | 0 |
| +3 bps/side | $-1112.52 | 0 |
| +5 bps/side | $-1181.31 | 0 |
| +10 bps/side | $-1353.25 | 0 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| stop-loss | 2 |
| stagnation | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ASML | 10-01 15:55 | 10-01 17:10 | 992.84 | 992.28 | 14 | 13899.76 | -7.84 | -0.06% | 0.09R | 75m | market | stagnation | trend | trend | neutral | 69.24 | ↑983.4 | 6.3092 | 1.1 | **LOSS** |
| 2 | ASML | 10-23 16:10 | 10-23 16:35 | 1037.93 | 1034.57 | 13 | 13493.09 | -43.68 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 70.55 | ↑1025.55 | 6.5096 | 1.15 | **LOSS** |
| 3 | ASML | 11-10 15:25 | 11-10 15:50 | 1035.12 | 1026.75 | 13 | 13456.56 | -108.81 | -0.81% | 0.86R | 25m | market | stop-loss | trend | trend | neutral | 71.52 | ↓1031.84 | 6.0405 | 1.51 | **LOSS** |
| 4 | ASML | 11-17 14:30 | 11-17 16:00 | 1017.27 | 1017.68 | 13 | 13224.51 | +5.33 | +0.04% | 0.06R | 90m | market | breakeven-stop | trend | breakout | neutral | 69.98 | ↓1013.35 | 0.2463 | 2.9 | **WIN** |
| 5 | ASML | 11-19 14:55 | 11-19 15:40 | 1032.15 | 1028.64 | 13 | 13417.95 | -45.63 | -0.34% | 0.47R | 45m | market | early-reversal | breakout | breakout | neutral | 83.13 | ↑1022.52 | 4.1618 | 1.58 | **LOSS** |
| 6 | ASML | 12-01 14:50 | 12-01 15:10 | 1073.1 | 1069.55 | 13 | 13950.3 | -46.15 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 81.32 | ↑1062.78 | 4.7465 | 1.33 | **LOSS** |
| 7 | ASML | 01-16 14:35 | 01-16 14:55 | 1369.03 | 1356.51 | 10 | 13690.3 | -125.2 | -0.91% | 0.98R | 20m | market | early-reversal | breakout | breakout | neutral | 76.2 | ↓1363.72 | 1.928 | 1.36 | **LOSS** |
| 8 | ASML | 01-26 14:55 | 01-26 15:15 | 1408.18 | 1398.9 | 9 | 12673.62 | -83.52 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 79.89 | ↓1399.09 | 4.4717 | 1.22 | **LOSS** |
| 9 | ASML | 02-05 14:40 | 02-05 15:00 | 1363.13 | 1340.76 | 10 | 13631.3 | -223.7 | -1.64% | 1.58R | 20m | market | stop-loss | breakout | breakout | neutral | 66.64 | ↓1349.73 | 4.9221 | 2.54 | **LOSS** |
| 10 | ASML | 02-17 16:10 | 02-17 16:30 | 1426.06 | 1417.83 | 9 | 12834.54 | -74.07 | -0.58% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 69.48 | ↑1400.4 | 2.8158 | 1.28 | **LOSS** |
| 11 | ASML | 03-04 14:30 | 03-04 14:50 | 1393.87 | 1379.12 | 9 | 12544.83 | -132.75 | -1.06% | 1.19R | 20m | market | early-reversal | breakout | breakout | neutral | 68.82 | ↓1393.21 | 1.0872 | 2.28 | **LOSS** |
| 12 | ASML | 03-23 15:00 | 03-23 15:25 | 1398.47 | 1389.75 | 9 | 12586.23 | -78.48 | -0.62% | 0.85R | 25m | market | early-reversal | trend | trend | neutral | 73.93 | ↑1378.48 | 25.6535 | 1.32 | **LOSS** |
| 13 | ASML | 04-09 16:00 | 04-09 16:20 | 1452.27 | 1447.29 | 9 | 13070.43 | -44.82 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 76.09 | ↑1435.78 | 6.0124 | 1.7 | **LOSS** |

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

- ⚠️ **Profit factor 0.01 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.69R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:38:52.314Z*
