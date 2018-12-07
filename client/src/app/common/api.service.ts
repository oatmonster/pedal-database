import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPedal } from '../pedals/shared/pedal.model';
import { IPart } from '../part/part.module';

import { AuthService } from './auth.service';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  messages: any[];
  pedals: IPedal[];
  desc: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla nisl at fermentum sagittis. Maecenas malesuada ornare leo. Praesent venenatis dignissim orci. In diam purus, vestibulum accumsan massa quis, mattis sollicitudin risus. Phasellus neque ante, gravida nec venenatis nec, dictum ut nulla. Sed aliquam justo vel augue elementum feugiat quis facilisis eros. Pellentesque velit lectus, venenatis vel varius vel, lobortis imperdiet dui. Curabitur a eros sit amet magna sodales lacinia condimentum et leo. Cras ante diam, commodo nec elementum et, interdum eu risus. Nulla posuere maximus sapien sed scelerisque. Nullam sodales leo sit amet nunc fringilla feugiat. Nulla nisi orci, placerat scelerisque ornare at, pulvinar id tellus.\n\nInteger sollicitudin sodales nulla vitae maximus. Morbi at dui a nisl placerat suscipit. Nullam cursus augue volutpat, porttitor metus id, laoreet leo. Vivamus lobortis orci a metus hendrerit gravida. Mauris pretium, nisl nec malesuada vehicula, ante magna mattis turpis, nec venenatis metus sapien ac lacus. In eget massa interdum, lobortis quam at, posuere metus. Ut dignissim mauris nisi, quis dictum urna efficitur quis. In quis sem risus. Nam sed velit a quam gravida tincidunt in a erat. Aliquam erat volutpat. Etiam tellus sem, finibus sit amet dictum a, tincidunt sed leo. Donec at elit ac arcu ultrices interdum eu et risus. Mauris eu turpis iaculis, consequat augue eu, viverra mauris. Donec et felis libero.';

  constructor( private http: HttpClient, private authService: AuthService ) { };

  getMessages() {
    this.http.get<any[]>( 'http://localhost:3000/posts' ).subscribe( res => {
      this.messages = res;
    } );
  }

  getPedals() {
    if ( !this.pedals ) {
      this.http.get<IPedal[]>( environment.baseUrl + '/api/pedals' ).subscribe( res => {
        this.pedals = res;
      } )
    }
  }

  getPedal( id: number ) {
    return this.http.get<IPedal>( environment.baseUrl + '/api/pedals/' + id );
  }

  getParts( type: 'user' | 'pedal', id: number ) {
    if ( type === 'user' ) {
      return this.http.get<IPart[]>( environment.baseUrl + '/api/parts/user', { headers: { Authorization: `Bearer ${this.authService.getToken()}` } } );
    }
    else {
      return this.http.get<IPart[]>( environment.baseUrl + '/api/parts/pedal/' + id );
    }
  }

  getUser( username: string ): string {
    return username;
  }
}
