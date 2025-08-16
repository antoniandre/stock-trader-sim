<template lang="pug">
.top-losers-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.justify-between.gap3.mb4
    .title1 Top Losers
    span.op5.size--sm.mt1 Last Update: {{ lastUpdate }}
    //- Connection Status.
    .w-flex.align-center.gap2.mla.no-grow
      .w-icon.size--xs.success--bg(v-if="wsConnected")
      .w-icon.size--xs.yellow--bg(v-else)
      span.size--sm(:class="wsConnected ? 'success' : 'yellow'")
        | {{ wsConnected ? 'Live updates connected' : 'Using polling fallback' }}

  //- Filter Controls
  .w-flex.align-center.gap4.mb4
    w-select(
      v-model="selectedCount"
      :items="countOptions"
      outline
      round
      label="Show top")
    w-select(
      v-model="selectedMarket"
      :items="marketOptions"
      outline
      round
      label="Market")
    w-button(
      @click="refreshData"
      :loading="loading"
      color="primary"
      outline
      round)
      icon.w-icon.mr2(icon="mdi:refresh")
      | Refresh

  //- Loading State
  .w-flex.column.py12.align-center.justify-center(v-if="loading")
    w-progress(circle)
    p.op5.mt4 Loading top losers...

  //- Error State
  .error-message.w-flex.column.py12.align-center.justify-center(v-else-if="error")
    w-icon(color="error" size="4rem") wi-info-circle
    h2.title2.error.mt4.mb2 Oops!
    p.mb4 {{ error }}
    w-button(@click="refreshData" text bg-color="error" round) Try again

  //- Content
  div(v-else)
    //- Summary Stats
    .glass-box.pa4.mb4(v-if="losers.length > 0")
      .w-flex.align-center.justify-between.gap4.wrap
        .stat-item
          .title3.currency-negative {{ losers.length }}
          .size--sm.op6 Total Losers
        .stat-item(v-if="topLoser")
          .title3.currency-negative {{ topLoser.pct?.toFixed(2) || 'N/A' }}%
          .size--sm.op6 Biggest Drop: {{ topLoser.symbol }}
        .stat-item
          .title3 {{ averageLoss?.toFixed(2) || 'N/A' }}%
          .size--sm.op6 Average Loss

    //- Losers Grid
    w-grid.gap4(:columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }")
      ticker-card(
        v-for="loser in losers"
        :key="loser.symbol"
        :stock="loser"
        @click="$router.push(`/trading/${loser.symbol}`)")

    //- Empty State
    .w-flex.column.py12.align-center.justify-center(v-if="!loading && losers.length === 0")
      w-icon(color="info" size="4rem") wi-trending-down
      h2.title2.info.mt4.mb2 No Losers Found
      p.mb4 No stocks are showing losses at the moment.
      w-button(@click="refreshData" color="info" round) Refresh Data
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { fetchTopMovers, fetchBatchTrends } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import TickerCard from '@/components/ticker-card.vue'

// State
const losers = ref([])
const loading = ref(true)
const error = ref(null)
const selectedCount = ref(20)
const selectedMarket = ref('stocks')

// Options
const countOptions = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 }
]

const marketOptions = [
  { label: 'Stocks', value: 'stocks' },
  { label: 'ETFs', value: 'etfs' }
]

// WebSocket
const { wsConnected, lastUpdate, connect, addMessageHandler } = useWebSocket()

// Computed
const topLoser = computed(() => {
  if (losers.value.length === 0) return null
  return losers.value.reduce((top, current) => {
    const topPct = top.pct || 0
    const currentPct = current.pct || 0
    return currentPct < topPct ? current : top
  })
})

const averageLoss = computed(() => {
  if (losers.value.length === 0) return 0
  const validLosses = losers.value.filter(l => l.pct != null && !isNaN(l.pct))
  if (validLosses.length === 0) return 0
  const sum = validLosses.reduce((acc, l) => acc + l.pct, 0)
  return sum / validLosses.length
})

// Helper function to extract percentage
function extractPercent(rec) {
  let p = rec.change_percent ?? rec.changePercent ?? rec.percent_change ?? rec.changePct
  if (p === undefined || p === null) {
    const ch = rec.change ?? rec.change_value ?? rec.delta
    const prev = rec.previous_close ?? rec.prev_close ?? rec.prevClose
    const last = rec.latest_close ?? rec.close ?? rec.price
    if (typeof ch === 'number' && typeof prev === 'number' && prev !== 0) p = (ch / prev) * 100
    else if (typeof ch === 'number' && typeof last === 'number' && last - ch !== 0) p = (ch / (last - ch)) * 100
  }
  const n = Number(p)
  if (!Number.isFinite(n)) return null
  if (Math.abs(n) <= 1) return n * 100
  return n
}

// Data fetching
async function loadLosers() {
  try {
    loading.value = true
    error.value = null

    const payload = await fetchTopMovers(selectedCount.value, selectedMarket.value)
    const data = payload?.data || payload

    // Extract losers
    let losersData = Array.isArray(data?.losers) ? data.losers : []

    if (!losersData.length) {
      const list = Array.isArray(data?.movers) ? data.movers : (Array.isArray(data) ? data : [])
      if (list.length) {
        losersData = list.filter(r => (r.change ?? r.change_value ?? 0) < 0)
      }
    }

    // Normalize and sort by percentage loss (most negative first)
    const normalizedLosers = losersData
      .map(r => ({
        ...r,
        pct: extractPercent(r),
        // Map to ticker-card expected format
        symbol: r.symbol,
        name: r.name || r.symbol,
        price: r.price || r.close || r.latest_close,
        lastSide: 'sell', // Default for losers
        currency: 'USD',
        currencySymbol: '$',
        marketState: 'open', // Default for now
        marketMessage: 'Open'
      }))
      .filter(r => r.pct != null && r.pct < 0)
      .sort((a, b) => (a.pct || 0) - (b.pct || 0))
      .slice(0, selectedCount.value)

    losers.value = normalizedLosers
    lastUpdate.value = new Date().toLocaleTimeString()
  }
  catch (e) {
    console.error('❌ Failed to load losers:', e)
    error.value = 'Failed to load top losers. Please try again.'
    losers.value = []
  }
  finally {
    loading.value = false
  }
}

async function refreshData() {
  await loadLosers()
}



// WebSocket handlers
function handlePriceUpdate(data) {
  const loser = losers.value.find(l => l.symbol === data.symbol)
  if (loser) {
    loser.price = data.price
    loser.close = data.price
    // Recalculate percentage if we have the necessary data
    if (loser.previous_close || loser.prev_close) {
      const prevClose = loser.previous_close || loser.prev_close
      const change = data.price - prevClose
      loser.change = change
      loser.pct = (change / prevClose) * 100
    }
  }
}

function setupWebSocket() {
  addMessageHandler('price', handlePriceUpdate)
}

// Watchers
watch([selectedCount, selectedMarket], () => {
  loadLosers()
})

// Lifecycle
onMounted(async () => {
  await loadLosers()
  setupWebSocket()
  connect()
})

onBeforeUnmount(() => {
  // Cleanup if needed
})
</script>

<style lang="scss" scoped>
.top-losers-view {
  padding: 2rem;
  margin: 0 auto;
}

.stat-item {
  text-align: center;

  .title3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
  }
}


</style>
