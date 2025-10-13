import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    // Implement login logic here, e.g., call an API endpoint
    return this.http.post('/api/login', credentials);
  }
}