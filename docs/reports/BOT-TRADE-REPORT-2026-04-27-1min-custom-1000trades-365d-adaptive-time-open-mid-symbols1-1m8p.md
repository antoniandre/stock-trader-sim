# Bot Trade Report — 45 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:13:18.092Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $748.56 (-0.75%) over 45 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 45 |
| Win rate | 26.67% (12W / 33L) |
| Net P&L | $-748.56 (-0.75%) |
| Gross profit | $452.44 |
| Gross loss | $1201 |
| Profit factor | 0.38 |
| Avg win | $37.7 |
| Avg loss | $36.39 |
| Payoff ratio | 1.04:1 |
| Expectancy | $-16.63 / trade |
| Max drawdown | 0.99% |
| Sharpe ratio (ann.) | -6.06 |
| Trades / active day | 1.02 |
| Avg confidence | 91.29% |
| Avg trade duration | 16 min |
| Avg risk ratio | 0.75R |
| Starting equity | $100,000 |
| Ending equity | $99,251.44 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 22 | 22.73% | $-327.19 | $-14.87 |
| Mid  10:30–11:30 | 23 | 30.43% | $-421.37 | $-18.32 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LLY | 45 | 12 | 26.67% | $-748.56 | $-16.63 | 0.38 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mean-revert | 27 | 8 | 29.63% | $-327.46 | $-12.13 |
| trend | 18 | 4 | 22.22% | $-421.1 | $-23.39 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| thinChop | 4 | 1 | 25% | $-33.04 | $-8.26 |
| neutral | 41 | 11 | 26.83% | $-715.52 | $-17.45 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 8 | 0.19 | $-21.83 | 15 | 0.52 | $-16.45 | 0.49% | 0.37 | reject |
| Setup | mean-revert | 19 | 0.51 | $-9.12 | 8 | 0.06 | $-19.28 | 0.15% | 0.01 | reject |
| Symbol | LLY | 27 | 0.32 | $-14.63 | 18 | 0.43 | $-19.65 | 0.51% | 0.31 | reject |
| Setup | trend | 8 | 0.04 | $-27.71 | 10 | 0.56 | $-19.94 | 0.36% | 0.42 | reject |
| Behavior | neutral | 25 | 0.31 | $-15.62 | 16 | 0.45 | $-20.31 | 0.48% | 0.32 | reject |
| Time slot | Open 9:30-10:30 | 19 | 0.4 | $-11.6 | 3 | 0 | $-35.63 | 0.11% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-827.72 | 0.34 |
| +3 bps/side | $-986.06 | 0.29 |
| +5 bps/side | $-1144.38 | 0.24 |
| +10 bps/side | $-1540.18 | 0.16 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stop-loss | 15 |
| timeout | 9 |
| stagnation | 8 |
| early-reversal | 7 |
| trailing-stop | 4 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LLY | 05-01 14:16 | 05-01 14:34 | 832.75 | 842.91 | 8 | 6662 | +81.28 | +1.22% | 2.03R | 18m | market | profit-target | mixed | mean-revert | neutral | 49.56 | ↑834.41 | -1.96 | 1.35 | **WIN** |
| 2 | LLY | 05-01 14:41 | 05-01 14:49 | 840.94 | 836.21 | 11 | 9250.34 | -52.03 | -0.56% | 1.12R | 8m | market | stop-loss | mixed | mean-revert | neutral | 61.41 | ↑835.97 | 2.2368 | 1.09 | **LOSS** |
| 3 | LLY | 05-02 13:52 | 05-02 14:08 | 824.92 | 821.07 | 3 | 2474.76 | -11.55 | -0.47% | 0.85R | 16m | market | early-reversal | mixed | mean-revert | thinChop | 36.44 | ↓826.69 | 4.1008 | 1.51 | **LOSS** |
| 4 | LLY | 05-16 14:13 | 05-16 14:34 | 747.14 | 750.05 | 11 | 8218.54 | +32.01 | +0.39% | 0.78R | 21m | market | timeout | bearish | mean-revert | neutral | 35.19 | ↑747.99 | 0.7283 | 2.25 | **WIN** |
| 5 | LLY | 05-27 14:03 | 05-27 14:20 | 722.29 | 719.42 | 15 | 10834.35 | -43.05 | -0.4% | 0.8R | 17m | market | early-reversal | trend | trend | neutral | 71.2 | ↑716.91 | 1.3788 | 1.24 | **LOSS** |
| 6 | LLY | 06-03 15:12 | 06-03 15:28 | 756.65 | 752.55 | 14 | 10593.1 | -57.4 | -0.54% | 1.08R | 16m | market | early-reversal | trend | trend | neutral | 72.72 | ↑749.49 | 1.7863 | 1.43 | **LOSS** |
| 7 | LLY | 06-10 14:06 | 06-10 14:22 | 793.65 | 793.06 | 14 | 11111.1 | -8.26 | -0.07% | 0.14R | 16m | market | stagnation | trend | trend | neutral | 78.72 | ↑786.77 | 3.3406 | 1.04 | **LOSS** |
| 8 | LLY | 06-13 13:55 | 06-13 14:11 | 819.41 | 814.65 | 11 | 9013.51 | -52.36 | -0.58% | 0.82R | 16m | market | stop-loss | mixed | mean-revert | neutral | 61.47 | ↓820.7 | 2.8721 | 2.21 | **LOSS** |
| 9 | LLY | 06-26 14:22 | 06-26 14:43 | 793.93 | 796.34 | 3 | 2381.79 | +7.23 | +0.3% | 0.6R | 21m | market | timeout | mixed | mean-revert | thinChop | 56.18 | ↑794.48 | 0.748 | 1.34 | **WIN** |
| 10 | LLY | 07-01 14:51 | 07-01 15:07 | 785.87 | 782.77 | 12 | 9430.44 | -37.2 | -0.39% | 0.78R | 16m | market | early-reversal | mixed | mean-revert | neutral | 67.17 | ↓783.32 | 1.6002 | 1.36 | **LOSS** |
| 11 | LLY | 07-08 14:12 | 07-08 14:37 | 787.93 | 787.71 | 14 | 11031.02 | -3.08 | -0.03% | 0.06R | 25m | market | timeout | trend | trend | neutral | 73.27 | ↑781.46 | 2.6553 | 1.02 | **LOSS** |
| 12 | LLY | 07-15 14:06 | 07-15 14:14 | 800.3 | 795.6 | 11 | 8803.3 | -51.7 | -0.59% | 1.18R | 8m | market | stop-loss | mixed | mean-revert | neutral | 49.06 | ↓802.04 | 0.7253 | 1.41 | **LOSS** |
| 13 | LLY | 07-17 14:44 | 07-17 15:05 | 785.75 | 787.92 | 12 | 9429 | +26.04 | +0.28% | 0.56R | 21m | market | timeout | mixed | mean-revert | neutral | 56.62 | ↑783.53 | 0.9469 | 1.45 | **WIN** |
| 14 | LLY | 07-18 14:29 | 07-18 14:47 | 775.39 | 772.55 | 14 | 10855.46 | -39.76 | -0.37% | 0.74R | 18m | market | early-reversal | trend | trend | neutral | 72.69 | ↑768.36 | 1.9309 | 1.8 | **LOSS** |
| 15 | LLY | 07-31 14:21 | 07-31 14:42 | 760.93 | 763.21 | 10 | 7609.3 | +22.8 | +0.3% | 0.6R | 21m | market | timeout | mixed | mean-revert | neutral | 51.76 | ↑758.66 | 1.3499 | 1.65 | **WIN** |
| 16 | LLY | 08-05 15:07 | 08-05 15:29 | 763.53 | 764.13 | 12 | 9162.36 | +7.2 | +0.08% | 0.16R | 22m | market | timeout | mixed | mean-revert | neutral | 50.89 | ↑763.32 | 0.3723 | 1.65 | **WIN** |
| 17 | LLY | 08-13 14:03 | 08-13 14:17 | 655.24 | 651.57 | 14 | 9173.36 | -51.38 | -0.56% | 1.12R | 14m | market | stop-loss | mixed | mean-revert | neutral | 62.57 | ↓651.92 | 2.8437 | 1.43 | **LOSS** |
| 18 | LLY | 08-18 13:33 | 08-18 13:53 | 699.88 | 699.49 | 13 | 9098.44 | -5.07 | -0.06% | 0.12R | 20m | market | stagnation | mixed | mean-revert | neutral | 37.05 | ↑699.94 | -0.3435 | 2.04 | **LOSS** |
| 19 | LLY | 08-19 14:24 | 08-19 14:41 | 710.15 | 709.53 | 13 | 9231.95 | -8.06 | -0.09% | 0.18R | 17m | market | stagnation | mixed | mean-revert | neutral | 59.32 | ↑708.47 | 1.7399 | 3.29 | **LOSS** |
| 20 | LLY | 08-26 13:59 | 08-26 14:04 | 724.1 | 719.36 | 13 | 9413.3 | -61.62 | -0.65% | 1.12R | 5m | market | stop-loss | mixed | mean-revert | neutral | 51.65 | ↓722.32 | 4.1989 | 1.3 | **LOSS** |
| 21 | LLY | 09-30 14:00 | 09-30 14:21 | 734.82 | 733.99 | 15 | 11022.3 | -12.45 | -0.11% | 0.22R | 21m | market | stagnation | trend | trend | neutral | 66.32 | ↑730.77 | 1.6543 | 2.33 | **LOSS** |
| 22 | LLY | 10-01 15:12 | 10-01 15:33 | 809.51 | 810.18 | 13 | 10523.63 | +8.71 | +0.08% | 0.16R | 21m | market | trailing-stop | trend | trend | neutral | 66.47 | ↑794.2 | 2.0005 | 1.3 | **WIN** |
| 23 | LLY | 10-03 14:51 | 10-03 15:10 | 839.58 | 839.26 | 11 | 9235.38 | -3.52 | -0.04% | 0.08R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 53.59 | ↑830.64 | 2.4374 | 1.81 | **LOSS** |
| 24 | LLY | 10-06 13:56 | 10-06 14:17 | 848.58 | 848.72 | 10 | 8485.8 | +1.4 | +0.02% | 0.04R | 21m | market | timeout | mixed | mean-revert | neutral | 53.94 | ↑847.02 | 1.4486 | 1.2 | **WIN** |
| 25 | LLY | 10-09 14:07 | 10-09 14:27 | 852.76 | 851.69 | 7 | 5969.32 | -7.49 | -0.13% | 0.26R | 20m | market | stagnation | mixed | mean-revert | neutral | 47.94 | ↓853.29 | 1.3526 | 1.16 | **LOSS** |
| 26 | LLY | 10-23 13:57 | 10-23 14:16 | 818.75 | 817.83 | 10 | 8187.5 | -9.2 | -0.11% | 0.22R | 19m | market | stagnation | mixed | mean-revert | neutral | 51.46 | ↓819.78 | 1.7224 | 1.14 | **LOSS** |
| 27 | LLY | 10-30 14:55 | 10-30 15:05 | 842.33 | 837.22 | 13 | 10950.29 | -66.43 | -0.61% | 1.22R | 10m | market | stop-loss | trend | trend | neutral | 77.96 | ↑828.14 | 3.9522 | 1.77 | **LOSS** |
| 28 | LLY | 11-03 14:32 | 11-03 14:40 | 876.76 | 875.56 | 12 | 10521.12 | -14.4 | -0.14% | 0.26R | 8m | market | trailing-stop | breakout | trend | neutral | 77.76 | ↓872.62 | 1.7368 | 1.05 | **LOSS** |
| 29 | LLY | 11-04 15:21 | 11-04 15:22 | 900.47 | 894.09 | 12 | 10805.64 | -76.56 | -0.71% | 1.39R | 1m | market | stop-loss | trend | trend | neutral | 73.7 | ↑891.45 | 0.9059 | 5 | **LOSS** |
| 30 | LLY | 11-05 14:51 | 11-05 15:04 | 934.3 | 927.1 | 11 | 10277.3 | -79.2 | -0.77% | 1.33R | 13m | market | stop-loss | trend | trend | neutral | 74.64 | ↓924.55 | 5.627 | 1.49 | **LOSS** |
| 31 | LLY | 11-10 14:54 | 11-10 15:15 | 977.25 | 979.36 | 11 | 10749.75 | +23.21 | +0.22% | 0.29R | 21m | market | timeout | trend | trend | neutral | 70.11 | ↑961.84 | 8.7817 | 1.84 | **WIN** |
| 32 | LLY | 11-11 14:51 | 11-11 14:59 | 980.87 | 975.33 | 11 | 10789.57 | -60.94 | -0.56% | 1.12R | 8m | market | stop-loss | trend | trend | neutral | 76.38 | ↑973.2 | 2.6182 | 1.52 | **LOSS** |
| 33 | LLY | 11-12 15:00 | 11-12 15:16 | 1014.16 | 1011.93 | 9 | 9127.44 | -20.07 | -0.22% | 0.37R | 16m | market | stagnation | mixed | mean-revert | neutral | 40.82 | ↑1010.65 | 3.2173 | 2.59 | **LOSS** |
| 34 | LLY | 11-21 14:48 | 11-21 15:03 | 1057.08 | 1050.97 | 10 | 10570.8 | -61.1 | -0.58% | 1.16R | 15m | market | stop-loss | trend | trend | neutral | 79.22 | ↓1047.9 | 3.0546 | 1.17 | **LOSS** |
| 35 | LLY | 12-01 14:45 | 12-01 15:01 | 1074.42 | 1070.62 | 6 | 6446.52 | -22.8 | -0.35% | 0.65R | 16m | market | early-reversal | mixed | mean-revert | neutral | 55.86 | ↓1077.44 | 0.845 | 1.75 | **LOSS** |
| 36 | LLY | 12-23 14:40 | 12-23 14:59 | 1088 | 1078.4 | 10 | 10880 | -96 | -0.88% | 1.42R | 19m | market | stop-loss | trend | trend | neutral | 69.91 | ↓1075.46 | 2.0526 | 1.05 | **LOSS** |
| 37 | LLY | 01-07 15:11 | 01-07 15:25 | 1110.29 | 1102.86 | 2 | 2220.58 | -14.86 | -0.67% | 1.02R | 14m | market | stop-loss | mixed | mean-revert | thinChop | 57.18 | ↑1099.55 | 3.748 | 0.86 | **LOSS** |
| 38 | LLY | 01-30 14:45 | 01-30 14:51 | 1029.57 | 1022.98 | 8 | 8236.56 | -52.72 | -0.64% | 0.91R | 6m | market | stop-loss | mixed | mean-revert | neutral | 55.5 | ↓1033.18 | 2.1273 | 1.03 | **LOSS** |
| 39 | LLY | 02-06 14:50 | 02-06 14:59 | 1050.45 | 1043.52 | 2 | 2100.9 | -13.86 | -0.66% | 1.08R | 9m | market | stop-loss | mixed | mean-revert | thinChop | 45.6 | ↓1052.13 | 5.6799 | 0.98 | **LOSS** |
| 40 | LLY | 02-12 15:15 | 02-12 15:36 | 1031.68 | 1039.32 | 10 | 10316.8 | +76.4 | +0.74% | 1.48R | 21m | market | timeout | trend | trend | neutral | 78.61 | ↑1020.75 | 3.0294 | 2.47 | **WIN** |
| 41 | LLY | 02-23 15:13 | 02-23 15:31 | 1043.91 | 1045.1 | 8 | 8351.28 | +9.52 | +0.11% | 0.21R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 49.07 | ↑1044.31 | 1.7795 | 2.99 | **WIN** |
| 42 | LLY | 03-13 14:01 | 03-13 14:06 | 1003.11 | 996.98 | 11 | 11034.21 | -67.43 | -0.61% | 1.22R | 5m | market | stop-loss | trend | trend | neutral | 65.1 | ↑995.68 | 3.3432 | 6.09 | **LOSS** |
| 43 | LLY | 03-16 13:49 | 03-16 14:07 | 992.28 | 988.41 | 9 | 8930.52 | -34.83 | -0.39% | 0.78R | 18m | market | early-reversal | mixed | mean-revert | neutral | 53.3 | ↓993.49 | 2.2209 | 1.35 | **LOSS** |
| 44 | LLY | 03-30 14:02 | 03-30 14:20 | 889.49 | 888.83 | 7 | 6226.43 | -4.62 | -0.07% | 0.14R | 18m | market | stagnation | bearish | mean-revert | neutral | 30.79 | ↓891.69 | 0.961 | 3.53 | **LOSS** |
| 45 | LLY | 04-01 15:28 | 04-01 15:48 | 950.16 | 964.4 | 11 | 10451.76 | +156.64 | +1.5% | 2R | 20m | market | profit-target | trend | trend | neutral | 79.86 | ↑937.13 | 2.955 | 5.2 | **WIN** |

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

- ⚠️ **Profit factor 0.38 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.75R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:13:18.092Z*
