import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentScreeningSectionComponent } from './employment-screening-section.component';

describe('EmploymentScreeningSectionComponent', () => {
  let component: EmploymentScreeningSectionComponent;
  let fixture: ComponentFixture<EmploymentScreeningSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentScreeningSectionComponent]
    });
    fixture = TestBed.createComponent(EmploymentScreeningSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
