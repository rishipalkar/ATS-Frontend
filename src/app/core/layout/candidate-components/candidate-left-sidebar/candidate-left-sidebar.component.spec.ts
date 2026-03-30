import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLeftSidebarComponent } from './candidate-left-sidebar.component';

describe('CandidateLeftSidebarComponent', () => {
  let component: CandidateLeftSidebarComponent;
  let fixture: ComponentFixture<CandidateLeftSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateLeftSidebarComponent]
    });
    fixture = TestBed.createComponent(CandidateLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
