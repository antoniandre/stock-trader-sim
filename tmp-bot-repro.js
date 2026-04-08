const http = require('http')

const base = process.env.BASE_URL || 'http://127.0.0.1:3000'

function get(path) {
  return new Promise((resolve, reject) => {
    http.get(base + path, (res) => {
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => resolve({ status: res.statusCode, body: data }))
    }).on('error', reject)
  })
}

function post(path, obj) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(obj)
    const req = http.request(base + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = ''
      res.on('data', chunk => { body += chunk })
      res.on('end', () => resolve({ status: res.statusCode, body }))
    })
    req.on('error', reject)
    req.write(data)
    req.end()
  })
}

async function main() {
  const hist = await get('/api/stocks/AAPL/history?period=1D&timeframe=1Min')
  console.log('history', hist.status)
  const parsed = JSON.parse(hist.body)
  const rows = Array.isArray(parsed.data) ? parsed.data : parsed.data?.bars || parsed.bars || parsed.data || []
  const candles = rows
    .map(r => ({ close: Number(r.close), volume: Number(r.volume || 0), timestamp: r.timestamp || r.time || r.date }))
    .filter(r => Number.isFinite(r.close))
  const closes = candles.map(c => c.close)
  const volumes = candles.map(c => c.volume)

  const cases = [
    ['decision', '/api/bot/day-trading/decision', {
      symbol: 'AAPL',
      riskProfile: 'balanced',
      currentPrice: closes.at(-1),
      prices: closes,
      volumes,
      currentVolume: volumes.at(-1),
      spreadPct: 0.08,
      positionQty: 0,
      avgEntryPrice: 0
    }],
    ['backtest', '/api/bot/day-trading/backtest', { symbol: 'AAPL', riskProfile: 'balanced', candles }],
    ['evolve', '/api/bot/day-trading/evolve', { symbol: 'AAPL', riskProfile: 'balanced', candles }]
  ]

  for (const [name, path, payload] of cases) {
    const res = await post(path, payload)
    const body = JSON.parse(res.body)
    console.log('\n' + name, res.status)
    if (name === 'decision') {
      console.log(JSON.stringify({
        recommendation: body.decision?.recommendation || body.data?.decision?.recommendation,
        capturePath: body.capture?.path || body.data?.capture?.path
      }, null, 2))
      continue
    }
    console.log(res.body.slice(0, 1200))
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
