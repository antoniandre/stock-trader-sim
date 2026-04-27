# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:52:36.273Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1153.21 (+1.15%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 66.67% (6W / 3L) |
| Net P&L | $+1153.21 (+1.15%) |
| Gross profit | $1322.63 |
| Gross loss | $169.42 |
| Profit factor | 7.81 |
| Avg win | $220.44 |
| Avg loss | $56.47 |
| Payoff ratio | 3.9:1 |
| Expectancy | $+128.13 / trade |
| Max drawdown | 0.15% |
| Sharpe ratio (ann.) | 9.34 |
| Trades / active day | 1 |
| Avg confidence | 98.67% |
| Avg trade duration | 76 min |
| Avg risk ratio | 1.08R |
| Starting equity | $100,000 |
| Ending equity | $101,153.21 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 66.67% | $+1153.21 | $128.13 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MU | 9 | 6 | 66.67% | $+1153.21 | $+128.13 | 7.81 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 4 | 4 | 100% | $+402.05 | $+100.51 |
| trend | 5 | 2 | 40% | $+751.16 | $+150.23 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 8 | 6 | 75% | $+1213.01 | $+151.63 |
| noisyHighBeta | 1 | 0 | 0% | $-59.8 | $-59.8 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 5 | 41.26 | $+167.01 | 3 | 5.25 | $+125.99 | 0.09% | 4.26 | promote |
| Symbol | MU | 5 | 41.26 | $+167.01 | 4 | 3.14 | $+79.54 | 0.15% | 2.58 | promote |
| Time slot | Open 9:30-10:30 | 5 | 41.26 | $+167.01 | 4 | 3.14 | $+79.54 | 0.15% | 2.58 | promote |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1129.45 | 7.4 |
| +3 bps/side | $+1081.9 | 6.67 |
| +5 bps/side | $+1034.38 | 6.05 |
| +10 bps/side | $+915.54 | 4.73 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| profit-target | 2 |
| early-reversal | 2 |
| trailing-stop | 1 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MU | 05-13 13:30 | 05-13 15:15 | 93.9 | 95.72 | 138 | 12958.2 | +251.16 | +1.94% | 2.52R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 2 | MU | 06-09 13:55 | 06-09 15:40 | 110.3 | 110.49 | 127 | 14008.1 | +24.13 | +0.17% | 0.16R | 105m | market | trailing-stop | breakout | breakout | neutral | 64.04 | ↓109.47 | 0.1484 | 1.54 | **WIN** |
| 3 | MU | 07-30 14:05 | 07-30 14:55 | 114.14 | 113.97 | 122 | 13925.08 | -20.74 | -0.15% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑113.33 | 0.2261 | 1.05 | **LOSS** |
| 4 | MU | 08-08 14:15 | 08-08 15:20 | 113.83 | 118.33 | 123 | 14001.09 | +553.5 | +3.95% | 4.16R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 5 | MU | 09-12 14:20 | 09-12 16:05 | 156.13 | 156.43 | 90 | 14051.7 | +27 | +0.19% | 0.1R | 105m | market | timeout | breakout | breakout | neutral | 81.48 | ↑154.74 | 0.9647 | 1.91 | **WIN** |
| 6 | MU | 09-17 14:15 | 09-17 14:35 | 160.29 | 159.28 | 88 | 14105.52 | -88.88 | -0.63% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 65 | ↑158.53 | 0.4402 | 1.01 | **LOSS** |
| 7 | MU | 03-31 14:15 | 03-31 14:45 | 327.85 | 325.25 | 23 | 7540.55 | -59.8 | -0.79% | 0.4R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 58.31 | ↑321.41 | 0.828 | 1.21 | **LOSS** |
| 8 | MU | 04-01 14:20 | 04-01 16:00 | 365.91 | 375.57 | 38 | 13904.58 | +367.08 | +2.64% | 1.32R | 100m | market | profit-target | breakout | trend | neutral | 78.74 | ↑357.02 | 8.8636 | 1.55 | **WIN** |
| 9 | MU | 04-22 14:25 | 04-22 16:10 | 474.56 | 478 | 29 | 13762.24 | +99.76 | +0.72% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 78.4 | ↑467.04 | 5.021 | 2.8 | **WIN** |

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

- ✅ **Profit factor 7.81** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.08R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:52:36.273Z*
