# Bot Trade Report — 16 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:19:05.930Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $118.43 (-0.12%) over 16 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 16 |
| Win rate | 31.25% (5W / 11L) |
| Net P&L | $-118.43 (-0.12%) |
| Gross profit | $320.35 |
| Gross loss | $438.78 |
| Profit factor | 0.73 |
| Avg win | $64.07 |
| Avg loss | $39.89 |
| Payoff ratio | 1.61:1 |
| Expectancy | $-7.4 / trade |
| Max drawdown | 0.22% |
| Sharpe ratio (ann.) | -2.09 |
| Trades / active day | 1.07 |
| Avg confidence | 100% |
| Avg trade duration | 63 min |
| Avg risk ratio | 0.47R |
| Starting equity | $100,000 |
| Ending equity | $99,881.57 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 33.33% | $-35.8 | $-5.97 |
| Mid  10:30–11:30 | 10 | 30% | $-82.63 | $-8.26 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AAPL | 16 | 5 | 31.25% | $-118.43 | $-7.4 | 0.73 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 5 | 35.71% | $-90.39 | $-6.46 |
| breakout | 2 | 0 | 0% | $-28.04 | $-14.02 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 15 | 5 | 33.33% | $-50.39 | $-3.36 |
| cleanTrend | 1 | 0 | 0% | $-68.04 | $-68.04 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 5 | 1.81 | $+11.64 | 5 | 0 | $-28.17 | 0.14% | 0 | watch |
| Setup | trend | 9 | 0.9 | $-2.53 | 5 | 0.61 | $-13.52 | 0.17% | 0.4 | reject |
| Symbol | AAPL | 9 | 0.9 | $-2.53 | 7 | 0.52 | $-13.66 | 0.2% | 0.32 | reject |
| Behavior | neutral | 8 | 1.26 | $+5.65 | 7 | 0.52 | $-13.66 | 0.2% | 0.32 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-160.4 | 0.66 |
| +3 bps/side | $-244.33 | 0.54 |
| +5 bps/side | $-328.28 | 0.45 |
| +10 bps/side | $-538.14 | 0.28 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| timeout | 4 |
| breakeven-stop | 3 |
| stagnation | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AAPL | 06-04 14:00 | 06-04 14:20 | 205.61 | 204.78 | 68 | 13981.48 | -56.44 | -0.4% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↓204.52 | 0.5322 | 2.23 | **LOSS** |
| 2 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.34 | 203.44 | 68 | 13895.12 | -61.2 | -0.44% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 3 | AAPL | 07-03 14:00 | 07-03 14:50 | 213.91 | 213.24 | 65 | 13904.15 | -43.55 | -0.31% | 0.44R | 50m | market | early-reversal | trend | trend | neutral | 68.43 | ↓212.88 | 0.4674 | 1.21 | **LOSS** |
| 4 | AAPL | 07-10 14:30 | 07-10 15:50 | 212.45 | 212.29 | 65 | 13809.25 | -10.4 | -0.08% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 62.1 | ↑211.18 | 0.5531 | 1.16 | **LOSS** |
| 5 | AAPL | 08-06 15:15 | 08-06 16:25 | 212.94 | 214.37 | 32 | 13841.1 | +45.76 | +0.67% | 0.89R | 70m | market | trim-profit-target | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 6 | AAPL | 08-06 15:15 | 08-06 17:00 | 212.94 | 214.09 | 33 | 13841.1 | +37.95 | +0.54% | 0.72R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 7 | AAPL | 09-12 14:05 | 09-12 15:50 | 232.83 | 234.28 | 60 | 13969.8 | +87 | +0.62% | 0.71R | 105m | market | timeout | trend | trend | neutral | 64.82 | ↑230.73 | 0.4094 | 1.94 | **WIN** |
| 8 | AAPL | 10-15 14:00 | 10-15 14:25 | 251.81 | 250.73 | 63 | 15864.03 | -68.04 | -0.43% | 0.48R | 25m | market | early-reversal | trend | trend | cleanTrend | 75.12 | ↑249.86 | 0.7842 | 1.14 | **LOSS** |
| 9 | AAPL | 10-24 14:45 | 10-24 16:30 | 262.23 | 263.1 | 53 | 13898.19 | +46.11 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑260.66 | 0.4667 | 1.06 | **WIN** |
| 10 | AAPL | 11-10 14:30 | 11-10 15:35 | 271.65 | 271.11 | 51 | 13854.15 | -27.54 | -0.2% | 0.28R | 65m | market | breakeven-stop | breakout | breakout | neutral | 80.22 | ↓270.77 | 0.4078 | 1.35 | **LOSS** |
| 11 | AAPL | 11-19 15:10 | 11-19 15:55 | 271.27 | 270.22 | 51 | 13834.77 | -53.55 | -0.39% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 71.19 | ↑269.24 | 0.6054 | 1 | **LOSS** |
| 12 | AAPL | 11-20 14:30 | 11-20 16:05 | 272.68 | 272.66 | 51 | 13906.68 | -1.02 | -0.01% | 0.01R | 95m | market | breakeven-stop | trend | trend | neutral | 69.09 | ↓272.4 | 0.0598 | 3.59 | **LOSS** |
| 13 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.78 | 274.77 | 50 | 13739 | -0.5 | 0% | 0R | 40m | market | breakeven-stop | breakout | breakout | neutral | 85.63 | ↓273.89 | 0.3927 | 4.02 | **LOSS** |
| 14 | AAPL | 02-23 15:15 | 02-23 16:00 | 266.85 | 265.73 | 52 | 13876.2 | -58.24 | -0.42% | 0.38R | 45m | market | early-reversal | trend | trend | neutral | 63.51 | ↓265.35 | 0.4074 | 1.4 | **LOSS** |
| 15 | AAPL | 04-08 14:00 | 04-08 14:30 | 259 | 257.9 | 53 | 13727 | -58.3 | -0.42% | 0.38R | 30m | market | early-reversal | trend | trend | neutral | 75.43 | ↓257.85 | 1.9907 | 1.54 | **LOSS** |
| 16 | AAPL | 04-22 14:10 | 04-22 15:55 | 270.84 | 272.87 | 51 | 13812.84 | +103.53 | +0.75% | 0.96R | 105m | market | timeout | trend | trend | neutral | 74.06 | ↑268.61 | 0.6558 | 1.34 | **WIN** |

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

- ⚠️ **Profit factor 0.73 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.47R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:19:05.930Z*
