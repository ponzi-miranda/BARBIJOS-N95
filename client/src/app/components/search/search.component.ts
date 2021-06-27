import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Output() searchResult = new EventEmitter<any>();

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
    this.deliveriesService.getListDeliveriesByDni(values.dni).subscribe(
      (response) => {

        if (!response) {
          
        }
        this.deliveriesList = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  get dni() { return this.searchForm.get('dni'); }
}
