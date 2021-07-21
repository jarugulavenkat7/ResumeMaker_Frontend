import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicDetailsComponent } from './add-academic-details.component';

describe('AddAcademicDetailsComponent', () => {
  let component: AddAcademicDetailsComponent;
  let fixture: ComponentFixture<AddAcademicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcademicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
