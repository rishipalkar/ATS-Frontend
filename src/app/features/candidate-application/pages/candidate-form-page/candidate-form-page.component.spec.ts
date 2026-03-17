import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateFormPageComponent } from './candidate-form-page.component';
import { ResumeParserService } from '../../../../core/services/resume-parser.service';

describe('CandidateFormPageComponent', () => {
  let component: CandidateFormPageComponent;
  let fixture: ComponentFixture<CandidateFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateFormPageComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ResumeParserService,
          useValue: {
            buildResumeJson: jasmine.createSpy().and.returnValue(Promise.resolve({}))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid initially', () => {
    expect(component.candidateForm.invalid).toBeTrue();
  });

  it('should mark form as touched on submit if invalid', () => {
    spyOn(component.candidateForm, 'markAllAsTouched');
    component.onSubmit();
    expect(component.candidateForm.markAllAsTouched).toHaveBeenCalled();
  });
});