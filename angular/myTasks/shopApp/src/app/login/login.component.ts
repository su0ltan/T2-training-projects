import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GeneralServicesService } from '../services/general-services.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authGlobalservices: GeneralServicesService,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const formData = this.loginForm.value;

    const username = formData.username;
    const pass = formData.password;

    this.auth.login(username, pass);

    // const savedData = localStorage.getItem('registrationData');

    // if (!savedData) {
    //   console.error('No Such data');
    //   return;
    // }
    // const userData = JSON.parse(savedData);
    // if (
    //   userData.username === formData.username &&
    //   userData.password === formData.password
    // ) {
    //   this.authGlobalservices.alert('Login successful!');
    //   this.router.navigate(['/home']);
    // } else {
    //   this.authGlobalservices.alert('no such data');
    // }
  }
}
