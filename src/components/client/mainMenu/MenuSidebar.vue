<template>
  <Transition name="slide">
    <div
      v-show="sidebarExpand"
      v-bind="$attrs"
      class="flex flex-col bg-secondary-white pt-4 px-5 relative z-30"
    >
      <div class="flex flex-col h-full gap-y-4 w-[300px]">
        <div class="flex gap-x-4">
          <button
            type="button"
            class="w-1/2 py-4 px-4 rounded-md bg-gray-9f flex justify-center items-center gap-x-2"
            @click="toTodayOrderPage"
          >
            <span class="material-icons-outlined text-secondary-white text-lg">inventory</span>
            <span class="text-secondary-white text-lg">訂餐紀錄</span>
          </button>
          <button
            type="button"
            class="w-1/2 py-4 px-6 rounded-md bg-secondary-yellow flex justify-center items-center gap-x-2"
            @click="checkOut"
          >
            <span class="material-icons-outlined text-secondary-black text-lg">
              monetization_on
            </span>
            <span class="text-secondary-black text-lg">結帳</span>
          </button>
        </div>
        <div
          class="h-[57%] xl:h-[60%] py-3 px-4 bg-gray-f7 flex flex-col gap-y-2.5 rounded-md overflow-auto"
        >
          <MealList
            v-for="meal in tempCart"
            :key="meal._id"
            :meal="meal"
            @click:list="$emit('click:list')"
          />
        </div>
        <div class="h-[17%] bg-gray-f7 rounded-md flex flex-col justify-center gap-y-2 py-3 px-4">
          <div class="flex items-center justify-between">
            <span class="text-base text-gray-9f">小計</span>
            <span class="text-base">$ {{ totalPrice }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-base text-gray-9f">服務費 (10%)</span>
            <span class="text-base">$ {{ serviceCharge }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-base font-bold">總金額</span>
            <span class="text-2xl text-primary-blue font-semibold">$ {{ summaryPrice }}</span>
          </div>
        </div>
        <button
          v-if="isEmptyCart"
          type="button"
          class="w-full py-4 px-6 rounded-md bg-gray-f7 flex justify-center items-center gap-x-2"
          disabled
        >
          <span class="material-icons-outlined text-gray-9f text-2xl">shopping_cart</span>
          <span class="text-gray-9f text-lg font-bold">送出訂單</span>
        </button>
        <button
          v-else
          type="button"
          class="w-full py-4 px-6 rounded-md bg-primary-orange flex justify-center items-center gap-x-2"
          @click="sendOrder"
        >
          <span class="material-icons-outlined text-secondary-white text-2xl">shopping_cart</span>
          <span class="text-secondary-white text-lg font-bold">送出訂單</span>
        </button>
      </div>
      <button
        type="button"
        class="w-9 h-12 absolute top-0 -left-[36px] bg-secondary-white flex items-center justify-center border-l border-b border-gray-e9"
        @click="toggleSidebar"
      >
        <span class="material-icons-outlined text-secondary-black">menu</span>
      </button>
    </div>
  </Transition>
  <Transition name="fade">
    <MenuIconBar v-show="!sidebarExpand" />
  </Transition>
  <CheckoutMsgModal ref="checkoutMsgModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import { formatPriceToTWD } from '@/utils'
import MealList from './MealList.vue'
import CheckoutMsgModal from '@/components/client/mainMenu/CheckoutMsgModal.vue'
import MenuIconBar from '@/components/client/mainMenu/MenuIconBar.vue'
import { apiPostOrder } from '@/apis/client'

export default defineComponent({
  inheritAttrs: false,
  components: {
    MealList,
    MenuIconBar,
    CheckoutMsgModal
  },
  computed: {
    ...mapState(useClientStore, [
      'isEmptyCart',
      'sidebarExpand',
      'tempCart',
      'tempOrderId',
      'tempTableId'
    ]),
    totalPrice(): string {
      return formatPriceToTWD(this.tempCart.reduce((acc, cur) => acc + cur.total_price, 0))
    },
    serviceCharge(): string {
      return formatPriceToTWD(this.tempCart.reduce((acc, cur) => acc + cur.total_price, 0) * 0.1)
    },
    summaryPrice(): string {
      return formatPriceToTWD(this.tempCart.reduce((acc, cur) => acc + cur.total_price, 0) * 1.1)
    },
    buttonView() {
      switch (status) {
        case 'empty':
          return {
            icon: 'shopping_cart',
            text: '送出訂單',
            buttonColor: 'bg-gray-f7',
            event: () => {}
          }
        case 'loading':
          return {
            icon: 'shopping_cart',
            text: '訂單已送出',
            event: () => {}
          }
        case 'done':
          return {
            icon: 'done',
            text: '送出訂單',
            event: () => {}
          }
        default:
          return {
            icon: 'shopping_cart',
            text: '送出訂單',
            event: this.checkOut
          }
      }
    }
  },
  methods: {
    ...mapActions(useClientStore, [
      'toggleSidebar',
      'setOrderStatus',
      'resetTempData',
      'setTempOrderId',
      'setOrdersTotal'
    ]),
    async checkOut() {
      ;(this.$refs.checkoutMsgModal as typeof CheckoutMsgModal).open()
    },
    async sendOrder() {
      const { data } = await apiPostOrder({
        order_id: this.tempOrderId,
        table_id: this.tempTableId
      })

      this.setTempOrderId(data.data.new_order_id)
      this.setOrderStatus('preparing')
      this.resetTempData()
    },
    toTodayOrderPage() {
      this.$router.push({ path: '/client/today-orders' })
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition-property: width, padding-left, padding-right;
  transition-duration: 0.6s;
  transition-timing-function: ease;
}
.slide-enter-from,
.slide-leave-to {
  width: 0;
  padding-left: 0;
  padding-right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
