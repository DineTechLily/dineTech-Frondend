<template>
  <main>
    <div class="text-2xl py-6">商品管理</div>
    <div class="bg-white rounded-lg w-full shadow-lg">
      <div>
        <input type="text" class="rounded-lg text-sm mx-3 my-4 border-primary-blue drop-shadow-lg shadow-blue-500/50" />
        <button class="bg-primary-blue hover:bg-blue-700 text-white border shadow-md rounded-lg px-3 py-2 text-sm">
          搜尋
        </button>
      </div>
      <div class="flex justify-end">
        <button class="bg-primary-blue hover:bg-blue-700 text-white border shadow-md rounded-lg px-3 py-2 text-sm mr-6"
          @click="showAlert">
          新增商品
        </button>
      </div>

      <div class="mx-6 my-3">
        <table class="table-auto w-full">
          <thead class="bg-gray-f7">
            <tr>
              <th class="px-4 py-2 text-gray-66">名稱</th>
              <th class="px-4 py-2 text-gray-66">分類</th>
              <th class="px-4 py-2 text-gray-66">圖片</th>
              <th class="px-4 py-2 text-gray-66">上/下架</th>
              <th class="px-4 py-2 text-gray-66">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t text-center" v-for="product in productList" :key="product.id">
              <td class="px-4 py-2">{{product.name }}</td>
              <td class="px-4 py-2">{{ product.category }}</td>
              <td class="px-4 py-2 justify-center"><img :src="product.img" class="h-20"/></td>
              <td class="px-4 py-2 flex justify-center">
                <div class="flex h-6 w-12 rounded-xl" :class="{ 'bg-primary-blue': toggle, 'bg-gray-e9': !toggle }">
                  <!-- 切換按鈕 -->
                  <input type="checkbox" id="toggle" class="hidden" v-model="toggle">
                  <!-- 切换條 -->
                  <label for="toggle" class="rounded-full w-12 h-6 cursor-pointer">
                    <span
                      class="block mt-0.5 bg-white rounded-full w-5 h-5 shadow-md transform transition-all duration-300"
                      :class="{ 'translate-x-7': toggle }"></span>
                  </label>
                </div>
              </td>
              <td class="px-4 py-2">
                <button class="bg-primary-orange hover:bg-amber-600 text-white font-bold p-2 rounded">
                  <img src="../../assets/images/admin/admin-icon-edit.png" alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ProductAdd v-show="show" />
    <ProductEdit/>
  </main>
</template>

<script lang="ts" setup>
import ProductAdd from '@/components/admin/ProductAdd.vue'
import ProductEdit from '@/components/admin/ProductEdit.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios';

const show = ref(false);
const toggle = ref(false);
let productList:[]=[];


onMounted(async () => {
  try {
    const res = await axios.get('https://dinetech-host2.onrender.com/admin/product')
    productList=res.data.data
    console.log(productList)
  } catch (error) {
    console.log(error)
  }

})


const showAlert = () => {
  show.value = !show.value
}
</script>
