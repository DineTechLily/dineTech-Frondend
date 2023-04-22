<template>
  <h1>404 Not Found</h1>
  <p>對不起，您訪問的頁面不存在。</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  mounted() {
    this.$router.replace('/error/404')
  }
})
</script>
