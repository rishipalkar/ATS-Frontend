import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateEmploymentRecordsComponent } from './candidate-employment-records.component';

describe('CandidateEmploymentRecordsComponent', () => {
  let component: CandidateEmploymentRecordsComponent;
  let fixture: ComponentFixture<CandidateEmploymentRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateEmploymentRecordsComponent]
    });
    fixture = TestBed.createComponent(CandidateEmploymentRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
