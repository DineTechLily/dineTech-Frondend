<template>
  <main>
    <div class="text-2xl py-6">商品管理</div>
    <div class="bg-white rounded-lg w-full shadow-lg">
      <div>
        <input
          type="text"
          class="rounded-lg text-sm mx-3 my-4 border-primary-blue drop-shadow-lg shadow-blue-500/50"
        />
        <button class="bg-primary-blue text-white border shadow-md rounded-lg px-3 py-2 text-sm">
          搜尋
        </button>
      </div>
      <div class="flex justify-end">
        <button
          class="bg-primary-blue text-white border shadow-md rounded-lg px-3 py-2 text-sm mr-6"
          @click="showAlert"
        >
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
            <tr class="border-t text-center">
              <td class="px-4 py-2">產品1</td>
              <td class="px-4 py-2">分類1</td>
              <td class="px-4 py-2"><img src="link_to_image1" alt="圖片1" /></td>
              <td class="px-4 py-2">上架</td>
              <td class="px-4 py-2">
                <button class="bg-primary-orange text-white font-bold p-2 rounded">
                  <img src="../../assets/images/admin/admin-icon-edit.png" alt="" />
                </button>
              </td>
            </tr>
            <tr class="border-t text-center">
              <td class="px-4 py-2">產品2</td>
              <td class="px-4 py-2">分類2</td>
              <td class="px-4 py-2"><img src="link_to_image2" alt="圖片2" /></td>
              <td class="px-4 py-2">下架</td>
              <td class="px-4 py-2">
                <button class="bg-primary-orange text-white font-bold p-2 rounded">
                  <img src="../../assets/images/admin/admin-icon-edit.png" alt="" />
                </button>
              </td>
            </tr>
            <tr class="border-t text-center">
              <td class="px-4 py-2">產品3</td>
              <td class="px-4 py-2">分類1</td>
              <td class="px-4 py-2"><img src="link_to_image3" alt="圖片3" /></td>
              <td class="px-4 py-2">上架</td>
              <td class="px-4 py-2">
                <button class="bg-primary-orange text-white font-bold p-2 rounded">
                  <img src="../../assets/images/admin/admin-icon-edit.png" alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ProductAdd v-show="show" />
  </main>
</template>

<script lang="ts" setup>
import ProductAdd from '@/components/admin/ProductAdd.vue'
import { ref } from 'vue'

const show = ref(false)
const showAlert = () => {
  show.value = !show.value
}
</script>
