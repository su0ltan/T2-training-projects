import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../../models/cart';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartsResolverResolver implements Resolve<Cart[]> {
  constructor(private CartService: CartService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cart[]> {
    return this.CartService.getCarts();
  }
}
