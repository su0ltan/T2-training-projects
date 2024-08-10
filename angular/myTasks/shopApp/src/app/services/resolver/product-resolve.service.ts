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

@Injectable({ providedIn: 'root' })
export class ProductResolveService implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
