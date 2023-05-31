import axios from 'axios';
import type { CartEditItem, CartItemId } from '@/types/cartTypes';
import type { PostOrder, PostGuest } from '@/types/orderTypes';
import type { PostFeedback } from '@/types/feedbackTypes';
import type { TempMeal } from '@/types/mealTypes';

const clientRequest = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}/cust/`,
})

export const apiGetMenu = () => clientRequest.get('menu');
export const apiPostGuest = (payload: PostGuest) => clientRequest.post('guest', payload);
export const apiGetCart = (order_id: String) => clientRequest.get(`cart/${order_id}`);
export const apiPostCart = (payload: TempMeal) => clientRequest.post('cart', payload);
export const apiPatchCart = (payload: CartEditItem) => clientRequest.patch('cart', payload);
export const apiDeleteCart = (payload: CartItemId) => clientRequest.delete('cart', { data: payload});
export const apiPostOrder = (payload: PostOrder) => clientRequest.post('order', payload);
export const apiGetTodayOrders = (table_id: Number) => clientRequest.get(`cart/details/${table_id}`);
export const apiPostFeedback = (payload: PostFeedback) => clientRequest.post('feedback', payload);