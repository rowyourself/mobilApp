// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      // Lógica de autenticación aquí
      this.router.navigate(['/home']); // Redirige a la página de inicio
    }
  }
}

