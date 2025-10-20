import { Component } from "@angular/core";
import { isAuth } from "../functions/auth";
import { AsyncPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer-component.html',
  standalone: true,
  imports: [AsyncPipe, RouterLink]
})
export class FooterComponent {
  isAuth$ = isAuth();
}