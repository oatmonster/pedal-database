import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, TokenPayload } from '../common/auth.service';

@Component( {
  templateUrl: './register.component.html'
} )
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor( private authService: AuthService, private router: Router ) { }

  register() {
    this.authService.register( this.credentials ).subscribe( () => {
      this.router.navigateByUrl( '/profile' );
    }, ( err ) => {
      console.error( err );
    } );
  }
}