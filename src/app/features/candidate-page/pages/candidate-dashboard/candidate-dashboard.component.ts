import { Component, OnInit } from '@angular/core';

interface Job {
  role: string;
  experience: string;
  type: string;
  description: string;
  skills: string[];
  location: string;
}

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {
  
  // Search query bound via [(ngModel)]
  searchQuery: string = '';

  // The "Source of Truth" - This never changes
  allJobs: Job[] = [
    {
      role: 'Frontend Developer',
      experience: '0-2 Years',
      type: 'Full-time',
      description: 'Design and implement UI components for a modern ATS platform using Angular and SCSS.',
      skills: ['Angular', 'TypeScript', 'SCSS'],
      location: 'Remote'
    },
    {
      role: 'UI Engineer Intern',
      experience: 'Fresher',
      type: 'Internship',
      description: 'Work closely with UX designers to build interactive prototypes and maintain design systems.',
      skills: ['React', 'Figma', 'Tailwind'],
      location: 'Pune'
    },
    {
      role: 'Backend Developer',
      experience: '3-5 Years',
      type: 'Full-time',
      description: 'Develop scalable microservices and manage PostgreSQL databases for high-traffic applications.',
      skills: ['Node.js', 'PostgreSQL', 'Docker'],
      location: 'Bangalore'
    }
  ];

  // The list actually rendered in the HTML (*ngFor="let job of filteredJobs")
  filteredJobs: Job[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize the list with all jobs on page load
    this.filteredJobs = [...this.allJobs];
  }

  /**
   * Called on every keystroke in the search bar
   */
  onSearchChange(): void {
    const query = this.searchQuery.toLowerCase().trim();

    if (!query) {
      this.filteredJobs = [...this.allJobs];
      return;
    }

    this.filteredJobs = this.allJobs.filter(job => {
      return (
        job.role.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    });
  }

  /**
   * Placeholder for the Apply Now button logic
   */
  applyToJob(jobRole: string): void {
    console.log(`Applying for: ${jobRole}`);
    // You can navigate to the application form or show a success toast here
    alert(`Application submitted for ${jobRole}!`);
  }
}