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

  //   onFileSelect(event: any) {
  //   const file = event.target.files[0];

  //   if (file) {
  //     // Optional: Validate file type
  //     if (file.type !== 'application/pdf') {
  //       alert('Only PDF files allowed');
  //       return;
  //     }

  //     // Optional: Validate size (e.g., 2MB)
  //     if (file.size > 2 * 1024 * 1024) {
  //       alert('File size should be less than 2MB');
  //       return;
  //     }

  //     this.formGroup.patchValue({
  //       verificationDocument: file
  //     });
  //   }
  // }
}