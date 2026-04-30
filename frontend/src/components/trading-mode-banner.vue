<template lang="pug">
w-transition-expand(y)
  .trading-mode-banner.w-flex.no-grow.align-center.justify-center.gap2.py1.px2.text-center(v-if="banner && showBanner" :class="`trading-mode-banner--${banner.type}`" role="status")
    strong.banner-label {{ banner.label }}
    span.banner-sub.op8.mra {{ banner.sub }}
    w-button.w-button--icon.pa3.my-1(
      type-if="banner.type === 'paper'"
      route="/auth"
      tooltip="Open trading account"
      :tooltip-props="{ left: true, sm: true }"
      text
      round
      xs)
      icon.no-shrink(icon="mdi:open-in-new")
    w-button.pa3.my-1(
      @click="dismissBanner"
      color="error"
      icon="wi-cross"
      tooltip="Dismiss banner"
      :tooltip-props="{ left: true, sm: true }"
      text
      round
      xs)
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { checkHealth } from '@/api/index.js'

const health = ref(null)
const loadError = ref(false)
const showBanner = ref(true)
let intervalId = null

async function refresh() {
  try {
    health.value = await checkHealth()
    loadError.value = false
  }
  catch {
    loadError.value = true
    health.value = null
  }
}

function dismissBanner() {
  showBanner.value = false
}

const banner = computed(() => {
  if (loadError.value) {
    return {
      type: 'offline',
      label: 'Backend unreachable',
      sub: 'Start the API (api/) on port 3000 or check VITE_API_BASE.'
    }
  }
  const h = health.value
  if (!h) return null

  const env = h.tradingEnvironment || (h.effectiveSimulation ? 'simulation' : 'live')
  const brokerLabel = h.broker?.label || 'Broker unavailable'
  const dataLabel = h.marketDataProvider?.label || 'Data provider unavailable'
  const detail = `${brokerLabel} • Data: ${dataLabel}`

  if (env === 'simulation') {
    return {
      type: 'sim',
      label: 'Simulation mode',
      sub: `${h.riskNotice || 'Mock data — practice only.'} ${detail}`
    }
  }
  if (env === 'paper') {
    return {
      type: 'paper',
      label: 'Paper trading',
      sub: `${h.riskNotice || 'Alpaca paper account — no real money.'} ${detail}`
    }
  }
  return {
    type: 'live',
    label: 'Live trading',
    sub: `${h.riskNotice || 'Real money at risk. Not financial advice.'} ${detail}`
  }
})

onMounted(() => {
  refresh()
  intervalId = setInterval(refresh, 45_000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style lang="scss" scoped>
.trading-mode-banner {
  font-size: 0.8rem;
  line-height: 1.35;
  letter-spacing: 0.02em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &--sim {
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.12));
    color: color-mix(in srgb, var(--w-base-color) 90%, #93c5fd);
  }

  &--paper {
    background: linear-gradient(90deg, rgba(234, 179, 8, 0.18), rgba(245, 158, 11, 0.1));
    color: color-mix(in srgb, var(--w-base-color) 88%, #fcd34d);
  }

  &--live {
    background: linear-gradient(90deg, rgba(220, 38, 38, 0.22), rgba(185, 28, 28, 0.12));
    color: color-mix(in srgb, var(--w-base-color) 85%, #fecaca);
  }

  &--offline {
    background: rgba(100, 100, 100, 0.25);
    color: var(--w-base-color);
  }
}


@media (max-width: 600px) {
  .banner-sub {display: none;}
}
</style>
