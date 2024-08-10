import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const CanActivateLogin = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLogin) {
    console.log('You are not Login yet');
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
