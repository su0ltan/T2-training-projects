import { ProductService } from './../services/product.service';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLogin = false;
  products: any;

  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.isLogin = this.auth.isLogin();
    this.products = this.productService.loadProducts();
  }

  add() {
    this.productService.addProduct();
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
