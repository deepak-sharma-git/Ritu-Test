import { Component ,Input} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
   @Input() avatar!: string;
   @Input() name!: string;
   get imagePath()
   {
    debugger;
    return '/user/'+this.avatar;
   }
   get imageName()
   {
    debugger;
    return this.name;
   }
   
   onSelectUser()
   {
    
   }
}

