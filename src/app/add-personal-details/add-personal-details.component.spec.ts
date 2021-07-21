import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalDetailsComponent } from './add-personal-details.component';

describe('AddPersonalDetailsComponent', () => {
  let component: AddPersonalDetailsComponent;
  let fixture: ComponentFixture<AddPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
