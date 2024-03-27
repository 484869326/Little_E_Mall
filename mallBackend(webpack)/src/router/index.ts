import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import LocalCache from '@/utils/cache';
import { firstMenu } from '@/utils/map-menus';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/404.vue')
  }
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});
//路由守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const userinfo = LocalCache.getCache('userinfo');
    if (!userinfo) {
      return '/login';
    }
  }
  if (to.path === '/main') {
    return firstMenu.path;
  }
});
export default router;
