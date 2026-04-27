# Bot Trade Report — 17 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:14:45.128Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $168.11 (+0.17%) over 17 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 17 |
| Win rate | 35.29% (6W / 11L) |
| Net P&L | $+168.11 (+0.17%) |
| Gross profit | $771.85 |
| Gross loss | $603.74 |
| Profit factor | 1.28 |
| Avg win | $128.64 |
| Avg loss | $54.89 |
| Payoff ratio | 2.34:1 |
| Expectancy | $+9.89 / trade |
| Max drawdown | 0.51% |
| Sharpe ratio (ann.) | 1.37 |
| Trades / active day | 1.06 |
| Avg confidence | 99.29% |
| Avg trade duration | 66 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $100,168.11 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 37.5% | $+273.45 | $34.18 |
| Mid  10:30–11:30 | 9 | 33.33% | $-105.34 | $-11.7 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 17 | 6 | 35.29% | $+168.11 | $+9.89 | 1.28 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 4 | 33.33% | $+57.6 | $+4.8 |
| breakout | 5 | 2 | 40% | $+110.51 | $+22.1 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 17 | 6 | 35.29% | $+168.11 | $+9.89 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | GOOGL | 10 | 1.53 | $+15.49 | 7 | 1.04 | $+1.88 | 0.26% | 0.78 | watch |
| Behavior | neutral | 10 | 1.53 | $+15.49 | 7 | 1.04 | $+1.88 | 0.26% | 0.78 | watch |
| Setup | trend | 8 | 1.96 | $+18.51 | 4 | 0.38 | $-22.62 | 0.15% | 0.23 | watch |
| Time slot | Open 9:30-10:30 | 7 | 4.9 | $+45.94 | 1 | 0 | $-48.15 | 0.05% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+123.91 | 1.2 |
| +3 bps/side | $+35.51 | 1.05 |
| +5 bps/side | $-52.89 | 0.93 |
| +10 bps/side | $-273.9 | 0.7 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 5 |
| early-reversal | 5 |
| stagnation | 3 |
| breakeven-stop | 3 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 43 | 13956.94 | +78.26 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 2 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 43 | 13956.94 | +179.74 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 3 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.82 | 171.6 | 82 | 13925.24 | +145.96 | +1.05% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 4 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.16 | 171.77 | 81 | 13944.96 | -31.59 | -0.23% | 0.2R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 5 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.92 | 200.91 | 69 | 13863.48 | -0.69 | 0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **LOSS** |
| 6 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.27 | 203.22 | 68 | 13890.36 | -71.4 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 7 | GOOGL | 08-15 14:10 | 08-15 15:00 | 206 | 205.42 | 68 | 14008 | -39.44 | -0.28% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 8 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.93 | 248.74 | 56 | 13940.08 | -10.64 | -0.08% | 0.08R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 9 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.87 | 271.73 | 51 | 13814.37 | +43.86 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 10 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.61 | 289.65 | 47 | 13752.67 | -139.12 | -1.01% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 11 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.31 | 304.74 | 45 | 13738.95 | -25.65 | -0.19% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 12 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 13 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.22 | 332.44 | 41 | 13703.02 | -72.98 | -0.53% | 0.63R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 14 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 15 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 16 | GOOGL | 03-11 14:25 | 03-11 15:05 | 311.03 | 309.96 | 45 | 13996.35 | -48.15 | -0.34% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 17 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.81 | 332.15 | 42 | 13894.02 | +56.28 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |

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
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:14:45.128Z*
