import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';   
import { RecruiterJobsService } from '../../services/recruiter/jobs.service';
import { Job, JobDetails } from 'src/app/models/job.model';
@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.scss']
})
export class RecruiterDashboardComponent implements OnInit {
  isModalOpen: boolean = false;
  isLoadingDetails: boolean = false;
  selectedJobDetails: JobDetails | null = null;
  selectedEvent: any = null;
  searchQuery: string = '';
  isSearchingCandidates: boolean = false;
  isFilterOpen: boolean = false;
  searchScope:string='all';

  activeJobs: Job[] = [];
  filteredJobs: Job[] = [];

  allCandidates = [
    { name: 'Hrishikesh M.', role: 'Frontend Developer', experience: '2 Years', skills: ['Angular', 'SCSS'], status: 'Screening' },
    { name: 'Aastha Shah', role: 'UI Engineer', experience: '1 Year', skills: ['Figma', 'React'], status: 'Interviewing' },
    { name: 'John Doe', role: 'Backend Developer', experience: '4 Years', skills: ['Node.js', 'PostgreSQL'], status: 'Applied' }
  ];
  filteredCandidates: any[] = [];

  interviews: any = {
    '2026-03-25': { candidate: 'Aastha Sharma', time: '11:00 AM', task: 'Technical Round 1', meetLink: 'https://meet.google.com' },
    '2026-03-28': { candidate: 'Rohan Verma', time: '02:30 PM', task: 'System Design Interview', meetLink: 'https://meet.google.com' }
  };

  ngOnInit() {
    // this.filteredCandidates = [...this.allCandidates];
    this.loadJobs();
    
  }
  constructor(private router: Router, private jobService: RecruiterJobsService) {}

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (response) => {
        // Map the API data and append mock stats for the UI
        this.activeJobs = response.data.map(job => ({
          ...job,
          totalCandidates: Math.floor(Math.random() * 50), // Mock data
          shortlisted: Math.floor(Math.random() * 15),     // Mock data
          interviewed: Math.floor(Math.random() * 5)       // Mock data
        }));
        this.filteredJobs = [...this.activeJobs];
      },
      error: (error) => {
        console.error('Error fetching jobs:', error);
      }
    });
  }

  openJobDetails(jobId: string) {
    this.isModalOpen = true;
    this.isLoadingDetails = true;
    
    console.log("Opening details for job ID:", jobId);

    this.jobService.getJobById(jobId).subscribe({
    next: (response: JobDetails) => {
      this.selectedJobDetails = response;
      this.isLoadingDetails = false;
    },
    error: (err) => {
      console.error('Error fetching job details:', err);
      this.isLoadingDetails = false;
      // Optional: Add logic here to show an error message in the UI
    }
  });
  }

  closeModal() {
  this.isModalOpen = false;
  this.selectedJobDetails = null;
}

goToCreateJob() {
  // Do some logic here...
  this.router.navigate(['recruiter/create-job']);
}

  onSearchChange(): void {
    const query = this.searchQuery.toLowerCase().trim();
    
    this.filteredJobs = this.activeJobs.filter(job => job.rolePosition.toLowerCase().includes(query));

    if (query.length > 2) {
      this.isSearchingCandidates = true;
      this.filteredCandidates = this.allCandidates.filter(c => 
        c.role.toLowerCase().includes(query) || c.skills.some(s => s.toLowerCase().includes(query))
      );
    } else if (query.length === 0) {
      this.isSearchingCandidates = false;
    }
  }

  viewFullPage(): void {
    this.isSearchingCandidates = false;
    this.searchQuery = '';
    this.filteredJobs = [...this.activeJobs];
  }

  handleDateSelect(date: Date) {
    const dateString = date.toISOString().split('T')[0];
    this.selectedEvent = this.interviews[dateString] || null;
  }
  toggleFilters(): void {
  this.isFilterOpen = !this.isFilterOpen;
  console.log('Filter Menu Toggled:', this.isFilterOpen);
  
}
toggleFilterDropdown(event: Event) {
  event.stopPropagation(); // Prevents immediate closing
  this.isFilterOpen = !this.isFilterOpen;
}

setSearchScope(scope: string) {
  this.searchScope = scope;
  this.isFilterOpen = false;
  console.log('Searching by:', scope);
  // Trigger your search logic here based on scope
}

filterByStatus(status: string) {
  this.isFilterOpen = false;
  // Trigger your status filter logic
}

// Close dropdown if user clicks anywhere else on the screen
@HostListener('document:click')
closeDropdown() {
  this.isFilterOpen = false;
}
}