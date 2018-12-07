import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../common/api.service';
import { IPedal } from '../shared/pedal.model';

@Component( {
  selector: 'pedal-details',
  templateUrl: './pedal-details.component.html',
  styleUrls: [ './pedal-details.component.scss' ]
} )
export class PedalDetailsComponent implements OnInit, OnDestroy {

  pedal: IPedal;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.apiService.getPedal( +this.route.snapshot.params[ 'id' ] ).subscribe( res => {
      this.pedal = res;
      this.pedal.desc = this.apiService.desc;
      this.location.replaceState( '/pedals/' + this.pedal.id + '/' + this.pedal.name );
      this.titleService.setTitle( 'Pedal Database: ' + this.pedal.name );
    } );
  }

  ngOnDestroy() {
    this.titleService.setTitle( 'Pedal Database' );
  }

  videoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.pedal.videoUrl );
  }
}