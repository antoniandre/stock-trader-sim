# Bot Trade Report — 27 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:59:10.171Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $164.2 (-0.16%) over 27 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 27 |
| Win rate | 40.74% (11W / 16L) |
| Net P&L | $-164.2 (-0.16%) |
| Gross profit | $1209.39 |
| Gross loss | $1373.59 |
| Profit factor | 0.88 |
| Avg win | $109.94 |
| Avg loss | $85.85 |
| Payoff ratio | 1.28:1 |
| Expectancy | $-6.08 / trade |
| Max drawdown | 0.73% |
| Sharpe ratio (ann.) | -0.79 |
| Trades / active day | 1.23 |
| Avg confidence | 99.52% |
| Avg trade duration | 53 min |
| Avg risk ratio | 0.68R |
| Starting equity | $100,000 |
| Ending equity | $99,835.8 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 27 | 40.74% | $-164.2 | $-6.08 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 27 | 11 | 40.74% | $-164.2 | $-6.08 | 0.88 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 20 | 10 | 50% | $-23.98 | $-1.2 |
| breakout | 7 | 1 | 14.29% | $-140.22 | $-20.03 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 23 | 10 | 43.48% | $+7.13 | $+0.31 |
| noisyHighBeta | 4 | 1 | 25% | $-171.33 | $-42.83 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | TSLA | 16 | 0.46 | $-35.49 | 11 | 2.23 | $+36.69 | 0.25% | 1.76 | reject |
| Behavior | neutral | 12 | 0.52 | $-33.04 | 11 | 2.23 | $+36.69 | 0.25% | 1.76 | reject |
| Time slot | Open 9:30-10:30 | 16 | 0.46 | $-35.49 | 11 | 2.23 | $+36.69 | 0.25% | 1.76 | reject |
| Setup | trend | 12 | 0.62 | $-24.12 | 8 | 3.24 | $+33.18 | 0.12% | 2.34 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-222.61 | 0.84 |
| +3 bps/side | $-339.48 | 0.77 |
| +5 bps/side | $-456.39 | 0.71 |
| +10 bps/side | $-748.58 | 0.58 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 13 |
| trim-profit-target | 4 |
| timeout | 4 |
| stagnation | 3 |
| profit-target | 2 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-21 14:00 | 05-21 14:20 | 179.67 | 177.65 | 77 | 13834.59 | -155.54 | -1.12% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 71.81 | ↓178.36 | 1.1911 | 1.39 | **LOSS** |
| 2 | TSLA | 05-24 14:05 | 05-24 15:25 | 177.1 | 178.38 | 39 | 13813.8 | +49.92 | +0.72% | 0.62R | 80m | market | trim-profit-target | trend | trend | neutral | 75.51 | ↑175.88 | 0.5949 | 1.36 | **WIN** |
| 3 | TSLA | 05-24 14:05 | 05-24 15:50 | 177.1 | 177.9 | 39 | 13813.8 | +31.2 | +0.45% | 0.39R | 105m | market | timeout | trend | trend | neutral | 75.51 | ↑175.88 | 0.5949 | 1.36 | **WIN** |
| 4 | TSLA | 05-30 14:05 | 05-30 14:25 | 182.36 | 180.87 | 76 | 13859.36 | -113.24 | -0.82% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 79.54 | ↑180.16 | 1.2053 | 1.14 | **LOSS** |
| 5 | TSLA | 06-12 14:10 | 06-12 15:40 | 174.32 | 178.77 | 80 | 13945.6 | +356 | +2.55% | 1.53R | 90m | market | profit-target | trend | trend | neutral | 78.02 | ↑172.96 | 1.1756 | 1.06 | **WIN** |
| 6 | TSLA | 06-25 14:00 | 06-25 14:50 | 185.87 | 185.34 | 75 | 13940.25 | -39.75 | -0.29% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 58.69 | ↓184.02 | 0.1721 | 1.62 | **LOSS** |
| 7 | TSLA | 06-26 14:05 | 06-26 14:25 | 193.67 | 192.08 | 72 | 13944.24 | -114.48 | -0.82% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 77.15 | ↑191.83 | 1.8169 | 1.27 | **LOSS** |
| 8 | TSLA | 07-02 14:00 | 07-02 14:55 | 225.93 | 227.21 | 31 | 7003.83 | +39.68 | +0.57% | 0.29R | 55m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.94 | ↑222.78 | 3.6444 | 1.02 | **WIN** |
| 9 | TSLA | 07-11 14:05 | 07-11 14:25 | 270.37 | 265.87 | 28 | 7570.36 | -126 | -1.66% | 1.14R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 78.73 | ↓267.9 | 0.9939 | 1.63 | **LOSS** |
| 10 | TSLA | 08-19 14:10 | 08-19 15:05 | 220.31 | 220.03 | 63 | 13879.53 | -17.64 | -0.13% | 0.07R | 55m | market | stagnation | breakout | breakout | neutral | 64.78 | ↑217.34 | 0.6184 | 2.05 | **LOSS** |
| 11 | TSLA | 09-17 14:00 | 09-17 14:20 | 234.48 | 232.17 | 59 | 13834.32 | -136.29 | -0.99% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 75.17 | ↓232.07 | 1.4214 | 1.66 | **LOSS** |
| 12 | TSLA | 10-30 14:20 | 10-30 15:35 | 261.28 | 261.09 | 29 | 7577.12 | -5.51 | -0.07% | 0.05R | 75m | market | stagnation | trend | trend | noisyHighBeta | 57.73 | ↑258.52 | 0.1485 | 1.64 | **LOSS** |
| 13 | TSLA | 04-08 14:15 | 04-08 14:40 | 248.92 | 246.27 | 30 | 7467.6 | -79.5 | -1.06% | 0.53R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 65.55 | ↓245.67 | 4.3045 | 1.53 | **LOSS** |
| 14 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.83 | 321.86 | 43 | 13924.69 | -84.71 | -0.61% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 15 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.45 | 323.08 | 42 | 13626.9 | -57.54 | -0.42% | 0.32R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 16 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.87 | 308.27 | 44 | 13678.28 | -114.4 | -0.84% | 0.52R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 17 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.68 | 334.98 | 42 | 13720.56 | +348.6 | +2.54% | 3.39R | 25m | market | profit-target | breakout | breakout | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 18 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.34 | 361.09 | 19 | 13936.26 | +71.25 | +1.05% | 0.72R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 19 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.34 | 362.27 | 20 | 13936.26 | +98.6 | +1.38% | 0.95R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 20 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.92 | 455.47 | 15 | 13978.52 | +68.25 | +1.01% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 21 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.92 | 455.36 | 16 | 13978.52 | +71.04 | +0.98% | 0.75R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 22 | TSLA | 10-17 14:15 | 10-17 14:35 | 439.22 | 435.19 | 31 | 13615.82 | -124.93 | -0.92% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 73.03 | ↑432.68 | 2.805 | 2.34 | **LOSS** |
| 23 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.23 | 455.2 | 15 | 13566.9 | +44.55 | +0.66% | 0.51R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 24 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.23 | 454.25 | 15 | 13566.9 | +30.3 | +0.45% | 0.35R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 25 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.5 | 362.25 | 38 | 13851 | -85.5 | -0.62% | 0.72R | 35m | market | early-reversal | breakout | breakout | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 26 | TSLA | 03-31 14:20 | 03-31 14:40 | 365.83 | 364.09 | 38 | 13901.54 | -66.12 | -0.48% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 67.6 | ↓364.02 | 2.8915 | 1.08 | **LOSS** |
| 27 | TSLA | 04-14 14:25 | 04-14 15:00 | 363.09 | 361.71 | 38 | 13797.42 | -52.44 | -0.38% | 0.24R | 35m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |

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

- ⚠️ **Profit factor 0.88 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.68R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:59:10.171Z*
