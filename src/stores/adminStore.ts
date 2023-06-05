import { defineStore } from 'pinia'
import type { Product } from '@/types/productTypes'
import { apiGetProducts, apiAddProduct } from '@/apis/admin'

export const useClientStore = defineStore('admin', {
  state: () => {
    return {
        productList:[],
        selectProduct:{} as Product
    }
  },
  getters: {
    
  },
  actions: {
    async getAllPrduct(){
        const { data } = await apiGetProducts
        this.productList= data
        console.log(data)
    }
  },
})