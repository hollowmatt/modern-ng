import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';
import { EmployeeService } from './services/employee.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', loadComponent: () => {
    return import('./pages/registration').then((m) => m.RegistrationComponent);
  }},
  { 
    path: 'employees',
    providers: [EmployeeService], 
    loadChildren: () => {
      return import('./pages/employees/employees.routes').then((m) => m.routes);
    }
  }
];