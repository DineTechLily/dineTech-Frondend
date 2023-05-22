import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import type { MealInfo, TempMeal, OrderStatus } from '@/types/mealTypes'

export const useMealStore = defineStore('meals', {
  state: () => {
    return {
      mealInfo: {} as MealInfo,
      tempMeal: {} as TempMeal,
      tempOrderId: '',
      orderStatus: 'notYetOrdered' as OrderStatus,
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
    }
  },
  actions: {
    setOrderStatus(status: OrderStatus) {
      this.orderStatus = status;
    },
    setMealInfo(meal: any) { 
      this.mealInfo = meal;
    },
    setTempMeal(meal: any) {
      this.tempMeal = meal;
    },
    generateOrderId() {
      this.tempOrderId = uuidv4();
    },
    resetOrderId() {
      this.tempOrderId = '';
    }
  },
})