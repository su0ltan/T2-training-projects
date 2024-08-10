export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: { rate: number; count: number };
  image: string;
  price: number;
  qty?: number;
  isItInCart?: boolean;
}
