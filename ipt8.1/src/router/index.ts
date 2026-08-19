import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Egor from '@/pages/egor.vue'
import Zeo from '@/pages/zoe.vue'
import Sanjivan from '@/pages/sanjivan.vue'
import Gian from '@/pages/gian.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/egor',
      name: 'egor',
      component: Egor,
    },
    {
      path: '/zoe',
      name: 'zoe',
      component: Zeo,
    },
    {
      path: '/sanjivan',
      name: 'sanjivan',
      component: Sanjivan,
    },
    {
      path: '/gian',
      name: 'gian',
      component: Gian,
    },
  ],
})

export default router
