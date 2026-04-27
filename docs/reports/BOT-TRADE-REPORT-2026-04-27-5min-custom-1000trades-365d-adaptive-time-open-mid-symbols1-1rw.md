# Bot Trade Report — 8 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:22:05.079Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $31.88 (+0.03%) over 8 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 8 |
| Win rate | 25% (2W / 6L) |
| Net P&L | $+31.88 (+0.03%) |
| Gross profit | $457.88 |
| Gross loss | $426 |
| Profit factor | 1.07 |
| Avg win | $228.94 |
| Avg loss | $71 |
| Payoff ratio | 3.22:1 |
| Expectancy | $+3.99 / trade |
| Max drawdown | 0.39% |
| Sharpe ratio (ann.) | 0.41 |
| Trades / active day | 1 |
| Avg confidence | 98.38% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.96R |
| Starting equity | $100,000 |
| Ending equity | $100,031.88 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 100% | $+302.66 | $302.66 |
| Mid  10:30–11:30 | 7 | 14.29% | $-270.78 | $-38.68 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| HD | 8 | 2 | 25% | $+31.88 | $+3.99 | 1.07 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 5 | 2 | 40% | $+289.21 | $+57.84 |
| breakout | 3 | 0 | 0% | $-257.33 | $-85.78 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 8 | 2 | 25% | $+31.88 | $+3.99 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+9.92 | 1.02 |
| +3 bps/side | $-34.03 | 0.93 |
| +5 bps/side | $-77.96 | 0.85 |
| +10 bps/side | $-187.81 | 0.68 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 3 |
| timeout | 2 |
| early-reversal | 2 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | HD | 07-01 14:25 | 07-01 16:10 | 371.08 | 379.26 | 37 | 13729.96 | +302.66 | +2.2% | 3.14R | 105m | market | timeout | trend | trend | neutral | 72.26 | ↑367.75 | 0.8124 | 1.17 | **WIN** |
| 2 | HD | 07-08 15:10 | 07-08 16:00 | 369.8 | 369.25 | 37 | 13682.6 | -20.35 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 3 | HD | 11-21 14:35 | 11-21 15:40 | 338.39 | 338.01 | 41 | 13873.99 | -15.58 | -0.11% | 0.16R | 65m | market | stagnation | breakout | breakout | neutral | 79.13 | ↓335.84 | 0.4622 | 1.24 | **LOSS** |
| 4 | HD | 01-08 15:15 | 01-08 17:00 | 356.85 | 360.83 | 39 | 13917.15 | +155.22 | +1.12% | 1.12R | 105m | market | timeout | trend | trend | neutral | 73.26 | ↑351.41 | 1.0435 | 1.16 | **WIN** |
| 5 | HD | 01-09 14:35 | 01-09 15:00 | 364.41 | 362.26 | 38 | 13847.58 | -81.7 | -0.59% | 0.74R | 25m | market | early-reversal | trend | breakout | neutral | 64.78 | ↓363.89 | -0.1651 | 1.87 | **LOSS** |
| 6 | HD | 01-22 14:40 | 01-22 14:55 | 388.63 | 384.77 | 36 | 13990.68 | -138.96 | -0.99% | 1.41R | 15m | market | stop-loss | breakout | trend | neutral | 73.65 | ↓388.59 | 1.4586 | 1.37 | **LOSS** |
| 7 | HD | 02-10 14:30 | 02-10 15:20 | 385.23 | 384.97 | 36 | 13868.28 | -9.36 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 73.3 | ↓384.63 | 0.5713 | 1.87 | **LOSS** |
| 8 | HD | 02-24 14:45 | 02-24 15:05 | 391.65 | 386.8 | 33 | 12924.45 | -160.05 | -1.24% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 78.94 | ↓390.88 | 2.8923 | 1.14 | **LOSS** |

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

- ⚠️ **Profit factor 1.07 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.96R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:22:05.079Z*
