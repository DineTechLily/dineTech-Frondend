<template>
  <Transition name="fade">
    <div v-if="showModal" class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-20">
      <div class="flex justify-center items-center h-full w-full">
        <div class="flex flex-col gap-y-2 items-start max-w-[542px] rounded-lg relative">
          <div class="flex flex-col items-start gap-y-4 p-8 rounded-xl bg-secondary-white relative">
            <img :src="tempMeal.img" alt="商家廣告圖片" class="rounded-xl h-[286px] m-auto" />
            <h2 class="text-2.5xl font-bold">{{ tempMeal.name }}</h2>
            <p class="text-base text-gray-1d">
              {{ tempMeal.description }}
            </p>
            <div v-for="option in radioOptions" :key="option.name">
              <p class="block mb-1 text-gray-66">{{ option.name }}</p>
              <div class="flex gap-x-8 ps-2 mt-2">
                <label v-for="optionValue in option.options" :key="optionValue.name">
                  <Field
                    v-model="tempMeal.customization"
                    type="radio"
                    :name="option.name"
                    :value="optionValue.value"
                    :label="optionValue.name"
                    class="w-4 h-4 border border-gray-d4 rounded-full checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
                  />
                  <span class="ps-2 text-sm">{{ optionValue.name }}</span>
                </label>
              </div>
            </div>
            <div>
              <p class="block mb-3.5 text-gray-66">加購配料</p>
              <div class="flex flex-wrap ps-2 gap-x-8 gap-y-3.5">
                <Field
                  v-for="option in checkboxOptions"
                  v-model="tempMeal.customization"
                  type="checkbox"
                  :name="option.name"
                  :value="option.value"
                  :label="option.name"
                  v-slot="{ field }"
                >
                  <label class="flex items-center">
                    <input
                      v-model="tempMeal.customization"
                      v-bind="field"
                      type="checkbox"
                      :name="option.name"
                      :value="option.value"
                      :label="option.name"
                      class="w-4 h-4 border border-gray-d4 checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
                    />
                    <span class="ps-2 text-sm">{{ option.name }} +${{ option.price }}</span>
                  </label>
                </Field>
              </div>
            </div>
            <div>
              <p class="block mb-1 text-gray-66">數量</p>
              <div
                class="flex justify-start items-center gap-x-2 mt-2 border border-gray-d4 rounded-md"
              >
                <span
                  class="material-icons-outlined text-gray-66 text-xl py-1.5 px-2 cursor-pointer"
                  @click="minusQuantity"
                >
                  remove
                </span>
                <span class="px-2">{{ tempMeal.quantity }}</span>
                <span
                  class="material-icons-outlined text-gray-66 text-xl py-1.5 px-2 cursor-pointer"
                  @click="addQuantity"
                >
                  add
                </span>
              </div>
            </div>
            <button
              type="button"
              class="w-full py-3 px-6 rounded-md bg-primary-orange flex justify-center items-center gap-x-2"
              @click="confirm"
            >
              <span class="material-icons-outlined text-secondary-white text-2xl">
                shopping_cart
              </span>
              <span class="text-secondary-white text-lg font-bold">加入購物車</span>
            </button>
            <button type="button" class="absolute top-2 end-2 leading-none" @click="close">
              <span class="material-icons-outlined text-secondary-black">close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapWritableState } from 'pinia'
import { useMealStore } from '@/stores/mealStore'
import type { RadioOptions, CheckboxOptions } from '@/types/mealTypes'

export default defineComponent({
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState(useMealStore, ['mealInfo']),
    ...mapWritableState(useMealStore, ['tempMeal']),
    radioOptions(): RadioOptions[] {
      return this.mealInfo.customization?.filter((option: any) => option.type === 'radio')
    },
    checkboxOptions(): CheckboxOptions[] {
      return this.mealInfo.customization?.filter((option: any) => option.type === 'checkbox')
    }
  },
  methods: {
    // 開啟燈箱
    open() {
      this.showModal = true
    },
    // 關閉燈箱
    close() {
      this.showModal = false
      this.$emit('close')
    },
    confirm() {
      this.showModal = false
      this.$emit('confirm', this.tempMeal)
    },
    addQuantity() {
      this.tempMeal.quantity++
      this.calcTotalPrice()
    },
    minusQuantity() {
      if (this.tempMeal.quantity > 1) this.tempMeal.quantity--
      this.calcTotalPrice()
    },
    calcTotalPrice() {
      this.tempMeal.total = this.tempMeal.quantity * this.tempMeal.price
    }
  }
})
</script>

<style scss scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
