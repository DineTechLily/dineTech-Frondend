import axios from 'axios';
import type { CartEditItem, CartItemId } from '@/types/cartTypes';
import type { PostOrder, PostGuest } from '@/types/orderTypes';
import type { PostFeedback } from '@/types/feedbackTypes';
import type { MealPayload } from '@/types/mealTypes';

const clientRequest = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}/cust/`,
})

export const apiGetMenu = () => clientRequest.get('menu');
export const apiGetMenuById = (id: string) => clientRequest.get(`menu/${id}`);
export const apiPostGuest = (payload: PostGuest) => clientRequest.post('guest', payload);
export const apiGetCart = (order_id: string) => clientRequest.get(`cart/${order_id}`);
export const apiPostCart = (payload: MealPayload) => clientRequest.post('cart', payload);
export const apiPatchCart = (payload: CartEditItem) => clientRequest.patch('cart', payload);
export const apiDeleteCart = (payload: CartItemId) => clientRequest.delete('cart', { data: payload});
export const apiPostOrder = (payload: PostOrder) => clientRequest.post('order', payload);
export const apiGetTodayOrders = (table_id: Number) => clientRequest.get(`cart/details/${table_id}`);
export const apiPostFeedback = (payload: PostFeedback) => clientRequest.post('feedback', payload);