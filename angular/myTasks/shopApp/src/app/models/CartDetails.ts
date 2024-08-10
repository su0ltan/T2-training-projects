import { Product } from './product';
export interface CartDetails {
  id: number;
  quantity: number;
  cartID: number;
  product: Product;
}
