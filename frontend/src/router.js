import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue'),
  },
  {
    path: '/trading',
    name: 'trading',
    component: () => import('@/views/trading.vue'),
  },
  {
    path: '/trading/:symbol',
    name: 'ticker',
    component: () => import('@/views/ticker.vue'),
    props: true
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

export default router
