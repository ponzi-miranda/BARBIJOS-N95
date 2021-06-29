import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesListPage } from './deliveries-list.page';

describe('DeliveriesListComponent', () => {
  let component: DeliveriesListPage;
  let fixture: ComponentFixture<DeliveriesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveriesListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
