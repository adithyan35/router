import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomRouterOutletDirective } from '../custom-router-outlet.directive';
import { RouterModule } from '@angular/router';
import { CarsoleComponent } from '../carsole/carsole.component';
import { TestService } from '../services/test.service';
import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user2',
  standalone: true,
  imports: [CustomRouterOutletDirective,RouterModule,CarsoleComponent,CommonModule],
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css',
})
export class User2Component {

}
