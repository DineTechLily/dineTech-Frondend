import { defineStore } from 'pinia'
import type { TempMeal } from '@/types/mealTypes'
import type { OrderStatus, PostGuest } from '@/types/orderTypes'
import type { CartEditItem, TempCart } from '@/types/cartTypes'
import { apiPostGuest, apiGetCart } from '@/apis/client'

export const useClientStore = defineStore('client', {
  state: () => {
    return {
      tempOrderId: '',
      tempTableId: 0,
      tempMeal: {} as TempMeal,
      tempCart: [] as TempCart,
      tempEditCartItem: {} as CartEditItem,
      orderStatus: 'notYetOrdered' as OrderStatus,
      ordersTotal: 0,
      sidebarExpand: false,
    }
  },
  getters: {
    menuOrderMessage(state) {
      switch (state.orderStatus) {
        case 'notYetOrdered':
          return '您尚未點餐';
        case 'preparing':
          return '餐點製作中';
        case 'canceled':
          return '餐點已取消';
        case 'delivered':
          return '餐點已送達';
        case 'checkout':
          return '訂單結帳中';
        case 'completed':
          return '訂單已完成';
        default:
          return '系統維護中'
      }
    },
    isEmptyCart(state) {
      return state.tempCart.length === 0;
    },
    isCheckIn(state) {
      return state.tempTableId !== 0;
    }
  },
  actions: {
    setOrderStatus(status: OrderStatus) {
      this.orderStatus = status;
    },
    setTempMeal(meal: TempMeal) {
      this.tempMeal = meal;
    },
    setTempEditCartItem(item: CartEditItem) {
      this.tempEditCartItem = item;
    },
    setTempOrderId(id: string) {
      this.tempOrderId = id;
    },
    setOrdersTotal(total: number) {
      this.ordersTotal = total;
    },
    toggleSidebar() {
      this.sidebarExpand = !this.sidebarExpand;
    },
    async getCustomerId(payload: PostGuest) {
      const { data } = await apiPostGuest(payload);
      this.tempOrderId = data.data.order_id;
      this.tempTableId = data.data.table_id;
    },
    async getCart() {
      const { data } = await apiGetCart(this.tempOrderId);
      this.tempCart = data.data;
    },
    resetCustomerId() {
      this.tempOrderId = '';
      this.tempTableId = 0;
    },
    resetTempMeal() {
      this.tempMeal = {} as TempMeal;
    },
    resetTempData() {
      this.tempMeal = {} as TempMeal;
      this.tempCart = [] as TempCart;
      this.tempEditCartItem = {} as CartEditItem;
    },
  },
})