import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { PartModule } from './part/part.module';

import { PedalAppComponent } from './pedal-app.component';
import { PedalDetailsComponent } from './pedals/pedal-details/pedal-details.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PedalListComponent } from './pedals/pedal-list.component';
import { ApiService } from './common/api.service';
import { AuthService } from './common/auth.service';

import { appRoutes } from './routes';


@NgModule( {
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, { scrollPositionRestoration: 'enabled' } ),
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    PartModule,
  ],
  declarations: [
    PedalAppComponent,
    PedalListComponent,
    PedalDetailsComponent,
    NavBarComponent,
    HomeComponent,
  ],
  providers: [
    Title,
    ApiService,
    AuthService,
  ],
  bootstrap: [
    PedalAppComponent,
  ],
} )
export class AppModule { }
