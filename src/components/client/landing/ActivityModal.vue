<template>
  <div v-if="showModal" class="modal fixed inset-0 bg-[rgba(0,0,0,0.5)] z-20">
    <div class="flex justify-center items-center h-full w-full">
      <div class="flex flex-col gap-y-2 items-start max-w-[686px] rounded-lg relative">
        <swiper-container v-bind="swiperOptions" class="w-full max-w-full min-h-0 min-w-0">
          <swiper-slide v-for="activity in activityList" :key="activity.id">
            <div class="flex flex-col gap-y-1 max-w-[478px] mx-auto">
              <div class="p-6 rounded-xl bg-secondary-white relative">
                <img
                  :src="activity.src"
                  alt="商家廣告圖片"
                  class="rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
                />
                <h2 class="text-2.5xl font-bold">{{ activity.title }}</h2>
                <span class="text-base text-gray-9f">{{ activity.timestamp }} 更新</span>
                <p class="text-base text-gray-1d">
                  {{ activity.description }}
                </p>
                <button type="button" class="absolute top-1 end-1 leading-none" @click="close">
                  <span class="material-icons-outlined text-secondary-black">close</span>
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'
import { activityList } from '@/data/activity/activityList'

// 註冊 Swiper custom element
register()

export default defineComponent({
  data() {
    return {
      swiperOptions: {
        initialSlide: 0,
        slidesPerView: 1,
        navigation: true,
        speed: 500,
        injectStyles: [
          `
          .swiper-button-next,
          .swiper-button-prev {
            width: 48px;
            height: 48px;
            font-weight: bold;
            color: white;
            border-radius: 100%;
            border: 1px solid white;
            top: 45%;
          }
      `
        ]
      },
      showModal: false,
      activityList
    }
  },
  props: {
    activity: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    activity() {
      const initialSlide = this.activity.id - 1
      this.swiperOptions.initialSlide = initialSlide
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

<style lang="scss" scoped>
.modal {
  --swiper-navigation-size: 16px;
}
</style>
