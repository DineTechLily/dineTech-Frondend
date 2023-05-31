<template>
  <section
    class="bg-primary-bg md:bg-[url('@/assets/images/home/home-bg-landing.png')] bg-no-repeat bg-cover h-screen overflow-hidden"
  >
    <div class="px-4 sm:px-10 lg:px-20 2xl:px-60 mx-auto flex items-center h-16 h-[4.5rem]">
      <h1>
        <a href="https://dinetech-frondend.onrender.com">
          <img
            src="@/assets/images/home/home-header-logo.svg"
            alt="DineTech 餐飲 iPad POS 點餐系統 Logo"
            class="h-7 md:h-8"
          />
        </a>
      </h1>
    </div>
    <div class="reveal-content px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto flex flex-col">
      <div class="flex justify-between flex-col-reverse md:flex-row items-center md:pt-6 md:pt-10">
        <div class="flex flex-col items-center md:items-start md:mb-40 whitespace-nowrap">
          <p
            class="text-3.5xl md:text-5xl md:leading-normal font-bold text-primary-orange leading-normal"
          >
            404 找不到此頁面
          </p>
          <p class="text-base leading-relaxed md:text-2.5xl md:leading-normal">
            唉呀，看來您不小心迷路了
          </p>
          <p class="text-base leading-relaxed md:text-2.5xl md:leading-normal">
            請點擊下方按鈕回到首頁
          </p>
          <a
            href="https://dinetech-frondend.onrender.com"
            class="inline-flex items-center space-x-2.5 py-2.5 px-8 bg-primary-orange text-white rounded-md hover:opacity-90 ease-in duration-50 mt-3 md:mt-5"
          >
            <span class="font-bold">返回首頁</span>
          </a>
        </div>
        <img
          class="px-10 my-7 md:p-0 md:m-0"
          src="@/assets/images/home/home-bg-404.svg"
          alt="DineTech 404 畫面插畫"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DesktopHeader from '@/components/general/DesktopHeader.vue'
import MobileHeader from '@/components/general/MobileHeader.vue'

export default defineComponent({
  components: {
    DesktopHeader,
    MobileHeader
  },
  data() {
    return {}
  },
  methods: {
    // 判斷是否為手機裝置
    isMobile(): boolean {
      return screen.width < 768
    }
  },
  mounted() {
    this.$router.replace('/error/404')
  }
})
</script>
