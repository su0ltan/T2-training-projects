import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = this.checkUser();
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http
      .post('https://fakestoreapi.com/auth/login', {
        username: username,
        password: password,
      })
      .subscribe((res) => {
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/']);
      });
  }
  checkUser() {
    const user = localStorage.getItem('token');
    if (user) return true;
    else return false;
  }
}
