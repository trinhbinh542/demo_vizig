import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Congviec } from '../Models/congviec';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  message ='';
  messageType ='danger';
  congviec !: Congviec;
constructor(private router: Router, private rest: RestApiService) { 
  this.router.events.subscribe(event =>{
    if(event instanceof NavigationStart){
      this.message = '';
    }
  })
}
error(message: string){
  this.messageType= 'danger';
  this.message = message;
}
success(message: string){
  this.messageType= 'success';
  this.message = message;
}
warning(message: string){
  this.messageType= 'warning';
  this.message = message;
}


}
