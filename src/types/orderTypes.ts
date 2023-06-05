import type { TempOption } from "@/types/mealTypes";

export type OrderStatus = 'notYetOrdered' | 'preparing' | 'canceled' | 'delivered' | 'checkout' | 'completed';

export interface PostOrder {
  order_id: string,
  table_id: number,
}

export interface PostGuest {
  table: number,
  people: number,
}

export interface OrderItem {
  _id: string,
  order_id: string,
  category: string,
  name: string,
  price: number,
  description: string,
  img: string,
  number: number,
  total_price: number,
  finished: boolean,
  cust: Array<TempOption> | []
}

export interface OrderList extends Array<OrderItem> {}