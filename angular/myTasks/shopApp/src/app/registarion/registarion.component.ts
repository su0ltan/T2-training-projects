import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-registarion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registarion.component.html',
  styleUrl: './registarion.component.css',
})
export class RegistarionComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    this.loadFormData();
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      localStorage.setItem('registrationData', JSON.stringify(formData));
      alert('Registration data saved successfully!');
      this.router.navigate(['/home']);
    }
  }
  loadFormData() {
    const savedData = localStorage.getItem('registrationData');
    if (savedData) {
      this.registrationForm.setValue(JSON.parse(savedData));
    }
  }
}
