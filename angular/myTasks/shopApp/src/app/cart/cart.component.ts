import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  number = new FormControl('');
  cart: any;
  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  remoiveItem(id: any) {
    this.cartService.removeFromCart(id);
    this.cart = this.cartService.getCart();
  }

  updateQuantity(id: any, opration: string) {
    this.cartService.updateQuantity(id, opration);
  }
  getTotal() {
    return this.cartService.getTotal();
  }
}
