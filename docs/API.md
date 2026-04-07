# Stock Trader Sim API

## Purpose

This document describes the current HTTP API surface for the stock-trader-sim product. It is written for:

- frontend contributors
- automation agents
- future Pro/API users
- partner integrations later

This is a practical product/API guide, not a full OpenAPI spec.

## Base URL

Local development default:

```bash
http://localhost:3000/api
```

Frontend dev typically uses the Vite proxy so browser calls can use `/api` directly.

## Authentication status

**Current state:** most routes are still unauthenticated in local/dev mode.

Planned direction:

- mutation routes should require `Authorization: Bearer <token>`
- read routes may remain public or tier-gated later
- auth/entitlement work belongs to the monetization plumbing phase

Do not treat the current unauthenticated state as production-ready.

## Response shape

Many routes use a common JSON shape created by `createStandardResponse()`.

Typical examples:

```json
{
  "status": "ok",
  "timestamp": "2026-04-05T15:42:09.372Z"
}
```

or:

```json
{
  "order": { "symbol": "AAPL" },
  "timestamp": "2026-04-05T15:42:09.372Z"
}
```

Some legacy routes return raw arrays/objects directly. The API is not fully normalized yet.

---

## Health and capability routes

### `GET /api/health`

Returns service health, simulation/live context, and active provider metadata.

#### Example

```bash
curl -sS http://localhost:3000/api/health
```

#### Sample fields

- `status`
- `simulation`
- `effectiveSimulation`
- `simulationReason`
- `tradingEnvironment`
- `broker`
- `brokerCapabilities`
- `marketDataProvider`
- `marketDataCapabilities`
- `riskNotice`
- `connectedClients`
- `totalStocks`

#### Example response

```json
{
  "status": "ok",
  "effectiveSimulation": false,
  "tradingEnvironment": "paper",
  "broker": {
    "id": "alpaca",
    "label": "Alpaca paper"
  },
  "marketDataProvider": {
    "id": "alpaca-data",
    "label": "Alpaca Market Data"
  }
}
```

### `GET /api/market-status`

Returns current market clock status.

#### Example

```bash
curl -sS http://localhost:3000/api/market-status
```

#### Response fields

- `status` (`open`, `premarket`, `afterhours`, `overnight`, `closed`)
- `message`
- `nextOpen`
- `nextClose`
- `isWeekend`
- `timestamp`

---

## Account and trading state

### `GET /api/account`

Returns account information from the active execution broker.

### `GET /api/account/activities?activity_type=&limit=100`

Returns account activity history.

### `GET /api/account/portfolio/history?period=1D&timeframe=1Min`

Returns portfolio equity history.

### `GET /api/positions`

Returns open positions.

### `GET /api/orders?status=open&limit=100`

Returns orders for the active execution broker.

### `DELETE /api/orders/:orderId`

Cancels an order.

**Note:** this should be auth-protected before production use.

---

## Order submission

### `POST /api/orders`

Submits a market or limit order.

#### Supported today

- `type=market|limit`
- `side=buy|sell`
- quantity via `qty` or `quantity`
- limit orders accept `limitPrice` or `limit_price`

#### Example

```bash
curl -sS -X POST http://localhost:3000/api/orders \
  -H 'Content-Type: application/json' \
  -d '{"symbol":"AAPL","qty":1,"side":"buy","type":"market"}'

# limit
curl -sS -X POST http://localhost:3000/api/orders \
  -H 'Content-Type: application/json' \
  -d '{"symbol":"AAPL","qty":1,"side":"buy","type":"limit","limitPrice":185.5}'
```

#### Request body

```json
{
  "symbol": "AAPL",
  "qty": 1,
  "side": "buy",
  "type": "market",
  "limitPrice": 185.5
}
```

#### Success response

```json
{
  "order": {
    "symbol": "AAPL",
    "side": "buy"
  },
  "timestamp": "2026-04-05T15:42:09.372Z"
}
```

#### Failure examples

```json
{ "error": "Only type=market is supported" }
```

or:

```json
{
  "error": "insufficient buying power"
}
```

#### Product notes

- frontend should show explicit confirmation before submit
- live trading should never be silent or ambiguous
- this route should require bearer auth before commercial launch

### `POST /api/orders/preview`

Validates and previews an order without sending it to the broker. Useful for confirmation UX and future draft-order bots.

#### Example

```bash
curl -sS -X POST http://localhost:3000/api/orders/preview \
  -H 'Content-Type: application/json' \
  -d '{"symbol":"AAPL","qty":2,"side":"sell","type":"limit","limitPrice":210}'
```

---

## Stock and market-data routes

### `GET /api/stocks?page=1&limit=50&search=`

Returns paginated tradable stocks plus market state and last price.

#### Example

```bash
curl -sS 'http://localhost:3000/api/stocks?page=1&limit=3'
```

#### Response shape

```json
{
  "stocks": [
    {
      "symbol": "AAPL",
      "name": "Apple Inc. Common Stock",
      "price": 266.91,
      "marketState": "closed"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 3,
    "total": 12388,
    "totalPages": 4130
  }
}
```

### `GET /api/stocks/:symbol`

Returns a single stock summary.

### `GET /api/stocks/:symbol/price`

Returns a single price snapshot.

#### Example

```bash
curl -sS http://localhost:3000/api/stocks/AAPL/price
```

### `GET /api/stocks/:symbol/history?period=1D`

Returns OHLCV history.

#### Example

```bash
curl -sS 'http://localhost:3000/api/stocks/AAPL/history?period=1D'
```

### `GET /api/stocks/:symbol/history/progressive?period=1D`

Progressive-loading history path for longer histories.

### `GET /api/stocks/:symbol/history/range?timeframe=1Day&start=<ISO>&end=<ISO>`

History for a specific date range.

### `POST /api/stocks/trends/batch`

Batch trend loader for many symbols.

#### Example

```bash
curl -sS -X POST http://localhost:3000/api/stocks/trends/batch \
  -H 'Content-Type: application/json' \
  -d '{"symbols":["AAPL","MSFT"],"points":20}'
```

### `GET /api/stocks/:symbol/trend?points=20`

Mini trend endpoint for ticker-card usage.

---

## Movers and dashboard routes

### `GET /api/movers?market=stocks&direction=both&top=10`

Returns gainers/losers payload.

#### Example

```bash
curl -sS 'http://localhost:3000/api/movers?market=stocks&direction=both&top=10'
```

### `GET /api/dashboard?tradingHistoryLimit=100&ordersStatus=open&ordersLimit=100`

Returns a batch payload for account + positions + orders + trading history.

### `GET /api/ticker/:symbol`

Returns stock + position + orders + marketStatus for one symbol.

#### Example

```bash
curl -sS 'http://localhost:3000/api/ticker/AAPL'
```

---

## Agent/automation route

### `GET /api/agent/snapshot`

Compact read-only bundle for local agents and automation.

Useful for:

- OpenClaw agents
- scripts
- workflow runners
- future Pro automation tooling

#### Example

```bash
curl -sS http://localhost:3000/api/agent/snapshot
```

#### Includes

- generated timestamp
- API base hint
- mode / trading environment
- server state
- market status
- account summary
- position summaries
- open orders count
- route hints

---

## WebSocket notes

The backend also exposes WebSocket updates on the same server.

Current frontend usage includes:

- market updates
- price updates
- trade broadcasts
- market-status updates

Planned improvement areas:

- reconnect UX copy
- throttling/debounce during update storms
- clearer provider/source metadata in streaming paths

---

## Known limitations

Current known product/API limitations:

- market orders only
- auth on mutation routes not finished
- response shapes not fully normalized yet
- market-data provider abstraction is in progress
- some routes still call legacy helpers directly under the hood
- off-hours market-data quality depends on provider/plan

## Recommended next API work

1. Require `Authorization: Bearer <token>` on mutations.
2. Add feature/plan gating metadata.
3. Normalize error shapes.
4. Continue routing all read paths through market-data manager.
5. Add a proper OpenAPI spec if partner/API distribution becomes a priority.
