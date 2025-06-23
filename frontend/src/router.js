import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/dashboard.vue'
import Trading from './views/trading.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/trading',
    name: 'trading',
    component: Trading,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
