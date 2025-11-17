<template lang="pug">
.w-space-xl.dark--bg.w-min-h-screen
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
  trade-history.mt6(:history="portfolio.history" :loading="portfolio.loading")
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide, reactive } from 'vue'
import { fetchPortfolio, fetchTradingHistory, fetchAccount, fetchPortfolioHistory } from '@/api'
import { useWebSocket } from '@/composables/web-socket'
import PortfolioChart from '@/components/portfolio-chart.vue'
import OpenPositions from '@/components/open-positions.vue'
import TradeHistory from '@/components/trade-history.vue'
import { formatCurrency } from '@/utils/formatters'

const account = ref(null)
const portfolio = reactive({
  history: [],
  portfolioHistory: null,
  trades: [],
  loading: false
})

// Use WebSocket composable.
const { connect, addMessageHandler } = useWebSocket()

async function fetchPortfolioData() {
  try {
    const data = await fetchPortfolio()
    portfolio.history = data.history || []
    portfolio.trades = data.trades || []
  }
  catch (err) {
    console.error('Error fetching portfolio:', err)
  }
  fetchHistory()
}

async function fetchHistory() {
  try {
    portfolio.loading = true
    portfolio.history = await fetchTradingHistory(100) || []
  }
  catch (err) {
    console.error('Error fetching Alpaca trading history:', err)
    portfolio.history = []
  }
  finally {
    portfolio.loading = false
  }
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

async function fetchAccountData() {
  try {
    const data = await fetchAccount()
    account.value = data
  }
  catch (err) {
    console.error('Error fetching account data:', err)
    account.value = null
  }
}

// WebSocket message handlers.
function handleAccountUpdate(data) {
  console.log('📊 Account update received:', data)
  // Refresh account data when updates are received.
  fetchAccountData()
  fetchPortfolioHistoryData()
}

function handleTrade(data) {
  console.log('📈 New trade received:', data)
  // Refresh trading history when new trades occur.
  fetchHistory()
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

onMounted(() => {
  fetchPortfolioData()
  fetchPortfolioHistoryData()
  fetchAccountData()
  setupWebSocket()
  connect() // WS for real-time market data only.
})

onUnmounted(() => {
  // WebSocket cleanup is handled by the composable.
})
</script>
