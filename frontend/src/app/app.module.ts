import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PedalAppComponent } from './pedal-app.component';
import { PedalDetailsComponent } from './pedals/pedal-details/pedal-details.component';
import { NavBarComponent } from './navbar/nav-bar.component';

import { ApiService } from './pedals/shared/api.service';
import { PedalListComponent } from './pedals/pedal-list.component';
import { PartListComponent } from './part-list/part-list.component';

import { appRoutes } from './routes';

@NgModule( {
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( appRoutes ),
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    PedalAppComponent,
    PedalListComponent,
    PedalDetailsComponent,
    NavBarComponent,
    PartListComponent,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [
    PedalAppComponent,
  ],
} )
export class AppModule { }
