import type { RadioOptions, CheckboxOptions, TempMeal } from '@/types/mealTypes';

export interface CartEditItem {
  edit_id: String,
  number: Number,
  total_price: Number,
  cust: Array<RadioOptions | CheckboxOptions> | [],
}

export interface CartItemId {
  edit_id: String,
}

