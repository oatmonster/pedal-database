import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';
import { IPedal } from '../pedals/shared/pedal.model';

@Component( {
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getPedals();
  }

}
