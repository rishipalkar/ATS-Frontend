import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-login-page',
  templateUrl: './candidate-login-page.component.html',
  styleUrls: ['./candidate-login-page.component.scss']
})
export class CandidateLoginPageComponent {
  loginMode: 'email' | 'phone' = 'email'; // Toggle state

  constructor(private router: Router) {}

  setLoginMode(mode: 'email' | 'phone') {
    this.loginMode = mode;
  }

  // Static navigation for UI testing
  onLogin() {
    this.router.navigate(['/candidate-application/form']);
  }
}