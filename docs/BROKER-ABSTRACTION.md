# Broker Abstraction Plan

## Why this exists

The product should not become "an Alpaca frontend." The long-term product value is a broker-agnostic trading cockpit with safer execution, clearer mode labeling, and automation layers that can work across paper, live, and simulation environments.

Broker abstraction is the first architectural step toward:

- supporting more than one execution venue
- separating execution from market data
- enabling feature flags based on broker capabilities
- making bots and alerts portable across providers
- keeping simulation, paper, and live flows consistent

## Product stance

The platform should treat these as separate concerns:

1. **Execution broker** — where orders are submitted and account state is sourced.
2. **Market data provider** — where quotes, bars, movers, and clocks may come from.
3. **Simulation engine** — local execution model used for practice, testing, and dry-runs.
4. **Automation layer** — alerts, draft orders, guarded auto-trading.

These do not have to be the same vendor.

## Current repo reality

Today the backend is tightly coupled to Alpaca-oriented helpers in places like:

- `api/alpaca-account.js`
- `api/services/*`
- `api/rest-api.js`
- `api/market-data.js`
- `api/stockbot.js`
- `api/websocket-server.js`

That is acceptable for Phase 1–2 delivery, but it becomes a drag on:

- adding another broker
- adding provider-specific capability gating
- testing degraded/off-hours data scenarios
- supporting per-user broker choice in the future

## Target architecture

### 1. Core interfaces

Create a broker contract for execution concerns.

```ts
export interface BrokerAdapter {
  getIdentity(): BrokerIdentity
  getCapabilities(): BrokerCapabilities

  getAccount(context?: BrokerContext): Promise<AccountSummary | null>
  getPositions(context?: BrokerContext): Promise<Position[]>
  getOrders(status?: string, limit?: number, context?: BrokerContext): Promise<Order[]>
  submitOrder(input: SubmitOrderInput, context?: BrokerContext): Promise<SubmitOrderResult>
  cancelOrder(orderId: string, context?: BrokerContext): Promise<void>
  getMarketClock?(context?: BrokerContext): Promise<MarketClock | null>
  subscribeOrderUpdates?(handler: OrderUpdateHandler, context?: BrokerContext): Promise<Unsubscribe>
}
```

Create a separate market data contract.

```ts
export interface MarketDataProvider {
  getIdentity(): ProviderIdentity
  getCapabilities(): MarketDataCapabilities

  getQuote(symbol: string, context?: ProviderContext): Promise<Quote | null>
  getBars(input: BarsRequest, context?: ProviderContext): Promise<BarsResponse>
  getMovers(input: MoversRequest, context?: ProviderContext): Promise<MoversResponse>
  getMarketClock?(context?: ProviderContext): Promise<MarketClock | null>
  subscribePrices?(symbols: string[], handler: PriceHandler, context?: ProviderContext): Promise<Unsubscribe>
}
```

Simulation should also be an adapter, not a special-case branch spread everywhere.

```ts
export interface SimulationAdapter extends BrokerAdapter {
  reset?(): Promise<void>
  seed?(input: SimulationSeedInput): Promise<void>
}
```

## 2. Capability model

Every adapter should declare capabilities so the UI and routes can respond honestly.

```ts
export interface BrokerCapabilities {
  supportsPaper: boolean
  supportsLive: boolean
  supportsStocks: boolean
  supportsCrypto: boolean
  supportsOptions: boolean
  supportsMarketOrders: boolean
  supportsLimitOrders: boolean
  supportsStopOrders: boolean
  supportsFractionalShares: boolean
  supportsExtendedHours: boolean
  supportsStreamingOrders: boolean
}

export interface MarketDataCapabilities {
  supportsRealtimeQuotes: boolean
  supportsOffHoursQuotes: boolean
  supportsHistoricalBars: boolean
  supportsIntradayBars: boolean
  supportsMovers: boolean
  supportsStreamingQuotes: boolean
  delaySeconds?: number
  notes?: string[]
}
```

This prevents fake UI affordances. Unsupported features should be hidden or explicitly labeled.

## 3. Proposed folder structure

```text
api/
  adapters/
    brokers/
      base/
        broker-adapter.js
        types.js
      alpaca/
        alpaca-broker-adapter.js
      simulation/
        simulation-broker-adapter.js
    market-data/
      base/
        market-data-provider.js
        types.js
      alpaca/
        alpaca-market-data-provider.js
      fallback/
        fallback-market-data-provider.js
  services/
    broker-manager.js
    market-data-manager.js
    capability-service.js
    order-service.js
    account-service.js
    portfolio-service.js
```

## 4. Broker manager

A broker manager selects which execution adapter is active.

Responsibilities:

- choose broker from config or user/account selection later
- expose a stable interface to route handlers
- normalize provider errors into product-safe errors
- enforce global safety rules before submission

Example:

```ts
const broker = brokerManager.getActiveBroker()
const result = await broker.submitOrder(input, context)
```

## 5. Market data manager

A market data manager chooses the active quote/bar source.

Responsibilities:

- primary provider selection
- fallback provider selection
- capability-aware routing
- rate-limit/backoff handling
- off-hours fallback logic

This is where a separate paid or free market data provider can be plugged in without changing order execution.

## 6. First migration target in this repo

Do not refactor the whole app at once. Migrate in slices.

### Phase A — wrap current Alpaca logic

Goal: no behavior change.

- create `AlpacaBrokerAdapter`
- move account/order/position submission calls behind that adapter
- create `SimulationBrokerAdapter`
- keep current routes intact, but route through the manager

### Phase B — separate market data

- create `AlpacaMarketDataProvider`
- move quote/bar/clock/movers logic behind market-data manager
- stop importing raw Alpaca-specific helpers from route files

### Phase C — expose capabilities to frontend

Add to `/api/health` or a new `/api/capabilities` route:

- active broker
- active market data provider
- order capabilities
- data limitations (delayed/off-hours unavailable/etc.)

### Phase D — add second provider

Prefer adding a **market data provider** before a second execution broker.

Why:

- it solves the current off-hours data pain
- it is less risky than order-routing changes
- it helps product demos immediately

## 7. UI implications

The frontend should eventually consume capability-driven state instead of hardcoded assumptions.

Needed frontend concepts:

- active trading environment badge
- active execution broker label
- active data provider label
- order-type availability
- data freshness / delayed badge
- off-hours limitations copy

The UI should be able to say things like:

- "Execution: Alpaca Paper"
- "Data: Provider X delayed feed"
- "Limit orders unavailable on current broker"

That honesty is part of the moat.

## 8. Safety rules that stay above broker adapters

Some safety policy should not live inside broker-specific code.

Keep these in the product layer:

- live trading disable flag (`DISABLE_LIVE_TRADING=true`)
- order confirmation requirement
- max notional / position / daily loss policies
- market-hours gating rules
- audit log requirements
- auth / entitlement checks

The adapter submits orders; the product decides whether submission is allowed.

## 9. Error normalization

Normalize raw broker/provider failures into product-safe categories.

Suggested categories:

- `AUTH_ERROR`
- `MARKET_CLOSED`
- `INSUFFICIENT_BUYING_POWER`
- `INVALID_ORDER`
- `RATE_LIMITED`
- `DATA_UNAVAILABLE`
- `PROVIDER_UNAVAILABLE`
- `UNSUPPORTED_FEATURE`

Route handlers should return stable shapes so the frontend can react predictably.

## 10. Multi-broker future model

Do not design only for a single global broker forever.

Long-term likely state:

- each user connects one or more brokers
- one account may choose a default execution broker
- a watchlist or bot may choose a preferred data provider
- plan entitlements gate multi-broker support

Future objects may look like:

- `BrokerConnection`
- `DataProviderConnection`
- `UserBrokerPreference`
- `ExecutionPolicy`

## 11. Recommended next implementation steps

1. Introduce adapter interfaces and types.
2. Wrap current Alpaca execution paths in `AlpacaBrokerAdapter`.
3. Wrap simulation flow in `SimulationBrokerAdapter`.
4. Create `broker-manager.js` and route `POST /api/orders`, account, positions, orders through it.
5. Introduce market-data provider interface and move clock/quote/history behind it.
6. Add provider capability reporting endpoint.
7. Only then add a second provider.

## 12. What not to do

Avoid these mistakes:

- baking provider names into frontend logic
- mixing market data concerns into order submission code
- pretending features exist when a broker does not support them
- making the simulation path a one-off exception instead of a first-class adapter
- adding a second broker before interfaces stabilize

## 13. Commercial payoff

This abstraction is worth doing because it shifts the product from:

- "trading dashboard for Alpaca"

to:

- "broker-agnostic trading cockpit with safer execution and automation"

That second story is much more defensible and much easier to monetize.
