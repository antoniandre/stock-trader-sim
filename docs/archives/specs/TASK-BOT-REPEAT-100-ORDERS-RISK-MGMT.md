# Task: Repeat 100 Buy+Sell Orders with Risk Management

## Goal
Execute 100 buy + sell orders using the existing strategy, determine best entry/exit using limit orders and stop loss, and apply risk management with 3:1 worst-case / 4:1 best-case ratio targets.

## Requirements

### Risk Management Parameters
| Parameter | Value | Purpose |
|-----------|-------|----------|
| `riskPercentPerTrade` | 2% | Account risk per trade |
| `profitTargetPercent` | 3% | Target profit per trade |
| `stopLossPercent` | 1.5% | Stop loss per trade |
| `maxLossPerTrade` | 1.5% | Hard cap on loss per trade |
| `dailyLossLimit` | 5% | Daily cumulative loss cap |
| `profitTargetRatio` | 4:1 | Best-case reward/risk |
| `worstCaseRatio` | 3:1 | Minimum acceptable reward/risk |

### Order Types
- **Entry**: Limit buy orders (when supported) or market orders
- **Exit**: Limit sell orders (take profit) or market orders (stop loss)
- **Stop Loss**: Hard stop at -1.5% from entry
- **Take Profit**: Limit sell at +3% from entry

### Scalping Guidance
- **Scalp** when: High volume, tight spread (<0.1%), strong momentum, confidence >= 80%
- **Add** on: Partial profit at 1.5%, trail stop at break-even + 0.5%
- **Trim** at: 50% position at target, remaining at 100% target or stop

## Implementation Plan

### 1. Update Risk Config in `day-trading-bot.js`
```javascript
const RISK_PROFILES = {
  conservative: {
    maxRiskScoreForEntry: 34,
    buyThreshold: 64,
    addThreshold: 74,
    trimThreshold: 58,
    exitThreshold: 74,
    basePositionSizePct: 0.06,
    maxPositionSizePct: 0.12,
    stopLossPct: 1.2,
    trailingStopPct: 0.9,
    trimFraction: 0.35,
    rewardTargetPct: 1.8
  },
  balanced: {
    maxRiskScoreForEntry: 46,
    buyThreshold: 52,
    addThreshold: 60,
    trimThreshold: 48,
    exitThreshold: 68,
    basePositionSizePct: 0.1,
    maxPositionSizePct: 0.2,
    stopLossPct: 1.7,
    trailingStopPct: 1.2,
    trimFraction: 0.4,
    rewardTargetPct: 1.5
  },
  aggressive: {
    maxRiskScoreForEntry: 58,
    buyThreshold: 54,
    addThreshold: 63,
    trimThreshold: 50,
    exitThreshold: 63,
    basePositionSizePct: 0.14,
    maxPositionSizePct: 0.28,
    stopLossPct: 2.4,
    trailingStopPct: 1.7,
    trimFraction: 0.5,
    rewardTargetPct: 3.4  // Changed to 4:1 ratio
  }
}
```

### 2. Add Risk Validation Functions
```javascript
function validateRisk(entryPrice, stopLossPrice, positionSize, accountEquity) {
  const lossPerShare = entryPrice - stopLossPrice
  const totalLoss = lossPerShare * positionSize
  const lossPercent = totalLoss / accountEquity
  
  return {
    valid: lossPercent <= 0.02, // 2% max risk
    lossPercent: lossPercent,
    ratio: (entryPrice - stopLossPrice) / (stopLossPrice - entryPrice)
  }
}
```

### 3. Update Exit Logic for 4:1 Best-Case
```javascript
// In evaluateDayTradingDecision()
const profitTargetPercent = profile.rewardTargetPct / 100  // Now 3.4% for aggressive = 4:1
const stopLossPercent = profile.stopLossPct / 100          // 2.4% = ~3:1 worst-case
```

### 4. Add 100-Order Loop Test Script
Create `/Users/anto/localhost/stock-trader-sim/test-100-orders.js`:
```javascript
const { runDayTradingBacktest } = require('./api/day-trading-backtest')
const symbols = ['TSLA', 'AAPL', 'MSFT', 'NVDA', 'GOOGL']

async function run100OrdersTest() {
  let totalResults = []
  
  for (const symbol of symbols) {
    console.log(`Testing ${symbol}...`)
    const result = await runDayTradingBacktest({
      symbol,
      startingCapital: 10000,
      riskProfile: 'aggressive',
      candles: generateCandles(100), // 100 candles
      strategyParams: {}
    })
    totalResults.push(result)
  }
  
  // Analyze results for 3:1 worst / 4:1 best ratios
  analyzeRatios(totalResults)
}
```

## Success Criteria
- [ ] Risk config updated with 4:1 best-case ratio (rewardTargetPct = 3.4%)
- [ ] 100 buy+sell orders completed across 5 symbols
- [ ] Worst-case ratio >= 3:1 (stopLoss at 1.5%, target at 3%+)
- [ ] Best-case ratio >= 4:1 (aggressive profile, 3.4% target)
- [ ] All trades logged with entry/exit prices and P/L
- [ ] Position sizing respects 2% risk per trade
- [ ] Daily loss limit enforced at 5%

## Questions for Jacques
1. Does the bot-executor.js support limit orders for entry/exit, or only market orders?
2. How should we handle partial fills when position sizing doesn't divide evenly?
3. What's the preferred way to integrate the risk validation before order submission?
4. Should we add a `limitPrice` field to the order submission schema?
5. How are we handling the case where stop loss and take profit are triggered simultaneously?