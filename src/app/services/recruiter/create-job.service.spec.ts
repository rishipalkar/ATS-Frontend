import { TestBed } from '@angular/core/testing';

import { RecruiterCreateJobService } from './create-job.service';

describe('RecruiterCreateJobService', () => {
  let service: RecruiterCreateJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterCreateJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
