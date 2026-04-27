# Bot Trade Report — 28 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:05:44.588Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $288.79 (-0.29%) over 28 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 28 |
| Win rate | 32.14% (9W / 19L) |
| Net P&L | $-288.79 (-0.29%) |
| Gross profit | $1008.54 |
| Gross loss | $1297.33 |
| Profit factor | 0.78 |
| Avg win | $112.06 |
| Avg loss | $68.28 |
| Payoff ratio | 1.64:1 |
| Expectancy | $-10.31 / trade |
| Max drawdown | 0.57% |
| Sharpe ratio (ann.) | -1.55 |
| Trades / active day | 1.08 |
| Avg confidence | 99.57% |
| Avg trade duration | 59 min |
| Avg risk ratio | 0.75R |
| Starting equity | $100,000 |
| Ending equity | $99,711.21 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 33.33% | $+56.34 | $4.7 |
| Mid  10:30–11:30 | 16 | 31.25% | $-345.13 | $-21.57 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 28 | 9 | 32.14% | $-288.79 | $-10.31 | 0.78 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 8 | 2 | 25% | $-168.64 | $-21.08 |
| trend | 20 | 7 | 35% | $-120.15 | $-6.01 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 28 | 9 | 32.14% | $-288.79 | $-10.31 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 9 | 1.47 | $+16.99 | 3 | 0 | $-32.19 | 0.1% | 0 | watch |
| Time slot | Mid 10:30-11:30 | 7 | 0.4 | $-34.26 | 9 | 0.78 | $-11.7 | 0.43% | 0.59 | reject |
| Symbol | GOOGL | 16 | 0.88 | $-5.43 | 12 | 0.65 | $-16.83 | 0.48% | 0.47 | reject |
| Behavior | neutral | 16 | 0.88 | $-5.43 | 12 | 0.65 | $-16.83 | 0.48% | 0.47 | reject |
| Setup | trend | 12 | 1.1 | $+3.86 | 8 | 0.38 | $-20.81 | 0.22% | 0.21 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-360.55 | 0.73 |
| +3 bps/side | $-504.08 | 0.65 |
| +5 bps/side | $-647.58 | 0.58 |
| +10 bps/side | $-1006.39 | 0.45 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| timeout | 7 |
| breakeven-stop | 4 |
| stagnation | 3 |
| trim-profit-target | 2 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GOOGL | 05-07 13:45 | 05-07 14:05 | 170.89 | 169.88 | 81 | 13842.09 | -81.81 | -0.59% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 77.47 | ↓170.13 | 0.7463 | 1.66 | **LOSS** |
| 2 | GOOGL | 06-25 14:15 | 06-25 16:00 | 181.42 | 182.44 | 77 | 13969.34 | +78.54 | +0.56% | 0.8R | 105m | market | timeout | trend | trend | neutral | 77.51 | ↑180.5 | 0.5082 | 1.46 | **WIN** |
| 3 | GOOGL | 08-23 14:00 | 08-23 14:45 | 165.72 | 164.53 | 84 | 13920.48 | -99.96 | -0.72% | 1.01R | 45m | market | early-reversal | trend | trend | neutral | 71.08 | ↓165 | 0.1746 | 2.03 | **LOSS** |
| 4 | GOOGL | 10-15 14:00 | 10-15 14:30 | 167.16 | 165.79 | 83 | 13874.28 | -113.71 | -0.82% | 1.05R | 30m | market | early-reversal | trend | trend | neutral | 72.09 | ↓166.33 | 0.4606 | 1.81 | **LOSS** |
| 5 | GOOGL | 11-12 14:55 | 11-12 15:15 | 181.81 | 180.02 | 76 | 13817.56 | -136.04 | -0.98% | 1.4R | 20m | market | stop-loss | trend | trend | neutral | 73.9 | ↓181.05 | 0.3034 | 1.25 | **LOSS** |
| 6 | GOOGL | 12-02 15:10 | 12-02 15:40 | 171.96 | 171.3 | 81 | 13928.76 | -53.46 | -0.38% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 77.54 | ↑170.65 | 0.7357 | 1.13 | **LOSS** |
| 7 | GOOGL | 12-16 15:20 | 12-16 15:55 | 194.54 | 196.57 | 35 | 13812.34 | +71.05 | +1.04% | 0.7R | 35m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑194.11 | 0.8212 | 1.03 | **WIN** |
| 8 | GOOGL | 12-16 15:20 | 12-16 17:05 | 194.54 | 197.01 | 36 | 13812.34 | +88.92 | +1.27% | 0.85R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑194.11 | 0.8212 | 1.03 | **WIN** |
| 9 | GOOGL | 01-07 14:50 | 01-07 15:10 | 200.22 | 198.48 | 69 | 13815.18 | -120.06 | -0.87% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 81.65 | ↓198.7 | 0.6261 | 2.08 | **LOSS** |
| 10 | GOOGL | 01-24 14:30 | 01-24 15:10 | 199.83 | 198.71 | 69 | 13788.27 | -77.28 | -0.56% | 0.8R | 40m | market | early-reversal | breakout | breakout | neutral | 85.61 | ↓199.2 | 0.2405 | 3.19 | **LOSS** |
| 11 | GOOGL | 02-04 15:10 | 02-04 16:40 | 204.96 | 204.77 | 68 | 13937.28 | -12.92 | -0.09% | 0.09R | 90m | market | breakeven-stop | trend | trend | neutral | 70.93 | ↓203.94 | 0.4519 | 1.42 | **LOSS** |
| 12 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 42 | 13794.65 | +76.44 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 13 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 43 | 13794.65 | +179.74 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 14 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.82 | 171.6 | 82 | 13925.24 | +145.96 | +1.05% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 15 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.16 | 171.77 | 81 | 13944.96 | -31.59 | -0.23% | 0.2R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 16 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.92 | 200.91 | 69 | 13863.48 | -0.69 | 0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **LOSS** |
| 17 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.27 | 203.22 | 68 | 13890.36 | -71.4 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 18 | GOOGL | 08-15 14:10 | 08-15 15:00 | 206 | 205.42 | 67 | 13802 | -38.86 | -0.28% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 19 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.93 | 248.74 | 56 | 13940.08 | -10.64 | -0.08% | 0.08R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 20 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.87 | 271.73 | 51 | 13814.37 | +43.86 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 21 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.61 | 289.65 | 47 | 13752.67 | -139.12 | -1.01% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 22 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.31 | 304.74 | 45 | 13738.95 | -25.65 | -0.19% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 23 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 24 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.22 | 332.44 | 41 | 13703.02 | -72.98 | -0.53% | 0.63R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 25 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 26 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 27 | GOOGL | 03-11 14:25 | 03-11 15:05 | 311.03 | 309.96 | 44 | 13685.32 | -47.08 | -0.34% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 28 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.81 | 332.15 | 42 | 13894.02 | +56.28 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |

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

- ⚠️ **Profit factor 0.78 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.75R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:05:44.588Z*
