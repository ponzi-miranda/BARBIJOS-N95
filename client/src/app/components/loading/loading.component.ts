import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading-component',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() loading: boolean = false;
  
  constructor() { }
}
