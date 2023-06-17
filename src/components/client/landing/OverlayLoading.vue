<template>
  <fade-transition duration="0.3s">
    <div
      v-if="showOverlay"
      class="h-screen w-screen bg-primary-orange absolute top-0 left-0 z-50 flex items-center justify-center"
    >
      <div class="flex flex-col items-center gap-y-3">
        <div
          class="w-20 h-20 rounded-full animate-spin border-y-8 border-solid border-secondary-white border-t-transparent shadow-md"
        ></div>
        <p class="text-2xl text-secondary-white font-semibold">讀取中...</p>
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
      showOverlay: false
    }
  },
  methods: {
    // 開啟載入中視窗
    open() {
      this.showOverlay = true
    },
    // 關閉載入中視窗
    close() {
      this.showOverlay = false
    },
    // 播放載入中動畫
    playLoadingAnimation(): Promise<void> {
      return new Promise((resolve) => {
        this.open()
        setTimeout(() => {
          this.close()
          resolve()
        }, 3500)
      })
    }
  }
})
</script>
