# Bot Trade Report — 30 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T16:01:10.270Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $331.54 (-0.33%) over 30 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 30 |
| Win rate | 30% (9W / 21L) |
| Net P&L | $-331.54 (-0.33%) |
| Gross profit | $938.99 |
| Gross loss | $1270.53 |
| Profit factor | 0.74 |
| Avg win | $104.33 |
| Avg loss | $60.5 |
| Payoff ratio | 1.72:1 |
| Expectancy | $-11.05 / trade |
| Max drawdown | 0.56% |
| Sharpe ratio (ann.) | -1.85 |
| Trades / active day | 1.15 |
| Avg confidence | 98.7% |
| Avg trade duration | 61 min |
| Avg risk ratio | 0.68R |
| Starting equity | $100,000 |
| Ending equity | $99,668.46 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 3 | 33.33% | $+21.03 | $7.01 |
| Mid  10:30–11:30 | 8 | 12.5% | $-579.32 | $-72.42 |
| Noon 11:30–13:00 | 13 | 38.46% | $+160.11 | $12.32 |
| PM   13:00–14:00 | 6 | 33.33% | $+66.64 | $11.11 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| EXPE | 30 | 9 | 30% | $-331.54 | $-11.05 | 0.74 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 23 | 8 | 34.78% | $-44.58 | $-1.94 |
| breakout | 7 | 1 | 14.29% | $-286.96 | $-40.99 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 2 | 0 | 0% | $-42.62 | $-21.31 |
| neutral | 28 | 9 | 32.14% | $-288.92 | $-10.32 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 15 | 1.59 | $+13.98 | 8 | 0.48 | $-31.78 | 0.44% | 0.37 | watch |
| Symbol | EXPE | 18 | 1.35 | $+10.19 | 12 | 0.31 | $-42.92 | 0.57% | 0.24 | watch |
| Behavior | neutral | 18 | 1.35 | $+10.19 | 10 | 0.33 | $-47.24 | 0.52% | 0.25 | watch |
| Time slot | Noon 11:30-13:00 | 9 | 1.09 | $+2.35 | 4 | 2.48 | $+34.74 | 0.09% | 1.78 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-408.76 | 0.69 |
| +3 bps/side | $-563.19 | 0.61 |
| +5 bps/side | $-717.63 | 0.54 |
| +10 bps/side | $-1103.73 | 0.4 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| stagnation | 8 |
| timeout | 7 |
| breakeven-stop | 2 |
| trim-profit-target | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | EXPE | 04-30 17:30 | 04-30 18:40 | 155.12 | 155.18 | 90 | 13960.8 | +5.4 | +0.04% | 0.06R | 70m | market | breakeven-stop | trend | trend | neutral | 53.75 | ↑151.29 | 0.4425 | 2.34 | **WIN** |
| 2 | EXPE | 05-01 15:15 | 05-01 15:35 | 161.94 | 161.06 | 86 | 13926.84 | -75.68 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 73.89 | ↑159.95 | 1.5027 | 1.5 | **LOSS** |
| 3 | EXPE | 05-08 15:45 | 05-08 17:15 | 171.48 | 171.22 | 81 | 13889.88 | -21.06 | -0.15% | 0.2R | 90m | market | breakeven-stop | trend | trend | neutral | 66.83 | ↑169.3 | 0.8727 | 1.91 | **LOSS** |
| 4 | EXPE | 05-13 16:35 | 05-13 17:25 | 172.74 | 172.35 | 80 | 13819.2 | -31.2 | -0.23% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 78.81 | ↑170.63 | 0.6844 | 1.33 | **LOSS** |
| 5 | EXPE | 05-28 15:35 | 05-28 16:30 | 167.16 | 167.03 | 83 | 13874.28 | -10.79 | -0.08% | 0.11R | 55m | market | stagnation | trend | trend | neutral | 64.84 | ↑165.99 | 0.458 | 1.6 | **LOSS** |
| 6 | EXPE | 06-24 13:40 | 06-24 14:00 | 169.31 | 167.88 | 82 | 13883.42 | -117.26 | -0.84% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 80.8 | ↓168.99 | 1.296 | 1.13 | **LOSS** |
| 7 | EXPE | 07-10 15:40 | 07-10 16:10 | 185.52 | 184.72 | 75 | 13914 | -60 | -0.43% | 0.61R | 30m | market | early-reversal | trend | trend | neutral | 65.57 | ↑183.4 | 1.7939 | 1.18 | **LOSS** |
| 8 | EXPE | 09-11 17:35 | 09-11 18:50 | 220.52 | 220.28 | 63 | 13892.76 | -15.12 | -0.11% | 0.16R | 75m | market | stagnation | trend | trend | neutral | 73.79 | ↑218.02 | 0.8766 | 1.53 | **LOSS** |
| 9 | EXPE | 10-03 14:25 | 10-03 15:15 | 221.81 | 221.43 | 62 | 13752.22 | -23.56 | -0.17% | 0.18R | 50m | market | stagnation | trend | trend | neutral | 72.69 | ↑218.84 | 0.9496 | 1.69 | **LOSS** |
| 10 | EXPE | 10-13 14:05 | 10-13 15:50 | 213.86 | 216.35 | 65 | 13900.9 | +161.85 | +1.16% | 1.63R | 105m | market | timeout | trend | trend | neutral | 69.21 | ↑212.63 | 0.3902 | 1.54 | **WIN** |
| 11 | EXPE | 10-28 16:30 | 10-28 17:10 | 226.03 | 225.36 | 61 | 13787.83 | -40.87 | -0.3% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 72.98 | ↑223.81 | 0.7787 | 3.2 | **LOSS** |
| 12 | EXPE | 11-05 16:20 | 11-05 18:05 | 212.89 | 215.17 | 65 | 13837.85 | +148.2 | +1.07% | 1.22R | 105m | market | timeout | trend | trend | neutral | 56.75 | ↑211.36 | 0.2891 | 1.61 | **WIN** |
| 13 | EXPE | 11-12 17:10 | 11-12 18:55 | 273.97 | 276.63 | 51 | 13972.47 | +135.66 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 66.93 | ↑271.22 | 1.3257 | 2.43 | **WIN** |
| 14 | EXPE | 11-21 14:30 | 11-21 15:35 | 241.35 | 240.38 | 53 | 12791.55 | -51.41 | -0.4% | 0.36R | 65m | market | stagnation | breakout | breakout | neutral | 69.49 | ↓240.89 | -0.0683 | 1.54 | **LOSS** |
| 15 | EXPE | 11-21 16:55 | 11-21 17:30 | 246.71 | 245.36 | 56 | 13815.76 | -75.6 | -0.55% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 73.11 | ↑242.92 | 1.5227 | 1.73 | **LOSS** |
| 16 | EXPE | 11-25 14:35 | 11-25 16:20 | 253.99 | 256.58 | 55 | 13969.45 | +142.45 | +1.02% | 1.02R | 105m | market | timeout | breakout | breakout | neutral | 75.52 | ↑253.26 | 0.0747 | 1.37 | **WIN** |
| 17 | EXPE | 12-02 16:45 | 12-02 17:40 | 260.91 | 262.67 | 26 | 13828.23 | +45.76 | +0.67% | 0.96R | 55m | market | trim-profit-target | trend | trend | neutral | 76.83 | ↑258.64 | 0.5371 | 1.94 | **WIN** |
| 18 | EXPE | 12-02 16:45 | 12-02 18:50 | 260.91 | 263.38 | 27 | 13828.23 | +66.69 | +0.95% | 1.36R | 125m | market | timeout | trend | trend | neutral | 76.83 | ↑258.64 | 0.5371 | 1.94 | **WIN** |
| 19 | EXPE | 12-10 17:15 | 12-10 18:20 | 269.69 | 269.55 | 52 | 14023.88 | -7.28 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 71.16 | ↑267.29 | 1.563 | 2.78 | **LOSS** |
| 20 | EXPE | 12-11 17:30 | 12-11 18:45 | 281.5 | 280.68 | 49 | 13793.5 | -40.18 | -0.29% | 0.41R | 75m | market | stagnation | trend | trend | neutral | 72.83 | ↑279.36 | 0.3419 | 1.83 | **LOSS** |
| 21 | EXPE | 12-15 14:30 | 12-15 14:55 | 279.18 | 277.82 | 46 | 12842.28 | -62.56 | -0.49% | 0.63R | 25m | market | early-reversal | breakout | breakout | neutral | 69.72 | ↓278.15 | -0.3856 | 1.64 | **LOSS** |
| 22 | EXPE | 12-15 15:30 | 12-15 17:15 | 280.65 | 281.99 | 49 | 13751.85 | +65.66 | +0.48% | 0.45R | 105m | market | timeout | trend | trend | neutral | 73.44 | ↑278.88 | 1.179 | 1.2 | **WIN** |
| 23 | EXPE | 12-18 14:35 | 12-18 15:10 | 287.07 | 285.56 | 48 | 13779.36 | -72.48 | -0.53% | 0.64R | 35m | market | early-reversal | breakout | breakout | neutral | 69.17 | ↓287.07 | 0.8618 | 1.23 | **LOSS** |
| 24 | EXPE | 01-06 15:40 | 01-06 17:25 | 293.45 | 297.01 | 47 | 13792.15 | +167.32 | +1.21% | 1.13R | 105m | market | timeout | trend | trend | neutral | 70.84 | ↑291.44 | 1.1236 | 1.33 | **WIN** |
| 25 | EXPE | 01-13 14:40 | 01-13 15:10 | 296.76 | 295.42 | 47 | 13947.72 | -62.98 | -0.45% | 0.64R | 30m | market | early-reversal | breakout | breakout | neutral | 86.67 | ↓295.71 | 0.2812 | 1.14 | **LOSS** |
| 26 | EXPE | 02-25 16:35 | 02-25 17:05 | 201.74 | 200.93 | 38 | 7666.12 | -30.78 | -0.4% | 0.57R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 65.01 | ↑200.67 | 0.6536 | 1.02 | **LOSS** |
| 27 | EXPE | 02-25 17:50 | 02-25 19:05 | 203.63 | 203.31 | 37 | 7534.31 | -11.84 | -0.16% | 0.23R | 75m | market | stagnation | trend | trend | noisyHighBeta | 66.63 | ↑200.96 | 0.5204 | 1.52 | **LOSS** |
| 28 | EXPE | 03-13 14:30 | 03-13 14:45 | 233.75 | 228.09 | 59 | 13791.25 | -333.94 | -2.42% | 2.47R | 15m | market | stop-loss | trend | trend | neutral | 74.58 | ↓232.44 | 0.8251 | 1.16 | **LOSS** |
| 29 | EXPE | 04-02 14:35 | 04-02 14:55 | 228.1 | 226.98 | 56 | 12773.6 | -62.72 | -0.49% | 0.27R | 20m | market | early-reversal | breakout | breakout | neutral | 50.49 | ↑223.25 | -0.9099 | 1.93 | **LOSS** |
| 30 | EXPE | 04-13 15:45 | 04-13 16:35 | 237.02 | 235.93 | 58 | 13747.16 | -63.22 | -0.46% | 0.66R | 50m | market | early-reversal | trend | trend | neutral | 64.71 | ↑233.52 | 1.9692 | 1.84 | **LOSS** |

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

- ⚠️ **Profit factor 0.74 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.68R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T16:01:10.270Z*
