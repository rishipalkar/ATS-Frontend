import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diversity-section',
  templateUrl: './diversity-section.component.html',
  styleUrls: ['./diversity-section.component.scss']
})
export class DiversitySectionComponent {
  @Input({ required: true }) formGroup!: FormGroup;
}