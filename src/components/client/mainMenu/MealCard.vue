<template>
  <div
    v-bind="$attrs"
    class="w-[232px] p-4 flex flex-col gap-y-2 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] relative transition-colors duration-50"
    :class="styleList"
    @click="handleClick"
  >
    <div
      class="w-[201px] h-[193px] rounded-md bg-center bg-cover"
      :style="{ backgroundImage: `url(${meal.img})` }"
    ></div>
    <p class="text-lg truncate">{{ meal.name }}</p>
    <div class="flex items-center justify-start gap-x-2">
      <span class="text-sm text-gray-9f">目前剩餘</span>
      <span class="text-sm text-primary-blue font-medium">{{ meal.stock }}</span>
      <span class="text-xl font-medium ms-auto">$ {{ dollar }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import { formatPriceToTWD } from '@/utils'
import type { TempMeal } from '@/types/mealTypes'

export default defineComponent({
  inheritAttrs: false,
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
  computed: {
    ...mapState(useClientStore, ['tempMeal']),
    isDisabled(): boolean {
      return this.disabled || this.meal.number === 0
    },
    styleList(): string {
      return `${this.styleDisabled} ${this.styleClicked}`
    },
    styleDisabled(): string {
      return this.isDisabled
        ? "before:absolute before:inset-0 before:bg-secondary-white before:opacity-80 after:absolute after:bg-[url('@/assets/images/client/client-tag-soldOut.png')] after:h-[72px] after:w-[120px] after:translate-x-[-50%] after:translate-y-[-50%] after:top-1/2 after:left-1/2 after:bg-no-repeat after:bg-center"
        : 'bg-secondary-white'
    },
    styleClicked(): string {
      return this.tempMeal._id === this.meal._id ? 'bg-secondary-yellow' : 'bg-secondary-white'
    },
    dollar() {
      return formatPriceToTWD(this.meal.price)
    }
  },
  methods: {
    ...mapActions(useClientStore, ['setTempMeal']),
    handleClick() {
      if (this.isDisabled) return

      this.setTempMeal(this.meal as TempMeal)
      this.$emit('click')
    }
  }
})
</script>
