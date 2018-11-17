import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared/api.service';

@Component( {
  selector: 'pedal-list',
  templateUrl: './pedal-list.component.html',
  styleUrls: [ './pedal-list.component.scss' ]
} )
export class PedalListComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  displayedColumns: string[] = [ 'id', 'name' ];
  dataSource = this.apiService.getPedals();

  ngOnInit() {
  }

}
