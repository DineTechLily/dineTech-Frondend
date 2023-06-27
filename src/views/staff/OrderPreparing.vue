<template>
  <div class="bg-primary-bg h-screen w-screen">
    <header class="h-20 w-full bg-gray-33 px-12 py-2.5 flex items-center">
      <button type="button" class="flex items-center gap-x-2 py-2 pe-2" @click="backToOrders">
        <span class="material-icons-outlined text-secondary-white text-xl">chevron_left</span>
        <span class="text-secondary-white">返回</span>
      </button>
    </header>
    <main>
      <ul class="order grid grid-cols-6 gap-4 m-3">
        <li class="relative bg-white p-4 rounded shadow-lg" v-for="detail in order_details" :key="detail._id">
          <div v-if="detail.finished == 'abandoned'"
            class="rounded absolute bottom-0 left-0 bg-gray-400 opacity-75 w-full h-full flex justify-center items-center">
            <img src="/cancel_FILL0_wght400_GRAD0_opsz48.png" alt="">
            <p class="text-3xl">棄單</p>
          </div>
          <div v-if="detail.finished == 'true'"
            class="absolute bottom-0 left-0 bg-gray-400 opacity-75 w-full h-full flex justify-center items-center">
            <img src="/check_circle_FILL0_wght400_GRAD0_opsz48.png" alt="check_circle">
            <p class="text-3xl">已送餐</p>
          </div>
          <div>
            # {{ detail.order_id }}
          </div>
          <div class="text-xl font-semibold">
            {{ detail.name }}
          </div>
          <div class="text-xl">
            <span v-if="detail.cust_name1 != null">◎{{ detail.cust_name1 }}</span>
            <span v-if="detail.cust_name2 != null">、</span>
            <span v-if="detail.cust_name2 != ''">{{ detail.cust_name2 }}</span>
            <span v-if="detail.cust_name3 != null">、</span>
            <span v-if="detail.cust_name3 != ''">{{ detail.cust_name3 }}</span>
          </div>
          <div class="flex mt-2 align-bottom">
            <button class="block w-['50'] bg-gray-400 text-white font-bold p-4 rounded-lg mr-3"
              @click="abandon(detail)">棄單</button>
            <button class="block w-['50'] bg-red-400 text-white font-bold p-4 rounded-lg"
              @click="serve(detail)">送餐</button>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
const apiUrl = 'https://dinetech-host2.onrender.com'

export default defineComponent({
  data() {
    return {
      order_details: [],
      tempDetail: {}
    }
  },
  created() {
    const id = this.$route.params.id
    axios
      .get(`${apiUrl}/emp/order/${id}`)
      .then((response) => {
        this.order_details = response.data.data;
      })
  },
  methods: {
    getAllDetails() {
      const id = this.$route.params.id
      axios
        .get(`${apiUrl}/emp/order/${id}`)
        .then((response) => {
          this.order_details = response.data.data
        })
    },
    backToOrders() {
      this.$router.push({ path: '/staff/orders' })
    },
    abandon(detail) {
      this.tempDetail = { ...detail };
      const product_id = this.tempDetail._id;
      axios({
        method: 'patch',
        url: `${apiUrl}/emp/order/abandon`,
        data: {
          product_id
        }
      })
        .then((response) =>
          this.getAllDetails()
        )
    },
    serve(detail) {
      this.tempDetail = { ...detail };
      const product_id = this.tempDetail._id;
      axios({
        method: 'patch',
        url: `${apiUrl}/emp/order`,
        data: {
          product_id
        }
      })
        .then((response) =>
        this.getAllDetails()
        )
    }
  },
mounted() {
},

})
</script>
