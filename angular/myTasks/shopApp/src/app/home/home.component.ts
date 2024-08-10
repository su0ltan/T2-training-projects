import { CartService } from './../services/cart.service';
import { ProductService } from './../services/product.service';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductComponent } from '../product/product.component';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLogin = false;
  cart: Cart[] = [];

  constructor(
    private auth: AuthService,
    private acLink: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.isLogin = this.auth.isLogin;
    this.acLink.data.subscribe((res: any) => {
      // console.log(res);
      this.cart = res.cart;
      if (this.cart && this.cart.length > 0)
        this.cartService.currentCartDetails = this.cart[0];
    });
  }
}
