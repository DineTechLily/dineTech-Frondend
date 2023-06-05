<template>
  <div>
    <div class="text-2xl py-6">商品管理</div>
    <div class="bg-white rounded-lg w-full shadow-lg">
      <!-- Search and Add buttons -->
      <div>
        <input
          type="text"
          v-model="searchText"
          class="rounded-lg text-sm mx-3 my-4 border-primary-blue drop-shadow-lg shadow-blue-500/50"
        />
        <button
          class="bg-primary-blue hover:bg-blue-700 text-white border shadow-md rounded-lg px-3 py-2 text-sm"
          @click="searchProducts"
        >
          搜尋
        </button>
      </div>
      <div class="flex justify-end">
        <button
          class="bg-primary-blue hover:bg-blue-700 text-white border shadow-md rounded-lg px-3 py-2 text-sm mr-6"
          @click="showAddModal = true"
        >
          新增商品
        </button>
      </div>

      <!-- Product List Table -->
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
            <tr class="border-t text-center" v-for="product in productList" :key="product._id">
              <td class="px-4 py-2">{{ product.name }}</td>
              <td class="px-4 py-2">{{ product.category }}</td>
              <td class="px-4 py-2 justify-center">
                <img :src="product.img" class="h-20 w-20" />
              </td>
              <td class="px-4 py-2 flex justify-center">
                <div class="flex h-6 w-12 rounded-xl" :class="{ 'bg-primary-blue': toggle, 'bg-gray-e9': !toggle }">
                  <input type="checkbox" id="toggle" class="hidden" v-model="toggle" />
                  <label for="toggle" class="rounded-full w-12 h-6 cursor-pointer">
                    <span class="block mt-0.5 bg-white rounded-full w-5 h-5 shadow-md transform transition-all duration-300"
                      :class="{ 'translate-x-7': toggle }"
                    ></span>
                  </label>
                </div>
              </td>
              <td class="px-4 py-2">
                <button
                  class="bg-primary-orange hover:bg-amber-600 text-white font-bold p-2 rounded"
                  @click="editProduct(product)"
                >
                  <img src="../../assets/images/admin/admin-icon-edit.png" alt="" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Product Add Modal -->
    <ProductAdd v-if="showAddModal" :visible="showAddModal" @save="addProduct" @close="showAddModal = false" />

    <!-- Product Edit Modal -->
    <ProductEdit v-if="showEditModal" :product="selectedProduct" @save="updateProduct" @close="showEditModal = false" :visible="showEditModal"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Product } from '@/types/productTypes';
import { apiGetProducts } from '@/apis/admin';

import ProductAdd from '@/components/admin/ProductAdd.vue';
import ProductEdit from '@/components/admin/ProductEdit.vue';

export default defineComponent({
  components:{
    ProductAdd,
    ProductEdit
  },
  data() {
    return {
      searchText: '',
      productList:[],
      showAddModal: false,
      showEditModal: false,
      selectedProduct:'',
      toggle:false
    };
  },
  methods: {
    async searchProducts() {
      try {
        const response = await apiGetProducts();
        this.productList = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    addProduct(newProduct) {
      // Logic to add the new product to the productList array and save to the database
      // You can use the axios.post method to send a POST request to the API endpoint for adding products
    },
    editProduct(product) {
      this.selectedProduct = product;
      this.showEditModal = true;
    },
    updateProduct(updatedProduct) {
      // Logic to update the product in the productList array and save the changes to the database
      // You can use the axios.put method to send a PUT request to the API endpoint for updating products
    },
  },
  mounted() {
    this.searchProducts();
  },
});
</script>



<!-- <script lang="ts" setup>
import { onMounted,ref } from 'vue'
import axios from 'axios'

import ProductAdd from '@/components/admin/ProductAdd.vue'
import ProductEdit from '@/components/admin/ProductEdit.vue'
import type { Product } from '@/types/productTypes'

const showAdd = ref(false)
const showEdit = ref(false)
const toggle = ref(false)

const productList = ref<Product[]>([])
const editingProduct = ref<Product | null>(null);

onMounted(async () => {
  try {
    const res = await axios.get('https://dinetech-host2.onrender.com/admin/product')
    productList.value = res.data.data
  } catch (error) {
    console.log(error)
  }
})

const addNewProduct = () => {
  showAdd.value = !showAdd.value
}

const editProduct = (product: Product) => {
  editingProduct.value={...product}
  showEdit.value = !showEdit.value
}

const saveProduct=async(updatedProduct:Product)=>{
  const index = productList.value.findIndex((p) => p._id === updatedProduct._id);
  if (index !== -1) {
    productList.value[index] = updatedProduct;
  }
  cancelEdit();
}

const cancelEdit = () => {
  editingProduct.value = null;
};

</script> -->
