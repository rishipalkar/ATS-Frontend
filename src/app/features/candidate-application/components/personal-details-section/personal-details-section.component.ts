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
}