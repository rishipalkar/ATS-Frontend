import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeUploadSectionComponent } from './resume-upload-section.component';

describe('ResumeUploadSectionComponent', () => {
  let component: ResumeUploadSectionComponent;
  let fixture: ComponentFixture<ResumeUploadSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeUploadSectionComponent]
    });
    fixture = TestBed.createComponent(ResumeUploadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
