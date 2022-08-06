import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NhatkyserviceService } from '../Service/nhatkyservice.service';
import { Congviec } from '../Models/congviec';

@Component({
  selector: 'app-nhatkytheodoi',
  templateUrl: './nhatkytheodoi.component.html',
  styleUrls: ['./nhatkytheodoi.component.css']
})
export class NhatkytheodoiComponent implements OnInit {
  url= 'http://localhost:3000/nhatkytuan';
  nhatky !: Congviec[];
  constructor(private httpClient: HttpClient, private nhatkyService: NhatkyserviceService) { }

  ngOnInit() {
    this.nhatkyService.getAll().subscribe(data =>{
      this.nhatky = data as Congviec[];
    })
  }

}
