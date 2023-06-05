<template>
  <div class="bg-primary-bg h-screen w-screen">
    <header class="h-20 w-full bg-gray-33 px-12 py-2.5 flex items-center">
      <button type="button" class="flex items-center gap-x-2 py-2 pe-2" @click="backToMainMenu">
        <span class="material-icons-outlined text-secondary-white text-xl">chevron_left</span>
        <span class="text-secondary-white">返回</span>
      </button>
    </header>
    <div class="flex justify-between h-[calc(100%-80px)]">
      <main class="px-12 py-4 w-full overflow-auto">
        <table class="table-auto w-full text-center">
          <thead>
            <tr class="text-lg text-gray-9f">
              <th class="text-start">餐點項目</th>
              <th>數量</th>
              <th>金額</th>
              <th>狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr class="align-top border-b" v-for="item in orderList" :key="item._id">
              <td class="text-start py-2">
                <p>{{ item.name }}</p>
                <p class="text-gray-9f text-sm">{{ handleCustomization(item.cust) }}</p>
              </td>
              <td class="py-2">X {{ item.number }}</td>
              <td class="py-2">$ {{ handlePrice(item.total_price) }}</td>
              <td class="py-2">{{ item.finished ? '已送達' : '準備中' }}</td>
            </tr>
          </tbody>
        </table>
      </main>
      <div
        class="flex flex-col gap-y-4 bg-[url('@/assets/images/client/client-bg-sidebar.png')] bg-contain pt-4 px-5 min-w-[360px]"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { apiGetTodayOrders } from '@/apis/client'
import { mapState, mapActions } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import type { TempOption } from '@/types/mealTypes'
import type { OrderList } from '@/types/orderTypes'
import { formatPriceToTWD } from '@/utils'

export default defineComponent({
  data() {
    return {
      orderList: [] as OrderList
    }
  },
  computed: {
    ...mapState(useClientStore, ['tempTableId']),
    totalPrice(): number {
      return this.orderList.reduce((acc, cur) => acc + cur.total_price, 0)
    }
  },
  methods: {
    ...mapActions(useClientStore, ['setOrdersTotal']),
    backToMainMenu() {
      this.$router.push({ path: '/client/main-menu' })
    },
    async getTodayOrders() {
      try {
        const { data } = await apiGetTodayOrders(this.tempTableId)
        this.orderList = this.flattenNestedArray(data.data)
        this.setOrdersTotal(this.totalPrice)
      } catch (err) {
        console.error(err)
      }
    },
    flattenNestedArray<T>(nestedArray: T[]): T[] {
      return nestedArray.reduce((flattenedArray: T[], currentItem: T) => {
        if (Array.isArray(currentItem)) {
          return flattenedArray.concat(this.flattenNestedArray(currentItem))
        } else {
          return flattenedArray.concat(currentItem)
        }
      }, [])
    },
    handlePrice(price: number): string {
      return formatPriceToTWD(price)
    },
    handleCustomization(cust: TempOption[]): string {
      return cust.map((option: TempOption) => option.name).join(' / ')
    }
  },
  created() {
    this.getTodayOrders()
  }
})
</script>
