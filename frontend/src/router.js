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
    name: 'trading',
    component: () => import('@/views/trading.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'top-gainers',
        name: 'top-gainers',
        component: () => import('@/views/top-gainers.vue')
      },
      {
        path: 'top-losers',
        name: 'top-losers',
        component: () => import('@/views/top-losers.vue')
      },
      {
        path: ':symbol',
        name: 'ticker',
        component: () => import('@/views/ticker.vue'),
        props: true
      },
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
