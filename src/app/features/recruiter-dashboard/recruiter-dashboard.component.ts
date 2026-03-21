import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';   
@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.scss']
})
export class RecruiterDashboardComponent implements OnInit {
  selectedEvent: any = null;
  searchQuery: string = '';
  isSearchingCandidates: boolean = false;
  isFilterOpen: boolean = false;
  searchScope:string='all';

  activeJobs = [
    { role: 'Senior Frontend Developer', location: 'Pune / Remote', totalCandidates: 45, shortlisted: 12, interviewed: 5, postedDate: 'March 10, 2026', status: 'Active' },
    { role: 'Backend Engineer (Node.js)', location: 'Bangalore', totalCandidates: 32, shortlisted: 8, interviewed: 2, postedDate: 'March 15, 2026', status: 'Urgent' }
  ];
  filteredJobs = [...this.activeJobs];

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
    this.filteredCandidates = [...this.allCandidates];
  }
  constructor(private router: Router) {}

goToCreateJob() {
  // Do some logic here...
  this.router.navigate(['recruiter/create-job']);
}
  onSearchChange(): void {
    const query = this.searchQuery.toLowerCase().trim();
    
    this.filteredJobs = this.activeJobs.filter(job => job.role.toLowerCase().includes(query));

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