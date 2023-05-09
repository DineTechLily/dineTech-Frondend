<template>
  <label class="flex items-center">
    <input
      v-bind="$attrs"
      type="radio"
      class="w-4 h-4 border border-gray-d4 rounded-full checked:bg-primary-orange checked:text-primary-orange checked:ring-transparent focus:ring-transparent focus:border-gray-9f"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span class="ps-2 text-sm">
      {{ label }}
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    }
  }
})
</script>
