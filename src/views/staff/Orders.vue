<template>
  <main>店員訂單管理頁
    <button class="bg-red-400 text-white font-bold p-4 rounded-sm" @click="logout">
      登出
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  methods: {
    checkLogin() {
      
    },
    logout() {
      alert("登出成功");
      this.$router.push({path:'./Login'});

    }
  }
})
</script>
