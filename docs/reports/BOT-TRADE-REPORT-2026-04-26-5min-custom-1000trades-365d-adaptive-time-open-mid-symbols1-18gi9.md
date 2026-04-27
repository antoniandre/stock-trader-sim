# Bot Trade Report — 22 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T16:01:09.523Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $84.57 (-0.08%) over 22 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 22 |
| Win rate | 36.36% (8W / 14L) |
| Net P&L | $-84.57 (-0.08%) |
| Gross profit | $1345.94 |
| Gross loss | $1430.51 |
| Profit factor | 0.94 |
| Avg win | $168.24 |
| Avg loss | $102.18 |
| Payoff ratio | 1.65:1 |
| Expectancy | $-3.84 / trade |
| Max drawdown | 0.56% |
| Sharpe ratio (ann.) | -0.4 |
| Trades / active day | 1.05 |
| Avg confidence | 99.41% |
| Avg trade duration | 47 min |
| Avg risk ratio | 0.73R |
| Starting equity | $100,000 |
| Ending equity | $99,915.43 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+464.88 | $77.48 |
| Mid  10:30–11:30 | 16 | 31.25% | $-549.45 | $-34.34 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| COIN | 22 | 8 | 36.36% | $-84.57 | $-3.84 | 0.94 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 6 | 50% | $+301.85 | $+25.15 |
| breakout | 10 | 2 | 20% | $-386.42 | $-38.64 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 6 | 5 | 83.33% | $+503.43 | $+83.91 |
| neutral | 16 | 3 | 18.75% | $-588 | $-36.75 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 5 | 1.94 | $+46.75 | 1 | ∞ | $+231.12 | 0% | ∞ | watch |
| Setup | trend | 9 | 0.9 | $-5.77 | 3 | 7.12 | $+117.93 | 0.06% | 6.06 | reject |
| Symbol | COIN | 13 | 0.68 | $-22.52 | 9 | 1.41 | $+23.13 | 0.23% | 1.18 | reject |
| Time slot | Mid 10:30-11:30 | 8 | 0.22 | $-65.82 | 8 | 0.95 | $-2.86 | 0.23% | 0.79 | reject |
| Behavior | neutral | 10 | 0.52 | $-44.24 | 6 | 0.68 | $-24.26 | 0.23% | 0.56 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-136.23 | 0.91 |
| +3 bps/side | $-239.53 | 0.84 |
| +5 bps/side | $-342.84 | 0.79 |
| +10 bps/side | $-601.08 | 0.67 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 10 |
| timeout | 3 |
| stagnation | 3 |
| profit-target | 3 |
| stop-loss | 1 |
| trim-profit-target | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | COIN | 05-02 15:00 | 05-02 15:10 | 208.47 | 205.61 | 67 | 13967.49 | -191.62 | -1.37% | 1.29R | 10m | market | stop-loss | trend | trend | neutral | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 2 | COIN | 05-12 14:40 | 05-12 15:00 | 213.06 | 209.51 | 60 | 12783.6 | -213 | -1.67% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 56.92 | ↓210.41 | 2.3802 | 2.39 | **LOSS** |
| 3 | COIN | 05-21 15:05 | 05-21 15:35 | 266.46 | 264.96 | 52 | 13855.92 | -78 | -0.56% | 0.47R | 30m | market | early-reversal | breakout | breakout | neutral | 61.31 | ↑262.51 | 0.9156 | 2.2 | **LOSS** |
| 4 | COIN | 07-02 14:50 | 07-02 16:35 | 346.4 | 351.58 | 22 | 7620.8 | +113.96 | +1.5% | 0.99R | 105m | market | timeout | trend | trend | noisyHighBeta | 62.7 | ↑342.5 | 2.1416 | 1.1 | **WIN** |
| 5 | COIN | 07-09 15:20 | 07-09 16:00 | 365.1 | 362.6 | 38 | 13873.8 | -95 | -0.68% | 0.61R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↑359.43 | 2.2588 | 1.34 | **LOSS** |
| 6 | COIN | 08-22 14:25 | 08-22 16:10 | 315.15 | 318.53 | 44 | 13866.6 | +148.72 | +1.07% | 0.54R | 105m | market | timeout | breakout | breakout | neutral | 76.34 | ↑310.67 | 3.5589 | 1.33 | **WIN** |
| 7 | COIN | 08-27 14:05 | 08-27 14:55 | 310.77 | 310.49 | 44 | 13673.88 | -12.32 | -0.09% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 67.7 | ↑309.3 | 1.2315 | 1.43 | **LOSS** |
| 8 | COIN | 09-02 14:30 | 09-02 14:50 | 309.76 | 307.57 | 45 | 13939.2 | -98.55 | -0.71% | 0.4R | 20m | market | early-reversal | breakout | breakout | neutral | 63.14 | ↑304.84 | 0.6174 | 1.21 | **LOSS** |
| 9 | COIN | 09-08 14:00 | 09-08 14:20 | 303.03 | 300.01 | 46 | 13939.38 | -138.92 | -1% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↓300.78 | 0.926 | 1.12 | **LOSS** |
| 10 | COIN | 09-18 14:05 | 09-18 14:35 | 330.05 | 337.99 | 42 | 13862.1 | +333.48 | +2.41% | 1.54R | 30m | market | profit-target | trend | trend | neutral | 70.09 | ↑327.83 | 2.7118 | 1.04 | **WIN** |
| 11 | COIN | 10-01 14:20 | 10-01 14:45 | 349.16 | 346.73 | 40 | 13966.4 | -97.2 | -0.7% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 74.66 | ↑345.34 | 3.8636 | 1.58 | **LOSS** |
| 12 | COIN | 10-20 14:35 | 10-20 15:25 | 349.23 | 352.71 | 10 | 7333.83 | +34.8 | +1% | 0.67R | 50m | market | trim-profit-target | trend | trend | noisyHighBeta | 58.31 | ↑345.9 | 4.2537 | 1.44 | **WIN** |
| 13 | COIN | 10-20 14:35 | 10-20 16:00 | 349.23 | 349.31 | 11 | 7333.83 | +0.88 | +0.02% | 0.01R | 85m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.31 | ↑345.9 | 4.2537 | 1.44 | **WIN** |
| 14 | COIN | 12-03 14:50 | 12-03 15:40 | 272.56 | 270.91 | 51 | 13900.56 | -84.15 | -0.61% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 57.96 | ↓269.89 | 0.246 | 1.38 | **LOSS** |
| 15 | COIN | 12-08 14:30 | 12-08 14:55 | 275.35 | 272.41 | 50 | 13767.5 | -147 | -1.07% | 1.01R | 25m | market | early-reversal | breakout | breakout | neutral | 68.42 | ↓274.32 | 0.8829 | 2.42 | **LOSS** |
| 16 | COIN | 12-09 15:00 | 12-09 16:45 | 276.97 | 283.02 | 50 | 13848.5 | +302.5 | +2.18% | 1.39R | 105m | market | timeout | trend | breakout | neutral | 60.48 | ↑272.61 | 0.279 | 1.18 | **WIN** |
| 17 | COIN | 12-12 14:30 | 12-12 15:05 | 274.83 | 272.83 | 50 | 13741.5 | -100 | -0.73% | 0.7R | 35m | market | early-reversal | breakout | breakout | neutral | 73.03 | ↓273.68 | 1.3234 | 1.92 | **LOSS** |
| 18 | COIN | 12-17 14:30 | 12-17 15:35 | 256.49 | 255.78 | 54 | 13850.46 | -38.34 | -0.28% | 0.33R | 65m | market | stagnation | breakout | breakout | neutral | 82.4 | ↓256.58 | 0.7197 | 1.9 | **LOSS** |
| 19 | COIN | 01-02 14:50 | 01-02 15:20 | 229.93 | 228.62 | 60 | 13795.8 | -78.6 | -0.57% | 0.48R | 30m | market | early-reversal | breakout | breakout | neutral | 73.04 | ↓228.09 | 0.0206 | 1.68 | **LOSS** |
| 20 | COIN | 02-13 15:15 | 02-13 15:50 | 159.53 | 163.29 | 48 | 7657.44 | +180.48 | +2.36% | 1.18R | 35m | market | profit-target | breakout | trend | noisyHighBeta | 63.47 | ↑152.15 | 3.7261 | 1.04 | **WIN** |
| 21 | COIN | 03-02 15:15 | 03-02 15:55 | 184.33 | 182.92 | 41 | 7557.53 | -57.81 | -0.76% | 0.38R | 40m | market | early-reversal | breakout | trend | noisyHighBeta | 68.78 | ↑180.99 | 2.3531 | 2.13 | **LOSS** |
| 22 | COIN | 04-17 14:00 | 04-17 14:50 | 208.13 | 214.55 | 36 | 7492.68 | +231.12 | +3.08% | 1.54R | 50m | market | profit-target | trend | trend | noisyHighBeta | 75.27 | ↑206.17 | 2.6911 | 1.17 | **WIN** |

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

- ⚠️ **Profit factor 0.94 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.73R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T16:01:09.523Z*
