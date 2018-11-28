import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { AuthService } from './auth.service';

import { userRoutes } from './user.routes';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild( userRoutes ),
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,

  ],
  providers: [
    AuthService,
  ]
} )
export class UserModule { }