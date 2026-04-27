# Bot Trade Report — 19 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:38:54.065Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $282.18 (-0.28%) over 19 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 19 |
| Win rate | 26.32% (5W / 14L) |
| Net P&L | $-282.18 (-0.28%) |
| Gross profit | $430.24 |
| Gross loss | $712.42 |
| Profit factor | 0.6 |
| Avg win | $86.05 |
| Avg loss | $50.89 |
| Payoff ratio | 1.69:1 |
| Expectancy | $-14.85 / trade |
| Max drawdown | 0.34% |
| Sharpe ratio (ann.) | -3.47 |
| Trades / active day | 1.12 |
| Avg confidence | 100% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.56R |
| Starting equity | $100,000 |
| Ending equity | $99,717.82 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 0% | $-179.53 | $-44.88 |
| Mid  10:30–11:30 | 10 | 30% | $-196.56 | $-19.66 |
| Noon 11:30–13:00 | 4 | 50% | $+135.74 | $33.94 |
| PM   13:00–14:00 | 1 | 0% | $-41.83 | $-41.83 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MS | 19 | 5 | 26.32% | $-282.18 | $-14.85 | 0.6 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 16 | 4 | 25% | $-211.56 | $-13.22 |
| breakout | 3 | 1 | 33.33% | $-70.62 | $-23.54 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 19 | 5 | 26.32% | $-282.18 | $-14.85 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | MS | 11 | 0.63 | $-9.92 | 8 | 0.59 | $-21.64 | 0.23% | 0.44 | reject |
| Behavior | neutral | 11 | 0.63 | $-9.92 | 8 | 0.59 | $-21.64 | 0.23% | 0.44 | reject |
| Setup | trend | 10 | 1.01 | $+0.13 | 6 | 0.41 | $-35.48 | 0.23% | 0.32 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-332.23 | 0.56 |
| +3 bps/side | $-432.36 | 0.48 |
| +5 bps/side | $-532.51 | 0.41 |
| +10 bps/side | $-782.85 | 0.29 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| stagnation | 5 |
| timeout | 5 |
| trim-profit-target | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MS | 05-01 14:00 | 05-01 14:50 | 116.06 | 115.97 | 120 | 13927.2 | -10.8 | -0.08% | 0.08R | 50m | market | stagnation | trend | trend | neutral | 68.82 | ↑115.53 | 0.3462 | 1.5 | **LOSS** |
| 2 | MS | 05-08 13:40 | 05-08 14:10 | 121.41 | 120.45 | 115 | 13962.15 | -110.4 | -0.79% | 0.81R | 30m | market | early-reversal | breakout | breakout | neutral | 68.43 | ↓120.87 | 0.2337 | 1.37 | **LOSS** |
| 3 | MS | 05-08 15:30 | 05-08 17:15 | 122.12 | 122.98 | 114 | 13921.68 | +98.04 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 69.04 | ↑121.2 | 0.5086 | 2.69 | **WIN** |
| 4 | MS | 05-13 15:35 | 05-13 16:00 | 129.52 | 129.08 | 108 | 13988.16 | -47.52 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 68.78 | ↑128.51 | 0.5114 | 1.09 | **LOSS** |
| 5 | MS | 07-21 14:35 | 07-21 16:20 | 141.77 | 141.71 | 98 | 13893.46 | -5.88 | -0.04% | 0.06R | 105m | market | timeout | trend | trend | neutral | 64.84 | ↓141.12 | 0.2576 | 1.28 | **LOSS** |
| 6 | MS | 08-08 14:05 | 08-08 14:55 | 142.73 | 142.41 | 98 | 13987.54 | -31.36 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 77.34 | ↑141.99 | 0.2731 | 1.85 | **LOSS** |
| 7 | MS | 09-09 14:35 | 09-09 15:45 | 150.6 | 151.75 | 46 | 13855.2 | +52.9 | +0.76% | 1.09R | 70m | market | trim-profit-target | trend | trend | neutral | 73.9 | ↑149.55 | 0.4802 | 1.34 | **WIN** |
| 8 | MS | 09-09 14:35 | 09-09 16:20 | 150.6 | 151.29 | 46 | 13855.2 | +31.74 | +0.46% | 0.66R | 105m | market | timeout | trend | trend | neutral | 73.9 | ↑149.55 | 0.4802 | 1.34 | **WIN** |
| 9 | MS | 09-18 14:00 | 09-18 14:50 | 159.23 | 158.92 | 87 | 13853.01 | -26.97 | -0.19% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 73.98 | ↑158.45 | 0.5031 | 1.37 | **LOSS** |
| 10 | MS | 10-14 17:30 | 10-14 18:00 | 156.89 | 156.42 | 89 | 13963.21 | -41.83 | -0.3% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 75.7 | ↑155.04 | 0.4949 | 3.41 | **LOSS** |
| 11 | MS | 10-24 15:00 | 10-24 16:25 | 163.88 | 163.68 | 85 | 13929.8 | -17 | -0.12% | 0.17R | 85m | market | stagnation | trend | trend | neutral | 79.83 | ↑162.7 | 1.0623 | 1.41 | **LOSS** |
| 12 | MS | 11-04 15:00 | 11-04 16:10 | 165.51 | 165.49 | 84 | 13902.84 | -1.68 | -0.01% | 0.01R | 70m | market | breakeven-stop | trend | trend | neutral | 61.7 | ↑163.77 | 0.1692 | 2.07 | **LOSS** |
| 13 | MS | 01-15 16:30 | 01-15 17:20 | 191.25 | 191.09 | 73 | 13961.25 | -11.68 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 70.26 | ↑188.1 | 2.0761 | 1.03 | **LOSS** |
| 14 | MS | 01-26 15:10 | 01-26 15:40 | 181.96 | 181.31 | 76 | 13828.96 | -49.4 | -0.36% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 78.73 | ↓181.27 | 0.6358 | 1.98 | **LOSS** |
| 15 | MS | 02-11 14:45 | 02-11 15:05 | 179.53 | 177.37 | 77 | 13823.81 | -166.32 | -1.2% | 1.18R | 20m | market | early-reversal | trend | trend | neutral | 72.67 | ↓179.62 | 1.1486 | 1.42 | **LOSS** |
| 16 | MS | 02-25 15:00 | 02-25 16:45 | 171.32 | 173.18 | 81 | 13876.92 | +150.66 | +1.09% | 1.22R | 105m | market | timeout | trend | trend | neutral | 77.21 | ↑170.7 | 0.4065 | 1.14 | **WIN** |
| 17 | MS | 03-31 16:40 | 03-31 18:25 | 163.5 | 164.64 | 85 | 13897.5 | +96.9 | +0.7% | 1R | 105m | market | timeout | breakout | breakout | neutral | 80.17 | ↑161.49 | 0.2421 | 4.44 | **WIN** |
| 18 | MS | 04-02 14:35 | 04-02 15:05 | 166.05 | 165.37 | 84 | 13948.2 | -57.12 | -0.41% | 0.25R | 30m | market | early-reversal | breakout | breakout | neutral | 49.08 | ↑163.78 | -0.5434 | 2.2 | **LOSS** |
| 19 | MS | 04-07 14:30 | 04-07 15:00 | 168.27 | 166.65 | 83 | 13966.41 | -134.46 | -0.96% | 0.94R | 30m | market | early-reversal | trend | trend | neutral | 64.07 | ↓166.67 | 0.2816 | 1.17 | **LOSS** |

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

- ⚠️ **Profit factor 0.6 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.56R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:38:54.065Z*
