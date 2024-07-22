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
      product.quantity = 1;
      newCart.push(product);
    } else {
      const res = newCart.find((element) => element.id == productId);

      if (res === undefined) {
        product.quantity = 1;
        newCart.push(product);
      }
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  removeFromCart(productID: any) {
    const newCart = this.getCart();

    const temp = newCart.filter((item) => item.id != productID);
    this.addAllProductToCart(temp);
  }

  getTotal() {
    let total = 0;
    for (let item of this.getCart()) {
      const price = item.price * item.quantity;
      total = total + price;
    }

    return total;
    //this function will return the totoal price in cart
  }
  updateQuantity(productID: any, opration: string) {
    let newCart = this.getCart();

    for (let product of newCart) {
      if (opration == 'add') {
        if (product.id == productID) {
          product.quantity++;
          break;
        }
      } else {
        if (product.id == productID && product.quantity != 1) {
          product.quantity--;
          break;
        } else if (product.id == productID && product.quantity == 1) {
          newCart = newCart.filter((item) => item.id != productID);
          break;
        }
      }
    }

    this.addAllProductToCart(newCart);
    this.getCart;
  }

  addAllProductToCart(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
