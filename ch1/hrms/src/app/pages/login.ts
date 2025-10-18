import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
})

export class LoginComponent {
    credentials = { email: '', password: '' };

    constructor(private authService: AuthService) {}

    login() {
        if (this.credentials.email && this.credentials.password) {
            this.authService.login(this.credentials).subscribe();
        }
    }
}