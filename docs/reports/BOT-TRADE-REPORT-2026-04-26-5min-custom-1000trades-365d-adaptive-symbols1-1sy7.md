# Bot Trade Report — 25 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:26:04.044Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $476.04 (-0.48%) over 25 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 25 |
| Win rate | 28% (7W / 18L) |
| Net P&L | $-476.04 (-0.48%) |
| Gross profit | $535.84 |
| Gross loss | $1011.88 |
| Profit factor | 0.53 |
| Avg win | $76.55 |
| Avg loss | $56.22 |
| Payoff ratio | 1.36:1 |
| Expectancy | $-19.04 / trade |
| Max drawdown | 0.56% |
| Sharpe ratio (ann.) | -4.18 |
| Trades / active day | 1.04 |
| Avg confidence | 99.48% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.51R |
| Starting equity | $100,000 |
| Ending equity | $99,523.96 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 20% | $-201.72 | $-40.34 |
| Mid  10:30–11:30 | 8 | 25% | $-167.42 | $-20.93 |
| Noon 11:30–13:00 | 9 | 44.44% | $+34.92 | $3.88 |
| PM   13:00–14:00 | 3 | 0% | $-141.82 | $-47.27 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| UNH | 25 | 7 | 28% | $-476.04 | $-19.04 | 0.53 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 21 | 6 | 28.57% | $-273.29 | $-13.01 |
| breakout | 4 | 1 | 25% | $-202.75 | $-50.69 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 2 | 0 | 0% | $-13.24 | $-6.62 |
| neutral | 23 | 7 | 30.43% | $-462.8 | $-20.12 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Noon 11:30-13:00 | 8 | 1.53 | $+11.06 | 1 | 0 | $-53.53 | 0.05% | 0 | watch |
| Setup | trend | 14 | 0.75 | $-7.91 | 7 | 0.47 | $-23.22 | 0.23% | 0.34 | reject |
| Symbol | UNH | 15 | 0.6 | $-14.9 | 10 | 0.44 | $-25.25 | 0.25% | 0.3 | reject |
| Behavior | neutral | 13 | 0.62 | $-16.18 | 10 | 0.44 | $-25.25 | 0.25% | 0.3 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-542.38 | 0.49 |
| +3 bps/side | $-675.13 | 0.41 |
| +5 bps/side | $-807.83 | 0.35 |
| +10 bps/side | $-1139.67 | 0.23 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 13 |
| timeout | 7 |
| stagnation | 5 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | UNH | 05-05 14:00 | 05-05 15:45 | 403.98 | 406.43 | 34 | 13735.32 | +83.3 | +0.61% | 0.8R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 2 | UNH | 05-19 16:25 | 05-19 17:30 | 313.65 | 313.39 | 24 | 7527.6 | -6.24 | -0.08% | 0.06R | 65m | market | stagnation | trend | trend | noisyHighBeta | 78.79 | ↑304.66 | 2.5615 | 3.18 | **LOSS** |
| 3 | UNH | 06-11 14:15 | 06-11 15:05 | 308.8 | 307.78 | 45 | 13896 | -45.9 | -0.33% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 72.91 | ↓306.28 | 1.403 | 1.5 | **LOSS** |
| 4 | UNH | 06-12 15:50 | 06-12 17:35 | 315.77 | 316.7 | 44 | 13893.88 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | trend | trend | neutral | 57.08 | ↑312.45 | 1.2798 | 1.44 | **WIN** |
| 5 | UNH | 08-05 15:20 | 08-05 15:40 | 247.67 | 245.5 | 52 | 12878.84 | -112.84 | -0.88% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 6 | UNH | 08-05 16:30 | 08-05 16:50 | 249.01 | 247.76 | 56 | 13944.56 | -70 | -0.5% | 0.35R | 20m | market | early-reversal | trend | trend | neutral | 56.1 | ↑244.16 | 1.3979 | 2.27 | **LOSS** |
| 7 | UNH | 08-15 15:30 | 08-15 17:15 | 307.5 | 309.67 | 45 | 13837.5 | +97.65 | +0.71% | 0.58R | 105m | market | timeout | trend | trend | neutral | 66.25 | ↑301.9 | 3.8404 | 1.01 | **WIN** |
| 8 | UNH | 08-21 14:45 | 08-21 15:50 | 305.05 | 304.77 | 25 | 7626.25 | -7 | -0.09% | 0.09R | 65m | market | stagnation | trend | trend | noisyHighBeta | 73.74 | ↑301.63 | 1.4825 | 1.32 | **LOSS** |
| 9 | UNH | 09-09 16:35 | 09-09 18:20 | 345.94 | 348.37 | 40 | 13837.6 | +97.2 | +0.7% | 0.54R | 105m | market | timeout | trend | trend | neutral | 69.91 | ↑336.27 | 3.5867 | 1.04 | **WIN** |
| 10 | UNH | 09-11 15:40 | 09-11 16:00 | 359.57 | 357.5 | 38 | 13663.66 | -78.66 | -0.58% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 75.3 | ↑354.29 | 3.0598 | 2.35 | **LOSS** |
| 11 | UNH | 09-12 14:00 | 09-12 14:20 | 361.7 | 359.42 | 38 | 13744.6 | -86.64 | -0.63% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 77.47 | ↑357.84 | 1.3657 | 1.15 | **LOSS** |
| 12 | UNH | 09-19 15:30 | 09-19 17:15 | 338.74 | 339.25 | 41 | 13888.34 | +20.91 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 61.32 | ↑336.54 | 0.4519 | 1.53 | **WIN** |
| 13 | UNH | 09-23 14:20 | 09-23 14:40 | 349.35 | 347.23 | 40 | 13974 | -84.8 | -0.61% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 79.73 | ↓346.79 | 1.9194 | 1.23 | **LOSS** |
| 14 | UNH | 10-07 15:00 | 10-07 15:20 | 363.31 | 361.78 | 38 | 13805.78 | -58.14 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑360.44 | 0.5464 | 1.97 | **LOSS** |
| 15 | UNH | 11-21 16:50 | 11-21 17:50 | 322.07 | 321.76 | 43 | 13849.01 | -13.33 | -0.1% | 0.14R | 60m | market | stagnation | trend | trend | neutral | 68.16 | ↑317.31 | 1.9935 | 1.03 | **LOSS** |
| 16 | UNH | 12-02 14:55 | 12-02 15:15 | 328.63 | 326.73 | 42 | 13802.46 | -79.8 | -0.58% | 0.83R | 20m | market | early-reversal | trend | breakout | neutral | 65 | ↑325.45 | -0.2713 | 1.35 | **LOSS** |
| 17 | UNH | 12-12 14:45 | 12-12 15:05 | 344.28 | 342.79 | 40 | 13771.2 | -59.6 | -0.43% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | 84.95 | ↑341.93 | 0.9959 | 1.99 | **LOSS** |
| 18 | UNH | 01-06 17:30 | 01-06 17:50 | 352.68 | 351.01 | 39 | 13754.52 | -65.13 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 70.21 | ↑349.46 | 0.9119 | 1.34 | **LOSS** |
| 19 | UNH | 01-20 17:00 | 01-20 17:55 | 337.92 | 337.67 | 41 | 13854.72 | -10.25 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 78.34 | ↑333.14 | 1.3816 | 1.37 | **LOSS** |
| 20 | UNH | 02-06 14:45 | 02-06 16:30 | 271 | 273.87 | 51 | 13821 | +146.37 | +1.06% | 1.06R | 105m | market | timeout | trend | trend | neutral | 67.37 | ↑270.95 | 0.7697 | 1.19 | **WIN** |
| 21 | UNH | 02-25 14:35 | 02-25 16:20 | 279.38 | 280.39 | 49 | 13689.62 | +49.49 | +0.36% | 0.51R | 105m | market | timeout | breakout | breakout | neutral | 86.81 | ↓278.58 | 0.5161 | 1.63 | **WIN** |
| 22 | UNH | 03-16 14:00 | 03-16 14:30 | 286.12 | 284.71 | 48 | 13733.76 | -67.68 | -0.49% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.12 | ↑283.61 | 0.9389 | 1.06 | **LOSS** |
| 23 | UNH | 03-24 15:15 | 03-24 15:35 | 273.27 | 272.37 | 51 | 13936.77 | -45.9 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.36 | ↑271.06 | 0.6058 | 2.47 | **LOSS** |
| 24 | UNH | 03-30 16:25 | 03-30 16:45 | 261.29 | 260.28 | 53 | 13848.37 | -53.53 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 58.09 | ↑258.91 | 0.5333 | 1.16 | **LOSS** |
| 25 | UNH | 04-07 17:40 | 04-07 18:00 | 312.36 | 310.85 | 44 | 13743.84 | -66.44 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 69.46 | ↑306.21 | 1.2981 | 1.26 | **LOSS** |

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

- ⚠️ **Profit factor 0.53 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.51R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:26:04.044Z*
