import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  userData = localStorage.getItem('registrationData');
  isLogin() {
    if (this.userData) return true;
    else return false;
  }
  getUserData() {
    return this.userData;
  }

  setUserData(userData: any) {
    localStorage.setItem('registrationData', JSON.stringify(userData));
    alert('Registration data saved successfully!');
  }

  logout() {
    localStorage.removeItem('registrationData');
  }
}
