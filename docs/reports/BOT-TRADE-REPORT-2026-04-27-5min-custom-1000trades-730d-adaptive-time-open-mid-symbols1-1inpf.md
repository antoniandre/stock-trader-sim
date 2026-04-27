# Bot Trade Report — 45 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:34:49.244Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $191.59 (-0.19%) over 45 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 45 |
| Win rate | 33.33% (15W / 30L) |
| Net P&L | $-191.59 (-0.19%) |
| Gross profit | $1803.9 |
| Gross loss | $1995.49 |
| Profit factor | 0.9 |
| Avg win | $120.26 |
| Avg loss | $66.52 |
| Payoff ratio | 1.81:1 |
| Expectancy | $-4.26 / trade |
| Max drawdown | 0.9% |
| Sharpe ratio (ann.) | -0.56 |
| Trades / active day | 1.07 |
| Avg confidence | 99.71% |
| Avg trade duration | 53 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $99,808.41 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 20 | 35% | $-131.17 | $-6.56 |
| Mid  10:30–11:30 | 25 | 32% | $-60.42 | $-2.42 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SNOW | 45 | 15 | 33.33% | $-191.59 | $-4.26 | 0.9 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 31 | 10 | 32.26% | $+411.84 | $+13.29 |
| breakout | 14 | 5 | 35.71% | $-603.43 | $-43.1 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 42 | 15 | 35.71% | $-30.42 | $-0.72 |
| noisyHighBeta | 3 | 0 | 0% | $-161.17 | $-53.72 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 21 | 1.6 | $+16.8 | 10 | 1.14 | $+5.91 | 0.15% | 0.85 | watch |
| Symbol | SNOW | 27 | 1.31 | $+8.94 | 18 | 0.64 | $-24.05 | 0.9% | 0.51 | watch |
| Behavior | neutral | 24 | 1.65 | $+16.77 | 18 | 0.64 | $-24.05 | 0.9% | 0.51 | watch |
| Time slot | Mid 10:30-11:30 | 16 | 2.15 | $+29.8 | 9 | 0.4 | $-59.69 | 0.76% | 0.34 | watch |
| Time slot | Open 9:30-10:30 | 11 | 0.36 | $-21.4 | 9 | 1.33 | $+11.58 | 0.18% | 0.95 | reject |
| Setup | breakout | 6 | 0.41 | $-18.57 | 8 | 0.38 | $-61.5 | 0.76% | 0.31 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-307.52 | 0.85 |
| +3 bps/side | $-539.34 | 0.76 |
| +5 bps/side | $-771.14 | 0.68 |
| +10 bps/side | $-1350.67 | 0.53 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 18 |
| timeout | 7 |
| stagnation | 7 |
| trailing-stop | 4 |
| breakeven-stop | 3 |
| profit-target | 2 |
| trim-profit-target | 2 |
| stop-loss | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SNOW | 05-06 14:05 | 05-06 14:30 | 161.31 | 160.71 | 86 | 13872.66 | -51.6 | -0.37% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 61.54 | ↑160.3 | 0.4 | 1.15 | **LOSS** |
| 2 | SNOW | 07-01 14:25 | 07-01 16:10 | 140.05 | 140.65 | 99 | 13864.95 | +59.4 | +0.43% | 0.25R | 105m | market | timeout | breakout | breakout | neutral | 81.4 | ↑138.12 | 1.059 | 1.28 | **WIN** |
| 3 | SNOW | 07-22 14:40 | 07-22 15:20 | 131.17 | 130.66 | 106 | 13904.02 | -54.06 | -0.39% | 0.48R | 40m | market | early-reversal | trend | trend | neutral | 62.49 | ↑130.35 | 0.2529 | 2.13 | **LOSS** |
| 4 | SNOW | 07-23 15:15 | 07-23 16:25 | 133.3 | 133.16 | 104 | 13863.2 | -14.56 | -0.11% | 0.16R | 70m | market | stagnation | breakout | breakout | neutral | 73.96 | ↑131.63 | 0.0282 | 3.05 | **LOSS** |
| 5 | SNOW | 07-25 15:20 | 07-25 16:35 | 129.08 | 132.15 | 108 | 13940.64 | +331.56 | +2.38% | 3.05R | 75m | market | profit-target | trend | trend | neutral | 78.94 | ↑127.12 | 0.7518 | 1.72 | **WIN** |
| 6 | SNOW | 08-07 14:00 | 08-07 15:25 | 119.88 | 119.9 | 117 | 14025.96 | +2.34 | +0.02% | 0.01R | 85m | market | breakeven-stop | trend | trend | neutral | 72.52 | ↓119.06 | 0.6857 | 1.43 | **WIN** |
| 7 | SNOW | 08-08 15:20 | 08-08 15:45 | 120.7 | 120.23 | 63 | 7604.1 | -29.61 | -0.39% | 0.44R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 61.12 | ↑119.33 | 0.9296 | 1.27 | **LOSS** |
| 8 | SNOW | 08-13 14:55 | 08-13 16:40 | 126.05 | 127.07 | 111 | 13991.55 | +113.22 | +0.81% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.64 | ↑124.83 | 0.786 | 1.48 | **WIN** |
| 9 | SNOW | 08-19 14:10 | 08-19 15:50 | 131.15 | 132.05 | 53 | 14033.05 | +47.7 | +0.69% | 0.65R | 100m | market | trim-profit-target | trend | trend | neutral | 79.95 | ↑130.04 | 0.6725 | 1.11 | **WIN** |
| 10 | SNOW | 08-19 14:10 | 08-19 15:55 | 131.15 | 131.54 | 54 | 14033.05 | +21.06 | +0.3% | 0.28R | 105m | market | timeout | trend | trend | neutral | 79.95 | ↑130.04 | 0.6725 | 1.11 | **WIN** |
| 11 | SNOW | 09-19 15:15 | 09-19 15:55 | 114.07 | 113.97 | 123 | 14030.61 | -12.3 | -0.09% | 0.1R | 40m | market | breakeven-stop | trend | trend | neutral | 77.62 | ↑112.67 | 0.5526 | 2.19 | **LOSS** |
| 12 | SNOW | 09-25 14:05 | 09-25 14:50 | 114.81 | 114.73 | 122 | 14006.82 | -9.76 | -0.07% | 0.05R | 45m | market | trailing-stop | trend | trend | neutral | 73.62 | ↓113.86 | 0.6824 | 1.29 | **LOSS** |
| 13 | SNOW | 10-04 14:30 | 10-04 15:15 | 112.53 | 113.95 | 62 | 13953.72 | +88.04 | +1.26% | 1.18R | 45m | market | trim-profit-target | trend | trend | neutral | 77.36 | ↑111.96 | 0.5018 | 3.08 | **WIN** |
| 14 | SNOW | 10-04 14:30 | 10-04 16:15 | 112.53 | 114.2 | 62 | 13953.72 | +103.54 | +1.48% | 1.38R | 105m | market | timeout | trend | trend | neutral | 77.36 | ↑111.96 | 0.5018 | 3.08 | **WIN** |
| 15 | SNOW | 10-25 14:00 | 10-25 14:20 | 117.02 | 116.45 | 120 | 14042.4 | -68.4 | -0.49% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 75.26 | ↓116.61 | 0.5915 | 1.74 | **LOSS** |
| 16 | SNOW | 10-30 14:00 | 10-30 14:45 | 120.67 | 120.2 | 116 | 13997.72 | -54.52 | -0.39% | 0.43R | 45m | market | early-reversal | breakout | breakout | neutral | 77.97 | ↑119.28 | 0.3544 | 1.1 | **LOSS** |
| 17 | SNOW | 01-02 14:40 | 01-02 16:00 | 157.15 | 157.1 | 89 | 13986.35 | -4.45 | -0.03% | 0.03R | 80m | market | trailing-stop | breakout | breakout | neutral | 75.42 | ↓156.34 | 0.3689 | 1.59 | **LOSS** |
| 18 | SNOW | 01-13 14:50 | 01-13 15:10 | 164.13 | 162.65 | 78 | 12802.14 | -115.44 | -0.9% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 58.8 | ↑160.73 | -0.5254 | 1.16 | **LOSS** |
| 19 | SNOW | 01-27 14:55 | 01-27 16:10 | 177.66 | 177.89 | 79 | 14035.14 | +18.17 | +0.13% | 0.09R | 75m | market | trailing-stop | breakout | breakout | neutral | 80.06 | ↑175.03 | 0.5184 | 1.24 | **WIN** |
| 20 | SNOW | 02-06 15:10 | 02-06 15:30 | 189.39 | 188.63 | 74 | 14014.86 | -56.24 | -0.4% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 61.61 | ↑188.51 | 0.4061 | 1.26 | **LOSS** |
| 21 | SNOW | 03-19 14:00 | 03-19 14:25 | 155.75 | 154.66 | 90 | 14017.5 | -98.1 | -0.7% | 1R | 25m | market | early-reversal | trend | trend | neutral | 73.83 | ↓154.91 | 0.6917 | 1.34 | **LOSS** |
| 22 | SNOW | 04-02 15:20 | 04-02 17:05 | 151.93 | 154.51 | 92 | 13977.56 | +237.36 | +1.7% | 2.43R | 105m | market | timeout | trend | trend | neutral | 78.72 | ↑150.19 | 0.6589 | 1.13 | **WIN** |
| 23 | SNOW | 04-15 14:05 | 04-15 14:25 | 146.46 | 145 | 52 | 7615.92 | -75.92 | -1% | 1.04R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.28 | ↓145.79 | 0.2859 | 1.13 | **LOSS** |
| 24 | SNOW | 04-15 15:15 | 04-15 15:35 | 147.05 | 145.98 | 52 | 7646.6 | -55.64 | -0.73% | 0.97R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 62.38 | ↓146.01 | 0.3844 | 2.4 | **LOSS** |
| 25 | SNOW | 05-13 14:00 | 05-13 15:05 | 182.88 | 182.78 | 76 | 13898.88 | -7.6 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 26 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.16 | 203.93 | 68 | 13882.88 | -15.64 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 27 | SNOW | 06-06 15:05 | 06-06 15:25 | 212.86 | 211.98 | 65 | 13835.9 | -57.2 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 65.5 | ↓211.99 | 0.6038 | 1.39 | **LOSS** |
| 28 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.56 | 213.31 | 65 | 13881.4 | -16.25 | -0.12% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 29 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.58 | 215.67 | 64 | 13861.12 | -58.24 | -0.42% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 30 | SNOW | 07-31 14:00 | 07-31 15:10 | 226.82 | 226.89 | 61 | 13836.02 | +4.27 | +0.03% | 0.03R | 70m | market | breakeven-stop | breakout | breakout | neutral | 93.2 | ↑224.22 | 1.0668 | 1.87 | **WIN** |
| 31 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.38 | 195.46 | 71 | 13942.98 | -65.32 | -0.47% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 32 | SNOW | 09-19 14:00 | 09-19 15:45 | 225.24 | 227.7 | 62 | 13964.88 | +152.52 | +1.09% | 1.38R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑224.52 | 1.1048 | 1.3 | **WIN** |
| 33 | SNOW | 09-29 14:00 | 09-29 15:10 | 228.53 | 228.38 | 61 | 13940.33 | -9.15 | -0.07% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 70.72 | ↓227.06 | 1.1204 | 1.13 | **LOSS** |
| 34 | SNOW | 10-06 14:05 | 10-06 14:55 | 243.3 | 242.48 | 57 | 13868.1 | -46.74 | -0.34% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 70.27 | ↑241.93 | 1.8709 | 1.86 | **LOSS** |
| 35 | SNOW | 10-08 13:40 | 10-08 15:25 | 242.07 | 246.66 | 57 | 13797.99 | +261.63 | +1.9% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 72.69 | ↑239.9 | 0.9548 | 1.11 | **WIN** |
| 36 | SNOW | 10-23 14:00 | 10-23 14:55 | 249.74 | 249.27 | 56 | 13985.44 | -26.32 | -0.19% | 0.16R | 55m | market | stagnation | breakout | trend | neutral | 77.86 | ↑247.48 | 2.2908 | 1.25 | **LOSS** |
| 37 | SNOW | 10-28 15:05 | 10-28 15:25 | 270.24 | 269.23 | 52 | 14052.48 | -52.52 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑267.78 | 0.7228 | 1.84 | **LOSS** |
| 38 | SNOW | 01-05 14:30 | 01-05 15:40 | 219.17 | 224.35 | 64 | 14026.88 | +331.52 | +2.36% | 3.37R | 70m | market | profit-target | trend | trend | neutral | 70.3 | ↑218.65 | 0.702 | 1.48 | **WIN** |
| 39 | SNOW | 01-06 14:35 | 01-06 14:50 | 228.89 | 223.97 | 61 | 13962.29 | -300.12 | -2.15% | 2.76R | 15m | market | stop-loss | breakout | breakout | neutral | 80.82 | ↓228 | 0.5362 | 1.36 | **LOSS** |
| 40 | SNOW | 01-16 15:25 | 01-16 15:45 | 212.27 | 210.71 | 66 | 14009.82 | -102.96 | -0.73% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 70.48 | ↑209.44 | 0.7425 | 1.37 | **LOSS** |
| 41 | SNOW | 01-30 14:35 | 01-30 14:45 | 202.99 | 200.31 | 69 | 14006.31 | -184.92 | -1.32% | 1.33R | 10m | market | stop-loss | breakout | breakout | neutral | 82.3 | ↓202.41 | 0.3186 | 1.73 | **LOSS** |
| 42 | SNOW | 02-20 14:30 | 02-20 15:30 | 180.23 | 180.64 | 77 | 13877.71 | +31.57 | +0.23% | 0.28R | 60m | market | trailing-stop | breakout | breakout | neutral | 75.64 | ↓179.63 | 0.3307 | 1.34 | **WIN** |
| 43 | SNOW | 03-23 15:00 | 03-23 15:40 | 175.15 | 174.33 | 80 | 14012 | -65.6 | -0.47% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 67.22 | ↑172.81 | 1.7212 | 1.57 | **LOSS** |
| 44 | SNOW | 04-02 14:35 | 04-02 15:00 | 154.06 | 152.55 | 90 | 13865.4 | -135.9 | -0.98% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 52.83 | ↑150.8 | -0.3339 | 1.1 | **LOSS** |
| 45 | SNOW | 04-22 14:25 | 04-22 14:50 | 156.2 | 154.51 | 89 | 13901.8 | -150.41 | -1.08% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 79.26 | ↓154.47 | 1.148 | 1.37 | **LOSS** |

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

- ⚠️ **Profit factor 0.9 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:34:49.244Z*
