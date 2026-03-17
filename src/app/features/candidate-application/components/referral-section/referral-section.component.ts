import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-referral-section',
  templateUrl: './referral-section.component.html',
  styleUrls: ['./referral-section.component.scss']
})
export class ReferralSectionComponent {
  @Input({ required: true }) formGroup!: FormGroup;
}