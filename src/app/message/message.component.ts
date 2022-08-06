import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Service/data-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public data: DataServiceService) { }

  ngOnInit() {
  }

}
