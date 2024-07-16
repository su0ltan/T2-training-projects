import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistarionComponent } from './registarion/registarion.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistarionComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}