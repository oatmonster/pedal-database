import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';


@Component( {
  template: `
    <h1>Profile Component!</h1>
    <div>{{user}}</div>
    <part-list [type]="'user'" [id]="1"></part-list>
  `,
} )
export class ProfileComponent implements OnInit {

  user: any;

  constructor( private apiService: ApiService ) {
  }

  ngOnInit() {
    this.user = this.apiService.getUser( "asdfasdf" );
  }
}