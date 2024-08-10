import { Routes } from '@angular/router';
import { AdminLoginComponent } from './features/admin-login/admin-login.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'login',
    component: AdminLoginComponent,
  },
];
