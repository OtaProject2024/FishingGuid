import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Tools from '@/views/AboutFishing/Tools.vue'
import Unit from '@/views/AboutFishing/Unit.vue'

import Method1 from '@/views/Fishing/Method1.vue'
import Method2 from '@/views/Fishing/Method2.vue'
import Method3 from '@/views/Fishing/Method3.vue'
import Method4 from '@/views/Fishing/Method4.vue'
import Method5 from '@/views/Fishing/Method5.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/Unit',
    name: 'Unit',
    component: Unit
  },
  {
    path: '/method1',
    name: 'Method1',
    component: Method1
  },
  {
    path: '/method2',
    name: 'Method2',
    component: Method2
  },
  {
    path: '/method3',
    name: 'Method3',
    component: Method3
  },
  {
    path: '/method4',
    name: 'Method4',
    component: Method4
  },
  {
    path: '/Method5',
    name: 'Method5',
    component: Method5
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0};
  },
})

export default router;