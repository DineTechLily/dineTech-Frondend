<template>
  <footer class="bg-secondary-black relative">
    <div class="sm:px-10 lg:px-20 2xl:px-60 py-12">
      <div class="flex items-center border-b border-gray-9f pb-1">
        <img
          src="@/assets/images/home/home-footer-logo.svg"
          alt="DineTech 餐飲 iPad POS 點餐系統"
        />
        <nav class="ms-auto flex items-center text-sm">
          <a href="#" class="text-gray-d4 py-3 px-3 hover:opacity-70 ease-in duration-50">
            產品特色
          </a>
          <a href="#" class="text-gray-d4 py-3 px-3 hover:opacity-70 ease-in duration-50">
            價格方案
          </a>
          <a href="#" class="text-gray-d4 py-3 px-3 hover:opacity-70 ease-in duration-50">
            技術支援
          </a>
          <a href="#" class="text-gray-d4 py-3 px-3 hover:opacity-70 ease-in duration-50">
            預約諮詢
          </a>
          <a href="#" class="text-gray-d4 py-3 ps-3 hover:opacity-70 ease-in duration-50">
            系統展示
          </a>
        </nav>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col w-5/12">
          <p class="text-sm text-gray-d4 pt-3.5 pb-2">
            DineTech
            以技術創新為基石，致力於為餐飲業者提供專業的技術支援和服務，協助餐飲業者提升經營效率和顧客體驗。
          </p>
          <span class="text-sm text-gray-9f">2023 ® DineTech. All rights reserved.</span>
        </div>
        <ul class="pt-3.5">
          <li class="flex gap-x-2.5">
            <span class="material-icons-outlined text-gray-d4">call</span>
            <span class="text-sm text-gray-d4">07-531-6806</span>
          </li>
          <li class="flex gap-x-2.5">
            <span class="material-icons-outlined text-gray-d4">mail</span>
            <span class="text-sm text-gray-d4">north4@hexshool.project.com</span>
          </li>
          <li class="flex gap-x-2.5">
            <span class="material-icons-outlined text-gray-d4">location_on</span>
            <span class="text-sm text-gray-d4">高雄市鹽埕區七賢三路 123 號 2F</span>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="absolute lg:bottom-14 end-5 lg:end-5 2xl:end-20">
      <div class="flex flex-col gap-y-1">
        <span class="material-icons-outlined text-white p-1.5 bg-primary-orange rounded-full">
          arrow_upward
        </span>
        <span class="text-primary-orange font-semibold">TOP</span>
      </div>
    </button>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  }
})
</script>
