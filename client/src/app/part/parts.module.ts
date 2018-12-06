import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PartListComponent } from './part-list/part-list.component';

@NgModule( {
  imports: [
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
export class PartModule { }