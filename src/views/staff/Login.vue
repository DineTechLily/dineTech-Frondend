<template>
  <main>
    <div class="sm: container; bg-red-400 min-h-screen flex items-center">
      <div class="w-full">
        <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto sm:w-3/4">
          <form @submit.prevent="login" class="sm:grid sm:grid-cols-2 gap-8">
            <div class="sm:col-auto">
              <img src="../../assets/5616698.jpg" alt="" class="rounded-full w-30">
            </div>
            <div class="sm:col-auto">
              <div class="mb-5">
                <label for="company_id" class="block mb-2"></label>
                <input v-model="employees.company_id" type="text" id="company_id" name="company_id" placeholder="公司代號"
                  class="border border-gray-300 shadow p-3 w-full rounded mb-" required>
              </div>

              <div class="mb-5">
                <label for="emp_id" class="block mb-2"></label>
                <input v-model="employees.emp_id" type="text" id="emp_id" name="emp_id" placeholder="員工代號"
                  class="border border-gray-300 shadow p-3 w-full rounded mb-" required>
              </div>

              <div class="mb-5">
                <label for="password" class="block mb-2"></label>
                <input v-model="employees.password" type="password" id="password" name="password" placeholder="密碼"
                  class="border shadow p-3 w-full rounded mb-" required>
                <!-- <p class="text-sm text-right text-red-400 mt-2">密碼錯誤</p> -->
              </div>
              <button class="block w-full bg-red-400 text-white font-bold p-4 rounded-lg">登入</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';
const apiUrl = 'https://dinetech-host2.onrender.com'


export default defineComponent({
  data() {
    return {
      employees: {
        company_id: '',
        emp_id: '',
        password: ''
      },
    }
  },
  methods: {
    login() {
      const loginApi = `${apiUrl}/emp/login`;
      axios
        .post(loginApi, this.employees)
        .then((response) => {
          alert(response.data.message);
          const token = response.data.token;
          document.cookie = token;
          this.$router.push({ path: './Orders' })
        })
        .catch((error) => {
          alert(error.response.data.message);
        })
    },
  }
})
</script>
