import { createRouter, createWebHashHistory } from "vue-router";

const BASE_TITLE = "Fishing Guide | "
const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('@/views/Home.vue'),
    meta: {title: BASE_TITLE + 'Home'}
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('@/views/AboutFishing/Tools.vue'),
    meta: {title: BASE_TITLE + '道具について'}
  },
  {
    path: '/Unit',
    name: 'Unit',
    component: () => import('@/views/AboutFishing/Unit.vue'),
    meta: {title: BASE_TITLE + '単位について'}
  },
  {
    path: '/Rule',
    name: 'Rule',
    component: () => import('@/views/AboutFishing/Rule.vue'),
    meta: {title: BASE_TITLE + 'ルール・マナーについて'}
  },
  {
    path: '/First',
    name: 'First',
    component: () => import('@/views/AboutFishing/First.vue'),
    meta: {title: BASE_TITLE + '初心者はこちら'}
  },
  {
    path: '/method1',
    name: 'Method1',
    component: () => import('@/views/Fishing/Method1.vue'),
    meta: {title: BASE_TITLE + '船釣りアジ釣り'}
  },
  {
    path: '/method2',
    name: 'Method2',
    component: () => import('@/views/Fishing/Method2.vue'),
    meta: {title: BASE_TITLE + '陸上サビキ釣り'}
  },
  {
    path: '/method3',
    name: 'Method3',
    component: () => import('@/views/Fishing/Method3.vue'),
    meta: {title: BASE_TITLE + 'ニジマス釣り'}
  },
  {
    path: '/method4',
    name: 'Method4',
    component: () => import('@/views/Fishing/Method4.vue'),
    meta: {title: BASE_TITLE + '海上釣り堀'}
  },
  {
    path: '/Method5',
    name: 'Method5',
    component: () => import('@/views/Fishing/Method5.vue'),
    meta: {title: BASE_TITLE + 'ワカサギ釣り'}
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: {title: BASE_TITLE + '404 not found'}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

const DEFAULT_TITLE = "Fishing Guide";
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;