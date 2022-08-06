import { Component, OnInit } from '@angular/core';
import { Congviec } from '../Models/congviec';
import {HttpClient} from '@angular/common/http';
import { NhatkyserviceService } from '../Service/nhatkyservice.service';

@Component({
  selector: 'app-nhatkytuan',
  templateUrl: './nhatkytuan.component.html',
  styleUrls: ['./nhatkytuan.component.css']
})
export class NhatkytuanComponent implements OnInit {
   url= 'http://localhost:3000/nhatkytuan';
  nhatky !: Congviec[];
  constructor(private httpClient: HttpClient, private nhatkyService: NhatkyserviceService) { }

  ngOnInit() {
    this.nhatkyService.getAll().subscribe(data =>{
      this.nhatky = data as Congviec[];
    })
  }

}
