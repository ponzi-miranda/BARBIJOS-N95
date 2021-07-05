import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'new-delivery',
  templateUrl: './new-delivery.page.html',
  styleUrls: ['./new-delivery.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDeliveryPage implements OnInit {
  currentTab = 'search';

  constructor(
    private deliveriesService: DeliveriesService
  ) { }

  ngOnInit() {
  }

  onSearchResult(event) {
    if (event.response) {
      const response = event.response;
      if (response.isRegistered) {
        this.currentTab = 'last-deliveries';
      } else {
        this.currentTab = 'form';
      }
    }
  }

  deliveryCreatedEvent(event) {
    if (event.deliveryCreated) {
      this.currentTab = 'success';
    }
  }
}
