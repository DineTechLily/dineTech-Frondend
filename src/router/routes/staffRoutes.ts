import type { RouteRecordRaw } from 'vue-router';

/**
 * 店員端路由
 * 
 * @type {RouteRecordRaw}
 * @property {string} path - 路由路徑
 * @property {string} name - 路由名稱
 * @property {Function} component - 視圖元件
 * @property {Array.<RouteRecordRaw>} children - 子路由
 * @property {object} meta - 路由資訊
 * @property {boolean} meta.requiresAuth - 是否需要登入
 * @property {title} meta.title - 頁面標題
 */
const staffRoutes: RouteRecordRaw = {
  path: '/staff',
  name: 'staffApp',
  children: [
    {
      path: '',
      name: 'staffLandingView',
      redirect: { name: 'staffLogin' },
      meta: {
        requiresAuth: false,
        title: '店員進入頁'
      }
    },
    {
      path: 'login',
      name: 'staffLogin',
      component: () => import('@/views/staff/Login.vue'),
      meta: {
        requiresAuth: false,
        title: 'DineTech 餐飲管理系統 | Login'
      }
    },
    {
      path: 'orders',
      children: [
        {
          path: '',
          name: 'staffOrders',
          component: () => import('@/views/staff/Orders.vue'),
          meta: {
            requiresAuth: true,
            title: '訂單管理'
          }
        },
        {
          path: 'preparing/:id',
          name: 'staffOrderPreparing',
          component: () => import('@/views/staff/OrderPreparing.vue'),
          meta: {
            requiresAuth: true,
            title: '訂單管理 - 準備中訂單'
          }
        },
        {
          path: 'detail/:id',
          name: 'staffOrderDetail',
          component: () => import('@/views/staff/OrderDetail.vue'),
          meta: {
            requiresAuth: true,
            title: '訂單管理 - 訂單明細'
          }
        }
      ],
    },
    {
      path: 'checkout',
      name: 'staffCheckout',
      component: () => import('@/views/staff/Checkout.vue'),
      meta: {
        requiresAuth: true,
        title: '結帳管理'
      }
    },
    {
      path: 'checkout/:id',
      name: 'staffCheckoutDetail',
      component: () => import('@/views/staff/CheckoutDetail.vue'),
      meta: {
        requiresAuth: true,
        title: '結帳管理 - 訂單明細'
      }
    }
  ],
}

export default staffRoutes; 