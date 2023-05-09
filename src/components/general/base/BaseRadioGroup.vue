<template>
  <div>
    <p class="block mb-3.5 text-gray-33">{{ label }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    }
  }
})
</script>
