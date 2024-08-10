import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from '../features/dashboard/dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { usersResolverResolver } from './services/resolvers/users-resolver.resolver';
import { ProductsResolverResolver } from './services/resolvers/products-resolver.resolver';
import { CartsResolverResolver } from './services/resolvers/carts-resolver.resolver';
import { CanActivateLogin } from './services/guards/auth.guard.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    RouterLink,
    RouterModule.forChild([
      {
        canActivate: [CanActivateLogin],
        path: '',
        component: LayoutComponent,
        children: [
          // {
          //   path: 'dashboard',
          //   loadChildren: () =>
          //     import('../features/dashboard/dashboard.module').then(
          //       (m) => m.DashboardModule
          //     ),
          // },
          {
            path: 'users',
            loadChildren: () =>
              import('../features/user-management/user-management.module').then(
                (m) => m.UserManagementModule
              ),
            resolve: { users: usersResolverResolver },
          },
          {
            path: 'products',
            loadChildren: () =>
              import(
                '../features/product-management/product-management.module'
              ).then((m) => m.ProductManagementModule),
            resolve: { products: ProductsResolverResolver },
          },
          {
            path: 'carts',
            loadChildren: () =>
              import('../features/cart-management/cart-management.module').then(
                (m) => m.CartManagementModule
              ),
            resolve: { carts: CartsResolverResolver },
          },
        ],
      },
    ]),
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    DashboardComponent,
  ],
})
export class CoreModule {}
