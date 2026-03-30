import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCareerProfileComponent } from './candidate-responsibilities.component';

describe('CandidateCareerProfileComponent', () => {
  let component: CandidateCareerProfileComponent;
  let fixture: ComponentFixture<CandidateCareerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateCareerProfileComponent],
    });
    fixture = TestBed.createComponent(CandidateCareerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
