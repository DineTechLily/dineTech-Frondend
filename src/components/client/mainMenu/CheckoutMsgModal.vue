<template>
  <fade-transition>
    <div v-if="showModal" v-bind="$attrs" class="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-20">
      <div class="flex justify-center items-center h-full w-full">
        <div
          class="flex flex-col items-center gap-y-2 p-6 max-w-sm bg-secondary-white rounded-lg relative"
        >
          <p class="text-xl font-bold">確認結帳</p>
          <p class="text-base text-gray-1d">您確定要結帳嗎？送出後將無法再進行點餐。</p>
          <div class="flex justify-end gap-x-4 w-full">
            <button
              type="button"
              class="block w-[50%] py-2.5 bg-gray-9f text-secondary-white mt-4 rounded-md"
              @click="close"
            >
              取消
            </button>
            <button
              type="button"
              class="block w-[50%] py-2.5 bg-secondary-yellow text-secondary-black mt-4 rounded-md"
              @click="checkout"
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </div>
  </fade-transition>
  <CheckoutModal ref="checkoutModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckoutModal from './CheckoutModal.vue'
import modalMixin from '@/mixins/modalMixin'
import { apiGetTodayOrders } from '@/apis/client'
import { mapState, mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import FadeTransition from '@/components/client/FadeTransition.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    CheckoutModal,
    FadeTransition
  },
  mixins: [modalMixin],
  computed: {
    ...mapState(useClientStore, ['tempTableId'])
  },
  methods: {
    ...mapActions(useClientStore, ['setOrdersTotal']),
    async checkout() {
      await this.getTotalPriceOfToday()
      this.close()
      ;(this.$refs.checkoutModal as typeof CheckoutModal).open()
    },
    async getTotalPriceOfToday() {
      try {
        const { data } = await apiGetTodayOrders(this.tempTableId)
        const totalPrice = data.data.reduce((acc: number, cur: any) => {
          const arrayTotal = cur.reduce((acc: number, obj: any) => acc + obj.total_price, 0)
          return acc + arrayTotal
        }, 0)

        this.setOrdersTotal(totalPrice)
      } catch (err) {
        console.error(err)
      }
    }
  }
})
</script>
