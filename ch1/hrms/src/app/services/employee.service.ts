import { Injectable } from "@angular/core";
import { Employee } from "../types/employee";
const employees: Employee[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', position: 'Farmer', age: 40 }, 
  { id: 2, firstName: 'Jane', lastName: 'Smith', position: 'Engineer', age: 25 }
];
@Injectable()
export class EmployeeService {
  // Employee service logic here
  getEmployees() {
    // Return an observable or promise with employee data
    return employees
  }
  getEmployeeById(id: number) {
    // Return an observable or promise with employee data by id
    return  employees.find(emp => emp.id === id);
  }
}