# Bot Trade Report — 489 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T06:47:20.927Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 11 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $8778.19 (+8.78%) over 489 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 489 |
| Win rate | 42.94% (210W / 279L) |
| Net P&L | $+8778.19 (+8.78%) |
| Gross profit | $33183.28 |
| Gross loss | $24405.09 |
| Profit factor | 1.36 |
| Avg win | $158.02 |
| Avg loss | $87.47 |
| Payoff ratio | 1.81:1 |
| Expectancy | $+17.95 / trade |
| Max drawdown | 2.48% |
| Sharpe ratio (ann.) | 2.68 |
| Trades / active day | 2.45 |
| Avg confidence | 98.51% |
| Avg trade duration | 59 min |
| Avg risk ratio | 0.88R |
| Starting equity | $100,000 |
| Ending equity | $108,778.19 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 270 | 43.33% | $+5158.78 | $19.11 |
| Mid  10:30–11:30 | 219 | 42.47% | $+3619.41 | $16.53 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 60 | 28 | 46.67% | $+3012.61 | $+50.21 | 1.78 | eligible |
| TSLA | 66 | 29 | 43.94% | $+1791.13 | $+27.14 | 1.54 | eligible |
| MRVL | 58 | 27 | 46.55% | $+917.82 | $+15.82 | 1.3 | eligible |
| GOOGL | 35 | 14 | 40% | $+523.02 | $+14.94 | 1.37 | eligible |
| NVDA | 41 | 16 | 39.02% | $+482.44 | $+11.77 | 1.26 | throttle |
| GS | 31 | 15 | 48.39% | $+432.99 | $+13.97 | 1.45 | eligible |
| BA | 39 | 17 | 43.59% | $+415.82 | $+10.66 | 1.24 | eligible |
| SHOP | 39 | 14 | 35.9% | $+406.82 | $+10.43 | 1.2 | throttle |
| NET | 50 | 20 | 40% | $+400.16 | $+8 | 1.14 | eligible |
| UNH | 34 | 14 | 41.18% | $+274.54 | $+8.07 | 1.18 | eligible |
| LLY | 36 | 16 | 44.44% | $+120.84 | $+3.36 | 1.07 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 343 | 142 | 41.4% | $+6192.14 | $+18.05 |
| trend | 146 | 68 | 46.58% | $+2586.05 | $+17.71 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 185 | 81 | 43.78% | $+4812.08 | $+26.01 |
| neutral | 210 | 90 | 42.86% | $+2004.15 | $+9.54 |
| extendedBreakout | 54 | 21 | 38.89% | $+1150.33 | $+21.3 |
| noisyHighBeta | 35 | 14 | 40% | $+457.09 | $+13.06 |
| thinChop | 3 | 2 | 66.67% | $+254.14 | $+84.71 |
| cleanTrend | 2 | 2 | 100% | $+100.4 | $+50.2 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 35 | 1.69 | $+35.88 | 25 | 1.86 | $+70.27 | 1.15% | 1.62 | promote |
| Symbol | TSLA | 38 | 1.92 | $+37.26 | 28 | 1.21 | $+13.4 | 0.55% | 1 | watch |
| Setup | trend | 96 | 1.62 | $+20.65 | 50 | 1.31 | $+12.08 | 1.02% | 0.98 | watch |
| Time slot | Mid 10:30-11:30 | 65 | 2.09 | $+33.43 | 154 | 1.16 | $+9.39 | 1.74% | 0.94 | watch |
| Symbol | GOOGL | 22 | 1.43 | $+18.31 | 13 | 1.26 | $+9.25 | 0.42% | 0.9 | watch |
| Behavior | falseBreakoutProne | 155 | 1.63 | $+29.52 | 30 | 1.12 | $+7.87 | 0.92% | 0.92 | watch |
| Setup | breakout | 197 | 1.59 | $+28.57 | 146 | 1.06 | $+3.86 | 2.03% | 0.87 | watch |
| Symbol | GS | 16 | 1.75 | $+23.71 | 15 | 1.12 | $+3.57 | 0.34% | 0.75 | watch |
| Symbol | NET | 30 | 1.3 | $+15.94 | 20 | 0.94 | $-3.91 | 0.77% | 0.77 | watch |
| Symbol | UNH | 20 | 1.37 | $+17.87 | 14 | 0.86 | $-5.92 | 0.33% | 0.62 | watch |
| Time slot | Open 9:30-10:30 | 228 | 1.51 | $+23.85 | 42 | 0.9 | $-6.65 | 1.16% | 0.72 | watch |
| Behavior | neutral | 112 | 1.68 | $+24.34 | 98 | 0.86 | $-7.37 | 1.7% | 0.67 | watch |
| Symbol | MRVL | 36 | 1.68 | $+31.72 | 22 | 0.84 | $-10.19 | 0.41% | 0.66 | watch |
| Symbol | SHOP | 26 | 1.68 | $+24.06 | 13 | 0.8 | $-16.83 | 0.84% | 0.68 | watch |
| Symbol | LLY | 22 | 1.55 | $+21.69 | 14 | 0.57 | $-25.46 | 0.36% | 0.44 | watch |
| Symbol | BA | 25 | 2.03 | $+33.82 | 14 | 0.52 | $-30.7 | 0.64% | 0.39 | watch |
| Behavior | extendedBreakout | 16 | 1.21 | $+12.59 | 38 | 1.47 | $+24.97 | 0.58% | 1.18 | reject |
| Behavior | noisyHighBeta | 5 | 0.48 | $-49.45 | 30 | 1.3 | $+23.48 | 0.83% | 1.11 | reject |
| Symbol | NVDA | 23 | 1.22 | $+10.05 | 18 | 1.3 | $+13.97 | 0.41% | 1.01 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+7467 | 1.3 |
| +3 bps/side | $+4844.4 | 1.18 |
| +5 bps/side | $+2221.92 | 1.08 |
| +10 bps/side | $-4334.31 | 0.87 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 175 |
| timeout | 142 |
| stagnation | 54 |
| profit-target | 32 |
| stop-loss | 30 |
| breakeven-stop | 22 |
| trailing-stop | 19 |
| trim-profit-target | 15 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 3 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 4 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 5 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 6 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 7 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 8 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 9 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 10 | UNH | 05-05 14:00 | 05-05 15:45 | 403.9 | 406.51 | 34 | 13732.6 | +88.74 | +0.65% | 0.86R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 11 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 146 | 13964.9 | -90.52 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 12 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 13 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 73 | 13944.46 | +215.35 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 14 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 15 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 16 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 72 | 14002.56 | -77.76 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 17 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 18 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 19 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 121 | 12911.91 | +183.92 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 20 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 69 | 13960.08 | +78.66 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 21 | NET | 05-13 13:35 | 05-13 15:20 | 145.85 | 147.81 | 95 | 13855.75 | +186.2 | +1.34% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 22 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 23 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 24 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 25 | LLY | 05-14 13:30 | 05-14 13:50 | 756.77 | 749.68 | 18 | 13621.86 | -127.62 | -0.94% | 1.34R | 20m | market | stop-loss | trend | breakout | falseBreakoutProne | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 26 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 27 | NET | 05-14 13:35 | 05-14 13:45 | 153.78 | 152.05 | 91 | 13993.98 | -157.43 | -1.12% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 28 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 29 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 30 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 31 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 649 | 13953.5 | +38.94 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 32 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 124 | 13910.32 | -73.16 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 33 | NET | 05-16 13:35 | 05-16 15:20 | 155.17 | 156.49 | 90 | 13965.3 | +118.8 | +0.85% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 34 | LLY | 05-16 13:35 | 05-16 15:20 | 744.36 | 748.04 | 18 | 13398.48 | +66.24 | +0.49% | 0.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 35 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 36 | UNH | 05-19 15:25 | 05-19 16:55 | 308.12 | 313.87 | 22 | 13865.4 | +126.5 | +1.87% | 1.42R | 90m | market | trim-profit-target | breakout | trend | thinChop | 75.83 | ↑303.04 | 2.7425 | 1 | **WIN** |
| 37 | UNH | 05-19 15:25 | 05-19 17:05 | 308.12 | 315.49 | 23 | 13865.4 | +169.51 | +2.39% | 1.81R | 100m | market | profit-target | breakout | trend | thinChop | 75.83 | ↑303.04 | 2.7425 | 1 | **WIN** |
| 38 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 77 | 12899.04 | +407.33 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 39 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 649 | 13966.48 | -38.94 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 40 | MRVL | 05-21 15:05 | 05-21 16:50 | 61.99 | 62.3 | 226 | 14009.74 | +70.06 | +0.5% | 0.6R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 41 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 42 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 43 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 44 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 45 | MRVL | 05-22 13:45 | 05-22 15:30 | 60.97 | 61.81 | 230 | 14023.1 | +193.2 | +1.38% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.83 | ↑60.51 | -0.0945 | 2.81 | **WIN** |
| 46 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 47 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 48 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 49 | LLY | 05-27 14:00 | 05-27 14:20 | 723.09 | 718.62 | 19 | 13738.71 | -84.93 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 50 | UNH | 05-28 13:30 | 05-28 15:15 | 297.36 | 300.96 | 47 | 13975.92 | +169.2 | +1.21% | 1.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 51 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 215 | 14045.95 | -30.1 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 52 | UNH | 05-29 13:35 | 05-29 14:15 | 301.96 | 299.83 | 46 | 13890.16 | -97.98 | -0.71% | 0.84R | 40m | market | early-reversal | trend | breakout | falseBreakoutProne | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 53 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 54 | UNH | 05-30 13:50 | 05-30 15:35 | 300.94 | 302.3 | 46 | 13843.24 | +62.56 | +0.45% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 55 | LLY | 05-30 14:00 | 05-30 15:45 | 731.55 | 735.71 | 19 | 13899.45 | +79.04 | +0.57% | 0.79R | 105m | market | timeout | breakout | breakout | neutral | 73.04 | ↑723.06 | 1.4555 | 1.83 | **WIN** |
| 56 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 57 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 58 | UNH | 06-02 13:35 | 06-02 13:55 | 312.06 | 306.66 | 41 | 12794.46 | -221.4 | -1.73% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.75 | ↓309.2 | 1.2285 | 6.95 | **LOSS** |
| 59 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 60 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 699 | 13952.04 | +202.71 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 61 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.11 | 62.86 | 222 | 14010.42 | -55.5 | -0.4% | 0.38R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 62 | UNH | 06-04 13:30 | 06-04 13:55 | 305.69 | 303.54 | 45 | 13756.05 | -96.75 | -0.7% | 1R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 63 | LLY | 06-04 13:30 | 06-04 15:15 | 763.28 | 766.14 | 18 | 13739.04 | +51.48 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.16 | ↓760.92 | 1.0651 | 1.86 | **WIN** |
| 64 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.98 | 64.75 | 109 | 14011.62 | +83.93 | +1.2% | 0.91R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 65 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.98 | 65.48 | 110 | 14011.62 | +165 | +2.34% | 1.77R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 66 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 83 | 14137.39 | -58.93 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 67 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 68 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 69 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 70 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 71 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 72 | MRVL | 06-06 13:35 | 06-06 14:55 | 67.31 | 69.34 | 209 | 14067.79 | +424.27 | +3.02% | 1.61R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.61 | ↑66.9 | -0.03 | 1.73 | **WIN** |
| 73 | NET | 06-06 13:40 | 06-06 14:05 | 180.77 | 179.57 | 71 | 12834.67 | -85.2 | -0.66% | 0.48R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.41 | ↓178.82 | -0.3706 | 1.46 | **LOSS** |
| 74 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 75 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 681 | 13974.12 | +143.01 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 76 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 200 | 14140 | -116 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 77 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 97 | 14043.66 | -57.23 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 78 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 79 | TSLA | 06-10 13:35 | 06-10 14:40 | 313.47 | 313.35 | 44 | 13792.68 | -5.28 | -0.04% | 0.02R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.25 | ↓313.22 | 3.6775 | 1.35 | **LOSS** |
| 80 | LLY | 06-10 13:40 | 06-10 15:30 | 786.05 | 794.64 | 17 | 13362.85 | +146.03 | +1.09% | 1.49R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 67.08 | ↑785.26 | 1.6434 | 1.19 | **WIN** |
| 81 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 82 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 122 | 13953.14 | +26.84 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 83 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.09 | 69.73 | 201 | 14088.09 | -72.36 | -0.51% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 84 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 97 | 14044.63 | -37.83 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 85 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 681 | 13994.55 | -156.63 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 86 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 87 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 130 | 14017.9 | +149.5 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 88 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 677 | 13973.28 | +94.78 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 89 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 199 | 14107.11 | -71.64 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 90 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 69 | 14060.82 | -55.89 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 91 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 616 | 12886.72 | -12.32 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 92 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.59 | 70.6 | 197 | 14103.23 | -195.03 | -1.38% | 1.21R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 93 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 94 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 661 | 13980.15 | +191.69 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 95 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 656 | 14005.6 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 96 | TSLA | 06-23 13:40 | 06-23 14:10 | 334.51 | 343.84 | 38 | 12711.38 | +354.54 | +2.79% | 1.68R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 86.87 | ↑333.01 | 1.9842 | 2.83 | **WIN** |
| 97 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 98 | TSLA | 06-23 14:20 | 06-23 16:05 | 350 | 354.81 | 39 | 13650 | +187.59 | +1.37% | 0.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.3 | ↑339.94 | 6.6463 | 2.31 | **WIN** |
| 99 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 100 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 101 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 646 | 14011.74 | +419.9 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 102 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 115 | 12982.35 | +215.05 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 103 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 104 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 105 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 106 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 107 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 609 | 14073.99 | -30.45 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 108 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 109 | UNH | 07-01 13:50 | 07-01 15:35 | 317.13 | 324.05 | 44 | 13953.72 | +304.48 | +2.18% | 2.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 110 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 620 | 14061.6 | +279 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 111 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 182 | 14059.5 | +242.06 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 112 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 121 | 14026.32 | -37.51 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 113 | BA | 07-02 15:10 | 07-02 16:55 | 212.2 | 212.61 | 66 | 14005.2 | +27.06 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 114 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 631 | 14115.47 | -31.55 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 115 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 65 | 13953.55 | +84.5 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 116 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 117 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 618 | 14108.94 | +346.08 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 118 | LLY | 07-08 13:45 | 07-08 15:30 | 784.33 | 787.74 | 17 | 13333.61 | +57.97 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↑779.99 | 2.7967 | 1.18 | **WIN** |
| 119 | LLY | 07-09 13:30 | 07-09 13:50 | 792.72 | 788.24 | 16 | 12683.52 | -71.68 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 120 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 121 | BA | 07-09 13:40 | 07-09 14:00 | 226.95 | 224.09 | 57 | 12936.15 | -163.02 | -1.26% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.05 | ↓225.45 | 1.42 | 2.98 | **LOSS** |
| 122 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 123 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 124 | BA | 07-14 13:35 | 07-14 13:55 | 230.81 | 228.84 | 60 | 13848.6 | -118.2 | -0.85% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 125 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 126 | NET | 07-15 13:50 | 07-15 14:15 | 184.46 | 183.52 | 76 | 14018.96 | -71.44 | -0.51% | 0.5R | 25m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 127 | TSLA | 07-16 13:30 | 07-16 15:15 | 314.7 | 319.47 | 40 | 12588 | +190.8 | +1.52% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 56.59 | ↑314.34 | -0.832 | 2.95 | **WIN** |
| 128 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 129 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 114 | 14028.84 | +221.16 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 130 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.2 | 72.83 | 97 | 14079 | +61.11 | +0.87% | 1.04R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 131 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.2 | 72.84 | 98 | 14079 | +62.72 | +0.89% | 1.06R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 132 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 603 | 14146.38 | -180.9 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 133 | TSLA | 07-18 13:45 | 07-18 14:35 | 326.13 | 325.92 | 42 | 13697.46 | -8.82 | -0.06% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.78 | ↓324.69 | 1.3279 | 2.69 | **LOSS** |
| 134 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 96 | 14102.51 | +101.76 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 135 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 97 | 14102.51 | +89.24 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 136 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 75 | 14088.75 | +72.75 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 137 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 138 | LLY | 07-22 13:35 | 07-22 15:20 | 771.67 | 774.27 | 18 | 13890.06 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.01 | ↑768.57 | 0.2771 | 2.44 | **WIN** |
| 139 | LLY | 07-23 14:25 | 07-23 16:10 | 786.32 | 795.24 | 17 | 13367.44 | +151.64 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 140 | UNH | 07-25 13:30 | 07-25 13:50 | 284.04 | 282.48 | 45 | 12781.8 | -70.2 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 141 | NET | 07-25 13:45 | 07-25 15:30 | 195.77 | 198.97 | 71 | 13899.67 | +227.2 | +1.63% | 2.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.11 | ↑195 | 0.6994 | 1.17 | **WIN** |
| 142 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 113 | 14075.28 | -14.69 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 143 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.06 | 321.32 | 22 | 13994.64 | +71.72 | +1.02% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 144 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.06 | 319.31 | 22 | 13994.64 | +27.5 | +0.39% | 0.48R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 145 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 671 | 14124.55 | -40.26 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 146 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 186 | 14150.88 | -91.14 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 147 | NET | 07-28 14:00 | 07-28 14:15 | 202.06 | 199.92 | 69 | 13942.14 | -147.66 | -1.06% | 1.34R | 15m | market | stop-loss | breakout | trend | neutral | 73.82 | ↓200.56 | 0.4546 | 1.01 | **LOSS** |
| 148 | NET | 07-28 15:10 | 07-28 15:30 | 201.87 | 200.46 | 69 | 13929.03 | -97.29 | -0.7% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 48.36 | ↓200.61 | 0.5308 | 1.07 | **LOSS** |
| 149 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 182 | 14068.6 | +3.64 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 150 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 180 | 14079.6 | -68.4 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 151 | NET | 07-31 13:40 | 07-31 15:25 | 205.7 | 208.05 | 68 | 13987.6 | +159.8 | +1.14% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 152 | LLY | 08-01 13:50 | 08-01 14:10 | 763.93 | 758.66 | 16 | 12222.88 | -84.32 | -0.69% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.51 | ↓758.94 | 2.1923 | 1.24 | **LOSS** |
| 153 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 67 | 13930.64 | -126.63 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 154 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 45 | 13950 | -47.7 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 155 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 156 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 157 | NET | 08-05 13:35 | 08-05 14:25 | 212.06 | 211.49 | 61 | 12935.66 | -34.77 | -0.27% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.74 | ↓209.85 | -0.0465 | 1.15 | **LOSS** |
| 158 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 698 | 14120.54 | -6.98 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 159 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 181 | 14085.42 | -103.17 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 160 | TSLA | 08-05 13:50 | 08-05 14:10 | 312.15 | 308.35 | 44 | 13734.6 | -167.2 | -1.22% | 1.12R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57 | ↓308.63 | 0.1486 | 1.47 | **LOSS** |
| 161 | UNH | 08-05 15:20 | 08-05 15:40 | 247.62 | 245.55 | 52 | 12876.24 | -107.64 | -0.84% | 0.77R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 162 | TSLA | 08-06 13:40 | 08-06 15:25 | 313.34 | 318.35 | 44 | 13786.96 | +220.44 | +1.6% | 1.84R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.52 | ↑310.84 | 0.5053 | 1.42 | **WIN** |
| 163 | TSLA | 08-08 13:35 | 08-08 15:20 | 328.48 | 333.38 | 42 | 13796.16 | +205.8 | +1.49% | 1.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.85 | ↑325.67 | 1.855 | 2.23 | **WIN** |
| 164 | LLY | 08-08 13:35 | 08-08 13:55 | 654.36 | 648.32 | 21 | 13741.56 | -126.84 | -0.92% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.7 | ↓652.1 | 2.3997 | 1.72 | **LOSS** |
| 165 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 166 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 93 | 14069.97 | -74.4 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 167 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 674 | 14113.56 | -94.36 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 168 | TSLA | 08-11 13:35 | 08-11 15:20 | 340.6 | 342.91 | 41 | 13964.6 | +94.71 | +0.68% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.84 | ↑339.05 | 2.1054 | 2.32 | **WIN** |
| 169 | TSLA | 08-11 15:25 | 08-11 17:05 | 344.19 | 343.75 | 40 | 13767.6 | -17.6 | -0.13% | 0.15R | 100m | market | stagnation | trend | trend | neutral | 66.87 | ↑341.07 | 2.7526 | 1 | **LOSS** |
| 170 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 171 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 61 | 13944.6 | +194.59 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 172 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 657 | 14105.79 | -65.7 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 173 | TSLA | 08-13 13:30 | 08-13 14:10 | 346.5 | 344.33 | 40 | 13860 | -86.8 | -0.63% | 0.78R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.88 | ↓344.47 | 1.1247 | 2.86 | **LOSS** |
| 174 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 59 | 13833.73 | -76.11 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 175 | LLY | 08-13 13:40 | 08-13 15:25 | 649.59 | 655.6 | 21 | 13641.39 | +126.21 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.81 | ↑648.65 | 1.0009 | 1.68 | **WIN** |
| 176 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 177 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 69 | 14091.87 | -66.93 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 178 | UNH | 08-15 13:35 | 08-15 13:45 | 300.14 | 298.95 | 46 | 13806.44 | -54.74 | -0.4% | 0.2R | 10m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.19 | ↓299.04 | 7.3176 | 6.17 | **LOSS** |
| 179 | LLY | 08-15 13:35 | 08-15 13:55 | 696.07 | 689.48 | 20 | 13921.4 | -131.8 | -0.95% | 1.36R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.05 | ↓693.66 | 2.9049 | 3.21 | **LOSS** |
| 180 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 181 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 182 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 183 | SHOP | 08-18 15:05 | 08-18 15:45 | 142.8 | 142.41 | 98 | 13994.4 | -38.22 | -0.27% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 67.34 | ↑141.46 | 0.2534 | 2.03 | **LOSS** |
| 184 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 185 | LLY | 08-21 13:40 | 08-21 14:00 | 715.64 | 711.32 | 19 | 13597.16 | -82.08 | -0.6% | 0.86R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.21 | ↓711.27 | 3.009 | 3.71 | **LOSS** |
| 186 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 587 | 14105.61 | +275.89 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 187 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 61 | 13967.17 | +123.22 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 188 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.89 | 335.04 | 43 | 14013.27 | +393.45 | +2.81% | 3.85R | 30m | market | profit-target | breakout | breakout | extendedBreakout | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 189 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 176 | 13055.68 | -29.92 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 190 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 191 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 61 | 14007.43 | +150.67 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 192 | NET | 08-27 13:40 | 08-27 15:25 | 201.39 | 204.97 | 69 | 13895.91 | +247.02 | +1.78% | 1.84R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 193 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 98 | 14071.82 | -95.06 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 194 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 195 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 196 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 586 | 14134.32 | +82.04 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 197 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.07 | 64.11 | 223 | 14064.61 | +231.92 | +1.65% | 1.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 198 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 37 | 12936.31 | -25.16 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 199 | NET | 09-05 13:30 | 09-05 13:50 | 213.18 | 211.91 | 61 | 13003.98 | -77.47 | -0.6% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 200 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 60 | 14097.6 | -51 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 201 | UNH | 09-05 13:45 | 09-05 14:10 | 314.49 | 313.08 | 44 | 13837.56 | -62.04 | -0.45% | 0.64R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.09 | ↓311.92 | 0.6952 | 2.55 | **LOSS** |
| 202 | MRVL | 09-08 13:35 | 09-08 15:20 | 64.18 | 64.98 | 220 | 14119.6 | +176 | +1.25% | 1.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.09 | ↑63.84 | 0.2539 | 1.42 | **WIN** |
| 203 | NET | 09-08 13:35 | 09-08 14:20 | 219.21 | 217.45 | 64 | 14029.44 | -112.64 | -0.8% | 1.03R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 204 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 205 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 206 | UNH | 09-09 15:25 | 09-09 17:10 | 340.22 | 345.98 | 41 | 13949.02 | +236.16 | +1.69% | 1.67R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.41 | ↑332.07 | 3.8569 | 1.78 | **WIN** |
| 207 | MRVL | 09-10 13:30 | 09-10 13:50 | 68.09 | 67.29 | 208 | 14162.72 | -166.4 | -1.17% | 1.41R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.39 | ↓68.12 | 0.1225 | 2.27 | **LOSS** |
| 208 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 571 | 14137.96 | -97.07 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 209 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 210 | TSLA | 09-10 14:45 | 09-10 16:30 | 353.36 | 354.25 | 39 | 13781.04 | +34.71 | +0.25% | 0.24R | 105m | market | timeout | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 211 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 212 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 31 | 14038.66 | +81.22 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 213 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 14038.66 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 214 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.27 | 361.17 | 19 | 13933.53 | +74.1 | +1.09% | 0.75R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 215 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.27 | 362.34 | 20 | 13933.53 | +101.4 | +1.42% | 0.98R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 216 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.02 | 145.53 | 96 | 14017.92 | -47.04 | -0.34% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 217 | TSLA | 09-12 13:35 | 09-12 14:10 | 377.06 | 386.54 | 37 | 13951.22 | +350.76 | +2.51% | 2.59R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.95 | ↑374.37 | 1.7703 | 2.98 | **WIN** |
| 218 | TSLA | 09-12 14:25 | 09-12 14:50 | 391.51 | 388.65 | 36 | 14094.36 | -102.96 | -0.73% | 0.38R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 95.83 | ↑383.83 | 6.2093 | 1.27 | **LOSS** |
| 219 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 220 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 573 | 14135.91 | +366.72 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 221 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 222 | GS | 09-15 14:40 | 09-15 15:45 | 789.64 | 783.06 | 17 | 13423.88 | -111.86 | -0.83% | 1.19R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 223 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 563 | 14187.6 | -45.04 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 224 | TSLA | 09-16 14:45 | 09-16 15:05 | 420.92 | 416.51 | 33 | 13890.36 | -145.53 | -1.05% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 225 | TSLA | 09-16 15:15 | 09-16 15:40 | 420.09 | 417.51 | 33 | 13862.97 | -85.14 | -0.61% | 0.55R | 25m | market | early-reversal | trend | trend | neutral | 58.69 | ↑416.21 | 2.128 | 2.31 | **LOSS** |
| 226 | LLY | 09-16 15:20 | 09-16 17:05 | 761.89 | 769.53 | 18 | 13714.02 | +137.52 | +1% | 1.41R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑753.77 | 2.3186 | 1.58 | **WIN** |
| 227 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.55 | 71.09 | 200 | 14110 | +108 | +0.77% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 228 | LLY | 09-17 14:40 | 09-17 15:05 | 775.4 | 772.1 | 18 | 13957.2 | -59.4 | -0.43% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 78.52 | ↑767.66 | 1.991 | 1.39 | **LOSS** |
| 229 | MRVL | 09-18 13:45 | 09-18 14:50 | 74.17 | 74.16 | 175 | 12979.75 | -1.75 | -0.01% | 0.01R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 77.79 | ↓73.84 | 0.5868 | 1.35 | **LOSS** |
| 230 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 33 | 14067.9 | -38.61 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 231 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 471 | 14172.39 | -273.18 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 232 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 479 | 14135.29 | +100.59 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 233 | BA | 09-23 13:40 | 09-23 15:25 | 215.85 | 216.21 | 65 | 14030.25 | +23.4 | +0.17% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.63 | ↓215.93 | 0.6238 | 2 | **WIN** |
| 234 | UNH | 09-23 14:20 | 09-23 14:40 | 349.28 | 347.3 | 40 | 13971.2 | -79.2 | -0.57% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 79.73 | ↓346.79 | 1.9194 | 1.23 | **LOSS** |
| 235 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 469 | 14140.35 | +220.43 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 236 | MRVL | 09-24 13:50 | 09-24 14:10 | 78.15 | 77.2 | 181 | 14145.15 | -171.95 | -1.22% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.89 | ↓77.53 | 0.8047 | 1.69 | **LOSS** |
| 237 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 238 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 425 | 14178 | -242.25 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 239 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.09 | 82.4 | 178 | 14078.02 | +589.18 | +4.19% | 3.35R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 240 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 241 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 17 | 13666.13 | -10.54 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 242 | BA | 09-26 13:40 | 09-26 14:55 | 220.43 | 220.15 | 63 | 13887.09 | -17.64 | -0.13% | 0.11R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.14 | ↓220.69 | 1.3581 | 2.08 | **LOSS** |
| 243 | NVDA | 09-29 13:40 | 09-29 14:15 | 183.65 | 182.71 | 76 | 13957.4 | -71.44 | -0.51% | 0.55R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.23 | ↓182.52 | 1.2549 | 3.87 | **LOSS** |
| 244 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 76 | 14043.28 | +136.04 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 245 | LLY | 10-01 13:35 | 10-01 15:05 | 784.09 | 806.34 | 17 | 13329.53 | +378.25 | +2.84% | 3.16R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 82.1 | ↑778.42 | 5.1507 | 1.73 | **WIN** |
| 246 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.83 | 455.56 | 15 | 13975.73 | +70.95 | +1.05% | 0.81R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 247 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.83 | 455.45 | 16 | 13975.73 | +73.92 | +1.02% | 0.78R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 248 | UNH | 10-03 13:35 | 10-03 15:20 | 358.27 | 362.16 | 39 | 13972.53 | +151.71 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.91 | ↓357.66 | 0.6295 | 1.36 | **WIN** |
| 249 | LLY | 10-03 14:15 | 10-03 15:15 | 831.8 | 838.82 | 8 | 13308.8 | +56.16 | +0.84% | 1.08R | 60m | market | trim-profit-target | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 250 | LLY | 10-03 14:15 | 10-03 16:00 | 831.8 | 837.33 | 8 | 13308.8 | +44.24 | +0.66% | 0.85R | 105m | market | timeout | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 251 | MRVL | 10-06 13:35 | 10-06 13:55 | 89.72 | 89.19 | 146 | 13099.12 | -77.38 | -0.59% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.1 | ↓89.51 | 0.6021 | 2.51 | **LOSS** |
| 252 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 17 | 13611.22 | -130.56 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 253 | BA | 10-06 14:10 | 10-06 15:55 | 218.45 | 220.93 | 64 | 13980.8 | +158.72 | +1.14% | 1.37R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 254 | BA | 10-07 13:30 | 10-07 14:10 | 222.3 | 221.15 | 63 | 14004.9 | -72.45 | -0.52% | 0.74R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.2 | ↓221.69 | 0.2238 | 2.95 | **LOSS** |
| 255 | INTC | 10-07 13:35 | 10-07 15:00 | 37.4 | 37.24 | 378 | 14137.2 | -60.48 | -0.43% | 0.52R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.26 | ↓37.08 | 0.0821 | 8.05 | **LOSS** |
| 256 | UNH | 10-07 15:00 | 10-07 15:20 | 363.24 | 361.85 | 38 | 13803.12 | -52.82 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑360.44 | 0.5464 | 1.97 | **LOSS** |
| 257 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 75 | 14091 | +8.25 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 258 | UNH | 10-08 13:35 | 10-08 13:55 | 368.07 | 368.18 | 38 | 13986.66 | +4.18 | +0.03% | 0.04R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.5 | ↓367.23 | 0.8676 | 1.74 | **WIN** |
| 259 | MRVL | 10-08 13:45 | 10-08 14:35 | 89.32 | 89.1 | 159 | 14201.88 | -34.98 | -0.25% | 0.23R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.79 | ↓88.74 | 0.4263 | 1.3 | **LOSS** |
| 260 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.54 | 165.84 | 84 | 13989.36 | -58.8 | -0.42% | 0.3R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 261 | UNH | 10-08 14:30 | 10-08 15:20 | 372.72 | 371.22 | 37 | 13790.64 | -55.5 | -0.4% | 0.33R | 50m | market | early-reversal | breakout | breakout | neutral | 77.45 | ↑369.53 | 1.7674 | 1.51 | **LOSS** |
| 262 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 72 | 14028.48 | -79.92 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 263 | MRVL | 10-10 13:35 | 10-10 13:45 | 94.29 | 92.69 | 138 | 13012.02 | -220.8 | -1.7% | 1.48R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.39 | ↓93.27 | 0.3144 | 2.49 | **LOSS** |
| 264 | NET | 10-10 13:35 | 10-10 14:00 | 225.19 | 222.26 | 62 | 13961.78 | -181.66 | -1.3% | 1.86R | 25m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.8 | ↓224.33 | 0.6668 | 1.39 | **LOSS** |
| 265 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 266 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 33 | 13974.84 | -8.91 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 267 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 268 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 74 | 14056.3 | -139.12 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 269 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 18 | 13981.32 | -126.72 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 270 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 157 | 14150.41 | -12.56 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 271 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 351 | 13039.65 | +319.41 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 272 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.84 | 87.95 | 159 | 14125.56 | -141.51 | -1% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 273 | SHOP | 10-20 13:30 | 10-20 15:15 | 160.67 | 164.65 | 81 | 13014.27 | +322.38 | +2.48% | 2.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.41 | ↑160.43 | 0.2516 | 2.86 | **WIN** |
| 274 | BA | 10-20 13:35 | 10-20 13:55 | 216.32 | 215.45 | 65 | 14060.8 | -56.55 | -0.4% | 0.56R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 66.64 | ↓216.26 | 0.2559 | 3.33 | **LOSS** |
| 275 | UNH | 10-20 13:35 | 10-20 13:55 | 361.86 | 360.35 | 38 | 13750.68 | -57.38 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.04 | ↓359.91 | 1.0435 | 2.12 | **LOSS** |
| 276 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 371 | 14190.75 | -163.24 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 277 | NET | 10-23 13:50 | 10-23 14:15 | 214.17 | 213.48 | 65 | 13921.05 | -44.85 | -0.32% | 0.46R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.94 | ↓213.08 | 1.2398 | 3.06 | **LOSS** |
| 278 | SHOP | 10-24 13:35 | 10-24 14:50 | 171.9 | 171.84 | 82 | 14095.8 | -4.92 | -0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.76 | ↓170.75 | 0.8118 | 2.67 | **LOSS** |
| 279 | LLY | 10-24 14:05 | 10-24 14:25 | 831.68 | 828.45 | 16 | 13306.88 | -51.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | trend | neutral | 73.64 | ↑823.63 | 1.3329 | 1.06 | **LOSS** |
| 280 | BA | 10-24 15:20 | 10-24 16:10 | 221.61 | 221.42 | 63 | 13961.43 | -11.97 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.98 | ↑220.23 | 0.7466 | 1.32 | **LOSS** |
| 281 | SHOP | 10-27 13:30 | 10-27 13:50 | 175.48 | 174.58 | 80 | 14038.4 | -72 | -0.51% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.99 | ↓175.63 | -0.1329 | 2.55 | **LOSS** |
| 282 | INTC | 10-27 13:35 | 10-27 15:10 | 39.87 | 39.87 | 327 | 13037.49 | +0 | +0% | 0R | 95m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 89.24 | ↓39.46 | 0.2454 | 4.34 | **WIN** |
| 283 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 284 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 285 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 160 | 14081.6 | +44.8 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 286 | NVDA | 10-28 13:30 | 10-28 13:50 | 195.36 | 193.04 | 71 | 13870.56 | -164.72 | -1.19% | 1.59R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 287 | SHOP | 10-28 15:15 | 10-28 15:40 | 177.45 | 176.92 | 79 | 14018.55 | -41.87 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | thinChop | 68.51 | ↑175.21 | 0.3323 | 1.33 | **LOSS** |
| 288 | SHOP | 10-29 15:20 | 10-29 16:15 | 181.55 | 181.42 | 77 | 13979.35 | -10.01 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 66.46 | ↑179.69 | 0.4205 | 1.41 | **LOSS** |
| 289 | NET | 10-30 14:00 | 10-30 14:30 | 229.43 | 228.31 | 61 | 13995.23 | -68.32 | -0.49% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 290 | NET | 10-30 15:20 | 10-30 15:40 | 230.99 | 229.88 | 60 | 13859.4 | -66.6 | -0.48% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 291 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 29 | 13005.34 | +237.51 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 292 | BA | 11-03 14:30 | 11-03 16:15 | 202.59 | 204.88 | 69 | 13978.71 | +158.01 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 293 | LLY | 11-03 14:30 | 11-03 15:20 | 879.13 | 875.99 | 14 | 12307.82 | -43.96 | -0.36% | 0.45R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 294 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 27 | 12787.2 | -104.49 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 295 | GS | 11-04 15:05 | 11-04 16:10 | 795.41 | 795.9 | 17 | 13521.97 | +8.33 | +0.06% | 0.07R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 296 | LLY | 11-04 15:25 | 11-04 15:40 | 913.18 | 897.83 | 14 | 12784.52 | -214.9 | -1.68% | 1.17R | 15m | market | stop-loss | breakout | breakout | neutral | 65.69 | ↓895.05 | 0.2443 | 1.78 | **LOSS** |
| 297 | LLY | 11-05 14:45 | 11-05 16:30 | 930.9 | 945.23 | 15 | 13963.5 | +214.95 | +1.54% | 1.56R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.32 | ↑923.66 | 6.6497 | 1.43 | **WIN** |
| 298 | MRVL | 11-06 14:30 | 11-06 14:55 | 96.54 | 95.41 | 135 | 13032.9 | -152.55 | -1.17% | 0.64R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.54 | ↓96.65 | -0.034 | 5.5 | **LOSS** |
| 299 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 373 | 14159.08 | -123.09 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 300 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 301 | TSLA | 11-10 14:40 | 11-10 16:25 | 438.3 | 446.85 | 32 | 14025.6 | +273.6 | +1.95% | 1.46R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.97 | ↑437.6 | 0.1736 | 1.3 | **WIN** |
| 302 | LLY | 11-10 15:00 | 11-10 15:30 | 979.06 | 970.38 | 14 | 13706.84 | -121.52 | -0.89% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 94.84 | ↑966.14 | 15.7637 | 1.73 | **LOSS** |
| 303 | NVDA | 11-10 15:20 | 11-10 15:50 | 196.54 | 195.27 | 71 | 13954.34 | -90.17 | -0.65% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 76.19 | ↓194.98 | 2.4553 | 1.11 | **LOSS** |
| 304 | UNH | 11-12 14:35 | 11-12 16:20 | 334.04 | 337.07 | 42 | 14029.68 | +127.26 | +0.91% | 1.28R | 105m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.36 | ↓330.78 | 1.3594 | 1.38 | **WIN** |
| 305 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 35 | 14003.85 | +333.55 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 306 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 34 | 14060.7 | +202.98 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 307 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 98 | 14045.36 | +148.96 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 308 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 405 | 14134.5 | +64.8 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 309 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 310 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 311 | MRVL | 11-20 15:00 | 11-20 15:50 | 84.14 | 83.99 | 168 | 14135.52 | -25.2 | -0.18% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 71.79 | ↑83.56 | 0.9253 | 1.17 | **LOSS** |
| 312 | GOOGL | 11-21 14:30 | 11-21 15:15 | 298.47 | 296.38 | 47 | 14028.09 | -98.23 | -0.7% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 69.25 | ↓298.19 | 1.0906 | 5.68 | **LOSS** |
| 313 | LLY | 11-21 14:45 | 11-21 15:05 | 1058.93 | 1047.41 | 13 | 13766.09 | -149.76 | -1.09% | 1.45R | 20m | market | stop-loss | breakout | breakout | neutral | 76.6 | ↓1049.14 | 1.5193 | 1.29 | **LOSS** |
| 314 | NET | 11-24 14:30 | 11-24 16:05 | 190.05 | 192.44 | 37 | 14063.7 | +88.43 | +1.26% | 1.21R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 315 | NET | 11-24 14:30 | 11-24 16:15 | 190.05 | 192.16 | 37 | 14063.7 | +78.07 | +1.11% | 1.07R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 316 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 34 | 14044.38 | +193.12 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 317 | UNH | 11-25 14:35 | 11-25 15:00 | 326.98 | 324.92 | 43 | 14060.14 | -88.58 | -0.63% | 0.72R | 25m | market | early-reversal | breakout | breakout | neutral | 75.97 | ↓324.84 | 0.2322 | 1.38 | **LOSS** |
| 318 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 387 | 14164.2 | -50.31 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 319 | UNH | 11-26 14:30 | 11-26 15:10 | 329.46 | 329.94 | 42 | 13837.32 | +20.16 | +0.15% | 0.21R | 40m | market | trailing-stop | trend | trend | neutral | 69.87 | ↓328.3 | 0.4355 | 2.26 | **WIN** |
| 320 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 33 | 14262.27 | -87.12 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 321 | MRVL | 12-01 14:30 | 12-01 15:20 | 90.37 | 90.17 | 144 | 13013.28 | -28.8 | -0.22% | 0.11R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 60.32 | ↓89.69 | 0.2308 | 4.83 | **LOSS** |
| 322 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.38 | 158.17 | 84 | 12967.92 | +318.36 | +2.45% | 2.13R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 323 | NVDA | 12-02 14:35 | 12-02 15:10 | 185.38 | 184.01 | 75 | 13903.5 | -102.75 | -0.74% | 0.76R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 324 | BA | 12-02 14:55 | 12-02 16:40 | 200.4 | 201.76 | 70 | 14028 | +95.2 | +0.68% | 0.36R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.88 | ↑197.67 | 2.7712 | 1.42 | **WIN** |
| 325 | UNH | 12-02 14:55 | 12-02 15:15 | 328.56 | 326.79 | 42 | 13799.52 | -74.34 | -0.54% | 0.77R | 20m | market | early-reversal | trend | breakout | neutral | 65 | ↑325.45 | -0.2713 | 1.35 | **LOSS** |
| 326 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.67 | 441.32 | 16 | 13941.44 | +90.4 | +1.3% | 1.63R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 327 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.67 | 439.66 | 16 | 13941.44 | +63.84 | +0.92% | 1.15R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 328 | GS | 12-03 15:00 | 12-03 16:45 | 823.94 | 829.67 | 17 | 14006.98 | +97.41 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 329 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 31 | 14057.26 | -97.96 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 330 | GOOGL | 12-05 14:30 | 12-05 15:20 | 321.93 | 321.76 | 43 | 13842.99 | -7.31 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓321.25 | 0.7143 | 2.86 | **LOSS** |
| 331 | BA | 12-08 14:30 | 12-08 16:15 | 204.17 | 205.29 | 69 | 14087.73 | +77.28 | +0.55% | 0.79R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 332 | NET | 12-08 14:35 | 12-08 15:10 | 204.85 | 204.96 | 68 | 13929.8 | +7.48 | +0.05% | 0.07R | 35m | market | breakeven-stop | breakout | breakout | extendedBreakout | 85.67 | ↓203.99 | 0.5174 | 1.26 | **WIN** |
| 333 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 32 | 14177.6 | +131.52 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 334 | LLY | 12-11 15:15 | 12-11 16:45 | 1018.85 | 1018.71 | 13 | 13245.05 | -1.82 | -0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 66.05 | ↑1003.93 | 2.527 | 2.23 | **LOSS** |
| 335 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 31 | 14037.42 | -15.81 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 336 | NVDA | 12-12 14:30 | 12-12 14:55 | 181.84 | 181.07 | 77 | 14001.68 | -59.29 | -0.42% | 0.58R | 25m | market | early-reversal | trend | trend | neutral | 64.86 | ↓181.77 | 0.2908 | 3.41 | **LOSS** |
| 337 | BA | 12-12 14:30 | 12-12 14:50 | 203.27 | 202.46 | 69 | 14025.63 | -55.89 | -0.4% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 338 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 354 | 14145.84 | -99.12 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 339 | UNH | 12-12 14:45 | 12-12 15:10 | 344.21 | 341.97 | 40 | 13768.4 | -89.6 | -0.65% | 0.8R | 25m | market | early-reversal | breakout | breakout | neutral | 84.95 | ↓341.93 | 0.9959 | 1.99 | **LOSS** |
| 340 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 341 | BA | 12-16 14:50 | 12-16 15:10 | 208.59 | 207.85 | 67 | 13975.53 | -49.58 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 342 | GS | 12-17 14:30 | 12-17 15:25 | 889.8 | 889.29 | 14 | 12457.2 | -7.14 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 343 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.28 | 85.01 | 152 | 13114.56 | -193.04 | -1.47% | 0.74R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 344 | SHOP | 12-17 14:55 | 12-17 15:45 | 169.06 | 168.37 | 83 | 14031.98 | -57.27 | -0.41% | 0.26R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.69 | ↓167.51 | 1.5636 | 2.72 | **LOSS** |
| 345 | BA | 12-19 14:35 | 12-19 16:20 | 212.44 | 214.69 | 66 | 14021.04 | +148.5 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.82 | ↑211.65 | 0.3886 | 1.35 | **WIN** |
| 346 | UNH | 12-19 14:35 | 12-19 15:30 | 331.83 | 331.7 | 42 | 13936.86 | -5.46 | -0.04% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 87.67 | ↑330.52 | 0.5487 | 1.56 | **LOSS** |
| 347 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 45 | 13736.25 | -20.25 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 348 | TSLA | 12-22 14:45 | 12-22 15:05 | 497.86 | 488.92 | 28 | 13940.08 | -250.32 | -1.8% | 1.54R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.32 | ↓494.62 | 3.1468 | 2.38 | **LOSS** |
| 349 | NET | 12-22 14:50 | 12-22 15:40 | 202.79 | 201.7 | 69 | 13992.51 | -75.21 | -0.54% | 0.51R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 85.33 | ↑199.7 | 0.8747 | 1.27 | **LOSS** |
| 350 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 163 | 14086.46 | +195.6 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 351 | BA | 12-30 14:35 | 12-30 14:55 | 221.52 | 220.05 | 63 | 13955.76 | -92.61 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.37 | ↓220.3 | 0.4956 | 4.46 | **LOSS** |
| 352 | UNH | 12-30 14:35 | 12-30 15:35 | 334.28 | 334.1 | 41 | 13705.48 | -7.38 | -0.05% | 0.07R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 83.38 | ↓332.02 | 0.4838 | 2.73 | **LOSS** |
| 353 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 379 | 14132.91 | +333.52 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 354 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 355 | INTC | 01-02 14:35 | 01-02 15:05 | 38.51 | 39.68 | 368 | 14171.68 | +430.56 | +3.04% | 2.13R | 30m | market | profit-target | breakout | trend | noisyHighBeta | 79.83 | ↑38.35 | 0.2605 | 1.48 | **WIN** |
| 356 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 43 | 13799.99 | -70.52 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 357 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.05 | 160.9 | 86 | 14022.3 | -184.9 | -1.32% | 1.89R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 358 | GS | 01-02 15:00 | 01-02 15:20 | 889.89 | 885.58 | 15 | 13348.35 | -64.65 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.71 | ↓885.26 | 1.3176 | 1.22 | **LOSS** |
| 359 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 31 | 13979.76 | +87.11 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 360 | GS | 01-05 14:35 | 01-05 16:20 | 939.12 | 951.91 | 13 | 12208.56 | +166.27 | +1.36% | 1.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.15 | ↑931.29 | 5.883 | 1.95 | **WIN** |
| 361 | BA | 01-05 14:35 | 01-05 15:20 | 229.92 | 228.42 | 61 | 14025.12 | -91.5 | -0.65% | 0.93R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 93.04 | ↓229.18 | 1.0395 | 2.27 | **LOSS** |
| 362 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 315 | 13129.2 | +702.45 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 363 | NET | 01-07 14:40 | 01-07 15:00 | 200.74 | 198.84 | 70 | 14051.8 | -133 | -0.95% | 1.07R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.26 | ↓200.35 | 1.0626 | 1.33 | **LOSS** |
| 364 | LLY | 01-07 14:40 | 01-07 15:15 | 1113.13 | 1105.02 | 11 | 12244.43 | -89.21 | -0.73% | 0.66R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 92.63 | ↑1093.85 | 8.6799 | 3.07 | **LOSS** |
| 365 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 335 | 14348.05 | +556.1 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 366 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 367 | SHOP | 01-13 14:30 | 01-13 14:50 | 169.47 | 168.06 | 83 | 14066.01 | -117.03 | -0.83% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 74.12 | ↓168.93 | 0.7858 | 1.09 | **LOSS** |
| 368 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 310 | 14408.8 | +24.8 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 369 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.34 | 441.77 | 32 | 14186.88 | -50.24 | -0.35% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 370 | BA | 01-15 14:30 | 01-15 16:15 | 245.06 | 247.46 | 57 | 13968.42 | +136.8 | +0.98% | 1.4R | 105m | market | timeout | trend | breakout | neutral | 78.39 | ↑244.84 | 0.3451 | 1.82 | **WIN** |
| 371 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 287 | 14404.53 | -381.71 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 372 | NVDA | 01-15 14:40 | 01-15 15:15 | 188.84 | 187.89 | 74 | 13974.16 | -70.3 | -0.5% | 0.53R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 373 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 172 | 14085.08 | +94.6 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 374 | GS | 01-15 15:05 | 01-15 16:50 | 957.78 | 969.06 | 14 | 13408.92 | +157.92 | +1.18% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 375 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 300 | 14355 | +408 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 376 | UNH | 01-21 14:30 | 01-21 16:15 | 342.7 | 346.55 | 40 | 13708 | +154 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 84.76 | ↑341.51 | 0.5588 | 1.35 | **WIN** |
| 377 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 256 | 13258.24 | +401.92 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 378 | LLY | 01-21 14:35 | 01-21 16:20 | 1058.24 | 1066.62 | 13 | 13757.12 | +108.94 | +0.79% | 1.04R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.7 | ↑1051.19 | 2.4185 | 2.97 | **WIN** |
| 379 | GS | 01-21 15:05 | 01-21 16:50 | 957.92 | 960.49 | 14 | 13410.88 | +35.98 | +0.27% | 0.36R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 380 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.15 | 332.51 | 41 | 13700.15 | -67.24 | -0.49% | 0.58R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 381 | BA | 01-22 14:30 | 01-22 14:55 | 252.76 | 251.71 | 55 | 13901.8 | -57.75 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 382 | NET | 01-23 14:40 | 01-23 16:25 | 175.04 | 176.12 | 80 | 14003.2 | +86.4 | +0.62% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 383 | GS | 01-26 14:40 | 01-26 15:00 | 933.11 | 929.91 | 15 | 13996.65 | -48 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 384 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 169 | 14067.56 | -47.32 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 385 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 73 | 13804.3 | +36.5 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 386 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 166 | 14114.98 | -202.52 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 387 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.13 | 140.55 | 90 | 12881.7 | -232.2 | -1.8% | 1.25R | 20m | market | early-reversal | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 388 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 33 | 14059.98 | +407.22 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 389 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 297 | 14466.87 | -56.43 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 390 | NET | 02-02 14:30 | 02-02 14:55 | 178.17 | 183.37 | 78 | 13897.26 | +405.6 | +2.92% | 3.01R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 391 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 40 | 13657.6 | -5.6 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 392 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 298 | 14453 | +196.68 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 393 | GS | 02-03 14:30 | 02-03 14:50 | 957.43 | 950.31 | 14 | 13404.02 | -99.68 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 394 | BA | 02-03 14:30 | 02-03 14:50 | 237.23 | 235.36 | 59 | 13996.57 | -110.33 | -0.79% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 395 | NET | 02-04 15:20 | 02-04 15:50 | 173.02 | 170.35 | 75 | 12976.5 | -200.25 | -1.54% | 0.77R | 30m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.08 | ↓170.88 | 1.0291 | 1.16 | **LOSS** |
| 396 | NET | 02-05 14:30 | 02-05 15:00 | 169.72 | 167.78 | 77 | 13068.44 | -149.38 | -1.14% | 0.84R | 30m | market | early-reversal | breakout | breakout | noisyHighBeta | 58.56 | ↓168.34 | 0.9704 | 1.61 | **LOSS** |
| 397 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 292 | 14483.2 | +370.84 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 398 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 399 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 400 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.06 | 405.87 | 35 | 14282.1 | -76.65 | -0.54% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 401 | UNH | 02-06 14:45 | 02-06 16:30 | 270.94 | 273.93 | 51 | 13817.94 | +152.49 | +1.1% | 1.1R | 105m | market | timeout | trend | trend | neutral | 67.37 | ↑270.95 | 0.7697 | 1.19 | **WIN** |
| 402 | TSLA | 02-06 15:25 | 02-06 16:15 | 410.25 | 409.83 | 34 | 13948.5 | -14.28 | -0.1% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 76.46 | ↑405.96 | 3.5207 | 1.2 | **LOSS** |
| 403 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 73 | 13837.88 | +158.41 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 404 | SHOP | 02-09 14:40 | 02-09 14:50 | 115.02 | 112.99 | 122 | 14032.44 | -247.66 | -1.76% | 1.38R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 92.62 | ↓113.54 | 0.6835 | 3.04 | **LOSS** |
| 405 | GS | 02-09 15:15 | 02-09 17:00 | 940 | 943.53 | 14 | 13160 | +49.42 | +0.38% | 0.45R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 406 | GS | 02-10 14:45 | 02-10 15:40 | 958.28 | 956.82 | 14 | 13415.92 | -20.44 | -0.15% | 0.21R | 55m | market | stagnation | breakout | breakout | neutral | 71.91 | ↑953.51 | 1.4363 | 2.25 | **LOSS** |
| 407 | NET | 02-10 14:55 | 02-10 15:45 | 179.6 | 179.39 | 78 | 14008.8 | -16.38 | -0.12% | 0.06R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 71.54 | ↑178.09 | 1.2492 | 2.38 | **LOSS** |
| 408 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 299 | 14552.33 | +2.99 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 409 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.06 | 428.37 | 32 | 13921.92 | -214.08 | -1.54% | 1.31R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 410 | TSLA | 02-12 14:30 | 02-12 14:50 | 433.09 | 430.17 | 32 | 13858.88 | -93.44 | -0.67% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.11 | ↓432.47 | 1.3102 | 2.03 | **LOSS** |
| 411 | LLY | 02-12 15:15 | 02-12 15:55 | 1033.38 | 1028.41 | 13 | 13433.94 | -64.61 | -0.48% | 0.36R | 40m | market | early-reversal | breakout | breakout | neutral | 69.68 | ↑1022.5 | 1.332 | 1.18 | **LOSS** |
| 412 | NET | 02-13 14:40 | 02-13 15:35 | 188.6 | 187.95 | 74 | 13956.4 | -48.1 | -0.34% | 0.2R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 65.65 | ↓187.11 | 0.893 | 1.58 | **LOSS** |
| 413 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 309 | 14556.99 | -9.27 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 414 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 314 | 14531.92 | -197.82 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 415 | GS | 02-17 14:45 | 02-17 15:05 | 919.18 | 910.96 | 15 | 13787.7 | -123.3 | -0.89% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 71.17 | ↓916.45 | 3.1737 | 1.17 | **LOSS** |
| 416 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 289 | 13455.84 | -320.79 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 417 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 418 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 419 | SHOP | 02-20 14:50 | 02-20 15:50 | 125.59 | 128.58 | 111 | 13940.49 | +331.89 | +2.38% | 1.52R | 60m | market | profit-target | breakout | breakout | noisyHighBeta | 72.03 | ↑124.33 | 0.4708 | 1.13 | **WIN** |
| 420 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 176 | 14083.52 | -31.68 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 421 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 422 | LLY | 02-23 14:35 | 02-23 16:20 | 1042.98 | 1052.96 | 13 | 13558.74 | +129.74 | +0.96% | 0.59R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 69.63 | ↑1041.63 | 5.1434 | 2.06 | **WIN** |
| 423 | BA | 02-24 14:40 | 02-24 15:30 | 233 | 233.16 | 60 | 13980 | +9.6 | +0.07% | 0.1R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 424 | NET | 02-24 14:40 | 02-24 15:00 | 164.48 | 162.68 | 78 | 12829.44 | -140.4 | -1.09% | 0.59R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 66.23 | ↓162.45 | 0.2588 | 1.35 | **LOSS** |
| 425 | TSLA | 02-24 15:20 | 02-24 15:55 | 405.93 | 404.56 | 35 | 14207.55 | -47.95 | -0.34% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 426 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 427 | MRVL | 02-25 14:30 | 02-25 16:00 | 79.33 | 79.23 | 177 | 14041.41 | -17.7 | -0.13% | 0.19R | 90m | market | trailing-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **LOSS** |
| 428 | UNH | 02-25 14:35 | 02-25 16:20 | 279.32 | 280.45 | 50 | 13966 | +56.5 | +0.4% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 86.81 | ↓278.58 | 0.5161 | 1.63 | **WIN** |
| 429 | UNH | 02-26 14:50 | 02-26 15:10 | 295.21 | 291.72 | 43 | 12694.03 | -150.07 | -1.18% | 1.12R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.91 | ↑290.71 | 2.748 | 1.44 | **LOSS** |
| 430 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 315 | 14474.25 | -154.35 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 431 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.25 | 180.95 | 77 | 14033.25 | -100.1 | -0.71% | 0.87R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 432 | SHOP | 03-04 15:00 | 03-04 15:50 | 128.26 | 128.1 | 109 | 13980.34 | -17.44 | -0.12% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 90.65 | ↑125.83 | 1.5289 | 1.12 | **LOSS** |
| 433 | LLY | 03-09 14:50 | 03-09 15:40 | 999.54 | 994.18 | 14 | 13993.56 | -75.04 | -0.54% | 0.66R | 50m | market | early-reversal | trend | trend | neutral | 73.23 | ↑989.32 | 1.3228 | 1.87 | **LOSS** |
| 434 | MRVL | 03-09 15:25 | 03-09 17:10 | 88.6 | 89.93 | 159 | 14087.4 | +211.47 | +1.5% | 0.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.97 | ↑86.31 | 0.0387 | 1.81 | **WIN** |
| 435 | NET | 03-09 15:25 | 03-09 16:20 | 202.04 | 201.9 | 69 | 13940.76 | -9.66 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 436 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 309 | 14424.12 | -117.42 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 437 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.5 | 185.25 | 76 | 14022 | +57 | +0.41% | 0.44R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 438 | BA | 03-10 14:55 | 03-10 15:00 | 225.76 | 219.89 | 62 | 13997.12 | -363.94 | -2.6% | 3.66R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 439 | TSLA | 03-11 14:00 | 03-11 14:20 | 414.82 | 411.95 | 34 | 14103.88 | -97.58 | -0.69% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.49 | ↑410.35 | 2.9838 | 4.11 | **LOSS** |
| 440 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 441 | NVDA | 03-13 13:30 | 03-13 14:00 | 185.35 | 184.03 | 75 | 13901.25 | -99 | -0.71% | 1R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.44 | ↓185.35 | 0.1277 | 3.05 | **LOSS** |
| 442 | UNH | 03-16 14:00 | 03-16 14:30 | 286.07 | 284.76 | 49 | 14017.43 | -64.19 | -0.46% | 0.51R | 30m | market | early-reversal | trend | trend | neutral | 72.12 | ↑283.61 | 0.9389 | 1.06 | **LOSS** |
| 443 | GS | 03-17 13:35 | 03-17 13:55 | 818.04 | 815.02 | 15 | 12270.6 | -45.3 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.4 | ↑812.43 | 2.9774 | 1.98 | **LOSS** |
| 444 | SHOP | 03-17 13:45 | 03-17 14:10 | 132.19 | 131.15 | 98 | 12954.62 | -101.92 | -0.79% | 0.56R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.47 | ↓131.01 | 1.1137 | 1.75 | **LOSS** |
| 445 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 307 | 14422.86 | -386.82 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 446 | MRVL | 03-20 13:45 | 03-20 14:05 | 90.37 | 89.24 | 156 | 14097.72 | -176.28 | -1.25% | 0.97R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.94 | ↓89.71 | 0.4892 | 1.89 | **LOSS** |
| 447 | NET | 03-20 14:30 | 03-20 14:50 | 224.92 | 221.91 | 62 | 13945.04 | -186.62 | -1.34% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 448 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.33 | 383.91 | 37 | 14072.21 | +132.46 | +0.94% | 0.98R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 449 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 450 | UNH | 03-24 15:15 | 03-24 15:35 | 273.21 | 272.42 | 51 | 13933.71 | -40.29 | -0.29% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 73.36 | ↑271.06 | 0.6058 | 2.47 | **LOSS** |
| 451 | BA | 03-25 13:45 | 03-25 14:35 | 199.12 | 198.79 | 70 | 13938.4 | -23.1 | -0.17% | 0.24R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 72.04 | ↓198.84 | 0.6479 | 1.95 | **LOSS** |
| 452 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.16 | 112.53 | 124 | 14031.84 | -78.12 | -0.56% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 453 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 454 | GS | 03-31 13:45 | 03-31 14:35 | 821.73 | 819.24 | 17 | 13969.41 | -42.33 | -0.3% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.63 | ↓816.94 | 1.4478 | 1.73 | **LOSS** |
| 455 | NET | 03-31 13:45 | 03-31 14:35 | 197.95 | 197.56 | 70 | 13856.5 | -27.3 | -0.2% | 0.16R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.21 | ↓197.07 | 0.3216 | 1.51 | **LOSS** |
| 456 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 457 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 282 | 13222.98 | +315.84 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 458 | MRVL | 04-01 14:00 | 04-01 14:55 | 104.93 | 105.19 | 134 | 14060.62 | +34.84 | +0.25% | 0.13R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 77.49 | ↑103.56 | 1.3786 | 1.51 | **WIN** |
| 459 | LLY | 04-01 15:25 | 04-01 16:25 | 953.43 | 955.21 | 14 | 13348.02 | +24.92 | +0.19% | 0.26R | 60m | market | trailing-stop | breakout | breakout | extendedBreakout | 90.22 | ↑938.89 | 5.4355 | 6.88 | **WIN** |
| 460 | TSLA | 04-06 13:30 | 04-06 13:45 | 367.33 | 363.53 | 38 | 13958.54 | -144.4 | -1.03% | 1.3R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.54 | ↓365.47 | 0.6804 | 1.95 | **LOSS** |
| 461 | MRVL | 04-08 13:35 | 04-08 14:45 | 111.94 | 112.66 | 126 | 14104.44 | +90.72 | +0.64% | 0.35R | 70m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.99 | ↓111.73 | 0.3925 | 4.87 | **WIN** |
| 462 | LLY | 04-08 15:20 | 04-08 15:40 | 956.81 | 952.86 | 14 | 13395.34 | -55.3 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 74.62 | ↑944.38 | 6.8477 | 1.05 | **LOSS** |
| 463 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.72 | 119.61 | 117 | 14124.24 | -129.87 | -0.92% | 0.48R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |
| 464 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 465 | MRVL | 04-10 13:45 | 04-10 15:30 | 126.17 | 127.46 | 111 | 14004.87 | +143.19 | +1.02% | 0.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.87 | ↑126.09 | 1.7603 | 1.69 | **WIN** |
| 466 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 207 | 13291.47 | -97.29 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 467 | NET | 04-13 13:35 | 04-13 14:10 | 172.42 | 178.83 | 75 | 12931.5 | +480.75 | +3.72% | 2.09R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 76.42 | ↑171.24 | 0.1375 | 1.51 | **WIN** |
| 468 | SHOP | 04-13 13:45 | 04-13 15:30 | 113.39 | 114.23 | 123 | 13946.97 | +103.32 | +0.74% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.5 | ↑111.95 | 0.8024 | 1.39 | **WIN** |
| 469 | UNH | 04-13 13:50 | 04-13 14:10 | 307.76 | 306.13 | 45 | 13849.2 | -73.35 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.52 | ↑305.03 | 0.0804 | 1.18 | **LOSS** |
| 470 | LLY | 04-14 14:10 | 04-14 14:35 | 938.79 | 936.06 | 14 | 13143.06 | -38.22 | -0.29% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 73.77 | ↑935.36 | 1.9766 | 1.78 | **LOSS** |
| 471 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 472 | SHOP | 04-15 13:50 | 04-15 14:10 | 123.98 | 123.23 | 113 | 14009.74 | -84.75 | -0.6% | 0.43R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 90.89 | ↑122.32 | 1.2537 | 1.48 | **LOSS** |
| 473 | MRVL | 04-15 13:55 | 04-15 15:15 | 135.96 | 136.02 | 103 | 14003.88 | +6.18 | +0.04% | 0.02R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 57.11 | ↑134.35 | 0.2593 | 1.24 | **WIN** |
| 474 | NET | 04-15 14:10 | 04-15 15:55 | 188.47 | 189.35 | 74 | 13946.78 | +65.12 | +0.47% | 0.24R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 81.52 | ↑185.88 | 2.0169 | 1.43 | **WIN** |
| 475 | BA | 04-17 14:00 | 04-17 14:45 | 229.4 | 228.54 | 61 | 13993.4 | -52.46 | -0.37% | 0.25R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 84.93 | ↑226.9 | 2.7682 | 1.47 | **LOSS** |
| 476 | MRVL | 04-17 14:05 | 04-17 15:50 | 136.24 | 138.74 | 103 | 14032.72 | +257.5 | +1.83% | 1.03R | 105m | market | timeout | trend | trend | neutral | 64.97 | ↑134.55 | 0.362 | 1.89 | **WIN** |
| 477 | TSLA | 04-17 14:35 | 04-17 16:20 | 400.37 | 406.23 | 35 | 14012.95 | +205.1 | +1.46% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 56.16 | ↑395.57 | 2.1264 | 1.85 | **WIN** |
| 478 | MRVL | 04-21 13:30 | 04-21 14:35 | 150.91 | 152.22 | 87 | 13129.17 | +113.97 | +0.87% | 0.78R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 67.11 | ↓150.06 | 0.4257 | 1.87 | **WIN** |
| 479 | NET | 04-21 13:50 | 04-21 14:40 | 209.48 | 209.39 | 67 | 14035.16 | -6.03 | -0.04% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.97 | ↑207.07 | 0.9869 | 1.29 | **LOSS** |
| 480 | MRVL | 04-22 13:35 | 04-22 13:55 | 153.87 | 151.87 | 92 | 14156.04 | -184 | -1.3% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.53 | ↓153.6 | 0.4329 | 1.7 | **LOSS** |
| 481 | NET | 04-22 13:40 | 04-22 13:55 | 211.21 | 208.06 | 66 | 13939.86 | -207.9 | -1.49% | 1.39R | 15m | market | stop-loss | breakout | breakout | neutral | 66.61 | ↓209.29 | 0.1508 | 1.16 | **LOSS** |
| 482 | LLY | 04-22 13:45 | 04-22 14:45 | 919.43 | 917.79 | 15 | 13791.45 | -24.6 | -0.18% | 0.24R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.51 | ↑913.87 | 2.9214 | 1.57 | **LOSS** |
| 483 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.64 | 154.79 | 91 | 14072.24 | +13.65 | +0.1% | 0.05R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |
| 484 | MRVL | 04-23 13:50 | 04-23 14:10 | 163.77 | 161.48 | 86 | 14084.22 | -196.94 | -1.4% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.19 | ↓162.88 | 1.4196 | 1.13 | **LOSS** |
| 485 | GS | 04-23 14:20 | 04-23 15:35 | 941.87 | 941.09 | 14 | 13186.18 | -10.92 | -0.08% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 72.79 | ↑938.59 | 1.646 | 1.07 | **LOSS** |
| 486 | NET | 04-23 15:05 | 04-23 15:25 | 207.37 | 206.03 | 67 | 13893.79 | -89.78 | -0.65% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 74.31 | ↑202.52 | -0.3228 | 1.4 | **LOSS** |
| 487 | INTC | 04-23 15:10 | 04-23 15:35 | 67.84 | 67.57 | 212 | 14382.08 | -57.24 | -0.4% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.62 | ↑67.2 | 0.4745 | 1.34 | **LOSS** |
| 488 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.4 | 375 | 37 | 14074.8 | -199.8 | -1.42% | 1.37R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |
| 489 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |

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
| 10 | **Slippage model** | 0.03 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 1.36 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.88R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T06:47:20.927Z*
