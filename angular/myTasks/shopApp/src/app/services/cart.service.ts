import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { elementAt, flatMap, Observable, tap } from 'rxjs';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { AuthService } from './auth.service';
import { CartDetails } from '../models/CartDetails';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //cartDetails: CartDetails[] = [];
  cart!: Cart[];
  currentCartDetails!: Cart;
  products!: Product[];

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private auth: AuthService
  ) {}
  getCart() {
    const cart = localStorage.getItem('cart');
    if (!cart) return;

    return JSON.parse(cart)['id'];
  }

  getApiCart() {
    return this.http.get<Cart[]>(`carts/user/${3}`);
  }

  getCartLength() {
    if (!this.currentCartDetails) return 0;
    return this.currentCartDetails.products.length;
  }

  removeFromCart(productID: any) {
    this.products = this.products.filter((el) => {
      return el.id != productID;
    });
  }

  getTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total = total + product.price * product.qty!;
    });

    return total.toFixed(2);
  }
  updateQuantity(productID: any, opration: string) {
    this.products.forEach((obj) => {
      if (obj.id == productID) {
        opration == '+' ? obj.qty!++ : obj.qty!--;
      }
    });
  }

  addToCart(product: Product) {
    let isItInCart = false;
    if (!this.products) return;
    this.products.forEach((p) => {
      console.log(p);
      if (p.id == product.id) {
        p.qty!++;
        isItInCart = true;
        return;
      }
    });

    if (!isItInCart) {
      product.qty = 1;
      this.products.push(product);
      console.log('the product added successfully');
    }
  }
}
