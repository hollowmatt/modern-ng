import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../types/employee';
@Component({
  selector: 'app-employee-detail-component',
  imports: [RouterModule],
  templateUrl: './employee-detail-component.html',
  standalone: true,
})
export class EmployeeDetailComponent {
  @Input() employee!: Employee;
  
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.employee = this.employeeService.getEmployeeById(parseInt(params['id']))!;
      console.log(this.employee);
    });
  }
}