import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';

@Component( {
  selector: 'pedal-list',
  templateUrl: './pedal-list.component.html',
  styleUrls: [ './pedal-list.component.scss' ]
} )
export class PedalListComponent implements OnInit {

  displayedColumns: string[];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getPedals();
    this.displayedColumns = [ 'id', 'name' ];
  }

}
