import type { TempOption, MealPayload } from '@/types/mealTypes';

export interface CartEditItem {
  edit_id: string,
  number: number,
  total_price: number,
  cust: Array<TempOption> | []
}

export interface CartItemId {
  edit_id: string,
}

export interface CartItem extends MealPayload {
  _id: string
}

export interface TempCart extends Array<CartItem> {}