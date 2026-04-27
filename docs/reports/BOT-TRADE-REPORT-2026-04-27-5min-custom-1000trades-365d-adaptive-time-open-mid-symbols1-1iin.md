# Bot Trade Report — 5 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:18:39.397Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $104.21 (+0.1%) over 5 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 5 |
| Win rate | 40% (2W / 3L) |
| Net P&L | $+104.21 (+0.1%) |
| Gross profit | $150.11 |
| Gross loss | $45.9 |
| Profit factor | 3.27 |
| Avg win | $75.06 |
| Avg loss | $15.3 |
| Payoff ratio | 4.91:1 |
| Expectancy | $+20.84 / trade |
| Max drawdown | 0.05% |
| Sharpe ratio (ann.) | 4.98 |
| Trades / active day | 1.25 |
| Avg confidence | 97.4% |
| Avg trade duration | 67 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $100,104.21 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 5 | 40% | $+104.21 | $20.84 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GLD | 5 | 2 | 40% | $+104.21 | $+20.84 | 3.27 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 4 | 2 | 50% | $+125.21 | $+31.3 |
| breakout | 1 | 0 | 0% | $-21 | $-21 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 4 | 2 | 50% | $+110.21 | $+27.55 |
| noisyHighBeta | 1 | 0 | 0% | $-6 | $-6 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+94.5 | 2.79 |
| +3 bps/side | $+75.09 | 2.13 |
| +5 bps/side | $+55.67 | 1.69 |
| +10 bps/side | $+7.14 | 1.06 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 3 |
| trim-profit-target | 1 |
| timeout | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GLD | 02-06 14:35 | 02-06 15:50 | 454.08 | 453.68 | 15 | 6811.2 | -6 | -0.09% | 0.07R | 75m | market | stagnation | breakout | trend | noisyHighBeta | 68.91 | ↓453.28 | 0.7898 | 2.58 | **LOSS** |
| 2 | GLD | 02-09 14:30 | 02-09 15:20 | 463.05 | 462.35 | 30 | 13891.5 | -21 | -0.15% | 0.21R | 50m | market | stagnation | breakout | breakout | neutral | 81.96 | ↓462.15 | 0.6752 | 1.98 | **LOSS** |
| 3 | GLD | 02-13 14:30 | 02-13 15:20 | 460.21 | 459.58 | 30 | 13806.3 | -18.9 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 77.5 | ↑459.79 | 1.0841 | 1.39 | **LOSS** |
| 4 | GLD | 03-27 14:45 | 03-27 15:40 | 411.04 | 416.06 | 17 | 13975.36 | +85.34 | +1.22% | 1.74R | 55m | market | trim-profit-target | trend | trend | neutral | 72.35 | ↑408.48 | 1.8815 | 1.4 | **WIN** |
| 5 | GLD | 03-27 14:45 | 03-27 16:30 | 411.04 | 414.85 | 17 | 13975.36 | +64.77 | +0.93% | 1.33R | 105m | market | timeout | trend | trend | neutral | 72.35 | ↑408.48 | 1.8815 | 1.4 | **WIN** |

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

- ✅ **Profit factor 3.27** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:18:39.397Z*
