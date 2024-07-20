import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = localStorage.getItem('products');

  constructor() {}

  loadProducts() {
    return this.products ? JSON.parse(this.products) : [];
  }
  addProduct() {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 19.99,
        pictureUrl: 'assets/images/p3.jpeg',
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 29.99,
        pictureUrl: 'assets/images/p5.webp',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: 39.99,
        pictureUrl: 'assets/images/r.webp',
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'Description of Product 4',
        price: 49.99,
        pictureUrl: 'assets/images/p1.png',
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Description of Product 5',
        price: 59.99,
        pictureUrl: 'assets/images/p3.jpeg',
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'Description of Product 6',
        price: 69.99,
        pictureUrl: 'assets/images/p6.webp',
      },
      {
        id: 7,
        name: 'Product 7',
        description: 'Description of Product 7',
        price: 79.99,
        pictureUrl: 'assets/images/p5.webp',
      },
      {
        id: 8,
        name: 'Product 8',
        description: 'Description of Product 8',
        price: 89.99,
        pictureUrl: 'assets/images/p6.webp',
      },
      {
        id: 9,
        name: 'Product 9',
        description: 'Description of Product 9',
        price: 99.99,
        pictureUrl: 'assets/images/p7.webp',
      },
      {
        id: 10,
        name: 'Product 10',
        description: 'Description of Product 10',
        price: 109.99,
        pictureUrl: 'assets/images/p1.png',
      },
    ];
    localStorage.setItem('products', JSON.stringify(products));
  }
}
