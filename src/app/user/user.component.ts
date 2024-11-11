import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private router:Router){}
  movetouser1(){
    // this.router.navigateByUrl('/listingPage')
    this.router.navigate(['/user', 2, 'rithvik']);
  }
}
