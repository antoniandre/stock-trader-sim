<template lang="pug">
.trading-interface
  //- Trading Form
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

    //- No Price Data Warning
    w-alert.pa3.bdrs2(v-if="!stock.price" error)
      | Trading disabled: No current market data available

    w-alert.pa3.bdrs2.mb4(v-else-if="marketGate.reason !== 'open'" warning)
      strong {{ marketGate.title }}
      div.mt1 {{ marketGate.message }}

    //- Quick Actions
    .quick-actions.glass-box.pa4
      .mb2.text-upper.op6.body Quick Actions
      .w-flex.align-center.gap2
        w-button(
          @click="setQuickQuantity(1)"
          round
          tooltip="1 Share"
          width="28"
          height="28")
          strong.size--xl 1
        w-button(
          @click="setQuickQuantity(10)"
          round
          tooltip="10 Shares"
          width="33"
          height="33")
          strong.size--xl 10
        w-button(
          @click="setQuickQuantity(100)"
          round
          tooltip="100 Shares"
          width="37"
          height="37")
          strong.size--lg 100
        w-button(
          @click="setQuickQuantity(1000)"
          round
          tooltip="1000 Shares"
          width="42"
          height="42")
          strong.size--md 1000
        span Shares

    .w-flex.gap4.wrap(:class="{ op3: !stock.price }")
      .grow
        //- Quantity Input
        .mb4
          label.size--sm.op7.mb2 Quantity
          w-input(
            v-model.number="orderForm.quantity"
            type="number"
            min="0"
            placeholder="Number of shares"
            outline)

        //- Limit Price (only for limit orders)
        .mb4(v-if="orderForm.type === 'limit'")
          label.size--sm.op7.mb2 Limit Price
          w-input(
            v-model.number="orderForm.limitPrice"
            type="number"
            step="0.01"
            min="0"
            placeholder="Price per share"
            outline)

        //- Stop Loss (optional)
        .mb4
          label.size--sm.op7.mb2 Stop Loss (Optional)
          w-input(
            v-model.number="orderForm.stopLoss"
            type="number"
            step="0.01"
            min="0"
            placeholder="Stop loss price"
            outline)

        //- Order Value Display
        .mt4(v-if="orderValue > 0 && stock.price > 0")
          .w-flex.justify-between.gap2
            span.op7.text-right.grow Estimated Notional:
            strong(v-html="formatCurrency(orderValue, stock.currency, 2, false)")

    //- Buy/Sell Buttons
    .w-flex.gap4.mt4.gap12(v-if="stock.price")
      button.grow.buy(
        @click="openOrderConfirmation('buy')"
        :disabled="!canSubmitOrder")
        strong BUY

      button.grow.sell(
        @click="openOrderConfirmation('sell')"
        :disabled="!canSubmitOrder")
        strong SELL

  w-modal(
    v-model="showOrderConfirmation"
    title="Confirm market order"
    width="520")
    .confirmation-copy(v-if="pendingOrder")
      w-alert.pa3.bdrs2.mb4(:success="marketGate.reason === 'open'" :warning="marketGate.reason !== 'open'")
        strong {{ pendingEnvironmentLabel }}
        div.mt1 {{ marketGate.message }}

      .confirmation-grid
        .confirmation-row
          span.op7 Symbol
          strong {{ pendingOrder.symbol }}
        .confirmation-row
          span.op7 Side
          strong(:class="pendingOrder.side === 'buy' ? 'success' : 'error'") {{ pendingOrder.side.toUpperCase() }}
        .confirmation-row
          span.op7 Quantity
          strong {{ pendingOrder.quantity }} shares
        .confirmation-row
          span.op7 Estimated notional
          strong(v-html="formatCurrency(pendingOrder.estimatedNotional, stock.currency, 2, false)")

      p.size--sm.op7.mt4
        | Market orders fill at the best available price and can move before execution.

      .w-flex.justify-end.gap2.mt5
        w-button(@click="showOrderConfirmation = false" text round) Cancel
        w-button(
          @click="confirmOrder"
          :disabled="submittingOrder || marketGate.reason !== 'open'"
          :loading="submittingOrder"
          :color="pendingOrder.side === 'buy' ? 'success' : 'error'"
          round)
          | Confirm {{ pendingOrder.side.toUpperCase() }}

  //- Recent Trades for this symbol
  .glass-box.pa6.mt4(v-if="recentTrades.length")
    .title3.mb4 Recent Trades
    .ova
      .trade-item.w-flex.justify-between.align-center.py2(
        v-for="trade in recentTrades.slice(0, 5)"
        :key="trade.timestamp")
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
import { postMarketOrder, fetchMarketStatus, checkHealth } from '@/api/index.js'

const props = defineProps({
  symbol: { type: String, required: true },
  stock: {
    type: Object,
    required: true,
    default: () => ({
      price: 0,
      currencySymbol: '$'
    })
  },
  recentTrades: { type: Array, default: () => [] },
  hasPosition: { type: Boolean, default: false },
  initialSide: { type: String, default: 'buy', validator: v => ['buy', 'sell'].includes(v) }
})

const $waveui = inject('$waveui')
const marketStatus = ref(null)
const health = ref(null)
const showOrderConfirmation = ref(false)
const pendingOrder = ref(null)
const submittingOrder = ref(false)
let refreshTimer = null

// Trading Form
// --------------------------------------------------------
const defaultSide = computed(() => props.hasPosition ? 'sell' : props.initialSide)

const orderForm = ref({
  type: 'market',
  side: defaultSide.value,
  quantity: 1,
  limitPrice: undefined,
  stopLoss: null
})

watch([() => props.hasPosition, () => props.initialSide], ([hasPosition, initialSide]) => {
  const newSide = hasPosition ? 'sell' : (initialSide || 'buy')
  if (['buy', 'sell'].includes(newSide)) orderForm.value.side = newSide
})

const orderTypes = [
  { label: 'Market', value: 'market' },
  { label: 'Limit', value: 'limit' }
]

// Trading Computed Properties
// --------------------------------------------------------
const orderValue = computed(() => {
  if (!props.stock.price || !orderForm.value.quantity) return 0

  let pricePerShare = props.stock.price
  if (orderForm.value.type === 'limit' && orderForm.value.limitPrice > 0) {
    pricePerShare = orderForm.value.limitPrice
  }

  return pricePerShare * orderForm.value.quantity
})

const isOrderValid = computed(() => {
  if (!orderForm.value.quantity || orderForm.value.quantity <= 0) return false
  if (!props.stock.price || props.stock.price <= 0) return false
  if (orderForm.value.type === 'limit' && (!orderForm.value.limitPrice || orderForm.value.limitPrice <= 0)) return false
  return true
})

const pendingEnvironmentLabel = computed(() => {
  const env = health.value?.tradingEnvironment || (health.value?.effectiveSimulation ? 'simulation' : 'live')
  if (env === 'simulation') return 'Simulation mode'
  if (env === 'paper') return 'Paper trading'
  return 'Live trading'
})

const marketGate = computed(() => {
  const payload = marketStatus.value?.data || marketStatus.value || {}
  const status = String(payload.status || payload.marketState || '').toLowerCase()
  const isOpen = payload.isOpen === true || status === 'open'

  if (isOpen) {
    return {
      reason: 'open',
      title: 'Market open',
      message: payload.message || 'Orders can be submitted now.'
    }
  }

  const nextOpen = payload.nextOpen ? new Date(payload.nextOpen).toLocaleString() : null
  return {
    reason: status || 'closed',
    title: 'Market closed',
    message: payload.message || (nextOpen ? `Orders are disabled until the market reopens at ${nextOpen}.` : 'Orders are disabled while the market is closed.')
  }
})

const canSubmitOrder = computed(() => {
  if (!isOrderValid.value) return false
  if (orderForm.value.type !== 'market') return false
  return true
})

async function refreshTradingContext() {
  try {
    const [healthPayload, marketPayload] = await Promise.all([
      checkHealth(),
      fetchMarketStatus()
    ])
    health.value = healthPayload.data || healthPayload
    marketStatus.value = marketPayload.data || marketPayload
  }
  catch (error) {
    console.error('Failed to refresh trading context:', error)
  }
}

function openOrderConfirmation(side) {
  if (orderForm.value.type !== 'market') {
    $waveui.notify('Only market orders are supported by the API right now. Switch order type to Market.', 'warning')
    return
  }
  if (!isOrderValid.value) return

  pendingOrder.value = {
    symbol: String(props.symbol).toUpperCase(),
    side,
    quantity: Number(orderForm.value.quantity),
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
    await postMarketOrder(pendingOrder.value.symbol, pendingOrder.value.quantity, pendingOrder.value.side)

    const confirmationText = `Market ${pendingOrder.value.side.toUpperCase()} ${pendingOrder.value.quantity} ${pendingOrder.value.symbol}`
    $waveui.notify(`Order placed: ${confirmationText}`, 'success')
    showOrderConfirmation.value = false
    pendingOrder.value = null
    orderForm.value.quantity = 1
    orderForm.value.limitPrice = undefined
    orderForm.value.stopLoss = null
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

