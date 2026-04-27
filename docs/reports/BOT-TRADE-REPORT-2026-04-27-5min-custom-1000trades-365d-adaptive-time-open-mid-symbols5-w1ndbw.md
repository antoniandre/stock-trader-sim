# Bot Trade Report — 49 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T04:47:42.592Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $593.88 (-0.59%) over 49 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 49 |
| Win rate | 26.53% (13W / 36L) |
| Net P&L | $-593.88 (-0.59%) |
| Gross profit | $1427.6 |
| Gross loss | $2021.48 |
| Profit factor | 0.71 |
| Avg win | $109.82 |
| Avg loss | $56.15 |
| Payoff ratio | 1.96:1 |
| Expectancy | $-12.12 / trade |
| Max drawdown | 0.83% |
| Sharpe ratio (ann.) | -2.29 |
| Trades / active day | 1.17 |
| Avg confidence | 99.22% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.59R |
| Starting equity | $100,000 |
| Ending equity | $99,406.12 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 22.22% | $-158.73 | $-17.64 |
| Mid  10:30–11:30 | 40 | 27.5% | $-435.15 | $-10.88 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NOC | 6 | 2 | 33.33% | $+216.6 | $+36.1 | 2.15 | throttle |
| RTX | 7 | 1 | 14.29% | $-140.32 | $-20.05 | 0.39 | throttle |
| PYPL | 17 | 7 | 41.18% | $-146.89 | $-8.64 | 0.82 | throttle |
| LMT | 7 | 2 | 28.57% | $-162.58 | $-23.23 | 0.38 | throttle |
| NEE | 12 | 1 | 8.33% | $-360.69 | $-30.06 | 0.3 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 30 | 6 | 20% | $-721.25 | $-24.04 |
| breakout | 19 | 7 | 36.84% | $+127.37 | $+6.7 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 1 | 0 | 0% | $-16.2 | $-16.2 |
| noisyHighBeta | 2 | 0 | 0% | $-155.3 | $-77.65 |
| neutral | 46 | 13 | 28.26% | $-422.38 | $-9.18 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 8 | 1.85 | $+40.19 | 11 | 0.55 | $-17.65 | 0.35% | 0.38 | watch |
| Symbol | PYPL | 9 | 0.24 | $-57.06 | 8 | 3.51 | $+45.83 | 0.12% | 2.36 | reject |
| Time slot | Open 9:30-10:30 | 9 | 0.47 | $-17.64 | 0 | 0 | $+0 | 0% | 0 | reject |
| Behavior | neutral | 27 | 0.89 | $-4.36 | 19 | 0.63 | $-16.03 | 0.69% | 0.45 | reject |
| Setup | trend | 21 | 0.28 | $-27.03 | 9 | 0.64 | $-17.07 | 0.39% | 0.47 | reject |
| Time slot | Mid 10:30-11:30 | 20 | 0.9 | $-4.37 | 20 | 0.6 | $-17.39 | 0.73% | 0.42 | reject |
| Symbol | NEE | 10 | 0.4 | $-23.85 | 2 | 0 | $-61.11 | 0.12% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-727.17 | 0.66 |
| +3 bps/side | $-993.67 | 0.57 |
| +5 bps/side | $-1260.19 | 0.5 |
| +10 bps/side | $-1926.51 | 0.36 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 20 |
| stagnation | 13 |
| timeout | 11 |
| breakeven-stop | 2 |
| stop-loss | 1 |
| profit-target | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NEE | 05-07 14:15 | 05-07 15:20 | 67.53 | 67.45 | 207 | 13978.71 | -16.56 | -0.12% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 76.81 | ↑67.01 | 0.1843 | 2.17 | **LOSS** |
| 2 | NEE | 05-09 14:20 | 05-09 15:10 | 69.77 | 69.58 | 200 | 13954 | -38 | -0.27% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 72.75 | ↓69.28 | 0.1962 | 1.15 | **LOSS** |
| 3 | RTX | 05-29 14:10 | 05-29 15:55 | 134.08 | 133.94 | 104 | 13944.32 | -14.56 | -0.1% | 0.14R | 105m | market | stagnation | trend | trend | neutral | 66.9 | ↑133.3 | 0.1926 | 1.23 | **LOSS** |
| 4 | RTX | 05-30 14:00 | 05-30 14:55 | 135.75 | 135.67 | 103 | 13982.25 | -8.24 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 75 | ↓135.32 | 0.2199 | 1.93 | **LOSS** |
| 5 | NEE | 05-30 15:20 | 05-30 16:15 | 69.73 | 69.66 | 200 | 13946 | -14 | -0.1% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 75.97 | ↑69.31 | 0.1673 | 1.19 | **LOSS** |
| 6 | NEE | 06-03 14:30 | 06-03 14:55 | 70.96 | 70.56 | 197 | 13979.12 | -78.8 | -0.56% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 72.6 | ↑70.42 | 0.2307 | 1.25 | **LOSS** |
| 7 | NOC | 06-12 14:15 | 06-12 16:10 | 492.23 | 493.64 | 28 | 13782.44 | +39.48 | +0.29% | 0.41R | 115m | market | timeout | trend | trend | neutral | 74.66 | ↑490.52 | 2.0622 | 1.4 | **WIN** |
| 8 | PYPL | 06-18 14:30 | 06-18 15:20 | 71.28 | 70.96 | 196 | 13970.88 | -62.72 | -0.45% | 0.64R | 50m | market | early-reversal | trend | trend | neutral | 63.08 | ↑70.6 | 0.1065 | 1.01 | **LOSS** |
| 9 | LMT | 07-01 15:10 | 07-01 16:20 | 467.72 | 467.18 | 29 | 13563.88 | -15.66 | -0.12% | 0.17R | 70m | market | stagnation | trend | trend | neutral | 73.98 | ↑463.76 | 0.9874 | 1.1 | **LOSS** |
| 10 | NEE | 07-01 15:20 | 07-01 17:05 | 70.46 | 71.25 | 198 | 13951.08 | +156.42 | +1.12% | 0.88R | 105m | market | timeout | breakout | breakout | neutral | 85.49 | ↑68.89 | 0.1136 | 2.13 | **WIN** |
| 11 | NEE | 07-02 14:05 | 07-02 14:25 | 73.72 | 73.25 | 189 | 13933.08 | -88.83 | -0.64% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 72.06 | ↑73.04 | 0.3413 | 1.01 | **LOSS** |
| 12 | PYPL | 07-02 14:05 | 07-02 15:50 | 76.28 | 76.82 | 183 | 13959.24 | +98.82 | +0.71% | 1.01R | 105m | market | timeout | trend | trend | neutral | 70.33 | ↑75.68 | 0.1044 | 1.11 | **WIN** |
| 13 | NEE | 09-12 14:40 | 09-12 15:10 | 72.39 | 72.16 | 193 | 13971.27 | -44.39 | -0.32% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 77.57 | ↑71.98 | 0.3096 | 2.12 | **LOSS** |
| 14 | PYPL | 10-03 14:35 | 10-03 14:50 | 69.11 | 68.51 | 202 | 13960.22 | -121.2 | -0.87% | 0.8R | 15m | market | stop-loss | trend | trend | neutral | 52.45 | ↓68.47 | 0.0547 | 1.22 | **LOSS** |
| 15 | NEE | 10-06 14:15 | 10-06 15:05 | 81.98 | 81.87 | 170 | 13936.6 | -18.7 | -0.13% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 70.85 | ↑81.56 | 0.3482 | 1.01 | **LOSS** |
| 16 | PYPL | 10-06 15:05 | 10-06 16:50 | 71.02 | 71.34 | 196 | 13919.92 | +62.72 | +0.45% | 0.49R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑70.41 | 0.4033 | 1.24 | **WIN** |
| 17 | NOC | 10-22 14:50 | 10-22 15:10 | 604.97 | 603.08 | 23 | 13914.31 | -43.47 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 71.84 | ↑600.87 | 0.9898 | 2.1 | **LOSS** |
| 18 | PYPL | 10-28 14:20 | 10-28 14:40 | 79.01 | 77.75 | 89 | 7031.89 | -112.14 | -1.59% | 0.8R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 71.39 | ↑76.96 | 2.105 | 1.03 | **LOSS** |
| 19 | PYPL | 11-10 14:30 | 11-10 14:50 | 67.18 | 66.62 | 208 | 13973.44 | -116.48 | -0.83% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 68.36 | ↓67.14 | 0.2605 | 1.7 | **LOSS** |
| 20 | NEE | 11-20 15:20 | 11-20 15:40 | 85.88 | 85.45 | 162 | 13912.56 | -69.66 | -0.5% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 68.42 | ↑85.09 | 0.2581 | 1.33 | **LOSS** |
| 21 | PYPL | 11-25 14:40 | 11-25 15:00 | 61.57 | 60.84 | 226 | 13914.82 | -164.98 | -1.19% | 1.2R | 20m | market | early-reversal | breakout | breakout | neutral | 71.63 | ↓61.34 | 0.1448 | 1.35 | **LOSS** |
| 22 | RTX | 12-04 14:35 | 12-04 16:20 | 170.34 | 171.45 | 82 | 13967.88 | +91.02 | +0.65% | 0.93R | 105m | market | timeout | trend | breakout | neutral | 78.48 | ↑170.11 | 0.4504 | 1.15 | **WIN** |
| 23 | PYPL | 12-16 14:30 | 12-16 15:00 | 61.64 | 61.28 | 226 | 13930.64 | -81.36 | -0.58% | 0.83R | 30m | market | early-reversal | breakout | trend | neutral | 66.46 | ↓61.53 | 0.0163 | 1.07 | **LOSS** |
| 24 | LMT | 12-24 14:30 | 12-24 16:15 | 487.67 | 488.22 | 28 | 13654.76 | +15.4 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 76.38 | ↓487.17 | 0.3584 | 1.07 | **WIN** |
| 25 | PYPL | 01-05 14:55 | 01-05 16:10 | 59.26 | 59.2 | 270 | 16000.2 | -16.2 | -0.1% | 0.13R | 75m | market | stagnation | trend | trend | cleanTrend | 74.35 | ↑58.8 | 0.159 | 1.15 | **LOSS** |
| 26 | NOC | 01-06 14:30 | 01-06 15:10 | 613.82 | 613.4 | 22 | 13504.04 | -9.24 | -0.07% | 0.1R | 40m | market | breakeven-stop | trend | trend | neutral | 76.91 | ↓612.49 | 1.4179 | 2.16 | **LOSS** |
| 27 | NOC | 01-09 14:30 | 01-09 16:15 | 600.09 | 617.49 | 21 | 12601.89 | +365.4 | +2.9% | 2.87R | 105m | market | profit-target | breakout | breakout | neutral | 63.96 | ↑598.02 | -0.2281 | 1.26 | **WIN** |
| 28 | NEE | 01-09 14:40 | 01-09 16:15 | 80.48 | 80.33 | 173 | 13923.04 | -25.95 | -0.19% | 0.27R | 95m | market | stagnation | breakout | breakout | neutral | 78.67 | ↓80.32 | 0.2244 | 1.24 | **LOSS** |
| 29 | LMT | 01-13 14:40 | 01-13 16:25 | 556.67 | 560.1 | 25 | 13916.75 | +85.75 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | neutral | 70.38 | ↑555.08 | 1.7667 | 1.3 | **WIN** |
| 30 | LMT | 01-21 14:35 | 01-21 16:00 | 585.13 | 584.82 | 23 | 13457.99 | -7.13 | -0.05% | 0.07R | 85m | market | stagnation | breakout | breakout | neutral | 82.03 | ↑581.39 | 0.6397 | 1.75 | **LOSS** |
| 31 | PYPL | 01-22 14:30 | 01-22 16:15 | 56.77 | 57.41 | 245 | 13908.65 | +156.8 | +1.13% | 1.55R | 105m | market | timeout | trend | breakout | neutral | 68.71 | ↑56.75 | 0.211 | 2.13 | **WIN** |
| 32 | NOC | 01-22 15:25 | 01-22 15:45 | 669.48 | 667.48 | 20 | 13389.6 | -40 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 71.71 | ↑664.32 | 0.839 | 2.31 | **LOSS** |
| 33 | RTX | 01-27 15:20 | 01-27 15:40 | 198.58 | 196.9 | 70 | 13900.6 | -117.6 | -0.85% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 66.69 | ↓197.59 | 0.8633 | 1.18 | **LOSS** |
| 34 | RTX | 01-29 14:30 | 01-29 15:25 | 202.29 | 201.81 | 69 | 13958.01 | -33.12 | -0.24% | 0.32R | 55m | market | stagnation | trend | trend | neutral | 64.86 | ↓202.15 | 0.1642 | 1.01 | **LOSS** |
| 35 | PYPL | 02-02 14:30 | 02-02 16:00 | 53 | 52.91 | 263 | 13939 | -23.67 | -0.17% | 0.24R | 90m | market | stagnation | trend | trend | neutral | 70.67 | ↓52.79 | 0.1068 | 2.22 | **LOSS** |
| 36 | LMT | 02-03 14:35 | 02-03 14:55 | 643.82 | 640.93 | 21 | 13520.22 | -60.69 | -0.45% | 0.62R | 20m | market | early-reversal | trend | breakout | neutral | 69.78 | ↓641.52 | 0.8183 | 1.17 | **LOSS** |
| 37 | NEE | 02-04 14:45 | 02-04 15:05 | 90.41 | 90.02 | 154 | 13923.14 | -60.06 | -0.43% | 0.51R | 20m | market | early-reversal | breakout | breakout | neutral | 77.69 | ↓90.14 | 0.4557 | 1.14 | **LOSS** |
| 38 | LMT | 02-06 15:00 | 02-06 15:20 | 618.93 | 613.61 | 22 | 13616.46 | -117.04 | -0.86% | 1.05R | 20m | market | early-reversal | trend | trend | neutral | 72.64 | ↓617.62 | 1.2905 | 6.48 | **LOSS** |
| 39 | RTX | 02-12 14:30 | 02-12 16:05 | 199.38 | 199.28 | 70 | 13956.6 | -7 | -0.05% | 0.07R | 95m | market | breakeven-stop | trend | breakout | neutral | 65.56 | ↓198.78 | 0.2607 | 1.11 | **LOSS** |
| 40 | PYPL | 02-18 14:40 | 02-18 16:25 | 41.3 | 41.54 | 337 | 13918.1 | +80.88 | +0.58% | 0.7R | 105m | market | timeout | trend | breakout | neutral | 56.17 | ↑40.98 | -0.0265 | 1.35 | **WIN** |
| 41 | LMT | 02-19 14:35 | 02-19 15:00 | 664.56 | 661.55 | 21 | 13955.76 | -63.21 | -0.45% | 0.53R | 25m | market | early-reversal | breakout | breakout | neutral | 77.56 | ↓661.34 | 0.8997 | 1.54 | **LOSS** |
| 42 | NOC | 02-19 14:40 | 02-19 15:00 | 735.08 | 730.05 | 19 | 13966.52 | -95.57 | -0.68% | 0.8R | 20m | market | early-reversal | breakout | breakout | neutral | 72.58 | ↓732.72 | 3.809 | 1.31 | **LOSS** |
| 43 | PYPL | 02-20 14:30 | 02-20 15:30 | 41.97 | 42.1 | 308 | 12926.76 | +40.04 | +0.31% | 0.38R | 60m | market | trailing-stop | trend | trend | neutral | 73.12 | ↓41.84 | 0.1345 | 1.32 | **WIN** |
| 44 | NEE | 02-23 14:45 | 02-23 15:20 | 94.02 | 93.6 | 148 | 13914.96 | -62.16 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | neutral | 82.59 | ↓93.74 | 0.383 | 1.49 | **LOSS** |
| 45 | PYPL | 02-27 14:30 | 02-27 14:50 | 46.26 | 46 | 166 | 7679.16 | -43.16 | -0.56% | 0.58R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.34 | ↓46.1 | 0.3231 | 1.54 | **LOSS** |
| 46 | RTX | 03-02 15:00 | 03-02 15:50 | 210.31 | 209.54 | 66 | 13880.46 | -50.82 | -0.37% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 75.14 | ↓209.72 | 2.5314 | 1.09 | **LOSS** |
| 47 | PYPL | 03-05 14:35 | 03-05 15:00 | 47.58 | 47.31 | 293 | 13940.94 | -79.11 | -0.57% | 0.66R | 25m | market | early-reversal | breakout | breakout | neutral | 73.03 | ↓47.35 | 0.03 | 1.33 | **LOSS** |
| 48 | PYPL | 04-02 14:35 | 04-02 16:20 | 44.94 | 44.95 | 310 | 13931.4 | +3.1 | +0.02% | 0.01R | 105m | market | timeout | breakout | breakout | neutral | 57.85 | ↑44.26 | -0.0376 | 2.06 | **WIN** |
| 49 | PYPL | 04-13 15:10 | 04-13 16:55 | 46.33 | 47.1 | 301 | 13945.33 | +231.77 | +1.66% | 2.08R | 105m | market | timeout | trend | trend | neutral | 64.81 | ↑45.92 | 0.2824 | 1.58 | **WIN** |

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

- ⚠️ **Profit factor 0.71 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.59R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T04:47:42.592Z*
