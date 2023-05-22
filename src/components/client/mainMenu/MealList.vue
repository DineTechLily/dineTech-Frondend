<template>
  <div
    v-bind="$attrs"
    class="flex justify-between gap-x-4 py-1.5 px-2 bg-gray-e9 rounded-md"
    @click="openMealModal"
  >
    <div class="flex flex-col">
      <p class="text-lg leading-6">德式脆皮豬腳</p>
      <span class="text-sm text-gray-9f">小辣 / 起司</span>
    </div>
    <div class="flex gap-x-4 shrink-0">
      <span class="text-base">X 1</span>
      <span class="text-base">$ {{ dollar }}</span>
      <button type="button" class="text-lg">
        <span class="material-icons-outlined text-secondary-red">close</span>
      </button>
    </div>
  </div>
  <MealModal ref="mealModal" @confirm="editMeal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MealModal from '@/components/client/mainMenu/MealModal.vue'
import { formatPriceToTWD } from '@/utils'

export default defineComponent({
  inheritAttrs: false,
  components: {
    MealModal
  },
  data() {
    return {
      dollar: formatPriceToTWD(3500)
    }
  },
  methods: {
    openMealModal() {
      ;(this.$refs.mealModal as typeof MealModal).open()
    },
    editMeal() {
      console.log('edit')
    }
  }
})
</script>

<style scss scoped></style>
