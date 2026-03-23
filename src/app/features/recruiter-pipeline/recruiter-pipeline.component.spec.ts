import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPipelineComponent } from './recruiter-pipeline.component';

describe('RecruiterPipelineComponent', () => {
  let component: RecruiterPipelineComponent;
  let fixture: ComponentFixture<RecruiterPipelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterPipelineComponent]
    });
    fixture = TestBed.createComponent(RecruiterPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
