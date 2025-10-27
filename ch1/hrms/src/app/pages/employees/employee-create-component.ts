import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../types/employee';
import { first } from 'rxjs';

@Component({
  selector: 'employee-create-component',
  templateUrl: './employee-create-component.html',
  imports: [RouterModule, ReactiveFormsModule],
  standalone: true,
})
export class EmployeeCreateComponent {
  employee: Employee = {
    email: '', firstName: '', lastName: '', position: '', age: 0
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    age: new FormControl(18, [Validators.required, Validators.min(18)])
  });

  saveEmployee(): void {
    const data = this.form.value as Employee

    this.employeeService.createEmployee(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.newEmployee()
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEmployee(): void {
    this.employee = {
      email: '', firstName: '', lastName: '', position: '', age: 0
    };
    this.submitted = false;
    this.form.reset();
  }
}