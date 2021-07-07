import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deliveries-list-component',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss']
})
export class DeliveriesListComponent implements OnInit {
  @Input() listStyle: string = 'default';
  @Input() deliveries = [];

  constructor() { }

  ngOnInit() { }
}

