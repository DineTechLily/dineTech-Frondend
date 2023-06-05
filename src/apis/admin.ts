import axios from 'axios';
import type { Product } from '@/types/productTypes';

const adminRequest = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}/admin/`,
})

export const apiGetProducts = () => adminRequest.get('product');
export const apiSaveProduct = (product: Product) => adminRequest.post('product', product);

