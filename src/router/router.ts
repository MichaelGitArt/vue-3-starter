import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  {
    component: Home,
    path: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
