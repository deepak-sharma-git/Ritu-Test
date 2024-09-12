import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from "./header/header .component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[headerComponent,UserComponent],
})
export class AppComponent{
  
  users:any;
   
  constructor() {
    this.users=DUMMY_USERS;
  }
 
 // title = 'my-test-app';
}
