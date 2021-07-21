import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceDetailsListComponent } from './work-experience-details-list.component';

describe('WorkExperienceDetailsListComponent', () => {
  let component: WorkExperienceDetailsListComponent;
  let fixture: ComponentFixture<WorkExperienceDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
