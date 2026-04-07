import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DATA_DIR = path.resolve(__dirname, '../data')
const RUNS_PATH = path.join(DATA_DIR, 'strategy-runs.jsonl')

function round(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100
}

function createRunId(prefix = 'run') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function summarizeBacktest(backtest) {
  if (!backtest) return null
  return {
    totalReturnPct: round(backtest.totalReturnPct || 0),
    maxDrawdownPct: round(backtest.maxDrawdownPct || 0),
    tradeCount: Number(backtest.tradeCount || 0),
    closingTradeCount: Number(backtest.closingTradeCount || 0),
    winRatePct: round(backtest.winRatePct || 0),
    realizedPnL: round(backtest.realizedPnL || 0),
    endingEquity: round(backtest.endingEquity || 0),
    profitFactor: backtest.profitFactor === null || backtest.profitFactor === undefined
      ? null
      : round(backtest.profitFactor),
    expectancyPerTrade: round(backtest.expectancyPerTrade || 0)
  }
}

async function appendRecord(record) {
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.appendFile(RUNS_PATH, `${JSON.stringify(record)}\n`, 'utf8')
}

export async function recordStrategyRun(event) {
  const record = {
    id: event.id || createRunId(event.type || 'strategy-run'),
    type: event.type || 'strategy-run',
    recordedAt: new Date().toISOString(),
    symbol: event.symbol || null,
    riskProfile: event.riskProfile || null,
    source: event.source || 'api',
    cohort: Array.isArray(event.cohort) ? event.cohort : undefined,
    metrics: event.metrics || undefined,
    summary: summarizeBacktest(event.summary),
    details: event.details || undefined
  }

  await appendRecord(record)
  return { id: record.id, path: RUNS_PATH, recordedAt: record.recordedAt }
}
