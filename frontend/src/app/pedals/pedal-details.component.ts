import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './shared/api.service';
import { IPedal } from './shared/pedal.model';

@Component( {
  selector: 'pedal-details',
  template: `
    <div>{{pedal.name}}</div>
  `
} )
export class PedalDetailsComponent implements OnInit {
  pedal: IPedal;

  constructor( private apiService: ApiService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.pedal = this.apiService.getPedal( +this.route.snapshot.params[ 'id' ] );
  }
}