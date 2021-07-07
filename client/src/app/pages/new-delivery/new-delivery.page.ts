import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'new-delivery',
  templateUrl: './new-delivery.page.html',
  styleUrls: ['./new-delivery.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewDeliveryPage implements OnInit {
  currentTab = 'search';
  loading: boolean;
  lastDeliveriesList = [];
  personInfo = {};
  dniValue: string;

  private ngUnsubscribe = new Subject();

  constructor(
    private deliveriesService: DeliveriesService
  ) { }

  ngOnInit() {
  }

  searchAction(event) {
    if (event.dni) {
      this.loading = true;
      this.deliveriesService.getListDeliveriesByDni(event.dni).subscribe(
        (response: any) => {
          if (response) { 
            if (response.isRegistered) {
              this.lastDeliveriesList = response.data;
              this.personInfo = response.personData[0];
              this.currentTab = 'last-deliveries';
            } else {
              this.dniValue = event.dni;
              this.currentTab = 'form';
            }
            this.loading = false;
          }
        },
        (error) => { 
          this.loading = false;
          console.log(error); 
        }
      )    
    }
  }

  createDeliveryAction(event) {
    if (event.formValues) {
      this.loading = true;
      this.deliveriesService.createDelivery(event.formValues).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (response: any) => {
          if (response.message === 'Successful') {
            this.currentTab = 'success';
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          console.log(error);
        }
      );  
    }
  }

  onChangeTab(event) {
    if (event.changeTab) {
      this.currentTab = event.changeTab;
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
