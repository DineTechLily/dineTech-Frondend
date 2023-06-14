<template>
  <footer v-bind="$attrs" class="bg-secondary-black relative">
    <div class="px-3 sm:px-10 lg:px-20 2xl:px-60 py-8 md:py-12">
      <div
        class="flex flex-col md:flex-row items-start md:items-center border-b border-gray-9f pb-1"
      >
        <img
          src="@/assets/images/home/home-footer-logo.svg"
          alt="DineTech 餐飲 iPad POS 點餐系統 Logo"
          class="max-h-[21px] md:max-h-none"
        />
        <nav
          class="flex flex-wrap items-center gap-y-3 gap-x-4 my-4 md:my-0 md:justify-end text-sm w-2/3 md:w-full"
        >
          <a href="#features" class="text-gray-d4 hover:opacity-70 ease-in duration-50">產品特色</a>
          <a href="#pricing" class="text-gray-d4 hover:opacity-70 ease-in duration-50">價格方案</a>
          <a href="#support" class="text-gray-d4 hover:opacity-70 ease-in duration-50">技術支援</a>
          <a href="#contact" class="text-gray-d4 hover:opacity-70 ease-in duration-50">預約諮詢</a>
          <button
            type="button"
            class="text-gray-d4 hover:opacity-70 ease-in duration-50"
            @click="openRoleSelectionModal"
          >
            系統展示
          </button>
        </nav>
      </div>
      <div class="flex flex-col gap-y-6 md:gap-y-0 mt-3 md:flex-row md:justify-between">
        <div class="flex flex-col md:w-5/12 order-2 md:order-none">
          <p class="text-sm text-gray-d4 mb-2">
            DineTech
            以技術創新為基石，致力於為餐飲業者提供專業的技術支援和服務，協助餐飲業者提升經營效率和顧客體驗。
          </p>
          <span class="text-sm text-gray-9f">2023 ® DineTech. All rights reserved.</span>
        </div>
        <ul class="flex flex-col gap-1.5 md:gap-1 order-1 md:order-none">
          <li class="flex items-center gap-x-2.5">
            <span class="material-icons-outlined text-base md:text-2xl text-gray-d4">call</span>
            <span class="text-sm text-gray-d4">07-531-6806</span>
          </li>
          <li class="flex items-center gap-x-2.5">
            <span class="material-icons-outlined text-base md:text-2xl text-gray-d4">mail</span>
            <span class="text-sm text-gray-d4">north4@hexshool.project.com</span>
          </li>
          <li class="flex items-center gap-x-2.5">
            <span class="material-icons-outlined text-base md:text-2xl text-gray-d4">
              location_on
            </span>
            <span class="text-sm text-gray-d4">高雄市鹽埕區七賢三路 123 號 2F</span>
          </li>
        </ul>
      </div>
    </div>
    <button
      type="button"
      class="absolute top-8 end-5 md:top-auto lg:bottom-14 lg:end-5 2xl:end-20"
      @click="scrollToTop"
    >
      <div class="flex flex-col gap-y-1">
        <span class="material-icons-outlined text-white p-1.5 bg-primary-orange rounded-full">
          arrow_upward
        </span>
        <span class="text-primary-orange font-semibold">TOP</span>
      </div>
    </button>
  </footer>
  <ModalRoleSelection ref="roleSelectionModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalRoleSelection from '@/components/general/ModalRoleSelection.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    ModalRoleSelection
  },
  methods: {
    // 滾動至頁面頂部
    scrollToTop() {
      // 支援 Safari
      document.body.scrollTop = 0
      // 支援 Chrome, Firefox and Opera
      document.documentElement.scrollTop = 0
    },
    openRoleSelectionModal() {
      ;(this.$refs.roleSelectionModal as typeof ModalRoleSelection).open()
    }
  }
})
</script>
