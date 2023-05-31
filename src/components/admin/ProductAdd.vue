<template>
  <div v-show="show" class="flex justify-center items-center">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gray-900 opacity-75 z-40"></div>
    <!-- 彈跳視窗 -->
    <div class="fixed bg-white rounded-lg shadow-lg z-50">
      <div class="p-8">
        <h2 class="text-xl font-bold mb-4">商品管理-新增</h2>
        <div class="mb-4">
          <div class="flex">
            <div class="pt-2 mr-4">商品分類</div>
            <div>
              <select
                class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-d4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="option1">義大利麵</option>
                <option value="option2">燉飯</option>
                <option value="option3">甜點</option>
                <option value="option3">飲料</option>
              </select>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-4">商品名稱</div>
            <div>
              <input type="text" class="border-1 border-gray-d4 rounded-lg" />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            確定
          </button>
          <button
            @click="showAlert"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang='ts' setup>
import { ref } from 'vue'
const show = ref(true)
const showAlert = () => {
  show.value = !show.value
}
</script>

<style>
</style>