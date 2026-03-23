import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['candidate', Validators.required], // Default selection
      // Recruiter-only fields
      companyName: [''],
      employeeId: ['']
    });
  }

  ngOnInit(): void {
    // Watch for role changes to update validation rules
    this.signupForm.get('userType')?.valueChanges.subscribe(role => {
      this.toggleRecruiterFields(role);
    });
  }

  private toggleRecruiterFields(role: string): void {
    const company = this.signupForm.get('companyName');
    const empId = this.signupForm.get('employeeId');

    if (role === 'recruiter') {
      company?.setValidators([Validators.required]);
      empId?.setValidators([Validators.required]);
    } else {
      company?.clearValidators();
      empId?.clearValidators();
      company?.reset();
      empId?.reset();
    }
    company?.updateValueAndValidity();
    empId?.updateValueAndValidity();
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      this.isLoading = true;
      console.log('Registration Data:', this.signupForm.value);
      
      // Simulated API call
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      }, 1500);
    }
  }
}