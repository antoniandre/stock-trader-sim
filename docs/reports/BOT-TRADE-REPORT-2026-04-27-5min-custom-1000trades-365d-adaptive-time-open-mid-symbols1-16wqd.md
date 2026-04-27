# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:22:02.948Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $187.09 (-0.19%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 44.44% (4W / 5L) |
| Net P&L | $-187.09 (-0.19%) |
| Gross profit | $379.28 |
| Gross loss | $566.37 |
| Profit factor | 0.67 |
| Avg win | $94.82 |
| Avg loss | $113.27 |
| Payoff ratio | 0.84:1 |
| Expectancy | $-20.79 / trade |
| Max drawdown | 0.42% |
| Sharpe ratio (ann.) | -2.65 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 59 min |
| Avg risk ratio | 0.98R |
| Starting equity | $100,000 |
| Ending equity | $99,812.91 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 100% | $+82.49 | $82.49 |
| Mid  10:30–11:30 | 8 | 37.5% | $-269.58 | $-33.7 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ABBV | 9 | 4 | 44.44% | $-187.09 | $-20.79 | 0.67 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 4 | 50% | $-20.69 | $-2.59 |
| breakout | 1 | 0 | 0% | $-166.4 | $-166.4 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 4 | 44.44% | $-187.09 | $-20.79 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ABBV | 5 | 0.77 | $-13.99 | 4 | 0.55 | $-29.29 | 0.26% | 0.43 | reject |
| Behavior | neutral | 5 | 0.77 | $-13.99 | 4 | 0.55 | $-29.29 | 0.26% | 0.43 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-212.14 | 0.63 |
| +3 bps/side | $-262.23 | 0.57 |
| +5 bps/side | $-312.32 | 0.52 |
| +10 bps/side | $-437.54 | 0.4 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| stop-loss | 3 |
| stagnation | 1 |
| early-reversal | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ABBV | 07-01 14:40 | 07-01 16:25 | 188.31 | 190.35 | 74 | 13934.94 | +150.96 | +1.08% | 1.54R | 105m | market | timeout | breakout | trend | neutral | 72.85 | ↑185.72 | 0.6286 | 1.09 | **WIN** |
| 2 | ABBV | 07-29 14:25 | 07-29 16:10 | 191.08 | 192.21 | 73 | 13948.84 | +82.49 | +0.59% | 0.71R | 105m | market | timeout | trend | trend | neutral | 76.6 | ↑189.96 | 0.5604 | 1.09 | **WIN** |
| 3 | ABBV | 10-01 15:10 | 10-01 16:05 | 239.76 | 239.31 | 58 | 13906.08 | -26.1 | -0.19% | 0.22R | 55m | market | stagnation | trend | trend | neutral | 71.08 | ↑237.43 | 1.9181 | 1.18 | **LOSS** |
| 4 | ABBV | 11-04 14:35 | 11-04 14:40 | 216.9 | 214.3 | 64 | 13881.6 | -166.4 | -1.2% | 1.46R | 5m | market | stop-loss | breakout | breakout | neutral | 83.71 | ↓216.03 | 0.2236 | 1.8 | **LOSS** |
| 5 | ABBV | 11-11 14:40 | 11-11 14:55 | 221.93 | 220.17 | 63 | 13981.59 | -110.88 | -0.79% | 1.13R | 15m | market | stop-loss | breakout | trend | neutral | 78.47 | ↓221.39 | 0.7434 | 1.24 | **LOSS** |
| 6 | ABBV | 11-13 14:35 | 11-13 16:20 | 236.1 | 238.52 | 59 | 13929.9 | +142.78 | +1.02% | 1.46R | 105m | market | timeout | trend | trend | neutral | 75.75 | ↑235.26 | 0.3699 | 1.24 | **WIN** |
| 7 | ABBV | 11-18 14:40 | 11-18 15:00 | 236.8 | 233.99 | 59 | 13971.2 | -165.79 | -1.19% | 1.4R | 20m | market | stop-loss | breakout | trend | neutral | 79.42 | ↓235.65 | 0.35 | 1.05 | **LOSS** |
| 8 | ABBV | 12-19 15:10 | 12-19 16:55 | 226.4 | 226.45 | 61 | 13810.4 | +3.05 | +0.02% | 0.03R | 105m | market | timeout | trend | trend | neutral | 73.15 | ↑224.99 | 0.3602 | 1.18 | **WIN** |
| 9 | ABBV | 02-25 15:15 | 02-25 15:35 | 232.59 | 230.97 | 60 | 13955.4 | -97.2 | -0.7% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓231.54 | 0.9926 | 1.41 | **LOSS** |

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

- ⚠️ **Profit factor 0.67 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.98R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:22:02.948Z*
