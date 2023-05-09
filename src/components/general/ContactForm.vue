<template>
  <form class="w-2/3 flex flex-col gap-y-4 p-12 bg-secondary-white" @submit.prevent="onSubmit">
    <div class="flex gap-x-6">
      <div class="w-1/2 flex flex-col gap-y-4">
        <BaseInput
          v-model="form.contactStoreName"
          name="contactStoreName"
          label="店家名稱"
          required
        />
        <BaseInput v-model="form.contactName" name="contactName" label="聯絡人" required />
        <base-select v-model="form.contactCity" name="contactCity" label="所在縣市" required>
          <option selected disabled hidden>請選擇</option>
          <option v-for="option in contactCityOptions" :key="option.value" :value="option.value">
            {{ option.name }}
          </option>
        </base-select>
        <div class="w-full flex flex-col">
          <div class="flex gap-x-16">
            <base-radio-group label="營業狀態">
              <div class="flex gap-x-4">
                <BaseRadio
                  v-model="form.contactOperation"
                  v-for="(option, index) in contactOperationOptions"
                  :key="option.value"
                  :value="option.value"
                  :name="option.name"
                  :label="option.label"
                  :checked="index === 0"
                />
              </div>
            </base-radio-group>
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col gap-y-4">
        <BaseInput
          v-model="form.contactEmail"
          name="contactEmail"
          label="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <BaseInput v-model="form.contactPhone" name="contactPhone" label="連絡電話" required />
        <base-select v-model="form.contactPeriod" name="contactTime" label="希望聯繫時段" required>
          <option
            v-for="(option, index) in contactPeriodOptions"
            :key="option.value"
            :value="option.value"
            :selected="index === 0"
          >
            {{ option.name }}
          </option>
        </base-select>
        <base-select
          v-model="form.contactSource"
          name="contactSource"
          label="從何處知道我們"
          required
        >
          <option
            v-for="(option, index) in contactSourceOptions"
            :key="option.value"
            :value="option.value"
            :selected="index === 0"
          >
            {{ option.name }}
          </option>
        </base-select>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <base-checkbox-group label="詢問內容（可複選）" required>
        <div class="flex flex-wrap gap-x-5 gap-y-3.5">
          <BaseCheckbox
            v-for="option in contactReasonOptions"
            :key="option.value"
            :value="option.value"
            :label="option.label"
            @update:modelValue="updateContactReasons"
          />
        </div>
      </base-checkbox-group>
    </div>
    <div>
      <BaseTextarea v-model="form.other" label="其他需求" placeholder="請詳盡說明您的需求" />
    </div>
    <div class="w-1/3 self-end">
      <button
        type="submit"
        class="block w-full py-3 bg-primary-orange text-secondary-white rounded-md hover:opacity-90 ease-in duration-50"
      >
        選擇方案
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseRadio from '@/components/general/base/BaseRadio.vue'
import BaseRadioGroup from '@/components/general/base/BaseRadioGroup.vue'
import BaseCheckbox from '@/components/general/base/BaseCheckbox.vue'
import BaseCheckboxGroup from '@/components/general/base/BaseCheckboxGroup.vue'
import BaseInput from '@/components/general/base/BaseInput.vue'
import BaseSelect from '@/components/general/base/BaseSelect.vue'
import BaseTextarea from '@/components/general/base/BaseTextarea.vue'
import {
  contactCityOptions,
  contactOperationOptions,
  contactPeriodOptions,
  contactReasonOptions,
  contactSourceOptions
} from '@/data/contact'

export default defineComponent({
  components: {
    BaseRadio,
    BaseRadioGroup,
    BaseCheckbox,
    BaseCheckboxGroup,
    BaseInput,
    BaseSelect,
    BaseTextarea
  },
  data() {
    return {
      form: {
        contactStoreName: '',
        contactName: '',
        contactCity: '',
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
  methods: {
    updateContactReasons(option: string) {
      if (this.form.contactReasons.includes(option)) {
        this.form.contactReasons = this.form.contactReasons.filter((item) => item !== option)
      } else {
        this.form.contactReasons.push(option)
      }
    },
    onSubmit(values: any) {
      console.log(JSON.stringify(values, null, 2))
    }
  }
})
</script>
