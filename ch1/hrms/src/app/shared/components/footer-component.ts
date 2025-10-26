import { Component } from "@angular/core";
import { isAuth } from "../functions/auth";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer-component.html',
  standalone: true,
  imports: [AsyncPipe]
})
export class FooterComponent {
  isAuth$ = isAuth();
}