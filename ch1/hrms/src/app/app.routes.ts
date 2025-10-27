import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';
import { EmployeeService } from './services/employee.service';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', loadComponent: () => {
    return import('./pages/registration').then((m) => m.RegistrationComponent);
  }},
  { 
    path: 'employees',
    providers: [EmployeeService],
    canActivate: [authGuard], 
    loadChildren: () => {
      return import('./pages/employees/employees.routes').then((m) => m.routes);
    }
  }
];