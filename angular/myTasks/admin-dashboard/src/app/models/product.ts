export interface Product {
  title: string;
  id: number;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: { rate: number; count: number };
}
