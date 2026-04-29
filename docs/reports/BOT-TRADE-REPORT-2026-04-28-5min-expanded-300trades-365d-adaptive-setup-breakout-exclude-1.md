# Bot Trade Report — 49 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T12:55:23.202Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** expanded | **Symbols scanned:** 126 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** PLTR

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $800.17 (+0.8%) over 49 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 49 |
| Win rate | 34.69% (17W / 32L) |
| Net P&L | $+800.17 (+0.8%) |
| Gross profit | $2366.73 |
| Gross loss | $1566.56 |
| Profit factor | 1.51 |
| Avg win | $139.22 |
| Avg loss | $48.96 |
| Payoff ratio | 2.84:1 |
| Expectancy | $+16.33 / trade |
| Max drawdown | 0.61% |
| Sharpe ratio (ann.) | 2.63 |
| Trades / active day | 1.26 |
| Avg confidence | 96.45% |
| Avg trade duration | 45 min |
| Avg planned R:R | 2.66:1 |
| Avg risk ratio | 0.87R |
| Starting equity | $100,000 |
| Ending equity | $100,800.17 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+800.17 | PASS |
| Win rate | 45-60% | 34.69% | MISS |
| Profit factor | >= 1.3 | 1.51 | PASS |
| Sharpe (ann.) | > 1.5 | 2.63 | PASS |
| R:R | 2:1 - 3:1 | 2.66:1 planned | PASS |
| Max drawdown | < 10% | 0.61% | PASS |
| Expectancy | positive | $+16.33 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 17 | 23.53% | $-387.54 | $-22.8 |
| Mid  10:30–11:30 | 29 | 37.93% | $+1101.87 | $38 |
| Noon 11:30–13:00 | 1 | 100% | $+77.74 | $77.74 |
| PM   13:00–14:00 | 2 | 50% | $+8.1 | $4.05 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| PEP | 1 | 1 | 100% | $+293.04 | $+293.04 | ∞ | watch |
| NOW | 1 | 1 | 100% | $+284.54 | $+284.54 | ∞ | watch |
| GOOG | 1 | 1 | 100% | $+259.7 | $+259.7 | ∞ | watch |
| MU | 1 | 1 | 100% | $+259.4 | $+259.4 | ∞ | watch |
| AMD | 1 | 1 | 100% | $+236.9 | $+236.9 | ∞ | watch |
| TSLA | 1 | 1 | 100% | $+231.6 | $+231.6 | ∞ | watch |
| GOOGL | 2 | 2 | 100% | $+226.8 | $+113.4 | ∞ | watch |
| NVDA | 4 | 2 | 50% | $+92.06 | $+23.02 | 1.72 | eligible |
| META | 2 | 1 | 50% | $+85.26 | $+42.63 | 16.23 | watch |
| NKE | 1 | 1 | 100% | $+77.74 | $+77.74 | ∞ | watch |
| ARM | 1 | 1 | 100% | $+59.22 | $+59.22 | ∞ | watch |
| TEAM | 1 | 1 | 100% | $+32.24 | $+32.24 | ∞ | watch |
| DDOG | 1 | 1 | 100% | $+25.55 | $+25.55 | ∞ | watch |
| LLY | 1 | 1 | 100% | $+16.56 | $+16.56 | ∞ | watch |
| ETN | 1 | 0 | 0% | $-4.5 | $-4.5 | 0 | watch |
| SHOP | 1 | 0 | 0% | $-5.76 | $-5.76 | 0 | watch |
| RIVN | 1 | 0 | 0% | $-7.47 | $-7.47 | 0 | watch |
| BA | 1 | 0 | 0% | $-11.56 | $-11.56 | 0 | watch |
| ADBE | 1 | 0 | 0% | $-16.4 | $-16.4 | 0 | watch |
| COP | 1 | 0 | 0% | $-18.17 | $-18.17 | 0 | watch |
| URI | 1 | 0 | 0% | $-21.67 | $-21.67 | 0 | watch |
| MRVL | 1 | 0 | 0% | $-28.82 | $-28.82 | 0 | watch |
| PFE | 1 | 0 | 0% | $-30.4 | $-30.4 | 0 | watch |
| ORCL | 2 | 1 | 50% | $-34.2 | $-17.1 | 0.61 | watch |
| LOW | 1 | 0 | 0% | $-36.63 | $-36.63 | 0 | watch |
| V | 1 | 0 | 0% | $-38.44 | $-38.44 | 0 | watch |
| NFLX | 1 | 0 | 0% | $-42.68 | $-42.68 | 0 | watch |
| JPM | 1 | 0 | 0% | $-47.6 | $-47.6 | 0 | watch |
| NET | 1 | 0 | 0% | $-49.5 | $-49.5 | 0 | watch |
| CELH | 1 | 0 | 0% | $-49.78 | $-49.78 | 0 | watch |
| ANET | 2 | 0 | 0% | $-63.5 | $-31.75 | 0 | watch |
| XOM | 1 | 0 | 0% | $-64.26 | $-64.26 | 0 | watch |
| GE | 1 | 0 | 0% | $-64.75 | $-64.75 | 0 | watch |
| DELL | 2 | 0 | 0% | $-80.34 | $-40.17 | 0 | watch |
| TGT | 1 | 0 | 0% | $-82.82 | $-82.82 | 0 | watch |
| CAT | 1 | 0 | 0% | $-103.68 | $-103.68 | 0 | watch |
| ELF | 2 | 0 | 0% | $-107.58 | $-53.79 | 0 | watch |
| CVX | 1 | 0 | 0% | $-113.4 | $-113.4 | 0 | watch |
| PATH | 1 | 0 | 0% | $-114.96 | $-114.96 | 0 | watch |
| RBLX | 1 | 0 | 0% | $-141.57 | $-141.57 | 0 | watch |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| PLTR | excluded by CLI filter |
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 49 | 17 | 34.69% | $+800.17 | $+16.33 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 49 | 17 | 34.69% | $+800.17 | $+16.33 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 49 | 17 | 34.69% | $+800.17 | $+16.33 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 49 | 17 | 34.69% | $+800.17 | $+16.33 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 13 | 2.03 | $+24.45 | 16 | 2.65 | $+49 | 0.22% | 2.09 | promote |
| Behavior | neutral | 29 | 0.84 | $-5.47 | 20 | 2.72 | $+47.94 | 0.22% | 2.13 | reject |
| Trade state | neutral | 29 | 0.84 | $-5.47 | 20 | 2.72 | $+47.94 | 0.22% | 2.13 | reject |
| Regime | trend | 29 | 0.84 | $-5.47 | 20 | 2.72 | $+47.94 | 0.22% | 2.13 | reject |
| Setup | breakout | 29 | 0.84 | $-5.47 | 20 | 2.72 | $+47.94 | 0.22% | 2.13 | reject |
| Time slot | Open 9:30-10:30 | 13 | 0.18 | $-43.25 | 4 | 3.12 | $+43.68 | 0.06% | 2.33 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+703.09 | 1.43 |
| +3 bps/side | $+508.87 | 1.29 |
| +5 bps/side | $+314.62 | 1.17 |
| +10 bps/side | $-170.83 | 0.92 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 17 |
| timeout | 7 |
| stagnation | 7 |
| profit-target | 6 |
| trailing-stop | 5 |
| breakeven-stop | 4 |
| stop-loss | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | RBLX | 05-30 13:30 | 05-30 13:40 | 86.29 | 85.12 | 121 | 10441.09 | -141.57 | -1.36% | 1.92R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 69.23 | ↓85.97 | 0.1229 | 2.06 | **LOSS** |
| 2 | NVDA | 06-02 13:35 | 06-02 13:50 | 137.73 | 136.67 | 76 | 10467.48 | -80.56 | -0.77% | 0.69R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 3 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 14 | 9461.62 | +90.86 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 4 | CELH | 06-04 14:20 | 06-04 14:35 | 39.93 | 39.74 | 262 | 10461.66 | -49.78 | -0.48% | 0.34R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.46 | ↑39.65 | 0.2412 | 1.55 | **LOSS** |
| 5 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 6 | RIVN | 06-26 13:50 | 06-26 14:30 | 14.04 | 14.03 | 747 | 10487.88 | -7.47 | -0.07% | 0.06R | 40m | market | stagnation | trend | breakout | neutral | neutral | 66.4 | ↑13.92 | 0.0396 | 2.22 | **LOSS** |
| 7 | DELL | 07-02 14:45 | 07-02 15:15 | 123.64 | 123.32 | 84 | 10385.76 | -26.88 | -0.26% | 0.33R | 30m | market | stagnation | trend | breakout | neutral | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 8 | TEAM | 07-22 14:15 | 07-22 16:00 | 199.83 | 200.45 | 52 | 10391.16 | +32.24 | +0.31% | 0.22R | 105m | market | timeout | trend | breakout | neutral | neutral | 69.1 | ↑197.89 | 0.9238 | 2.13 | **WIN** |
| 9 | ANET | 08-12 13:40 | 08-12 13:55 | 140.49 | 139.76 | 74 | 10396.26 | -54.02 | -0.52% | 0.63R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.15 | ↓139.64 | 0.1268 | 1.35 | **LOSS** |
| 10 | PATH | 08-15 13:50 | 08-15 14:05 | 10.95 | 10.83 | 958 | 10490.1 | -114.96 | -1.1% | 1.34R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 66.67 | ↓10.87 | 0.0277 | 1.55 | **LOSS** |
| 11 | GOOGL | 08-22 17:15 | 08-22 19:00 | 206.5 | 206.99 | 50 | 10325 | +24.5 | +0.24% | 0.34R | 105m | market | timeout | trend | breakout | neutral | neutral | 76.9 | ↑203.92 | 0.2482 | 3.69 | **WIN** |
| 12 | ELF | 09-23 14:10 | 09-23 14:25 | 140.09 | 139.22 | 74 | 10366.66 | -64.38 | -0.62% | 0.68R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.08 | ↑138.71 | 0.4203 | 2.59 | **LOSS** |
| 13 | PFE | 10-03 14:15 | 10-03 14:45 | 27.59 | 27.51 | 380 | 10484.2 | -30.4 | -0.29% | 0.3R | 30m | market | stagnation | trend | breakout | neutral | neutral | 71.67 | ↑27.34 | 0.1147 | 1.99 | **LOSS** |
| 14 | ADBE | 10-06 17:30 | 10-06 18:05 | 353.58 | 352.76 | 20 | 7071.6 | -16.4 | -0.23% | 0.33R | 35m | market | breakeven-stop | trend | breakout | neutral | neutral | 74.46 | ↑346.99 | 1.1142 | 3 | **LOSS** |
| 15 | ORCL | 10-08 14:00 | 10-08 14:15 | 289.59 | 287.17 | 36 | 10425.24 | -87.12 | -0.84% | 0.75R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 16 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 14 | 10065.58 | -5.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 17 | NKE | 11-05 16:40 | 11-05 18:25 | 61.98 | 62.44 | 169 | 10474.62 | +77.74 | +0.74% | 0.91R | 105m | market | timeout | trend | breakout | neutral | neutral | 65.31 | ↑61.3 | 0.0208 | 5.12 | **WIN** |
| 18 | CAT | 11-06 14:30 | 11-06 14:45 | 580.25 | 573.77 | 16 | 9284 | -103.68 | -1.12% | 1.35R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.29 | ↓577.94 | 0.9796 | 3.6 | **LOSS** |
| 19 | GOOG | 11-19 14:30 | 11-19 14:55 | 293.36 | 300.78 | 35 | 10267.6 | +259.7 | +2.53% | 2.48R | 25m | market | profit-target | trend | breakout | neutral | neutral | 68.16 | ↑291.44 | 0.0107 | 3.44 | **WIN** |
| 20 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 72 | 10440 | -5.76 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 21 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 56 | 10332 | -47.04 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 22 | ETN | 12-08 14:45 | 12-08 15:55 | 342.04 | 341.89 | 30 | 10261.2 | -4.5 | -0.04% | 0.06R | 70m | market | breakeven-stop | trend | breakout | neutral | neutral | 79.51 | ↓339.74 | 0.5598 | 3.74 | **LOSS** |
| 23 | LLY | 12-18 14:30 | 12-18 14:50 | 1061.88 | 1063.72 | 9 | 9556.92 | +16.56 | +0.17% | 0.19R | 20m | market | trailing-stop | trend | breakout | neutral | neutral | 80.65 | ↓1054.96 | 0.8773 | 3.45 | **WIN** |
| 24 | GE | 12-18 14:40 | 12-18 15:05 | 299.65 | 297.8 | 35 | 10487.75 | -64.75 | -0.62% | 0.71R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 77.45 | ↓298.79 | 0.9954 | 2.73 | **LOSS** |
| 25 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 58 | 10342.56 | +59.16 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 26 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 46 | 9488.88 | +236.9 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 27 | ELF | 01-05 14:30 | 01-05 14:45 | 79.73 | 79.37 | 120 | 9567.6 | -43.2 | -0.45% | 0.51R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 73.71 | ↓79.45 | 0.2129 | 3.49 | **LOSS** |
| 28 | BA | 01-09 14:35 | 01-09 15:05 | 231.46 | 231.12 | 34 | 7869.64 | -11.56 | -0.15% | 0.21R | 30m | market | stagnation | trend | breakout | neutral | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 29 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 30 | ARM | 01-20 14:40 | 01-20 15:45 | 108.19 | 109.13 | 63 | 6815.97 | +59.22 | +0.87% | 0.8R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↑107.29 | 0.0129 | 5.86 | **WIN** |
| 31 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 32 | PEP | 02-03 14:30 | 02-03 15:20 | 158.17 | 162.61 | 66 | 10439.22 | +293.04 | +2.81% | 3.02R | 50m | market | profit-target | trend | breakout | neutral | neutral | 67.94 | ↑157.82 | 0.1478 | 4.67 | **WIN** |
| 33 | DELL | 02-04 14:30 | 02-04 14:55 | 119.17 | 118.51 | 81 | 9652.77 | -53.46 | -0.55% | 0.53R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 70.68 | ↓118.94 | 0.1636 | 3.47 | **LOSS** |
| 34 | LOW | 02-04 14:40 | 02-04 14:55 | 279.21 | 278.22 | 37 | 10330.77 | -36.63 | -0.35% | 0.47R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 78.29 | ↓278.01 | 0.8475 | 2.63 | **LOSS** |
| 35 | JPM | 02-17 14:45 | 02-17 15:00 | 307.63 | 306.23 | 34 | 10459.42 | -47.6 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 74.34 | ↓306.38 | 0.6901 | 3.81 | **LOSS** |
| 36 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 34 | 10485.6 | +202.3 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 37 | MRVL | 02-20 15:00 | 02-20 15:30 | 80.04 | 79.82 | 131 | 10485.24 | -28.82 | -0.27% | 0.2R | 30m | market | stagnation | trend | breakout | neutral | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 38 | TGT | 02-20 15:00 | 02-20 15:30 | 117.97 | 116.96 | 82 | 9673.54 | -82.82 | -0.86% | 0.8R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 72.15 | ↓116.75 | 0.2483 | 3.42 | **LOSS** |
| 39 | URI | 02-24 14:40 | 02-24 16:20 | 895.97 | 894 | 11 | 9855.67 | -21.67 | -0.22% | 0.31R | 100m | market | trailing-stop | trend | breakout | neutral | neutral | 73.38 | ↓893.71 | 1.7326 | 5.61 | **LOSS** |
| 40 | V | 02-25 14:30 | 02-25 14:45 | 312.08 | 310.84 | 31 | 9674.48 | -38.44 | -0.4% | 0.57R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 75.51 | ↓311.04 | 0.3432 | 2.71 | **LOSS** |
| 41 | ANET | 02-25 14:45 | 02-25 16:10 | 131.99 | 131.87 | 79 | 10427.21 | -9.48 | -0.09% | 0.09R | 85m | market | breakeven-stop | trend | breakout | neutral | neutral | 80 | ↓130.78 | 0.2819 | 2.95 | **LOSS** |
| 42 | NFLX | 03-04 14:30 | 03-04 14:45 | 98.9 | 98.46 | 97 | 9593.3 | -42.68 | -0.44% | 0.48R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 43 | NOW | 03-05 14:30 | 03-05 15:00 | 116.86 | 120.33 | 82 | 9582.52 | +284.54 | +2.97% | 2.86R | 30m | market | profit-target | trend | breakout | neutral | neutral | 70.88 | ↑116.07 | 0.0046 | 3.41 | **WIN** |
| 44 | CVX | 03-06 14:30 | 03-06 14:35 | 192.01 | 189.91 | 54 | 10368.54 | -113.4 | -1.09% | 1.4R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 72.74 | ↓191.59 | 0.4013 | 2.75 | **LOSS** |
| 45 | DDOG | 03-17 13:30 | 03-17 14:00 | 129.91 | 130.26 | 73 | 9483.43 | +25.55 | +0.27% | 0.26R | 30m | market | trailing-stop | trend | breakout | neutral | neutral | 70.93 | ↓128.94 | 0.3164 | 2.33 | **WIN** |
| 46 | XOM | 04-02 13:30 | 04-02 13:45 | 165.1 | 164.08 | 63 | 10401.3 | -64.26 | -0.62% | 0.53R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 69.84 | ↓164.59 | 0.4226 | 1.6 | **LOSS** |
| 47 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 24 | 8906.88 | +231.6 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |
| 48 | COP | 04-16 13:30 | 04-16 14:05 | 121.62 | 121.39 | 79 | 9607.98 | -18.17 | -0.19% | 0.24R | 35m | market | stagnation | trend | breakout | neutral | neutral | 71.45 | ↓120.99 | -0.0592 | 1.36 | **LOSS** |
| 49 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio** | Balanced stop 1.2%, target 2.4% — true 2R trade |
| 2 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 3 | **Market session gate** | New entries blocked outside 13:30–18:00 UTC — no extended-hours or late entries |
| 4 | **RSI > 80 hard block (trend)** | RSI > 80 on a trend setup = chasing overbought momentum; blocked (breakout exempt) |
| 5 | **Breakout quality threshold** | `breakoutThresholdAdj` +5 → breakout entry bar is 60 (raised from 50 to filter weak breakouts) |
| 6 | **Break-even stop** | Once position reaches 1R, exit on any return to entry — prevents winner turning loser |
| 7 | **Trailing stop** | 1% for trend, 1.2% for breakout — exits when price retraces from high-watermark |
| 8 | **Stagnation exit** | 25 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −30% of stop after 12 min — pre-stop cut for entries that go wrong immediately |
| 11 | **Rolling symbol throttle** | Pause symbol for 20 days after 4 consecutive bad trades |
| 12 | **Fake-breakout MACD gate** | Blocks: MACD line < 0.04 + VolR ≥ 3.5 + RSI > 66 — near-zero MACD on high-volume "breakout" = false momentum burst |
| 13 | **Double-breakout gate** | Blocks breakout setup when regime is already "breakout" — chasing an extended move; trend regime + breakout setup is profitable, breakout regime + breakout setup is not |
| 14 | **ATR expansion gate (breakout)** | Per-bar ATR must exceed 20-bar baseline by 5%+ — no expansion = false breakout risk |
| 15 | **Trend entry quality** | Trend threshold 75 (boost +20); trend position 80% of standard |
| 16 | **VWAP + ORB + TF15 scoring** | VWAP position, opening-range breakout, and 15-min HTF trend each score entry quality |
| 17 | **MACD histogram** | Bullish histogram: +7 entry; bearish: −7. Both line and histogram confirm: ±3 bonus |
| 18 | **SPY breadth + vol-regime** | SPY trend penalises individual stock risk; volatile ATR regime suppresses trend entries |
| 19 | **Slippage model** | 0.05 bps/side on every fill — realistic market-order cost |
| 20 | **Daily loss limit** | 5% account equity — session blocked after limit reached |

## Remaining Gaps Before Live Real-Money

- ✅ **Profit factor 1.51** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.87R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T12:55:23.202Z*
