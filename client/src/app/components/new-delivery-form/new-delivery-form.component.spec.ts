import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeliveryFormComponent } from './new-delivery-form.component';

describe('NewDeliveryFormComponent', () => {
  let component: NewDeliveryFormComponent;
  let fixture: ComponentFixture<NewDeliveryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeliveryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeliveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
