import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';


export interface UserDetails {
  id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  private token: string;

  constructor( private http: HttpClient, private router: Router ) { }

  private saveToken( token: string ): void {
    localStorage.setItem( 'mean-token', token );
    this.token = token;
  }

  private getToken(): string {
    if ( !this.token ) {
      this.token = localStorage.getItem( 'mean-token' );
    }

    return this.token;
  }

  private logout(): void {
    this.token = '';
    window.localStorage.removeItem( 'mean-token' );
    this.router.navigate( [ 'home' ] );
  }

  private request( method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload ): Observable<any> {
    let base;

    if ( method === 'post' ) {
      base = this.http.post( `/api/${type}`, user );
    } else {
      base = this.http.get( `/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } } );
    }

    const request = base.pipe(
      map( ( data: TokenResponse ) => {
        if ( data.token ) {
          this.saveToken( data.token );
          console.log( data.token );
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
}
