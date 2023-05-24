<template>
  <div v-if="showModal" class="fixed inset-0 bg-primary-bg z-20">
    <div class="flex justify-center items-center h-full w-full">
      <div
        class="flex flex-col items-center gap-y-4 p-12 w-[730px] bg-secondary-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
      >
        <p class="text-2xl font-bold">結帳請至櫃台</p>
        <p class="flex items-center gap-x-4">
          <span class="text-xl">今日消費金額為</span>
          <span class="text-3.5xl font-black text-primary-blue">$ 1,430</span>
        </p>
        <p class="text-gray-9f text-base text-center">
          我們的服務人員將會協助您完成結帳程序。<br />
          再次感謝您的蒞臨，期待您的下次光臨！
        </p>
        <p class="flex items-center gap-x-6 mt-2">
          <span>本店提供：</span>
          <span
            class="before:block before:absolute before:-inset-1 before:rounded-full before:bg-primary-blue relative inline-block px-4"
          >
            <span class="relative text-white">現金支付</span>
          </span>
        </p>
        <div class="flex gap-x-4 w-full">
          <button
            type="button"
            class="block w-full py-3 bg-primary-orange text-secondary-white mt-4 rounded-md"
            @click="toFeedbackPage"
          >
            填寫意見回饋
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import modalMixin from '@/mixins/modalMixin'

export default defineComponent({
  inheritAttrs: false,
  mixins: [modalMixin],
  methods: {
    toFeedbackPage() {
      this.$router.push({ path: '/client/feedback' })
    }
  }
})
</script>
