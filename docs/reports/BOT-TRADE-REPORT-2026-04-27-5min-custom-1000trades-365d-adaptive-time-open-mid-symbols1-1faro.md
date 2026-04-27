# Bot Trade Report — 21 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:18:38.343Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $466.45 (-0.47%) over 21 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 21 |
| Win rate | 19.05% (4W / 17L) |
| Net P&L | $-466.45 (-0.47%) |
| Gross profit | $460.04 |
| Gross loss | $926.49 |
| Profit factor | 0.5 |
| Avg win | $115.01 |
| Avg loss | $54.5 |
| Payoff ratio | 2.11:1 |
| Expectancy | $-22.21 / trade |
| Max drawdown | 0.65% |
| Sharpe ratio (ann.) | -3.56 |
| Trades / active day | 1 |
| Avg confidence | 99.38% |
| Avg trade duration | 47 min |
| Avg risk ratio | 0.51R |
| Starting equity | $100,000 |
| Ending equity | $99,533.55 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 25% | $-179.55 | $-22.44 |
| Mid  10:30–11:30 | 13 | 15.38% | $-286.9 | $-22.07 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NFLX | 21 | 4 | 19.05% | $-466.45 | $-22.21 | 0.5 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 13 | 3 | 23.08% | $-321.48 | $-24.73 |
| breakout | 8 | 1 | 12.5% | $-144.97 | $-18.12 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 21 | 4 | 19.05% | $-466.45 | $-22.21 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 5 | 3.64 | $+57.03 | 8 | 0 | $-71.51 | 0.57% | 0 | watch |
| Symbol | NFLX | 12 | 1.69 | $+15.63 | 9 | 0 | $-72.67 | 0.65% | 0 | watch |
| Behavior | neutral | 12 | 1.69 | $+15.63 | 9 | 0 | $-72.67 | 0.65% | 0 | watch |
| Setup | trend | 9 | 0.53 | $-11.11 | 4 | 0 | $-55.36 | 0.22% | 0 | reject |
| Time slot | Open 9:30-10:30 | 7 | 0.41 | $-13.94 | 1 | 0 | $-81.95 | 0.08% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-523.71 | 0.46 |
| +3 bps/side | $-638.22 | 0.41 |
| +5 bps/side | $-752.74 | 0.36 |
| +10 bps/side | $-1039.04 | 0.27 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| stagnation | 5 |
| breakeven-stop | 3 |
| timeout | 2 |
| profit-target | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NFLX | 05-02 14:00 | 05-02 15:45 | 1146.48 | 1152.03 | 12 | 13757.76 | +66.6 | +0.48% | 0.69R | 105m | market | timeout | trend | trend | neutral | 69.31 | ↑1141.22 | 1.1408 | 1.12 | **WIN** |
| 2 | NFLX | 05-07 14:15 | 05-07 15:00 | 1152.46 | 1152.48 | 12 | 13829.52 | +0.24 | +0% | 0R | 45m | market | breakeven-stop | trend | trend | neutral | 71.5 | ↑1144.48 | 1.5134 | 1.89 | **WIN** |
| 3 | NFLX | 05-15 14:55 | 05-15 15:30 | 1169.87 | 1165.58 | 11 | 12868.57 | -47.19 | -0.37% | 0.53R | 35m | market | early-reversal | trend | trend | neutral | 66.91 | ↑1158.19 | 5.2118 | 1.19 | **LOSS** |
| 4 | NFLX | 05-21 15:05 | 05-21 15:45 | 1210.25 | 1205.93 | 11 | 13312.75 | -47.52 | -0.36% | 0.51R | 40m | market | early-reversal | trend | trend | neutral | 78.26 | ↑1201.77 | 5.443 | 1.67 | **LOSS** |
| 5 | NFLX | 06-16 13:35 | 06-16 13:55 | 1225.73 | 1221.7 | 11 | 13483.03 | -44.33 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 62.3 | ↑1221.24 | 0.5118 | 2.21 | **LOSS** |
| 6 | NFLX | 06-23 14:20 | 06-23 15:25 | 1246.76 | 1245.32 | 11 | 13714.36 | -15.84 | -0.12% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 62.3 | ↑1234.5 | 2.6639 | 1.06 | **LOSS** |
| 7 | NFLX | 07-03 14:15 | 07-03 14:35 | 1299.12 | 1293.72 | 10 | 12991.2 | -54 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↑1289.95 | 3.4993 | 1.68 | **LOSS** |
| 8 | NFLX | 08-14 14:15 | 08-14 15:20 | 1233.82 | 1231.96 | 11 | 13572.02 | -20.46 | -0.15% | 0.17R | 65m | market | stagnation | trend | trend | neutral | 78.24 | ↑1221.66 | 2.6614 | 1.29 | **LOSS** |
| 9 | NFLX | 08-25 14:00 | 08-25 15:10 | 1226.95 | 1224.24 | 11 | 13496.45 | -29.81 | -0.22% | 0.29R | 70m | market | stagnation | trend | trend | neutral | 77.84 | ↑1218.56 | 4.6744 | 1.95 | **LOSS** |
| 10 | NFLX | 09-04 14:30 | 09-04 16:15 | 1249.69 | 1254.05 | 11 | 13746.59 | +47.96 | +0.35% | 0.4R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑1241.75 | 7.9649 | 1.11 | **WIN** |
| 11 | NFLX | 11-10 14:30 | 11-10 16:00 | 1119.11 | 1118 | 12 | 13429.32 | -13.32 | -0.1% | 0.14R | 90m | market | breakeven-stop | breakout | breakout | neutral | 80.29 | ↓1113.99 | 3.63 | 1.25 | **LOSS** |
| 12 | NFLX | 12-05 14:35 | 12-05 15:30 | 101.3 | 103.82 | 137 | 13878.1 | +345.24 | +2.49% | 1.57R | 55m | market | profit-target | breakout | breakout | neutral | 75.3 | ↑100.08 | -0.8676 | 6.72 | **WIN** |
| 13 | NFLX | 12-12 14:30 | 12-12 15:20 | 96.13 | 95.97 | 145 | 13938.85 | -23.2 | -0.17% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 83.21 | ↓95.89 | 0.217 | 2.44 | **LOSS** |
| 14 | NFLX | 12-17 15:10 | 12-17 15:50 | 97.11 | 96.4 | 144 | 13983.84 | -102.24 | -0.73% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 77.98 | ↓96.67 | 0.7084 | 1.02 | **LOSS** |
| 15 | NFLX | 12-19 14:30 | 12-19 15:00 | 95.13 | 94.73 | 147 | 13984.11 | -58.8 | -0.42% | 0.6R | 30m | market | early-reversal | breakout | breakout | neutral | 93.99 | ↓94.58 | 0.0925 | 2.17 | **LOSS** |
| 16 | NFLX | 01-12 14:30 | 01-12 15:20 | 90.24 | 90 | 142 | 12814.08 | -34.08 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 77.85 | ↓90.04 | 0.1612 | 1.08 | **LOSS** |
| 17 | NFLX | 01-13 14:30 | 01-13 15:00 | 90.52 | 90.01 | 154 | 13940.08 | -78.54 | -0.56% | 0.8R | 30m | market | early-reversal | trend | trend | neutral | 69.77 | ↓90.02 | 0.0648 | 3.07 | **LOSS** |
| 18 | NFLX | 01-23 14:30 | 01-23 14:35 | 84.39 | 84.35 | 165 | 13924.35 | -6.6 | -0.05% | 0.07R | 5m | market | breakeven-stop | trend | trend | neutral | 74.13 | ↑84.13 | 0.1432 | 4.92 | **LOSS** |
| 19 | NFLX | 02-02 14:35 | 02-02 15:10 | 84.74 | 84.22 | 165 | 13982.1 | -85.8 | -0.61% | 0.85R | 35m | market | early-reversal | breakout | breakout | neutral | 74.45 | ↓84.02 | 0.102 | 2.08 | **LOSS** |
| 20 | NFLX | 02-24 14:40 | 02-24 14:55 | 77.06 | 76.05 | 181 | 13947.86 | -182.81 | -1.31% | 1.35R | 15m | market | stop-loss | breakout | breakout | neutral | 64.81 | ↓76.23 | 0.0578 | 2.6 | **LOSS** |
| 21 | NFLX | 03-26 13:55 | 03-26 14:15 | 93.56 | 93.01 | 149 | 13940.44 | -81.95 | -0.59% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 67.77 | ↑92.38 | 0.1521 | 1.17 | **LOSS** |

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

- ⚠️ **Profit factor 0.5 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.51R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:18:38.343Z*
