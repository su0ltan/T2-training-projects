import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './../../models/product';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { CartService } from '../cart.service';

@Injectable({ providedIn: 'root' })
export class CartResolveService implements Resolve<Cart[]> {
  constructor(private cartService: CartService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cart[]> {
    return this.cartService.getApiCart();
  }
}
