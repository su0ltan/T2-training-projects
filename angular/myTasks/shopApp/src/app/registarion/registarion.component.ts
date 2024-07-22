import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { GeneralServicesService } from '../services/general-services.service';
@Component({
  selector: 'app-registarion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registarion.component.html',
  styleUrl: './registarion.component.css',
})
export class RegistarionComponent implements OnInit {
  registrationForm: FormGroup;

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
    this.authService.setUserData(this.registrationForm.value);
    this.route();
  }

  route() {
    this.router.navigate(['/home']);
  }
}
