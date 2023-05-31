<template>
  <Transition name="slide-fade">
    <div
      v-if="meal.number > 0"
      v-bind="$attrs"
      class="flex justify-between gap-x-2 py-1.5 px-2 bg-gray-e9 rounded-md"
      @click="openMealModal"
    >
      <div class="flex flex-col max-w-[45%]">
        <p class="text-lg leading-6 truncate">{{ meal.name }}</p>
        <span class="text-sm text-gray-9f truncate empty:hidden">{{ customization }}</span>
      </div>
      <div class="flex gap-x-4">
        <span class="text-base">X {{ meal.number }}</span>
        <span class="text-base">$ {{ dollar }}</span>
        <button type="button" class="text-lg" @click.stop="deleteItem(meal._id)">
          <span class="material-icons-outlined text-secondary-red">close</span>
        </button>
      </div>
    </div>
  </Transition>
  <MealModal ref="mealModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import MealModal from '@/components/client/mainMenu/MealModal.vue'
import { formatPriceToTWD } from '@/utils'
import type { TempMeal } from '@/types/mealTypes'

export default defineComponent({
  inheritAttrs: false,
  components: {
    MealModal
  },
  props: {
    meal: {
      type: Object,
      default: () => ({} as TempMeal)
    }
  },
  computed: {
    dollar(): String {
      return formatPriceToTWD(this.meal.total_price)
    },
    customization(): String {
      return this.meal.cust?.map((option: TempMeal) => option.name).join(' / ')
    }
  },
  methods: {
    ...mapActions(useClientStore, ['setTempMeal', 'deleteCartItem', 'getCart']),
    openMealModal() {
      this.setTempMeal(this.meal as TempMeal)
      ;(this.$refs.mealModal as typeof MealModal).open('edit')
    },
    deleteItem(mealId: string) {
      this.deleteCartItem(mealId)
      this.getCart()
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
