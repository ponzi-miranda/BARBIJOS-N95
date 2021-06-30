import { Component, OnInit, HostBinding } from '@angular/core';
import { DeliveriesService } from '../../services/deliveries.service';
import { delivery } from 'src/app/models/delivery';


@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.page.html',
  styleUrls: ['./deliveries-list.page.scss']
})
export class DeliveriesListPage implements OnInit {

  @HostBinding('class') classes = 'row';

  deliveries: any = [];
  services: any = [];
  constructor(private deliveriesService : DeliveriesService) { }

  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries(){
    this.deliveriesService.getDeliveries().subscribe(
      res => {
          this.deliveries = res;
      },
      (error) => console.log(error)
    );
  }

}

