import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list-component',
  imports: [AsyncPipe],
  templateUrl: './employee-list-component.html',
  standalone: true,
})
export class EmployeeListComponent {
  employeeService =  inject(EmployeeService);
  employees$ = this.employeeService.getEmployees();
  isConfirmationOpen = false;

  showConfirmationDialog(){
    this.isConfirmationOpen = true;
  }
}
