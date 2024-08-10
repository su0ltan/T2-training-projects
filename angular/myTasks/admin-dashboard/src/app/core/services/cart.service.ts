import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) {}

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  getCart(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${id}`);
  }

  createCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart);
  }

  updateCart(id: number, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${id}`, cart);
  }

  deleteCart(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
