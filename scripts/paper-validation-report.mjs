/**
 * Paper validation report.
 *
 * Builds a lightweight fill-quality report from recent Alpaca PAPER orders.
 * Use after supervised paper sessions to compare actual fills against the
 * latest available bar close around the fill time.
 *
 * Usage:
 *   node scripts/paper-validation-report.mjs
 *   node scripts/paper-validation-report.mjs 2026-04-25
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

for (const line of readFileSync(join(__dirname, '../api/.env'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const KEY = process.env.ALPACA_KEY
const SECRET = process.env.ALPACA_SECRET
const BROKER = process.env.ALPACA_BASE_URL || 'https://paper-api.alpaca.markets'
const DATA = process.env.ALPACA_API_BASE_URL || 'https://data.alpaca.markets'
const REPORT_DATE = process.argv[2] || new Date().toISOString().slice(0, 10)
const OUT_DIR = join(__dirname, '../docs/reports')

if (!KEY || !SECRET) {
  console.error('ALPACA_KEY and ALPACA_SECRET are required in api/.env')
  process.exit(1)
}

const headers = { 'APCA-API-KEY-ID': KEY, 'APCA-API-SECRET-KEY': SECRET }

function round2(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100
}

async function apiJson(url) {
  const res = await fetch(url, { headers })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`${res.status} ${url}: ${body.slice(0, 160)}`)
  }
  return res.json()
}

async function fetchFilledOrders() {
  const after = `${REPORT_DATE}T00:00:00Z`
  const until = `${REPORT_DATE}T23:59:59Z`
  const params = new URLSearchParams({
    status: 'closed',
    limit: '500',
    nested: 'false',
    after,
    until,
    direction: 'asc'
  })
  const orders = await apiJson(`${BROKER}/v2/orders?${params}`)
  return (Array.isArray(orders) ? orders : [])
    .filter(order => order.status === 'filled' && Number(order.filled_qty) > 0)
}

async function fetchNearestBarClose(symbol, timestamp) {
  const fillTime = new Date(timestamp)
  const start = new Date(fillTime.getTime() - 10 * 60_000).toISOString()
  const end = new Date(fillTime.getTime() + 5 * 60_000).toISOString()
  const params = new URLSearchParams({
    timeframe: '1Min',
    feed: 'iex',
    start,
    end,
    limit: '50',
    adjustment: 'raw'
  })
  const data = await apiJson(`${DATA}/v2/stocks/${symbol}/bars?${params}`)
  const bars = data.bars || []
  if (!bars.length) return null
  const fillMs = fillTime.getTime()
  const nearest = bars.reduce((best, bar) => {
    const delta = Math.abs(new Date(bar.t).getTime() - fillMs)
    return !best || delta < best.delta ? { bar, delta } : best
  }, null)
  return nearest?.bar?.c ? Number(nearest.bar.c) : null
}

async function main() {
  const orders = await fetchFilledOrders()
  const rows = []

  for (const order of orders) {
    const symbol = String(order.symbol || '').toUpperCase()
    const fillPrice = Number(order.filled_avg_price)
    const qty = Number(order.filled_qty)
    const filledAt = order.filled_at || order.updated_at || order.submitted_at
    const expectedClose = symbol && filledAt ? await fetchNearestBarClose(symbol, filledAt).catch(() => null) : null
    const slippagePct = expectedClose && fillPrice
      ? (order.side === 'buy'
          ? ((fillPrice - expectedClose) / expectedClose) * 100
          : ((expectedClose - fillPrice) / expectedClose) * 100)
      : null
    rows.push({
      id: order.id,
      symbol,
      side: order.side,
      qty,
      fillPrice,
      expectedClose,
      slippagePct,
      filledAt
    })
  }

  const validSlip = rows.map(row => row.slippagePct).filter(Number.isFinite)
  const avgSlip = validSlip.length ? round2(validSlip.reduce((sum, value) => sum + value, 0) / validSlip.length) : null
  const worstSlip = validSlip.length ? round2(Math.max(...validSlip)) : null

  let md = `# Paper Validation Report — ${REPORT_DATE}\n\n`
  md += `Educational reference only; not investment advice.\n\n`
  md += `| Metric | Value |\n|:--|--:|\n`
  md += `| Filled orders | ${rows.length} |\n`
  md += `| Avg slippage vs nearest 1m close | ${avgSlip == null ? 'n/a' : `${avgSlip}%`} |\n`
  md += `| Worst slippage vs nearest 1m close | ${worstSlip == null ? 'n/a' : `${worstSlip}%`} |\n\n`
  md += `## Fill Comparison\n\n`
  md += `| # | Symbol | Side | Qty | Fill | Nearest 1m Close | Slippage | Filled At |\n`
  md += `|--:|:--|:--|--:|--:|--:|--:|:--|\n`
  rows.forEach((row, idx) => {
    md += `| ${idx + 1} | ${row.symbol} | ${row.side} | ${row.qty} | ${round2(row.fillPrice)} | ${row.expectedClose == null ? 'n/a' : round2(row.expectedClose)} | ${row.slippagePct == null ? 'n/a' : `${round2(row.slippagePct)}%`} | ${row.filledAt || ''} |\n`
  })
  md += `\n## Go / No-Go Notes\n\n`
  md += `- Stay paper if sell/trim/exit orders are rejected, canceled, expired, or materially delayed.\n`
  md += `- Stay paper if average live-paper slippage turns a backtested PF above 1.5 into an adjusted PF below 1.5.\n`
  md += `- Real-money week-one size should remain capped by server-side live gates.\n`

  mkdirSync(OUT_DIR, { recursive: true })
  const outPath = join(OUT_DIR, `PAPER-VALIDATION-REPORT-${REPORT_DATE}.md`)
  writeFileSync(outPath, md)
  console.log(`Wrote ${outPath}`)
}

main().catch(err => {
  console.error(err.message)
  process.exit(1)
})
