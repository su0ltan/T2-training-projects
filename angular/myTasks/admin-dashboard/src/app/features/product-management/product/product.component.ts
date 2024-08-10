import { ProductService } from './../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../../shared/popup/popup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatIconModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  //pro.productService.productData!: Product[];
  searchQuery: string = '';
  pageSizes: number[] = [5, 10, 50, 100];
  selectedPageSize: number = 10;
  theChange: number = 5;
  limit: number = 5;

  constructor(
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    const data = localStorage.getItem('products');

    if (data) {
      console.log('from local storage');
      this.productService.products = JSON.parse(data);
      this.productService.productData = this.productService.products.slice(
        0,
        this.theChange
      );
    } else {
      this.productService.products = this.activeRoute.snapshot.data['products'];
      this.productService.productData = this.productService.products.slice(
        0,
        this.theChange
      );
      localStorage.setItem(
        'products',
        JSON.stringify(this.productService.products)
      );
    }
  }

  search(query: string) {
    if (query == '') {
      this.productService.productData = this.productService.products.slice(
        0,
        this.theChange
      );
    } else {
      this.productService.productData = this.productService.products.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.price.toString().includes(query) ||
          product.rating.rate.toString().includes(query) ||
          product.rating.count.toString().includes(query)
      );
    }
  }
  loadMore() {
    this.productService.productData = this.productService.products.slice(
      0,
      this.limit + this.theChange
    );
    this.limit = this.limit + this.theChange;
  }

  onSort($event: Event) {
    throw new Error('Method not implemented.');
  }
  onPageSizeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedPageSize = Number(selectElement.value);

    this.theChange = this.selectedPageSize;
    this.loadMore();
  }

  deleteItem(id: number) {
    if (confirm('Are you sure want to delete this item?')) {
      this.productService.products = this.productService.products.filter(
        (res) => res.id != id
      );
      this.productService.productData = this.productService.products.slice(
        0,
        this.limit
      );
    }
  }

  closePopup() {}
  openPopup(product: Product) {
    this.dialog.open(PopupComponent, {
      width: '100%',
      height: '80%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: product,
    });
  }
  getLength() {
    return this.productService.products.length;
  }
  getProducts() {
    return this.productService.productData;
  }

  onHeaderClick(event: Event): void {
    // Remove the style from all headers
    const headers = document.querySelectorAll('thead th');
    headers.forEach((header) => {
      (header as HTMLElement).style.border = '';
      (header as HTMLElement).style.color = 'black  ';
    });

    // Apply the style to the clicked header
    const target = event.target as HTMLElement;
    if (target.nodeName == 'TH') {
      target.style.borderBottom = '5px solid #427bca';
      target.style.color = '#427bca';
    }
  }
}
