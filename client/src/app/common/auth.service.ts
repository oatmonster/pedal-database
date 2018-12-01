import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { environment } from '../../environments/environment';


export interface UserDetails {
  id: string;
  email: string;
  username: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  username?: string;
}


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  private token: string;

  constructor( private http: HttpClient, private router: Router ) { }

  private saveToken( token: string ): void {
    localStorage.setItem( 'auth-token', token );
    this.token = token;
  }

  private getToken(): string {
    if ( !this.token ) {
      this.token = localStorage.getItem( 'auth-token' );
    }

    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if ( token ) {
      payload = token.split( '.' )[ 1 ];
      payload = window.atob( payload );
      return JSON.parse( payload );
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    var loggedIn: boolean = false;
    if ( user ) {
      loggedIn = user.exp > Date.now() / 1000;
    } else {
      loggedIn = false;
    }
    return loggedIn;
  }

  private request( method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload ): Observable<any> {
    let base;

    if ( method === 'post' ) {
      base = this.http.post( environment.baseUrl + `/api/${type}`, user );
    } else {
      base = this.http.get( environment.baseUrl + `/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } } );
    }

    const request = base.pipe(
      map( ( data: TokenResponse ) => {
        if ( data.token ) {
          this.saveToken( data.token );
        }
        return data;
      } )
    );

    return request;
  }

  public register( user: TokenPayload ): Observable<any> {
    return this.request( 'post', 'register', user );
  }

  public login( user: TokenPayload ): Observable<any> {
    return this.request( 'post', 'login', user );
  }

  public profile(): Observable<any> {
    return this.request( 'get', 'profile' );
  }

  private logout(): void {
    this.token = '';
    window.localStorage.removeItem( 'auth-token' );
    this.router.navigate( [ '' ] );
  }
}
