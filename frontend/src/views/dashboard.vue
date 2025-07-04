<template lang="pug">
.w-space-xl.dark--bg.w-min-h-screen
  .title1 Portfolio Dashboard

  //- Account Summary
  .w-flex.gap4.mt6(v-if="account")
    .gradient-card.pa4.grow
      .text-upper.size--sm.op4 Account Balance
      .title2.mt2
        span.op6.mr1 $
        | {{ account.cash ? parseFloat(account.cash).toLocaleString() : '0.00' }}
    .gradient-card.pa4.grow
      .text-upper.size--sm.op4 Portfolio Value
      .title2.mt2
        span.op6.mr1 $
        | {{ account.portfolio_value ? parseFloat(account.portfolio_value).toLocaleString() : '0.00' }}
    .gradient-card.pa4.grow
      .text-upper.size--sm.op4 Buying Power
      .title2.mt2
        span.op6.mr1 $
        | {{ account.buying_power ? parseFloat(account.buying_power).toLocaleString() : '0.00' }}

  portfolio-chart.mt6(:history="history")
  trade-history.mt6(:history="tradingHistory")
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PortfolioChart from '@/components/portfolio-chart.vue'
import TradeHistory from '@/components/trade-history.vue'
import { fetchPortfolio, fetchTradingHistory, fetchAccount } from '@/api'

const history = ref([])
const tradingHistory = ref([])
const account = ref(null)
const loadingHistory = ref(false)
let ws = null

async function fetchPortfolioData() {
  try {
    const data = await fetchPortfolio()
    history.value = data.history || []
  } catch (err) {
    console.error('Error fetching portfolio:', err)
  }
}

async function fetchHistory() {
  try {
    loadingHistory.value = true
    const data = await fetchTradingHistory(100)
    tradingHistory.value = data || []
  }
  catch (err) {
    console.error('Error fetching Alpaca trading history:', err)
    tradingHistory.value = []
  }
  finally {
    loadingHistory.value = false
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
          fetchHistory()
        }

        if (data.type === 'trade') {
          console.log('📈 New trade received:', data)
          // Refresh trading history when new trades occur
          fetchHistory()
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

onMounted(() => {
  fetchPortfolioData()
  fetchAccountData()
  fetchHistory()
  connectWebSocket() // WS for real-time market data only.
})

onUnmounted(() => {
  if (ws) {
    ws.close()
    ws = null
  }
})
</script>
