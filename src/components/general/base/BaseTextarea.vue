<template>
  <label class="block mt-2.5 text-gray-33">
    <p
      class="block mb-3 text-gray-33"
      :class="{ 'after:content-[\'*\'] after:ml-0.5 after:text-primary-orange': required }"
    >
      {{ label }}
    </p>
    <textarea
      v-bind="$attrs"
      rows="4"
      class="block px-4 py-2 w-full text-gray-66 placeholder:text-gray-d4 border border-gray-d4 rounded-md focus:ring-secondary-yellow focus:border-secondary-yellow"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ></textarea>
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
  }
})
</script>
