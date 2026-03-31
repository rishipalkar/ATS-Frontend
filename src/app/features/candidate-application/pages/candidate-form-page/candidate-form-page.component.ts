import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ResumeParserService } from '../../../../core/services/resume-parser.service';
import { FormValidators } from 'src/app/core/shared/components/validators/form.validators';
import confetti from 'canvas-confetti';
@Component({
  selector: 'app-candidate-form-page',
  templateUrl: './candidate-form-page.component.html',
  styleUrls: ['./candidate-form-page.component.scss'],
})
export class CandidateFormPageComponent {
  candidateForm: FormGroup;
  resumeJsonPreview: any = null;
  isSubmitting = false;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
   
  ) {
    this.candidateForm = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', ],
        lastName: ['', ],
        email: ['', [, Validators.email]],
        phoneNumber: [
          '',
          [, Validators.pattern(/^\d{10}$/)],
        ],
        addressLine1: ['', ],
        addressLine2: [''],
        country: ['', ],
        state: ['', ],
        city: ['', ],
        pinCode: ['', [, Validators.pattern(/^\d{6}$/)]],
        linkedInUrl: ['', [, FormValidators.linkedInUrl()]],
        highestQualification: ['', ],
        otherQualifications: [''],
        verificationIdType: ['', ],
        verificationIdValue: ['', ],
        verificationDocument: [null, ],
      }),


      employmentScreening: this.fb.group({
        currentlyEmployed: [null, ],
        onNoticePeriod: [null],
        noticePeriodDuration : [''],
        // workedWithUsBefore: [null, ],
        hasLegalObligationConflict: [null, ],
        hasConductEmploymentIssue: [null, ],
        needsInterviewAdjustments: [null, ],
        interviewAdjustmentsDetails: [''],
        hasLegalRightToWork: [null, ],
        // hasCriminalRecord: [null, ],
        // criminalRecordDetails: [''],
        // dismissedByPreviousEmployer: [null, ],
      }),

      referral: this.fb.group({
        hasEmployeeReferral: [null, ],
        employeeName: [''],
        designation: [''],
        referralId: [''],
      }),

      diversity: this.fb.group({
        dateOfBirth: ['', ],
        genderIdentity: [''],
        disability: [''],
      }),

      declarations: this.fb.group({
        acceptedTerms: [false, ],
      }),

      resume: this.fb.group({
        fileName: ['', ],
        file: [null, ],
        jsonPreview: [null],
      }),
    });

    this.setupConditionalValidation();
  }

  get personalDetailsGroup() {
    return this.candidateForm.get('personalDetails') as FormGroup;
  }

  get employmentScreeningGroup() {
    return this.candidateForm.get('employmentScreening') as FormGroup;
  }

  get referralGroup() {
    return this.candidateForm.get('referral') as FormGroup;
  }

  get diversityGroup() {
    return this.candidateForm.get('diversity') as FormGroup;
  }

  get declarationsGroup() {
    return this.candidateForm.get('declarations') as FormGroup;
  }

  

  onSubmit() {
    console.log(' onSubmit triggered');

    if (this.candidateForm.invalid) {
      console.log(' FORM INVALID');
      console.log(this.candidateForm.value);

      this.candidateForm.markAllAsTouched();

      alert('Form is invalid. Fill all required fields.');
      return;
    }

    console.log(' FORM VALID');

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;

      console.log(' SUCCESS');

      this.launchConfetti();
    }, 500);
  }
  private launchConfetti() {
  const myConfetti = confetti.create(undefined, {
    resize: true,
    useWorker: true
  });

  myConfetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}

  private setupConditionalValidation() {
    const verificationType =
      this.personalDetailsGroup.get('verificationIdType');
    const verificationValue = this.personalDetailsGroup.get(
      'verificationIdValue',
    );

    verificationType?.valueChanges.subscribe((type: string) => {
      verificationValue?.clearValidators();
      verificationValue?.setValidators([Validators.required]);

      if (type === 'PAN') {
        verificationValue?.addValidators(FormValidators.panNumber());
      }

      if (type === 'AADHAAR') {
        verificationValue?.addValidators(FormValidators.aadhaarNumber());
      }

      verificationValue?.updateValueAndValidity();
    });
  }
}
