import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkExperienceDetailsComponent } from './add-work-experience-details.component';

describe('AddWorkExperienceDetailsComponent', () => {
  let component: AddWorkExperienceDetailsComponent;
  let fixture: ComponentFixture<AddWorkExperienceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkExperienceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
