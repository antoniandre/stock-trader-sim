# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:41:42.854Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $365.05 (-0.37%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 16.67% (2W / 10L) |
| Net P&L | $-365.05 (-0.37%) |
| Gross profit | $129.45 |
| Gross loss | $494.5 |
| Profit factor | 0.26 |
| Avg win | $64.72 |
| Avg loss | $49.45 |
| Payoff ratio | 1.31:1 |
| Expectancy | $-30.42 / trade |
| Max drawdown | 0.37% |
| Sharpe ratio (ann.) | -9.57 |
| Trades / active day | 1 |
| Avg confidence | 99.92% |
| Avg trade duration | 49 min |
| Avg risk ratio | 0.52R |
| Starting equity | $100,000 |
| Ending equity | $99,634.95 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 25% | $-160.82 | $-40.2 |
| Mid  10:30–11:30 | 7 | 14.29% | $-160.97 | $-23 |
| PM   13:00–14:00 | 1 | 0% | $-43.26 | $-43.26 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ABT | 12 | 2 | 16.67% | $-365.05 | $-30.42 | 0.26 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 2 | 18.18% | $-281.89 | $-25.63 |
| breakout | 1 | 0 | 0% | $-83.16 | $-83.16 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 12 | 2 | 16.67% | $-365.05 | $-30.42 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 7 | 0.54 | $-15.59 | 4 | 0 | $-43.18 | 0.17% | 0 | reject |
| Symbol | ABT | 7 | 0.54 | $-15.59 | 5 | 0 | $-51.18 | 0.26% | 0 | reject |
| Behavior | neutral | 7 | 0.54 | $-15.59 | 5 | 0 | $-51.18 | 0.26% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-398.43 | 0.24 |
| +3 bps/side | $-465.2 | 0.2 |
| +5 bps/side | $-531.99 | 0.16 |
| +10 bps/side | $-698.91 | 0.1 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| stagnation | 3 |
| timeout | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ABT | 05-16 17:00 | 05-16 17:25 | 135.11 | 134.69 | 103 | 13916.33 | -43.26 | -0.31% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 79.87 | ↑134.11 | 0.302 | 3.66 | **LOSS** |
| 2 | ABT | 07-21 15:05 | 07-21 15:35 | 125.94 | 125.52 | 111 | 13979.34 | -46.62 | -0.33% | 0.47R | 30m | market | early-reversal | trend | trend | neutral | 74.37 | ↑124.48 | 0.3598 | 1.12 | **LOSS** |
| 3 | ABT | 08-04 15:05 | 08-04 15:55 | 129.53 | 129.26 | 107 | 13859.71 | -28.89 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 69.76 | ↑128.57 | 0.4934 | 1.91 | **LOSS** |
| 4 | ABT | 08-08 14:40 | 08-08 16:25 | 133.35 | 134.07 | 104 | 13868.4 | +74.88 | +0.54% | 0.77R | 105m | market | timeout | trend | trend | neutral | 78.67 | ↑132.82 | 0.3692 | 2.15 | **WIN** |
| 5 | ABT | 08-19 14:55 | 08-19 15:35 | 131.61 | 131.15 | 106 | 13950.66 | -48.76 | -0.35% | 0.5R | 40m | market | early-reversal | trend | trend | neutral | 78.44 | ↑130.74 | 0.2949 | 1.02 | **LOSS** |
| 6 | ABT | 09-11 14:10 | 09-11 15:55 | 130.61 | 131.12 | 107 | 13975.27 | +54.57 | +0.39% | 0.52R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑130.13 | 0.4841 | 1.21 | **WIN** |
| 7 | ABT | 09-19 14:10 | 09-19 14:45 | 135.67 | 134.98 | 103 | 13974.01 | -71.07 | -0.51% | 0.71R | 35m | market | early-reversal | trend | trend | neutral | 67.81 | ↓135.04 | 0.3404 | 1.15 | **LOSS** |
| 8 | ABT | 10-24 14:00 | 10-24 14:25 | 128 | 127.2 | 109 | 13952 | -87.2 | -0.62% | 0.87R | 25m | market | early-reversal | trend | trend | neutral | 78.37 | ↑126.61 | 0.2533 | 1.16 | **LOSS** |
| 9 | ABT | 12-18 14:30 | 12-18 15:20 | 127.29 | 127.13 | 109 | 13874.61 | -17.44 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 71.91 | ↓127.08 | 0.1282 | 1.07 | **LOSS** |
| 10 | ABT | 02-02 14:40 | 02-02 15:20 | 110.84 | 110.18 | 126 | 13965.84 | -83.16 | -0.6% | 0.77R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓110.13 | 0.2703 | 1.5 | **LOSS** |
| 11 | ABT | 02-23 15:05 | 02-23 16:10 | 114.02 | 113.93 | 122 | 13910.44 | -10.98 | -0.08% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 77.12 | ↑113.12 | 0.3166 | 1.46 | **LOSS** |
| 12 | ABT | 04-14 14:15 | 04-14 14:35 | 102.09 | 101.67 | 136 | 13884.24 | -57.12 | -0.41% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 75.77 | ↓101.52 | 0.3434 | 2.54 | **LOSS** |

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

- ⚠️ **Profit factor 0.26 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.52R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:41:42.854Z*
