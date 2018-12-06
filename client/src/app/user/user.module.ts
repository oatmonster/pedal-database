import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PartModule } from '../part/part.module';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { userRoutes } from './user.routes';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild( userRoutes ),
    PartModule,
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
  ]
} )
export class UserModule { }