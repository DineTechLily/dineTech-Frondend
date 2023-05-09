<template>
  <header
    :class="{ 'shadow-md': !view.atTopOfPage }"
    class="header z-10 sticky top-0 bg-primary-bg transition-shadow duration-200"
  >
    <div class="sm:px-10 lg:px-20 2xl:px-60 mx-auto flex items-center h-18">
      <h1>
        <img
          src="@/assets/images/home/home-header-logo.svg"
          alt="DineTech 餐飲 iPad POS 點餐系統"
        />
      </h1>
      <nav class="ms-auto flex items-center space-x-8 text-sm">
        <div>
          <a href="#" class="py-3 px-4 hover:opacity-70 ease-in duration-50">產品特色</a>
          <a href="#" class="py-3 px-4 hover:opacity-70 ease-in duration-50">價格方案</a>
          <a href="#" class="py-3 px-4 hover:opacity-70 ease-in duration-50">技術支援</a>
        </div>

        <button
          type="button"
          class="inline-flex items-center space-x-2.5 py-2.5 px-4 bg-gray-e9 text-gray-33 rounded-md hover:bg-gray-d4 ease-in duration-50"
        >
          <span class="material-icons-outlined">forum</span>
          <span class="font-medium">預約諮詢</span>
        </button>
        <button
          type="button"
          class="inline-flex items-center space-x-2.5 py-2.5 px-4 bg-primary-orange text-white rounded-md hover:opacity-90 ease-in duration-50"
        >
          <span class="material-icons-outlined">view_quilt</span>
          <span class="font-medium">系統展示</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  }
})
</script>
