import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterViewCandidateComponent } from './recruiter-view-candidate.component';

describe('RecruiterViewCandidateComponent', () => {
  let component: RecruiterViewCandidateComponent;
  let fixture: ComponentFixture<RecruiterViewCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterViewCandidateComponent]
    });
    fixture = TestBed.createComponent(RecruiterViewCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
