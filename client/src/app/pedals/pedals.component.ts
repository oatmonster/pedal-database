import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';
import { IPedal } from './pedals.module';

@Component( {
  selector: 'pedals',
  template: `
    <h1>Pedals</h1>
    <hr>
    <pedal-list [pedals]="pedals"></pedal-list>
  `,
} )
export class PedalsComponent implements OnInit {

  pedals: IPedal[];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getPedals().subscribe( res => {
      this.pedals = res;
    } );
  }
}