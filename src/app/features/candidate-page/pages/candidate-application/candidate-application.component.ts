import { Component, OnInit } from '@angular/core';

export type ApplicationStatus = 'Applied' | 'Under Review' | 'Interviewing' | 'Offer Extended' | 'Rejected';

export interface JobApplication {
  id: string;
  jobTitle: string;
  department: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  appliedDate: Date;
  status: ApplicationStatus;
  lastUpdated: Date;
}

@Component({
  selector: 'app-candidate-application',
  templateUrl: './candidate-application.component.html',
  styleUrls: ['./candidate-application.component.scss']
})
export class CandidateApplicationComponent implements OnInit {
  
  // Hardcoded data structured as it would arrive from a standardized API
  applications: JobApplication[] = [
    {
      id: 'APP-1042',
      jobTitle: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Pune, Maharashtra',
      workMode: 'Hybrid',
      appliedDate: new Date(2026, 2, 15),
      status: 'Interviewing',
      lastUpdated: new Date(2026, 2, 28)
    },
    {
      id: 'APP-1099',
      jobTitle: 'Full Stack Developer (.NET/Angular)',
      department: 'Product',
      location: 'Bangalore, Karnataka',
      workMode: 'Remote',
      appliedDate: new Date(2026, 2, 20),
      status: 'Under Review',
      lastUpdated: new Date(2026, 2, 25)
    },
    {
      id: 'APP-0981',
      jobTitle: 'UI/UX Designer',
      department: 'Design',
      location: 'Mumbai, Maharashtra',
      workMode: 'On-site',
      appliedDate: new Date(2026, 1, 10),
      status: 'Rejected',
      lastUpdated: new Date(2026, 1, 15)
    },
    {
      id: 'APP-1102',
      jobTitle: 'Lead Software Architect',
      department: 'Architecture',
      location: 'Pune, Maharashtra',
      workMode: 'Hybrid',
      appliedDate: new Date(2026, 2, 28),
      status: 'Applied',
      lastUpdated: new Date(2026, 2, 28)
    }
  ];

  filteredApplications: JobApplication[] = [];
  activeFilter: 'All' | 'Active' | 'Archived' = 'All';

  ngOnInit(): void {
    // Initialize the view. In production, this would be a subscription to your ApplicationService.
    this.applyFilter('All');
  }

  // Architectural Best Practice: Always include front-end filtering capabilities
  // to reduce unnecessary API calls when navigating states.
  applyFilter(filter: 'All' | 'Active' | 'Archived'): void {
    this.activeFilter = filter;
    
    if (filter === 'All') {
      this.filteredApplications = [...this.applications];
    } else if (filter === 'Active') {
      this.filteredApplications = this.applications.filter(app => 
        app.status !== 'Rejected' && app.status !== 'Offer Extended'
      );
    } else {
      this.filteredApplications = this.applications.filter(app => 
        app.status === 'Rejected' || app.status === 'Offer Extended'
      );
    }
  }

  // Helper method to assign CSS classes dynamically based on domain status
  getStatusClass(status: ApplicationStatus): string {
    const classMap: Record<ApplicationStatus, string> = {
      'Applied': 'status-applied',
      'Under Review': 'status-review',
      'Interviewing': 'status-interview',
      'Offer Extended': 'status-offer',
      'Rejected': 'status-rejected'
    };
    return classMap[status];
  }
}