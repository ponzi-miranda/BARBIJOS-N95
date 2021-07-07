import { Component, OnInit, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeliveriesService } from '../../services/deliveries.service';

@Component({
  selector: 'deliveries-list-page',
  templateUrl: './deliveries-list.page.html',
  styleUrls: ['./deliveries-list.page.scss']
})
export class DeliveriesListPage implements OnInit {
  deliveries: any = [];
  loading = false;
  private ngUnsubscribe = new Subject();
  constructor(private deliveriesService : DeliveriesService) { }

  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries(){
    this.loading = true;
    this.deliveriesService.getDeliveries().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (response: any) => {
        if (response.data) {
          this.deliveries = response.data;
          this.loading = false;
        }
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

