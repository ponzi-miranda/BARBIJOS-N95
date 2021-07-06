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
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewDeliveryFormComponent implements OnInit {
  @Input() dniValue: string = '';
  @Input() personData: any = {};
  newDeliveryForm: FormGroup;
  services = [];
  roles = [];
  loading: boolean = true;

  @Output() responseEvent = new EventEmitter();
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
      name: new FormControl({ value: this.personData ? this.personData.nombre : '', disabled: this.checkDisableFields() }, [Validators.required]),
      dni: new FormControl({ value: this.personData ? this.personData.dni : this.dniValue, disabled: false }, [Validators.required]),
      idRol: new FormControl({ value: this.personData ? this.personData.idRol : '', disabled: this.checkDisableFields() }, [Validators.required]),
      idService: new FormControl('', [Validators.required]),
      deliveredDate: new FormControl('', [Validators.required]),
      observations: new FormControl('', [Validators.required]),
      createdAt: new FormControl(this.currentDateTime.toISOString(), [Validators.required])
    });
  }

  private checkDisableFields() {
    return this.personData.dni ? true : false;
  }

  private setServices() {
    this.deliveriesService.getServices().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (services) => { this.services = services.data; this.loading = false; },
      (error) => { console.log(error); this.loading = false; }
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
      return this.responseEvent.emit({ formValues: values });
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get name() { return this.newDeliveryForm.get('name'); }
  get dni() { return this.newDeliveryForm.get('dni'); }
  get idRol() { return this.newDeliveryForm.get('idRol'); }
  get idService() { return this.newDeliveryForm.get('idService'); }
  get deliveredDate() { return this.newDeliveryForm.get('deliveredDate'); }
  get observations() { return this.newDeliveryForm.get('observations'); }
  get currentDateTime() { return new Date(); }
}
