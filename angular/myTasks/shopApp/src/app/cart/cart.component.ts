import { Product } from './../models/product';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cart } from '../models/cart';
import { CartDetails } from '../models/CartDetails';

import { HttpClient } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  number = new FormControl('');
  cart: Cart[] = [];
  insertedProducts!: Product[];

  length: number = this.getLength();
  products: Product[] = [];
  constructor(
    private auth: AuthService,
    private acLink: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (this.productService.AllProducts) {
      this.insertedProducts = this.productService.AllProducts.filter(
        (res) => res.isItInCart == true
      );
      this.cartService.products = this.insertedProducts;
    } else {
      if (this.cartService.currentCartDetails) {
        this.cartService.currentCartDetails.products.forEach((product: any) => {
          this.http
            .get<Product>(`products/${product.productId}`)
            .subscribe((res) => {
              res.qty ? res.qty : product.quantity;
              this.products.push(res);

              this.cartService.products = this.products;
            });
        });

        this.auth.getUserID();
        this.length = this.cartService.getCartLength();
      }
    }
  }

  remoiveItem(id: any) {
    this.cartService.removeFromCart(id);
    this.cartService.products = this.cartService.products.filter(
      (el: Product) => {
        return el.id != id;
      }
    );

    this.length = this.cartService.products.length;
  }

  updateQuantity(id: any, opration: string) {
    this.cartService.updateQuantity(id, opration);
  }
  getTotal() {
    return this.cartService.getTotal();
  }
  getCart() {
    return this.cartService.products;
  }
  getLength() {
    if (!this.products) return 0;
    return this.cartService.currentCartDetails.products.length;
  }
}
