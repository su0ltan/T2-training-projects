import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { GeneralServicesService } from '../services/general-services.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registarion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registarion.component.html',
  styleUrl: './registarion.component.css',
})
export class RegistarionComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmited = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private authGlobalservices: GeneralServicesService
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    this.isSubmited = true;
    this.authService.setUserData(this.registrationForm.value);
    this.route();
  }

  route() {
    this.router.navigate(['/home']);
  }

  canExit() {
    if (
      (this.registrationForm.value.firstName ||
        this.registrationForm.value.lastName ||
        this.registrationForm.value.email ||
        this.registrationForm.value.password) &&
      !this.isSubmited
    ) {
      return confirm(
        'Are you sure that you want to exit the registration form ?'
      );
    } else return false;
  }
}
