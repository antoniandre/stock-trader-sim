# Bot Trade Report — 15 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:41:44.344Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $306.02 (-0.31%) over 15 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 15 |
| Win rate | 26.67% (4W / 11L) |
| Net P&L | $-306.02 (-0.31%) |
| Gross profit | $348.93 |
| Gross loss | $654.95 |
| Profit factor | 0.53 |
| Avg win | $87.23 |
| Avg loss | $59.54 |
| Payoff ratio | 1.47:1 |
| Expectancy | $-20.4 / trade |
| Max drawdown | 0.31% |
| Sharpe ratio (ann.) | -4.35 |
| Trades / active day | 1.07 |
| Avg confidence | 100% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.64R |
| Starting equity | $100,000 |
| Ending equity | $99,693.98 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 2 | 0% | $-86.3 | $-43.15 |
| Mid  10:30–11:30 | 5 | 40% | $-70.15 | $-14.03 |
| Noon 11:30–13:00 | 8 | 25% | $-149.57 | $-18.7 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| DE | 15 | 4 | 26.67% | $-306.02 | $-20.4 | 0.53 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 3 | 21.43% | $-389.77 | $-27.84 |
| breakout | 1 | 1 | 100% | $+83.75 | $+83.75 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 15 | 4 | 26.67% | $-306.02 | $-20.4 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Noon 11:30-13:00 | 5 | 0.7 | $-14.11 | 3 | 0.18 | $-26.35 | 0.1% | 0.03 | reject |
| Symbol | DE | 9 | 0.67 | $-13.49 | 6 | 0.35 | $-30.77 | 0.18% | 0.22 | reject |
| Behavior | neutral | 9 | 0.67 | $-13.49 | 6 | 0.35 | $-30.77 | 0.18% | 0.22 | reject |
| Setup | trend | 9 | 0.67 | $-13.49 | 5 | 0.06 | $-53.68 | 0.27% | 0.01 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-347.24 | 0.49 |
| +3 bps/side | $-429.7 | 0.42 |
| +5 bps/side | $-512.2 | 0.36 |
| +10 bps/side | $-718.37 | 0.26 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 8 |
| timeout | 4 |
| breakeven-stop | 1 |
| stagnation | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | DE | 05-01 14:55 | 05-01 15:15 | 483.52 | 481.93 | 28 | 13538.56 | -44.52 | -0.33% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.26 | ↑479.33 | 6.3644 | 1.23 | **LOSS** |
| 2 | DE | 05-16 14:10 | 05-16 15:20 | 526.1 | 525.48 | 26 | 13678.6 | -16.12 | -0.12% | 0.17R | 70m | market | breakeven-stop | trend | trend | neutral | 74.58 | ↑522.84 | 3.0417 | 2.98 | **LOSS** |
| 3 | DE | 05-16 16:35 | 05-16 17:05 | 532.81 | 530.53 | 26 | 13853.06 | -59.28 | -0.43% | 0.61R | 30m | market | early-reversal | trend | trend | neutral | 76.75 | ↑526.18 | 1.9002 | 2.33 | **LOSS** |
| 4 | DE | 08-20 16:10 | 08-20 16:30 | 496.41 | 493.47 | 28 | 13899.48 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 70.58 | ↑492.88 | 1.2394 | 2.99 | **LOSS** |
| 5 | DE | 09-02 14:10 | 09-02 14:30 | 481.74 | 479.32 | 29 | 13970.46 | -70.18 | -0.5% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 63.49 | ↑477.28 | 1.1691 | 1.12 | **LOSS** |
| 6 | DE | 10-14 14:40 | 10-14 16:25 | 444.12 | 446.7 | 31 | 13767.72 | +79.98 | +0.58% | 0.69R | 105m | market | timeout | trend | trend | neutral | 62.52 | ↑441.16 | 1.159 | 1.54 | **WIN** |
| 7 | DE | 11-21 16:55 | 11-21 17:50 | 488.5 | 487.44 | 28 | 13678 | -29.68 | -0.22% | 0.31R | 55m | market | stagnation | trend | trend | neutral | 65.23 | ↑485.24 | 1.6485 | 1.21 | **LOSS** |
| 8 | DE | 01-08 16:00 | 01-08 17:45 | 495.86 | 501.84 | 28 | 13884.08 | +167.44 | +1.21% | 1.61R | 105m | market | timeout | trend | trend | neutral | 69.25 | ↑490.11 | 5.3104 | 1.11 | **WIN** |
| 9 | DE | 01-14 16:10 | 01-14 16:40 | 513.61 | 511.14 | 27 | 13867.47 | -66.69 | -0.48% | 0.69R | 30m | market | early-reversal | trend | trend | neutral | 71.51 | ↑507.47 | 3.2348 | 1.42 | **LOSS** |
| 10 | DE | 01-27 14:40 | 01-27 14:55 | 520.77 | 516.81 | 26 | 13540.02 | -102.96 | -0.76% | 1.09R | 15m | market | stop-loss | trend | trend | neutral | 69.44 | ↓518.88 | 0.7726 | 1.81 | **LOSS** |
| 11 | DE | 02-03 14:30 | 02-03 16:15 | 538.14 | 541.49 | 25 | 13453.5 | +83.75 | +0.62% | 0.89R | 105m | market | timeout | breakout | breakout | neutral | 80.85 | ↓536.58 | 0.4643 | 1.18 | **WIN** |
| 12 | DE | 02-04 16:20 | 02-04 18:05 | 565.39 | 566.13 | 24 | 13569.36 | +17.76 | +0.13% | 0.18R | 105m | market | timeout | trend | trend | neutral | 63.97 | ↑559.93 | 4.6584 | 1.05 | **WIN** |
| 13 | DE | 02-05 15:10 | 02-05 15:30 | 573.3 | 569.7 | 24 | 13759.2 | -86.4 | -0.63% | 0.72R | 20m | market | early-reversal | trend | trend | neutral | 68.97 | ↓570.9 | 1.4758 | 1.29 | **LOSS** |
| 14 | DE | 03-02 15:40 | 03-02 16:10 | 632.45 | 630.12 | 22 | 13913.9 | -51.26 | -0.37% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 67.2 | ↓629.76 | 1.2138 | 1.78 | **LOSS** |
| 15 | DE | 04-08 15:35 | 04-08 16:25 | 606.31 | 604.33 | 23 | 13945.13 | -45.54 | -0.33% | 0.47R | 50m | market | early-reversal | trend | trend | neutral | 70.41 | ↑599.1 | 5.5584 | 1.29 | **LOSS** |

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

- ⚠️ **Profit factor 0.53 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.64R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:41:44.344Z*
