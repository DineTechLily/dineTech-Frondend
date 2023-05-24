<template>
  <Transition name="fade">
    <div v-if="showModal" v-bind="$attrs" class="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-20">
      <div class="flex justify-center items-center h-full w-full">
        <div class="flex flex-col items-center gap-y-2 p-6 max-w-sm bg-secondary-white rounded-lg">
          <p class="text-xl font-bold">確認結帳</p>
          <p class="text-base text-gray-1d">您確定要結帳嗎？結帳後將無法再進行點餐。</p>
          <div class="flex gap-x-4 w-full">
            <button
              type="button"
              class="block w-[40%] py-2.5 bg-gray-9f text-secondary-white mt-4 rounded-md"
              @click="close"
            >
              繼續點餐
            </button>
            <button
              type="button"
              class="block w-[60%] py-2.5 bg-secondary-yellow text-secondary-black mt-4 rounded-md"
              @click="checkout"
            >
              確認結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <CheckoutModal ref="checkoutModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckoutModal from './CheckoutModal.vue'
import modalMixin from '@/mixins/modalMixin'

export default defineComponent({
  inheritAttrs: false,
  components: {
    CheckoutModal
  },
  mixins: [modalMixin],
  data() {
    return {}
  },
  methods: {
    checkout() {
      this.close()
      ;(this.$refs.checkoutModal as typeof CheckoutModal).open()
    }
  }
})
</script>

<style scss scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
