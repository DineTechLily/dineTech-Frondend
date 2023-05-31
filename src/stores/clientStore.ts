import { defineStore } from 'pinia'
import type { MealInfo, TempMeal, TempMeals } from '@/types/mealTypes'
import type { OrderStatus, PostGuest, PostOrder } from '@/types/orderTypes'
import type { CartEditItem } from '@/types/cartTypes'
import { apiPostGuest, apiGetCart, apiDeleteCart, apiPatchCart, apiPostOrder } from '@/apis/client'

export const useClientStore = defineStore('client', {
  state: () => {
    return {
      tempOrderId: '',
      tempTableId: 0,
      mealInfo: {} as MealInfo,
      tempMeal: {} as TempMeal,
      tempCart: [] as TempMeals,
      tempEditCartItem: {} as CartEditItem,
      orderStatus: 'notYetOrdered' as OrderStatus,
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
    setMealInfo(meal: MealInfo) { 
      this.mealInfo = meal;
    },
    setTempMeal(meal: TempMeal) {
      this.tempMeal = meal;
    },
    setTempEditCartItem(tempMeal: TempMeal) {
      this.tempEditCartItem = {
        edit_id: tempMeal._id,
        number: tempMeal.number,
        total_price: tempMeal.total_price,
        cust: tempMeal.cust,
      } as CartEditItem;
    },
    toggleSidebar() {
      this.sidebarExpand = !this.sidebarExpand;
    },
    async getCustomerId(payload: PostGuest) {
      const { data } = await apiPostGuest(payload);
      this.tempOrderId = data.data.order_id;
      this.tempTableId = data.data.table_id;
      this.tempMeal.order_id = data.data.order_id;
    },
    resetCustomerId() {
      this.tempOrderId = '';
      this.tempTableId = 0;
    },
    async getCart() {
      const { data } = await apiGetCart(this.tempOrderId);
      this.tempCart = data.data;
    },
    async setCartItem(tempMeal: TempMeal) {
      this.setTempEditCartItem(tempMeal);
      const { data } = await apiPatchCart(this.tempEditCartItem);
    },
    async deleteCartItem(mealId: string) {
      const { data } = await apiDeleteCart({edit_id: mealId});
    },
    async checkOut() {
      const { data } = await apiPostOrder({
        order_id: this.tempOrderId,
        table_id: this.tempTableId,
      });
      this.tempOrderId = data.data.new_order_id;
      this.orderStatus = "preparing";
      this.resetTempData();
    },
    resetTempData() {
      this.mealInfo = {} as MealInfo;
      this.tempMeal = {} as TempMeal;
      this.tempCart = [] as TempMeals;
      this.tempEditCartItem = {} as CartEditItem;
    },
  },
})