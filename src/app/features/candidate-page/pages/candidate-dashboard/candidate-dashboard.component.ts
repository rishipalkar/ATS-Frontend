import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { EventService } from 'src/app/services/single-event.service';
import { EventResponse } from 'src/app/models/event.model';
// ✅ Match backend response
import { JobPosting } from 'src/app/models/job.model'; // ✅ Match backend response


@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {

  availableJobs: JobPosting[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  events: EventResponse[] = [];


  constructor(
    private http: HttpClient,
    private searchService: SearchService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.fetchLiveJobs();

    // 🔥 Listen to navbar search
    this.searchService.search$.subscribe((query) => {
      this.handleSearch(query);
    });
  }

  // ✅ Fetch all jobs
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
      }
    });
  }

  // 🔥 Handle search from navbar
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
      }
    });
  }
  handleDateSelect(date: Date) {
  this.isLoading = true;

  const formattedDate = date.toISOString();

  this.eventService.getEventsByDate(formattedDate)
    .subscribe({
      next: (res) => {
        this.events = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching events', err);
        this.events = [];
        this.isLoading = false;
      }
    });
}
  
}