import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';
import { IPedal } from '../pedals/pedals.module';


@Component( {
  templateUrl: './profile.component.html',
  styles: [ 'table { width: 100%; }' ]
} )
export class ProfileComponent implements OnInit {

  user: any;
  pedals: IPedal[];
  displayedColumns: string[];

  constructor( private apiService: ApiService ) {
  }

  ngOnInit() {
    this.user = this.apiService.getUser( "asdfasdf" );
    this.apiService.getBuildablePedals().subscribe( res => {
      this.pedals = res;
    } )
    this.displayedColumns = [ 'name', 'type' ];
  }
}