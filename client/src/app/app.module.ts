import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { PartsModule } from './parts/parts.module';
import { PedalsModule } from './pedals/pedals.module';

import { PedalAppComponent } from './pedal-app.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { HomeComponent } from './home/home.component';
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
    BrowserAnimationsModule,
    PartsModule,
    PedalsModule,
  ],
  declarations: [
    PedalAppComponent,
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
