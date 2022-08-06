import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Congviec } from '../Models/congviec';
import { DataServiceService } from '../Service/data-service.service';
import { RestApiService } from '../Service/rest-api.service';
import { NhatkyserviceService } from '../Service/nhatkyservice.service';


@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent implements OnInit {
  congviec: Congviec; 
  btnDisabled =false;
  url= 'http://localhost:3000/nhatkytuan'

  constructor(private rest: RestApiService, private data:DataServiceService) {
   this.congviec= new Congviec();
    
   }

  ngOnInit() {
  }
  validate(){
    return true;
  }
  save(){
    this.btnDisabled=true;
    //ktra du lieu hop le 
    if(this.validate()){
      this.rest.post(this.url, this.congviec).then(data =>{
        this.data.success("Thong tin da duoc luu");
        this.btnDisabled = false;
      })
      .catch(error=>{
        this.data.error(error['Message']);
        this.btnDisabled=false;
      })
    }
  }
}
