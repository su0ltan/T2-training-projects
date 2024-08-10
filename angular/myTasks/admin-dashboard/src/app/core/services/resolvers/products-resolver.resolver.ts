import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolverResolver implements Resolve<Product[]> {
  constructor(private ProductService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.ProductService.getProducts();
  }
}
