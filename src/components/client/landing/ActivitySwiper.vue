<template>
  <swiper-container
    v-bind="{ ...$attrs, ...swiperOptions }"
    class="w-full max-w-full min-h-0 min-w-0"
  >
    <swiper-slide v-for="activity in activityList" :key="activity.id">
      <img
        :src="activity.src"
        alt="商家廣告圖片"
        class="rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] cursor-pointer"
        @click="openModal(activity)"
      />
    </swiper-slide>
  </swiper-container>
  <Transition name="fade">
    <ActivityModal ref="activityModal" :activity="tempActivity" />
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'
import { activityList } from '@/data/activity/activityList'
import ActivityModal from '@/components/client/landing/ActivityModal.vue'

// 註冊 Swiper custom element
register()

interface Activity {
  id: number
  src: string
  title: string
  description: string
  timestamp: string
}

export default defineComponent({
  inheritAttrs: false,
  components: {
    ActivityModal
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        autoplay: {
          delay: 3000
        }
      },
      activityList,
      tempActivity: {} as Activity
    }
  },
  methods: {
    // 開啟燈箱
    openModal(activity: Activity) {
      this.tempActivity = activity
      ;(this.$refs.activityModal as typeof ActivityModal).open()
    }
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
