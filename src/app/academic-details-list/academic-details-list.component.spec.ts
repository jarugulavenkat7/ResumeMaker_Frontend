import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDetailsListComponent } from './academic-details-list.component';

describe('EducationDetailsListComponent', () => {
  let component: AcademicDetailsListComponent;
  let fixture: ComponentFixture<AcademicDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
