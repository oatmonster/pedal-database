import { Component } from '@angular/core';
import { AuthService, TokenPayload } from '../common/auth.service';
import { Router } from '@angular/router';

@Component( {
  templateUrl: './login.component.html',
} )
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService, private router: Router ) { }

  login() {
    this.authService.login( this.credentials ).subscribe( () => {
      this.router.navigateByUrl( '/' );
    }, ( err ) => {
      console.error( err );
    } );
  }
}