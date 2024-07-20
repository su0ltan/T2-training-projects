import { elementAt } from 'rxjs';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products;
  constructor(private productService: ProductService) {
    this.products = productService.loadProducts();
  }
  getCart(): any[] {
    let cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  getCartLength() {
    return this.getCart().length;
  }

  addToCart(productId: any) {
    const newCart = this.getCart();

    const product = this.products.find(function (product: { id: any }) {
      return product.id == productId;
    });

    if (newCart.length == 0) {
      newCart.push(product);
    } else {
      const res = newCart.find((element) => element.id == productId);

      if (res === undefined) {
        newCart.push(product);
      }
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  removeFromCart(productID: any) {
    const newCart = this.getCart();

    const temp = newCart.filter((item) => item.id != productID);
    localStorage.setItem('cart', JSON.stringify(temp));
  }

  getTotal() {
    //this function will return the totoal price in cart
  }
  updateQuantity(productID: any, n: number) {
    const newCart = this.getCart();

    for (let product of newCart) {
      if (product.id == productID) product.quantity = n;
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
  }
}
