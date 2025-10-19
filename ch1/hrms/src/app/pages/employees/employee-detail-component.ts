import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail-component',
  imports: [RouterModule],
  templateUrl: './employee-detail-component.html',
  standalone: true,
})
export class EmployeeDetailComponent {
  employee = {
    id:0,
    firstName:'',
    lastName:'',
    position:'',
    age:0
  }
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employee.id = params['id'];
      this.employeeService.getEmployeeById(+this.employee.id);
    })
  }
}