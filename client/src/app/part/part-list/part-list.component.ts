import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../common/api.service';
import { IPart } from '../part.module';

@Component( {
  selector: 'part-list',
  templateUrl: './part-list.component.html',
  styleUrls: [ './part-list.component.scss' ]
} )
export class PartListComponent implements OnInit {
  @Input() type: 'user' | 'pedal';
  @Input() id: number;

  displayedColumns: string[] = [ 'type', 'value', 'count' ];
  parts: IPart[];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getParts( this.type, this.id ).subscribe( res => {
      this.parts = res;
    } )
  }

}
