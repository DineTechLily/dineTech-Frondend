<template>
  <section
    class="h-screen w-full bg-[url('@/assets/images/client/client-bg-landing.png')] bg-cover relative"
  >
    <div class="flex flex-col gap-y-36 items-start justify-center ps-21 h-full">
      <div class="flex flex-col items-start gap-y-6 max-w-[502px] ps-[86px]">
        <img src="@/assets/images/client/demo-logo.png" alt="莉莉貝拉維塔義式餐廳 logo" />
        <h1 class="text-gray-33">
          LILYBELLAVITA
          是一家正宗的義大利料理餐廳，由來自義大利的廚師親自烹調，提供多種美味的披薩、義大利麵等經典菜餚。店內裝潢精美，營造出優雅且放鬆的氛圍，是與家人、朋友一同品嚐義大利風味佳餚的絕佳選擇。
        </h1>
        <button
          type="button"
          class="inline-flex items-center space-x-2.5 px-5 py-4 bg-primary-orange text-white text-lg leading-none rounded-md hover:opacity-90 ease-in duration-50"
          @click="startOrdering"
        >
          <span class="material-icons-outlined">pan_tool_alt</span>
          <span class="font-bold">開始點餐</span>
        </button>
      </div>
      <ActivitySwiper class="p-6 ps-[86px]" />
    </div>
    <img
      src="@/assets/images/client/client-watermark-landing.png"
      alt="DineTech 系統開發水印"
      class="absolute end-12 bottom-10"
    />
  </section>
  <OverlayLoading ref="overlayLoading" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ActivitySwiper from '@/components/client/landing/ActivitySwiper.vue'
import OverlayLoading from '@/components/client/landing/OverlayLoading.vue'

export default defineComponent({
  components: {
    ActivitySwiper,
    OverlayLoading
  },
  data() {
    return {}
  },
  methods: {
    // 播放載入動畫
    playLoadingAnimation(): Promise<void> {
      return new Promise((resolve) => {
        ;(this.$refs.overlayLoading as typeof OverlayLoading).playLoadingAnimation()
        resolve()
      })
    },
    // 開始點餐
    async startOrdering() {
      await this.playLoadingAnimation()
      await new Promise((resolve) => {
        setTimeout(resolve, 3000)
      })
      this.$router.push({ path: '/client/main-menu' })
    }
  }
})
</script>
