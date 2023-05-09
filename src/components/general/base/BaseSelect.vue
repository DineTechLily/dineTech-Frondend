<template>
  <label>
    <p class="block mb-1 text-gray-33" :class="requiredSign">
      {{ label }}
    </p>
    <select
      v-bind="$attrs"
      class="w-full text-gray-66 py-2 px-4 border border-gray-d4 rounded-md focus:outline-none focus:border-secondary-yellow focus:ring-secondary-yellow focus:ring-primary-orange"
      name="city"
      :required="required"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
      <slot></slot>
    </select>
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
