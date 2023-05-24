<template>
  <nav class="flex justify-between px-4 py-3 border-b-gray-d4 h-14">
    <div>
      <img src="../../assets/images/admin/img_logo_lilybellavita.svg" alt="" />
    </div>
    <div class="flex justify-center">
      <div class="flex items-center">
        <img src="../../assets/images/admin/admin-icon-user.png" alt="" />
        <p class="text-sm font-bold px-3">店長</p>
        <p class="text-sm text-gray-66">|</p>
        <p class="text-sm text-gray-66 px-3">Gill WUUU</p>
      </div>
      <button
        class="flex justify-center bg-gray-d4 rounded-lg px-3 py-1.5 hover:bg-gray-1d hover:text-white"
      >
        <img src="../../assets/images/admin/admin-icon-exit.png" alt="" class="pr-2 pt-1" />
        <p class="text-sm">登出</p>
      </button>
    </div>
  </nav>

  <div class="grid grid-cols-5 bg-primary-bg h-screen border-t border-g4">
    <!-- Side Bar -->
    <div class="hidden md:flex flex-col text-white bg-gray-33 col-span-1">
      <router-link
        to="/admin/products"
        class="flex p-3 text-sm text-end hover:bg-gray-1d focus:bg-gray-1d"
      >
        <img src="../../assets/images/admin/admin-icon-products.png" alt="" class="pr-3" />
        商品管理
      </router-link>

      <div class="flex flex-col mb-2">
        <div class="flex p-3 text-sm">
          <img src="../../assets/images/admin/admin-icon-sales.png" alt="" class="pr-3" />
          銷售管理
        </div>
        <div class="flex flex-col text-sm pl-16">
          <router-link to="/admin/sales/product" class="mb-2">銷售商品</router-link>
          <router-link to="/admin/sales/menu">銷售菜單</router-link>
        </div>
      </div>

      <router-link to="/admin/coupons" class="flex p-3 text-sm">
        <img src="../../assets/images/admin/admin-icon-coupons.png" alt="" class="pr-3" />
        折扣管理
      </router-link>

      <div class="flex flex-col mb-2">
        <div class="flex p-3 text-sm">
          <img src="../../assets/images/admin/admin-icon-order.png" alt="" class="pr-3" />
          訂單管理
        </div>
        <div class="flex flex-col text-sm pl-16">
          <router-link to="/admin/orders/record" class="mb-2">訂單記錄</router-link>
          <router-link to="/admin/orders/report">營業報表</router-link>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="col-span-5 md:col-span-4 mx-10">
      <router-view />
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  }
})
</script>