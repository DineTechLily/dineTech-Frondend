<template>
  <header class="h-20 w-full bg-gray-33 px-12 py-2.5 flex items-center">
    <div class="flex items-start gap-x-4">
      <button
        v-for="category in meal.categories"
        type="button"
        class="w-[133px] py-4 px-12 text-secondary-white text-lg text-center rounded-md"
        :class="{
          'bg-primary-orange': meal.activeTab === category,
          'bg-gray-66': meal.activeTab !== category
        }"
        @click="changeCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    <div
      class="flex items-center justify-center gap-x-2 bg-secondary-white rounded-l-xl rounded-t-xl ms-auto py-2 px-6"
    >
      <span class="material-icons-outlined text-secondary-black text-xl">forum</span>
      <span>{{ menuOrderMessage }}</span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useClientStore } from '@/stores/clientStore'

export default defineComponent({
  data() {
    return {
      meal: {
        categories: ['主餐', '甜點', '飲料'],
        activeTab: '主餐'
      }
    }
  },
  computed: {
    ...mapState(useClientStore, ['menuOrderMessage'])
  },
  methods: {
    changeCategory(category: string) {
      this.meal.activeTab = category
      this.$emit('changeCategory', category)
    }
  }
})
</script>

<style lang="scss" scoped></style>
