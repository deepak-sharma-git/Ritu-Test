import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from "./header/header .component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-test-app';
}
