import { provideRouter, RouterModule, Routes } from '@angular/router';
import { RegistarionComponent } from './registarion/registarion.component';
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CanActivateLogin,
  CanActivateRegister,
  CanDeactivateRegister,
} from '../auth.guard';
import { ProductResolveService } from './services/resolver/product-resolve.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.services';
import { ProductComponent } from './product/product.component';
import { CartResolveService } from './services/resolver/cart-resolver.service';

export const routes: Routes = [
  {
    path: 'registation',
    component: RegistarionComponent,
    canActivate: [CanActivateRegister],
    // canDeactivate: [CanDeactivateRegister],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivateLogin],
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { products: ProductResolveService, cart: CartResolveService },
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
})
export class AppRoutingModule {}
