import { Component } from '@angular/core';

import { AuthService } from '../common/auth.service';

@Component( {
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.scss' ],
} )
export class NavBarComponent {
  constructor( private authService: AuthService ) { }
}
