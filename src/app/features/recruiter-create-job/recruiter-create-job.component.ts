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
      // jobTitle: ['', Validators.required],
      createdBy: ['a6ae0232-e6a2-4877-8ff8-72ed38e1e49b'],
      jobRole: ['', Validators.required],
      skills: ['', Validators.required],
      jobDescription: ['', Validators.required],
      challenges: [''],
      benefits: [''],
      culture: [''],

      // Step 2: Security & Hiring Details
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
      jobExpiryDate: ['', Validators.required],
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

  private buildCreateJobPayload(): any {
  const form = this.jobForm.value;

  // Optional: Ensure the date is in a full ISO format if your backend requires it
  let formattedExpiryDate = form.jobExpiryDate;
  if (formattedExpiryDate && !formattedExpiryDate.includes('T')) {
    // Appends time to make it a valid ISO string format if it's just 'YYYY-MM-DD'
    formattedExpiryDate = `${formattedExpiryDate}T23:59:59.000Z`; 
  }

  return {
    createdBy: form.createdBy,
    rolePosition: form.jobRole,
    numberOfOpenings: Number(form.openingsCount) || 1, // Cast to Number
    workModel: form.workModel,
    workLocation: form.workLocation,
    workHoursStart: form.workHoursStart,
    workHoursEnd: form.workHoursEnd,
    isShiftDuty: form.isShiftDuty,
    isRotationalShift: false,
    requiredEducation: form.requiredEducation,
    
    // Cast string inputs to Numbers to match your Postman payload
    minExperienceYears: Number(form.minExperience) || 0,
    joiningPeriodDays: Number(form.joiningPeriod) || 0,
    
    // Handle optional fields: send null instead of "" so the backend integer validation doesn't fail
    maxAgeYears: form.maxAge ? Number(form.maxAge) : null,
    
    jobDescription: form.jobDescription,
    requiredSkills: form.skills,
    preferredSkills: '',
    responsibilities: '',
    challenges: form.challenges,
    benefitsWorkCulture: `${form.benefits} ${form.culture}`.trim(),
    jobExpiryDate: formattedExpiryDate
  };
}

 onSubmit() {
    if (this.jobForm.valid) {
      this.isPublishing = true; // Disable button and show loading text
      
      const payload = this.buildCreateJobPayload();
      console.log(payload);

      this.jobService.createJob(payload).subscribe({
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
