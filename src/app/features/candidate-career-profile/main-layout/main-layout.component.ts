import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../services/resume-parse.service';
import { ResumeParseResponse } from '../../../models/resume-parse.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  completionPercentage: number = 20;

  // Upload state
  isUploading: boolean = false;
  uploadError: string | null = null;
  uploadSuccess: boolean = false;

  // Parsed data — drives the sidebar preview section (*ngIf="parsedData")
  parsedData: ResumeParseResponse | null = null;

  // Sidebar preview fields — bound via [(ngModel)] in your existing HTML
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  linkedInUrl: string = '';
  totalExperienceYears: number | null = null;
  presentEmploymentStatus: string = '';
  aiSummary: string = '';
  skills: string[] = [];
  educations: any[] = [];
  employments: any[] = [];
  projects: any[] = [];
  responsibilities: any[] = [];

  // Replace with real candidateId from your auth service
  private candidateId = 'temp-candidate-001';
  private destroy$ = new Subject<void>();

  constructor(private resumeParseService: ResumeParseService) {}

  ngOnInit(): void {
    // Drive the spinner on the upload button
    this.resumeParseService.isUploading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => this.isUploading = state);

    // When parse completes — fill sidebar preview AND trigger child components
    // Child components (education, employment, projects, skills, personal details)
    // each subscribe to parsedResume$ on their own ngOnInit
    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (!data) return;

        this.parsedData             = data;
        this.uploadSuccess          = true;
        this.completionPercentage   = 60;

        // Prefill sidebar preview fields
        this.firstName              = data.firstName              ?? '';
        this.lastName               = data.lastName               ?? '';
        this.email                  = data.email                  ?? '';
        this.phoneNumber            = data.phoneNumber            ?? '';
        this.city                   = data.city                   ?? '';
        this.state                  = data.state                  ?? '';
        this.country                = data.country                ?? '';
        this.linkedInUrl            = data.linkedInUrl            ?? '';
        this.totalExperienceYears   = data.totalExperienceYears   ?? null;
        this.presentEmploymentStatus = data.presentEmploymentStatus ?? '';
        this.aiSummary              = data.aiSummary              ?? '';
        this.skills                 = data.skills                 ?? [];
        this.educations             = data.educations             ?? [];
        this.employments            = data.employments            ?? [];
        this.projects               = data.projects               ?? [];
        this.responsibilities       = data.responsibilities       ?? [];

        console.log('✅ Sidebar prefilled. Child components prefilling via BehaviorSubject.');
      });
  }

  onFileSelected(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    // Validate PDF only
    if (file.type !== 'application/pdf') {
      this.uploadError = 'Only PDF files are accepted.';
      return;
    }

    // Validate 5MB max
    if (file.size > 5 * 1024 * 1024) {
      this.uploadError = 'File must be under 5MB.';
      return;
    }

    this.uploadError   = null;
    this.uploadSuccess = false;

    console.log('📄 Uploading:', file.name);

    this.resumeParseService.uploadAndParse(file, this.candidateId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => console.log('✅ Resume parsed successfully:', res),
        error: (err) => {
          console.error('❌ Parse error:', err);
          this.uploadError = 'Failed to parse resume. Please try again.';
        }
      });
  }

  saveAllChanges(): void {
    console.log('Saving all profile data...', this.parsedData);
    // TODO: call CandidateService.submitProfile()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}