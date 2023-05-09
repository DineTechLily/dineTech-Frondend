<template>
  <div>
    <p class="block mb-3.5 text-gray-33" :class="requiredSign">
      {{ label }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
