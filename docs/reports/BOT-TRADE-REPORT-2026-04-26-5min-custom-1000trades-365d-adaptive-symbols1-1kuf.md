# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:39:01.103Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $96.04 (-0.1%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 33.33% (3W / 6L) |
| Net P&L | $-96.04 (-0.1%) |
| Gross profit | $111.77 |
| Gross loss | $207.81 |
| Profit factor | 0.54 |
| Avg win | $37.26 |
| Avg loss | $34.64 |
| Payoff ratio | 1.08:1 |
| Expectancy | $-10.67 / trade |
| Max drawdown | 0.15% |
| Sharpe ratio (ann.) | -4.02 |
| Trades / active day | 1 |
| Avg confidence | 99.11% |
| Avg trade duration | 72 min |
| Avg risk ratio | 0.37R |
| Starting equity | $100,000 |
| Ending equity | $99,903.96 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 5 | 20% | $-70.3 | $-14.06 |
| Noon 11:30–13:00 | 2 | 50% | $+0.36 | $0.18 |
| PM   13:00–14:00 | 2 | 50% | $-26.1 | $-13.05 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| JPM | 9 | 3 | 33.33% | $-96.04 | $-10.67 | 0.54 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 3 | 37.5% | $-87.87 | $-10.98 |
| breakout | 1 | 0 | 0% | $-8.17 | $-8.17 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 3 | 33.33% | $-96.04 | $-10.67 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | JPM | 5 | 0 | $-30.81 | 4 | 2.08 | $+14.5 | 0.05% | 1.05 | reject |
| Behavior | neutral | 5 | 0 | $-30.81 | 4 | 2.08 | $+14.5 | 0.05% | 1.05 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-120.8 | 0.46 |
| +3 bps/side | $-170.29 | 0.34 |
| +5 bps/side | $-219.8 | 0.24 |
| +10 bps/side | $-343.55 | 0.1 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 3 |
| early-reversal | 3 |
| timeout | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | JPM | 05-01 15:25 | 05-01 16:15 | 247.15 | 246.73 | 56 | 13840.4 | -23.52 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 2 | JPM | 09-09 14:35 | 09-09 15:55 | 297.23 | 297.05 | 47 | 13969.81 | -8.46 | -0.06% | 0.08R | 80m | market | stagnation | trend | trend | neutral | 73.4 | ↑295.1 | 0.816 | 2.37 | **LOSS** |
| 3 | JPM | 11-12 14:35 | 11-12 16:20 | 320.68 | 320.49 | 43 | 13789.24 | -8.17 | -0.06% | 0.09R | 105m | market | stagnation | breakout | breakout | neutral | 74.44 | ↓318.84 | 0.2818 | 2 | **LOSS** |
| 4 | JPM | 11-18 17:50 | 11-18 18:25 | 302.32 | 301.37 | 46 | 13906.72 | -43.7 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 68.87 | ↑299.06 | 0.7789 | 1.65 | **LOSS** |
| 5 | JPM | 11-19 15:10 | 11-19 15:30 | 304.22 | 302.66 | 45 | 13689.9 | -70.2 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.8 | ↓303.2 | 0.7662 | 2.85 | **LOSS** |
| 6 | JPM | 01-16 16:40 | 01-16 18:25 | 313.9 | 315.13 | 44 | 13811.6 | +54.12 | +0.39% | 0.56R | 105m | market | timeout | trend | trend | neutral | 79.56 | ↑311.87 | 0.6243 | 1.19 | **WIN** |
| 7 | JPM | 02-17 14:35 | 02-17 16:20 | 306.19 | 307.08 | 45 | 13778.55 | +40.05 | +0.29% | 0.41R | 105m | market | timeout | breakout | trend | neutral | 72.57 | ↑305.18 | 0.2566 | 1.03 | **WIN** |
| 8 | JPM | 02-24 17:15 | 02-24 19:00 | 297.79 | 298.19 | 44 | 13102.76 | +17.6 | +0.13% | 0.19R | 105m | market | timeout | trend | trend | neutral | 79.23 | ↑294.94 | 0.7096 | 1.04 | **WIN** |
| 9 | JPM | 03-20 16:50 | 03-20 17:30 | 289.84 | 288.72 | 48 | 13912.32 | -53.76 | -0.39% | 0.56R | 40m | market | early-reversal | trend | trend | neutral | 77.73 | ↑287.59 | 0.5141 | 1.07 | **LOSS** |

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

- ⚠️ **Profit factor 0.54 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.37R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:39:01.103Z*
