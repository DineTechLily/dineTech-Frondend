export interface Meal {
  _id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  img: string;
  number: number;
}

export interface MealInfo extends Meal {
  customization: [{
    name: string;
    type: string;
    options: [{
      name: string;
      price: number;
    }]
  } | {
    name: string;
    type: string;
    price: number;
  }];
}

export interface TempMeal extends Meal {
  order_id: string;
  total_price: number;
  cust: Array<TempOption> | []
}

export interface TempMeals extends Array<TempMeal> {}

export interface RadioOptions {
  name: string
  type: string
  options?: [
    {
      name: string
      price: number
    }
  ]
}

export interface CheckboxOptions {
  name: string
  type: string
  price?: number
}

export interface TempOption {
  name: string
  price: number
}