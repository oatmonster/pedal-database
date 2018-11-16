import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IPedal } from './pedal.model';

const ELEMENT_DATA: IPedal[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
];

@Injectable()
export class ApiService {

  messages: any[];

  constructor( private http: Http ) { };

  getMessages() {
    this.http.get( 'http://localhost:3000/posts' ).subscribe( res => {
      this.messages = res.json();
    } );
  }

  getPedals(): IPedal[] {
    return ELEMENT_DATA;
  }

  getPedal( id: number ): IPedal {
    return ELEMENT_DATA.find( p => p.id === id );
  }
}
