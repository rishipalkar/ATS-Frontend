import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { EventService } from 'src/app/services/single-event.service';
import { EventResponse } from 'src/app/models/event.model';
// ✅ Match backend response
import { JobPosting } from 'src/app/models/job.model'; // ✅ Match backend response
import { JobsDetailsService } from 'src/app/services/job-details.service';
import { JobDetailsResponse } from 'src/app/models/job-details.model';
@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss'],
})
export class CandidateDashboardComponent implements OnInit {
  availableJobs: JobPosting[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  events: EventResponse[] = [];
  selectedJob: JobDetailsResponse | null = null;
  showJobModal: boolean = false;
  isLoadingJob: boolean = false;

  private formatDate(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`; // ✅ SAFE // REQUIRED FORMAT
  }
  constructor(
    private http: HttpClient,
    private searchService: SearchService,
    private eventService: EventService,
    private jobsService: JobsDetailsService
  ) {}

  ngOnInit(): void {
    this.fetchLiveJobs();

    // Listen to navbar search
    this.searchService.search$.subscribe((query) => {
      this.handleSearch(query);
    });
  }

  //  Fetch all jobs
  fetchLiveJobs(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const apiUrl = 'http://localhost:5168/api/jobs'; // ✅ FIXED

    this.http.get<JobPosting[]>(apiUrl).subscribe({
      next: (response) => {
        this.availableJobs = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('API Error:', error);
        this.errorMessage = 'Could not load job postings.';
        this.isLoading = false;
      },
    });
  }

  //  Handle search from navbar
  handleSearch(query: string): void {
    if (!query || !query.trim()) {
      this.fetchLiveJobs(); // reset
      return;
    }

    this.isLoading = true;

    const apiUrl = `http://localhost:5168/api/job/search?query=${query}`;

    this.http.get<JobPosting[]>(apiUrl).subscribe({
      next: (response) => {
        this.availableJobs = response;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Search failed';
        this.isLoading = false;
      },
    });
  }
  onDateSelected(date: Date): void {
    const formattedDate = this.formatDate(date);

    // console.log('======================');
    // console.log('Clicked Date Object:', date);
    // console.log('Formatted Date Sent:', formattedDate);

    // IMPORTANT: reset state first
    this.events = [];

    this.eventService.getEventsByDate(formattedDate).subscribe({
      next: (res) => {
        console.log('API Response:', res);

        // Ensure array even if null
        this.events = [...(res || [])];
      },
      error: (err) => {
        console.error('API Error:', err);
        this.events = [];
      },
    });
  }
  openJobDetails(jobId: string): void {
  this.isLoadingJob = true;
  this.showJobModal = true;

  this.jobsService.getJobDetails(jobId)
    .subscribe({
      next: (res) => {
        this.selectedJob = res;
        this.isLoadingJob = false;
      },
      error: (err) => {
        console.error('Failed to fetch job details', err);
        this.isLoadingJob = false;
      }
    });
  }
closeJobModal(): void {
  this.showJobModal = false;
  this.selectedJob = null;
}
}
