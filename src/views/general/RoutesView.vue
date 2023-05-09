<template>
  <div class="container mx-auto my-4">
    <h1 class="text-2xl font-bold my-3">DineTech 餐飲 POS 系統 所有頁面路由（北 4 組）</h1>
    <table class="divide-y divide-gray-200 dark:divide-gray-700 border">
      <thead class="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th class="px-6 py-3 text-left">頁面名稱</th>
          <th class="px-6 py-3 text-left">角色</th>
          <th class="px-6 py-3 text-left">路由</th>
          <th class="px-6 py-3 text-left">網址</th>
          <th class="px-6 py-3 text-left">是否需要登入</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr
          v-for="item in general"
          :key="item.path"
          class="hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <td class="px-6 py-3">
            <router-link
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
              :to="item.path"
            >
              {{ item.name }}
            </router-link>
          </td>
          <td class="px-6 py-3">
            <span class="bg-amber-200 p-1 whitespace-nowrap rounded-md">{{ item.role }}</span>
          </td>
          <td class="px-6 py-3">{{ item.path }}</td>
          <td class="px-6 py-3">
            <a
              :href="item.url"
              target="_blank"
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
            >
              {{ item.url }}
            </a>
          </td>
          <td class="px-6 py-3"><span class="bg-gray-200 p-1 rounded-md">否</span></td>
        </tr>
        <tr
          v-for="item in client"
          :key="item.path"
          class="hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <td class="px-6 py-3">
            <router-link
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
              :to="item.path"
            >
              {{ item.name }}
            </router-link>
          </td>
          <td class="px-6 py-3">
            <span class="bg-violet-200 p-1 whitespace-nowrap rounded-md">{{ item.role }}</span>
          </td>
          <td class="px-6 py-3">{{ item.path }}</td>
          <td class="px-6 py-3">
            <a
              :href="item.url"
              target="_blank"
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
            >
              {{ item.url }}
            </a>
          </td>
          <td class="px-6 py-3"><span class="bg-gray-200 p-1 rounded-md">否</span></td>
        </tr>
        <tr v-for="item in staff" :key="item.path" class="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td class="px-6 py-3">
            <router-link
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
              :to="item.path"
            >
              {{ item.name }}
            </router-link>
          </td>
          <td class="px-6 py-3">
            <span class="bg-blue-200 p-1 whitespace-nowrap rounded-md">{{ item.role }}</span>
          </td>
          <td class="px-6 py-3">{{ item.path }}</td>
          <td class="px-6 py-3">
            <a
              :href="item.url"
              target="_blank"
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
            >
              {{ item.url }}
            </a>
          </td>
          <td class="px-6 py-3"><span class="bg-orange-200 p-1 rounded-md">是</span></td>
        </tr>
        <tr v-for="item in admin" :key="item.path" class="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td class="px-6 py-3">
            <router-link
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
              :to="item.path"
            >
              {{ item.name }}
            </router-link>
          </td>
          <td class="px-6 py-3">
            <span class="bg-emerald-200 p-1 whitespace-nowrap rounded-md">{{ item.role }}</span>
          </td>
          <td class="px-6 py-3">{{ item.path }}</td>
          <td class="px-6 py-3">
            <a
              :href="item.url"
              target="_blank"
              class="font-medium text-cyan-700 dark:text-blue-500 hover:underline"
            >
              {{ item.url }}
            </a>
          </td>
          <td class="px-6 py-3"><span class="bg-orange-200 p-1 rounded-md">是</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      general: [
        { name: '首頁', role: '共用', path: '/', url: 'https://dinetech-frondend.onrender.com' },
        {
          name: '錯誤頁面',
          role: '共用',
          path: '/:pathMatch(.*)*',
          url: 'https://dinetech-frondend.onrender.com/error/404'
        }
      ],
      client: [
        {
          name: '系統展示 - 進入頁',
          role: '顧客端',
          path: '/client',
          url: 'https://dinetech-frondend.onrender.com/client'
        },
        {
          name: '系統展示 - 主選單',
          role: '顧客端',
          path: '/client/main-menu',
          url: 'https://dinetech-frondend.onrender.com/client/main-menu'
        },
        {
          name: '系統展示 - 今日訂單明細',
          role: '顧客端',
          path: '/client/today-orders',
          url: 'https://dinetech-frondend.onrender.com/client/today-orders'
        },
        {
          name: '系統展示 - 意見回饋',
          role: '顧客端',
          path: '/client/feedback',
          url: 'https://dinetech-frondend.onrender.com/client/feedback'
        }
      ],
      staff: [
        {
          name: '系統展示 - 登入頁',
          role: '店員端',
          path: '/staff/login',
          url: 'https://dinetech-frondend.onrender.com/staff/login'
        },
        {
          name: '系統展示 - 訂單管理',
          role: '店員端',
          path: '/staff/orders',
          url: 'https://dinetech-frondend.onrender.com/staff/orders'
        },
        {
          name: '系統展示 - 訂單管理 - 準備中桌次',
          role: '店員端',
          path: '/staff/orders/preparing/:id',
          url: 'https://dinetech-frondend.onrender.com/staff/orders/preparing/:id'
        },
        {
          name: '系統展示 - 訂單管理 - 訂單明細',
          role: '店員端',
          path: '/staff/orders/detail/:id',
          url: 'https://dinetech-frondend.onrender.com/staff/orders/detail/:id'
        },
        {
          name: '系統展示 - 結帳管理',
          role: '店員端',
          path: '/staff/checkout',
          url: 'https://dinetech-frondend.onrender.com/staff/checkout'
        },
        {
          name: '系統展示 - 結帳管理 - 訂單明細',
          role: '店員端',
          path: '/staff/checkout/:id',
          url: 'https://dinetech-frondend.onrender.com/staff/checkout/:id'
        }
      ],
      admin: [
        {
          name: '系統展示 - 登入頁',
          role: '店長端',
          path: '/admin/login',
          url: 'https://dinetech-frondend.onrender.com/admin/login'
        },
        {
          name: '系統展示 - 商品管理',
          role: '店長端',
          path: '/admin/products',
          url: 'https://dinetech-frondend.onrender.com/admin/products'
        },
        {
          name: '系統展示 - 銷售管理-銷售商品',
          role: '店長端',
          path: '/admin/sales/product',
          url: 'https://dinetech-frondend.onrender.com/admin/sales/product'
        },
        {
          name: '系統展示 - 銷售管理-銷售菜單',
          role: '店長端',
          path: '/admin/sales/menu',
          url: 'https://dinetech-frondend.onrender.com/admin/sales/menu'
        },
        {
          name: '系統展示 - 折扣管理',
          role: '店長端',
          path: '/admin/coupons',
          url: 'https://dinetech-frondend.onrender.com/admin/coupons'
        },
        {
          name: '系統展示 - 訂單管理-訂單記錄',
          role: '店長端',
          path: '/admin/orders/record',
          url: 'https://dinetech-frondend.onrender.com/admin/orders/record'
        },
        {
          name: '系統展示 - 訂單管理-營業報表',
          role: '店長端',
          path: '/admin/orders/report',
          url: 'https://dinetech-frondend.onrender.com/admin/orders/report'
        }
      ]
    }
  }
})
</script>
