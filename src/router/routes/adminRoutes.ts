import type { RouteRecordRaw } from 'vue-router';

/**
 * 店長端路由
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
const adminRoutes: RouteRecordRaw[] =[ 
  {
    path: '/admin',
    name: 'adminApp',
    redirect: { name: 'adminLogin' },
    meta: {
        equiresAuth: false,
          title: '管理員進入頁'
    },
    children: [
      {
        path: 'login',
        name: 'adminLogin',
        component: () => import('@/views/admin/Login.vue'),
        meta: {
          requiresAuth: false,
          title: 'DineTech 餐飲管理系統 | Login',
        }
      },
    ],
  },
  {
    path: '/admin',
    name: 'adminLayoutPage',
    component: () => import('@/layouts/admin/adminLayoutPage.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/admin/Products.vue'),
        meta: {
          requiresAuth: true,
          title: '商品管理',
        }
      },
      {
        path: 'sales',
        name: 'adminSales',
        redirect: { name: 'adminSalesProduct' },
        meta: {
              requiresAuth: true,
              title: '銷售管理',
            },
        children: [
          {
            path: 'product',
            name: 'adminSalesProduct',
            component: () => import('@/views/admin/SalesProduct.vue'),
            meta: {
              requiresAuth: true,
              title: '銷售管理 - 銷售商品',
            }
          },
          {
            path: 'menu',
            name: 'adminSalesMenu',
            component: () => import('@/views/admin/SalesMenu.vue'),
            meta: {
              requiresAuth: true,
              title: '銷售管理 - 銷售菜單',
            }
          },
        ],
      },
      {
        path: 'coupons',
        name: 'adminCoupons',
        component: () => import('@/views/admin/Coupons.vue'),
        meta: {
          requiresAuth: true,
          title: '折扣管理',
        }
      },
      {
        path: 'orders',
        name: 'adminOrders',
        redirect: { name: 'adminRecord' },
        meta: {
                requiresAuth: true,
                title: '訂單管理',
              },
        children: [
          {
            path: 'record',
            name: 'adminRecord',
            component: () => import('@/views/admin/OrdersRecord.vue'),
            meta: {
              requiresAuth: true,
              title: '訂單管理 - 訂單紀錄',
            }
          },
          {
            path: 'report',
            name: 'adminReport',
            component: () => import('@/views/admin/OrdersReport.vue'),
            meta: {
              requiresAuth: true,
              title: '訂單管理 - 營業報表',
            }
          },
        ],
      },
    ],
  },
]

export default adminRoutes;