# Bot Trade Report — 3 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:17:33.163Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $50.35 (+0.05%) over 3 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 3 |
| Win rate | 33.33% (1W / 2L) |
| Net P&L | $+50.35 (+0.05%) |
| Gross profit | $131.76 |
| Gross loss | $81.41 |
| Profit factor | 1.62 |
| Avg win | $131.76 |
| Avg loss | $40.71 |
| Payoff ratio | 3.24:1 |
| Expectancy | $+16.78 / trade |
| Max drawdown | 0.06% |
| Sharpe ratio (ann.) | 2.65 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 72 min |
| Avg risk ratio | 0.72R |
| Starting equity | $100,000 |
| Ending equity | $100,050.35 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 0% | $-55.8 | $-55.8 |
| Mid  10:30–11:30 | 2 | 50% | $+106.15 | $53.08 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| KO | 3 | 1 | 33.33% | $+50.35 | $+16.78 | 1.62 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 3 | 1 | 33.33% | $+50.35 | $+16.78 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 3 | 1 | 33.33% | $+50.35 | $+16.78 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+41.94 | 1.48 |
| +3 bps/side | $+25.15 | 1.26 |
| +5 bps/side | $+8.35 | 1.08 |
| +10 bps/side | $-33.64 | 0.76 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 1 |
| timeout | 1 |
| early-reversal | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | KO | 12-15 14:30 | 12-15 15:45 | 71.06 | 70.93 | 197 | 13998.82 | -25.61 | -0.18% | 0.26R | 75m | market | stagnation | trend | trend | neutral | 79.91 | ↓70.87 | 0.1944 | 1.95 | **LOSS** |
| 2 | KO | 02-03 14:35 | 02-03 16:20 | 76.3 | 77.02 | 183 | 13962.9 | +131.76 | +0.94% | 1.34R | 105m | market | timeout | trend | trend | neutral | 74.73 | ↑75.84 | 0.1847 | 1.46 | **WIN** |
| 3 | KO | 04-09 14:05 | 04-09 14:40 | 77.83 | 77.52 | 180 | 14009.4 | -55.8 | -0.4% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 79.48 | ↓77.45 | 0.2091 | 2.91 | **LOSS** |

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

- ✅ **Profit factor 1.62** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.72R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:17:33.163Z*
