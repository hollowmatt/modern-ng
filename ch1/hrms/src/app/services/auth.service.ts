import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly http = inject(HttpClient);
  isAuth$ = new BehaviorSubject(false);

  login(credentials: { email: string; password: string }) {
    // Implement login logic here, e.g., call an API endpoint
    return this.http.post('/api/login', credentials).pipe(
      tap(() => this.isAuth$.next(true)),
    );
  }

  logout() {
    // Implement logout logic here, e.g., call an API endpoint
    return this.http.post('/api/logout', {}).pipe(
      tap(() => this.isAuth$.next(false)),
    );
  }
}