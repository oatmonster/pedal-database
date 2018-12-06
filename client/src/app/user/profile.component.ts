import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../common/api.service';


@Component( {
  template: `
    <h1>Profile Component!</h1>
    <div>{{user}}</div>
    <part-list></part-list>

  `,
} )
export class ProfileComponent {

  user: any;

  constructor( private apiService: ApiService, private route: ActivatedRoute ) {
    route.params.subscribe( val => {
      this.user = this.apiService.getUser( this.route.snapshot.params[ 'username' ] );
    } );
  }
}