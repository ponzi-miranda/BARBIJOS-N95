import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonData } from 'src/app/models/person.model';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'app-new-delivery-form',
  templateUrl: './new-delivery-form.component.html',
  styleUrls: ['./new-delivery-form.component.scss']
})
export class NewDeliveryFormComponent implements OnInit {
  @Input() personData: PersonData;
  newDeliveryForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private deliveriesService: DeliveriesService
  ) { }

  ngOnInit() {
    this.newDeliveryForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      rolId: new FormControl('', [Validators.required]),
      serviceId: new FormControl('', [Validators.required]),
      deliveredDate: new FormControl('', [Validators.required])
    });
  }

}
