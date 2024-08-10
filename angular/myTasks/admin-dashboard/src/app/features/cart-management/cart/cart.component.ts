import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartData!: Cart[];

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.cartData = this.activeRoute.snapshot.data['carts'];
  }
  onSort($event: Event) {
    throw new Error('Method not implemented.');
  }
}
