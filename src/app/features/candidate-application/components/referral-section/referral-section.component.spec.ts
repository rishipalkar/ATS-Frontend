import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSectionComponent } from './referral-section.component';

describe('ReferralSectionComponent', () => {
  let component: ReferralSectionComponent;
  let fixture: ComponentFixture<ReferralSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralSectionComponent]
    });
    fixture = TestBed.createComponent(ReferralSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
