import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component( {
  selector: 'messages-component',
  templateUrl: './messages.component.html',
} )
export class MessagesComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getMessages();
  }
}
