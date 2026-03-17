import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resume-upload-section',
  templateUrl: './resume-upload-section.component.html',
  styleUrls: ['./resume-upload-section.component.scss']
})
export class ResumeUploadSectionComponent {
  @Input() resumeJson: unknown;
  @Output() resumeSelected = new EventEmitter<File>();

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.resumeSelected.emit(file);
    }
  }
}