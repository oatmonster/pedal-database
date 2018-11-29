import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';
import { IPedal } from '../pedals/shared/pedal.model';

@Component( {
  selector: 'pedal-list',
  templateUrl: './pedal-list.component.html',
  styleUrls: [ './pedal-list.component.scss' ]
} )
export class PedalListComponent implements OnInit {

  pedals: IPedal[];
  displayedColumns: string[];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.pedals = this.apiService.getPedals();
    this.displayedColumns = [ 'id', 'name' ];
  }

}
