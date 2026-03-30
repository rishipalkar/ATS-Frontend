import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../../services/resume-parse.service';

@Component({
  selector: 'app-personal-details-section',
  templateUrl: './personal-details-section.component.html',
  styleUrls: ['./personal-details-section.component.scss']
})
export class PersonalDetailsSectionComponent implements OnInit, OnDestroy {
  @Input({ required: true }) formGroup!: FormGroup;

  readonly countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'];
  readonly qualifications = ['High School', 'Diploma', "Bachelor's", "Master's", 'PhD', 'Other'];
  readonly verificationIds = ['PAN', 'AADHAAR'];

  private destroy$ = new Subject<void>();

  constructor(private resumeParseService: ResumeParseService) {}

  ngOnInit(): void {
    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (!data) return;

        // patchValue only sets fields that exist in formGroup
        // fields not in the form are safely ignored
        this.formGroup.patchValue({
          firstName:   data.firstName   ?? '',
          lastName:    data.lastName    ?? '',
          email:       data.email       ?? '',
          phoneNumber: data.phoneNumber ?? '',
          city:        data.city        ?? '',
          state:       data.state       ?? '',
          // Only patch country if it matches one of the dropdown options
          country: this.countries.includes(data.country ?? '')
            ? data.country
            : '',
          linkedInUrl: data.linkedInUrl ?? '',
        });
      });
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Only PDF files allowed');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert('File size should be less than 2MB');
      return;
    }

    this.formGroup.patchValue({ verificationDocument: file });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}