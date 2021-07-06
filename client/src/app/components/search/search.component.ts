import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonData } from 'src/app/models/person.model';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  deliveriesList:any = [];
  showList: boolean;
  @Input() dniStromg: string;
  @Output() searchValueEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private deliveriesService: DeliveriesService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      dni: new FormControl('', [Validators.required])
    });
  }

  search() {
    const values = this.searchForm.value;
    return this.searchValueEvent.emit({ dni: values.dni });
  }

  get dni() { return this.searchForm.get('dni'); }
}
