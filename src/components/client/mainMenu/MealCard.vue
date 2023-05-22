<template>
  <div
    v-bind="$attrs"
    class="w-[232px] p-4 flex flex-col gap-y-2 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] relative transition-colors duration-50"
    :class="styleList"
    @click="openMealModal()"
  >
    <img :src="meal.img" alt="" class="w-[201px] h-[193px]" />
    <p class="text-lg">{{ meal.name }}</p>
    <div class="flex items-center justify-start gap-x-2">
      <span class="text-sm text-gray-9f">目前剩餘</span>
      <span class="text-sm text-primary-blue font-medium">{{ meal.quantity }}</span>
      <span class="text-xl font-medium ms-auto">$ {{ dollar }}</span>
    </div>
  </div>
  <MealModal ref="mealModal" @close="closeModal" @confirm="addMealToCart" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatPriceToTWD } from '@/utils'
import { mapActions } from 'pinia'
import { useMealStore } from '@/stores/mealStore'
import MealModal from '@/components/client/mainMenu/MealModal.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    MealModal
  },
  props: {
    meal: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clicked: false
    }
  },
  computed: {
    isDisabled(): Boolean {
      return this.disabled || this.meal.quantity === 0
    },
    styleList(): String {
      return `${this.styleDisabled} ${this.styleClicked}`
    },
    styleDisabled(): String {
      return this.isDisabled
        ? "before:absolute before:inset-0 before:bg-secondary-white before:opacity-80 after:absolute after:bg-[url('@/assets/images/client/client-tag-soldOut.png')] after:h-[72px] after:w-[120px] after:translate-x-[-50%] after:translate-y-[-50%] after:top-1/2 after:left-1/2 after:bg-no-repeat after:bg-center"
        : 'bg-secondary-white'
    },
    styleClicked(): String {
      return this.clicked ? 'bg-secondary-yellow' : 'bg-secondary-white'
    },
    dollar() {
      return formatPriceToTWD(this.meal.price)
    }
  },
  methods: {
    ...mapActions(useMealStore, ['setMealInfo', 'setTempMeal']),
    openMealModal() {
      if (this.isDisabled) return

      this.clicked = true
      this.setMealInfo(this.meal)
      this.setTempMeal({ ...this.meal, quantity: 1, customization: [] })
      ;(this.$refs.mealModal as typeof MealModal).open()
    },
    closeModal() {
      this.clicked = false
    },
    addMealToCart() {
      this.clicked = false
    }
  }
})
</script>

<style scss scoped></style>
