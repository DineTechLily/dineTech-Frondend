<template>
  <header
    v-bind="$attrs"
    :class="{ 'shadow-md': headerFixed }"
    class="header z-10 sticky top-0 bg-primary-bg transition-shadow duration-200"
  >
    <div class="sm:px-10 lg:px-20 2xl:px-60 mx-auto flex items-center h-[4.5rem]">
      <h1>
        <img
          src="@/assets/images/home/home-header-logo.svg"
          alt="DineTech 餐飲 iPad POS 點餐系統 Logo"
        />
      </h1>
      <nav class="ms-auto flex items-center space-x-8 text-sm">
        <div>
          <a href="#features" class="py-3 px-4 hover:opacity-70 ease-in duration-50">產品特色</a>
          <a href="#pricing" class="py-3 px-4 hover:opacity-70 ease-in duration-50">價格方案</a>
          <a href="#support" class="py-3 px-4 hover:opacity-70 ease-in duration-50">技術支援</a>
        </div>
        <a
          href="#contact"
          class="inline-flex items-center space-x-2.5 py-2.5 px-4 bg-gray-e9 text-gray-33 rounded-md hover:bg-gray-d4 ease-in duration-50 cursor-pointer"
        >
          <span class="material-icons-outlined">forum</span>
          <span class="font-bold">預約諮詢</span>
        </a>
        <button
          type="button"
          class="inline-flex items-center space-x-2.5 py-2.5 px-4 bg-primary-orange text-white rounded-md hover:opacity-90 ease-in duration-50"
          @click="openRoleSelectionModal"
        >
          <span class="material-icons-outlined">view_quilt</span>
          <span class="font-bold">系統展示</span>
        </button>
      </nav>
    </div>
  </header>
  <ModalRoleSelection ref="roleSelectionModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { debounce } from 'lodash'
import ModalRoleSelection from '@/components/general/ModalRoleSelection.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    ModalRoleSelection
  },
  data() {
    return {
      headerFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 處理捲動事件
    handleScroll: debounce(function (this: { headerFixed: boolean }) {
      const scrollDown = window.scrollY > 0
      this.headerFixed = scrollDown ? true : false
    }, 50),
    openRoleSelectionModal() {
      ;(this.$refs.roleSelectionModal as typeof ModalRoleSelection).open()
    }
  }
})
</script>
