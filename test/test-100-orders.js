// Test Script: Execute 100 buy + sell orders with risk management
// Tests 100 orders across 5 symbols to validate 3:1 worst-case / 4:1 best-case ratios

const { runDayTradingBacktest } = require('./api/day-trading-backtest');

const SYMBOLS = ['TSLA', 'AAPL', 'MSFT', 'NVDA', 'GOOGL'];
const CONFIGS = {
  conservative: { riskProfile: 'conservative', startingCapital: 10000 },
  balanced: { riskProfile: 'balanced', startingCapital: 10000 },
  aggressive: { riskProfile: 'aggressive', startingCapital: 10000 }
};

async function run100OrdersTest() {
  console.log('=' .repeat(60));
  console.log('TEST: 100 Buy + Sell Orders with Risk Management');
  console.log('=' .repeat(60));
  
  let allResults = [];
  
  for (const [profileName, config] of Object.entries(CONFIGS)) {
    console.log(`\n--- Testing Profile: ${profileName.toUpperCase()} ---`);
    const symbolResults = [];
    
    for (const symbol of SYMBOLS) {
      try {
        console.log(`  Running backtest for ${symbol}...`);
        const result = await runDayTradingBacktest({
          symbol,
          startingCapital: config.startingCapital,
          riskProfile: config.riskProfile,
          candles: generateCandles(20), // 20 candles per symbol for 100 total orders
          strategyParams: {}
        });
        symbolResults.push(result);
        console.log(`    ✓ ${result.summary}`);
      } catch (err) {
        console.log(`    ✗ ${symbol} failed: ${err.message}`);
        symbolResults.push({ symbol, error: err.message });
      }
    }
    
    allResults.push({ profile: profileName, results: symbolResults });
  }
  
  // Analyze results
  console.log('\n' + '=' .repeat(60));
  console.log('ANALYSIS: Risk Ratios & Order Statistics');
  console.log('=' .repeat(60));
  
  for (const profileResult of allResults) {
    console.log(`\nProfile: ${profileResult.profile.toUpperCase()}`);
    const { totalOrders, profitTrades, lossTrades, avgProfitLossRatio, validRiskTrades } = analyzeResults(profileResult.results);
    
    console.log(`  Total Orders: ${totalOrders}`);
    console.log(`  Successful Trades: ${profitTrades + lossTrades}`);
    console.log(`  Win Rate: ${((profitTrades / Math.max(1, profitTrades + lossTrades)) * 100).toFixed(1)}%`);
    console.log(`  Avg P/L Ratio: ${avgProfitLossRatio.toFixed(2)}:1`);
    console.log(`  Valid Risk Trades: ${validRiskTrades}`);
    
    // Check 3:1 worst-case requirement
    const worstCaseRatio = Math.min(...profileResult.results.map(r => r.riskRatio || 0).filter(r => r > 0));
    const bestCaseRatio = Math.max(...profileResult.results.map(r => r.riskRatio || 0).filter(r => r > 0));
    
    console.log(`  Worst-case Ratio: ${worstCaseRatio.toFixed(2)}:1 (min required: 3:1) ${worstCaseRatio >= 3 ? '✓ PASS' : '✗ FAIL'}`);
    console.log(`  Best-case Ratio: ${bestCaseRatio.toFixed(2)}:1 (min required: 4:1) ${bestCaseRatio >= 4 ? '✓ PASS' : '✗ FAIL'}`);
  }
}

function analyzeResults(results) {
  let totalOrders = 0;
  let profitTrades = 0;
  let lossTrades = 0;
  let totalRatio = 0;
  let ratioCount = 0;
  let validRiskTrades = 0;
  
  for (const result of results) {
    if (!result || result.error) continue;
    
    totalOrders += result.totalTrades || 0;
    profitTrades += result.profitTrades || 0;
    lossTrades += result.lossTrades || 0;
    
    if (result.riskRatio && result.riskRatio > 0) {
      totalRatio += result.riskRatio;
      ratioCount++;
      if (result.riskRatio >= 3) validRiskTrades++;
    }
  }
  
  return {
    totalOrders,
    profitTrades,
    lossTrades,
    avgProfitLossRatio: ratioCount > 0 ? (totalRatio / ratioCount) : 0,
    validRiskTrades
  };
}

function generateCandles(count) {
  // Generate realistic candle data for testing
  const candles = [];
  let price = 100;
  
  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.5) * 4; // -2% to +2% change
    price = Math.max(10, price + change);
    
    candles.push({
      t: Date.now() + (i * 60000),
      o: price,
      h: price + Math.random(),
      l: price - Math.random(),
      c: price + (Math.random() - 0.5),
      v: Math.floor(Math.random() * 1000)
    });
  }
  
  return candles;
}

// Run the test
run100OrdersTest().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});