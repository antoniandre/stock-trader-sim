# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:19:00.162Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $484.06 (-0.48%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 23.08% (3W / 10L) |
| Net P&L | $-484.06 (-0.48%) |
| Gross profit | $422.55 |
| Gross loss | $906.61 |
| Profit factor | 0.47 |
| Avg win | $140.85 |
| Avg loss | $90.66 |
| Payoff ratio | 1.55:1 |
| Expectancy | $-37.24 / trade |
| Max drawdown | 0.76% |
| Sharpe ratio (ann.) | -4.95 |
| Trades / active day | 1 |
| Avg confidence | 98.08% |
| Avg trade duration | 53 min |
| Avg risk ratio | 0.81R |
| Starting equity | $100,000 |
| Ending equity | $99,515.94 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 13 | 23.08% | $-484.06 | $-37.24 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LLY | 13 | 3 | 23.08% | $-484.06 | $-37.24 | 0.47 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 3 | 37.5% | $+5.24 | $+0.66 |
| breakout | 5 | 0 | 0% | $-489.3 | $-97.86 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 13 | 3 | 23.08% | $-484.06 | $-37.24 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | LLY | 7 | 0.66 | $-25.87 | 6 | 0.2 | $-50.49 | 0.3% | 0.14 | reject |
| Behavior | neutral | 7 | 0.66 | $-25.87 | 6 | 0.2 | $-50.49 | 0.3% | 0.14 | reject |
| Time slot | Mid 10:30-11:30 | 7 | 0.66 | $-25.87 | 6 | 0.2 | $-50.49 | 0.3% | 0.14 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-518.79 | 0.44 |
| +3 bps/side | $-588.24 | 0.4 |
| +5 bps/side | $-657.68 | 0.37 |
| +10 bps/side | $-831.27 | 0.29 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| timeout | 3 |
| stop-loss | 3 |
| stagnation | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LLY | 09-16 15:20 | 09-16 17:05 | 762.04 | 769.38 | 18 | 13716.72 | +132.12 | +0.96% | 1.35R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑753.77 | 2.3186 | 1.58 | **WIN** |
| 2 | LLY | 09-17 14:40 | 09-17 15:05 | 775.56 | 771.94 | 18 | 13960.08 | -65.16 | -0.47% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 78.52 | ↑767.66 | 1.991 | 1.39 | **LOSS** |
| 3 | LLY | 10-01 14:55 | 10-01 16:40 | 803.61 | 816.19 | 17 | 13661.37 | +213.86 | +1.57% | 1.26R | 105m | market | timeout | trend | trend | neutral | 72.52 | ↑792.74 | 10.7036 | 1.15 | **WIN** |
| 4 | LLY | 10-03 14:35 | 10-03 15:25 | 839.82 | 836.72 | 16 | 13437.12 | -49.6 | -0.37% | 0.4R | 50m | market | early-reversal | trend | trend | neutral | 79.68 | ↑828.37 | 4.1773 | 1.19 | **LOSS** |
| 5 | LLY | 11-03 14:30 | 11-03 15:20 | 879.31 | 875.81 | 14 | 12310.34 | -49 | -0.4% | 0.5R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 6 | LLY | 11-04 15:25 | 11-04 15:40 | 913.37 | 897.65 | 14 | 12787.18 | -220.08 | -1.72% | 1.2R | 15m | market | stop-loss | breakout | breakout | neutral | 65.69 | ↓895.05 | 0.2443 | 1.78 | **LOSS** |
| 7 | LLY | 11-21 14:45 | 11-21 15:00 | 1059.14 | 1048.12 | 13 | 13768.82 | -143.26 | -1.04% | 1.39R | 15m | market | stop-loss | breakout | breakout | neutral | 76.6 | ↓1049.14 | 1.5193 | 1.29 | **LOSS** |
| 8 | LLY | 12-11 15:15 | 12-11 16:45 | 1019.05 | 1018.51 | 13 | 13247.65 | -7.02 | -0.05% | 0.03R | 90m | market | breakeven-stop | breakout | breakout | neutral | 66.05 | ↑1003.93 | 2.527 | 2.23 | **LOSS** |
| 9 | LLY | 01-30 14:30 | 01-30 14:45 | 1037.64 | 1024.79 | 13 | 13489.32 | -167.05 | -1.24% | 1.77R | 15m | market | stop-loss | trend | trend | neutral | 65.48 | ↓1034.95 | 0.2707 | 1.06 | **LOSS** |
| 10 | LLY | 02-12 15:15 | 02-12 15:55 | 1033.59 | 1028.21 | 13 | 13436.67 | -69.94 | -0.52% | 0.39R | 40m | market | early-reversal | breakout | breakout | neutral | 69.68 | ↑1022.5 | 1.332 | 1.18 | **LOSS** |
| 11 | LLY | 02-23 15:05 | 02-23 16:50 | 1049.38 | 1055.27 | 13 | 13641.94 | +76.57 | +0.56% | 0.28R | 105m | market | timeout | trend | trend | neutral | 67.96 | ↑1043.18 | 8.7856 | 1.84 | **WIN** |
| 12 | LLY | 03-09 14:50 | 03-09 15:40 | 999.74 | 993.98 | 13 | 12996.62 | -74.88 | -0.58% | 0.71R | 50m | market | early-reversal | trend | trend | neutral | 73.23 | ↓989.32 | 1.3228 | 1.87 | **LOSS** |
| 13 | LLY | 04-08 15:20 | 04-08 15:40 | 957 | 952.67 | 14 | 13398 | -60.62 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 74.62 | ↑944.38 | 6.8477 | 1.05 | **LOSS** |

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

- ⚠️ **Profit factor 0.47 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.81R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:19:00.162Z*
