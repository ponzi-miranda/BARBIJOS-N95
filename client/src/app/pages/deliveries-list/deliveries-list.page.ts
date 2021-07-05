import { Component, OnInit, HostBinding } from '@angular/core';
import { DeliveriesService } from '../../services/deliveries.service';

@Component({
  selector: 'deliveries-list-page',
  templateUrl: './deliveries-list.page.html',
  styleUrls: ['./deliveries-list.page.scss']
})
export class DeliveriesListPage implements OnInit {
  deliveries: any = [];
  constructor(private deliveriesService : DeliveriesService) { }

  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries(){
    this.deliveriesService.getDeliveries().subscribe(
      (response: any) => {
        if (response.data) {
          this.deliveries = response.data;
        }
      },
      (error) => console.log(error)
    );
  }

}

