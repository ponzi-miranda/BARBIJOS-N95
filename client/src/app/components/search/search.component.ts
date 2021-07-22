import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      dni: new FormControl('', [Validators.required])
    });
  }

  onCheckInputValidation(event) {
    const numberPattern = new RegExp('^[0-9\~]*$');
    const input = String.fromCharCode(event.charCode);
    if (!numberPattern.test(input)) {
      event.preventDefault();
    }
  }

  search() {
    const values = this.searchForm.value;
    return this.searchValueEvent.emit({ dni: values.dni });
  }

  get dni() { return this.searchForm.get('dni'); }
}
