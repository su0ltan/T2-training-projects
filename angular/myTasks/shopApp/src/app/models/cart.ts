export interface Cart {
  id: number;
  products: {
    productId: number;
    quantity: number | 1;
  }[];
  userID: number;
  date: string;
}
