<template>
  <header class="h-20 w-full bg-gray-33 px-12 py-2.5">
    <div class="flex justify-between items-center">
      <div><router-link to="Orders"><button type="button"
            class="w-[170px] py-4 px-12 text-secondary-white text-lg text-center rounded-md" :class="'bg-primary-orange'">
            訂單管理
          </button></router-link>
      </div>
      <!-- <div> <router-link to="Checkout"><button type="button"
            class="w-[170px] py-4 px-12 text-secondary-white text-lg text-center rounded-md">
            結帳管理
          </button></router-link>
      </div> -->
      <div class="flex justify-end xl:pe-52"><router-link to="Login">
          <button type="button"
            class="flex justify-around w-[151px] py-2 text-secondary-white text-xl text-center rounded-full bg-gray-700"
            @click="logout">
            <span class="material-icons-outlined">
              account_circle
            </span>
            登出</button>
        </router-link>
      </div>
    </div>
  </header>
  
  <main class="w-full items-center flex flex-row overflow-y-auto">
    <div class="preparingOrders overflow-auto h-screen basis-3/4 px-5 py-3">
      <h3 class="text-xl mb-4">今日準備中訂單</h3>
      <ul class="order flex flex-wrap gap-5" v-if="preparingOrders.length != 0">
        <li class="bg-white p-4 rounded border-t-8 border-primary-orange shadow-lg xl:w-64 lg:w-56" v-for="(order, order_id) in preparingOrders" :key="order_id" @click="preparingOrderDetail(order)">
          <div class="table text-3xl mb-2">No.{{ order.table }}</div>
          <div class="clientNum text-xl">用餐人數：{{ order.people }}人</div>
          <div class="orderTime text-xl">點餐時間：{{ order.order_time.split(/[T,.]/)[1]}}</div>
        </li>
      </ul>
      <h4 v-else>尚未有準備中訂單</h4>
    </div>

    <!-- servedOrders 今日已出餐訂單 -->
    <div class="overflow-auto h-screen basis-1/4 text-xl px-5 py-3">
      <h3 class="text-xl mb-6">今日已出餐訂單</h3>
      <div class="search mb-3">
        <label for="small-input" class="block mb-2"></label>
        <i class="material-icons-outlined">
          search
        </i>
        <input type="text" id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-primary-orange focus:border-primary-orange placeholder:請輸入桌號">
      </div>
      <ul class="order">
        <li class="bg-white p-4 shadow-lg rounded border-t-8 border-gray-400" v-for="servedOrder in servedOrders">
          <div class="table text-3xl mb-2">No.{{ servedOrder.table }}</div>
          <div class="clientNum text-xl">人數：{{ servedOrder.people }}人</div>
          <div class="orderTime text-xl">點餐時間：{{ servedOrder.time.split(/[T,.]/)[1] }}</div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
.preparingOrders {
  background: #FAF7F5;
  cursor: default;
}

.search {
  position: relative;
}

.search input {
  padding-left: 35px;
}

.search i {
  position: absolute;
  top: 50%;
  margin-left: 10px;
  margin-top: -10px;
  z-index: 1;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';
 
const apiUrl = 'https://dinetech-host2.onrender.com'

export default defineComponent({
  data() {
    return {
      time: '',
      preparingOrders: [
        {
          id: '',
          table: '',
          people: '',
          order_id: '',
          order_time: ''
        }
      ],
      tempOrder: {},
      id: '',
      servedOrders: [
        {
          id: '',
          table: '',
          people: '',
          time: ''
        }
      ],
      searchData: '',
    }
  },
  methods: {
    checkLogin() {

    },
    logout() {
      alert("登出成功");
      this.$router.push({ path: './Login' });
    },
    getPreparingOrders() {
      const getPreparingOrdersApi = `${apiUrl}/emp/order`;
      axios
        .get(getPreparingOrdersApi)
        .then((response) => {
          this.preparingOrders = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data.message);
        })
    },
    preparingOrderDetail(order) {
      this.tempOrder = Object.assign({}, order);
      const id = this.tempOrder.order_id;
      this.$router.push({ path: `./Orders/Preparing/${id}` })
    },
    getServedOrders() {
      const getServedOrdersApi = `${apiUrl}/emp/order/done`;
      axios
        .get(getServedOrdersApi)
        .then((response) => {
          this.servedOrders = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data.message);
        })
    }
  },
  mounted() {
    this.getPreparingOrders();
    this.getServedOrders();
  },
})
</script>
