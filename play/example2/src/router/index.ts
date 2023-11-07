import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        label: '首页'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        label: '关于'
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/effect-scope',
      name: 'effectScope',
      meta: {
        label: 'effectScope'
      },
      component: () => import('../views/EffectScopeView.vue')
    }
  ]
})

export default router
