import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { UserComponent } from './user/user.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'user',component:UserComponent,children:[{ path: ':id/:name', component: User1Component }]},
    {path:'user2', component:User2Component},
    {path:'listingPage',component:ListingPageComponent}
];
