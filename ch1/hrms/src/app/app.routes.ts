import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', loadComponent: () => {
    return import('./pages/registration').then((m) => m.RegistrationComponent);
  }},
];