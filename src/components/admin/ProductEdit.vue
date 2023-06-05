<template>
  <main>
  <div class="flex justify-center items-center">
    <!-- 背景遮罩
    <div class="fixed inset-0 bg-gray-900 opacity-75 z-40"></div> -->

    <!-- 彈跳視窗 -->
    <div class="fixed bg-white rounded-lg shadow-lg z-50">
      <div class="p-8 mb-2">
        <h2 class="text-xl font-bold mb-4">商品管理-編輯</h2>
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
            <input
              v-model="editedProduct.value.name"
              type="text"
              class="w-48 border-1 border-gray-d4 rounded-lg"
            />
          </div>
        </div>
        <div class="flex mt-2">
          <div class="pt-2 mr-8">商品成本</div>
          <div>
            <input
              v-model="editedProduct.value.cost"
              type="number"
              class="w-48 border-1 border-gray-d4 rounded-lg"
            />
          </div>
        </div>
        <div class="flex mt-2">
          <div class="pt-2 mr-8">商品售價</div>
          <div>
            <input
              v-model="editedProduct.value.price"
              type="number"
              class="w-48 border-1 border-gray-d4 rounded-lg"
            />
          </div>
        </div>
        <div class="flex mt-2">
          <div class="pt-2 mr-4">客製化選項</div>
          <div>
            <input type="text" class="w-48 border-1 border-gray-d4 rounded-lg" />
            <button
              class="bg-primary-orange hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-2"
            >
              新增
            </button>
          </div>
        </div>
        <div class="flex mt-2">
          <div class="pt-2 mr-8">商品介紹</div>
          <div>
            <textarea
              v-model="editedProduct.value.description"
              class="w-48 border-1 border-gray-d4 rounded-lg"
            ></textarea>
          </div>
        </div>
        <div class="flex mt-2">
          <div class="pt-2 mr-16">圖片</div>
          <div>
            <input
              v-model="editedProduct.value.img"
              type="text"
              class="w-48 border-1 border-gray-d4 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <button
          class="bg-gray-9f hover:bg-gray-66 text-white font-bold py-2 px-4 rounded mr-2"
          @click="close"
        >
          取消
        </button>
        <button
          type="submit"
          class="bg-primary-orange hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
          @click="saveProduct"
        >
          儲存
        </button>
      </div>
    </div>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      editedProduct: { ...this.product },
    };
  },
  methods: {
    saveProduct() {
      // Logic to save the editedProduct to the database
      // You can emit a custom event like this:
      this.$emit('save', this.editedProduct);
    },
    close() {
      this.$emit('close');
    },
  },
});
</script>

<!-- <script lang="ts" setup>
import { defineProps, ref, defineEmits } from 'vue';
import type { Product } from '@/types/productTypes';

const props = defineProps({
  product:{
    type:Object,
    required:true
  }
});
const { emit } = defineEmits(['save', 'cancel']);

const editedProduct = ref<Product>(props.product);

console.log(editedProduct.value)


const save = () => {
  emit('save', editedProduct.value);
};

const cancel = () => {
  emit('cancel');
}

</script> -->

<style></style>
