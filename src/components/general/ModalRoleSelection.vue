<template>
  <fade-transition>
    <div v-if="showModal" class="fixed inset-0 bg-[rgba(0,0,0,0.3)] z-20">
      <div class="flex justify-center items-center h-full w-full">
        <div
          v-if="isMobile()"
          class="bg-primary-bg rounded-lg py-5 px-6 max-w-xs md:max-w-3xl relative"
        >
          <img
            src="@/assets/images/home/home-demo-no-mobile.png"
            alt="手機版本正在進行開發提示圖"
          />
          <p class="text-base text-center my-3">
            很抱歉，目前系統暫不支援手機版本。您可以切換至
            <span class="font-bold">平板</span>
            或
            <span class="font-bold">個人電腦</span>
            瀏覽，或是點擊下方按鈕返回首頁。
          </p>
          <button
            type="submit"
            class="block w-full py-2.5 bg-primary-orange text-secondary-white rounded-md"
            @click="close"
          >
            我知道了
          </button>
        </div>
        <div v-else class="bg-primary-bg rounded-lg py-5 px-6 max-w-xs md:max-w-3xl relative">
          <img
            src="@/assets/images/client/demo-logo.png"
            alt="莉莉貝拉維塔義式餐廳 logo"
            class="max-w-[75%]"
          />
          <button
            type="button"
            class="absolute top-5 md:top-6 end-5 hover:opacity-90"
            @click="close"
          >
            <span
              class="material-icons-outlined text-white bg-primary-orange text-base md:text-2xl leading-4 md:leading-6 p-1.5 rounded-full"
            >
              close
            </span>
          </button>
          <p class="my-3 mb-4">
            LILYBELLAVITA
            是一家正宗的義大利料理餐廳，由來自義大利的廚師親自烹調，提供多種美味的披薩、義大利麵等經典菜餚。店內裝潢精美，營造出優雅且放鬆的氛圍，是與家人、朋友一同品嚐義大利風味佳餚的絕佳選擇。
          </p>
          <div class="flex flex-row gap-x-3 max-w-3xl">
            <router-link
              v-for="role in roles"
              :key="role.name"
              :to="{ path: role.path }"
              class="flex flex-col w-1/2 gap-y-4 items-center border p-8 border-1 bg-secondary-white border-gray-d4 rounded-xl cursor-pointer hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition duration-300"
            >
              <img :src="role.imageUrl" :alt="`系統展示 - ${role.name}端進入頁面`" />
              <p class="text-base md:text-lg font-bold">
                作為
                <span class="text-primary-orange text-xl">{{ role.name }}</span>
                體驗系統
              </p>
            </router-link>
          </div>
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
      showModal: false,
      roles: [
        {
          name: '顧客',
          path: '/client',
          imageUrl: this.getImageUrl('home/home-demo-role-client.png')
        },
        {
          name: '店員',
          path: '/staff/login',
          imageUrl: this.getImageUrl('home/home-demo-role-staff.png')
        }
      ]
    }
  },
  methods: {
    // 判斷是否為手機裝置
    isMobile(): boolean {
      return screen.width < 768
    },
    // 關閉燈箱
    close() {
      this.showModal = false
    },
    // 開啟燈箱
    open() {
      this.showModal = true
    },
    // 取得圖片路徑
    getImageUrl(path: string) {
      return new URL(`../../assets/images/${path}`, import.meta.url).href
    }
  }
})
</script>
