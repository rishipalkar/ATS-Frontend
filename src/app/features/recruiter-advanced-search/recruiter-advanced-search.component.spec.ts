import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterAdvancedSearchComponent } from './recruiter-advanced-search.component';

describe('RecruiterAdvancedSearchComponent', () => {
  let component: RecruiterAdvancedSearchComponent;
  let fixture: ComponentFixture<RecruiterAdvancedSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterAdvancedSearchComponent]
    });
    fixture = TestBed.createComponent(RecruiterAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
