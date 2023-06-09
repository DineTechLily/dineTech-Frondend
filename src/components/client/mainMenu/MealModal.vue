<template>
  <fade-transition>
    <div v-if="showModal" class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40">
      <div class="flex justify-center items-center h-full w-full" @click.self="close">
        <div
          class="flex flex-col h-full gap-y-2 justify-center items-start max-w-[542px] rounded-lg relative"
        >
          <VForm
            class="flex flex-col max-h-[92%] items-start gap-y-4 p-8 rounded-xl bg-secondary-white relative"
          >
            <div
              class="w-full min-h-[246px] rounded-md bg-center bg-cover"
              :style="{ backgroundImage: `url(${tempMeal.img})` }"
            ></div>
            <div class="flex flex-col items-start gap-y-4 overflow-y-scroll xl:overflow-y-auto">
              <h2 class="text-2.5xl font-bold">{{ tempMeal.name }}</h2>
              <p class="max-w-[98%] text-base text-gray-1d">
                {{ tempMeal.description }}
              </p>
              <div v-if="radioOptions?.length > 0">
                <div v-for="option in radioOptions" :key="option.name">
                  <p class="block mb-1 text-gray-66">{{ option.name }}</p>
                  <div class="flex gap-x-8 ps-2 mt-2">
                    <label v-for="optionValue in option.options" :key="optionValue.name">
                      <VField
                        v-model="radioValue"
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
              <div v-if="checkboxOptions?.length > 0">
                <p class="block mb-3.5 text-gray-66">加購配料</p>
                <div class="flex flex-wrap ps-2 gap-x-8 gap-y-3.5">
                  <VField
                    v-for="option in checkboxOptions"
                    :key="option.name"
                    v-model="form.cust"
                    type="checkbox"
                    :name="option.name"
                    :value="{ name: option.name, price: option.price }"
                    :label="option.name"
                    v-slot="{ field }"
                  >
                    <label class="flex items-center">
                      <input
                        v-model="form.cust"
                        v-bind="field"
                        type="checkbox"
                        :name="option.name"
                        :value="{ name: option.name, price: option.price }"
                        :label="option.name"
                        class="w-4 h-4 border border-gray-d4 checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
                      />
                      <span class="ps-2 text-sm">{{ option.name }} +${{ option.price }}</span>
                    </label>
                  </VField>
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
                  <span class="px-2">{{ form.number }}</span>
                  <span
                    class="material-icons-outlined text-gray-66 text-xl py-1.5 px-2 cursor-pointer"
                    @click="addQuantity"
                  >
                    add
                  </span>
                </div>
              </div>
            </div>
            <client-button
              :is-loading="buttonIsLoading"
              type="button"
              class="w-full py-3 px-6 rounded-md bg-primary-orange text-secondary-white flex justify-center items-center gap-x-2"
              @click="buttonView.event"
            >
              <span class="material-icons-outlined text-2xl leading-none">
                {{ buttonView.icon }}
              </span>
              <span class="text-lg font-bold">{{ buttonView.text }}</span>
            </client-button>
            <button type="button" class="absolute top-2 end-2 leading-none" @click="close">
              <span class="material-icons-outlined text-secondary-black">close</span>
            </button>
          </VForm>
        </div>
      </div>
    </div>
  </fade-transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import type { RadioOptions, CheckboxOptions, TempOption } from '@/types/mealTypes'
import { apiPostCart, apiPatchCart } from '@/apis/client'
import ClientButton from '../ClientButton.vue'
import FadeTransition from '@/components/client/FadeTransition.vue'

type ModalType = 'add' | 'edit'
interface ButtonView {
  icon: string
  text: string
  event: Function
}

export default defineComponent({
  components: {
    ClientButton,
    FadeTransition
  },
  data() {
    return {
      form: {
        number: 1,
        cust: [] as TempOption[],
        price: 0,
        total_price: 0
      },
      modalType: '' as ModalType,
      showModal: false,
      radioField: '',
      buttonIsLoading: false
    }
  },
  computed: {
    ...mapState(useClientStore, ['tempMeal', 'tempOrderId', 'tempEditCartItem']),
    ...mapWritableState(useClientStore, ['sidebarExpand']),
    // 單選客製化選項
    radioOptions(): RadioOptions[] {
      return this.tempMeal.customization?.filter((option) => option.type === 'radio')
    },
    // 複選客製化選項
    checkboxOptions(): CheckboxOptions[] {
      return this.tempMeal.customization?.filter((option) => option.type === 'checkbox')
    },
    // 單選客製化選項值
    radioValue: {
      get(): string {
        return this.radioField || this.defaultRadioValue
      },
      set(val: string) {
        this.radioField = val
      }
    },
    // 單選客製化選項預設值
    defaultRadioValue(): string {
      if (
        this.radioOptions &&
        this.radioOptions.length > 0 &&
        this.radioOptions[0].options &&
        this.radioOptions[0].options.length > 0
      ) {
        return this.radioOptions[0].options[0].name
      }
      return ''
    },
    // 按鈕樣式
    buttonView(): ButtonView {
      return this.modalType === 'add'
        ? {
            icon: 'shopping_cart',
            text: `加入購物車 ($ ${this.form.total_price} 元)`,
            event: this.addToCart as () => Promise<void>
          }
        : {
            icon: 'edit',
            text: `完成修改 ($ ${this.form.total_price} 元)`,
            event: this.editCartItem as () => Promise<void>
          }
    }
  },
  watch: {
    tempMeal() {
      this.form.price = this.tempMeal.price
      this.form.total_price = this.tempMeal.price
    },
    'form.number': {
      handler: 'calcTotalPrice',
      deep: true
    },
    'form.cust': {
      handler: 'calcTotalPrice',
      deep: true
    }
  },
  methods: {
    ...mapActions(useClientStore, ['getCart', 'resetTempMeal']),
    // 開啟燈箱
    open(type: string) {
      this.modalType = type as ModalType
      this.showModal = true

      if (type === 'edit') {
        this.form.number = this.tempEditCartItem.number
        this.form.cust = this.tempEditCartItem.cust

        if (this.radioOptions?.length > 0) {
          this.radioField = this.tempEditCartItem.cust.slice(-1)[0]?.name ?? ''
        }
      }
    },
    // 關閉燈箱
    close() {
      this.resetForm()
      this.resetTempMeal()
      this.showModal = false
    },
    // 新增購物車
    async addToCart() {
      this.addCustomRadioOption()
      this.calcTotalPrice()
      this.buttonIsLoading = true

      const { _id, stock, customization, ...others } = this.tempMeal
      const payload = {
        order_id: this.tempOrderId,
        number: this.form.number,
        total_price: this.form.total_price,
        cust: this.form.cust,
        ...others
      }

      try {
        await apiPostCart(payload)
        this.getCart()
        this.sidebarExpand = true
      } catch (err) {
        console.error(err)
      }

      this.buttonIsLoading = false
      this.close()
    },
    // 編輯購物車
    async editCartItem() {
      this.removeAllRadioOption()
      this.addCustomRadioOption()
      this.calcTotalPrice()
      this.buttonIsLoading = true

      const payload = {
        edit_id: this.tempMeal._id,
        number: this.form.number,
        total_price: this.form.total_price,
        cust: this.form.cust
      }

      try {
        await apiPatchCart(payload)
        this.getCart()
      } catch (err) {
        console.error(err)
      }

      this.buttonIsLoading = false
      this.close()
    },
    // 新增單選客製化選項
    addCustomRadioOption() {
      if (this.radioValue) {
        this.form.cust.push({ name: this.radioValue, price: 0 })
      }
    },
    // 移除單選客製化選項
    removeAllRadioOption() {
      this.form.cust = this.form.cust.filter((obj) =>
        this.radioOptions.every((item) => {
          if (item.options) {
            return !item.options.some((option) => option.name === obj.name)
          }
        })
      )
    },
    // 增加數量
    addQuantity() {
      this.form.number++
    },
    // 減少數量
    minusQuantity() {
      if (this.form.number > 1) this.form.number--
    },
    // 計算總價
    calcTotalPrice() {
      this.handleCustomizationPrice()

      this.form.total_price = this.form.number * this.form.price
    },
    // 計算客製化選項價格
    handleCustomizationPrice() {
      this.form.price = this.tempMeal.price

      if (this.form.cust.length > 0) {
        for (const option of this.form.cust) {
          this.form.price += option.price ?? 0
        }
      }
    },
    // 重置表單
    resetForm() {
      this.form = {
        number: 1,
        cust: [] as TempOption[],
        price: 0,
        total_price: 0
      }
      this.radioField = ''
    }
  }
})
</script>
