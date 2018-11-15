import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared/api.service';

@Component( {
  selector: 'pedal-list',
  templateUrl: './pedal-list.component.html',
  styleUrls: [ './pedal-list.component.scss' ]
} )
export class PedalListComponent implements OnInit {

  constructor( private apiService: ApiService ) { }


  displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol' ];
  dataSource = this.apiService.getPedals();

  onRowClicked( row ) {
    console.log( 'Row clicked: ', row );
  }


  ngOnInit() {
  }

}
