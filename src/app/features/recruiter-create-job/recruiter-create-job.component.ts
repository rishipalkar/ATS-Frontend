import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-create-job',
  templateUrl: './recruiter-create-job.component.html',
  styleUrls: ['./recruiter-create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  jobForm: FormGroup;
  currentStep: number = 1; // 1: JD Generation, 2: Security/Details
  isGenerating: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.jobForm = this.fb.group({
      // Step 1: JD Fields
      jobTitle: ['', Validators.required],
      jobRole: ['', Validators.required],
      skills: ['', Validators.required],
      challenges: [''],
      benefits: [''],
      culture: [''],

      // Step 2: Security & Hiring Details
      rolePosition: ['', Validators.required],
      openingsCount: [1, [Validators.required, Validators.min(1)]],
      workModel: ['On-site', Validators.required],
      workLocation: ['', Validators.required],
      workHours: ['', Validators.required],
      shiftDuty: ['No', Validators.required],
      requiredEducation: ['', Validators.required],
      minExperience: ['', Validators.required],
      grossPackage: ['', Validators.required],
      joiningPeriod: ['', Validators.required],
      maxAge: [''] // Optional
    });
  }

  ngOnInit(): void {}

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
      window.scrollTo(0, 0); // Scroll to top for new view
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  generateJD() {
    this.isGenerating = true;
    setTimeout(() => {
      this.jobForm.patchValue({
        jobTitle: 'Senior UI/UX Engineer',
        jobRole: 'Full Stack Design',
        skills: 'Angular, SCSS, Figma, User Research, Prototyping',
        challenges: 'Building a consistent design system across 4 distinct recruiter platforms.',
        benefits: 'Unlimited PTO, Health & Wellness stipend, Remote Work.',
        culture: 'Design-driven, engineering-led, and highly collaborative.'
      });
      this.isGenerating = false;
    }, 1200);
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Final Job Data:', this.jobForm.value);
      alert('Job Successfully Published!');
      this.router.navigate(['/recruiter/dashboard']);
    }
  }
}