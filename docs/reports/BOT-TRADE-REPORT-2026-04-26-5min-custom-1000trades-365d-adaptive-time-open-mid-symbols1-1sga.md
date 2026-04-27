# Bot Trade Report — 15 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:19:05.495Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $483.39 (-0.48%) over 15 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 15 |
| Win rate | 26.67% (4W / 11L) |
| Net P&L | $-483.39 (-0.48%) |
| Gross profit | $309.26 |
| Gross loss | $792.65 |
| Profit factor | 0.39 |
| Avg win | $77.32 |
| Avg loss | $72.06 |
| Payoff ratio | 1.07:1 |
| Expectancy | $-32.23 / trade |
| Max drawdown | 0.54% |
| Sharpe ratio (ann.) | -6.59 |
| Trades / active day | 1 |
| Avg confidence | 99.27% |
| Avg trade duration | 51 min |
| Avg risk ratio | 0.66R |
| Starting equity | $100,000 |
| Ending equity | $99,516.61 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 25% | $-199.23 | $-49.81 |
| Mid  10:30–11:30 | 11 | 27.27% | $-284.16 | $-25.83 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TXN | 15 | 4 | 26.67% | $-483.39 | $-32.23 | 0.39 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 4 | 33.33% | $-157.55 | $-13.13 |
| breakout | 3 | 0 | 0% | $-325.84 | $-108.61 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 1 | 100% | $+124.78 | $+124.78 |
| neutral | 14 | 3 | 21.43% | $-608.17 | $-43.44 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 9 | 0.55 | $-17.01 | 3 | 0.97 | $-1.49 | 0.09% | 0.75 | reject |
| Time slot | Mid 10:30-11:30 | 7 | 0.38 | $-25.67 | 4 | 0.54 | $-26.12 | 0.14% | 0.43 | reject |
| Symbol | TXN | 9 | 0.55 | $-17.01 | 6 | 0.27 | $-55.05 | 0.36% | 0.22 | reject |
| Behavior | neutral | 9 | 0.55 | $-17.01 | 5 | 0 | $-91.02 | 0.46% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-523.67 | 0.36 |
| +3 bps/side | $-604.2 | 0.32 |
| +5 bps/side | $-684.72 | 0.28 |
| +10 bps/side | $-886.05 | 0.19 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| timeout | 4 |
| stop-loss | 1 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TXN | 05-01 15:10 | 05-01 15:50 | 161.43 | 160.94 | 86 | 13882.98 | -42.14 | -0.3% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 67.92 | ↑160.37 | 0.479 | 1.95 | **LOSS** |
| 2 | TXN | 06-09 15:10 | 06-09 15:35 | 198.52 | 197.92 | 70 | 13896.4 | -42 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 68.13 | ↑197.13 | 1.3347 | 2.07 | **LOSS** |
| 3 | TXN | 06-23 14:00 | 06-23 14:30 | 201.51 | 200.84 | 69 | 13904.19 | -46.23 | -0.33% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 76.34 | ↑199.76 | 0.6313 | 1.16 | **LOSS** |
| 4 | TXN | 07-02 14:25 | 07-02 16:10 | 213.95 | 215.07 | 65 | 13906.75 | +72.8 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 73.05 | ↑212.03 | 0.5492 | 1.72 | **WIN** |
| 5 | TXN | 07-08 14:30 | 07-08 16:15 | 217.11 | 218.47 | 64 | 13895.04 | +87.04 | +0.63% | 0.79R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑215.92 | 0.8367 | 1.64 | **WIN** |
| 6 | TXN | 10-08 15:05 | 10-08 16:50 | 180.2 | 180.52 | 77 | 13875.4 | +24.64 | +0.18% | 0.26R | 105m | market | timeout | trend | trend | neutral | 78.46 | ↑178.6 | 0.619 | 1.85 | **WIN** |
| 7 | TXN | 10-10 14:35 | 10-10 14:55 | 181.31 | 179.8 | 77 | 13960.87 | -116.27 | -0.83% | 1.08R | 20m | market | stop-loss | trend | trend | neutral | 69.79 | ↓180.2 | 0.7573 | 1.05 | **LOSS** |
| 8 | TXN | 11-11 15:00 | 11-11 15:50 | 161.75 | 161.26 | 85 | 13748.75 | -41.65 | -0.3% | 0.43R | 50m | market | early-reversal | trend | trend | neutral | 76.74 | ↓161.04 | 0.4419 | 1.75 | **LOSS** |
| 9 | TXN | 11-20 14:35 | 11-20 15:10 | 158.75 | 158.19 | 88 | 13970 | -49.28 | -0.35% | 0.5R | 35m | market | early-reversal | trend | trend | neutral | 71.35 | ↓158.42 | 0.2053 | 1.28 | **LOSS** |
| 10 | TXN | 01-02 15:00 | 01-02 15:20 | 177.07 | 175.89 | 78 | 13811.46 | -92.04 | -0.67% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 69.1 | ↓176.43 | 0.4291 | 1.51 | **LOSS** |
| 11 | TXN | 01-28 15:25 | 01-28 17:10 | 211.35 | 215.02 | 34 | 7185.9 | +124.78 | +1.74% | 0.87R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.28 | ↑210.54 | 4.048 | 1.07 | **WIN** |
| 12 | TXN | 02-12 14:30 | 02-12 14:50 | 229.19 | 227.55 | 61 | 13980.59 | -100.04 | -0.72% | 1.03R | 20m | market | early-reversal | breakout | breakout | neutral | 77.83 | ↓228.26 | -0.0372 | 2.9 | **LOSS** |
| 13 | TXN | 03-11 13:35 | 03-11 13:55 | 201.48 | 199.36 | 69 | 13902.12 | -146.28 | -1.05% | 1.21R | 20m | market | early-reversal | breakout | breakout | neutral | 65.9 | ↓200.75 | 0.0463 | 1.25 | **LOSS** |
| 14 | TXN | 03-24 14:05 | 03-24 14:30 | 194.49 | 193.37 | 71 | 13808.79 | -79.52 | -0.58% | 0.62R | 25m | market | early-reversal | breakout | breakout | neutral | 83.29 | ↑191.15 | 0.6473 | 1.36 | **LOSS** |
| 15 | TXN | 04-16 15:25 | 04-16 16:30 | 223.11 | 222.51 | 62 | 13832.82 | -37.2 | -0.27% | 0.39R | 65m | market | stagnation | trend | trend | neutral | 76.88 | ↑221.03 | 1.6648 | 4.22 | **LOSS** |

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

- ⚠️ **Profit factor 0.39 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.66R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:19:05.495Z*
