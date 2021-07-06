import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuStyle: string = 'normal';
  @Output() changeTabEvent = new EventEmitter();
 
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(route) {
    if (this.menuStyle !== 'normal') {
      return this.changeTabEvent.emit({ changeTab: 'form' });
    }

    this.router.navigate([route]);
  }
}
