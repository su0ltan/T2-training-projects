import { Product } from './../../models/product';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../core/services/cart.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
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
    private http: HttpClient,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.product = { ...this.data };
  }

  closePopup() {
    this.ref.close();
  }

  saveChanges(product: Product) {
    if (confirm('Are you sure you want to update this product?')) {
      this.productService.products.forEach((pro, index) => {
        if (pro.id === product.id) {
          this.productService.products[index] = product;
        }
      });
      console.log('Products updated:', this.productService.products);
      localStorage.setItem(
        'products',
        JSON.stringify(this.productService.products)
      );
      this.productService.productData = this.productService.products;
    }

    this.closePopup();
  }
}
