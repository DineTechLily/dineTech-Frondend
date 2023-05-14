<template>
  <header
    v-bind="$attrs"
    :class="{ 'shadow-md': headerFixed }"
    class="header z-10 sticky top-0 bg-primary-bg transition-shadow duration-200"
  >
    <div class="flex items-center justify-between h-16 px-4 mx-auto">
      <h1>
        <img
          src="@/assets/images/home/home-header-logo.svg"
          alt="DineTech 餐飲 iPad POS 點餐系統 Logo"
          class="h-7"
        />
      </h1>
      <button ref="menuButton" type="button" class="relative group" @click="toggleMenu">
        <div
          :class="{ 'h-6': menuExpanded }"
          class="flex flex-col justify-between w-6 h-4 transform transition-transform duration-300 origin-center overflow-hidden"
        >
          <div
            :class="{ 'translate-y-6': menuExpanded }"
            class="bg-secondary-black h-[2px] w-6 transform transition-transform duration-300 origin-left delay-100"
          ></div>
          <div
            :class="{ 'translate-y-6': menuExpanded }"
            class="bg-secondary-black h-[2px] w-6 rounded transform transition-transform duration-300 delay-75"
          ></div>
          <div
            :class="{ 'translate-y-6': menuExpanded }"
            class="bg-secondary-black h-[2px] w-6 transform transition-transform duration-300 origin-left"
          ></div>

          <div
            :class="{ 'translate-y-1 w-12': menuExpanded }"
            class="absolute items-center justify-between transform transition-transform duration-500 top-2 -translate-y-10 flex w-0"
          >
            <div
              :class="{ 'rotate-45': menuExpanded }"
              class="absolute bg-secondary-black h-[2px] w-6 transform transition-transform duration-500 rotate-0 delay-300"
            ></div>
            <div
              :class="{ '-rotate-45': menuExpanded }"
              class="absolute bg-secondary-black h-[2px] w-6 transform transition-transform duration-500 -rotate-0 delay-300"
            ></div>
          </div>
        </div>
      </button>
    </div>
    <nav
      :class="menuHeight"
      class="fixed w-full bg-[#f1ECE8] overflow-hidden transition-height ease-in duration-300"
      @click="toggleMenu"
    >
      <div class="flex flex-col items-center gap-y-10 py-12">
        <a href="#features" class="text-xl">產品特色</a>
        <a href="#pricing" class="text-xl">價格方案</a>
        <a href="#support" class="text-xl">技術支援</a>
        <a
          href="#contact"
          class="inline-flex items-center space-x-2.5 py-4 px-8 bg-secondary-white text-gray-33 rounded-md cursor-pointer"
        >
          <span class="material-icons-outlined">forum</span>
          <span class="font-bold">預約諮詢</span>
        </a>
        <button
          type="button"
          class="inline-flex items-center space-x-2.5 py-4 px-8 bg-primary-orange text-white rounded-md"
          @click="openRoleSelectionModal"
        >
          <span class="material-icons-outlined">view_quilt</span>
          <span class="font-bold">系統展示</span>
        </button>
      </div>
    </nav>
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
      headerFixed: false,
      menuExpanded: false
    }
  },
  computed: {
    // 選單高度
    menuHeight() {
      return this.menuExpanded ? 'h-[calc(100vh-64px)]' : 'h-0'
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
    // 切換選單狀態
    toggleMenu() {
      this.menuExpanded = !this.menuExpanded
    },
    openRoleSelectionModal() {
      ;(this.$refs.roleSelectionModal as typeof ModalRoleSelection).open()
    }
  }
})
</script>
