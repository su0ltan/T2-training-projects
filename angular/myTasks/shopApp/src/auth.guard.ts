import { inject } from '@angular/core';
import { AuthService } from './app/services/auth.service';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RegistarionComponent } from './app/registarion/registarion.component';
import { HomeComponent } from './app/home/home.component';
import { ProductService } from './app/services/product.service';

export const CanActivateLogin = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLogin) {
    console.log('You Already Login in');
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};

export const CanActivateRegister = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLogin) {
    console.log('Logout first to achieve this page');
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};

export const CanDeactivateRegister = (compoent: RegistarionComponent) => {
  return compoent.canExit();
};

// export const resolveProducts = () => {
//   const productsService = inject(ProductService);

//   productsService.getProducts().subscribe((res) => {
//     return res;
//   });
// };
