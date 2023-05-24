<template>
  <div v-bind="$attrs" class="flex flex-col gap-y-4 bg-secondary-white pt-4 px-5">
    <div class="flex gap-x-4">
      <button
        type="button"
        class="w-1/2 py-4 px-6 rounded-md bg-gray-9f flex justify-center items-center gap-x-2"
        @click="toTodayOrderPage"
      >
        <span class="material-icons-outlined text-secondary-white text-lg">inventory</span>
        <span class="text-secondary-white text-lg">訂餐紀錄</span>
      </button>
      <button
        type="button"
        class="w-1/2 py-4 px-6 rounded-md bg-secondary-yellow flex justify-center items-center gap-x-2"
        @click="openCheckoutMsgModal"
      >
        <span class="material-icons-outlined text-secondary-black text-lg">monetization_on</span>
        <span class="text-secondary-black text-lg">結帳</span>
      </button>
    </div>
    <div
      class="h-[57%] xl:h-[60%] py-3 px-4 bg-gray-f7 flex flex-col gap-y-2.5 rounded-md overflow-auto"
    >
      <MealList />
    </div>
    <div class="h-[17%] bg-gray-f7 rounded-md flex flex-col justify-center gap-y-2 py-3 px-4">
      <div class="flex items-center justify-between">
        <span class="text-base text-gray-9f">小計</span>
        <span class="text-base">$ 1,300</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-base text-gray-9f">服務費 (10%)</span>
        <span class="text-base">$ 130</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-base font-bold">總金額</span>
        <span class="text-2xl text-primary-blue font-semibold">$ 1,430</span>
      </div>
    </div>
    <button
      type="button"
      class="w-full py-4 px-6 rounded-md bg-primary-orange flex justify-center items-center gap-x-2"
    >
      <span class="material-icons-outlined text-secondary-white text-2xl">shopping_cart</span>
      <span class="text-secondary-white text-lg font-bold">送出訂單</span>
    </button>
  </div>
  <CheckoutMsgModal ref="checkoutMsgModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MealList from './MealList.vue'
import CheckoutMsgModal from '@/components/client/mainMenu/CheckoutMsgModal.vue'

export default defineComponent({
  components: {
    MealList,
    CheckoutMsgModal
  },
  data() {
    return {}
  },
  methods: {
    openCheckoutMsgModal() {
      ;(this.$refs.checkoutMsgModal as typeof CheckoutMsgModal).open()
    },
    toTodayOrderPage() {
      this.$router.push({ path: '/client/today-orders' })
    }
  }
})
</script>

<style scss scoped></style>
