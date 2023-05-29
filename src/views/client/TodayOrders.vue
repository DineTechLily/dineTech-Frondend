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
            <tr class="align-top border-b">
              <td class="text-start py-2">
                <p>德式脆皮豬腳</p>
                <p class="text-gray-9f text-sm">小辣 / 起司</p>
              </td>
              <td class="py-2">X 1</td>
              <td class="py-2">$500</td>
              <td class="py-2">已送達</td>
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
import { mapState } from 'pinia'
import { useClientStore } from '@/stores/clientStore'

export default defineComponent({
  data() {
    return {
      orderList: []
    }
  },
  computed: {
    ...mapState(useClientStore, ['tempTableId'])
  },
  methods: {
    backToMainMenu() {
      this.$router.push({ path: '/client/main-menu' })
    },
    async getTodayOrders() {
      try {
        const { data } = await apiGetTodayOrders(this.tempTableId)
        this.orderList = this.flattenNestedArray(data.data)
      } catch (err) {
        console.error(err)
      }
    },
    flattenNestedArray(nestedArray: any[]): any[] {
      return nestedArray.reduce((flattenedArray: any[], currentItem: any) => {
        if (Array.isArray(currentItem)) {
          return flattenedArray.concat(this.flattenNestedArray(currentItem))
        } else {
          return flattenedArray.concat(currentItem)
        }
      }, [])
    }
  },
  created() {}
})
</script>
