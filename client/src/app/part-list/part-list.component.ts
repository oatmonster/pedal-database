import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'part-list',
  templateUrl: './part-list.component.html',
  styleUrls: [ './part-list.component.scss' ]
} )
export class PartListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [ 'type', 'value', 'count' ];
  dataSource = [
    { id: 1, type: 'Resistor', value: '100k R', count: 10 },
    { id: 2, type: 'Capacitor', value: '50 pF', count: 5 },
  ];

  ngOnInit() {
  }

}
