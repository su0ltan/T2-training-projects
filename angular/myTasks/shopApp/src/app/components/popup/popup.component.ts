import { Product } from './../../models/product';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  product: Product = {
    id: 0,
    title: '',
    description: '',
    category: '',
    rating: {
      rate: 0,
      count: 0,
    },
    image: '',
    price: 0,
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private ref: MatDialogRef<PopupComponent>,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.product = this.data;
  }

  closePopup() {
    this.ref.close();
  }
  addToCart() {
    this.cartService.addToCart(this.product);
    this.closePopup();
  }
}
