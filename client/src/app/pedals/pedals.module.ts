import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { PartsModule } from '../parts/parts.module';

import { PedalDetailsComponent } from './pedal-details/pedal-details.component';
import { PedalListComponent } from './pedal-list/pedal-list.component';
import { PedalsComponent } from './pedals.component';

@NgModule( {
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    PartsModule,
  ],
  declarations: [
    PedalsComponent,
    PedalListComponent,
    PedalDetailsComponent,
  ],
  providers: [
  ],
  exports: [
    PedalsComponent,
    PedalListComponent,
    PedalDetailsComponent,
  ]
} )
export class PedalsModule { }

export interface IPedal {
  id: number;
  name: string;
  type: string;
  img?: string;
  videoUrl?: string;
  desc?: string;
}