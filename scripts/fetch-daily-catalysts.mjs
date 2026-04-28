#!/usr/bin/env node
/**
 * Validated daily catalyst ingestion.
 *
 * Input paths:
 * - pipe JSON from an external/news agent or pass --from <file>
 * - pass --provider rss to fetch public news/filing sources and score catalyst headlines
 * - pass --provider openai to generate the JSON with OpenAI web search
 *
 * All paths validate the contract and write api/input/daily-catalysts/<NY-date>.json.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const outDir = path.join(repoRoot, 'api/input/daily-catalysts')
const promptPath = path.join(repoRoot, 'docs/catalyst-radar-bot.md')
const apiEnvPath = path.join(repoRoot, 'api/.env')
const DEFAULT_MAX_RSS_SYMBOLS = 150
const DEFAULT_MAX_RSS_ROWS = 25
const DEFAULT_RSS_CONCURRENCY = 5
const DEFAULT_LOOKBACK_DAYS = 3
const DEFAULT_MIN_RSS_SCORE = 7
const DEFAULT_FETCH_TIMEOUT_MS = 12000
const DEFAULT_FETCH_RETRIES = 2
const RETRYABLE_HTTP_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504])
const SEC_COMPANY_TICKERS_URL = 'https://www.sec.gov/files/company_tickers.json'
const TRUSTED_GOOGLE_SOURCES = [
  'Reuters',
  'CNBC',
  'MarketWatch',
  'Barron\'s',
  'Investor\'s Business Daily',
  'Benzinga',
  'The Wall Street Journal',
  'Financial Times',
  'Bloomberg'
]
const STRICT_TICKER_MATCH_SYMBOLS = new Set(['C', 'T', 'V', 'GE', 'DOW', 'MS', 'GS', 'BAC', 'JPM'])
const GENERIC_HEADLINE_REJECT = /top wall street analyst research calls|and more\b|investment story|valuation check|stock price prediction|what to expect|why .* stock is|why is .* stock|amid .* momentum|exploring analyst estimates|best .* stock to buy|announces participation at|investor conference|global .* conference|according to analysts|have analysts changed|what analysts think|slow growth stock/i
const requiredKeys = [
  'symbol',
  'catalyst',
  'catalyst_score',
  'premarket_direction_and_gap',
  'premarket_volume',
  'key_levels',
  'setup_potential',
  'priority',
  'confidence'
]

const catalystJsonSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    catalysts: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: Object.fromEntries(requiredKeys.map(key => [key, { type: 'string' }]))
      }
    }
  },
  required: ['catalysts']
}
catalystJsonSchema.properties.catalysts.items.required = requiredKeys

function argValue(name) {
  const idx = process.argv.indexOf(name)
  return idx >= 0 ? process.argv[idx + 1] : null
}

function marketDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date)
  const year = parts.find(part => part.type === 'year')?.value
  const month = parts.find(part => part.type === 'month')?.value
  const day = parts.find(part => part.type === 'day')?.value
  return `${year}-${month}-${day}`
}

function readStdin() {
  return new Promise(resolve => {
    let raw = ''
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', chunk => { raw += chunk })
    process.stdin.on('end', () => resolve(raw))
  })
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {}
  const env = {}
  const raw = fs.readFileSync(filePath, 'utf8')
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq <= 0) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    env[key] = value
  }
  return env
}

function readLocalEnv(name) {
  return process.env[name] || parseEnvFile(apiEnvPath)[name] || ''
}

function positiveInt(value, fallback) {
  const parsed = Number.parseInt(value || '', 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

function decodeEntityCodePoint(rawCode, radix = 10) {
  const codePoint = Number.parseInt(rawCode, radix)
  if (!Number.isFinite(codePoint) || codePoint <= 0) return ''
  try {
    return String.fromCodePoint(codePoint)
  }
  catch {
    return ''
  }
}

function decodeXml(value = '') {
  return String(value)
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replace(/&#(\d+);/g, (_, code) => decodeEntityCodePoint(code))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => decodeEntityCodePoint(code, 16))
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
}

function stripHtml(value = '') {
  return decodeXml(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function firstTagValue(xml, tagName) {
  const match = xml.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'))
  return match ? stripHtml(match[1]) : ''
}

function parseRssItems(xml) {
  const items = []
  const matches = String(xml).matchAll(/<item\b[\s\S]*?<\/item>/gi)
  for (const match of matches) {
    const itemXml = match[0]
    items.push({
      title: firstTagValue(itemXml, 'title'),
      link: firstTagValue(itemXml, 'link'),
      source: firstTagValue(itemXml, 'source'),
      pubDate: firstTagValue(itemXml, 'pubDate'),
      description: firstTagValue(itemXml, 'description')
    })
  }
  return items
}

function parseWatchlistFromPrompt(prompt) {
  const watchlistSection = prompt.match(/## Watchlist([\s\S]*?)(?:\n---|\n## |$)/i)?.[1] || ''
  return [...new Set((watchlistSection.match(/\b[A-Z][A-Z0-9.]{0,5}\b/g) || [])
    .filter(symbol => !['BMO', 'AMC'].includes(symbol))
    .map(symbol => symbol.trim().toUpperCase()))]
}

function scoreHeadline(text) {
  const lower = text.toLowerCase()
  const weights = [
    [/earnings|results|eps|revenue|guidance|outlook/, 4],
    [/upgrade|downgrade|initiates|initiated|price target|raises target|cuts target/, 4],
    [/fda|approval|approved|rejected|clinical|trial|phase [123]/, 6],
    [/merger|acquisition|acquire|takeover|buyout/, 7],
    [/\b8-k\b|investigation|probe|lawsuit|settlement/, 5],
    [/premarket|pre-market|before the bell|after hours|gap|surge|soar|jump|rally|plunge|sink|fall/, 3],
    [/contract|partnership|launch|unveils|shipments|deliveries/, 3],
    [/analyst/, 1],
    [/futures|vix|fed|fomc|cpi|ppi|jobs report|nfp|tariff|oil|gold|copper/, 2]
  ]
  return weights.reduce((score, [regex, weight]) => score + (regex.test(lower) ? weight : 0), 0)
}

function scoreSource(item) {
  const source = String(item.source || '').toLowerCase()
  if (item.sourceType === 'sec') return 2
  if (item.sourceType === 'yahoo') return 2
  if (item.sourceType === 'trusted-news') return 2
  if (TRUSTED_GOOGLE_SOURCES.some(name => source.includes(name.toLowerCase()))) return 2
  return 0
}

function scoreSecForm(form) {
  const normalized = String(form || '').toUpperCase()
  if (normalized === '8-K') return 7
  if (['S-1', 'S-3', '424B5'].includes(normalized)) return 6
  if (['SC 13D', 'SC 13G'].includes(normalized)) return 5
  if (['10-Q', '10-K'].includes(normalized)) return 2
  if (normalized === 'DEF 14A') return 2
  return 0
}

function inferDirection(text) {
  const lower = text.toLowerCase()
  const positive = /upgrade|raises target|beat|beats|surge|soar|jump|rally|approved|approval|acquisition|buyout|contract|partnership|record revenue|strong guidance/.test(lower)
  const negative = /downgrade|cuts target|miss|misses|plunge|sink|falls|lawsuit|probe|investigation|rejected|offering|bankruptcy|recall|weak guidance/.test(lower)
  if (positive && !negative) return 'Positive news impulse; confirm premarket gap/volume before entry'
  if (negative && !positive) return 'Negative news impulse; confirm premarket gap/volume before entry'
  return 'News catalyst detected; premarket direction/volume not fetched by RSS collector'
}

function classifyScore(score) {
  if (score >= 12) return { catalyst_score: 'Strong', priority: 'High', confidence: 'A' }
  if (score >= 7) return { catalyst_score: 'Moderate', priority: 'Medium', confidence: 'B' }
  return { catalyst_score: 'Weak', priority: 'Low', confidence: 'C' }
}

function cutoffDateKey(daysBack) {
  const date = new Date()
  date.setUTCDate(date.getUTCDate() - Math.max(1, daysBack))
  return date.toISOString().slice(0, 10)
}

function isRecentItem(item, cutoffMs) {
  if (!cutoffMs || !item.pubDate) return true
  const parsed = Date.parse(item.pubDate)
  return !Number.isFinite(parsed) || parsed >= cutoffMs
}

function trustedSourceQuery() {
  return TRUSTED_GOOGLE_SOURCES.map(source => `source:"${source}"`).join(' OR ')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function parseRetryAfterMs(value) {
  if (!value) return null
  const seconds = Number(value)
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000)
  const retryDate = Date.parse(value)
  return Number.isFinite(retryDate) ? Math.max(0, retryDate - Date.now()) : null
}

async function fetchWithRetry(url, {
  headers = {},
  timeoutMs = positiveInt(readLocalEnv('CATALYST_FETCH_TIMEOUT_MS'), DEFAULT_FETCH_TIMEOUT_MS),
  retries = positiveInt(readLocalEnv('CATALYST_FETCH_RETRIES'), DEFAULT_FETCH_RETRIES)
} = {}) {
  let lastError = null
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), timeoutMs)
    try {
      const response = await fetch(url, {
        headers,
        signal: controller.signal
      })
      clearTimeout(timeout)
      if (response.ok) return response

      lastError = new Error(`HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ''}`)
      const retryable = RETRYABLE_HTTP_STATUSES.has(response.status)
      if (!retryable || attempt === retries) break

      const retryAfterMs = parseRetryAfterMs(response.headers.get('retry-after'))
      const backoffMs = retryAfterMs ?? 500 * 2 ** attempt
      await sleep(Math.min(backoffMs, 10000))
    }
    catch (error) {
      clearTimeout(timeout)
      lastError = error
      if (attempt === retries) break
      await sleep(500 * 2 ** attempt)
    }
  }
  throw lastError || new Error('Request failed')
}

async function fetchXmlItems(url, { sourceType, fallbackSource }) {
  const response = await fetchWithRetry(url, {
    headers: {
      'User-Agent': 'stock-trader-sim-catalyst-fetcher/1.0'
    }
  })
  return parseRssItems(await response.text()).map(item => ({
    ...item,
    source: item.source || fallbackSource,
    sourceType
  }))
}

async function fetchGoogleNewsItemsForSymbol(symbol) {
  const query = `"${symbol}" stock (earnings OR upgrade OR downgrade OR "price target" OR FDA OR acquisition OR merger OR SEC OR "8-K" OR premarket OR guidance) when:2d`
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`
  return fetchXmlItems(url, { sourceType: 'google-news', fallbackSource: 'Google News' })
}

async function fetchTrustedNewsItemsForSymbol(symbol) {
  const query = `"${symbol}" stock (${trustedSourceQuery()}) (earnings OR upgrade OR downgrade OR "price target" OR FDA OR acquisition OR merger OR SEC OR "8-K" OR premarket OR guidance) when:2d`
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`
  return fetchXmlItems(url, { sourceType: 'trusted-news', fallbackSource: 'Google News' })
}

async function fetchYahooFinanceItemsForSymbol(symbol) {
  const url = `https://feeds.finance.yahoo.com/rss/2.0/headline?s=${encodeURIComponent(symbol)}&region=US&lang=en-US`
  return fetchXmlItems(url, { sourceType: 'yahoo', fallbackSource: 'Yahoo Finance' })
}

async function fetchJson(url, { headers = {} } = {}) {
  const response = await fetchWithRetry(url, {
    headers: {
      'User-Agent': readLocalEnv('SEC_USER_AGENT') || 'stock-trader-sim/1.0 contact@example.com',
      ...headers
    }
  })
  return response.json()
}

let secTickerCache = null
async function getSecTickerMap() {
  if (secTickerCache) return secTickerCache
  const raw = await fetchJson(SEC_COMPANY_TICKERS_URL)
  secTickerCache = new Map(Object.values(raw).map(row => [
    String(row.ticker || '').toUpperCase(),
    {
      cik: String(row.cik_str || '').padStart(10, '0'),
      title: row.title
    }
  ]))
  return secTickerCache
}

function companyKeywords(companyName = '') {
  const stopWords = new Set([
    'inc', 'incorporated', 'corp', 'corporation', 'co', 'company', 'ltd', 'limited',
    'plc', 'holdings', 'holding', 'group', 'class', 'common', 'stock', 'the'
  ])
  return String(companyName)
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length >= 3 && !stopWords.has(word))
    .slice(0, 3)
}

function isRelevantToSymbol(item, symbol, companyName = '') {
  if (item.sourceType === 'sec') return true
  const title = String(item.title || '')
  if (GENERIC_HEADLINE_REJECT.test(title)) return false
  const explicitTickers = [...title.matchAll(/\(([A-Z]{1,5})(?::[A-Z]+)?\)/g)].map(match => match[1])
  if (explicitTickers.length && !explicitTickers.includes(symbol)) return false
  const text = title.toLowerCase()
  const escapedSymbol = symbol.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const explicitTicker = new RegExp(`(\\(${escapedSymbol}\\)|\\b${escapedSymbol}:(nasdaq|nyse|amex)?\\b|\\b(nasdaq|nyse|amex):${escapedSymbol}\\b)`, 'i')
  if (explicitTicker.test(text)) return true
  if (STRICT_TICKER_MATCH_SYMBOLS.has(symbol)) return false
  if (symbol.length > 3 && new RegExp(`\\b${escapedSymbol}\\b`).test(text)) return true
  return companyKeywords(companyName)
    .filter(keyword => keyword !== symbol.toLowerCase())
    .some(keyword => text.includes(keyword))
}

async function fetchSecFilingItemsForSymbol(symbol, { lookbackDays }) {
  const tickerMap = await getSecTickerMap()
  const company = tickerMap.get(symbol)
  if (!company?.cik) return []

  const data = await fetchJson(`https://data.sec.gov/submissions/CIK${company.cik}.json`)
  const recent = data?.filings?.recent || {}
  const forms = recent.form || []
  const dates = recent.filingDate || []
  const accessionNumbers = recent.accessionNumber || []
  const primaryDocs = recent.primaryDocument || []
  const acceptedAt = recent.acceptanceDateTime || []
  const catalystForms = new Set(['8-K', '10-Q', '10-K', 'S-3', 'S-1', '424B5', 'SC 13D', 'SC 13G', 'DEF 14A'])
  const minFilingDate = cutoffDateKey(lookbackDays)

  return forms
    .map((form, index) => ({
      form: String(form || ''),
      date: dates[index] || '',
      accessionNumber: accessionNumbers[index] || '',
      primaryDocument: primaryDocs[index] || '',
      acceptedAt: acceptedAt[index] || ''
    }))
    .filter(filing => catalystForms.has(filing.form))
    .filter(filing => !filing.date || filing.date >= minFilingDate)
    .slice(0, 3)
    .map(filing => {
      const accessionNoDash = filing.accessionNumber.replaceAll('-', '')
      const link = accessionNoDash && filing.primaryDocument
        ? `https://www.sec.gov/Archives/edgar/data/${Number(company.cik)}/${accessionNoDash}/${filing.primaryDocument}`
        : `https://www.sec.gov/edgar/browse/?CIK=${symbol}`
      return {
        title: `${company.title} filed ${filing.form}${filing.date ? ` on ${filing.date}` : ''}`,
        link,
        source: 'SEC EDGAR',
        pubDate: filing.acceptedAt || filing.date,
        description: `${symbol} ${filing.form}`,
        sourceType: 'sec',
        scoreBoost: scoreSecForm(filing.form)
      }
    })
}

function dedupeItems(items) {
  const seen = new Set()
  const deduped = []
  for (const item of items) {
    const normalizedTitle = String(item.title || '')
      .toLowerCase()
      .replace(/\s[-–|]\s[^-–|]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    const normalizedLink = String(item.link || '').toLowerCase().split('?')[0]
    const key = normalizedLink || normalizedTitle
    if (!item.title || seen.has(key)) continue
    seen.add(key)
    deduped.push(item)
  }
  return deduped
}

async function fetchCatalystItemsForSymbol(symbol, sourceNames, { lookbackDays }) {
  const tickerMap = await getSecTickerMap().catch(() => null)
  const company = tickerMap?.get(symbol)
  const sourceFetchers = {
    google: () => fetchGoogleNewsItemsForSymbol(symbol),
    trusted: () => fetchTrustedNewsItemsForSymbol(symbol),
    yahoo: () => fetchYahooFinanceItemsForSymbol(symbol),
    sec: () => fetchSecFilingItemsForSymbol(symbol, { lookbackDays })
  }
  const settled = await Promise.allSettled(sourceNames.map(async sourceName => {
    const fetcher = sourceFetchers[sourceName]
    if (!fetcher) return []
    return fetcher()
  }))

  const items = []
  for (let i = 0; i < settled.length; i++) {
    const result = settled[i]
    if (result.status === 'fulfilled') items.push(...result.value)
    else console.error(`Catalyst source ${sourceNames[i]} skipped ${symbol}: ${result.reason?.message || result.reason}`)
  }
  const cutoffMs = Date.now() - Math.max(1, lookbackDays) * 24 * 60 * 60 * 1000
  return dedupeItems(items)
    .filter(item => isRecentItem(item, cutoffMs))
    .filter(item => isRelevantToSymbol(item, symbol, company?.title))
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length)
  let nextIndex = 0
  const workers = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (nextIndex < items.length) {
      const current = nextIndex++
      results[current] = await mapper(items[current], current)
    }
  })
  await Promise.all(workers)
  return results
}

async function generateWithRss({ prompt }) {
  const maxSymbols = Number.parseInt(argValue('--max-symbols') || '', 10) || DEFAULT_MAX_RSS_SYMBOLS
  const maxRows = Number.parseInt(argValue('--max-rows') || '', 10) || DEFAULT_MAX_RSS_ROWS
  const minScore = Number.parseInt(argValue('--min-score') || '', 10) || DEFAULT_MIN_RSS_SCORE
  const concurrency = Number.parseInt(argValue('--concurrency') || '', 10) || DEFAULT_RSS_CONCURRENCY
  const lookbackDays = Number.parseInt(argValue('--lookback-days') || '', 10) || DEFAULT_LOOKBACK_DAYS
  const includeLow = process.argv.includes('--include-low')
  const sourceNames = (argValue('--sources') || 'trusted,yahoo,sec')
    .split(',')
    .map(source => source.trim().toLowerCase())
    .filter(Boolean)
  const watchlist = parseWatchlistFromPrompt(prompt).slice(0, Math.max(1, maxSymbols))
  if (!watchlist.length) throw new Error('No watchlist symbols found in catalyst prompt')

  const perSymbol = await mapWithConcurrency(watchlist, concurrency, async symbol => {
    try {
      const items = await fetchCatalystItemsForSymbol(symbol, sourceNames, { lookbackDays })
      const ranked = items
        .map(item => ({
          item,
          score: scoreHeadline(`${item.title} ${item.description || ''} ${item.source}`) + scoreSource(item) + Number(item.scoreBoost || 0)
        }))
        .filter(result => result.score >= minScore)
        .sort((a, b) => b.score - a.score)

      const best = ranked[0]
      if (!best || (!includeLow && best.score < minScore)) return null

      const { catalyst_score, priority, confidence } = classifyScore(best.score)
      const sourceSuffix = best.item.source ? ` (${best.item.source})` : ''
      const pubSuffix = best.item.pubDate ? ` - ${best.item.pubDate}` : ''
      const sourceTypes = [...new Set(ranked.slice(0, 3).map(result => result.item.sourceType).filter(Boolean))]
      return {
        symbol,
        catalyst: `${best.item.title}${sourceSuffix}${pubSuffix}`,
        catalyst_score,
        premarket_direction_and_gap: inferDirection(best.item.title),
        premarket_volume: 'Not available from RSS collector; confirm from market data',
        key_levels: 'Not available from RSS collector; use chart support/resistance',
        setup_potential: priority === 'High'
          ? `High-priority catalyst from ${sourceTypes.join(', ') || 'news sources'}; require premarket participation and clean technical structure`
          : `Catalyst watch from ${sourceTypes.join(', ') || 'news sources'}; require price/volume confirmation before trade`,
        priority,
        confidence
      }
    }
    catch (error) {
      console.error(`RSS catalyst fetch skipped ${symbol}: ${error.message}`)
      return null
    }
  })

  return perSymbol
    .filter(Boolean)
    .sort((a, b) => {
      const order = { High: 0, Medium: 1, Low: 2 }
      return (order[a.priority] ?? 9) - (order[b.priority] ?? 9)
    })
    .slice(0, Math.max(1, maxRows))
}

function extractJsonText(response) {
  if (typeof response?.output_text === 'string') return response.output_text
  const chunks = []
  for (const item of response?.output || []) {
    for (const content of item?.content || []) {
      if (typeof content?.text === 'string') chunks.push(content.text)
    }
  }
  return chunks.join('\n')
}

async function generateWithOpenAI({ dateKey }) {
  const apiKey = readLocalEnv('OPENAI_API_KEY')
  if (!apiKey) throw new Error('OPENAI_API_KEY is required for --provider openai')

  const model = argValue('--model') || readLocalEnv('OPENAI_DAILY_CATALYST_MODEL') || 'gpt-4.1'
  const prompt = fs.readFileSync(argValue('--prompt') ? path.resolve(argValue('--prompt')) : promptPath, 'utf8')
  const userPrompt = [
    prompt,
    '',
    `Market date: ${dateKey} (America/New_York).`,
    'Return only catalysts that can be supported by current web/news evidence.',
    'Use empty strings for unknown fields rather than inventing details.'
  ].join('\n')

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      tools: [{ type: 'web_search_preview' }],
      input: [
        {
          role: 'system',
          content: [
            {
              type: 'input_text',
              text: 'You are a pre-market trading catalyst research assistant. Use web search, stay factual, and output only schema-valid JSON.'
            }
          ]
        },
        {
          role: 'user',
          content: [{ type: 'input_text', text: userPrompt }]
        }
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'daily_catalysts',
          strict: true,
          schema: catalystJsonSchema
        }
      }
    })
  })

  const bodyText = await response.text()
  if (!response.ok) {
    let detail = bodyText
    try {
      detail = JSON.parse(bodyText)?.error?.message || bodyText
    }
    catch {
      // Keep raw body text.
    }
    throw new Error(`OpenAI catalyst generation failed (${response.status}): ${detail}`)
  }

  const data = JSON.parse(bodyText)
  const outputText = extractJsonText(data)
  if (!outputText.trim()) throw new Error('OpenAI returned no catalyst JSON')
  const parsed = JSON.parse(outputText)
  return Array.isArray(parsed) ? parsed : parsed.catalysts
}

function validateRows(rows) {
  if (!Array.isArray(rows)) throw new Error('Catalyst input must be a JSON array')
  const seen = new Set()
  return rows.map((row, idx) => {
    const missing = requiredKeys.filter(key => !(key in (row || {})))
    if (missing.length) throw new Error(`Row ${idx + 1} missing keys: ${missing.join(', ')}`)
    const symbol = String(row.symbol || '').trim().toUpperCase()
    if (!symbol) throw new Error(`Row ${idx + 1} has empty symbol`)
    if (seen.has(symbol)) throw new Error(`Duplicate catalyst symbol: ${symbol}`)
    seen.add(symbol)
    return {
      ...row,
      symbol,
      catalyst: String(row.catalyst || '').trim(),
      catalyst_score: String(row.catalyst_score || '').trim(),
      priority: String(row.priority || '').trim(),
      confidence: String(row.confidence || '').trim()
    }
  })
}

function priorityRank(row) {
  const order = { High: 0, Medium: 1, Low: 2 }
  return order[String(row?.priority || '')] ?? 9
}

function confidenceRank(row) {
  const order = { A: 0, B: 1, C: 2 }
  return order[String(row?.confidence || '').trim().toUpperCase()] ?? 9
}

function sortCatalystRows(rows) {
  return [...rows].sort((a, b) => {
    const priorityDelta = priorityRank(a) - priorityRank(b)
    if (priorityDelta) return priorityDelta
    const confidenceDelta = confidenceRank(a) - confidenceRank(b)
    if (confidenceDelta) return confidenceDelta
    return String(a.symbol || '').localeCompare(String(b.symbol || ''))
  })
}

function readExistingRows(outPath) {
  if (!fs.existsSync(outPath)) return []
  const raw = fs.readFileSync(outPath, 'utf8')
  if (!raw.trim()) return []
  return validateRows(JSON.parse(raw))
}

function mergeCatalystRows(existingRows, newRows) {
  const bySymbol = new Map()
  for (const row of existingRows) bySymbol.set(row.symbol, row)
  for (const row of newRows) bySymbol.set(row.symbol, row)
  return sortCatalystRows([...bySymbol.values()])
}

function writeFileAtomic(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  const tempPath = `${filePath}.${process.pid}.${Date.now()}.tmp`
  fs.writeFileSync(tempPath, content)
  fs.renameSync(tempPath, filePath)
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const allowEmpty = process.argv.includes('--allow-empty')
  const mergeExisting = process.argv.includes('--merge-existing')
  const from = argValue('--from')
  const provider = String(argValue('--provider') || '').toLowerCase()
  const dateKey = argValue('--date') || marketDateKey()

  let inputRows
  if (provider === 'rss') {
    const prompt = fs.readFileSync(argValue('--prompt') ? path.resolve(argValue('--prompt')) : promptPath, 'utf8')
    inputRows = await generateWithRss({ prompt })
  }
  else if (provider === 'openai') {
    inputRows = await generateWithOpenAI({ dateKey })
  }
  else if (provider) {
    throw new Error(`Unsupported provider: ${provider}`)
  }
  else {
    const raw = from ? fs.readFileSync(path.resolve(from), 'utf8') : await readStdin()
    if (!raw.trim()) throw new Error('Provide catalyst JSON via --from <file>, stdin, or --provider openai')
    inputRows = JSON.parse(raw)
  }

  let rows = validateRows(inputRows)
  const outPath = path.join(outDir, `${dateKey}.json`)
  if (mergeExisting) {
    rows = mergeCatalystRows(readExistingRows(outPath), rows)
  }
  else {
    rows = sortCatalystRows(rows)
  }

  if (!rows.length && !allowEmpty) {
    throw new Error('Generated 0 catalyst rows; refusing to overwrite daily feed without --allow-empty')
  }

  const output = JSON.stringify(rows, null, 2)

  if (dryRun) {
    console.log(output)
    console.error(`Validated ${rows.length} catalyst row(s) for ${dateKey}; dry-run did not write ${outPath}`)
    return
  }

  writeFileAtomic(outPath, `${output}\n`)
  console.log(`Wrote ${rows.length} catalyst row(s) to ${outPath}`)
}

main().catch(error => {
  console.error(`Catalyst ingestion failed: ${error.message}`)
  process.exit(1)
})
