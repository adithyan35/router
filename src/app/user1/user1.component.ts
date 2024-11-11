import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component implements OnInit {

user!: {id:string; name:string};

  constructor(private route:ActivatedRoute , private router:Router){}

  ngOnInit():void{
  this.user={
    id:this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name'],
  };
this.route.params.subscribe((data : Params) => {
  this.user ={
    id:data['id'],
    name: data['name'],
  };
});

// console.log(this.route.snapshot.queryParams);
// console.log(this.route.snapshot.fragment);

this.route.queryParams.subscribe((data)=>{
  console.log(data);
  
})

this.route.fragment.subscribe((data)=>{
  console.log(data);
  
})

  }

  getRithvik(){
    this.router.navigate(['/user', 2, 'rithvik'], {queryParams:{ page:2 , search :'rithvik'}, fragment: 'loading'})
  }
}
