import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProjectsComponent } from './candidate-projects.component';

describe('CandidateProjectsComponent', () => {
  let component: CandidateProjectsComponent;
  let fixture: ComponentFixture<CandidateProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateProjectsComponent]
    });
    fixture = TestBed.createComponent(CandidateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
