<template>
  <Transition name="fade">
    <div v-if="showModal" class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40">
      <div class="flex justify-center items-center h-full w-full">
        <div class="flex flex-col gap-y-2 items-start max-w-[542px] rounded-lg relative">
          <Form
            class="flex flex-col items-start gap-y-4 p-8 rounded-xl bg-secondary-white relative"
          >
            <img :src="tempMeal.img" alt="商家廣告圖片" class="rounded-xl h-[286px] m-auto" />
            <h2 class="text-2.5xl font-bold">{{ tempMeal.name }}</h2>
            <p class="text-base text-gray-1d">
              {{ tempMeal.description }}
            </p>
            <div v-if="radioOptions.length > 0">
              <div v-for="option in radioOptions" :key="option.name">
                <p class="block mb-1 text-gray-66">{{ option.name }}</p>
                <div class="flex gap-x-8 ps-2 mt-2">
                  <label v-for="optionValue in option.options" :key="optionValue.name">
                    <Field
                      v-model="radioField"
                      type="radio"
                      name="radioOptions"
                      :value="optionValue.name"
                      :label="optionValue.name"
                      class="w-4 h-4 border border-gray-d4 rounded-full checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
                    />
                    <span class="ps-2 text-sm">{{ optionValue.name }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div v-if="checkboxOptions.length > 0">
              <p class="block mb-3.5 text-gray-66">加購配料</p>
              <div class="flex flex-wrap ps-2 gap-x-8 gap-y-3.5">
                <Field
                  v-for="option in checkboxOptions"
                  v-model="tempMeal.cust"
                  type="checkbox"
                  :name="option.name"
                  :value="{ name: option.name, price: option.price }"
                  :label="option.name"
                  v-slot="{ field }"
                >
                  <label class="flex items-center">
                    <input
                      v-model="tempMeal.cust"
                      v-bind="field"
                      type="checkbox"
                      :name="option.name"
                      :value="{ name: option.name, price: option.price }"
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
                <span class="px-2">{{ tempMeal.number }}</span>
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
              @click="buttonView.event"
            >
              <span class="material-icons-outlined text-secondary-white text-2xl">
                {{ buttonView.icon }}
              </span>
              <span class="text-secondary-white text-lg font-bold">{{ buttonView.text }}</span>
            </button>
            <button type="button" class="absolute top-2 end-2 leading-none" @click="close">
              <span class="material-icons-outlined text-secondary-black">close</span>
            </button>
          </Form>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import type { RadioOptions, CheckboxOptions } from '@/types/mealTypes'
import { apiPostCart } from '@/apis/client'

type ModalType = 'add' | 'edit'
interface ButtonView {
  icon: string
  text: string
  event: Function
}

export default defineComponent({
  data() {
    return {
      modalType: '' as ModalType,
      showModal: false,
      radioField: '不辣'
    }
  },
  computed: {
    ...mapState(useClientStore, ['mealInfo']),
    ...mapWritableState(useClientStore, ['tempMeal', 'sidebarExpand']),
    radioOptions(): RadioOptions[] {
      return this.mealInfo.customization?.filter((option: any) => option.type === 'radio')
    },
    checkboxOptions(): CheckboxOptions[] {
      return this.mealInfo.customization?.filter((option: any) => option.type === 'checkbox')
    },
    radioValue() {
      const category = this.tempMeal.category
      switch (category) {
        case 'pasta':
          return {
            name: this.radioField,
            price: 0
          }
        default:
          return {
            name: this.radioField,
            price: 0
          }
      }
    },
    buttonView(): ButtonView {
      return this.modalType === 'add'
        ? {
            icon: 'shopping_cart',
            text: '加入購物車',
            event: this.addToCart as () => Promise<void>
          }
        : {
            icon: 'edit',
            text: '完成修改',
            event: this.editCartItem as () => Promise<void>
          }
    }
  },
  methods: {
    ...mapActions(useClientStore, ['getCart', 'setCartItem']),
    open(type: string) {
      this.modalType = type as ModalType
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
    async addToCart() {
      // this.tempMeal.cust.push(this.radioValue)

      try {
        await apiPostCart(this.tempMeal)
        this.getCart()
        this.confirm()
        this.sidebarExpand = true
      } catch (err) {
        console.log(err)
      }
    },
    async editCartItem() {
      try {
        await this.setCartItem(this.tempMeal)
        this.getCart()
        this.confirm()
      } catch (err) {
        console.log(err)
      }
    },
    addQuantity() {
      this.tempMeal.number++
      this.calcTotalPrice()
    },
    minusQuantity() {
      if (this.tempMeal.number > 1) this.tempMeal.number--
      this.calcTotalPrice()
    },
    calcTotalPrice() {
      this.tempMeal.total_price = this.tempMeal.number * this.tempMeal.price
    }
    // handleDuplicateOptions() {
    //   let transformedData = []
    //   let labelNames = new Set()

    //   for (let item of this.tempMeal.cust) {
    //     if (item.hasOwnProperty('label')) {
    //       let labelName = item['label']
    //       if (labelNames.has(labelName)) {
    //         continue
    //       } else {
    //         labelNames.add(labelName)
    //       }
    //     }
    //     if (item.hasOwnProperty('label')) {
    //       delete item.label
    //     }
    //     transformedData.push(item)
    //   }

    //   this.tempMeal.cust = transformedData
    // }
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
