import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../services/resume-parse.service';

interface ProjectDetails {
  description: string;
  role: string;
  startDate: string;
  endDate: string;
}

interface ProjectRecord {
  id: number;
  title: string;
  category: string;
  months: number | null;
  teamSize: number | null;
  clientInfo: string;
  details: ProjectDetails;
}

@Component({
  selector: 'app-candidate-projects',
  templateUrl: './candidate-projects.component.html',
  styleUrls: ['./candidate-projects.component.scss']
})
export class CandidateProjectsComponent implements OnInit, OnDestroy {
  newProject: Partial<ProjectRecord> = {};
  projects: ProjectRecord[] = [];

  showDetailsModal: boolean = false;
  activeProject: ProjectRecord | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private resumeParseService: ResumeParseService
  ) {}

  ngOnInit(): void {
    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (!data || !data.projects?.length) return;

        // Map parsed projects → ProjectRecord[]
        const parsedProjects: ProjectRecord[] = data.projects
          .filter(p => p.projectTitle)
          .map(p => ({
            id: Date.now() + Math.random(),
            title: p.projectTitle ?? '',
            category: p.category ?? '',
            months: p.durationMonths ?? null,
            teamSize: p.teamSize ?? null,
            clientInfo: p.briefInfo ?? '',
            details: {
              role: p.projectRole ?? '',
              description: p.briefInfo ?? '',
              // startDate "YYYY-MM-DD" → "YYYY-MM"
              startDate: p.startDate
                ? p.startDate.substring(0, 7)
                : '',
              endDate: p.endDate
                ? p.endDate.substring(0, 7)
                : ''
            }
          }));

        this.projects = [
          ...parsedProjects,
          ...this.projects.filter(p => p.id < 0)
        ];
      });
  }

  addProject(): void {
    if (this.newProject.title) {
      this.projects.push({
        id: -Date.now(),
        title: this.newProject.title,
        category: this.newProject.category || '',
        months: this.newProject.months || null,
        teamSize: this.newProject.teamSize || null,
        clientInfo: this.newProject.clientInfo || '',
        details: { description: '', role: '', startDate: '', endDate: '' }
      });
      this.newProject = {};
    }
  }

  removeProject(index: number): void {
    this.projects.splice(index, 1);
  }

  openDetailsModal(project: ProjectRecord): void {
    this.activeProject = project;
    this.showDetailsModal = true;
  }

  closeDetailsModal(): void {
    this.showDetailsModal = false;
    this.activeProject = null;
  }

  saveProjectDetails(): void {
    console.log('Saved details for:', this.activeProject?.title);
    this.closeDetailsModal();
  }

  submitCompleteProfile(): void {
    const payload = { projects: this.projects };
    console.log('Submitting:', payload);
    this.http.post('http://localhost:5168/api/submit-candidate-profile', payload)
      .subscribe({
        next: (res) => { console.log('Success:', res); alert('Profile submitted!'); },
        error: (err) => { console.error('Error:', err); alert('Submission failed.'); }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}