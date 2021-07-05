import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonData } from 'src/app/models/person.model';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'new-delivery-form-component',
  templateUrl: './new-delivery-form.component.html',
  styleUrls: ['./new-delivery-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDeliveryFormComponent implements OnInit {
  @Input() personData: PersonData;
  newDeliveryForm: FormGroup;
  services = [];
  roles = [];
  @Output() successfulEvent = new EventEmitter();
  private ngUnsubscribe = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private deliveriesService: DeliveriesService
  ) { }

  ngOnInit() {
    this.setServices();
    this.setRoles();
    this.createForm();
  }

  private createForm() {
    this.newDeliveryForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      idRol: new FormControl('', [Validators.required]),
      idService: new FormControl('', [Validators.required]),
      deliveredDate: new FormControl('', [Validators.required]),
      observations: new FormControl('', [Validators.required]),
      createdAt: new FormControl(this.currentDateTime.toISOString(), [Validators.required])
    });
  }

  private setServices() {
    this.deliveriesService.getServices().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (services) => { this.services = services.data; },
      (error) => { console.log(error); }
    );
  } 
  
  private setRoles() {
    this.deliveriesService.getRoles().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (roles) => { this.roles = roles.data; },
      (error) => { console.log(error); }
    );
  }

  public createDelivery() {
    if (this.newDeliveryForm.valid) {
      const values = this.newDeliveryForm.value;
      this.deliveriesService.createDelivery(values).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (response: any) => {
          if (response.message === 'Successful') {
            return this.successfulEvent.emit({ deliveryCreated: true });
          } 
        },
        (error) => { 
          console.log(error);
        }
      );  
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get currentDateTime() { return new Date(); }
}
