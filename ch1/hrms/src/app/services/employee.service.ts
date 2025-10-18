import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
  // Employee service logic here
  getEmployees() {
    // Return an observable or promise with employee data
    return[
      { id: 1, firstName: 'John', lastName: 'Doe', position: 'Farmer' }, 
      { id: 2, firstName: 'Jane', lastName: 'Smith', position: 'Engineer' }
    ];
  }
}