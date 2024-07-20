import { Injectable } from '@angular/core';
import { GeneralServicesService } from './general-services.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authGlobalservices: GeneralServicesService) {}
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
    this.authGlobalservices.alert('Registration data saved successfully!');
  }

  logout() {
    localStorage.removeItem('registrationData');
  }
}
