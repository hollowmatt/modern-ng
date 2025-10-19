import { NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list-component',
  imports: [NgComponentOutlet],
  templateUrl: './employee-list-component.html',
  standalone: true,
})
export class EmployeeListComponent {
  employeeService =  inject(EmployeeService);
  employees$ = this.employeeService.getEmployees();
  isConfirmationOpen = false;
  confirmDialog: any = null;

  async showConfirmationDialog(){
    this.confirmDialog = await import('../../shared/components/confirmation-dialog-component').then(m => m.ConfirmationDialogComponent);
    this.isConfirmationOpen = true;
  }
}
