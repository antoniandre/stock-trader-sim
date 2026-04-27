# Bot Trade Report — 34 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T11:01:50.497Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $559.09 (-0.56%) over 34 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 34 |
| Win rate | 38.24% (13W / 21L) |
| Net P&L | $-559.09 (-0.56%) |
| Gross profit | $1457.49 |
| Gross loss | $2016.58 |
| Profit factor | 0.72 |
| Avg win | $112.11 |
| Avg loss | $96.03 |
| Payoff ratio | 1.17:1 |
| Expectancy | $-16.44 / trade |
| Max drawdown | 0.93% |
| Sharpe ratio (ann.) | -2.02 |
| Trades / active day | 1.06 |
| Avg confidence | 98.53% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.83R |
| Starting equity | $100,000 |
| Ending equity | $99,440.91 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 34 | 38.24% | $-559.09 | $-16.44 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MDB | 34 | 13 | 38.24% | $-559.09 | $-16.44 | 0.72 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 24 | 9 | 37.5% | $-591.25 | $-24.64 |
| breakout | 10 | 4 | 40% | $+32.16 | $+3.22 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 8 | 4 | 50% | $-37.65 | $-4.71 |
| neutral | 26 | 9 | 34.62% | $-521.44 | $-20.06 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 6 | 0.31 | $-65.85 | 4 | 14.03 | $+106.82 | 0.02% | 7.19 | reject |
| Behavior | neutral | 17 | 0.56 | $-36.3 | 9 | 1.25 | $+10.62 | 0.22% | 0.94 | reject |
| Symbol | MDB | 20 | 0.59 | $-30.5 | 14 | 1.09 | $+3.64 | 0.22% | 0.84 | reject |
| Time slot | Mid 10:30-11:30 | 20 | 0.59 | $-30.5 | 14 | 1.09 | $+3.64 | 0.22% | 0.84 | reject |
| Setup | trend | 14 | 0.76 | $-15.35 | 10 | 0.26 | $-37.63 | 0.49% | 0.18 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-637.78 | 0.69 |
| +3 bps/side | $-795.19 | 0.63 |
| +5 bps/side | $-952.61 | 0.58 |
| +10 bps/side | $-1346.08 | 0.47 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 13 |
| timeout | 9 |
| stop-loss | 6 |
| trim-profit-target | 2 |
| profit-target | 2 |
| stagnation | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MDB | 05-13 14:35 | 05-13 15:00 | 360.33 | 359.16 | 38 | 13692.54 | -44.46 | -0.32% | 0.36R | 25m | market | early-reversal | trend | trend | neutral | 70.58 | ↑358.22 | 1.1904 | 2.4 | **LOSS** |
| 2 | MDB | 05-15 15:20 | 05-15 16:15 | 369.35 | 371.78 | 18 | 13665.95 | +43.74 | +0.66% | 0.94R | 55m | market | trim-profit-target | trend | trend | neutral | 72.47 | ↑365.78 | 2.6947 | 1.53 | **WIN** |
| 3 | MDB | 05-15 15:20 | 05-15 17:05 | 369.35 | 374.89 | 19 | 13665.95 | +105.26 | +1.5% | 2.14R | 105m | market | timeout | trend | trend | neutral | 72.47 | ↑365.78 | 2.6947 | 1.53 | **WIN** |
| 4 | MDB | 06-07 14:55 | 06-07 15:15 | 231.93 | 229.96 | 60 | 13915.8 | -118.2 | -0.85% | 0.93R | 20m | market | stop-loss | trend | trend | neutral | 75.7 | ↑228.09 | 0.3295 | 1.73 | **LOSS** |
| 5 | MDB | 06-10 14:45 | 06-10 15:05 | 229.17 | 227.08 | 61 | 13979.37 | -127.49 | -0.91% | 0.97R | 20m | market | stop-loss | trend | trend | neutral | 66.42 | ↑226.84 | 0.4116 | 1.02 | **LOSS** |
| 6 | MDB | 06-14 14:40 | 06-14 15:05 | 225.83 | 223.68 | 61 | 13775.63 | -131.15 | -0.95% | 0.78R | 25m | market | early-reversal | trend | trend | neutral | 75.6 | ↑222.59 | 1.0822 | 1.48 | **LOSS** |
| 7 | MDB | 06-26 15:00 | 06-26 15:15 | 238.55 | 234.93 | 58 | 13835.9 | -209.96 | -1.52% | 1.06R | 15m | market | stop-loss | breakout | trend | neutral | 78.37 | ↓235.78 | 2.5467 | 3.97 | **LOSS** |
| 8 | MDB | 07-25 14:30 | 07-25 15:50 | 252.35 | 258.28 | 55 | 13879.25 | +326.15 | +2.35% | 1.82R | 80m | market | profit-target | trend | trend | neutral | 75.49 | ↑250.31 | 1.8398 | 2.24 | **WIN** |
| 9 | MDB | 10-15 14:55 | 10-15 15:15 | 289.91 | 288.86 | 48 | 13915.68 | -50.4 | -0.36% | 0.41R | 20m | market | early-reversal | trend | breakout | neutral | 51.15 | ↑287.91 | -0.5439 | 3.43 | **LOSS** |
| 10 | MDB | 11-07 14:40 | 11-07 16:25 | 287.23 | 289.11 | 48 | 13787.04 | +90.24 | +0.65% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 71.99 | ↑285.44 | 0.3515 | 1.13 | **WIN** |
| 11 | MDB | 11-22 14:50 | 11-22 15:00 | 334.31 | 326.73 | 41 | 13706.71 | -310.78 | -2.27% | 1.14R | 10m | market | stop-loss | breakout | breakout | neutral | 79.78 | ↓331.36 | 3.2237 | 1.13 | **LOSS** |
| 12 | MDB | 12-02 14:40 | 12-02 16:30 | 327.11 | 329.18 | 42 | 13738.62 | +86.94 | +0.63% | 0.81R | 110m | market | timeout | trend | breakout | neutral | 57.13 | ↑325.37 | -0.2875 | 1.25 | **WIN** |
| 13 | MDB | 12-09 15:05 | 12-09 15:40 | 357.25 | 354.46 | 21 | 7502.25 | -58.59 | -0.78% | 0.39R | 35m | market | early-reversal | breakout | trend | noisyHighBeta | 69.16 | ↓356.24 | 3.363 | 1.18 | **LOSS** |
| 14 | MDB | 01-21 15:20 | 01-21 15:50 | 261.08 | 258.56 | 53 | 13837.24 | -133.56 | -0.97% | 0.67R | 30m | market | early-reversal | breakout | breakout | neutral | 75.51 | ↓258.4 | 1.2841 | 1.34 | **LOSS** |
| 15 | MDB | 02-06 15:20 | 02-06 15:45 | 285.08 | 283.1 | 48 | 13683.84 | -95.04 | -0.69% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 75.94 | ↓282.75 | 0.9618 | 1.54 | **LOSS** |
| 16 | MDB | 02-26 14:45 | 02-26 15:25 | 269.77 | 268.12 | 47 | 12679.19 | -77.55 | -0.61% | 0.42R | 40m | market | early-reversal | breakout | breakout | neutral | 81.01 | ↑266.54 | 2.0532 | 1.76 | **LOSS** |
| 17 | MDB | 03-20 14:40 | 03-20 15:05 | 194.57 | 193.26 | 71 | 13814.47 | -93.01 | -0.67% | 0.52R | 25m | market | early-reversal | trend | trend | neutral | 73.27 | ↑192.24 | 0.8277 | 1.21 | **LOSS** |
| 18 | MDB | 04-16 15:20 | 04-16 15:40 | 160.01 | 159.5 | 47 | 7520.47 | -23.97 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 68.48 | ↑158.27 | 0.4256 | 1.17 | **LOSS** |
| 19 | MDB | 07-17 15:15 | 07-17 17:00 | 216.89 | 218.8 | 64 | 13880.96 | +122.24 | +0.88% | 1.26R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑214.88 | 1.9932 | 1.24 | **WIN** |
| 20 | MDB | 09-04 14:45 | 09-04 16:35 | 311.61 | 315.34 | 24 | 7478.64 | +89.52 | +1.2% | 1.11R | 110m | market | timeout | trend | trend | noisyHighBeta | 57.43 | ↑308.48 | -0.0258 | 1.35 | **WIN** |
| 21 | MDB | 09-29 15:00 | 09-29 16:45 | 317.92 | 318.18 | 43 | 13670.56 | +11.18 | +0.08% | 0.11R | 105m | market | timeout | trend | trend | neutral | 52.52 | ↑316.88 | 0.4923 | 1.3 | **WIN** |
| 22 | MDB | 10-30 15:20 | 10-30 15:30 | 355.33 | 351.57 | 39 | 13857.87 | -146.64 | -1.06% | 1.26R | 10m | market | stop-loss | trend | trend | neutral | 61.83 | ↑349.52 | 3.7156 | 1.81 | **LOSS** |
| 23 | MDB | 11-20 15:10 | 11-20 15:55 | 350.32 | 348.34 | 39 | 13662.48 | -77.22 | -0.57% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 77.59 | ↓348.97 | 3.7502 | 1.03 | **LOSS** |
| 24 | MDB | 11-24 14:30 | 11-24 16:15 | 328.19 | 331.6 | 39 | 12799.41 | +132.99 | +1.04% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 64.32 | ↑327.01 | 0.1465 | 2.41 | **WIN** |
| 25 | MDB | 11-28 14:40 | 11-28 15:30 | 333.55 | 333.08 | 41 | 13675.55 | -19.27 | -0.14% | 0.12R | 50m | market | stagnation | breakout | breakout | neutral | 63.85 | ↑332.36 | 0.1192 | 2.01 | **LOSS** |
| 26 | MDB | 12-05 15:05 | 12-05 15:35 | 404.8 | 402.3 | 17 | 6881.6 | -42.5 | -0.62% | 0.49R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 70.75 | ↑398.55 | 0.3094 | 1.07 | **LOSS** |
| 27 | MDB | 12-17 14:30 | 12-17 15:15 | 425.29 | 423.29 | 32 | 13609.28 | -64 | -0.47% | 0.67R | 45m | market | early-reversal | trend | trend | neutral | 71.46 | ↓424.28 | 1.1976 | 1.23 | **LOSS** |
| 28 | MDB | 01-16 15:10 | 01-16 16:30 | 399.33 | 408.95 | 34 | 13577.22 | +327.08 | +2.41% | 1.46R | 80m | market | profit-target | breakout | breakout | neutral | 69.15 | ↑394.07 | 0.6032 | 1.11 | **WIN** |
| 29 | MDB | 01-28 14:35 | 01-28 15:30 | 420.04 | 419.63 | 33 | 13861.32 | -13.53 | -0.1% | 0.13R | 55m | market | breakeven-stop | breakout | breakout | neutral | 77.09 | ↓418.71 | 0.73 | 1.19 | **LOSS** |
| 30 | MDB | 02-12 14:35 | 02-12 14:40 | 369.17 | 362.63 | 19 | 7014.23 | -124.26 | -1.77% | 1.82R | 5m | market | stop-loss | breakout | trend | noisyHighBeta | 73.15 | ↓368.82 | 1.5794 | 1.05 | **LOSS** |
| 31 | MDB | 02-18 15:10 | 02-18 16:55 | 361.27 | 362.34 | 21 | 7586.67 | +22.47 | +0.3% | 0.16R | 105m | market | timeout | breakout | trend | noisyHighBeta | 67.01 | ↑354 | 2.3504 | 1.05 | **WIN** |
| 32 | MDB | 04-02 15:00 | 04-02 15:55 | 251.87 | 250.87 | 55 | 13852.85 | -55 | -0.4% | 0.22R | 55m | market | early-reversal | trend | trend | neutral | 70.23 | ↑247.29 | 0.3768 | 1.12 | **LOSS** |
| 33 | MDB | 04-13 15:10 | 04-13 16:40 | 232.86 | 235.43 | 16 | 7451.52 | +41.12 | +1.1% | 1.15R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 59.83 | ↑229.88 | 2.2995 | 1.08 | **WIN** |
| 34 | MDB | 04-13 15:10 | 04-13 16:55 | 232.86 | 236.52 | 16 | 7451.52 | +58.56 | +1.57% | 1.64R | 105m | market | timeout | trend | trend | noisyHighBeta | 59.83 | ↑229.88 | 2.2995 | 1.08 | **WIN** |

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

- ⚠️ **Profit factor 0.72 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.83R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T11:01:50.497Z*
