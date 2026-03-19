import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLoginPageComponent } from './candidate-login-page.component';

describe('CandidateLoginPageComponent', () => {
  let component: CandidateLoginPageComponent;
  let fixture: ComponentFixture<CandidateLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateLoginPageComponent]
    });
    fixture = TestBed.createComponent(CandidateLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
