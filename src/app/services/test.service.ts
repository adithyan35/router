import { ChangeDetectionStrategy, Injectable } from "@angular/core";
@Injectable()
export class TestService {

  public strategy = ChangeDetectionStrategy.Default;
  
   static dataTobeUpdated(){
    return ;
  }
  updateState(data:any){

  }

  getState(){
    return this.strategy;
  }
}

