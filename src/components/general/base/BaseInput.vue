<template>
  <label>
    <p class="block mb-1 text-gray-33" :class="requiredSign">
      {{ label }}
    </p>
    <input
      v-bind="$attrs"
      class="w-full border border-gray-d4 py-2 px-4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow text-gray-66"
      type="text"
      :required="required"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    requiredSign() {
      return this.required ? "after:content-['*'] after:ml-0.5 after:text-primary-orange" : ''
    }
  }
})
</script>
