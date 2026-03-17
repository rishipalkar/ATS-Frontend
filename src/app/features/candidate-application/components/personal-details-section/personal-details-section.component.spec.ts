import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsSectionComponent } from './personal-details-section.component';

describe('PersonalDetailsSectionComponent', () => {
  let component: PersonalDetailsSectionComponent;
  let fixture: ComponentFixture<PersonalDetailsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDetailsSectionComponent]
    });
    fixture = TestBed.createComponent(PersonalDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
