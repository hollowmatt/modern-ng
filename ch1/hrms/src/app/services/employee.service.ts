import { Injectable } from "@angular/core";
import { Employee } from "../types/employee";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const employees: Employee[] = [
  { email: "john@doe.com", firstName: 'John', lastName: 'Doe', position: 'Farmer', age: 40 }, 
  { email: "jane@smith.com", firstName: 'Jane', lastName: 'Smith', position: 'Engineer', age: 25 }
];
@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  // Employee service logic here
  private baseUrl = 'http://localhost:3000/api/employees';

  getEmployees(): Observable<Employee[]> {
    // Return an observable or promise with employee data
    return this.http.get<Employee[]>(this.baseUrl);
    // return axios.get(this.baseUrl);
  }
  getEmployeeByEmail(email: string): Observable<Employee[]> {
    // Return an observable or promise with employee data by id
    return  this.http.get<Employee[]>(`${this.baseUrl}?email=${email}`);
  }

  createEmployee(employee: Employee): Observable<any> {
    // Logic to create a new employee
    return this.http.post(this.baseUrl, employee);
  }

  getEmployee(id: any): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: any, employee: Employee): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);    
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}