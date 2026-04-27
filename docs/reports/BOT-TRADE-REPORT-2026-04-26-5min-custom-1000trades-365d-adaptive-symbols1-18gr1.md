# Bot Trade Report — 10 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:41:40.741Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $17.32 (+0.02%) over 10 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 10 |
| Win rate | 50% (5W / 5L) |
| Net P&L | $+17.32 (+0.02%) |
| Gross profit | $273.02 |
| Gross loss | $255.7 |
| Profit factor | 1.07 |
| Avg win | $54.6 |
| Avg loss | $51.14 |
| Payoff ratio | 1.07:1 |
| Expectancy | $+1.73 / trade |
| Max drawdown | 0.14% |
| Sharpe ratio (ann.) | 0.4 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 70 min |
| Avg risk ratio | 0.56R |
| Starting equity | $100,000 |
| Ending equity | $100,017.32 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 0% | $-72.02 | $-72.02 |
| Mid  10:30–11:30 | 8 | 62.5% | $+103.34 | $12.92 |
| Noon 11:30–13:00 | 1 | 0% | $-14 | $-14 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| COST | 10 | 5 | 50% | $+17.32 | $+1.73 | 1.07 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 5 | 62.5% | $+174.82 | $+21.85 |
| breakout | 2 | 0 | 0% | $-157.5 | $-78.75 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 10 | 5 | 50% | $+17.32 | $+1.73 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 5 | 2.99 | $+33.47 | 3 | 1.53 | $+2.49 | 0.01% | 0 | watch |
| Time slot | Mid 10:30-11:30 | 5 | 2.23 | $+27.8 | 3 | 0.38 | $-11.88 | 0.06% | 0 | watch |
| Symbol | COST | 6 | 1.36 | $+11.16 | 4 | 0.3 | $-12.41 | 0.07% | 0 | watch |
| Behavior | neutral | 6 | 1.36 | $+11.16 | 4 | 0.3 | $-12.41 | 0.07% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-9.79 | 0.96 |
| +3 bps/side | $-63.98 | 0.78 |
| +5 bps/side | $-118.19 | 0.64 |
| +10 bps/side | $-253.7 | 0.4 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 5 |
| early-reversal | 2 |
| stagnation | 2 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | COST | 05-02 14:25 | 05-02 14:45 | 1016.02 | 1010.48 | 13 | 13208.26 | -72.02 | -0.55% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 70.66 | ↓1013.12 | 3.2197 | 1.26 | **LOSS** |
| 2 | COST | 05-15 14:50 | 05-15 16:40 | 1004.3 | 1007.98 | 13 | 13055.9 | +47.84 | +0.37% | 0.53R | 110m | market | timeout | trend | trend | neutral | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 3 | COST | 06-27 14:50 | 06-27 15:45 | 988.99 | 988.12 | 14 | 13845.86 | -12.18 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 65.72 | ↑984.9 | 1.9502 | 1.59 | **LOSS** |
| 4 | COST | 01-14 14:35 | 01-14 14:45 | 952.31 | 945.14 | 14 | 13332.34 | -100.38 | -0.75% | 1.07R | 10m | market | stop-loss | breakout | breakout | neutral | 79.27 | ↓948.83 | 1.3799 | 1.67 | **LOSS** |
| 5 | COST | 02-02 14:35 | 02-02 16:20 | 946.61 | 954.51 | 14 | 13252.54 | +110.6 | +0.83% | 1.19R | 105m | market | timeout | trend | trend | neutral | 60.99 | ↑941.54 | 1.0978 | 1.01 | **WIN** |
| 6 | COST | 02-03 14:30 | 02-03 16:15 | 978.12 | 984.77 | 14 | 13693.68 | +93.1 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 78.19 | ↑974.38 | 1.8119 | 1.39 | **WIN** |
| 7 | COST | 02-04 14:40 | 02-04 15:10 | 991.5 | 987.42 | 14 | 13881 | -57.12 | -0.41% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 83.86 | ↓987.26 | 0.7752 | 1.74 | **LOSS** |
| 8 | COST | 02-12 15:45 | 02-12 16:40 | 997.61 | 996.61 | 14 | 13966.54 | -14 | -0.1% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 65.24 | ↑990.39 | 4.1214 | 1.1 | **LOSS** |
| 9 | COST | 03-12 15:10 | 03-12 16:55 | 998.95 | 999.89 | 14 | 13985.3 | +13.16 | +0.09% | 0.13R | 105m | market | timeout | trend | trend | neutral | 69.6 | ↑991.61 | 1.6195 | 1.24 | **WIN** |
| 10 | COST | 04-08 14:40 | 04-08 16:25 | 1022.03 | 1022.67 | 13 | 13286.39 | +8.32 | +0.06% | 0.08R | 105m | market | timeout | trend | trend | neutral | 71.3 | ↑1015.61 | 2.9788 | 1.41 | **WIN** |

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
- ⚠️ **Avg R = 0.56R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:41:40.741Z*
