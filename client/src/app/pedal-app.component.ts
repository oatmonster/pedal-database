import { Component } from '@angular/core';

@Component( {
  selector: 'pedal-app',
  templateUrl: './pedal-app.component.html',
  styles: [ `
    div.padded {
      max-width: 80%;
      margin: auto;
    }
  `],
} )
export class PedalAppComponent {
  title = 'Pedal Database';
}
