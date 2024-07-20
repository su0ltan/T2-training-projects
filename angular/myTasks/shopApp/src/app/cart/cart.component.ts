import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
  }

  updateQuantity(id: any) {
    this.cartService.updateQuantity(
      id,
      this.number.value ? parseInt(this.number.value) : 1
    );
  }
}
