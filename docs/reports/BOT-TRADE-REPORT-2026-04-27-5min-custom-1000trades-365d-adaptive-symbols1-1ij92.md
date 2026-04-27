# Bot Trade Report — 35 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:14:50.098Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $43.64 (+0.04%) over 35 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 35 |
| Win rate | 34.29% (12W / 23L) |
| Net P&L | $+43.64 (+0.04%) |
| Gross profit | $1944.54 |
| Gross loss | $1900.9 |
| Profit factor | 1.02 |
| Avg win | $162.04 |
| Avg loss | $82.65 |
| Payoff ratio | 1.96:1 |
| Expectancy | $+1.25 / trade |
| Max drawdown | 0.64% |
| Sharpe ratio (ann.) | 0.14 |
| Trades / active day | 1.06 |
| Avg confidence | 99.26% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.84R |
| Starting equity | $100,000 |
| Ending equity | $100,043.64 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 11.11% | $-605.55 | $-67.28 |
| Mid  10:30–11:30 | 10 | 50% | $+342.18 | $34.22 |
| Noon 11:30–13:00 | 6 | 33.33% | $-219.48 | $-36.58 |
| PM   13:00–14:00 | 10 | 40% | $+526.49 | $52.65 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 35 | 12 | 34.29% | $+43.64 | $+1.25 | 1.02 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 23 | 7 | 30.43% | $+101.66 | $+4.42 |
| breakout | 12 | 5 | 41.67% | $-58.02 | $-4.84 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 33 | 12 | 36.36% | $+114.93 | $+3.48 |
| noisyHighBeta | 2 | 0 | 0% | $-71.29 | $-35.64 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | PM 13:00-14:00 | 7 | 2.3 | $+31.88 | 3 | 4.22 | $+101.11 | 0.09% | 3.31 | promote |
| Setup | trend | 16 | 1.13 | $+5.39 | 7 | 1.04 | $+2.21 | 0.33% | 0.83 | reject |
| Behavior | neutral | 20 | 1.14 | $+5.99 | 13 | 1 | $-0.38 | 0.6% | 0.84 | reject |
| Symbol | SHOP | 21 | 1.1 | $+4.08 | 14 | 0.96 | $-3.01 | 0.64% | 0.8 | reject |
| Setup | breakout | 5 | 1 | $-0.09 | 7 | 0.91 | $-8.22 | 0.51% | 0.78 | reject |
| Time slot | Open 9:30-10:30 | 7 | 0.1 | $-54.77 | 2 | 0 | $-111.07 | 0.22% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-50.98 | 0.97 |
| +3 bps/side | $-240.25 | 0.88 |
| +5 bps/side | $-429.48 | 0.81 |
| +10 bps/side | $-902.66 | 0.64 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 14 |
| timeout | 7 |
| stagnation | 4 |
| breakeven-stop | 3 |
| stop-loss | 3 |
| trailing-stop | 2 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SHOP | 05-13 14:15 | 05-13 15:05 | 108.31 | 107.83 | 71 | 7690.01 | -34.08 | -0.44% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.98 | ↑107.45 | 0.7682 | 1.11 | **LOSS** |
| 2 | SHOP | 05-28 17:15 | 05-28 18:20 | 107.69 | 107.63 | 129 | 13892.01 | -7.74 | -0.06% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 71.77 | ↑106.48 | 0.2939 | 4.58 | **LOSS** |
| 3 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 132 | 13959 | -60.72 | -0.43% | 0.36R | 20m | market | early-reversal | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 4 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.73 | 110.91 | 126 | 13951.98 | +22.68 | +0.16% | 0.2R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 5 | SHOP | 06-11 16:45 | 06-11 18:00 | 116.01 | 115.07 | 120 | 13921.2 | -112.8 | -0.81% | 0.91R | 75m | market | breakeven-stop | trend | trend | neutral | 67.55 | ↓114.59 | 0.1966 | 1 | **LOSS** |
| 6 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.52 | 107.99 | 128 | 13890.56 | -67.84 | -0.49% | 0.35R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 7 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.44 | 117.74 | 120 | 13852.8 | +276 | +1.99% | 2.84R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 8 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.92 | 116.26 | 120 | 13910.4 | +40.8 | +0.29% | 0.2R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 9 | SHOP | 07-16 16:30 | 07-16 18:00 | 118.45 | 118.5 | 118 | 13977.1 | +5.9 | +0.04% | 0.03R | 90m | market | breakeven-stop | trend | trend | neutral | 64.3 | ↑116.4 | 0.6897 | 2.13 | **WIN** |
| 10 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.08 | 124.98 | 113 | 13908.04 | +214.7 | +1.54% | 1.35R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 11 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.88 | 127.5 | 108 | 13919.04 | -149.04 | -1.07% | 1.49R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 12 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.58 | 124.4 | 112 | 13952.96 | -20.16 | -0.14% | 0.19R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 13 | SHOP | 08-05 17:35 | 08-05 18:25 | 125.97 | 125.77 | 111 | 13982.67 | -22.2 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 67.32 | ↑124.73 | 0.3198 | 1.17 | **LOSS** |
| 14 | SHOP | 08-12 17:35 | 08-12 18:05 | 150.52 | 149.57 | 93 | 13998.36 | -88.35 | -0.63% | 0.9R | 30m | market | early-reversal | trend | trend | neutral | 76.03 | ↑148.42 | 0.2723 | 3.05 | **LOSS** |
| 15 | SHOP | 09-04 17:15 | 09-04 19:00 | 144.49 | 144.95 | 96 | 13871.04 | +44.16 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 74.54 | ↑142.36 | 0.6504 | 1.08 | **WIN** |
| 16 | SHOP | 09-18 14:05 | 09-18 14:30 | 151.24 | 150.27 | 92 | 13914.08 | -89.24 | -0.64% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 79.96 | ↑149.88 | 0.8373 | 1.12 | **LOSS** |
| 17 | SHOP | 09-29 17:00 | 09-29 17:10 | 143.95 | 145.77 | 97 | 13963.15 | +176.54 | +1.26% | 1.64R | 10m | market | trailing-stop | breakout | breakout | neutral | 76.28 | ↑142.05 | 0.3214 | 6.59 | **WIN** |
| 18 | SHOP | 09-29 17:20 | 09-29 19:05 | 146.64 | 148.47 | 95 | 13930.8 | +173.85 | +1.25% | 0.74R | 105m | market | timeout | breakout | trend | neutral | 72.35 | ↑144.19 | 1.2025 | 1.03 | **WIN** |
| 19 | SHOP | 10-03 16:25 | 10-03 16:45 | 162.37 | 161.21 | 86 | 13963.82 | -99.76 | -0.71% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑159.39 | 0.8545 | 1.55 | **LOSS** |
| 20 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.57 | 165.81 | 84 | 13991.88 | -63.84 | -0.46% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 21 | SHOP | 10-14 17:35 | 10-14 18:25 | 154.22 | 153.63 | 90 | 13879.8 | -53.1 | -0.38% | 0.54R | 50m | market | early-reversal | trend | trend | neutral | 78.71 | ↑149.66 | 0.7852 | 1.52 | **LOSS** |
| 22 | SHOP | 10-15 14:05 | 10-15 14:40 | 158.49 | 156.93 | 88 | 13947.12 | -137.28 | -0.98% | 0.58R | 35m | market | early-reversal | breakout | breakout | neutral | 69.5 | ↑156.14 | 0.821 | 1.16 | **LOSS** |
| 23 | SHOP | 10-29 15:20 | 10-29 16:15 | 181.59 | 181.38 | 77 | 13982.43 | -16.17 | -0.12% | 0.17R | 55m | market | stagnation | trend | trend | neutral | 66.46 | ↑179.69 | 0.4205 | 1.41 | **LOSS** |
| 24 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.35 | 144.81 | 97 | 13904.95 | +141.62 | +1.02% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 25 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.41 | 158.14 | 83 | 12816.03 | +309.59 | +2.42% | 2.1R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 26 | SHOP | 12-04 16:50 | 12-04 17:20 | 161.82 | 160.65 | 86 | 13916.52 | -100.62 | -0.72% | 1.03R | 30m | market | early-reversal | trend | trend | neutral | 72.13 | ↑159.24 | 0.3597 | 2.78 | **LOSS** |
| 27 | SHOP | 12-10 16:25 | 12-10 18:10 | 162.45 | 164.09 | 86 | 13970.7 | +141.04 | +1.01% | 1.38R | 105m | market | timeout | breakout | breakout | neutral | 60.78 | ↑160.13 | 0.2446 | 1.28 | **WIN** |
| 28 | SHOP | 12-17 15:10 | 12-17 15:50 | 168.49 | 167.07 | 83 | 13984.67 | -117.86 | -0.84% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 76.11 | ↓167.77 | 1.7597 | 1.13 | **LOSS** |
| 29 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.08 | 160.87 | 86 | 14024.88 | -190.06 | -1.36% | 1.94R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 30 | SHOP | 01-08 17:35 | 01-08 17:55 | 166.68 | 166 | 84 | 14001.12 | -57.12 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 72.74 | ↑164.96 | 0.4706 | 1.6 | **LOSS** |
| 31 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.16 | 140.52 | 90 | 12884.4 | -237.6 | -1.84% | 1.28R | 20m | market | stop-loss | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 32 | SHOP | 02-18 17:30 | 02-18 18:10 | 124.31 | 123.7 | 61 | 7582.91 | -37.21 | -0.49% | 0.58R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 78.03 | ↑120.66 | 1.2281 | 1.36 | **LOSS** |
| 33 | SHOP | 03-03 17:20 | 03-03 18:40 | 118.07 | 121.44 | 118 | 13932.26 | +397.66 | +2.85% | 2.52R | 80m | market | profit-target | trend | trend | neutral | 76.52 | ↑115.19 | 0.9466 | 1.37 | **WIN** |
| 34 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.19 | 112.5 | 123 | 13922.37 | -84.87 | -0.61% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 35 | SHOP | 04-13 16:15 | 04-13 16:45 | 115.11 | 114.67 | 121 | 13928.31 | -53.24 | -0.38% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 65.2 | ↑113.92 | 0.3511 | 2.68 | **LOSS** |

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

- ⚠️ **Profit factor 1.02 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.84R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:14:50.098Z*
