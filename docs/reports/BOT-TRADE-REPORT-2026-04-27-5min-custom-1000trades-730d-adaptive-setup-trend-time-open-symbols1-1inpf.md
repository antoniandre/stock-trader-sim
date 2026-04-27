# Bot Trade Report — 17 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:21:57.735Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $486.56 (-0.49%) over 17 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 17 |
| Win rate | 23.53% (4W / 13L) |
| Net P&L | $-486.56 (-0.49%) |
| Gross profit | $220.75 |
| Gross loss | $707.31 |
| Profit factor | 0.31 |
| Avg win | $55.19 |
| Avg loss | $54.41 |
| Payoff ratio | 1.01:1 |
| Expectancy | $-28.62 / trade |
| Max drawdown | 0.51% |
| Sharpe ratio (ann.) | -6.96 |
| Trades / active day | 1.06 |
| Avg confidence | 100% |
| Avg trade duration | 53 min |
| Avg risk ratio | 0.45R |
| Starting equity | $100,000 |
| Ending equity | $99,513.44 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 17 | 23.53% | $-486.56 | $-28.62 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SNOW | 17 | 4 | 23.53% | $-486.56 | $-28.62 | 0.31 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 17 | 4 | 23.53% | $-486.56 | $-28.62 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 0 | 0% | $-75.92 | $-75.92 |
| neutral | 16 | 4 | 25% | $-410.64 | $-25.66 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SNOW | 10 | 0.18 | $-32.29 | 7 | 0.48 | $-23.38 | 0.23% | 0.34 | reject |
| Behavior | neutral | 9 | 0.22 | $-27.44 | 7 | 0.48 | $-23.38 | 0.23% | 0.34 | reject |
| Time slot | Open 9:30-10:30 | 10 | 0.18 | $-32.29 | 7 | 0.48 | $-23.38 | 0.23% | 0.34 | reject |
| Setup | trend | 10 | 0.18 | $-32.29 | 7 | 0.48 | $-23.38 | 0.23% | 0.34 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-529.66 | 0.29 |
| +3 bps/side | $-615.89 | 0.25 |
| +5 bps/side | $-702.1 | 0.21 |
| +10 bps/side | $-917.65 | 0.15 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| stagnation | 5 |
| timeout | 2 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SNOW | 05-06 14:05 | 05-06 14:30 | 161.31 | 160.71 | 86 | 13872.66 | -51.6 | -0.37% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 61.54 | ↑160.3 | 0.4 | 1.15 | **LOSS** |
| 2 | SNOW | 08-07 14:00 | 08-07 15:25 | 119.88 | 119.9 | 116 | 13906.08 | +2.32 | +0.02% | 0.01R | 85m | market | breakeven-stop | trend | trend | neutral | 72.52 | ↓119.06 | 0.6857 | 1.43 | **WIN** |
| 3 | SNOW | 08-19 14:10 | 08-19 15:50 | 131.15 | 132.05 | 53 | 13901.9 | +47.7 | +0.69% | 0.65R | 100m | market | trim-profit-target | trend | trend | neutral | 79.95 | ↑130.04 | 0.6725 | 1.11 | **WIN** |
| 4 | SNOW | 08-19 14:10 | 08-19 15:55 | 131.15 | 131.54 | 53 | 13901.9 | +20.67 | +0.3% | 0.28R | 105m | market | timeout | trend | trend | neutral | 79.95 | ↑130.04 | 0.6725 | 1.11 | **WIN** |
| 5 | SNOW | 09-25 14:05 | 09-25 14:50 | 114.81 | 114.73 | 121 | 13892.01 | -9.68 | -0.07% | 0.05R | 45m | market | trailing-stop | trend | trend | neutral | 73.62 | ↓113.86 | 0.6824 | 1.29 | **LOSS** |
| 6 | SNOW | 10-25 14:00 | 10-25 14:20 | 117.02 | 116.45 | 119 | 13925.38 | -67.83 | -0.49% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 75.26 | ↓116.61 | 0.5915 | 1.74 | **LOSS** |
| 7 | SNOW | 10-30 14:15 | 10-30 14:45 | 120.93 | 120.2 | 115 | 13906.95 | -83.95 | -0.6% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 78.42 | ↑119.63 | 0.5725 | 1.03 | **LOSS** |
| 8 | SNOW | 03-19 14:00 | 03-19 14:25 | 155.75 | 154.66 | 89 | 13861.75 | -97.01 | -0.7% | 1R | 25m | market | early-reversal | trend | trend | neutral | 73.83 | ↓154.91 | 0.6917 | 1.34 | **LOSS** |
| 9 | SNOW | 04-15 14:05 | 04-15 14:25 | 146.46 | 145 | 52 | 7615.92 | -75.92 | -1% | 1.04R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.28 | ↓145.79 | 0.2859 | 1.13 | **LOSS** |
| 10 | SNOW | 05-13 14:00 | 05-13 15:05 | 182.88 | 182.78 | 76 | 13898.88 | -7.6 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 11 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.56 | 213.31 | 65 | 13881.4 | -16.25 | -0.12% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 12 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.38 | 195.46 | 71 | 13942.98 | -65.32 | -0.47% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 13 | SNOW | 09-19 14:00 | 09-19 15:45 | 225.24 | 227.7 | 61 | 13739.64 | +150.06 | +1.09% | 1.38R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑224.52 | 1.1048 | 1.3 | **WIN** |
| 14 | SNOW | 09-29 14:00 | 09-29 15:10 | 228.53 | 228.38 | 61 | 13940.33 | -9.15 | -0.07% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 70.72 | ↓227.06 | 1.1204 | 1.13 | **LOSS** |
| 15 | SNOW | 10-06 14:05 | 10-06 14:55 | 243.3 | 242.48 | 57 | 13868.1 | -46.74 | -0.34% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 70.27 | ↑241.93 | 1.8709 | 1.86 | **LOSS** |
| 16 | SNOW | 10-23 14:00 | 10-23 14:55 | 249.74 | 249.27 | 55 | 13735.7 | -25.85 | -0.19% | 0.16R | 55m | market | stagnation | breakout | trend | neutral | 77.86 | ↑247.48 | 2.2908 | 1.25 | **LOSS** |
| 17 | SNOW | 04-22 14:25 | 04-22 14:50 | 156.2 | 154.51 | 89 | 13901.8 | -150.41 | -1.08% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 79.26 | ↓154.47 | 1.148 | 1.37 | **LOSS** |

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

- ⚠️ **Profit factor 0.31 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.45R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:21:57.735Z*
