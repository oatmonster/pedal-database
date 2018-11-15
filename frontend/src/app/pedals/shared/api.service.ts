import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IPedal } from './pedal.model';

const ELEMENT_DATA: IPedal[] = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
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
