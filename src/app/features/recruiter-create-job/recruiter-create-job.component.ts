import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../services/recruiter/create-job.service';

@Component({
  selector: 'app-recruiter-create-job',
  templateUrl: './recruiter-create-job.component.html',
  styleUrls: ['./recruiter-create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {
  jobForm: FormGroup;
  currentStep: number = 1; // 1: JD Generation, 2: Security/Details
  isGenerating: boolean = false;
  uploadedFileName: string | null = null;
  isPublishing: boolean = false;
  showSuccessModal: boolean = false;
  publishedJobDetails: any = null;

  constructor(
    private jobService: JobService,
    private fb: FormBuilder,
    private router: Router,
  ) {
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
      workHoursStart: ['', Validators.required],
      workHoursEnd: ['', Validators.required],
      isShiftDuty: [false, Validators.required],
      requiredEducation: ['', Validators.required],
      minExperience: ['', Validators.required],
      grossPackage: ['', Validators.required],
      joiningPeriod: ['', Validators.required],
      maxAge: [''], // Optional
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
        challenges:
          'Building a consistent design system across 4 distinct recruiter platforms.',
        benefits: 'Unlimited PTO, Health & Wellness stipend, Remote Work.',
        culture: 'Design-driven, engineering-led, and highly collaborative.',
      });
      this.isGenerating = false;
    }, 1200);
  }

 onSubmit() {
    if (this.jobForm.valid) {
      this.isPublishing = true; // Disable button and show loading text
      
      this.jobService.createJob(this.jobForm.value).subscribe({
        next: (response) => {
          console.log('Job Successfully Created:', response);
          alert('Job Successfully Published!');
          this.isPublishing = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error publishing job:', error);
          alert('There was an error publishing the job. Please try again.');
          this.isPublishing = false;
        }
      });
    } else {
      // Optional: mark all fields as touched to show validation errors
      this.jobForm.markAllAsTouched();
    }
  }

  closeModalAndNavigate() {
    this.showSuccessModal = false;
    this.router.navigate(['/dashboard']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.uploadedFileName = file.name;
      this.isGenerating = true; // Show loading state while "parsing"

      // Simulated Parsing Logic
      setTimeout(() => {
        this.jobForm.patchValue({
          jobTitle: 'Backend Developer (Parsed)',
          jobRole: 'Engineering',
          skills: 'Node.js, Express, MongoDB, AWS, Redis',
          challenges:
            'Extracted from uploaded document: Managing high-concurrency requests and database optimization.',
          benefits:
            'Parsed from file: Remote work, flexible hours, health insurance.',
          culture:
            'Extracted: High-growth startup environment with a focus on ownership.',
        });
        this.isGenerating = false;
      }, 1500);
    }
  }

  removeFile() {
    this.uploadedFileName = null;
    this.jobForm.reset();
  }
}
