import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details-section',
  templateUrl: './personal-details-section.component.html',
  styleUrls: ['./personal-details-section.component.scss']
})
export class PersonalDetailsSectionComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  readonly countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'];
  readonly qualifications = ['High School', 'Diploma', 'Bachelor\'s', 'Master\'s', 'PhD', 'Other'];
  readonly verificationIds = ['PAN', 'AADHAAR'];

  onFileSelect(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Optional: Validate file type
      if (file.type !== 'application/pdf') {
        alert('Only PDF files allowed');
        return;
      }

      // Optional: Validate size (e.g., 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size should be less than 2MB');
        return;
      }

      this.formGroup.patchValue({
        verificationDocument: file
      });
    }
  }
}