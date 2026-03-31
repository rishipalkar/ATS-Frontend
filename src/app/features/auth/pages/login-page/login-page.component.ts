import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;
loginMethod: 'email' | 'phone' = 'email';
  // Dropdown Options
  userTypes = [
    { label: 'Candidate', value: 'candidate' },
    { label: 'Recruiter', value: 'recruiter' },
    { label: 'Admin', value: 'admin' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['candidate', Validators.required] // Default to candidate
    });
  }

  setLoginMethod(method: 'email' | 'phone') {
    this.loginMethod = method;
    const emailControl = this.loginForm.get('email');
    const phoneControl = this.loginForm.get('phone');

    if (method === 'email') {
      emailControl?.setValidators([Validators.required, Validators.email]);
      phoneControl?.clearValidators();
    } else {
      phoneControl?.setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
      emailControl?.clearValidators();
    }

    emailControl?.updateValueAndValidity();
    phoneControl?.updateValueAndValidity();
  } 
  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { userType } = this.loginForm.value;

      // Simulated Authentication Delay
      setTimeout(() => {
        this.isLoading = false;
        
        // Navigation logic based on the dropdown selection
        if (userType === 'recruiter') {
          this.router.navigate(['/dashboard']);
        } else if (userType === 'candidate') {
          this.router.navigate(['/candidate/dashboard']);
        } else {
          this.router.navigate(['/admin/overview']);
        }
      }, 1200);
    }
  }
}