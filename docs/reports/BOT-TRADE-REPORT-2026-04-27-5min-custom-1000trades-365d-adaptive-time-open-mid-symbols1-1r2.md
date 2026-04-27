# Bot Trade Report — 16 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:05:33.146Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $440.86 (-0.44%) over 16 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 16 |
| Win rate | 37.5% (6W / 10L) |
| Net P&L | $-440.86 (-0.44%) |
| Gross profit | $436.66 |
| Gross loss | $877.52 |
| Profit factor | 0.5 |
| Avg win | $72.78 |
| Avg loss | $87.75 |
| Payoff ratio | 0.83:1 |
| Expectancy | $-27.55 / trade |
| Max drawdown | 0.82% |
| Sharpe ratio (ann.) | -4.73 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.78R |
| Starting equity | $100,000 |
| Ending equity | $99,559.14 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 57.14% | $+119.66 | $17.09 |
| Mid  10:30–11:30 | 9 | 22.22% | $-560.52 | $-62.28 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GE | 16 | 6 | 37.5% | $-440.86 | $-27.55 | 0.5 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 5 | 45.45% | $-243.26 | $-22.11 |
| breakout | 5 | 1 | 20% | $-197.6 | $-39.52 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 16 | 6 | 37.5% | $-440.86 | $-27.55 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 6 | 1.39 | $+13.85 | 1 | ∞ | $+36.55 | 0% | ∞ | watch |
| Setup | trend | 7 | 0.91 | $-2.86 | 4 | 0.14 | $-55.8 | 0.26% | 0.08 | reject |
| Symbol | GE | 9 | 1.19 | $+7.06 | 7 | 0.07 | $-72.06 | 0.54% | 0.04 | reject |
| Behavior | neutral | 9 | 1.19 | $+7.06 | 7 | 0.07 | $-72.06 | 0.54% | 0.04 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-485.19 | 0.46 |
| +3 bps/side | $-573.84 | 0.4 |
| +5 bps/side | $-662.52 | 0.35 |
| +10 bps/side | $-884.15 | 0.24 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| timeout | 6 |
| stop-loss | 2 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GE | 05-01 14:15 | 05-01 16:00 | 203.59 | 203.96 | 68 | 13844.12 | +25.16 | +0.18% | 0.2R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 2 | GE | 05-08 15:25 | 05-08 17:10 | 215.12 | 215.84 | 65 | 13982.8 | +46.8 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 77.33 | ↑213.22 | 1.1311 | 2.13 | **WIN** |
| 3 | GE | 05-27 13:35 | 05-27 15:20 | 236.46 | 239.99 | 59 | 13951.14 | +208.27 | +1.49% | 2.13R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 4 | GE | 06-11 14:05 | 06-11 15:50 | 245.12 | 246.2 | 57 | 13971.84 | +61.56 | +0.44% | 0.44R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 5 | GE | 06-17 15:10 | 06-17 15:30 | 238.82 | 236.67 | 58 | 13851.56 | -124.7 | -0.9% | 1.29R | 20m | market | stop-loss | breakout | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 6 | GE | 06-27 15:05 | 06-27 16:50 | 257.7 | 258.78 | 54 | 13915.8 | +58.32 | +0.42% | 0.6R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 7 | GE | 07-11 14:05 | 07-11 15:00 | 255.58 | 255.17 | 54 | 13801.32 | -22.14 | -0.16% | 0.19R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 8 | GE | 09-16 14:15 | 09-16 14:40 | 292.41 | 289.79 | 47 | 13743.27 | -123.14 | -0.9% | 0.91R | 25m | market | early-reversal | trend | trend | neutral | 77.08 | ↓290.63 | 1.4852 | 1.08 | **LOSS** |
| 9 | GE | 10-24 14:15 | 10-24 14:35 | 309.85 | 308.37 | 45 | 13943.25 | -66.6 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 69.92 | ↓308.52 | 0.9026 | 1.35 | **LOSS** |
| 10 | GE | 11-26 14:30 | 11-26 14:50 | 296.5 | 294.65 | 47 | 13935.5 | -86.95 | -0.62% | 0.89R | 20m | market | early-reversal | trend | breakout | neutral | 78.94 | ↓296.29 | 0.3988 | 1.65 | **LOSS** |
| 11 | GE | 12-15 14:40 | 12-15 15:00 | 303.94 | 301.55 | 46 | 13981.24 | -109.94 | -0.79% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 69.28 | ↓302.85 | 0.316 | 1.12 | **LOSS** |
| 12 | GE | 01-27 15:00 | 01-27 15:35 | 299.44 | 297.97 | 46 | 13774.24 | -67.62 | -0.49% | 0.56R | 35m | market | early-reversal | breakout | trend | neutral | 76.66 | ↓297.35 | 0.7022 | 1.72 | **LOSS** |
| 13 | GE | 02-11 14:45 | 02-11 15:05 | 320.97 | 319.01 | 43 | 13801.71 | -84.28 | -0.61% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 70.75 | ↓320.19 | 0.4384 | 1.4 | **LOSS** |
| 14 | GE | 02-25 14:30 | 02-25 14:45 | 348.11 | 345.45 | 40 | 13924.4 | -106.4 | -0.76% | 1.09R | 15m | market | stop-loss | trend | trend | neutral | 70.34 | ↓347.09 | 0.8414 | 1.22 | **LOSS** |
| 15 | GE | 03-31 15:10 | 03-31 15:30 | 281.83 | 280.08 | 49 | 13809.67 | -85.75 | -0.62% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 62.27 | ↑279.41 | 2.1641 | 2.93 | **LOSS** |
| 16 | GE | 04-14 14:15 | 04-14 16:00 | 317.2 | 318.05 | 43 | 13639.6 | +36.55 | +0.27% | 0.31R | 105m | market | timeout | trend | trend | neutral | 78.87 | ↑315.16 | 1.8512 | 1.09 | **WIN** |

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
- ⚠️ **Avg R = 0.78R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:05:33.146Z*
