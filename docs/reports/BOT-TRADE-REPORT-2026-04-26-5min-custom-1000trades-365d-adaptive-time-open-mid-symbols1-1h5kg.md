# Bot Trade Report — 19 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:14:33.145Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $343.92 (-0.34%) over 19 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 19 |
| Win rate | 36.84% (7W / 12L) |
| Net P&L | $-343.92 (-0.34%) |
| Gross profit | $328.32 |
| Gross loss | $672.24 |
| Profit factor | 0.49 |
| Avg win | $46.9 |
| Avg loss | $56.02 |
| Payoff ratio | 0.84:1 |
| Expectancy | $-18.1 / trade |
| Max drawdown | 0.47% |
| Sharpe ratio (ann.) | -4.7 |
| Trades / active day | 1.19 |
| Avg confidence | 100% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.6R |
| Starting equity | $100,000 |
| Ending equity | $99,656.08 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 33.33% | $-25.19 | $-4.2 |
| Mid  10:30–11:30 | 13 | 38.46% | $-318.73 | $-24.52 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| QCOM | 19 | 7 | 36.84% | $-343.92 | $-18.1 | 0.49 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 6 | 42.86% | $-145.65 | $-10.4 |
| breakout | 5 | 1 | 20% | $-198.27 | $-39.65 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 19 | 7 | 36.84% | $-343.92 | $-18.1 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | QCOM | 11 | 1.62 | $+11.23 | 8 | 0.01 | $-58.42 | 0.47% | 0 | watch |
| Behavior | neutral | 11 | 1.62 | $+11.23 | 8 | 0.01 | $-58.42 | 0.47% | 0 | watch |
| Time slot | Mid 10:30-11:30 | 7 | 1.48 | $+9.72 | 6 | 0.01 | $-64.46 | 0.39% | 0 | watch |
| Setup | trend | 11 | 1.62 | $+11.23 | 3 | 0 | $-89.71 | 0.27% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-391.27 | 0.45 |
| +3 bps/side | $-485.94 | 0.37 |
| +5 bps/side | $-580.59 | 0.31 |
| +10 bps/side | $-817.26 | 0.21 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 8 |
| timeout | 4 |
| stagnation | 4 |
| trim-profit-target | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.76 | 140.88 | 50 | 13976 | +56 | +0.8% | 1.1R | 85m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 2 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.76 | 141.14 | 50 | 13976 | +69 | +0.99% | 1.36R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 3 | QCOM | 05-21 15:20 | 05-21 17:05 | 155.11 | 154.9 | 90 | 13959.9 | -18.9 | -0.14% | 0.2R | 105m | market | stagnation | trend | trend | neutral | 77.16 | ↑153.6 | 0.4341 | 1.07 | **LOSS** |
| 4 | QCOM | 06-06 15:05 | 06-06 15:25 | 150.67 | 149.89 | 93 | 14012.31 | -72.54 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 67.5 | ↑149.8 | 0.5055 | 1.61 | **LOSS** |
| 5 | QCOM | 06-11 14:00 | 06-11 14:20 | 161.39 | 160.81 | 86 | 13879.54 | -49.88 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.19 | ↑160.41 | 0.5678 | 1.63 | **LOSS** |
| 6 | QCOM | 06-11 14:40 | 06-11 15:20 | 161.68 | 161.11 | 86 | 13904.48 | -49.02 | -0.35% | 0.5R | 40m | market | early-reversal | trend | trend | neutral | 70.77 | ↓160.86 | 0.7155 | 1.76 | **LOSS** |
| 7 | QCOM | 06-26 13:55 | 06-26 15:25 | 157.15 | 157.05 | 89 | 13986.35 | -8.9 | -0.06% | 0.09R | 90m | market | stagnation | trend | trend | neutral | 70.88 | ↓156.53 | 0.2975 | 1.12 | **LOSS** |
| 8 | QCOM | 09-11 14:35 | 09-11 16:20 | 160.53 | 160.74 | 87 | 13966.11 | +18.27 | +0.13% | 0.16R | 105m | market | timeout | trend | trend | neutral | 66.34 | ↑159.77 | 0.6266 | 1.1 | **WIN** |
| 9 | QCOM | 09-24 14:20 | 09-24 15:45 | 171.12 | 172.54 | 40 | 13860.72 | +56.8 | +0.83% | 1.19R | 85m | market | trim-profit-target | trend | trend | neutral | 77.11 | ↑170.02 | 0.4606 | 1.78 | **WIN** |
| 10 | QCOM | 09-24 14:20 | 09-24 16:05 | 171.12 | 172.52 | 41 | 13860.72 | +57.4 | +0.82% | 1.17R | 105m | market | timeout | trend | trend | neutral | 77.11 | ↑170.02 | 0.4606 | 1.78 | **WIN** |
| 11 | QCOM | 10-13 15:00 | 10-13 16:45 | 160.31 | 161.06 | 87 | 13946.97 | +65.25 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 73.94 | ↑158.48 | 1.1807 | 1.34 | **WIN** |
| 12 | QCOM | 11-10 14:40 | 11-10 15:00 | 173.49 | 171.91 | 80 | 13879.2 | -126.4 | -0.91% | 0.88R | 20m | market | early-reversal | breakout | trend | neutral | 76.44 | ↓173.57 | 0.9063 | 1.48 | **LOSS** |
| 13 | QCOM | 11-11 14:35 | 11-11 15:50 | 173.6 | 173.67 | 80 | 13888 | +5.6 | +0.04% | 0.06R | 75m | market | breakeven-stop | breakout | breakout | neutral | 77.51 | ↓172.92 | 0.4108 | 1.33 | **WIN** |
| 14 | QCOM | 11-12 15:00 | 11-12 15:20 | 176.86 | 175.73 | 79 | 13971.94 | -89.27 | -0.64% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 74.13 | ↓176.35 | 0.6498 | 2.31 | **LOSS** |
| 15 | QCOM | 12-03 14:35 | 12-03 14:55 | 172.47 | 171.81 | 81 | 13970.07 | -53.46 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↓171.74 | 0.4068 | 2.03 | **LOSS** |
| 16 | QCOM | 12-18 14:30 | 12-18 15:05 | 176.25 | 175.51 | 79 | 13923.75 | -58.46 | -0.42% | 0.48R | 35m | market | early-reversal | breakout | breakout | neutral | 74.21 | ↓176.12 | 0.3365 | 2.66 | **LOSS** |
| 17 | QCOM | 01-02 14:45 | 01-02 15:25 | 173.64 | 172.83 | 80 | 13891.2 | -64.8 | -0.47% | 0.64R | 40m | market | early-reversal | breakout | breakout | neutral | 67.97 | ↓173.31 | 0.1721 | 1.41 | **LOSS** |
| 18 | QCOM | 03-26 13:55 | 03-26 14:45 | 131.66 | 131.28 | 106 | 13955.96 | -40.28 | -0.29% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 63.71 | ↑129.96 | -0.0846 | 1.64 | **LOSS** |
| 19 | QCOM | 04-08 13:45 | 04-08 14:35 | 127.29 | 126.92 | 109 | 13874.61 | -40.33 | -0.29% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 75.97 | ↓127.46 | 0.9025 | 1.22 | **LOSS** |

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

- ⚠️ **Profit factor 0.49 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.6R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:14:33.145Z*
