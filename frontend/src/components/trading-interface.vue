<template lang="pug">
.trading-interface
  .glass-box.pa6.order-panel(:class="`order-panel--${orderForm.side}`")
    .title2.mb4.w-flex.gap2
      a#buy
      | Place
      w-select.no-grow(
        v-model="orderForm.type"
        :items="orderTypes"
        outline
        round)
        template(#selection="{ item }")
          span.size--lg.ml2.mr1.pb2 {{ item.label }}
      | Order

    w-alert.pa3.bdrs2(v-if="!tickerQuotePending && !stock.price" error)
      | Trading disabled: No current market data available

    w-alert.pa3.bdrs2.mb4(v-else-if="stock.price && marketGate.reason !== 'open'" warning)
      strong {{ marketGate.title }}
      div.mt1 {{ marketGate.message }}

    .quick-actions.glass-box.pa4
      .mb2.text-upper.op6.body Quick Actions
      .w-flex.align-center.gap2
        w-button(@click="setQuickQuantity(1)" round tooltip="1 Share" width="28" height="28")
          strong.size--xl 1
        w-button(@click="setQuickQuantity(10)" round tooltip="10 Shares" width="33" height="33")
          strong.size--xl 10
        w-button(@click="setQuickQuantity(100)" round tooltip="100 Shares" width="37" height="37")
          strong.size--lg 100
        w-button(@click="setQuickQuantity(1000)" round tooltip="1000 Shares" width="42" height="42")
          strong.size--md 1000
        span Shares

    .w-flex.gap4.wrap(:class="{ op3: !stock.price }")
      .grow
        .mb4
          label.size--sm.op7.mb2 Quantity
          w-input(v-model.number="orderForm.quantity" type="number" min="0" placeholder="Number of shares" outline)

        .mb4(v-if="orderForm.type === 'limit' || orderForm.type === 'stop_limit'")
          label.size--sm.op7.mb2 {{ orderForm.type === 'stop_limit' ? 'Limit price (after trigger)' : 'Limit Price' }}
          w-input(v-model.number="orderForm.limitPrice" type="number" step="0.01" min="0" placeholder="Price per share" outline)

        .mb4(v-if="['stop','stop_limit'].includes(orderForm.type) && stopOrdersEnabled")
          label.size--sm.op7.mb2 Stop (trigger) price
          w-input(
            v-model.number="orderForm.stopTrigger"
            type="number"
            step="0.01"
            min="0"
            placeholder="Order activates when last price reaches this level"
            outline)
          .size--xs.op6.mt1 Sell stop: set below last price. Buy stop: set above last price.

        .mb4(v-if="orderForm.side === 'buy' && stopOrdersEnabled && ['market','limit'].includes(orderForm.type)")
          label.size--sm.op7.mb2 Stop loss (optional)
          w-input(
            v-model.number="orderForm.stopLoss"
            type="number"
            step="0.01"
            min="0"
            placeholder="Protective sell if price falls to this level"
            outline)
          .size--xs.op6.mt1 Bracket order: entry fills first; a protective sell is placed at your stop. Uses broker day time-in-force for the opening leg.

        .mt4(v-if="orderValue > 0 && stock.price > 0")
          .w-flex.justify-between.gap2
            span.op7.text-right.grow Estimated Notional:
            strong(v-html="formatCurrency(orderValue, stock.currency, 2, false)")

    .w-flex.gap4.mt4.gap12(v-if="stock.price")
      button.grow.buy(@click="openOrderConfirmation('buy')" :disabled="!canSubmitOrder")
        strong BUY
      button.grow.sell(@click="openOrderConfirmation('sell')" :disabled="!canSubmitOrder")
        strong SELL

  w-dialog(v-model="showOrderConfirmation" :title="confirmationTitle" width="520")
    .confirmation-copy(v-if="pendingOrder")
      w-alert.pa3.bdrs2.mb4(:success="marketGate.reason === 'open'" :warning="marketGate.reason !== 'open'")
        strong {{ pendingEnvironmentLabel }}
        div.mt1 {{ marketGate.message }}
        div.mt1.size--sm.op7 {{ providerSummary }}

      .confirmation-grid
        .confirmation-row
          span.op7 Symbol
          strong {{ pendingOrder.symbol }}
        .confirmation-row
          span.op7 Side
          strong(:class="pendingOrder.side === 'buy' ? 'success' : 'error'") {{ pendingOrder.side.toUpperCase() }}
        .confirmation-row
          span.op7 Order type
          strong {{ pendingOrder.type.toUpperCase() }}
        .confirmation-row
          span.op7 Quantity
          strong {{ pendingOrder.quantity }} shares
        .confirmation-row(v-if="pendingOrder.limitPrice")
          span.op7 Limit price
          strong(v-html="formatCurrency(pendingOrder.limitPrice, stock.currency, 2, false)")
        .confirmation-row(v-if="pendingOrder.stopPrice && ['stop','stop_limit'].includes(pendingOrder.type)")
          span.op7 Stop (trigger)
          strong(v-html="formatCurrency(pendingOrder.stopPrice, stock.currency, 2, false)")
        .confirmation-row(v-else-if="pendingOrder.stopPrice")
          span.op7 Stop loss (bracket)
          strong(v-html="formatCurrency(pendingOrder.stopPrice, stock.currency, 2, false)")
        .confirmation-row
          span.op7 Estimated notional
          strong(v-html="formatCurrency(pendingOrder.estimatedNotional, stock.currency, 2, false)")

      p.size--sm.op7.mt4(v-if="pendingOrder.type === 'stop'") Stop: converts to a market order when the stop price is reached. Simulation only fills if the mock price has already crossed your stop; use Alpaca paper for resting stops.
      p.size--sm.op7.mt4(v-else-if="pendingOrder.type === 'stop_limit'") Stop-limit: when the stop is reached, a limit order is placed at your limit price.
      p.size--sm.op7.mt4(v-else-if="pendingOrder.type === 'market' && !pendingOrder.stopPrice") Market orders fill at the best available price and can move before execution.
      p.size--sm.op7.mt4(v-else-if="pendingOrder.type === 'market' && pendingOrder.stopPrice && market === 'crypto'") Crypto on Alpaca: this is sent as a simple market order (no bracket stop). Optional stop prices in the form are not attached on crypto pairs; add a separate stop order if you want protection.
      p.size--sm.op7.mt4(v-else-if="pendingOrder.type === 'market' && pendingOrder.stopPrice") Market bracket: fills at the best available price; a protective stop is attached at your stop price.
      p.size--sm.op7.mt4(v-else-if="pendingOrder.stopPrice && market === 'crypto'") Crypto on Alpaca: limit orders do not use equity-style bracket stops here; only the limit is submitted.
      p.size--sm.op7.mt4(v-else-if="pendingOrder.stopPrice") Limit bracket: executes at your limit or better when marketable; a protective stop is attached.
      p.size--sm.op7.mt4(v-else) Limit orders only execute at your limit price or better. In simulation, only immediately marketable limits are filled.

      .w-flex.justify-end.gap2.mt5
        w-button(@click="showOrderConfirmation = false" text round) Cancel
        w-button(@click="confirmOrder" :disabled="submittingOrder || marketGate.reason !== 'open'" :loading="submittingOrder" :color="pendingOrder.side === 'buy' ? 'success' : 'error'" round)
          | Confirm {{ pendingOrder.side.toUpperCase() }}

  .glass-box.pa6.mt4(v-if="recentTrades.length")
    .title3.mb4 Recent Trades
    .ova
      .trade-item.w-flex.justify-between.align-center.py2(v-for="trade in recentTrades.slice(0, 5)" :key="trade.timestamp")
        .w-flex.align-center.gap2
          w-tag(:class="trade.side === 'buy' ? 'success--bg' : 'error--bg'" xs)
            | {{ trade.side.toUpperCase() }}
          span {{ trade.qty }} shares
        .text-right
          strong(v-html="formatCurrency(trade.price, stock.currency, 2, false)")
          .size--sm.op7 {{ new Date(trade.timestamp).toLocaleTimeString() }}
</template>

<script setup>
import { ref, computed, inject, watch, onMounted, onUnmounted } from 'vue'
import { formatCurrency } from '@/utils/formatters'
import { postOrder, fetchMarketStatus, checkHealth } from '@/api/index.js'

const props = defineProps({
  symbol: { type: String, required: true },
  market: { type: String, default: 'stocks' },
  stock: {
    type: Object,
    required: true,
    default: () => ({ price: 0, currencySymbol: '$' })
  },
  recentTrades: { type: Array, default: () => [] },
  hasPosition: { type: Boolean, default: false },
  initialSide: { type: String, default: 'buy', validator: v => ['buy', 'sell'].includes(v) },
  /** When true, suppress no-quote error until parent ticker finishes its first data batch. */
  tickerQuotePending: { type: Boolean, default: false }
})

const emit = defineEmits(['order-placed'])

const $waveui = inject('$waveui')
const marketStatus = ref(null)
const health = ref(null)
const showOrderConfirmation = ref(false)
const pendingOrder = ref(null)
const submittingOrder = ref(false)
let refreshTimer = null

const stopOrdersEnabled = computed(() => health.value?.featureFlags?.stopOrders !== false)

const defaultSide = computed(() => props.hasPosition ? 'sell' : props.initialSide)

const orderForm = ref({
  type: 'market',
  side: defaultSide.value,
  quantity: 1,
  limitPrice: undefined,
  stopLoss: null,
  stopTrigger: null
})

watch([() => props.hasPosition, () => props.initialSide], ([hasPosition, initialSide]) => {
  const newSide = hasPosition ? 'sell' : (initialSide || 'buy')
  if (['buy', 'sell'].includes(newSide)) orderForm.value.side = newSide
})

watch(() => orderForm.value.type, (t) => {
  if (t !== 'market' && t !== 'limit') orderForm.value.stopLoss = null
  if (t !== 'stop' && t !== 'stop_limit') orderForm.value.stopTrigger = null
})

const orderTypes = computed(() => {
  const base = [
    { label: 'Market', value: 'market' },
    { label: 'Limit', value: 'limit' }
  ]
  if (stopOrdersEnabled.value) {
    base.push({ label: 'Stop', value: 'stop' }, { label: 'Stop limit', value: 'stop_limit' })
  }
  return base
})

const orderValue = computed(() => {
  if (!props.stock.price || !orderForm.value.quantity) return 0
  const q = orderForm.value.quantity
  if (orderForm.value.type === 'limit' && orderForm.value.limitPrice > 0) return orderForm.value.limitPrice * q
  if (orderForm.value.type === 'stop' && orderForm.value.stopTrigger > 0) return orderForm.value.stopTrigger * q
  if (orderForm.value.type === 'stop_limit') {
    const lp = orderForm.value.limitPrice > 0 ? orderForm.value.limitPrice : props.stock.price
    return lp * q
  }
  return props.stock.price * q
})

const isOrderValid = computed(() => {
  if (!orderForm.value.quantity || orderForm.value.quantity <= 0) return false
  if (!props.stock.price || props.stock.price <= 0) return false
  if (orderForm.value.type === 'limit' && (!orderForm.value.limitPrice || orderForm.value.limitPrice <= 0)) return false
  if (orderForm.value.type === 'stop_limit') {
    if (!orderForm.value.limitPrice || orderForm.value.limitPrice <= 0) return false
    if (!orderForm.value.stopTrigger || orderForm.value.stopTrigger <= 0) return false
    if (orderForm.value.side === 'sell' && orderForm.value.stopTrigger >= props.stock.price) return false
    if (orderForm.value.side === 'buy' && orderForm.value.stopTrigger <= props.stock.price) return false
  }
  if (orderForm.value.type === 'stop') {
    if (!orderForm.value.stopTrigger || orderForm.value.stopTrigger <= 0) return false
    if (orderForm.value.side === 'sell' && orderForm.value.stopTrigger >= props.stock.price) return false
    if (orderForm.value.side === 'buy' && orderForm.value.stopTrigger <= props.stock.price) return false
  }
  if (orderForm.value.side === 'buy' && orderForm.value.stopLoss > 0 && ['market', 'limit'].includes(orderForm.value.type)) {
    const entry = orderForm.value.type === 'limit' && orderForm.value.limitPrice > 0
      ? orderForm.value.limitPrice
      : props.stock.price
    if (orderForm.value.stopLoss >= entry) return false
  }
  return true
})

const canSubmitOrder = computed(() => isOrderValid.value)

const pendingEnvironmentLabel = computed(() => {
  const env = health.value?.tradingEnvironment || (health.value?.effectiveSimulation ? 'simulation' : 'live')
  if (env === 'simulation') return 'Simulation mode'
  if (env === 'paper') return 'Paper trading'
  return 'Live trading'
})

const providerSummary = computed(() => {
  const environment = pendingEnvironmentLabel.value
  const broker = health.value?.broker?.label || 'Broker routing active'
  const dataProvider = health.value?.marketDataProvider?.label || 'Market data active'
  return `${environment} • ${broker} • ${dataProvider}`
})

const confirmationTitle = computed(() => {
  const type = pendingOrder.value?.type || orderForm.value.type || 'market'
  return `Confirm ${type} order`
})

const marketGate = computed(() => {
  if (props.market === 'crypto') {
    return {
      reason: 'open',
      title: 'Crypto market available',
      message: 'Crypto orders are available continuously. Review the ticket carefully before sending.'
    }
  }

  const payload = marketStatus.value?.data || marketStatus.value || {}
  const status = String(payload.status || payload.marketState || '').toLowerCase()
  const isOpen = payload.isOpen === true || status === 'open'

  if (isOpen) return { reason: 'open', title: 'Market open', message: payload.message || 'Orders can be submitted now.' }

  const nextOpen = payload.nextOpen ? new Date(payload.nextOpen).toLocaleString() : null
  return {
    reason: status || 'closed',
    title: 'Market closed',
    message: payload.message || (nextOpen ? `Orders are disabled until the market reopens at ${nextOpen}.` : 'Orders are disabled while the market is closed.')
  }
})

async function refreshTradingContext() {
  try {
    const [healthPayload, marketPayload] = await Promise.all([checkHealth(), fetchMarketStatus()])
    health.value = healthPayload.data || healthPayload
    marketStatus.value = marketPayload.data || marketPayload
  }
  catch (error) {
    console.error('Failed to refresh trading context:', error)
  }
}

function openOrderConfirmation(side) {
  orderForm.value.side = side
  if (!isOrderValid.value) return
  const bracketStop = side === 'buy' && ['market', 'limit'].includes(orderForm.value.type) && orderForm.value.stopLoss > 0
    ? Number(orderForm.value.stopLoss)
    : null
  const triggerStop = ['stop', 'stop_limit'].includes(orderForm.value.type) && orderForm.value.stopTrigger > 0
    ? Number(orderForm.value.stopTrigger)
    : null
  pendingOrder.value = {
    symbol: String(props.symbol).toUpperCase(),
    side,
    type: orderForm.value.type,
    quantity: Number(orderForm.value.quantity),
    limitPrice: ['limit', 'stop_limit'].includes(orderForm.value.type) ? Number(orderForm.value.limitPrice) : null,
    stopPrice: (() => {
      if (['stop', 'stop_limit'].includes(orderForm.value.type)) {
        return Number.isFinite(triggerStop) && triggerStop > 0 ? triggerStop : null
      }
      return Number.isFinite(bracketStop) && bracketStop > 0 ? bracketStop : null
    })(),
    estimatedNotional: orderValue.value
  }
  showOrderConfirmation.value = true
}

async function confirmOrder() {
  if (!pendingOrder.value) return
  if (marketGate.value.reason !== 'open') {
    $waveui.notify(marketGate.value.message, 'warning')
    return
  }

  submittingOrder.value = true
  try {
    await postOrder({
      symbol: pendingOrder.value.symbol,
      qty: pendingOrder.value.quantity,
      side: pendingOrder.value.side,
      type: pendingOrder.value.type,
      ...(pendingOrder.value.limitPrice != null && pendingOrder.value.limitPrice > 0
        ? { limitPrice: pendingOrder.value.limitPrice }
        : {}),
      ...(pendingOrder.value.stopPrice ? { stopPrice: pendingOrder.value.stopPrice } : {})
    })

    emit('order-placed')

    const typeLabel = pendingOrder.value.type.toUpperCase()
    $waveui.notify(`Order placed: ${typeLabel} ${pendingOrder.value.side.toUpperCase()} ${pendingOrder.value.quantity} ${pendingOrder.value.symbol}`, 'success')
    showOrderConfirmation.value = false
    pendingOrder.value = null
    orderForm.value.quantity = 1
    orderForm.value.limitPrice = undefined
    orderForm.value.stopLoss = null
    orderForm.value.stopTrigger = null
    await refreshTradingContext()
  }
  catch (error) {
    console.error('❌ Error placing order:', error)
    $waveui.notify(error.message || 'Failed to place order', 'error')
  }
  finally {
    submittingOrder.value = false
  }
}

function setQuickQuantity(quantity) {
  orderForm.value.quantity = quantity
}

onMounted(() => {
  refreshTradingContext()
  refreshTimer = setInterval(refreshTradingContext, 60_000)
})

onUnmounted(() => {
  if (refreshTimer) clearInterval(refreshTimer)
})
</script>

<style lang="scss">
.trading-interface {
  .trade-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:last-child {border-bottom: none;}
  }

  .order-panel {
    border: 2px solid transparent;

    &--buy {
      border-color: var(--w-success-color);
      background-image: linear-gradient(135deg, color-mix(in srgb, var(--w-success-color) 8%, transparent), transparent 80%);
    }
    &--sell {
      border-color: var(--w-error-color);
      background-image: linear-gradient(135deg, color-mix(in srgb, var(--w-error-color) 8%, transparent), transparent 80%);
    }
  }

  .confirmation-grid {
    display: grid;
    gap: 0.75rem;
  }

  .confirmation-row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 0.5rem;
  }

  .quick-actions {
    span {
      font-size: 11px;
      letter-spacing: -0.3px;
      opacity: 0.6;
      text-transform: uppercase;
    }
  }

  .buy, .sell {
    position: relative;
    background-image: linear-gradient(135deg, #fff -100%, transparent 80%);
    border: none;
    color: #fff;
    height: 36px;
    transition: filter 0.25s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
    &:not(:disabled) {cursor: pointer;}

    &:not(:disabled):hover {filter: contrast(1.1) brightness(1.1);}
    &:not(:disabled):active {filter: contrast(1.2) brightness(1.2) saturate(0.9);}

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      height: 100%;
      left: 100%;
      border: 18px solid transparent;
      aspect-ratio: 1;
    }
  }
  .buy {
    border-radius: 99em 0 0 99em;
    background-color: var(--w-success-color);
    padding-left: 12px;

    &:before {
      border-left-color: var(--w-success-color);
      border-top-color: var(--w-success-color);
    }
  }
  .sell {
    border-radius: 0 99em 99em 0;
    background-color: var(--w-error-color);
    background-image: linear-gradient(-135deg, #fff -100%, transparent 80%);
    padding-right: 12px;

    &:before {
      border-right-color: var(--w-error-color);
      border-bottom-color: var(--w-error-color);
      right: 100%;
      left: auto;
    }
  }
}
</style>
