<template lang="pug">
.ticker-header.w-flex.align-center.gap4(:class="{ 'ticker-header--small': small }")
  ticker-logo(:symbol="stock.symbol" :size="small ? 'sm' : 'lg'")
  div
    .w-flex.align-center.justify-space-between.gap2
      w-tag.w-flex.gap2.pr1.no-grow(round :bg-color="$waveui.theme === 'dark' ? 'info-dark4' : 'info-light5'")
        strong.size--lg {{ stock.symbol }}
        icon(
          :icon="currentStatus.icon"
          :class="`market-${currentStatus.status}`"
          :title="currentStatus.message"
          style="width: 15px")
      .w-flex.align-center.gap4
        .w-flex.align-center.gap2.no-grow
          span.size--xs.text-upper(:class="`market-${currentStatus.status}`") {{ currentStatus.message }}
          span.size--xs.op6(v-if="currentStatus.status === 'open' && currentStatus.nextClose")
            | (closes at {{ new Date(currentStatus.nextClose).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }) }} ET)
          span.size--xs.op6(v-else-if="currentStatus.nextOpen")
            | (opens {{ formatNextOpenTime }})
        .w-flex.align-center.gap2.mla
          .w-icon.size--xs(:class="wsConnected ? 'success--bg' : 'yellow--bg'")
          span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
            | {{ wsConnected ? 'Live' : 'Delayed' }}
    h1.title2(v-if="!small") {{ stock.name || 'Loading...' }}
</template>

<script setup>
import { inject } from 'vue'
import { useStockStatus } from '@/composables/stock-status'
import TickerLogo from '@/components/ticker-logo.vue'

const props = defineProps({
  stock: {
    type: Object,
    required: true,
    default: () => ({
      symbol: '',
      name: '',
      nextOpen: null,
      nextClose: null
    })
  },
  wsConnected: { type: Boolean, default: false },
  small: { type: Boolean, default: false }
})

const $waveui = inject('$waveui')

// Stock Status
// --------------------------------------------------------
const { currentStatus, formatNextOpenTime } = useStockStatus(props.stock)
</script>

<style lang="scss">
.ticker-header {
  &--small {
    color: red;
    .ticker-header__title {
      font-size: 1.2rem;
    }
    .ticker-header__subtitle {
      font-size: 0.8rem;
    }
    .ticker-header__status {
      font-size: 0.8rem;
    }
  }
}
</style>

