import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversitySectionComponent } from './diversity-section.component';

describe('DiversitySectionComponent', () => {
  let component: DiversitySectionComponent;
  let fixture: ComponentFixture<DiversitySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiversitySectionComponent]
    });
    fixture = TestBed.createComponent(DiversitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
