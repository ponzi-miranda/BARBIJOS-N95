import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeliveryPage } from './new-delivery.page';

describe('NewDeliveryPage', () => {
  let component: NewDeliveryPage;
  let fixture: ComponentFixture<NewDeliveryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeliveryPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeliveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
