# Bot Trade Report — 32 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:14:46.346Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $192.03 (-0.19%) over 32 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 32 |
| Win rate | 46.88% (15W / 17L) |
| Net P&L | $-192.03 (-0.19%) |
| Gross profit | $376.21 |
| Gross loss | $568.24 |
| Profit factor | 0.66 |
| Avg win | $25.08 |
| Avg loss | $33.43 |
| Payoff ratio | 0.75:1 |
| Expectancy | $-6 / trade |
| Max drawdown | 0.28% |
| Sharpe ratio (ann.) | -2.51 |
| Trades / active day | 1.14 |
| Avg confidence | 85.94% |
| Avg trade duration | 16 min |
| Avg risk ratio | 0.77R |
| Starting equity | $100,000 |
| Ending equity | $99,807.97 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 18.18% | $-280.52 | $-25.5 |
| Mid  10:30–11:30 | 21 | 61.9% | $+88.49 | $4.21 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GS | 32 | 15 | 46.88% | $-192.03 | $-6 | 0.66 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mean-revert | 22 | 10 | 45.45% | $-88.36 | $-4.02 |
| trend | 10 | 5 | 50% | $-103.67 | $-10.37 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| thinChop | 6 | 2 | 33.33% | $-16.92 | $-2.82 |
| neutral | 26 | 13 | 50% | $-175.11 | $-6.74 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 15 | 1.31 | $+4.89 | 6 | 1.48 | $+2.53 | 0.03% | 0.57 | watch |
| Setup | mean-revert | 10 | 1.47 | $+5.1 | 12 | 0.31 | $-11.61 | 0.15% | 0.11 | watch |
| Symbol | GS | 19 | 1.03 | $+0.46 | 13 | 0.23 | $-15.45 | 0.22% | 0.09 | reject |
| Behavior | neutral | 16 | 1.05 | $+0.96 | 10 | 0.17 | $-19.05 | 0.22% | 0.03 | reject |
| Setup | trend | 9 | 0.79 | $-4.69 | 1 | 0 | $-61.49 | 0.06% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-238.38 | 0.6 |
| +3 bps/side | $-331.07 | 0.49 |
| +5 bps/side | $-423.77 | 0.39 |
| +10 bps/side | $-655.54 | 0.23 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 7 |
| early-reversal | 7 |
| stop-loss | 7 |
| trailing-stop | 5 |
| stagnation | 3 |
| trim-profit-target | 2 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GS | 05-08 14:17 | 05-08 14:44 | 560.04 | 561.56 | 4 | 2240.16 | +6.08 | +0.27% | 0.54R | 27m | market | timeout | mixed | mean-revert | thinChop | 48.61 | ↑561.07 | 1.7672 | 0.86 | **WIN** |
| 2 | GS | 05-12 14:00 | 05-12 14:17 | 597.2 | 595.39 | 4 | 2388.8 | -7.24 | -0.3% | 0.6R | 17m | market | early-reversal | mixed | mean-revert | thinChop | 33.33 | ↓598.92 | 4.9614 | 3.68 | **LOSS** |
| 3 | GS | 05-14 15:04 | 05-14 15:27 | 606.55 | 607.95 | 10 | 6065.5 | +14 | +0.23% | 0.46R | 23m | market | timeout | bearish | mean-revert | neutral | 48.22 | ↑607.79 | 0.457 | 1.61 | **WIN** |
| 4 | GS | 07-24 14:49 | 07-24 15:14 | 723.79 | 724.85 | 15 | 10856.85 | +15.9 | +0.15% | 0.3R | 25m | market | timeout | trend | trend | neutral | 71.88 | ↑718.98 | 0.8402 | 1.45 | **WIN** |
| 5 | GS | 08-22 14:41 | 08-22 15:11 | 736.71 | 740.48 | 15 | 11050.65 | +56.55 | +0.51% | 0.66R | 30m | market | timeout | trend | trend | neutral | 76.93 | ↑728.5 | 4.8463 | 1.02 | **WIN** |
| 6 | GS | 09-09 14:45 | 09-09 14:52 | 760.36 | 754.36 | 14 | 10645.04 | -84 | -0.79% | 0.99R | 7m | market | stop-loss | trend | trend | neutral | 76.92 | ↑750.37 | 4.0228 | 3.6 | **LOSS** |
| 7 | GS | 09-11 14:58 | 09-11 15:14 | 788.32 | 785.57 | 12 | 9459.84 | -33 | -0.35% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 56.15 | ↑782.39 | 3.3652 | 2.66 | **LOSS** |
| 8 | GS | 09-18 14:55 | 09-18 15:28 | 801.54 | 799.74 | 3 | 2404.62 | -5.4 | -0.22% | 0.44R | 33m | market | stagnation | mixed | mean-revert | thinChop | 54.05 | ↑799.26 | 2.1625 | 0.98 | **LOSS** |
| 9 | GS | 10-07 13:50 | 10-07 14:12 | 796.49 | 795.6 | 7 | 5575.43 | -6.23 | -0.11% | 0.22R | 22m | market | stagnation | mixed | mean-revert | neutral | 49.15 | ↓800.98 | 0.8484 | 1.44 | **LOSS** |
| 10 | GS | 10-16 13:41 | 10-16 13:51 | 773.3 | 767.59 | 10 | 7733 | -57.1 | -0.74% | 1.32R | 10m | market | stop-loss | mixed | mean-revert | neutral | 63.68 | ↓773.92 | 2.5824 | 0.96 | **LOSS** |
| 11 | GS | 10-30 14:39 | 10-30 14:56 | 804.43 | 801.16 | 13 | 10457.59 | -42.51 | -0.41% | 0.82R | 17m | market | early-reversal | trend | trend | neutral | 78.92 | ↑797.12 | 4.016 | 1.31 | **LOSS** |
| 12 | GS | 12-09 14:41 | 12-09 14:57 | 867.36 | 872.42 | 4 | 7806.24 | +20.24 | +0.58% | 1.16R | 16m | market | trim-profit-target | mixed | mean-revert | neutral | 49.3 | ↑868.78 | 0.6878 | 1.07 | **WIN** |
| 13 | GS | 12-09 14:41 | 12-09 15:04 | 867.36 | 874.95 | 5 | 7806.24 | +37.95 | +0.88% | 1.76R | 23m | market | timeout | mixed | mean-revert | neutral | 49.3 | ↑868.78 | 0.6878 | 1.07 | **WIN** |
| 14 | GS | 12-17 15:01 | 12-17 15:10 | 895.47 | 890.2 | 12 | 10745.64 | -63.24 | -0.59% | 1.18R | 9m | market | stop-loss | trend | trend | neutral | 56.9 | ↑889.53 | 2.2212 | 1.17 | **LOSS** |
| 15 | GS | 01-05 14:57 | 01-05 15:18 | 951.7 | 955.29 | 11 | 10468.7 | +39.49 | +0.38% | 0.68R | 21m | market | timeout | trend | trend | neutral | 75.63 | ↑939.32 | 5.4122 | 2.21 | **WIN** |
| 16 | GS | 01-15 14:42 | 01-15 15:03 | 946.34 | 954.51 | 10 | 9463.4 | +81.7 | +0.86% | 0.53R | 21m | market | timeout | mixed | mean-revert | neutral | 61.84 | ↑941.57 | 4.4647 | 0.9 | **WIN** |
| 17 | GS | 01-15 15:09 | 01-15 15:24 | 957.97 | 962.43 | 5 | 10537.67 | +22.3 | +0.47% | 0.9R | 15m | market | trim-profit-target | trend | trend | neutral | 79.53 | ↑945.68 | 3.2326 | 3.57 | **WIN** |
| 18 | GS | 01-15 15:09 | 01-15 15:26 | 957.97 | 961.42 | 6 | 10537.67 | +20.7 | +0.36% | 0.69R | 17m | market | trailing-stop | trend | trend | neutral | 79.53 | ↑945.68 | 3.2326 | 3.57 | **WIN** |
| 19 | GS | 02-10 14:50 | 02-10 15:07 | 958.59 | 957.92 | 11 | 10544.49 | -7.37 | -0.07% | 0.14R | 17m | market | stagnation | trend | trend | neutral | 62.33 | ↑954.15 | 2.7259 | 3.47 | **LOSS** |
| 20 | GS | 02-11 14:50 | 02-11 14:57 | 960.29 | 953.52 | 2 | 1920.58 | -13.54 | -0.7% | 1.37R | 7m | market | stop-loss | mixed | mean-revert | thinChop | 39.97 | ↓962.57 | 2.6482 | 0.97 | **LOSS** |
| 21 | GS | 02-12 15:10 | 02-12 15:20 | 960.63 | 954.61 | 3 | 2881.89 | -18.06 | -0.63% | 1.17R | 10m | market | stop-loss | mixed | mean-revert | thinChop | 44.08 | ↓963.45 | 1.5306 | 1.05 | **LOSS** |
| 22 | GS | 02-13 15:17 | 02-13 15:36 | 888.17 | 898.79 | 2 | 1776.34 | +21.24 | +1.2% | 2.03R | 19m | market | profit-target | mixed | mean-revert | thinChop | 49.27 | ↑884.07 | 1.2058 | 1.53 | **WIN** |
| 23 | GS | 02-20 15:06 | 02-20 15:13 | 909.63 | 910.04 | 10 | 9096.3 | +4.1 | +0.05% | 0.08R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 60.55 | ↑908.31 | 1.3733 | 1.69 | **WIN** |
| 24 | GS | 03-02 15:09 | 03-02 15:22 | 860.81 | 862.08 | 11 | 9468.91 | +13.97 | +0.15% | 0.3R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 49.56 | ↑853.74 | 1.3003 | 1.46 | **WIN** |
| 25 | GS | 03-17 14:04 | 03-17 14:20 | 812.33 | 809.17 | 11 | 8935.63 | -34.76 | -0.39% | 0.78R | 16m | market | early-reversal | mixed | mean-revert | neutral | 46.17 | ↓813.92 | 1.4456 | 0.94 | **LOSS** |
| 26 | GS | 03-18 14:10 | 03-18 14:26 | 810.38 | 806.24 | 10 | 8103.8 | -41.4 | -0.51% | 1.02R | 16m | market | early-reversal | mixed | mean-revert | neutral | 48.11 | ↓809.88 | 1.0425 | 1.33 | **LOSS** |
| 27 | GS | 03-20 13:51 | 03-20 14:00 | 812.94 | 814.15 | 12 | 9755.28 | +14.52 | +0.15% | 0.27R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 52.45 | ↑813.13 | 1.0076 | 0.99 | **WIN** |
| 28 | GS | 03-20 14:11 | 03-20 14:18 | 814.61 | 809.83 | 12 | 9775.32 | -57.36 | -0.59% | 1.16R | 7m | market | stop-loss | mixed | mean-revert | neutral | 51.6 | ↓814.36 | 1.1261 | 1.32 | **LOSS** |
| 29 | GS | 03-23 14:02 | 03-23 14:05 | 842.06 | 837.33 | 13 | 10946.78 | -61.49 | -0.56% | 1.12R | 3m | market | stop-loss | trend | trend | neutral | 62.87 | ↑835.14 | 4.4667 | 1.07 | **LOSS** |
| 30 | GS | 03-30 13:49 | 03-30 14:06 | 806.91 | 805.03 | 9 | 7262.19 | -16.92 | -0.23% | 0.46R | 17m | market | early-reversal | bearish | mean-revert | neutral | 26.95 | ↓809.48 | 0.8468 | 4.7 | **LOSS** |
| 31 | GS | 03-31 14:07 | 03-31 14:23 | 822.16 | 819.5 | 7 | 5755.12 | -18.62 | -0.32% | 0.64R | 16m | market | early-reversal | bearish | mean-revert | neutral | 47.22 | ↓819.94 | 2.4175 | 1.23 | **LOSS** |
| 32 | GS | 04-02 14:50 | 04-02 15:02 | 858.09 | 858.92 | 9 | 7722.81 | +7.47 | +0.1% | 0.15R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 61.24 | ↑846.25 | 2.8492 | 0.91 | **WIN** |

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

- ⚠️ **Profit factor 0.66 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.77R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:14:46.346Z*
