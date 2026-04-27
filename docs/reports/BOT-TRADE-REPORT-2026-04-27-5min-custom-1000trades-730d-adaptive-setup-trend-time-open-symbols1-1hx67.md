# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:22:22.141Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $700.03 (-0.7%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 25% (3W / 9L) |
| Net P&L | $-700.03 (-0.7%) |
| Gross profit | $190.62 |
| Gross loss | $890.65 |
| Profit factor | 0.21 |
| Avg win | $63.54 |
| Avg loss | $98.96 |
| Payoff ratio | 0.64:1 |
| Expectancy | $-58.34 / trade |
| Max drawdown | 0.75% |
| Sharpe ratio (ann.) | -9.84 |
| Trades / active day | 1 |
| Avg confidence | 98.83% |
| Avg trade duration | 47 min |
| Avg risk ratio | 0.46R |
| Starting equity | $100,000 |
| Ending equity | $99,299.97 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 25% | $-700.03 | $-58.34 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| RIVN | 12 | 3 | 25% | $-700.03 | $-58.34 | 0.21 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 3 | 25% | $-700.03 | $-58.34 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 3 | 0 | 0% | $-292.83 | $-97.61 |
| neutral | 9 | 3 | 33.33% | $-407.2 | $-45.24 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | RIVN | 7 | 0.12 | $-77.38 | 5 | 0.43 | $-31.67 | 0.2% | 0.3 | reject |
| Time slot | Open 9:30-10:30 | 7 | 0.12 | $-77.38 | 5 | 0.43 | $-31.67 | 0.2% | 0.3 | reject |
| Setup | trend | 7 | 0.12 | $-77.38 | 5 | 0.43 | $-31.67 | 0.2% | 0.3 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-729.47 | 0.2 |
| +3 bps/side | $-788.39 | 0.17 |
| +5 bps/side | $-847.26 | 0.15 |
| +10 bps/side | $-994.52 | 0.11 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| timeout | 2 |
| stagnation | 2 |
| stop-loss | 1 |
| trailing-stop | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | RIVN | 07-09 14:00 | 07-09 14:25 | 15.91 | 15.64 | 483 | 7684.53 | -130.41 | -1.7% | 0.85R | 25m | market | early-reversal | breakout | trend | noisyHighBeta | 65.28 | ↓15.68 | 0.0955 | 1.06 | **LOSS** |
| 2 | RIVN | 07-30 14:25 | 07-30 14:40 | 16.63 | 16.32 | 462 | 7683.06 | -143.22 | -1.86% | 1.16R | 15m | market | stop-loss | trend | trend | noisyHighBeta | 74.6 | ↓16.53 | 0.0985 | 1.84 | **LOSS** |
| 3 | RIVN | 08-08 14:10 | 08-08 14:40 | 14.62 | 14.58 | 480 | 7017.6 | -19.2 | -0.27% | 0.14R | 30m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.1 | ↑14.27 | 0.1327 | 1.02 | **LOSS** |
| 4 | RIVN | 10-09 14:15 | 10-09 14:35 | 10.84 | 10.67 | 1287 | 13951.08 | -218.79 | -1.57% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 79.03 | ↓10.77 | 0.0834 | 1.77 | **LOSS** |
| 5 | RIVN | 10-30 14:15 | 10-30 14:40 | 10.55 | 10.48 | 1320 | 13926 | -92.4 | -0.66% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 59.78 | ↓10.48 | 0.0257 | 1.7 | **LOSS** |
| 6 | RIVN | 03-19 14:00 | 03-19 15:45 | 11.55 | 11.61 | 1204 | 13906.2 | +72.24 | +0.52% | 0.39R | 105m | market | timeout | breakout | trend | neutral | 68.18 | ↑11.43 | 0.0319 | 1.04 | **WIN** |
| 7 | RIVN | 05-01 14:25 | 05-01 15:20 | 14.07 | 14.06 | 989 | 13915.23 | -9.89 | -0.07% | 0.04R | 55m | market | stagnation | breakout | trend | neutral | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 8 | RIVN | 06-26 14:20 | 06-26 14:40 | 14.1 | 14.01 | 987 | 13916.7 | -88.83 | -0.64% | 0.39R | 20m | market | early-reversal | trend | trend | neutral | 71.33 | ↑13.97 | 0.0747 | 1.11 | **LOSS** |
| 9 | RIVN | 07-18 14:20 | 07-18 14:40 | 13.17 | 13.06 | 1056 | 13907.52 | -116.16 | -0.84% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 61.66 | ↑13.03 | 0.0348 | 2.41 | **LOSS** |
| 10 | RIVN | 08-22 14:25 | 08-22 16:10 | 12.65 | 12.75 | 1098 | 13889.7 | +109.8 | +0.79% | 0.41R | 105m | market | timeout | trend | trend | neutral | 78.89 | ↑12.41 | 0.1389 | 1.27 | **WIN** |
| 11 | RIVN | 10-15 14:05 | 10-15 14:55 | 13.56 | 13.49 | 1025 | 13899 | -71.75 | -0.52% | 0.36R | 50m | market | stagnation | breakout | trend | neutral | 75.97 | ↑13.39 | 0.0864 | 1.15 | **LOSS** |
| 12 | RIVN | 04-15 14:15 | 04-15 15:50 | 16.2 | 16.21 | 858 | 13899.6 | +8.58 | +0.06% | 0.04R | 95m | market | breakeven-stop | breakout | trend | neutral | 60 | ↑16.07 | 0.026 | 1.17 | **WIN** |

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

- ⚠️ **Profit factor 0.21 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.46R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:22:22.141Z*
