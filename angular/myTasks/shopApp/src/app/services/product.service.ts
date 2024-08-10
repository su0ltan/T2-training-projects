import { catchError } from 'rxjs';
import { CartService } from './cart.service';
import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = localStorage.getItem('products');
  apiProduct: Product[] = [];
  AllProducts: Product[] = [];
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('products');
  }
  setApiProducts(updatedProduct: Product[]) {
    this.apiProduct = updatedProduct;
  }

  addToCart(productId: number) {
    this.apiProduct.forEach((obj) => {
      if (obj.id == productId) {
        obj.isItInCart = true;
        obj.qty = 1;
      }
    });
  }
}
