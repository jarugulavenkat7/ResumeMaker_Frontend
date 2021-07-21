import { TestBed } from '@angular/core/testing';

import { ResumeProfilePictureService } from './resume-profile-picture.service';

describe('ResumeProfilePictureService', () => {
  let service: ResumeProfilePictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeProfilePictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
