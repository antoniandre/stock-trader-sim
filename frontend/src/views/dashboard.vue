<template lang="pug">
.w-space-xl.dark--bg
  .w-flex.justify-space-between.align-center
    .title1 Portfolio Dashboard
    w-button.mr-2(@click="fetchHistory" text round)
      icon.w-icon.mr2(:class="{ 'w-icon--spin': portfolio.loading }" icon="mdi:refresh")
      | Refresh

  //- Account Summary.
  .w-flex.gap4.mt6(v-if="account")
    .gradient-card.grow
      .gradient-card__wrap
        .text-upper.size--xs.op5 Account Balance
        .title2.mt3.text-center(v-html="formatCurrency(account.cash)")
    .gradient-card.grow
      .gradient-card__wrap
        .text-upper.size--xs.op5 Portfolio Value
        .title2.mt3.text-center(v-html="formatCurrency(account.portfolio_value)")
    .gradient-card.grow
      .gradient-card__wrap
        .text-upper.size--xs.op5 Buying Power
        .title2.mt3.text-center(v-html="formatCurrency(account.buying_power)")

  portfolio-chart.mt6(:history="portfolio.portfolioHistory" @period-change="onPeriodChange")
  open-positions.mt6
  trade-history.mt6(:refresh-token="tradeHistoryRefresh")
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide, reactive } from 'vue'
import { fetchDashboard, fetchPortfolioHistory } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import { usePageTitle } from '@/composables/use-page-title'
import PortfolioChart from '@/components/portfolio-chart.vue'
import OpenPositions from '@/components/open-positions.vue'
import TradeHistory from '@/components/trade-history.vue'
import { formatCurrency } from '@/utils/formatters'

const account = ref(null)
const tradeHistoryRefresh = ref(0)
const portfolio = reactive({
  portfolioHistory: null,
  trades: [],
  loading: false
})

// Use WebSocket composable.
const { addMessageHandler } = useWebSocket()

// Batch fetch all dashboard data in one call.
async function fetchDashboardData() {
  try {
    portfolio.loading = true
    const data = await fetchDashboard(0, 'open', 100)

    // Update account.
    account.value = data.account || null

    // Note: positions and orders are handled by their respective components via WebSocket updates.
    // Trading history is loaded inside `trade-history.vue` (server-paginated).
  }
  catch (err) {
    console.error('Error fetching dashboard data:', err)
    account.value = null
  }
  finally {
    portfolio.loading = false
  }
}

// Legacy function for compatibility (used by provide/inject and WebSocket).
async function fetchHistory() {
  tradeHistoryRefresh.value += 1
  await fetchDashboardData()
}

async function fetchPortfolioHistoryData(period = '1M') {
  try {
    // Map period to appropriate timeframe based on Alpaca API restrictions.
    let timeframe = '1D' // Default to 1D which works for all periods.

    // Only use intraday timeframes for short periods (less than 30 days).
    // 1 day can use hourly data.
    if (period === '1D') timeframe = '1H'
    // For 1M, 12M, and ALL, use daily data to avoid 422 errors.
    // (Alpaca restricts intraday timeframes to periods < 30 days).

    portfolio.portfolioHistory = await fetchPortfolioHistory(period, timeframe)
  }
  catch (err) {
    console.error('Error fetching portfolio history:', err)
    portfolio.portfolioHistory = null
  }
}

function onPeriodChange(period) {
  fetchPortfolioHistoryData(period)
}

// WebSocket message handlers.
function handleAccountUpdate(data) {
  console.log('📊 Account update received:', data)
  // Update account directly from WebSocket data if available, otherwise refresh.
  if (data.account) {
    account.value = data.account
  }
  else {
    fetchDashboardData()
  }
  // Only refresh portfolio history if needed (not on every update).
  if (data.portfolioValue !== undefined) {
    fetchPortfolioHistoryData()
  }
}

function handleTrade(data) {
  console.log('📈 New trade received:', data)
  // Refresh trading history when new trades occur.
  fetchHistory()
  // Only refresh portfolio history if this trade affects portfolio value.
  fetchPortfolioHistoryData()
}

// Set up WebSocket handlers.
function setupWebSocket() {
  addMessageHandler('account-update', handleAccountUpdate)
  addMessageHandler('trade', handleTrade)
}

provide('fetchHistory', () => {
  fetchHistory()
  fetchPortfolioHistoryData()
})

usePageTitle('Dashboard')

onMounted(() => {
  fetchDashboardData()
  fetchPortfolioHistoryData()
  setupWebSocket()
})

onUnmounted(() => {
  // WebSocket cleanup is handled by the composable.
})
</script>
