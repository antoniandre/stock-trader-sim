<template lang="pug">
.top-gainers-view
  w-button.mt2.ml8.pl2(@click="$router.push('/trading')" text round absolute left)
    icon.w-icon.mr2(icon="mdi:arrow-left")
    | Back to Trading

  .w-flex.align-center.justify-between.gap3.mb4
    .title1 Top Gainers
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
    p.op5.mt4 Loading top gainers...

  //- Error State
  .error-message.w-flex.column.py12.align-center.justify-center(v-else-if="error")
    w-icon(color="error" size="4rem") wi-info-circle
    h2.title2.error.mt4.mb2 Oops!
    p.mb4 {{ error }}
    w-button(@click="refreshData" text bg-color="error" round) Try again

  //- Content
  div(v-else)
    //- Summary Stats
    .glass-box.pa4.mb4(v-if="gainers.length > 0")
      .w-flex.align-center.justify-between.gap4.wrap
        .stat-item
          .title3.currency-positive {{ gainers.length }}
          .size--sm.op6 Total Gainers
        .stat-item(v-if="topGainer")
          .title3.currency-positive +{{ topGainer.pct?.toFixed(2) || 'N/A' }}%
          .size--sm.op6 Top Performer: {{ topGainer.symbol }}
        .stat-item
          .title3 {{ averageGain?.toFixed(2) || 'N/A' }}%
          .size--sm.op6 Average Gain

    //- Gainers Grid
    w-grid.gap4(:columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }")
      ticker-card(
        v-for="gainer in gainers"
        :key="gainer.symbol"
        :stock="gainer"
        @click="$router.push(`/trading/${gainer.symbol}`)")

    //- Empty State
    .w-flex.column.py12.align-center.justify-center(v-if="!loading && gainers.length === 0")
      w-icon(color="info" size="4rem") wi-trending-up
      h2.title2.info.mt4.mb2 No Gainers Found
      p.mb4 No stocks are showing gains at the moment.
      w-button(@click="refreshData" color="info" round) Refresh Data
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { fetchTopMovers, fetchBatchTrends } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import TickerCard from '@/components/ticker-card.vue'

// State.
const gainers = ref([])
const loading = ref(true)
const error = ref(null)
const selectedCount = ref(20)
const selectedMarket = ref('stocks')

// Options.
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

// WebSocket.
const { wsConnected, lastUpdate, connect, addMessageHandler } = useWebSocket()

// Computed.
const topGainer = computed(() => {
  if (gainers.value.length === 0) return null
  return gainers.value.reduce((top, current) => {
    const topPct = top.pct || 0
    const currentPct = current.pct || 0
    return currentPct > topPct ? current : top
  })
})

const averageGain = computed(() => {
  if (gainers.value.length === 0) return 0
  const validGains = gainers.value.filter(g => g.pct != null && !isNaN(g.pct))
  if (validGains.length === 0) return 0
  const sum = validGains.reduce((acc, g) => acc + g.pct, 0)
  return sum / validGains.length
})

// Helper function to extract percentage.
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

// Data fetching.
async function loadGainers() {
  try {
    loading.value = true
    error.value = null

    const payload = await fetchTopMovers(selectedCount.value, selectedMarket.value)
    const data = payload?.data || payload

    // Extract gainers.
    let gainersData = Array.isArray(data?.gainers) ? data.gainers : []

    if (!gainersData.length) {
      const list = Array.isArray(data?.movers) ? data.movers : (Array.isArray(data) ? data : [])
      if (list.length) {
        gainersData = list.filter(r => (r.change ?? r.change_value ?? 0) > 0)
      }
    }

    // Normalize and sort by percentage gain.
    const normalizedGainers = gainersData
      .map(r => ({
        ...r,
        pct: extractPercent(r),
        // Map to ticker-card expected format.
        symbol: r.symbol,
        name: r.name || r.symbol,
        price: r.price || r.close || r.latest_close,
        lastSide: 'buy', // Default for gainers.
        currency: 'USD',
        currencySymbol: '$',
        marketState: 'open', // Default for now.
        marketMessage: 'Open'
      }))
      .filter(r => r.pct != null && r.pct > 0)
      .sort((a, b) => (b.pct || 0) - (a.pct || 0))
      .slice(0, selectedCount.value)

          // Load trend data for all gainers in batch (much faster!).
      try {
        const symbols = normalizedGainers.map(g => g.symbol)
        const trendsResponse = await fetchBatchTrends(symbols, 20)

        if (trendsResponse) {
          // Attach trend data to each gainer.
          normalizedGainers.forEach(gainer => {
            const trendInfo = trendsResponse[gainer.symbol]
            if (trendInfo) {
              gainer.trendData = trendInfo.data || []
              gainer.trendFallback = trendInfo.fallback || null
            }
            else {
              gainer.trendData = []
              gainer.trendFallback = null
            }
          })
        }
      }
      catch (trendError) {
        console.warn('⚠️ Batch trend loading failed, ticker cards will load individually:', trendError.message)
        // Set empty trend data so ticker cards will load individually.
        normalizedGainers.forEach(gainer => {
          gainer.trendData = []
          gainer.trendFallback = null
        })
      }

      gainers.value = normalizedGainers
      lastUpdate.value = new Date().toLocaleTimeString()
  }
  catch (e) {
    console.error('❌ Failed to load gainers:', e)
    error.value = 'Failed to load top gainers. Please try again.'
    gainers.value = []
  }
  finally {
    loading.value = false
  }
}

async function refreshData() {
  await loadGainers()
}

// WebSocket handlers.
function handlePriceUpdate(data) {
  const gainer = gainers.value.find(g => g.symbol === data.symbol)
  if (gainer) {
    gainer.price = data.price
    gainer.close = data.price
    // Recalculate percentage if we have the necessary data.
    if (gainer.previous_close || gainer.prev_close) {
      const prevClose = gainer.previous_close || gainer.prev_close
      const change = data.price - prevClose
      gainer.change = change
      gainer.pct = (change / prevClose) * 100
    }
  }
}

function setupWebSocket() {
  addMessageHandler('price', handlePriceUpdate)
}

// Watchers
watch([selectedCount, selectedMarket], () => {
  loadGainers()
})

// Lifecycle
onMounted(async () => {
  await loadGainers()
  setupWebSocket()
  connect()
})
</script>

<style lang="scss" scoped>
.top-gainers-view {
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
