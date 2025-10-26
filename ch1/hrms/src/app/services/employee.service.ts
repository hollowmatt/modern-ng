import { Injectable } from "@angular/core";
import { Employee } from "../types/employee";
import axios from "axios";

const employees: Employee[] = [
  { email: "john@doe.com", firstName: 'John', lastName: 'Doe', position: 'Farmer', age: 40 }, 
  { email: "jane@smith.com", firstName: 'Jane', lastName: 'Smith', position: 'Engineer', age: 25 }
];
@Injectable()
export class EmployeeService {
  // Employee service logic here
  private baseUrl = 'http://api.example.com/employees';
  getEmployees() {
    // Return an observable or promise with employee data
    return employees
    // return axios.get(this.baseUrl);
  }
  getEmployeeByEmail(email: string) {
    // Return an observable or promise with employee data by id
    return  employees.find(emp => emp.email === email);
  }
}