import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../common/api.service';
import { IPedal } from '../pedals.module';

@Component( {
  selector: 'pedal-list',
  templateUrl: './pedal-list.component.html',
  styleUrls: [ './pedal-list.component.scss' ]
} )
export class PedalListComponent implements OnInit {
  @Input() pedals: IPedal[];

  displayedColumns: string[];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.displayedColumns = [ 'id', 'name', 'type' ];
  }

}
