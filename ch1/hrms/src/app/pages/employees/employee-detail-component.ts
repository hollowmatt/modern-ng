import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail-component',
  imports: [AsyncPipe, NgComponentOutlet],
  templateUrl: './employee-detail-component.html',
  standalone: true,
})
export class EmployeeDetailComponent {
  //coming soon 
}