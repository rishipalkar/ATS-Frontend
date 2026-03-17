import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidators {
  static linkedInUrl(): ValidatorFn {
    const linkedInPattern = /^https:\/\/(www\.)?linkedin\.com\/(in|pub|company)\/.+/i;

    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      return linkedInPattern.test(control.value)
        ? null
        : { linkedInUrl: true };
    };
  }

  static panNumber(): ValidatorFn {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      return panPattern.test(control.value.toUpperCase()) ? null : { panNumber: true };
    };
  }

  static aadhaarNumber(): ValidatorFn {
    const aadhaarPattern = /^\d{12}$/;

    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      return aadhaarPattern.test(control.value) ? null : { aadhaarNumber: true };
    };
  }
}