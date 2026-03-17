import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employment-screening-section',
  templateUrl: './employment-screening-section.component.html',
  styleUrls: ['./employment-screening-section.component.scss']
})
export class EmploymentScreeningSectionComponent {
  @Input({ required: true }) formGroup!: FormGroup;
}