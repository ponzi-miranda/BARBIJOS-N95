import { Component, OnInit } from '@angular/core';
import { DeliveriesService } from '../../services/deliveries.service';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.page.html',
  styleUrls: ['./deliveries-list.page.scss']
})
export class DeliveriesListPage implements OnInit {

  constructor(private deliveriesService : DeliveriesService) { }

  ngOnInit(): void {
    this.deliveriesService.getDeliveries().subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}

