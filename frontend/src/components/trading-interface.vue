<template lang="pug">
.trading-interface
  //- Trading Form
  .glass-box.pa6.order-panel(:class="'order-panel--' + orderForm.side")
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
            span.op7.text-right.grow Total:
            span.text-bold {{ stock.currencySymbol }}{{ orderValue.toFixed(2) }}

    //- Buy/Sell Buttons
    .w-flex.gap4.mt4.gap12(v-if="stock.price")
      button.grow.buy(
        @click="placeOrder('buy')"
        :disabled="!isOrderValid || stock.price === 0")
        strong BUY

      button.grow.sell(
        @click="placeOrder('sell')"
        :disabled="!isOrderValid || stock.price === 0")
        strong SELL

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
          .text-bold {{ stock.currencySymbol }}{{ trade.price.toFixed(2) }}
          .size--sm.op7 {{ new Date(trade.timestamp).toLocaleTimeString() }}
</template>

<script setup>
import { ref, computed, inject } from 'vue'

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
  recentTrades: {
    type: Array,
    default: () => []
  }
})

const $waveui = inject('$waveui')

// Trading Form
// --------------------------------------------------------
const orderForm = ref({
  type: 'limit',
  side: 'buy',
  quantity: 1,
  limitPrice: undefined
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

// Trading Functions
// --------------------------------------------------------
async function placeOrder(side) {
  try {
    const order = {
      symbol: props.symbol,
      side,
      quantity: orderForm.value.quantity,
      type: orderForm.value.type,
      limitPrice: orderForm.value.limitPrice,
      stopLoss: orderForm.value.stopLoss
    }
    const orderTypeText = orderForm.value.type.charAt(0).toUpperCase() + orderForm.value.type.slice(1)
    let confirmationText = `${orderTypeText} ${side.toUpperCase()} ${order.quantity} ${props.symbol}`

    if (orderForm.value.type === 'limit') confirmationText += ` @ $${orderForm.value.limitPrice}`
    if (orderForm.value.stopLoss) confirmationText += ` (Stop Loss: $${orderForm.value.stopLoss})`

    $waveui.notify(`Order placed: ${confirmationText}`, 'success')
    orderForm.value.quantity = 1
    orderForm.value.limitPrice = undefined
    orderForm.value.stopLoss = null
  }
  catch (error) {
    console.error('❌ Error placing order:', error)
    $waveui.notify('Failed to place order', 'error')
  }
}

function setQuickQuantity(quantity) {
  orderForm.value.quantity = quantity
}
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

</style>

