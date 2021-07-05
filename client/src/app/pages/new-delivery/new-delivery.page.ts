import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'new-delivery',
  templateUrl: './new-delivery.page.html',
  styleUrls: ['./new-delivery.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDeliveryPage implements OnInit {
  showLastDeliveries: boolean;
  showForm: boolean;
  showSuccess: boolean;

  constructor(
    private deliveriesService: DeliveriesService
  ) { }

  ngOnInit() {
  }

  onSearchResult(event) {
    if (event.response) {
      const response = event.response;
      if (response.isRegistered) {
        this.showLastDeliveries = true;
      } else {
        this.showForm = true;
      }
    }
  }

  deliveryCreatedEvent(event) {
    if (event.deliveryCreated) {
      this.showSuccess = true;
    }
  }
}
