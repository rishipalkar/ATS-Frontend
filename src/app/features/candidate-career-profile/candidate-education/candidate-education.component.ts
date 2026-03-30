import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../services/resume-parse.service';

// Models (DTO)
import {
  ResumeParseResponse,
  EducationParsed,
} from 'src/app/models/resume-parse.model';

interface EducationDocument {
  degreeCertificate?: File | null;
  transcript?: File | null;
}

interface EducationRecord {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  score: string;
  documents: EducationDocument;
  isParsed?: boolean;
}

@Component({
  selector: 'app-candidate-education',
  templateUrl: './candidate-education.component.html',
  styleUrls: ['./candidate-education.component.scss'],
})
export class CandidateEducationComponent implements OnInit, OnDestroy {
  /* =========================
     STATE
     ========================= */
  educationHistory: EducationRecord[] = [];
  newRecord: Partial<EducationRecord> = {};

  showDocumentModal: boolean = false;
  activeRecordForDocs: EducationRecord | null = null;
  activeRecordIndex: number | null = null;

  private destroy$ = new Subject<void>();

  constructor(private resumeParseService: ResumeParseService) {}

  /* =========================
     INIT (PARSER SUBSCRIPTION)
     ========================= */
  ngOnInit(): void {
    console.log(
      ' Education component initialized, subscribing to parsedResume$',
    );

    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: ResumeParseResponse | null) => {
          console.log('Parsed Resume:', data);
          console.log(' Education received data:', data);
          console.log(' Educations array:', data?.educations);

          if (!data?.educations?.length){
            console.log('🎓 No educations found in parsed data');
            return;} 
          const mappedRecords = data.educations
            .map((e) => this.mapParsedEducation(e))
            .filter((e): e is EducationRecord => !!e);

          const existingKeys = new Set(
            this.educationHistory.map((r) => this.generateKey(r)),
          );

          const uniqueRecords = mappedRecords.filter((r) => {
            const key = this.generateKey(r);
            if (existingKeys.has(key)) return false;
            existingKeys.add(key);
            return true;
          });

          this.educationHistory = [...this.educationHistory, ...uniqueRecords];
        },
        error: (err) => console.error('Parser Error:', err),
      });
  }

  /* =========================
     MAPPING LAYER (CRITICAL)
     ========================= */
  private mapParsedEducation(e: EducationParsed): EducationRecord | null {
    if (!e.courseTitle && !e.schoolCollegeName && !e.universityExamBody)
      return null;

    return {
      id: crypto.randomUUID(),

      degree: this.normalizeDegree(e.courseTitle),
      institution: this.normalizeInstitution(
        e.schoolCollegeName,
        e.universityExamBody,
      ),

      fieldOfStudy: e.areasOfSpecialization?.[0] || '',
      startDate: '',
      endDate: this.normalizeDate(e.completionDate),
      score: e.scoreGrade || '',

      documents: {
        degreeCertificate: null,
        transcript: null,
      },

      isParsed: true,
    };
  }

  /* =========================
     NORMALIZATION HELPERS
     ========================= */
  private normalizeDegree(course: string | null): string {
    if (!course) return 'Education';

    const text = course.toLowerCase();

    if (text.includes('10') || text.includes('ssc')) return '10th';
    if (text.includes('12') || text.includes('hsc')) return '12th';
    if (text.includes('b.tech') || text.includes('bachelor'))
      return 'Bachelor Degree';
    if (text.includes('master') || text.includes('mba')) return 'Master Degree';

    return course;
  }

  private normalizeInstitution(
    school: string | null,
    university: string | null,
  ): string {
    return school || university || 'Unknown Institution';
  }

  private normalizeDate(date: string | null): string {
    return date ? date.substring(0, 7) : '';
  }

  private generateKey(record: EducationRecord): string {
    return `${record.degree}-${record.institution}`.toLowerCase();
  }

  /* =========================
     USER ACTIONS
     ========================= */
  addEducation(): void {
    if (this.newRecord.institution && this.newRecord.degree) {
      this.educationHistory = [
        ...this.educationHistory,
        {
          id: crypto.randomUUID(),
          institution: this.newRecord.institution,
          degree: this.newRecord.degree,
          fieldOfStudy: this.newRecord.fieldOfStudy || '',
          startDate: this.newRecord.startDate || '',
          endDate: this.newRecord.endDate || '',
          score: this.newRecord.score || '',
          documents: {
            degreeCertificate: null,
            transcript: null,
          },
          isParsed: false,
        },
      ];

      this.newRecord = {};
    }
  }

  removeEducation(index: number): void {
    this.educationHistory = this.educationHistory.filter((_, i) => i !== index);
  }

  /* =========================
     MODAL HANDLING
     ========================= */
  openUploadModal(index: number): void {
    this.activeRecordIndex = index;
    this.activeRecordForDocs = this.educationHistory[index];
    this.showDocumentModal = true;
  }

  closeUploadModal(): void {
    this.showDocumentModal = false;
    this.activeRecordForDocs = null;
    this.activeRecordIndex = null;
  }

  /* =========================
     FILE HANDLING (TYPE SAFE)
     ========================= */
  onFileSelected(event: Event, type: 'degree' | 'transcript'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file || !this.activeRecordForDocs) return;

    if (type === 'degree') {
      this.activeRecordForDocs.documents.degreeCertificate = file;
    }

    if (type === 'transcript') {
      this.activeRecordForDocs.documents.transcript = file;
    }
  }

  /* =========================
     CLEANUP
     ========================= */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
