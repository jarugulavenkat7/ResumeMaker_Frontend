import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressDetailsComponent } from './add-address-details.component';

describe('AddAddressDetailsComponent', () => {
  let component: AddAddressDetailsComponent;
  let fixture: ComponentFixture<AddAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
