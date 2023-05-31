<template>
  <div v-show="show" class="flex justify-center items-center">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gray-900 opacity-75 z-40"></div>

    <!-- 彈跳視窗 -->
    <div class="fixed bg-white rounded-lg shadow-lg z-50">
      <div class="p-8 mb-2">
        <h2 class="text-xl font-bold mb-4">商品管理-新增</h2>
          <div class="flex">
            <div class="pt-2 mr-8 text-center">商品分類</div>
              <select
                class="w-48 py-3 text-base border-gray-d4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md"
              >
                <option value="option1">義大利麵</option>
                <option value="option2">燉飯</option>
                <option value="option3">甜點</option>
                <option value="option3">飲料</option>
              </select>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-8">商品名稱</div>
            <div>
              <input type="text" class="w-48 border-1 border-gray-d4 rounded-lg" />
            </div>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-8">商品成本</div>
            <div>
              <input type="number" class="w-48 border-1 border-gray-d4 rounded-lg" />
            </div>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-8">商品售價</div>
            <div>
              <input type="number" class="w-48 border-1 border-gray-d4 rounded-lg" />
            </div>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-4">客製化選項</div>
            <div>
              <input type="text" class="w-48 border-1 border-gray-d4 rounded-lg" />
              <button class="bg-primary-orange hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-2">
            新增
          </button>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-8">商品介紹</div>
            <div>
              <textarea class="w-48 border-1 border-gray-d4 rounded-lg"></textarea>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="pt-2 mr-16">圖片</div>
            <div>
              <input type="text" class="w-48 border-1 border-gray-d4 rounded-lg" />
            </div>
          </div>
        </div>
        <div class="flex justify-center mb-4">
          <button
            @click="showAlert"
            class="bg-gray-9f hover:bg-gray-66 text-white font-bold py-2 px-4 rounded mr-2"
          >
            取消
          </button>
          <button class="bg-primary-orange hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
            儲存
          </button>
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