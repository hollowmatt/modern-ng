import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list-component";

export const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  // { path: 'detail/:id', component: EmployeeDetailComponent },
  // { path: 'create', component: EmployeeCreateComponent },
  // { path: 'edit', component: EmployeeEditComponent },
];