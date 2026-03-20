import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCalendarComponent } from './candidate-calendar.component';

describe('CandidateCalendarComponent', () => {
  let component: CandidateCalendarComponent;
  let fixture: ComponentFixture<CandidateCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateCalendarComponent]
    });
    fixture = TestBed.createComponent(CandidateCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
