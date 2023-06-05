<template>
  <Form
    v-bind="$attrs"
    class="w-full md:w-2/3 flex flex-col gap-y-4 py-8 px-5 md:p-12 bg-secondary-white"
    @submit="submitForm"
  >
    <div class="flex flex-col md:flex-row flex-wrap gap-x-6 gap-y-4">
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          店家名稱
        </p>
        <Field
          v-model="form.contactStoreName"
          name="contactStoreName"
          type="text"
          :rules="{ required: true, max: 20 }"
          label="店家名稱"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        />
        <ErrorMessage name="contactStoreName" class="text-secondary-red text-sm" />
      </label>
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          Email
        </p>
        <Field
          v-model="form.contactEmail"
          name="contactEmail"
          type="email"
          :rules="{ required: true, email: true, max: 50 }"
          label="電子信箱"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        />
        <ErrorMessage name="contactEmail" class="text-secondary-red text-sm" />
      </label>
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          聯絡人
        </p>
        <Field
          v-model="form.contactName"
          name="contactName"
          type="text"
          label="聯絡人"
          :rules="{ required: true, max: 20 }"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        />
        <ErrorMessage name="contactName" class="text-secondary-red text-sm" />
      </label>
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          聯絡電話
        </p>
        <Field
          v-model="form.contactPhone"
          name="contactPhone"
          type="tel"
          label="聯絡電話"
          :rules="{ required: true, numeric: true, max: 20 }"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        />
        <ErrorMessage name="contactPhone" class="text-secondary-red text-sm" />
      </label>
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          所在縣市
        </p>
        <Field
          v-model="form.contactCity"
          name="contactCity"
          as="select"
          :rules="{ required: true, is_not: '請選擇' }"
          label="所在縣市"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        >
          <option selected disabled hidden>請選擇</option>
          <option
            v-for="option in contactCityOptions"
            :key="option.value"
            :value="option.value"
            class="checked:bg-secondary-yellow"
          >
            {{ option.name }}
          </option>
        </Field>
        <ErrorMessage name="contactCity" class="text-secondary-red text-sm" />
      </label>
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          希望聯繫時段
        </p>
        <Field
          v-model="form.contactPeriod"
          name="contactPeriod"
          as="select"
          rules="required"
          label="希望聯繫時段"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        >
          <option
            v-for="option in contactPeriodOptions"
            :key="option.value"
            :value="option.value"
            class="checked:bg-secondary-yellow"
          >
            {{ option.name }}
          </option>
        </Field>
        <ErrorMessage name="contactPeriod" class="text-secondary-red text-sm" />
      </label>
      <div class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          營業狀態
        </p>
        <div class="flex gap-x-4 ps-2 md:mt-3">
          <label v-for="option in contactOperationOptions" :key="option.value">
            <Field
              v-model="form.contactOperation"
              name="contactOperation"
              type="radio"
              :value="option.value"
              rules="required"
              label="營業狀態"
              class="w-4 h-4 border border-gray-d4 rounded-full checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
            />
            <span class="ps-2 text-sm">{{ option.label }}</span>
          </label>
          <ErrorMessage name="contactOperation" class="text-secondary-red text-sm" />
        </div>
      </div>
      <label class="md:w-[calc(50%-0.75rem)]">
        <p
          class="block mb-1 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
        >
          從何處知道我們
        </p>
        <Field
          v-model="form.contactSource"
          name="contactSource"
          as="select"
          rules="required"
          label="從何處知道我們"
          class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
        >
          <option
            v-for="option in contactSourceOptions"
            :key="option.value"
            :value="option.value"
            class="checked:bg-secondary-yellow"
          >
            {{ option.name }}
          </option>
        </Field>
        <ErrorMessage name="contactSource" class="text-secondary-red text-sm" />
      </label>
    </div>
    <div>
      <p
        class="block mb-3.5 text-gray-33 after:content-['*'] after:ml-0.5 after:text-primary-orange"
      >
        詢問內容（可複選）
      </p>
      <div class="flex flex-wrap gap-x-5 gap-y-3.5">
        <Field
          v-for="option in contactReasonOptions"
          :key="option.label" 
          v-model="form.contactReasons"
          type="checkbox"
          name="contactReasons"
          :value="option.value"
          label="詢問內容"
          rules="required"
          v-slot="{ field }"
        >
          <label class="flex items-center">
            <input
              v-model="form.contactReasons"
              v-bind="field"
              type="checkbox"
              :value="option.value"
              name="contactReasons"
              label="詢問內容選項"
              class="w-4 h-4 border border-gray-d4 checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
            />
            <span class="ps-2 text-sm">{{ option.label }}</span>
          </label>
        </Field>
        <ErrorMessage name="contactReasons" class="text-secondary-red text-sm" />
      </div>
    </div>
    <div class="md:mt-2.5">
      <label>
        <p class="block mb-2 md:mb-3.5 text-gray-33">其他需求</p>
        <Field v-model="form.other" name="other" v-slot="{ field }">
          <textarea
            v-bind="field"
            rows="4"
            name="other"
            placeholder="請詳盡說明您的需求"
            class="block px-4 py-2 w-full text-gray-66 placeholder:text-gray-d4 border border-gray-d4 rounded-md focus:ring-secondary-yellow focus:border-secondary-yellow"
          ></textarea>
        </Field>
      </label>
    </div>
    <div class="w-full md:w-1/3 md:self-end">
      <button
        type="submit"
        class="block w-full py-2.5 bg-primary-orange text-secondary-white rounded-md hover:opacity-90 ease-in duration-50"
      >
        送出表單
      </button>
    </div>
  </Form>
  <ModalSuccess ref="successModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  contactCityOptions,
  contactOperationOptions,
  contactPeriodOptions,
  contactReasonOptions,
  contactSourceOptions
} from '@/data/contact'
import ModalSuccess from './ModalSuccess.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    ModalSuccess
  },
  props: {
    // 方案名稱
    planName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {
        contactStoreName: '',
        contactName: '',
        contactCity: '請選擇',
        contactOperation: '已開業',
        contactEmail: '',
        contactPhone: '',
        contactPeriod: '上午 09:00-11:00',
        contactSource: 'Google',
        contactReasons: [] as string[],
        other: ''
      },
      contactCityOptions,
      contactOperationOptions,
      contactPeriodOptions,
      contactReasonOptions,
      contactSourceOptions
    }
  },
  watch: {
    planName(name: string) {
      const currentReasons = this.form.contactReasons

      if (currentReasons.includes(name)) return
      else this.form.contactReasons = [...currentReasons, name]
    }
  },
  methods: {
    // 送出表單
    submitForm() {
      this.openSuccessModal()
    },
    // 開啟成功訊息燈箱
    openSuccessModal() {
      setTimeout(() => {
        ;(this.$refs.successModal as typeof ModalSuccess).open()
      }, 500)
    }
  }
})
</script>
