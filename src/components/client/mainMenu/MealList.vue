<template>
  <Transition name="slide-fade">
    <div
      v-if="meal.number > 0"
      v-bind="$attrs"
      class="flex justify-between gap-x-2 py-1.5 px-2 bg-gray-e9 rounded-md"
      @click="handleClick"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import { formatPriceToTWD } from '@/utils'
import type { MealPayload } from '@/types/mealTypes'
import { apiDeleteCart, apiGetMenuById } from '@/apis/client'

export default defineComponent({
  inheritAttrs: false,
  props: {
    meal: {
      type: Object,
      default: () => ({} as MealPayload)
    }
  },
  computed: {
    dollar(): string {
      return formatPriceToTWD(this.meal.total_price)
    },
    customization(): string {
      return this.meal.cust?.map((option: MealPayload) => option.name).join(' / ')
    }
  },
  methods: {
    ...mapActions(useClientStore, ['setTempMeal', 'getCart', 'setTempEditCartItem']),
    async handleClick() {
      await this.updateTempMeal()
      this.$emit('click:list')
    },
    async updateTempMeal() {
      try {
        const { data } = await apiGetMenuById(this.meal.product_id)
        const meal = data.data_item?.pop()
        this.setTempMeal({ ...meal, _id: this.meal._id })
        this.setTempEditCartItem({
          edit_id: this.meal._id,
          number: this.meal.number,
          total_price: this.meal.total_price,
          cust: this.meal.cust
        })
      } catch (err) {
        console.error(err)
      }
    },
    async deleteItem(mealId: string) {
      try {
        await apiDeleteCart({ edit_id: mealId })
        this.getCart()
      } catch (err) {
        console.error(err)
      }
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
