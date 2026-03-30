import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMainLayoutComponent } from './candidate-main-layout.component';

describe('CandidateMainLayoutComponent', () => {
  let component: CandidateMainLayoutComponent;
  let fixture: ComponentFixture<CandidateMainLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateMainLayoutComponent]
    });
    fixture = TestBed.createComponent(CandidateMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
