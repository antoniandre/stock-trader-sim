# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:19:37.019Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $139.67 (-0.14%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 30.77% (4W / 9L) |
| Net P&L | $-139.67 (-0.14%) |
| Gross profit | $810.1 |
| Gross loss | $949.77 |
| Profit factor | 0.85 |
| Avg win | $202.53 |
| Avg loss | $105.53 |
| Payoff ratio | 1.92:1 |
| Expectancy | $-10.74 / trade |
| Max drawdown | 0.43% |
| Sharpe ratio (ann.) | -1.01 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 52 min |
| Avg risk ratio | 1.09R |
| Starting equity | $100,000 |
| Ending equity | $99,860.33 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 40% | $-88.4 | $-17.68 |
| Mid  10:30–11:30 | 8 | 25% | $-51.27 | $-6.41 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NOW | 13 | 4 | 30.77% | $-139.67 | $-10.74 | 0.85 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 9 | 4 | 44.44% | $+423.35 | $+47.04 |
| breakout | 4 | 0 | 0% | $-563.02 | $-140.75 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 0 | 0% | $-54.02 | $-54.02 |
| neutral | 12 | 4 | 33.33% | $-85.65 | $-7.14 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 6 | 0.57 | $-23.85 | 3 | 11.49 | $+188.81 | 0.05% | 9.62 | reject |
| Behavior | neutral | 7 | 0.47 | $-30.84 | 5 | 1.27 | $+26.05 | 0.38% | 1.12 | reject |
| Symbol | NOW | 7 | 0.47 | $-30.84 | 6 | 1.14 | $+12.7 | 0.43% | 1 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-173.99 | 0.82 |
| +3 bps/side | $-242.64 | 0.76 |
| +5 bps/side | $-311.29 | 0.71 |
| +10 bps/side | $-482.93 | 0.59 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| timeout | 3 |
| stagnation | 2 |
| profit-target | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NOW | 07-28 14:00 | 07-28 14:20 | 995.28 | 985.23 | 14 | 13933.92 | -140.7 | -1.01% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 76.16 | ↓989.16 | 5.3555 | 1.28 | **LOSS** |
| 2 | NOW | 08-20 15:15 | 08-20 15:50 | 894.42 | 890.18 | 15 | 13416.3 | -63.6 | -0.47% | 0.67R | 35m | market | early-reversal | trend | trend | neutral | 69.48 | ↓886.78 | 1.3916 | 1.25 | **LOSS** |
| 3 | NOW | 09-05 15:20 | 09-05 15:55 | 915.01 | 911.76 | 15 | 13725.15 | -48.75 | -0.36% | 0.51R | 35m | market | early-reversal | trend | trend | neutral | 75.28 | ↑906.85 | 2.6273 | 1.17 | **LOSS** |
| 4 | NOW | 09-15 14:35 | 09-15 16:25 | 941.56 | 951.57 | 14 | 13181.84 | +140.14 | +1.06% | 1.51R | 110m | market | timeout | trend | trend | neutral | 70.81 | ↑935.67 | 1.4682 | 3.24 | **WIN** |
| 5 | NOW | 10-13 14:00 | 10-13 16:00 | 910.78 | 914.08 | 15 | 13661.7 | +49.5 | +0.36% | 0.48R | 120m | market | timeout | trend | trend | neutral | 75.84 | ↑905.27 | 2.5542 | 1.21 | **WIN** |
| 6 | NOW | 10-30 14:00 | 10-30 14:50 | 948.96 | 943.76 | 14 | 13285.44 | -72.8 | -0.55% | 0.28R | 50m | market | stagnation | breakout | breakout | neutral | 75.07 | ↑927.98 | 4.2503 | 1.69 | **LOSS** |
| 7 | NOW | 11-10 15:25 | 11-10 15:45 | 866.09 | 861.11 | 16 | 13857.44 | -79.68 | -0.57% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓861.35 | 1.8126 | 1.15 | **LOSS** |
| 8 | NOW | 12-08 14:30 | 12-08 14:50 | 864.99 | 858.12 | 16 | 13839.84 | -109.92 | -0.79% | 1.13R | 20m | market | early-reversal | breakout | breakout | neutral | 77.2 | ↓862.5 | 0.8471 | 1.94 | **LOSS** |
| 9 | NOW | 12-17 14:30 | 12-17 15:40 | 787.89 | 807.87 | 17 | 13394.13 | +339.66 | +2.54% | 3.63R | 70m | market | profit-target | trend | trend | neutral | 77.22 | ↑786.46 | 2.1159 | 1.76 | **WIN** |
| 10 | NOW | 01-15 14:30 | 01-15 14:45 | 135.65 | 133.95 | 103 | 13971.95 | -175.1 | -1.25% | 1.51R | 15m | market | stop-loss | breakout | breakout | neutral | 84.4 | ↓135.59 | 0.3156 | 2 | **LOSS** |
| 11 | NOW | 02-12 14:35 | 02-12 15:25 | 103.3 | 102.57 | 74 | 7644.2 | -54.02 | -0.71% | 0.59R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 68.31 | ↓102.9 | 0.2383 | 3 | **LOSS** |
| 12 | NOW | 03-13 14:25 | 03-13 14:45 | 115.5 | 113.79 | 120 | 13860 | -205.2 | -1.48% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 76.08 | ↓113.96 | 0.3458 | 1.91 | **LOSS** |
| 13 | NOW | 03-30 14:20 | 03-30 16:05 | 103.2 | 105.28 | 135 | 13932 | +280.8 | +2.02% | 1.02R | 105m | market | timeout | trend | trend | neutral | 75.15 | ↑102.03 | 0.75 | 1.04 | **WIN** |

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

- ⚠️ **Profit factor 0.85 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ✅ **Avg R = 1.09R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:19:37.019Z*
