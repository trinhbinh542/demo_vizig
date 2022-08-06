import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Congviec } from '../Models/congviec';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nhatkydetail',
  templateUrl: './nhatkydetail.component.html',
  styleUrls: ['./nhatkydetail.component.css']
})
export class NhatkydetailComponent implements OnInit {
  url='http://localhost:3000/nhatkytuan';
  nhatky !: Congviec;
  id :number;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { 
    this.id= route.snapshot.params['id'];
  }

  ngOnInit() {
    this.httpClient.get(this.url +'/' +this.id).subscribe(data =>{
      this.nhatky = data as Congviec;
    })
  }
  onupdate(){
    this.httpClient.put(this.url +'/'+ this.id, this.nhatky).subscribe(data =>{
      console.log(data);
    })
  }
  

}
