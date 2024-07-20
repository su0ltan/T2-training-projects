import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  num: number = 0;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.num = this.cartService.getCartLength();
    console.log(this.num);
  }
  logout() {
    if (confirm('Are you sure that you want to logout?'))
      this.authService.logout();
    location.reload();
  }
  isLogin() {
    return this.authService.isLogin();
  }
}
