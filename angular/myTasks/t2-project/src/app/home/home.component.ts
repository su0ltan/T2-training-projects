import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Used to connect board element in template with the data
  encryptedData = new FormControl('');

  constructor(private dataService: DataService) {}

  employee = {
    id: 1,
    firstName: 'Sultan',
    lastName: 'M.',
    age: 25,
    position: 'Software Engineer',
    department: 'IT',
    salary: 500,
    email: 'Sultan@hotmail.com',
    phone: '0555555555',
    skills: ['JavaScript', 'Angular', 'TypeScript', 'Node.js'],
    hireDate: '2024-01-01',
    active: true,
  };

  obj = Object.entries(this.employee);
  sendData() {
    // Encrypted Text
    const enc = this.dataService.encryptData(this.employee);

    //Decrypted Text
    const dec = this.dataService.decryptData(enc);

    // console.log(dec);
    this.encryptedData.setValue(enc);
  }
}
