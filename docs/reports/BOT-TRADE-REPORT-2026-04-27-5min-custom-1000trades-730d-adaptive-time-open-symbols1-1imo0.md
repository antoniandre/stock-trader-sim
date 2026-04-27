# Bot Trade Report — 15 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T10:58:45.687Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $457.46 (+0.46%) over 15 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 15 |
| Win rate | 40% (6W / 9L) |
| Net P&L | $+457.46 (+0.46%) |
| Gross profit | $939.93 |
| Gross loss | $482.47 |
| Profit factor | 1.95 |
| Avg win | $156.66 |
| Avg loss | $53.61 |
| Payoff ratio | 2.92:1 |
| Expectancy | $+30.5 / trade |
| Max drawdown | 0.23% |
| Sharpe ratio (ann.) | 3.76 |
| Trades / active day | 1.07 |
| Avg confidence | 97.47% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.56R |
| Starting equity | $100,000 |
| Ending equity | $100,457.46 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 15 | 40% | $+457.46 | $30.5 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SMCI | 15 | 6 | 40% | $+457.46 | $+30.5 | 1.95 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 4 | 36.36% | $+135.59 | $+12.33 |
| breakout | 4 | 2 | 50% | $+321.87 | $+80.47 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 11 | 5 | 45.45% | $+316.25 | $+28.75 |
| noisyHighBeta | 4 | 1 | 25% | $+141.21 | $+35.3 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 6 | 3.13 | $+62.32 | 5 | 0.7 | $-11.53 | 0.18% | 0.51 | watch |
| Symbol | SMCI | 9 | 3.47 | $+63.92 | 6 | 0.53 | $-19.64 | 0.24% | 0.39 | watch |
| Time slot | Open 9:30-10:30 | 9 | 3.47 | $+63.92 | 6 | 0.53 | $-19.64 | 0.24% | 0.39 | watch |
| Setup | trend | 5 | 2.44 | $+50.69 | 6 | 0.53 | $-19.64 | 0.24% | 0.39 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+424.27 | 1.84 |
| +3 bps/side | $+357.89 | 1.66 |
| +5 bps/side | $+291.53 | 1.5 |
| +10 bps/side | $+125.62 | 1.18 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 4 |
| trailing-stop | 3 |
| stagnation | 3 |
| profit-target | 2 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |
| timeout | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SMCI | 05-14 14:05 | 05-14 14:45 | 797.68 | 807.75 | 17 | 13560.56 | +171.19 | +1.26% | 0.82R | 40m | market | trailing-stop | trend | trend | neutral | 62.4 | ↑785.14 | 0.691 | 2.75 | **WIN** |
| 2 | SMCI | 05-15 14:15 | 05-15 15:15 | 858.38 | 890.73 | 8 | 6867.04 | +258.8 | +3.77% | 2.01R | 60m | market | profit-target | breakout | trend | noisyHighBeta | 71.96 | ↑850.75 | 9.5601 | 1.06 | **WIN** |
| 3 | SMCI | 06-10 14:20 | 06-10 15:55 | 785.32 | 788.16 | 17 | 13350.44 | +48.28 | +0.36% | 0.23R | 95m | market | trailing-stop | breakout | breakout | neutral | 61.14 | ↓771.25 | 1.937 | 1.16 | **WIN** |
| 4 | SMCI | 06-12 14:25 | 06-12 14:50 | 799.28 | 792.27 | 17 | 13587.76 | -119.17 | -0.88% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 76.96 | ↓793.66 | 4.9498 | 2.26 | **LOSS** |
| 5 | SMCI | 06-13 14:00 | 06-13 14:55 | 806.17 | 826.8 | 16 | 12898.72 | +330.08 | +2.56% | 1.28R | 55m | market | profit-target | breakout | breakout | neutral | 63.8 | ↑796.61 | 4.5052 | 2.43 | **WIN** |
| 6 | SMCI | 06-18 14:05 | 06-18 14:55 | 923.89 | 921.56 | 8 | 7391.12 | -18.64 | -0.25% | 0.13R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 56.64 | ↑908.44 | 0.1143 | 2.38 | **LOSS** |
| 7 | SMCI | 08-23 13:45 | 08-23 14:40 | 617.44 | 617 | 22 | 13583.68 | -9.68 | -0.07% | 0.07R | 55m | market | stagnation | breakout | breakout | neutral | 69.2 | ↓611.41 | 0.9213 | 1.2 | **LOSS** |
| 8 | SMCI | 09-27 13:35 | 09-27 14:10 | 412.73 | 411.22 | 31 | 12794.63 | -46.81 | -0.37% | 0.21R | 35m | market | trailing-stop | breakout | breakout | neutral | 64.33 | ↓407.63 | 2.7998 | 1.85 | **LOSS** |
| 9 | SMCI | 06-30 14:10 | 06-30 15:15 | 49.8 | 49.55 | 155 | 7719 | -38.75 | -0.5% | 0.25R | 65m | market | stagnation | trend | trend | noisyHighBeta | 74.94 | ↓49.18 | 0.5528 | 1.17 | **LOSS** |
| 10 | SMCI | 07-21 14:00 | 07-21 15:35 | 53.28 | 53.23 | 264 | 14065.92 | -13.2 | -0.09% | 0.05R | 95m | market | breakeven-stop | trend | trend | neutral | 76.45 | ↓52.93 | 0.378 | 1.02 | **LOSS** |
| 11 | SMCI | 08-18 14:20 | 08-18 15:15 | 45.86 | 46.37 | 153 | 14033.16 | +78.03 | +1.11% | 0.9R | 55m | market | trim-profit-target | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 12 | SMCI | 08-18 14:20 | 08-18 16:05 | 45.86 | 46.21 | 153 | 14033.16 | +53.55 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 13 | SMCI | 09-19 14:00 | 09-19 14:20 | 46.4 | 46.14 | 303 | 14059.2 | -78.78 | -0.56% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 63.33 | ↑46.1 | 0.1307 | 1.4 | **LOSS** |
| 14 | SMCI | 10-01 14:10 | 10-01 14:50 | 49.21 | 48.87 | 286 | 14074.06 | -97.24 | -0.69% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 72.28 | ↑48.62 | 0.4114 | 1.31 | **LOSS** |
| 15 | SMCI | 10-15 14:25 | 10-15 14:45 | 55.04 | 54.61 | 140 | 7705.6 | -60.2 | -0.78% | 0.42R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.54 | ↑54.52 | 0.1897 | 1.5 | **LOSS** |

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

- ✅ **Profit factor 1.95** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.56R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T10:58:45.687Z*
