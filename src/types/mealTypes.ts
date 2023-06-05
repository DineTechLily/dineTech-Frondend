export interface Meal {
  category: string;
  name: string;
  price: number;
  description: string;
  img: string;
  stock?: number;
}

export interface TempMeal extends Meal {
  _id: string;
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

export interface MealPayload extends Meal {
  order_id: string;
  total_price: number;
  number: number;
  cust: Array<TempOption> | []
}

export interface RadioOptions {
  name: string
  type: string
  options?: [
    {
      name: string
      price?: number
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
  price?: number
}