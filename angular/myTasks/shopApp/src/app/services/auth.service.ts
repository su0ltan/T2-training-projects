import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { GeneralServicesService } from './general-services.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = this.checkUser();
  constructor(
    private authGlobalservices: GeneralServicesService,
    private http: HttpClient,
    private router: Router
  ) {}

  checkUser() {
    const user = localStorage.getItem('userData');
    if (user) return true;
    else return false;
  }

  getUserID() {
    const user = localStorage.getItem('userData');
    if (!user) return;

    return JSON.parse(user).id;
  }

  setUserData(userData: User) {
    if (!userData) {
      console.log('no such data');
      return;
    }

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  login(username: string, password: string) {
    this.http
      .post('auth/login', {
        username: username,
        password: password,
      })
      .subscribe((res) => {
        if (res) {
          const user: User = {
            id: 3,
            firstName: '',
            lastName: '',
            fromUrl: true,
            username: username,
            email: '',
            phone: 0,
            password: password,
            token: Object(res).token,
          };

          console.log(user);
          this.isLogin = true;
          this.setUserData(user);
          this.router.navigate(['/home']);
        }
      });
  }

  logout() {
    localStorage.removeItem('registrationData');
  }
}
