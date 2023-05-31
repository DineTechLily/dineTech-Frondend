export type OrderStatus = 'notYetOrdered' | 'preparing' | 'canceled' | 'delivered' | 'checkout' | 'completed';

export interface PostOrder {
  order_id: String,
  table_id: Number,
}

export interface PostGuest {
  table: Number,
  people: Number,
}

export interface OrderList {
  
}