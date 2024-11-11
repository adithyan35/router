import { Component } from '@angular/core';
import { CarsoleComponent } from '../carsole/carsole.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarsoleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
