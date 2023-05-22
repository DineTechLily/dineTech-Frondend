interface Meal {
  order_id: string;
  category: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  img: string;
}

export interface MealInfo extends Meal{
  customization: [{
    name: string;
    value: string;
    type: string;
    options: [{
      name: string;
      value: string;
      price: number;
    }]
  },{
    name: string;
    value: string;
    type: string;
    price: number;
  }];
}

export interface TempMeal extends Meal {
  total: number;
  customization: [];
}

export interface RadioOptions {
  name: string
  value: string
  type: string
  options?: [
    {
      name: string
      value: string
      price: number
    }
  ]
}

export interface CheckboxOptions {
  name: string
  value: string
  type: string
  price?: number
}

export type OrderStatus = 'notYetOrdered' | 'preparing' | 'canceled' | 'delivered' | 'checkout' | 'completed';