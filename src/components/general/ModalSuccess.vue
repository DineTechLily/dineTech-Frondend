<template>
  <fade-transition>
    <div v-if="showModal" class="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-20">
      <div class="flex justify-center items-center h-full w-full">
        <div
          class="flex flex-col gap-y-2 items-center p-6 max-w-xs md:max-w-sm bg-secondary-white rounded-lg"
        >
          <img
            src="@/assets/images/home/home-form-success.svg"
            alt="表單送出成功"
            class="max-h-24"
          />
          <p class="text-base md:text-lg font-bold">預約諮詢成功</p>
          <p class="text-sm md:text-base text-gray-9f text-center">
            感謝您的預約，我們的專員將在三個工作天內透過電話聯絡您。若需要更改預約資訊，請撥打
            07-5301-6806
          </p>
          <button
            type="button"
            class="block w-full py-2.5 bg-primary-orange text-secondary-white mt-4 rounded-md hover:opacity-90 ease-in duration-50"
            @click="close"
          >
            回到首頁
          </button>
        </div>
      </div>
    </div>
  </fade-transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FadeTransition from '@/components/client/FadeTransition.vue'

export default defineComponent({
  components: {
    FadeTransition
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    // 關閉燈箱
    close() {
      this.showModal = false
    },
    // 開啟燈箱
    open() {
      this.showModal = true
    }
  }
})
</script>
