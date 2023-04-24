import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { adminRoutes, clientRoutes, staffRoutes } from '@/router/routes';

/**
 * 集成路由表
 * 
 * @type {RouteRecordRaw}
 * @property {object} meta - 路由資訊
 * @property {boolean} meta.title - 頁面標題
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'DineTech 餐飲 iPad POS 系統 ',
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/TheErrorPage.vue'),
    meta: {
      title: '找不到頁面',
    }
  },
  adminRoutes,
  clientRoutes,
  staffRoutes,
]

// 建立路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 動態更新頁面標題
router.beforeEach((to, from, next) => {
  if(to.meta.title) document.title = to.meta.title.toString();
  next();
})

export default router
