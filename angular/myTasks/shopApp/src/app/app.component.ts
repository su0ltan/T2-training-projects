import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistarionComponent } from './registarion/registarion.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RegistarionComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
