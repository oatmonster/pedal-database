import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ApiService } from '../shared/api.service';
import { IPedal } from '../shared/pedal.model';

@Component( {
  selector: 'pedal-details',
  templateUrl: './pedal-details.component.html',
  styleUrls: [ './pedal-details.component.scss' ]
} )
export class PedalDetailsComponent implements OnInit {
  pedal: IPedal;

  constructor( private apiService: ApiService, private route: ActivatedRoute, public sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.pedal = this.apiService.getPedal( +this.route.snapshot.params[ 'id' ] );
  }

  videoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.pedal.videoUrl );
  }
}