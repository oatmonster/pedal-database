import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { PartListComponent } from './part-list/part-list.component';

@NgModule( {
  imports: [
    CommonModule,
    MatTableModule,
  ],
  declarations: [
    PartListComponent,
  ],
  providers: [
  ],
  exports: [
    PartListComponent,
  ]
} )
export class PartsModule { }

export interface IPart {
  id: number;
  type: string;
  value: string;
  count: number;
}