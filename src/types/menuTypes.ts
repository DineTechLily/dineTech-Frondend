import type { RadioOptions, CheckboxOptions } from '@/types/mealTypes';

interface MenuItem {
  _id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  img: string;
  customization: Array<RadioOptions | CheckboxOptions | []>;
}

export interface Menu extends Array<MenuItem> {}

