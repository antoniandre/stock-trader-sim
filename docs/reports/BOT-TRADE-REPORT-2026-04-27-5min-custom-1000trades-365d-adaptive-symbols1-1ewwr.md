# Bot Trade Report — 48 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:56:05.166Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $236.55 (-0.24%) over 48 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 48 |
| Win rate | 41.67% (20W / 28L) |
| Net P&L | $-236.55 (-0.24%) |
| Gross profit | $2074.42 |
| Gross loss | $2310.97 |
| Profit factor | 0.9 |
| Avg win | $103.72 |
| Avg loss | $82.53 |
| Payoff ratio | 1.26:1 |
| Expectancy | $-4.93 / trade |
| Max drawdown | 0.69% |
| Sharpe ratio (ann.) | -0.72 |
| Trades / active day | 1.2 |
| Avg confidence | 100% |
| Avg trade duration | 61 min |
| Avg risk ratio | 0.64R |
| Starting equity | $100,000 |
| Ending equity | $99,763.45 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 25% | $-218.83 | $-27.35 |
| Mid  10:30–11:30 | 17 | 64.71% | $+496.96 | $29.23 |
| Noon 11:30–13:00 | 15 | 40% | $-161.09 | $-10.74 |
| PM   13:00–14:00 | 8 | 12.5% | $-353.59 | $-44.2 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRVL | 48 | 20 | 41.67% | $-236.55 | $-4.93 | 0.9 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 40 | 18 | 45% | $-425.6 | $-10.64 |
| breakout | 8 | 2 | 25% | $+189.05 | $+23.63 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 8 | 4 | 50% | $-46.24 | $-5.78 |
| neutral | 40 | 16 | 40% | $-190.31 | $-4.76 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 12 | 2.45 | $+52.77 | 5 | 0.21 | $-27.25 | 0.17% | 0.13 | watch |
| Time slot | Open 9:30-10:30 | 6 | 0 | $-79.3 | 2 | ∞ | $+128.49 | 0% | 40.35 | reject |
| Setup | trend | 24 | 0.61 | $-17.06 | 16 | 0.97 | $-1.01 | 0.39% | 0.72 | reject |
| Time slot | Noon 11:30-13:00 | 6 | 0.5 | $-23.71 | 9 | 0.97 | $-2.09 | 0.32% | 0.79 | reject |
| Symbol | MRVL | 28 | 0.87 | $-6.59 | 20 | 0.94 | $-2.59 | 0.44% | 0.73 | reject |
| Behavior | neutral | 25 | 0.89 | $-6.05 | 15 | 0.95 | $-2.6 | 0.45% | 0.74 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-350.33 | 0.85 |
| +3 bps/side | $-577.99 | 0.77 |
| +5 bps/side | $-805.63 | 0.7 |
| +10 bps/side | $-1374.78 | 0.55 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 21 |
| timeout | 14 |
| stagnation | 5 |
| trim-profit-target | 4 |
| breakeven-stop | 2 |
| stop-loss | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 04-29 17:45 | 04-29 18:55 | 59.33 | 59.17 | 235 | 13942.55 | -37.6 | -0.27% | 0.39R | 70m | market | stagnation | trend | trend | neutral | 70.89 | ↑58.64 | 0.105 | 1 | **LOSS** |
| 2 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.06 | 60.92 | 229 | 13982.74 | -32.06 | -0.23% | 0.12R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 3 | MRVL | 05-12 17:05 | 05-12 17:25 | 65.12 | 64.79 | 214 | 13935.68 | -70.62 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑64.06 | 0.2549 | 1.05 | **LOSS** |
| 4 | MRVL | 05-13 15:45 | 05-13 16:05 | 66.87 | 66.42 | 209 | 13975.83 | -94.05 | -0.67% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 60.31 | ↑66.15 | 0.4147 | 1.03 | **LOSS** |
| 5 | MRVL | 05-21 15:05 | 05-21 16:50 | 62 | 62.29 | 225 | 13950 | +65.25 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 6 | MRVL | 06-02 17:20 | 06-02 17:40 | 61.77 | 61.58 | 226 | 13960.02 | -42.94 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 74.03 | ↑60.74 | 0.1636 | 1.5 | **LOSS** |
| 7 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.61 | 70.59 | 195 | 13963.95 | -198.9 | -1.42% | 1.25R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 8 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.52 | 78.94 | 177 | 13898.04 | +74.34 | +0.53% | 0.39R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 9 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.22 | 72.82 | 96 | 13938.46 | +57.6 | +0.83% | 0.99R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 10 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.22 | 72.83 | 97 | 13938.46 | +59.17 | +0.84% | 1R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 11 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 95 | 13958.28 | +97.85 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 12 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 96 | 13958.28 | +85.44 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 13 | MRVL | 07-18 17:30 | 07-18 17:50 | 74.63 | 74.37 | 187 | 13955.81 | -48.62 | -0.35% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 53.64 | ↑73.47 | 0.2617 | 2.12 | **LOSS** |
| 14 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.59 | 78.07 | 177 | 13910.43 | -92.04 | -0.66% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 15 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.14 | 76.74 | 181 | 13962.34 | -72.4 | -0.52% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 16 | MRVL | 08-13 14:10 | 08-13 14:30 | 79.93 | 79.46 | 174 | 13907.82 | -81.78 | -0.59% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.08 | ↑79.26 | 0.4703 | 2.17 | **LOSS** |
| 17 | MRVL | 08-26 16:10 | 08-26 17:45 | 74.67 | 74.52 | 186 | 13888.62 | -27.9 | -0.2% | 0.29R | 95m | market | stagnation | trend | trend | neutral | 74.29 | ↑73.79 | 0.2107 | 1.36 | **LOSS** |
| 18 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.82 | 64.93 | 215 | 13936.3 | +23.65 | +0.17% | 0.12R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 19 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.11 | 82.38 | 176 | 13923.36 | +575.52 | +4.13% | 3.3R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 20 | MRVL | 09-25 16:15 | 09-25 17:20 | 83.66 | 82.67 | 167 | 13971.22 | -165.33 | -1.18% | 0.59R | 65m | market | early-reversal | breakout | breakout | neutral | 91.37 | ↑79.52 | 1.391 | 1.19 | **LOSS** |
| 21 | MRVL | 10-08 15:40 | 10-08 16:35 | 90.66 | 91.51 | 77 | 13961.64 | +65.45 | +0.94% | 1.13R | 55m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑89.61 | 0.6334 | 1.54 | **WIN** |
| 22 | MRVL | 10-08 15:40 | 10-08 17:25 | 90.66 | 91.49 | 77 | 13961.64 | +63.91 | +0.92% | 1.11R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑89.61 | 0.6334 | 1.54 | **WIN** |
| 23 | MRVL | 10-14 16:30 | 10-14 18:15 | 88.25 | 88.43 | 87 | 7677.75 | +15.66 | +0.2% | 0.28R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.12 | ↑86.98 | 0.3405 | 1.12 | **WIN** |
| 24 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.86 | 87.94 | 86 | 7641.96 | -79.12 | -1.04% | 0.55R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 25 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.79 | 84.72 | 165 | 13990.35 | -11.55 | -0.08% | 0.06R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 26 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.94 | 92.8 | 149 | 13997.06 | -169.86 | -1.21% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 27 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.27 | 87.17 | 158 | 13946.66 | -173.8 | -1.25% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 28 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.93 | 81.57 | 47 | 7607.42 | +30.08 | +0.79% | 0.4R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 29 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.93 | 81.59 | 47 | 7607.42 | +31.02 | +0.82% | 0.41R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 30 | MRVL | 12-08 17:45 | 12-08 18:10 | 92.07 | 91.23 | 83 | 7641.81 | -69.72 | -0.91% | 0.49R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 68.87 | ↑90.59 | 0.4884 | 3.03 | **LOSS** |
| 31 | MRVL | 12-23 15:55 | 12-23 17:40 | 86.63 | 87.94 | 161 | 13947.43 | +210.91 | +1.51% | 1.51R | 105m | market | timeout | trend | trend | neutral | 59.68 | ↑85.73 | 0.3898 | 1.16 | **WIN** |
| 32 | MRVL | 01-02 14:55 | 01-02 15:20 | 89.03 | 88.27 | 157 | 13977.71 | -119.32 | -0.85% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 79.84 | ↓88.42 | 0.7955 | 1.32 | **LOSS** |
| 33 | MRVL | 01-02 16:30 | 01-02 16:50 | 90.05 | 89.29 | 155 | 13957.75 | -117.8 | -0.84% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 69.28 | ↑88.81 | 0.8599 | 1.08 | **LOSS** |
| 34 | MRVL | 01-09 16:05 | 01-09 16:25 | 83.97 | 83.54 | 166 | 13939.02 | -71.38 | -0.51% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 66.72 | ↑83.39 | 0.1638 | 1.63 | **LOSS** |
| 35 | MRVL | 01-20 15:30 | 01-20 16:05 | 83.12 | 82.31 | 167 | 13881.04 | -135.27 | -0.97% | 0.5R | 35m | market | early-reversal | breakout | breakout | neutral | 75.92 | ↑80.85 | 0.4238 | 1.41 | **LOSS** |
| 36 | MRVL | 02-06 16:20 | 02-06 18:05 | 79.51 | 80.19 | 96 | 7632.96 | +65.28 | +0.86% | 0.61R | 105m | market | timeout | trend | trend | noisyHighBeta | 70.77 | ↑78.25 | 1.0852 | 1.37 | **WIN** |
| 37 | MRVL | 02-17 15:50 | 02-17 17:35 | 78.04 | 79.51 | 178 | 13891.12 | +261.66 | +1.88% | 1.3R | 105m | market | timeout | breakout | breakout | neutral | 51.51 | ↑77.49 | -0.3418 | 1.25 | **WIN** |
| 38 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 174 | 13926.96 | -38.28 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 39 | MRVL | 02-24 17:05 | 02-24 17:35 | 79.63 | 79.31 | 175 | 13935.25 | -56 | -0.4% | 0.57R | 30m | market | early-reversal | trend | trend | neutral | 65.81 | ↑78.65 | 0.2417 | 1.74 | **LOSS** |
| 40 | MRVL | 02-25 14:30 | 02-25 15:35 | 79.35 | 79.38 | 176 | 13965.6 | +5.28 | +0.04% | 0.06R | 65m | market | breakeven-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **WIN** |
| 41 | MRVL | 03-02 17:15 | 03-02 18:10 | 82.22 | 81.88 | 169 | 13895.18 | -57.46 | -0.41% | 0.42R | 55m | market | early-reversal | trend | trend | neutral | 69.19 | ↑80.83 | 0.2845 | 1.29 | **LOSS** |
| 42 | MRVL | 03-03 16:15 | 03-03 17:05 | 78.58 | 77.88 | 177 | 13908.66 | -123.9 | -0.89% | 0.59R | 50m | market | early-reversal | breakout | breakout | neutral | 52.22 | ↓77.68 | -0.6865 | 1.4 | **LOSS** |
| 43 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.12 | 91.94 | 83 | 7645.96 | -14.94 | -0.2% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 44 | MRVL | 04-07 16:40 | 04-07 17:15 | 109.23 | 108.88 | 70 | 7646.1 | -24.5 | -0.32% | 0.37R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.54 | ↑107.46 | 0.4262 | 3.63 | **LOSS** |
| 45 | MRVL | 04-17 14:05 | 04-17 15:50 | 136.27 | 138.71 | 102 | 13899.54 | +248.88 | +1.79% | 1.01R | 105m | market | timeout | trend | trend | neutral | 64.97 | ↑134.55 | 0.362 | 1.89 | **WIN** |
| 46 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.67 | 154.76 | 90 | 13920.3 | +8.1 | +0.06% | 0.03R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |
| 47 | MRVL | 04-22 17:20 | 04-22 19:05 | 156.61 | 156.94 | 89 | 13938.29 | +29.37 | +0.21% | 0.3R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑154.63 | 0.295 | 1.9 | **WIN** |
| 48 | MRVL | 04-23 16:30 | 04-23 17:00 | 167.31 | 166.3 | 83 | 13886.73 | -83.83 | -0.6% | 0.57R | 30m | market | early-reversal | trend | trend | neutral | 63.35 | ↑164.22 | 1.0951 | 1.42 | **LOSS** |

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
- ⚠️ **Avg R = 0.64R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:56:05.166Z*
