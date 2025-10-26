import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list-component";
import { EmployeeDetailComponent } from "./employee-detail-component";
import { EmployeeCreateComponent } from "./employee-create-component";

export const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'detail/:email', component: EmployeeDetailComponent },
  { path: 'create', component: EmployeeCreateComponent },
  // { path: 'edit', component: EmployeeEditComponent },
];