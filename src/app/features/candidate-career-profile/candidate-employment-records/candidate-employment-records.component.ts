import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../services/resume-parse.service';

interface EmploymentDocument {
  roleAtJoining: string;
  locationAtJoining: string;
  lastCtc: string;
  appointmentLetter?: File | null;
  relievingLetter?: File | null;
  experienceCertificate?: File | null;
}

interface EmploymentRecord {
  id: number;
  organization: string;
  jobRole: string;
  workLocation: string;
  fromDate: string;
  toDate: string;
  documents: EmploymentDocument;
}

@Component({
  selector: 'app-candidate-employment-records',
  templateUrl: './candidate-employment-records.component.html',
  styleUrls: ['./candidate-employment-records.component.scss']
})
export class CandidateEmploymentRecordsComponent implements OnInit, OnDestroy {
  newRecord: Partial<EmploymentRecord> = {};
  employmentHistory: EmploymentRecord[] = [];

  showDocumentModal: boolean = false;
  activeRecordForDocs: EmploymentRecord | null = null;

  private destroy$ = new Subject<void>();

  constructor(private resumeParseService: ResumeParseService) {}

  ngOnInit(): void {
    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (!data || !data.employments?.length) return;

        // Map parsed employments → EmploymentRecord[]
        const parsedRecords: EmploymentRecord[] = data.employments
          .filter(e => e.organizationName || e.jobRole)
          .map(e => ({
            id: Date.now() + Math.random(),
            organization: e.organizationName ?? '',
            jobRole: e.jobRole ?? '',
            workLocation: e.workLocation ?? '',

            // fromDate "YYYY-MM-DD" → "YYYY-MM" for month input
            fromDate: e.fromDate
              ? e.fromDate.substring(0, 7)
              : '',
            toDate: e.toDate
              ? e.toDate.substring(0, 7)
              : '',

            documents: {
              roleAtJoining: e.jobRole ?? '',
              locationAtJoining: e.workLocation ?? '',
              lastCtc: ''
            }
          }));

        this.employmentHistory = [
          ...parsedRecords,
          ...this.employmentHistory.filter(r => r.id < 0)
        ];
      });
  }

  addEmployment(): void {
    if (this.newRecord.organization && this.newRecord.jobRole) {
      this.employmentHistory.push({
        id: -Date.now(),
        organization: this.newRecord.organization,
        jobRole: this.newRecord.jobRole,
        workLocation: this.newRecord.workLocation || '',
        fromDate: this.newRecord.fromDate || '',
        toDate: this.newRecord.toDate || '',
        documents: {
          roleAtJoining: '',
          locationAtJoining: '',
          lastCtc: ''
        }
      });
      this.newRecord = {};
    }
  }

  removeEmployment(index: number): void {
    this.employmentHistory.splice(index, 1);
  }

  openUploadModal(record: EmploymentRecord): void {
    this.activeRecordForDocs = record;
    this.showDocumentModal = true;
  }

  closeUploadModal(): void {
    this.showDocumentModal = false;
    this.activeRecordForDocs = null;
  }

  onFileSelected(
    event: any,
    documentType: 'appointment' | 'relieving' | 'experience'
  ): void {
    const file = event.target.files[0];
    if (file && this.activeRecordForDocs) {
      if (documentType === 'appointment')
        this.activeRecordForDocs.documents.appointmentLetter = file;
      if (documentType === 'relieving')
        this.activeRecordForDocs.documents.relievingLetter = file;
      if (documentType === 'experience')
        this.activeRecordForDocs.documents.experienceCertificate = file;
    }
  }

  saveDocuments(): void {
    console.log('Saved documents for:', this.activeRecordForDocs?.organization);
    this.closeUploadModal();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}