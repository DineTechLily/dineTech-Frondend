<template>
  <main>
    <div class="sm: container; bg-amber-500 min-h-screen flex items-center">
      <div class="w-full">
        <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto sm:w-3/4">
          <div class="sm:flex-col items-center sm:grid sm:grid-cols-2 gap-8">
            <div class="sm:col-auto">
              <img src="../../assets/5616698.jpg" alt="" class="rounded-full w-30" />
            </div>
            <div class="sm:col-auto">
              <div class="mb-5">
                <label class="block mb-5 font-semibold text-3xl">後台管理系統</label>
                <input
                  v-model="adminLoginData.company_id"
                  type="text"
                  placeholder="公司代號"
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required
                />
              </div>

              <div class="mb-5">
                <label class="block mb-2"></label>
                <input
                  v-model="adminLoginData.admin_id"
                  type="text"
                  placeholder="員工代號"
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required
                />
              </div>

              <div class="mb-5">
                <label class="block mb-2"></label>
                <input
                  v-model="adminLoginData.password"
                  type="password"
                  placeholder="密碼"
                  class="border shadow p-3 w-full rounded mb-"
                  required
                />
                <!-- <p class="text-sm text-right text-red-400 mt-2">密碼錯誤</p> -->
              </div>
              <button
                @click="adminLogin"
                class="block w-full bg-amber-500 text-white font-bold p-4 rounded-lg"
              >
                登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const apiUrl = 'https://dinetech-host2.onrender.com'

const adminLoginData = reactive({
  company_id: '',
  admin_id: '',
  password: ''
})

const router = useRouter()
const adminLogin = async () => {
  try {
    const loginApi = `${apiUrl}/admin/login`
    const data = {
      company_id: adminLoginData.company_id,
      admin_id: adminLoginData.admin_id,
      password: adminLoginData.password
    }

    const res = await axios.post(loginApi, data)

    if (res.data.message === 'login success') {
      const token = res.data.token
      document.cookie = token
      router.push('/admin/products')
    } else {
      alert('Login Failed, Please Try Again!')
    }
  } catch (err) {
    alert(err.response.data.message)
  }
}
</script>
