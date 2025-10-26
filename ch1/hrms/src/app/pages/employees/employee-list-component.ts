import { NgComponentOutlet, AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list-component',
  imports: [NgComponentOutlet, RouterModule, AsyncPipe],
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
  async hideConfirmationDialog(){
    this.isConfirmationOpen = false;
  }
}
