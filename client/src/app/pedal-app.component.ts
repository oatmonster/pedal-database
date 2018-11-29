import { Component } from '@angular/core';

@Component( {
  selector: 'pedal-app',
  templateUrl: './pedal-app.component.html',
  styles: [ `
    div.padded {
      max-width: 90%;
      margin: auto;
      padding-bottom: 10em;
    }
  `],
} )
export class PedalAppComponent {
  title = 'Pedal Database';
}
