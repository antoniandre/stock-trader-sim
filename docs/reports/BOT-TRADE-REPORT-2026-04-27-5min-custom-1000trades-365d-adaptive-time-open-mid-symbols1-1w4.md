# Bot Trade Report — 3 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:20:20.731Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $28.8 (+0.03%) over 3 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 3 |
| Win rate | 66.67% (2W / 1L) |
| Net P&L | $+28.8 (+0.03%) |
| Gross profit | $130.05 |
| Gross loss | $101.25 |
| Profit factor | 1.28 |
| Avg win | $65.03 |
| Avg loss | $101.25 |
| Payoff ratio | 0.64:1 |
| Expectancy | $+9.6 / trade |
| Max drawdown | 0.1% |
| Sharpe ratio (ann.) | 1.54 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 77 min |
| Avg risk ratio | 0.8R |
| Starting equity | $100,000 |
| Ending equity | $100,028.8 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 3 | 66.67% | $+28.8 | $9.6 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MA | 3 | 2 | 66.67% | $+28.8 | $+9.6 | 1.28 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 3 | 2 | 66.67% | $+28.8 | $+9.6 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 3 | 2 | 66.67% | $+28.8 | $+9.6 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+20.56 | 1.2 |
| +3 bps/side | $+4.09 | 1.04 |
| +5 bps/side | $-12.39 | 0.89 |
| +10 bps/side | $-53.58 | 0.58 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 2 |
| early-reversal | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MA | 11-25 14:35 | 11-25 14:55 | 545.96 | 541.91 | 25 | 13649 | -101.25 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | trend | neutral | 74.84 | ↓544.28 | 0.2295 | 1.1 | **LOSS** |
| 2 | MA | 12-12 14:30 | 12-12 16:15 | 568.49 | 572.21 | 24 | 13643.76 | +89.28 | +0.65% | 0.93R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑567.53 | 1.2619 | 1.59 | **WIN** |
| 3 | MA | 02-26 14:30 | 02-26 16:15 | 514 | 515.51 | 27 | 13878 | +40.77 | +0.29% | 0.41R | 105m | market | timeout | trend | trend | neutral | 79.89 | ↑512.23 | 0.4594 | 3.36 | **WIN** |

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

- ⚠️ **Profit factor 1.28 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.8R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:20:20.731Z*
