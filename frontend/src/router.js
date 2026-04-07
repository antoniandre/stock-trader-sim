import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated, rememberAuthRedirect, requiresAuth, whenReady } from '@/stores/auth'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/auth.vue')
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/trading',
    component: () => import('@/views/trading.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: { name: 'trading-stocks' }
      },
      {
        path: 'stocks',
        name: 'trading-stocks',
        component: () => import('@/views/trading-market.vue'),
        props: { market: 'stocks' }
      },
      {
        path: 'crypto',
        name: 'trading-crypto',
        component: () => import('@/views/trading-market.vue'),
        props: { market: 'crypto' }
      },
      {
        path: 'stocks/top-gainers',
        name: 'trading-stocks-top-gainers',
        component: () => import('@/views/top-movers-view.vue'),
        props: { type: 'gainers', market: 'stocks' }
      },
      {
        path: 'stocks/top-losers',
        name: 'trading-stocks-top-losers',
        component: () => import('@/views/top-movers-view.vue'),
        props: { type: 'losers', market: 'stocks' }
      },
      {
        path: 'crypto/top-gainers',
        name: 'trading-crypto-top-gainers',
        component: () => import('@/views/top-movers-view.vue'),
        props: { type: 'gainers', market: 'crypto' }
      },
      {
        path: 'crypto/top-losers',
        name: 'trading-crypto-top-losers',
        component: () => import('@/views/top-movers-view.vue'),
        props: { type: 'losers', market: 'crypto' }
      },
      {
        path: 'stocks/:symbol',
        name: 'trading-stocks-ticker',
        component: () => import('@/views/ticker.vue'),
        props: route => ({ symbol: route.params.symbol, market: 'stocks' })
      },
      {
        path: 'crypto/:symbol',
        name: 'trading-crypto-ticker',
        component: () => import('@/views/ticker.vue'),
        props: route => ({ symbol: route.params.symbol, market: 'crypto' })
      },
      {
        path: ':symbol',
        redirect: to => ({ name: 'trading-stocks-ticker', params: { symbol: to.params.symbol } })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async to => {
  if (!to.meta.requiresAuth || !requiresAuth()) return true

  await whenReady()

  if (isAuthenticated()) return true

  rememberAuthRedirect(to.fullPath)
  return {
    name: 'auth',
    query: { mode: 'signin' }
  }
})

export default router
