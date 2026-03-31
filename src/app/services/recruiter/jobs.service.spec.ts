import { TestBed } from '@angular/core/testing';

import { RecruiterJobsService } from './jobs.service';

describe('RecruiterJobsService', () => {
  let service: RecruiterJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
