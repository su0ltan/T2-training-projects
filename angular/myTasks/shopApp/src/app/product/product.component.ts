import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { CartService } from '../services/cart.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../components/popup/popup.component';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  limit: number = 5;

  categories = [];
  searched = false;

  constructor(
    private auth: AuthService,
    private cartService: CartService,
    private acLink: ActivatedRoute,
    private http: HttpClient,
    private productService: ProductService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.acLink.data.subscribe((res) => {
      this.productService.AllProducts = res['products'];
      // this.productService.AllProducts.forEach((product) => {});
      this.insertToApiProducts(this.productService.AllProducts);
    });
    this.getCategories();

    this.productService.AllProducts.forEach((product) => {
      this.cartService.currentCartDetails.products.forEach((p) => {
        if (p.productId == product.id) {
          product.isItInCart = true;
          product.qty = p.quantity;
        }
      });
    });
  }
  private insertToApiProducts(p: Product[]) {
    this.productService.apiProduct = p.slice(0, this.limit);
  }

  getCategories() {
    this.http.get('products/categories').subscribe((res) => {
      this.categories = Object(res);
    });
  }

  getMoreProducts() {
    this.limit = this.limit + 5;
    this.insertToApiProducts(this.productService.AllProducts);
  }
  print() {
    console.log('hello');
  }

  categorySearchForProducts(category: string) {
    this.limit = 5;
    let url = '';
    if (category == '') url = 'products';
    else url = `products/category/${category}`;
    this.http.get<Product[]>(url).subscribe((res) => {
      this.productService.AllProducts = res;
      this.insertToApiProducts(this.productService.AllProducts);
    });
  }
  addToCart(productId: number) {
    this.productService.addToCart(productId);
    this.cartService.currentCartDetails.products.push({
      productId: productId,
      quantity: 1,
    });
  }

  openPopup(product: Product) {
    this.dialog.open(PopupComponent, {
      width: '70%',
      height: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: product,
    });
  }

  getApiProducts() {
    return this.productService.apiProduct;
  }
  getAllProducts() {
    return this.productService.AllProducts;
  }
  updateQuantity(productId: number, opration: string) {
    this.productService.AllProducts.forEach((obj) => {
      if (obj.id == productId) {
        opration == '+' ? obj.qty!++ : obj.qty!--;
      }
    });
  }
}
