<template lang="pug">
.w-space-xl.dark--bg.w-min-h-screen
  .w-flex.justify-space-between.align-center
    .title1 Portfolio Dashboard
    w-button(@click="fetchHistory" text round)
      w-icon.mr2(:spin="portfolio.loading" sm) wi-spinner
      | Refresh

  //- Account Summary
  .w-flex.gap4.mt6(v-if="account")
    .gradient-card.grow
      .gradient-card__wrap
        .text-upper.size--xs.op5 Account Balance
        .title2.mt3.text-center
          span.op6.mr1 $
          span(:class="account.cash > 0 ? 'success-light3' : (account.cash ? 'error' : 'white')")
            | {{ account.cash ? parseFloat(account.cash).toLocaleString() : '0.00' }}
    .gradient-card.grow
      .gradient-card__wrap
        .text-upper.size--xs.op5 Portfolio Value
        .title2.mt3.text-center
          span.op6.mr1 $
          span(:class="account.portfolio_value > 0 ? 'success-light3' : (account.portfolio_value ? 'error' : 'white')")
            | {{ account.portfolio_value ? parseFloat(account.portfolio_value).toLocaleString() : '0.00' }}
    .gradient-card.grow
      .gradient-card__wrap
        .text-upper.size--xs.op5 Buying Power
        .title2.mt3.text-center
          span.op6.mr1 $
          span(:class="account.buying_power > 0 ? 'success-light3' : (account.buying_power ? 'error' : 'white')")
            | {{ account.buying_power ? parseFloat(account.buying_power).toLocaleString() : '0.00' }}

  portfolio-chart.mt6(:history="portfolio.portfolioHistory")
  open-positions.mt6
  trade-history.mt6(:history="portfolio.history" :loading="portfolio.loading")
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide, reactive } from 'vue'
import { fetchPortfolio, fetchTradingHistory, fetchAccount, fetchPortfolioHistory } from '@/api'
import PortfolioChart from '@/components/portfolio-chart.vue'
import OpenPositions from '@/components/open-positions.vue'
import TradeHistory from '@/components/trade-history.vue'

let ws = null
const account = ref(null)
const portfolio = reactive({
  history: [],
  portfolioHistory: null,
  trades: [],
  loading: false
})

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

async function fetchPortfolioHistoryData() {
  try {
    // Use 1M (1 month) period with 1D (daily) intervals to match the typical portfolio view
    portfolio.portfolioHistory = await fetchPortfolioHistory('1M', '1D')
    console.log('📊 Portfolio history fetched:', {
      hasData: !!portfolio.portfolioHistory,
      dataType: portfolio.portfolioHistory ? 'portfolio' : 'none',
      timestamps: portfolio.portfolioHistory?.timestamp?.length || 0,
      firstValue: portfolio.portfolioHistory?.equity?.[0],
      lastValue: portfolio.portfolioHistory?.equity?.[portfolio.portfolioHistory?.equity?.length - 1]
    })
  }
  catch (err) {
    console.error('Error fetching portfolio history:', err)
    portfolio.portfolioHistory = null
  }
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

function connectWebSocket() {
  try {
    console.log('🔌 Connecting to WebSocket for dashboard updates...')
    ws = new WebSocket('ws://localhost:3000')

    ws.onopen = () => {
      console.log('✅ Dashboard WebSocket connected')
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)

        if (data.type === 'account-update') {
          console.log('📊 Account update received:', data)
          // Refresh account data when updates are received
          fetchAccountData()
          fetchPortfolioHistoryData()
        }

        if (data.type === 'trade') {
          console.log('📈 New trade received:', data)
          // Refresh trading history when new trades occur
          fetchHistory()
          fetchPortfolioHistoryData()
        }
      }
      catch (err) {
        console.error('Error parsing WebSocket message:', err)
      }
    }

    ws.onerror = (err) => {
      console.error('❌ Dashboard WebSocket error:', err)
    }

    ws.onclose = () => {
      console.log('🔌 Dashboard WebSocket disconnected')
      // Reconnect after 5 seconds
      setTimeout(connectWebSocket, 5000)
    }
  }
  catch (err) {
    console.error('Failed to create WebSocket:', err)
  }
}

provide('fetchHistory', () => {
  fetchHistory()
  fetchPortfolioHistoryData()
})

onMounted(() => {
  fetchPortfolioData()
  fetchPortfolioHistoryData()
  fetchAccountData()
  connectWebSocket() // WS for real-time market data only.
})

onUnmounted(() => {
  if (ws) {
    ws.close()
    ws = null
  }
})
</script>
