import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLogin = false;
  savedData = localStorage.getItem('registrationData');

  ngOnInit(): void {
    this.checkLogin();
  }
  checkLogin() {
    if (this.savedData) {
      this.isLogin = true;
    }
  }

  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 19.99,
      pictureUrl: 'assets/images/p1.png',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 29.99,
      pictureUrl: 'assets/images/p3.jpeg',
    },
    {
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 39.99,
      pictureUrl: 'assets/images/p5.webp',
    },
    {
      name: 'Product 4',
      description: 'Description of Product 4',
      price: 49.99,
      pictureUrl: 'assets/images/r.webp',
    },
    {
      name: 'Product 5',
      description: 'Description of Product 5',
      price: 59.99,
      pictureUrl: 'assets/images/p6.webp',
    },
    {
      name: 'Product 6',
      description: 'Description of Product 6',
      price: 69.99,
      pictureUrl: 'assets/images/p7.webp',
    },
    {
      name: 'Product 7',
      description: 'Description of Product 7',
      price: 79.99,
      pictureUrl: 'assets/images/p1.png',
    },
    {
      name: 'Product 8',
      description: 'Description of Product 8',
      price: 89.99,
      pictureUrl: 'assets/images/p3.jpeg',
    },
    {
      name: 'Product 9',
      description: 'Description of Product 9',
      price: 99.99,
      pictureUrl: 'assets/images/p6.webp',
    },
    {
      name: 'Product 10',
      description: 'Description of Product 10',
      price: 109.99,
      pictureUrl: 'assets/images/p5.webp',
    },
  ];
}
interface Product {
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
}
