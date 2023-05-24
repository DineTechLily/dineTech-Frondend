<template>
  <div class="flex justify-center items-center">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gray-900 opacity-75 z-40"></div>
    <!-- 彈跳視窗 -->
    <div class="fixed bg-white rounded-lg shadow-lg z-50">
      <div class="p-8">
        <h2 class="text-xl font-bold mb-4">彈跳視窗標題</h2>
        <p class="mb-4">彈跳視窗內容</p>
        <div class="flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            確定
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang='ts'>
</script>

<style>
</style>