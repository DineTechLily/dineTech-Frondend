export interface Product {
    _id: string;
  category: string;
  name: string;
  cost: number;
  price: number;
  description: string;
  img: string;
  customization: Customization[];
  isRemoved: boolean;
  createdAt: string;
  __v: number;
  }

export interface Customization {
    _id: string;
    category: string;
    name: string;
    cost: number;
    price: number;
    description: string;
    img: string;
    isRemoved: boolean;
    createdAt: string;
    __v: number;
  }